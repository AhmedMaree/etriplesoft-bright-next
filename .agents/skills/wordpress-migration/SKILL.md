---
name: wordpress-migration
description: Plan the later conversion of the approved Next.js prototype to WordPress. Use only when explicitly asked to plan or execute the WordPress migration — not during normal Next.js feature work.
---

# WordPress Migration

This skill applies to the *future* production conversion step, once the Next.js prototype is approved. It does not apply to day-to-day work on the Next.js site — that's [[nextjs-production]].

## Mapping model
For each component/section identified under [[nextjs-production]] and [[content-architecture]]:
```
Next.js component  →  WordPress reusable component  →  Gutenberg/custom block  →  editable content
```
Example: `Hero` (`src/components/site.tsx`) → a hero block with fields for eyebrow/title/accent/description/image/CTAs → editable by editors without touching code, mirroring the props the React component already takes (`eyebrow`, `title`, `accent`, `description`, `image`, `primary`, `secondary`, `note`, `checks`).

The existing prop-driven, data-driven structure in `src/lib/data.ts` (services, servicePages, industries) is a head start: it already separates content from layout, which is exactly what block attributes need to mirror.

## Must be preserved
- URLs — the `names` slug map in `app/[slug]/page.tsx` is the canonical URL list; every one of those paths must resolve in WordPress, with 301s for any that can't be kept exactly.
- SEO — titles, descriptions, canonicals, structured data from [[technical-seo]] must have WordPress equivalents (Yoast/RankMath fields or custom meta).
- Content — copy, data, and imagery carried over as-is, not rewritten in transit.
- Responsive behavior — per [[responsive-ui]], re-verified in the WordPress theme, not assumed to carry over automatically.
- Accessibility — per [[accessibility]], re-audited in the new markup (theme/block output often differs from hand-written JSX).
- Animation intent — per [[etriplesoft-motion]], reimplemented with equivalent restraint, not necessarily the same code.
- Component reuse — one block per reusable pattern, not one block per page.

## Don't
- Don't hardcode every section as static HTML in a page template — business/content data (services, industries, testimonials, stats) must stay editable in the WordPress admin, matching how it's already externalized in `src/lib/data.ts`.
- Don't start this work speculatively — it's a distinct phase, triggered explicitly, after the Next.js prototype is signed off.

## Composability
Downstream of every other skill here — it inherits [[etriplesoft-brand]], [[etriplesoft-motion]], [[content-architecture]], [[technical-seo]], [[accessibility]], and [[responsive-ui]] rather than redefining them.
