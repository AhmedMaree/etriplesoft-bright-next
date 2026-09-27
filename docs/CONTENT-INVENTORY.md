# Content Inventory — Old Public Website

A page-by-page inventory of the live/legacy etriplesoft.com site, captured as raw source material for the redesign. **This is inventory only — no redesign decisions are made here.**

## Method and sourcing

- Ten of the eleven pages below are read from the pre-migration capture at `content-audit/2026-09-18/pages/<concept>/en/` (`metadata.json`, `sections.json`, `review.md`), taken directly from the live public site on 2026-09-18.
- `/odoo-erp-egypt/` was not present in that capture (the crawler only recorded a 301 redirect from the old `/odoo-erp-implementation/` URL to it, without capturing the destination), so it was fetched live on 2026-09-19 instead.
- Every quote below is verbatim from the source; nothing is paraphrased where marked as a quote, and no fact, statistic, or claim has been invented. Where the capture genuinely lacks a field (e.g. detailed form field lists, image alt text), that is stated explicitly rather than filled in.
- **Images**: the text-extraction capture used for ten of these pages does not enumerate `<img>` elements (no `img` tags appear in `sections.json`), so per-page image inventories are largely unavailable from this source. Known exceptions are noted per page. A DOM/screenshot pass against the live site would be needed to inventory imagery properly.
- **Forms**: every page on the old site carries the same sitewide Contact Form 7 widget (email field + submit, action pattern `#wpcf7-f16656-*`) — almost certainly a global footer/newsletter capture, not a page-specific form. This is noted once here and flagged per page only when a page has a *distinct* additional form.

## Categorization key

- **KEEP** — substantively fine to carry forward; may still get a copy/design pass, but the content and claim are sound as-is.
- **REWRITE FOR CLARITY** — the underlying idea is worth keeping but the wording is vague, ungrammatical, generic filler, or duplicated; needs a copy pass, not fact-checking.
- **REMOVE** — redundant, broken, placeholder, or a mis-scoped global element that shouldn't be inventoried as page content going forward.
- **VERIFY BEFORE PUBLISHING** — a specific factual/numeric claim, credential, certification, statistic, testimonial, or partner reference that must be confirmed true (per the `[VERIFIED]`/`[UNVERIFIED]` governance in `docs/HOMEPAGE-EXPERIENCE.md`) before it reappears anywhere in the new site.

---

## Sitewide observations (apply across pages)

| Observation | Category |
| --- | --- |
| Global CF7 widget (email + submit) repeats identically on every page, unrelated to page topic | REMOVE (as page-specific content; may still exist as a footer newsletter signup, but shouldn't be inventoried per-page) |
| Homepage SEO meta description says "**200+ ERP implementations since 2014**"; homepage body copy says "**since 2018**" — a direct internal contradiction | VERIFY BEFORE PUBLISHING |
| Office contact details (address/phone formatting) differ between the Home page footer and the dedicated Contact Us page for the same three offices | VERIFY BEFORE PUBLISHING |
| "Odoo Gold Partner" / "Microsoft Certified Partner" credential claims recur on Home, About, and most service pages | VERIFY BEFORE PUBLISHING (once verified, can be reused consistently) |
| "Odoo Gold Partner" badge heading is spelled "**Odoo Gold Partenr**" (About Us) | REWRITE FOR CLARITY (typo) |
| Client logo images repeat across Home, Digital Marketing, and Portfolio without consistent identification (some named in testimonials, some bare logos) | VERIFY BEFORE PUBLISHING |

---

## 1. Home

- **URL:** https://etriplesoft.com/
- **Title:** Odoo Partner in Egypt, UAE & KSA | Etriplesoft Gold Partner
- **SEO meta:** description "Certified Odoo Gold Partner in Egypt, UAE & KSA. 200+ ERP implementations since 2014 — Odoo, AI automation & cloud security. Book a free demo." · canonical `https://etriplesoft.com/` · hreflang en/ar/x-default all present
- **Current purpose:** Primary marketing homepage — introduces Etriplesoft as an Odoo/Microsoft partner, lists the six service lines, shows client testimonials/logos as trust proof, promotes three blog articles, ends in a contact form + regional office directory.
- **Headings:** H1 "Your Certified Odoo Partner in Egypt, UAE & Saudi Arabia" → H2 "Odoo ERP & IT Solutions for Egypt, UAE & KSA" → H3 ×3 (Turning Your Vision Into Digital Reality / More Than Software — A Full Growth Engine / Deep MENA Expertise) → H2 "Our IT Solutions in Egypt, UAE & KSA" → H3 ×6 (one per service: Odoo ERP System, Cloud Security Solutions, AI Automation, Digital Marketing, Web design, Mobile Apps Services) → H2 "Trusted by Industry Leaders in Egypt, UAE & KSA" → H3 "Client Voices, Powerful Results." → H2 "Odoo Insights & ERP Resources" → H3 ×3 (article teasers) → H2 "Send Us A Message" → H2 "Your IT Solution Starts Here." → H4 "Get in Touch"
- **Body copy (selected, verbatim):**
  - Hero: "Etriplesoft is a Certified Odoo Gold Partner and Microsoft Partner serving 200+ businesses across Egypt, UAE, and Saudi Arabia. As your Odoo partner in Egypt, we handle full Odoo implementation, customisation and support for your ERP system — from Odoo accounting and inventory to Odoo HR software and CRM — with ETA e-invoicing and ZATCA compliance built in."
  - "Etriplesoft is a Certified Odoo Gold Partner and Microsoft Certified Partner delivering custom technology solutions to businesses across Egypt, UAE, and Saudi Arabia **since 2018**. With **200+ completed projects** and offices in Cairo, Dubai, and Riyadh..."
  - Service blurbs (one line each): Odoo ERP System — "ZATCA and ETA e-invoicing compliant." · Cloud Security — "Microsoft 365, Azure AD, endpoint protection, and compliance frameworks — all managed locally." · AI Automation — "Reduce operational costs by up to 40% across Egypt, UAE & KSA." · Digital Marketing — "SEO, Google Ads, social media management, and content marketing." · Web design — "WordPress, WooCommerce, and Shopify." · Mobile Apps — "delivering App Store-ready products within 8–12 weeks."
  - Testimonials (verbatim, unattributed pull-quotes tied to named companies — see Partner references): "Their Odoo accounting solution streamlined our finances with flawless ZATCA compliance and excellent support" / "Their cloud security and ERP integration exceeded our expectations with outstanding technical expertise." / "Their custom Odoo solution streamlined our construction workflow efficiently." (+ 5 more of similar shape)
  - Footer: "Delivering smart, scalable ERP solutions built for your business success." / "Trusted by businesses. Empowering your success through proven IT expertise."
- **CTAs:** Download Company Profile → PDF · About Etriplesoft → `/about-us/` · "Learn More" ×6 (one per service card, to each service page) · View All Articles → `/blog/` · Contact Us → `/contact-us/`
- **Images:** Not enumerated in this capture. Known: a hero product image alt "Etriplesoft - Odoo ERP system in Egypt, KSA, and UAE" (seen on the live odoo-erp-egypt page reuse); Odoo/Microsoft partner badge logos (`Icon1-1.png`, `mic.png`).
- **Forms:** Two distinct CF7 instances — (1) a full contact form (Name, Email, Subject, Message, Submit) — this is real page content under "Send Us A Message"; (2) the sitewide email-only widget (see sitewide note).
- **Downloadable documents:** Company Profile PDF → `https://etriplesoft.com/wp-content/uploads/2025/10/E-TripleSoft-Company-Profile.pdf`
- **Internal links:** links to all 6 service pages, `/about-us/`, `/contact-us/`, `/blog/`, and 3 specific article URLs (`odoo-kpi-dashboard-real-time-business-insights`, `odoo-roi-return-on-investment`, `signs-you-need-erp-system`)
- **Service information:** One-line summary of all six service lines (Odoo ERP, Cloud Security, AI Automation, Digital Marketing, Web Design, Mobile Apps) — detail lives on each dedicated service page (see below).
- **Factual claims:** "200+ businesses" · "200+ ERP implementations since 2014" (meta) vs. "since 2018" (body) · "200+ completed projects" · "Reduce operational costs by up to 40%" · "App Store-ready products within 8–12 weeks" · full office addresses/phones for Egypt, UAE, KSA
- **Partner references:** Odoo (Gold Partner), Microsoft (Certified Partner), WordPress/WooCommerce/Shopify, Flutter; named client testimonials — Technonet (Marco Youssef, CFO), Summit (Osama Hasabllah, IT Manager), i8ght (Abd Elrahman Abd Elhakim, Project Manager), RAM Electronics (Eng. Mahmoud Hamdy, CEO), BBR (Ahmed Wafaey, Project Manager); additional bare logos: Al-Kanal, onestack, ABM

**Categorization**

| Element | Category | Note |
| --- | --- | --- |
| Service line structure & one-line summaries | KEEP | Clear, on-brand, matches approved narrative |
| "200+ businesses" / "200+ completed projects" / "since 2014" vs "since 2018" | VERIFY BEFORE PUBLISHING | Internal contradiction; needs one confirmed number and date |
| "Reduce operational costs by up to 40%" | VERIFY BEFORE PUBLISHING | Specific quantified outcome, no source given |
| "App Store-ready products within 8–12 weeks" | VERIFY BEFORE PUBLISHING | Specific delivery-time claim |
| Testimonials (all 8) | VERIFY BEFORE PUBLISHING | Attribution + permission required before reuse (per `docs/HOMEPAGE-EXPERIENCE.md` governance) |
| Odoo/Microsoft partner credentials | VERIFY BEFORE PUBLISHING | Confirm current certification status before restating |
| Article teasers (3) | KEEP | Real published content; just confirm articles still exist/are current |
| "Send Us A Message" contact form | KEEP | Functional, real page content |
| Sitewide email-only CF7 widget | REMOVE | Duplicate of the real contact form; not page-specific |
| Company Profile PDF | KEEP | Verify the PDF is current before relinking |

---

## 2. About Us

- **URL:** https://etriplesoft.com/about-us/
- **Title:** About Us | Etriplesoft's Journey in Digital Innovation
- **SEO meta:** description "Learn how Etriplesoft drives growth through Odoo ERP, web development, and AI automation. We build trust through secure cloud solutions and digital excellence." · canonical `https://etriplesoft.com/about-us/` · hreflang en/ar/x-default present
- **Current purpose:** Company narrative — mission/vision, a CEO quote, generic "expertise" claims (including two unsubstantiated tech-buzzword blurbs), a geographic coverage map, closing with partner-credential badges and a Contact Us CTA.
- **Headings:** H1 "About Us" → H5 "About Etriplesoft" → H2 "Technology that Powers Your Business Growth" → H4 ×3 (Turning Vision into Digital Reality / With Etriplesoft / OUR MISSION) → H4 "OUR VISION" → H4 (pull-quote) "We don't just adapt to the future; we shape it with innovation." → H5 "Khaled Ahmed Magdy" → H2 "Transform IT" → H5 "Our Expertise" → H2 "Innovating Across Every Sector." → H4 "Advance Tool" → H4 "Edge Computing" → H5 "Where We Are" → H2 "GEOGRAPHICAL COVERAGE" → H4 "Odoo Gold Partenr" [sic] → H4 "Microsoft Certified Partner"
- **Body copy (verbatim):**
  - "Etriplesoft specializes in custom built software solutions designed to tackle your unique business challenges."
  - OUR MISSION: "Empower businesses by delivering tailored solutions and cutting-edge technology that seamlessly integrate with every operational details while ensuring cost efficiency without compromise. Performance. Precision. Affordability"
  - OUR VISION: "To redefine the future of digital transformation, delivering innovative, bespoke software solutions that empower businesses to outperform the competition white setting the standard for excellence..." [typo: "white" for "while"]
  - "With a years of experience, we specialize in delivering customized IT solutions for healthcare, finance, retail and many more sectors of industry." [ungrammatical, no number given]
  - Advance Tool: "We use a powerful platforms to automate the deployment, scaling, and management of containerized applications." [ungrammatical, no platform named]
  - Edge Computing: "We optimize cloud capabilities for faster response times and reduced latency."
  - Odoo Gold Partenr badge: "Delivering smart, scalable ERP solutions built for your business success." · Microsoft Certified Partner badge: "Trusted by businesses. Empowering your success through proven IT expertise."
- **CTAs:** Contact Us → `/contact-us/` (under "Transform IT")
- **Images:** Odoo logo badge (`Icon1-1.png`), Microsoft logo badge (`mic.png`); a geographical-coverage graphic under "GEOGRAPHICAL COVERAGE" (no alt text captured)
- **Forms:** Only the sitewide email-only CF7 widget (see sitewide note) — no page-specific form.
- **Downloadable documents:** None.
- **Internal links:** `/contact-us/`; three self-referencing `#` fragment links (breadcrumb + mission/vision blocks wrapped in anchors — not real navigation)
- **Service information:** None (this page is narrative/company-identity, not a services listing).
- **Factual claims:** "With a years of experience" (no specific duration given) — no dates, percentages, or quantified outcomes elsewhere on the page.
- **Partner references:** Odoo (Gold Partner), Microsoft (Certified Partner); CEO named as Khaled Ahmed Magdy; no named clients.

**Categorization**

| Element | Category | Note |
| --- | --- | --- |
| Mission / vision statements | KEEP | Substance is fine, just needs proofreading |
| "white setting the standard" typo | REWRITE FOR CLARITY | Grammar error: should read "while setting" |
| "Odoo Gold Partenr" heading typo | REWRITE FOR CLARITY | Misspelling |
| "With a years of experience..." | REWRITE FOR CLARITY | Ungrammatical, vague filler — needs either a real number or a rewrite without a fake-precision claim |
| "Advance Tool" / "Edge Computing" blurbs | REWRITE FOR CLARITY | Generic tech buzzwords disconnected from any concrete service or deliverable; source review flags these explicitly ("connect this claim to a concrete service; do not retain as filler") |
| CEO quote + name | KEEP | Leadership content, on-brand, no factual risk |
| Odoo/Microsoft partner badges | VERIFY BEFORE PUBLISHING | Same credential-verification need as Home |
| Self-referencing `#` fragment links (breadcrumb, mission/vision anchors) | REMOVE | Dead/decorative links, not real navigation |
| Sitewide email-only CF7 widget | REMOVE | Not page-specific |

---

## 3. Odoo ERP Egypt

- **URL:** https://etriplesoft.com/odoo-erp-egypt/
- **Title:** Odoo ERP Egypt - Certified Gold Partner | Etriplesoft
- **SEO meta:** Meta description not captured in this fetch.
- **Current purpose:** The flagship Odoo ERP service page — implementation process, platform overview, comparative advantages, nine industry-specific solution sections, tax-compliance detail for three countries, an extensive FAQ, and a secondary cross-sell into digital marketing.
- **Headings:** Multiple H1-styled section headers act as mini-hero statements throughout (Odoo ERP Egypt — Certified Gold Partner / Implementation & Support / Etriplesoft — Odoo Partner Egypt / From Setup To Success / Why Odoo + Etriplesoft / One Platform. Every Business Function / All The Apps You Need / Industry Solutions / Business Solutions by Industry / Platform Capabilities / Capabilities & Key Features / WHY CHOOSE US / INTEGRATIONS / TAX COMPLIANCE / SAUDI GOVERNMENT PLATFORMS / FAQ / closing CTA / Your Growth Partner / Explore More); H2 five-step process (Discovery & Analysis, Planning & Design, Implementation, Training & Testing, Go Live & Support); H3/H4/H5 cover per-industry sections (Schools & University, Facility Management, Construction, Retail, Logistics, Real Estate, Restaurant, Hospital & Clinics, HR) and platform-capability pillars (Modular by Design, Everything Connected, Multi-Company, Secure & GDPR-Compliant, All Types of Hosting, Mobile Enabled, etc.)
- **Body copy:** Extensive — covers the 5-step implementation process, a platform overview positioning Odoo as an open-source ERP, a direct comparison table (Etriplesoft+Odoo vs. "typical alternatives" on time/localization/customization/pricing/support/Arabic/VAT-readiness), per-industry intros (education, facility management, construction, retail, logistics, real estate, restaurants, healthcare), and detailed ETA/ZATCA/UAE-VAT/Saudi-government-platform compliance copy. Eight FAQ answers cover ERP basics, Odoo vs. SAP, pricing, implementation time, regional coverage, and why choose Etriplesoft.
- **CTAs:** "Request a Free Demo" / "Get Free Demo" (×5, repeated per industry section, all → `https://etriple.odoo.com/appointment/3`) · "Explore Odoo Facility Management/Construction/Real Estate/Restaurant/HR Software →" (5 links to dedicated solution pages)
- **Images:** Logo (`E-TripleSoft`), black logo variant, hero image alt "Etriplesoft - Odoo ERP system in Egypt, KSA, and UAE"
- **Forms:** Only the sitewide newsletter widget (see sitewide note) — no dedicated form beyond demo-booking links (which go to an external Odoo appointment page, not an on-page form).
- **Downloadable documents:** Company Profile PDF (same as Home) · a "Chart of Accounts Generator" HTML tool → `https://etriplesoft.com/wp-content/uploads/2026/04/Etriplesoft_COA-generator.html`
- **Internal links:** full primary nav + footer nav (About, Services, Odoo, Marketing, Cloud Security, AI Automation, Web Design, Mobile Apps, Courses, Blog, Solutions, Support Ticket, Careers, Portfolio, Contact, Terms, Privacy) · 5 links to dedicated industry solution pages
- **Service information:** Extensive per-industry module lists — Education (Academic Management, Admissions, Timetable, Attendance, Exams, Library, LMS, Fees, Transport/Hostel, Portals), Facility Management (Property/Lease/Tenant/Financial/Maintenance Management), Construction (Tender, Project, BOQ, Material Tracking, LGs, Budget Control, IPCs, Subcontractor Mgmt), Retail (Inventory, POS, Sales, CRM, Purchasing, Multi-Store, Loyalty, E-commerce, Billing), Logistics (Fleet/Delivery Tracking, Warehouse, Route Optimization, GPS, Cost Control), Real Estate (Property/Lease, CRM, Sales, Project Monitoring, Financials, Legal/Compliance), Restaurant (POS, KDS, Reservations, CRM, Online Ordering, Payroll, Loyalty), Healthcare (Patient Registration, EMR/Billing, Pharmacy/Lab, Ward/Bed Mgmt, Surgery Scheduling, Telemedicine), HR (Employee Info, Recruitment, Attendance/Leave, Payroll, Performance, Time Tracking, Self-Service Portal); platform-level capabilities (AI-enabled OCR/lead extraction, Customer Portal, VOIP, WhatsApp, IoT, multi-company/language, cloud+on-premise hosting, yearly upgrades, currently v17)
- **Factual claims:** "250+" Odoo implementations (Egypt & GCC) · "9+" industries served · "3" countries · "17" Odoo versions supported · "4 weeks" minimum go-live · "80+" available apps/modules · "300+" successful implementations (expertise section — inconsistent with "250+" elsewhere on the same page) · "4–16 weeks" implementation range vs. "6–18+ months" for "typical alternatives" · VAT rates: Egypt 14%, KSA 15%, UAE 5% · UAE Corporate Tax 9% above AED 375,000 · "176" certified Odoo partners in Egypt
- **Partner references:** Payment gateways (Stripe, PayTabs, Tap) · Cloud platforms (AWS, Azure, Google Cloud, Odoo.sh) · E-commerce (WooCommerce, Shopify, Amazon) · Shipping (FedEx, DHL, Aramex) · Accounting software (QuickBooks, Xero) · Analytics (Power BI, Tableau, Google Analytics) · Saudi government platforms (ZATCA, GOSI, MOHRE, Qiwa, Absher, Etimad, Maroof, Saudi Post/SPL) · Egypt: Egyptian Tax Authority (ETA) · UAE: Federal Tax Authority (FTA)

**Categorization**

| Element | Category | Note |
| --- | --- | --- |
| Per-industry module lists | KEEP | Genuinely useful, specific, non-generic — strong candidate for the "Industries" section in the new design |
| 5-step implementation process | KEEP | Clear, concrete, matches the approved process narrative |
| "250+" vs. "300+" implementation counts on the same page | VERIFY BEFORE PUBLISHING | Direct internal inconsistency, needs one confirmed number |
| "9+" industries / "3" countries / "17" versions / "80+" apps / "176" certified partners in Egypt | VERIFY BEFORE PUBLISHING | All specific counts requiring a source |
| VAT rates and tax-threshold figures (Egypt/KSA/UAE) | VERIFY BEFORE PUBLISHING | Regulatory figures change; must be confirmed current before publishing |
| Comparison table vs. "typical alternatives" | VERIFY BEFORE PUBLISHING | Competitive claims about timeframes/pricing need a defensible basis |
| Saudi government platform integration list | VERIFY BEFORE PUBLISHING | Confirm each named integration is real and current |
| Payment/cloud/shipping/accounting technology partner list | VERIFY BEFORE PUBLISHING | Confirm each integration is actually supported, not aspirational |
| FAQ content (ERP basics, Odoo vs SAP, pricing/time) | KEEP | Useful educational content; factual sub-claims still need the same verification as above |
| Chart of Accounts Generator tool link | KEEP | Verify the tool still works before relinking |

---

## 4. Digital Marketing Agency

- **URL:** https://etriplesoft.com/digital-marketing-agency/
- **Title:** Digital Marketing Agency in Egypt | Etriplesoft
- **SEO meta:** description "Etriplesoft is a digital marketing agency in Egypt offering SEO, Google Ads, social media, and content creation in Arabic & English — serving Egypt, UAE & KSA" · canonical present · hreflang en/ar/x-default present
- **Current purpose:** Positions Etriplesoft as a full-service bilingual digital marketing agency (9 service offerings), a 4-step process, client-result teasers, an FAQ block, and consultation CTAs, with a differentiator section tying marketing to the Odoo/ERP business.
- **Headings:** H1 "Grow Your Brand with a Leading Digital Marketing Agency in Egypt" → H2 "A Digital Marketing Agency in Egypt That Delivers Real Results" → H2 "What We Offer" → H3 ×8 (SEO Services, Social Media Marketing, Google Ads & Paid Advertising, Content Creation, Digital Marketing Strategy, Marketing Research, Voice Over, Graphic Design) → H2 "How a Digital Marketing Agency in Egypt Helps Your Business" → H3 ×4 (Increase Brand Visibility, Generate Better Qualified Leads, Improve Audience Engagement, Drive Measurable Transparent Growth) → H2 "How We Work" → H3 ×4 (Discover, Plan, Execute, Optimise) → H2 "The Digital Marketing Agency Egypt B2B Companies Choose" → H2 "One Agency. Every Channel. Real Results." → H2 "Numbers That Speak for Themselves" → H3 "The Only Agency That Connects Your ERP to Your Marketing" → H3 "Clients We Have Grown" → H2 "Frequently Asked Questions" → H2 "Ready to Work with a Top Digital Marketing Agency in Egypt?" → H3 "Explore All Etriplesoft Services"
- **Body copy (selected, verbatim):**
  - SEO Services: "...improving your Google rankings by an average of 40% within 90 days."
  - Digital Marketing Strategy: "...building a 90-day execution roadmap your team can actually follow."
  - "We are the only Odoo Gold Partner in the region that also delivers full-scale digital marketing. Your CRM, ERP, and campaigns finally speak the same language."
  - Client-result labels (sector/geography only, no company names or numeric results given): "SEO campaign — Technology sector client, Egypt" / "Google Ads + landing page optimisation — B2B services" / "Meta Ads restructuring — Real estate client, Cairo" / "Content strategy + paid social — Automotive brand, UAE"
  - FAQ: "SEO typically shows measurable ranking improvements within 60–90 days and significant traffic growth by month 4–6."
- **CTAs:** "Get Free Consultation" / "Book Your Free Strategy Session" / "Request a Free Demo" (all → `https://etriple.odoo.com/appointment/3`) · "Explore Services" (self-anchor)
- **Images:** Client logo grid under "Clients We Have Grown" — logos include RAM Electronics, Express Tires, Red Circle, Hyper One, Spinneys, Raya Shop (no accompanying description captured).
- **Forms:** Only the sitewide newsletter widget (see sitewide note).
- **Downloadable documents:** None.
- **Internal links:** to Odoo ERP, Cloud Security, AI Automation, Web Design, Mobile Apps pages; self-anchor to services section.
- **Service information:** 8 distinct offerings — SEO, Social Media Marketing, Google Ads & Paid Advertising, Content Creation, Digital Marketing Strategy, Marketing Research, Voice Over, Graphic Design — each with a one-line value statement and a longer capability paragraph.
- **Factual claims:** "40% average Google ranking improvement within 90 days" · "90-day execution/go-to-market roadmap" · "48-hour turnaround available" (Voice Over) · "measurable ranking improvements within 60–90 days, traffic growth by month 4–6" (FAQ) · repeated "certified Odoo Gold Partner" / "only Odoo Gold Partner...that also delivers full-scale digital marketing" claim
- **Partner references:** Odoo (Gold Partner), Google (Search/Display/Shopping/YouTube/Ads), Meta/Facebook/Instagram, LinkedIn, TikTok; named client logos as above.

**Categorization**

| Element | Category | Note |
| --- | --- | --- |
| 8-service breakdown with value statements | KEEP | Clear, specific, non-generic — good structural content |
| 4-step "How We Work" process | KEEP | Concrete and consistent with the Odoo page's process framing |
| "40% average ranking improvement within 90 days" | VERIFY BEFORE PUBLISHING | Specific performance claim requiring evidence |
| "SEO... within 60–90 days... traffic growth by month 4–6" (FAQ) | VERIFY BEFORE PUBLISHING | Same — timeframe/outcome claim |
| "48-hour turnaround" (Voice Over) | VERIFY BEFORE PUBLISHING | Specific delivery-time claim |
| "Numbers That Speak for Themselves" section | VERIFY BEFORE PUBLISHING | Section name promises stats; the actual client-result items give no numbers — needs either real verified numbers or a rename |
| Client-result labels (sector/geography, no names) | KEEP AS DESIGN EXAMPLE, VERIFY IF NAMED | Currently anonymized enough to be safe, but if real client names/logos are later attached, those need verification and permission |
| "Only Odoo Gold Partner...that also delivers full-scale digital marketing" | VERIFY BEFORE PUBLISHING | Competitive-exclusivity claim, high risk if false |
| Client logo grid (Clients We Have Grown) | VERIFY BEFORE PUBLISHING | Needs permission + confirmation these are still current clients |

---

## 5. Cloud Security Solutions in Egypt

- **URL:** https://etriplesoft.com/cloud-security-solutions-in-egypt/
- **Title:** Cloud Security Solutions in Egypt — Etriplesoft
- **SEO meta:** description "Etriplesoft delivers cloud security solutions in Egypt — cybersecurity, cloud migration & managed IT services in Egypt, UAE & KSA. Book a free demo." · canonical present · hreflang en/ar/x-default present
- **Current purpose:** Positions Etriplesoft as an end-to-end cloud/cybersecurity/managed-IT provider, covering six service pillars, a 4-step process, an ERP-integration differentiator, a detailed FAQ, and demo-request CTAs.
- **Headings:** H1 "Cloud Security Solutions in Egypt — Secure, Scale & Grow" → H2 "Future-Ready Cloud & Security Services for Egyptian Businesses" → H2 "What We Deliver" → H3 ×6 (Cloud Infrastructure, Cybersecurity Protection, Microsoft 365 & Collaboration, Backup & Recovery, Compliance & Governance, Managed IT Support) → H2 "Why Cloud & Security Matter for Egyptian Businesses" → H3 ×4 (Improve Productivity, Reduce Risk, Scale with Confidence, Ensure Business Continuity) → H2 "The Only Cloud & Security Partner That Also Runs Your ERP" → H2 "How We Work" → H3 ×4 (Assessment, Planning, Implementation, Support) → H2 "Frequently Asked Questions" → H2 "Ready for Cloud Security Solutions in Egypt?" → H3 "Explore All Etriplesoft Solutions"
- **Body copy (selected, verbatim):**
  - Cybersecurity Protection: "...meeting the requirements of Egypt's Personal Data Protection Law (PDPL) and NIS frameworks."
  - Compliance & Governance bullet: "✓ ISO 27001 readiness support"
  - "Etriplesoft is the only provider of cloud security solutions in Egypt that is also a certified Odoo Gold Partner..."
  - FAQ: "A typical cloud migration Egypt project takes 3–8 weeks... Microsoft 365 deployments for SMEs are typically complete in 1–2 weeks... enterprise clients with... Odoo ERP integration take 4–8 weeks."
- **CTAs:** "Request a Free Demo" (×3, all → `https://etriple.odoo.com/appointment/3`) · "Explore Services" (self-anchor)
- **Images:** None captured (media array empty in this page's metadata, unlike Digital Marketing's client-logo page).
- **Forms:** Only the sitewide newsletter widget.
- **Downloadable documents:** None.
- **Internal links:** to Odoo ERP, Digital Marketing, AI Automation, Web Design pages; note the Mobile Apps link here uses slug `/mobile-apps-services/` while other pages link `/mobile-apps-services-2/` — a slug inconsistency to resolve.
- **Service information:** 6 pillars — Cloud Infrastructure (Azure/AWS/Google Cloud), Cybersecurity Protection (endpoint, monitoring, PDPL/NIS), Microsoft 365 & Collaboration (email, Teams, SharePoint, OneDrive, MFA), Backup & Recovery, Compliance & Governance (PDPL/NIS/ISO 27001 readiness), Managed IT Support (helpdesk, SLA response times).
- **Factual claims:** "3–8 weeks" typical cloud migration · "1–2 weeks" M365 SME deployment · "4–8 weeks" enterprise + Odoo integration · "ISO 27001 readiness support" · "the only provider... that is also a certified Odoo Gold Partner" (repeated exclusivity claim) · a broader unattributed market claim: "Cloud adoption in Egypt has accelerated sharply in 2025–2026, driven by Egypt's National Digital Transformation Strategy..."
- **Partner references:** Odoo (Gold Partner), Microsoft 365 (Teams/SharePoint/OneDrive/MFA/conditional access), Azure, AWS, Google Cloud; regulatory frameworks named: Egypt PDPL, NIS, ISO 27001.

**Categorization**

| Element | Category | Note |
| --- | --- | --- |
| 6-pillar service breakdown | KEEP | Specific, well-organized, non-generic |
| 4-step "How We Work" process | KEEP | Consistent with other service pages' process framing |
| Migration timeframe claims (3–8 weeks, 1–2 weeks, 4–8 weeks) | VERIFY BEFORE PUBLISHING | Specific delivery-time claims |
| "ISO 27001 readiness support" | VERIFY BEFORE PUBLISHING | Compliance/certification-adjacent claim |
| "PDPL and NIS frameworks" compliance claim | VERIFY BEFORE PUBLISHING | Regulatory-compliance claim, high stakes if inaccurate |
| "The only provider... that is also a certified Odoo Gold Partner" | VERIFY BEFORE PUBLISHING | Competitive-exclusivity claim |
| Unattributed 2025–2026 market-trend paragraph (FAQ) | VERIFY BEFORE PUBLISHING or REMOVE | Reads as an assertion without a cited source; either substantiate or drop |
| Mobile Apps link slug mismatch (`/mobile-apps-services/` vs `/mobile-apps-services-2/`) | REWRITE FOR CLARITY | Site-wide URL consistency issue, not a content issue per se, but should be resolved in the page-map |

---

## 6. AI Automation Services

- **URL:** https://etriplesoft.com/ai-automation-services-etriplesoft/
- **Title:** Best AI Automation Services for SMEs in 2026 | Etriplesoft
- **SEO meta:** description "Etriplesoft offers cost-effective AI automation services for SMEs. Serving businesses in UAE, Egypt, and Saudi Arabia. Get a free AI automation demo today" · canonical present · hreflang en/ar/x-default present
- **Current purpose:** Service-marketing page for AI Automation — frames business pain points, walks through delivery process, lists 8 product features, states differentiators, cross-links to other service pages, closes with a demo CTA.
- **Headings:** H1 "Transform Your Business with AI Automation Services" → H2 "What Are AI Automation Services?" → H2 "Business Challenges That AI Automation Solves" → H3 ×6 (Slow Manual Processes, Poor Data Visibility, Rising Operational Costs, Poor Customer Experience, Disconnected Systems, Compliance and Risk Exposure) → H2 "How AI Automation Services Transform Your Operations" → H4 ×4 (Process Discovery & Analysis, AI Model Design & Selection, Integration & Deployment, Monitor Learn & Optimise) → H2 "Key Features of Etriplesoft AI Automation Services" → H3 ×8 (Intelligent Process & Workflow Automation, Predictive Analytics, AI Chatbots & Virtual Agents, Document Intelligence, System Integration & APIs, Compliance Automation, AI-Powered Lead Scoring, Continuous Learning Models) → H2 "Business Benefits of AI Automation Services" → H2 "Why Choose Etriplesoft for AI Automation Services" → H3 ×6 (End-to-End AI Delivery, Deep ERP & System Integration, MENA Market Expertise, Tailored Not Template, Measurable ROI Focus, Secure & Compliant) → H2 "Explore All Etriplesoft Services" → H2 "Frequently Asked Questions About AI Automation Services" (no Q&A text captured — see note) → H2 "Start Your AI Automation Journey Today"
- **Body copy (selected, verbatim):** "AI Automation Services by Etriplesoft eliminate manual bottlenecks, accelerate decision-making, and unlock intelligent workflows..." · "Resolve queries 24/7 with human-like accuracy" (AI Chatbots) · "Reduce [manual work]... without increasing headcount" · "As certified Odoo ERP partners, our AI integration services connect AI Automation directly into your existing ERP workflows."
- **CTAs:** "Request a Free Demo" / "Request a Free AI Demo" (→ `https://etriple.odoo.com/appointment/3`) · "Explore Features" (self-anchor) · "Talk to an Expert" → `/contact-us/`
- **Images:** None enumerated in this capture.
- **Forms:** Only the sitewide newsletter widget.
- **Downloadable documents:** None.
- **Internal links:** to Odoo ERP, Cloud Security, Digital Marketing, Web Design, Mobile Apps, and Odoo Facility Management pages.
- **Service information:** 8 features — Intelligent Process & Workflow Automation, Predictive Analytics, AI Chatbots & Virtual Agents, Document Intelligence, System Integration & APIs, Compliance Automation, AI-Powered Lead Scoring, Continuous Learning Models.
- **Factual claims:** "Resolve queries 24/7 with human-like accuracy" · "measurable ROI from the first sprint" · "produces measurable results from day one" · general "quantifiable ROI" claim with no number attached
- **Partner references:** Odoo ERP (repeated integration claim, "certified Odoo ERP partners" — note this page doesn't specify a partner *tier*, unlike other pages' "Gold Partner" claim, which is itself an inconsistency worth resolving).
- **Data gap:** The "Frequently Asked Questions About AI Automation Services" heading exists in the capture with an empty item list — this is a capture gap, not necessarily an empty section on the live page; needs a live check before assuming there's no FAQ content to preserve.

**Categorization**

| Element | Category | Note |
| --- | --- | --- |
| 8-feature breakdown | KEEP | Specific, concrete capability descriptions |
| Business-challenges framing (6 pain points) | KEEP | Clear, relevant, non-generic |
| "Resolve queries 24/7 with human-like accuracy" | VERIFY BEFORE PUBLISHING | Specific capability/quality claim |
| "measurable ROI from the first sprint" / "measurable results from day one" | VERIFY BEFORE PUBLISHING | Unquantified but assertive outcome claims |
| "certified Odoo ERP partners" (no tier stated) vs. "Gold Partner" elsewhere | REWRITE FOR CLARITY, then VERIFY | Resolve the inconsistency in how the Odoo partnership tier is described sitewide, then verify the correct tier |
| FAQ section (heading present, content not captured) | VERIFY BEFORE PUBLISHING | Confirm on the live site whether FAQ content exists and capture it before deciding to keep/cut |

---

## 7. Web Design Company in Egypt

- **URL:** https://etriplesoft.com/web-design-company-in-egypt/
- **Title:** Web Design Company in Egypt — WP, Shopify | Etriplesoft
- **SEO meta:** description "Etriplesoft builds fast, bilingual WordPress and Shopify websites for businesses in Egypt, UAE & KSA. Book a free demo today." · canonical present · **no Arabic hreflang alternate present** (unlike every other service page)
- **Current purpose:** Service page for web design/development (WordPress, Shopify/WooCommerce, custom e-services portals), emphasizing bilingual delivery and Odoo-backed CRM/ERP integration; offerings, platform rationale, 4-step process, differentiation, an extensive FAQ with pricing/timeline specifics, closing CTA.
- **Headings:** H1 "Web Design Company in Egypt Building Websites That Grow Your Business" → H2 "The Web Design Company Egypt Businesses Trust" → H2 "What We Build" → H3 ×3 (Business Websites, E-Commerce Stores, E-Services Portals) → H2 "WordPress, Shopify & Custom Development" → H3 ×4 (WordPress, Shopify, Bilingual Arabic & English Websites, Odoo ERP Integration) → H2 "How We Work" → H3 ×4 (Discover, Plan, Build, Launch & Support) → H2 "The Only Web Design Company in Egypt That Also Runs Your ERP" → H2 "Frequently Asked Questions" → H2 "Ready to Work with a Top Web Design Company in Egypt?" → H3 "Explore All Etriplesoft Solutions"
- **Body copy (selected, verbatim):**
  - E-Commerce Stores: "...local payment gateway integration (PayTabs, Fawry, Tap), and Arabic RTL layouts."
  - "Uniquely, as an Odoo Gold Partner, we connect your website directly to your CRM, inventory, and marketing — something no pure web development Cairo agency can offer."
  - FAQ — Cost: "A professional WordPress business website typically starts from **15,000–30,000 EGP**. An e-commerce website on Shopify or WooCommerce starts from **25,000 EGP**."
  - FAQ — Timeline: "A standard business website takes **3–5 weeks**. An e-commerce store takes **4–8 weeks**... Custom portals with Odoo integration take **6–12 weeks**."
  - FAQ — 2026 ranking signals: "Core Web Vitals (LCP under 2.5 seconds, no layout shift), mobile-first responsive design, bilingual Arabic and English content with proper hreflang tags, structured data..."
- **CTAs:** "Request a Free Demo" (×2) · "Start Your Project" (all → `https://etriple.odoo.com/appointment/3`) · "Explore Services" (self-anchor)
- **Images:** None enumerated in this capture.
- **Forms:** Only the sitewide newsletter widget.
- **Downloadable documents:** None.
- **Internal links:** to Odoo ERP, Digital Marketing, Cloud Security, AI Automation, Mobile Apps pages.
- **Service information:** 3 build categories (Business Websites, E-Commerce Stores, E-Services Portals) × platform choice guidance (WordPress vs. Shopify vs. bilingual vs. Odoo-integrated) × 4-step process (Discover, Plan, Build, Launch & Support).
- **Factual claims:** EGP pricing bands for WordPress (15,000–30,000) and e-commerce (from 25,000) sites · timeline bands (3–5 / 4–8 / 6–12 weeks) · "Core Web Vitals LCP under 2.5 seconds" · repeated "Odoo Gold Partner" / "only web design company in Egypt that is also a certified Odoo Gold Partner" claim (stated 3 times on this page alone)
- **Partner references:** Odoo (Gold Partner), Shopify ("certified Shopify developer Egypt"), WooCommerce, WordPress, named Egyptian payment gateways PayTabs/Fawry/Tap, Google Analytics.

**Categorization**

| Element | Category | Note |
| --- | --- | --- |
| 3-category build breakdown + platform guidance | KEEP | Specific, useful, avoids generic "we build websites" filler |
| 4-step "How We Work" process | KEEP | Consistent with other service pages |
| EGP pricing figures (15,000–30,000 / from 25,000) | VERIFY BEFORE PUBLISHING | Public pricing claims — must reflect current, accurate rates before publishing |
| Timeline bands (3–5 / 4–8 / 6–12 weeks) | VERIFY BEFORE PUBLISHING | Specific delivery-time claims |
| "Core Web Vitals LCP under 2.5 seconds" and other 2026 ranking-signal claims | VERIFY BEFORE PUBLISHING | Technical/SEO claims that should reflect actual current practice, not aspirational copy |
| "Odoo Gold Partner" / exclusivity claim (repeated 3×) | VERIFY BEFORE PUBLISHING | Same credential-verification need flagged elsewhere; the repetition itself is also a REWRITE candidate (redundant) |
| Missing Arabic hreflang alternate | VERIFY BEFORE PUBLISHING | Confirm whether an Arabic version of this page exists; if not, this is a translation gap to close, not just a content note |

---

## 8. Contact Us

- **URL:** https://etriplesoft.com/contact-us/
- **Title:** Contact Us - E-TripleSoft
- **SEO meta:** description "Have a question or a project in mind? Our teams in Egypt, Saudi Arabia, and the UAE are ready to connect with you." · canonical present · hreflang en/ar/x-default present
- **Current purpose:** Primary contact/enquiry page — hero intro with jump links, company blurb, a 3-office regional map/cards (Egypt, Saudi Arabia, UAE), and a closing enquiry form with quick-contact alternatives (email, phone, book-a-demo).
- **Headings:** H1 "Contact Us We're Here to Help" → H2 "Digital Solutions Built for Growth" → H2 "Find Us Around the Region" → H3 ×3 (Egypt — New Cairo, Saudi Arabia — Riyadh, UAE — Dubai) → H2 "Let's Start a Conversation"
- **Body copy (verbatim):**
  - "Have a question or a project in mind? Our teams in Egypt, Saudi Arabia, and the UAE are ready to connect with you."
  - "E-TripleSoft is a leading technology company specializing in comprehensive digital transformation. From Odoo ERP implementation and AI automation to custom web & mobile development, cloud security, and digital marketing — we deliver end-to-end solutions tailored to your business."
  - "Three offices, one mission — delivering world-class digital solutions across MENA."
  - "Whether you're exploring Odoo ERP, need a custom digital solution, or want to discuss your project — we'd love to hear from you. One of our specialists will reach out shortly."
- **CTAs:** "Send a Message" (jump to form) · "Our Locations" (jump to map) · "Open in Google Maps" (UAE card — links only to a placeholder `#` fragment, not a real Maps deep link) · "Email Us" → `mailto:info@etriplesoft.com` · "Call Us (Egypt)" → `tel:+201002106952` · "Book a Free Demo" → `https://etriple.odoo.com/appointment/3` · "Send Message" (form submit, ×3 "Open in Map" buttons with no href, JS-driven)
- **Images:** None enumerated.
- **Forms:** A real, distinct enquiry form under "Let's Start a Conversation" — fields: Full Name*, Email Address*, Phone Number, Service of Interest, Your Message*, submit "Send Message". Plus the sitewide newsletter widget also present on this page.
- **Downloadable documents:** None.
- **Internal links:** self-anchors only (`#form`, `#locations`); one placeholder `#` fragment for "Open in Google Maps."
- **Service information:** None beyond the general "Odoo ERP, AI automation, web & mobile, cloud security, digital marketing" summary line.
- **Factual claims:** Full office addresses, phone numbers, and email for Egypt (Villa 350, South Academy B, New Cairo), Saudi Arabia (As Sulimaniyah, Al Olaya, Riyadh 12214), and UAE (Latifa Tower, West Wing, Office 103, Sheikh Zayed Rd, Dubai) — **note these differ in formatting from the same three offices listed on the Home page footer** (see sitewide observations).
- **Partner references:** Odoo (implementation service + external booking subdomain `etriple.odoo.com`); no others.

**Categorization**

| Element | Category | Note |
| --- | --- | --- |
| Enquiry form (Name/Email/Phone/Service/Message) | KEEP | Real, functional, well-scoped form — preserve field set and validation |
| 3-office structure with address/phone/email | KEEP structurally, VERIFY details | Keep the pattern; confirm every address/phone/email is current and reconcile with the Home footer version |
| "Open in Google Maps" placeholder link (UAE card) | REWRITE FOR CLARITY | Currently a dead `#` fragment, not a working Maps link — needs a real destination or removal of the affordance |
| "Open in Map" JS buttons with no href | REWRITE FOR CLARITY | Same — verify these actually function before carrying forward |
| Intro/company blurb | KEEP | Clear, accurate summary of the service lines, low factual risk |
| Sitewide newsletter widget (also present here) | REMOVE | Redundant with the real enquiry form already on this page |

---

## 9. Support Ticket

- **URL:** https://etriplesoft.com/support-ticket/
- **Title:** Support Ticket - E-TripleSoft
- **SEO meta:** description "Support Ticket Home - Support Ticket" (generic auto-generated string) · canonical present · hreflang en/ar/x-default present
- **Current purpose:** A thin wrapper page (design family "portal") that embeds an external Odoo Helpdesk ticketing portal via iframe (`https://etriple.odoo.com/helpdesk/support-tickets-1`) rather than hosting its own support content.
- **Headings:** H1 "Support Ticket" only.
- **Body copy:** None — the only static text is a breadcrumb ("Home"). `full-text.txt` confirms the entire page is 3 lines: "Support Ticket / Home / – Support Ticket."
- **CTAs:** None (no button-style links; only the breadcrumb).
- **Images:** None.
- **Forms:** Only the sitewide newsletter widget is captured statically; the actual ticket-submission UI lives entirely inside the embedded Odoo iframe and isn't part of this WordPress page's own markup.
- **Downloadable documents:** None.
- **Internal links:** Self-referential breadcrumb only.
- **Service information:** None on-page (functionality is delegated entirely to the external Odoo Helpdesk portal).
- **Factual claims:** None.
- **Partner references:** Odoo Helpdesk (as the underlying platform, via the iframe destination).
- **Note (from `review.md`):** "Keep the existing external destination and purpose. Create a translated editable introduction and accessible external-link fallback. External portal content is not captured or controlled here." This is useful direction from the prior audit, not this inventory's own recommendation.

**Categorization**

| Element | Category | Note |
| --- | --- | --- |
| External Odoo Helpdesk portal (the actual functionality) | KEEP | Preserve the destination/integration — it's the real substance of this page |
| Static WordPress wrapper (H1 + breadcrumb only) | REWRITE FOR CLARITY | Effectively empty; needs a real introduction and an accessible fallback link for users who can't load the iframe (e.g. no-JS, embedded-content blockers) |
| Generic auto-generated SEO description ("Support Ticket Home - Support Ticket") | REWRITE FOR CLARITY | Not a real meta description — should be replaced with something that actually describes the page |

---

## 10. Careers

- **URL:** https://etriplesoft.com/careers/
- **Title:** Careers - E-TripleSoft
- **SEO meta:** description "Home - Careers" (generic auto-generated string) · canonical present · hreflang en/ar/x-default present
- **Current purpose:** Same thin-wrapper pattern as Support Ticket — embeds an external Odoo Jobs/recruitment portal via iframe (`https://etriple.odoo.com/jobs`) rather than hosting job listings on the WordPress site.
- **Headings:** H1 "Careers" only.
- **Body copy:** None — only a breadcrumb ("Home"). `full-text.txt` is 3 lines total.
- **CTAs:** None (breadcrumb only).
- **Images:** None.
- **Forms:** Only the sitewide newsletter widget captured statically; the real application flow is inside the embedded Odoo Jobs iframe.
- **Downloadable documents:** None.
- **Internal links:** Self-referential breadcrumb only.
- **Service information:** None on-page.
- **Factual claims:** None.
- **Partner references:** Odoo Jobs/Recruitment module (via the iframe destination).
- **Note (from `review.md`):** Same guidance as Support Ticket — "Keep the existing external destination and purpose. Create a translated editable introduction and accessible external-link fallback."

**Categorization**

| Element | Category | Note |
| --- | --- | --- |
| External Odoo Jobs portal (the actual functionality) | KEEP | Preserve the destination/integration |
| Static WordPress wrapper (H1 + breadcrumb only) | REWRITE FOR CLARITY | Same as Support Ticket — needs a real introduction and accessible fallback |
| Generic auto-generated SEO description ("Home - Careers") | REWRITE FOR CLARITY | Not a real meta description |

---

## 11. Portfolio

- **URL:** https://etriplesoft.com/portfolio/
- **Title:** Portfolio - E-TripleSoft
- **SEO meta:** description "Home - Portfolio" (generic auto-generated string) · canonical present · hreflang en/ar/x-default present
- **Current purpose:** A large logo grid presented as "Portfolio" — a visual wall of client/partner logos with no project descriptions, case studies, or links to individual project pages.
- **Headings:** H1 "Portfolio" only.
- **Body copy:** Only a breadcrumb-style "Home – Portfolio" rendered as a paragraph; no narrative prose anywhere on the page.
- **CTAs:** None — no button-style links found; the `links` array is entirely unlabeled image-file hrefs (logo tiles).
- **Images:** Approximately 55 client/brand logo images (`/wp-content/uploads/2025/10/...` and `/wp-content/uploads/2026/02/...`), including named tiles: Hyper One, Infiniti Motors, ITQ, Mapy, Mazaya, Meat Bun, Melton Protection Solutions, Metal Exchange Group, Moonland, Newpack, Onestack, Panntone, Raya Shop, Roaz, Sam Samouy, Seoudi, SMS, Speed Sanad, Spinneys, Technonet Fire Fighting, Uppercut, Vogue Holidays, Yacune Demo, Zahause, Zeus Health & Wellness, Abodoh, ADSS, Al Janobi, Al-Kanal, Brio Health & Wellness, Buseet, Buseet Driver, Choice Interiors, Cosmos PR, Creative Way Ad, Express Tires, FTS Travel, Gift Concept, Golden Vote, BBR (construction). Several February-2026 uploads have **no alt text** and are identified only by filename: Tawasl, Megharbel, Lmasar, XTCY, X-Rentals, UniArmour, STS, RMG, Red Circle, Ram, ABM, Ieight, Has-Mamul, Haibacon, GCFX, Etqani, Bonyan.
- **Forms:** Only the sitewide newsletter widget; no project-inquiry or filtering form. No iframe/external embed on this page (unlike Support Ticket / Careers).
- **Downloadable documents:** None (the ~55 image files are logo assets, not business documents).
- **Internal links:** Self-referential breadcrumb only; all other links point to external media files, not internal pages.
- **Service information:** None — no project write-ups, deliverables, industries served, or results described anywhere.
- **Factual claims:** None in prose. The ~55-logo count is an inferred count from the capture, not a claim the page itself makes.
- **Partner references:** ~55 named or filename-inferred client/brand logos (listed above) — the page's entire content, effectively.
- **Note (from `review.md`):** Notably firmer language than the other thin pages — "Existing shell is not evidence of completed work. Preserve the route. Publish actual projects only with verified content and permission; otherwise use an honest project-enquiry introduction." Design family listed as "portfolio," distinct from the "portal" family used for Support Ticket/Careers.

**Categorization**

| Element | Category | Note |
| --- | --- | --- |
| Route `/portfolio/` itself | KEEP | Preserve the URL per the redesign's URL-preservation rule |
| The ~55-logo wall as currently presented | VERIFY BEFORE PUBLISHING | Per the source review note itself: a logo wall is not evidence of completed work — every logo needs confirmation it's a real, current, permission-cleared client before reuse, and several already lack any alt text/identification |
| Logos with no alt text (Tawasl, Megharbel, Lmasar, etc.) | VERIFY BEFORE PUBLISHING | Cannot confirm identity or permission status from this capture alone |
| Absence of any project narrative/case-study content | REMOVE (as a pattern) | A bare logo wall with zero project substance shouldn't be treated as portfolio content to carry forward as-is; either build real case-study content (verified) or replace with an honest project-enquiry framing, per the source note |
| Generic auto-generated SEO description ("Home - Portfolio") | REWRITE FOR CLARITY | Not a real meta description |

---

## Summary table

| # | Page | Thin/placeholder? | Distinct claims needing verification | Notable issues |
| --- | --- | --- | --- | --- |
| 1 | Home | No | 200+/since-2014-vs-2018, 40% cost reduction, 8-12wk delivery, 8 testimonials | Internal date contradiction |
| 2 | About Us | No | Odoo/Microsoft credentials | 2 typos, 2 filler blurbs |
| 3 | Odoo ERP Egypt | No | 250+ vs 300+ implementations, VAT rates, 176 partners, govt integrations | Internal count contradiction |
| 4 | Digital Marketing Agency | No | 40% ranking improvement, client results, exclusivity claim | "Numbers" section has no numbers |
| 5 | Cloud Security Solutions | No | Migration timeframes, ISO 27001, PDPL/NIS compliance | Mobile Apps link slug mismatch |
| 6 | AI Automation Services | No | 24/7 claim, ROI claims | FAQ heading present but empty (capture gap) |
| 7 | Web Design Company | No | EGP pricing, timelines, Core Web Vitals claim | Missing Arabic hreflang |
| 8 | Contact Us | No | Office address/phone consistency vs. Home footer | Dead "Open in Maps" links |
| 9 | Support Ticket | **Yes** | — | No static content beyond H1; generic SEO description |
| 10 | Careers | **Yes** | — | No static content beyond H1; generic SEO description |
| 11 | Portfolio | **Yes** | ~55 client logos | No project narrative at all; generic SEO description |
