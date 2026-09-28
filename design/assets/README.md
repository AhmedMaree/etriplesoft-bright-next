# Reference artwork library

28 complete illustrations generated with the built-in image_gen tool. PNG files are original 1536 × 1024 masters; WebP siblings are optimized website versions. These are new illustrations inspired by the references, not screenshot crops or exact pixel reproductions. Generation briefs are in `generation-jobs.json`. Media Library attachment IDs are recorded in `wordpress-media.json`.

## Placement

- `about/brand-orbit`: About hero, with the dotted emblem and four connected ideas.
- `about/mena-earth`: About story.
- `odoo/erp-dashboard`: Homepage and Odoo heroes; dashboard values are illustrative.
- `ai/automation-network`: AI hero.
- `cloud/security-dashboard`: Cloud hero.
- `cloud/cloud-architecture`: Cloud capabilities.
- `marketing/marketing-dashboard`: Marketing hero.
- `web/responsive-devices`: Web hero.
- `mobile/business-apps`: Mobile hero.
- `insights/odoo-17`: Insights hero.
- `insights/odoo-devices`: Odoo capabilities.
- `insights/implementation-roadmap`: Odoo delivery process and implementation article.
- `insights/ai-intelligence`: AI capabilities.
- `insights/business-workspace`: Services introduction; an anonymous illustrative professional, not a staff portrait.
- `insights/digital-marketing`, `marketing/social-media`, `marketing/analytics-tablet`: Marketing service cards.
- `insights/kpi-laptop`, `insights/growth-chart`, `insights/erp-strategy`: Existing KPI, ROI and ERP-comparison articles.
- `web/corporate-concept`, `web/ecommerce-concept`, `web/landing-concept`: Web design gallery, labelled illustrative concepts.
- `regional/egypt-landmark`, `regional/uae-landmark`, `regional/saudi-landmark`: Regional presence cards.
- `shared/earth-horizon`: Editable closing CTA artwork.
- `shared/flow-background`: Shared, non-repeating upper-page atmosphere; CSS provides the continuous canvas below.

## Reference coverage

The 18 references cover About, AI, Cloud, Web, Mobile, Marketing, Odoo, Insights and homepage frames 1–10. Shared illustrations are reused where relevant. Homepage frames 2, 4, 5, 6, 9 and 10 primarily contain editable UI, vector icons, forms and branding; those remain native components. Partner logos and the company wordmark retain existing sources. Staff/client portraits are not regenerated as fictional identities.

## WordPress editing

Replace hero artwork in the hero block. For section illustrations and closing horizons, use “Replace section image.” Regional and service cards have individual image pickers. Article artwork uses Featured Image. Headings, descriptions, buttons and cards remain editable; no page is flattened into an image.

Import and placement scripts in `tools/` back up content before updates. Below-fold images are lazy-loaded with dimensions and WordPress responsive sizes. PNG masters are not sent to the frontend.
