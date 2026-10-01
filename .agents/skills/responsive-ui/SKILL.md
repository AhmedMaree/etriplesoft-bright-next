---
name: responsive-ui
description: Build and verify responsive layouts across all required breakpoints, not just desktop scaled down. Use when building any new UI section or reviewing layout/CSS changes.
---

# Responsive UI

## Required viewport widths
Test at: 1440, 1280, 1024, 768, 430, 390, 375, 360.

`app/globals.css` already defines breakpoints at `1200px`, and further mobile rules near `768px`/`430px` for `.hero`, `.hero-inner`, `.hero-copy` — check existing `@media` blocks before adding new ones, and extend them instead of creating parallel rules.

## Principle
Do not just scale the desktop layout down. Recompose per tier:
- **Desktop (≥1024):** full split layouts (e.g. `.hero-copy` / `.hero-image`, `.split` containers).
- **Tablet (768–1023):** simplified compositions — collapse multi-column grids, keep the split where it still reads, or stack if not.
- **Mobile (≤430):** single-column. Desktop-only interactions (hover cards, sticky scroll-story, marquee) need a tap/swipe or static equivalent — see [[etriplesoft-motion]].

## Checklist per section, per breakpoint
- No horizontal overflow (`overflow-x` on `html`/`body` should never trigger)
- Typography: line-length, size, and line-height stay readable (`clamp()` values in `globals.css` already handle some of this — verify at the extremes)
- Spacing/padding scale down proportionally, not just cropped
- Navigation collapses correctly (check `Header` component's mobile menu state in `src/components/site.tsx`)
- Buttons remain full-width or thumb-friendly on mobile; min touch target ~44px
- Images crop sensibly (`object-position` set intentionally, not default `center`)
- Sticky sections don't overlap content or break on short viewports
- Interactive components (dropdowns, accordions, carousels) remain usable by touch
- Card grids reduce column count sensibly (`cols-5`, `cols-3` grid classes in `globals.css`)
- Footer stacks cleanly
- Touch targets have adequate spacing (no accidental double-tap)

## Verification
Don't assert "it's responsive" from reading code. Use [[visual-regression]] to actually render and screenshot each required width before calling a layout done.

## Composability
Works with [[etriplesoft-brand]] (spacing/type scale discipline), [[etriplesoft-motion]] (per-breakpoint interaction equivalents), and [[accessibility]] (touch target size, focus order on collapsed nav).
