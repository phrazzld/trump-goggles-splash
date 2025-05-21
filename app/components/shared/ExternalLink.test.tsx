import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExternalLink from './ExternalLink';

describe('ExternalLink', () => {
  describe('Rendering', () => {
    it('renders the link with correct text', () => {
      render(<ExternalLink href="https://example.com">Example Link</ExternalLink>);
      const link = screen.getByRole('link', { name: /example link/i });
      expect(link).toBeInTheDocument();
    });

    it('renders with correct href', () => {
      render(<ExternalLink href="https://example.com">Example Link</ExternalLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', 'https://example.com');
    });

    it('renders child components correctly', () => {
      render(
        <ExternalLink href="https://example.com">
          <span data-testid="custom-child">Custom Content</span>
        </ExternalLink>
      );
      const child = screen.getByTestId('custom-child');
      expect(child).toBeInTheDocument();
    });
  });

  describe('Security Attributes', () => {
    it('sets target="_blank" by default', () => {
      render(<ExternalLink href="https://example.com">Example Link</ExternalLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
    });

    it('sets rel="noopener noreferrer" by default', () => {
      render(<ExternalLink href="https://example.com">Example Link</ExternalLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('allows overriding target attribute', () => {
      render(
        <ExternalLink href="https://example.com" target="_self">
          Example Link
        </ExternalLink>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_self');
    });

    it('allows overriding rel attribute', () => {
      render(
        <ExternalLink href="https://example.com" rel="author">
          Example Link
        </ExternalLink>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('rel', 'author');
    });
  });

  describe('Accessibility', () => {
    it('accepts and applies ariaLabel', () => {
      render(
        <ExternalLink href="https://example.com" ariaLabel="Visit our example website">
          Example
        </ExternalLink>
      );
      const link = screen.getByRole('link', { name: 'Visit our example website' });
      expect(link).toBeInTheDocument();
    });

    it('renders external link icon with aria-hidden', () => {
      const { container } = render(
        <ExternalLink href="https://example.com">Example Link</ExternalLink>
      );
      const icon = container.querySelector('.lucide-external-link');
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });

    it('has correct accessible name when using ariaLabel', () => {
      render(
        <ExternalLink href="https://example.com" ariaLabel="External link to Example site">
          Example
        </ExternalLink>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveAccessibleName('External link to Example site');
    });
  });

  describe('Styling', () => {
    it('applies default text color class', () => {
      render(<ExternalLink href="https://example.com">Example Link</ExternalLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('text-retro-blue');
    });

    it('applies hover styles', () => {
      render(<ExternalLink href="https://example.com">Example Link</ExternalLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('hover:text-retro-red');
    });

    it('applies transition styles', () => {
      render(<ExternalLink href="https://example.com">Example Link</ExternalLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('transition-colors');
    });

    it('applies custom className if provided', () => {
      render(
        <ExternalLink href="https://example.com" className="custom-class">
          Example Link
        </ExternalLink>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveClass('custom-class');
      // Should still have default classes
      expect(link).toHaveClass('text-retro-blue');
    });
  });

  describe('Props Inheritance', () => {
    it('passes through additional props', () => {
      render(
        <ExternalLink 
          href="https://example.com" 
          data-testid="custom-link"
          id="external-link"
        >
          Example Link
        </ExternalLink>
      );
      const link = screen.getByTestId('custom-link');
      expect(link).toHaveAttribute('id', 'external-link');
    });
  });

  describe('Button Variant', () => {
    it('renders as button variant', () => {
      render(
        <ExternalLink 
          href="https://example.com" 
          variant="button"
        >
          Button Link
        </ExternalLink>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', 'https://example.com');
      // The button should be rendered inside the link
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('accepts button props for button variant', () => {
      render(
        <ExternalLink 
          href="https://example.com" 
          variant="button"
          buttonProps={{ variant: 'secondary', size: 'lg' }}
        >
          Button Link
        </ExternalLink>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-transparent');
      expect(button).toHaveClass('text-retro-blue');
      expect(button).toHaveClass('px-6');
      expect(button).toHaveClass('py-3');
    });
    
    it('correctly separates anchor props and button props', () => {
      render(
        <ExternalLink 
          href="https://example.com" 
          variant="button"
          id="anchor-id"
          data-testid="anchor-test-id"
          buttonProps={{ 
            variant: 'secondary', 
            className: 'button-custom-class' 
          }}
        >
          Button Link
        </ExternalLink>
      );
      
      // Anchor props should be on the anchor element
      const link = screen.getByTestId('anchor-test-id');
      expect(link).toHaveAttribute('id', 'anchor-id');
      
      // Button props should be on the button element
      const button = screen.getByRole('button');
      expect(button).toHaveClass('button-custom-class');
      expect(button).toHaveClass('bg-transparent'); // From secondary variant
      
      // Button should not have anchor props
      expect(button).not.toHaveAttribute('id', 'anchor-id');
      expect(button).not.toHaveAttribute('data-testid', 'anchor-test-id');
    });
  });

  describe('Focus Styles', () => {
    it('applies focus styles to text variant', () => {
      render(<ExternalLink href="https://example.com">Example Link</ExternalLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('focus-visible:outline-none');
      expect(link).toHaveClass('focus-visible:ring-2');
      expect(link).toHaveClass('focus-visible:ring-retro-blue');
      expect(link).toHaveClass('focus-visible:ring-offset-2');
    });

    it('applies focus styles to button variant', () => {
      render(
        <ExternalLink href="https://example.com" variant="button">
          Button Link
        </ExternalLink>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveClass('focus-visible:outline-none');
      expect(link).toHaveClass('focus-visible:ring-2');
      expect(link).toHaveClass('focus-visible:ring-retro-blue');
      expect(link).toHaveClass('focus-visible:ring-offset-2');
    });
  });

  describe('Data Attributes', () => {
    it('passes data attributes to text variant anchor element', () => {
      render(
        <ExternalLink
          href="https://example.com"
          data-testid="text-link"
          data-cy="cypress-selector"
          data-e2e="e2e-identifier"
          data-test="test-selector"
        >
          Text Link with Data Attrs
        </ExternalLink>
      );
      
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('data-testid', 'text-link');
      expect(link).toHaveAttribute('data-cy', 'cypress-selector');
      expect(link).toHaveAttribute('data-e2e', 'e2e-identifier');
      expect(link).toHaveAttribute('data-test', 'test-selector');
    });

    it('passes data attributes to button variant anchor element, not button element', () => {
      render(
        <ExternalLink
          href="https://example.com"
          variant="button"
          data-testid="button-link"
          data-cy="cypress-selector"
        >
          Button Link with Data Attrs
        </ExternalLink>
      );
      
      const link = screen.getByTestId('button-link');
      expect(link).toHaveAttribute('data-cy', 'cypress-selector');
      
      const button = screen.getByRole('button');
      expect(button).not.toHaveAttribute('data-testid', 'button-link');
      expect(button).not.toHaveAttribute('data-cy', 'cypress-selector');
    });
  });
});