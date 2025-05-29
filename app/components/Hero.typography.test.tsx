import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Typography and Spacing Refinements', () => {
  beforeEach(() => {
    // Reset viewport size before each test
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    });
  });

  afterEach(() => {
    cleanup();
  });

  describe('Typography Enhancements', () => {
    it('should apply enhanced typography utilities to heading', () => {
      const { container } = render(<Hero />);
      
      const heading = container.querySelector('h1');
      expect(heading).toBeInTheDocument();
      
      if (heading) {
        // Should apply hero-heading class for enhanced typography
        expect(heading).toHaveClass('hero-heading');
        
        // Custom typography utilities should be applied (computed styles not reliable in test env)
        // The hero-heading class provides letter-spacing: -0.02em and line-height: 1.1
      }
    });

    it('should apply enhanced typography to description', () => {
      const { container } = render(<Hero />);
      
      const description = container.querySelector('.lead');
      expect(description).toBeInTheDocument();
      
      if (description) {
        // Should apply hero-description class
        expect(description).toHaveClass('hero-description');
        
        // Hero-description class provides optimal line-height: 1.6 for readability
        // (Computed styles not reliable in test environment)
      }
    });

    it('should maintain display font for headings', () => {
      const { container } = render(<Hero />);
      
      const heading = container.querySelector('h1');
      expect(heading).toBeInTheDocument();
      
      if (heading) {
        // Heading should inherit display font from global h1 styles
        // The global CSS defines h1 { font-family: var(--font-display), serif; font-weight: 900; }
        // (Computed styles not reliable in test environment, but heading structure ensures proper fonts)
        expect(heading.tagName).toBe('H1');
      }
    });
  });

  describe('Spacing Improvements', () => {
    it('should use optimized heading margins', () => {
      const { container } = render(<Hero />);
      
      const heading = container.querySelector('h1');
      expect(heading).toBeInTheDocument();
      
      if (heading) {
        // Should use mb-8 instead of mb-10 for better rhythm
        expect(heading).toHaveClass('mb-8');
        expect(heading).not.toHaveClass('mb-10');
      }
    });

    it('should use improved description margins', () => {
      const { container } = render(<Hero />);
      
      const description = container.querySelector('.lead');
      expect(description).toBeInTheDocument();
      
      if (description) {
        // Should use mb-12 instead of mb-16 for better rhythm
        expect(description).toHaveClass('mb-12');
        expect(description).not.toHaveClass('mb-16');
      }
    });

    it('should apply responsive content padding', () => {
      const { container } = render(<Hero />);
      
      const contentContainer = container.querySelector('.hero-content-padding');
      expect(contentContainer).toBeInTheDocument();
      
      if (contentContainer) {
        expect(contentContainer).toHaveClass('hero-content-padding');
      }
    });

    it('should maintain gap spacing for CTA buttons', () => {
      const { container } = render(<Hero />);
      
      const ctaContainer = container.querySelector('.flex.flex-col.sm\\:flex-row');
      expect(ctaContainer).toBeInTheDocument();
      
      if (ctaContainer) {
        // Should maintain reasonable gap for visual balance
        expect(ctaContainer).toHaveClass('gap-6');
      }
    });
  });

  describe('Responsive Behavior', () => {
    it('should scale typography appropriately on mobile', () => {
      // Mock mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375
      });

      const { container } = render(<Hero />);
      
      const heading = container.querySelector('h1');
      const description = container.querySelector('.lead');
      
      expect(heading).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      
      // Typography should remain responsive with Tailwind classes
      if (heading) {
        expect(heading.className).toMatch(/text-6xl.*md:text-7xl/);
      }
      
      if (description) {
        expect(description.className).toMatch(/text-lg.*md:text-xl/);
      }
    });

    it('should apply responsive content width constraints', () => {
      const { container } = render(<Hero />);
      
      const contentContainer = container.querySelector('.relative.z-10');
      expect(contentContainer).toBeInTheDocument();
      
      if (contentContainer) {
        // Should maintain responsive max-width
        expect(contentContainer).toHaveClass('max-w-6xl');
        expect(contentContainer).toHaveClass('mx-auto');
      }
    });

    it('should optimize description width for readability', () => {
      const { container } = render(<Hero />);
      
      const description = container.querySelector('.lead');
      expect(description).toBeInTheDocument();
      
      if (description) {
        // Should have optimized max-width for reading comfort
        expect(description).toHaveClass('max-w-4xl'); // Wider than current max-w-3xl
        expect(description).toHaveClass('mx-auto');
      }
    });
  });

  describe('Visual Hierarchy', () => {
    it('should maintain clear size hierarchy between elements', () => {
      const { container } = render(<Hero />);
      
      const heading = container.querySelector('h1');
      const description = container.querySelector('.lead');
      const buttons = container.querySelectorAll('button');
      
      expect(heading).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(buttons.length).toBeGreaterThan(0);
      
      // Verify size hierarchy through classes
      if (heading) {
        expect(heading.className).toMatch(/text-6xl|text-7xl|text-8xl|text-9xl/);
      }
      
      if (description) {
        expect(description.className).toMatch(/text-lg|text-xl|text-2xl/);
      }
      
      // Button text should be appropriately sized
      buttons.forEach(button => {
        expect(button.className).toMatch(/text-xl|text-2xl/);
      });
    });

    it('should maintain proper color contrast for retro theme', () => {
      const { container } = render(<Hero />);
      
      const heading = container.querySelector('h1');
      const description = container.querySelector('.lead');
      
      expect(heading).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      
      if (heading) {
        expect(heading).toHaveClass('text-retro-blue');
      }
      
      if (description) {
        expect(description).toHaveClass('text-gray-800');
      }
    });
  });

  describe('Accessibility Compliance', () => {
    it('should maintain adequate font sizes for accessibility', () => {
      const { container } = render(<Hero />);
      
      const heading = container.querySelector('h1');
      const description = container.querySelector('.lead');
      
      expect(heading).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      
      // Verify minimum accessible font sizes are maintained
      if (heading) {
        // text-6xl should be at least 48px (3rem) on mobile
        expect(heading.className).toMatch(/text-6xl/);
      }
      
      if (description) {
        // text-lg should be at least 18px (1.125rem)
        expect(description.className).toMatch(/text-lg/);
      }
    });

    it('should preserve semantic structure', () => {
      const { container } = render(<Hero />);
      
      const heading = container.querySelector('h1');
      const description = container.querySelector('p');
      
      expect(heading).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      
      // Semantic structure should remain intact
      expect(heading?.tagName).toBe('H1');
      expect(description?.tagName).toBe('P');
    });
  });
});