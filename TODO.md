# Todo

## Hero Animation
- [x] **T001 · Bugfix · P0: fix star animation snapping and predictable delays**
    - **Context:** PLAN.md > Detailed Implementation Plan > Phase 1: Animation Smoothing > 1.1 Fix Star Animation Issues
    - **Code Area:** `app/components/shared/AnimatedStar.tsx`
    - **Action:**
        1. Modify the Framer Motion `transition` prop to use `duration: 0.8`, a predictable `delay` (passed as prop or calculated consistently), and `ease: "easeOut"`.
        2. Remove `type: "spring"`, `stiffness`, and any `Math.random()` from delay calculations.
    - **Done‑when:**
        1. Stars animate smoothly without any visual "snapping".
        2. Animation timing is consistent and predictable across all star instances.
        3. Reduced motion accessibility (disabling animation) is preserved.
    - **Verification:**
        1. Visually inspect star animations in the browser on multiple refreshes to confirm smoothness and consistent timing.
        2. Enable "Prefer reduced motion" OS/browser setting and verify animations are disabled or significantly reduced.
    - **Depends‑on:** none

- [ ] **T002 · Refactor · P0: simplify hero component animation sequence**
    - **Context:** PLAN.md > Detailed Implementation Plan > Phase 1: Animation Smoothing > 1.2 Simplify Hero Animation Sequence
    - **Code Area:** `app/components/Hero.tsx`
    - **Action:**
        1. Audit existing Framer Motion animation sequences within the Hero component.
        2. Remove or refactor overlapping/competing motion transitions to create a single, coordinated animation timeline for all hero elements (e.g., text, CTAs).
    - **Done‑when:**
        1. Hero elements animate in a clear, coordinated sequence without visual conflicts or jank.
        2. Overall motion complexity is reduced while maintaining visual impact.
    - **Verification:**
        1. Observe the full hero animation sequence on page load; ensure all elements animate cohesively.
        2. Check for any visual glitches or elements animating out of sync.
    - **Depends‑on:** [T001]

- [ ] **T003 · Refactor · P0: optimize hero animation performance with css properties**
    - **Context:** PLAN.md > Detailed Implementation Plan > Phase 1: Animation Smoothing > 1.3 Optimize Animation Performance
    - **Code Area:** `app/components/Hero.tsx`, `app/components/shared/AnimatedStar.tsx`, relevant CSS/Tailwind utility classes
    - **Action:**
        1. Apply the `will-change` CSS property (e.g., `will-change: transform, opacity;`) to elements in `Hero.tsx` and `AnimatedStar.tsx` that are being animated.
        2. Review and consolidate multiple CSS transform operations into a single `transform` property where applicable to enhance GPU acceleration.
    - **Done‑when:**
        1. `will-change` CSS property is correctly applied to key animated elements.
        2. CSS transform operations are consolidated for optimal rendering.
        3. Animations demonstrate smoother rendering and leverage GPU acceleration.
    - **Verification:**
        1. Use browser DevTools (e.g., Layers panel, Performance monitor) to confirm `will-change` is active and elements are composited on the GPU during animations.
        2. Profile animations to ensure smooth frame rates (aiming for 60fps).
    - **Depends‑on:** [T002]

## Hero Layout
- [ ] **T004 · Bugfix · P0: ensure hero background covers full viewport**
    - **Context:** PLAN.md > Detailed Implementation Plan > Phase 2: Layout Fixes > 2.1 Fix Background Coverage
    - **Code Area:** `app/components/Hero.tsx` (or its primary container element styling)
    - **Action:**
        1. Modify the Tailwind CSS classes for the Hero section's main container to include `w-full` (e.g., ensure class list is effectively `.relative .min-h-screen .w-full`).
    - **Done‑when:**
        1. The hero section background visually covers 100% of the viewport width and at least 100% of the viewport height.
        2. No horizontal or vertical gaps are visible around the hero section at any common viewport size.
    - **Verification:**
        1. Resize the browser window to various widths and heights (desktop, tablet, mobile) and confirm full background coverage.
        2. Test on different device emulators.
    - **Depends‑on:** none

- [ ] **T005 · Refactor · P0: improve star positioning for responsiveness and visibility**
    - **Context:** PLAN.md > Detailed Implementation Plan > Phase 2: Layout Fixes > 2.2 Improve Star Positioning
    - **Code Area:** `app/components/shared/AnimatedStar.tsx` (if positioning is internal) or `app/components/Hero.tsx` (if stars are positioned there)
    - **Action:**
        1. Replace any existing fixed absolute positioning values for stars with a responsive strategy (e.g., percentages, viewport units, or dynamic calculations based on container size).
        2. Implement "safe zones" or boundary constraints to prevent stars from being clipped or rendering off-screen, especially on smaller viewports.
    - **Done‑when:**
        1. Decorative stars are positioned responsively within the hero section.
        2. Stars remain visible and do not clip content or viewport edges on common screen sizes (mobile, tablet, desktop).
    - **Verification:**
        1. Test star visibility and placement across a range of viewport sizes and aspect ratios (e.g., mobile portrait/landscape, tablet, desktop).
        2. Ensure stars do not overlap critical UI elements.
    - **Depends‑on:** none

- [ ] **T006 · Refactor · P0: make vintage border frame responsive and content-safe**
    - **Context:** PLAN.md > Detailed Implementation Plan > Phase 2: Layout Fixes > 2.3 Enhanced Border Frame
    - **Code Area:** Component/styling for the vintage border frame (likely within or used by `app/components/Hero.tsx`)
    - **Action:**
        1. Refactor the vintage border frame's CSS (e.g., fixed `inset` values) to use responsive units (e.g., percentages, `vw`/`vh`) or adaptive styling logic.
        2. Ensure consistent visual spacing of the border relative to viewport edges and internal content across all devices.
        3. Prevent the border from overlapping with hero content elements on any screen size.
    - **Done‑when:**
        1. The vintage border frame adapts its size and spacing correctly to different viewport dimensions.
        2. Border spacing is consistent and visually appealing on mobile, tablet, and desktop.
        3. The border does not overlap or obscure any hero content.
    - **Verification:**
        1. Test the hero section on various screen sizes (mobile, tablet, desktop, extreme aspect ratios).
        2. Verify border appearance and spacing during device orientation changes.
    - **Depends‑on:** none

## Hero Visual Polish
- [ ] **T007 · Refactor · P1: optimize hero background patterns for performance and hierarchy**
    - **Context:** PLAN.md > Detailed Implementation Plan > Phase 3: Visual Polish > 3.1 Background Pattern Optimization
    - **Code Area:** CSS/Styling for hero background patterns (likely in `app/components/Hero.tsx` or related global/component CSS)
    - **Action:**
        1. Review existing layered CSS background patterns; consolidate them where possible to reduce rendering complexity (e.g., fewer layers, optimized images).
        2. Optimize any texture images or complex CSS patterns used for file size and rendering performance.
        3. Ensure the optimized background maintains or improves visual hierarchy and the intended retro Americana aesthetic.
    - **Done‑when:**
        1. Hero background patterns are simplified or consolidated for better performance.
        2. Texture patterns (if any) are optimized.
        3. Visual hierarchy and design intent are preserved or enhanced.
    - **Verification:**
        1. Visually inspect the hero background on various devices for intended appearance and quality.
        2. Check page load performance (e.g., Lighthouse, WebPageTest) and browser rendering performance (DevTools) for any improvements or regressions.
    - **Depends‑on:** [T004]

- [ ] **T008 · Refactor · P1: refine hero typography and spacing for responsive visual rhythm**
    - **Context:** PLAN.md > Detailed Implementation Plan > Phase 3: Visual Polish > 3.2 Typography and Spacing Refinement
    - **Code Area:** `app/components/Hero.tsx` and its child elements containing text and layout structure; relevant Tailwind CSS configuration or global styles.
    - **Action:**
        1. Verify that all text elements (headings, paragraphs, CTAs) within the hero section scale responsively and appropriately across defined breakpoints.
        2. Review and adjust spacing (margins, paddings) between hero elements to optimize visual rhythm, balance, and hierarchy.
    - **Done‑when:**
        1. Typography scales correctly and maintains legibility on all common devices.
        2. Spacing relationships between elements are balanced and contribute to a clear visual hierarchy.
        3. The overall visual polish of typography and spacing is enhanced, consistent with the retro Americana design.
    - **Verification:**
        1. Visually inspect typography (font sizes, line heights, weights) and spacing on multiple devices/breakpoints (mobile, tablet, desktop).
        2. Compare against design specifications if available, or assess for improved visual harmony and readability.
    - **Depends‑on:** none

## Testing
- [ ] **T009 · Test · P0: create/update unit tests for AnimatedStar component**
    - **Context:** PLAN.md > Testing Strategy > Unit Tests (related to 1.1 Fix Star Animation Issues)
    - **Code Area:** Test file for `app/components/shared/AnimatedStar.tsx` (e.g., `AnimatedStar.test.tsx`)
    - **Action:**
        1. Write new or update existing unit tests to cover the refactored animation logic in `AnimatedStar.tsx`.
        2. Verify correct `transition` props (duration, delay, ease) are applied.
        3. Test component rendering with and without `prefers-reduced-motion` (mocking the preference).
    - **Done‑when:**
        1. Unit tests for `AnimatedStar.tsx` achieve adequate coverage for animation logic.
        2. All tests pass.
    - **Depends‑on:** [T001]

- [ ] **T010 · Test · P0: create/update unit tests for Hero component**
    - **Context:** PLAN.md > Testing Strategy > Unit Tests (related to 1.2, 2.1, 2.3)
    - **Code Area:** Test file for `app/components/Hero.tsx` (e.g., `Hero.test.tsx`)
    - **Action:**
        1. Write new or update existing unit tests for `Hero.tsx` focusing on its animation sequence setup, responsive class application for background/border, and rendering with different props.
    - **Done‑when:**
        1. Unit tests for `Hero.tsx` cover key animation coordination and responsive layout aspects.
        2. All tests pass.
    - **Depends‑on:** [T002, T004, T006]

- [ ] **T011 · Test · P0: create/update integration tests for hero section**
    - **Context:** PLAN.md > Testing Strategy > Integration Tests
    - **Code Area:** Integration test suite (e.g., using React Testing Library or Cypress component tests)
    - **Action:**
        1. Write or update integration tests to ensure the Hero section, including `AnimatedStar` instances, renders correctly within a typical page layout.
        2. Verify interactions and correct application of configurations if any part of `APP_CONFIG` affects the Hero section.
    - **Done‑when:**
        1. Integration tests for the Hero section are implemented or updated.
        2. Tests pass, covering component composition, props propagation, and configuration integration.
    - **Depends‑on:** [T001, T002, T003, T004, T005, T006]

- [ ] **T012 · Test · P0: implement/update e2e tests for hero visual regression**
    - **Context:** PLAN.md > Testing Strategy > E2E Tests
    - **Code Area:** E2E test suite (e.g., Cypress, Playwright with visual regression tooling)
    - **Action:**
        1. Set up or update visual regression tests for the Hero section across key breakpoints (mobile, tablet, desktop).
        2. Establish or update baseline images for comparison.
    - **Done‑when:**
        1. Visual regression E2E tests for the Hero section are in place and configured.
        2. Tests pass against the established or updated baseline images, flagging only intended changes.
    - **Depends‑on:** [T001, T002, T003, T004, T005, T006, T007, T008]

- [ ] **T013 · Test · P0: implement/update e2e tests for hero animation smoothness and accessibility**
    - **Context:** PLAN.md > Testing Strategy > E2E Tests
    - **Code Area:** E2E test suite (e.g., Cypress, Playwright)
    - **Action:**
        1. Write E2E test scripts to observe the hero animations, checking for basic completion and absence of obvious errors (fully automated smoothness is hard, focus on error states).
        2. Implement E2E tests to verify accessibility compliance: ARIA labels are present and correct, `prefers-reduced-motion` behavior is as expected.
    - **Done‑when:**
        1. E2E tests for observing animation flow and checking key accessibility features are implemented.
        2. Tests pass, confirming basic animation integrity and accessibility compliance.
    - **Depends‑on:** [T001, T002, T003]

- [ ] **T014 · Test · P0: conduct performance tests for hero animations**
    - **Context:** PLAN.md > Testing Strategy > Performance Tests
    - **Code Area:** Performance testing tools/scripts (e.g., Lighthouse, Puppeteer with DevTools protocol, manual profiling)
    - **Action:**
        1. Establish a baseline for hero animation frame rates and relevant Core Web Vitals (e.g., LCP, CLS if impacted) before changes.
        2. After all animation and layout changes, re-run performance tests to monitor frame rates, impact on CWV, and memory usage during animations.
    - **Done‑when:**
        1. Performance testing for hero animations is conducted and results documented.
        2. Animations achieve or maintain smooth frame rates (target 60fps).
        3. No significant degradation in Core Web Vitals is observed compared to baseline.
    - **Depends‑on:** [T001, T002, T003, T007]

## Project Chores
- [ ] **T015 · Chore · P0: set up feature branch for hero ui enhancement**
    - **Context:** PLAN.md > Implementation Steps > 1. Setup Branch
    - **Code Area:** Git repository
    - **Action:**
        1. Create a new feature branch (e.g., `feature/hero-ux-enhancements`) from the current main development branch (e.g., `master`, `main`, `develop`).
    - **Done‑when:**
        1. Feature branch is created and pushed to the remote repository if applicable.
        2. Local development environment is switched to the new branch.
    - **Depends‑on:** none

- [ ] **T016 · Chore · P1: update component documentation for Hero and AnimatedStar**
    - **Context:** PLAN.md > Implementation Steps > 6. Documentation
    - **Code Area:** Project documentation files (e.g., READMEs, Storybook stories, JSDoc/TSDoc comments)
    - **Action:**
        1. Update JSDoc/TSDoc comments for `app/components/Hero.tsx` and `app/components/shared/AnimatedStar.tsx` to reflect changes in props, behavior, or animation logic.
        2. If using Storybook, update relevant stories to showcase new animation smoothness, responsive layouts, and any new props.
    - **Done‑when:**
        1. All relevant documentation for `Hero.tsx` and `AnimatedStar.tsx` is accurate and up-to-date.
        2. Changes are clearly explained for other developers.
    - **Depends‑on:** [T001, T002, T003, T004, T005, T006, T007, T008]

- [ ] **T017 · Chore · P2: add development-only logging for animation performance**
    - **Context:** PLAN.md > Logging & Observability
    - **Code Area:** `app/components/Hero.tsx`, `app/components/shared/AnimatedStar.tsx`
    - **Action:**
        1. Implement optional, development-only console logging (e.g., using `console.debug` or a conditional logger) for key animation events or performance metrics (e.g., animation start/end, calculated delays).
        2. Ensure these logs are stripped or disabled in production builds.
    - **Done‑when:**
        1. Animation performance/debugging logs are available in the browser console during development.
        2. No development-specific logs are present in production builds.
    - **Verification:**
        1. Run the application in development mode and verify logs appear.
        2. Build the application for production and verify logs are absent.
    - **Depends‑on:** none

## Clarifications
- [ ] **T018 · Chore · P2: clarify requirement for production animation performance monitoring**
    - **Context:** PLAN.md > Open Questions > 1. Should we add animation performance monitoring in production?
    - **Action:**
        1. Discuss with the team/stakeholders the necessity and feasibility of implementing animation performance monitoring in the production environment.
        2. Document the decision and any planned follow-up actions.
    - **Done‑when:**
        1. A decision is made regarding production animation performance monitoring.
    - **Depends‑on:** none

- [ ] **T019 · Chore · P2: clarify specific animation preferences from design/ux team**
    - **Context:** PLAN.md > Open Questions > 2. Are there specific animation preferences from design/UX team?
    - **Action:**
        1. Consult with the Design/UX team to confirm if there are any new or more specific preferences for animation timing, easing, or style beyond what's in the plan.
        2. Document any feedback received.
    - **Done‑when:**
        1. Feedback from Design/UX regarding animation preferences is gathered and documented.
    - **Depends‑on:** none

- [ ] **T020 · Chore · P2: clarify if user-configurable animation controls should be implemented**
    - **Context:** PLAN.md > Open Questions > 3. Should we implement animation controls for user preference?
    - **Action:**
        1. Discuss with the team/stakeholders the potential value and effort of adding user-facing controls for animation preferences (e.g., toggle animations on/off, reduce intensity).
        2. Document the decision and any planned follow-up actions.
    - **Done‑when:**
        1. A decision is made regarding user-configurable animation controls.
    - **Depends‑on:** none