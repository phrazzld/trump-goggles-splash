# Todo

## Typography & Foundation
- [ ] **T001 · Feature · P1: Overhaul typography with retro display fonts**
    - **Context:** Phase 1 - Typography Overhaul
    - **Action:**
        1. Select bold display fonts (Ultra/Impact, Playfair Display Black) using `next/font`.
        2. Configure in `tailwind.config.ts` with semantic names for hierarchy.
        3. Apply globally across the app for consistent styling.
    - **Done-when:**
        1. Fonts are loaded optimally and applied to all text elements.
        2. Typography matches Retro Americana theme with bold, attention-grabbing style.
    - **Verification:**
        1. Visually confirm font application across all components in browser.
        2. Check loading performance using browser dev tools.
    - **Depends-on:** none

- [ ] **T002 · Feature · P2: Create SectionHeading shared component**
    - **Context:** Phase 1 - Create Core Shared Components
    - **Action:**
        1. Develop `shared/SectionHeading.tsx` with retro styling and configurable heading levels.
        2. Ensure compatibility with selected typography.
    - **Done-when:**
        1. Component renders semantic headings with Retro Americana styling.
        2. Unit tests pass for different heading configurations.
    - **Verification:**
        1. Render component in Storybook and confirm styling.
    - **Depends-on:** [T001]

- [ ] **T003 · Feature · P2: Create ExternalLink shared component**
    - **Context:** Phase 1 - Create Core Shared Components
    - **Action:**
        1. Develop `shared/ExternalLink.tsx` with secure attributes (rel="noopener noreferrer").
        2. Add button and text variants with retro styling.
    - **Done-when:**
        1. Component renders links with correct security attributes and styling.
        2. Unit tests pass for link behavior and variants.
    - **Verification:**
        1. Test links in browser to confirm security attributes and styling.
    - **Depends-on:** [T001]

## Hero Section Enhancement
- [ ] **T004 · Refactor · P1: Update Hero section with accurate description and CTA**
    - **Context:** Phase 2 - Correct Functionality Description
    - **Action:**
        1. Update `Hero.tsx` description to "Translates text to Trumpisms (e.g., 'ISIS' → 'Evil Losers', 'Hillary Clinton' → 'Crooked Hillary')".
        2. Add Chrome Web Store CTA button using `ExternalLink`.
        3. Enhance visual impact with updated typography and StarDecoration elements.
    - **Done-when:**
        1. Hero section displays accurate description and functional CTA link.
        2. Visual styling aligns with Retro Americana theme.
    - **Verification:**
        1. Confirm description text and CTA link functionality in browser.
        2. Visually inspect styling and decorations.
    - **Depends-on:** [T001, T003]

## Content Sections
- [ ] **T005 · Feature · P2: Build FeatureShowcase section**
    - **Context:** Phase 3 - FeatureShowcase Section
    - **Action:**
        1. Create `sections/FeatureShowcase.tsx` with before/after visual comparisons.
        2. Use `TexturedCard.tsx` to demonstrate Trumpism translations.
        3. Add clear explanation of extension functionality.
    - **Done-when:**
        1. Section renders comparisons and explanations correctly.
        2. Component tests pass for isolated rendering.
    - **Verification:**
        1. Check visual comparisons and text clarity in browser.
    - **Depends-on:** [T002]

- [ ] **T006 · Feature · P2: Build TrumpismExamples section**
    - **Context:** Phase 3 - TrumpismExamples Section
    - **Action:**
        1. Create `sections/TrumpismExamples.tsx` with grid of 4-6 popular translations.
        2. Display each example in a `TexturedCard.tsx`.
    - **Done-when:**
        1. Section renders grid with specified translations correctly.
        2. Component tests pass for isolated rendering.
    - **Verification:**
        1. Confirm grid layout and content accuracy in browser.
    - **Depends-on:** [T002]

- [ ] **T007 · Feature · P2: Build InstallationGuide section**
    - **Context:** Phase 3 - InstallationGuide Section
    - **Action:**
        1. Create `sections/InstallationGuide.tsx` with step-by-step instructions.
        2. Add prominent Chrome Store and GitHub links using `ExternalLink`.
        3. Include optional visual aids or screenshots if available.
    - **Done-when:**
        1. Section renders instructions and links correctly.
        2. Component tests pass for isolated rendering.
    - **Verification:**
        1. Test link functionality and verify instruction clarity in browser.
    - **Depends-on:** [T002, T003]

- [ ] **T008 · Feature · P3: Build SocialProof section**
    - **Context:** Phase 3 - SocialProof Section
    - **Action:**
        1. Create `sections/SocialProof.tsx` for user testimonials.
        2. Use fallback content or placeholders if testimonials unavailable.
    - **Done-when:**
        1. Section renders testimonials or placeholders correctly.
        2. Component tests pass for isolated rendering.
    - **Verification:**
        1. Confirm content display in browser.
    - **Depends-on:** [T002]

- [ ] **T009 · Feature · P2: Enhance Footer section with links**
    - **Context:** Phase 3 - Footer Enhancement
    - **Action:**
        1. Create `sections/Footer.tsx` with GitHub repository link using `ExternalLink`.
        2. Add copyright notice and brief disclaimer if needed.
    - **Done-when:**
        1. Footer renders links and text content correctly.
        2. Component tests pass for isolated rendering.
    - **Verification:**
        1. Test link functionality and text display in browser.
    - **Depends-on:** [T003]

## Polish & Animation
- [ ] **T010 · Feature · P2: Add visual enhancements and animations**
    - **Context:** Phase 4 - Visual Enhancements
    - **Action:**
        1. Implement subtle entrance animations using Framer Motion across sections.
        2. Respect `prefers-reduced-motion` for accessibility.
        3. Add more `StarDecoration.tsx` elements and ensure consistent spacing.
    - **Done-when:**
        1. Animations render smoothly and respect user preferences.
        2. Visual rhythm and decorations enhance Retro Americana theme.
    - **Verification:**
        1. Test animations in browser with and without reduced motion enabled.
        2. Visually confirm spacing and decoration placement.
    - **Depends-on:** [T004, T005, T006, T007, T008, T009]

- [ ] **T011 · Feature · P1: Ensure accessibility and responsive design**
    - **Context:** Phase 4 - Accessibility & Responsive Design
    - **Action:**
        1. Implement WCAG 2.1 AA compliance features (contrast, ARIA roles).
        2. Add keyboard navigation and focus states for interactive elements.
        3. Test and adjust layouts across all breakpoints.
    - **Done-when:**
        1. Page passes automated accessibility audits (axe-core).
        2. Responsive design works across all defined breakpoints.
    - **Verification:**
        1. Run accessibility tools and manually test keyboard navigation.
        2. Test layouts on multiple device sizes in browser.
    - **Depends-on:** [T004, T005, T006, T007, T008, T009]

## Testing
- [ ] **T012 · Test · P1: Write unit tests for shared components**
    - **Context:** Testing Strategy - Unit Tests
    - **Action:**
        1. Create unit tests for `SectionHeading.tsx` and `ExternalLink.tsx`.
        2. Ensure full coverage of props and variants.
    - **Done-when:**
        1. Tests pass with 90%+ coverage for shared components.
    - **Verification:**
        1. Review coverage report in CI.
    - **Depends-on:** [T002, T003]

- [ ] **T013 · Test · P2: Write component tests for section components**
    - **Context:** Testing Strategy - Component Tests
    - **Action:**
        1. Create component tests for all section components (FeatureShowcase, TrumpismExamples, etc.).
        2. Test rendering and basic interactions in isolation.
    - **Done-when:**
        1. Tests pass for all section components.
    - **Verification:**
        1. Confirm test results in CI.
    - **Depends-on:** [T005, T006, T007, T008, T009]

- [ ] **T014 · Test · P2: Set up visual tests in Storybook**
    - **Context:** Testing Strategy - Visual Tests
    - **Action:**
        1. Add shared components to Storybook with stories for all variants.
        2. Integrate visual testing (e.g., Chromatic) in CI.
    - **Done-when:**
        1. Storybook builds successfully with all component stories.
        2. Visual tests pass in CI.
    - **Verification:**
        1. Review Storybook UI for visual consistency.
    - **Depends-on:** [T002, T003]

- [ ] **T015 · Test · P1: Write E2E tests for critical user flows**
    - **Context:** Testing Strategy - E2E Tests
    - **Action:**
        1. Create E2E tests for Chrome Store and GitHub link functionality.
        2. Test responsive layouts and content accuracy.
    - **Done-when:**
        1. E2E tests pass for critical flows and link verification.
    - **Verification:**
        1. Confirm test results in CI.
    - **Depends-on:** [T004, T007, T009, T011]

## Clarifications & Assumptions
- [ ] **Issue:** Availability of user testimonials for SocialProof section unclear**
    - **Context:** Phase 3 - SocialProof Section
    - **Blocking?:** no