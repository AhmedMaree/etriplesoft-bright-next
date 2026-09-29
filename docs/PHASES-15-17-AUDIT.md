# Phases 15-17 audit: Success Stories, Insights, FAQ

Written before/while building. Sources: current repository, `old-content.xml`, and (for three articles that are newer than the export) the live site.

## Phase 15: /portfolio (nav label "Success Stories")

### Before
- `/portfolio` rendered `PortfolioPage` (src/components/company-pages.tsx): hero saying "We are preparing detailed project stories..." (the placeholder message), a "What a Published Case Study Should Show" explainer, an industry strip linking to `/contact?industry=`, the homepage `Stats` block (250+ projects, 10+ years, 9+ industries, 3 countries: unverified counts) and `Testimonials` (unverified quotes).
- `/portfolio/[project]` (7 static paths: erp, logistics, cloud, ai + aliases) are self-labelled illustrative sample pages ("Project Scope Example"). Not linked from anywhere live (the `ProjectGrid` widget that linked to them is unused). Left untouched; not in the sitemap.
- "Portfolio" label: header/footer/metadata already read "Success Stories" (Phase 4). Remaining old label: only the `/portfolio/[project]` breadcrumb text "All Projects" (sample pages).
- No `/success-stories` URL exists in the export.

### Old page in the export
- `portfolio` (EN) and `ar/portfolio`: an Elementor image gallery of **58 images**. Only facts: image URL and lightbox title. No descriptions, industries, services, technologies or outcomes.
- The Arabic gallery uses a second upload set for 18 of the images (`-1` file names); the other 40 are the same files.
- 149 public WordPress attachment pages exist for these gallery images (e.g. `/hyper-one/`, `/hyper-one-2/`); 131 unique slugs, all redirected to `/portfolio`.
- Data-quality notes: lightbox title "Good Foods" points at `Abodoh.png`; "Red Circle", "Ram", "has mamul" and "infiniti-Motors" are titles verbatim from the export. Names were NOT normalised or interpreted; no industry/service/technology was inferred.

### Gallery items seeded (all `approved: false`, so none render)

| # | Name (lightbox title) | Image in export | Self-hosted copy |
| --- | --- | --- | --- |
| 1 | Hyper-One | https://etriplesoft.com/wp-content/uploads/2025/10/Hyper-One.jpg | /images/portfolio/hyper-one.webp |
| 2 | infiniti-Motors | https://etriplesoft.com/wp-content/uploads/2025/10/infiniti-Motors.jpg | /images/portfolio/infiniti-motors.webp |
| 3 | ITQ | https://etriplesoft.com/wp-content/uploads/2025/10/ITQ.jpg | /images/portfolio/itq.webp |
| 4 | Mapy | https://etriplesoft.com/wp-content/uploads/2025/10/Mapy.jpg | /images/portfolio/mapy.webp |
| 5 | Mazaya | https://etriplesoft.com/wp-content/uploads/2025/10/Mazaya.jpg | /images/portfolio/mazaya.webp |
| 6 | Meat-Bun | https://etriplesoft.com/wp-content/uploads/2025/10/Meat-Bun.png | /images/portfolio/meat-bun.webp |
| 7 | Melton-Protection-Solutions | https://etriplesoft.com/wp-content/uploads/2025/10/Melton-Protection-Solutions.png | /images/portfolio/melton-protection-solutions.webp |
| 8 | Metal-Exchange-Group | https://etriplesoft.com/wp-content/uploads/2025/10/Metal-Exchange-Group.png | /images/portfolio/metal-exchange-group.webp |
| 9 | Moonland | https://etriplesoft.com/wp-content/uploads/2025/10/Moonland.png | /images/portfolio/moonland.webp |
| 10 | newpack | https://etriplesoft.com/wp-content/uploads/2025/10/newpack.png | /images/portfolio/newpack.webp |
| 11 | onestack | https://etriplesoft.com/wp-content/uploads/2025/10/onestack.png | /images/portfolio/onestack.webp |
| 12 | panntone | https://etriplesoft.com/wp-content/uploads/2025/10/panntone.png | /images/portfolio/panntone.webp |
| 13 | Raya-Shop | https://etriplesoft.com/wp-content/uploads/2025/10/Raya-Shop.jpg | /images/portfolio/raya-shop.webp |
| 14 | Roaz | https://etriplesoft.com/wp-content/uploads/2025/10/Roaz.png | /images/portfolio/roaz.webp |
| 15 | Sam-Samouy | https://etriplesoft.com/wp-content/uploads/2025/10/Sam-Samouy.png | /images/portfolio/sam-samouy.webp |
| 16 | Seoudi | https://etriplesoft.com/wp-content/uploads/2025/10/Seoudi.jpg | /images/portfolio/seoudi.webp |
| 17 | SMS | https://etriplesoft.com/wp-content/uploads/2025/10/SMS.png | /images/portfolio/sms.webp |
| 18 | Speed-Sanad | https://etriplesoft.com/wp-content/uploads/2025/10/Speed-Sanad.jpg | /images/portfolio/speed-sanad.webp |
| 19 | Spinneys | https://etriplesoft.com/wp-content/uploads/2025/10/Spinneys.jpg | /images/portfolio/spinneys.webp |
| 20 | Technonet-Fire-Fighting | https://etriplesoft.com/wp-content/uploads/2025/10/Technonet-Fire-Fighting.png | /images/portfolio/technonet-fire-fighting.webp |
| 21 | too-locations | https://etriplesoft.com/wp-content/uploads/2025/10/too-locations.jpg | /images/portfolio/too-locations.webp |
| 22 | Uppercut | https://etriplesoft.com/wp-content/uploads/2025/10/Uppercut.png | /images/portfolio/uppercut.webp |
| 23 | Vogue-Holidays | https://etriplesoft.com/wp-content/uploads/2025/10/Vogue-Holidays.png | /images/portfolio/vogue-holidays.webp |
| 24 | Yacune-Demo | https://etriplesoft.com/wp-content/uploads/2025/10/Yacune-Demo.jpg | /images/portfolio/yacune-demo.webp |
| 25 | Zahause-For-Modern-Home | https://etriplesoft.com/wp-content/uploads/2025/10/Zahause-For-Modern-Home.png | /images/portfolio/zahause-for-modern-home.webp |
| 26 | Zeus-Health-Wellness | https://etriplesoft.com/wp-content/uploads/2025/10/Zeus-Health-Wellness.png | /images/portfolio/zeus-health-wellness.webp |
| 27 | Good Foods | https://etriplesoft.com/wp-content/uploads/2025/10/Abodoh.png | /images/portfolio/abodoh.webp |
| 28 | ADSS | https://etriplesoft.com/wp-content/uploads/2025/10/ADSS.png | /images/portfolio/adss.webp |
| 29 | Al-Janobi | https://etriplesoft.com/wp-content/uploads/2025/10/Al-Janobi.png | /images/portfolio/al-janobi.webp |
| 30 | Al-Kanal | https://etriplesoft.com/wp-content/uploads/2025/10/Al-Kanal.png | /images/portfolio/al-kanal.webp |
| 31 | Brio-Health-Wellness | https://etriplesoft.com/wp-content/uploads/2025/10/Brio-Health-Wellness.png | /images/portfolio/brio-health-wellness.webp |
| 32 | Buseet | https://etriplesoft.com/wp-content/uploads/2025/10/Buseet.jpg | /images/portfolio/buseet.webp |
| 33 | Buseet-Driver | https://etriplesoft.com/wp-content/uploads/2025/10/Buseet-Driver.jpg | /images/portfolio/buseet-driver.webp |
| 34 | Choice-Interiors | https://etriplesoft.com/wp-content/uploads/2025/10/Choice-Interiors.png | /images/portfolio/choice-interiors.webp |
| 35 | Cosmos-PR | https://etriplesoft.com/wp-content/uploads/2025/10/Cosmos-PR.png | /images/portfolio/cosmos-pr.webp |
| 36 | Creative-Way-Ad | https://etriplesoft.com/wp-content/uploads/2025/10/Creative-Way-Ad.png | /images/portfolio/creative-way-ad.webp |
| 37 | Express-Tires | https://etriplesoft.com/wp-content/uploads/2025/10/Express-Tires.png | /images/portfolio/express-tires.webp |
| 38 | FTS-Travel | https://etriplesoft.com/wp-content/uploads/2025/10/FTS-Travel.png | /images/portfolio/fts-travel.webp |
| 39 | Gift-Concept | https://etriplesoft.com/wp-content/uploads/2025/10/Gift-Concept.jpg | /images/portfolio/gift-concept.webp |
| 40 | Golden-Vote | https://etriplesoft.com/wp-content/uploads/2025/10/Golden-Vote.jpg | /images/portfolio/golden-vote.webp |
| 41 | BBR | https://etriplesoft.com/wp-content/uploads/2026/02/BBR.png | /images/portfolio/bbr.webp |
| 42 | Tawasl | https://etriplesoft.com/wp-content/uploads/2026/02/Tawasl.png | /images/portfolio/tawasl.webp |
| 43 | Megharbel | https://etriplesoft.com/wp-content/uploads/2026/02/Megharbel.png | /images/portfolio/megharbel.webp |
| 44 | Lmasar | https://etriplesoft.com/wp-content/uploads/2026/02/Lmasar.png | /images/portfolio/lmasar.webp |
| 45 | XTCY | https://etriplesoft.com/wp-content/uploads/2026/02/XTCY.png | /images/portfolio/xtcy.webp |
| 46 | X-Rentals | https://etriplesoft.com/wp-content/uploads/2026/02/X-Rentals.png | /images/portfolio/x-rentals.webp |
| 47 | UniArmour | https://etriplesoft.com/wp-content/uploads/2026/02/UniArmour.png | /images/portfolio/uniarmour.webp |
| 48 | STS | https://etriplesoft.com/wp-content/uploads/2026/02/STS.png | /images/portfolio/sts.webp |
| 49 | RMG | https://etriplesoft.com/wp-content/uploads/2026/02/RMG.png | /images/portfolio/rmg.webp |
| 50 | Red Circle | https://etriplesoft.com/wp-content/uploads/2026/02/Red-Circle.png | /images/portfolio/red-circle.webp |
| 51 | Ram | https://etriplesoft.com/wp-content/uploads/2026/02/Ram.png | /images/portfolio/ram.webp |
| 52 | ABM | https://etriplesoft.com/wp-content/uploads/2026/02/ABM.png | /images/portfolio/abm.webp |
| 53 | ieight | https://etriplesoft.com/wp-content/uploads/2026/02/ieight.png | /images/portfolio/ieight.webp |
| 54 | has mamul | https://etriplesoft.com/wp-content/uploads/2026/02/has-mamul.png | /images/portfolio/has-mamul.webp |
| 55 | Haibacon | https://etriplesoft.com/wp-content/uploads/2026/02/Haibacon.png | /images/portfolio/haibacon.webp |
| 56 | GCFX | https://etriplesoft.com/wp-content/uploads/2026/02/GCFX.png | /images/portfolio/gcfx.webp |
| 57 | Etqani | https://etriplesoft.com/wp-content/uploads/2026/02/Etqani.png | /images/portfolio/etqani.webp |
| 58 | Bonyan | https://etriplesoft.com/wp-content/uploads/2026/02/Bonyan.png | /images/portfolio/bonyan.webp |

## Phase 16: Insights

### Existing /insights articles before migration (11, all hardcoded)

All are 90-175 words, one paragraph per heading, no FAQs, tables or internal links, and have no counterpart in the export: classified **GENERIC FILLER**. None deleted; they are kept in `src/content/insights/drafts.ts` and served noindex/unlisted, excluded from the index and sitemap.

| Slug | Approx. words | Classification | Now |
| --- | --- | --- | --- |
| odoo-kpi-dashboard-real-time-business-insights | 114 | generic filler | draft at `odoo-kpi-dashboard-real-time-business-insights-draft` (migrated article owns the slug) |
| odoo-roi-return-on-investment | 99 | generic filler | draft at `odoo-roi-return-on-investment-draft` (migrated article owns the slug) |
| signs-you-need-erp-system | 94 | generic filler | draft at `signs-you-need-erp-system-draft` (migrated article owns the slug) |
| odoo-construction | 126 | generic filler | draft (noindex, unlisted) |
| ai-business | 125 | generic filler | draft (noindex, unlisted) |
| seo-strategies | 128 | generic filler | draft (noindex, unlisted) |
| measure-marketing-performance | 142 | generic filler | draft (noindex, unlisted) |
| integrated-digital-campaigns | 130 | generic filler | draft (noindex, unlisted) |
| erp-benefits-for-growing-businesses | 172 | generic filler | draft (noindex, unlisted) |
| modern-seo-friendly-website | 168 | generic filler | draft (noindex, unlisted) |
| b2b-marketing-strategies-middle-east | 173 | generic filler | draft (noindex, unlisted) |

The old `/insights` index also showed invented dates ("May 12, 2025", "Apr 28, 2025") on cards; they are gone (dates now come from `wp:post_date` / the live article).

### Export mapping confirmed against old-content.xml

| Requested URL | Export slug | Words | Table(s) | FAQ / FAQPage JSON-LD |
| --- | --- | --- | --- | --- |
| /insights/odoo-roi-return-on-investment | odoo-roi-return-on-investment | ~1,280 | 1 | yes / yes |
| /insights/signs-you-need-erp-system | signs-you-need-erp-system | ~920 | 0 | yes / yes |
| /insights/odoo-implementation-cost | odoo-implementation-cost-egypt | ~1,090 | 2 | yes / yes |
| /insights/erp-system-comparison | erp-system-egypt-odoo-vs-sap-vs-dynamics | ~1,090 | 1 | yes / yes |
| /insights/odoo-kpi-dashboard-real-time-business-insights | same | ~1,030 | 1 | yes / yes |
| /insights/how-to-choose-managed-it-services-provider-egypt | same | ~1,330 | 1 | yes / yes |
| /insights/data-protection-compliance-egypt-2026 | same | ~1,390 | 0 | yes / yes |
| /insights/odoo-implementation-timeline | **not in the export** | live: ~1,100 | 1 | yes (visible) |
| /insights/odoo-vs-zoho-vs-quickbooks | **not in the export** | live: ~1,200 | 0 | yes (visible) |
| /insights/facility-management-software-guide | **not in the export** | live: ~1,350 | 0 | yes (visible) |

The three "not in the export" articles were published after the export (2026-09-26 to 28). Per the source-hierarchy update they were recovered from the live site (`https://etriplesoft.com/<old-slug>/`), not written from scratch.
The seven export articles were also fetched live and compared: apart from WordPress curly quotes and a "Tagged ..." footer line, the copy is identical (no live/export conflicts).

Visible FAQ vs the old FAQPage JSON-LD: the old ROI article's JSON-LD did not match its visible FAQ (it repeated one question with two different answers and omitted the visible "When is it NOT a good time..." question). The migrated pages emit JSON-LD from the visible text only.

### Arabic-only articles in the export (not migrated: the site is English-only)
- `ar/electronic-invoice-egypt-odoo`, `ar/choosing-odoo-implementation-partner`, `ar/odoo-pricing-egypt-gulf-guide`, `ar/data-protection-laws-egypt-saudi-uae`, `ar/signs-your-business-needs-cloud-computing`. Not machine-translated; their FAQs are held in `src/data/faqs.ts` as `language: "ar"`, `needs-verification`.

### Pages the brief says NOT to migrate as Insights: destination check
| Old URL | New destination | Status |
| --- | --- | --- |
| /odoo-erp-egypt/ | /odoo | redirect live |
| /odoo-for-construction/, /odoo-restaurant-management-software/, /odoo-real-estate-software/, /odoo-facility-management-software/, /odoo-education-management-system/ | /industries/<slug> | redirects live (plus their `/ar/` variants where mapped) |
| /odoo-for-accounting/, /odoo-itsm-helpdesk-module/, /odoo-dashboard-insights/, /odoo-implementation-process-by-etriplesoft/ | /odoo/accounting, /odoo/itsm-helpdesk, /odoo/dashboard-insights, /odoo/implementation | redirects live |
| /odoo-hr-software/ | none | **no destination yet** (`/odoo/hr` not built) |

## Phase 17: FAQ

### Generic repeated answers found (removed)
- The shared `FAQ` component (src/components/site.tsx) generated answers from a regex on the question text, so every question got one of only three paragraphs. On `/faqs` that was **32 questions answered by 3 paragraphs** (one paragraph, "Our team works with businesses of different sizes across Egypt...", was reused **25 times**, including for "Can I schedule a consultation call?").
- The same component fed the `/contact` page (5 questions) and the unreachable generic branch of `service-page.tsx`.
- Fixed: `FAQ` now requires real question/answer items. `/faqs` renders `src/data/faqs.ts`. `/contact` uses four published answers (support, implementation, pricing). The dead generic ServicePage FAQ block was removed.
- Page-level FAQs scanned (industries x5 = 30 questions, Odoo child pages, Odoo/AI/Cloud/Mobile/Digital-marketing reference pages): no exact duplicate answers found. One unsupported claim fixed: the `/cloud` FAQ "What industries do you work with?" (banking, telecom, government, healthcare, manufacturing, retail) is not supported by the export's Cloud pages, so that question was removed.

### Old-site FAQ inventory
- 44 pages/posts carry FAQs (23 English, 21 Arabic); 327 raw Q&A. After de-duplication (Arabic translations of English pages, repeated questions on `/cloud-security-solutions/` and `/cloud-security-solutions-in-egypt/`): 158 unique English questions + 23 Arabic-only. The old site's FAQ markup is custom HTML (`*-faq-item` / `-faq-q` / `-faq-a`), not Elementor accordions.
- There is no old FAQ URL in the export (only an Elementor library template named "faq"). `/faq` is redirected to `/faqs` as a convenience.
