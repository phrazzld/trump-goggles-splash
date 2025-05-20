import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import StarDecoration from './StarDecoration';

expect.extend(toHaveNoViolations);

describe('StarDecoration', () => {
  describe('Rendering', () => {
    it('renders the star icon', () => {
      const { container } = render(<StarDecoration />);
      const star = container.querySelector('.lucide-star');
      expect(star).toBeInTheDocument();
    });

    it('renders with correct default size', () => {
      const { container } = render(<StarDecoration />);
      const star = container.querySelector('.lucide-star');
      // Default size is 24px
      expect(star).toHaveAttribute('width', '24');
      expect(star).toHaveAttribute('height', '24');
    });

    it('renders with custom size', () => {
      const { container } = render(<StarDecoration size={48} />);
      const star = container.querySelector('.lucide-star');
      expect(star).toHaveAttribute('width', '48');
      expect(star).toHaveAttribute('height', '48');
    });
  });

  describe('Accessibility', () => {
    it('has aria-hidden attribute', () => {
      const { container } = render(<StarDecoration />);
      const star = container.querySelector('.lucide-star');
      expect(star).toHaveAttribute('aria-hidden', 'true');
    });

    it('has no accessibility violations', async () => {
      const { container } = render(<StarDecoration />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('is ignored by screen readers', () => {
      const { container } = render(<StarDecoration />);
      const star = container.querySelector('[aria-hidden="true"]');
      expect(star).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('has correct fill and stroke colors', () => {
      const { container } = render(<StarDecoration />);
      const star = container.querySelector('.lucide-star');
      expect(star).toHaveClass('text-retro-gold');
      expect(star).toHaveClass('fill-retro-gold');
    });

    it('applies passed className', () => {
      const { container } = render(<StarDecoration className="custom-star" />);
      const star = container.querySelector('.lucide-star');
      expect(star).toHaveClass('custom-star');
    });

    // [REMOVED] Test for absolute positioning: StarDecoration is intended to be a pure decorative component.
    // The caller is responsible for positioning it within its parent via className or wrapper elements.
    // This design allows for more flexible component usage in various contexts.
  });

  describe('Props', () => {
    it('accepts size prop', () => {
      const { container } = render(<StarDecoration size={24} />);
      const star = container.querySelector('.lucide-star');
      expect(star).toHaveAttribute('width', '24');
      expect(star).toHaveAttribute('height', '24');
    });

    it('accepts className prop', () => {
      const { container } = render(<StarDecoration className="test-class" />);
      const star = container.querySelector('.lucide-star');
      expect(star).toHaveClass('test-class');
    });

    // [REMOVED] Test for aria-hidden override: StarDecoration is a purely decorative component
    // and should always have aria-hidden="true" for accessibility reasons. Allowing this attribute
    // to be overridden would violate accessibility best practices for decorative elements.
  });
});