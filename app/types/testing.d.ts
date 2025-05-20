// This file defines TypeScript declarations for testing library matchers
import '@testing-library/jest-dom';

// Extend the expect interface for testing-library
declare global {
  namespace Vi {
    interface JestMatchers<T> {
      toBeInTheDocument(): T;
      toHaveTextContent(text: string | RegExp): T;
      toHaveClass(...classNames: string[]): T;
      toHaveAttribute(attr: string, value?: string): T;
      toHaveNoViolations(): T;
    }

    interface AsymmetricMatchersContaining {
      toBeInTheDocument(): void;
      toHaveTextContent(text: string | RegExp): void;
      toHaveClass(...classNames: string[]): void;
      toHaveAttribute(attr: string, value?: string): void;
      toHaveNoViolations(): void;
    }
  }
}