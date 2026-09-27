# ETripleSoft: complete bilingual software-services rebuild

Status: proposed implementation plan, based on the public-site content archive dated 2026-09-18. No website implementation is authorized by this document alone. The current task captures content and plans the rebuild.

## Objective and decisions

Build a credible software-services website for business decision makers in Egypt, the UAE and Saudi Arabia. Explain what ETripleSoft builds, how its systems connect, how projects are delivered, and how to start a conversation. Odoo remains a major specialist offering alongside web, mobile, AI, cloud/security and digital marketing. This software-services-first hierarchy is a working assumption from the latest brief, replacing the older Odoo-first homepage specification when implementation is approved.

Keep the Blocksy parent, existing child theme, custom blocks plugin and Gutenberg. Preserve existing page/post IDs, URLs, published content, forms and SEO. The archive is evidence, not a script that automatically overwrites WordPress content. All final business copy, navigation, CTAs, diagrams' labels, images and repeated contact information must be editable in WordPress in both languages.

## 1. Content baseline and bilingual editorial work

Use `content-audit/2026-09-18/` as the dated source archive. Every captured route has its original HTML, readable content, ordered heading-based sections, media/link/form inventory and source metadata. Keep duplicate and legacy routes in the inventory. A route existing under `/ar/` does not establish that its body is Arabic.

For each conceptual page, match English and Arabic using source hreflang where available; record editorial matches explicitly when source language links are missing. Keep unpaired pages, mismatched bodies, incomplete translations and legacy variants visible in the coverage ledger. Never silently substitute a different article as a translation. Capture original text unchanged; maintain rewritten English and Arabic drafts separately with section-level source references.

Audit all public pages and articles, including older solution landing pages stored as WordPress posts. Keep their current post type and permalink during migration; present them through a solution layout without moving their records. Articles with no Arabic counterpart need a complete, faithful Arabic draft, not a generic summary. Old Arabic content should be compared against current English, not assumed equivalent. The previous generic-fallback Arabic migration must not be rerun.

Inventory all specific claims—partner levels, named clients, testimonials, years, project totals, ROI, timelines, certifications and compliance guarantees. Distinguish “published on old website” from “independently verified.” Preserve originals in the archive, but publish only substantiated claims. Do not turn a technology logo into a customer or partner badge. Resolve conflicting facts centrally before translating them.

Legal content is preserved in full, with source and date; visual redesign must not silently rewrite its meaning. External support, booking and careers portals retain their destinations and are documented as external dependencies. Do not submit forms or applications during the archive.

## 2. Visual direction and section decisions

Keep the established near-black/navy canvas and blue/cyan accents, with green used sparingly for brand emphasis. Use the existing shared tokens and Manrope for English. Confirm Arabic glyph coverage; use a licensed, self-hosted Arabic companion such as Noto Sans Arabic if the existing font lacks it, with Arabic-specific line height and no Latin letter spacing. Record the font decision and licence before adding assets.

Replace pyramids, palm trees and landmark cards in the trust section with evidence of software delivery. Trust contains verified credentials, approved client logos or a concise explanation of delivery standards. Regional presence becomes a small country/contact strip near the contact section—not a large tourist illustration. Do not invent office specialisms.

Use legible product interfaces, integration diagrams, application flows and real project imagery. Label conceptual interfaces as illustrations and avoid fabricated numerical outcomes. Use real interface screenshots only with permission and with personal/customer data removed. Keep screenshot text out of primary copy; diagram labels are editable HTML/SVG text, not baked into raster images. Remove blurry exports, excessive neon frames, repetitive glow and generic filler grids.

Preserve continuity through shared gutters, type scale, section spacing, subtle background lighting and meaningful transitions. The previous reference PNGs guide brand tone, not mandatory section order. Use open editorial layouts, split explanations, workflow diagrams and compact comparison lists; vary composition according to content rather than repeating one card layout across every service.

Responsive designs are required in both languages before a page is complete: desktop, tablet and narrow mobile. Arabic reverses logical flow where appropriate but does not mirror logos, screenshots, phone numbers, email addresses or every technical diagram. Keyboard order follows reading order. There is no scroll hijacking. Motion clarifies at most one signature interaction per page; normal controls use CSS. Existing GSAP is reused only for justified diagrams, with static reduced-motion and no-JavaScript fallbacks.

## 3. Page designs and section order

### Shared header and footer

Header: approved logo → Services navigation → Odoo → Solutions/Industries → About → Insights → Contact → language switch → consultation CTA. Retain access to Careers, Support, Privacy and Terms in the footer. Use editable WordPress menus per language, translated footer content and a shared editable contact source. Mobile navigation must expose every destination with keyboard, focus management and visible language switching.

### Home

1. Software-services hero: concise proposition, service exploration and consultation actions, plus an application/integration visual.
2. Compact verified trust strip; no landmarks or unexplained counters.
3. Service overview with individual capability summaries and clear destinations.
4. Odoo integration story connecting sales, operations, finance and other applications.
5. Delivery approach with concrete outputs for discovery, design, implementation, launch and support.
6. Selected work and testimonials only where verified evidence exists. Omit this section if evidence is unavailable; do not create fictional projects.
7. Industry use cases with specific workflows and links to detailed solutions.
8. Selected articles in the current language, followed by relevant FAQs.
9. Consultation/contact section, compact regional contacts and shared footer.

Keep the hero editorial and readable; the diagram supports the message. Avoid putting three separate “growth”, “results” and “why us” sections together when they repeat the same claim.

### Services overview

Intro → six core service families with distinct deliverables → how services integrate → project engagement/delivery approach → relevant verified work → FAQs → consultation. Include custom software and integration capabilities from existing About copy within the overview; do not invent an unsupported standalone service offer.

### Odoo ERP overview and implementation

Hero → disconnected-business problem → connected module/workflow diagram → implementation, configuration, migration, integrations and training → local-market requirements without blanket certification promises → delivery stages → related industry/module solutions → verified evidence → FAQs → demo/consultation.

The existing Odoo implementation-process URL receives a detailed process page with each stage's inputs, deliverables, responsibilities and next step. Preserve all substantive source stages; use an open timeline with expandable detail rather than compressing them into four generic paragraphs.

### Web design and development

Hero with responsive interface composition → business websites, commerce and service portals → WordPress/Shopify/custom-platform comparison → Arabic/English, accessibility and content editing → Odoo/API integration → discovery/design/build/launch/support → genuine examples if available → service-specific FAQs → project enquiry.

### Mobile applications

Hero with a realistic application flow → business/customer use cases → Android/iOS/cross-platform capabilities supported by source → UX and accessibility → API/ERP integration → build/test/release/support → approved work → FAQs → app consultation. Do not promise a fixed delivery duration unless approved for a defined scope.

### AI and automation

Hero with an input → processing → review → system-action workflow → actual business problems → document intelligence, assistants, analytics, workflow automation and integrations → human review/data access/error handling → discovery/prototype/integration/measurement → grounded use cases → FAQs → automation assessment. Replace unsupported savings percentages with descriptions of what will be measured.

### Cloud and security

Hero with architecture diagram → infrastructure and identity → Microsoft 365/collaboration → endpoint protection → backup/recovery → managed support and governance → assessment/migration/operations → related ERP integrations → FAQs → assessment request. Avoid universal compliance or uptime guarantees. Preserve both existing cloud URLs until an explicit canonical/redirect decision is reviewed.

### Digital marketing

Hero with campaign-to-enquiry workflow → SEO, paid media, social, content and strategy → source-supported creative/research capabilities → analytics and CRM handoff → discovery/planning/execution/optimization → verified examples → FAQs → consultation. Keep marketing as a complementary service; remove fabricated dashboards, client outcomes and vanity counters.

### Solutions overview and detailed solutions

The old `/solutions/` mixes news articles and product solutions. Give it an editable solution-directory layout linking to ERP/business capabilities; keep general editorial articles in Insights. Preserve all old destinations and their IDs.

Provide dedicated layouts for accounting, HR, helpdesk/ITSM, education, facilities, real estate, restaurants, construction and dashboard/access-management. Each uses: domain-specific hero → problems → capabilities → real workflow/interface → integrations → implementation/support → evidence → FAQs → demo. Preserve long-form technical material in structured sections with a table of contents and accessible disclosure where useful; do not discard it for shorter marketing copy.

The dashboard/access-management page needs a product layout: overview → dashboard capabilities → access controls → supported versions/deployment modes → Arabic/RTL → use cases → rollout → FAQs. Verify version, licensing and performance claims before republication.

### Industries and country pages

Preserve existing local Retail/Distribution, Manufacturing, Construction, Professional Services, Healthcare and Education pages; add source-backed specialist routes above to the directory rather than creating competing duplicates. Each page explains that industry's workflows, relevant services/modules, integrations, implementation concerns and CTA. Avoid repeating the same body with only a sector name changed.

Preserve Egypt/UAE/Saudi Arabia local pages. Use compact typography and workflow visuals, local contact details and verified localization needs. The old Egypt ERP page's current URL and WordPress post identity remain intact. Resolve collisions with a local page of the same slug explicitly before import. No skyline or landmark hero is required.

### About

Company introduction → source-backed mission and approach → delivery expertise → verified leadership → technology experience → small regional contacts → consultation. Remove vague “advanced tools” and “edge computing” filler unless supported by a concrete service or project. Do not invent team members or biographies.

### Portfolio and case studies

Archive the old portfolio even if it is only a shell. Keep the existing URL, but do not publish sample client projects. Use an honest editable project-enquiry introduction until approved project material exists. Actual case studies need client permission, challenge, scope, solution, real imagery and substantiated outcomes. Do not create a new case-study post type until there is approved content needing it.

### Insights, article, category, tag, author and search pages

Insights: lead story → topic filters/search → paginated article list → newsletter. Separate business solution landing pages from editorial queries while preserving records. Articles: breadcrumb → title/metadata → readable body/TOC → related content → relevant consultation CTA. Preserve source headings, tables, lists, captions and links as Gutenberg blocks. Provide responsive table scrolling and localized dates, search states and pagination. Missing translations must be clearly indicated; language switching must not pretend that an unrelated homepage is the equivalent article.

### Contact and conversion pages

Contact: short introduction → editable service enquiry → actual phone/email/office information → booking alternative. Preserve nonce protection, validation, throttling, private enquiry storage and existing delivery handling. Show validation, success and failure messages in the selected language. Privacy/consent links must resolve to the correct locale.

Request Demo, Support Ticket and Careers: purpose-specific intro → preserved external portal or link → clear fallback → related contact help. Verify iframe restrictions and keyboard usability; use a normal external link when framing is blocked. The external application's language setting is not controlled by WordPress.

### Legal, 404 and utility views

Privacy and Terms: restrained reading layout with complete content and meaningful headings. 404/search-empty: clear explanation and relevant routes in the active language. Preserve sitemap access, redirects, canonical URLs and metadata. Include these utility views in visual coverage rather than considering only marketing pages.

## 4. WordPress implementation and migration

Presentation remains in the child theme; locale relationships, content querying, forms and block behavior remain in the plugin. Use core Gutenberg paragraphs/headings/lists/tables for ordinary content and reuse existing `ets/*` blocks for complex editable components. New variations need backward-compatible defaults so existing pages continue rendering. Do not duplicate a second hero, token set, animation library or per-page CSS system.

Retain the existing `_ets_language` and `_ets_translation_of` relationships, extending lookup to both pages and posts. Expose pairing in the editor with validation, reciprocal resolution and a missing-translation state. Maintain English and Arabic menus, footer content and metadata. Add reciprocal hreflang only for actual published counterparts; self-canonicalize each locale. Audit the existing `/ar/articles/` scheme against old public URLs before deployment and preserve or explicitly redirect every old article route. No silent permalink normalization.

Keep shared facts editable once and reusable in both languages. Template code contains UI translations only, not business headings or sales paragraphs. Header/footer labels, consultation blocks, diagram labels and alternative text must be covered in the editor review. Avoid broad output-buffer translation or automatic text replacement during rendering.

Before any database migration, take a full database export plus per-record content/meta/settings backups and verify hashes and restore procedure. Use a dry-run manifest listing exact IDs, fields, assets and URL mapping. Update records by explicit mapping; do not match only by title or slug. Abort on unexpected ID/type conflicts. Store previous-content hashes and refuse reruns that would overwrite later editor changes. Import assets into Media Library with alt text, licence/source notes and responsive variants; preserve original exports as archival material.

## 5. Implementation sequence and acceptance gates

1. **Content and URL reconciliation:** finish page-by-page bilingual drafts, translation gaps, claims review, route/ID mapping and proof inventory. Deliver a complete old-to-new route ledger, including empty and duplicate pages.
2. **Shared foundation:** finalize software-services positioning in project docs, update the design specification, tokens, logo usage, English/Arabic typography, navigation and editable footer. Verify these across representative pages.
3. **Homepage:** implement one major section at a time, beginning with hero and trust. Complete desktop/mobile/RTL/editor review for each section before starting the next; wait for the user's explicit instruction to move between major sections, as required by AGENTS.md.
4. **Service pages:** implement Odoo, web, mobile, AI, cloud/security and marketing using their specific content and diagrams. Complete a page before moving to the next authorized page.
5. **Solutions, industry and regional pages:** reuse proven components while preserving distinct long-form workflows and URLs. Resolve legacy post/page collisions before migration.
6. **Company, portfolio, articles and utilities:** About, Contact, booking/support/careers, Insights/article archives, legal, search and 404. Finish every missing Arabic counterpart through real editorial translation.
7. **Release preparation:** full bilingual QA, broken-link/redirect/SEO comparison, staging review, restore test, deployment checklist and monitoring. Publication is a separate deployment step; this planning task does not deploy.

Each page is complete only when its exact source sections are accounted for as retained, rewritten, merged or omitted with a reason; all final copy is editable; both language versions are semantically equivalent; desktop/tablet/mobile layouts are visually reviewed; no unapproved claims or filler remain; and forms and navigation work.

Test at 360, 390, 768, 1024 and 1440 CSS pixels with representative long Arabic headings and mixed-direction contact data. Require one H1, correct language/direction, logical heading order, visible keyboard focus, accessible menus/tabs/accordions, 44px controls, AA contrast, 200% zoom, no horizontal page overflow, and reduced-motion/no-JavaScript content access. Confirm Gutenberg save/reopen, block validation, editing images/links/cards and preview parity.

Verify all inventoried URLs: expected 200 or deliberate single-hop 301; no loops, missing translations disguised as complete, wrong-language canonical/hreflang or new indexable duplicate pages. Test forms in a controlled mailbox without notifying production staff. Check nonce failures, required fields, throttling and localized confirmation flows. Validate legal links and external portal fallbacks.

Use responsive local images with explicit dimensions, preload only the necessary hero asset/font, lazy-load below-fold imagery, and load motion only on relevant pages. Target LCP ≤2.5s, INP ≤200ms and CLS ≤0.1 under documented representative tests; measure actual field data after deployment rather than claiming laboratory scores guarantee real-user performance.

## Limits of this audit

The content archive records the public HTTP/REST responses, not private WordPress revisions, hidden admin content, or authenticated external portal data. Its section boundaries follow headings; JavaScript-only counters and visual layout must be confirmed in a connected browser. Public-site claims are source evidence, not business verification. The final coverage report records unavailable routes and incomplete translations explicitly. No CSS, templates, database content or live configuration is changed by this audit.
