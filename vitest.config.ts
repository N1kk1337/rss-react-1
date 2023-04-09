/// <reference types="vitest" />
/// <reference types="vite/client" />
import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      all: true,
      exclude: [
        ...configDefaults.exclude,
        '**/test/**',
        '**/utils/**',
        '**/config/**',
        '**model**',
      ],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
});
