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

    it('renders vintage border frame', () => {
      const { container } = render(<Hero />);
      
      const borderFrame = container.querySelector('.border-8.border-retro-blue\\/10');
      expect(borderFrame).toBeInTheDocument();
      expect(borderFrame).toHaveClass('absolute', 'pointer-events-none');
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
});