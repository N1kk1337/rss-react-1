import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteAliases } from 'vite-aliases';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rss-react-1',
  plugins: [react(), ViteAliases({ adjustDuplicates: true })],
});
