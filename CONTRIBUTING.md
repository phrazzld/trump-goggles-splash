# Contributing to Trump Goggles Splash Page

This document outlines the guidelines and standards for contributing to the Trump Goggles Splash Page project. Please read these guidelines carefully to ensure your contributions align with our project standards.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
  - [TypeScript and Type Safety](#typescript-and-type-safety)
  - [No `any` Types Policy](#no-any-types-policy)
  - [No Suppression Directives Policy](#no-suppression-directives-policy)
- [Component Development](#component-development)
- [Testing Requirements](#testing-requirements)
- [Pull Request Process](#pull-request-process)
- [Additional Resources](#additional-resources)

## Getting Started

1. Clone the repository
2. Install pnpm (if not already installed)
   ```bash
   npm install -g pnpm
   ```
3. Install dependencies
   ```bash
   pnpm install
   ```
4. Start the development server
   ```bash
   pnpm dev
   ```

## Development Workflow

1. Check [TODO.md](./TODO.md) for the next unblocked task
2. Create a new branch for your work
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Run the linter and type checker
   ```bash
   pnpm lint
   pnpm tsc --noEmit
   ```
5. Run tests
   ```bash
   pnpm test
   ```
6. Submit a pull request

## Code Standards

We follow strict coding standards to ensure code quality, maintainability, and type safety. For detailed information, refer to our [Development Philosophy document](./docs/DEVELOPMENT_PHILOSOPHY.md).

### TypeScript and Type Safety

- All code must be written in TypeScript with strict type checking enabled
- Configure TypeScript with the strictest practical settings (`strict: true` in `tsconfig.json`)
- Use types, interfaces, and generics to express intent clearly

### No `any` Types Policy

The use of `any` type is **strictly forbidden** in our codebase. This policy exists to ensure type safety, improve code quality, and prevent runtime errors.

Instead of `any`, use:

- Specific types or interfaces
- Union types (`type A = string | number`)
- Intersection types (`type A = B & C`)
- Generic types (`<T>`)
- The `unknown` type (with proper type narrowing) when the type cannot be determined beforehand

Example:

```typescript
// ❌ BAD - Using 'any'
function processData(data: any): any {
  return data.value;
}

// ✅ GOOD - Using specific types or generics
interface DataItem {
  value: string;
}

function processData(data: DataItem): string {
  return data.value;
}

// ✅ GOOD - Using unknown with type narrowing
function processUnknownData(data: unknown): string {
  if (typeof data === 'object' && data !== null && 'value' in data && typeof data.value === 'string') {
    return data.value;
  }
  throw new Error('Invalid data format');
}
```

### No Suppression Directives Policy

Suppression directives to disable ESLint rules or TypeScript checks are **strictly forbidden** except in extremely rare, explicitly justified cases. This includes but is not limited to:

- `// eslint-disable-line`
- `// eslint-disable-next-line`
- `/* eslint-disable */`
- `@ts-ignore`
- `@ts-expect-error`
- `@ts-nocheck`
- Type assertions to `any` (e.g., `as any`)

In the extremely rare cases where a suppression is absolutely necessary:

1. It must include a detailed comment explaining why the suppression is needed
2. It must be as narrowly scoped as possible
3. It must be approved during code review

Example:

```typescript
// ❌ BAD - Unexplained suppression
// @ts-ignore
const result = someFunction();

// ✅ GOOD - If absolutely necessary, with explanation
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- This element is guaranteed to exist because it's created in the useEffect above and this code only runs after that effect completes
const element = document.getElementById('app')!;
```

Our policy is to **address the root cause** of errors rather than suppress them. If you encounter a TypeScript or linting error, take the time to fix the underlying issue.

## Component Development

- Follow the Atomic Design methodology
- Develop new components in isolation using Storybook
- Ensure all components are responsive and accessible

## Testing Requirements

- Write tests for all new code
- Maintain or improve test coverage
- Test behavior, not implementation details

## Pull Request Process

1. Ensure all tests pass and there are no linting errors
2. Update documentation as needed
3. Include a clear description of the changes
4. Reference any related issues
5. Request a review from at least one team member

## Additional Resources

- [Development Philosophy](./docs/DEVELOPMENT_PHILOSOPHY.md) - Core principles and standards
- [TypeScript Appendix](./docs/DEVELOPMENT_PHILOSOPHY_APPENDIX_TYPESCRIPT.md) - TypeScript-specific standards
- [Frontend Appendix](./docs/DEVELOPMENT_PHILOSOPHY_APPENDIX_FRONTEND.md) - Frontend development standards