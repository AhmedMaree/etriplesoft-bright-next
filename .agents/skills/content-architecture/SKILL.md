---
name: content-architecture
description: The site's information hierarchy and content model. Use when adding a new page/section, deciding where content belongs, or checking whether a new route fits the existing structure.
---

# Content Architecture

## Actual current structure (verify against `app/[slug]/page.tsx` `names` map and `src/lib/data.ts` before assuming)
```
Home                         app/page.tsx
Odoo ERP                     /odoo            (ServicePage, src/lib/data.ts → servicePages)
Services
  AI Automation              /ai
  Cloud & Security           /cloud
  Web Development            /web
  Digital Marketing          /digital-marketing
Industries                   /industries       (PortfolioPage, shared with Portfolio)
Portfolio / Work             /portfolio
Insights                     /insights         (app/insights/)
Company
  About                      /about, /about-us
  Careers                    /careers
  Contact                    /contact
Support
  Support Ticket             /support-ticket
FAQs                         /faqs
Legal                        /privacy, /terms
```

## Target hierarchy to grow toward
Home → Odoo ERP (Overview/Implementation/Customization/Integration/Migration/Support/Training) → Services (AI Automation, Cloud & Security, Web Development, Mobile Apps, Digital Marketing) → Industries (Construction, Manufacturing, Retail, Real Estate, Education, Healthcare, Logistics, Professional Services) → Work (Portfolio, Case Studies) → Insights (Articles, Guides, Resources, FAQ) → Company (About, Careers, Contact) → Support (Support Center, Ticket).

When adding a new page, place it under the closest matching branch above rather than inventing a new top-level section. If it genuinely doesn't fit, that's a deliberate decision to flag, not a default.

## Mechanics
- New slugs are registered in the `names` object in `app/[slug]/page.tsx` and routed to the right component (`ServicePage`, `AboutPage`, `PortfolioPage`, etc. from `src/components/company-pages.tsx` / `src/components/service-page.tsx`).
- Service-specific content (title, description, checks, etc.) lives in `src/lib/data.ts` (`services`, `servicePages`, `industries`) — add data there, don't hardcode new service content directly in a component.
- Reuse templates: a new service page should reuse `ServicePage`, a new industry sub-page should reuse `PortfolioPage`'s pattern, rather than a bespoke one-off layout. See [[nextjs-production]] for component reuse rules.

## Composability
Drives [[technical-seo]] (URL/heading structure follows this hierarchy) and [[nextjs-production]] (data-driven templates over one-off pages). Preserved during [[wordpress-migration]].
