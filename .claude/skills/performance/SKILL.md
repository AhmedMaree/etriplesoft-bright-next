---
name: performance
description: Optimize Core Web Vitals (LCP, CLS, INP), image weight, bundle size, and font loading. Use when adding images, client components, animation libraries, third-party scripts, or fonts, or when reviewing page weight.
---

# Performance

## Images
- This project has `sharp` installed and a `scripts/extract-assets.mjs` pipeline — convert new source images to WebP (or AVIF where it wins) and drop them into `public/images/`, matching the existing `.webp` convention used by the `Photo` component and `Hero` component in `src/components/site.tsx`.
- Set explicit width/height (or use `next/image` with `fill`/intrinsic sizing) so images don't cause layout shift. Note: current hero/photo components use raw `<img>` tags, not `next/image` — prefer migrating a component to `next/image` when touching it substantially, but don't do a blanket rewrite outside scope.
- Lazy-load below-the-fold images (`loading="lazy"`, already default in `Photo`). Never lazy-load the LCP image (hero) — keep `fetchPriority="high"` as already set in `Hero`.
- Serve responsively sized images; don't ship a 4K source for a 400px slot.

## JavaScript
- Prefer React Server Components; only mark a component `"use client"` when it needs state, effects, or browser APIs.
- Dynamic-import heavy client-only components (carousels, charts, map widgets) with `next/dynamic`.
- Avoid adding animation/UI libraries when CSS transitions/animations (per [[etriplesoft-motion]]) already cover the need.
- Avoid third-party scripts unless required; if added, load with `next/script` using `strategy="lazyOnload"` or `"afterInteractive"` as appropriate — never a blocking synchronous `<script>` in `<head>`.

## Fonts
- Already using `@fontsource-variable/inter` self-hosted via `next/font`-compatible import in `app/layout.tsx` — do not switch to a Google Fonts CDN `<link>` (adds a render-blocking external request). Don't add additional weights/families without a concrete need.

## Check before calling a page done
- LCP: identify the actual largest element (usually the hero image) and confirm it isn't delayed by JS or lazy-loading.
- CLS: images/embeds have reserved space; no late-loading web fonts causing reflow (self-hosted variable font avoids most of this).
- INP: interactive elements (menus, accordions) respond immediately — no heavy synchronous work on click/tap.
- Bundle size: check `next build` output for unexpectedly large client chunks after adding a dependency.
- Image weight: spot-check new files in `public/images/` are WebP/AVIF, not raw PNG/JPEG source dumps (note: `assets/images/` holds unprocessed source art — never serve straight from there).
- Third-party scripts: none unless justified.

## Composability
Works downstream of [[nextjs-production]] (architecture enables these choices) and [[etriplesoft-motion]] (keep animation cheap). Verified visually in [[visual-regression]] (CLS is visible as layout jumps) but measured, not eyeballed, for the actual metrics.
