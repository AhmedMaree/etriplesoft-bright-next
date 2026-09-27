# Design System

## Direction

ETripleSoft is premium enterprise technology: sophisticated, modern, technical, confident, editorial, high contrast, and spacious. The experience must feel purpose-built, not like a generic WordPress theme or generic digital agency.

Use one continuous dark canvas. Create hierarchy with subtle surface shifts, hairline borders, purposeful lighting, and restrained atmospheric gradients rather than alternating white and dark blocks. Avoid generic identical cards, uniformly rounded components, glass effects, and excessive glow or shadow.

## Foundation Tokens

Implement these as child-theme custom properties when implementation begins. Do not duplicate values across page stylesheets or blocks.

```css
--color-canvas: #05070B;
--color-navy: #071019;
--color-surface: #0B1520;
--color-surface-interactive: #101E2C;
--color-text: #F5F8FC;
--color-text-secondary: #A7B2C2;
--color-text-muted: #6F7C8E;
--color-blue: #258CFF;
--color-cyan: #20C7F6;
--color-green: #2EE6A6;
--gradient-brand: linear-gradient(120deg, #258CFF 0%, #20C7F6 48%, #2EE6A6 100%);
```

Do not introduce unrelated purple, pink, or orange without approval. Gradients are reserved for important text accents, states, CTA detail, diagrams, borders, ambient lighting, and signature moments; they are not a default fill for components.

## Typography

### Font strategy

The child theme already self-hosts a Manrope variable font (`assets/fonts/manrope.woff2`) as `ETS Manrope`. Keep it as the implementation font: it is appropriate to the existing brand, supports a premium technical tone, and avoids a paid or third-party font dependency.

Use a single family with differentiated scale, weight, tracking, and measure rather than adding a second display font. Display type is Manrope at weights 600–700; body type is Manrope at weights 400–500.

```css
--font-sans: "ETS Manrope", Manrope, Inter, "Segoe UI", Arial, sans-serif;
```

Use `font-display: swap`, subset only the required Latin and Arabic glyphs if the supplied font is replaced, and do not load a font per component.

### Type scale

Values are `desktop / tablet / mobile`. Tablet applies at `1100px` and below; mobile applies at `540px` and below. Interpolate only with deliberate `clamp()` values that retain these endpoints.

| Token | Size | Line height | Weight | Letter spacing | Intended use |
| --- | --- | --- | --- | --- | --- |
| Display XL | `80px / 64px / 46px` | `0.98` | 650–700 | `-0.055em` | One flagship hero or cinematic moment per page |
| H1 | `64px / 52px / 40px` | `1.02` | 650–700 | `-0.05em` | Page title or primary section statement |
| H2 | `48px / 40px / 32px` | `1.08` | 600–700 | `-0.042em` | Major section heading |
| H3 | `32px / 28px / 24px` | `1.18` | 600–650 | `-0.028em` | Component or subsection heading |
| H4 | `22px / 21px / 20px` | `1.28` | 600–650 | `-0.018em` | Small component heading |
| Body large | `20px / 19px / 18px` | `1.55` | 400–450 | `0` | Lead and supporting section copy |
| Body | `16px / 16px / 16px` | `1.65` | 400–450 | `0` | Standard copy |
| Small | `14px / 14px / 14px` | `1.55` | 450–500 | `0` | Metadata and compact supporting copy |
| Label | `12px / 12px / 12px` | `1.2` | 650–700 | `0.10em`, uppercase | Eyebrows, controls, status labels |

Use sentence case for headings and UI unless an established label requires uppercase. Avoid all-caps headings. Keep body text to `65ch` maximum; lead copy to `48ch`; standard heading lines to `18–26ch`; and Display XL to `12–18ch`. Break a heading intentionally in content only when its meaning remains clear at every viewport.

## Spacing

Use this scale. Values not on the scale require a documented component-specific reason.

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 40px;
--space-8: 48px;
--space-9: 64px;
--space-10: 80px;
--space-11: 112px;
--space-12: 144px;
--space-13: 192px;
```

- Use `--space-2` to `--space-4` for internal icon, label, and compact-control gaps.
- Use `--space-5` for standard component padding; use `--space-6` for substantial panels; use `--space-7` only for feature surfaces.
- Use section padding of `144px` desktop, `112px` tablet, and `80px` mobile. Dense sections may use `80px / 64px / 48px`.
- Use cinematic narrative spacing of `192px` desktop, `144px` tablet, and `112px` mobile only for the hero, Odoo flagship story, and final CTA.
- Use a header block size of `92px` desktop, `80px` tablet, and `72px` mobile. Header controls align to that rhythm; they do not introduce arbitrary vertical padding.

## Containers

Use named containers rather than one-off widths. Full-bleed elements may escape the content container but must retain safe gutters for readable content.

```css
--container-text: 680px;
--container-narrow: 880px;
--container-standard: 1120px;
--container-wide: 1320px;
--container-full: 100%;
--gutter-desktop: 56px;
--gutter-tablet: 40px;
--gutter-mobile: 20px;
```

The `1320px` wide container preserves the child theme’s current content-width convention. Use text and narrow containers for reading and focused statements; standard for ordinary section layout; wide for hero, data visualization, and editorial media. Do not use `100vw` for content, because it can cause horizontal overflow.

## Radius, Borders, and Dividers

```css
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-xl: 28px;
--radius-pill: 999px;
--border-subtle: 1px solid rgba(167, 178, 194, 0.16);
--border-interactive: 1px solid rgba(37, 140, 255, 0.48);
--border-highlight: 1px solid rgba(32, 199, 246, 0.68);
--divider: 1px solid rgba(167, 178, 194, 0.12);
```

Use `sm` for inputs and compact controls, `md` for ordinary panels, and `lg` for feature surfaces. `xl` is exceptional and only for a large editorial surface where it supports the composition. Use pills only for buttons, tags, and compact status elements.

Borders must be quiet on dark surfaces. Use subtle borders by default, interactive borders for hover/focus or selectable controls, and highlighted borders for a single active or important item. Gradient borders are signature details for a CTA, key diagram, or isolated feature panel; never use them around every card. Dividers separate adjacent content quietly and should not compete with headings.

## Shadows and Glow

```css
--shadow-elevation: 0 18px 48px rgba(0, 0, 0, 0.26);
--glow-blue: 0 0 64px rgba(37, 140, 255, 0.18);
--glow-cyan: 0 0 64px rgba(32, 199, 246, 0.14);
--glow-green: 0 0 64px rgba(46, 230, 166, 0.12);
--glow-signature: 0 0 96px rgba(37, 140, 255, 0.16), 0 0 128px rgba(46, 230, 166, 0.08);
```

Use elevation for a floating menu, modal, or media panel. Use one ambient color to support a nearby signature visual. Use the mixed signature glow once in a major section or final CTA. Do not give ordinary cards glowing borders or persistent shadows.

## Gradients

```css
--gradient-brand: linear-gradient(120deg, #258CFF 0%, #20C7F6 48%, #2EE6A6 100%);
--gradient-hero-ambient: radial-gradient(70% 58% at 82% 18%, rgba(37, 140, 255, 0.20) 0%, rgba(32, 199, 246, 0.08) 38%, transparent 72%);
--gradient-cyan-ambient: radial-gradient(52% 48% at 70% 36%, rgba(32, 199, 246, 0.14) 0%, transparent 72%);
--gradient-green-ambient: radial-gradient(48% 44% at 22% 74%, rgba(46, 230, 166, 0.10) 0%, transparent 74%);
--gradient-surface: linear-gradient(145deg, rgba(16, 30, 44, 0.92) 0%, rgba(11, 21, 32, 0.98) 68%);
--gradient-cta: linear-gradient(120deg, #0E63CB 0%, #167FDA 44%, #159FB7 100%);
```

Ambient gradients belong behind content and must not reduce text contrast. `--gradient-brand` is for text accents, diagram paths, and isolated detail. `--gradient-cta` is for the primary CTA only. Do not use a gradient background simply to make a standard card look more decorative.

## Buttons and Links

All controls must remain semantic links or buttons, have a visible focus state, and meet a minimum `44px` touch target. Use `160ms–220ms` CSS transitions for color, border, shadow, and transform; do not use JavaScript or GSAP for these interactions.

| Control | Rules |
| --- | --- |
| Primary button | `48px` high desktop and tablet, `48px` mobile; `24px` horizontal padding (`20px` mobile); `--radius-pill`; label weight 650, `14px`, `0.01em` tracking. Use `--gradient-cta` or solid `--color-blue`; no permanent glow. Hover brightens slightly and lifts at most `1px`; focus uses a `2px` cyan outline with `3px` offset. |
| Secondary button | `48px` high; same padding and label treatment; `--radius-pill`; transparent or navy fill with `--border-interactive`. Hover shifts to `--color-surface-interactive` and strengthens the border; focus matches primary. |
| Text / arrow link | Natural text height with a minimum `44px` interactive area where used alone; weight 600; underline or a persistent arrow provides affordance. Hover shifts to cyan and moves the arrow `2px`; focus matches primary. Do not rely on color alone. |
| Icon button | `44px × 44px`; `--radius-sm`; icon `20px`; subtle border or surface. Hover uses interactive surface and border; focus matches primary. Use a visible label or accessible name. |

On mobile, controls may become full-width only when they form a clear action group; otherwise preserve content-led width. Never make a button smaller than its stated height to fit a dense layout.

## Surfaces and Cards

| Surface | Token / treatment | Use |
| --- | --- | --- |
| Canvas | `--color-canvas` | Default page background |
| Secondary section | `--color-navy` with optional ambient gradient | Quiet narrative transition |
| Elevated panel | `--gradient-surface` with `--border-subtle` | Focused content or media grouping |
| Interactive panel | `--color-surface-interactive` with interactive border on state | Selector, tab, or actionable item |
| Hover surface | A restrained shift toward `--color-surface-interactive` | Hover/focus feedback only |

Cards are appropriate for selectable services, compact proof points, article summaries, and bounded interactive units. A standard card uses `--radius-md`, `--border-subtle`, `--space-5` padding, and no permanent shadow. An interactive card adds state-specific border/surface changes. An editorial media card may use `--radius-lg`, clipped media, and restrained elevation where media needs separation.

Do not default to card grids. Do not put every piece of content in a bordered rounded rectangle. Use open layouts, dividers, lists, image-led compositions, and typography when they better communicate the content.

## Iconography

Use a consistent outline icon style with rounded terminals and a `1.75px–2px` stroke. Use `16px` icons inside compact controls, `20px` for buttons and navigation, `24px` for standard feature labels, and `32px–40px` only for a section-level visual. Default icons use current text color; reserve blue, cyan, or green for an intentional active, category, or diagram state. Do not mix random icon libraries inside a section, and do not use decorative icons in place of meaningful labels.

## Imagery and Product Visuals

Use real company, product, and project imagery when it is available. Otherwise use abstract custom diagrams, software UI, or product-style visuals. Avoid generic stock imagery. Do not use images of women in generated or selected visual imagery. Never present fabricated screenshots as real customer work.

Preferred ratios: editorial landscape `16:10`, project or product feature `4:3`, cinematic full-width `21:9`, and compact UI detail `3:2`. Crop deliberately; do not stretch imagery. Frame screenshots in a restrained browser or product frame with `--radius-md` or `--radius-lg`, a subtle border, and limited elevation. A software UI must be legible enough to read as an interface but does not need fabricated data.

Full-bleed media is reserved for hero, a major case-study moment, regional visualization, or final CTA. Use contained media for product details, services, and article cards. Blend imagery into dark sections with an edge fade, tonal color grading, or an ambient backdrop; do not use arbitrary dark overlays that obscure useful visual detail.

## Section Rhythm

- **Dense:** `80px / 64px / 48px` vertical padding. Use for trust, compact results, insights, FAQ, and footer.
- **Standard:** `144px / 112px / 80px`. Use for services, industries, case studies, testimonials, and most narrative sections.
- **Cinematic:** `192px / 144px / 112px`. Use for hero, Odoo flagship story, and final CTA only.

Place dense and standard sections in sequence when a reader needs a brief pause after a major narrative section. Use surface changes or ambient lighting to mark a transition, not a high-contrast color inversion. Do not place two cinematic sections back-to-back without an intentional quiet interval.

## Responsive Philosophy

Use the child theme’s existing small breakpoint set: desktop above `1100px`, tablet from `1100px` through `541px`, and mobile at `540px` and below. A component may use `900px` when a navigation or multi-column composition demonstrably needs the existing intermediate collapse point. Do not add further breakpoints by default.

- **Desktop:** Use asymmetry, layered editorial media, multi-column composition, and generous negative space where it improves hierarchy.
- **Tablet:** Preserve content order and hierarchy; reduce column count, simplify overlaps, and keep controls easy to target.
- **Mobile:** Recompose intentionally to a single readable flow; remove nonessential decoration, simplify diagrams and motion, keep media focal points, and retain all content and actions.

## Accessibility Visual Rules

Use at least WCAG AA contrast: `4.5:1` for normal text, `3:1` for large text and meaningful UI boundaries. Main text should use `--color-text`; muted text is for nonessential supporting information only and must be tested against its actual surface.

Every keyboard-focusable element needs a visible `2px` cyan focus outline with at least `3px` offset, without relying only on a color or shadow change. Text links must be distinguishable from surrounding text by underlining, an arrow, or another persistent affordance. Selected, error, success, and disabled states require a label, icon, shape, or other non-color cue. With reduced motion enabled, reveal content immediately and preserve clear static active states and controls.

## Do / Don't

**Do**

- Use large, confident type with controlled line lengths.
- Use subtle atmosphere behind meaningful content.
- Build purposeful diagrams and product-style visuals.
- Use asymmetrical layouts where they improve editorial hierarchy.
- Give content strong whitespace and a clear reading order.

**Don't**

- Repeat generic three-card grids as a default section pattern.
- Add random purple gradients or unrelated accent colors.
- Apply glassmorphism to every surface.
- Put glowing borders around ordinary cards.
- Use tiny, low-contrast text for important information.
- Fill sections with excessive decorative blobs.
