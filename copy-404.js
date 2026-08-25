import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
console.log('Copied index.html to 404.html');
