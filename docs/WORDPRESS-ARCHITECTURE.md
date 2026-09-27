# WordPress Architecture

## Foundation

The site remains WordPress with the Blocksy parent theme, the `etriplesoft-blocksy` child theme, the `etriplesoft-blocks` plugin, and Gutenberg as its primary editor.

Never modify WordPress core or the Blocksy parent theme.

## Responsibilities

The child theme owns the visual system: design tokens, typography, spacing, responsive behavior, templates, header and footer presentation, section presentation, animation styling, and front-end animation.

The custom plugin owns site-specific functionality: custom Gutenberg blocks, structured business functionality, forms and enquiries, and features that must survive a theme change.

WordPress administrators must be able to edit headings, paragraphs, images, links, CTAs, services, testimonials, FAQs, articles, case studies, and relevant business information. Code owns advanced layouts, motion, tokens, responsiveness, and block behavior.

## Blocks and Content

Prefer core Gutenberg blocks for ordinary content. Use `ets/*` blocks only when a site-specific editing experience or behavior is genuinely needed. Do not duplicate editable content in PHP templates or JavaScript.

## Migration

Migrate incrementally. Preserve legacy CSS and JavaScript until the affected pages have been verified. Move presentation responsibility into the child theme without breaking existing block rendering, forms, SEO fallback, templates, or editor workflows.
