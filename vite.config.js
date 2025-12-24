import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // أضفت الشرطة قبل الاسم لتطابق الرابط الذي أرسلته
  base: '/-alwaehj/',

  plugins: [react()],

  build: {
    outDir: 'docs', // التأكد من الإخراج لمجلد docs
    chunkSizeWarningLimit: 1600,
  },
});