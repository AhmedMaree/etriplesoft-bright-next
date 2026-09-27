# Reference design implementation

The user-selected visual references are `final-wordpress-images/`. Homepage sections follow `home1.png` through `home10.png`; `home.png` is not the homepage target. This supersedes the earlier homepage narrative for these migrated pages.

## Editing

Use **Pages → Edit** for Home, Odoo ERP, About, Insights, Cloud Security, AI Automation, Digital Marketing, Web Development and Mobile Apps. Existing page IDs and URLs remain intact.

Each section is an existing ETripleSoft Gutenberg block. Edit headings and descriptions directly. Cards support editable text, icons, media, destinations, adding/removing items and moving items up. Select a block and use its settings sidebar for button labels and destinations. Hero artwork is selected from the Media Library. Insights uses published WordPress posts; filters and pagination continue to use those posts.

The shared footer is the existing **Website Footer — Edit Here** draft (ID 1232). Its new regional panel precedes the preserved original footer content. The header logo and quote button remain editable under **Appearance → Customize**; navigation remains the existing WordPress menu.

Testimonials, partner credentials and leadership cards retain their existing verification controls. The supplied reference images contain unverified sample names, phone numbers and metrics; these have not been published as company facts. Add approved content and confirm it in the relevant block before publication. Illustrative dashboard artwork is not a performance claim.

## Implementation and preservation

- Child theme `assets/css/reference-design.css` owns the responsive reference layouts; `reference-ribbons.svg` provides decorative curves.
- Existing typography and color tokens remain the foundation.
- The plugin's `inc/design-render.php` renders the artwork variation of the existing hero block when its custom class includes `ets-design`. Other hero blocks retain their current renderer.
- The `_ets_reference_design` page flag selects the new frontend stylesheet and prevents legacy homepage styles and motion from loading on the migrated homepage. Legacy files and the pre-existing uncommitted changes remain preserved.
- `tools/reference-design-data.php` is initial migration content, not the live source of website copy. Editing it after migration does not overwrite WordPress edits.
- `tools/apply-reference-design.php` previews by default. `--apply` backs up content, imports the provided artwork through WordPress APIs and updates existing pages. It refuses to overwrite a page already migrated.
- Verified backups are outside the served WordPress directory under `tools/backups/reference-design-<timestamp>/`. They include original page content, metadata, statuses, IDs and theme settings, plus a SHA-256 checksum. Keep these backups private and preserve them before any further migration.
- Forms retain the existing nonce, validation, throttling, enquiry storage and mail handlers. No form submission is sent during verification.

Run `tools/verify-reference-design.php` with the Local site's PHP configuration to check content identities, block registration/order, artwork and rendering. HTTP checks do not establish visual equivalence: desktop/mobile browser comparison and Gutenberg interaction testing are still required before calling the reproduction exact.
