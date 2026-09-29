// Builds optimized, self-hosted copies of the public legacy Success Stories
// gallery into public/images/portfolio/. Only the original image and label
// are migrated; case-study claims and outcomes remain governed separately.
// Usage: node scripts/build-portfolio-images.mjs
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import sharp from "sharp";

const manifest = JSON.parse(readFileSync("scripts/portfolio-images.json", "utf8"));
const portfolioSource = readFileSync("src/data/portfolio.ts", "utf8");
const galleryItems = new Set(
  portfolioSource
    .split(/(?=^\s*\{\s*id:)/m)
    .flatMap((item) => {
      const id = /^\s*\{\s*id:\s*"([^"]+)"/m.exec(item)?.[1];
      return id && /\bimage:\s*"\/images\/portfolio\//.test(item) && /\bsource:\s*"https?:/.test(item) ? [id] : [];
    }),
);
const manifestIds = new Set(manifest.map(({ id }) => id));
const missing = [...galleryItems].filter((id) => !manifestIds.has(id));
if (missing.length) throw new Error(`Public portfolio items missing from image manifest: ${missing.join(", ")}`);
mkdirSync("public/images/portfolio", { recursive: true });

let local = 0;
let downloaded = 0;
let skipped = 0;
const failed = [];
for (const { id, file, source } of manifest) {
  if (!galleryItems.has(id)) {
    skipped++;
    continue;
  }
  const localPath = `assets/brand-logos/${file}`;
  let input;
  try {
    if (existsSync(localPath)) {
      input = readFileSync(localPath);
      local++;
    } else {
      const response = await fetch(source);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      input = Buffer.from(await response.arrayBuffer());
      downloaded++;
    }
    await sharp(input)
      .resize({ width: 480, height: 480, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(`public/images/portfolio/${id}.webp`);
  } catch (error) {
    failed.push(`${id}: ${error.message}`);
  }
}
console.log(`${local} from assets, ${downloaded} downloaded, ${skipped} non-gallery entries skipped, ${failed.length} failed`);
if (failed.length) {
  console.error(failed.join("\n"));
  process.exit(1);
}
