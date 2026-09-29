// Production-output content audit. Reads the sitemap and checks rendered HTML,
// including metadata, while excluding scripts and styles from text matching.
//
//   npm run check-content
//   BASE_URL=http://localhost:3100 npm run check-content

import { parseArgs, request } from "./lib/qa.mjs";

const { base } = parseArgs();
const errors = [
  ["LOREM_IPSUM", /\blorem ipsum\b/i],
  ["SAMPLE_PERSON", /\b(?:john doe|jane doe)\b/i],
  ["DEMO_LOCATION", /\bdhaka\b/i],
  ["TEST_EMAIL", /\b(?:test|name)@example\.com\b/i],
  ["LOCAL_OR_PREVIEW_HOST", /(?:localhost|127\.0\.0\.1|0\.0\.0\.0|[\w.-]+\.vercel\.app)/i],
  ["EXAMPLE_DOMAIN", /\bexample\.(?:com|org|net)\b/i],
  ["UNRESOLVED_MARKER", /\b(?:TODO|FIXME|TBD|NEEDS VERIFICATION|OWNER CONFIRMATION|LEGAL REVIEW REQUIRED)\b/i],
  ["PUBLIC_PLACEHOLDER", /\b(?:replace me|replace later|not configured|under construction|work in progress|development only|coming soon)\b/i],
];
const review = [
  ["REVIEW_DEMO_OR_TEST_COPY", /\b(?:dummy|mock|fake|preview|staging|WIP)\b/i],
  ["REVIEW_SAMPLE_COPY", /\bsample\b/i],
];

const sitemap = await request(new URL("/sitemap.xml", base));
if (!sitemap.ok) {
  console.error(`Cannot read sitemap at ${new URL("/sitemap.xml", base)} (HTTP ${sitemap.status})`);
  process.exit(2);
}
const xml = await sitemap.text();
const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
if (!paths.length) {
  console.error("Sitemap contains no routes to audit.");
  process.exit(2);
}

const findings = [];
for (const path of paths) {
  const url = new URL(path, base);
  const response = await request(url);
  if (!response.ok) {
    findings.push({ severity: "ERROR", type: "ROUTE_NOT_200", path, context: `HTTP ${response.status}` });
    continue;
  }
  const html = await response.text();
  const visible = html
    .replace(/<(script|style|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:nbsp|#160);/gi, " ")
    .replace(/&(?:amp|#38);/gi, "&")
    .replace(/&(?:lt|#60);/gi, "<")
    .replace(/&(?:gt|#62);/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, " ");
  for (const [type, pattern] of [...errors, ...review]) {
    const match = pattern.exec(visible);
    if (!match) continue;
    const at = match.index;
    findings.push({
      severity: errors.some(([name]) => name === type) ? "ERROR" : "REVIEW",
      type,
      path,
      context: visible.slice(Math.max(0, at - 70), Math.min(visible.length, at + match[0].length + 70)).trim(),
    });
  }
}

for (const finding of findings)
  console.log(`${finding.severity} ${finding.type} ${finding.path}\n  ${finding.context}`);
const errorsFound = findings.filter((f) => f.severity === "ERROR").length;
const reviewsFound = findings.length - errorsFound;
console.log(`Audited ${paths.length} sitemap routes: ${errorsFound} errors, ${reviewsFound} review matches.`);
process.exitCode = errorsFound ? 1 : 0;
