import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import markdown from "vite-plugin-md";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.md'],
  plugins: [
    react(),
    markdown()
  ],
})
