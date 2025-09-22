import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',  // Base URL padrão para deploy universal
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      overlay: false
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: false,
    // Permite todos os hosts para evitar problemas de bloqueio
    allowedHosts: 'all'
  }
})
