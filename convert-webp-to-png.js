const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public/images'); // Adjust if needed

function deleteWebpFiles(folder) {
  fs.readdir(folder, (err, files) => {
    if (err) return console.error(`Error reading folder: ${folder}`, err);

    files.forEach(file => {
      const fullPath = path.join(folder, file);
      fs.stat(fullPath, (err, stats) => {
        if (err) return console.error(`Error reading file: ${fullPath}`, err);

        if (stats.isDirectory()) {
          deleteWebpFiles(fullPath); // Recurse
        } else if (path.extname(file).toLowerCase() === '.webp') {
          fs.unlink(fullPath, err => {
            if (err) console.error(`Failed to delete ${fullPath}`, err);
            else console.log(`Deleted: ${fullPath}`);
          });
        }
      });
    });
  });
}

deleteWebpFiles(targetDir);
