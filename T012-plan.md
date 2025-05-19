# T012: Unit Tests for Shared Components - Implementation Plan

## Overview
This plan implements comprehensive unit testing for the `ExternalLink` and `SectionHeading` shared components using Vitest and React Testing Library. The approach follows test-first methodology and achieves 90%+ code coverage while adhering to the development philosophy.

## Framework Choice: Vitest + React Testing Library

### Rationale
- **Vitest**: Modern, fast, Next.js 15 compatible with minimal configuration
- **React Testing Library**: Encourages testing behavior over implementation
- **No internal mocking**: Tests components as they're used, including child components
- **TypeScript support**: Full TypeScript support with strict mode compatibility
- **Fast feedback**: Vitest provides instant test results with hot module replacement

## Implementation Steps

### Step 1: Install Testing Dependencies

Install all required testing packages:
```bash
pnpm add -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitest/coverage-v8 axe-core jest-axe
```

### Step 2: Configure Vitest

Create `vitest.config.ts` in project root:
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    moduleNameMapper: {
      '^@/(.*)$': path.resolve(__dirname, './$1'),
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov', 'json-summary'],
      include: ['app/components/shared/**/*.{ts,tsx}'],
      exclude: [
        'app/components/shared/**/*.d.ts',
        'app/components/shared/**/index.ts',
        'node_modules/',
        'vitest.setup.ts',
        'vitest.config.ts',
      ],
      all: true,
      lines: 90,
      functions: 90,
      branches: 90,
      statements: 90,
    },
  },
});
```

### Step 3: Create Test Setup File

Create `vitest.setup.ts` in project root:
```typescript
import '@testing-library/jest-dom/vitest';
import { expect } from 'vitest';
import { toHaveNoViolations } from 'jest-axe';

// Extend Vitest's expect with jest-axe matchers
expect.extend(toHaveNoViolations);
```

### Step 4: Update Package.json Scripts

Add test scripts:
```json
{
  "scripts": {
    // ... existing scripts
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:cov": "vitest run --coverage",
    "test:ui": "vitest --ui"
  }
}
```

### Step 5: Write Tests for SectionHeading

Create `app/components/shared/SectionHeading.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import SectionHeading, { HeadingLevel } from './SectionHeading';

describe('SectionHeading', () => {
  const testText = 'Test Heading';

  it.each([1, 2, 3, 4, 5, 6] as HeadingLevel[])(
    'renders as an h%s element when level %s is provided',
    async (level) => {
      const { container } = render(<SectionHeading level={level}>{testText}</SectionHeading>);
      const headingElement = screen.getByRole('heading', { level });
      expect(headingElement).toBeInTheDocument();
      expect(headingElement.tagName).toBe(`H${level}`);
      expect(headingElement).toHaveTextContent(testText);
      expect(await axe(container)).toHaveNoViolations();
    },
  );

  it('applies default and custom classNames correctly', async () => {
    const customClass = 'my-custom-heading-class';
    const { container } = render(
      <SectionHeading level={1} className={customClass}>
        {testText}
      </SectionHeading>,
    );
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveClass('text-retro-blue');
    expect(headingElement).toHaveClass('text-shadow-vintage');
    expect(headingElement).toHaveClass(customClass);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('passes through the id prop', async () => {
    const testId = 'custom-section-id';
    const { container } = render(
      <SectionHeading level={2} id={testId}>
        {testText}
      </SectionHeading>,
    );
    const headingElement = screen.getByRole('heading', { level: 2 });
    expect(headingElement).toHaveAttribute('id', testId);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders complex children correctly', () => {
    render(
      <SectionHeading level={3}>
        <span>Complex</span> <strong>Children</strong>
      </SectionHeading>,
    );
    expect(screen.getByText('Complex')).toBeInTheDocument();
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('does not set id when not provided', () => {
    render(<SectionHeading level={1}>{testText}</SectionHeading>);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).not.toHaveAttribute('id');
  });
});
```

### Step 6: Write Tests for ExternalLink

Create `app/components/shared/ExternalLink.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import ExternalLink from './ExternalLink';

describe('ExternalLink', () => {
  const testHref = 'https://example.com';
  const testChildren = 'Visit Example';

  describe('Text Variant', () => {
    it('renders correctly with default (text) variant and security attributes', async () => {
      const { container } = render(<ExternalLink href={testHref}>{testChildren}</ExternalLink>);
      // Account for screen reader text in the accessible name
      const linkElement = screen.getByRole('link', { name: `${testChildren}(opens in new tab)` });

      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', testHref);
      expect(linkElement).toHaveAttribute('target', '_blank');
      expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
      expect(linkElement).toHaveTextContent(testChildren);
      expect(linkElement).toHaveClass('text-retro-blue');
      expect(linkElement).toHaveClass('underline');

      // Check for sr-only text
      const srOnlyText = screen.getByText('(opens in new tab)');
      expect(srOnlyText).toHaveClass('sr-only');

      expect(await axe(container)).toHaveNoViolations();
    });

    it('applies custom className to the link element', async () => {
      const customClass = 'my-custom-link-class';
      const { container } = render(
        <ExternalLink href={testHref} className={customClass}>
          {testChildren}
        </ExternalLink>,
      );
      const linkElement = screen.getByRole('link');
      expect(linkElement).toHaveClass(customClass);
      expect(await axe(container)).toHaveNoViolations();
    });

    it('applies aria-label when provided', async () => {
      const ariaLabel = 'Custom Link Label';
      const { container } = render(
        <ExternalLink href={testHref} ariaLabel={ariaLabel}>
          {testChildren}
        </ExternalLink>,
      );
      const linkElement = screen.getByRole('link', { name: ariaLabel });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('aria-label', ariaLabel);
      expect(await axe(container)).toHaveNoViolations();
    });

    it('renders external link icon with text variant', () => {
      render(<ExternalLink href={testHref}>{testChildren}</ExternalLink>);
      const linkElement = screen.getByRole('link');
      const svgElement = linkElement.querySelector('svg');
      expect(svgElement).toBeInTheDocument();
      expect(svgElement).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Button Variant', () => {
    it('renders correctly with button variant and security attributes', async () => {
      const { container } = render(
        <ExternalLink href={testHref} variant="button">
          {testChildren}
        </ExternalLink>,
      );
      const linkElement = screen.getByRole('link');
      const buttonElement = screen.getByRole('button', { name: testChildren });

      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', testHref);
      expect(linkElement).toHaveAttribute('target', '_blank');
      expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
      expect(linkElement).toContainElement(buttonElement);
      expect(buttonElement).toHaveTextContent(testChildren);
      expect(await axe(container)).toHaveNoViolations();
    });

    it('passes buttonProps to the underlying RetroButton', async () => {
      const { container } = render(
        <ExternalLink
          href={testHref}
          variant="button"
          buttonProps={{ 
            'data-testid': 'retro-button-test', 
            className: 'custom-retro-button-class',
            size: 'lg',
            variant: 'secondary'
          }}
        >
          {testChildren}
        </ExternalLink>,
      );
      const retroButtonElement = screen.getByTestId('retro-button-test');
      expect(retroButtonElement).toBeInTheDocument();
      expect(retroButtonElement).toHaveClass('custom-retro-button-class');
      expect(retroButtonElement).toHaveClass('text-lg'); // Large size
      expect(retroButtonElement).toHaveClass('bg-transparent'); // Secondary variant
      expect(await axe(container)).toHaveNoViolations();
    });

    it('applies custom className to the main link wrapper in button variant', async () => {
      const customClass = 'my-custom-wrapper-class';
      const { container } = render(
        <ExternalLink href={testHref} variant="button" className={customClass}>
          {testChildren}
        </ExternalLink>,
      );
      const linkElement = screen.getByRole('link');
      expect(linkElement).toHaveClass(customClass);
      expect(await axe(container)).toHaveNoViolations();
    });

    it('handles missing buttonProps correctly', () => {
      // Should render without errors when buttonProps is undefined
      const { container } = render(
        <ExternalLink href={testHref} variant="button">
          {testChildren}
        </ExternalLink>,
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty href', () => {
      render(<ExternalLink href="">{testChildren}</ExternalLink>);
      const linkElement = screen.getByRole('link');
      expect(linkElement).toHaveAttribute('href', '');
    });

    it('handles special characters in href', () => {
      const specialHref = 'https://example.com?param=value&other=test#anchor';
      render(<ExternalLink href={specialHref}>{testChildren}</ExternalLink>);
      const linkElement = screen.getByRole('link');
      expect(linkElement).toHaveAttribute('href', specialHref);
    });

    it('handles ReactNode children', () => {
      render(
        <ExternalLink href={testHref}>
          <span>Nested</span> <strong>Content</strong>
        </ExternalLink>
      );
      expect(screen.getByText('Nested')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });
});
```

### Step 7: Run Tests and Validate Coverage

1. Execute tests with coverage:
   ```bash
   pnpm test:cov
   ```

2. Review coverage report in console and HTML report at `coverage/lcov-report/index.html`

3. Ensure both components meet 90%+ coverage thresholds

4. If coverage is insufficient, identify uncovered code paths and add tests

### Step 8: Update CI/CD Pipeline

If using GitHub Actions or similar, add test step to CI workflow:
```yaml
- name: Run tests
  run: pnpm test:cov
```

## Testing Best Practices Applied

1. **Behavior-Driven Testing**: Tests focus on user-facing behavior, not implementation
2. **No Internal Mocking**: Components are tested with their dependencies
3. **AAA Pattern**: All tests follow Arrange-Act-Assert structure
4. **Accessibility Testing**: Every test includes axe accessibility checks
5. **Edge Cases**: Tests cover various scenarios including edge cases
6. **Type Safety**: Full TypeScript support in test files

## Success Criteria

- ✅ Vitest configured and running
- ✅ 90%+ coverage for ExternalLink component
- ✅ 90%+ coverage for SectionHeading component
- ✅ All tests passing
- ✅ Accessibility checks included
- ✅ Tests integrated into CI pipeline

This testing approach ensures high-quality, maintainable tests that serve as living documentation for the components.