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
  });

  describe('Config Integration - Title and Subtitle', () => {
    it('renders title from configuration', () => {
      render(<InstallationGuide />);
      
      const title = screen.getByRole('heading', { 
        level: 2,
        name: APP_CONFIG.uiText.installationGuide.title 
      });
      expect(title).toBeInTheDocument();
    });

    it('renders subtitle from configuration', () => {
      render(<InstallationGuide />);
      
      const subtitle = screen.getByText(APP_CONFIG.uiText.installationGuide.subtitle);
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveClass('text-lg', 'md:text-xl', 'text-center');
    });
  });

  describe('Installation Steps', () => {
    it('renders all 4 installation steps', () => {
      render(<InstallationGuide />);
      
      // These steps are hardcoded in the component, not from config
      const expectedSteps = [
        { title: "Visit Chrome Web Store", description: "Click the button below to go to the Trump Goggles extension page" },
        { title: "Add to Chrome", description: "Click the \"Add to Chrome\" button on the extension page" },
        { title: "Confirm Installation", description: "Click \"Add extension\" when Chrome asks for confirmation" },
        { title: "Start Browsing!", description: "Trump Goggles is now active - watch the web transform!" }
      ];
      
      expectedSteps.forEach((step, index) => {
        expect(screen.getByText(step.title)).toBeInTheDocument();
        expect(screen.getByText(step.description)).toBeInTheDocument();
        expect(screen.getByText(String(index + 1))).toBeInTheDocument();
      });
    });

    it('renders step numbers with correct styling', () => {
      render(<InstallationGuide />);
      
      ['1', '2', '3', '4'].forEach(num => {
        const stepNumber = screen.getByText(num);
        expect(stepNumber).toHaveClass(
          'flex-shrink-0', 
          'w-12', 
          'h-12', 
          'bg-retro-blue', 
          'text-retro-cream',
          'rounded-full',
          'flex',
          'items-center',
          'justify-center',
          'font-black',
          'text-xl'
        );
      });
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

    it('button has correct styling', () => {
      render(<InstallationGuide />);
      
      const button = screen.getByRole('link', { 
        name: /Install Trump Goggles from Chrome Web Store/i 
      });
      // ExternalLink component wraps the button, so check the inner button element
      const innerButton = button.querySelector('button');
      expect(innerButton).toHaveClass('text-xl', 'md:text-2xl', 'px-10', 'py-5');
    });
  });

  describe('Config Integration - GitHub Section', () => {
    it('renders GitHub section text from configuration', () => {
      render(<InstallationGuide />);
      
      const sectionText = screen.getByText(APP_CONFIG.uiText.installationGuide.githubSectionText);
      expect(sectionText).toBeInTheDocument();
      expect(sectionText).toHaveClass('text-gray-600', 'mb-2');
    });

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
  });

  describe('Config Integration - Browser Compatibility', () => {
    it('renders browser compatibility note from configuration', () => {
      render(<InstallationGuide />);
      
      const note = screen.getByText(APP_CONFIG.uiText.installationGuide.browserCompatibilityNote);
      expect(note).toBeInTheDocument();
      expect(note).toHaveClass('text-sm', 'text-gray-500');
    });
  });

  describe('Layout and Styling', () => {
    it('renders installation steps in a grid', () => {
      const { container } = render(<InstallationGuide />);
      
      const grid = container.querySelector('.grid.gap-6');
      expect(grid).toBeInTheDocument();
    });

    it('renders TexturedCard components for each step', () => {
      const { container } = render(<InstallationGuide />);
      
      // TexturedCard has specific classes
      const cards = container.querySelectorAll('.flex.items-start.gap-6.bg-gray-50');
      expect(cards).toHaveLength(4);
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
    it('uses all configurable text from configuration', () => {
      render(<InstallationGuide />);
      
      // Verify key UI text comes from config
      expect(screen.getByText(APP_CONFIG.uiText.installationGuide.title)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.installationGuide.subtitle)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.installationGuide.ctaButtonText)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.installationGuide.githubSectionText)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.installationGuide.githubLinkText)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.installationGuide.browserCompatibilityNote)).toBeInTheDocument();
      
      // Note: Installation steps are intentionally hardcoded and not in config
    });
  });
});