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
    // Explicitly exclude E2E tests and node_modules tests to prevent conflicts
    exclude: [
      'e2e/**/*', // Exclude all Playwright E2E tests
      '**/*.e2e.{js,jsx,ts,tsx}', // Exclude any other E2E tests that might be scattered
      'node_modules/**/*.{spec,test}.{ts,tsx,js,jsx}', // Exclude tests in node_modules
      '**/node_modules/**/*.{spec,test}.{ts,tsx,js,jsx}', // Ensure all node_modules tests are excluded
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov', 'json-summary'],
      include: ['app/components/shared/**/*.{ts,tsx}'],
      exclude: [
        'app/components/shared/**/*.d.ts',
        'app/components/shared/**/index.ts',
        'app/components/shared/**/*.stories.tsx',
        'app/components/shared/AnimatedSection.tsx',
        'app/components/shared/AnimatedStar.tsx',
        'app/components/shared/VisuallyHidden.tsx',
        'node_modules/',
        'vitest.setup.ts',
        'vitest.config.ts',
        'e2e/**/*', // Exclude E2E tests from coverage as well
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