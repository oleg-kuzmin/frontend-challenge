import react from '@vitejs/plugin-react';
import path from 'path';
import { packageDirectorySync } from 'pkg-dir';
import { defineConfig } from 'vite';

const packageRoot = packageDirectorySync() ?? '';

// https://vite.dev/config/
export default defineConfig({
  base: '/frontend-challenge/',
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      api: path.resolve(packageRoot, './src/api'),
      app: path.resolve(packageRoot, './src/app'),
      components: path.resolve(packageRoot, './src/components'),
      helpers: path.resolve(packageRoot, './src/helpers'),
      mixins: path.resolve(packageRoot, './src/mixins'),
      styles: path.resolve(packageRoot, './src/styles'),
      types: path.resolve(packageRoot, './src/types'),
    },
  },
});
