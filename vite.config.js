import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isVercel = Boolean(process.env.VERCEL)
  return {
    plugins: [react()],
    base: isVercel ? '/' : (command === 'build' ? '/awa-website/' : '/'),
    server: {
      host: true,
      cors: true,
      allowedHosts: true,
    },
    build: {
      emptyOutDir: false,
      copyPublicDir: false,
    },
  }
})
