// Shared helpers for the QA commands (check-links, check-redirects).
// Plain Node, no dependencies. Requires Node 22.6+ only for the callers that
// import src/lib/redirects.ts (run them through the npm scripts).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

export const PROD_ORIGIN = "https://etriplesoft.com";
export const PROD_HOSTS = new Set(["etriplesoft.com", "www.etriplesoft.com"]);

/** Parses `--flag`, `--key=value`; BASE_URL env or --base-url selects the server. */
export function parseArgs(argv = process.argv.slice(2)) {
  const flags = new Set();
  const values = {};
  for (const arg of argv) {
    if (!arg.startsWith("--")) continue;
    const [key, ...rest] = arg.slice(2).split("=");
    if (rest.length) values[key] = rest.join("=");
    else flags.add(key);
  }
  const base = (values["base-url"] || process.env.BASE_URL || "http://localhost:3000").replace(/\/+$/, "");
  const jsonPath = values.json || (flags.has("json") ? null : undefined);
  return { flags, values, base, baseHost: new URL(base).host, json: flags.has("json") || values.json !== undefined, jsonPath: values.json };
}

export const isProdBase = (base) => PROD_HOSTS.has(new URL(base).hostname);

/** When testing a local server, absolute production URLs are mapped onto it. */
export function rebase(url, base) {
  const u = new URL(url);
  if (PROD_HOSTS.has(u.hostname) && !isProdBase(base)) return base + u.pathname + u.search;
  return u.toString();
}

export async function request(url, { method = "GET", headers = {} } = {}) {
  const res = await fetch(url, {
    method,
    redirect: "manual",
    headers: { "user-agent": "etriplesoft-qa/1.0", ...headers },
    signal: AbortSignal.timeout(20000),
  });
  return res;
}

/**
 * Follows redirects manually and records every hop.
 * Returns { chain: [{ url, status, location }], final: { url, status, res } | null, loop, tooMany }.
 */
export async function follow(url, base, { maxHops = 10, headers } = {}) {
  const chain = [];
  const seen = new Set();
  let current = url;
  for (let i = 0; i <= maxHops; i++) {
    if (seen.has(current)) return { chain, final: null, loop: true, tooMany: false };
    seen.add(current);
    const res = await request(current, { headers });
    const location = res.headers.get("location");
    if (res.status >= 300 && res.status < 400 && location) {
      await res.body?.cancel();
      chain.push({ url: current, status: res.status, location });
      current = rebase(new URL(location, current).toString(), base);
      continue;
    }
    return { chain, final: { url: current, status: res.status, res }, loop: false, tooMany: false };
  }
  return { chain, final: null, loop: false, tooMany: true };
}

// ---- tiny HTML helpers (server-rendered pages only) ----

export const decode = (s = "") =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
export const stripTags = (s) => decode(s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
export const attr = (tag, name) => {
  const m = new RegExp(`(?:^|[\\s"'])${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, "i").exec(tag);
  return m ? decode(m[2] ?? m[3]) : undefined;
};

/** Extracts what the QA checks need from a rendered HTML document. */
export function extract(html) {
  const [head, ...rest] = html.split(/<\/head>/i);
  const rawBody = rest.join("</head>");
  const bodyNoLd = rawBody.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ");
  const metas = (head.match(/<meta\b[^>]*>/gi) || []).map((tag) => ({
    key: attr(tag, "name") || attr(tag, "property"),
    content: attr(tag, "content"),
  }));
  const metaByKey = (key) => metas.find((m) => m.key === key)?.content;
  const links = (head.match(/<link\b[^>]*>/gi) || []).map((tag) => ({ rel: attr(tag, "rel"), href: attr(tag, "href") }));
  const anchors = [...bodyNoLd.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].map((m) => {
    const label = stripTags(m[2]) || attr(m[1], "aria-label") || attr(m[2].match(/<img\b[^>]*>/i)?.[0] ?? "", "alt") || "";
    return { href: attr(m[1], "href"), text: label, hasHref: /\shref\s*=/i.test(" " + m[1]) };
  });
  const ids = [...bodyNoLd.matchAll(/\sid\s*=\s*"([^"]+)"/gi)].map((m) => decode(m[1]));
  const assetUrls = [];
  for (const m of bodyNoLd.matchAll(/<(img|source|video|audio)\b[^>]*>/gi)) {
    const src = attr(m[0], "src");
    if (src) assetUrls.push(src);
    for (const part of (attr(m[0], "srcset") || "").split(",")) {
      const u = part.trim().split(/\s+/)[0];
      if (u) assetUrls.push(u);
    }
  }
  for (const m of rawBody.matchAll(/<script\b[^>]*\ssrc="([^"]+)"/gi)) assetUrls.push(decode(m[1]));
  for (const l of links) if (l.href && /stylesheet|icon|preload/.test(l.rel || "")) assetUrls.push(l.href);
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  return {
    canonical: links.find((l) => l.rel === "canonical")?.href,
    robots: metaByKey("robots"),
    metaUrls: [
      ["canonical", links.find((l) => l.rel === "canonical")?.href],
      ...["og:url", "og:image", "twitter:image"].map((k) => [k, metaByKey(k)]),
      ...links.filter((l) => /icon/.test(l.rel || "")).map((l) => ["icon", l.href]),
    ].filter(([, v]) => v),
    anchors,
    ids,
    assetUrls,
    jsonLd,
  };
}

// ---- reporting ----

export class Reporter {
  constructor() {
    this.issues = [];
  }
  add(type, severity, fields) {
    this.issues.push({ type, severity, ...fields });
  }
  count(type) {
    return this.issues.filter((i) => i.type === type).length;
  }
  get errors() {
    return this.issues.filter((i) => i.severity === "error");
  }
  get warnings() {
    return this.issues.filter((i) => i.severity === "warning");
  }
  print(format) {
    const seen = new Set();
    for (const issue of [...this.errors, ...this.warnings, ...this.issues.filter((i) => i.severity === "info")]) {
      const text = format(issue);
      if (seen.has(text)) continue;
      seen.add(text);
      console.log(text + "\n");
    }
  }
}

export function writeJson(path, data) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2));
  console.log(`JSON report written to ${path}`);
}

export async function pool(items, size, worker) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(size, items.length) }, async () => {
      while (next < items.length) {
        const index = next++;
        results[index] = await worker(items[index], index);
      }
    }),
  );
  return results;
}
