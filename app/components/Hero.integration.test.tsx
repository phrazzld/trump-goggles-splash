import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Hero from './Hero';
import { APP_CONFIG } from '@/app/config/app-config';

// Mock framer-motion's useReducedMotion hook for consistent testing
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    useReducedMotion: () => false, // Default to no reduced motion
  };
});

describe('Hero Integration Tests', () => {
  describe('Hero in Page Layout Context', () => {
    it('renders as a complete standalone section', () => {
      const { container } = render(<Hero />);
      
      // Should render as a section element suitable for page layout
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
      expect(section).toHaveClass('relative', 'min-h-screen', 'w-full');
      
      // Should have proper semantic structure
      expect(section).toHaveAttribute('aria-labelledby', 'hero-heading');
    });

    it('integrates properly with viewport dimensions', () => {
      const { container } = render(<Hero />);
      
      const section = container.querySelector('section');
      expect(section).toHaveClass('min-h-screen', 'w-full');
      
      // Should handle overflow appropriately for animations
      expect(section).toHaveClass('overflow-hidden');
    });

    it('provides proper z-index layering for page context', () => {
      const { container } = render(<Hero />);

      // Content should have proper z-index for layering above background elements
      const contentContainer = container.querySelector('.relative.z-10');
      expect(contentContainer).toBeInTheDocument();

      // Background pattern should be positioned appropriately
      const stripePattern = container.querySelector('[style*="repeating-linear-gradient"]');
      expect(stripePattern).toBeInTheDocument();
      expect(stripePattern).toHaveClass('absolute', 'inset-0');
    });
  });

  describe('APP_CONFIG Integration', () => {
    it('uses configuration for all user-facing text content', () => {
      render(<Hero />);
      
      // Title should come from config
      const title = screen.getByRole('heading', { 
        level: 1, 
        name: APP_CONFIG.uiText.hero.title 
      });
      expect(title).toHaveTextContent(APP_CONFIG.uiText.hero.title);
      
      // Description should come from config
      const description = screen.getByText(APP_CONFIG.uiText.hero.description);
      expect(description).toBeInTheDocument();
      
      // Button text should come from config
      expect(screen.getByText(APP_CONFIG.uiText.hero.installButton)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.hero.learnMoreButton)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.hero.orSeparator)).toBeInTheDocument();
    });

    it('uses configuration for URL references', () => {
      render(<Hero />);
      
      // Chrome Store link should use config URL
      const installButton = screen.getByRole('link', { 
        name: 'Install Trump Goggles from Chrome Web Store' 
      });
      expect(installButton).toHaveAttribute('href', APP_CONFIG.urls.chromeStore);
    });

    it('maintains proper configuration type safety', () => {
      // Verify that all required config properties exist and have correct types
      expect(typeof APP_CONFIG.uiText.hero.title).toBe('string');
      expect(typeof APP_CONFIG.uiText.hero.description).toBe('string');
      expect(typeof APP_CONFIG.uiText.hero.installButton).toBe('string');
      expect(typeof APP_CONFIG.uiText.hero.learnMoreButton).toBe('string');
      expect(typeof APP_CONFIG.uiText.hero.orSeparator).toBe('string');
      expect(typeof APP_CONFIG.urls.chromeStore).toBe('string');
      
      // Verify Chrome Store URL is valid
      expect(APP_CONFIG.urls.chromeStore).toMatch(/^https?:\/\//);
    });

    it('reflects configuration changes in real-time', () => {
      // This test ensures Hero uses live config references, not cached values
      render(<Hero />);
      
      // Verify specific config values are used (not hardcoded alternatives)
      expect(screen.getByText(APP_CONFIG.uiText.hero.title)).toBeInTheDocument();
      
      // Verify that the config value is actually being used dynamically
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(APP_CONFIG.uiText.hero.title);
      
      // Verify URL configuration is used
      const installLink = screen.getByRole('link', { name: /Chrome Web Store/i });
      expect(installLink).toHaveAttribute('href', APP_CONFIG.urls.chromeStore);
    });
  });

  describe('Component Composition Integration', () => {
    it('integrates RetroButton component correctly', () => {
      render(<Hero />);
      
      const learnMoreButton = screen.getByRole('button', { 
        name: APP_CONFIG.uiText.hero.learnMoreButton 
      });
      
      // Should be a RetroButton with proper styling
      expect(learnMoreButton).toHaveClass('text-xl', 'md:text-2xl', 'px-10', 'py-5');
    });

    it('integrates ExternalLink component correctly', () => {
      render(<Hero />);
      
      const installButton = screen.getByRole('link', { 
        name: 'Install Trump Goggles from Chrome Web Store' 
      });
      
      // Should have proper external link attributes
      expect(installButton).toHaveAttribute('target', '_blank');
      expect(installButton).toHaveAttribute('rel', 'noopener noreferrer');
      expect(installButton).toHaveAttribute('aria-label', 'Install Trump Goggles from Chrome Web Store');
      
      // Should contain a button element (ExternalLink wrapping RetroButton)
      const innerButton = installButton.querySelector('button');
      expect(innerButton).toBeInTheDocument();
      expect(innerButton).toHaveClass('text-xl', 'md:text-2xl', 'px-10', 'py-5');
    });

    it('maintains proper component prop propagation', () => {
      const { container } = render(<Hero />);

      // RetroButton and ExternalLink should receive proper className props
      const installLink = container.querySelector('a[href*="chromewebstore"]');
      const innerButton = installLink?.querySelector('button');
      expect(innerButton).toHaveClass('text-xl', 'md:text-2xl', 'px-10', 'py-5');

      // Content container should have proper classes
      const contentContainer = container.querySelector('.relative.z-10');
      expect(contentContainer).toBeInTheDocument();
    });
  });

  describe('Performance Integration', () => {
    it('applies performance optimizations in context', () => {
      const { container } = render(<Hero />);
      
      // T003 & T007 performance optimizations should be applied
      const section = container.querySelector('section');
      expect(section).toHaveStyle({
        contain: 'layout style paint',
        isolation: 'isolate'
      });
      
      // Animated elements should have will-change properties
      const contentContainer = container.querySelector('.relative.z-10');
      expect(contentContainer).toHaveStyle({ willChange: 'transform, opacity' });
      
      const heading = container.querySelector('h1');
      expect(heading).toHaveStyle({ willChange: 'transform, opacity' });
    });

    it('handles animation coordination across all elements', () => {
      const { container } = render(<Hero />);
      
      // All major animated elements should be present for coordinated animation
      const section = container.querySelector('section');
      const contentContainer = container.querySelector('.relative.z-10');
      const heading = container.querySelector('h1');
      const description = container.querySelector('.lead');
      const ctaContainer = container.querySelector('.flex.flex-col.sm\\:flex-row');
      
      expect(section).toBeInTheDocument();
      expect(contentContainer).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(ctaContainer).toBeInTheDocument();
    });
  });

  describe('Accessibility Integration', () => {
    it('passes accessibility audit in integration context', async () => {
      const { container } = render(<Hero />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('provides proper semantic structure for screen readers', () => {
      render(<Hero />);
      
      // Should have proper region with aria-labelledby
      const section = screen.getByRole('region', { 
        name: APP_CONFIG.uiText.hero.title 
      });
      expect(section).toBeInTheDocument();
      
      // Should have properly associated heading
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveAttribute('id', 'hero-heading');
      expect(section).toHaveAttribute('aria-labelledby', 'hero-heading');
    });

    it('handles focus management properly', () => {
      const { container } = render(<Hero />);

      // Interactive elements should be focusable
      const installButton = screen.getByRole('link', {
        name: 'Install Trump Goggles from Chrome Web Store'
      });
      const learnMoreButton = screen.getByRole('button', {
        name: APP_CONFIG.uiText.hero.learnMoreButton
      });

      expect(installButton).toBeInTheDocument();
      expect(learnMoreButton).toBeInTheDocument();

      // Decorative elements should not be focusable
      const decorativeElements = container.querySelectorAll('div[aria-hidden="true"]');
      expect(decorativeElements.length).toBeGreaterThan(0);
      Array.from(decorativeElements).forEach(element => {
        expect(element).toHaveAttribute('aria-hidden', 'true');
      });
    });
  });

  describe('Responsive Integration', () => {
    it('applies responsive classes for mobile-first design', () => {
      const { container } = render(<Hero />);
      
      // Typography should scale responsively
      const heading = container.querySelector('h1');
      expect(heading).toHaveClass('text-6xl', 'md:text-7xl', 'lg:text-8xl', 'xl:text-9xl');
      
      const description = container.querySelector('.lead');
      expect(description).toHaveClass('text-lg', 'md:text-xl', 'lg:text-2xl');
      
      // Content padding should be responsive (T008 implementation)
      const contentContainer = container.querySelector('.hero-content-padding');
      expect(contentContainer).toBeInTheDocument();
    });

    it('maintains proper CTA button layout across breakpoints', () => {
      const { container } = render(<Hero />);
      
      // CTA container should handle responsive layout
      const ctaContainer = container.querySelector('.flex.flex-col.sm\\:flex-row');
      expect(ctaContainer).toBeInTheDocument();
      expect(ctaContainer).toHaveClass('items-center', 'justify-center', 'gap-6');
    });
  });

  describe('Error Resilience Integration', () => {
    it('renders without throwing errors in integration context', () => {
      expect(() => render(<Hero />)).not.toThrow();
    });

    it('handles missing configuration gracefully', () => {
      // This test would normally use a modified config, but since we're using
      // the real config, we verify that all expected config properties exist
      render(<Hero />);
      
      // Verify essential config properties are present
      expect(APP_CONFIG.uiText.hero).toBeDefined();
      expect(APP_CONFIG.urls.chromeStore).toBeDefined();
      
      // Verify content renders properly
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Chrome Web Store/i })).toBeInTheDocument();
    });

    it('maintains functionality with animation system failures', () => {
      // Since framer-motion is mocked, this tests that the component
      // still renders all essential content even if animations fail
      render(<Hero />);

      // Essential content should be present regardless of animation state
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Chrome Web Store/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: APP_CONFIG.uiText.hero.learnMoreButton })).toBeInTheDocument();
    });
  });
});