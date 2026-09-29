# Final Website Audit

Status: **Phase 0 — inspection only.** No implementation was changed to produce this
document. This is the baseline the phase-by-phase productionization plan will work
against. Update this file at the end of every phase (see `AGENTS.md` working rule).

Sources inspected: `app/`, `src/`, `docs/CONTENT-INVENTORY.md` and the other
`docs/*.md` design/content docs, `public/`, `assets/`, live `etriplesoft.com`
sitemaps (`sitemap_index.xml`, `page-sitemap.xml`, `post-sitemap.xml`), and a
production build (`next build`, `tsc --noEmit`) run on 2026-09-29.

Build/lint/type status as of this audit:
- `tsc --noEmit` — clean, no errors.
- `next build` — succeeds. 48 static params generated across `/[slug]`,
  `/insights/[article]`, `/portfolio/[project]`.
- No ESLint config present in the repo (`npm run lint` is not a defined script and
  no `.eslintrc*`/`eslint.config.*` exists) — flagged under Performance/Quality below.

---

## 1. Implemented routes

Routing today is **not** the nested target architecture — it's a flat catch-all
(`app/[slug]/page.tsx`) plus two dynamic detail routes, all mapped through
lookup tables in `src/lib/data.ts` and `app/[slug]/page.tsx` itself.

| Route (as served) | Backed by | Notes |
| --- | --- | --- |
| `/` | `app/page.tsx` | Homepage, static. |
| `/odoo` | `app/[slug]` → `servicePages.odoo` → `ServicePage` | Single page, no sub-routes. |
| `/cloud` | `app/[slug]` → `servicePages.cloud` | Target arch calls this `/services/cloud`. |
| `/ai` | `app/[slug]` → `servicePages.ai` | Target arch calls this `/services/ai`. |
| `/web` | `app/[slug]` → `servicePages.web` | Target arch calls this `/services/web`. |
| `/mobile` | `app/[slug]` → `servicePages.mobile` | Target arch calls this `/services/mobile`. |
| `/digital-marketing` | `app/[slug]` → `servicePages["digital-marketing"]` | Target arch calls this `/services/digital-marketing`. |
| `/about`, `/about-us` | `app/[slug]` → `AboutPage` | Both slugs resolve; `/about` is canonical in nav. |
| `/portfolio`, `/industries` | `app/[slug]` → `PortfolioPage` | Same component serves both slugs; target treats `/portfolio` and `/industries/*` as separate content models. |
| `/contact`, `/contact-us` | `app/[slug]` → `ContactPage` | Both slugs resolve. |
| `/support-ticket` | `app/[slug]` → `SupportPage` | |
| `/careers` | `app/[slug]` → `CareersPage` | |
| `/faqs` | `app/[slug]` inline JSX | |
| `/insights` | `app/[slug]` → `InsightsReferencePage` | |
| `/insights/[article]` | `app/insights/[article]/page.tsx` | 10 articles defined; 3 linked from homepage, all 10 statically generated. |
| `/privacy`, `/terms` | `app/[slug]` inline JSX | |
| `/portfolio/[project]` | `app/portfolio/[project]/page.tsx` | 4 base projects + 3 aliases = 7 static params; all "illustrative," explicitly labeled not real case studies. |
| `/api/inquiries` | `app/api/inquiries/route.ts` | POST handler for contact/support/newsletter forms; writes to local filesystem (`writeFile`), same-origin check, 10MB attachment cap. No email/CRM delivery configured. |
| `/icon.png` | `app/icon.png` | Favicon. |
| `*` (unmatched) | `app/not-found.tsx` | Generic 404, links home only. |

Legacy alias slugs already handled by `serviceAliases`/`names` maps in
`app/[slug]/page.tsx` (i.e. old WordPress slugs resolve on the **new** site
without a redirect, just serving the page at the old path):
`odoo-erp-egypt`, `cloud-security-solutions-in-egypt`,
`ai-automation-services-etriplesoft`, `web-design-company-in-egypt`,
`mobile-apps-services`, `mobile-apps-services-2`, `digital-marketing-agency`.

## 2. Missing routes

Comparing to the target architecture in the brief:

- **Odoo sub-pages** — entirely missing: `/odoo/implementation`, `/odoo/accounting`,
  `/odoo/hr`, `/odoo/itsm-helpdesk`, `/odoo/dashboard-insights`. Old site has live
  posts for 4 of these 5 concepts (`odoo-implementation-process-by-etriplesoft`,
  `odoo-for-accounting`, `odoo-hr-software`, `odoo-itsm-helpdesk-module`) plus
  `odoo-dashboard-insights` as an old **page**. Content exists on the old site to
  migrate from; nothing built here yet.
- **`/services/*` nesting** — service pages exist at the top level (`/cloud`,
  `/ai`, `/web`, `/mobile`, `/digital-marketing`) but not under `/services/`.
  Needs either a route move + redirect, or a decision to keep top-level (see open
  question below).
- **`/industries/*` sub-pages** — target wants 8 dedicated pages
  (`construction`, `real-estate`, `facility-management`, `restaurants`,
  `education`, `retail`, `healthcare`, `logistics`). Currently only a single
  `/industries` (=`/portfolio`) overview exists with a 6-item bento grid
  (`industries` array in `src/lib/data.ts`) — no `facility-management` or
  `restaurants` entries at all, and no per-industry pages. Old site has live posts
  for `odoo-for-construction`, `odoo-facility-management-software`,
  `odoo-real-estate-software`, `odoo-education-management-system`,
  `odoo-restaurant-management-software` to source content from.
- **`/portfolio` as distinct from `/industries`** — target architecture lists
  them as separate routes; current build serves identical content
  (`PortfolioPage`) for both slugs.
- **Dedicated `/insights/[slug]`** — technically present, but content is 10
  hardcoded articles with no CMS/data layer; fine for now but worth flagging
  since target implies an ongoing content stream (old site's `post-sitemap.xml`
  currently lists 20 English posts, most not represented here).
- **`sitemap.xml` / `robots.txt`** — no `app/sitemap.ts` or `app/robots.ts`
  exists. Not a route gap per the brief's architecture list, but blocks SEO
  migration (see §7).
- **Redirect handling** — no `next.config.ts` `redirects()`, no `middleware.ts`.
  Every legacy URL that doesn't match today's slug tables will 404 to the generic
  not-found page instead of being redirected. See §3.

## 3. Redirects

**None are implemented today** — `next.config.ts` has no `redirects()` key and
there is no `middleware.ts`. This is the single biggest migration gap relative
to the brief's "old URLs must not disappear" rule.

Old→new mapping needed, derived from the live sitemaps fetched during this
audit (`page-sitemap.xml`, `post-sitemap.xml`):

| Old URL (trailing slash, WordPress) | New destination | Status |
| --- | --- | --- |
| `/odoo-erp-egypt/` | `/odoo` | Slug alias resolves already; needs a real 301, not just a coincidental match. |
| `/cloud-security-solutions-in-egypt/` | `/cloud` (or `/services/cloud` if moved) | Alias resolves; needs 301. |
| `/cloud-security-solutions/`, `/ar/cloud-security-solutions/`, `/ar/cloud-security-solutions-2/` | `/cloud` | Not aliased today — 404s. |
| `/ai-automation-services-etriplesoft/` | `/ai` | Alias resolves; needs 301. |
| `/web-design-company-in-egypt/` | `/web` | Alias resolves; needs 301. |
| `/mobile-apps-services/`, `/mobile-apps-services-2/` | `/mobile` | Alias resolves; needs 301. |
| `/digital-marketing-agency/` | `/digital-marketing` | Alias resolves; needs 301. |
| `/about-us/` | `/about` | Alias resolves; needs 301. |
| `/contact-us/` | `/contact` | Alias resolves; needs 301. |
| `/portfolio/` | `/portfolio` | Same path already. |
| `/careers/` | `/careers` | Same path already. |
| `/support-ticket/` | `/support-ticket` | Same path already. |
| `/terms-conditions/` | `/terms` | Not aliased — **404s today**. |
| `/privacy-policy/` | `/privacy` | Not aliased — **404s today**. |
| `/blog/` | `/insights` | Not aliased — **404s today**. |
| `/request-demo/` | `/contact` (or a future `/book-a-demo`) | Not aliased — **404s today**. Business decision needed: does "Book a Demo" get its own route, or does it stay a contact-page anchor? |
| `/solutions/` | `/` (or a services overview anchor `#solutions`) | Not aliased — **404s today**. |
| `/odoo-dashboard-insights/` | `/odoo/dashboard-insights` (once built) | Not aliased — **404s today**, and destination doesn't exist yet. |
| `/odoo-erpp/` (typo slug, still indexed) | `/odoo` | Not aliased — **404s today**. |
| `/odoo-for-construction/` | `/industries/construction` (once built) | Post exists old side; destination TBD. |
| `/odoo-facility-management-software/` | `/industries/facility-management` (once built) | Same. |
| `/odoo-real-estate-software/` | `/industries/real-estate` (once built) | Same. |
| `/odoo-education-management-system/` | `/industries/education` (once built) | Same. |
| `/odoo-restaurant-management-software/` | `/industries/restaurants` (once built) | Same. |
| `/odoo-implementation-process-by-etriplesoft/` | `/odoo/implementation` (once built) | Same. |
| `/odoo-for-accounting/` | `/odoo/accounting` (once built) | Same. |
| `/odoo-hr-software/` | `/odoo/hr` (once built) | Same. |
| `/odoo-itsm-helpdesk-module/` | `/odoo/itsm-helpdesk` (once built) | Same. |
| `/odoo-kpi-dashboard-real-time-business-insights/`, `/odoo-roi-return-on-investment/`, `/signs-you-need-erp-system/` | `/insights/<same-slug>` | Already match — no redirect needed, article slugs carried over verbatim. |
| Remaining `post-sitemap.xml` posts not yet represented here (`odoo-vs-zoho-vs-quickbooks-comparison`, `odoo-implementation-timeline-how-long`, `facility-management-software-guide`, `odoo-implementation-cost-egypt`, `erp-system-egypt-odoo-vs-sap-vs-dynamics`, `data-protection-compliance-egypt-2026`, `how-to-choose-managed-it-services-provider-egypt`) | `/insights/<slug>` (once migrated) | Not yet content-modeled on the new site. Decide per article: migrate now or redirect to `/insights` as an interim (never to `/`). |
| `/ar/*` (all Arabic routes — `/ar/ar-home/`, `/ar/about-us/`, etc.) | — | New site is English-only; no i18n routing exists. Needs an explicit decision (see §5) before these can be redirected anywhere sensible. |

No case of old→intermediate→final chaining exists today because no redirects
exist at all yet; the rule is noted here so the implementation phase doesn't
introduce one (e.g. don't redirect `/odoo-erpp/` → `/odoo-erp-egypt/` → `/odoo`).

## 4. Placeholder content

The codebase is notably disciplined here already — no `lorem ipsum`, no `TODO`/`FIXME`
markers, and no fabricated statistics found in `app/`/`src/`. Specific things worth
tracking as still-open rather than "placeholder":

- Homepage `Stats` block (`app/page.tsx`) asserts **"250+ Projects Delivered"**,
  **"3 Countries"**, **"10+ Years of Experience"**, **"9+ Industries Served"** —
  these read as real claims, not placeholders, but none are marked as sourced/verified.
  See §5 (they conflict with old-site numbers already flagged unverified).
- `industries` array (`src/lib/data.ts:642`) only has 6 of the 8 target
  industries — Facility Management and Restaurants are absent from the bento grid
  the brief's `/industries` overview should represent.
- `/portfolio/[project]` pages explicitly self-label as "illustrative," "not a
  published client case study" — correct, honest handling, not a defect, but
  flagged because the brief says "fabricated case studies" must be avoided; this
  page is already compliant, worth preserving that language when
  Success-Stories/`/portfolio` is rebuilt.
- Contact page (`src/components/company-pages.tsx:192`) explicitly defers office
  address/phone detail: "Detailed office and phone information should be
  confirmed with our team before travel" — correct honest handling given the old
  site's own internal contradictions on this (see §5), but it means the site
  currently has **no address or phone number published anywhere**, which is a
  gap for local SEO / NAP consistency once real data is confirmed.

## 5. Unresolved business facts

Carried over from `docs/CONTENT-INVENTORY.md`'s "VERIFY BEFORE PUBLISHING" list,
still unresolved as of this audit (none of these appear anywhere in the current
build, which is why they're "unresolved" rather than "wrong" — but they block
writing real numbers into the Stats block, About page, or footer):

- Founding year: old site's own meta description says "since 2014," its body
  copy says "since 2018." Needs one confirmed number.
- "200+ businesses" / "200+ completed projects" / "200+ ERP implementations" —
  three slightly different claims on the old site; current new-site Stats block
  independently claims "250+ Projects Delivered," which doesn't match any of
  them. Needs a single confirmed figure.
- "Reduce operational costs by up to 40%" (AI automation claim) — no source on
  old site; not currently repeated on new site (good), but likely to be asked
  for when the AI page is finished — needs a real source or removal.
- "App Store-ready products within 8–12 weeks" — same status; not currently on
  new site.
- All 8 testimonials on the old homepage — need named-client permission before
  reuse; new site currently has a `Testimonials` component (`src/components/site.tsx`)
  whose content should be checked against this constraint before the homepage
  phase ships.
- Odoo Gold Partner / Microsoft Certified Partner status — repeated as fact on
  the new site already (`servicePages.odoo.checks`, About page copy per
  `docs/CONTENT-INVENTORY.md`); needs current certification confirmation, not
  just carried-over old-site claims.
- Office addresses and phone numbers for Cairo, Riyadh, Dubai — old site's Home
  footer and Contact page disagree with each other; new site has deferred
  publishing any address/phone (see §4), which is the right call until this is
  confirmed.
- CEO name/quote (Khaled Ahmed Magdy) on old About page — not currently
  reproduced on the new About page; needs a decision on whether to keep a
  leadership quote and, if so, reconfirm attribution/wording before publishing.
- Whether `/request-demo/` and `/solutions/` are meaningful standalone pages to
  recreate, or the old site's IA around "Book a Demo" and "solutions" should
  simply collapse into `/contact` and the homepage `#solutions` anchor
  (current new site already uses `#solutions` as a homepage anchor, which is
  probably right — needs sign-off, not more building).
- Arabic (`/ar/*`) — no decision on record for whether the new site drops
  Arabic entirely, redirects Arabic URLs to their English equivalents, or a
  future phase reintroduces `hreflang`/i18n. This blocks a large chunk of the
  redirect table in §3.

## 6. Assets still required

- Real photography/screenshots for the 5 missing Odoo sub-pages and 2 missing
  industry pages (Facility Management, Restaurants) — `assets/` and
  `design/assets/` already have generated reference art for most existing
  pages (`design/assets/odoo/`, `design/assets/cloud/`, etc.) but nothing yet
  for `implementation`, `accounting`, `hr`, `itsm-helpdesk`,
  `dashboard-insights`, `facility-management`, `restaurants`.
- A confirmed, current Company Profile PDF if that download CTA is carried
  forward from the old homepage (old asset:
  `E-TripleSoft-Company-Profile.pdf`) — not present anywhere in `public/` or
  `assets/` today.
- Real testimonial attribution assets (name, title, company, and reuse
  permission) if testimonials are kept — see §5.
- Office/location imagery or a map graphic, once addresses are confirmed.
- OG/social share images per route for the metadata work in §7 — none exist
  today (`app/layout.tsx` metadata has no `openGraph`/`twitter` block).

## 7. SEO migration status

- **No `app/sitemap.ts`** — new site emits no sitemap at all today. Old site
  runs Rank Math with a proper sitemap index; equivalent must exist before
  launch so Search Console can be repointed.
- **No `app/robots.ts`/`public/robots.txt`** — nothing found in the repo.
- **No redirects** — see §3; this is the most urgent SEO item, since every
  currently-indexed old URL not covered by the coincidental slug aliases will
  return a soft experience via the generic 404 instead of preserving link
  equity.
- **No structured data** — no `application/ld+json` anywhere in `app/` or
  `src/`. Old site is a WordPress/Rank Math install which typically emits
  Organization/LocalBusiness/Article schema; none of that is replicated yet.
- **No Open Graph / Twitter metadata** — `app/layout.tsx` only sets
  `title`/`description`. Per-route `generateMetadata` calls
  (`[slug]`, `insights/[article]`, `portfolio/[project]`) also only set
  `title`, no `description` override, no OG image, no canonical URL.
- **Title-only per-route metadata** — every dynamic route's
  `generateMetadata` returns `{ title }` alone; descriptions fall back to the
  root layout's generic description, which is a missed on-page SEO opportunity
  for every service/industry/insight page.
- **Legacy Arabic URL fate undecided** — see §5; until resolved, those cannot
  be added to the sitemap or redirect map correctly.
- **Positive**: URL slugs for the 3 migrated insight articles match the old
  site's post slugs exactly (`odoo-kpi-dashboard-real-time-business-insights`,
  etc.), so those specific migrations need no redirect at all — good practice
  to keep for any future article migration.

## 8. Accessibility issues

Spot-checked `src/components/site.tsx` (Header/Footer/shared primitives) and
`app/layout.tsx`; a full page-by-page audit is deferred to the accessibility
skill during each phase, but initial observations:

- Skip link, `aria-label`s on icon-only buttons (search, mobile toggle,
  offices/support footer links), `aria-expanded` on the nav dropdown trigger,
  and `<html lang="en">` are all already in place — solid baseline.
- Nav dropdown panels (`.dropdown-panel`) open on `onMouseEnter`/hover with a
  `scheduleClose` timer and also toggle via a `<button>` with `aria-expanded`;
  worth re-verifying keyboard-only operation (Tab/Escape) once the Company
  dropdown and any new Odoo/Services dropdowns are built out per the target nav,
  since hover-based reveal patterns are a common source of keyboard traps.
- Footer "Back to top" button calls `window.scrollTo({ behavior: "smooth" })`
  unconditionally — should respect `prefers-reduced-motion` (currently the only
  motion-preference handling found sitewide is 3 occurrences in
  `app/globals.css`; this JS-driven scroll isn't gated by it).
- 27 raw `<img>` tags remain across `src/components/*.tsx` (e.g. the footer
  logo in `site.tsx`) instead of `next/image` — no functional a11y defect by
  itself, but these should be checked individually for `alt` text quality as
  each page is touched.
- Full WCAG contrast/focus-visible/landmark audit not yet run against rendered
  pages — defer to the accessibility skill per-phase rather than claiming
  coverage here.

## 9. Performance issues

- `next.config.ts` sets `images: { unoptimized: true }` — Next's image
  optimization pipeline is fully disabled sitewide, meaning every image ships
  at its source size/format with no automatic resizing or modern-format
  negotiation. This is the single biggest sitewide performance lever available
  and should be revisited (likely needs `sharp`, already a dependency, wired
  up properly) rather than left disabled by default.
- 27 raw `<img>` tags (see §8) bypass `next/image` entirely, compounding the
  above.
- `assets/` (188MB) is a large uncompressed source-asset tree sitting in the
  repo alongside `public/` (8.1MB of what's actually served) — not itself a
  runtime perf issue since only `public/` ships, but worth confirming nothing
  under `assets/` is accidentally referenced at runtime instead of an
  optimized `public/` copy.
- No ESLint configuration exists in the repo at all (no `.eslintrc*`,
  `eslint.config.*`, and no `lint` script in `package.json`) — the brief's
  working rule calls for "run lint" every phase; this needs to be set up
  before that step is meaningful, or explicitly acknowledged as a gap.
- `app/globals.css` is a single 8,600+ line global stylesheet — not
  inherently a defect (no CSS-in-JS runtime cost, ships as one cacheable file),
  but worth watching for unused/dead rules accumulating as pages are reworked
  phase by phase.

## 10. Completed work

- **Phase 0 (audit):** full repository inspection, a clean `tsc --noEmit` and
  `next build` run, comparison of shipped routes against the target
  architecture, and comparison of the live `etriplesoft.com` sitemaps against
  both the new site's routes and `docs/CONTENT-INVENTORY.md`'s existing
  governance notes. No application code was changed in this phase.

- **Phase 1 (design-token normalization):** Confirmed every service/company
  page (`/odoo`, `/cloud`, `/ai`, `/web`, `/mobile`, `/digital-marketing`,
  `/insights`, `/about`, `/careers`) is rendered by its own dedicated
  `*ReferencePage` component, each shipping a **fully independent CSS Module**
  that redeclared its own `--ink`/`--blue`/`--muted`/`--line`/`--pale`/`--cyan`
  (or `--accent`/`--copy`, or `--about-*`, or `--ai-*` prefixed) custom
  properties with a slightly different hex value per file — the root cause of
  the inconsistent colors, radii and shadows the homepage doesn't have.
  Normalized this by:
  - Extending the single canonical token set in `app/globals.css` `:root`
    (already the system the homepage and shared `Header`/`Footer`/`Button`/
    `SectionHeading` components in `src/components/site.tsx` use) with
    `--cyan` (the shared secondary accent every page was independently
    reinventing), a radius scale (`--radius-sm/--radius/--radius-lg/--radius-pill`),
    a shadow scale (`--shadow-sm/--shadow/--shadow-lg`), and motion tokens
    (`--ease`, `--duration`).
  - In every one of the 9 page-level CSS Modules
    (`ai/AIReferencePage`, `cloud/CloudReferencePage`, `mobile/MobileReferencePage`,
    `web/WebReferencePage`, `digital-marketing/DigitalMarketingReferencePage`,
    `odoo/OdooReferencePage`, `insights/InsightsReferencePage`,
    `about-reference`, `careers-reference`), removed the locally-invented hex
    values and re-pointed each page's local custom-property names at the
    shared global tokens (e.g. `--ink: var(--navy)`, `--blue`/`--muted`/`--line`/
    `--pale` now inherit directly from `:root` instead of being redeclared).
    Every downstream `var(--ink)`, `var(--blue)`, etc. usage inside those
    files (hundreds of rules) now resolves to the one shared palette without
    touching each individual rule.
  - Fixed a handful of stray literal hex colors that duplicated `--ink`/`--muted`
    outside the top token block (`AIReferencePage.module.css`,
    `OdooReferencePage.module.css`, `about-reference.module.css`).
  - Normalized the homepage's own `OdooHero.module.css` (rendered directly on
    `/`) — its heading/accent/button colors were near-but-not-exact matches of
    the canonical navy/blue/muted; now reference `var(--navy)`/`var(--blue)`/
    `var(--muted)` and the new radius/shadow/motion tokens directly.
  - Swapped every exact-match literal `border-radius: 999px/10px/6px/16px`
    across all modules and `globals.css` for `var(--radius-pill/--radius/
    --radius-sm/--radius-lg)` — a zero-visual-diff tokenization (same computed
    values), done sitewide via scripted search/replace since it was risk-free.
  - Verified with `tsc --noEmit` and `next build` after each stage; final
    build is clean (48 static params, no new warnings).
  - **Confirmed already-consistent and left alone:** `Header`/`Footer` (one
    implementation in `site.tsx`, used everywhere via `app/layout.tsx` — no
    duplicates found), `.container` width (every module already computed it
    from `var(--container)`, just needed the pill/radius tokenization above),
    the canonical `.button`/`.button.gradient` system in `globals.css`.
  - **Deliberately deferred (flagged, not fixed, to avoid a blind redesign):**
    hero display-type scale still varies page-to-page (roughly 46px on
    `/cloud`/`/odoo` vs. 82–86px on `/ai`/`/mobile`/`/web`/`/digital-marketing`/
    `/insights`); section vertical rhythm (`padding-block`) still varies
    per page (12px–58px, vs. the homepage's 34px); decorative gradient/blob
    background colors and multi-stop button gradients remain page-specific;
    none of the 9 pages' markup yet consumes the shared `<Button>`/
    `<SectionHeading>` React components from `site.tsx` — each still renders
    its own bespoke hero/button/section-heading JSX against its own module
    classes. Re-tuning any of these requires visual verification (the
    `visual-regression` skill) before/after screenshots per breakpoint, which
    this pass did not run, so they were left untouched rather than guessed at
    blind. Recommend this as the next phase once sign-off is given to touch
    layout/markup rather than tokens only.

---

### Next recommended phase

Given the findings above, the highest-leverage first implementation phase is
**redirects + sitemap/robots** (§3 and §7): it's additive, doesn't touch any
existing page's markup or design, immediately stops old indexed URLs from
404ing, and unblocks Search Console re-verification — all without needing the
unresolved business facts in §5 or the missing routes in §2 to be settled
first. Recommend sequencing the `/odoo/*` and `/industries/*` sub-pages after
that, since real content already exists for them on the old site to migrate
from.

- **Phase 3 (legacy redirects, batch 1):** 11 legacy WordPress URLs now 308 to their
  final route in one hop (with and without trailing slash, query strings preserved).
  Data lives in `src/lib/redirects.ts`, served via `redirects()` in `next.config.ts`,
  verified by `npm run test:redirects` (needs a running server; `BASE_URL` configurable).
  Batch 2 (10 `/odoo/*` and `/industries/*` sources) is defined as `pendingRedirects`
  but **not served**: every destination is a page that does not exist yet.

- **Phase 5 (Services hub):** `/services` added (`app/services/page.tsx`, copy in
  `src/components/services/content.ts`, styles in `ServicesHub.module.css`). Added
  `metadataBase` (https://etriplesoft.com) to `app/layout.tsx` so canonical/OG URLs
  resolve absolute. "Services Overview" added to the Services nav/footer list.
  Still open: no OG image, no sitemap.ts, `/odoo/*` capability links 404 until built.

- **Phase 6 (/odoo hub):** `/odoo` extended with outcomes, anchor nav, featured modules,
  five priority industries, integrations, per-country localization, e-invoicing context,
  8 FAQs, related pages, mid-page and closing CTAs. Unverified content **removed**:
  the client-logo strip, "250+ / 98%" stats and the named "40% efficiency" testimonial.
  Topic links resolve through `src/lib/odoo-pages.ts` (all `exists: false` → consultation
  fallback). **Needs human review before launch:** Gold Partner status, localization and
  ETA/ZATCA copy (see TODOs in `src/components/odoo/content.ts`).

- **Phase 7 (/odoo/implementation):** page shipped from the verified legacy extraction
  (`src/components/odoo/implementation/source.ts`, source map in
  `docs/implementation-source-map.md`). `odooRelatedPages.implementation.exists = true`;
  `/odoo-implementation-process-by-etriplesoft` moved to active redirects (308 -> 200).
  First `app/sitemap.ts` added (19 canonical routes; article/project detail pages not yet
  included). Legacy durations gated by `SHOW_LEGACY_DURATIONS = false`.
  Open: legacy stage content, regional wording and Saudi/ETA go-live claims need owner and
  legal review; `/odoo-implementation-process` duplicate slug has no redirect yet.

- **Phase 8 (/odoo/accounting):** page shipped from the verified legacy extraction
  (`src/components/odoo/accounting/source.ts`). `odooRelatedPages.accounting.exists = true`;
  `/odoo-for-accounting` now redirects (308 -> 200); sitemap updated. Only `legacy` items
  render; OCR, statement import, live bank feeds, cash-flow forecasting, multi-jurisdiction
  in one instance, consolidation and named banks/payroll systems are withheld pending
  delivery-team confirmation. Regional wording differs slightly from `/odoo` (see phase notes).

- **Phase 10 (/odoo/itsm-helpdesk, /odoo/dashboard-insights):** both pages shipped on a
  shared template (`src/components/odoo/child/`), with `/odoo/implementation` and
  `/odoo/accounting` migrated onto it (11-line page files, typed `page.config.ts` each).
  `renderable()` drops `confirm` items and `defineOdooPage()` fails the build on any "TODO".
  Redirects `/odoo-itsm-helpdesk-module` and `/odoo-dashboard-insights` now active. `/odoo/hr`
  is NOT built (its `hr/source.ts` is staged, unused); its `exists` flag stays false.

- **Phases 15-17 (Success Stories, Insights, FAQ):** see `docs/PHASES-15-17-AUDIT.md`,
  `docs/CLAIMS-REGISTER.md` and `docs/FAQ-NEEDS-VERIFICATION.md`. `/portfolio` is rebuilt
  around `src/data/portfolio.ts` (58 seeded items, none approved, so none render). 10 articles
  migrated into `src/content/insights/` (typed Markdown-subset modules) with redirects; legacy
  filler kept as noindex drafts. `/faqs` renders 51 published answers from `src/data/faqs.ts`;
  136 English + 23 Arabic-only entries are held. New scripts: `test:links`,
  `scripts/build-portfolio-images.mjs`, `scripts/build-insights-images.mjs`.
