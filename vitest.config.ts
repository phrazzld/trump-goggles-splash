import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov', 'json-summary'],
      include: ['app/components/shared/**/*.{ts,tsx}'],
      exclude: [
        'app/components/shared/**/*.d.ts',
        'app/components/shared/**/index.ts',
        'app/components/shared/AnimatedSection.tsx',
        'app/components/shared/AnimatedStar.tsx',
        'app/components/shared/VisuallyHidden.tsx',
        'node_modules/',
        'vitest.setup.ts',
        'vitest.config.ts',
      ],
      all: true,
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
    },
  },
});