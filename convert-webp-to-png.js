const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoryPath = path.join(__dirname, 'public/images'); // Update path if needed

function convertWebpToPng(folder) {
  fs.readdir(folder, (err, files) => {
    if (err) return console.error('Error reading directory:', err);

    files.forEach(file => {
      const fullPath = path.join(folder, file);
      fs.stat(fullPath, (err, stats) => {
        if (err) return console.error('Error reading file:', err);

        if (stats.isDirectory()) {
          // Recurse into subfolders
          convertWebpToPng(fullPath);
        } else if (path.extname(file).toLowerCase() === '.webp') {
          const newFilePath = fullPath.replace('.webp', '.png');

          sharp(fullPath)
            .png()
            .toFile(newFilePath)
            .then(() => console.log(`Converted: ${file} → ${path.basename(newFilePath)}`))
            .catch(err => console.error(`Failed to convert ${file}:`, err));
        }
      });
    });
  });
}

convertWebpToPng(directoryPath);
