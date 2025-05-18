# Todo

## Global Styles & Typography
- [ ] **T001 · Feature · P0: implement bold retro display and body typography**
    - **Context:** Phase 1: Typography Overhaul (PLAN.md)
    - **Action:**
        1. Select and import Ultra/Impact/Playfair Display Black + Inter via `next/font`
        2. Configure semantic font families in `tailwind.config.ts`
        3. Apply font classes globally and establish hierarchy
    - **Done‑when:**
        1. Fonts load correctly; display and body fonts are visually distinct and retro-themed
        2. All headings, body text use intended fonts as per design
        3. No layout shifts or FOUT in production build
    - **Verification:**
        1. Inspect all breakpoints for font family and fallback correctness
        2. Check Lighthouse for font performance and text visibility
    - **Depends‑on:** none

## shared/SectionHeading.tsx
- [ ] **T002 · Feature · P1: create SectionHeading component with retro styling**
    - **Context:** Phase 1: Create Core Shared Components (PLAN.md)
    - **Action:**
        1. Implement configurable (level, alignment, accent) SectionHeading atom with retro styling
        2. Add Storybook stories for all variants and edge cases
    - **Done‑when:**
        1. SectionHeading renders with correct typography, color, and optional decorations
        2. All variants are covered in Storybook, including accessibility
    - **Verification:**
        1. Storybook visually confirms all variants
        2. Run axe accessibility check on stories
    - **Depends‑on:** [T001]

## shared/ExternalLink.tsx
- [ ] **T003 · Feature · P1: create ExternalLink component with security attributes**
    - **Context:** Phase 1: Create Core Shared Components (PLAN.md)
    - **Action:**
        1. Implement ExternalLink supporting button/text styles with `rel="noopener noreferrer"` and `target="_blank"`
        2. Add Storybook stories for all variants and edge cases
    - **Done‑when:**
        1. ExternalLink renders as styled link or button, passes security checks, and is accessible
        2. All variants are documented in Storybook
    - **Verification:**
        1. Inspect element to confirm attributes
        2. Storybook a11y check passes
    - **Depends‑on:** [T001]

## Hero.tsx
- [ ] **T004 · Feature · P0: update Hero section with accurate description and CTA**
    - **Context:** Phase 2: Hero Section Enhancement (PLAN.md)
    - **Action:**
        1. Update copy to "Translates text to Trumpisms (e.g., 'ISIS' → 'Evil Losers', ...)"
        2. Integrate prominent Chrome Store CTA using ExternalLink
        3. Apply new typography and StarDecoration as per retro theme
    - **Done‑when:**
        1. Hero displays correct extension description and visible CTA button
        2. Typography and decorations match updated design
    - **Verification:**
        1. Manual test: Click CTA → Chrome Store opens in new tab
        2. Visual check for correct copy and style
    - **Depends‑on:** [T001, T003]

## sections/FeatureShowcase.tsx
- [ ] **T005 · Feature · P1: implement FeatureShowcase with before/after comparisons**
    - **Context:** Phase 3: FeatureShowcase Section (PLAN.md)
    - **Action:**
        1. Use TexturedCard(s) to visually compare original vs "Trumpified" text
        2. Provide a clear, concise explanation of extension's function
    - **Done‑when:**
        1. Section displays before/after examples in styled cards
        2. Section is visually distinct and easy to understand
    - **Verification:**
        1. Content matches provided examples; cards render correctly at all sizes
    - **Depends‑on:** [T001, T002]

## sections/TrumpismExamples.tsx
- [ ] **T006 · Feature · P1: create TrumpismExamples grid with example translations**
    - **Context:** Phase 3: TrumpismExamples Section (PLAN.md, "Example Trumpisms to Feature")
    - **Action:**
        1. Display 4–6 Trumpism pairs in a responsive grid of TexturedCards
        2. Ensure each example is styled for humor/impact
    - **Done‑when:**
        1. Section shows all sample Trumpisms, grid is responsive and themed
    - **Verification:**
        1. Visual check for grid layout at all breakpoints
        2. Content matches PLAN.md examples
    - **Depends‑on:** [T001, T002]

## sections/InstallationGuide.tsx
- [ ] **T007 · Feature · P1: build InstallationGuide with step-by-step instructions and links**
    - **Context:** Phase 3: InstallationGuide Section (PLAN.md)
    - **Action:**
        1. Write numbered steps for installing the extension, using clear copy
        2. Add prominent Chrome Store and GitHub links (ExternalLink)
        3. (Optional) Add screenshot/visual aids as images
    - **Done‑when:**
        1. Section is clear, visually distinct, and links function as intended
    - **Verification:**
        1. Manual test: All links open in new tab
        2. Instructions are clear and concise
    - **Depends‑on:** [T001, T002, T003]

## sections/SocialProof.tsx
- [ ] **T008 · Feature · P2: implement SocialProof with user testimonials (if content available)**
    - **Context:** Phase 3: SocialProof Section (PLAN.md)
    - **Action:**
        1. Add testimonials or placeholder if no real content is available
        2. Style using existing card and heading components
    - **Done‑when:**
        1. Section displays at least one testimonial or credible placeholder
    - **Verification:**
        1. Visual check for layout and text
    - **Depends‑on:** [T001, T002]

## sections/Footer.tsx
- [ ] **T009 · Feature · P0: enhance Footer with GitHub link and legal/disclaimer**
    - **Context:** Phase 3: Footer Enhancement (PLAN.md)
    - **Action:**
        1. Add ExternalLink to GitHub repository
        2. Include copyright
        3. Add brief disclaimer if needed
    - **Done‑when:**
        1. Footer present on all pages, links function, and legal text is visible
    - **Verification:**
        1. Click GitHub link → repo opens in new tab
        2. Footer is accessible via screen reader and keyboard
    - **Depends‑on:** [T003]

## Visual Enhancements & Animation
- [ ] **T010 · Feature · P2: add Framer Motion entrance animations and StarDecoration accents**
    - **Context:** Phase 4: Visual Enhancements (PLAN.md)
    - **Action:**
        1. Wrap major sections in Framer Motion for entrance effects; respect `prefers-reduced-motion`
        2. Add additional StarDecoration elements to support retro theme
        3. Adjust spacing and rhythm for visual balance
    - **Done‑when:**
        1. Animations are smooth, non-intrusive, and disabled with reduced motion
        2. StarDecorations are visible but not cluttering
        3. Spacing and layout feel balanced
    - **Verification:**
        1. Use devtools to simulate reduced motion and confirm animation disables
        2. Visual review for clutter and balance
    - **Depends‑on:** [T001, T005, T006, T007]

## Accessibility & Responsive Design
- [ ] **T011 · Feature · P0: ensure accessibility and responsive layout for all sections**
    - **Context:** Phase 4: Accessibility & Responsive Design (PLAN.md)
    - **Action:**
        1. Test keyboard navigation and focus states on all interactive elements
        2. Ensure all components are responsive across breakpoints
        3. Fix contrast, heading order, and ARIA as needed
    - **Done‑when:**
        1. All pages/components pass WCAG 2.1 AA checks
        2. Keyboard navigation is logical and visible
        3. Layouts adapt gracefully to all screen sizes
    - **Verification:**
        1. Run axe/cypress accessibility audit
        2. Manual keyboard and screen reader test
        3. Resize window/device emulation for responsiveness
    - **Depends‑on:** [T004, T005, T006, T007, T008, T009, T010]

## shared/SectionHeading.tsx tests & Storybook
- [ ] **T012 · Test · P1: add unit tests and Storybook for SectionHeading**
    - **Context:** Testing Strategy: Unit, Visual Tests (PLAN.md)
    - **Action:**
        1. Write unit tests for all props/variants of SectionHeading
        2. Ensure Storybook stories cover edge cases and a11y
    - **Done‑when:**
        1. Tests pass in CI; Storybook renders match design
    - **Verification:**
        1. Run test suite and Storybook visual review
    - **Depends‑on:** [T002]

## shared/ExternalLink.tsx tests & Storybook
- [ ] **T013 · Test · P1: add unit tests and Storybook for ExternalLink**
    - **Context:** Testing Strategy: Unit, Visual Tests (PLAN.md)
    - **Action:**
        1. Write unit tests for all ExternalLink variants (button/text)
        2. Ensure Storybook covers a11y and edge cases
    - **Done‑when:**
        1. Tests pass in CI; Storybook renders match design
    - **Verification:**
        1. Run test suite and Storybook visual review
    - **Depends‑on:** [T003]

## E2E: Critical Flows & Link Verification
- [ ] **T014 · Test · P0: add E2E tests for Chrome Store and GitHub links**
    - **Context:** Testing Strategy: E2E Tests (PLAN.md)
    - **Action:**
        1. Write Cypress/Playwright tests to verify Chrome Store and GitHub links open new tabs
        2. Test navigation and focus order across main user flows
    - **Done‑when:**
        1. E2E tests reliably pass in CI
    - **Verification:**
        1. Run E2E suite, confirm link targets and navigation
    - **Depends‑on:** [T004, T009]

## Storybook for All Shared Components
- [ ] **T015 · Test · P2: ensure Storybook coverage for all shared and section components**
    - **Context:** Testing Strategy: Visual Tests (PLAN.md)
    - **Action:**
        1. Create and document stories for all atoms, molecules, and section components
        2. Ensure a11y addon passes for every story
    - **Done‑when:**
        1. Storybook contains all relevant components with docs and a11y
    - **Verification:**
        1. Visual/manual check; run Storybook a11y addon
    - **Depends‑on:** [T002, T003, T005, T006, T007, T008]

## Risk: Typography clash with theme
- [ ] **Issue:** typography choices may not match intended retro Americana theme
    - **Context:** Risk Matrix (PLAN.md)
    - **Blocking?:** no

## Risk: Page visual clutter
- [ ] **Issue:** visual clutter due to excessive decoration or inconsistent spacing
    - **Context:** Risk Matrix (PLAN.md)
    - **Blocking?:** no

## Risk: Content unavailable for testimonials/examples
- [ ] **Issue:** lack of real testimonials or Trumpism examples may require fallback content
    - **Context:** Risk Matrix (PLAN.md)
    - **Blocking?:** no

## Clarification: SocialProof content availability
- [ ] **Issue:** is real testimonial content available, or should only placeholders be used?
    - **Context:** Phase 3: SocialProof Section (PLAN.md)
    - **Blocking?:** no

## Clarification: Final font family choices
- [ ] **Issue:** confirm which display/body fonts are licensed/available for production use
    - **Context:** Typography Recommendations (PLAN.md)
    - **Blocking?:** no

## Clarification: Level of animation desired
- [ ] **Issue:** clarify how much animation (motion) is acceptable for the retro theme and accessibility
    - **Context:** Phase 4: Visual Enhancements (PLAN.md)
    - **Blocking?:** no