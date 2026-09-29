// Crawls a running server (sitemap + internal links) and validates SEO output:
// titles, descriptions, canonicals, robots, headings, Open Graph, Twitter,
// JSON-LD, image alt, internal links and sitemap consistency.
// Usage: BASE_URL=http://localhost:3000 npm run test:seo [-- --json out.json]
// Exits non-zero when any error-level check fails.
import { writeFileSync } from "node:fs";

const base = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const prod = "https://etriplesoft.com";
const jsonOut = process.argv.includes("--json")
  ? process.argv[process.argv.indexOf("--json") + 1]
  : null;

const get = (path) => fetch(base + path, { redirect: "manual" });
const attr = (tag, name) =>
  (new RegExp(`${name}\\s*=\\s*"([^"]*)"`, "i").exec(tag) || [])[1];
const decode = (s = "") =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
const strip = (s) => decode(s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());

function metaContent(html, key, value) {
  for (const tag of html.match(/<meta\b[^>]*>/gi) || []) {
    if (attr(tag, key) === value) return decode(attr(tag, "content"));
  }
}

function analyse(path, html) {
  const head = html.split("</head>")[0];
  const body = html.slice(head.length);
  const title = strip((/<title[^>]*>([\s\S]*?)<\/title>/i.exec(head) || [])[1] || "");
  const canonicalTag = (head.match(/<link\b[^>]*rel="canonical"[^>]*>/i) || [])[0];
  const headings = [...body.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1]));
  const skips = [];
  for (let i = 1; i < headings.length; i++)
    if (headings[i] > headings[i - 1] + 1) skips.push(`h${headings[i - 1]}>h${headings[i]}`);
  const ld = [];
  const ldErrors = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      ld.push(JSON.parse(m[1]));
    } catch (e) {
      ldErrors.push(e.message);
    }
  }
  const types = ld.flatMap((d) => (d["@graph"] ? d["@graph"] : [d])).map((d) => d["@type"]);
  const imgs = [...body.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const text = strip(body.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " "));
  const crumbNav = (body.match(/<nav[^>]*aria-label="Breadcrumb"[^>]*>([\s\S]*?)<\/nav>/i) || [])[1];
  const crumbLabels = crumbNav ? [...crumbNav.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((m) => strip(m[1])) : [];
  const links = [...body.matchAll(/<a\b[^>]*href="([^"]*)"/gi)].map((m) => decode(m[1]));
  return {
    path,
    title,
    description: metaContent(head, "name", "description"),
    canonical: canonicalTag && decode(attr(canonicalTag, "href")),
    robots: metaContent(head, "name", "robots"),
    h1: headings.filter((h) => h === 1).length,
    skips,
    og: Object.fromEntries(
      ["title", "description", "url", "type", "image", "site_name"].map((k) => [
        k,
        metaContent(head, "property", "og:" + k),
      ]),
    ),
    twitter: Object.fromEntries(
      ["card", "title", "description", "image"].map((k) => [
        k,
        metaContent(head, "name", "twitter:" + k),
      ]),
    ),
    types,
    ld,
    ldErrors,
    text,
    crumbLabels,
    imgNoAlt: imgs.filter((i) => attr(i, "alt") === undefined).length,
    links,
    hasLocal: /localhost|127\.0\.0\.1|vercel\.app/i.test(head + JSON.stringify(ld)),
  };
}

// 1. Discover routes: sitemap first, then internal links from every page.
const sitemapRes = await get("/sitemap.xml");
const sitemapXml = sitemapRes.ok ? await sitemapRes.text() : "";
const sitemapPaths = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].replace(prod, "") || "/",
);
const queue = new Set(sitemapPaths.length ? sitemapPaths : ["/"]);
const pages = new Map();
const statusOf = new Map();
const errors = [];
const warns = [];
const err = (p, m) => errors.push(`${p}: ${m}`);
const warn = (p, m) => warns.push(`${p}: ${m}`);

const normalise = (href) => {
  if (!href || href.startsWith("#") || /^(mailto:|tel:|javascript:)/.test(href)) return null;
  let path = href;
  if (/^https?:\/\//.test(href)) {
    if (!href.startsWith(prod) && !href.startsWith(base)) return null;
    path = href.replace(prod, "").replace(base, "") || "/";
  }
  return path.split("#")[0].split("?")[0] || "/";
};

const todo = [...queue];
while (todo.length) {
  const path = todo.pop();
  if (pages.has(path)) continue;
  const res = await get(path);
  statusOf.set(path, res.status);
  if (res.status !== 200) {
    pages.set(path, null);
    continue;
  }
  const info = analyse(path, await res.text());
  pages.set(path, info);
  for (const href of info.links) {
    const n = normalise(href);
    if (n && !n.startsWith("/_next") && !/\.(png|webp|jpg|svg|ico|pdf|xml)$/.test(n) && !pages.has(n) && !todo.includes(n)) todo.push(n);
  }
}

// 2. Per-page checks.
const titles = new Map();
const descs = new Map();
const inbound = new Map();
for (const [path, info] of pages) {
  if (!info) continue;
  for (const href of info.links) {
    const n = normalise(href);
    if (n && n !== path) inbound.set(n, (inbound.get(n) || 0) + 1);
  }
}
for (const [path, info] of pages) {
  if (!info) {
    if (path !== "/api/inquiries") err(path, `internal link target returned ${statusOf.get(path)}`);
    continue;
  }
  const noindex = /noindex/i.test(info.robots || "");
  if (!info.title) err(path, "missing <title>");
  if (!info.description && !noindex) err(path, "missing meta description");
  if (!noindex) {
    if (!info.canonical) err(path, "missing canonical");
    else if (info.canonical !== prod + (path === "/" ? "" : path) && info.canonical !== prod + path)
      err(path, `canonical mismatch: ${info.canonical}`);
    if (info.h1 !== 1) err(path, `expected 1 h1, found ${info.h1}`);
    if (!info.og.image) err(path, "missing og:image");
    if (!info.og.title || !info.og.url || !info.og.type) err(path, "incomplete Open Graph");
    if (!info.twitter.card || !info.twitter.title || !info.twitter.image) err(path, "incomplete Twitter card");
    titles.set(info.title, [...(titles.get(info.title) || []), path]);
    if (info.description) descs.set(info.description, [...(descs.get(info.description) || []), path]);
  }
  if (info.skips.length) warn(path, `heading skips ${info.skips.join(", ")}`);
  if (info.ldErrors.length) err(path, `invalid JSON-LD: ${info.ldErrors.join("; ")}`);
  if (info.hasLocal) err(path, "localhost/preview URL in head or JSON-LD");
  if (info.imgNoAlt) err(path, `${info.imgNoAlt} <img> without alt attribute`);
  if (info.title.length > 70) warn(path, `long title (${info.title.length})`);
  if (info.description && info.description.length > 170) warn(path, `long description (${info.description.length})`);
  const flat = info.ld.flatMap((d) => (d["@graph"] ? d["@graph"] : [d]));
  for (const faq of flat.filter((d) => d["@type"] === "FAQPage"))
    for (const q of faq.mainEntity || []) {
      if (!info.text.includes(q.name)) err(path, `FAQPage question not visible: "${q.name.slice(0, 50)}"`);
      if (!info.text.includes(q.acceptedAnswer.text.slice(0, 40))) err(path, `FAQPage answer not visible for "${q.name.slice(0, 40)}"`);
    }
  for (const list of flat.filter((d) => d["@type"] === "BreadcrumbList")) {
    const names = list.itemListElement.map((i) => i.name);
    if (JSON.stringify(names) !== JSON.stringify(info.crumbLabels))
      err(path, `BreadcrumbList [${names}] does not match visible breadcrumb [${info.crumbLabels}]`);
  }
  if (flat.some((d) => d["@type"] === "Article") && !flat.some((d) => d["@type"] === "BreadcrumbList"))
    warn(path, "article without BreadcrumbList");
  const orgs = info.types.filter((t) => t === "Organization").length;
  if (orgs > 1) err(path, "multiple Organization entities");
  if (!noindex && !inbound.get(path) && path !== "/") warn(path, "no internal inbound links (orphan)");
  for (const href of info.links) {
    if (href === "#" || /^javascript:/.test(href)) err(path, `dead href ${href}`);
    if (/etriplesoft\.com\/[^"]*\/$/.test(href) && href !== prod + "/") warn(path, `legacy trailing-slash link ${href}`);
  }
}
for (const [t, ps] of titles) if (ps.length > 1) err(ps.join(", "), `duplicate title "${t}"`);
for (const [d, ps] of descs) if (ps.length > 1) err(ps.join(", "), `duplicate description "${d.slice(0, 50)}…"`);

// 3. Sitemap consistency.
for (const path of sitemapPaths) {
  const info = pages.get(path);
  if (!info) err("sitemap", `${path} does not return 200`);
  else if (/noindex/i.test(info.robots || "")) err("sitemap", `${path} is noindex`);
}
const robotsRes = await get("/robots.txt");
const robotsTxt = robotsRes.ok ? await robotsRes.text() : "";
if (!/Sitemap:\s*https:\/\/etriplesoft\.com\/sitemap\.xml/i.test(robotsTxt))
  err("robots.txt", "missing absolute Sitemap line");

// 4. Internal internal-link redirect check (links that 3xx).
const redirected = new Set();
for (const [path, info] of pages) {
  if (!info) continue;
  for (const href of info.links) {
    const n = normalise(href);
    if (n && statusOf.get(n) >= 300 && statusOf.get(n) < 400) redirected.add(`${path} -> ${n}`);
  }
}
for (const r of redirected) err("links", `internal link goes through a redirect: ${r}`);

// 4b. Legacy redirect destinations are canonical, live and not chained.
const { activeRedirects } = await import("../src/lib/redirects.ts");
const sources = new Set(activeRedirects.map((r) => r.source));
for (const { source, destination } of activeRedirects) {
  if (sources.has(destination)) err("redirects", `${source} -> ${destination} is a chain`);
  if (source === destination) err("redirects", `${source} loops to itself`);
}
for (const destination of new Set(activeRedirects.map((r) => r.destination))) {
  const path = destination.split("#")[0];
  // Binary file destinations (such as the company profile PDF) cannot expose
  // HTML canonical tags; their content type and redirect target are checked
  // by check-redirects.mjs instead.
  if (/\.pdf$/i.test(path)) continue;
  const info = pages.get(path) ?? analyse(path, await (await get(path)).text());
  if (!info.canonical || info.canonical !== prod + (path === "/" ? "" : path))
    err("redirects", `destination ${destination} is not self-canonical (${info.canonical})`);
}

// 5. OG images resolve.
const ogImages = new Set([...pages.values()].filter(Boolean).map((p) => p.og.image).filter(Boolean));
for (const img of ogImages) {
  const path = img.replace(prod, "");
  const res = await get(path);
  if (res.status !== 200) err("og:image", `${img} returned ${res.status}`);
}

const rows = [...pages.values()].filter(Boolean).map((p) => ({
  url: p.path,
  robots: p.robots || "",
  title: p.title,
  description: p.description,
  canonical: p.canonical,
  h1: p.h1,
  schema: [...new Set(p.types)].join(","),
  inSitemap: sitemapPaths.includes(p.path),
  inbound: inbound.get(p.path) || 0,
}));
if (jsonOut) writeFileSync(jsonOut, JSON.stringify({ rows, errors, warns }, null, 2));
console.log(`Crawled ${rows.length} pages; sitemap ${sitemapPaths.length} URLs`);
for (const w of warns) console.log("WARN ", w);
for (const e of errors) console.log("ERROR", e);
console.log(errors.length ? `\n${errors.length} error(s)` : "\nOK: no SEO errors");
process.exit(errors.length ? 1 : 0);
