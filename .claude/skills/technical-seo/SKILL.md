---
name: technical-seo
description: Ensure every page has correct metadata, heading structure, and appropriate structured data. Use when creating a new page/route or editing metadata, headings, or Open Graph tags.
---

# Technical SEO

## Per page
- Unique `title` — use the Next.js `Metadata`/`generateMetadata` pattern already established in `app/layout.tsx` (title template `"%s | ETripleSoft"`) and `app/[slug]/page.tsx` (`generateMetadata` keyed off the `names` map). New routes should follow this same pattern, not a hardcoded `<title>` tag.
- Unique meta description per page — don't reuse the root layout's default description verbatim on subpages.
- Canonical URL set (via `alternates.canonical` in `Metadata`) especially for any page reachable by more than one path.
- Exactly one logical `<h1>` per page — cross-check with [[accessibility]]'s heading-hierarchy rule, same requirement, different lens.
- Open Graph metadata (`openGraph.title/description/images`) and Twitter card metadata (`twitter.card`, etc.) on every public page, not just the homepage.

## Structured data (schema.org)
Add only when genuinely applicable:
- `Organization` — once, site-wide (layout or homepage).
- `Service` — on service pages (`odoo`, `cloud`, `ai`, `web`, `digital-marketing` in `app/[slug]/page.tsx` → `ServicePage`).
- `BreadcrumbList` — on any page with a clear hierarchical path (industries, insights articles, service subpages).
- `Article` — on insight/blog posts under `app/insights/`.
- `FAQPage` — only on the actual `faqs` route, and only if the Q&A content is genuinely FAQ-structured (not invented to get rich results).

## Routing
- This site is driven by a single `app/[slug]/page.tsx` catch-all mapped through the `names` object and `generateStaticParams` in `src/lib/data.ts` / that file. Preserve existing slugs (`odoo`, `cloud`, `ai`, `web`, `digital-marketing`, `about`, `portfolio`, `contact`, etc.) — changing a slug breaks an indexed URL. If a URL must change, this needs a redirect, not a silent rename.

## Don't
- Don't invent SEO claims (fake review counts, fake ratings, fake "trusted by X clients" numbers) in structured data or copy.
- Don't keyword-stuff titles/descriptions/headings.
- Always write for search intent and real usefulness first; metadata should accurately describe what's on the page.

## Composability
Structural half of what [[accessibility]] checks visually (headings). Content it describes should match [[content-architecture]]'s hierarchy. Preserved fully during any [[wordpress-migration]].
