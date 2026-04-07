import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        blog: resolve(__dirname, 'blog.html'),
        join: resolve(__dirname, 'join.html'),
        schedule: resolve(__dirname, 'schedule.html'),
        services: resolve(__dirname, 'services.html'),
        work: resolve(__dirname, 'work.html'),
      },
    },
  },
})
