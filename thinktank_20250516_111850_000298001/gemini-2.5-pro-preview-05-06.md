# Todo

## Project Setup & Foundation
- [ ] **T001 · Chore · P0: initialize next.js 15 project with app router**
    - **Context:** PLAN.md > Technical Stack > Core Technologies
    - **Action:**
        1. Run `npx create-next-app@latest` with appropriate project name.
        2. Select App Router.
        3. Select Tailwind CSS.
    - **Done‑when:**
        1. Next.js project is created and runs successfully.
        2. Basic file structure for App Router is present.
    - **Verification:**
        1. Run `npm run dev` (or `yarn dev`) and see the default Next.js page.
    - **Depends‑on:** none
- [ ] **T002 · Chore · P0: install core package dependencies**
    - **Context:** PLAN.md > Technical Stack > Package Dependencies
    - **Action:**
        1. Install `framer-motion`, `lucide-react`, `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge`.
    - **Done‑when:**
        1. All listed dependencies are added to `package.json`.
        2. `npm install` (or `yarn install`) completes without errors.
    - **Verification:**
        1. Check `package.json` for correct versions (or latest stable if not specified).
    - **Depends‑on:** [T001]
- [ ] **T003 · Chore · P1: initialize shadcn/ui in the project**
    - **Context:** PLAN.md > Technical Stack > Components; Component Architecture > Layout Structure
    - **Action:**
        1. Run `npx shadcn-ui@latest init` and configure as per project defaults.
        2. Ensure `components/ui/` directory is created and `utils.ts` is present.
    - **Done‑when:**
        1. shadcn/ui is initialized.
        2. `components.json` is created.
    - **Verification:**
        1. The `components/ui` directory exists.
        2. `components.json` file is present and configured.
    - **Depends‑on:** [T001]
- [ ] **T004 · Chore · P1: create initial directory structure for components**
    - **Context:** PLAN.md > Component Architecture > 1. Layout Structure; Implementation Phases > Phase 1 > Item 5
    - **Action:**
        1. Create `components/Hero.tsx`, `components/Features.tsx`, `components/Installation.tsx`, `components/Footer.tsx`.
        2. Create `components/shared/RetroButton.tsx`, `components/shared/StarDecoration.tsx`, `components/shared/TexturedCard.tsx`.
        3. Ensure `app/components/ui/` exists from shadcn/ui init or create it.
    - **Done‑when:**
        1. All specified component directories and empty placeholder files are created.
    - **Verification:**
        1. Verify the directory structure matches the plan: `app/components/{Hero.tsx, Features.tsx, Installation.tsx, Footer.tsx, shared/{RetroButton.tsx, StarDecoration.tsx, TexturedCard.tsx}, ui/}`.
    - **Depends‑on:** [T001]

## Global Styles & Design System
- [ ] **T005 · Feature · P1: configure tailwind with project color palette**
    - **Context:** PLAN.md > Design System > Color Palette; Implementation Phases > Phase 1 > Item 1; File Structure Implementation > 1. Tailwind Configuration
    - **Action:**
        1. Add the specified `retro` color palette (`red`, `blue`, `cream`, `gold`) to `tailwind.config.ts` under `theme.extend.colors`.
        2. Add the `--color-white` and `--color-black` and `--color-shadow` as CSS variables in `globals.css` if not directly usable by Tailwind or for non-Tailwind contexts.
    - **Done‑when:**
        1. Tailwind config is updated with the new colors.
        2. Colors are usable via Tailwind classes (e.g., `bg-retro-red`, `text-retro-blue`).
    - **Verification:**
        1. Apply a retro color class to a test element and verify it displays correctly in the browser.
        2. Inspect CSS to confirm Tailwind generates classes for these colors.
    - **Depends‑on:** [T001]
- [ ] **T006 · Feature · P1: configure tailwind with project box shadow**
    - **Context:** PLAN.md > File Structure Implementation > 1. Tailwind Configuration
    - **Action:**
        1. Add the `vintage` box shadow (`4px 4px 0px 0px rgba(0,0,0,0.1)`) to `tailwind.config.ts` under `theme.extend.boxShadow`.
    - **Done‑when:**
        1. Tailwind config is updated with the `vintage` shadow.
        2. Shadow is usable via Tailwind class (e.g., `shadow-vintage`).
    - **Verification:**
        1. Apply `shadow-vintage` to a test element and verify it displays correctly.
    - **Depends‑on:** [T001]
- [ ] **T007 · Feature · P1: integrate custom fonts using next/font and configure in tailwind**
    - **Context:** PLAN.md > Design System > Typography; Implementation Phases > Phase 1 > Item 2; File Structure Implementation > 1. Tailwind Configuration
    - **Action:**
        1. Use `next/font` to load 'Playfair Display', 'Inter', and 'Courier Prime'.
        2. Assign loaded fonts to CSS variables (`--font-playfair`, `--font-inter`, `--font-courier`) in `app/layout.tsx`.
        3. Map these CSS variables to Tailwind font families (`display`, `body`, `accent`) in `tailwind.config.ts`.
    - **Done‑when:**
        1. Fonts are loaded via `next/font` and applied globally via CSS variables.
        2. Tailwind font utility classes (e.g., `font-display`, `font-body`) use the correct fonts.
    - **Verification:**
        1. Apply font classes to text elements and verify correct fonts are rendered using browser dev tools.
        2. Check network tab for optimized font loading.
    - **Depends‑on:** [T001]
- [ ] **T008 · Feature · P1: define global css variables for design system**
    - **Context:** PLAN.md > Design System > Color Palette, Typography, Spacing System; File Structure Implementation > 2. Global Styles
    - **Action:**
        1. In `globals.css`, define CSS variables for the color palette (e.g., `--color-primary-red: #B91C1C;`).
        2. In `globals.css`, define CSS variables for typography (e.g., `--font-display: 'Playfair Display', serif;`) if not solely handled by `next/font` variables.
        3. In `globals.css`, define CSS variables for the spacing system (e.g., `--space-xs: 0.5rem;`).
    - **Done‑when:**
        1. All specified CSS variables for colors, typography, and spacing are defined in `globals.css`.
    - **Verification:**
        1. Inspect `:root` element in browser dev tools to see if CSS variables are correctly defined.
    - **Depends‑on:** [T001]
- [ ] **T009 · Feature · P1: implement basic css reset and global base styles**
    - **Context:** PLAN.md > Implementation Phases > Phase 1 > Item 4
    - **Action:**
        1. Add a minimal CSS reset to `globals.css` (e.g., box-sizing, remove default margins).
        2. Set base font styles (e.g., `font-family: var(--font-body); color: var(--color-black);`) on `body`.
    - **Done‑when:**
        1. Basic CSS reset is applied.
        2. Default typography and text color are set on the body.
    - **Verification:**
        1. View a basic page and inspect element styles to confirm reset and base styles are active.
    - **Depends‑on:** [T007, T008]
- [ ] **T010 · Feature · P1: create and place paper texture image**
    - **Context:** PLAN.md > File Structure Implementation > 2. Global Styles
    - **Action:**
        1. Source or create a subtle paper grain texture image named `paper-subtle.png`.
        2. Place the image in `public/textures/paper-subtle.png`.
    - **Done‑when:**
        1. `public/textures/paper-subtle.png` exists and is a suitable texture.
    - **Verification:**
        1. Image is accessible at `/textures/paper-subtle.png` in the browser when dev server is running.
    - **Depends‑on:** [T001]
- [ ] **T011 · Feature · P1: implement global body background and paper texture overlay**
    - **Context:** PLAN.md > File Structure Implementation > 2. Global Styles; Implementation Phases > Phase 1 > Item 4
    - **Action:**
        1. In `globals.css`, set `body` `background-color` to `var(--color-cream)`.
        2. Implement the `body::before` pseudo-element style for the fixed paper texture overlay using `var(--texture-paper)` (which points to the PNG).
        3. Define `:root { --texture-paper: url('/textures/paper-subtle.png'); }` in `globals.css`.
    - **Done‑when:**
        1. Body background is cream.
        2. A subtle paper texture is overlaid on the entire viewport.
    - **Verification:**
        1. Page background is cream, and the paper texture is visible and fixed on scroll.
    - **Depends‑on:** [T008, T010]
- [ ] **T012 · Feature · P2: create .text-shadow-vintage tailwind utility class**
    - **Context:** PLAN.md > Rapid Development Strategies > 1. CSS Utilities First
    - **Action:**
        1. Add the `.text-shadow-vintage` utility (`text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);`) to `globals.css` within a `@layer utilities` block.
    - **Done‑when:**
        1. The `.text-shadow-vintage` class is available and applies the specified text shadow.
    - **Verification:**
        1. Apply class to a text element and verify shadow effect in browser.
    - **Depends‑on:** [T001]
- [ ] **T013 · Feature · P2: create .border-double-retro tailwind utility class**
    - **Context:** PLAN.md > Rapid Development Strategies > 1. CSS Utilities First
    - **Action:**
        1. Add the `.border-double-retro` utility (`border: 3px double currentColor;`) to `globals.css` within a `@layer utilities` block.
    - **Done‑when:**
        1. The `.border-double-retro` class is available and applies the specified double border.
    - **Verification:**
        1. Apply class to an element and verify double border effect in browser.
    - **Depends‑on:** [T001]
- [ ] **T014 · Feature · P2: create .texture-paper css utility class (gradient version)**
    - **Context:** PLAN.md > Rapid Development Strategies > 1. CSS Utilities First
    - **Action:**
        1. Add the `.texture-paper` utility with the `repeating-linear-gradient` background to `globals.css` within a `@layer utilities` block.
    - **Done‑when:**
        1. The `.texture-paper` class is available and applies the specified gradient texture.
    - **Verification:**
        1. Apply class to an element and verify gradient texture effect in browser.
    - **Depends‑on:** [T001]

## Core Layout
- [ ] **T015 · Feature · P1: implement root layout component (app/layout.tsx)**
    - **Context:** PLAN.md > Component Architecture > 1. Layout Structure; Implementation Phases > Phase 1 > Item 3
    - **Action:**
        1. Set up `app/layout.tsx` with HTML, head, and body structure.
        2. Integrate `next/font` CSS variables for global font application.
        3. Include a `main` tag or div to wrap page content.
    - **Done‑when:**
        1. Root layout correctly wraps `app/page.tsx` content.
        2. Fonts are applied as expected.
    - **Verification:**
        1. View the page source and inspect elements to confirm layout structure.
        2. Confirm fonts are applied from `layout.tsx`.
    - **Depends‑on:** [T007]
- [ ] **T016 · Feature · P2: implement responsive container utility/component**
    - **Context:** PLAN.md > Implementation Phases > Phase 1 > Item 3
    - **Action:**
        1. Create a responsive container style (e.g., using Tailwind's `container` class with `mx-auto` and `px-4` or custom class).
        2. Ensure it's easily applicable to main page sections.
    - **Done‑when:**
        1. A reusable container limits content width and centers it on larger screens.
        2. Container provides padding on smaller screens.
    - **Verification:**
        1. Apply container to a test section and verify its responsiveness across different screen sizes.
    - **Depends‑on:** [T001]
- [ ] **T017 · Feature · P2: create basic page structure in app/page.tsx**
    - **Context:** PLAN.md > Component Architecture > 1. Layout Structure
    - **Action:**
        1. Modify `app/page.tsx` to be the main splash page.
        2. Import and render placeholders for Hero, Features, Installation, and Footer sections.
    - **Done‑when:**
        1. `page.tsx` renders the basic structure of the splash page with section placeholders.
    - **Verification:**
        1. View the main page in the browser and see section placeholders.
    - **Depends‑on:** [T004, T015]
- [ ] **T018 · Feature · P2: implement footer component with links**
    - **Context:** PLAN.md > Component Architecture > 1. Layout Structure; Not explicitly in phases but part of architecture.
    - **Action:**
        1. Populate `components/Footer.tsx` with basic footer content.
        2. Include placeholder links (e.g., privacy policy, terms of service, contact).
        3. Style footer with retro aesthetic (e.g., using `font-accent` or subtle colors).
    - **Done‑when:**
        1. Footer component renders with content and links.
        2. Footer has a distinct retro style.
    - **Verification:**
        1. View footer on the page and check links (even if # for now).
        2. Inspect styles.
    - **Depends‑on:** [T004, T005, T007]

## Shared Components
- [ ] **T019 · Feature · P1: create RetroButton component structure and props**
    - **Context:** PLAN.md > Component Architecture > 3. Custom Retro Components; Implementation Phases > Phase 2 > Item 1 (Primary CTA button)
    - **Action:**
        1. Define `RetroButtonProps` interface in `components/shared/RetroButton.tsx` (`variant`, `size`, `children`, `onClick`).
        2. Implement basic button structure using `React.forwardRef` and `Slot` from Radix for `asChild` prop if desired (common with shadcn).
        3. Use `class-variance-authority` for variants and sizes.
    - **Done‑when:**
        1. `RetroButton.tsx` exports a button component accepting defined props.
        2. Basic variants (primary/secondary) and sizes (sm/md/lg) can be applied via props changing classes.
    - **Verification:**
        1. Render `RetroButton` with different props in Storybook or a test page.
        2. Check applied classes based on props.
    - **Depends‑on:** [T002, T004]
- [ ] **T020 · Feature · P2: style RetroButton with rounded corners, double border, and vintage shadow**
    - **Context:** PLAN.md > Component Architecture > 3. Custom Retro Components
    - **Action:**
        1. Apply Tailwind classes or custom CSS for rounded corners.
        2. Use `.border-double-retro` utility for the double border.
        3. Apply `shadow-vintage` utility for the shadow.
        4. Style `primary` and `secondary` variants using theme colors (e.g., `retro-red` for primary bg, `retro-blue` for secondary border).
    - **Done‑when:**
        1. Button visually reflects retro style with borders and shadow.
        2. Variants have distinct color schemes.
    - **Verification:**
        1. Visually inspect button variants in Storybook or a test page.
        2. Check CSS properties in dev tools.
    - **Depends‑on:** [T019, T005, T006, T013]
- [ ] **T021 · Feature · P2: implement star accent on RetroButton primary variant**
    - **Context:** PLAN.md > Component Architecture > 3. Custom Retro Components
    - **Action:**
        1. Add a small star icon (CSS shape, SVG, or Lucide icon) to the `primary` variant of `RetroButton`.
        2. Position the star appropriately (e.g., next to text or on a corner).
    - **Done‑when:**
        1. Primary variant of `RetroButton` displays a star accent.
    - **Verification:**
        1. Visually inspect `RetroButton` with `variant="primary"`.
    - **Depends‑on:** [T020]
- [ ] **T022 · Feature · P2: create StarDecoration component (CSS-only)**
    - **Context:** PLAN.md > Component Architecture > 1. Layout Structure (shared); Implementation Phases > Phase 2 > Item 1 (Star decorations CSS-only)
    - **Action:**
        1. Create