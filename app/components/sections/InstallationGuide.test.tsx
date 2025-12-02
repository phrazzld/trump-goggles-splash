import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import InstallationGuide from './InstallationGuide';
import { APP_CONFIG } from '@/app/config/app-config';

describe('InstallationGuide', () => {
  describe('Section Structure', () => {
    it('renders with proper accessibility attributes', () => {
      const { container } = render(<InstallationGuide />);
      const section = container.querySelector('section');

      expect(section).toHaveAttribute('aria-labelledby', 'installation-guide-heading');

      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toHaveAttribute('id', 'installation-guide-heading');
    });

    it('renders with bold red background', () => {
      const { container } = render(<InstallationGuide />);
      const section = container.querySelector('section');

      expect(section).toHaveClass('bg-retro-red');
    });
  });

  describe('Headline', () => {
    it('renders attention-grabbing headline', () => {
      render(<InstallationGuide />);

      const title = screen.getByRole('heading', {
        level: 2,
        name: 'Ready to See the Web Differently?'
      });
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass('text-retro-cream');
    });
  });

  describe('Config Integration - CTA Button', () => {
    it('renders CTA button with text from configuration', () => {
      render(<InstallationGuide />);

      const button = screen.getByRole('link', {
        name: 'Install Trump Goggles from Chrome Web Store'
      });
      expect(button).toBeInTheDocument();
      // The button text is in a child button element
      expect(button).toHaveTextContent(APP_CONFIG.uiText.installationGuide.ctaButtonText);
    });

    it('links to Chrome Store URL from configuration', () => {
      render(<InstallationGuide />);

      const button = screen.getByRole('link', {
        name: /Install Trump Goggles from Chrome Web Store/i
      });
      expect(button).toHaveAttribute('href', APP_CONFIG.urls.chromeStore);
    });

    it('button has correct styling for red section', () => {
      render(<InstallationGuide />);

      const button = screen.getByRole('link', {
        name: /Install Trump Goggles from Chrome Web Store/i
      });
      // ExternalLink component wraps the button, so check the inner button element
      const innerButton = button.querySelector('button');
      expect(innerButton).toHaveClass('text-xl', 'md:text-2xl', 'bg-retro-cream', 'text-retro-red');
    });
  });

  describe('Simple Steps', () => {
    it('renders inline step indicators', () => {
      render(<InstallationGuide />);

      expect(screen.getByText('1. Click Install')).toBeInTheDocument();
      expect(screen.getByText('2. Add to Chrome')).toBeInTheDocument();
      expect(screen.getByText('3. Enjoy!')).toBeInTheDocument();
    });
  });

  describe('Config Integration - GitHub Link', () => {
    it('renders GitHub link with text from configuration', () => {
      render(<InstallationGuide />);

      const link = screen.getByRole('link', {
        name: 'View Trump Goggles source code on GitHub'
      });
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(APP_CONFIG.uiText.installationGuide.githubLinkText);
    });

    it('GitHub link points to correct URL from configuration', () => {
      render(<InstallationGuide />);

      const link = screen.getByRole('link', {
        name: /View Trump Goggles source code on GitHub/i
      });
      expect(link).toHaveAttribute('href', APP_CONFIG.urls.githubRepo);
    });

    it('GitHub link has subtle styling for red background', () => {
      render(<InstallationGuide />);

      const link = screen.getByRole('link', {
        name: /View Trump Goggles source code on GitHub/i
      });
      expect(link).toHaveClass('text-retro-cream/70', 'hover:text-retro-cream');
    });
  });

  describe('Config Integration - Browser Compatibility', () => {
    it('renders browser compatibility note from configuration', () => {
      render(<InstallationGuide />);

      const note = screen.getByText(APP_CONFIG.uiText.installationGuide.browserCompatibilityNote);
      expect(note).toBeInTheDocument();
    });

    it('compatibility note has subtle styling', () => {
      render(<InstallationGuide />);

      const note = screen.getByText(APP_CONFIG.uiText.installationGuide.browserCompatibilityNote);
      expect(note).toHaveClass('text-sm', 'text-retro-cream/50');
    });
  });

  describe('External Links', () => {
    it('all external links have proper security attributes', () => {
      render(<InstallationGuide />);

      const externalLinks = screen.getAllByRole('link');
      externalLinks.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });

    it('all external links have proper aria-labels', () => {
      render(<InstallationGuide />);

      const chromeLink = screen.getByRole('link', {
        name: /Install Trump Goggles from Chrome Web Store/i
      });
      expect(chromeLink).toHaveAttribute('aria-label', 'Install Trump Goggles from Chrome Web Store');

      const githubLink = screen.getByRole('link', {
        name: /View Trump Goggles source code on GitHub/i
      });
      expect(githubLink).toHaveAttribute('aria-label', 'View Trump Goggles source code on GitHub');
    });
  });

  describe('Type Safety', () => {
    it('ensures UI text configuration has all required fields', () => {
      const { installationGuide } = APP_CONFIG.uiText;

      expect(installationGuide).toHaveProperty('title');
      expect(installationGuide).toHaveProperty('subtitle');
      expect(installationGuide).toHaveProperty('ctaButtonText');
      expect(installationGuide).toHaveProperty('githubSectionText');
      expect(installationGuide).toHaveProperty('githubLinkText');
      expect(installationGuide).toHaveProperty('browserCompatibilityNote');
    });
  });

  describe('No Hardcoded Strings', () => {
    it('uses configurable text from configuration where applicable', () => {
      render(<InstallationGuide />);

      // CTA button text from config
      expect(screen.getByText(APP_CONFIG.uiText.installationGuide.ctaButtonText)).toBeInTheDocument();
      // GitHub link text from config
      expect(screen.getByText(APP_CONFIG.uiText.installationGuide.githubLinkText)).toBeInTheDocument();
      // Browser compatibility from config
      expect(screen.getByText(APP_CONFIG.uiText.installationGuide.browserCompatibilityNote)).toBeInTheDocument();

      // Note: Headline and step indicators are intentionally hardcoded for design cohesion
    });
  });
});
