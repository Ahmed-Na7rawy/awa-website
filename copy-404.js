import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const publicDir = path.join(process.cwd(), 'public');
const isVercel = Boolean(process.env.VERCEL);
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || (!isVercel && process.env.NODE_ENV === 'production');

// 1. Replicate index.html as 404.html
if (fs.existsSync(path.join(distDir, 'index.html'))) {
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
  console.log('Copied index.html to 404.html');
}

// 2. Fast incremental copy of public/images and public/videos to dist
function copyDirIfMissing(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.endsWith('.exe') || entry.name.endsWith('.old')) continue;
    
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyDirIfMissing(srcPath, destPath);
    } else if (!fs.existsSync(destPath)) {
      try {
        fs.copyFileSync(srcPath, destPath);
      } catch (err) {
        console.warn(`Could not copy ${entry.name}:`, err.message);
      }
    }
  }
}

console.log('Ensuring all images and videos are present in dist...');
copyDirIfMissing(path.join(publicDir, 'images'), path.join(distDir, 'images'));
copyDirIfMissing(path.join(publicDir, 'videos'), path.join(distDir, 'videos'));
console.log('Images and videos verified in dist.');

// 3. Ensure root assets exist in dist
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

// 4. Adjust absolute paths in JS/CSS/HTML only for GitHub Pages subfolder deployment
if (isGitHubPages && !isVercel) {
  console.log('Rewriting asset paths in JS and CSS files for sub-folder deployment...');

  const filesToProcess = [];
  const assetsDir = path.join(distDir, 'assets');
  if (fs.existsSync(assetsDir)) {
    const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
    for (const f of fs.readdirSync(assetsDir)) {
      if (indexHtml.includes(f)) {
        filesToProcess.push(path.join(assetsDir, f));
      }
    }
  }
  for (const h of ['index.html', '404.html']) {
    const hp = path.join(distDir, h);
    if (fs.existsSync(hp)) filesToProcess.push(hp);
  }

  for (const filePath of filesToProcess) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    content = content.replace(/(?<!\/awa-website)\/images\//g, '/awa-website/images/');
    content = content.replace(/(?<!\/awa-website)\/videos\//g, '/awa-website/videos/');
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  Updated paths in: ${path.relative(distDir, filePath)}`);
    }
  }
} else {
  console.log('Vercel/standard root environment detected; root path maintained.');
}

console.log('Post-build process complete.');
