```markdown
# Todo

## Foundation/Shared Components
- [ ] **T001 · Feature · P1: set up global typography**
    - **Context:** Phase 1: Typography & Foundation, Step 1
    - **Action:**
        1. Select recommended display and body fonts.
        2. Implement fonts using `next/font` in the appropriate layout file (`_app.tsx` or `app/layout.tsx`).
        3. Configure font families and semantic names in `tailwind.config.ts`.
        4. Apply base typography styles globally (e.g., in `globals.css`).
    - **Done‑when:**
        1. Fonts are loaded correctly.
        2. Tailwind classes for semantic font names are available.
        3. Base text elements use the new body font.
    - **Verification:**
        1. Inspect page elements to confirm font usage.
        2. Check network tab for font file loading.
    - **Depends‑on:** none
- [ ] **T002 · Feature · P2: create section heading component**
    - **Context:** Phase 1: Typography & Foundation, Step 2; Architecture Blueprint: New Components
    - **Action:**
        1. Create `shared/SectionHeading.tsx`.
        2. Implement component accepting `level` (h1-h6), `children`, and styling props.
        3. Apply retro styling and use a display font configured in T001.
    - **Done‑when:**
        1. `SectionHeading` component exists and is importable.
        2. Component renders correct semantic heading tag.
        3. Basic styling is applied using configured fonts.
    - **Verification:**
        1. Render the component in isolation or Storybook.
        2. Inspect rendered HTML tag and applied styles.
    - **Depends‑on:** [T001]
- [ ] **T003 · Feature · P2: create external link component**
    - **Context:** Phase 1: Typography & Foundation, Step 2; Architecture Blueprint: New Components
    - **Action:**
        1. Create `shared/ExternalLink.tsx`.
        2. Implement component accepting `href`, `children`, and optional `variant` ('button', 'text').
        3. Ensure `target="_blank"` and `rel="noopener noreferrer"` attributes are included.
        4. Apply basic styling for text and button variants (leveraging `RetroButton.tsx` for the button variant).
    - **Done‑when:**
        1. `ExternalLink` component exists and is importable.
        2. Component renders an `<a>` tag with correct attributes.
        3. Button variant uses `RetroButton`.
    - **Verification:**
        1. Render the component with text and button variants.
        2. Inspect link attributes in browser dev tools.
    - **Depends‑on:** none
- [ ] **T004 · Chore · P2: set up storybook for component visual testing**
    - **Context:** Testing Strategy: Visual Tests
    - **Action:**
        1. Install Storybook dependencies.
        2. Configure Storybook for Next.js and Tailwind.
        3. Ensure basic setup allows rendering React components.
    - **Done‑when:**
        1. Storybook runs locally without errors.
        2. Can render a minimal test component in Storybook.
    - **Verification:**
        1. Run `npm run storybook` (or equivalent).
        2. Verify Storybook UI loads in the browser.
    - **Depends‑on:** none
- [ ] **T005 · Test · P2: add visual tests for section heading in storybook**
    - **Context:** Testing Strategy: Visual Tests
    - **Action:**
        1. Create a Storybook story file for `SectionHeading.tsx`.
        2. Add stories covering different heading levels (h2, h3) and content.
    - **Done‑when:**
        1. `SectionHeading` component is rendered correctly in Storybook.
        2. Stories demonstrate different `level` props.
    - **Verification:**
        1. View the `SectionHeading` stories in Storybook.
    - **Depends‑on:** [T002, T004]
- [ ] **T006 · Test · P2: add visual tests for external link in storybook**
    - **Context:** Testing Strategy: Visual Tests
    - **Action:**
        1. Create a Storybook story file for `ExternalLink.tsx`.
        2. Add stories covering text and button variants with example URLs.
    - **Done‑when:**
        1. `ExternalLink` component is rendered correctly in Storybook.
        2. Stories demonstrate both 'text' and 'button' variants.
    - **Verification:**
        1. View the `ExternalLink` stories in Storybook.
    - **Depends‑on:** [T003, T004]
- [ ] **T007 · Test · P2: write unit tests for external link component**
    - **Context:** Testing Strategy: Unit Tests
    - **Action:**
        1. Create test file for `ExternalLink.tsx`.
        2. Test that `href`, `target="_blank"`, and `rel="noopener noreferrer"` are correctly rendered.
        3. Test rendering different variants.
    - **Done‑when:**
        1. Unit tests for `ExternalLink` component pass.
    - **Verification:**
        1. Run unit tests (`npm test` or equivalent).
    - **Depends‑on:** [T003]
- [ ] **T008 · Test · P2: write unit tests for section heading component**
    - **Context:** Testing Strategy: Unit Tests
    - **Action:**
        1. Create test file for `SectionHeading.tsx`.
        2. Test that the correct semantic heading tag is rendered based on the `level` prop.
        3. Test rendering children content.
    - **Done‑when:**
        1. Unit tests for `SectionHeading` component pass.
    - **Verification:**
        1. Run unit tests (`npm test` or equivalent).
    - **Depends‑on:** [T002]

## Hero Section
- [ ] **T009 · Refactor · P1: update hero section description text**
    - **Context:** Phase 2: Hero Section Enhancement, Step 3; Success Criteria
    - **Action:**
        1. Locate the description text in `components/Hero.tsx`.
        2. Replace existing text with "Translates text to Trumpisms (e.g., 'ISIS' → 'Evil Losers', 'Hillary Clinton' → 'Crooked Hillary')".
    - **Done‑when:**
        1. The description text on the Hero section matches the required string.
    - **Verification:**
        1. View the splash page in a browser and read the Hero description.
    - **Depends‑on:** none
- [ ] **T010 · Feature · P1: add chrome store cta button to hero**
    - **Context:** Phase 2: Hero Section Enhancement, Step 3; Success Criteria
    - **Action:**
        1. Import the `ExternalLink` component into `components/Hero.tsx`.
        2. Add a call to action button (using `ExternalLink` with `variant="button"`) below the description.
        3. Set the `href` to the Chrome Web Store URL (`https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd`).
        4. Add appropriate button text (e.g., "Get Trump Goggles").
    - **Done‑when:**
        1. A button is visible in the Hero section.
        2. Clicking the button opens the Chrome Web Store page in a new tab.
    - **Verification:**
        1. View the splash page in a browser.
        2. Click the new button and verify the correct page opens.
    - **Depends‑on:** [T003, T009]
- [ ] **T011 · Refactor · P1: enhance hero section typography and styling**
    - **Context:** Phase 2: Hero Section Enhancement, Step 3; Phase 4: Polish & Animation, Step 8
    - **Action:**
        1. Apply display fonts (from T001) to Hero headings for visual impact.
        2. Refine spacing and layout within the Hero section.
        3. Integrate `StarDecoration` elements for visual enhancement.
    - **Done‑when:**
        1. Hero headings use the configured display font.
        2. Hero section layout feels balanced and visually appealing.
        3. Star decorations are present in the Hero section.
    - **Verification:**
        1. View the updated Hero section in a browser.
    - **Depends‑on:** [T001]

## Content Sections
- [ ] **T012 · Feature · P2: create featureshowcase section component**
    - **Context:** Phase 3: Content Sections, Step 4; Architecture Blueprint: New Components
    - **Action:**
        1. Create `sections/FeatureShowcase.tsx`.
        2. Implement the component using `SectionHeading` and `TexturedCard`.
        3. Add content describing the feature with before/after examples (text only, no actual translation logic).
    - **Done‑when:**
        1. `FeatureShowcase` component exists and is importable.
        2. Component renders a heading and content cards explaining the feature.
    - **Verification:**
        1. Render the component in isolation or Storybook.
    - **Depends‑on:** [T002]
- [ ] **T013 · Feature · P2: create trumpismexamples section component**
    - **Context:** Phase 3: Content Sections, Step 5; Architecture Blueprint: New Components
    - **Action:**
        1. Create `sections/TrumpismExamples.tsx`.
        2. Implement the component using `SectionHeading` and `TexturedCard`.
        3. Create a grid layout for 4-6 example translations (e.g., using Tailwind grid classes).
        4. Add the example Trumpisms provided in the plan to individual cards.
    - **Done‑when:**
        1. `TrumpismExamples` component exists and is importable.
        2. Component renders a heading and a grid of example translations in cards.
    - **Verification:**
        1. Render the component in isolation or Storybook.
    - **Depends‑on:** [T002]
- [ ] **T014 · Feature · P2: create installationguide section component**
    - **Context:** Phase 3: Content Sections, Step 6; Architecture Blueprint: New Components
    - **Action:**
        1. Create `sections/InstallationGuide.tsx`.
        2. Implement the component using `SectionHeading`.
        3. Write clear step-by-step instructions for installing the extension.
        4. Include prominent links to the Chrome Store and GitHub using `ExternalLink`.
    - **Done‑when:**
        1. `InstallationGuide` component exists and is importable.
        2. Component renders installation steps and links.
    - **Verification:**
        1. Render the component in isolation or Storybook.
    - **Depends‑on:** [T002, T003]
- [ ] **T015 · Feature · P2: create/enhance footer component**
    - **Context:** Phase 3: Content Sections, Step 7; Architecture Blueprint: New Components
    - **Action:**
        1. Create `sections/Footer.tsx` or enhance the existing footer.
        2. Add a link to the GitHub repository (`https://github.com/phrazzld/trump-goggles`) using `ExternalLink`.
        3. Include a copyright notice.
        4. Add a brief disclaimer if deemed necessary.
    - **Done‑when:**
        1. Footer component exists.
        2. GitHub link, copyright, and disclaimer are present in the footer.
    - **Verification:**
        1. Render the component in isolation or Storybook.
    - **Depends‑on:** [T003]

## Page Assembly
- [ ] **T016 · Feature · P1: integrate new sections into the main page layout**
    - **Context:** Implementation Steps (implicitly required to assemble sections)
    - **Action:**
        1. Open the main page file (`app/page.tsx` or equivalent).
        2. Import the new section components (`FeatureShowcase`, `TrumpismExamples`, `InstallationGuide`, `Footer`).
        3. Arrange the sections in a logical order below the Hero section.
    - **Done‑when:**
        1. The full splash page renders with the Hero, FeatureShowcase, TrumpismExamples, InstallationGuide, and Footer sections visible.
    - **Verification:**
        1. View the full splash page in a browser.
    - **Depends‑on:** [T012, T013, T014, T015]

## Polish & Layout
- [ ] **T017 · Feature · P2: add subtle entrance animations to sections**
    - **Context:** Phase 4: Polish & Animation, Step 8
    - **Action:**
        1. Identify sections or key elements within sections that should animate on entrance.
        2. Implement subtle entrance animations using Framer Motion (e.g., fade-in, slide-up).
    - **Done‑when:**
        1. Sections or elements animate into view as the user scrolls down.
    - **Verification:**
        1. View the splash page in a browser and scroll down.
    - **Depends‑on:** [T016]
- [ ] **T018 · Refactor · P1: ensure animations respect prefers-reduced-motion**
    - **Context:** Phase 4: Polish & Animation, Step 8
    - **Action:**
        1. Implement logic (e.g., using a hook or Framer Motion's built-in support) to detect `prefers-reduced-motion`.
        2. Disable or simplify animations when `prefers-reduced-motion` is enabled.
    - **Done‑when:**
        1. Animations are disabled or significantly reduced when the user's system preference is set to reduce motion.
    - **Verification:**
        1. Change system settings to "reduce motion".
        2. View the splash page and verify animations are minimal or off.
    - **Depends‑on:** [T017]
- [ ] **T019 · Feature · P2: integrate stardecoration elements throughout the page**
    - **Context:** Phase 4: Polish & Animation, Step 8
    - **Action:**
        1. Identify areas in the layout or within sections to add `StarDecoration` elements.
        2. Add instances of the existing `StarDecoration` component for visual flair.
    - **Done‑when:**
        1. Star decorations are visibly integrated into the page layout beyond the Hero.
    - **Verification:**
        1. View the full splash page in a browser.
    - **Depends‑on:** [T016]
- [ ] **T020 · Refactor · P1: refactor page spacing and visual rhythm**
    - **Context:** Phase 4: Polish & Animation, Step 8
    - **Action:**
        1. Review the spacing between sections and within components.
        2. Apply consistent padding, margins, and gaps using Tailwind classes.
        3. Ensure a clear visual hierarchy and flow.
    - **Done‑when:**
        1. Spacing feels consistent and intentional throughout the page.
        2. Sections are clearly delineated but flow together visually.
    - **Verification:**
        1. Visually inspect the page layout in a browser.
    - **Depends‑on:** [T016]
- [ ] **T021 · Refactor · P1: ensure interactive elements have focus states & keyboard support**
    - **Context:** Phase 4: Polish & Animation, Step 9 (Accessibility)
    - **Action:**
        1. Identify all interactive elements (buttons, links) added or modified.
        2. Ensure they are keyboard navigable (e.g., using native elements or proper WAI-ARIA roles/attributes).
        3. Verify visible focus states are present when navigating with a keyboard.
    - **Done‑when:**
        1. All interactive elements can be reached and activated using only a keyboard.
        2. A clear visual indicator shows the currently focused element.
    - **Verification:**
        1. Navigate the page using only the Tab key.
    - **Depends‑on:** [T010, T014, T015]
- [ ] **T022 · Feature · P1: implement responsive design for all sections and main layout**
    - **Context:** Phase 4: Polish & Animation, Step 9 (Responsive Design)
    - **Action:**
        1. Review layout and content across standard breakpoints (sm, md, lg, xl, 2xl).
        2. Adjust styling (flex direction, grid columns, font sizes, spacing) as needed using responsive Tailwind classes.
        3. Ensure content remains readable and usable on small screens.
    - **Done‑when:**
        1. The page layout adapts gracefully to different screen sizes.
        2. Content and interactions are usable on mobile, tablet, and desktop breakpoints.
    - **Verification:**
        1. Test the page in browser developer tools using device emulation or resize the browser window.
    - **Depends‑on:** [T016, T020]

## Testing & QA
- [ ] **T023 · Test · P2: write component tests for section components**
    - **Context:** Testing Strategy: Component Tests
    - **Action:**
        1. Create test files for `FeatureShowcase`, `TrumpismExamples`, `InstallationGuide`, and `Footer` components.
        2. Write tests to verify components render