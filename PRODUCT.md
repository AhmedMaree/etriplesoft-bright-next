# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: owners and operations leads at growing SMBs / mid-market businesses across Egypt, UAE, and Saudi Arabia who need their first real ERP system, a modernized cloud setup, or a credible digital presence — practical buyers, budget-conscious, evaluating a small shortlist of regional implementation partners rather than global consultancies.

Secondary: industry-specific buyers (construction, retail, real estate, education, healthcare, logistics) where sector fit matters as much as company size.

## Product Purpose

ETripleSoft is a regional digital transformation partner. It implements and customizes Odoo ERP, and delivers cloud & security, AI automation, web & mobile development, and digital marketing as an end-to-end stack for businesses across Egypt, UAE, and Saudi Arabia. Success is a business that runs its operations on one coherent, supported system instead of fragmented tools, delivered by a team the client can actually reach locally.

## Positioning

Credentialed Odoo Gold Partner and Microsoft Partner — the differentiator is verified platform depth (official partner status, not a generalist agency claim) combined with local, on-the-ground teams in the region rather than a remote/outsourced vendor relationship.

## Operating Context

- Regional B2B sales motion: consultation → free demo/assessment → scoped implementation → ongoing support/training, mirrored per service (see each service page's `processTitle`/`steps` in `src/lib/data.ts`).
- Multi-office regional operation: Cairo (HQ, founded here), Riyadh, and Dubai.
- Working hours stated as Sunday–Thursday, 9 AM–6 PM (EET), reflecting the regional work week.
- Contact/support intake currently goes through email and a support-ticket form; career inquiries are explicitly email-only (the UI does not claim an application was "sent" through a portal).
- Inquiry delivery: contact/support forms validate client- and server-side; local dev writes to a gitignored `.local-inquiries/` folder and tells the visitor nothing was actually sent; production requires `INQUIRY_WEBHOOK_URL` (optionally `INQUIRY_WEBHOOK_TOKEN`) to a trusted HTTPS webhook that persists and delivers inquiries — until configured, production submission fails clearly rather than silently succeeding.

## Capabilities and Constraints

- Five core service lines: Odoo ERP, Cloud & Security, AI Automation, Web & Mobile Development, Digital Marketing (`src/lib/data.ts` → `services`/`servicePages`).
- Named industries served: Construction, Retail, Real Estate, Education, Healthcare, Logistics (`industries` in `src/lib/data.ts`).
- Routing is data-driven through a single `app/[slug]/page.tsx` catch-all keyed off `src/lib/data.ts` — new service/industry content should extend that data, not hardcode new one-off pages.
- No external stock photography is used or should be introduced. Do not use images of women on the website; use neutral dashboard imagery and people photography that meets this constraint.
- `src/lib/company.ts` is the source of truth for confirmed public contact details; omit unconfirmed fields rather than guessing.

## Brand Commitments

- Name: ETripleSoft. Logo: authentic supplied mark (dot-swirl "e" icon + "triple soft" wordmark) — never redrawn or approximated; see `public/images/logo.png`, `assets/logo.png` (high-res icon source).
- Partner marks: Odoo Gold Partner, Microsoft Partner — real, verified credentials, safe to lead with in positioning.
- Voice: calm, technical, trustworthy, business-focused — not hype-driven or casual.
- Design tokens already established in `app/globals.css` (`--navy #07163e`, `--blue #4445ff`, `--pale #f4f8ff`, `--muted #65718c`, `--line #e4ebf7`, Inter Variable typeface, 1240px container) — see also `.claude/skills/etriplesoft-brand/SKILL.md` for the fuller documented direction (bright-first, premium, no dark-first/neon/cyberpunk treatments).

## Evidence on Hand

Confirmed real facts (safe to build on):
- 250+ projects delivered.
- 10+ years of experience; founded roughly 2018.
- Operating in 3 countries: Egypt, UAE, Saudi Arabia.
- Offices in Cairo, Riyadh, and Dubai.
- Eight real client testimonials and attributions from the published home page in `old-content.xml` (stored in `src/data/testimonials.ts` and rendered by `Testimonials` in `src/components/site.tsx`). Use those source quotes; do not invent additional claims, roles, companies, star ratings or outcomes.

Still unverified / placeholder — do not treat as fact or extend with new invented numbers:
- Per `README.md`: the original supplied reference sheets contained "different branding variants, conflicting company statistics, ... sample contact details, job openings and customer claims" reproduced as design content; anything not explicitly confirmed above should be treated as unverified until the company confirms it.
- Case-study-specific numbers (e.g. "320% revenue growth," "70% reduction in manual work," "99.9% accuracy," "125% traffic increase," "100+ Happy Clients," "99.9% Uptime," "40+ Certified Experts") and the unnamed "Operations Director, Construction Industry" quote on the homepage are still unconfirmed — flag before presenting as fact.
- No real client logos beyond the confirmed partner marks (Odoo, Microsoft) and the named trusted-by client logos already in `public/images/client-logos.png` — do not fabricate new client names or logos beyond the eight testimonials above.

## Product Principles

1. Lead with verified platform credentials (Odoo Gold Partner, Microsoft Partner) over generic capability claims.
2. Speak to practical, budget-conscious operators — plain business outcomes over technical jargon, per the existing service-page copy pattern (problem → process → proof → CTA).
3. Regional presence is real and load-bearing — Cairo/Riyadh/Dubai and Egypt/UAE/KSA framing should stay consistent across every surface, not diluted into generic "global" language.
4. Never introduce new unverified statistics, testimonials, or client names; extend only the confirmed facts above, and flag anything else as needing company sign-off.
5. Keep the five service lines and named industries as the backbone of navigation and content — new content should slot into that structure (`src/lib/data.ts`) rather than create parallel one-off taxonomies.

## Accessibility & Inclusion

No product-specific accessibility requirement was established beyond general WCAG-conscious practice already tracked in `.claude/skills/accessibility/SKILL.md`.
