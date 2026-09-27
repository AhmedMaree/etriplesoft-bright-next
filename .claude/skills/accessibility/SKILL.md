---
name: accessibility
description: Enforce semantic HTML, keyboard access, and WCAG-conscious contrast/motion across the site. Use when building or reviewing navigation, forms, dialogs, accordions, dropdowns, or any interactive/visual component.
---

# Accessibility

## Enforce
- Semantic HTML first — `<nav>`, `<button>`, `<a>`, `<header>`, `<footer>`, `<main id="main">` (already used in `app/layout.tsx` with a skip link) before reaching for `<div>` + ARIA.
- Correct heading hierarchy: one `<h1>` per page, no skipped levels (`h2` → `h4` without `h3` is wrong).
- Full keyboard navigation: every interactive element reachable and operable via Tab/Shift+Tab/Enter/Space/Escape/Arrow keys where conventional.
- Visible focus states — never `outline: none` without a replacement focus style.
- Accessible nav: `Header` component's dropdown groups and mobile menu (`src/components/site.tsx`) must be operable by keyboard, with `aria-expanded`/`aria-current` where they convey real state.
- Labeled forms: every input has a associated `<label>` (or `aria-label` only when a visible label truly isn't feasible); error messages tied to fields via `aria-describedby`.
- Keyboard-accessible dropdowns, dialogs, accordions: Escape closes, focus is trapped appropriately in modals, focus returns to the trigger on close.
- WCAG AA contrast: check text/background pairs against `app/globals.css` tokens — `--muted: #65718c` on white is borderline for small text; verify before using it for body copy at small sizes.
- Respect `prefers-reduced-motion` (owned in detail by [[etriplesoft-motion]], enforced here as a hard requirement).
- Meaningful `alt` text on every `<img>` (the `Photo` component in `site.tsx` defaults `alt=""` — always pass a real value when the image is content, leave empty only for decorative images).
- Screen-reader-friendly controls: icon-only buttons need an accessible name (`aria-label` or visually-hidden text).

## Don't
- Don't add ARIA roles/attributes to elements that already have correct native semantics (a `<button>` doesn't need `role="button"`).
- Don't add `tabindex` > 0 (breaks natural tab order).
- Don't rely on color alone to convey state (pair with icon/text).

## Composability
Checked visually alongside [[visual-regression]] (focus states, contrast) and structurally alongside [[responsive-ui]] (touch target size, mobile nav keyboard/tap parity). Interacts with [[etriplesoft-motion]] (reduced-motion) and [[nextjs-production]] (semantic component structure).
