// Builds optimized, self-hosted copies of the migrated Insights article images
// into public/images/insights/<slug>/ and records their sizes (used for
// explicit width/height on next/image) in src/content/insights/image-sizes.json.
// Originals are fetched once from the URLs recorded in the WordPress export /
// live site; the site itself never hotlinks wp-content.
// Usage: node scripts/build-insights-images.mjs
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import sharp from "sharp";

const manifest = JSON.parse(readFileSync("scripts/insights-images.json", "utf8"));
const sizes = {};
const failed = [];

for (const { url, out } of manifest) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const input = Buffer.from(await response.arrayBuffer());
    mkdirSync(`public/${dirname(out)}`, { recursive: true });
    const info = await sharp(input)
      .resize({ width: 1024, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(`public/${out}`);
    sizes[`/${out}`] = { width: info.width, height: info.height };
  } catch (error) {
    failed.push(`${out}: ${error.message}`);
  }
}

writeFileSync(
  "src/content/insights/image-sizes.json",
  JSON.stringify(sizes, null, 2) + "\n",
);
console.log(`${Object.keys(sizes).length} images built, ${failed.length} failed`);
if (failed.length) {
  console.error(failed.join("\n"));
  process.exit(1);
}
