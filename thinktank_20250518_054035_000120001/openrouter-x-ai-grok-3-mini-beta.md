# Todo

## Typography

- [ ] **T001 · Chore · P1: configure typography in tailwind.config.ts**
    - **Context:** Phase 1.1 Typography Overhaul
    - **Action:**
        1. Select bold display fonts (e.g., Ultra, Impact) and body fonts (e.g., Inter) based on recommendations.
        2. Use `next/font` to implement fonts for optimal loading.
    - **Done‑when:**
        1. Tailwind configuration file updated with semantic font names and applied globally.
    - **Verification:**
        1. Verify font changes in a sample page render and check for consistent application across components.
    - **Depends‑on:** none

- [ ] **T002 · Refactor · P2: apply typography globally**
    - **Context:** Phase 1.1 Typography Overhaul
    - **Action:**
        1. Update global CSS or component styles to use the configured typography.
    - **Done‑when:**
        1. All text elements use the new typography hierarchy without conflicts.
    - **Verification:**
        1. Test rendering on various devices to ensure readability and theme alignment.
    - **Depends‑on:** [T001]

## Shared Components

- [ ] **T003 · Feature · P1: create SectionHeading.tsx component**
    - **Context:** Phase 1.2 Create Core Shared Components
    - **Action:**
        1. Develop a component with props for text and styling, applying retro Americana theme.
    - **Done‑when:**
        1. Component renders a styled heading and passes basic unit tests.
    - **Verification:**
        1. Render in Storybook and verify visual consistency with theme.
    - **Depends‑on:** [T001]

- [ ] **T004 · Feature · P2: create ExternalLink.tsx component**
    - **Context:** Phase 1.2 Create Core Shared Components
    - **Action:**
        1. Implement a component for external links with security attributes (e.g., rel="noopener noreferrer").
    - **Done‑when:**
        1. Component handles button/text variants and opens links correctly.
    - **Verification:**
        1. Test clicking the link in a browser and confirm it navigates externally.
    - **Depends‑on:** [T001]

## Hero Section

- [ ] **T005 · Refactor · P2: update functionality description in Hero.tsx**
    - **Context:** Phase 2.3 Correct Functionality Description
    - **Action:**
        1. Replace description with "Translates text to Trumpisms (e.g., 'ISIS' → 'Evil Losers', 'Hillary Clinton' → 'Crooked Hillary')".
    - **Done‑when:**
        1. Hero section displays the accurate description on page load.
    - **Verification:**
        1. Manually inspect the rendered page and verify text content.
    - **Depends‑on:** [T001, T004]

- [ ] **T006 · Feature · P2: add Chrome Web Store CTA in Hero.tsx**
    - **Context:** Phase 2.3 Correct Functionality Description
    - **Action:**
        1. Integrate ExternalLink component for the Chrome Store URL.
    - **Done‑when:**
        1. CTA button renders and links to the correct URL.
    - **Verification:**
        1. Click the button and confirm navigation to `https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd`.
    - **Depends‑on:** [T004]

- [ ] **T007 · Refactor · P2: enhance visual impact in Hero.tsx**
    - **Context:** Phase 2.3 Correct Functionality Description
    - **Action:**
        1. Apply improved typography and decorations to the section.
    - **Done‑when:**
        1. Hero section has updated visuals that align with the retro theme.
    - **Verification:**
        1. Review in browser for aesthetic improvements and responsiveness.
    - **Depends‑on:** [T001, T003]

## Content Sections

- [ ] **T008 · Feature · P2: create FeatureShowcase.tsx section**
    - **Context:** Phase 3.4 FeatureShowcase Section
    - **Action:**
        1. Build a component with before/after comparisons using TexturedCards.
    - **Done‑when:**
        1. Section renders visual demonstrations of translations.
    - **Verification:**
        1. Test rendering in isolation and verify content accuracy.
    - **Depends‑on:** [T004]

- [ ] **T009 · Feature · P2: create TrumpismExamples.tsx section**
    - **Context:** Phase 3.5 TrumpismExamples Section
    - **Action:**
        1. Develop a grid component with 4-6 examples in TexturedCards.
    - **Done‑when:**
        1. Grid displays popular translations like "ISIS → Evil Losers".
    - **Verification:**
        1. Ensure examples load correctly and match the specified list.
    - **Depends‑on:** [T004]

- [ ] **T010 · Feature · P2: create InstallationGuide.tsx section**
    - **Context:** Phase 3.6 InstallationGuide Section
    - **Action:**
        1. Implement step-by-step instructions with links to Chrome Store and GitHub.
    - **Done‑when:**
        1. Section includes clear steps and functional links.
    - **Verification:**
        1. Click links and confirm they open the correct URLs.
    - **Depends‑on:** [T004]

- [ ] **T011 · Feature · P2: create SocialProof.tsx section**
    - **Context:** Phase 3.6 SocialProof Section
    - **Action:**
        1. Build a component for user testimonials if content is available.
    - **Done‑when:**
        1. Section renders testimonials or a placeholder if content is unavailable.
    - **Verification:**
        1. Verify rendering and check for fallback content.
    - **Depends‑on:** none

- [ ] **T012 · Feature · P2: create Footer.tsx section**
    - **Context:** Phase 3.7 Footer Enhancement
    - **Action:**
        1. Develop a footer with GitHub link, copyright, and disclaimer.
    - **Done‑when:**
        1. Footer component includes all required elements.
    - **Verification:**
        1. Test GitHub link functionality.
    - **Depends‑on:** [T004]

## Polish and Animation

- [ ] **T013 · Feature · P2: add entrance animations**
    - **Context:** Phase 4.8 Visual Enhancements
    - **Action:**
        1. Use Framer Motion for subtle animations on key elements.
    - **Done‑when:**
        1. Animations play on load and respect `prefers-reduced-motion`.
    - **Verification:**
        1. Test page load with and without reduced motion enabled.
    - **Depends‑on:** none

- [ ] **T014 · Refactor · P2: add StarDecoration elements**
    - **Context:** Phase 4.8 Visual Enhancements
    - **Action:**
        1. Integrate existing StarDecoration component throughout the page.
    - **Done‑when:**
        1. Decorations are placed consistently without clutter.
    - **Verification:**
        1. Visually inspect for balanced layout.
    - **Depends‑on:** none

- [ ] **T015 · Refactor · P2: implement consistent spacing and rhythm**
    - **Context:** Phase 4.8 Visual Enhancements
    - **Action:**
        1. Update Tailwind classes for uniform spacing.
    - **Done‑when:**
        1. Page layout has even visual rhythm across sections.
    - **Verification:**
        1. Check responsiveness and alignment on different screen sizes.
    - **Depends‑on:** [T001]

## Accessibility and Responsive Design

- [ ] **T016 · Chore · P2: ensure WCAG 2.1 AA compliance**
    - **Context:** Phase 4.9 Accessibility & Responsive Design
    - **Action:**
        1. Add ARIA attributes and keyboard navigation support.
    - **Done‑when:**
        1. All interactive elements pass accessibility audits.
    - **Verification:**
        1. Run accessibility tools (e.g., axe) and test manually.
    - **Depends‑on:** none

- [ ] **T017 · Refactor · P2: test and fix responsive layout**
    - **Context:** Phase 4.9 Accessibility & Responsive Design
    - **Action:**
        1. Adjust components for all breakpoints.
    - **Done‑when:**
        1. Layout adapts correctly across devices.
    - **Verification:**
        1. Test on multiple devices or emulators.
    - **Depends‑on:** [T001, T013, T014, T015]

## Testing

- [ ] **T018 · Test · P2: write unit tests for shared components**
    - **Context:** Testing Strategy - Unit Tests
    - **Action:**
        1. Add tests for ExternalLink and SectionHeading.
    - **Done‑when:**
        1. Tests pass and cover core functionality.
    - **Verification:**
        1. Run tests and check coverage reports.
    - **Depends‑on:** [T003, T004]

- [ ] **T019 · Test · P2: write component tests for sections**
    - **Context:** Testing Strategy - Component Tests
    - **Action:**
        1. Test FeatureShowcase, TrumpismExamples, etc., in isolation.
    - **Done‑when:**
        1. All section components pass isolation tests.
    - **Verification:**
        1. Use Storybook for visual verification.
    - **Depends‑on:** [T008, T009, T010, T011, T012]

- [ ] **T020 · Test · P2: implement visual tests in Storybook**
    - **Context:** Testing Strategy - Visual Tests
    - **Action:**
        1. Set up Storybook stories for shared components.
    - **Done‑when:**
        1. Stories render correctly and pass visual checks.
    - **Verification:**
        1. Review stories in Storybook interface.
    - **Depends‑on:** [T003, T004]

- [ ] **T021 · Test · P2: write E2E tests for user flows**
    - **Context:** Testing Strategy - E2E Tests
    - **Action:**
        1. Test link functionality and critical flows.
    - **Done‑when:**
        1. E2E tests for Chrome Store and GitHub links pass.
    - **Verification:**
        1. Execute tests and confirm navigation.
    - **Depends‑on:** [T005, T006, T012]

## Risk Mitigation

- [ ] **T022 · Chore · P2: mitigate typography theme clash**
    - **Context:** Risk Matrix - Typography choices clash with theme
    - **Action:**
        1. Preview and iterate on font selections.
    - **Done‑when:**
        1. Fonts are readable and theme-aligned.
    - **Verification:**
        1. Conduct user review for theme fit.
    - **Depends‑on:** [T001]

- [ ] **T023 · Refactor · P2: prevent visual clutter**
    - **Context:** Risk Matrix - Page becomes visually cluttered
    - **Action:**
        1. Apply whitespace using atomic design.
    - **Done‑when:**
        1. Layout is clean and uncluttered.
    - **Verification:**
        1. Visually inspect and test on various screens.
    - **Depends‑on:** [T013, T014, T015]

- [ ] **T024 · Chore · P3: optimize animations for performance**
    - **Context:** Risk Matrix - Performance impact from animations
    - **Action:**
        1. Profile and optimize animation assets.
    - **Done‑when:**
        1. Animations run smoothly without lag.
    - **Verification:**
        1. Measure performance metrics in browser dev tools.
    - **Depends‑on:** [T013]

- [ ] **T025 · Feature · P3: prepare fallback content for examples**
    - **Context:** Risk Matrix - Content unavailable for examples
    - **Action:**
        1. Create placeholders for Trumpism examples.
    - **Done‑when:**
        1. Fallback content is implemented.
    - **Verification:**
        1. Verify rendering of placeholders.
    - **Depends‑on:** [T009]