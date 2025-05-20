# T004 Plan: Resolve Other Identified Failing Tests Project-Wide

## Overview

This plan outlines the approach for resolving all remaining failing tests identified in T001, focusing specifically on the E2E tests that are failing due to the "Playwright Test did not expect test.describe() to be called here" error. The primary issue appears to be a conflict between the Vitest and Playwright test runners, which needs to be resolved to make all tests pass reliably.

## Root Cause Analysis

Based on the test results and error messages, the main issues are:

1. **Test Runner Conflict**: Vitest is attempting to run Playwright E2E tests, causing conflicts due to different testing APIs and patterns.
2. **Configuration Issues**: The test runners are not properly isolated from each other, leading to conflicts when tests are executed.
3. **Possible Dependency Conflicts**: There might be version conflicts with @playwright/test and axe-playwright dependencies.

## Implementation Plan

### 1. Isolate Test Runners (Vitest & Playwright)

The first step is to properly separate the test runners to prevent conflicts:

- Modify `vitest.config.ts` to explicitly exclude the `e2e/` directory from the Vitest test runner:

```typescript
// Add to vitest.config.ts
test: {
  // ... existing configuration ...
  exclude: [
    // ... existing excludes ...
    'e2e/**/*', // Exclude Playwright E2E tests from Vitest
  ],
}
```

- Verify isolation by running `pnpm test` to ensure Vitest no longer attempts to execute the E2E tests.

### 2. Diagnose and Resolve E2E (Playwright) Test Failures

After isolating the test runners, we need to properly configure the Playwright tests:

1. Check for dependency conflicts:
   - Run `pnpm why @playwright/test` to check for version conflicts
   - Add an override in package.json if needed to ensure a single, consistent version

2. Verify Playwright configuration:
   - Ensure `playwright.config.ts` is correctly configured to target only E2E tests
   - Confirm the E2E test files use Playwright's API correctly
   - Check for any import conflicts (e.g., importing test from both Vitest and Playwright)

3. Update the npm script for E2E tests if needed:
   - Ensure `pnpm test:e2e` correctly calls Playwright without Vitest interference

### 3. Test Implementation Details

Based on the analysis, I'll need to make the following specific changes:

#### 3.1. Update Vitest Configuration

- Modify `vitest.config.ts` to add e2e directory to the exclude list

#### 3.2. Add Type Support for E2E Tests

- Create a separate `tsconfig.e2e.json` file for E2E tests to avoid TypeScript conflicts
- Configure it to recognize Playwright's test APIs correctly

#### 3.3. Update E2E Test Scripts

- Ensure the `test:e2e` script in package.json correctly references Playwright's test runner
- Verify that the script works with the latest version of Playwright

### 4. Verification

After implementing the changes, I will:

1. Run `pnpm test` to verify that component tests pass without E2E test conflicts
2. Run `pnpm test:e2e` to verify that E2E tests run correctly with Playwright
3. Check that both command executions are clean without any runner-related errors

### 5. Documentation

Document any configuration changes or test modifications to help future developers understand the test setup:

- Add comments to the modified configuration files explaining the separation of test runners
- Update README or documentation (if any) with information about running different test suites

## Expected Outcome

Once the changes are implemented:

1. Component tests will run successfully with Vitest without attempting to run E2E tests
2. E2E tests will run successfully with Playwright without any runner conflicts
3. The T004 task will be completed with all tests passing reliably

## Development Philosophy Alignment

These changes align with the Development Philosophy by:

- **Simplicity First**: Addressing the root cause (test runner conflicts) rather than working around symptoms
- **Modularity**: Properly separating the component tests and E2E tests into distinct test runners
- **Explicit is Better than Implicit**: Making the test runner configurations explicit and clear
- **Design for Testability**: Ensuring all tests can be reliably executed to verify application behavior
- **Adhering to Standards**: Addressing violations properly rather than suppressing them or using workarounds