# Todo

## Shared Components
- [ ] **T002 · Feature · P2: create SectionHeading component**  
    - **Context:** Phase 1: Create Core Shared Components  
    - **Action:**  
        1. Add `shared/SectionHeading.tsx` exporting a semantic heading component with Retro Americana styling and Tailwind classes.  
        2. Accept `level` (h1–h6) and `children` props.  
        3. Add Storybook stories (default and variants).  
    - **Done-when:**  
        1. Component renders correct HTML heading level and styles.  
        2. Storybook shows stories without errors.  
        3. Unit tests exist covering prop combinations.  
    - **Verification:**  
        1. Verify in Storybook that headings display with chosen fonts and styles.  
    - **Depends-on:** [T001]  

- [ ] **T003 · Feature · P2: create ExternalLink component**  
    - **Context:** Phase 1: Create Core Shared Components  
    - **Action:**  
        1. Add `shared/ExternalLink.tsx` exporting a styled `<a>` or button variant with `target="_blank"`, `rel="noopener noreferrer"`.  
        2. Support `href`, `children`, and `variant` props.  
        3. Add Storybook stories (text/button variants).  
    - **Done-when:**  
        1. Component opens links in new tab securely.  
        2. Storybook stories render without errors.  
        3. Unit tests validate rendered `href`, attributes, and click behavior.  
    - **Verification:**  
        1. Click link in Storybook and confirm correct URL and attributes.  
    - **Depends-on:** [T001]  

## Typography & Foundation
- [ ] **T001 · Feature · P2: configure display and body fonts via next/font and Tailwind**  
    - **Context:** Phase 1: Typography Overhaul  
    - **Action:**  
        1. Select primary display fonts (e.g., Ultra, Impact, or Playfair Display Black) and a body font (Inter).  
        2. Import fonts using `next/font` in `app/layout.tsx` (or equivalent).  
        3. Update `tailwind.config.ts` to define `fontFamily.display` and `fontFamily.body`.  
        4. Apply `font-family` utilities globally (`<html>`/`<body>`).  
    - **Done-when:**  
        1. Fonts load without errors.  
        2. Headings use `font-display`, body text uses `font-body`.  
    - **Verification:**  
        1. Inspect font-family in browser DevTools on headings and paragraphs.  
    - **Depends-on:** none  

## Hero Section
- [ ] **T005 · Feature · P1: update Hero.tsx description and CTA button**  
    - **Context:** Phase 2: Correct Functionality Description  
    - **Action:**  
        1. Change hero copy to "Translates text to Trumpisms (e.g., 'ISIS' → 'Evil Losers', 'Hillary Clinton' → 'Crooked Hillary')".  
        2. Replace/store CTA with Chrome Web Store link via `ExternalLink`.  
        3. Ensure link uses URL: `https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd`.  
    - **Done-when:**  
        1. Hero displays updated text.  
        2. CTA button opens Chrome Web Store in new tab.  
    - **Verification:**  
        1. Click CTA in UI and confirm correct URL.  
    - **Depends-on:** [T003]  

- [ ] **T006 · Refactor · P2: apply new typography and decorations to Hero**  
    - **Context:** Phase 2: Enhance visual impact of Hero  
    - **Action:**  
        1. Update Tailwind classes for headings/body in `Hero.tsx` to use `font-display` and spacing.  
        2. Integrate `StarDecoration` components around hero content.  
    - **Done-when:**  
        1. Hero visually matches Retro Americana mock (bold fonts, stars).  
        2. No layout regressions across viewports.  
    - **Verification:**  
        1. Inspect in browser and compare against style guide.  
    - **Depends-on:** [T001]  

## FeatureShowcase Section
- [ ] **T007 · Feature · P2: create FeatureShowcase section**  
    - **Context:** Phase 3: FeatureShowcase Section  
    - **Action:**  
        1. Add `sections/FeatureShowcase.tsx` showing before/after translation using `TexturedCard`.  
        2. Include `SectionHeading` at top and explanatory text.  
        3. Add Storybook stories for default view.  
    - **Done-when:**  
        1. Section renders two cards side by side with sample text.  
        2. Storybook stories pass component tests.  
    - **Verification:**  
        1. Verify in Storybook that the cards display correct sample translations.  
    - **Depends-on:** [T002]  

## TrumpismExamples Section
- [ ] **T008 · Feature · P2: create TrumpismExamples section**  
    - **Context:** Phase 3: TrumpismExamples Section  
    - **Action:**  
        1. Add `sections/TrumpismExamples.tsx` rendering a grid of 6 `TexturedCard` items with recommended translations.  
        2. Use `SectionHeading` and grid Tailwind utilities.  
        3. Add Storybook stories (grid view).  
    - **Done-when:**  
        1. Six cards display correct example pairs.  
        2. Storybook stories show responsive grid.  
    - **Verification:**  
        1. Resize Storybook viewport and confirm grid adapts.  
    - **Depends-on:** [T002]  

## InstallationGuide Section
- [ ] **T009 · Feature · P2: create InstallationGuide section**  
    - **Context:** Phase 3: InstallationGuide Section  
    - **Action:**  
        1. Add `sections/InstallationGuide.tsx` with numbered steps to install from Chrome Store and link to GitHub.  
        2. Use `ExternalLink` for both links with icons or buttons.  
        3. Add Storybook stories demonstrating the layout.  
    - **Done-when:**  
        1. Instructions list renders with correct links.  
        2. Storybook stories interactive links open correct URLs.  
    - **Verification:**  
        1. Click links in Storybook to ensure correct navigation.  
    - **Depends-on:** [T002, T003]  

## Footer Section
- [ ] **T010 · Feature · P2: create Footer section**  
    - **Context:** Phase 3: Footer Enhancement  
    - **Action:**  
        1. Add `sections/Footer.tsx` with copyright, brief disclaimer, and GitHub link.  
        2. Use `ExternalLink` for GitHub (`https://github.com/phrazzld/trump-goggles`).  
        3. Add Storybook stories.  
    - **Done-when:**  
        1. Footer appears at page bottom with correct text and link.  
        2. Storybook story opens GitHub on click.  
    - **Verification:**  
        1. Confirm link in rendered footer navigates to repository.  
    - **Depends-on:** [T003]  

## Animations & Decorations
- [ ] **T011 · Refactor · P3: add Framer Motion entrance animations**  
    - **Context:** Phase 4: Visual Enhancements  
    - **Action:**  
        1. Wrap Hero and each section component in `motion.div` for fade/slide-in animations.  
        2. Respect `prefers-reduced-motion` via Framer Motion config.  
    - **Done-when:**  
        1. Animations play on page load without jank.  
        2. Turning on reduced motion disables animations.  
    - **Verification:**  
        1. Toggle OS reduced motion setting and observe no animations.  
    - **Depends-on:** [T005, T007, T008, T009, T010]  

- [ ] **T012 · Refactor · P3: sprinkle StarDecoration across sections**  
    - **Context:** Phase 4: Visual Enhancements  
    - **Action:**  
        1. Add `StarDecoration` elements as background accents in FeatureShowcase, TrumpismExamples, and InstallationGuide.  
        2. Position with Tailwind absolute/relative utilities.  
    - **Done-when:**  
        1. Stars appear around section edges consistently.  
    - **Verification:**  
        1. Inspect in browser to confirm star placement.  
    - **Depends-on:** [T007, T008, T009]  

## Accessibility & Responsive Design
- [ ] **T013 · Chore · P1: ensure keyboard navigation and focus states**  
    - **Context:** Phase 4: Accessibility & Responsive Design  
    - **Action:**  
        1. Add visible focus styles (`outline` or box-shadow) to all interactive elements.  
        2. Test tab order through Hero, sections, links, and buttons.  
    - **Done-when:**  
        1. All interactive elements are reachable via keyboard.  
        2. Focus indicator is visible and distinct.  
    - **Verification:**  
        1. Tab through page and confirm logical order and visible focus.  
    - **Depends-on:** [T006, T007, T008, T009, T010]  

- [ ] **T014 · Chore · P1: meet WCAG 2.1 AA color contrast**  
    - **Context:** Phase 4: Accessibility & Responsive Design  
    - **Action:**  
        1. Use axe-core or similar to audit color contrast of text/background.  
        2. Adjust Tailwind theme colors if any failures.  
    - **Done-when:**  
        1. Automated audit report shows no WCAG AA contrast violations.  
    - **Verification:**  
        1. Run `axe-core` in development console and confirm zero contrast errors.  
    - **Depends-on:** [T001, T006]  

- [ ] **T015 · Chore · P2: verify responsive layout at all breakpoints**  
    - **Context:** Phase 4: Accessibility & Responsive Design  
    - **Action:**  
        1. Test page in viewport sizes `sm` through `2xl`.  
        2. Fix any overflow, misalignment, or hidden content.  
    - **Done-when:**  
        1. No horizontal scrolling on any breakpoint.  
        2. Content stacks or reflows appropriately.  
    - **Verification:**  
        1. Manual browser resizing or emulator tests confirm layout stability.  
    - **Depends-on:** [T006, T007, T008, T009, T010]  

## Testing
- [ ] **T016 · Test · P2: write unit tests for SectionHeading**  
    - **Context:** Test Types: Unit Tests for Core Shared Components  
    - **Action:**  
        1. Add Jest/React Testing Library tests in `shared/SectionHeading.test.tsx`.  
        2. Test rendering for each level prop and children.  
    - **Done-when:**  
        1. Coverage reports show 100% branch/line for component.  
    - **Depends-on:** [T002]  

- [ ] **T017 · Test · P2: write unit tests for ExternalLink**  
    - **Context:** Test Types: Unit Tests for Core Shared Components  
    - **Action:**  
        1. Add tests in `shared/ExternalLink.test.tsx` asserting `target`, `rel`, and click behavior.  
    - **Done-when:**  
        1. Tests cover both text and button variants.  
    - **Depends-on:** [T003]  

- [ ] **T018 · Test · P2: add Storybook stories for all new sections**  
    - **Context:** Test Types: Visual Tests via Storybook  
    - **Action:**  
        1. Create stories for `FeatureShowcase`, `TrumpismExamples`, `InstallationGuide`, and `Footer`.  
        2. Integrate accessibility and Chromatic checks in CI.  
    - **Done-when:**  
        1. Stories render without errors and pass accessibility addon checks.  
    - **Depends-on:** [T007, T008, T009, T010]  

- [ ] **T019 · Test · P1: add E2E tests for CTA and footer links**  
    - **Context:** Test Types: E2E Tests for Critical User Flows  
    - **Action:**  
        1. Write Cypress/Playwright test navigating to splash page and clicking Chrome Store CTA.  
        2. Test clicking GitHub link in footer opens repository page.  
    - **Done-when:**  
        1. E2E suite passes with both link navigations verified.  
    - **Depends-on:** [T005, T010]  

### Clarifications & Assumptions
- [ ] **Issue: Which specific fonts should be used for display and body?**  
    - **Context:** PLAN.md Phase 1: Typography Overhaul  
    - **Blocking?:** yes  

- [ ] **Issue: Should the SocialProof section be implemented or omitted/placeholder if testimonials are unavailable?**  
    - **Context:** PLAN.md Phase 3: SocialProof Section (optional)  
    - **Blocking?:** no  