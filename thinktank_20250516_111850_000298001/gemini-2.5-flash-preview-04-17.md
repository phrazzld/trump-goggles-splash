```
# Todo

## Project Setup & Foundation
- [ ] **T001 · Chore · P1:** initialize next.js project with app router
    - **Context:** Technical Stack, Implementation Phases (Phase 1)
    - **Action:**
        1. Run `create-next-app` with TypeScript, ESLint, Tailwind CSS, App Router.
        2. Select `src/` directory option.
    - **Done‑when:**
        1. New Next.js project created with specified configuration.
        2. Basic project structure is in place.
    - **Depends‑on:** none
- [ ] **T002 · Chore · P1:** install required package dependencies
    - **Context:** Technical Stack (Package Dependencies), Implementation Phases (Phase 1)
    - **Action:**
        1. Add `framer-motion`, `lucide-react`, `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge` to dependencies.
        2. Run package manager install command.
    - **Done‑when:**
        1. All listed dependencies are added to `package.json`.
        2. Dependencies are installed successfully.
    - **Depends‑on:** [T001]
- [ ] **T003 · Feature · P1:** configure tailwind color palette and fonts
    - **Context:** Design System (Color Palette, Typography), File Structure Implementation (Tailwind Configuration), Implementation Phases (Phase 1)
    - **Action:**
        1. Update `tailwind.config.ts` to include custom colors (`retro` object) from the palette.
        2. Configure font families (`display`, `body`, `accent`) using CSS variables based on `next/font`.
        3. Add vintage `boxShadow` utility.
    - **Done‑when:**
        1. Tailwind config file updated.
        2. Custom colors, fonts, and shadow are available as Tailwind classes.
    - **Verification:**
        1. Apply a retro color class (e.g., `text-retro-blue`) to an element and verify in browser dev tools.
        2. Apply a font class (e.g., `font-display`) and verify in browser dev tools.
    - **Depends‑on:** [T001, T002]
- [ ] **T004 · Feature · P1:** configure fonts with next/font
    - **Context:** Technical Stack (Fonts), Design System (Typography), Implementation Phases (Phase 1)
    - **Action:**
        1. Import and configure `Playfair Display`, `Inter`, and `Courier Prime` using `next/font/google` in `app/layout.tsx`.
        2. Apply fonts to the `body` element using CSS variables.
    - **Done‑when:**
        1. Fonts are configured and loaded via `next/font`.
        2. Fonts are applied globally via CSS variables.
    - **Verification:**
        1. Verify fonts are loaded and applied correctly in the browser.
    - **Depends‑on:** [T001]
- [ ] **T005 · Feature · P1:** implement base layout structure and global styles
    - **Context:** Component Architecture (Layout Structure), File Structure Implementation (Global Styles), Implementation Phases (Phase 1)
    - **Action:**
        1. Create or update `app/layout.tsx` for the root layout.
        2. Add a responsive container element within the layout (can use Tailwind `container` class).
        3. Add basic CSS reset if not already handled by Tailwind.
        4. Add global styles for `body` background color and texture overlay in `app/globals.css`.
        5. Define `--texture-paper` CSS variable.
    - **Done‑when:**
        1. Root layout file created/updated.
        2. Responsive container is present in the layout.
        3. Global body styles (background, texture overlay) are applied.
    - **Verification:**
        1. View the page in a browser; verify cream background and subtle texture are visible.
        2. Resize the browser; verify content is contained within a responsive width.
    - **Depends‑on:** [T001, T003]
- [ ] **T006 · Chore · P2:** set up base component directory structure
    - **Context:** Component Architecture (Layout Structure), Implementation Phases (Phase 1)
    - **Action:**
        1. Create `components/` directory.
        2. Create subdirectories: `ui/`, `shared/`.
    - **Done‑when:**
        1. Required component directories are created.
    - **Depends‑on:** [T001]

## Styling & Utilities
- [ ] **T007 · Feature · P2:** add custom tailwind css utilities
    - **Context:** Rapid Development Strategies (CSS Utilities First), File Structure Implementation (Tailwind Configuration)
    - **Action:**
        1. Define `text-shadow-vintage` utility in `globals.css` using `@layer utilities`.
        2. Define `border-double-retro` utility in `globals.css` using `@layer utilities`.
        3. Define `texture-paper` utility (CSS pattern version) in `globals.css` using `@layer utilities`. Note: Plan also suggests a background image texture, this utility is for the pattern example.
    - **Done‑when:**
        1. Custom CSS utilities are defined and available as Tailwind classes.
    - **Verification:**
        1. Apply `text-shadow-vintage` to a heading and verify the shadow is present.
        2. Apply `border-double-retro` to an element and verify the double border.
        3. Apply `texture-paper` to an element background and verify the pattern.
    - **Depends‑on:** [T003, T005]

## Shared Components
- [ ] **T008 · Feature · P2:** create retrobutton component
    - **Context:** Component Architecture (Custom Retro Components), Implementation Phases (Phase 2)
    - **Action:**
        1. Create `components/shared/RetroButton.tsx`.
        2. Define component props (`variant`, `size`, `children`, `onClick`).
        3. Implement basic styling based on plan details (rounded corners, double border, vintage shadow).
        4. Use `class-variance-authority` and `tailwind-merge` for styling variants/sizes.
    - **Done‑when:**
        1. `RetroButton` component file created.
        2. Component accepts specified props.
        3. Base styling (rounded corners, shadow, double border) is implemented.
    - **Verification:**
        1. Render the button with different variants/sizes in a test page or Storybook.
        2. Verify styling applies correctly.
    - **Depends‑on:** [T002, T006, T007]
- [ ] **T009 · Feature · P2:** create stardecoration component
    - **Context:** Component Architecture (Layout Structure, Hero Section Components), Implementation Phases (Phase 2)
    - **Action:**
        1. Create `components/shared/StarDecoration.tsx`.
        2. Use an SVG star icon (Lucide React or custom).
        3. Implement basic CSS-only styling for position and appearance.
    - **Done‑when:**
        1. `StarDecoration` component file created.
        2. Component renders a star icon.
        3. Basic styling is applied.
    - **Verification:**
        1. Render the component in a test page or Storybook.
        2. Verify the star icon is visible.
    - **Depends‑on:** [T002, T006]
- [ ] **T010 · Feature · P2:** create texturedcard component
    - **Context:** Component Architecture (Shared Components, Component Composition), Implementation Phases (Phase 2)
    - **Action:**
        1. Create `components/shared/TexturedCard.tsx`.
        2. Implement base styling for a card (rounded corners, vintage shadow).
        3. Include the paper texture overlay (either CSS utility or background image).
        4. Design for content composition (`children` prop).
    - **Done‑when:**
        1. `TexturedCard` component file created.
        2. Card has rounded corners, vintage shadow, and texture.
        3. Component renders child content.
    - **Verification:**
        1. Render the card with some sample content.
        2. Verify styling and texture are present.
    - **Depends‑on:** [T006, T007]

## Section Components
- [ ] **T011 · Feature · P1:** build hero section component
    - **Context:** Component Architecture (Hero Section Components), File Structure Implementation (Component Templates), Implementation Phases (Phase 2)
    - **Action:**
        1. Create `components/Hero.tsx`.
        2. Implement the structure based on the provided template (section, container, text-center div).
        3. Add the main headline (`h1`) using `font-display` and `text-shadow-vintage`.
        4. Add the subheading (`p`) using `font-body`.
        5. Include the `RetroButton` component for the CTA.
        6. Integrate `StarDecoration` components with basic positioning.
    - **Done‑when:**
        1. `Hero` component file created.
        2. Hero section structure, text, button, and stars are rendered.
    - **Verification:**
        1. Add the `Hero` component to `app/page.tsx`.
        2. View the page in the browser and verify the Hero section content and basic layout.
    - **Depends‑on:** [T004, T008, T009]
- [ ] **T012 · Feature · P2:** build features section component
    - **Context:** Component Architecture (Features.tsx, Custom Retro Components), Implementation Phases (Phase 2)
    - **Action:**
        1. Create `components/Features.tsx`.
        2. Design a card-based layout (e.g., using a grid).
        3. Use the `TexturedCard` component for individual feature cards.
        4. Integrate icons (Lucide React) and typography (`font-display`, `font-body`) within the cards.
    - **Done‑when:**
        1. `Features` component file created.
        2. Section displays a layout of feature cards using `TexturedCard`.
        3. Cards contain sample icon, title, and description text.
    - **Verification:**
        1. Add the `Features` component to `app/page.tsx`.
        2. View the page and verify the layout and styling of the feature cards.
    - **Depends‑on:** [T002, T004, T010]
- [ ] **T013 · Feature · P2:** build installation section component
    - **Context:** Component Architecture (Installation.tsx), Implementation Phases (Phase 2)
    - **Action:**
        1. Create `components/Installation.tsx`.
        2. Include download buttons (can use `RetroButton` or standard link styling).
        3. Implement basic browser detection logic (if needed, otherwise placeholder buttons).
        4. Add placeholder compatibility badges/icons.
    - **Done‑when:**
        1. `Installation` component file created.
        2. Section includes download buttons and compatibility badges.
        3. Placeholder browser detection logic (if added) is present.
    - **Verification:**
        1. Add the `Installation` component to `app/page.tsx`.
        2. View the page and verify the section layout and elements.
    - **Depends‑on:** [T008]
- [ ] **T014 · Feature · P3:** create footer component
    - **Context:** Component Architecture (Footer.tsx)
    - **Action:**
        1. Create `components/Footer.tsx`.
        2. Include basic links (e.g., Privacy Policy, Terms - placeholders).
        3. Style the footer with appropriate colors/typography.
    - **Done‑when:**
        1. `Footer` component file created.
        2. Footer includes placeholder links and basic styling.
    - **Verification:**
        1. Add the `Footer` component to `app/page.tsx`.
        2. View the page and verify the footer is visible.
    - **Depends‑on:** none

## Polish & Animation
- [ ] **T015 · Feature · P2:** add framer motion fade-in animations on scroll
    - **Context:** Technical Stack (Animations), Implementation Phases (Phase 3)
    - **Action:**
        1. Integrate Framer Motion into relevant components (e.g., sections, cards).
        2. Implement 'fade-in' animations that trigger when the element scrolls into view.
    - **Done‑when:**
        1. Framer Motion is integrated.
        2. Components fade in as they become visible on scroll.
    - **Verification:**
        1. Scroll the page and observe elements fading in.
    - **Depends‑on:** [T002, T011, T012, T013]
- [ ] **T016 · Feature · P3:** add framer motion star twinkle effects
    - **Context:** Technical Stack (Animations), Implementation Phases (Phase 3)
    - **Action:**
        1. Modify `StarDecoration` component to use Framer Motion.
        2. Implement a subtle twinkling or pulsing animation for the stars.
    - **Done‑when:**
        1. `StarDecoration` component uses Framer Motion.
        2. Stars exhibit a subtle animation.
    - **Verification:**
        1. View the Hero section and observe the star animations.
    - **Depends‑on:** [T009, T015]
- [ ] **T017 · Feature · P2:** implement framer motion button hover states
    - **Context:** Technical Stack (Animations), Implementation Phases (Phase 3)
    - **Action:**
        1. Modify `RetroButton` component to use Framer Motion.
        2. Implement subtle hover effects (e.g., scale, shadow change).
    - **Done‑when:**
        1. `RetroButton` component uses Framer Motion.
        2. Buttons have hover animations.
    - **Verification:**
        1. Hover over buttons on the page and observe the animations.
    - **Depends‑on:** [T008, T015]
- [ ] **T018 · Feature · P2:** refine texture overlays and vignette effect
    - **Context:** Implementation Phases (Phase 3)
    - **Action:**
        1. Ensure the global body texture is correctly implemented and subtle.
        2. Add a subtle vignette effect via CSS to the page edges.
        3. Verify the texture on specific components like `TexturedCard`.
    - **Done‑when:**
        1. Texture overlays are consistently applied and visually correct.
        2. Vignette effect is present.
    - **Verification:**
        1. View the page; verify the overall paper texture and the subtle darkening at the edges.
        2. Verify the texture on cards/components that should have it.
    - **Depends‑on:** [T005, T010]
- [ ] **T019 · Feature · P2:** add responsive breakpoints and refine styles
    - **Context:** Implementation Phases (Phase 3)
    - **Action:**
        1. Review layout and component styling at different breakpoints (sm, md, lg, xl, 2xl).
        2. Adjust Tailwind classes as needed to ensure responsiveness.
        3. Use standard Tailwind breakpoints.
    - **Done‑when:**
        1. Page layout and components are responsive across standard breakpoints.
    - **Verification:**
        1. Test the page on various screen sizes or using browser dev tools responsive mode.
    - **Depends‑on:** [T011, T012, T013, T014]

## Final Touches & Optimization
- [ ] **T020 · Chore · P3:** implement seo meta tags
    - **Context:** Implementation Phases (Phase 4)
    - **Action:**
        1. Add essential SEO meta tags to `app/layout.tsx` (title, description, keywords).
    - **Done‑when:**
        1. Meta tags are added to the document head.
    - **Verification:**
        1. View page source or use browser dev tools to inspect meta tags.
    - **Depends‑on:** [T005]
- [ ] **T021 · Chore · P3:** add open graph images and tags
    - **Context:** Implementation Phases (Phase 4)
    - **Action:**
        1. Create necessary Open Graph images (e.g., for social sharing).
        2. Add Open Graph meta tags to `app/layout.tsx`.
    - **Done‑when:**
        1. OG images are created and accessible.
        2. OG tags are added to the document head.
    - **Verification:**
        1. Use a social media preview tool (e.g., Twitter Card Validator, Facebook Sharing Debugger).
    - **Depends‑on:** [T005]
- [ ] **T022 · Chore · P3:** add favicon and app icons
    - **Context:** Implementation Phases (Phase 4)
    - **Action:**
        1. Create or obtain favicon files and app icons.
        2. Place icons in the `public` directory.
        3. Link icons in `app/layout.tsx`.
    - **Done‑when:**
        1. Favicon and app icons are present and linked.
    - **Verification:**
        1. View the page in a browser tab; verify the favicon appears.
    - **Depends‑on:** [T005]
- [ ] **T023 · Chore · P3:** integrate analytics setup (if needed)
    - **Context:** Implementation Phases (Phase 4)
    - **Action:**
        1. Add placeholder script tags or integration code for analytics (e.g., Google Analytics, Vercel Analytics). *Note: Implement specific analytics later if required.*
    - **Done‑when:**
        1. Placeholder analytics code is added to the layout.
    - **Depends‑on:** [T005]
- [ ] **T024 · Test · P2:** perform accessibility audit and fix issues
    - **Context:** Implementation Phases (Phase 4), Key Success Metrics
    - **Action:**
        1. Use automated accessibility tools (e.g., Lighthouse, axe DevTools extension) to audit the page.
        2. Manually check keyboard navigation and focus states.
        3. Identify and fix any critical or major accessibility issues found.
    - **Done‑when:**
        1. Automated audit passes with no critical/major issues.
        2. Keyboard navigation is functional.
    - **Verification:**
        1. Rerun automated audit tools.
        2. Navigate the page using only the keyboard (Tab, Shift+Tab, Enter, Space).
    - **Depends‑on:** [T011, T012, T013, T014, T019]
- [ ] **T025 · Refactor · P3:** optimize images with next/image
    - **Context:** Rapid Development Strategies (Performance Optimizations)
    - **Action:**
        1. Identify any raster images used on the page.
        2. Replace `<img>` tags with the `next/image` component.
        3. Configure appropriate sizes and priorities.
    - **Done‑when:**
        1. All raster images use `next/image`.
        2. Images are optimized by Next.js.
    - **Verification:**
        1. Inspect image elements in dev tools; verify `_next/image` source URLs.
    - **Depends‑on:** [T011, T012, T013]
- [ ] **T026 · Refactor · P3:** ensure static generation for the page
    - **Context:** Rapid Development Strategies (Performance Optimizations)
    - **Action:**
        1. Verify that `app/page.tsx` is configured for static rendering (default in App Router unless using dynamic functions).
        2. Ensure no dynamic functions (`cookies`, `headers`, `useSearchParams`, etc.) prevent static generation unless intended.
    - **Done‑when:**
        1. The main splash page is configured for static rendering.
    - **Verification:**
        1. Build the Next.js project (`next build`).
        2. Check the build output (e.g., `.next/server/app/page.html`) to confirm it's statically generated.
    - **Depends‑on:** [T011, T012, T013, T014]

```