import { defineConfig, devices } from '@playwright/test';

// Allow flexible port configuration via environment variables
const port = process.env.PORT || process.env.E2E_PORT || '3000';
const baseURL = process.env.E2E_BASE_URL || `http://localhost:${port}`;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // Fix the type issue by ensuring workers is never undefined
  workers: process.env.CI ? 1 : 2,
  reporter: 'html',
  testMatch: '**/*.e2e.ts', // Override to use .e2e.ts extension to avoid conflicts
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  expect: {
    // Configure visual comparison settings for screenshot tests
    toHaveScreenshot: { 
      // Allow for minor rendering differences across environments
      threshold: 0.15,
      // Consistent animation handling
      animations: 'disabled',
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile',
      use: { ...devices['iPhone 13'] },
    },
    {
      name: 'tablet',
      use: { ...devices['iPad'] },
    },
  ],
  // Only start webServer if not explicitly disabled and not already running
  webServer: process.env.E2E_NO_WEBSERVER ? undefined : {
    command: 'pnpm dev',
    port: parseInt(port),
    reuseExistingServer: !process.env.CI,
  },
});