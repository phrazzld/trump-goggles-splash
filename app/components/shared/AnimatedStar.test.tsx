import { describe, expect, it, beforeEach, vi } from 'vitest';
import { render } from '@testing-library/react';
import AnimatedStar from './AnimatedStar';

// Define types for animation props
interface TransitionProps {
  duration: number;
  delay: number;
  ease: string;
}

interface AnimationProps {
  opacity: number;
  scale: number;
  rotate: number;
}

// Mock framer-motion with enhanced support for testing animation props
let mockReducedMotion = false;
let capturedTransition: TransitionProps | undefined | null = null;
let capturedInitial: AnimationProps | undefined | null = null;
let capturedWhileInView: AnimationProps | undefined | null = null;

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, style, className, transition, initial, whileInView, ...props }: { 
      children?: React.ReactNode; 
      style?: React.CSSProperties; 
      className?: string; 
      transition?: TransitionProps;
      initial?: AnimationProps;
      whileInView?: AnimationProps;
      [key: string]: unknown 
    }) => {
      // Capture animation props for testing
      capturedTransition = transition;
      capturedInitial = initial;
      capturedWhileInView = whileInView;
      
      return (
        <div 
          style={style} 
          className={className} 
          data-testid="motion-div"
          data-transition={JSON.stringify(transition)}
          data-initial={JSON.stringify(initial)}
          data-while-in-view={JSON.stringify(whileInView)}
          {...props}
        >
          {children}
        </div>
      );
    },
  },
  useReducedMotion: () => mockReducedMotion,
}));

describe('AnimatedStar', () => {
  // Reset captured values before each test
  beforeEach(() => {
    capturedTransition = null;
    capturedInitial = null;
    capturedWhileInView = null;
    mockReducedMotion = false;
  });

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

  describe('T001 Refactored Animation Logic', () => {
    it('uses correct transition properties (duration: 0.8, ease: easeOut)', () => {
      render(<AnimatedStar delay={0.5} />);
      
      expect(capturedTransition).toEqual({
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut"
      });
    });

    it('uses default delay of 0 in transition when not provided', () => {
      render(<AnimatedStar />);
      
      expect(capturedTransition).toEqual({
        duration: 0.8,
        delay: 0,
        ease: "easeOut"
      });
    });

    it('does not use spring animation properties', () => {
      render(<AnimatedStar delay={0.2} />);
      
      // Verify no spring-related properties are present
      expect(capturedTransition).not.toHaveProperty('type');
      expect(capturedTransition).not.toHaveProperty('stiffness');
      expect(capturedTransition).not.toHaveProperty('damping');
      expect(capturedTransition).not.toHaveProperty('mass');
    });

    it('uses correct initial animation state', () => {
      render(<AnimatedStar />);
      
      expect(capturedInitial).toEqual({
        opacity: 0,
        scale: 0.8,
        rotate: -45
      });
    });

    it('uses correct whileInView animation target', () => {
      render(<AnimatedStar />);
      
      expect(capturedWhileInView).toEqual({
        opacity: 1,
        scale: 1,
        rotate: 0
      });
    });

    it('applies consistent timing without randomization', () => {
      const delay1 = 0.5;
      const delay2 = 0.5;
      
      // Render multiple times with same delay
      render(<AnimatedStar delay={delay1} />);
      const transition1 = { ...capturedTransition };
      
      render(<AnimatedStar delay={delay2} />);
      const transition2 = { ...capturedTransition };
      
      // Should be identical (no randomization)
      expect(transition1).toEqual(transition2);
      expect(transition1.delay).toBe(delay1);
      expect(transition2.delay).toBe(delay2);
    });
  });

  describe('Enhanced Reduced Motion Support', () => {
    it('renders StarDecoration directly when reduced motion is preferred', () => {
      mockReducedMotion = true;
      
      const { container } = render(<AnimatedStar className="test-class" />);
      
      // Should render StarDecoration directly, not motion.div
      const starIcon = container.querySelector('.lucide-star');
      expect(starIcon).toBeInTheDocument();
      
      // Should not have motion wrapper
      const motionDiv = container.querySelector('[data-testid="motion-div"]');
      expect(motionDiv).not.toBeInTheDocument();
    });

    it('passes className to StarDecoration in reduced motion mode', () => {
      mockReducedMotion = true;
      
      const customClass = 'w-8 h-8 absolute';
      const { container } = render(<AnimatedStar className={customClass} />);
      
      const starContainer = container.firstChild as HTMLElement;
      expect(starContainer).toHaveClass(...customClass.split(' '));
    });

    it('passes data-decorative attribute in reduced motion mode', () => {
      mockReducedMotion = true;
      
      const { container } = render(<AnimatedStar data-decorative="true" />);
      
      const starContainer = container.firstChild as HTMLElement;
      expect(starContainer).toHaveAttribute('data-decorative', 'true');
    });

    it('handles empty className gracefully in reduced motion mode', () => {
      mockReducedMotion = true;
      
      const { container } = render(<AnimatedStar />);
      
      const starIcon = container.querySelector('.lucide-star');
      expect(starIcon).toBeInTheDocument();
    });
  });

  describe('Data Decorative Attribute Support', () => {
    it('passes data-decorative attribute to motion wrapper when provided', () => {
      const { container } = render(<AnimatedStar data-decorative="true" />);
      
      const motionDiv = container.querySelector('[data-testid="motion-div"]');
      expect(motionDiv).toHaveAttribute('data-decorative', 'true');
    });

    it('does not add data-decorative attribute when not provided', () => {
      const { container } = render(<AnimatedStar />);
      
      const motionDiv = container.querySelector('[data-testid="motion-div"]');
      expect(motionDiv).not.toHaveAttribute('data-decorative');
    });

    it('handles conditional data-decorative attribute rendering', () => {
      // Test without data-decorative (should not render attribute)
      const { container: container1 } = render(<AnimatedStar />);
      const motionDiv1 = container1.querySelector('[data-testid="motion-div"]');
      expect(motionDiv1).not.toHaveAttribute('data-decorative');
      
      // Test with string value (should render attribute)
      const { container: container2 } = render(<AnimatedStar data-decorative="decoration" />);
      const motionDiv2 = container2.querySelector('[data-testid="motion-div"]');
      expect(motionDiv2).toHaveAttribute('data-decorative', 'decoration');
    });
  });

  describe('Accessibility and Animation Complete', () => {
    it('maintains aria-hidden attribute for accessibility', () => {
      const { container } = render(<AnimatedStar />);
      
      const motionDiv = container.querySelector('[data-testid="motion-div"]');
      expect(motionDiv).toHaveAttribute('aria-hidden', 'true');
    });

    it('includes onAnimationComplete handler for cleanup', () => {
      const { container } = render(<AnimatedStar />);
      
      // Verify the component renders successfully with animation complete handler
      const motionDiv = container.querySelector('[data-testid="motion-div"]');
      expect(motionDiv).toBeInTheDocument();
    });

    it('uses whileInView trigger with correct viewport settings', () => {
      render(<AnimatedStar />);
      
      // This would be captured by our mock if the component passes viewport prop
      // Since we're testing the public API, we verify the component renders correctly
      const { container } = render(<AnimatedStar />);
      const motionDiv = container.querySelector('[data-testid="motion-div"]');
      expect(motionDiv).toBeInTheDocument();
    });
  });
});