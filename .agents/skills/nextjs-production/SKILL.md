---
name: nextjs-production
description: Conventions for this Next.js App Router codebase — component structure, server/client boundaries, and data-driven pages. Use when adding components, pages, or data, or reviewing where new code should live.
---

# Next.js Production Conventions

**Before writing any Next.js-specific code, read `AGENTS.md` at the repo root.** This project pins a non-standard Next.js build with breaking API changes from the trained-on version — `AGENTS.md` points to `node_modules/next/dist/docs/` for the real current API. Don't assume training-data Next.js APIs are correct here.

## Actual current architecture (not aspirational — this is what exists today)
```
app/                  routes: page.tsx, layout.tsx, [slug]/page.tsx (catch-all), insights/, portfolio/, api/
src/components/       site.tsx (996 lines: Header, Footer, Hero, Photo, Button, etc.),
                      company-pages.tsx, service-page.tsx, widgets.tsx
src/lib/data.ts       services, servicePages, industries — structured content
public/images/        processed .webp assets served by components
assets/images/        unprocessed source art — never served directly, see [[performance]]
scripts/extract-assets.mjs
```
There is no `sections/` or `styles/` directory yet, and `src/components/site.tsx` is a large shared file rather than one-component-per-file. Don't invent paths that don't exist — check with a directory listing first.

## Rules
- TypeScript throughout (`tsc --noEmit` via `npm run check`).
- Prefer Server Components; add `"use client"` only where interactivity (state, effects, event handlers) requires it (e.g. `Header`'s mobile menu, which already uses `useState`/`usePathname`).
- Use `next/image` for new image-heavy components where practical; existing components use raw `<img>` — don't block unrelated work on migrating them, but don't add more raw `<img>` usage in new code without reason.
- Metadata via the `Metadata`/`generateMetadata` API (see [[technical-seo]]), not manual `<head>` tags.
- Content (copy, lists, service/industry data) belongs in `src/lib/data.ts`, not inlined in JSX, so pages stay data-driven and reusable per [[content-architecture]].
- CSS: one global stylesheet (`app/globals.css`) with CSS custom properties (see [[etriplesoft-brand]] for tokens) — no CSS-in-JS or component-scoped stylesheets have been introduced; stay consistent with that unless there's a specific reason to change it.

## When extracting/refactoring
If a component in `site.tsx` grows unwieldy or is reused enough to warrant its own file, extract it to `src/components/<name>.tsx` and re-export/import — don't silently duplicate markup across pages. Reusable section-level building blocks to consider extracting as they recur: Header, Footer, Hero, TrustStrip, ProductStory, ServiceExplorer, ProcessTimeline, IndustryExplorer, RegionalMap, CaseStudyFeature, StatsBand, Testimonials, InsightsGrid, ToolsSection, FinalCTA — several of these already exist under different names in `site.tsx`/`widgets.tsx` (e.g. `Process`, `Stats`, `Testimonials`, `CTA`); reuse those before creating new ones with overlapping purpose.

## Avoid
- Giant one-off `page.tsx` files duplicating markup that already exists as a component.
- Magic numbers for spacing/color instead of existing CSS variables.
- New dependencies for something CSS or an existing small helper already covers.
- Large monolithic new client components — keep client boundaries small and push state down.

## Composability
Implements [[content-architecture]] and [[etriplesoft-brand]] in code; hosts [[etriplesoft-motion]] interactions; optimized per [[performance]]; the component/data split here is exactly what [[wordpress-migration]] later maps to blocks.
