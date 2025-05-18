"use client";

import { motion, useReducedMotion, Variants, HTMLMotionProps } from 'framer-motion';

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
  customVariants?: Variants;
  delay?: number;
  amount?: number; // Viewport amount to trigger animation (0 to 1)
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  customVariants,
  delay = 0,
  amount = 0.2,
  ...rest
}) => {
  const shouldReduceMotion = useReducedMotion();
  const variantsToUse = customVariants || defaultVariants;

  if (shouldReduceMotion) {
    // Render statically if reduced motion is preferred
    return (
      <section className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      className={className}
      variants={variantsToUse}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      {...rest}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;