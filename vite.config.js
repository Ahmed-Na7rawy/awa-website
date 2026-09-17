import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';

  return {
    plugins: [react()],
    base: isGitHubPages ? '/awa-website/' : '/',
    build: {
      emptyOutDir: true,
    },
  };
});


