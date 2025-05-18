## Chosen Approach  
Use next/font to load bold Playfair Display Black for headings and Inter for body text, map them to semantic Tailwind font families, and encapsulate all styles in atomic Heading/Text components applied globally.

## Rationale  
- Simplicity: Only two Google fonts via next/font, no extra CSS-in-JS or complex loaders.  
- Modularity: Define a Typography atom (Heading/Text) and semantic font families in Tailwind, isolating font logic.  
- Testability: Componentized typography can be tested in Storybook and with RTL/Visual tests for variants.  
- Coding Standards: Strict TS, atomic design, Tailwind naming conventions, no `any` or overrides.  
- Documentation: Storybook-first stories document variants, sizes, weights, and accessibility concerns.

## Build Steps  
1. **Install and load fonts**  
   – In `app/layout.tsx`, import Playfair_Display with weight `"900"` and Inter.  
   – Pass `variable: "--font-display"` & `variable: "--font-body"`, `display: "swap"`.  
   – Add their `.variable` classes to `<html>`.

2. **Tailwind config update**  
   – In `tailwind.config.ts`, under `theme.extend.fontFamily`, add:  
     • `display: ['var(--font-display)']`  
     • `body:    ['var(--font-body)']`  
   – Remove ad-hoc font references; ensure content paths include `app/**/*`.

3. **Global CSS adjustments**  
   – In `globals.css`, set `html { font-family: theme('fontFamily.body'); }`.  
   – Define element defaults: `h1–h6 { @apply font-display; } p, li { @apply font-body; }`.  
   – Add responsive size utilities (`@apply text-4xl md:text-6xl` for h1, etc.).

4. **Create Typography atom**  
   – Under `components/atoms/Typography.tsx`, export:  
     ```tsx
     interface HeadingProps { level?: 1–6; children: ReactNode }
     export function Heading({ level=1, children }: HeadingProps) { /* maps to h1–h6 with tailwind text-{size} font-display */ }
     export function Text(props: { children: ReactNode }) { return <p className="font-body text-base md:text-lg">{props.children}</p> }
     ```  
   – Fully type all props; no `any`.

5. **Storybook-first development**  
   – Write stories in `stories/atoms/Typography.stories.tsx` for Heading levels 1–6 and Text.  
   – Include variants: size overrides, color, dark mode.  
   – Add addon-a11y and Chromatic snapshots.

6. **Integrate globally**  
   – Replace raw `<h1>`, `<p>` in pages with `<Heading>` and `<Text>`.  
   – Wrap page content in `<main>` already in layout.

7. **Performance & accessibility checks**  
   – Run `next build` and Lighthouse CI for CLS, FCP, LCP budgets.  
   – Run axe-core integration tests on typography samples.  
   – Verify tailwind purge tree-shakes unused styles.