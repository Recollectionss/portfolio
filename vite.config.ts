import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/portfolio/",
  base: './portfolio/',
  server: {
    // Это может помочь в отладке
    open: true,
    host: '0.0.0.0',
  }
})
