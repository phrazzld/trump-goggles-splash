## Chosen Approach
Implement "Playfair Display Black" as the primary display font and "Inter" as the body font using `next/font`, standardize CSS variable names, update `tailwind.config.ts` with semantic font names, and apply a global typographic hierarchy in `globals.css`.

## Rationale
- **Simplicity:** This approach builds upon the existing font (Playfair Display, Inter) choices and `next/font` setup, requiring modifications rather than entirely new integrations. Cleaning up CSS variable definitions enhances clarity.
- **Modularity + strict separation:** Font loading is handled in `app/layout.tsx`, theme integration in `tailwind.config.ts`, and global styles in `app/globals.css`, maintaining clear separation of concerns.
- **Testability (minimal mocking):** The outcome is primarily verified through visual inspection across breakpoints and CLS (Cumulative Layout Shift) metric checks, which `next/font` helps optimize.
- **Coding standards:** Adheres to Next.js 15, Tailwind CSS, TypeScript best practices, and `next/font` usage for performance. It aligns with the provided development philosophy.
- **Documentation approach:** Semantic font names in Tailwind (`font-display`, `font-body`) and a