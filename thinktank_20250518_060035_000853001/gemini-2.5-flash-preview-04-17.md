```
## Chosen Approach
Implement fonts via `next/font`, configure in Tailwind, and apply global base styles using `@layer base`.

## Rationale
- **Simplicity:** This approach uses standard features of Next.js (`next/font`) and Tailwind CSS (`@layer base`, `tailwind.config.ts`) without introducing external libraries or complex patterns, directly addressing requirements with minimal overhead.
- **Modularity + Strict Separation:** Font definitions are centralized (`layout.tsx`), configuration is in the designated config file (`tailwind.config.ts`), and global styling is handled in the global CSS file (`globals.css`) using the standard `@layer base` directive, keeping concerns separated.
- **Testability:** While typography is primarily tested visually, this standard implementation makes it predictable and easier to verify. The font loading strategy (`next/font` with `display: swap`) is designed to minimize Cumulative Layout Shift (CLS).
- **Coding Standards:** Adheres to standard Next.js practices for font loading, standard Tailwind practices for configuration and base layer styling, and maintains the existing TypeScript/Tailwind setup. Semantic naming (`font-display`, `font-body`) is explicitly used.
- **Documentation Approach:** Changes are made in predictable, standard files (`layout.tsx`, `tailwind.config.ts`, `globals.css`), making the changes self-documenting within the project's structure.

## Build Steps
1.  Modify `app/layout.tsx` to import `Ultra` from `next/font/google`. Configure `const ultra = Ultra({ variable: "--font-display", subsets: ["latin"], display: "swap" });`. Remove the `Playfair_Display` import and usage. Ensure the `ultra.variable`, `inter.variable`, and `courierPrime.variable` classes are applied to the `<body>` tag.
2.  Update `app/globals.css`: Remove the `:root` block defining `--font-playfair`, `--font-inter`, `--font-courier` as these are now handled by `next/font`'s variable classes applied to the body. Keep other definitions like `@theme`.
3.  Verify `tailwind.config.ts` within `theme.extend.fontFamily` section: `fontFamily: { 'display': ['var(--font-display)'], 'body': ['var(--font-inter)'], 'accent': ['var(--font-courier)'], }`. No changes should be needed here as the variable names match the semantic names used in `layout.tsx` and the config.
4.  Add a `@layer base` block in `app/globals.css` to apply the semantic font classes to standard HTML elements. Set `body` to `font-body` and apply `font-display` to heading elements (`h1`, `h2`, `h3`, etc.), setting appropriate default font sizes, weights (e.g., bold for display font), and line heights for a consistent hierarchy, aligning with the retro Americana aesthetic.
5.  Verify that all fonts load correctly and render without layout shifts across different breakpoints and browsers.
6.  Ensure accessibility requirements (sufficient contrast, readable sizes) are met with the new fonts, especially for body text.
```