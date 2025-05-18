## Chosen Approach
Implement scroll-triggered entrance animations using a reusable Framer Motion component that respects `prefers-reduced-motion`.

## Rationale
- **Simplicity & Modularity:** Encapsulating animation logic in a single reusable component (`FadeInWhenVisible`) keeps section components clean and consistent, avoiding repetitive animation code in JSX.
- **Coding Standards:** Adheres to DRY principle and promotes consistent animation patterns across the site. Explicitly handles `prefers-reduced-motion` as required by frontend standards.
- **Testability:** Logic for applying animation based on visibility and motion preference is centralized and testable within the reusable component.
- **Performance:** Using `whileInView` with `once: true` ensures animations only run when elements enter the viewport, minimizing ongoing performance impact. Animating `opacity` and `transform` is hardware-accelerated.

## Build Steps
1.  **Install Framer Motion:** Add `framer-motion` dependency to the project using `npm install framer-motion` or `yarn add framer-motion`.
2.  **Create Reusable Animation Component:** Create a new component (e.g., `components/animation/FadeInWhenVisible.tsx`) that wraps its children with `framer-motion/motion.div`. This component will:
    *   Use `useReducedMotion` hook to determine if animations should be applied.
    *   Define `initial` and `animate` props for the `motion.div`. If `prefers-reduced-motion` is true, set `animate={{ opacity: 1 }}` and skip transform/delay. If false, set `initial={{ opacity: 0, y: 50 }}` (or similar subtle transform) and `animate={{ opacity: 1, y: 0 }}`.
    *   Configure `transition` (e.g., `{ duration: 0.5 }`) and optionally accept delay as a prop.
    *   Add `whileInView="animate"` and `viewport={{ once: true, amount: 0.4 }}` (adjust `amount` as needed) to trigger animation when the element is 40% visible.
    *   Accept `className` and other props to pass to the underlying `motion.div`.
3.  **Apply Animation to Sections:** Wrap the main content `div` within each section component (`FeatureShowcase`, `TrumpismExamples`, `InstallationGuide`, `Footer`) with the `FadeInWhenVisible` component. Adjust `yOffset` or add `delay` props if needed for specific sections or internal elements. The Hero section might not need `whileInView` but could use a simple `initial`/`animate` on page load.
4.  **Add More Star Decorations:** Identify areas within `FeatureShowcase`, `TrumpismExamples`, `InstallationGuide`, and `Footer` where additional `StarDecoration` elements would enhance the retro theme without cluttering. Add them to the JSX in these sections.
5.  **Animate Star Decorations:** Wrap the new and existing `StarDecoration` instances with `FadeInWhenVisible` or a simpler `motion.div` with a subtle animation variant (e.g., slight scale-in, subtle rotation on load or on scroll). Consider adding a small random delay for a scattered effect.
6.  **Refine Animations:** Review the animations on the page. Adjust `duration`, `delay`, `yOffset`, and `viewport.amount` in the `FadeInWhenVisible` component or directly on individual `motion` elements to ensure subtlety, consistency, and a smooth visual flow as the user scrolls.
7.  **Test:**
    *   Manually test scrolling on different devices/browsers to verify animations trigger correctly and maintain 60fps.
    *   Manually test with `prefers-reduced-motion` enabled in OS settings (Accessibility -> Display on macOS, Ease of Access -> Display on Windows) to ensure animations are disabled or reduced.
    *   Use browser developer tools (Performance tab) to profile animation performance.
    *   Consider adding unit tests for the `FadeInWhenVisible` component's logic regarding `useReducedMotion`.