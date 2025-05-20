# CI Pipeline Verification Guide

This document provides instructions for testing the CI pipeline to ensure it properly enforces code quality standards.

## Verifying CI Failure Cases

The CI pipeline is configured to fail if any of the following quality issues are detected:

1. ESLint errors (including using `any` types or disallowed suppression directives)
2. TypeScript compilation errors
3. Failed tests
4. Insufficient test coverage

### How to Test Each Failure Case

#### 1. Testing ESLint Rules

Create a temporary file with ESLint violations to verify proper failure:

```typescript
// app/test-ci-eslint.tsx
export function TestComponent() {
  // This should fail due to explicit any usage
  const badVariable: any = "test";
  return <div>{badVariable}</div>;
}

// This should fail due to missing description in suppression
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function unusedFunction() {
  return null;
}
```

**Expected Result:** CI fails during the ESLint check with specific error messages about the forbidden `any` type and missing description in the suppression comment.

#### 2. Testing TypeScript Type Checking

Create a temporary file with TypeScript errors:

```typescript
// app/test-ci-typescript.tsx
export function TestComponent() {
  // This should fail TypeScript type checking (object is possibly null)
  const obj = Math.random() > 0.5 ? { value: 'test' } : null;
  return <div>{obj.value}</div>;
}
```

**Expected Result:** CI fails during the TypeScript check with a specific error message about object possibly being null.

#### 3. Testing Test Coverage Enforcement

Modify a test file to reduce coverage:

```typescript
// app/components/shared/RetroButton.test.tsx
// Comment out a significant test that contributes to coverage
// it('should handle click events', () => {
//   const handleClick = vi.fn();
//   render(<RetroButton onClick={handleClick}>Click me</RetroButton>);
//   userEvent.click(screen.getByRole('button', { name: /click me/i }));
//   expect(handleClick).toHaveBeenCalledTimes(1);
// });
```

**Expected Result:** CI fails during the coverage check with a message about insufficient coverage, specifying which metrics failed to meet the threshold.

## Running CI Checks Locally

To run the complete CI check locally:

```bash
pnpm ci:check
```

This will run the same sequence of checks as the CI pipeline:
1. ESLint
2. TypeScript type checking
3. Tests with coverage checking and no skipped tests allowed
4. Build

## Important Notes

1. Always revert any test modifications after verification to avoid affecting other developers.
2. When creating a PR with deliberate violations for testing purposes, clearly mark it as a test PR in the title and description.
3. After verifying the CI pipeline works correctly, all future PRs should be expected to pass these quality checks.