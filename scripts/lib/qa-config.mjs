// Configuration for the QA commands. Change rules here, not in the scripts.

// Hosts that must never appear in production-facing URLs (links, metadata,
// structured data). The crawler's own BASE_URL is not consulted for this.
export const forbiddenHosts = ["localhost", "127.0.0.1", "0.0.0.0", "test.etriplesoft.com"];
export const forbiddenHostPatterns = [/\.vercel\.app$/i, /^(staging|preview|dev)\./i];

// Query parameters ignored when deciding whether a URL was already crawled.
export const trackingParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid", "gclid"];

// Fragment values browsers handle natively.
export const builtinFragments = new Set(["top"]);

// Documented exceptions. Each entry needs a reason; nothing is skipped silently.
//   { type: "MISSING_ANCHOR", source: "/x", target: "/y#z", reason: "why this is safe" }
export const allowlist = [];

// Source files whose URL strings are provenance notes (where copy was migrated
// from), never rendered as links. The rendered-page crawl is the authority for
// what visitors actually see.
export const provenanceLine = /(sourceUrl|source:\s*\{|source:\s*"https?:|^\s*url:\s*"https?:\/\/etriplesoft\.com)/;

// Directories scanned for hardcoded link problems.
export const sourceDirs = ["app", "src"];
