## Chosen Approach
Implement a reusable `AnimatedSection` Framer Motion component to apply subtle, scroll-triggered entrance animations to page sections, with built-in support for `prefers-reduced-motion` and strategic placement of animated `StarDecoration` elements.

## Rationale
- **Simplicity:** Centralizes animation logic into a single, reusable component, avoiding repetitive boilerplate in each section and making animation application declarative.
- **Modularity + Strict Separation:** The `AnimatedSection` component encapsulates all animation concerns (scroll-triggering, motion preferences, variant application), keeping section components focused solely on their content and structure.
- **Testability (Minimal Mocking):** The `AnimatedSection` component can be unit-tested in isolation for its animation logic and `prefers-reduced-motion` handling. Storybook can be used for visual testing of animations across sections.
- **Coding Standards:** Promotes a DRY, consistent approach to animations, adhering to TypeScript best practices and leveraging Framer Motion's declarative API.
- **Documentation Approach:** The `AnimatedSection` component's props and behavior can be clearly documented (e.g., via JSDoc, Storybook), making the animation system self-documenting and easy to understand.

## Build Steps
1.  **Install Framer Motion:**
    ```bash
    npm install framer-motion
    # or
    yarn add framer-motion
    ```

2.  **Create Reusable `AnimatedSection` Component:**
    Create `components/animation/AnimatedSection.tsx`:
    ```typescript
    import { motion, useReducedMotion, Variants, HTMLMotionProps } from 'framer-motion';
    import { useRef } from 'react';
    import { useInView } from 'framer-motion'; // Or rely on whileInView's internal IntersectionObserver

    interface AnimatedSectionProps extends HTMLMotionProps<"section"> { // Allow passing standard section props
      children: React.ReactNode;
      className?: string;
      customVariants?: Variants;
      delay?: number;
      amount?: number; // Viewport amount to trigger animation (0 to 1)
    }

    const defaultVariants: Variants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    };

    export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
      children,
      className,
      customVariants,
      delay = 0,
      amount = 0.2, // Default to 20% visibility to trigger
      ...rest // Pass other motion props like style, id, etc.
    }) => {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true, amount });
      const shouldReduceMotion = useReducedMotion();

      const variantsToUse = customVariants || defaultVariants;

      const transition = { duration: 0.6, ease: 'easeOut', delay };

      if (shouldReduceMotion) {
        return (
          <section ref={ref} className={className} {...rest}>
            {children}
          </section>
        );
      }

      return (
        <motion.section
          ref={ref}
          className={className}
          variants={variantsToUse}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={transition}
          {...rest} // Spread other motion props
        >
          {children}
        </motion.section>
      );
    };
    ```
    *Self-note: `whileInView` prop on `motion.div` is a simpler alternative to `useInView` + `animate` prop for most cases. The above `useInView` provides more control if needed, but for simple entrance, `whileInView="visible"` and `viewport={{ once: true, amount: 0.2 }}` is more concise.*
    *Revised `AnimatedSection` using `whileInView` for conciseness:*
    ```typescript
    import { motion, useReducedMotion, Variants, HTMLMotionProps } from 'framer-motion';

    interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
      children: React.ReactNode;
      className?: string;
      customVariants?: Variants;
      delay?: number;
      amount?: number;
    }

    const defaultVariants: Variants = {
      hidden: { opacity: 0, y: 20 }, // Subtle y offset
      visible: { opacity: 1, y: 0 },
    };

    export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
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
          <section className={className} {...rest}>
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
    ```

3.  **Define Animation Patterns & Apply to Sections:**
    Wrap each main section component (Hero, FeatureShowcase, TrumpismExamples, InstallationGuide, Footer) with the `AnimatedSection` component.
    *   **Hero:** May require a slightly different setup if it animates immediately on load rather than scroll. If so, use `motion.div` directly with `initial` and `animate` props, or set `amount: 0.01` for `AnimatedSection` to trigger almost immediately.
        ```tsx
        // Example for Hero (immediate animation)
        // In Hero.tsx
        // <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>...</motion.div>
        // Or, use AnimatedSection with a very low `amount` or specific variant if it's already in view
        ```
    *   **FeatureShowcase, TrumpismExamples, InstallationGuide, Footer:** Use `AnimatedSection`.
        ```tsx
        // In FeatureShowcase.tsx (or page.tsx)
        import { AnimatedSection } from '@/components/animation/AnimatedSection';

        <AnimatedSection amount={0.3}> {/* Adjust amount as needed */}
          <FeatureShowcaseContent />
        </AnimatedSection>
        ```
    *   **Staggered Animations:** For sections with multiple items (e.g., `FeatureShowcase` cards), the parent `AnimatedSection` can have a base variant, and child `motion.div` elements within the section can use `variants` with `staggerChildren` or `delayChildren` in the parent's `visible` state transition.
        ```tsx
        // Parent (inside AnimatedSection or as AnimatedSection itself)
        const containerVariants: Variants = {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
        };
        // Child items
        const itemVariants: Variants = {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
        // <motion.div variants={containerVariants}>
        //   <motion.div variants={itemVariants}>Item 1</motion.div>
        //   <motion.div variants={itemVariants}>Item 2</motion.div>
        // </motion.div>
        ```

4.  **StarDecoration Placement and Animation:**
    *   Strategically add more `StarDecoration` elements throughout the sections to enhance the retro Americana theme.
    *   Wrap `StarDecoration` components with `motion.div` for subtle entrance animations (e.g., fade-in, slight scale-up, or gentle rotation). These can also use the `AnimatedSection` wrapper or a simpler `motion.div` with `whileInView`.
    *   Ensure these animations also respect `prefers-reduced-motion` (if using `AnimatedSection`, it's handled; if direct `motion.div`, check `useReducedMotion`).
    ```tsx
    // Example for an animated StarDecoration
    import { StarDecoration } from '@/components/decorations/StarDecoration'; // Assuming path
    // ...
    const shouldReduceMotion = useReducedMotion();
    // ...
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.5, rotate: -45 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: 0.1 + Math.random() * 0.3 }} // Random delay for sparkle
    >
      <StarDecoration />
    </motion.div>
    ```

5.  **Performance Considerations:**
    *   Animations primarily use `opacity` and `transform` properties, which are generally hardware-accelerated and performant.
    *   The `once: true` option in `viewport` ensures animations only trigger once, preventing re-animations on scroll and saving resources.
    *   Keep animation durations subtle (e.g., 0.3s to 0.7s).
    *   Test on various devices and browsers, using performance profiling tools if necessary, to ensure animations run at 60fps and do not cause jank or layout shifts.

6.  **Accessibility (`prefers-reduced-motion`):**
    *   The `AnimatedSection` component and individual `motion.div` wrappers for stars explicitly use `useReducedMotion()` to disable or simplify animations if the user has this preference set. This is a critical accessibility requirement.

7.  **Testing Approach:**
    *   **Unit Tests:** Test the `AnimatedSection` component's logic with Vitest/Jest and React Testing Library. Verify that it applies/skips animations correctly based on `prefers-reduced-motion` and `isInView` state (if using the `useInView` hook version).
    *   **Storybook:** Create stories for `AnimatedSection` with different variants and for each section component to visually inspect animations and their behavior with `prefers-reduced-motion` toggled.
    *   **Integration Tests:** Ensure sections render correctly and animations trigger as expected in a more integrated environment.
    *   **Manual Testing:**
        *   Test across different browsers (Chrome, Firefox, Safari, Edge).
        *   Test on different devices (desktop, tablet, mobile).
        *   Enable `prefers-reduced-motion` in OS settings to confirm animations are disabled/reduced.
        *   Check for any accessibility issues (e.g., focus trapping, keyboard navigation).

8.  **Documentation:**
    *   Add JSDoc comments to the `AnimatedSection` component explaining its props and usage.
    *   If using Storybook, ensure stories provide clear examples and documentation for animation patterns.
    *   Briefly document the overall animation strategy in the project's README or relevant design system documentation.