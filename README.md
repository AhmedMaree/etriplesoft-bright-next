# ETripleSoft website

A responsive Next.js App Router implementation of the 11 supplied page references. Original sheets remain in `assets/` and references remain in `pages/`; individually extracted images are in `public/images/`.

## Run

```sh
npm install
npm run dev
```

Visit http://localhost:3000. Production: `npm run build`, then `npm start`. Type checking: `npm run check`.

## Pages

Home `/`, company `/about`, Odoo `/odoo`, cloud `/cloud`, AI `/ai`, web `/web`, marketing `/digital-marketing`, portfolio `/portfolio` (also `/industries`, matching the supplied filename), contact `/contact`, careers `/careers`, support `/support-ticket`. Additional linked pages include project details, articles, FAQs, privacy and terms.

## Inquiry delivery

Contact and support forms validate input on the client and server. During local development, submissions are saved to ignored `.local-inquiries/` and the visitor is explicitly told they have not been sent to the company. In production, submission fails clearly until delivery is configured.

Set `INQUIRY_WEBHOOK_URL` to a trusted HTTPS service and optionally `INQUIRY_WEBHOOK_TOKEN`. The server POSTs multipart form data containing an `inquiry` JSON field and an optional `attachment`. The webhook must securely persist and deliver inquiries, enforce abuse prevention and retention policies, and return a success status only after accepting the message. No secrets are exposed to the browser.

## Reference fidelity

The design uses white and pale blue surfaces, navy headings, indigo accents, proportional spacing, supplied dashboard photographs, partner branding, and reusable responsive components. The compressed screenshots are reconstructed as HTML, not used as page backgrounds. Image-sheet crops can be regenerated using `node scripts/extract-assets.mjs`.

Images showing women in the supplied home reference were replaced with the supplied empty education/healthcare scenes or neutral testimonial icons. No external stock photographs are used. Icons are consistent vector equivalents; several small marks in the compressed references cannot be recovered as original vectors. Some logos are extracted raster crops and retain the quality limitations of the sources.

The reference pages contain different branding variants, conflicting company statistics, office locations, sample contact details, job openings and customer claims. These are reproduced as design content and should be verified by the company before publication. Career inquiries use email; the UI does not claim an application was sent. External social profile URLs were not supplied, so the footer exposes real contact channels instead of invented profiles.
