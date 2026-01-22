import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/', // Vercel用に変更（独自ドメイン使用）
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
