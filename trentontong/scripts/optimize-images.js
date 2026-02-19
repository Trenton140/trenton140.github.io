const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const IMAGES_DIR = path.join(__dirname, '..', 'src', 'assets', 'images');
const GALLERY_DIR = path.join(IMAGES_DIR, 'gallery');
const OUTPUT_DIR = path.join(IMAGES_DIR, 'optimized');
const GALLERY_OUTPUT_DIR = path.join(OUTPUT_DIR, 'gallery');

const QUALITY = 80;

const configs = [
  // Hero/profile images
  { input: path.join(IMAGES_DIR, 'UKPhoto2.jpg'), output: 'UKPhoto2.webp', width: 1920 },
  { input: path.join(IMAGES_DIR, 'PlaceMassena1.jpg'), output: 'PlaceMassena1.webp', width: 1920 },
  { input: path.join(IMAGES_DIR, 'NiceFrance.JPG'), output: 'NiceFrance.webp', width: 500 },
];

async function optimizeImage(inputPath, outputPath, maxWidth) {
  const metadata = await sharp(inputPath).metadata();
  const width = Math.min(metadata.width, maxWidth);

  await sharp(inputPath)
    .resize(width)
    .webp({ quality: QUALITY })
    .toFile(outputPath);

  const inputStats = fs.statSync(inputPath);
  const outputStats = fs.statSync(outputPath);
  const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
  console.log(
    `  ${path.basename(inputPath)} (${(inputStats.size / 1024).toFixed(0)}KB) -> ${path.basename(outputPath)} (${(outputStats.size / 1024).toFixed(0)}KB) [${reduction}% smaller]`
  );
}

async function main() {
  // Create output directories
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(GALLERY_OUTPUT_DIR, { recursive: true });

  console.log('Optimizing hero/profile images...');
  for (const config of configs) {
    await optimizeImage(config.input, path.join(OUTPUT_DIR, config.output), config.width);
  }

  console.log('\nOptimizing gallery images...');
  const galleryFiles = fs.readdirSync(GALLERY_DIR).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  for (const file of galleryFiles) {
    const inputPath = path.join(GALLERY_DIR, file);
    const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    await optimizeImage(inputPath, path.join(GALLERY_OUTPUT_DIR, outputName), 1200);
  }

  console.log('\nDone! Optimized images saved to src/assets/images/optimized/');
}

main().catch(console.error);
