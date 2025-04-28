import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';  // IMPORTANT

export default defineConfig({
  base: '/cortyx-site/',  // for GitHub Pages (correct)
  plugins: [react(), tailwindcss()],
});
