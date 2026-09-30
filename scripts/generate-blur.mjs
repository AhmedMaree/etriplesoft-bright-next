// Generates tiny blur placeholders for next/image (placeholder="blur").
// Run after adding or changing images listed below: node scripts/generate-blur.mjs
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const names = [
  "construction",
  "retail",
  "dubai",
  "education",
  "healthcare",
  "distribution",
];

const out = {};
for (const name of names) {
  const buf = await sharp(`public/images/${name}.webp`)
    .resize(16, 10, { fit: "cover" })
    .blur(1)
    .webp({ quality: 40 })
    .toBuffer();
  out[name] = `data:image/webp;base64,${buf.toString("base64")}`;
}
writeFileSync("src/lib/blur-data.json", JSON.stringify(out, null, 2) + "\n");
console.log("wrote src/lib/blur-data.json", Object.keys(out).length);
