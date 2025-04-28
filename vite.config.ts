import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// detect if we are building for production
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProd ? '/cortyx-site/' : '/',
  plugins: [react()],
});
