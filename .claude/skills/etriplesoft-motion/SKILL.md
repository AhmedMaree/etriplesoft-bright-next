---
name: etriplesoft-motion
description: Define and apply this site's animation language (hero entrance, marquee, scroll-driven product story, transitions). Use when adding or reviewing any animation, transition, or scroll interaction.
---

# ETripleSoft Motion

Motion is only added when it improves understanding or perceived quality — never decoration for its own sake. If a section's meaning is already clear without the animation, skip it.

## Where motion is expected
- **Hero (`Hero` in `src/components/site.tsx`):** subtle technical/network background movement; staged entrance for eyebrow → headline → description → CTA → trust badges; product visual enters with controlled depth (no bounce).
- **Trust strip (`Partners` component):** slow, continuous horizontal logo marquee; pause on hover/focus.
- **Odoo product story (home "Run Your Entire Business" section):** if made sticky/scroll-driven, transitions between product views must be scroll-progress-driven, not scroll-jacked. Provide a tap/swipe equivalent on mobile — see [[responsive-ui]].
- **Services grid:** master/detail transitions only where an explicit active state exists; do not apply generic hover-lift to every card.
- **Process (`Process` component):** connecting line draws progressively; steps activate in sequence as they enter view.
- **Industries strip:** selecting an industry transitions the associated visual/content.
- **Regional presence:** restrained map-connection movement only.

## Global rules
1. Respect `prefers-reduced-motion: reduce` — disable or drastically simplify all non-essential motion behind this query.
2. Animate only `transform` and `opacity` where possible; avoid animating `width`, `height`, `top/left`, or box-shadow continuously.
3. No animation may run indefinitely at high cost (e.g. continuous large-area repaint) — marquees and loops must be cheap (transform-based).
4. Animation must never block interaction (no fixed-duration gates before a button becomes clickable).
5. Animation must never be the only carrier of information — the same content must be available statically/instantly (screen readers, reduced-motion users, no-JS fallback where feasible).
6. Keep easing/duration consistent across the site — reuse one entrance timing and one hover timing rather than inventing new curves per section.

## Composability
Built on top of [[etriplesoft-brand]] (motion never breaks the calm/premium tone — no bouncing, no neon glow). Must be re-verified per breakpoint via [[responsive-ui]] and checked in [[visual-regression]] passes. Respect [[accessibility]]'s `prefers-reduced-motion` requirement and [[performance]]'s bundle/CPU budget (prefer CSS animation over animation libraries unless truly needed).
