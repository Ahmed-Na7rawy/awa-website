import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');

// Replicate index.html as 404.html
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
console.log('Copied index.html to 404.html');

// Helper to recursively walk a directory
function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath, callback);
    } else {
      callback(filePath);
    }
  }
}

// Adjust absolute paths to /images/, /images/logos/ or /images/gallery/
console.log('Rewriting asset paths in JS and CSS files for sub-folder deployment...');

walkDir(distDir, (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.js' || ext === '.css' || ext === '.html') {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace "/images/" with "/awa-website/images/"
    // Make sure we don't duplicate it if Vite/Rollup already handled some imports
    let original = content;
    content = content.replace(/(?<!\/awa-website)\/images\//g, '/awa-website/images/');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  Updated paths in: ${path.relative(distDir, filePath)}`);
    }
  }
});

console.log('Path rewrite complete.');
