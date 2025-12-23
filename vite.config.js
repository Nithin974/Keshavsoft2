import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import vitePluginNunjucks from './vite-plugin-nunjucks.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/Keshavsoft2/',
  root: 'src',
  publicDir: '../public',
  
  plugins: [
    vitePluginNunjucks()
  ],

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        about: path.resolve(__dirname, 'src/about.html'),
        contact: path.resolve(__dirname, 'src/contact.html')
      }
    }
  },

  server: {
    port: 3000,
    open: true
  }
});
