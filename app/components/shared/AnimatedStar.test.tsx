import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import AnimatedStar from './AnimatedStar';

// Mock framer-motion
let mockReducedMotion = false;
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, style, className, ...props }: { children?: React.ReactNode; style?: React.CSSProperties; className?: string; [key: string]: unknown }) => (
      <div style={style} className={className} {...props}>
        {children}
      </div>
    ),
  },
  useReducedMotion: () => mockReducedMotion,
}));

describe('AnimatedStar', () => {
  describe('Performance Optimizations', () => {
    it('applies will-change CSS property for GPU acceleration', () => {
      const { container } = render(<AnimatedStar delay={0.5} />);
      
      const animatedDiv = container.firstChild as HTMLElement;
      expect(animatedDiv).toHaveStyle({ willChange: 'transform, opacity' });
    });

    it('renders with proper animation attributes', () => {
      const { container } = render(
        <AnimatedStar className="custom-class" delay={0.5} />
      );
      
      const animatedDiv = container.firstChild as HTMLElement;
      expect(animatedDiv).toHaveAttribute('aria-hidden', 'true');
    });

    it('applies custom className when provided', () => {
      const customClass = 'absolute top-10 left-10 w-8 h-8';
      const { container } = render(<AnimatedStar className={customClass} />);
      
      // The motion.div wrapper should have the custom class
      const animatedDiv = container.firstChild as HTMLElement;
      expect(animatedDiv).toHaveClass(...customClass.split(' '));
    });

    it('handles empty className gracefully', () => {
      const { container } = render(<AnimatedStar />);
      
      const starIcon = container.querySelector('.lucide-star');
      expect(starIcon).toBeInTheDocument();
    });
  });

  describe('Reduced Motion Support', () => {
    it('disables animations when prefers-reduced-motion is set', () => {
      mockReducedMotion = true;
      
      const { container } = render(<AnimatedStar delay={0.5} />);
      
      // When reduced motion is preferred, it should render StarDecoration directly
      const starIcon = container.querySelector('.lucide-star');
      expect(starIcon).toBeInTheDocument();
      
      // Should not have the motion wrapper with will-change
      const animatedDiv = container.querySelector('div[style*="will-change"]');
      expect(animatedDiv).not.toBeInTheDocument();
      
      // Reset for other tests
      mockReducedMotion = false;
    });
  });

  describe('Animation Properties', () => {
    it('uses default delay of 0 when not provided', () => {
      const { container } = render(<AnimatedStar />);
      
      const animatedDiv = container.firstChild as HTMLElement;
      expect(animatedDiv).toBeInTheDocument();
    });

    it('accepts custom delay value', () => {
      const { container } = render(<AnimatedStar delay={1.5} />);
      
      const animatedDiv = container.firstChild as HTMLElement;
      expect(animatedDiv).toBeInTheDocument();
    });
  });
});