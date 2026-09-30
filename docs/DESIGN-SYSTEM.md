# Current ETripleSoft design system

The canonical visual specification for the Next.js website is [DESIGN.md](../DESIGN.md). The previous document described a WordPress child theme and a dark Manrope design; it is superseded for this repository.

## Implementation

- `app/globals.css` provides the existing component and layout styles.
- `app/brand-foundation.css` supplies the English visual contract, scoped to `.ets-english` in `app/(en)/layout.tsx`. Arabic keeps its own font and direction.
- English uses self-hosted Inter Variable; headings, prose and controls share one family.
- Navy `#07163e`, ink `#101b40`, accent `#4445ff`, supporting text `#4f5b73`, pale surface `#f4f8ff`, border `#e4ebf7`.
- Body: 16px / 1.65. Supporting copy: 14px. Labels: 12px. Headings scale between phone and desktop sizes.
- Containers use a shared 18–48px fluid gutter and a 1240px maximum width.
- Major section spacing scales from 40–72px; page-specific compact strips can remain smaller.
- Buttons share 48px minimum height, 8px corners, 14px text and semantic primary/secondary/white/accent variants.
- Page artwork remains in CSS modules. Avoid selecting generated class-name fragments from global styles.
- Use visible focus, usable touch targets and reduced-motion behavior. Do not hide layout overflow to disguise defects.

## Verification

Run a production build, `check-site` and `check-responsive` against a running production server. Required review widths: 320, 375, 768, 1024 and 1440px.

The responsive checker accepts `PLAYWRIGHT_CHROMIUM_EXECUTABLE` when the CI environment provides a compatible Chromium binary; otherwise it uses Playwright's installed browser.
