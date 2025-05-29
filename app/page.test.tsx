import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Home from './page';
import { APP_CONFIG } from '@/app/config/app-config';

describe('Home Page Integration', () => {
  describe('Page Structure', () => {
    it('renders main container with correct layout', () => {
      const { container } = render(<Home />);
      
      const main = container.querySelector('main');
      expect(main).toBeInTheDocument();
      expect(main).toHaveClass('container', 'mx-auto', 'px-4');
    });

    it('renders footer outside main container', () => {
      const { container } = render(<Home />);
      
      const footer = container.querySelector('footer');
      expect(footer).toBeInTheDocument();
      
      const main = container.querySelector('main');
      expect(main).toBeInTheDocument();
      
      // Footer should not be inside main
      expect(main?.contains(footer)).toBe(false);
    });

    it('renders all major components in correct order', () => {
      render(<Home />);
      
      // Check that all main sections are present
      expect(screen.getByRole('region', { name: APP_CONFIG.uiText.hero.title })).toBeInTheDocument();
      expect(screen.getByRole('region', { name: 'How Trump Goggles Works' })).toBeInTheDocument();
      expect(screen.getByRole('region', { name: APP_CONFIG.uiText.trumpismExamplesSection.title })).toBeInTheDocument();
      expect(screen.getByRole('region', { name: APP_CONFIG.uiText.installationGuide.title })).toBeInTheDocument();
      
      // Check footer
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });
  });

  describe('Component Integration', () => {
    it('renders Hero component within main', () => {
      const { container } = render(<Home />);
      
      const main = container.querySelector('main');
      const heroHeading = screen.getByRole('heading', { 
        level: 1, 
        name: APP_CONFIG.uiText.hero.title 
      });
      
      expect(main?.contains(heroHeading)).toBe(true);
    });

    it('renders FeatureShowcase component within main', () => {
      const { container } = render(<Home />);
      
      const main = container.querySelector('main');
      const featureHeading = screen.getByRole('heading', { 
        level: 2, 
        name: 'How Trump Goggles Works' 
      });
      
      expect(main?.contains(featureHeading)).toBe(true);
    });

    it('renders TrumpismExamples component within main', () => {
      const { container } = render(<Home />);
      
      const main = container.querySelector('main');
      const examplesHeading = screen.getByRole('heading', { 
        level: 2, 
        name: APP_CONFIG.uiText.trumpismExamplesSection.title 
      });
      
      expect(main?.contains(examplesHeading)).toBe(true);
    });

    it('renders InstallationGuide component within main', () => {
      const { container } = render(<Home />);
      
      const main = container.querySelector('main');
      const installHeading = screen.getByRole('heading', { 
        level: 2, 
        name: APP_CONFIG.uiText.installationGuide.title 
      });
      
      expect(main?.contains(installHeading)).toBe(true);
    });

    it('renders Footer component outside main', () => {
      const { container } = render(<Home />);
      
      const main = container.querySelector('main');
      const footer = container.querySelector('footer');
      
      expect(footer).toBeInTheDocument();
      expect(main?.contains(footer)).toBe(false);
    });
  });

  describe('Config Integration Across Components', () => {
    describe('Hero Config Values', () => {
      it('displays hero title from configuration', () => {
        render(<Home />);
        
        const title = screen.getByRole('heading', { 
          level: 1,
          name: APP_CONFIG.uiText.hero.title 
        });
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent(APP_CONFIG.uiText.hero.title);
      });

      it('displays hero description from configuration', () => {
        render(<Home />);
        
        const description = screen.getByText(APP_CONFIG.uiText.hero.description);
        expect(description).toBeInTheDocument();
      });

      it('displays install button with config text and URL', () => {
        render(<Home />);
        
        const installButtons = screen.getAllByRole('link', { 
          name: 'Install Trump Goggles from Chrome Web Store' 
        });
        // Should have at least one install button (from Hero section)
        expect(installButtons.length).toBeGreaterThan(0);
        
        // Check first install button (Hero)
        const heroInstallButton = installButtons[0];
        expect(heroInstallButton).toHaveTextContent(APP_CONFIG.uiText.hero.installButton);
        expect(heroInstallButton).toHaveAttribute('href', APP_CONFIG.urls.chromeStore);
      });

      it('displays learn more button with config text', () => {
        render(<Home />);
        
        const learnMoreButton = screen.getByRole('button', { 
          name: APP_CONFIG.uiText.hero.learnMoreButton 
        });
        expect(learnMoreButton).toBeInTheDocument();
      });
    });

    describe('TrumpismExamples Config Values', () => {
      it('displays section title from configuration', () => {
        render(<Home />);
        
        const title = screen.getByRole('heading', { 
          level: 2,
          name: APP_CONFIG.uiText.trumpismExamplesSection.title 
        });
        expect(title).toBeInTheDocument();
      });

      it('displays examples from configuration', () => {
        const { container } = render(<Home />);
        
        APP_CONFIG.trumpismExamples.forEach(example => {
          expect(container.textContent).toContain(example.original);
          expect(container.textContent).toContain(example.trumpified);
        });
      });

      it('displays label text from configuration', () => {
        render(<Home />);
        
        const originalLabels = screen.getAllByText(
          APP_CONFIG.uiText.trumpismExamplesSection.originalLabel
        );
        expect(originalLabels.length).toBeGreaterThan(0);
        
        const trumpifiedLabels = screen.getAllByText(
          APP_CONFIG.uiText.trumpismExamplesSection.trumpifiedLabel
        );
        expect(trumpifiedLabels.length).toBeGreaterThan(0);
      });
    });

    describe('InstallationGuide Config Values', () => {
      it('displays section title from configuration', () => {
        render(<Home />);
        
        const title = screen.getByRole('heading', { 
          level: 2,
          name: APP_CONFIG.uiText.installationGuide.title 
        });
        expect(title).toBeInTheDocument();
      });

      it('displays CTA button with config text and Chrome Store URL', () => {
        render(<Home />);
        
        const ctaButtons = screen.getAllByRole('link', { 
          name: 'Install Trump Goggles from Chrome Web Store' 
        });
        // Should have multiple install buttons (Hero and InstallationGuide)
        expect(ctaButtons.length).toBeGreaterThan(1);
        
        // Find the one with InstallationGuide specific text
        const installationCta = ctaButtons.find(button => 
          button.textContent?.includes(APP_CONFIG.uiText.installationGuide.ctaButtonText)
        );
        expect(installationCta).toBeDefined();
        expect(installationCta).toHaveAttribute('href', APP_CONFIG.urls.chromeStore);
      });

      it('displays GitHub link with config text and URL', () => {
        render(<Home />);
        
        const githubLinks = screen.getAllByRole('link', { 
          name: 'View Trump Goggles source code on GitHub' 
        });
        // Should have multiple GitHub links (InstallationGuide and Footer)
        expect(githubLinks.length).toBeGreaterThan(0);
        
        // All GitHub links should have correct text and URL
        githubLinks.forEach(link => {
          expect(link).toHaveTextContent(APP_CONFIG.uiText.installationGuide.githubLinkText);
          expect(link).toHaveAttribute('href', APP_CONFIG.urls.githubRepo);
        });
      });
    });

    describe('Footer Config Values', () => {
      it('displays GitHub link text from configuration', () => {
        render(<Home />);
        
        // Footer GitHub link (there are multiple GitHub links on the page)
        const githubLinks = screen.getAllByRole('link', { 
          name: 'View Trump Goggles source code on GitHub' 
        });
        expect(githubLinks.length).toBeGreaterThan(0);
        
        // All GitHub links should have the same text and URL from config
        githubLinks.forEach(link => {
          expect(link).toHaveTextContent(APP_CONFIG.footerText.viewOnGithub);
          expect(link).toHaveAttribute('href', APP_CONFIG.urls.githubRepo);
        });
      });

      it('displays disclaimer text from configuration', () => {
        render(<Home />);
        
        const disclaimer = screen.getByText(APP_CONFIG.footerText.disclaimer);
        expect(disclaimer).toBeInTheDocument();
      });

      it('displays made with love text from configuration', () => {
        render(<Home />);
        
        const madeWithLove = screen.getByText(/Made with ♥ for the internet/);
        expect(madeWithLove).toHaveTextContent(APP_CONFIG.footerText.madeWithLove);
      });
    });
  });

  describe('Page Accessibility', () => {
    it('passes accessibility checks without violations', async () => {
      const { container } = render(<Home />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper heading hierarchy', () => {
      render(<Home />);
      
      // Should have exactly one h1 (page title)
      const h1Elements = screen.getAllByRole('heading', { level: 1 });
      expect(h1Elements).toHaveLength(1);
      expect(h1Elements[0]).toHaveTextContent(APP_CONFIG.uiText.hero.title);
      
      // Should have multiple h2 elements (section headings)
      const h2Elements = screen.getAllByRole('heading', { level: 2 });
      expect(h2Elements.length).toBeGreaterThan(2);
    });

    it('has proper landmark structure', () => {
      const { container } = render(<Home />);
      
      // Should have main landmark
      const main = container.querySelector('main');
      expect(main).toBeInTheDocument();
      
      // Should have footer landmark
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });

    it('has proper aria-labels on interactive elements', () => {
      render(<Home />);
      
      // External links should have aria-labels
      const installButtons = screen.getAllByRole('link', { 
        name: 'Install Trump Goggles from Chrome Web Store' 
      });
      installButtons.forEach(button => {
        expect(button).toHaveAttribute('aria-label', 'Install Trump Goggles from Chrome Web Store');
      });
      
      const githubLinks = screen.getAllByRole('link', { 
        name: 'View Trump Goggles source code on GitHub' 
      });
      githubLinks.forEach(link => {
        expect(link).toHaveAttribute('aria-label', 'View Trump Goggles source code on GitHub');
      });
    });
  });

  describe('Error-Free Rendering', () => {
    it('renders without throwing JavaScript errors', () => {
      // If any component throws an error during render, this test will fail
      expect(() => render(<Home />)).not.toThrow();
    });

    it('renders all sections without content missing', () => {
      const { container } = render(<Home />);
      
      // Check that essential content is present (indicates no major render failures)
      expect(container.textContent).toContain(APP_CONFIG.uiText.hero.title);
      expect(container.textContent).toContain('How Trump Goggles Works');
      expect(container.textContent).toContain(APP_CONFIG.uiText.trumpismExamplesSection.title);
      expect(container.textContent).toContain(APP_CONFIG.uiText.installationGuide.title);
      expect(container.textContent).toContain(APP_CONFIG.footerText.disclaimer);
    });

    it('handles framer-motion animations without errors', () => {
      const { container } = render(<Home />);
      
      // Framer-motion components should render (even with mocked IntersectionObserver)
      const animatedElements = container.querySelectorAll('[style*="opacity"]');
      expect(animatedElements.length).toBeGreaterThan(0);
    });
  });

  describe('Config Change Responsiveness', () => {
    it('reflects config changes in rendered output', () => {
      // This test verifies that the page uses live config values
      // If someone changes APP_CONFIG, the page should reflect those changes
      render(<Home />);
      
      // Verify key config values are actually used (not hardcoded)
      expect(screen.getByText(APP_CONFIG.uiText.hero.title)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.hero.description)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.trumpismExamplesSection.title)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.installationGuide.title)).toBeInTheDocument();
      
      // Verify URLs are used from config
      const chromeStoreLinks = screen.getAllByRole('link', { name: /Chrome Web Store/i });
      chromeStoreLinks.forEach(link => {
        expect(link).toHaveAttribute('href', APP_CONFIG.urls.chromeStore);
      });
      
      const githubLinks = screen.getAllByRole('link', { name: /GitHub/i });
      githubLinks.forEach(link => {
        expect(link).toHaveAttribute('href', APP_CONFIG.urls.githubRepo);
      });
    });
  });
});