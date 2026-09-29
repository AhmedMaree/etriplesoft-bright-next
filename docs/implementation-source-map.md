# Source map: /odoo/implementation

Source: `old-content.xml` (WordPress export, generated 2026-09-19, site etriplesoft.com, 676 items).
Primary source post: `odoo-implementation-process-by-etriplesoft` (published 2026-03-11, ~40k characters).
A duplicate exists under slug `odoo-implementation-process` (same content).

## What the old post actually contains
A **5-phase** process, not the 9 stages in the new page structure:

| Old phase | Maps to new sections |
|---|---|
| 1. Discovery & Scoping | Discovery |
| 2. System Design & Customization | Solution design, Configuration, Integration (planning) |
| 3. Data Migration & Deployment | Configuration, Migration, Integration (activation), Testing |
| 4. Training & User Adoption | Testing (UAT), Training |
| 5. Go-Live & Continuous Support | Go-live, Support |

Every phase has a "Phase Outputs" list. These are the real deliverables and are captured in `implementation.content.ts`.

## Durations that exist on the old site
| Item | Old value |
|---|---|
| Discovery | 1–2 weeks |
| System design | 1–3 weeks |
| Data migration & deployment | 2–6 weeks |
| Training | 1–2 weeks |
| Hypercare after go-live | first 2–4 weeks |
| Go-live phase | no duration given |

## Conflicts you must resolve before publishing any timeline
1. **Phase ranges add up to 5–13 weeks**, but `/odoo-erp-egypt` says **4–16 weeks** and "go-live in as little as 4 weeks". Its FAQ says "a few weeks to a few months".
2. `/odoo-erp-egypt` claims **"fixed pricing"** while `odoo-implementation-cost-egypt` says a provider quoting one flat number before understanding the business "is guessing". Contradictory positioning.
3. **Client/project counts differ:** "200+ businesses" (home), "500+ businesses" (implementation post), "500+ projects delivered" (contact), "300+ projects across 10+ industries" (odoo-erp-egypt).
4. **Unsupported metrics** on industry posts: "500+ Properties Managed", "40% Faster Deal Closing", "3× Better Lead Conversion", "40% Avg. Downtime Reduction". These look like template placeholders. Do not migrate them.
5. "**Odoo Gold Partner**" is asserted on ~30 pages, plus "Verified Odoo Gold Partner" and a "Last updated: April 2026" line. About page has a typo: "Odoo Gold Partenr". Verify the tier against Odoo's official partner listing before it appears anywhere. The site also says "the only cloud security provider that is also a certified Odoo Gold Partner" (and the same for web design in Egypt), which is a superlative claim that is hard to defend.
6. Pricing figures in `odoo-implementation-cost-egypt` (for example "$5,000–$20,000") are not part of the implementation content. Do not pull them in.

## Confirmed facts usable for the page (subject to owner sign-off)
- Offices: New Cairo (Egypt), Riyadh (Saudi Arabia), Dubai (UAE). Addresses and phones are on the old contact page.
- Government/integration systems named: ZATCA (Fatoora), ETA, FTA VAT, GOSI, Qiwa, WPS.
- Shipping carriers named: Aramex, DHL, FedEx.
- Support tiers: functional, technical, development, training.

## Gaps (the old site has nothing on these)
- No FAQ specific to implementation (the closest FAQ sits inside `/odoo-erp-egypt`).
- No separate "Configuration", "Integration" or "Testing" phase, so these are reconciled from the phases above.
- No "common risks" content. Any text must be generic and defensible.
- No client-responsibility statements. The lines in the content file are generic.
- No terms for the "SLA" that is mentioned.

## Site structure findings that affect earlier phases
- Legacy slugs in your redirect map are WordPress **posts**, not pages: `odoo-for-accounting`, `odoo-hr-software`, `odoo-itsm-helpdesk-module`, `odoo-for-construction`, `odoo-real-estate-software`, `odoo-facility-management-software`, `odoo-restaurant-management-software`, `odoo-education-management-system`, `odoo-erp-egypt`, and the implementation post. `odoo-dashboard-insights` is a page.
- **There is a full Arabic site** (`ar-home`, Arabic services, blog and legal pages, plus Arabic posts). The redirect map covers English only. Decide whether Arabic gets its own routes (for example `/ar/...`) before launch.
- Extra legacy slugs with no redirect yet: `/request-demo`, `/support-ticket`, `/terms-conditions`, `/careers`, `/portfolio`, `/solutions`, `/website-services`, `/cloud-security-solutions`, `/cloud-security-solutions-2`, `/digital-marketing-services-2`, `/odoo-itsm-helpdesk`, `/odoo-implementation-process`, `/odoo-for-facility-management`, `/odoo-for-real-estate`, and 8 blog posts.
- Many "-2" duplicate slugs exist. Check which one Google indexes before choosing the redirect target.
