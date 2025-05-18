"use client";

import { motion, useReducedMotion } from 'framer-motion';
import StarDecoration from './StarDecoration';

interface AnimatedStarProps {
  className?: string;
  delay?: number;
}

const AnimatedStar: React.FC<AnimatedStarProps> = ({ className, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <StarDecoration className={className} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ 
        duration: 0.6, 
        delay: delay + Math.random() * 0.3,
        type: "spring",
        stiffness: 100
      }}
      aria-hidden="true"
    >
      <StarDecoration className={className} />
    </motion.div>
  );
};

export default AnimatedStar;