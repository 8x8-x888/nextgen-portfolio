import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: 'public',
  server: {
    host: true,
    port: 5173
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './public/index.html'
    }
  }
});