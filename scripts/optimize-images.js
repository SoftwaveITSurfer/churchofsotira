import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './public/images/churches';
const outputDir = './public/images/churches/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
    try {
        const stats = fs.statSync(inputPath);
        const fileSizeMB = stats.size / (1024 * 1024);

        console.log(`Processing: ${path.basename(inputPath)} (${fileSizeMB.toFixed(2)}MB)`);

        await sharp(inputPath)
            .resize(1200, 800, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .jpeg({
                quality: 80,
                progressive: true
            })
            .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const newFileSizeMB = newStats.size / (1024 * 1024);
        const savings = ((fileSizeMB - newFileSizeMB) / fileSizeMB * 100).toFixed(1);

        console.log(`✅ Optimized: ${path.basename(outputPath)} (${newFileSizeMB.toFixed(2)}MB) - ${savings}% smaller`);
    } catch (error) {
        console.error(`❌ Error processing ${inputPath}:`, error.message);
    }
}

async function main() {
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(file =>
        file.toLowerCase().endsWith('.jpg') ||
        file.toLowerCase().endsWith('.jpeg') ||
        file.toLowerCase().endsWith('.png')
    );

    console.log(`🖼️  Found ${imageFiles.length} images to optimize...\n`);

    for (const file of imageFiles) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file.replace(/\.(png|jpg|jpeg)$/i, '.jpg'));
        await optimizeImage(inputPath, outputPath);
    }

    console.log('\n🎉 Image optimization complete!');
}

main().catch(console.error);