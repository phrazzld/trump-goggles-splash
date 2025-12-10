import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import SectionDivider from './SectionDivider';

describe('SectionDivider', () => {
  describe('Default Rendering', () => {
    it('renders with default props', async () => {
      const { container } = render(<SectionDivider />);

      const divider = container.querySelector('div');
      expect(divider).toBeInTheDocument();
      expect(divider).toHaveAttribute('aria-hidden', 'true');

      // Default color is cream
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('text-retro-cream');

      // No flip by default (no rotate-180)
      expect(divider).not.toHaveClass('rotate-180');

      // No bgColor by default (no bg-* class)
      expect(divider?.className).not.toMatch(/bg-retro-/);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Color Prop', () => {
    it.each(['cream', 'blue', 'red', 'black'] as const)(
      'applies correct text color class for %s',
      async (color) => {
        const { container } = render(<SectionDivider color={color} />);

        const svg = container.querySelector('svg');
        expect(svg).toHaveClass(`text-retro-${color}`);

        expect(await axe(container)).toHaveNoViolations();
      }
    );
  });

  describe('Background Color Prop', () => {
    it.each(['cream', 'blue', 'red', 'black'] as const)(
      'applies correct background color class for %s',
      async (bgColor) => {
        const { container } = render(<SectionDivider bgColor={bgColor} />);

        const divider = container.querySelector('div');
        expect(divider).toHaveClass(`bg-retro-${bgColor}`);

        expect(await axe(container)).toHaveNoViolations();
      }
    );

    it('does not apply background color class when bgColor is undefined', () => {
      const { container } = render(<SectionDivider />);

      const divider = container.querySelector('div');
      expect(divider?.className).not.toMatch(/bg-retro-/);
    });
  });

  describe('Flip Prop', () => {
    it('applies rotate-180 class when flip is true', async () => {
      const { container } = render(<SectionDivider flip={true} />);

      const divider = container.querySelector('div');
      expect(divider).toHaveClass('rotate-180');

      expect(await axe(container)).toHaveNoViolations();
    });

    it('does not apply rotate-180 class when flip is false', () => {
      const { container } = render(<SectionDivider flip={false} />);

      const divider = container.querySelector('div');
      expect(divider).not.toHaveClass('rotate-180');
    });

    it('does not apply rotate-180 class when flip is undefined (default)', () => {
      const { container } = render(<SectionDivider />);

      const divider = container.querySelector('div');
      expect(divider).not.toHaveClass('rotate-180');
    });
  });

  describe('ClassName Prop', () => {
    it('applies custom className alongside default classes', async () => {
      const customClass = 'my-custom-class';
      const { container } = render(<SectionDivider className={customClass} />);

      const divider = container.querySelector('div');
      expect(divider).toHaveClass(customClass);
      expect(divider).toHaveClass('relative', 'h-16');

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Combined Props', () => {
    it('applies all props correctly when combined', async () => {
      const { container } = render(
        <SectionDivider
          color="blue"
          bgColor="cream"
          flip={true}
          className="custom-divider"
        />
      );

      const divider = container.querySelector('div');
      const svg = container.querySelector('svg');

      // Color
      expect(svg).toHaveClass('text-retro-blue');

      // Background color
      expect(divider).toHaveClass('bg-retro-cream');

      // Flip
      expect(divider).toHaveClass('rotate-180');

      // Custom class
      expect(divider).toHaveClass('custom-divider');

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('SVG Structure', () => {
    it('renders SVG with correct viewBox and preserveAspectRatio', () => {
      const { container } = render(<SectionDivider />);

      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('viewBox', '0 0 1200 120');
      expect(svg).toHaveAttribute('preserveAspectRatio', 'none');
      expect(svg).toHaveAttribute('fill', 'currentColor');
    });

    it('renders wave path element', () => {
      const { container } = render(<SectionDivider />);

      const path = container.querySelector('path');
      expect(path).toBeInTheDocument();
      expect(path).toHaveAttribute('d');
    });

    it('SVG has full width and height classes', () => {
      const { container } = render(<SectionDivider />);

      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('absolute', 'w-full', 'h-full');
    });
  });

  describe('Accessibility', () => {
    it('marks divider as decorative with aria-hidden', () => {
      const { container } = render(<SectionDivider />);

      const divider = container.querySelector('div');
      expect(divider).toHaveAttribute('aria-hidden', 'true');
    });

    it('passes accessibility audit with all props', async () => {
      const { container } = render(
        <SectionDivider
          color="red"
          bgColor="black"
          flip={true}
          className="test-class"
        />
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Responsive Classes', () => {
    it('includes responsive height classes', () => {
      const { container } = render(<SectionDivider />);

      const divider = container.querySelector('div');
      expect(divider).toHaveClass('h-16', 'md:h-24');
    });

    it('includes negative margin for seamless section transitions', () => {
      const { container } = render(<SectionDivider />);

      const divider = container.querySelector('div');
      expect(divider).toHaveClass('-mt-1');
    });
  });
});
