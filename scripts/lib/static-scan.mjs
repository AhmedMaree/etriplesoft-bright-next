// Source-level checks that need no running server: route definitions and
// hardcoded link problems in app/ and src/.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { provenanceLine, sourceDirs } from "./qa-config.mjs";

const root = process.cwd();
const posix = (p) => p.split(sep).join("/");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next") continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

/** Routes defined by app/**\/page.tsx. Dynamic segments are kept as [param]. */
export function appRoutes() {
  const routes = [];
  for (const file of walk(join(root, "app"))) {
    if (!/[\\/]page\.(tsx|ts|jsx|js)$/.test(file)) continue;
    const segments = posix(relative(join(root, "app"), file)).split("/").slice(0, -1).filter((s) => !/^\(.*\)$/.test(s));
    routes.push({ route: "/" + segments.join("/"), dynamic: segments.some((s) => s.startsWith("[")), file: posix(relative(root, file)) });
  }
  return routes;
}

/** Keys of the `pages` registry that app/[slug]/page.tsx serves. */
export function catchAllSlugs() {
  const file = "src/lib/page-seo.ts";
  const text = readFileSync(join(root, file), "utf8");
  const start = text.indexOf("export const pages");
  const end = text.indexOf("\n};", start);
  const block = text.slice(start, end);
  return [...block.matchAll(/^  (?:"([^"]+)"|([A-Za-z0-9_]+)):\s*\{/gm)].map((m) => ({ slug: m[1] || m[2], file }));
}

/** Article slugs (published and draft) that /insights/[article] serves. */
export function articleSlugs() {
  const out = [];
  const dir = join(root, "src/content/insights");
  for (const name of readdirSync(dir)) {
    if (!name.endsWith(".ts") || ["index.ts", "types.ts", "drafts.ts"].includes(name)) continue;
    const text = readFileSync(join(dir, name), "utf8");
    const m = /\bslug:\s*"([^"]+)"/.exec(text);
    if (m) out.push({ slug: m[1], file: `src/content/insights/${name}`, kind: "published" });
  }
  const drafts = readFileSync(join(dir, "drafts.ts"), "utf8");
  for (const m of drafts.matchAll(/^  "([a-z0-9-]+)":\s*\{/gm))
    out.push({ slug: m[1], file: "src/content/insights/drafts.ts", kind: "draft" });
  return out;
}

/** Duplicate public route definitions. Returns [{ route, sources: [] }]. */
export function duplicateRoutes() {
  const map = new Map();
  const add = (route, source) => {
    const key = route.toLowerCase().replace(/\/+$/, "") || "/";
    map.set(key, [...(map.get(key) || []), { route, source }]);
  };
  for (const r of appRoutes()) if (!r.dynamic) add(r.route, r.file);
  for (const { slug, file } of catchAllSlugs()) add("/" + slug, `${file} (pages["${slug}"])`);
  for (const { slug, file, kind } of articleSlugs()) add("/insights/" + slug, `${file} (${kind})`);
  return [...map]
    .filter(([, sources]) => sources.length > 1)
    .map(([, sources]) => ({ route: sources[0].route, sources: sources.map((s) => s.source), caseOnly: new Set(sources.map((s) => s.route)).size > 1 }));
}

const isCode = (f) => /\.(tsx?|jsx?|mjs)$/.test(f);

/**
 * Scans source for placeholder links, local/staging hosts and hardcoded
 * internal links. `redirectSources` maps legacy path -> replacement.
 */
export function scanSource({ redirectSources, forbiddenHosts, forbiddenHostPatterns }) {
  const issues = [];
  const files = sourceDirs.flatMap((d) => walk(join(root, d))).filter(isCode);
  for (const file of files) {
    const rel = posix(relative(root, file));
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      const at = `${rel}:${i + 1}`;
      // A URL on the line after `sourceUrl:` is also a provenance note.
      const provenance = provenanceLine.test(line) || provenanceLine.test(lines[i - 1] ?? "");
      if (/href\s*=\s*\{?\s*["'`](#|\s*)["'`]/.test(line))
        issues.push({ type: "PLACEHOLDER_LINK", severity: "error", at, value: line.trim().slice(0, 120) });
      if (/href\s*[=:]\s*(\{\s*)?["'`]javascript:/i.test(line))
        issues.push({ type: "PLACEHOLDER_LINK", severity: "error", at, value: line.trim().slice(0, 120) });
      for (const m of line.matchAll(/https?:\/\/([a-z0-9.-]+)(?::\d+)?/gi)) {
        const host = m[1].toLowerCase();
        if (forbiddenHosts.includes(host) || forbiddenHostPatterns.some((p) => p.test(host)))
          issues.push({ type: "LOCALHOST_REFERENCE", severity: "error", at, value: m[0] });
      }
      if (provenance) return;
      for (const m of line.matchAll(/(?:href\s*[=:]\s*|to:\s*|url:\s*)\{?\s*["'`](\/[a-zA-Z0-9\-_/]*)(?:[?#][^"'`]*)?["'`]/g)) {
        const path = m[1].replace(/\/$/, "") || "/";
        if (redirectSources.has(path))
          issues.push({ type: "LEGACY_INTERNAL_LINK", severity: "error", at, value: m[1], preferred: redirectSources.get(path) });
      }
      for (const m of line.matchAll(/["'`]https?:\/\/(?:www\.)?etriplesoft\.com(\/[a-zA-Z0-9\-_/]*)/g)) {
        const path = m[1].replace(/\/$/, "") || "/";
        if (redirectSources.has(path))
          issues.push({ type: "LEGACY_INTERNAL_LINK", severity: "error", at, value: m[0].slice(1), preferred: redirectSources.get(path) });
      }
    });
  }
  return { issues, filesScanned: files.length };
}
