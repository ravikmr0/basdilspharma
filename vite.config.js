import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
        manufacturing: resolve(__dirname, 'manufacturing.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
