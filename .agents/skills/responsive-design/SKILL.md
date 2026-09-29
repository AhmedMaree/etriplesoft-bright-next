---
name: responsive-design
description: Responsive design across breakpoints. Use when building or reviewing any UI layout to ensure it works from mobile through desktop, not just at one viewport size.
---

When building or reviewing a page or component, check every layout at these widths: 320px, 375px, 768px, 1024px, 1440px.

## Core rules
- Never design desktop-first and shrink. Build mobile layout and content order first, then expand.
- Content order can change between breakpoints (e.g. image after text on mobile, beside it on desktop) — don't just resize the same DOM order.
- Use CSS Grid/Flexbox with `minmax()`, `auto-fit`/`auto-fill`, and relative units (`rem`, `%`, `fr`) instead of fixed pixel widths for layout containers.
- Never let text or a fixed-width element cause horizontal scroll on the body. Wide content (tables, code blocks) gets its own `overflow-x: auto` container.
- Touch targets are at least 44x44px on mobile — check buttons, nav items, and icon-only controls.
- Navigation must have a working mobile pattern (hamburger, bottom nav, or a stacked menu) — don't just shrink a horizontal nav bar until it wraps badly.

## Images & media
- Always set explicit width/height or aspect-ratio to prevent layout shift while loading.
- Use `srcset`/`sizes` or the framework's image component so mobile doesn't download desktop-sized images.

## Typography
- Use a type scale that adjusts at breakpoints (e.g. smaller heading sizes on mobile) rather than one fixed size everywhere.
- Line length should stay readable (45-75 characters) — don't let text stretch edge-to-edge on wide screens.

## Testing checklist before calling a layout done
- No horizontal scroll at any width from 320px up.
- No overlapping or clipped elements at any breakpoint.
- Interactive elements are reachable and tappable on mobile.
- Images and cards reflow into single-column on narrow screens where a multi-column grid would be too cramped.
- Test with the browser's device toolbar or actual screenshots at each width, not just a resized window.
