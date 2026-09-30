---
name: ETripleSoft
description: Digital transformation partner for Odoo ERP, cloud, AI, web and marketing across Egypt, UAE and Saudi Arabia.
colors:
  navy: "#07163e"
  ink: "#101b40"
  blue: "#4445ff"
  muted: "#4f5b73"
  pale: "#f4f8ff"
  hairline: "#e4ebf7"
  teal: "#0f9488"
  violet: "#7c5cff"
  amber: "#c9790a"
typography:
  display:
    fontFamily: "Inter Variable, Inter, Arial, sans-serif"
    fontSize: "clamp(32px, 1.35rem + 2.6vw, 60px)"
    fontWeight: 750
    lineHeight: 1.08
    letterSpacing: "-1.7px"
  headline:
    fontFamily: "Inter Variable, Inter, Arial, sans-serif"
    fontSize: "clamp(26px, 1.25rem + 1.25vw, 40px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.8px"
  title:
    fontFamily: "Inter Variable, Inter, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.3px"
  body:
    fontFamily: "Inter Variable, Inter, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter Variable, Inter, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 650
    letterSpacing: "1px"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
  pill: "99px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "14px"
  md: "20px"
  lg: "34px"
  xl: "60px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "#ffffff"
    rounded: "8px"
    padding: "13px 20px"
  button-secondary:
    backgroundColor: "#edf0ff"
    textColor: "{colors.navy}"
    rounded: "8px"
    padding: "13px 20px"
  button-gradient:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    rounded: "8px"
    padding: "13px 20px"
  icon-chip:
    backgroundColor: "#e8e4ff"
    textColor: "{colors.blue}"
    rounded: "11px"
    size: "48px"
  card:
    backgroundColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "22px 20px"
  input:
    backgroundColor: "#fcfdff"
    textColor: "{colors.navy}"
    rounded: "5px"
    padding: "11px 12px"
---

# Design System: ETripleSoft

## Overview

**Creative North Star: "The Chartered Advisor"**

ETripleSoft's site reads like a credentialed professional-services firm that happens to build software: composed, evidence-led, and never hypey. Every surface leans on verified authority — the Odoo Gold Partner and Microsoft Partner marks, a consistent navy-and-white palette, soft ambient shadows instead of loud effects — rather than on generic SaaS energy (bouncy gradients, giant blobs, neon glow, dark-mode-by-default). The system is bright-first: white and pale-blue surfaces carry the weight, with a single royal blue-violet accent doing almost all of the interactive signaling.

Density is calm, not sparse: generous section padding (34px+) and a 1240px container give copy and photography room, but the layout stays information-dense where it matters (checklists, bento industry grids, stat cards) rather than padding out empty space for effect. Photography is real product/business imagery (dashboards, offices, job sites) — never decorative stock people, never AI-generated filler.

Confirmed visual rejections: no dark-first UI, no cyberpunk/neon gradients, no oversized blurred blob shapes, no glassmorphism-as-decoration, no generic templated SaaS layout.

**Key Characteristics:**
- Bright, white/pale-blue-first surfaces with deep navy headings and a single blue-violet accent
- Soft, colored (never black) ambient shadows that deepen on hover — nothing sits flat, nothing floats aggressively
- A reused lavender-to-pale-blue gradient icon chip as the system's signature small component
- Real floating HTML badges/quote cards over photography, instead of baking text into images
- One deliberate dark surface (the "Our Impact" stats band) as the sole controlled exception to the bright-first rule

## Colors

A restrained, mostly-neutral palette (white, pale blue, navy, ink) with exactly one interactive accent; three additional named accents exist solely for feature-icon variety, never for text, links, or actions.

### Primary
- **Royal Blue-Violet** (`#4445ff`): The only color carrying interactive/emphasis meaning sitewide — links, active nav state, focus rings, emphasized heading spans (`<em>`), primary icon-chip tint, and the header CTA. The legacy `gradient` class now uses a solid brand accent. If something is clickable or emphasized, it is this color; nothing else is.

### Secondary — Signature Accents (feature iconography only)
- **Muted Teal** (`#0f9488`): "Growth" feature-card icon; reserved for supporting feature iconography.
- **Royal Violet** (`#7c5cff`): "Regional/MENA" feature-card icon.
- **Warm Amber** (`#c9790a`): The single warm outlier, reserved for one feature-card icon ("People / Solutions, Not Features") for rhythm — never a second CTA color.

### Neutral
- **Deep Navy** (`#07163e`): All heading color (h1–h4), and the background for the site's one intentional dark band (Stats/"Our Impact").
- **Ink** (`#101b40`): Default body text color.
- **Muted Slate** (`#4f5b73`): Secondary/supporting paragraph text — every `<p>` defaults here, not to ink.
- **Pale Sky** (`#f4f8ff`): Light section backgrounds, hover pills on nav, icon-chip fallback tint.
- **Hairline** (`#e4ebf7`): The one border color used sitewide — card borders, dropdown borders, section dividers.
- **White** (`#ffffff`): Primary card/surface background and the default page background.

### Named Rules
**The Single Accent Rule.** Royal Blue-Violet is the only color that means "interactive" or "emphasized." The three signature accents exist purely to differentiate icons within a small card set (e.g. the four ValueProps cards) and must never appear on a link, button, or active state.

**The Colored Shadow Rule.** No shadow in the system is pure black. Every `box-shadow` tints from navy or blue (`#0b224a33`, `#13234718`, `#4445ff2e`, etc.), so even resting elevation reads as part of the palette rather than a generic browser default.

## Typography

**Display/Body Font:** Inter Variable (fallback: Inter, Arial, sans-serif) — self-hosted via `@fontsource-variable/inter`.

**Character:** A single functional grotesque carries every role; hierarchy comes entirely from size, weight, and letter-spacing steps, not from a display/body face pairing.

### Hierarchy
- **Display** (750, `clamp(32px, 1.35rem + 2.6vw, 60px)`, 1.12): Hero H1s only. Relative letter-spacing (-0.035em). An `<em>` span within it switches to Royal Blue-Violet for the emphasized phrase.
- **Headline** (700, 26px–40px, 1.2): Section H2 titles (`SectionHeading`), letter-spacing -0.025em.
- **Title** (650–700, 16px–21px, 1.3): Card and component H3s (service cards, stat cards, industry-tile labels).
- **Body** (400, 16px base, 1.65): Paragraph copy defaults to Muted Slate; description text under section headings caps at a max-width (660–780px) rather than a `ch` unit.
- **Label** (650, 12px, uppercase, 0.8–2px tracking): The "eyebrow" kicker — Royal Blue-Violet by default, Muted Slate in its `.muted` variant. Precedes nearly every section heading and several card groups; it is a load-bearing wayfinding device across the whole site, not a one-off flourish.

### Named Rules
**The Uppercase Eyebrow Rule.** Every major section opens with a small, uppercase, letter-spaced label before its heading. It is the site's primary rhythm device for scanning a long page quickly — remove it from one section and the page reads as inconsistent, not minimal.

## Layout

Container: `min(1240px, calc(100% - 2 * var(--page-gutter)))`, centered. Gutters interpolate from 18px on phones to 48px on wide screens.

Section rhythm: fluid 40–72px vertical padding as the default `.section` unit. Sections alternate a plain white background and a `.tinted` soft blue-white gradient (`linear-gradient(115deg, #f5faff, #fafbff 60%, #f4f9ff)`) for visual separation — two tinted sections never sit back-to-back, or the seam disappears.

Two-column split layouts (`.split`, 1fr/1fr, 42–76px gap) collapse to a single column at ≤760px. Card grids (`.cols-2` through `.cols-7`) step down to 2 columns on small screens. Asymmetric "bento" grids (e.g. the homepage industries section) use explicit spanning tiles rather than uniform cards, sized so the grid always resolves without gaps at each breakpoint.

Breakpoints in active use: 1200px (density/nav tightening), 1000px (header collapses toward the hamburger, tablet grid steps), 760px (single-column stack, mobile nav takes over).

## Elevation & Depth

**Ambient Lift.** The system is not flat and not neumorphic — every interactive surface (button, card, dropdown, floating badge) rests under a soft, colored ambient shadow and lifts further on hover/focus (`translateY(-2px)` to `translateY(-3px)`, paired with a deeper, wider-blurred shadow). Nothing sits perfectly flush with the page, and nothing casts a hard, sharp-edged shadow.

### Shadow Vocabulary
- **Resting card** (`box-shadow: 0 3px 10px #1a2a4b02`): The barely-there base lift for static content cards (service cards) before hover.
- **Button rest → hover** (`0 3px 7px #071c4410` → `0 6px 16px #182c5125`): The default button elevation step.
- **Floating panel** (`0 16px 34px #13234718`, or `0 14px 26px -10px #0b224a33`): Dropdowns, search panel, and floating photo badges — deeper blur for elements that visually detach from the page.
- **Hero-scale lift** (`0 30px 50px -24px #0b224a3d`): Reserved for the largest feature photography (e.g. the homepage Odoo dashboard visual).

### Named Rules
**The Hover-Deepens Rule.** Elevation is a state response, not a static decoration: every shadowed element's blur and offset increase on hover/focus rather than staying constant, reinforcing that the surface is interactive.

## Shapes

A small-to-medium radius family, 6–16px, plus two hard exceptions: `50%` circles (icon badges, avatar-style chips) and `99px` full pills (status badges, tags). Nothing in the system uses a sharp 0px corner except deliberate full-bleed photography edges.

Buttons use a tighter 6px radius than cards (10–16px) — a deliberate distinction between "this is clickable" (crisper) and "this is a container" (softer). Borders, where used, are always 1px and always the single Hairline color; there is no secondary border color or dashed/double-border treatment anywhere in the system.

## Components

### Buttons
- **Shape:** 6px radius (`{rounded.sm}`), 46px minimum height, 14px/21px padding.
- **Primary:** Deep navy gradient (`linear-gradient(115deg, #071d44, #04152f)`), white text, 1px `#102344` border, Button-rest shadow → hover lift.
- **Secondary:** Flat pale-blue fill (`#eaf0ff`), navy text, no shadow — the quiet alternative action beside a primary button.
- **White:** White fill with a pale-blue border, for use over tinted or photographic backgrounds.
- **Gradient:** Blue-to-teal gradient (`#4445ff → #35b8e0`) — reserved for exactly one highest-priority CTA per surface (currently the header's "Book a Demo").
- Every button variant carries a trailing arrow icon; it is the system's consistent "this moves you forward" affordance.

### Icon Chips (signature component)
- 48×48px rounded-square (11px radius), lavender-to-pale-blue gradient background (`#e8e4ff → #edf2ff`), Royal Blue-Violet icon glyph. The single most-reused decorative unit in the system (service cards, checklists, feature grids).
- A smaller 30px flat-pale variant (no gradient) is used inline within dense checklists.

### Cards / Containers
- **Corner Style:** 10–14px radius.
- **Background:** White, always with a 1px Hairline border on white-background sections (the border is what separates the card from the page, not a shadow).
- **Shadow Strategy:** Near-invisible at rest (see Elevation & Depth); hover lifts `translateY(-3px)` and the border brightens toward a light blue-violet tint (`#c5c8fb`).
- **Internal Padding:** 20–26px.

### Inputs / Fields
- **Style:** 5px radius, 1px Hairline-family border (`#dbe3f2`), off-white fill (`#fcfdff`), 12px text, navy value color.
- **Focus:** A hard 2px solid blue-violet outline (`#9699ff`) with 1px offset — no glow, no shadow; focus is a ring, not a lift.

### Navigation
- **Header links:** Pill hover/active state — 7px radius, Pale Sky background, Royal Blue-Violet text on hover or active route, plus a 2px underline strip on the active route only.
- **Dropdown panels:** White, 10px radius, Hairline border, Floating-panel shadow tier, Pale Sky row hover.
- **Mobile (≤760px):** Collapses to a full-width slide-down panel beneath a fixed 65px header; hamburger toggle replaces the inline nav.

### Floating Badges (signature component)
- Small white rounded-rect cards (12px radius, Floating-panel shadow tier) that overlap the edge of a photograph — partner logos, hand-drawn annotation notes, quote callouts. Always real DOM/text, never baked into the image asset, so they stay sharp and editable at any resolution.

## Do's and Don'ts

### Do:
- **Do** keep Royal Blue-Violet (`#4445ff`) as the only color that signals "interactive" or "emphasized" anywhere in the product.
- **Do** tint every shadow from navy or blue — never introduce a pure-black shadow or border (The Colored Shadow Rule).
- **Do** pair photography with real floating HTML badges/quote cards rather than baking text into an image asset.
- **Do** keep card/button radius inside the 6–16px family; reserve `50%`/`99px` strictly for icon circles and pill badges.
- **Do** lift on hover (`translateY(-2px)` to `-3px)`) for buttons and cards; reserve scale transforms for photographic tiles specifically.
- **Do** alternate `.tinted` and white section backgrounds — never place two tinted sections back-to-back.

### Don't:
- **Don't** introduce a second dark-first or neon/cyberpunk section — the Stats/"Our Impact" band is the one deliberate dark exception, and it still tints navy, not neon.
- **Don't** add a fourth signature accent color without a documented icon-only role; the three extensions (Muted Teal, Royal Violet, Warm Amber) are deliberately capped.
- **Don't** redraw, recolor, or approximate the logo mark — it is a fixed brand asset (see `assets/logo.png`), not a themeable token.
- **Don't** invent new statistics, testimonials, or client names to fill a card or stat band; see PRODUCT.md's Evidence on Hand for what is confirmed versus placeholder.

## Mobile Apps page surface: `/mobile` (also `/mobile-apps-services` aliases)

This route follows the user-approved `assets/images/services/mobile/total-mobile-page.png` and supporting `01.png`â€“`08.png` references. The decisions below are intentionally local to the page module. The global palette, header, footer, and sitewide components above remain authoritative elsewhere.

### Colors

The page keeps bright white and pale-blue surfaces, with a page-local sky-blue/cyan accent pair around navy copy. In `MobileReferencePage.module.css`, the scoped tokens are Mobile Navy (`#091b4d`), Mobile Sky Blue (`#087cf4`), Mobile Cyan (`#03b8d9`), Mobile Muted Slate (`#526486`), Mobile Hairline (`#d9ebfb`), and Mobile Pale Sky (`#eef8ff`). Use the local blue for emphasized words, labels, focus rings, and CTA; cyan supports section markers and timeline details. This is a documented route exception to the global Royal Blue-Violet rule, not a brand-token replacement.

### Typography

Inter Variable remains in use. The page gives its H1 a heavier, larger display treatment (800 weight, 48â€“82px), uses 750 weight for section headings (26â€“42px), and 700 weight for compact card titles (12â€“17px). Body text remains 15px/1.5, with uppercase, widely tracked 11â€“12px labels.

### Layout

Keep this section sequence: paired-phone hero; iOS/Android platforms; six service links; four-step delivery timeline; four-step process; benefits; testimonial and FAQ; final CTA. The desktop hero pairs copy with the mobile phone artwork in two columns. Compact cards organize the information between pale blue-white and white areas. At 1080px, tighten the hero and card density; at 760px, stack the hero, platform and proof areas and reduce service, process, benefits and timeline grids to two columns; at 420px, collapse service cards to one column and reduce platform marks. The page container narrows to 36px total viewport gutter on mobile. Keep the shared site header and footer intact.

**The Mobile Page Sequence Rule.** Preserve the reference-led section order, responsive stacking, and paired phone artwork as one hero visual.

### Elevation & Depth

Use quiet blue-tinted shadows under white card surfaces. Service links lift 2px and strengthen their border/shadow on hover; the primary CTA deepens its blue shadow. Pale gradient fields and a small dotted texture remain background accents.

### Shapes

Actions are pill-shaped (999px). Service and process cards use 14px corners; platform and proof cards use 15â€“16px corners; the final CTA panel uses 18px corners. Borders use the route's pale-blue hairline.

### Components

- **Mobile action:** 44px high, sky-blue gradient, white label, and soft blue shadow. The secondary action is translucent white with navy text. Both have a visible focus outline.
- **Service link card:** White, 1px pale-blue border, three-part icon/copy/arrow arrangement, and compact padding. The supplied service icon sits in a 52px pale tile; the circular arrow signals navigation.
- **Platform card:** Paired iOS/Android cards with the supplied marks and concise supporting copy.
- **Process and benefit cards:** Compact informational cards with the same border/surface language; blue/cyan identify icons and timeline markers.
- **Final CTA panel:** A wide pale-blue gradient with a fine blue border, copy beside actions on desktop, and vertical stacking on mobile.
