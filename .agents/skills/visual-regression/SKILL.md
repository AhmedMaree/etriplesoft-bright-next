---
name: visual-regression
description: Verify rendered UI against the approved reference design and across breakpoints before calling any visual work done. Use after any UI/CSS change and before reporting a page or section as complete.
---

# Visual Regression

Code compiling or a component "looking right" in source is not completion. A visual task is only done after it has been rendered and inspected.

## Process, every time
1. Ensure the dev server is running (`npm run dev`, serves on `0.0.0.0:3000`; check with `netstat`/process list before starting a second instance).
2. Navigate to the affected page with the Playwright MCP browser tools.
3. Capture screenshots at the breakpoints required by [[responsive-ui]] (1440, 1280, 1024, 768, 430, 390, 375, 360) — at minimum desktop + tablet + mobile for a quick pass, full set before marking a page done.
4. Read the screenshot back (image tool) and actually look at it.
5. Compare against the approved reference design (e.g. files under `pages/*.png`, or whatever the user supplied).
6. Identify concrete deviations (see checklist below).
7. Fix them in code.
8. Re-screenshot and re-compare. Repeat until it matches or the user accepts documented deltas.

## Compare against reference
- Container width / max-width (`--container: 1240px`)
- Section height and vertical spacing/rhythm
- Typography (size, weight, line-height, color)
- Alignment (grid columns, text alignment)
- Button dimensions and padding
- Image crop / `object-position`
- Visual hierarchy (what draws the eye first)
- Header and footer
- Whitespace (margins feel cramped vs. matching)
- Borders and shadows (should be restrained per [[etriplesoft-brand]])
- Responsive behavior at each breakpoint

## Rules
- Never declare a visual task "matches the design" from code review alone — always attach or describe an actual screenshot comparison.
- If a reference image isn't available for a page, say so explicitly rather than asserting a match.
- Check the browser console log captured alongside each navigation for new errors/warnings.

## Composability
The verification layer for [[etriplesoft-brand]], [[etriplesoft-motion]], [[responsive-ui]], and [[accessibility]] (contrast/focus can be visually spot-checked here too). [[performance]] has its own separate measurement process — don't conflate a visual pass with a performance pass.
