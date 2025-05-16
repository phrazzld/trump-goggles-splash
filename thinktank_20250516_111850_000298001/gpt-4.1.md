# Todo

## Project Initialization & Configuration
- [ ] **T001 · Chore · P0: initialize project with Next.js 15 and dependencies**
    - **Context:** Implementation Phases > Phase 1, Technical Stack > Package Dependencies
    - **Action:**
        1. Scaffold Next.js 15 project (App Router).
        2. Install all listed dependencies (framer-motion, lucide-react, @radix-ui/react-slot, class-variance-authority, clsx, tailwind-merge).
    - **Done‑when:**
        1. Next.js app runs locally.
        2. All dependencies are present in `package.json`.
    - **Verification:**
        1. Run `npm run dev` and visit localhost splash page.
        2. Confirm dependencies installed via `npm ls`.
    - **Depends‑on:** none

- [ ] **T002 · Chore · P1: configure Tailwind with custom color palette, fonts, and boxShadow**
    - **Context:** Implementation Phases > Phase 1, File Structure Implementation > Tailwind Configuration
    - **Action:**
        1. Update `tailwind.config.ts` to include custom colors, font families, and boxShadow as per plan.
        2. Enable necessary Tailwind plugins if required.
    - **Done‑when:**
        1. Custom design tokens available as Tailwind classes.
    - **Verification:**
        1. Use color and font classes in a test component and inspect output.
    - **Depends‑on:** [T001]

- [ ] **T003 · Chore · P1: configure and import Next Font for Playfair Display, Inter, Courier Prime**
    - **Context:** Implementation Phases > Phase 1, Typography, File Structure Implementation > Tailwind Configuration
    - **Action:**
        1. Set up font imports using Next Font.
        2. Expose fonts as CSS variables and link to Tailwind config.
    - **Done‑when:**
        1. Fonts load without FOUT.
        2. Font variables available in Tailwind.
    - **Verification:**
        1. Inspect rendered text for correct font usage.
    - **Depends‑on:** [T001, T002]

- [ ] **T004 · Chore · P1: implement globals.css with CSS reset, variables, and background texture**
    - **Context:** Implementation Phases > Phase 1, File Structure Implementation > Global Styles
    - **Action:**
        1. Set up CSS reset and base styles in `globals.css`.
        2. Add color/spacing variables and paper grain background per plan.
    - **Done‑when:**
        1. Page background and typography match base design.
    - **Verification:**
        1. Visual check of background texture and page base styling in browser.
    - **Depends‑on:** [T003]

- [ ] **T005 · Chore · P1: scaffold base app layout and responsive container**
    - **Context:** Implementation Phases > Phase 1, Component Architecture > Layout Structure
    - **Action:**
        1. Implement `layout.tsx` with base container and font integration.
        2. Ensure responsiveness and safe area support.
    - **Done‑when:**
        1. Layout wraps all pages and applies correct fonts/spacing.
    - **Verification:**
        1. Load any page and check container responsiveness across breakpoints.
    - **Depends‑on:** [T004]

- [ ] **T006 · Chore · P1: set up initial component folder structure**
    - **Context:** Implementation Phases > Phase 1, Component Architecture > Layout Structure
    - **Action:**
        1. Create directories and placeholder files for all components and shared subcomponents as specified.
    - **Done‑when:**
        1. Directory tree matches plan; placeholder components export minimal JSX.
    - **Verification:**
        1. All files present in repo; no import errors.
    - **Depends‑on:** [T005]

- [ ] **T007 · Chore · P2: extend Tailwind with custom utility classes**
    - **Context:** Rapid Development Strategies > CSS Utilities First
    - **Action:**
        1. Add `.text-shadow-vintage`, `.border-double-retro`, and `.texture-paper` to Tailwind via CSS.
    - **Done‑when:**
        1. Classes available for use in components.
    - **Verification:**
        1. Apply each class to a test element and visually confirm effect.
    - **Depends‑on:** [T002, T004]

## Core UI Atoms & Shared Components
- [ ] **T008 · Feature · P0: implement RetroButton atom with all variants and states**
    - **Context:** Component Architecture > Custom Retro Components, Rapid Development Strategies > Component Composition
    - **Action:**
        1. Build `RetroButton.tsx` supporting primary/secondary, sizing, hover, and star accent.
        2. Use Tailwind and custom utilities for style.
    - **Done‑when:**
        1. All variants render correctly; hover/active/focus states work.
    - **Verification:**
        1. Storybook: Render all variants and states, verify visually and via keyboard.
    - **Depends‑on:** [T007, T006]

- [ ] **T009 · Feature · P1: implement StarDecoration atom with configurable position and animation**
    - **Context:** Component Architecture > Custom Retro Components, Hero Section Components
    - **Action:**
        1. Create `StarDecoration.tsx` with props for position/className.
        2. Add support for twinkle animation (Framer Motion).
    - **Done‑when:**
        1. Renders correctly at all positions; animates as specified.
    - **Verification:**
        1. Storybook: Render at top-right, bottom-left, etc. Watch animation.
    - **Depends‑on:** [T007, T006]

- [ ] **T010 · Feature · P2: implement TexturedCard molecule with retro borders and shadow**
    - **Context:** Component Architecture > Custom Retro Components, Features section, Rapid Development Strategies > Component Composition
    - **Action:**
        1. Build `TexturedCard.tsx` that composes children with retro border/shadow and optional texture.
    - **Done‑when:**
        1. Accepts children; applies correct style; responsive.
    - **Verification:**
        1. Storybook: Render with various children; resize window.
    - **Depends‑on:** [T007, T006]

## Hero Section (Organism)
- [ ] **T011 · Feature · P0: implement Hero organism with background, headline, and CTA**
    - **Context:** Implementation Phases > Phase 2, Component Architecture > Hero Section Components, Component Templates
    - **Action:**
        1. Build `Hero.tsx` using Textured background, headline, StarDecoration, and RetroButton.
        2. Include animated stars, typography hierarchy, and stripe accent.
    - **Done‑when:**
        1. Hero section matches design; all elements present and styled.
    - **Verification:**
        1. Visual check—headline, CTA, stars all visible and interact as expected.
        2. Storybook: Render Hero, validate with keyboard navigation.
    - **Depends‑on:** [T008, T009, T007, T006]

## Features Section (Organism)
- [ ] **T012 · Feature · P1: implement Features organism with card layout and icons**
    - **Context:** Implementation Phases > Phase 2, Component Architecture > Features.tsx
    - **Action:**
        1. Build `Features.tsx` using TexturedCard and Lucide icons.
        2. Arrange cards in responsive grid; apply retro borders/shadows.
    - **Done‑when:**
        1. Features render as distinct cards with icons and descriptions.
    - **Verification:**
        1. Storybook: Render Features, check grid at all breakpoints.
    - **Depends‑on:** [T010, T006]

## Installation Section (Organism)
- [ ] **T013 · Feature · P1: implement Installation organism with browser detection and download buttons**
    - **Context:** Implementation Phases > Phase 2, Component Architecture > Installation.tsx
    - **Action:**
        1. Build `Installation.tsx` with logic for detecting browser.
        2. Render tailored download button and compatibility badges.
    - **Done‑when:**
        1. Correct button/badge shown for user’s browser.
    - **Verification:**
        1. Test in Chrome, Firefox, Edge; confirm correct UI rendered.
    - **Depends‑on:** [T008, T006]

## Footer
- [ ] **T014 · Feature · P2: implement Footer organism with links and retro styling**
    - **Context:** Component Architecture > Footer.tsx
    - **Action:**
        1. Build `Footer.tsx` with required links and retro style.
    - **Done‑when:**
        1. Footer visible and styled on all pages.
    - **Verification:**
        1. Visual check; test links for correct destination.
    - **Depends‑on:** [T006]

## Page Composition
- [ ] **T015 · Feature · P1: compose main splash page with Hero, Features, Installation, Footer**
    - **Context:** File Structure > page.tsx, Implementation Phases > Build page sections iteratively
    - **Action:**
        1. Build `page.tsx` to compose all main sections in correct order.
    - **Done‑when:**
        1. Splash page displays all sections; navigable top-to-bottom.
    - **Verification:**
        1. Visual walk-through; ensure no missing or duplicated sections.
    - **Depends‑on:** [T011, T012, T013, T014]

## Animation & Interactivity
- [ ] **T016 · Feature · P2: animate Hero and Features sections with Framer Motion**
    - **Context:** Implementation Phases > Phase 3, Rapid Development Strategies > Performance Optimizations
    - **Action:**
        1. Add scroll-based fade-ins to Hero and Features.
        2. Animate star twinkle and button hover states.
    - **Done‑when:**
        1. All animations play smoothly; respect prefers-reduced-motion.
    - **Verification:**
        1. Manual scroll through page; check animations and fallback for accessibility.
    - **Depends‑on:** [T011, T012]

- [ ] **T017 · Feature · P2: implement and tune texture overlays and vignette effect**
    - **Context:** Implementation Phases > Phase 3, Global Styles
    - **Action:**
        1. Apply/adjust paper grain overlay and vignette CSS for page visuals.
    - **Done‑when:**
        1. Subtle textures and vignette visible in all major sections.
    - **Verification:**
        1. Visual check on light/dark backgrounds; test responsiveness.
    - **Depends‑on:** [T004, T011, T012]

## Responsiveness & Performance
- [ ] **T018 · Feature · P1: implement responsive breakpoints and mobile-first layouts**
    - **Context:** Implementation Phases > Phase 3, Responsive breakpoints
    - **Action:**
        1. Add and test responsive styles for all components/pages.
    - **Done‑when:**
        1. Layout adapts to mobile, tablet, desktop.
    - **Verification:**
        1. Test at all breakpoints (Chrome devtools/device mode).
    - **Depends‑on:** [T011, T012, T013, T014]

- [ ] **T019 · Feature · P1: optimize images and static assets using next/image**
    - **Context:** Rapid Development Strategies > Performance Optimizations
    - **Action:**
        1. Refactor all image usage to use Next.js Image component.
        2. Optimize asset sizes and formats.
    - **Done‑when:**
        1. Images load quickly and are responsive.
    - **Verification:**
        1. Run Lighthouse, check image performance; visual check at all sizes.
    - **Depends‑on:** [T015]

- [ ] **T020 · Feature · P1: implement lazy loading for below-the-fold content**
    - **Context:** Rapid Development Strategies > Performance Optimizations
    - **Action:**
        1. Lazy load Features and Installation sections.
    - **Done‑when:**
        1. Only above-the-fold content loads initially.
    - **Verification:**
        1. Measure network and FCP, confirm deferred loading.
    - **Depends‑on:** [T015]

- [ ] **T021 · Feature · P1: inline critical CSS for improved performance**
    - **Context:** Rapid Development Strategies > Performance Optimizations
    - **Action:**
        1. Configure Next.js to inline critical CSS in head.
    - **Done‑when:**
        1. Above-the-fold content styles loaded instantly.
    - **Verification:**
        1. Run Lighthouse; check CSS in HTML head.
    - **Depends‑on:** [T015]

- [ ] **T022 · Chore · P0: enable static site generation for splash page**
    - **Context:** Rapid Development Strategies > Performance Optimizations
    - **Action:**
        1. Configure Next.js to statically generate the splash page at build time.
    - **Done‑when:**
        1. Output is fully static; no SSR required at runtime.
    - **Verification:**
        1. Run build and inspect `out/` or `.next` output.
    - **Depends‑on:** [T015]

## Final Touches & QA
- [ ] **T023 · Feature · P0: add SEO meta tags to splash page**
    - **Context:** Implementation Phases > Phase 4, Final Touches
    - **Action:**
        1. Add relevant meta tags (title, description, canonical) to page head.
    - **Done‑when:**
        1. Tags present in HTML and accurate.
    - **Verification:**
        1. View source and inspect head; use SEO tool to validate.
    - **Depends‑on:** [T015]

- [ ] **T024 · Feature · P1: add Open Graph and Twitter card images/meta**
    - **Context:** Implementation Phases > Phase 4, Final Touches
    - **Action:**
        1. Add Open Graph and Twitter meta tags and images.
    - **Done‑when:**
        1. Links preview with correct images on social platforms.
    - **Verification:**
        1. Use Facebook/Twitter card validator tools.
    - **Depends‑on:** [T023]

- [ ] **T025 · Chore · P1: add favicon and app icons**
    - **Context:** Implementation Phases > Phase 4, Final Touches
    - **Action:**
        1. Add favicon.ico and all required app icons to public folder.
        2. Link icons in page head.
    - **Done‑when:**
        1. Browser shows correct icons on all devices.
    - **Verification:**
        1. Open in multiple browsers/devices; check favicon/app icon appearance.
    - **Depends‑on:** [T023]

- [ ] **T026 · Chore · P2: set up analytics tracking (if required)**
    - **Context:** Implementation Phases > Phase 4, Final Touches
    - **Action:**
        1. Integrate chosen analytics solution (e.g., Plausible, GA) if needed.
    - **Done‑when:**
        1. Page view events fire on page load.
    - **Verification:**
        1. Check analytics dashboard for page views.
    - **Depends‑on:** [T015]

- [ ] **T027 · Test · P0: perform accessibility (a11y) audit and remediate issues**
    - **Context:** Implementation Phases > Phase 4, Final Touches, Accessibility
    - **Action:**
        1. Run automated accessibility tools (axe, lighthouse).
        2. Manually test with keyboard and screen reader.
        3. Fix any violations found.
    - **Done‑when:**
        1. All sections WCAG 2.1 AA compliant.
    - **Verification:**
        1. No critical issues in axe/Lighthouse.
        2. Tab through entire page and navigate with screen reader.
    - **Depends‑on:** [T015]

## QA & Success Metrics
- [ ] **T028 · Test · P0: verify Lighthouse performance and design fidelity metrics**
    - **Context:** Key Success Metrics
    - **Action:**
        1. Run Lighthouse.
        2. Check performance, FCP, TTI, and design consistency.
    - **Done‑when:**
        1. Score >95, FCP <1s, TTI <2s, design matches reference.
    - **Verification:**
        1. Attach screenshot of Lighthouse results.
    - **Depends‑on:** [T015, T019, T021, T022]

## Deployment
- [ ] **T029 · Chore · P0: deploy splash page to Vercel and verify production build**
    - **Context:** Next Steps > Deploy to Vercel
    - **Action:**
        1. Set up Vercel project.
        2. Deploy main branch.
    - **Done‑when:**
        1. Splash page is live at intended domain.
    - **Verification:**
        1. Access live site; check all features.
    - **Depends‑on:** [T022, T023, T024, T025, T027, T028]

---

### Clarifications & Assumptions
- [ ] **Issue:** Confirm if analytics is required and which provider to use
    - **Context:** Implementation Phases > Phase 4, Final Touches
    - **Blocking?:** no

- [ ] **Issue:** Confirm final Open Graph and Twitter card image assets and copy
    - **Context:** Implementation Phases > Phase 4, Final Touches
    - **Blocking?:** no

- [ ] **Issue:** Confirm required footer links/content
    - **Context:** Component Architecture > Footer.tsx
    - **Blocking?:** no