---
name: etriplesoft-brand
description: Enforce ETripleSoft's visual identity (color, type, imagery, tone) on this site. Use whenever creating or reviewing any component, page, or design decision, or when a color/font/image choice is being made.
---

# ETripleSoft Brand

Source of truth for tokens is `app/globals.css` `:root`. Do not invent new colors — extend that block if a new token is genuinely needed, then use it everywhere via `var(--name)`.

## Current tokens (app/globals.css)
- `--navy: #07163e` — primary text / headings, dark surfaces (footer, CTA bands)
- `--ink: #101b40` — body text
- `--blue: #4445ff` — primary accent (links, buttons, active states)
- `--muted: #65718c` — secondary/supporting text
- `--pale: #f4f8ff` — light cool-blue surface background
- `--line: #e4ebf7` — hairline borders/dividers
- `--radius: 10px`, `--container: 1240px`

If a task calls for the "cyan/teal" and "royal blue/blue-violet" two-accent system described in brand direction, treat `--blue` as the blue-violet accent and add a single new `--accent` (cyan/teal) token to `:root` rather than hardcoding hex values inline. Keep the palette to: white, `--pale`, `--navy`, `--ink`, `--muted`, `--blue`, `--accent`, `--line`. No more.

## Direction
Bright-first, premium, clean, technical, calm, trustworthy, modern, business-focused.

**Avoid:** dark-first UI, gloomy atmosphere, cyberpunk/neon gradients, giant background blobs, generic SaaS templates, excessive glassmorphism, excessive rounded corners/shadows, visual clutter.

## Logo
Use the existing assets as-is: `public/images/logo.png`, `public/images/logo-home.png`. Never redraw, recolor, or approximate the logo. If a new logo file is supplied, drop it into `public/images/` and reference it directly — do not recreate it with CSS/SVG.

## Typography
`Inter Variable` (already loaded via `@fontsource-variable/inter` in `app/layout.tsx`). Do not add another font family. Reuse the existing scale in `globals.css` (`h1`–`h4`, body at 15px) rather than introducing ad hoc sizes — check for an existing rule before adding a new `font-size`.

## Photography
Business/technology visuals: product screenshots (e.g. `public/images/odoo-hero.webp`), work environments, architecture, devices. Avoid stock "people" imagery unless it's a real, sourced photo. Never fabricate client logos, testimonials, or headshots — if real assets aren't available, leave a clearly marked placeholder and say so rather than inventing one.

## Reference
Plementus may be used for design/interaction *ideas* only. Never copy its branding, copy, layout, or assets.

## Composability
Pairs with [[etriplesoft-motion]] (motion should stay inside this visual language) and [[visual-regression]] (use to verify brand consistency is actually rendered, not just coded).
