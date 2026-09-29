# Phase 21: site-wide SEO audit

Re-run any time: `npm run build && npm start`, then `BASE_URL=http://localhost:3000 npm run test:seo`.
The crawler checks titles, descriptions, canonicals, robots, headings, Open Graph, Twitter, JSON-LD, alt attributes, internal links, sitemap and redirect consistency. Last run: **37 pages, 0 errors**, 2 warnings (two titles over 70 characters, see below).

## 1. Architecture

- `src/lib/site.ts`: one `siteConfig` (URL from `company.websiteUrl`, default title/description, OG fallback image, logo). No other file hardcodes the host.
- `src/lib/seo.ts`: `pageMetadata()` builds title, description, canonical, Open Graph and Twitter card for every page. Schema builders: `organizationJsonLd`, `serviceJsonLd`, `articleJsonLd`, `faqJsonLd`. `BreadcrumbSchema`, `Breadcrumb` and `CrumbStrip` live in `src/components/breadcrumb.tsx`.
- `src/lib/page-seo.ts`: title and description for every route served by `app/[slug]/page.tsx`. The sitemap reads the same registry.
- `app/robots.ts`, `app/sitemap.ts`, `public/images/og-default.png` (built by `scripts/build-og-image.mjs`), `app/apple-icon.png`.

## 2. Route audit

Every crawlable production route (all INDEX, 1 h1, self-canonical, in the sitemap, at least one inbound link):

| URL | Robots | Title | Description | Canonical | H1 | Schema | Sitemap | Inbound links |
|---|---|---|---|---|---|---|---|---|
| / | index | ETripleSoft — Digital Transformation Built Around Your Business | Odoo ERP, apps, AI and digital solutions for ambitious companies across Egypt, the UAE and Saudi Arabia. | / | 1 | Organization | yes | 147 |
| /about | index | About Us | ETripleSoft | We help businesses across Egypt, the UAE and Saudi Arabia transform, grow and lead with Odoo ERP and digital solutions built for real work. | /about | 1 | BreadcrumbList | yes | 73 |
| /ai | index | AI Automation Services | ETripleSoft | Automate processes, empower teams and unlock growth with practical AI solutions built for business. | /ai | 1 | BreadcrumbList,Service | yes | 81 |
| /careers | index | Careers | ETripleSoft | Explore careers at ETripleSoft, a team of problem-solvers and builders creating digital solutions from Cairo, Saudi Arabia and the UAE. | /careers | 1 | BreadcrumbList | yes | 72 |
| /cloud | index | Cloud Security Solutions in Egypt | ETripleSoft | Design, secure and manage modern cloud environments. ETripleSoft helps organizations in Egypt protect their cloud, data and business. | /cloud | 1 | BreadcrumbList,Service | yes | 83 |
| /contact | index | Contact Us | ETripleSoft | Contact ETripleSoft about Odoo ERP, cloud and security, AI automation, web, mobile or digital marketing. Offices in Cairo, Riyadh and Dubai. | /contact | 1 | BreadcrumbList | yes | 509 |
| /digital-marketing | index | Digital Marketing Agency | ETripleSoft | Data-driven marketing to grow your brand across Egypt, the UAE and Saudi Arabia. | /digital-marketing | 1 | BreadcrumbList,Service | yes | 81 |
| /faqs | index | FAQ | ETripleSoft | Answers about Odoo, implementation, pricing, support and ETripleSoft services, organised by topic. | /faqs | 1 | FAQPage,BreadcrumbList | yes | 40 |
| /industries | index | Industries | ETripleSoft | Explore how ETripleSoft maps Odoo to construction, real estate, facility management, restaurants, education, retail, healthcare and logistics workflows. | /industries | 1 | BreadcrumbList | yes | 159 |
| /industries/construction | index | Odoo for Construction Companies | ETripleSoft | Connect construction projects, procurement, materials, subcontractor workflows, billing and accounting with an Odoo implementation shaped for Egypt and the GCC. | /industries/construction | 1 | FAQPage,BreadcrumbList | yes | 75 |
| /industries/education | index | Odoo Education Management System | ETripleSoft | Connect admissions, eLearning, documents, fees, staff coordination and communications with a carefully scoped Odoo solution for education providers. | /industries/education | 1 | FAQPage,BreadcrumbList | yes | 74 |
| /industries/facility-management | index | Odoo Facility Management Software | ETripleSoft | Connect assets, preventive maintenance, helpdesk requests, field service, spare parts and finance with Odoo for facility operations in Egypt and the GCC. | /industries/facility-management | 1 | FAQPage,BreadcrumbList | yes | 75 |
| /industries/real-estate | index | Odoo Real Estate Software | ETripleSoft | Connect property records, CRM, sales or leasing, contracts, billing, collections and maintenance with an Odoo solution for Egypt, Saudi Arabia and the UAE. | /industries/real-estate | 1 | FAQPage,BreadcrumbList | yes | 74 |
| /industries/restaurants | index | Odoo Restaurant Management Software | ETripleSoft | Connect restaurant Point of Sale, kitchen workflows, inventory, purchasing, delivery channels, payments and accounting with Odoo in Egypt and the GCC. | /industries/restaurants | 1 | FAQPage,BreadcrumbList | yes | 75 |
| /insights | index | Insights | ETripleSoft | Practical guides on Odoo, ERP, implementation cost, e-invoicing and IT from ETripleSoft, for businesses in Egypt, Saudi Arabia and the UAE. | /insights | 1 | BreadcrumbList | yes | 83 |
| /insights/data-protection-compliance-egypt-2026 | index | Data Protection Compliance in Egypt: 2026 Business Guide | ETripleSoft | A practical guide to data protection compliance Egypt businesses need in 2026 — key requirements, penalties, and a compliance checklist. | /insights/data-protection-compliance-egypt-2026 | 1 | Article,FAQPage,BreadcrumbList | yes | 1 |
| /insights/erp-system-comparison | index | ERP System Egypt: Odoo vs SAP vs Microsoft Dynamics | ETripleSoft | Compare Odoo, SAP, and Microsoft Dynamics for Egypt, UAE & Saudi Arabia — pricing, features, and which ERP fits your busines | /insights/erp-system-comparison | 1 | Article,FAQPage,BreadcrumbList | yes | 3 |
| /insights/facility-management-software-guide | index | Facility Management Software: Complete Guide | ETripleSoft | Compare CAFM, CMMS, and IWMS facility management software for Egypt, Saudi Arabia, and the UAE. Book a free demo with Etriplesoft. | /insights/facility-management-software-guide | 1 | Article,FAQPage,BreadcrumbList | yes | 3 |
| /insights/how-to-choose-managed-it-services-provider-egypt | index | How to Choose a Managed IT Services Provider in Egypt | ETripleSoft | Learn what to look for in a managed IT services provider Egypt businesses trust — from SLAs to cybersecurity. Free consultation available. | /insights/how-to-choose-managed-it-services-provider-egypt | 1 | Article,FAQPage,BreadcrumbList | yes | 2 |
| /insights/odoo-implementation-cost | index | Odoo Implementation Cost in Egypt, UAE & Saudi Arabia (2026) | ETripleSoft | Odoo ERP implementation cost in Egypt, UAE & Saudi Arabia — licensing, customization, and how to budget accurately in 2026. | /insights/odoo-implementation-cost | 1 | Article,FAQPage,BreadcrumbList | yes | 13 |
| /insights/odoo-implementation-timeline | index | Odoo Implementation Timeline: How Long Does It Take? | ETripleSoft | See a realistic Odoo implementation timeline by business size, plus the e-invoicing factor most guides skip. Book a free demo with Etriplesoft. | /insights/odoo-implementation-timeline | 1 | Article,FAQPage,BreadcrumbList | yes | 5 |
| /insights/odoo-kpi-dashboard-real-time-business-insights | index | Odoo KPI Dashboards: Real-Time Insights | ETripleSoft | See sales, stock, and cash flow live in one Odoo KPI dashboard — no more waiting for month-end reports. Built by Etriplesoft. Book a free demo. | /insights/odoo-kpi-dashboard-real-time-business-insights | 1 | Article,FAQPage,BreadcrumbList | yes | 6 |
| /insights/odoo-roi-return-on-investment | index | Odoo ROI: How Long Until It Pays for Itself? (2026) | ETripleSoft | How Odoo ROI works, real sources of savings, a simple calculation example, and typical payback periods in Egypt, UAE & Saudi Arabia. | /insights/odoo-roi-return-on-investment | 1 | Article,FAQPage,BreadcrumbList | yes | 8 |
| /insights/odoo-vs-zoho-vs-quickbooks | index | Odoo vs Zoho vs QuickBooks: Which Fits Your Business? | ETripleSoft | An honest Odoo vs Zoho vs QuickBooks comparison for Egypt, Saudi Arabia, and the UAE — pricing, e-invoicing, and when each fits. Book a free demo. | /insights/odoo-vs-zoho-vs-quickbooks | 1 | Article,FAQPage,BreadcrumbList | yes | 4 |
| /insights/signs-you-need-erp-system | index | 10 Signs You Need an ERP System, Not More Spreadsheets | ETripleSoft | Ten signs your business has outgrown spreadsheets — data errors, reporting delays, and when to switch to an ERP system. | /insights/signs-you-need-erp-system | 1 | Article,FAQPage,BreadcrumbList | yes | 8 |
| /mobile | index | Mobile Application Development | ETripleSoft | We design and develop mobile apps for iOS and Android that help you reach customers, streamline operations and turn ideas into growth. | /mobile | 1 | BreadcrumbList,Service | yes | 78 |
| /odoo | index | Odoo ERP Implementation in Egypt, UAE & Saudi Arabia | ETripleSoft | Implement, localize and scale Odoo ERP with ETripleSoft: accounting, HR and payroll, helpdesk, dashboards and industry solutions for Egypt, the UAE and Saudi Arabia. | /odoo | 1 | BreadcrumbList,Service | yes | 104 |
| /odoo/accounting | index | Odoo Accounting & E-Invoicing in Egypt, UAE & Saudi Arabia | ETripleSoft | Odoo accounting for Egypt, the UAE and Saudi Arabia: invoicing, expenses, reconciliation and reporting, plus e-invoicing connections for ETA and ZATCA. | /odoo/accounting | 1 | BreadcrumbList | yes | 84 |
| /odoo/dashboard-insights | index | Odoo Dashboard & Insights with Access Management | ETripleSoft | Live dashboards on your Odoo data, plus customised access management so each person sees only what they should. Built on Odoo, with Arabic and right-to-left support. | /odoo/dashboard-insights | 1 | BreadcrumbList | yes | 81 |
| /odoo/implementation | index | Odoo Implementation: Our Process, Stage by Stage | ETripleSoft | How ETripleSoft delivers Odoo projects: discovery, design, configuration, migration, testing, training, go-live and support across Egypt, the UAE and Saudi Arabia. | /odoo/implementation | 1 | BreadcrumbList | yes | 93 |
| /odoo/itsm-helpdesk | index | Odoo ITSM & Helpdesk Module for IT Teams | ETripleSoft | An ITSM and helpdesk module built on Odoo Enterprise: tickets, problems, changes, assets, SLAs and a knowledge base in one system, aligned with ITIL concepts. | /odoo/itsm-helpdesk | 1 | BreadcrumbList | yes | 79 |
| /portfolio | index | Success Stories | ETripleSoft | Selected work and the capabilities behind it: Odoo ERP, cloud and security, AI automation, web, mobile and digital marketing from ETripleSoft. | /portfolio | 1 | BreadcrumbList | yes | 39 |
| /privacy | index | Privacy Policy | ETripleSoft | How ETripleSoft collects, uses and discloses your information when you use our website, and your privacy rights. | /privacy | 1 | BreadcrumbList | yes | 38 |
| /services | index | Digital Transformation Services | ETripleSoft | Odoo ERP at the core, supported by cloud and security, AI automation, web, mobile and digital marketing. One connected portfolio from ETripleSoft. | /services | 1 | BreadcrumbList | yes | 78 |
| /support-ticket | index | Support | ETripleSoft | Get help from ETripleSoft: existing customer support, sales enquiries and general contact, each with its own path. | /support-ticket | 1 | BreadcrumbList | yes | 77 |
| /terms | index | Terms & Conditions | ETripleSoft | The terms and conditions that govern your use of the ETripleSoft website. | /terms | 1 | BreadcrumbList | yes | 37 |
| /web | index | Web Design Company in Egypt | ETripleSoft | We design and develop websites and online stores that are clear, useful and manageable, and that help your business grow. | /web | 1 | BreadcrumbList,Service | yes | 77 |

Routes not in that table:

| Route | Class | Notes |
|---|---|---|
| `/insights/<draft slug>` (10 legacy drafts, e.g. `seo-strategies`) | NOINDEX (`noindex, nofollow`) | Generic filler kept by Phase 16; not in the sitemap; **no longer linked** from the site |
| `/portfolio/<project>` (7 illustrative pages) | NOINDEX (added) | Were indexable, unlinked and not in the sitemap; now `noindex, follow` with a self canonical |
| `/api/inquiries` | Excluded (`Disallow: /api/`) | Form endpoint |
| `/contact?service=...` | Same page | Prefill deep links; canonical is `/contact` |
| Legacy WordPress URLs | REDIRECT | See section 9 |
| Unknown URLs | 404 (Next default, noindex) | Not redirected to the homepage |

## 3. Metadata changes

- **Missing canonicals added (8):** `/`, `/about`, `/careers`, `/cloud`, `/ai`, `/web`, `/mobile`, `/digital-marketing`.
- **Duplicate description fixed (8 pages shared one generic description):** every page now has its own, taken from its visible hero copy.
- **Service pages** (`/cloud`, `/ai`, `/web`, `/mobile`, `/digital-marketing`) previously had a title only.
- **Open Graph / Twitter:** 27 pages had no `og:image` and none had Twitter cards. All 37 now have `og:title/description/url/type/image/site_name/locale` and `summary_large_image` Twitter cards. Articles use `og:type=article` with `publishedTime` and their own self-hosted image; other pages use `/images/og-default.png` (1200x630, self-hosted). No `twitter:site` or `twitter:creator`, because no verified X account exists.
- **Article title fix:** the KPI-dashboard article's SEO title contained a hardcoded "| Etriplesoft", producing a doubled brand.
- **Long descriptions shortened** (`/odoo`, `/odoo/accounting`, `/odoo/implementation`) to about 160 characters, wording taken from the existing copy.
- Titles are all unique. Two remain over 70 characters with the brand suffix (`/insights/odoo-implementation-cost`, `/odoo/accounting`); they are accurate, so they are left for the owner to shorten if wanted.
- No claims were added (no rankings, counts, years, guarantees or 24/7).

## 4. Indexability decisions

- **INDEX:** 37 pages: home, hubs (services, industries, insights, portfolio, faqs), Odoo pages, 5 service pages, 5 industry pages, 10 published articles, about, careers, contact, support, privacy, terms. Legal and support pages stay indexable (standard practice; no policy excludes them).
- **NOINDEX:** legacy drafts and illustrative project pages. The tag is delivered by page metadata and the pages stay crawlable so crawlers can read it (robots.txt does not block them).
- **Accidental noindex:** none found on production pages. **Accidentally indexable:** `/portfolio/<project>`, fixed.
- Pagination, filters and search do not exist as URLs; the Insights category filter is client-side state. Nothing to block.

## 5. Structured data

| Type | Where | Source |
|---|---|---|
| Organization (`@id` `https://etriplesoft.com/#organization`) | Homepage only | `company.ts`: name, logo (real logo file, 1600x393), email, phones per office, `sameAs` (LinkedIn, Instagram), office `Place` entries |
| Organization references (`@id`) | Article author and publisher, Service provider | Same entity |
| Service | `/odoo`, `/cloud`, `/ai`, `/web`, `/mobile`, `/digital-marketing` | name, description, url, provider only. No offers, price, rating or `areaServed` |
| Article | 10 published insights | headline, description, url, `datePublished` (real migrated date), image, author = organization. No `dateModified` (none stored) |
| BreadcrumbList | every page except home | Matches the visible breadcrumb labels (asserted by the crawler) |
| FAQPage | `/faqs`, 5 industry pages, 10 articles | Generated from the same data the page renders; the crawler verifies every question and answer text is visible in the page |

- **Removed duplicates:** the Organization block that layout injected on every page (37 copies, no `@id`), the inline Organization inside each Article's publisher, and a separate hand-written FAQPage builder in `IndustryPage`.
- **LocalBusiness deliberately not used.** Offices are `Place` entries under the Organization, from the verified office data. Saudi has city only (address unconfirmed). No hours, no geo coordinates, no price range.
- Never emitted: ratings, reviews, prices, awards, employee counts, founding date, opening hours, certifications.

## 6. Sitemap and robots.txt

- `sitemap.xml`: **37 URLs** built from the route registry, the `exists` flags in `odoo-pages.ts`, the industry data and published articles. All return 200, are self-canonical and indexable (checked by the crawler).
- Excluded: 10 draft articles, 7 project pages, all legacy redirect sources, `/api`, `/odoo/hr` (not built yet), 404s.
- `lastModified` only on the 10 articles, from their real publication date. No `changefreq` or `priority`.
- `robots.txt`: `User-Agent: *`, `Allow: /`, `Disallow: /api/`, `Sitemap: https://etriplesoft.com/sitemap.xml`. `/_next`, CSS, JS and images stay crawlable.

## 7. Internal linking

- Crawl of all 37 pages: 0 internal 404s, 0 links that pass through a redirect, 0 `#` or `javascript:` hrefs, 0 legacy WordPress or absolute `etriplesoft.com` links in rendered content, 0 orphans.
- **Fixed:** the Digital Marketing page had three "Read more" cards linking to noindex draft articles. The section was removed (no published marketing article exists); re-add it when one does.
- Existing contextual links (industries to Odoo modules, articles to services, FAQ links) were kept. No links were added mechanically.

## 8. Headings and images

- **Headings:** the footer column titles were `h4`s, causing an `h2 > h4` skip on every page; they are now non-heading elements with the same look. Odoo ITSM step titles went from `h4` to `h3`. The support hero callout `h3` (which caused `h1 > h3`) is now a paragraph. Every page has exactly one h1.
- **Alt text:** all `<img>` have an `alt` attribute. Hero background photos (which used "<title> — ETripleSoft solutions") are now `alt=""` because the h1 carries the meaning. Decorative icons were already `alt=""`. The header and footer logos use "ETripleSoft".
- **Flagged, not changed (OWNER CONFIRMATION):** client-logo strips (Orascom, Elsewedy Electric, CIB, Vodafone, Samsung, Etisalat), "Odoo Gold Partner" and "Microsoft Partner" badges, and a testimonial photo. The alt text is accurate to each image, but the claims themselves belong to the Claims Register and need owner approval.

## 9. Redirects

- `test:redirects`: 349 checks pass. No chains and no self-loops (also asserted inside `test:seo`); every destination returns 200 and is self-canonical. No redirect points to the homepage or to unrelated content.
- **New:** `www.etriplesoft.com/*` to `https://etriplesoft.com/*` (permanent, one hop) in `next.config.ts`, matching the apex used everywhere. No DNS was changed. Whether http to https is enforced is a hosting question.
- Trailing-slash and Arabic legacy rules from earlier phases are unchanged.

## 10. Language

The site is English-only, so **no hreflang** is emitted (legacy `/ar/` URLs redirect to English pages under earlier phases). Add hreflang only if real Arabic pages ship.

## 11. Identity metadata

`app/icon.png` (brand mark) existed; `app/apple-icon.png` (180x180, same mark) was added. No Vercel, Next or template branding found in metadata.

## 12. Verification queue

**RESOLVED**
- Missing canonicals, duplicate descriptions, missing OG/Twitter, robots.txt, sitemap generation, duplicate Organization schema, breadcrumb schema, heading skips, hero alt text, links to draft articles, indexable illustrative pages, www host redirect.

**OWNER CONFIRMATION**
- Client-logo strips, Odoo Gold / Microsoft partner badges and "Trusted by" wording (existing content; Claims Register).
- The support-page hero image shows dashboard figures ("Avg. Response 2h", "156 Resolved"). It is illustrative but reads like a service-level claim; replace or confirm.
- Canonical host is assumed to be the apex `https://etriplesoft.com` (from the export and company config); confirm against production hosting.
- Whether to shorten the two long titles.

**CONTENT NEEDED**
- A published marketing article (to restore the Digital Marketing insights cards).
- Real modification dates for articles, if `dateModified` is wanted.
- Confirmed Saudi address and business hours before any richer LocalBusiness markup.
- Per-service OG images (all pages except articles use the site-wide image today).

**TECHNICAL FOLLOW-UP**
- No `lint` script exists; `check` (tsc) and `build` pass.
- Verify the host enforces http to https and serves one host for all routes.

## 13. Search Console tasks (not done, deployment-only)

Submit `https://etriplesoft.com/sitemap.xml`; inspect representative URLs (home, a service, an Odoo page, an industry, an article, contact); request indexing for new or changed pages; watch the Pages, Sitemaps, Rich results (Article, Breadcrumb, FAQ, Organization) and Core Web Vitals reports; confirm legacy URLs redirect and the old ones drop out; test social previews with each platform's debugger after deploy.
