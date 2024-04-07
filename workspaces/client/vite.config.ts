import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(async () => {
  return {
    base: './dist',
    build: {
      cssCodeSplit: true,
      cssTarget: 'es6',
      minify: true,
      target: 'es2015',
      rollupOptions: {
        input: { index: 'index.html', main: 'src/index.tsx' },
        output: { entryFileNames: '[name].js' },
      },
    },
    plugins: [react()],
  };
});
