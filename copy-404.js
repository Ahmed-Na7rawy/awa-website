import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const publicDir = path.join(process.cwd(), 'public');

// 1. Replicate index.html as 404.html for static SPA routing fallback
if (fs.existsSync(path.join(distDir, 'index.html'))) {
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
  console.log('Copied index.html to 404.html');
}

// 2. Ensure root static files exist in dist
['favicon.svg', 'icons.svg', 'robots.txt', 'sitemap.xml'].forEach((file) => {
  const src = path.join(publicDir, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src) && !fs.existsSync(dest)) {
    try {
      fs.copyFileSync(src, dest);
      console.log(`Copied ${file} to dist`);
    } catch (e) {
      // ignore
    }
  }
});

console.log('Post-build process complete.');
