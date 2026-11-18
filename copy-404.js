import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const publicDir = path.join(process.cwd(), 'public');
const isVercel = Boolean(process.env.VERCEL);

// 1. Replicate index.html as 404.html
if (fs.existsSync(path.join(distDir, 'index.html'))) {
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
  console.log('Copied index.html to 404.html');
}

// 2. Ensure v9 images are copied to dist/images/v9
const v9Public = path.join(publicDir, 'images', 'v9');
const v9Dist = path.join(distDir, 'images', 'v9');
if (fs.existsSync(v9Public)) {
  fs.mkdirSync(v9Dist, { recursive: true });
  fs.cpSync(v9Public, v9Dist, { recursive: true, force: true });
  console.log('Copied v9 images to dist/images/v9');
}

// 2b. Ensure videos are copied to dist/videos
const videosPublic = path.join(publicDir, 'videos');
const videosDist = path.join(distDir, 'videos');
if (fs.existsSync(videosPublic)) {
  fs.mkdirSync(videosDist, { recursive: true });
  fs.cpSync(videosPublic, videosDist, { recursive: true, force: true });
  console.log('Copied videos to dist/videos');
}

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

// 4. Adjust absolute paths in JS/CSS/HTML for GitHub Pages subfolder deployment (skip for Vercel)
if (!isVercel) {
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
  console.log('Vercel environment detected; root path maintained.');
}

console.log('Post-build process complete.');
