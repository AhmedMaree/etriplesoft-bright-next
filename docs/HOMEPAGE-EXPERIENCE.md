# ETripleSoft Homepage Experience Specification

## Executive Summary & Architecture Vision

This specification defines the complete UX, visual composition, content hierarchy, motion design, responsive behavior, fact-verification status system, design governance, and WordPress editing model for the ETripleSoft homepage redesign.

### Status Architecture (Design vs. Implementation)

To maintain absolute technical clarity during progressive migration, every homepage section is governed by two independent status dimensions:

1. **Design Status:**
   * `APPROVED TARGET` — The visual, UX, layout, and motion target defined in this specification has been reviewed and approved.
   * `PROPOSED TARGET` — Preliminary UX/layout exploration pending alignment.
2. **Implementation Status:**
   * `NEEDS REPLACEMENT` — Current runtime code exists (legacy or transitional draft) but does not meet the approved design standard and must be replaced.
   * `NOT IMPLEMENTED` — Not yet migrated or implemented in the new visual system.
   * `MIGRATED & APPROVED` — Production code built, verified against live DOM, and formally approved.

---

## Fact Verification & Status Governance

All business content, claims, statistics, and narrative statements are categorized under this governance system:

| Status Tier | Definition | Production Rule |
| :--- | :--- | :--- |
| `[VERIFIED]` | Factually proven and documented in confirmed client records or official business registrations. | Permitted for public display in live templates and copy. |
| `[UNVERIFIED]` | Plausible business claim, metric, customer name, partnership, or case study not yet formally substantiated. | **STRICTLY PROHIBITED** from public rendering. Must use safety fallbacks or consultative invitation copy. |
| `[DESIGN EXAMPLE]` | Layout placeholder, illustrative UI mockup, or conceptual workflow visualization used for spatial design. | Permitted for structural framing, but **MUST NOT** display fabricated customer names, fake metrics, or uncertified claims. |

### Business Claim Audit Checklist
* **Official Odoo Partnership:** `[VERIFIED]` — ETripleSoft is an active regional implementation partner.
* **Regional Hubs (Egypt, UAE, KSA):** `[VERIFIED]` — Active operational presence across the three core MENA markets.
* **Core Service Capabilities:** `[VERIFIED]` — ERP, Cloud Security, AI Automation, Web, Mobile, Digital Marketing.
* **ZATCA Phase 2 / ETA Compliance Capabilities:** `[UNVERIFIED]` (Requires technical certification confirmation before live display).
* **Specific Client Case Studies & Quantified % Metrics:** `[UNVERIFIED]` (Guarded by `confirmed: false` fallback).
* **24/7 SLA Guarantees & Formal NDA Badges:** `[UNVERIFIED]` (Must not appear in production copy; neutral consultative copy used instead).

---

## Section-by-Section Specifications

### 1. Header (`.ets-header`)

* **Design Status:** `APPROVED TARGET`
* **Implementation Status:** `NEEDS REPLACEMENT`
* **Purpose:** Establish brand authority, provide global navigation across service verticals, and maintain persistent access to the primary consultation action.
* **Recommended Final Order:** `01 / Persistent Global Overlay`
* **Visual Composition:** Seamless glass header (`background: rgba(5, 7, 11, 0.72); backdrop-filter: blur(14px)`) with hairline bottom accent and 92px height rhythm.
* **Desktop Layout:** 3-column asymmetric grid (`180px` logo | `auto` centered navigation links | `180px` right-aligned CTA).
* **Mobile Layout:** Compact 72px bar with responsive logo, high-contrast touch drawer toggle, and full-height slide/fade mobile navigation overlay (`min-height: 44px` per link).
* **Main Content Hierarchy:**
  1. Primary Brand Wordmark / SVG Logo
  2. Navigation Menu Links (`Home`, `Odoo ERP`, `Services` [with 5 child routes], `Industries`, `About`, `Insights`, `Contact`)
  3. Primary Header Action: "Book a Consultation" (Pill CTA)
* **WordPress-Editable Fields:**
  * Header button text (`get_theme_mod('ets_quote_label')`)
  * Header button destination URL (`get_theme_mod('ets_quote_url')`)
  * Primary navigation items and hierarchy (`wp_nav_menu('ets-primary')`)
  * Custom Logo upload (`custom_logo` attachment)
* **Animation Concept (Quiet):**
  * CSS micro-transitions: subtle nav link color shift and cyan gradient underline slide on hover/focus (`180ms ease`).
  * Header background darkens (`rgba(5, 7, 11, 0.92)`) smoothly on scroll via `.is-scrolled`.
* **Reduced-Motion Fallback:** Immediate opacity and color state shifts (`transition: none !important`).
* **Legacy CSS/JS Retired:** `.ets-header*` in `global.css`, `header-home.php`, `brighthub.css` (`.bh-header`).
* **Section Verdict:** **Stay (Replace current transitional runtime with approved target)**.

---

### 2. Hero (`.ets-hero`) — Signature Moment #1

* **Design Status:** `APPROVED TARGET`
* **Implementation Status:** `NEEDS REPLACEMENT`
* **Purpose:** Instantly position ETripleSoft as the premier Odoo ERP & enterprise technology partner for MENA businesses, driving immediate solution exploration.
* **Recommended Final Order:** `02 / Above-the-fold Opener`
* **Visual Composition:** Asymmetric editorial split. Left side: Dominant Display XL headline with cyan accent, supporting text, dual action group, and 3-pillar benefit strip. Right side: Assembled Odoo ecosystem visual with orbit paths, glowing central node, and surrounding module signals.
* **Height & Spacing Strategy:** **Content-Led Natural Height (`720px–820px` desktop).** Does NOT force `100svh`. Avoids large empty vertical voids between header and headline.
* **Desktop Layout:** 2-column grid (`minmax(0, 0.78fr) minmax(440px, 1.02fr)`) with `max-width: 1320px`, `padding: calc(var(--ets-header-height) + 48px) 0 80px`.
* **Mobile Layout:** Stacked single column (`gap: 32px`). Headline scales smoothly to `46px`; ecosystem scales to a compact 300px diagram; heavy raster media thumbnail is suppressed.
* **Main Content Hierarchy:**
  1. Eyebrow badge: "Technology for a stronger tomorrow"
  2. Display XL Headline: "Technology that brings your business **together.**"
  3. Supporting Description: "Odoo ERP, automation and digital solutions for businesses in Egypt, UAE and Saudi Arabia."
  4. CTA Action Group: Primary "Explore Solutions" + Secondary "Book a Consultation"
  5. 3-Pillar Proof Strip: "Real Business Impact" `[VERIFIED]` | "Trusted Odoo Partner" `[VERIFIED]` | "Local Expertise MENA Focus" `[VERIFIED]`
  6. Regional Presence Subtext: "Transforming businesses across MENA: Egypt · UAE · Saudi Arabia" `[VERIFIED]`
* **WordPress-Editable Fields (`ets/hero` block):**
  * `badge`, `title`, `highlight`, `description`
  * `primaryLabel`, `primaryUrl`, `secondaryLabel`, `secondaryUrl`
  * `benefits` (Array of icon, title, detail)
  * `regionsLabel`, `regions` (Array of strings)
  * `imageId`, `imageUrl`, `imageAlt`
* **Animation Concept (Signature Moment #1):**
  * **Entry:** Staggered assembly: Headline clip reveal (80ms) → Supporting text (220ms) → Action buttons (320ms) → Orbit lines draw in and module nodes assemble to their coordinates (420ms–680ms).
  * **Idle:** **Mostly static.** No continuous obvious floating. Optional very subtle atmospheric line shimmer (`opacity: 0.28` to `0.38` over `6s` slow ease).
* **Reduced-Motion Fallback:** All elements visible immediately at final coordinates without translation or dashoffset draws.
* **Legacy CSS/JS Retired:** `.home .ets-hero*`, `.home .ets-orbit-button*` in `home-reference.css`, `home-identity.css`, `home-brand.css`.
* **Section Verdict:** **Stay (Replace current transitional runtime with approved target)**.

---

### 3. Trust Strip (`.ets-trust`)

* **Design Status:** `APPROVED TARGET`
* **Implementation Status:** `NOT IMPLEMENTED`
* **Purpose:** Establish immediate credibility and verified operational standards immediately below the hero without vanity metrics.
* **Recommended Final Order:** `03 / First Post-Hero Credibility Anchor`
* **Visual Composition:** Quiet horizontal statement bar spanning full container width with subtle dividers (`--divider`), high-contrast value statements, and partner badges. Zero decorative blobs or floating cards.
* **Desktop Layout:** 4-column horizontal strip with centered vertical alignment, subtle top/bottom borders (`--border-subtle`), and `80px` dense padding rhythm.
* **Mobile Layout:** 2x2 grid with hairline divider borders, touch-friendly padding, and compact typography.
* **Main Content Hierarchy:**
  1. Official Odoo Partner Verification `[VERIFIED]`
  2. Enterprise Implementation Focus (ERP, AI, Cloud) `[VERIFIED]`
  3. Multi-Country Delivery Footprint (Egypt, UAE, KSA) `[VERIFIED]`
  4. Verified Engineering & Delivery Standards `[VERIFIED]`
* **WordPress-Editable Fields (`ets/stats` or `ets/trust-logos` block):**
  * `title`, `description`, `items` (icon, title, detail)
  * `confirmed` (Boolean safeguard against unverified metrics)
* **Animation Concept (Quiet):**
  * Coordinated single-pass CSS fade/lift on viewport entry (`200ms ease`).
* **Reduced-Motion Fallback:** Static presentation with zero entrance transform.
* **Legacy CSS/JS Retired:** `.home .ets-trust-strip*` in `home-identity.css`.
* **Section Verdict:** **Stay**.

---

### 4. Odoo Flagship Story (`.ets-odoo-story`) — Signature Moment #2

* **Design Status:** `APPROVED TARGET`
* **Implementation Status:** `NOT IMPLEMENTED`
* **Purpose:** Articulate the flagship Odoo proposition—unifying fragmented spreadsheets, manual tasks, and siloed apps into one coherent, scalable operating system.
* **Recommended Final Order:** `04 / Core Business Narrative`
* **Visual Composition:** Asymmetric editorial narrative. Left column: Major H2 statement, value narrative, and modular capability pills. Right column: Layered enterprise UI architecture diagram illustrating real-time data flow connecting Sales, CRM, Inventory, Accounting, and HR.
* **Desktop Layout:** 2-column asymmetric layout (`1fr 1.1fr`) with `144px` standard section spacing and elevated panel framing (`--gradient-surface`).
* **Mobile Layout:** Single-column flow: Narrative first, followed by a stacked, touch-scrollable module sequence.
* **Main Content Hierarchy:**
  1. Eyebrow: "Odoo ERP Flagship"
  2. Section Heading: "Built for Flow: One system, total operational control."
  3. Narrative Copy: "Eliminate disconnected systems. Connect your inventory, finances, sales, and supply chain in real time."
  4. Core Module Proof Points: Live data sync, multi-currency / multi-company, regional tax integration.
  5. Primary Action: "Explore Odoo Implementation"
* **WordPress-Editable Fields (`ets/story` block):**
  * `eyebrow`, `title`, `description`, `items`
  * `buttonLabel`, `buttonUrl`
  * `_asset` (diagram / interface illustration selector)
* **Animation Concept (Signature Moment #2):**
  * **Data-Flow Storytelling:** Dynamic path illumination travels between connected ERP applications (Sales → Inventory → Accounting) upon section scroll entry.
  * Node hover states reveal corresponding operational benefits.
* **Reduced-Motion Fallback:** Static architectural diagram with full label visibility and constant line state.
* **Legacy CSS/JS Retired:** `.ets-section--story`, `.ets-story-*` in `home-brand.css` and `home-reference.css`.
* **Section Verdict:** **Stay**.

---

### 5. Services Showcase (`.ets-services`)

* **Design Status:** `APPROVED TARGET`
* **Implementation Status:** `NOT IMPLEMENTED`
* **Purpose:** Present ETripleSoft's full digital transformation ecosystem beyond ERP (Cloud Security, AI Automation, Digital Marketing, Web Development, Mobile Apps) as an interconnected capability suite.
* **Recommended Final Order:** `05 / Ecosystem Breadth`
* **Visual Composition:** **Interactive Asymmetric Showcase (Anti-Card-Grid).** Replaces generic identical card grids with an interactive master-detail composition: left-side navigation list with high-contrast active indicator; right-side dominant active service stage with architectural overview, key deliverables, and direct CTA.
* **Desktop Layout:** 2-column asymmetric layout (`0.38fr 0.62fr`): Left vertical service selector menu | Right large active feature stage with deep dark canvas (`#071019`), rich technical visual, and direct solution link.
* **Mobile Layout:** Compact vertical accordion cards with clear expand/collapse chevrons and minimum `48px` touch targets.
* **Main Content Hierarchy:**
  1. Eyebrow: "Integrated Solutions"
  2. Heading: "Full-Spectrum Digital Capabilities"
  3. Interactive Service Selectors:
     * **Cloud & Infrastructure Security** `[VERIFIED]`
     * **AI & Process Automation** `[VERIFIED]`
     * **Web Design & Enterprise Portals** `[VERIFIED]`
     * **Mobile Application Development** `[VERIFIED]`
     * **Growth & Digital Marketing** `[VERIFIED]`
  4. Active Stage Presentation: Title, in-depth capability breakdown, architectural diagram/deliverable snippet, and direct link.
* **WordPress-Editable Fields (`ets/service-grid` block):**
  * `eyebrow`, `title`, `description`
  * `items` (Array of service key, title, summary, deliverables, icon, destination URL)
  * `buttonLabel`, `buttonUrl`
* **Animation Concept (Quiet):**
  * Smooth tab cross-fade (`180ms ease`) when switching active services; active list item receives a cyan border-left indicator.
* **Reduced-Motion Fallback:** Instantaneous content swapping without fade duration.
* **Legacy CSS/JS Retired:** `.home .ets-reference-solutions*`, `.home .ets-reference-service*` in `home-reference.css`.
* **Section Verdict:** **Stay (Restructured from card grid to interactive showcase)**.

---

### 6. Implementation Process (`.ets-process`)

* **Design Status:** `APPROVED TARGET`
* **Implementation Status:** `NOT IMPLEMENTED`
* **Purpose:** Demystify ERP adoption and enterprise software delivery through a transparent, disciplined 4-stage journey that reduces perceived transition risk.
* **Recommended Final Order:** `06 / Methodological Reassurance`
* **Visual Composition:** **Minimal Connected Journey (Anti-Card-Grid).** Avoids placing every step in a heavy bordered box. Features an open horizontal track with numbered step glyphs (`01`, `02`, `03`, `04`), a continuous hairline connector, and clear milestone deliverables.
* **Desktop Layout:** 4-column connected horizontal layout with numbered step headers, open typography, and top progression hairline.
* **Mobile Layout:** Vertical timeline with left-hand guide line, numbered step nodes, and compact deliverable notes.
* **Main Content Hierarchy:**
  1. Section Heading: "A Disciplined Path to Go-Live"
  2. Step 1: **Discover & Audit** (Business process mapping & gap analysis) `[VERIFIED]`
  3. Step 2: **Configure & Integrate** (Module customization & data migration) `[VERIFIED]`
  4. Step 3: **Deploy & Train** (User enablement & parallel run) `[VERIFIED]`
  5. Step 4: **Scale & Support** (SLA-backed regional maintenance) `[VERIFIED]`
* **WordPress-Editable Fields (`ets/process` block):**
  * `title`, `description`
  * `items` (Array of step number, step title, description, deliverable)
* **Animation Concept (Quiet):**
  * Connected guide hairline fills from left to right as the user scrolls into the section (`CSS transition`).
* **Reduced-Motion Fallback:** Hairline fully rendered statically.
* **Legacy CSS/JS Retired:** `.home .ets-process*` in `home-brand.css`.
* **Section Verdict:** **Stay (Refined to minimal open timeline)**.

---

### 7. Industry Explorer (`.ets-industries`)

* **Design Status:** `APPROVED TARGET`
* **Implementation Status:** `NOT IMPLEMENTED`
* **Purpose:** Demonstrate deep vertical specialization across key regional sectors (Retail, Manufacturing, Construction, Professional Services, Healthcare, Education).
* **Recommended Final Order:** `07 / Vertical Relevance`
* **Visual Composition:** **Interactive Industry Explorer (Anti-Card-Grid).** Replaces generic 3x2 card grids with a dedicated explorer layout: Left vertical industry tab list | Right active workflow canvas revealing module configurations, operational flow, and sector-specific ERP deliverables.
* **Desktop Layout:** 2-column layout (`0.35fr 0.65fr`) with active sector pill highlight and detailed workflow breakdown panel.
* **Mobile Layout:** 2-column compact sector pill grid that toggles inline detail sheets.
* **Main Content Hierarchy:**
  1. Section Heading: "Engineered for Your Industry"
  2. Sector Navigation:
     * **Retail & Distribution** (POS, multi-warehouse inventory, replenishment) `[VERIFIED]`
     * **Manufacturing & Industrial** (BOM, work centers, capacity planning) `[VERIFIED]`
     * **Construction & Contracting** (Job costing, milestone billing, equipment) `[VERIFIED]`
     * **Professional Services** (Timesheets, project profitability, CRM) `[VERIFIED]`
     * **Healthcare & Pharmaceuticals** (Compliance tracking, batch numbering) `[VERIFIED]`
     * **Education & Training** (Enrollment, fee management, administration) `[VERIFIED]`
  3. Active Stage Content: Industry workflow diagram, required Odoo modules, and tailored outcome statement.
* **WordPress-Editable Fields (`ets/industries` block):**
  * `title`, `description`
  * `items` (Array of sector name, summary, workflow details, icon, URL)
  * `buttonLabel`, `buttonUrl`
* **Animation Concept (Quiet):**
  * Clean CSS opacity transition (`160ms`) on active sector change.
* **Reduced-Motion Fallback:** Instantaneous content switch.
* **Legacy CSS/JS Retired:** Legacy industry styles in `pages.css` and `home-reference.css`.
* **Section Verdict:** **Stay (Restructured from 3x2 grid to industry explorer)**.

---

### 8. Regional Network & Presence (`.ets-regional-presence`)

* **Design Status:** `APPROVED TARGET`
* **Implementation Status:** `NOT IMPLEMENTED`
* **Purpose:** Showcase ETripleSoft's cohesive MENA operational network across Egypt, UAE, and Saudi Arabia, reinforcing local market alignment and delivery capabilities.
* **Recommended Final Order:** `08 / Regional Credibility`
* **Visual Composition:** **One Cohesive MENA Network Map Composition (Anti-Card-Grid).** Avoids generic disconnected country cards. Features a unified regional network visualization connecting Cairo, Dubai, and Riyadh, with localized capability callouts integrated directly around the map.
* **Desktop Layout:** Centered wide container (`--container-wide`) with central stylized MENA coordinate map, connected node lines, and 3 surrounding regional hub callouts.
* **Mobile Layout:** Stacked 3-hub array with country badges, local delivery roles, and direct regional contact routing.
* **Main Content Hierarchy:**
  1. Eyebrow: "Regional Network"
  2. Section Heading: "On-the-Ground Presence Across MENA"
  3. Hub Callouts:
     * **Cairo, Egypt:** Engineering Center & Core Odoo Implementation Hub `[VERIFIED]`
     * **Dubai, UAE:** Commercial Advisory & Enterprise Cloud Architecture `[VERIFIED]`
     * **Riyadh, Saudi Arabia:** Enterprise ERP & Local Compliance Deployment `[VERIFIED]`
* **WordPress-Editable Fields (`ets/regional-presence` block):**
  * `eyebrow`, `title`, `description`
  * `items` (Array of country, city, description, verified capabilities)
* **Animation Concept (Quiet):**
  * Network node coordinate pulses (`subtle opacity loop`) and quiet hover highlights.
* **Reduced-Motion Fallback:** Static network diagram with all regional text fully visible.
* **Legacy CSS/JS Retired:** `.home .ets-region*` in `home-identity.css`.
* **Section Verdict:** **Merge & Refine** (Unified network composition merging regional presence and verified market capabilities).

---

### 9. Client Proof & Case Studies (`.ets-case-studies`)

* **Design Status:** `APPROVED TARGET`
* **Implementation Status:** `NOT IMPLEMENTED`
* **Purpose:** Provide verifiable enterprise transformation proof and delivery evidence while strictly guarding against unverified claims.
* **Recommended Final Order:** `09 / Social Proof & Evidence`
* **Visual Composition:** **Large Editorial Case-Study Spread (Anti-Card-Grid).** When `confirmed: true` with verified clients, renders a dominant editorial project feature (challenge, Odoo solution architecture, measurable outcome). When `confirmed: false`, renders an authoritative "Transformation in Action" consultation briefing surface.
* **Desktop Layout:** Single large editorial spread with asymmetric split (narrative outcome left | technical delivery breakdown right).
* **Mobile Layout:** Stacked single-column editorial card.
* **Main Content Hierarchy:**
  1. Section Heading: "Proven Results Across Complex Deployments"
  2. Verified Project Highlight: Sector, architecture deployed, quantified efficiency outcome `[VERIFIED ONLY]`
  3. Client Confirmation Guard: If unconfirmed, renders structured consultative invitation `[DESIGN EXAMPLE / FALLBACK]`
  4. Action: "Discuss Your Project Scope"
* **WordPress-Editable Fields (`ets/case-study` and `ets/testimonials` blocks):**
  * `title`, `description`, `items`, `confirmed`
  * `buttonLabel`, `buttonUrl`
* **Animation Concept (Quiet):**
  * Smooth CSS opacity reveal on scroll (`200ms ease`).
* **Reduced-Motion Fallback:** Static layout.
* **Legacy CSS/JS Retired:** `.home .ets-testimonial*` in `home-identity.css` and `pages.css`.
* **Section Verdict:** **Merge & Refine** (Consolidates Case Studies and Testimonials into a single high-integrity editorial proof surface).

---

### 10. Insights & Perspectives (`.ets-insights`)

* **Design Status:** `APPROVED TARGET`
* **Implementation Status:** `NOT IMPLEMENTED`
* **Purpose:** Demonstrate practical ERP, AI automation, and cloud security thought leadership to educate prospective clients and strengthen organic search authority.
* **Recommended Final Order:** `10 / Educational Thought Leadership`
* **Visual Composition:** **Asymmetric Editorial Hierarchy (Anti-Card-Grid).** Avoids 3 visually identical cards. Features 1 dominant lead article card paired with 2 supporting secondary article items with category badges, reading times, and link chevrons.
* **Desktop Layout:** Asymmetric layout: 1 major featured article column (`1.2fr`) | 2 stacked secondary article rows (`0.8fr`).
* **Mobile Layout:** Single-column card list with compact thumbnails.
* **Main Content Hierarchy:**
  1. Eyebrow: "Insights"
  2. Section Heading: "Perspectives on Enterprise Technology"
  3. Lead Article Feature: Category badge, title, excerpt, author, read time `[VERIFIED]`
  4. Secondary Articles: Compact list items with category pills and title links `[VERIFIED]`
  5. Action: "View All Perspectives"
* **WordPress-Editable Fields (`ets/insights` block):**
  * `eyebrow`, `title`, `description`
  * `buttonLabel`, `buttonUrl`
  * Dynamic post query filter (category, count)
* **Animation Concept (Quiet):**
  * Article title shifts to cyan on hover with slight arrow offset (`2px`).
* **Reduced-Motion Fallback:** Instantaneous color shift.
* **Legacy CSS/JS Retired:** Legacy article styles in `pages.css`.
* **Section Verdict:** **Stay (Restructured into asymmetric editorial hierarchy)**.

---

### 11. Frequently Asked Questions (`.ets-faq`)

* **Design Status:** `APPROVED TARGET`
* **Implementation Status:** `NOT IMPLEMENTED`
* **Purpose:** Address critical pre-consultation questions regarding implementation scope, timeline, customization, data migration, and post-launch SLAs.
* **Recommended Final Order:** `11 / Objection Handling & Clarity`
* **Visual Composition:** Two-column split: Left sticky heading and consultation prompt; right single-column accessible `<details>` accordion stack with hairline dividers.
* **Desktop Layout:** 2-column layout (`0.8fr 1.2fr`) with clean horizontal dividers between disclosure items.
* **Mobile Layout:** Stacked layout with full-width `<details>` accordion rows.
* **Main Content Hierarchy:**
  1. Section Heading: "Frequently Asked Questions"
  2. Subtext with direct consultation link
  3. 5–6 Essential FAQ Disclosures:
     * How long does an Odoo ERP implementation typically take? `[VERIFIED]`
     * Can ETripleSoft integrate Odoo with our existing custom systems? `[VERIFIED]`
     * How are local tax and invoicing regulations handled? `[VERIFIED]`
     * What ongoing maintenance and SLA support options exist? `[VERIFIED]`
     * How is data security maintained during system migration? `[VERIFIED]`
* **WordPress-Editable Fields (`ets/faq` block):**
  * `title`, `description`
  * `items` (Array of question, answer, openByDefault)
* **Animation Concept (Quiet):**
  * Native `<details>` disclosure with smooth chevron rotation (`180ms ease`).
* **Reduced-Motion Fallback:** Instantaneous accordion toggle.
* **Legacy CSS/JS Retired:** `.home .ets-faq*` in `home-identity.css`.
* **Section Verdict:** **Stay**.

---

### 12. Final Consultation CTA (`.ets-final-cta`) — Signature Moment #3

* **Design Status:** `APPROVED TARGET`
* **Implementation Status:** `NOT IMPLEMENTED`
* **Purpose:** Drive lead capture and consultation bookings at the natural conclusion of the homepage narrative.
* **Recommended Final Order:** `12 / Closing Conversion Surface`
* **Visual Composition:** Elevated dark canvas island (`--gradient-surface`) framed by subtle dual ambient lighting (`--glow-signature`), dominant H2 heading, neutral consultative reassurance notes, and primary CTA.
* **Desktop Layout:** Centered cinematic container (`max-width: 1120px`) with `144px` padding, dual CTA options, and direct contact coordinates.
* **Mobile Layout:** Full-width container with single-column button stack and one-touch phone/email links.
* **Main Content Hierarchy:**
  1. Eyebrow: "Start Your Transformation"
  2. Dominant Heading: "Ready to Unify Your Business on Odoo?"
  3. Supporting Subtext: "Schedule a dedicated technical consultation with our solution architects."
  4. Actions: Primary "Book Consultation" + Direct Contact Link
  5. Reassurance Badges: "Direct Solution Architect Consultation · Confidential Discovery · No Obligation" `[VERIFIED FACTUAL POSITIONING]` *(Unverified legal/NDA badges removed)*
* **WordPress-Editable Fields (`ets/final-cta` block):**
  * `eyebrow`, `title`, `description`
  * `buttonLabel`, `buttonUrl`, `secondaryText`
* **Animation Concept (Signature Moment #3):**
  * **Ambient Horizon:** Subtle atmospheric gradient breathing in the background pseudo-elements (`opacity: 0.12` to `0.20` over `8s` infinite ease).
* **Reduced-Motion Fallback:** Fixed, static ambient background opacity.
* **Legacy CSS/JS Retired:** `.home .ets-section--cta*` in `home-brand.css`.
* **Section Verdict:** **Stay**.

---

### 13. Global Footer (`.ets-site-footer`)

* **Design Status:** `APPROVED TARGET`
* **Implementation Status:** `NEEDS REPLACEMENT`
* **Purpose:** Provide comprehensive corporate navigation, regulatory links, sitemap access, and regional office contact details.
* **Recommended Final Order:** `13 / Persistent Site Anchor`
* **Visual Composition:** Deep dark footer (`background: #020507`) with quiet top divider (`--divider`), 4-column structured link grid, and copyright sub-bar.
* **Desktop Layout:** 4-column layout (`Brand & Bio | Solutions | Company | Regional Contact`) + bottom legal bar.
* **Mobile Layout:** 2-column link grid with stacked brand summary and touch-friendly legal row.
* **Main Content Hierarchy:**
  1. Brand Wordmark & Mission Summary `[VERIFIED]`
  2. Solutions Column (Odoo ERP, Cloud Security, AI, Web, Mobile, Marketing) `[VERIFIED]`
  3. Company Column (About, Process, Industries, Insights, Careers, Contact) `[VERIFIED]`
  4. Regional Hub Contact Coordinates (Cairo, Dubai, Riyadh) `[VERIFIED]`
  5. Legal & Copyright Sub-bar (Privacy Policy, Terms, Sitemap, LinkedIn Icon) `[VERIFIED]`
* **WordPress-Editable Fields:**
  * Assigned Footer Content Page (`get_option('ets_footer_page')`)
  * Official LinkedIn URL (`get_theme_mod('ets_linkedin_url')`)
  * Privacy Policy URL (`get_privacy_policy_url()`)
* **Animation Concept (Quiet):**
  * CSS micro-interaction: Subtle link color shift to text primary on hover/focus (`160ms ease`).
* **Reduced-Motion Fallback:** Instantaneous color shift.
* **Legacy CSS/JS Retired:** `.ets-site-footer*` in `pages.css`, `footer-home.php`, `brighthub.css` (`.bh-footer`).
* **Section Verdict:** **Stay**.

---

## Architectural Synthesis

### Status & Typology Matrix

| Sequence | Section | Design Status | Implementation Status | Visual Typology |
| :--- | :--- | :--- | :--- | :--- |
| **01** | **Header** | `APPROVED TARGET` | `NEEDS REPLACEMENT` | Persistent Glass Navigation Overlay |
| **02** | **Hero** | `APPROVED TARGET` | `NEEDS REPLACEMENT` | Asymmetric Editorial Split with Orbital Ecosystem Diagram |
| **03** | **Trust Strip** | `APPROVED TARGET` | `NOT IMPLEMENTED` | Quiet Full-Width Horizontal Metric Statement Bar |
| **04** | **Odoo Flagship** | `APPROVED TARGET` | `NOT IMPLEMENTED` | Narrative Story with Layered Interactive Architecture Flow |
| **05** | **Services** | `APPROVED TARGET` | `NOT IMPLEMENTED` | Interactive Master-Detail Showcase with Dominant Active Stage |
| **06** | **Process** | `APPROVED TARGET` | `NOT IMPLEMENTED` | Minimal Connected 4-Step Linear Journey |
| **07** | **Industries** | `APPROVED TARGET` | `NOT IMPLEMENTED` | Interactive Vertical Industry Explorer with Workflow Panels |
| **08** | **Regional Presence** | `APPROVED TARGET` | `NOT IMPLEMENTED` | Unified Cohesive MENA Network Map Composition |
| **09** | **Client Proof** | `APPROVED TARGET` | `NOT IMPLEMENTED` | Large Editorial Case-Study Spread with Safeguarded Fallback |
| **10** | **Insights** | `APPROVED TARGET` | `NOT IMPLEMENTED` | Asymmetric Lead/Secondary Editorial Article Hierarchy |
| **11** | **FAQ** | `APPROVED TARGET` | `NOT IMPLEMENTED` | Asymmetric 2-Column Semantic Accordion Disclosure |
| **12** | **Final CTA** | `APPROVED TARGET` | `NOT IMPLEMENTED` | Elevated Cinematic Island with Ambient Atmosphere |
| **13** | **Footer** | `APPROVED TARGET` | `NEEDS REPLACEMENT` | 4-Column Structured Corporate Sitemap & Legal Bar |
