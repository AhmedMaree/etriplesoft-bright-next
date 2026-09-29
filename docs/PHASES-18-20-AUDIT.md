# Phases 18–20 audit: contact, support, privacy, terms

Sources compared: repository (before), `old-content.xml`, live-site values supplied in the brief.

## 1. Company data audit

| Value | Repo before | Export | Live brief | Decision |
|---|---|---|---|---|
| Email `info@etriplesoft.com` | yes | yes | yes | **Published** (`primaryEmail`) |
| Email `support@etriplesoft.com` | Contact, Support page, API messages | **not found** | not listed | **Removed.** `supportEmail: null`. OWNER CONFIRMATION |
| Egypt address `Villa 350, South Academy B, New Cairo, Egypt` | no (had "Nile Corniche, Maadi") | yes | yes | **Published** |
| Egypt phones `+20 100 210 6952`, `+20 104 409 8406` | no | yes | yes | **Published** |
| Saudi address | "King Fahd Road, Olaya" (invented) | "As Sulimaniyah, Al Olaya, Riyadh 12214" and "Al Olaya, Riyadh, 12214, KSA" | long form | **SAUDI ADDRESS — NEEDS OWNER CONFIRMATION.** City only is published |
| Saudi phone `+966 508 547 071` | no | yes | yes | **Published** |
| UAE address `Latifa Tower, West Wing, Office 103, Sheikh Zayed Rd, Dubai, UAE` | "Business Bay" (invented) | yes | yes | **Published** |
| UAE phones `+971 52 440 1992`, `+971 58 158 8214` | no | yes | yes | **Published** |
| Business hours | "Sunday – Thursday, 9 AM – 6 PM (EET)" | legacy contact-page JSON-LD has Sun–Thu 09:00 opening hours | none reliable | **Removed.** `businessHours: null`, no block, no `openingHours`. OWNER CONFIRMATION |
| "Respond within 24 hours" | not migrated | live form copy | — | **Not migrated** (SLA-style claim). Generic wording used |
| LinkedIn `linkedin.com/company/etriplesoft` | no | yes | yes | **Published** |
| Instagram `instagram.com/etriplesoft` | no | yes | yes | **Published** |
| Facebook | no | footer uses `facebook.com/share/1Dca6xTt2i/` (generic share URL); SEO-plugin settings hold `facebook.com/etriplesoft/` | — | **NEEDS-VERIFICATION, not published** |
| WhatsApp `wa.me/201002106952` | no | yes (legacy chat button) | — | Not published (no current feature). Same number as Egypt phone |
| Odoo helpdesk `etriple.odoo.com/helpdesk/support-tickets-1` | Support page | yes | — | Kept as `supportPortalUrl`. OWNER CONFIRMATION that it is still live |
| Odoo demo booking `etriple.odoo.com/appointment/3` | no | yes (legacy CTA) | — | Not used. OWNER CONFIRMATION if a demo-booking link is wanted |
| "Dhaka, BD" job locations in `widgets.tsx` `Jobs` | unused component | — | — | Out of scope; component unused |

Hardcoded-values table (before → after): Footer email, Contact strip, Offices component, Support page, careers CV mailto, Jobs mailto, insights newsletter error text, API error messages, `[slug]` privacy text, `siteContact` in navigation, `siteUrl`/`siteName`, root metadata base: **all now read `src/lib/company.ts`**. Header/mobile nav contained no contact data.

## 2. Centralization report

- Config: `src/lib/company.ts` (typed; helpers `officeMapUrl`, `mailto`, `primaryPhone`; `tel:` hrefs are derived once).
- Consumers: Footer (email, socials), Offices/Contact page, Support page, careers mailto, Jobs mailto, insights newsletter, `/api/inquiries` messages, `navigation.ts`, `site.ts`, root layout (`metadataBase` and Organization JSON-LD via `organizationJsonLd()` in `seo.ts`), Privacy and Terms contact sections.
- Intentionally hardcoded: the legal-entity definition "E-TripleSoft, Villa 350, South Academy B, New Cairo" inside both legal documents (see 5/6). Marketing claims were not moved into config.
- JSON-LD: Organization with email, phones, per-office `Place`, `sameAs`. No ratings, reviews or opening hours.

## 3. Contact report

- `/contact`: breadcrumb, hero + form, contact methods (email, phone, support link; hours block only if `businessHours` set), offices, FAQ, customer-support CTA. Invented addresses and the "confirm before travel" developer copy are gone.
- Form (`src/components/contact-form.tsx`): real labels, `autocomplete`, input types, blur and submit validation, error summary with links (focused on submit), `aria-invalid`/`aria-describedby`, `aria-live` status, disabled and spinner while submitting, values preserved on server or network error, success panel, honeypot.
- Server (`app/api/inquiries/route.ts`, shared rules in `src/lib/inquiry.ts`): authoritative validation, allow-listed fields (unknown fields rejected), enum check on service/category, length caps, same-origin check, 64 KB body cap, per-IP rate limit (5 per 10 min, in-memory), honeypot, no logging of content.
- Delivery: POST to `INQUIRY_WEBHOOK_URL` (same multipart `inquiry` JSON as before, optional bearer token). Without it, production returns 503 with the email fallback; development writes `.local-inquiries/` and says so.
- Removed: shown "Reference: xxxx" IDs, "Your information is secure and will never be shared" (a promise), attachments (extension-only check was not a secure upload path).
- Response-time claim: **not migrated**; text reads "Send us your enquiry and our team will get back to you."

## 4. Support ticket report

- Before: page linked to the Odoo helpdesk portal and `support@` (unverified); a generic "How Our Support Works" process (implied commitments); the in-page support form existed in code but was not used; "Critical/High" priorities were collected with no meaning.
- Now: three clearly separated paths: Existing Customer Support (portal link + on-site form, categories Technical Support, Account & Billing, Feature Request, Other), Sales Enquiries (service cards to `/contact?service=…`), General Contact. Priority, attachment, consent-checkbox and process/SLA content removed.
- Destination: same webhook as Contact (`kind: "support"`). **TECHNICAL INTEGRATION:** `INQUIRY_WEBHOOK_URL` must be set in production, otherwise the form returns a 503 and points users to the email or the portal. No fake success.
- Spam/security: honeypot, rate limit, allow-lists, length caps, origin check; secrets only in server env (`INQUIRY_WEBHOOK_URL`, `INQUIRY_WEBHOOK_TOKEN`). No CAPTCHA exists in the project and none was added; add a CAPTCHA or edge rate limiting if abuse appears (in-memory limits are per instance).

## 5. Privacy audit

Legal text migrated verbatim from `/privacy-policy/` into `src/content/legal/privacy.ts`; nothing removed. No "last updated" date is shown (none verified). Rendering: `src/components/legal-page.tsx`.

| Processing / technology | In code? | In policy? | Action |
|---|---|---|---|
| Contact / support form data (name, email, company, phone, message) | Yes, sent to the webhook | Yes (Personal Data) | None |
| Newsletter email + consent | Yes (`/insights`) | Partly (contact/news clause) | LEGAL REVIEW |
| Usage Data (IP, browser, pages) | Only host/server logs, unknown | Yes | LEGAL REVIEW |
| Cookies (session, persistent, consent notice, functionality) | **None set by the app** | Yes, detailed | LEGAL REVIEW: mismatch |
| Cookie consent banner | No | Cookie "notice acceptance" cookies described | LEGAL REVIEW: mismatch |
| Web beacons / analytics / marketing pixels | **None found** | Yes ("beacons, tags, scripts") | LEGAL REVIEW: mismatch |
| User Accounts / login / "registered user" | **None** | Yes (Account, sign-in, login cookies) | LEGAL REVIEW: mismatch |
| Purchases / contract via the Service | No | Yes | LEGAL REVIEW |
| Business partners / affiliates / other users' public areas | No | Yes | LEGAL REVIEW |
| Email/SMS/push marketing | Newsletter only | Yes | LEGAL REVIEW |
| Third-party embeds (maps, video, CAPTCHA) | None embedded; outbound links only (Google Maps, LinkedIn, Instagram, Odoo helpdesk) | "Links to Other Websites" | None |
| Odoo helpdesk portal (third-party) | Outbound link | Not named | LEGAL REVIEW |
| References "Cookies Policy" | No such page | Yes | LEGAL REVIEW: dangling reference |
| References a "Last updated" date at the top | No date shown | Yes | LEGAL REVIEW |
| Children under 13 vs Terms 18+ | — | Both present | LEGAL REVIEW: age thresholds differ |
| Legal entity "E-TripleSoft, Villa 350, …" | — | Yes | LEGAL / BUSINESS VERIFICATION REQUIRED |

## 6. Terms audit

Migrated verbatim from `/terms-conditions/` into `src/content/legal/terms.ts`. Every item below is **LEGAL REVIEW**; none was changed:

- Minimum age 18 (Acknowledgment), which differs from the Privacy Policy's under-13 wording
- Termination "immediately, without prior notice or liability, for any reason whatsoever"
- Limitation of liability, including the fixed **100 USD** cap
- Governing law ("the laws of the Country", Egypt; no venue or court named)
- Dispute resolution (informal contact first only)
- EU consumer clause
- US legal-compliance representation (embargo / prohibited-party warranty)
- Translation precedence (English prevails; Arabic legacy pages exist but the new site has no Arabic)
- 30-day notice for material changes, and materiality at the Company's sole discretion
- Terms refer to an "Application", which does not exist on this site
- Legal entity/address definition (LEGAL / BUSINESS VERIFICATION REQUIRED)
- Old placeholder copy ("reference designs", "local preview", "does not create a service-level agreement") is gone.

Contact sections show the email, contact-page URL (now `/contact`, the new canonical, replacing `/contact-us/`) and phone from the config.

## 7. Redirect map (one hop, permanent, with and without trailing slash)

| From | To |
|---|---|
| `/privacy-policy` | `/privacy` (existing) |
| `/terms-conditions` | `/terms` (new) |
| `/ar/privacy-policy` | `/privacy` (new; the Arabic text is not migrated, following the existing `/ar/*` pattern) |
| `/ar/terms-conditions` | `/terms` (new; same) |
| `/contact-us` | `/contact` (existing) |

`/support-ticket` kept its path. `npm run test:redirects`: 349 checks passed. Sitemap already lists `/contact`, `/support-ticket`, `/privacy`, `/terms`.

## 8. Verification queue

**OWNER CONFIRMATION**
- Saudi office street address (which wording is current)
- Business hours (a legacy Sun–Thu 09:00 value exists but was not published)
- `support@etriplesoft.com` existence
- Facebook profile URL (`/etriplesoft/` vs share link)
- Odoo helpdesk portal still live; optional demo-booking link
- Response-time wording (none published)
- Whether to redirect `/ar/*` legal URLs to English pages

**LEGAL REVIEW**
- All Terms items in section 6
- All Privacy mismatches in section 5, especially cookies, accounts, beacons, business partners, "Last updated", "Cookies Policy"
- Legal-entity definition and address

**TECHNICAL INTEGRATION**
- Set `INQUIRY_WEBHOOK_URL` (and optional `INQUIRY_WEBHOOK_TOKEN`) in production and confirm the receiver accepts the multipart `inquiry` field. Attachments are no longer sent; the receiver must not require one.
- Consider CAPTCHA or edge rate limiting (current limit is per instance)
- No `lint` script exists in `package.json` (only `check` = `tsc --noEmit`)

**RESOLVED**
- One central company config; invented Cairo/Riyadh/Dubai addresses and invented hours removed
- Contact and Support pages production-ready with full form states and server validation
- Placeholder/developer legal copy replaced with the migrated legal text
- Legacy legal redirects in place; build and type-check pass
