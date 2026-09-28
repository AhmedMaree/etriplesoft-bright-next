# ETripleSoft website redesign — Next.js implementation brief

**Status:** implementation specification, 28 September 2026  
**Project:** the EXISTING ETripleSoft Next.js repository  
**Owner goal:** finish a responsive, editable, bilingual-ready, Odoo-led company website for Egypt, UAE and Saudi Arabia.  
**Instruction to Codex:** read this entire file and inspect the repository before making changes. The repository's actual code and the approved ETripleSoft assets determine implementation details. This brief determines the intended experience and the rules for content and release.

## 0. How to use this brief

1. **Do not initialize a new project.** Identify the current Next.js version, App or Pages Router, TypeScript status, styling, component structure, package manager, CMS/data source, forms, deployment, existing URLs and available assets. Read `AGENTS.md` and project docs. Preserve working functionality and migrate incrementally.
2. Create `docs/IMPLEMENTATION_AUDIT.md` with a short inventory and gap table: requirement, existing implementation, proposed change, dependency, and verification. Do not spend a whole phase merely writing a plan; proceed with code.
3. Use a feature branch and small, reviewable commits if git is available. Do not reset, overwrite, or discard existing user work. Keep content and design changes reversible.
4. Build shared foundations, then implement every approved page and workflow. At each phase run the repository's existing lint, type, test, and build commands and fix failures. Do not replace established tooling without a concrete reason.
5. Maintain `docs/CONTENT_VERIFICATION.md` for missing facts and editorial approvals. A placeholder in this brief is an internal task, never literal public copy.
6. Finish with a route-by-route verification report, screenshots at mobile/tablet/desktop, build results, open blockers, and a deployment checklist. Do not claim completion for a route whose required content or backend is absent.

### Decision hierarchy

Explicit user instructions and supplied design references → approved brand assets and verified company facts → this brief → existing repository conventions → implementation judgment. Where two sources conflict, document the choice. A generated page design is a visual target, not evidence for a certification, client, quote, metric, address, or product capability.

### Important correction to the earlier Astro prompt

Use **Next.js and the existing repository**. Do not convert to Astro. Do not add Tailwind, Sanity, an animation framework, or a new router just because they appeared in an earlier proposal. If Tailwind or Sanity is already installed, use it sensibly. If content editing needs a CMS and none exists, prepare a clean content interface first; integrate the approved CMS once credentials and editorial workflow are available. The project must build without those credentials using safe local content.

## 1. Scope and release states

### Release A — complete public website

- Global header, footer, contact actions, responsive navigation, design system, metadata, accessibility, and analytics hooks.
- English: Home, Odoo ERP, Cloud & Security, AI Automation, Digital Marketing, Web Design & Development, Mobile Apps, Industries hub and verified detail pages, About, Insights hub and articles, Contact, Request Demo, privacy/legal pages that the forms link to.
- Arabic counterparts for the commercial pages when approved translations exist. Both language routes and navigation must be coherent. Do not launch a partly translated Arabic menu or duplicate English text under an Arabic locale.
- Portfolio, Careers, and Support only when their real content and workflows are available. If the legacy URLs exist, preserve their SEO value with a useful editorially approved page or a closely related redirect; do not ship empty templates or fake entries.
- Preserve or redirect legacy URLs using an explicit mapping. Validate all internal links.

### Release gates

| Gate | Needed before publishing relevant UI | Safe implementation meanwhile |
| --- | --- | --- |
| Partner badges | Exact official Odoo/Microsoft designation and approved logo use | Reserve layout or use plain, carefully qualified copy if verified |
| Clients/testimonials | Names, titles, quote wording, permission, images/logos | Hide the strip or use only verified entries; never fabricate |
| Metrics/case studies | Approved counts, scope, results, visuals | Omit result counters and case study; keep reusable components privately |
| Offices | Approved addresses, numbers, and email | Centralize draft data, mark review pending, publish only approved values |
| Forms | Recipient/CRM endpoint, privacy URL, spam and retention decisions | Build UI and server contract; do not expose a fake success state |
| Support | Ticket destination, hours, priority, SLA, attachments policy | Do not expose an unusable ticket form |
| Arabic | Human-reviewed translations and corresponding metadata | Build locale-aware components; do not publish thin locale routes |
| Analytics | Approved provider and consent requirements | Emit typed events into an adapter; no invented tracking ID |

## 2. Brand and visual direction

The website should feel calm, precise, modern, trustworthy, regional, and product-led. ETripleSoft is presented as an Odoo implementation partner with supporting technology services. Odoo must have more visual weight than the other services. Use the user's approved section designs and original logo. Do not silently swap the logo, add women to imagery, or use generic corporate stock photos. References to Plementus, Novutech, and Odoo are for hierarchy, whitespace, and product storytelling, not copied page layouts.

### Color tokens

The actual logo/brand guide takes precedence. Until its colors are sampled and confirmed, the provisional palette is:

| Token | Value | Use |
| --- | --- | --- |
| Primary | `#155EEF` | Links, primary CTA, connection accents |
| Primary hover | `#004EEB` | Interactive hover |
| Navy | `#0B1F33` | Occasional deep sections |
| Text | `#101828` | Headings/body |
| Secondary text | `#475467` | Supporting copy |
| Muted | `#667085` | Labels with verified contrast |
| Background | `#FFFFFF` | Main canvas |
| Subtle background | `#F8FAFC` | Section alternation |
| Blue tint | `#EEF4FF` | Light emphasis |
| Border | `#E4E7EC` | Surface boundaries |

No unrelated purple gradients, neon effects, all-over glassmorphism, or heavy shadows. Verify every foreground/background combination against WCAG AA. Use blue sparingly enough that it remains an effective accent.

### Layout and type

- Content width 1200–1280px; exceptional visual width up to 1440px. Desktop 12-column composition. Section spacing 80–120px desktop, 40–64px tablet, 56–72px mobile. Mobile gutters around 24px; accommodate 320px widths without overflow.
- Latin: self-hosted Manrope variable if already licensed/available; Arabic: Noto Sans Arabic or an approved Arabic family. No more than two families. Inspect actual Arabic glyph coverage. Use `next/font` if consistent with the repository.
- H1 roughly `clamp(2.6rem,4.5vw,4.5rem)`; H2 `clamp(2rem,3vw,3.25rem)`; body 1rem/1.125rem, line-height 1.45–1.7. Typography follows content semantics; exactly one H1 per page.
- White/light surfaces, subtle 1px border, 16–24px radius where appropriate. Alternate visual layouts and whitespace; do not make all sections identical card grids.
- Mobile layouts should reorder supporting visuals after essential copy and CTAs. Respect long Arabic text and RTL direction; use logical CSS properties and mirror directional icons only where meaningful.
- Maintain a central token layer for color, type, spacing, radius, shadow, breakpoints, focus, and motion. Avoid duplicating tokens in several CSS files.

### Motion

Connection lines, floating product UI, process progress, and gentle reveals may explain system relationships. Keep essential content visible without JavaScript. Prefer CSS and small local interactions; use `IntersectionObserver` only where it helps. Typical micro interactions 150–250ms, entrance 400–700ms, ambient motion 8–20s. Honor `prefers-reduced-motion`. Do not add scroll hijacking, a mandatory preloader, cursor replacement, or large autoplay hero video.

## 3. Information architecture

Canonical slugs are a proposal; preserve existing high-value URLs or redirect them explicitly. Use `/en/` and `/ar/` only if a migration plan accounts for existing `/` and indexed URLs. The router can be App Router or Pages Router: implement the same behavior with the APIs appropriate to the current project.

| Area | Suggested route | Content status |
| --- | --- | --- |
| Home | `/en/`, `/ar/` | Copy supplied below; visuals/claims need review |
| Odoo ERP | `/en/odoo-erp/` | Core copy supplied; partner and localisation claims reviewed |
| Cloud & Security | `/en/services/cloud-security/` | Copy supplied; credentials/SLA reviewed |
| AI Automation | `/en/services/ai-automation/` | Copy supplied; results absent |
| Digital Marketing | `/en/services/digital-marketing/` | Copy supplied; results absent |
| Web Design | `/en/services/web-design/` | Copy supplied; portfolio absent |
| Mobile Apps | `/en/services/mobile-apps/` | Themes supplied; stack/portfolio absent |
| Industries | `/en/industries/`, `/en/industries/[slug]/` | Verify final taxonomy and detail copy |
| About | `/en/about/` | Copy supplied; story/timeline absent |
| Insights | `/en/insights/`, `/en/insights/[slug]/` | Migrate reviewed articles |
| Contact | `/en/contact/` | Offices/form need confirmation |
| Request Demo | `/en/request-demo/` | Backend and fields need approval |
| Portfolio | `/en/case-studies/`, `/en/case-studies/[slug]/` | Hold until approved material |
| Careers | `/en/careers/`, `/en/careers/[slug]/` | Hold until approved openings/content |
| Support | `/en/support/` | Hold until ticket workflow exists |

Global navigation: Home, Odoo ERP, Services dropdown, Industries, Insights, About, Contact; primary CTA Request a Demo; unobtrusive Support and WhatsApp utilities only if their destinations work. Mobile menu needs a labeled button, keyboard/focus handling, escape/close behavior, expandable groups, and no hover dependency. Prevent background scroll while open.

Footer: original brand lockup, concise company proposition, priority service links, regional contact information once confirmed, Insights/About/Contact, legal links, and accessible social links. Use the approved footer reference if available. Do not duplicate unverified metrics or credentials.

## 4. Page content and section requirements

All copy here is editorial draft drawn from earlier site review. Verify claims against authoritative ETripleSoft material before publishing. When an entry is missing, omit the public block or use genuinely useful non-claim content, not a visible `[MISSING]` token.

### Home — ordered narrative

1. **Header** as above.
2. **Hero.** Eyebrow: “Odoo & Digital Transformation | Egypt · UAE · Saudi Arabia”. H1: “Your Odoo Partner in Egypt, UAE & Saudi Arabia”. Body: “ETripleSoft helps businesses implement, customise and support Odoo ERP across Egypt, UAE and Saudi Arabia, with services spanning accounting, inventory, HR, CRM, cloud security, AI automation and digital transformation.” CTAs: “Request a Demo” and “Explore Odoo ERP”. Product-oriented visual: a realistic ERP operations interface with connected accounting, CRM, inventory, and HR fragments, with no fake readable data. Partner indicators appear only after exact status/usage rights are verified.
3. **Trust strip.** Approved real customer and partner logos only. Potential legacy references: Technonet, OneStack, AlKanal, Summit, RAM, BBR, ABM, RAM Electronics, Express Tires, Red Circle, Hyper One, Spinneys, Raya Shop. Confirm relationship and logo rights for each.
4. **Odoo flagship.** H2: “Odoo ERP & IT Solutions for Egypt, UAE & KSA”. Explain implementation, customisation, and support. Show an intentionally larger product visual and practical focus areas: Accounting, CRM, Sales, Inventory, HR, Operations. Message: “One connected system can replace disconnected tools and give teams a shared view of operations.” CTA: Explore Odoo ERP. ETA/ZATCA/UAE capabilities need implementation-team approval.
5. **Business outcomes.** H2: “One Platform. Connected Operations.” Finance: accounting/invoicing/reporting; Sales: CRM/quotations; Operations: purchasing/inventory/fulfilment; People: employee/HR workflows; Management: clearer operational data. No invented percentage improvements.
6. **Services.** H2: “IT Solutions for Egypt, UAE & KSA”. Odoo remains the principal feature; supporting links: Cloud & Security, AI Automation, Digital Marketing, Web Design, Mobile Apps. Each describes a real capability in one or two lines and links to its page. Alternate layouts, not six equally weighted cards.
7. **Process.** H2: “From Business Challenge to Working Solution.” Discover: understand operations/goals/systems. Configure: design workflows/integrations. Launch: implement, test, train, deploy. Support: ongoing optimisation. Distinguish this high-level company process from the five-step Odoo detail process.
8. **Industry explorer.** H2: “Built Around How Your Industry Works.” Candidate sectors: Construction, Real Estate, Facility Management, Education, Retail, Logistics, Healthcare, Restaurants. Verify offered sectors; link only to meaningful detail pages.
9. **Regional expertise.** H2: “Built for Business Across the MENA Region.” Egypt, Saudi Arabia, UAE. Explain local requirements in accurate qualified language; Arabic/English and multi-company/multi-currency where supported. Use illustrative city imagery without implying it is an office photo.
10. **Featured case study.** H2: “A Transformation You Can Measure.” Render only when a client, permission, challenge, solution, scope, real result, quote and visual are approved. Otherwise remove from public order without leaving a gap.
11. **Testimonials.** H2: “What Our Clients Say.” Potential source names: Marco Youssef/Technonet; Waled El Ganzory/OneStack; Tamer Gahreb/AlKanal; Osama Hasabllah/Summit; Mahmoud Hamdy/RAM; Ahmed Wafaey/BBR; Eng. Kassem/ABM. Verify exact names, titles, wording and publication permission. Never edit a quote and present it as verbatim; never generate a portrait of a named person.
12. **Stats band.** H2: “Regional Experience. Measurable Delivery.” Hold customer/project/implementation/year numbers until reconciled. “Three regional markets” can be used if operating presence is confirmed. Remove the block if it cannot say anything useful.
13. **Insights preview.** H2: “Odoo Insights & ERP Resources.” Show three recent published and reviewed CMS entries, with real dates, thumbnails and links. Subjects can include implementation timeline, KPI dashboards, ROI, spreadsheets, costs, ERP comparison, facility management, data protection, and managed IT.
14. **FAQ.** Use approved answers for: implementation scope, typical timelines, industry customisation, multiple countries, integrations, and post-launch support. Do not invent exact timelines. Valid disclosure semantics and keyboard behavior.
15. **Final CTA.** H2: “Your IT Solution Starts Here”. “Tell us what you want to improve and our team will help you identify the right next step.” Actions: Start a Conversation and WhatsApp Us if verified.
16. **Footer.** As above.

### About

Hero H1: “Technology That Powers Your Business Growth.” Intro: ETripleSoft develops and implements digital solutions around each business's challenges, from ERP and integrations to websites, applications and automation. Company story: “We work with businesses to understand their operational goals and translate them into practical digital solutions.” Mission: tailored technology integrated with operations, balanced for performance, precision and cost efficiency. Vision: practical innovation that helps businesses operate and grow. Include values, verified leadership/team, and regional presence if material exists. The legacy CEO line “We don't just adapt to the future; we shape it with innovation” attributed to Khaled Ahmed Magdy requires wording/title approval. No fabricated founding timeline or years.

### Odoo ERP

Hero H1: “Odoo ERP Implementation & Support.” Subtitle: implementation, customisation and support across Egypt, UAE and Saudi Arabia. CTAs: Request an Odoo Demo; Talk to an Odoo Consultant. Sections: verified partner proof; disconnected system problems; one connected platform; relevant CRM, Sales, Accounting, Inventory, Purchase, Manufacturing, HR, Helpdesk, Project, Website/eCommerce applications (promise only supported scope); implementation process Discovery & Analysis → Planning & Design → Implementation → Training & Testing → Go Live & Support; relevant industries; regional localisation reviewed by the implementation team; verified integrations; hosting choices; FAQ; CTA. Do not call a fixed Odoo version “latest.” Verify whether named payment/shipping/cloud/analytics integrations have actually been delivered before listing logos.

### Cloud & Security

Hero H1: “Cloud Security Solutions in Egypt — Secure, Scale & Grow.” Body: cloud infrastructure, cybersecurity, Microsoft 365, backup, and managed IT services. Sections: service overview; Cloud Infrastructure; Cybersecurity Protection; Microsoft 365 & Collaboration; Backup & Recovery; Compliance & Governance; Managed IT Support; Assessment → Planning → Implementation → Support; verified proof, FAQ and CTA. No unsupported certification, security guarantee or SLA.

### AI Automation

Hero H1: “Transform Your Business with AI Automation Services.” Body: use AI and workflow automation to reduce repetitive work, connect systems and improve operations. Sections: operational problems; capabilities (workflow automation, analytics, AI assistants, document intelligence, API integrations, compliance workflows, lead scoring, optimisation); Process Discovery & Analysis → Model Design & Selection → Integration & Deployment → Monitor & Optimise; human review and data handling explanation; approved case study/results if available; FAQ and CTA. Avoid “fully autonomous” or numerical savings claims without evidence.

### Digital Marketing

Hero H1: “Grow Your Brand with a Digital Marketing Agency in Egypt.” Body: SEO, paid advertising, social media, content and strategy for businesses in Egypt and the region. Sections: SEO, Social Media, Google Ads/Paid Advertising, Content Creation, Strategy, Research, Voice Over, Graphic Design; Discover → Plan → Execute → Optimise; approved portfolio/results; FAQ; CTA. Mention Arabic and English work where verified. Do not reuse legacy performance percentages without source analytics and approval.

### Web Design & Development

Exactly one H1: “Professional Websites Built to Grow Your Business.” Body: business sites, ecommerce stores, and service portals for performance, mobile usability and Arabic/English audiences. Sections: Business Websites; Ecommerce Stores; E-Service Portals; platforms WordPress, Shopify, custom development, bilingual sites, Odoo-connected sites if supported; Discover → Plan → Build → Launch & Support; approved portfolio; FAQ; CTA. Do not claim specific completed projects without permission.

### Mobile Apps

Hero H1: “Mobile App Development in Egypt, UAE & KSA.” Cover iOS, Android, cross-platform where the team's current stack supports it; UI/UX; Odoo/business-connected apps; development process; real portfolio; maintenance; FAQ; CTA. Confirm technical stack and work samples. Avoid implying native and cross-platform expertise in every technology by default.

### Industries

Hub: Hero → meaningful selector → recurring industry challenges → related Odoo/services → approved case studies → CTA. Proposed detail template: industry-specific problem, workflows, relevant applications, implementation approach, approved evidence, FAQ and CTA. Candidate taxonomy: Construction, Real Estate, Facility Management, Education, Retail, Logistics, Healthcare, Restaurants. Verify final taxonomy, SEO need, and sufficient unique content before creating every detail route. No thin pages made by swapping a noun in a generic template.

### Insights

Hub: Hero, featured article, categories (Odoo, ERP, AI Automation, Cloud/Security, Digital Marketing, Business Technology), article grid, CTA. Article: breadcrumb, one H1, author/date, reviewed body, optional TOC, related content and relevant service CTA. Migrate and edit legacy articles individually; preserve authors and dates accurately; consolidate duplicates and redirect old slugs. Generate thumbnails with a consistent editorial visual system, not fake charts/data.

### Contact and Request Demo

Contact hero H1: “Contact Us — We're Here to Help.” Fields: Full Name*, Business Email*, Phone, Company, Country, Service of Interest, Message*, Privacy Consent*. Server must validate every required field, protect against spam, send/store through the approved destination, and show honest success/error states. Request Demo is a dedicated route with Name, Business Email, Phone, Company, Country, Company Size, Area of Interest, Message and consent; confirm mandatory fields and routing. CTA attribution should distinguish contact from demo submissions. Avoid logging message contents in browser or server logs.

Draft office data for verification: Egypt — Villa 350, South Academy B, New Cairo; +20 100 210 6952, +20 104 409 8406. UAE — Latifa Tower, West Wing, Office 103, Sheikh Zayed Road, Dubai; +971 52 440 1992, +971 58 158 8214. Saudi Arabia — As Sulimaniyah, Al Olaya, Riyadh 12214; +966 508 547 071. Email: info@etriplesoft.com. **Confirm all before publishing.** Manage one authoritative office record used by Contact, Footer, structured data and local landing pages.

### Portfolio / Careers / Support

Portfolio requires approved client, publish rights, problem, solution, implementation scope, real results, quote and visual. Filter by industry/service only when enough studies exist. Careers requires authentic proposition, benefits/policy, open vacancies and application destination. Support requires actual ticket integration, categories, priority guidance, hours, SLA, emergency path and existing ticket guidance. Do not build decorative shells and call them finished. Keep routes out of nav/sitemap until useful, or preserve old URLs with a reviewed landing/redirect plan.

## 5. Assets and imagery

Reuse the user's recently approved ETripleSoft designs, original logo, and individual high-resolution generated section assets where available. Inventory every asset: source file, dimensions, format, usage rights, target section, responsive crop, alt text, and approval status. Do not upscale screenshots from a condensed full-page mockup; source or generate section visuals individually at real layout dimensions. Do not add women to generated imagery.

| Asset | Purpose | Suggested ratio | Rule |
| --- | --- | --- | --- |
| Home hero product visual | ERP laptop/dashboard and connected modules | 4:3 or 16:10 | No fake readable data, no third-party logo without approval |
| Odoo flagship | Connected finance/CRM/sales/inventory/HR | 16:9 | Clear diagram/product context |
| Outcomes | Disconnected tools becoming one workflow | 3:2 | Illustrative, no fabricated results |
| Cloud | Infrastructure and protected business operations | 4:3 | Avoid generic glowing lock |
| AI | Documents/CRM/ERP through reviewed workflow | 4:3 | Avoid humanoid robots |
| Marketing | Search/campaign/analytics interface | 4:3 | No fake statistics |
| Web | Responsive site on devices | 4:3 | Use approved page visuals |
| Mobile | Business application on smartphones | 4:3 | Avoid pretending to show a real client product |
| Process | Four connected stages | wide | Prefer HTML/CSS/SVG for exact labels |
| Industries | Operational environment plus relevant dashboard | 4:3 | One meaningful image per approved industry |
| Regional | Illustrative Cairo/Dubai/Riyadh architecture | 16:10 | Do not call it a company office photo |
| Case study | Real project screenshots/photography | variable | Never generated customer work |
| Testimonial | Real portrait or licensed client logo | variable | Never synthetic portrait for a named person |
| Insight thumbnail | Consistent editorial illustration | 16:9 | No fake readable text |
| OG image | Logo, title space, subtle interface motif | 1200×630 | Render title as programmatic text |

Optimize source imagery and keep a source/master separate from production derivatives. Use `next/image` or the repo's equivalent optimization pipeline with responsive sizing and explicit geometry. Prioritize only the actual LCP image; lazy-load below-the-fold media. Do not force AVIF if the hosting pipeline does not produce it correctly. Maintain sufficient negative space so crops work from 320px through desktop.

## 6. Technical architecture for the existing Next.js app

- Keep Server Components by default in App Router projects. Add `'use client'` only to interactive leaf components. In Pages Router projects, use the existing page/data conventions. Avoid migrating routers merely for this redesign.
- Suggested domain types: `Service`, `Industry`, `CaseStudy`, `Testimonial`, `Article`, `FAQ`, `Office`, `Navigation`, `PageSEO`, `Translation`. Separate content records from presentation; validate optional evidence-dependent fields at the rendering boundary.
- Suggested shared UI: `SiteHeader`, `MobileMenu`, `SiteFooter`, `SectionHeading`, `ButtonLink`, `Breadcrumbs`, `ProductVisual`, `ServiceFeature`, `ProcessTimeline`, `IndustryExplorer`, `OfficeCard`, `ArticleCard`, `FAQList`, `ContactForm`, `DemoForm`, `LocaleSwitcher`. Use page-specific compositions rather than one generic mega-template.
- CMS: respect any existing data source. If Sanity is already adopted or expressly approved, define schemas, preview/draft workflow, image fields with alt/crop, references, localized fields/documents, editorial validation, and publish controls. Otherwise use typed local data and a repository-independent adapter (`getPage`, `getArticles`, etc.) to make a future migration possible; do not present local files as a finished non-developer editing workflow.
- Forms: choose Server Actions or Route Handlers appropriate to the current router and hosting; validate on the server, rate-limit/spam-protect, use secret server-only credentials, and define a real destination. Make idempotency/double-submission behavior sensible. Never claim delivery if the destination fails.
- Locale architecture: route-aware `lang` and `dir`, translated metadata, locale-aware links, reciprocal hreflang and canonical URLs, language switch preserving equivalent page when available. Use one component system for LTR/RTL. Arabic commercial copy needs human review.
- SEO: page-specific title/description, canonical, Open Graph/Twitter, one H1, breadcrumb and relevant structured data, generated sitemap/robots, internal links and redirect inventory. Validate structured data against actual visible content. No fake ratings/reviews or FAQ markup solely to seek rich results.
- Content previews: drafts must be non-indexable. Do not ship unpublished CMS entries on public routes.
- Error handling: useful 404, error and loading states; no blank page for missing content. External links have valid destinations and discernible names.
- Security and privacy: no public CMS write token, no leaking credentials in client bundles, limit upload type/size if support attachments are approved, clear data retention and consent path. Set secure headers and cookie behavior appropriate to the deployed platform.

### Analytics event contract

Create an adapter, not hard-coded scattered vendor calls. Events: `cta_click` (location/target), `demo_submit_success`, `contact_submit_success`, `whatsapp_click`, `phone_click`, `email_click`, `article_to_service_click`. Submit success fires only after server acknowledgement. Do not send form contents as analytics parameters. Configure provider/consent later when supplied.

## 7. Quality targets

### Performance

- Field goal at mobile 75th percentile: LCP < 2.5s, CLS < 0.1, INP < 200ms. These are measured goals, not guarantees from a single local Lighthouse run.
- Aim for initial homepage transfer < 1 MB where practical and < 100 KB compressed client-side JavaScript where feasible. Record actual bundle and image weights; adapt targets to real hosting and content.
- Optimize hero LCP loading; reserve image space; subset/self-host needed fonts; avoid unnecessary hydration and third-party scripts. Below-fold images should not enter the critical request chain. Video uses a poster, `preload="none"`, and click-to-play unless a measured need says otherwise.

### Accessibility and responsive behavior

- Target WCAG 2.2 AA. Semantic landmarks, skip link, correct heading hierarchy, 4.5:1 normal-text contrast, 3:1 large-text contrast, clear focus, labeled form controls, programmatic errors, keyboard navigation, practical 44px touch targets, meaningful alt/decorative empty alt, reduced-motion support.
- Verify at 320, 375, 768, 1024, 1440px and at zoom, plus Arabic RTL. No horizontal overflow, hidden CTAs, clipped dropdowns, broken sticky header, or unreadable line lengths.
- Test menu using keyboard and touch; FAQ disclosure; forms with invalid input, network failure and success; language switch; external contact links; and reduced-motion settings.

### SEO and migration

- Export all currently indexed/valuable WordPress and Next.js URLs, titles, canonicals, backlink-important paths and article slugs. Map each to retained URL or closest relevant 301; avoid blanket homepage redirects. Verify redirect chains and 404s.
- Remove stale “latest Odoo version” claims, conflicting 200+/250+/300+/500+ metrics, unsupported superlatives, duplicated content and unapproved partner wording.
- Publish reciprocal `en`/`ar` alternates only for genuine equivalent pages. Exclude drafts, empty pages and unapproved locales from sitemap.

## 8. Work sequence for Codex

Work autonomously in the existing checkout. Update the audit and content ledger as reality becomes clear. A phase is done only when code and verification are done.

1. **Repository and content audit.** Read project instructions; identify router, package scripts, style system, routes, assets, CMS, forms, deployed environment and current user changes. Compare legacy URL inventory and supplied visual references. Record unresolved content. Do not alter configuration blindly.
2. **Shared foundation.** Brand tokens, fonts, containers, buttons, header/mobile menu, footer, locale/direction architecture, content types/adapters, metadata helpers, image conventions, error/404 states. Build check.
3. **Home.** Implement the complete ordered narrative with approved available content. The Odoo feature and hero must be visually specific. Omit unverifiable proof blocks. Responsive/keyboard/RTL structure verification.
4. **Commercial pages.** Odoo, five supporting services, About, Industries hub and substantive details. Reuse foundations while designing each page intentionally. Connect cross-links. Build check and page screenshots.
5. **Content and conversion.** Insights hub/article migration, Contact and Request Demo wired to a real destination, legal/privacy links, working contact actions. Integrate CMS if chosen and available. End-to-end submission tests.
6. **Conditional sections.** Portfolio, Careers, Support and Arabic content once their inputs clear release gates. Implement complete routes, or record them as blocked and keep them out of public navigation. Do not fabricate content to close a task.
7. **Launch preparation.** URL redirects, sitemap/robots, structured data, image optimisation, performance, accessibility, RTL, browser/device testing, content approval and deployment configuration. Produce a final page-by-page report with evidence and blockers.

### Required deliverables in the repository

- Implemented site code and assets, preserving current stack.
- `docs/IMPLEMENTATION_AUDIT.md`: original state and decisions.
- `docs/CONTENT_VERIFICATION.md`: every claim/source/owner/approval/status, including logo rights, contacts, testimonials, metrics, translation and integration assertions.
- `docs/ROUTES_AND_REDIRECTS.md`: old → new URL map, canonical and locale coverage.
- `docs/QA_REPORT.md`: route × viewport, form, keyboard, RTL, SEO, performance and build checks; screenshots or references to artifacts.
- `.env.example` with names only, no secrets, if new server integrations are added.
- A concise README section explaining how an editor updates each content type and how deployment is performed in the existing setup.

## 9. Definition of done

The project is complete when all approved in-scope routes render meaningful reviewed content; header, footer, CTAs and forms work; no unsupported claims or fake evidence ship; editing workflow is clear; English/Arabic behavior matches published content; metadata and redirects are correct; mobile/tablet/desktop and keyboard/RTL states have been inspected; lint/type/build and meaningful tests pass; and deployment produces the expected site. Anything blocked by company approval must be listed explicitly, withheld from public UI, and never described as implemented.

## 10. Paste this into Codex to start

> Read `BRIEF.md` completely, then inspect the existing Next.js repository, its `AGENTS.md`, package scripts, routes, styles, assets and git status. Do not create a new project or switch frameworks. Implement the full ETripleSoft website in the phases of the brief, beginning with a compact audit and then code changes. Preserve existing user work. Use the supplied approved designs and original brand assets. Keep all unverified claims in `docs/CONTENT_VERIFICATION.md` and out of public pages. Run lint, types, build and relevant behavior checks after each phase. Continue through every phase possible without waiting for me, and finish with a route-by-route QA report and an exact list of inputs that genuinely block publishing. If an integration needs credentials, implement the safe interface and document the environment variables without inventing secrets or claiming the integration works. Report changes, screenshots, tests and remaining blockers.

If Codex has a small context window, use the following follow-up after each phase: **“Continue with the next unfinished phase in `BRIEF.md`. Read the audit and verification ledger, inspect the current git diff, implement and test the next set of routes, update QA, and do not rework completed pages without a concrete defect.”**

## References for implementation details

- Next.js official docs: [Internationalization](https://nextjs.org/docs/app/guides/internationalization), [Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images), [Image](https://nextjs.org/docs/app/api-reference/components/image), [Forms](https://nextjs.org/docs/app/guides/forms). Match the docs to the installed version and router.
- Sanity official [Next.js integration](https://www.sanity.io/docs/nextjs) if and only if Sanity is chosen for this project.

