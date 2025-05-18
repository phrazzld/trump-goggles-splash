```
# Todo

## Typography & Foundation
- [ ] **T001 · Feature · P1: Implement typography system**
    - **Context:** Typography Overhaul in PLAN.md
    - **Action:**
        1. Select and configure display/body fonts in `tailwind.config.ts`
        2. Implement `next/font` loading strategy
        3. Define semantic font names and apply global styles
    - **Done-when:**
        1. All typography classes available via Tailwind
        2. Font loading verified in devtools
    - **Depends-on:** none

- [ ] **T002 · Feature · P1: Create SectionHeading component**
    - **Context:** Create Core Shared Components in PLAN.md
    - **Action:**
        1. Create `shared/SectionHeading.tsx` with retro styling
        2. Implement variant system for heading levels
        3. Add Storybook stories
    - **Done-when:**
        1. Component passes visual regression tests
        2. Storybook docs complete
    - **Depends-on:** [T001]

- [ ] **T003 · Feature · P1: Create ExternalLink component**
    - **Context:** Create Core Shared Components in PLAN.md
    - **Action:**
        1. Create `shared/ExternalLink.tsx` with security attributes
        2. Implement button/text variants
        3. Add Storybook stories
    - **Done-when:**
        1. Component passes a11y and security audits
        2. Storybook interaction tests pass
    - **Depends-on:** none

## Hero Section
- [ ] **T004 · Bugfix · P0: Correct hero description**
    - **Context:** Correct Functionality Description in PLAN.md
    - **Action:**
        1. Update copy in `Hero.tsx`
        2. Add example Trumpisms list
    - **Done-when:**
        1. Content matches approved copy
    - **Depends-on:** none

- [ ] **T005 · Feature · P1: Enhance hero CTA**
    - **Context:** Hero Section Enhancement in PLAN.md
    - **Action:**
        1. Integrate ExternalLink component
        2. Add Chrome Store CTA button
        3. Apply typography improvements
    - **Done-when:**
        1. CTA links verified
        2. Visual design approved
    - **Depends-on:** [T001, T003]

## Content Sections
- [ ] **T006 · Feature · P2: Create FeatureShowcase section**
    - **Context:** FeatureShowcase Section in PLAN.md
    - **Action:**
        1. Create `sections/FeatureShowcase.tsx`
        2. Implement before/after comparison UI
        3. Add demo translations
    - **Done-when:**
        1. Interactive demo functioning
        2. Mobile responsive
    - **Depends-on:** [T002]

- [ ] **T007 · Feature · P2: Create TrumpismExamples section**
    - **Context:** TrumpismExamples Section in PLAN.md
    - **Action:**
        1. Create `sections/TrumpismExamples.tsx`
        2. Implement grid layout with TexturedCard
        3. Populate with example translations
    - **Done-when:**
        1. All examples display correctly
        2. Verified responsive behavior
    - **Depends-on:** [T002]

- [ ] **T008 · Feature · P2: Create InstallationGuide section**
    - **Context:** InstallationGuide Section in PLAN.md
    - **Action:**
        1. Create `sections/InstallationGuide.tsx`
        2. Implement step-by-step instructions
        3. Add Chrome Store/GitHub links
    - **Done-when:**
        1. All links verified
        2. Screenshots added (if applicable)
    - **Depends-on:** [T003]

- [ ] **T009 · Feature · P2: Create Footer section**
    - **Context:** Footer Enhancement in PLAN.md
    - **Action:**
        1. Create `sections/Footer.tsx`
        2. Add GitHub link and copyright
        3. Implement responsive layout
    - **Done-when:**
        1. Links pass security checks
        2. Mobile layout approved
    - **Depends-on:** [T003]

## Polish & QA
- [ ] **T010 · Feature · P3: Implement animations**
    - **Context:** Visual Enhancements in PLAN.md
    - **Action:**
        1. Add Framer Motion to key components
        2. Implement reduced motion variant
        3. Add StarDecoration elements
    - **Done-when:**
        1. Animation passes a11y checks
        2. Performance budget met
    - **Depends-on:** [T005-T009]

- [ ] **T011 · Test · P1: Write component tests**
    - **Context:** Testing Strategy in PLAN.md
    - **Action:**
        1. Test ExternalLink and SectionHeading
        2. Add interaction tests for FeatureShowcase
    - **Done-when:**
        1. 100% coverage on shared components
    - **Depends-on:** [T002, T003]

- [ ] **T012 · Test · P2: Conduct e2e tests**
    - **Context:** Testing Strategy in PLAN.md
    - **Action:**
        1. Verify Chrome Store/GitHub links
        2. Test critical user flows
    - **Done-when:**
        1. All external links validated
    - **Depends-on:** [T005, T008, T009]

## Accessibility
- [ ] **T013 · Feature · P1: Implement a11y fixes**
    - **Context:** Accessibility & Responsive Design in PLAN.md
    - **Action:**
        1. Audit with axe-core
        2. Add keyboard navigation
        3. Ensure color contrast compliance
    - **Done-when:**
        1. WCAG 2.1 AA compliance
    - **Depends-on:** [T010]
```