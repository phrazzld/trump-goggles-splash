import '@testing-library/jest-dom/vitest';
import { expect } from 'vitest';
import { toHaveNoViolations } from 'jest-axe';

// Extend Vitest's expect with jest-axe matchers
expect.extend(toHaveNoViolations);