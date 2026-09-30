# Responsive brand foundation — 30 September 2026

Base commit: `113f53432d92c4ac2d0ab4a2a5a09205cd85c5d7`.

## Changes

- Scoped English type scale: self-hosted Inter, fluid headings, 16px body copy, 1.65 line height, shared gutters and section spacing.
- Consistent navy primary, pale secondary, white and blue-violet action styles; 48px controls and visible focus.
- Larger service-card copy and single-column phone layouts for marketing, web and AI; readable insights filters and newsletter controls.
- Responsive contact method grid instead of an inline three-column rule.
- Homepage partner marks share a row on phones; desktop header fits without wrapping its consultation label.
- Careers hero copy separates from its image at tablet widths. The existing Odoo jobs iframe remains; its direct link opens a new tab and a fallback explanation is visible.
- Current Next.js design specification replaces the stale WordPress/Manrope document.

## Validation

| Check | Result |
| --- | --- |
| Production build | PASS |
| TypeScript (`check`) | PASS |
| Links | PASS — 52 routes, no errors or warnings |
| Redirects | PASS — 627 tests |
| SEO | No errors; existing orphan warnings for retail, healthcare and logistics |
| Production content | No errors; existing benign review matches for implementation staging and the chart-of-accounts preview |
| Responsive | PASS — 52 pages × 7 widths = 364 loads, zero errors or warnings |
| Diff whitespace | PASS |

Widths: 320, 375, 768, 1024, 1280, 1440 and 1920px. The responsive command also checks navigation interaction at each width. Representative homepage, service, insights, contact, Odoo and careers screenshots were visually reviewed.

The environment used Chromium 134 through `PLAYWRIGHT_CHROMIUM_EXECUTABLE`; this verifies Chromium layouts, not every browser engine. The environment's newer browser archive downloads were unavailable.

No real contact, newsletter, job or appointment submissions were sent. Production form configuration, factual marketing claims, employee permissions and comprehensive accessibility/performance audits remain separate completion work.
