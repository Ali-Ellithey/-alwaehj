import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // تأكد أن 'alwaehj' هو اسم المستودع (Repository) الخاص بك على GitHub تماماً
  base: '/alwaehj/',

  plugins: [react()],

  build: {
    // هذا السطر هو الأهم: يخبر Vite أن يضع الملفات النهائية في مجلد docs
    outDir: 'docs',
    chunkSizeWarningLimit: 1600,
  },
});