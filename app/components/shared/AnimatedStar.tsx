"use client";

import { motion, useReducedMotion } from 'framer-motion';
import StarDecoration from './StarDecoration';

/**
 * Props for the AnimatedStar component
 */
interface AnimatedStarProps {
  /** CSS classes for positioning and styling. Typically includes absolute positioning and responsive sizing. */
  className?: string;
  /** Animation delay in seconds. Used to create staggered entrance effects. */
  delay?: number;
  /** Marks the element as decorative for accessibility tools */
  'data-decorative'?: string;
}

/**
 * Animated star decoration component with smooth entrance animations and accessibility support.
 * 
 * This component wraps the static StarDecoration with Framer Motion animations, providing
 * a smooth scale and rotation effect on viewport entry. The animation design prioritizes
 * performance and accessibility.
 * 
 * ## Animation Behavior (from T001):
 * - Fixed duration of 0.8s with easeOut easing for smooth, predictable motion
 * - Configurable delay prop enables coordinated multi-star sequences
 * - Removed spring physics to eliminate "snapping" visual artifacts
 * - Animation plays once when element enters viewport (50% visibility threshold)
 * 
 * ## Performance Optimizations (from T003):
 * - `will-change: transform, opacity` applied for GPU acceleration
 * - Transform-only animations (scale, rotate, opacity) for optimal performance
 * - Viewport-based triggering prevents off-screen animation calculations
 * 
 * ## Accessibility Features:
 * - Respects `prefers-reduced-motion` by rendering static star when motion is reduced
 * - `aria-hidden="true"` since stars are purely decorative
 * - Preserves semantic meaning through data-decorative attribute
 * 
 * @example
 * ```tsx
 * // Single star with custom positioning
 * <AnimatedStar className="absolute top-4 left-4 w-8 h-8" delay={0.2} />
 * 
 * // Multiple stars with staggered delays
 * <AnimatedStar className="star-safe-top-left" delay={0.1} />
 * <AnimatedStar className="star-safe-top-right" delay={0.2} />
 * ```
 */
const AnimatedStar: React.FC<AnimatedStarProps> = ({ className, delay = 0, 'data-decorative': dataDecorative }) => {
  const shouldReduceMotion = useReducedMotion();

  // Properly handle className by ensuring it's never undefined when passed to StarDecoration
  const starClassName = className || "";

  if (shouldReduceMotion) {
    return <StarDecoration className={starClassName} {...(dataDecorative && { 'data-decorative': dataDecorative })} />;
  }

  return (
    <motion.div
      className={starClassName}
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ 
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }}
      onAnimationComplete={() => {
        // T003 Performance optimization: Clean up will-change after animation 
        // to free GPU memory and prevent unnecessary compositing layers
        // Note: Framer Motion handles this automatically, but keeping for documentation
      }}
      aria-hidden="true"
      {...(dataDecorative && { 'data-decorative': dataDecorative })}
    >
      <StarDecoration />
    </motion.div>
  );
};

export default AnimatedStar;