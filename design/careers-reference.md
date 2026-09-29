# Careers reference implementation

The page follows the eight numbered references in `assets/images/careers/`, using the shared site header, footer, font, and header container width. The supplied navy/blue palette, section order, copy, photo compositions, benefit grid, process, openings, and locations guide this page. Its local CSS sizes and colors intentionally follow that reference rather than the older global design token document.

Value icons, benefit icons, hiring icons, the portrait, and location photos are extracted from the supplied numbered references. The hero, internship, workplace, and lounge panels now use newly generated wide photographic backgrounds with sharp subjects on the right and blurred negative space on the left. Asset paths and the imagegen prompts are recorded in `design/careers-image-generation.md`.

Text and actions remain native HTML. Application, job-detail, and internship links use the existing `https://etriple.odoo.com/jobs` recruitment portal; CV submission uses the existing public email address. Only one testimonial is supplied, so it is displayed as a static quote without nonfunctional carousel dots.

Desktop rows stack at tablet and phone widths. The hero photo moves below its copy on mobile, benefits and values use two columns, and job cards become a single column.
