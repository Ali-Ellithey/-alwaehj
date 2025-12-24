import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // استخدام ./ هو الأضمن عند استخدام React Router على GitHub Pages
  base: '/-alwaehj/', // يجب أن يتطابق مع الـ basename في main.jsx
  plugins: [react()],
  build: {
    outDir: 'docs',
    chunkSizeWarningLimit: 1600,
  },
});