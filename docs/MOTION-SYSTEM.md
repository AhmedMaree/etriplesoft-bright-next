# Motion System

Motion must clarify hierarchy, response, or storytelling. It must remain performant, accessible, readable, and fully functional when motion is disabled.

## Levels

1. **Micro interactions:** button, link, navigation-icon, hover, and focus feedback. Use CSS.
2. **Component interactions:** tabs, accordions, service and industry selectors, and testimonial transitions. Keep these lightweight.
3. **Section motion:** masked text reveals, image clips and reveals, subtle parallax, ambient movement, and coordinated section choreography. Use GSAP only when it provides meaningful value.
4. **Signature motion:** reserve GSAP and ScrollTrigger for very few major moments, such as a hero ecosystem, Odoo scroll story, or one other major visualization.

## Rules

- Do not use blanket fade-up animations.
- Do not use GSAP when CSS can do the job.
- Prefer `transform` and `opacity`; avoid expensive layout work and forced reflows.
- Respect `prefers-reduced-motion`; reduced motion must preserve access to all content and controls.
- Do not run multiple animation systems on the same component.
- Consolidate advanced custom animation around GSAP when it is justified.
- Do not automatically layer legacy Greenshift, Lottie, or Scrollsequence animation on top of new motion.
- Keep motion modular and page-scoped.
- Simplify or remove complex motion on mobile when it does not improve comprehension.
