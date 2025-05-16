# Todo

## Foundation Setup
- [ ] **T001 · Chore · P1: initialize project dependencies**
    - **Context:** Next Steps 1 from PLAN.md
    - **Action:**
        1. Run `npm install` or equivalent with the listed dependencies.
        2. Verify package.json matches the provided dependencies.
    - **Done-when:**
        1. Dependencies are installed without errors.
        2. `npm ls` shows all required packages.
    - **Verification:**
        1. Run `npm install` and check for successful installation.
    - **Depends-on:** none

- [ ] **T002 · Feature · P1: set up color palette in Tailwind config**
    - **Context:** Phase 1.1 from PLAN.md
    - **Action:**
        1. Update tailwind.config.ts with the extended colors.
    - **Done-when:**
        1. Tailwind config file compiles without errors.
        2. Custom colors are available in the project.
    - **Verification:**
        1. Apply a color in a component and verify via browser dev tools.
    - **Depends-on:** [T001]

- [ ] **T003 · Feature · P1: configure fonts with next/font**
    - **Context:** Phase 1.2 from PLAN.md
    - **Action:**
        1. Import and configure fonts in layout.tsx using next/font.
    - **Done-when:**
        1. Fonts load correctly in the app.
        2. Typography variables are defined and used.
    - **Verification:**
        1. Inspect rendered HTML to confirm font families are applied.
    - **Depends-on:** [T001]

- [ ] **T004 · Feature · P2: create base layout with responsive container**
    - **Context:** Phase 1.3 from PLAN.md
    - **Action:**
        1. Implement responsive container in layout.tsx.
    - **Done-when:**
        1. Layout renders with responsive behavior.
        2. Container adapts to different screen sizes.
    - **Verification:**
        1. Test on various devices or using browser resize.
    - **Depends-on:** [T002, T003]

- [ ] **T005 · Chore · P2: implement basic CSS reset and global styles**
    - **Context:** Phase 1.4 from PLAN.md
    - **Action:**
        1. Add CSS reset and global styles to globals.css.
    - **Done-when:**
        1. Global styles are applied across the app.
        2. CSS reset is effective in normalizing elements.
    - **Verification:**
        1. Check rendered styles in browser dev tools.
    - **Depends-on:** [T002]

- [ ] **T006 · Chore · P2: set up component structure**
    - **Context:** Phase 1.5 from PLAN.md
    - **Action:**
        1. Create the directory structure in app/components/.
    - **Done-when:**
        1. All specified component files exist.
        2. Basic imports work without errors.
    - **Verification:**
        1. Verify file structure via file explorer or Git.
    - **Depends-on:** [T001]

## Core Components
- [ ] **T007 · Feature · P2: build Hero section with texture overlay**
    - **Context:** Phase 2.1 from PLAN.md
    - **Action:**
        1. Implement textured background in Hero.tsx.
    - **Done-when:**
        1. Hero section renders with texture.
        2. Texture overlay is visible.
    - **Verification:**
        1. Visually inspect the Hero section in the browser.
    - **Depends-on:** [T004, T006]

- [ ] **T008 · Feature · P2: build Hero section with typography hierarchy**
    - **Context:** Phase 2.1 from PLAN.md
    - **Action:**
        1. Add headline and paragraph with specified fonts in Hero.tsx.
    - **Done-when:**
        1. Typography hierarchy is implemented correctly.
        2. Fonts match the design system.
    - **Verification:**
        1. Check font styles in browser dev tools.
    - **Depends-on:** [T007]

- [ ] **T009 · Feature · P2: build Hero section with star decorations**
    - **Context:** Phase 2.1 from PLAN.md
    - **Action:**
        1. Add CSS-only star decorations in Hero.tsx.
    - **Done-when:**
        1. Stars are rendered and positioned correctly.
    - **Verification:**
        1. Confirm stars appear in the Hero section.
    - **Depends-on:** [T008]

- [ ] **T010 · Feature · P2: build Hero section with primary CTA button**
    - **Context:** Phase 2.1 from PLAN.md
    - **Action:**
        1. Implement RetroButton in Hero.tsx.
    - **Done-when:**
        1. Button renders with hover effects.
    - **Verification:**
        1. Test button interactions in the browser.
    - **Depends-on:** [T009]

- [ ] **T011 · Feature · P2: create Features section with card-based layout**
    - **Context:** Phase 2.2 from PLAN.md
    - **Action:**
        1. Build card layout in Features.tsx.
    - **Done-when:**
        1. Features section displays cards.
        2. Layout is responsive.
    - **Verification:**
        1. Verify cards render and respond to screen sizes.
    - **Depends-on:** [T006]

- [ ] **T012 · Feature · P2: create Features section with icon integration**
    - **Context:** Phase 2.2 from PLAN.md
    - **Action:**
        1. Add icons using Lucide React in Features.tsx.
    - **Done-when:**
        1. Icons are displayed in cards.
    - **Verification:**
        1. Inspect icons in the Features section.
    - **Depends-on:** [T011]

- [ ] **T013 · Feature · P2: create Features section with retro borders and shadows**
    - **Context:** Phase 2.2 from PLAN.md
    - **Action:**
        1. Apply custom utilities for borders and shadows in Features.tsx.
    - **Done-when:**
        1. Cards have retro styling.
    - **Verification:**
        1. Check styling via browser dev tools.
    - **Depends-on:** [T012]

- [ ] **T014 · Feature · P2: implement Installation section with browser detection**
    - **Context:** Phase 2.3 from PLAN.md
    - **Action:**
        1. Add browser detection logic in Installation.tsx.
    - **Done-when:**
        1. Detection works and affects UI.
    - **Verification:**
        1. Test with different browsers.
    - **Depends-on:** [T006]

- [ ] **T015 · Feature · P2: implement Installation section with download buttons**
    - **Context:** Phase 2.3 from PLAN.md
    - **Action:**
        1. Add buttons with click handlers in Installation.tsx.
    - **Done-when:**
        1. Buttons render and trigger actions.
    - **Verification:**
        1. Simulate clicks and verify behavior.
    - **Depends-on:** [T014]

- [ ] **T016 · Feature · P2: implement Installation section with compatibility badges**
    - **Context:** Phase 2.3 from PLAN.md
    - **Action:**
        1. Add badges based on detection in Installation.tsx.
    - **Done-when:**
        1. Badges display correctly.
    - **Verification:**
        1. Check badge visibility.
    - **Depends-on:** [T015]

## Polish and Animation
- [ ] **T017 · Feature · P2: add Framer Motion animations for fade-ins**
    - **Context:** Phase 3.1 from PLAN.md
    - **Action:**
        1. Implement fade-in animations in relevant components.
    - **Done-when:**
        1. Elements fade in on scroll.
    - **Verification:**
        1. Scroll the page and observe animations.
    - **Depends-on:** [T010, T013, T016]

- [ ] **T018 · Feature · P2: add Framer Motion animations for star twinkle**
    - **Context:** Phase 3.1 from PLAN.md
    - **Action:**
        1. Add twinkle effects to StarDecoration.tsx.
    - **Done-when:**
        1. Stars twinkle as expected.
    - **Verification:**
        1. Verify twinkle in Hero section.
    - **Depends-on:** [T009]

- [ ] **T019 · Feature · P2: add Framer Motion animations for button hover states**
    - **Context:** Phase 3.1 from PLAN.md
    - **Action:**
        1. Enhance RetroButton.tsx with hover animations.
    - **Done-when:**
        1. Buttons have animated hover effects.
    - **Verification:**
        1. Hover over buttons and check animations.
    - **Depends-on:** [T010]

- [ ] **T020 · Feature · P2: implement texture overlays for paper grain**
    - **Context:** Phase 3.2 from PLAN.md
    - **Action:**
        1. Add paper grain pattern via CSS in globals.css.
    - **Done-when:**
        1. Texture overlays are applied globally.
    - **Verification:**
        1. Inspect background textures.
    - **Depends-on:** [T005]

- [ ] **T021 · Feature · P2: implement texture overlays for vignette effect**
    - **Context:** Phase 3.2 from PLAN.md
    - **Action:**
        1. Add vignette effect in relevant sections.
    - **Done-when:**
        1. Vignette is visible.
    - **Verification:**
        1. Check for vignette in the browser.
    - **Depends-on:** [T020]

- [ ] **T022 · Refactor · P2: add responsive breakpoints**
    - **Context:** Phase 3.3 from PLAN.md
    - **Action:**
        1. Update components with Tailwind responsive classes.
    - **Done-when:**
        1. All sections adapt to breakpoints.
    - **Verification:**
        1. Test responsiveness across screen sizes.
    - **Depends-on:** [T017, T021]

- [ ] **T023 · Chore · P2: optimize performance**
    - **Context:** Phase 3.4 from PLAN.md
    - **Action:**
        1. Apply optimizations like lazy loading.
    - **Done-when:**
        1. Performance metrics meet targets.
    - **Verification:**
        1. Run Lighthouse audit.
    - **Depends-on:** [T022]

## Final Touches
- [ ] **T024 · Feature · P3: add SEO meta tags**
    - **Context:** Phase 4.1 from PLAN.md
    - **Action:**
        1. Implement meta tags in layout.tsx.
    - **Done-when:**
        1. Meta tags are present in HTML.
    - **Verification:**
        1. View page source.
    - **Depends-on:** [T004]

- [ ] **T025 · Feature · P3: add Open Graph images**
    - **Context:** Phase 4.2 from PLAN.md
    - **Action:**
        1. Configure OG images in layout.tsx or next.config.js.
    - **Done-when:**
        1. OG tags are correctly set.
    - **Verification:**
        1. Test with social media debugger.
    - **Depends-on:** [T024]

- [ ] **T026 · Chore · P3: add favicon and app icons**
    - **Context:** Phase 4.3 from PLAN.md
    - **Action:**
        1. Place icons in public directory and reference in HTML.
    - **Done-when:**
        1. Icons are displayed in browser tabs.
    - **Verification:**
        1. Open the page and check tab icon.
    - **Depends-on:** [T024]

- [ ] **T027 · Feature · P3: set up analytics (if needed)**
    - **Context:** Phase 4.4 from PLAN.md
    - **Action:**
        1. Integrate analytics script in layout.tsx.
    - **Done-when:**
        1. Analytics is configured without errors.
    - **Verification:**
        1. Verify script loads in page source.
    - **Depends-on:** [T024]

- [ ] **T028 · Test · P3: perform accessibility audit**
    - **Context:** Phase 4.5 from PLAN.md
    - **Action:**
        1. Run accessibility tools on the page.
    - **Done-when:**
        1. Audit passes with no critical issues.
    - **Verification:**
        1. Use Lighthouse or axe-core for checks.
    - **Depends-on:** [T023]

## Deployment
- [ ] **T029 · Chore · P3: deploy to Vercel**
    - **Context:** Next Steps 6 from PLAN.md
    - **Action:**
        1. Set up and deploy the project to Vercel.
    - **Done-when:**
        1. Deployment succeeds and site is live.
    - **Verification:**
        1. Access the deployed URL and confirm functionality.
    - **Depends-on:** [T028]