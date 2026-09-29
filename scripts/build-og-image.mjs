// Builds the site-wide Open Graph fallback image (1200x630) from the
// self-hosted hero photo and white logo. Run: node scripts/build-og-image.mjs
import sharp from "sharp";

const W = 1200;
const H = 630;
const overlay = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#07163e" stop-opacity="0.94"/>
      <stop offset="1" stop-color="#07163e" stop-opacity="0.62"/>
    </linearGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    <text x="72" y="400" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700" fill="#ffffff">Digital transformation</text>
    <text x="72" y="466" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700" fill="#ffffff">built around your business</text>
    <text x="72" y="530" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#c9d6f5">Odoo ERP · AI · Cloud · Web · Mobile · Marketing</text>
  </svg>`,
);
const logo = await sharp("public/images/logo-white.png").resize({ width: 300 }).toBuffer();
await sharp("public/images/hero-image.webp")
  .resize(W, H, { fit: "cover", position: "right" })
  .composite([
    { input: overlay },
    { input: logo, left: 72, top: 72 },
  ])
  .png({ compressionLevel: 9 })
  .toFile("public/images/og-default.png");
console.log("wrote public/images/og-default.png");
