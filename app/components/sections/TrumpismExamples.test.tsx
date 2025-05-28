import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import TrumpismExamples from './TrumpismExamples';
import { APP_CONFIG } from '@/app/config/app-config';

describe('TrumpismExamples', () => {
  describe('Section Structure', () => {
    it('renders with proper accessibility attributes', () => {
      const { container } = render(<TrumpismExamples />);
      const section = container.querySelector('section');
      
      expect(section).toHaveAttribute('aria-labelledby', 'trumpism-examples-heading');
      
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toHaveAttribute('id', 'trumpism-examples-heading');
    });
  });

  describe('Config Integration - Title and Subtitle', () => {
    it('renders title from configuration', () => {
      render(<TrumpismExamples />);
      
      const title = screen.getByRole('heading', { 
        level: 2,
        name: APP_CONFIG.uiText.trumpismExamplesSection.title 
      });
      expect(title).toBeInTheDocument();
    });

    it('renders subtitle from configuration', () => {
      render(<TrumpismExamples />);
      
      const subtitle = screen.getByText(APP_CONFIG.uiText.trumpismExamplesSection.subtitle);
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveClass('text-lg', 'md:text-xl', 'text-center');
    });
  });

  describe('Config Integration - Examples', () => {
    it('renders all examples from configuration', () => {
      const { container } = render(<TrumpismExamples />);
      
      // Since animations prevent content from being visible immediately,
      // we'll check the DOM directly
      APP_CONFIG.trumpismExamples.forEach(example => {
        // The component uses &ldquo; and &rdquo; for quotes
        // Check that the text content exists in the rendered output
        expect(container.textContent).toContain(example.original);
        expect(container.textContent).toContain(example.trumpified);
      });
    });

    it('renders correct number of example cards', () => {
      const { container } = render(<TrumpismExamples />);
      
      // Find all TexturedCard components (they have the specific class combination)
      const cards = container.querySelectorAll('.group.relative.overflow-hidden');
      expect(cards).toHaveLength(APP_CONFIG.trumpismExamples.length);
    });

    it('renders labels from configuration', () => {
      render(<TrumpismExamples />);
      
      // Original labels
      const originalLabels = screen.getAllByText(
        APP_CONFIG.uiText.trumpismExamplesSection.originalLabel
      );
      expect(originalLabels).toHaveLength(APP_CONFIG.trumpismExamples.length);
      
      // Trumpified labels
      const trumpifiedLabels = screen.getAllByText(
        APP_CONFIG.uiText.trumpismExamplesSection.trumpifiedLabel
      );
      expect(trumpifiedLabels).toHaveLength(APP_CONFIG.trumpismExamples.length);
    });

    it('applies correct styling to labels', () => {
      render(<TrumpismExamples />);
      
      // Check original label styling
      const originalLabel = screen.getAllByText(
        APP_CONFIG.uiText.trumpismExamplesSection.originalLabel
      )[0];
      expect(originalLabel).toHaveClass('text-xs', 'uppercase', 'tracking-wider', 'text-gray-500');
      
      // Check trumpified label styling
      const trumpifiedLabel = screen.getAllByText(
        APP_CONFIG.uiText.trumpismExamplesSection.trumpifiedLabel
      )[0];
      expect(trumpifiedLabel).toHaveClass('text-xs', 'uppercase', 'tracking-wider', 'text-retro-red');
    });
  });

  describe('Config Integration - Bottom Message', () => {
    it('renders bottom message from configuration', () => {
      render(<TrumpismExamples />);
      
      const message = screen.getByText(
        APP_CONFIG.uiText.trumpismExamplesSection.bottomMessage
      );
      expect(message).toBeInTheDocument();
      expect(message).toHaveClass('text-lg', 'text-gray-600');
    });
  });

  describe('Layout and Styling', () => {
    it('renders with responsive grid layout', () => {
      const { container } = render(<TrumpismExamples />);
      
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');
    });

    it('renders arrow separators between original and trumpified text', () => {
      render(<TrumpismExamples />);
      
      const arrows = screen.getAllByText('↓');
      expect(arrows).toHaveLength(APP_CONFIG.trumpismExamples.length);
      
      arrows.forEach(arrow => {
        expect(arrow).toHaveClass('text-3xl', 'font-black', 'text-retro-red');
      });
    });
  });

  describe('Type Safety', () => {
    it('ensures trumpismExamples follows expected structure', () => {
      // This test verifies TypeScript compilation
      APP_CONFIG.trumpismExamples.forEach(example => {
        expect(example).toHaveProperty('original');
        expect(example).toHaveProperty('trumpified');
        expect(typeof example.original).toBe('string');
        expect(typeof example.trumpified).toBe('string');
      });
    });

    it('ensures UI text configuration has all required fields', () => {
      const { trumpismExamplesSection } = APP_CONFIG.uiText;
      
      expect(trumpismExamplesSection).toHaveProperty('title');
      expect(trumpismExamplesSection).toHaveProperty('subtitle');
      expect(trumpismExamplesSection).toHaveProperty('originalLabel');
      expect(trumpismExamplesSection).toHaveProperty('trumpifiedLabel');
      expect(trumpismExamplesSection).toHaveProperty('bottomMessage');
    });
  });

  describe('No Hardcoded Strings', () => {
    it('uses all user-facing text from configuration', () => {
      render(<TrumpismExamples />);
      
      // Verify key UI text comes from config
      expect(screen.getByText(APP_CONFIG.uiText.trumpismExamplesSection.title)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.trumpismExamplesSection.subtitle)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.uiText.trumpismExamplesSection.bottomMessage)).toBeInTheDocument();
      
      // Verify no common hardcoded strings
      expect(screen.queryByText('See It In Action')).not.toBeInTheDocument();
      expect(screen.queryByText('Before')).not.toBeInTheDocument();
      expect(screen.queryByText('After')).not.toBeInTheDocument();
    });
  });
});