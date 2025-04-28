import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';  // IMPORTANT

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
});
