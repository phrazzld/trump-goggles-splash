import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import RetroButton from './RetroButton';

expect.extend(toHaveNoViolations);

describe('RetroButton', () => {
  describe('Rendering', () => {
    it('renders button with text', () => {
      render(<RetroButton>Click Me</RetroButton>);
      const button = screen.getByRole('button', { name: 'Click Me' });
      expect(button).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(<RetroButton className="custom-button">Button</RetroButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-button');
    });

    // [REMOVED] Test for anchor rendering: RetroButton is a pure button. Link functionality is handled by ExternalLink. See DEVELOPMENT_PHILOSOPHY.md.

    it('renders with correct variant styles - primary', () => {
      render(<RetroButton variant="primary">Primary Button</RetroButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-retro-red');
      expect(button).toHaveClass('text-retro-cream');
      expect(button).toHaveClass('border-double-retro');
    });

    it('renders with correct variant styles - secondary', () => {
      render(<RetroButton variant="secondary">Secondary Button</RetroButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-transparent');
      expect(button).toHaveClass('text-retro-blue');
      expect(button).toHaveClass('border-double-retro');
    });
  });

  describe('Interaction', () => {
    it('handles click events', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<RetroButton onClick={handleClick}>Click Me</RetroButton>);
      const button = screen.getByRole('button');
      
      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('prevents click when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(
        <RetroButton onClick={handleClick} disabled>
          Disabled Button
        </RetroButton>
      );
      const button = screen.getByRole('button');
      
      expect(button).toBeDisabled();
      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<RetroButton>Accessible Button</RetroButton>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('supports aria-label', () => {
      render(
        <RetroButton aria-label="Custom label">
          Button
        </RetroButton>
      );
      const button = screen.getByRole('button', { name: 'Custom label' });
      expect(button).toBeInTheDocument();
    });

    it('can be focused with keyboard', () => {
      render(<RetroButton>Focusable Button</RetroButton>);
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });

    it('handles disabled state correctly', () => {
      render(<RetroButton disabled>Disabled Button</RetroButton>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });

  // [REMOVED] "Link Mode" tests: RetroButton is a pure button. Link functionality is handled by ExternalLink. See DEVELOPMENT_PHILOSOPHY.md.

  describe('Props Inheritance', () => {
    it('passes through additional props', () => {
      render(
        <RetroButton data-testid="custom-button" id="test-button">
          Button
        </RetroButton>
      );
      const button = screen.getByTestId('custom-button');
      expect(button).toHaveAttribute('id', 'test-button');
    });

    it('applies type="button" by default', () => {
      render(<RetroButton>Button</RetroButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('allows overriding type attribute', () => {
      render(<RetroButton type="submit">Submit Button</RetroButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });
  });

  describe('Styling', () => {
    it('has correct base styles', () => {
      render(<RetroButton>Button</RetroButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('font-display');
      expect(button).toHaveClass('px-4'); // Default size is md
      expect(button).toHaveClass('py-2'); // Default size is md
      expect(button).toHaveClass('rounded-md');
    });

    it('has correct hover styles', () => {
      render(<RetroButton variant="primary">Button</RetroButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('hover:opacity-90');
    });

    it('has correct disabled styles', () => {
      render(<RetroButton disabled>Disabled</RetroButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('disabled:cursor-not-allowed');
      expect(button).toHaveClass('disabled:opacity-50');
    });
  });

  describe('Star Decoration', () => {
    it('renders star for primary variant', () => {
      const { container } = render(
        <RetroButton variant="primary">Primary Button</RetroButton>
      );
      const star = container.querySelector('.lucide-star');
      expect(star).toBeInTheDocument();
      expect(star).toHaveClass('text-retro-gold');
      expect(star).toHaveClass('fill-retro-gold');
    });

    it('does not render star for secondary variant', () => {
      const { container } = render(
        <RetroButton variant="secondary">Secondary Button</RetroButton>
      );
      const star = container.querySelector('.lucide-star');
      expect(star).not.toBeInTheDocument();
    });

    it('renders star with correct size for different button sizes', () => {
      const { container: smallContainer } = render(
        <RetroButton variant="primary" size="sm">Small</RetroButton>
      );
      const smallStar = smallContainer.querySelector('.lucide-star');
      expect(smallStar).toHaveAttribute('width', '14');

      const { container: mediumContainer } = render(
        <RetroButton variant="primary" size="md">Medium</RetroButton>
      );
      const mediumStar = mediumContainer.querySelector('.lucide-star');
      expect(mediumStar).toHaveAttribute('width', '16');

      const { container: largeContainer } = render(
        <RetroButton variant="primary" size="lg">Large</RetroButton>
      );
      const largeStar = largeContainer.querySelector('.lucide-star');
      expect(largeStar).toHaveAttribute('width', '20');
    });
  });
});