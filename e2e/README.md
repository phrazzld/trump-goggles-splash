# End-to-End Tests

This directory contains end-to-end tests for the Trump Goggles Splash Page using [Playwright](https://playwright.dev/).

## Test Categories

1. **Navigation Tests** (`navigation.test.ts`)
   - Verify that the main page loads correctly with all expected elements
   - Test other pages (e.g., test page) if available

2. **Link Tests** (`links.test.ts`)
   - Test Chrome Store link functionality
   - Test GitHub repository link functionality
   - Verify links have proper security attributes

3. **Responsive Layout Tests** (`responsive.test.ts`) 
   - Verify page layout on mobile devices
   - Verify page layout on desktop devices
   - Check content readability at different screen sizes

4. **Accessibility Tests** (`accessibility.test.ts`)
   - Full page accessibility compliance checks
   - Specific section accessibility checks
   - Interactive element accessibility
   - Color contrast verification
   - Keyboard navigation testing

## Running the Tests

Run all tests:
```bash
pnpm test:e2e
```

Run with UI:
```bash
pnpm test:e2e:ui
```

Run a specific test file:
```bash
pnpm exec playwright test e2e/links.test.ts
```

## Configuration

The Playwright configuration is in `playwright.config.ts` at the project root. Key settings:

- Tests run against a local development server at `http://localhost:3000`
- Tests run in Chromium by default
- Mobile tests use iPhone 13 viewport
- The server is automatically started for tests