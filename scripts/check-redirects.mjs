// Legacy redirect verification.
//
//   npm run check-redirects                          (server on http://localhost:3000)
//   BASE_URL=http://localhost:3000 npm run check-redirects
//   BASE_URL=https://etriplesoft.com npm run check-redirects   (after deploy)
//   npm run check-redirects -- --json[=reports/redirect-check.json]
//   npm run check-redirects -- --verbose              (print passing redirects too)
//
// Every legacy URL must go through exactly ONE permanent redirect (301/308) to
// the expected destination. Pages must be indexable and canonical; known static
// files are checked against their expected MIME type. The single source of truth is src/lib/redirects.ts (served by
// next.config.ts). Exit codes: 0 pass, 1 failures, 2 server unreachable.
import { existsSync, readFileSync } from "node:fs";
import http from "node:http";
import { activeRedirects, pendingRedirects } from "../src/lib/redirects.ts";
import { PROD_ORIGIN, Reporter, extract, follow, isProdBase, parseArgs, pool, request, writeJson } from "./lib/qa.mjs";
import { appRoutes, articleSlugs, catchAllSlugs } from "./lib/static-scan.mjs";

const args = parseArgs();
const { base } = args;
const verbose = args.flags.has("verbose");
const report = new Reporter();
const PERMANENT = new Set([301, 308]);
const results = [];

// ------------------------------------------------------- rule analysis
// 1. Other redirect systems in the repository (should be none).
const otherSystems = [];
for (const file of ["middleware.ts", "src/middleware.ts", "proxy.ts", "src/proxy.ts", "vercel.json", "netlify.toml", "public/_redirects"])
  if (existsSync(file)) otherSystems.push(file);
const nextConfig = readFileSync("next.config.ts", "utf8");
const hostRule = /has:\s*\[\{\s*type:\s*"host"/.test(nextConfig);

// 2. Conflicts inside the map.
const bySource = new Map();
for (const r of activeRedirects) bySource.set(r.source, [...(bySource.get(r.source) || []), r]);
for (const [source, rules] of bySource) {
  const destinations = new Set(rules.map((r) => r.destination));
  if (rules.length > 1)
    report.add("CONFLICTING_REDIRECT_RULES", destinations.size > 1 ? "error" : "warning", {
      source,
      detail: destinations.size > 1 ? `defined ${rules.length} times with different destinations: ${[...destinations].join(", ")}` : `defined ${rules.length} times with the same destination`,
    });
}
const sourceSet = new Set(activeRedirects.map((r) => r.source));
for (const { source, destination } of activeRedirects) {
  if (source === destination) report.add("REDIRECT_LOOP", "error", { source, detail: "redirects to itself" });
  if (sourceSet.has(destination)) report.add("REDIRECT_CHAIN", "error", { source, detail: `destination ${destination} is itself a redirect source` });
  if (destination !== "/" && destination.endsWith("/")) report.add("NON_CANONICAL_DESTINATION", "error", { source, detail: `destination ${destination} has a trailing slash; the canonical form has none, which would add a second hop` });
  if (/[A-Z]/.test(destination)) report.add("NON_CANONICAL_DESTINATION", "error", { source, detail: `destination ${destination} contains uppercase` });
  if (destination === "/" ) report.add("WRONG_DESTINATION", "warning", { source, detail: "redirects to the homepage; confirm the content has no specific replacement" });
}
// 3. A redirect source that is also a live route makes that page unreachable.
const liveRoutes = new Map();
for (const r of appRoutes()) if (!r.dynamic) liveRoutes.set(r.route, r.file);
for (const { slug, file } of catchAllSlugs()) liveRoutes.set("/" + slug, `${file} pages["${slug}"]`);
for (const { slug, file, kind } of articleSlugs()) liveRoutes.set("/insights/" + slug, `${file} (${kind})`);
for (const source of sourceSet)
  if (liveRoutes.has(source)) report.add("CONFLICTING_REDIRECT_RULES", "error", { source, detail: `also a live route (${liveRoutes.get(source)}); the redirect shadows the page` });

// -------------------------------------------------------------- rendered
const finalCache = new Map();
async function inspectFinal(url) {
  if (!finalCache.has(url)) {
    finalCache.set(
      url,
      (async () => {
        const res = await request(url);
        const type = res.headers.get("content-type") || "";
        if (res.status !== 200 || !type.includes("text/html")) {
          await res.body?.cancel();
          return { status: res.status };
        }
        return { status: res.status, ...extract(await res.text()) };
      })(),
    );
  }
  return finalCache.get(url);
}

const pathOf = (url) => new URL(url).pathname + new URL(url).search;

async function checkOne({ source, destination, variant, requestPath, expectedFinal }) {
  const rec = { old: requestPath, variant, expectedDestination: destination, initialStatus: null, location: null, finalUrl: null, finalStatus: null, redirectCount: 0, permanent: false, canonical: null, canonicalMatches: false, result: "pass", reasons: [] };
  const fail = (type, detail) => {
    rec.result = "fail";
    rec.reasons.push(type);
    report.add(type, "error", { source: requestPath, target: destination, detail });
  };
  let result;
  try {
    result = await follow(base + requestPath, base);
  } catch (error) {
    fail("REQUEST_FAILED", error.message);
    results.push(rec);
    return;
  }
  rec.redirectCount = result.chain.length;
  rec.initialStatus = result.chain[0]?.status ?? result.final?.status ?? null;
  rec.location = result.chain[0]?.location ?? null;
  rec.chain = result.chain.map((h) => `${h.status} ${h.url.replace(base, "")} -> ${h.location}`);
  if (result.loop) fail("REDIRECT_LOOP", "redirect loop: " + rec.chain.join(" | "));
  else if (result.tooMany) fail("REDIRECT_CHAIN", "more than 10 redirects");
  else {
    rec.finalUrl = pathOf(result.final.url);
    rec.finalStatus = result.final.status;
    await result.final.res.body?.cancel();
    if (rec.redirectCount === 0) fail("NOT_REDIRECTED", `no redirect: responded ${rec.finalStatus}`);
    if (rec.redirectCount > 1) fail("REDIRECT_CHAIN", rec.chain.join("\n        ") + `\n        ${rec.finalStatus} ${rec.finalUrl}`);
    if (rec.redirectCount >= 1) {
      rec.permanent = result.chain.every((h) => PERMANENT.has(h.status));
      if (!rec.permanent) fail("TEMPORARY_REDIRECT", `status ${result.chain.map((h) => h.status).join(" -> ")}; expected 301 or 308`);
    }
    if (rec.finalUrl !== expectedFinal) fail("WRONG_DESTINATION", `expected ${expectedFinal}, landed on ${rec.finalUrl}`);
    if (rec.finalStatus !== 200) fail(rec.redirectCount === 0 ? "REDIRECT_DESTINATION_NOT_FINAL" : "FINAL_NOT_200", `final status ${rec.finalStatus}`);
    else {
      const destinationPath = new URL(destination, base).pathname;
      const expectedAssetType = destinationPath.endsWith(".pdf")
        ? "application/pdf"
        : destinationPath.endsWith(".html")
          ? "text/html"
          : null;
      if (expectedAssetType) {
        const actualType = result.final.res.headers.get("content-type") || "";
        rec.canonicalMatches = true;
        if (!actualType.includes(expectedAssetType))
          fail("REDIRECT_ASSET_TYPE_MISMATCH", `expected ${expectedAssetType}; got ${actualType || "no content type"}`);
      } else {
      const page = await inspectFinal(base + new URL(result.final.url).pathname);
      rec.canonical = page.canonical ?? null;
      const wanted = PROD_ORIGIN + (destination === "/" ? "" : destination);
      rec.canonicalMatches = page.canonical === wanted;
      if (page.status === 200 && !rec.canonicalMatches) fail("CANONICAL_REDIRECT_MISMATCH", `canonical is ${page.canonical ?? "missing"}, expected ${wanted}`);
      if (/noindex/i.test(page.robots || "")) fail("REDIRECT_TO_NOINDEX", "destination page is noindex");
      }
    }
  }
  results.push(rec);
}

async function main() {
  try {
    const probe = await request(base + "/");
    await probe.body?.cancel();
  } catch (error) {
    console.error(`Cannot reach ${base} (${error.cause?.code || error.message}).\nStart the app (npm run build && npm start) or pass --base-url=...`);
    process.exit(2);
  }
  const tasks = [];
  for (const { source, destination } of activeRedirects) {
    tasks.push({ source, destination, variant: "exact", requestPath: source, expectedFinal: destination });
    tasks.push({ source, destination, variant: "trailing slash", requestPath: source + "/", expectedFinal: destination });
    // Tracking parameters must not break the destination (Next forwards them).
    tasks.push({ source, destination, variant: "utm query", requestPath: source + "?utm_source=qa", expectedFinal: destination + "?utm_source=qa" });
  }
  await pool(tasks, 8, checkOne);
}

// -------------------------------------------------- host / protocol checks
const hostResults = [];
async function checkHosts() {
  const canonicalHost = new URL(PROD_ORIGIN);
  const expected = PROD_ORIGIN + "/about";
  const note = (label, ok, detail) => {
    hostResults.push({ label, ok, detail });
    if (!ok) report.add("HOST_REDIRECT", "error", { source: label, detail });
  };
  if (isProdBase(base)) {
    for (const start of ["http://etriplesoft.com/about", "http://www.etriplesoft.com/about", "https://www.etriplesoft.com/about"]) {
      const r = await follow(start, base);
      const final = r.final?.url;
      await r.final?.res.body?.cancel();
      note(start, !r.loop && final === expected && r.chain.length <= 2 && r.chain.every((h) => PERMANENT.has(h.status)), `${r.chain.map((h) => `${h.status} ${h.location}`).join(" -> ") || "no redirect"} => ${final ?? "loop"} (hops ${r.chain.length})`);
    }
    const ok = await request(expected);
    await ok.body?.cancel();
    note(expected, ok.status === 200, `canonical host responded ${ok.status}`);
  } else {
    // A local server sees the Host header, so the www rule can be tested
    // directly. fetch() cannot override Host, so use node:http.
    try {
      const url = new URL(base);
      const res = await new Promise((resolve, reject) => {
        const req = http.request({ hostname: url.hostname, port: url.port, path: "/about", headers: { host: "www." + canonicalHost.host } }, resolve);
        req.on("error", reject).setTimeout(10000, () => req.destroy(new Error("timeout"))).end();
      });
      res.resume();
      const location = res.headers.location;
      note("www host (Host header)", PERMANENT.has(res.statusCode) && location === expected, `${res.statusCode} ${location ?? "no Location"} (expected ${expected})`);
    } catch (error) {
      hostResults.push({ label: "www host (Host header)", ok: null, detail: `skipped: ${error.message}` });
    }
  }
}

await main();
await checkHosts();

// ---------------------------------------------------------------- output
results.sort((a, b) => a.old.localeCompare(b.old));
for (const r of results) {
  if (r.result === "pass" && !verbose) continue;
  console.log(`${r.result === "pass" ? "PASS" : "FAIL"}  ${r.old}${r.variant === "exact" ? "" : `   [${r.variant}]`}`);
  for (const line of r.chain ?? []) console.log(`      ${line}`);
  console.log(`      final: ${r.finalStatus ?? "n/a"} ${r.finalUrl ?? ""}  hops: ${r.redirectCount}  canonical: ${r.canonicalMatches ? "ok" : (r.canonical ?? "n/a")}`);
  if (r.reasons.length) console.log(`      reason: ${[...new Set(r.reasons)].join(", ")}`);
  console.log();
}
for (const i of report.issues.filter((x) => !x.target || !results.some((r) => r.old === x.source))) {
  console.log(`${i.severity.toUpperCase()}  ${i.type}  ${i.source}`);
  if (i.detail) console.log(`      ${i.detail}\n`);
}

const count = (type) => report.issues.filter((i) => i.type === type).length;
const passed = results.filter((r) => r.result === "pass").length;
const uniqueSources = new Set(results.map((r) => r.old.split("?")[0].replace(/\/$/, ""))).size;
console.log("Summary");
console.log("-------");
console.log(`Legacy redirects in map: ${activeRedirects.length} (${uniqueSources} tested; 3 variants each: exact, trailing slash, utm query)`);
console.log(`Requests checked: ${results.length}   Passed: ${passed}   Failed: ${results.length - passed}`);
console.log(`Chains: ${count("REDIRECT_CHAIN")}   Loops: ${count("REDIRECT_LOOP")}   Temporary: ${count("TEMPORARY_REDIRECT")}`);
console.log(`Wrong destinations: ${count("WRONG_DESTINATION")}   Final non-200: ${count("FINAL_NOT_200") + count("REDIRECT_DESTINATION_NOT_FINAL")}   Canonical mismatches: ${count("CANONICAL_REDIRECT_MISMATCH")}`);
console.log(`Conflicting rules: ${count("CONFLICTING_REDIRECT_RULES")}   To noindex: ${count("REDIRECT_TO_NOINDEX")}   Not redirected: ${count("NOT_REDIRECTED")}`);
console.log(`Other redirect systems in repo: ${otherSystems.length ? otherSystems.join(", ") : "none (middleware, vercel.json: absent)"}; host rule in next.config.ts: ${hostRule ? "yes" : "no"}`);
console.log(`Pending (documented, deliberately NOT served): ${pendingRedirects.length}`);
for (const h of hostResults) console.log(`Host/protocol: ${h.ok === null ? "SKIP" : h.ok ? "PASS" : "FAIL"}  ${h.label}  ${h.detail}`);
const failed = report.errors.length > 0 || results.some((r) => r.result === "fail");
console.log(`\nResult: ${failed ? "FAILED" : report.warnings.length ? "PASSED with warnings" : "PASSED"}`);
if (args.json)
  writeJson(args.jsonPath || "reports/redirect-check.json", { base, generatedAt: new Date().toISOString(), results: results.map(({ chain, ...r }) => ({ ...r, chain })), hostResults, issues: report.issues });
// Set the code instead of process.exit(): exiting with sockets still open
// crashes Node on Windows (libuv assertion).
process.exitCode = failed ? 1 : 0;
