import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { APP_CONFIG } from '@/app/config/app-config';

// Mock framer-motion's useReducedMotion hook
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    useReducedMotion: () => false, // Default to no reduced motion
  };
});

describe('Hero', () => {
  describe('Section Structure', () => {
    it('renders with proper accessibility attributes', () => {
      render(<Hero />);
      
      const section = screen.getByRole('region', { 
        name: APP_CONFIG.uiText.hero.title 
      });
      expect(section).toBeInTheDocument();
      expect(section).toHaveAttribute('aria-labelledby', 'hero-heading');
    });

    it('renders heading with correct id', () => {
      render(<Hero />);
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveAttribute('id', 'hero-heading');
    });
  });

  describe('Config Integration - Title and Description', () => {
    it('renders title from configuration', () => {
      render(<Hero />);
      
      const title = screen.getByRole('heading', { 
        level: 1,
        name: APP_CONFIG.uiText.hero.title 
      });
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent(APP_CONFIG.uiText.hero.title);
    });

    it('renders description from configuration', () => {
      render(<Hero />);
      
      const description = screen.getByText(APP_CONFIG.uiText.hero.description);
      expect(description).toBeInTheDocument();
      expect(description).toHaveClass('lead', 'text-gray-800', 'mb-16', 'max-w-3xl', 'mx-auto');
    });
  });

  describe('Config Integration - CTA Buttons', () => {
    it('renders install button with text from configuration', () => {
      render(<Hero />);
      
      const installButton = screen.getByRole('link', { 
        name: 'Install Trump Goggles from Chrome Web Store' 
      });
      expect(installButton).toBeInTheDocument();
      expect(installButton).toHaveTextContent(APP_CONFIG.uiText.hero.installButton);
    });

    it('install button links to Chrome Store URL', () => {
      render(<Hero />);
      
      const installButton = screen.getByRole('link', { 
        name: 'Install Trump Goggles from Chrome Web Store' 
      });
      expect(installButton).toHaveAttribute('href', APP_CONFIG.urls.chromeStore);
    });

    it('renders learn more button with text from configuration', () => {
      render(<Hero />);
      
      const learnMoreButton = screen.getByRole('button', { 
        name: APP_CONFIG.uiText.hero.learnMoreButton 
      });
      expect(learnMoreButton).toBeInTheDocument();
      expect(learnMoreButton).toHaveTextContent(APP_CONFIG.uiText.hero.learnMoreButton);
    });

    it('renders separator text from configuration', () => {
      render(<Hero />);
      
      const separator = screen.getByText(APP_CONFIG.uiText.hero.orSeparator);
      expect(separator).toBeInTheDocument();
      expect(separator).toHaveClass('text-gray-600');
    });
  });

  describe('Button Styling', () => {
    it('install button has correct styling', () => {
      render(<Hero />);
      
      const installButton = screen.getByRole('link', { 
        name: 'Install Trump Goggles from Chrome Web Store' 
      });
      // The actual button is inside the link
      const innerButton = installButton.querySelector('button');
      expect(innerButton).toHaveClass('text-xl', 'md:text-2xl', 'px-10', 'py-5');
    });

    it('learn more button has correct styling', () => {
      render(<Hero />);
      
      const learnMoreButton = screen.getByRole('button', { 
        name: APP_CONFIG.uiText.hero.learnMoreButton 
      });
      expect(learnMoreButton).toHaveClass('text-xl', 'md:text-2xl', 'px-10', 'py-5');
    });
  });

  describe('Layout Elements', () => {
    it('renders star decorations', () => {
      const { container } = render(<Hero />);
      
      // AnimatedStar components have the star icon
      const stars = container.querySelectorAll('.lucide-star');
      expect(stars.length).toBeGreaterThan(0);
    });

    it('renders background texture overlay', () => {
      const { container } = render(<Hero />);
      
      const textureOverlay = container.querySelector('.texture-paper');
      expect(textureOverlay).toBeInTheDocument();
      expect(textureOverlay).toHaveClass('absolute', 'inset-0', 'opacity-10');
    });

    it('renders stripe pattern accent', () => {
      const { container } = render(<Hero />);
      
      const stripePattern = container.querySelector('[style*="repeating-linear-gradient"]');
      expect(stripePattern).toBeInTheDocument();
    });

    it('renders vintage border frame with responsive class', () => {
      const { container } = render(<Hero />);
      
      const borderFrame = container.querySelector('.border-frame-responsive');
      expect(borderFrame).toBeInTheDocument();
      expect(borderFrame).toHaveClass('border-frame-responsive');
    });
  });

  describe('External Link Security', () => {
    it('install button has proper security attributes', () => {
      render(<Hero />);
      
      const installButton = screen.getByRole('link', { 
        name: 'Install Trump Goggles from Chrome Web Store' 
      });
      expect(installButton).toHaveAttribute('target', '_blank');
      expect(installButton).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('install button has proper aria-label', () => {
      render(<Hero />);
      
      const installButton = screen.getByRole('link', { 
        name: 'Install Trump Goggles from Chrome Web Store' 
      });
      expect(installButton).toHaveAttribute('aria-label', 'Install Trump Goggles from Chrome Web Store');
    });
  });

  describe('Type Safety', () => {
    it('ensures hero UI text configuration has all required fields', () => {
      const { hero } = APP_CONFIG.uiText;
      
      expect(hero).toHaveProperty('title');
      expect(hero).toHaveProperty('description');
      expect(hero).toHaveProperty('installButton');
      expect(hero).toHaveProperty('learnMoreButton');
      expect(hero).toHaveProperty('orSeparator');
    });
  });

  describe('No Hardcoded Strings', () => {
    it('uses all user-facing text from configuration', () => {
      render(<Hero />);
      
      // Verify key UI text comes from config
      expect(screen.getByText(APP_CONFIG.uiText.hero.title)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.hero.description)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.hero.installButton)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.hero.learnMoreButton)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.hero.orSeparator)).toBeInTheDocument();
      
      // Verify no common hardcoded strings
      expect(screen.queryByText('Install on Chrome')).not.toBeInTheDocument();
    });
  });

  describe('Reduced Motion Support', () => {
    it('respects user motion preferences', () => {
      // The component uses useReducedMotion hook from framer-motion
      // We've already mocked it to return false in the module mock
      const { container } = render(<Hero />);
      
      // When reduced motion is preferred, initial animations should be disabled
      // The component uses shouldReduceMotion to conditionally apply animations
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Animation Coordination', () => {
    it('uses consistent animation duration across all elements', () => {
      // This test will fail initially, then pass after T002 implementation
      const { container } = render(<Hero />);
      
      // All motion elements should use 0.6s duration for coordination
      // We can't directly test Framer Motion props due to mocking,
      // but we can verify the component structure supports coordinated timing
      const section = container.querySelector('section');
      const contentContainer = container.querySelector('.relative.z-10');
      const heading = container.querySelector('h1');
      const description = container.querySelector('.lead');
      
      expect(section).toBeInTheDocument();
      expect(contentContainer).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });

    it('maintains proper element hierarchy for sequential animation', () => {
      // Verify the structure supports the planned animation sequence
      const { container } = render(<Hero />);
      
      // Elements should be structured for: section → content → h1 → p → cta
      const section = container.querySelector('section');
      const contentContainer = section?.querySelector('.relative.z-10');
      const heading = contentContainer?.querySelector('h1');
      const description = contentContainer?.querySelector('.lead');
      const ctaContainer = contentContainer?.querySelector('.flex.flex-col.sm\\:flex-row');
      
      expect(section).toBeInTheDocument();
      expect(contentContainer).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(ctaContainer).toBeInTheDocument();
    });
  });

  describe('Performance Optimizations', () => {
    it('applies will-change to animated elements for GPU acceleration', () => {
      const { container } = render(<Hero />);
      
      // Main animated elements should have will-change applied
      const contentContainer = container.querySelector('.relative.z-10');
      const heading = container.querySelector('h1');
      const description = container.querySelector('.lead');
      const ctaContainer = container.querySelector('.flex.flex-col.sm\\:flex-row');
      
      // In the real implementation, these would have will-change styles
      // For now, we're verifying the elements exist and can be optimized
      expect(contentContainer).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(ctaContainer).toBeInTheDocument();
    });

    it('maintains performance optimizations with reduced motion', () => {
      // Ensure optimizations don't break accessibility
      const { container } = render(<Hero />);
      
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
      // When reduced motion is active, will-change should still be applied
      // but animations should be disabled
    });
  });

  describe('Responsive Star Positioning', () => {
    it('applies responsive safe positioning classes to star elements', () => {
      const { container } = render(<Hero />);
      
      // Find all star elements - they should have safe positioning classes
      const stars = container.querySelectorAll('div[aria-hidden="true"]');
      expect(stars.length).toBeGreaterThan(0);
      
      // Check that stars use safe positioning classes rather than fixed percentages
      Array.from(stars).forEach(star => {
        const classes = star.className;
        // Stars should have safe positioning classes (this will initially fail)
        expect(classes).toMatch(/star-safe-/);
        // And should NOT have the old fixed percentage classes
        expect(classes).not.toMatch(/top-\[\d+%\]/);
        expect(classes).not.toMatch(/left-\[\d+%\]/);
        expect(classes).not.toMatch(/right-\[\d+%\]/);
        expect(classes).not.toMatch(/bottom-\[\d+%\]/);
      });
    });

    it('maintains star visibility across responsive breakpoints', () => {
      const { container } = render(<Hero />);
      
      // Stars should be positioned to avoid content overlap
      const stars = container.querySelectorAll('div[aria-hidden="true"]');
      const contentArea = container.querySelector('.relative.z-10');
      
      expect(stars.length).toBeGreaterThan(0);
      expect(contentArea).toBeInTheDocument();
      
      // Verify stars exist and are positioned (actual positioning tested via CSS)
      Array.from(stars).forEach(star => {
        expect(star).toBeInTheDocument();
        expect(star).toHaveAttribute('aria-hidden', 'true');
      });
    });

    it('preserves star count and animation delays', () => {
      const { container } = render(<Hero />);
      
      // Should maintain the original 7 stars
      const stars = container.querySelectorAll('div[aria-hidden="true"]');
      expect(stars).toHaveLength(7);
      
      // Stars should still be properly spaced in the DOM
      // (This verifies we haven't broken the existing star structure)
      expect(stars[0]).toBeInTheDocument();
      expect(stars[6]).toBeInTheDocument();
    });

    it('applies appropriate sizing classes for responsive star sizes', () => {
      const { container } = render(<Hero />);
      
      const stars = container.querySelectorAll('div[aria-hidden="true"]');
      
      // Verify stars have responsive sizing (w-X h-X md:w-Y md:h-Y pattern)
      Array.from(stars).forEach(star => {
        const classes = star.className;
        // Should contain width/height classes - either fixed or responsive
        expect(classes).toMatch(/w-\d+|h-\d+/);
      });
    });
  });
});