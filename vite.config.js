import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        FandD: resolve(__dirname, 'FandD/FandD.html'),
        procedure: resolve(__dirname, 'procedure/procedure.html'),
        eligibilty: resolve(__dirname, 'eligibilty/eligibility.html'),
        about: resolve(__dirname, 'about/about_us.html'),
        references: resolve(__dirname, 'references/references.html'),

      },
    },
  },
})