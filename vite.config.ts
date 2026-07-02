import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        projects: resolve(root, 'projects/index.html'),
        log: resolve(root, 'log/index.html'),
        yaksok: resolve(root, 'projects/yaksok/index.html'),
        stockAi: resolve(root, 'projects/stock-ai/index.html'),
        members: resolve(root, 'members/index.html')
      }
    }
  }
})
