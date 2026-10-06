// Converts the original photos in source-images/ into the WebP files the site uses in
// src/assets/images/. Run with `npm run optimize-images` and commit the output; CI doesn't run it.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'source-images');
const OUTPUT_DIR = path.join(ROOT, 'src', 'assets', 'images');
const QUALITY = 80;

const namedImages = [
  { input: 'UKPhoto2.jpg', output: 'hero-light.webp', maxWidth: 1920 },
  { input: 'PlaceMassena1.jpg', output: 'hero-dark.webp', maxWidth: 1920 },
  { input: 'NiceFrance.JPG', output: 'profile.webp', maxWidth: 500 },
];

const kb = (file) => `${Math.round(fs.statSync(file).size / 1024)} KB`;

async function optimize(input, output, maxWidth) {
  await sharp(input)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output);
  console.log(`  ${path.relative(ROOT, input)} (${kb(input)}) -> ${path.relative(ROOT, output)} (${kb(output)})`);
}

fs.mkdirSync(path.join(OUTPUT_DIR, 'gallery'), { recursive: true });

for (const { input, output, maxWidth } of namedImages) {
  await optimize(path.join(SOURCE_DIR, input), path.join(OUTPUT_DIR, output), maxWidth);
}

const galleryFiles = fs
  .readdirSync(path.join(SOURCE_DIR, 'gallery'))
  .filter((file) => /\.(jpe?g|png)$/i.test(file));
for (const file of galleryFiles) {
  const output = file.replace(/\.\w+$/, '.webp');
  await optimize(path.join(SOURCE_DIR, 'gallery', file), path.join(OUTPUT_DIR, 'gallery', output), 1200);
}
