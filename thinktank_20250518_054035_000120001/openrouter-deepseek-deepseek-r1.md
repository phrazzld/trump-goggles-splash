```
# Todo

## Typography & Foundation
- [ ] **T001 · Feature · P0: Implement typography configuration in tailwind**
    - **Context:** Typography Overhaul in Phase 1
    - **Action:**
        1. Add Ultra/Impact and Playfair Display Black fonts using next/font
        2. Configure semantic font names in tailwind.config.ts
        3. Apply base typography styles to global.css
    - **Done‑when:**
        1. All font families available via Tailwind classes
        2. Storybook shows type hierarchy examples
    - **Verification:**
        1. Check applied fonts in browser dev tools
    - **Depends‑on:** none

- [ ] **T002 · Feature · P0: Create SectionHeading component**
    - **Context:** Create Core Shared Components in Phase 1
    - **Action:**
        1. Implement atomic component with retro styling
        2. Add variant support (h1-h6)
        3. Create Storybook stories with all variants
    - **Done‑when:**
        1. Component passes Storybook visual tests
        2. Exported from shared/components
    - **Depends‑on:** T001

- [ ] **T003 · Feature · P0: Create ExternalLink component**
    - **Context:** Create Core Shared Components in Phase 1
    - **Action:**
        1. Implement secure link component with rel="noopener noreferrer"
        2. Create button/text variants
        3. Add Storybook interaction tests
    - **Done‑when:**
        1. Security attributes visible in DOM
        2. Passes Lighthouse audit for external links
    - **Depends‑on:** none

## Hero Section
- [ ] **T004 · Feature · P1: Update hero section content**
    - **Context:** Hero Section Enhancement in Phase 2
    - **Action:**
        1. Replace existing description with Trumpism examples
        2. Integrate ExternalLink component for Chrome Store CTA
        3. Add StarDecoration elements
    - **Done‑when:**
        1. Correct text appears in deployed preview
        2. CTA link opens Chrome Store in new tab
    - **Depends‑on:** T001, T002, T003

## Content Sections
- [ ] **T005 · Feature · P1: Build FeatureShowcase section**
    - **Context:** FeatureShowcase Section in Phase 3
    - **Action:**
        1. Create before/after translation examples using TexturedCard
        2. Implement flip animation with Framer Motion
        3. Add explanatory text block
    - **Done‑when:**
        1. Interactive cards work on mobile/desktop
        2. Passes component tests
    - **Depends‑on:** T002

- [ ] **T006 · Feature · P1: Implement TrumpismExamples grid**
    - **Context:** TrumpismExamples Section in Phase 3
    - **Action:**
        1. Create responsive grid layout
        2. Populate with 6 example cards from PLAN.md
        3. Add hover effects with Tailwind
    - **Done‑when:**
        1. All examples render correctly
        2. Grid adapts to all breakpoints
    - **Depends‑on:** T002

- [ ] **T007 · Feature · P1: Create InstallationGuide component**
    - **Context:** InstallationGuide Section in Phase 3
    - **Action:**
        1. Design step-by-step visual layout
        2. Add Chrome Store and GitHub links
        3. Implement screenshot placeholder slots
    - **Done‑when:**
        1. Links pass accessibility checks
        2. Mobile-first layout confirmed
    - **Depends‑on:** T003

## Footer & Polish
- [ ] **T008 · Feature · P2: Enhance global footer**
    - **Context:** Footer Enhancement in Phase 3
    - **Action:**
        1. Add GitHub link with ExternalLink component
        2. Implement copyright text
        3. Style with retro borders
    - **Done‑when:**
        1. Footer persists across all pages
        2. GitHub link validates in E2E tests
    - **Depends‑on:** T003

- [ ] **T009 · Refactor · P2: Implement motion preferences**
    - **Context:** Visual Enhancements in Phase 4
    - **Action:
        1. Wrap all Framer Motion animations in ReducedMotionCheck
        2. Test with prefers-reduced-motion: reduce
    - **Done‑when:**
        1. Animations disable when preference set
        2. No JS errors in console

## Testing
- [ ] **T010 · Test · P1: Create component test suite**
    - **Context:** Testing Strategy
    - **Action:**
        1. Write Jest tests for ExternalLink/SectionHeading
        2. Add Cypress component tests for interactive elements
    - **Done‑when:**
        1. 100% coverage on shared components
        2. Tests pass in CI pipeline

- [ ] **T011 · Test · P2: Implement visual regression testing**
    - **Context:** Visual Tests in Testing Strategy
    - **Action:
        1. Set up Chromatic with Storybook
        2. Add stories for all component states
    - **Done‑when:**
        1. Baseline snapshots approved
        2. CI blocks on visual changes

### Clarifications & Assumptions
- [ ] **Issue:** SocialProof section content availability
    - **Context:** SocialProof Section in Phase 3
    - **Blocking?:** No
    - **Resolution:** Implement conditional rendering with placeholder content

- [ ] **Issue:** Animation performance metrics
    - **Context:** Performance impact risk
    - **Blocking?:** No
    - **Resolution:** Add Lighthouse CI check for animations
```