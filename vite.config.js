import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true' || (!process.env.VERCEL && command === 'build');

  return {
    plugins: [react()],
    base: isGitHubPages ? '/awa-website/' : '/',
    server: {
      host: true,
      cors: true,
      allowedHosts: true,
    },
    build: {
      emptyOutDir: false,
      copyPublicDir: false,
    },
  };
});
