## Chosen Approach
Implement a typography overhaul using Playfair Display Black for bold display text and Inter for body text, leveraging `next/font` for performance, and updating Tailwind with semantic font naming for a retro Americana aesthetic.

## Rationale
- **Simplicity:** This approach uses `next/font` for straightforward font loading and optimization, minimizing complexity in integration and avoiding manual font management.
- **Modularity:** Separating font configuration into Tailwind with semantic names (e.g., `font-display`, `font-body`) ensures clear, reusable typography styles across components, adhering to strict separation principles.
- **Testability:** Fonts are applied globally via Tailwind, making visual testing in Storybook and integration tests easier without needing mocks for font rendering.
- **Coding Standards:** Follows TypeScript strict mode and frontend philosophy by using `next/font` for optimal performance and ensuring type-safe Tailwind configurations.
- **Documentation Approach:** Self-documenting Tailwind classes and clear `layout.tsx` updates align with the philosophy of minimizing external documentation by embedding intent in code structure.

## Build Steps
1. **Font Selection and Import:** Finalize Playfair Display Black for headings (bold retro display) and Inter for body text (clean readability), already imported in `layout.tsx` with `next/font/google` for optimal loading and performance.
2. **Update Tailwind Configuration:** In `tailwind.config.ts`, ensure font families are mapped to semantic names: `display` for Playfair Display Black, `body` for Inter, and maintain `accent` for Courier Prime, extending the `theme.fontFamily` section if needed.
3. **Global Font Application:** In `layout.tsx`, confirm the font variables (`--font-playfair`, `--font-inter`) are applied to the `<body>` class for global usage, ensuring no layout shifts with `display: "swap"`.
4. **Define Typography Hierarchy:** Create Tailwind utility classes or base styles in `globals.css` for consistent hierarchy (e.g., `font-display` for headings with large sizes, `font-body` for paragraphs), ensuring responsive breakpoints using Tailwind's responsive prefixes.
5. **Accessibility Enhancements:** Adjust font sizes and weights in Tailwind classes to meet WCAG 2.1 AA contrast ratios, verifiable with tools like axe-core during testing.
6. **Performance Validation:** Verify font loading performance using Lighthouse in CI/CD pipeline, ensuring Cumulative Layout Shift (CLS) remains below 0.1 as per Web Vitals.
7. **Visual Testing:** Update Storybook stories for UI components to reflect new typography, integrating visual regression testing with Chromatic to catch rendering issues across breakpoints.
8. **Documentation:** Embed usage notes in `README.md` or Storybook for typography guidelines, focusing on rationale (retro Americana aesthetic) rather than mechanics, per documentation philosophy.