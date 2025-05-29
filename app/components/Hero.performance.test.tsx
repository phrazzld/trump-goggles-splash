import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Performance Optimizations', () => {
  beforeEach(() => {
    // Reset any performance marks before each test
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.clearMarks();
      window.performance.clearMeasures();
    }
  });

  afterEach(() => {
    cleanup();
  });

  describe('Background Pattern Optimization', () => {
    it('should not render redundant texture overlays', () => {
      const { container } = render(<Hero />);
      
      // Should only have one texture pattern element at most
      const textureElements = container.querySelectorAll('.texture-paper');
      expect(textureElements.length).toBeLessThanOrEqual(1);
    });

    it('should use CSS containment for performance', () => {
      const { container } = render(<Hero />);
      
      const heroSection = container.querySelector('section');
      expect(heroSection).toBeInTheDocument();
      
      if (heroSection) {
        const styles = window.getComputedStyle(heroSection);
        // Should apply contain property for performance
        expect(styles.contain).toMatch(/layout|style|paint/);
      }
    });

    it('should optimize will-change usage', () => {
      const { container } = render(<Hero />);
      
      // Check that will-change is not overused
      const elementsWithWillChange = container.querySelectorAll('[style*="will-change"]');
      
      // Should only apply will-change to actively animating elements
      elementsWithWillChange.forEach(element => {
        const willChangeValue = (element as HTMLElement).style.willChange;
        // Should use specific values, not 'auto' during animation
        expect(willChangeValue).not.toBe('');
        expect(willChangeValue).toMatch(/transform|opacity/);
      });
    });

    it('should create isolated stacking context', () => {
      const { container } = render(<Hero />);
      
      const heroSection = container.querySelector('section');
      expect(heroSection).toBeInTheDocument();
      
      if (heroSection) {
        const styles = window.getComputedStyle(heroSection);
        // Should isolate the hero section for better performance
        expect(styles.isolation).toBe('isolate');
      }
    });
  });

  describe('Pattern Complexity', () => {
    it('should use optimized gradient patterns', () => {
      const { container } = render(<Hero />);
      
      // Check for optimized stripe pattern
      const stripePattern = container.querySelector('[data-testid="stripe-pattern"]');
      if (stripePattern) {
        const styles = window.getComputedStyle(stripePattern);
        // Should not have overly complex gradients
        const backgroundImage = styles.backgroundImage;
        const gradientStops = (backgroundImage.match(/,/g) || []).length;
        // Optimized gradient should have fewer stops
        expect(gradientStops).toBeLessThan(10);
      }
    });

    it('should not have multiple overlapping texture layers', () => {
      const { container } = render(<Hero />);
      
      // Count all decorative background layers
      const backgroundLayers = container.querySelectorAll(
        '.texture-paper, [class*="pattern"], [style*="background-image"]'
      );
      
      // Should have consolidated layers
      expect(backgroundLayers.length).toBeLessThanOrEqual(3);
    });
  });

  describe('Mobile Optimization', () => {
    it('should simplify patterns on mobile viewports', () => {
      // Mock mobile viewport
      const originalInnerWidth = window.innerWidth;
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375
      });

      const { container } = render(<Hero />);
      
      // On mobile, decorative elements should be simplified
      const decorativeElements = container.querySelectorAll(
        '[data-decorative="true"]'
      );
      
      // Filter out hidden elements on mobile
      const visibleDecorative = Array.from(decorativeElements).filter(
        el => !el.classList.contains('hidden')
      );
      
      // Should have fewer visible decorative elements on mobile
      expect(visibleDecorative.length).toBeLessThanOrEqual(5);

      // Restore original width
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: originalInnerWidth
      });
    });
  });

  describe('Visual Hierarchy Preservation', () => {
    it('should maintain all essential visual elements', () => {
      const { container } = render(<Hero />);
      
      // Essential elements that must be preserved
      const essentialElements = {
        borderFrame: container.querySelector('.border-frame-responsive'),
        heading: container.querySelector('h1'),
        description: container.querySelector('.lead'),
        primaryCTA: container.querySelector('[href*="chromewebstore"]'),
        stars: container.querySelectorAll('.lucide-star')
      };

      // All essential elements should be present
      expect(essentialElements.borderFrame).toBeInTheDocument();
      expect(essentialElements.heading).toBeInTheDocument();
      expect(essentialElements.description).toBeInTheDocument();
      expect(essentialElements.primaryCTA).toBeInTheDocument();
      expect(essentialElements.stars.length).toBeGreaterThan(0);
    });

    it('should preserve retro Americana color scheme', () => {
      const { container } = render(<Hero />);
      
      const heroSection = container.querySelector('section');
      expect(heroSection).toBeInTheDocument();
      
      if (heroSection) {
        const styles = window.getComputedStyle(heroSection);
        // Should maintain the retro cream background
        const backgroundColor = styles.backgroundColor;
        // Background should be transparent (inheriting cream from body)
        expect(backgroundColor).toMatch(/transparent|rgba\(0,?\s*0,?\s*0,?\s*0\)/);
      }
    });
  });
});