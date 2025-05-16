# Todo

## Project Setup & Foundation
- [ ] **T001 · Chore · P0: initialize next.js 15 project and install dependencies**
    - **Context:** Technical Stack (Core Technologies, Package Dependencies), Implementation Phases (Phase 1)
    - **Action:**
        1. Create a new Next.js 15 project using the App Router.
        2. Install all dependencies listed in `PLAN.md`: `framer-motion`, `lucide-react`, `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge`.
    - **Done‑when:**
        1. Next.js project is initialized and runs locally.
        2. All specified dependencies are listed in `package.json` and installed.
    - **Verification:**
        1. Run `npm run dev` (or equivalent) and verify the default Next.js page loads.
        2. Check `package.json` to confirm all dependencies are present.
    - **Depends‑on:** none
- [ ] **T002 · Chore · P1: initialize shadcn/ui**
    - **Context:** Technical Stack (Components: shadcn/ui)
    - **Action:**
        1. Run `npx shadcn-ui@latest init` and configure it according to project standards (e.g., CSS variables, `tailwind.config.js`, `globals.css` paths, `components/ui` alias).
    - **Done‑when:**
        1. `components.json` is created and configured.
        2. The `components/ui` directory and `lib/utils.ts` (or equivalent) are created.
    - **Verification:**
        1. Verify the existence and content of `components.json` and the `components/ui` directory.
    - **Depends‑on:** [T001]
- [ ] **T003 · Feature · P1: configure tailwind with project colors, fonts, and shadows**
    - **Context:** Design System (Color Palette, Typography), File Structure Implementation (Tailwind Configuration), Implementation Phases (Phase 1)
    - **Action:**
        1. Update `tailwind.config.ts` to include the custom `retro` color palette (`red`, `blue`, `cream`, `gold`).
        2. Add the custom `vintage` `boxShadow` to `tailwind.config.ts`.
        3. Configure `fontFamily` in `tailwind.config.ts` to use CSS variables for `display`, `body`, and `accent` fonts (e.g., `'display': ['var(--font-playfair)']`).
    - **Done‑when:**
        1. Custom colors, shadow, and font families are available as Tailwind utility classes.
    - **Verification:**
        1. Apply a retro color class (e.g., `bg-retro-red`), the `shadow-vintage` class, and a custom font class (e.g., `font-display`) to test elements and verify their appearance in the browser.
    - **Depends‑on:** [T001]
- [ ] **T004 · Feature · P1: set up custom fonts using next/font**
    - **Context:** Design System (Typography), Technical Stack (Fonts), Implementation Phases (Phase 1)
    - **Action:**
        1. In `app/layout.tsx` (or a dedicated fonts file), import `Playfair Display`, `Inter`, and `Courier Prime` using `next/font/google` (or local, if preferred).
        2. Assign the loaded fonts to CSS variables (e.g., `--font-playfair`, `--font-inter`, `--font-courier`).
        3. Apply these font variables to the appropriate HTML elements or Tailwind configuration.
    - **Done‑when:**
        1. Fonts are loaded efficiently via `next/font`.
        2. CSS variables for fonts are defined and applied.
    - **Verification:**
        1. Inspect text elements in the browser to confirm the correct fonts are applied.
        2. Check the network tab to ensure fonts are loaded as optimized web fonts.
    - **Depends‑on:** [T001]
- [ ] **T005 · Feature · P1: implement global styles: css reset, body background, and texture overlay**
    - **Context:** Implementation Phases (Phase 1), File Structure Implementation (Global Styles)
    - **Action:**
        1. Add a basic CSS reset (or use Tailwind's preflight) and global styles to `app/globals.css`.
        2. Set the global `body` `background-color` to `var(--color-cream)`.
        3. Define the `--texture-paper: url('/textures/paper-subtle.png');` CSS variable (ensure the image is added in a later task or use the CSS gradient for now).
        4. Implement the `body::before` pseudo-element style for the fixed paper texture overlay using `var(--texture-paper)` and `opacity: 0.03`.
    - **Done‑when:**
        1. Basic CSS reset is applied.
        2. The `body` has the specified cream background color.
        3. A subtle, fixed paper texture overlay is visible on the entire page.
    - **Verification:**
        1. Inspect the page in a browser; verify the cream background and subtle global texture.
        2. Confirm that default browser styles are normalized.
    - **Depends‑on:** [T003] *(for `--color-cream`)*
- [ ] **T006 · Feature · P1: create base root layout with responsive container**
    - **Context:** Implementation Phases (Phase 1), Component Architecture (Layout Structure)
    - **Action:**
        1. Structure `app/layout.tsx` with `html`, `head`, and `body` tags.
        2. Apply global font CSS variables to the `body` or `html` element.
        3. Implement a main content wrapper with a responsive container (e.g., using Tailwind's `container mx-auto px-4` classes).
    - **Done‑when:**
        1. The root layout correctly wraps page content.
        2. Global fonts are applied.
        3. Content is constrained by a responsive container.
    - **Verification:**
        1. View a simple page; verify content is centered and padded.
        2. Resize the browser window to check responsiveness.
    - **Depends‑on:** [T004]
- [ ] **T007 · Chore · P2: create initial component directory structure and placeholder files**
    - **Context:** Implementation Phases (Phase 1), Component Architecture (Layout Structure)
    - **Action:**
        1. Create `components/` directory in `app/`.
        2. Create subdirectories: `components/ui/` (for shadcn/ui), `components/shared/`.
        3. Create placeholder files for all planned components: `Hero.tsx`, `Features.tsx`, `Installation.tsx`, `Footer.tsx` in `components/`, and `RetroButton.tsx`, `StarDecoration.tsx`, `TexturedCard.tsx` in `components/shared/`.
    - **Done‑when:**
        1. All specified directories and empty React component files are created.
    - **Depends‑on:** [T001]
- [ ] **T008 · Feature · P2: add custom tailwind utility classes**
    - **Context:** Rapid Development Strategies (CSS Utilities First)
    - **Action:**
        1. In `app/globals.css`, define `.text-shadow-vintage { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); }` under `@layer utilities`.
        2. Define `.border-double-retro { border: 3px double currentColor; }` under `@layer utilities`.
        3. Define `.texture-paper { background-image: repeating-linear-gradient(...); }` (CSS pattern version) under `@layer utilities`.
    - **Done‑when:**
        1. The custom utility classes `.text-shadow-vintage`, `.border-double-retro`, and `.texture-paper` are available and apply the specified styles.
    - **Verification:**
        1. Apply each utility class to a test element and verify its appearance in the browser.
    - **Depends‑on:** [T003]

## Shared Components
- [ ] **T009 · Feature · P1: create `RetroButton` component structure and props**
    - **Context:** Component Architecture (Custom Retro Components - RetroButton.tsx)
    - **Action:**
        1. Create `components/shared/RetroButton.tsx`.
        2. Define `RetroButtonProps` interface: `variant: 'primary' | 'secondary'`, `size: 'sm' | 'md' | 'lg'`, `children: React.ReactNode`, `onClick?: () => void`, plus any standard button attributes.
        3. Implement the basic button structure using `class-variance-authority` for managing variant and size classes.
    - **Done‑when:**
        1. `RetroButton` component is created and accepts all specified props.
        2. Component dynamically applies different CSS classes based on `variant` and `size` props.
    - **Verification:**
        1. Render the button with different props in a test page/Storybook. Inspect applied classes.
    - **Depends‑on:** [T007]
- [ ] **T010 · Feature · P2: style `RetroButton` with retro aesthetics**
    - **Context:** Component Architecture (Custom Retro Components - RetroButton.tsx)
    - **Action:**
        1. Apply styling to `RetroButton`: rounded corners, use `.border-double-retro` utility, and `shadow-vintage` (Tailwind class).
        2. Define distinct styles for `primary` (e.g., `bg-retro-red`, `text-cream`) and `secondary` (e.g., `border-retro-blue`, `text-retro-blue`) variants using theme colors.
    - **Done‑when:**
        1. `RetroButton` visually reflects the retro style with specified borders, shadow, and variant colors.
    - **Verification:**
        1. Visually inspect all variants and sizes of the button. Check CSS properties in dev tools.
    - **Depends‑on:** [T003, T008, T009]
- [ ] **T011 · Feature · P2: implement star accent on `RetroButton` primary variant**
    - **Context:** Component Architecture (Custom Retro Components - RetroButton.tsx features)
    - **Action:**
        1. Conditionally render a small star icon (e.g., using Lucide React or a simple SVG) within the `RetroButton` when `variant="primary"`.
        2. Style and position the star appropriately (e.g., using `var(--color-gold)`).
    - **Done‑when:**
        1. The `primary` variant of `RetroButton` displays a gold star accent.
    - **Verification:**
        1. Visually inspect the `RetroButton` with `variant="primary"`.
    - **Depends‑on:** [T010]
- [ ] **T012 · Feature · P2: create `StarDecoration` component (CSS-only styling)**
    - **Context:** Component Architecture (Shared Components - StarDecoration.tsx), Hero Section Components (Animated star decorations - CSS-only for phase 2)
    - **Action:**
        1. Create `components/shared/StarDecoration.tsx`.
        2. Use an SVG for the star shape (e.g., from Lucide React or a custom path).
        3. Style the star using CSS, applying `var(--color-gold)` for the fill.
        4. Accept a `className` prop for custom positioning and styling.
    - **Done‑when:**
        1. `StarDecoration` component renders a gold-colored star.
        2. The component can be positioned using Tailwind classes passed via `className`.
    - **Verification:**
        1. Render the component in different positions on a test page.
    - **Depends‑on:** [T007]
- [ ] **T013 · Feature · P2: create `TexturedCard` component**
    - **Context:** Component Architecture (Shared Components - TexturedCard.tsx), Component Composition
    - **Action:**
        1. Create `components/shared/TexturedCard.tsx`.
        2. Style the card with rounded corners, the `shadow-vintage` Tailwind class, and potentially the `.texture-paper` utility for its background.
        3. Ensure the component accepts and renders `children` prop.
    - **Done‑when:**
        1. `TexturedCard` renders with rounded corners, vintage shadow, and paper texture.
        2. The component correctly displays its child content.
    - **Verification:**
        1. Render the card with sample content. Verify styling and content rendering.
    - **Depends‑on:** [T007, T008]

## Section Components
- [ ] **T014 · Feature · P1: build `Hero` section component content and structure**
    - **Context:** Component Architecture (Hero Section Components), File Structure Implementation (Hero.tsx template), Implementation Phases (Phase 2)
    - **Action:**
        1. Create `components/Hero.tsx` following the provided template structure.
        2. Implement a textured background for the hero section (this might be a specific overlay or style for the Hero's wrapper, potentially using `.texture-paper` or a unique texture).
        3. Add the large serif headline (`h1`) using `font-display`, `text-retro-blue`, and `.text-shadow-vintage`.
        4. Add the paragraph (`p`) using `font-body` and `text-retro-black`.
        5. Integrate `RetroButton` as the primary CTA.
        6. Place `StarDecoration` components using absolute positioning as per the template.
        7. Implement a subtle stripe pattern as an accent within the Hero section (e.g., as a border, background element).
    - **Done‑when:**
        1.