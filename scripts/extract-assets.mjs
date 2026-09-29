import sharp from "sharp";
import fs from "node:fs/promises";
await fs.mkdir("public/images", { recursive: true });
const crops = {
  skyline: [1, 33, 94, 1055, 416],
  team: [1, 33, 574, 1055, 403],
  cairo: [1, 33, 1043, 338, 201],
  riyadh: [1, 391, 1043, 343, 201],
  dubai: [1, 753, 1043, 335, 201],
  "odoo-hero": [2, 194, 21, 757, 461],
  "odoo-expert": [2, 242, 536, 662, 335],
  construction: [2, 24, 928, 251, 158],
  manufacturing: [2, 295, 928, 253, 158],
  distribution: [2, 568, 928, 251, 158],
  retail: [2, 848, 928, 248, 158],
  healthcare: [2, 27, 1144, 274, 174],
  education: [2, 327, 1144, 268, 174],
  professional: [2, 622, 1144, 272, 174],
  "marketing-hero": [3, 32, 163, 1060, 568],
  "growth-chart": [3, 58, 923, 578, 310],
  portrait: [3, 735, 923, 300, 301],
  "cloud-hero": [4, 26, 64, 1070, 577],
  banking: [4, 26, 721, 346, 228],
  telecom: [4, 388, 721, 346, 228],
  government: [4, 750, 721, 346, 228],
  hospital: [4, 26, 1025, 346, 227],
  factory: [4, 388, 1025, 346, 227],
  warehouse: [4, 750, 1025, 346, 227],
  "ai-hero": [5, 112, 16, 900, 474],
  "ai-robot": [5, 168, 539, 788, 375],
  "web-hero": [6, 122, 11, 878, 466],
  "web-corporate": [6, 14, 531, 351, 226],
  "web-shop": [6, 385, 531, 352, 226],
  "web-property": [6, 759, 531, 351, 226],
  "web-odoo": [6, 15, 815, 350, 224],
  "web-education": [6, 387, 815, 350, 224],
  "web-restaurant": [6, 760, 815, 350, 224],
  developer: [6, 208, 1093, 706, 266],
  "contact-hero": [7, 51, 23, 1020, 460],
  "contact-cairo": [7, 51, 533, 498, 186],
  "contact-riyadh": [7, 574, 533, 497, 186],
  "contact-dubai": [7, 51, 775, 1020, 196],
  map: [7, 51, 1023, 1020, 307],
  "support-hero": [8, 50, 205, 1018, 578],
  headset: [8, 361, 948, 400, 294],
  "portfolio-hero": [10, 208, 76, 706, 366],
  "project-erp": [10, 21, 503, 254, 177],
  "project-logistics": [10, 295, 503, 265, 177],
  "project-cloud": [10, 579, 503, 252, 177],
  "project-ai": [10, 850, 503, 254, 177],
  "project-marketing": [10, 21, 768, 254, 175],
  "project-pos": [10, 295, 768, 265, 175],
  "project-equipment": [10, 579, 768, 252, 175],
  "project-backup": [10, 850, 768, 254, 175],
  "case-study": [10, 267, 1035, 588, 304],
};
for (const [name, [sheet, left, top, width, height]] of Object.entries(crops))
  await sharp(`assets/assets${sheet}.png`)
    .extract({ left, top, width, height })
    .webp({ quality: 94 })
    .toFile(`public/images/${name}.webp`);
for (const name of ["odoo-logo", "microsoft-logo"])
  await sharp(`assets/${name}.png`)
    .trim()
    .png()
    .toFile(`public/images/${name}.png`);
await sharp("pages/etriplesoft design.png")
  .extract({ left: 34, top: 5, width: 90, height: 24 })
  .png()
  .toFile("public/images/logo-home.png");
await sharp("pages/about-us.png")
  .extract({ left: 52, top: 7, width: 125, height: 32 })
  .png()
  .toFile("public/images/logo.png");
await sharp("pages/etriplesoft design.png")
  .extract({ left: 36, top: 402, width: 690, height: 32 })
  .png()
  .toFile("public/images/client-logos.png");
await sharp("pages/etriplesoft design.png")
  .extract({ left: 383, top: 725, width: 343, height: 225 })
  .webp({ quality: 95 })
  .toFile("public/images/home-odoo.webp");
await sharp("pages/etriplesoft design.png")
  .extract({ left: 346, top: 1397, width: 250, height: 108 })
  .webp({ quality: 95 })
  .toFile("public/images/construction-team.webp");
await sharp("assets/odoo-logo.png")
  .extract({ left: 11, top: 105, width: 277, height: 91 })
  .png()
  .toFile("public/images/odoo-wordmark.png");
for (const [page, name, left, top, width, height] of [
  ["ai-page.png", "partners-ai", 43, 417, 892, 35],
  ["web-page.png", "partners-web", 53, 380, 870, 39],
  ["digital-marketing-page.png", "partners-marketing", 50, 350, 560, 35],
])
  await sharp("pages/" + page)
    .extract({ left, top, width, height })
    .png()
    .toFile("public/images/" + name + ".png");
await sharp("pages/about-us.png")
  .extract({ left: 53, top: 8, width: 30, height: 30 })
  .resize(64, 64)
  .png()
  .toFile("app/icon.png");
console.log("Extracted", Object.keys(crops).length + 12, "assets");
