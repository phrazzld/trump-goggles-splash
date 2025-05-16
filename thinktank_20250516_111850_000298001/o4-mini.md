# Todo

## Foundation
- [ ] **T001 · Chore · P0: initialize project dependencies**
  - Context: Next Steps step 1 (Initialize project dependencies)
  - Action:
    1. Run `npm init` or `yarn init` in project root.
    2. Install Next.js 15, React, React DOM, Tailwind CSS, shadcn/ui, framer-motion, lucide-react, @radix-ui/react-slot, class-variance-authority, clsx, tailwind-merge.
  - Done-when:
    1. `package.json` lists all required dependencies.
    2. `node_modules` directory contains installed packages.
  - Depends-on: none

- [ ] **T002 · Chore · P2: set up color palette in Tailwind config**
  - Context: Phase 1 step 1 (Set up color palette in Tailwind config)
  - Action:
    1. Update `tailwind.config.ts` under `theme.extend.colors.retro` with the values for red, blue, cream, gold.
    2. Add CSS variables for legacy support in `globals.css :root`.
  - Done-when:
    1. Utility classes `text-retro-red`, `bg-retro-cream`, etc., compile without errors.
  - Verification:
    1. Apply `text-retro-red` to sample element; confirm color in browser.
  - Depends-on: [T001]

- [ ] **T003 · Chore · P2: configure fonts with next/font in layout.tsx**
  - Context: Phase 1 step 2 (Configure fonts with next/font)
  - Action:
    1. Import `Playfair Display`, `Inter`, and `Courier Prime` via `next/font`.
    2. Apply them to CSS custom properties or `className` on `<html>`/`<body>` in `app/layout.tsx`.
  - Done-when:
    1. Fonts appear in page’s `<head>`.
    2. DevTools confirm correct `font-family` on headings and body text.
  - Verification:
    1. Inspect rendered text in browser; verify serif and sans-serif fonts.
  - Depends-on: [T001]

- [ ] **T004 · Chore · P2: implement CSS reset and global styles in globals.css**
  - Context: Phase 1 steps 3-4 (Basic CSS reset + global styles)
  - Action:
    1. Add a modern CSS reset or normalize rules at top of `globals.css`.
    2. Define body background color and pseudo-element for paper grain texture.
  - Done-when:
    1. All default browser margins/paddings reset.
    2. Background color `var(--color-cream)` and subtle texture visible.
  - Verification:
    1. Inspect page background and default element styles in browser.
  - Depends-on: [T001]

- [ ] **T005 · Chore · P2: create base layout component with responsive container**
  - Context: Phase 1 step 3 (Create base layout with responsive container)
  - Action:
    1. Implement `app/layout.tsx` exporting a root layout with font loader and `<main className="container mx-auto px-4">{children}</main>`.
    2. Ensure proper Next.js App Router conventions.
  - Done-when:
    1. Pages render inside responsive container.
    2. No layout errors on compile.
  - Depends-on: [T001, T003]

- [ ] **T006 · Chore · P2: scaffold component directories and stub files**
  - Context: Phase 1 step 5 (Set up component structure)
  - Action:
    1. Create `components/ui/`, `components/Hero.tsx`, `components/Features.tsx`, `components/Installation.tsx`, `components/Footer.tsx`.
    2. Create `components/shared/RetroButton.tsx`, `StarDecoration.tsx`, `TexturedCard.tsx` with empty function exports.
  - Done-when:
    1. Files exist and export stub React components.
  - Depends-on: [T001]

## Shared Components
- [ ] **T007 · Feature · P2: implement RetroButton component**
  - Context: Custom Retro Components (RetroButton.tsx)
  - Action:
    1. Create `RetroButton` with props `variant`, `size`, `children`, `onClick`.
    2. Apply Tailwind classes: rounded corners, double border (`border-double-retro`), vintage shadow, hover rotation for primary, star accent for primary variant.
  - Done-when:
    1. Button renders in primary and secondary styles.
    2. Hover on primary triggers rotation.
  - Verification:
    1. Render in Storybook or test page.
  - Depends-on: [T006, T013]

- [ ] **T008 · Feature · P2: implement StarDecoration component**
  - Context: Custom Retro Components (StarDecoration.tsx)
  - Action:
    1. Create a React component rendering an SVG star with `fill: var(--color-gold)`.
    2. Accept `className` or `position` prop for absolute placement.
  - Done-when:
    1. Star renders in gold.
    2. Applying `className` moves it.
  - Verification:
    1. Render in isolation in Storybook.
  - Depends-on: [T006]

- [ ] **T009 · Feature · P2: implement TexturedCard component**
  - Context: shared/TexturedCard.tsx
  - Action:
    1. Create card container applying `border-double-retro`, `shadow-vintage`, `texture-paper`.
    2. Accept `children` prop for content.
  - Done-when:
    1. Card shows double border, vintage shadow, paper texture.
  - Verification:
    1. Render a sample card in Storybook.
  - Depends-on: [T006, T013]

## Page Sections
- [ ] **T010 · Feature · P1: build Hero section in Hero.tsx**
  - Context: Phase 2 step 1 (Build Hero section)
  - Action:
    1. Implement `<section className="relative py-20 overflow-hidden">…</section>`.
    2. Add two `<StarDecoration>` at `.absolute top-10 left-10` and `.absolute bottom-10 right-10`.
    3. Insert `<h1>` and `<p>` with `font-display`, `text-retro-blue`, `text-shadow-vintage`.
    4. Include `<RetroButton variant="primary" size="lg">Add to Chrome</RetroButton>`.
  - Done-when:
    1. Hero visually matches template.
  - Verification:
    1. Manual visual check in browser.
  - Depends-on: [T005, T007, T008]

- [ ] **T011 · Feature · P2: create Features section in Features.tsx**
  - Context: Phase 2 step 2 (Create Features section)
  - Action:
    1. Implement a grid-based `<section>` with multiple `<TexturedCard>` items.
    2. Inside each card, render a Lucide React icon, title (`h3.font-display`), and description (`p.font-body`).
    3. Apply retro borders and shadows.
  - Done-when:
    1. At least three feature cards render with icons and proper styling.
  - Verification:
    1. Visual check in browser.
  - Depends-on: [T009, T010]

- [ ] **T012 · Feature · P2: implement Installation section in Installation.tsx**
  - Context: Phase 2 step 3 (Implement Installation section)
  - Action:
    1. Detect user's browser via `navigator.userAgent`.
    2. Render `<RetroButton>` for Chrome or Firefox accordingly.
    3. Display compatibility badges (static images or icons).
  - Done-when:
    1. Correct button shows for Chrome and Firefox.
  - Verification:
    1. Override UA in browser devtools; confirm button changes.
  - Depends-on: [T007]

## Styling & Utilities
- [ ] **T013 · Chore · P2: extend Tailwind with custom utilities**
  - Context: Rapid Development Strategies step 1 (CSS Utilities First)
  - Action:
    1. In `globals.css` or `tailwind.config.ts`, define `.text-shadow-vintage`, `.border-double-retro`, `.texture-paper`.
  - Done-when:
    1. Classes available for use and apply correct CSS.
  - Verification:
    1. Add class to test element; verify style.
  - Depends-on: [T002]

- [ ] **T014 · Chore · P2: implement CSS texture overlay globally**
  - Context: Phase 3 step 2 (Paper grain CSS pattern)
  - Action:
    1. Apply `.texture-paper` to `body::before` pseudo-element with low opacity.
  - Done-when:
    1. Subtle grain visible across page.
  - Verification:
    1. Inspect overlay in devtools.
  - Depends-on: [T013]

- [ ] **T015 · Chore · P2: implement subtle vignette effect**
  - Context: Phase 3 step 2 (Vignette effect)
  - Action:
    1. Add a radial-gradient overlay via pseudo-element on `body`.
    2. Adjust opacity to subtle level.
  - Done-when:
    1. Darkened edges visible without obscuring content.
  - Verification:
    1. Visual inspection at page corners.
  - Depends-on: [T004, T013]

## Animations & Responsive
- [ ] **T016 · Feature · P2: add framer-motion fade-in animations on scroll**
  - Context: Phase 3 step 1 (Subtle fade-ins on scroll)
  - Action:
    1. Wrap Hero, Features, Installation in `<motion.section>` with fade-in variants.
    2. Trigger `whileInView` or `useInView`.
  - Done-when:
    1. Sections animate opacity/translate on scroll.
  - Verification:
    1. Scroll page to trigger animations.
  - Depends-on: [T010, T011, T012]

- [ ] **T017 · Feature · P2: add star twinkle effect in StarDecoration**
  - Context: Phase 3 step 1 (Star twinkle effects)
  - Action:
    1. Use `framer-motion` on SVG to animate scale or opacity in a loop.
  - Done-when:
    1. Stars exhibit subtle twinkle at intervals.
  - Verification:
    1. Observe stars over time.
  - Depends-on: [T008]

- [ ] **T018 · Feature · P2: add hover animation to RetroButton**
  - Context: Phase 3 step 1 (Button hover states)
  - Action:
    1. Integrate `framer-motion`'s `whileHover` on `RetroButton`.
    2. Configure slight scale/rotate on hover.
  - Done-when:
    1. Button animates smoothly on hover.
  - Verification:
    1. Hover over CTA.
  - Depends-on: [T007]

- [ ] **T019 · Feature · P2: add responsive breakpoints to components**
  - Context: Phase 3 step 3 (Add responsive breakpoints)
  - Action:
    1. Update Tailwind classes in Hero, Features, Installation for `sm`, `md`, `lg`, `xl`.
    2. Ensure typography and layout adapt.
  - Done-when:
    1. Layout reflows without overflow on common breakpoints.
  - Verification:
    1. Resize browser or use device emulator.
  - Depends-on: [T010, T011, T012]

## Optimization
- [ ] **T020 · Chore · P2: optimize performance with lazy loading and inline CSS**
  - Context: Rapid Development Strategies step 3
  - Action:
    1. Replace static `<img>` with `next/image` and enable `loading="lazy"`.
    2. Inline critical CSS for above-the-fold Hero styles in `head`.
  - Done-when:
    1. Lighthouse metrics improve (FCP < 1s).
  - Verification:
    1. Run Lighthouse; confirm lazy-load usage and inline CSS.
  - Depends-on: [T010, T011, T012, T014]

- [ ] **T021 · Feature · P2: integrate Lucide React icons into Features**
  - Context: Phase 2 Core Components step 2 (Icon integration)
  - Action:
    1. Import desired icons from `lucide-react`.
    2. Render and style inside each `TexturedCard`.
  - Done-when:
    1. Icons display correctly sized and colored.
  - Verification:
    1. Visual check in browser.
  - Depends-on: [T011]

## Final Touches
- [ ] **T022 · Chore · P2: add SEO meta tags in head**
  - Context: Phase 4 step 1 (SEO meta tags)
  - Action:
    1. In `app/page.tsx`, add `<head>` entries for `<title>`, `<meta name="description">`, viewport.
  - Done-when:
    1. Meta tags appear in page source.
  - Verification:
    1. View page source in browser.
  - Depends-on: [T010, T011, T012]

- [ ] **T023 · Chore · P2: integrate Open Graph images and tags**
  - Context: Phase 4 step 2 (Open Graph images)
  - Action:
    1. Generate or source OG image asset.
    2. Add `<meta property="og:title|description|image">` in head.
  - Done-when:
    1. OG tags present and image loads on debug tools.
  - Verification:
    1. Validate in Facebook/Twitter debug tool.
  - Depends-on: [T022]

- [ ] **T024 · Chore · P2: add favicon and app icons**
  - Context: Phase 4 step 3 (Favicon and app icons)
  - Action:
    1. Place favicon and icon files in `public/`.
    2. Reference via `<link rel="icon" ...>` in head.
  - Done-when:
    1. Browser tab shows correct favicon.
  - Verification:
    1. Check tab icon in several browsers.
  - Depends-on: [T022]

- [ ] **T025 · Chore · P2: set up analytics stub**
  - Context: Phase 4 step 4 (Analytics setup)
  - Action:
    1. Add placeholder analytics script or comment in head.
    2. Provide instructions for integration.
  - Done-when:
    1. Stub script included without errors.
  - Verification:
    1. Open console; ensure no missing script errors.
  - Depends-on: [T022]

- [ ] **T026 · Test · P2: conduct accessibility audit**
  - Context: Phase 4 step 5 (Accessibility audit)
  - Action:
    1. Run automated a11y checks (axe, Storybook a11y addon).
    2. Manually test keyboard navigation and screen-reader basics.
  - Done-when:
    1. No critical WCAG 2.1 AA violations reported.
    2. Document any minor issues.
  - Verification:
    1. Review axe report.
    2. Perform manual navigation test.
  - Depends-on: [T019]

---

### Clarifications & Assumptions
- [ ] Issue: Define content for feature cards (titles, descriptions, icon choices)
  - Context: Features section requires feature details
  - Blocking?: yes
- [ ] Issue: Confirm analytics provider and script details
  - Context: Final touches analytics stub
  - Blocking?: no