import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  base: process.env.CI ? '/cms2jsonschema-demo' : '/',
  build: {
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    coverage: {
      include: ['src/**'],
      exclude: ['src/main.tsx'],
    },
  },
});
