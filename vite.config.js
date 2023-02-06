import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        FandD: resolve(__dirname, 'FandD/FandD.html'),
      },
    },
  },
})