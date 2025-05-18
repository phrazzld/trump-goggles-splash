# Todo

## Typography & Foundation
- [ ] **T001 · Feature · P0: implement typography overhaul with retro display and body fonts**
    - **Context:** PLAN.md - Phase 1: Typography Overhaul
    - **Action:**
        1. Select bold display fonts (e.g., Ultra, Impact, or Playfair Display Black) and body fonts (e.g., Inter) as per recommendations.
        2. Implement selected fonts using `next/font` for optimal loading.
        3. Configure font families in `tailwind.config.ts` with semantic names (e.g., `font-display`, `font-body`) and apply globally for consistent hierarchy.
    - **Done‑when:**
        1. Selected fonts are correctly loaded and applied across the application.
        2. Semantic font names are configured and usable in Tailwind CSS.
        3. Typography meets "Bold, attention-grabbing typography" success criterion.
    - **Verification:**
        1. Inspect text elements in browser dev tools to confirm correct font families and weights.
        2. Check network tab for font loading performance; no FOUT.
    - **Depends‑on:** none

## Shared Components
- [ ] **T002 · Feature · P1: create SectionHeading shared component**
    - **Context:** PLAN.md - Phase 1: Create Core Shared Components; Architecture Blueprint: `shared/SectionHeading.tsx`
    - **Action:**
        1. Create the `shared/SectionHeading.tsx` component.
        2. Implement configurable semantic heading levels (h1-h6) with retro styling, using typography from T001.
    - **Done‑when:**
        1. `SectionHeading.tsx` component is created and exports correctly.
        2. Component accepts `level` and `children` props, rendering appropriate semantic HTML.
        3. Styling aligns with the Retro Americana theme.
    - **Verification:**
        1. Render the component with different levels and content in Storybook or a test page.
        2. Inspect styles and HTML structure.
    - **Depends‑on:** [T001]

- [ ] **T003 · Feature · P1: create ExternalLink shared component**
    - **Context:** PLAN.md - Phase 1: Create Core Shared Components; Architecture Blueprint: `shared/ExternalLink.tsx`
    - **Action:**
        1. Create the `shared/ExternalLink.tsx` component.
        2. Implement styling for button and text variants, ensuring `target="_blank"` and `rel="noopener noreferrer"` for security.
    - **Done‑when:**
        1. `ExternalLink.tsx` component is created and exports correctly.
        2. Component renders `<a>` tags with correct security attributes.
        3. Button and text variants are visually distinct and functional.
    - **Verification:**
        1. Render component with different variants and URLs in Storybook or a test page.
        2. Inspect link attributes; click link to verify it opens in a new tab.
    - **Depends‑on:** [T001]

## Hero Section
- [ ] **T004 · Refactor · P0: update Hero.tsx functionality description**
    - **Context:** PLAN.md - Phase 2: Hero Section Enhancement (Correct Functionality Description)
    - **Action:**
        1. Modify `Hero.tsx` to display the description: "Translates text to Trumpisms (e.g., 'ISIS' → 'Evil Losers', 'Hillary Clinton' → 'Crooked Hillary')".
    - **Done‑when:**
        1. The hero section accurately describes the extension's functionality as specified.
        2. Meets "Accurate extension description" success criterion.
    - **Verification:**
        1. View the splash page and confirm the hero description text is correct.
    - **Depends‑on:** none

- [ ] **T005 · Feature · P0: add Chrome Web Store CTA to Hero.tsx**
    - **Context:** PLAN.md - Phase 2: Hero Section Enhancement (Add Chrome Store link)
    - **Action:**
        1. Integrate the `ExternalLink` component (from T003) into `Hero.tsx` as a prominent Call to Action (CTA) button.
        2. Link the CTA to the Chrome Web Store URL: `https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd`.
    - **Done‑when:**
        1. A CTA button linking to the Chrome Web Store is present and functional in the hero section.
        2. Meets "Chrome Web Store link prominently displayed" success criterion.
    - **Verification:**
        1. Click the CTA button on the splash page and verify it opens the correct Chrome Web Store page in a new tab.
    - **Depends‑on:** [T003]

- [ ] **T006 · Refactor · P1: enhance Hero.tsx visual impact and styling**
    - **Context:** PLAN.md - Phase 2: Hero Section Enhancement (typography improvements, decorations)
    - **Action:**
        1. Apply improved typography (from T001) to headings and text within `Hero.tsx`.
        2. Integrate `StarDecoration.tsx` elements to enhance the Retro Americana theme.
    - **Done‑when:**
        1. The hero section's visual design is improved, aligning with the theme and typography guidelines.
    - **Verification:**
        1. Visually inspect the hero section for typography and decoration changes.
    - **Depends‑on:** [T001, T004, T005]

## Content Sections
- [ ] **T007 · Feature · P1: create FeatureShowcase section component**
    - **Context:** PLAN.md - Phase 3: Content Sections; Architecture Blueprint: `sections/FeatureShowcase.tsx`
    - **Action:**
        1. Create the `sections/FeatureShowcase.tsx` component.
        2. Use `SectionHeading` (T002) for the section title.
        3. Implement visual before/after comparisons of Trumpism translations using `TexturedCard.tsx`.
    - **Done‑when:**
        1. `FeatureShowcase.tsx` component is created and displays content as planned.
        2. The section clearly explains and demonstrates extension functionality.
    - **Verification:**
        1. View the section on the splash page, ensuring visual comparisons are clear.
    - **Depends‑on:** [T002]

- [ ] **T008 · Feature · P1: create TrumpismExamples section component**
    - **Context:** PLAN.md - Phase 3: Content Sections; Architecture Blueprint: `sections/TrumpismExamples.tsx`
    - **Action:**
        1. Create the `sections/TrumpismExamples.tsx` component.
        2. Use `SectionHeading` (T002) for the section title.
        3. Display a grid of 4-6 popular translations (from PLAN.md) using `TexturedCard.tsx` for each example.
    - **Done‑when:**
        1. `TrumpismExamples.tsx` component is created and displays a grid of example translations.
        2. Section showcases the extension's humor and personality.
    - **Verification:**
        1. View the section and confirm all example translations are present and correctly displayed in a responsive grid.
    - **Depends‑on:** [T002]

- [ ] **T009 · Feature · P1: create InstallationGuide section component**
    - **Context:** PLAN.md - Phase 3: Content Sections; Architecture Blueprint: `sections/InstallationGuide.tsx`
    - **Action:**
        1. Create the `sections/InstallationGuide.tsx` component.
        2. Use `SectionHeading` (T002) for the section title.
        3. Provide clear step-by-step installation instructions, integrating prominent Chrome Store and GitHub links using `ExternalLink` (T003).
    - **Done‑when:**
        1. `InstallationGuide.tsx` component is created with clear instructions and functional links.
    - **Verification:**
        1. View the section, verify instructions are easy to follow.
        2. Click Chrome Store and GitHub links to ensure they navigate to correct URLs.
    - **Depends‑on:** [T002, T003]

- [ ] **T010 · Feature · P2: create SocialProof section component**
    - **Context:** PLAN.md - Phase 3: Content Sections; Architecture Blueprint: `sections/SocialProof.tsx`
    - **Action:**
        1. Create the `sections/SocialProof.tsx` component.
        2. Use `SectionHeading` (T002) for the section title.
        3. Implement display for user testimonials; if content is unavailable, use a well-designed placeholder (see T025).
    - **Done‑when:**
        1. `SocialProof.tsx` component is created and displays testimonials or a suitable placeholder.
    - **Verification:**
        1. View the section to confirm content or placeholder is displayed appropriately.
    - **Depends‑on:** [T002, T025]

- [ ] **T011 · Feature · P1: create/enhance Footer section component**
    - **Context:** PLAN.md - Phase 3: Content Sections; Architecture Blueprint: `sections/Footer.tsx`
    - **Action:**
        1. Create or enhance the `sections/Footer.tsx` component.
        2. Add a link to the GitHub repository (`https://github.com/phrazzld/trump-goggles`) using `ExternalLink` (T003).
        3. Include a copyright notice and a brief disclaimer if needed.
    - **Done‑when:**
        1. Footer component is present and includes the GitHub link, copyright, and any disclaimer.
        2. Meets "GitHub repository link in footer" success criterion.
    - **Verification:**
        1. View the footer, click the GitHub link to verify it navigates correctly.
    - **Depends‑on:** [T003]

## Polish & Animation
- [ ] **T012 · Feature · P2: implement entrance animations with Framer Motion**
    - **Context:** PLAN.md - Phase 4: Polish & Animation
    - **Action:**
        1. Integrate Framer Motion to add subtle entrance animations for major content sections.
        2. Ensure all animations respect the `prefers-reduced-motion` media query.
    - **Done‑when:**
        1. Sections have entrance animations that enhance user experience.
        2. Animations are disabled if `prefers-reduced-motion` is enabled.
    - **Verification:**
        1. Observe animations on page load/scroll.
        2. Enable `prefers-reduced-motion` in OS/browser settings and confirm animations are disabled.
    - **Depends‑on:** [T006, T007, T008, T009, T010, T011]

- [ ] **T013 · Refactor · P2: integrate additional StarDecoration elements**
    - **Context:** PLAN.md - Phase 4: Polish & Animation
    - **Action:**
        1. Strategically add more instances of the existing `StarDecoration.tsx` component throughout various sections to enhance the retro theme.
    - **Done‑when:**
        1. `StarDecoration` elements are tastefully integrated, reinforcing the theme without cluttering the page.
    - **Verification:**
        1. Visually inspect the page for balanced and thematic use of star decorations.
    - **Depends‑on:** [T006, T007, T008, T009, T010, T011]

- [ ] **T014 · Refactor · P1: ensure consistent spacing and visual rhythm**
    - **Context:** PLAN.md - Phase 4: Polish & Animation
    - **Action:**
        1. Review and adjust margins, paddings, and gaps between and within all sections and components for consistency.
        2. Ensure the page layout adheres to a consistent visual rhythm.
    - **Done‑when:**
        1. The page exhibits consistent spacing and a professional visual flow.
        2. Meets "Page feels 'full' and professionally designed" success criterion.
    - **Verification:**
        1. Visually inspect the entire page for spacing consistency and visual balance.
    - **Depends‑on:** [T006, T007, T008, T009, T010, T011]

## Accessibility & Responsiveness
- [ ] **T015 · Refactor · P0: ensure WCAG 2.1 AA compliance**
    - **Context:** PLAN.md - Phase 4: Polish & Animation (Accessibility)
    - **Action:**
        1. Conduct an accessibility audit (e.g., using axe-core, Lighthouse).
        2. Address any identified issues related to contrast, ARIA attributes, semantic HTML, etc., to meet WCAG 2.1 Level AA.
    - **Done‑when:**
        1. The page achieves WCAG 2.1 AA compliance.
        2. Meets "All sections responsive and accessible" success criterion (accessibility part).
    - **Verification:**
        1. Run accessibility audit tools and confirm no WCAG 2.1 AA violations.
        2. Perform manual checks for common accessibility issues.
    - **Depends‑on:** [T014]

- [ ] **T016 · Feature · P0: implement keyboard navigation support**
    - **Context:** PLAN.md - Phase 4: Polish & Animation (Accessibility)
    - **Action:**
        1. Ensure all interactive elements (links, buttons) are focusable and operable via keyboard.
        2. Verify a logical tab order throughout the page.
    - **Done‑when:**
        1. The entire page can be navigated and interacted with using only a keyboard.
    - **Verification:**
        1. Manually navigate the page using Tab, Shift+Tab, Enter, and Space keys.
    - **Depends‑on:** [T015]

- [ ] **T017 · Feature · P0: implement clear focus states for interactive elements**
    - **Context:** PLAN.md - Phase 4: Polish & Animation (Accessibility)
    - **Action:**
        1. Design and implement visually distinct focus states for all interactive elements, consistent with the retro theme.
    - **Done‑when:**
        1. All interactive elements display a clear visual indicator when they receive keyboard focus.
    - **Verification:**
        1. Tab through interactive elements and confirm focus states are visible and clear.
    - **Depends‑on:** [T016]

- [ ] **T018 · Refactor · P0: ensure responsive design across all breakpoints**
    - **Context:** PLAN.md - Phase 4: Polish & Animation (Responsive Design)
    - **Action:**
        1. Test the page layout and functionality across all specified breakpoints (mobile, tablet, desktop).
        2. Adjust Tailwind CSS classes as needed to ensure content is well-organized and usable on all screen sizes.
    - **Done‑when:**
        1. The page is fully responsive, with no layout issues or horizontal scrolling on any target breakpoint.
        2. Meets "All sections responsive and accessible" success criterion (responsive part).
    - **Verification:**
        1. Test the page using browser developer tools for device emulation and by resizing the browser window.
    - **Depends‑on:** [T015]

## Testing
- [ ] **T019 · Test · P1: write unit tests for SectionHeading component**
    - **Context:** PLAN.md - Testing Strategy (Unit Tests)
    - **Action:**
        1. Create unit tests for `shared/SectionHeading.tsx`.
        2. Cover different heading levels and content rendering.
    - **Done‑when:**
        1. Unit tests for `SectionHeading` achieve satisfactory coverage and pass.
    - **Verification:**
        1. Review test coverage reports.
    - **Depends‑on:** [T002]

- [ ] **T020 · Test · P1: write unit tests for ExternalLink component**
    - **Context:** PLAN.md - Testing Strategy (Unit Tests)
    - **Action:**
        1. Create unit tests for `shared/ExternalLink.tsx`.
        2. Cover variants, security attributes, and `href` rendering.
    - **Done‑when:**
        1. Unit tests for `ExternalLink` achieve satisfactory coverage