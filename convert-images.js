import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// const sharp = require('sharp');
// const fs = require('fs');
// const path = require('path');


const directory = './src/img/'; // Your image folder

fs.readdirSync(directory).forEach(file => {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const filePath = path.join(directory, file);
        const newFilePath = filePath.replace(/\.(jpe?g)$/, '.webp');

        sharp(filePath)
            .webp({ quality: 80 }) // Adjust quality vs size here
            .toFile(newFilePath)
            .then(() => console.log(`Converted: ${file} -> ${path.basename(newFilePath)}`))
            .catch(err => console.error(`Error converting ${file}:`, err));
    }
});