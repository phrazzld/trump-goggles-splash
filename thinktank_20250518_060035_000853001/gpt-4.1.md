```
## Chosen Approach
Centralized, atomic, type-safe typography overhaul: bold display font (Playfair Display Black) and Inter body font loaded with next/font, configured semantically in Tailwind, and applied globally via atomic Typography components.

## Rationale
- Maximizes simplicity: One global font loading/configuration; semantic Tailwind font names; minimal moving parts.
- Fully modular: All typography primitives are atomic components; global application via RootLayout and Tailwind ensures strict separation.
- Testability: Typography is testable in isolation (Storybook) and globally; CSS variables and Tailwind ensure deterministic, type-checked usage.
- Strict coding standards: next/font, TypeScript strict mode, atomic design, and Tailwind config all enforced.
- Documentation: Approach is self-documenting via semantic naming and atomic story coverage; rationale encoded in config and README.

## Build Steps
1. **Font Selection & Loading**
   - Use `next/font/google` to load Playfair Display (Black, 900 weight) for display/hero text, and Inter for body text in `app/layout.tsx`.
   - Assign each font to a unique CSS variable (`--font-playfair` for display, `--font-inter` for body) for Tailwind integration.

2. **Tailwind Configuration**
   - In `tailwind.config.ts`, define `fontFamily.display` as `['var(--font-playfair)']` and `fontFamily.body` as `['var(--font-inter)']`.
   - Use only semantic font keys (`display`, `body`, `accent`)—no direct font names in code.
   - Ensure responsive breakpoints and colors reinforce retro Americana feel.

3. **Atomic Typography Components**
   - Create atomic typography components (`<Heading>`, `<Subheading>`, `<BodyText>`, etc.) in `components/atoms/typography/`.
   - These components use `font-display` or `font-body` Tailwind classes, semantic heading levels, and responsive text sizes.
   - Document and test all variants in Storybook, including accessibility checks (contrast, semantic tags, focus).

4. **Global Application**
   - Ensure the `body` uses `font-body`, and main headings use `font-display`.
   - Audit all page, template, organism, and molecule components to use atomic typography components (never raw `<h1>` or `<p>`).
   - Apply responsive, consistent font sizing, weights, and hierarchy via Tailwind classes (e.g., `text-4xl md:text-6xl font-display font-black`).

5. **Performance & Accessibility**
   - Use `display: swap` for all next/font fonts to avoid layout shifts.
   - Test across breakpoints and devices for Cumulative Layout Shift (CLS) and correct font rendering.
   - Ensure all font sizes meet accessibility guidelines (WCAG 2.1 AA), and heading hierarchy is semantic.

6. **Documentation & Testing**
   - Document the typography system and atomic usage in Storybook and README.
   - Add visual regression, a11y, and responsive tests for all typography components.
   - Enforce via pre-commit and CI lint/type checks.
```