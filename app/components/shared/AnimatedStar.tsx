"use client";

import { motion, useReducedMotion } from 'framer-motion';
import StarDecoration from './StarDecoration';

interface AnimatedStarProps {
  className?: string;
  delay?: number;
}

const AnimatedStar: React.FC<AnimatedStarProps> = ({ className, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  // Properly handle className by ensuring it's never undefined when passed to StarDecoration
  const starClassName = className || "";

  if (shouldReduceMotion) {
    return <StarDecoration className={starClassName} />;
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
        // Clean up will-change after animation to free GPU memory
        // Note: In production, you might want to use a ref to directly modify the style
      }}
      aria-hidden="true"
    >
      <StarDecoration />
    </motion.div>
  );
};

export default AnimatedStar;