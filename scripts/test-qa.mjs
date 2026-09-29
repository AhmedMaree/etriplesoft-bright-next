// Self-test for the QA commands: serves a deliberately broken site and asserts
// that check-links and check-redirects report the expected problems.
//   npm run test:qa
import { spawn } from "node:child_process";
import { mkdtempSync, readFileSync } from "node:fs";
import http from "node:http";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { activeRedirects } from "../src/lib/redirects.ts";

const page = (canonical, body, robots = "") =>
  `<!doctype html><html><head><title>t</title><link rel="canonical" href="https://etriplesoft.com${canonical}"/>${robots}</head><body><main id="main">${body}</main></body></html>`;
const [r0, r1, r2, r3, r4, r5] = activeRedirects;

const html = {
  "/": page("", `<a href="/a">a</a>`),
  "/a": page(
    "/a",
    [
      `<a href="/missing">Missing page</a>`,
      `<a href="/a#nope">Bad anchor</a>`,
      `<a href="/b#real">Good anchor</a>`,
      `<a href="#">Placeholder</a>`,
      `<a href="javascript:void(0)">Void</a>`,
      `<a href="http://localhost:9999/x">Local</a>`,
      `<a href="mailto:not-an-email">Mail</a>`,
      `<a href="tel:+20 100 210 6952">Phone</a>`,
      `<a href="/hop1">Chain</a>`,
      `<a href="${r0.source}">Legacy</a>`,
      `<a href="/single">Single hop</a>`,
      `<img src="/images/none.png" alt="">`,
      `<div id="dup"></div><div id="dup"></div><a href="#dup">dup</a>`,
    ].join(""),
  ),
  "/b": page("/b", `<h2 id="real">x</h2>`),
  "/ok": page("/ok", "ok"),
  "/wrong-canonical": page("/somewhere-else", "x"),
  "/noindex": page("/noindex", "x", `<meta name="robots" content="noindex"/>`),
};
const redirects = {
  "/hop1": [308, "/hop2"],
  "/hop2": [308, "/ok"],
  "/single": [308, "/ok"],
  [r0.source]: [308, "/ok"],
};
// check-redirects: one map entry per failure mode; everything else behaves.
const behaviour = {
  [r1.source]: [302, r1.destination], // temporary
  [r2.source]: [308, "/hop1"], // chain (and wrong destination)
  [r3.source]: [308, "/"], // wrong destination
  [r4.source]: [308, "/missing-destination"], // final 404
  [r5.source]: [308, "/wrong-canonical"], // canonical mismatch
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  const path = url.pathname.replace(/\/$/, "") || "/";
  if (path === "/sitemap.xml") {
    res.setHeader("content-type", "application/xml");
    return res.end(`<urlset><url><loc>https://etriplesoft.com/</loc></url><url><loc>https://etriplesoft.com/a</loc></url><url><loc>https://etriplesoft.com/A</loc></url></urlset>`);
  }
  const hop = redirects[path] ?? behaviour[path];
  const known = activeRedirects.find((r) => r.source === path);
  if (hop) {
    res.writeHead(hop[0], { location: hop[1] + url.search });
    return res.end();
  }
  if (known) {
    res.writeHead(308, { location: known.destination + url.search });
    return res.end();
  }
  const dest = activeRedirects.find((r) => r.destination === path);
  const body = html[path] ?? (dest ? page(path, "destination") : null);
  if (!body) {
    res.writeHead(404, { "content-type": "text/html" });
    return res.end("not found");
  }
  res.writeHead(200, { "content-type": "text/html" });
  res.end(body);
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}`;
const dir = mkdtempSync(join(tmpdir(), "qa-"));

// Async spawn: the fixture server lives in this process and must keep serving.
function run(script, jsonName) {
  const out = join(dir, jsonName);
  return new Promise((resolve) => {
    const proc = spawn(process.execPath, ["--no-warnings", script, `--base-url=${base}`, `--json=${out}`], { stdio: ["ignore", "pipe", "pipe"] });
    let text = "";
    proc.stdout.on("data", (d) => (text += d));
    proc.stderr.on("data", (d) => (text += d));
    proc.on("close", (code) => {
      try {
        resolve({ code, text, report: JSON.parse(readFileSync(out, "utf8")) });
      } catch {
        console.error(text);
        resolve({ code, text, report: { issues: [], results: [] } });
      }
    });
  });
}

const failures = [];
const expect = (label, ok) => {
  if (!ok) failures.push(label);
  console.log(`${ok ? "ok  " : "FAIL"} ${label}`);
};
const types = (issues, severity) => new Set(issues.filter((i) => !severity || i.severity === severity).map((i) => i.type));

const links = await run("scripts/check-links.mjs", "links.json");
expect(`check-links exits 1 on errors (got ${links.code})`, links.code === 1);
for (const type of ["INTERNAL_404", "MISSING_ANCHOR", "PLACEHOLDER_LINK", "LOCALHOST_REFERENCE", "BAD_MAILTO", "BAD_TEL", "REDIRECT_CHAIN", "LEGACY_INTERNAL_LINK", "MISSING_ASSET", "DUPLICATE_ID", "DUPLICATE_ROUTE"])
  expect(`check-links reports ${type}`, types(links.report.issues, "error").has(type));
expect("check-links warns on a single redirecting link", types(links.report.issues, "warning").has("INTERNAL_LINK_REDIRECT"));
expect("check-links accepts a valid anchor (/b#real)", !links.report.issues.some((i) => i.target?.includes("#real")));

const redirects2 = await run("scripts/check-redirects.mjs", "redirects.json");
expect("check-redirects exits 1 on errors", redirects2.code === 1);
for (const type of ["TEMPORARY_REDIRECT", "REDIRECT_CHAIN", "WRONG_DESTINATION", "FINAL_NOT_200", "CANONICAL_REDIRECT_MISMATCH"])
  expect(`check-redirects reports ${type}`, types(redirects2.report.issues, "error").has(type));
expect("check-redirects passes well-behaved redirects", redirects2.report.results.filter((r) => r.result === "pass").length > 100);

server.close();
if (failures.length) {
  console.error(`\n${failures.length} QA self-test(s) failed`);
  process.exit(1);
}
console.log("\nOK: QA tools detect every seeded problem");
