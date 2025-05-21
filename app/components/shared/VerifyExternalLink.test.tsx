import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExternalLink from './ExternalLink';

/**
 * This file contains comprehensive tests to verify the DOM structure and attribute
 * handling of the ExternalLink component after refactoring.
 * 
 * These tests serve as a programmatic alternative to manual Storybook verification
 * for task T014.
 */

describe('ExternalLink DOM Structure Verification', () => {
  describe('Text Variant DOM Structure', () => {
    it('has correct element structure and attributes', () => {
      const { container } = render(
        <ExternalLink 
          href="https://example.com" 
          className="custom-class"
          data-testid="text-test-id"
          data-cy="cy-test"
          id="link-id"
          ariaLabel="Descriptive label"
        >
          Text Link
        </ExternalLink>
      );
      
      const link = screen.getByTestId('text-test-id');
      
      // Check all attributes are on the right element
      expect(link).toHaveAttribute('href', 'https://example.com');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('data-cy', 'cy-test');
      expect(link).toHaveAttribute('id', 'link-id');
      expect(link).toHaveAttribute('aria-label', 'Descriptive label');
      
      // Check for proper class merging
      expect(link).toHaveClass('custom-class');
      expect(link).toHaveClass('text-retro-blue');
      expect(link).toHaveClass('underline');
      expect(link).toHaveClass('hover:text-retro-red');
      expect(link).toHaveClass('transition-colors');
      expect(link).toHaveClass('focus-visible:outline-none');
      expect(link).toHaveClass('focus-visible:ring-2');
      
      // Check content and structure
      expect(link).toHaveTextContent('Text Link');
      const icon = container.querySelector('.lucide-external-link');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('aria-hidden', 'true');
      
      const srOnlyText = container.querySelector('.sr-only');
      expect(srOnlyText).toBeInTheDocument();
      expect(srOnlyText).toHaveTextContent('(opens in new tab)');
    });
  });
  
  describe('Button Variant DOM Structure', () => {
    it('has correct element structure and attributes', () => {
      const { container } = render(
        <ExternalLink 
          href="https://example.com" 
          variant="button"
          className="anchor-custom-class"
          data-testid="button-test-id"
          data-cy="cy-button-test"
          id="button-link-id"
          ariaLabel="Button descriptive label"
          buttonProps={{
            variant: 'secondary',
            size: 'lg',
            className: 'button-custom-class'
          }}
        >
          Button Link
        </ExternalLink>
      );
      
      const link = screen.getByTestId('button-test-id');
      const button = container.querySelector('button');
      
      // Check anchor attributes
      expect(link).toHaveAttribute('href', 'https://example.com');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('data-cy', 'cy-button-test');
      expect(link).toHaveAttribute('id', 'button-link-id');
      expect(link).toHaveAttribute('aria-label', 'Button descriptive label');
      expect(link).toHaveClass('anchor-custom-class');
      expect(link).toHaveClass('focus-visible:outline-none');
      expect(link).toHaveClass('focus-visible:ring-2');
      
      // Check button attributes and classes
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Button Link');
      expect(button).toHaveClass('button-custom-class');
      expect(button).toHaveClass('bg-transparent'); // Secondary variant
      expect(button).toHaveClass('px-6'); // Large size
      expect(button).toHaveClass('py-3'); // Large size
      
      // Ensure attributes are NOT leaking between elements
      expect(button).not.toHaveAttribute('href');
      expect(button).not.toHaveAttribute('data-testid');
      expect(button).not.toHaveAttribute('data-cy');
      expect(button).not.toHaveAttribute('id');
      expect(button).not.toHaveClass('anchor-custom-class');
    });
  });
});