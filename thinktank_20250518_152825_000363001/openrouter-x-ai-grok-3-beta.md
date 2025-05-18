## Chosen Approach
Implement entrance animations using Framer Motion with viewport-based scroll triggers, custom variants per section, and strict adherence to reduced motion preferences.

## Rationale
- **Simplicity:** This approach leverages Framer Motion's straightforward API for animations, avoiding over-engineered solutions and focusing on minimal custom code for each section.
- **Modularity:** By creating reusable animation variants and a utility hook for motion preferences, the solution ensures strict separation of animation logic from UI components.
- **Testability:** Animation behavior can be tested in isolation using Storybook, aligning with the component-driven development workflow and minimizing mocking needs.
- **Coding Standards:** Adheres to frontend guidelines by using Framer Motion as specified in the animation principles, ensuring subtle and purposeful animations.
- **Documentation Approach:** Animation setup and usage will be documented in Storybook, focusing on the 'why' behind each variant, consistent with self-documenting code practices.

## Build Steps
1. **Install Framer Motion**: Run `npm install framer-motion` to add the library to the Next.js project, ensuring it’s listed in `package.json`.
2. **Create Animation Variants**: Define reusable animation variants in a new `animations.ts` file under `app/utils/`, including fade-in, slide-up, and stagger effects tailored for subtle transitions (150-300ms duration).
3. **Implement Motion Preference Hook**: Develop a custom hook `useReducedMotion` in `app/hooks/` to detect `prefers-reduced-motion` using `window.matchMedia`, ensuring animations respect user settings by disabling them when preferred.
4. **Wrap Components with Motion**: Update each section component (Hero, FeatureShowcase, TrumpismExamples, InstallationGuide, Footer) in their respective files to use `motion.div` from Framer Motion, applying appropriate variants and viewport-based scroll triggers with `whileInView` for one-time animations.
5. **Add StarDecoration Elements**: Strategically place additional `StarDecoration` components in each section, ensuring they are visually balanced (e.g., 3-5 per section, varying sizes and opacities), and animate them with subtle rotation or fade effects using Framer Motion.
6. **Configure Scroll Triggers**: Set `viewport` options in Framer Motion to trigger animations when 30% of the section enters the viewport, adjusting thresholds for Hero (immediate) and Footer (delayed) to optimize user experience.
7. **Optimize Performance**: Use `useMemo` for animation variant calculations if dynamic, limit simultaneous animations with stagger effects, and test performance with Lighthouse to maintain 60fps, adhering to Web Vitals standards.
8. **Test and Document**: Add animation stories in Storybook for each section under `stories/`, documenting variants and accessibility considerations, and write integration tests with React Testing Library to verify animation behavior and reduced motion handling.