// Builds optimized, self-hosted copies of the Success Stories images into
// public/images/portfolio/. Uses the copy in assets/brand-logos when present,
// otherwise downloads the original from the URL recorded in the WordPress
// export (a one-off fetch; the site itself never hotlinks wp-content).
// Usage: node scripts/build-portfolio-images.mjs
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import sharp from "sharp";

const manifest = JSON.parse(readFileSync("scripts/portfolio-images.json", "utf8"));
mkdirSync("public/images/portfolio", { recursive: true });

let local = 0;
let downloaded = 0;
const failed = [];
for (const { id, file, source } of manifest) {
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
console.log(`${local} from assets, ${downloaded} downloaded, ${failed.length} failed`);
if (failed.length) {
  console.error(failed.join("\n"));
  process.exit(1);
}
