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
        'src/vite-env.d.ts',
        'src/main.tsx',
        '**/**test.tsx',
        '**/test/**',
        '**/utils/**',
        '**/config/**',
        '**/*Model.ts',
        '**/store/**',
      ],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
});
