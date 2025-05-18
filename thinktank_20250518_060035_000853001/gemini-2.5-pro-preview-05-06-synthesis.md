## Chosen Approach
Implement Playfair Display Black for display text and Inter for body text using `next/font` for optimal loading, configure them with semantic names in `tailwind.config.ts`, and apply globally via CSS base styles, with optional atomic typography components for enhanced consistency.

## Rationale
-   **Simplicity:** Leverages `next/font` for optimized font loading and straightforward Tailwind CSS integration, minimizing custom boilerplate and directly addressing requirements.
-   **Modularity + strict separation:** Font definitions reside in `app/layout.tsx`, theme configuration in `tailwind.config.ts`, and global base styles in `app/globals.css`, maintaining clear separation of concerns. Optional atomic components further enhance modularity.
-   **Testability:** `next/font` with `display: 'swap'` helps prevent Cumulative Layout Shift (CLS), a key performance metric. Visual consistency is verifiable across breakpoints, and atomic components can be individually tested.
-   **Coding standards:** Adheres to Next.js 15, Tailwind CSS, and TypeScript best practices, including semantic naming, type safety, and performance considerations.
-   **Documentation approach:** Semantic class names in Tailwind and a clear, standard configuration structure make the implementation largely self-documenting.

## Build Steps
1.  **Implement Fonts with `next/font`:**
    In `app/layout.tsx`, import `Playfair_Display` (with `weight: '900'` for Black) and `Inter` from `next/font/google`. Configure them to use CSS variables (e.g., `--font-display`, `--font-body`), set `display: 'swap'`, and apply these variable classes to the `<html>` or `<body>` tag.
    ```typescript
    // app/layout.tsx
    import { Playfair_Display, Inter } from 'next/font/google';

    const playfairDisplayBlack = Playfair_Display({
      subsets: ['latin'],
      weight: '900',
      variable: '--font-display',
      display: 'swap',
    });

    const inter = Inter({
      subsets: ['latin'],
      variable: '--font-body',
      display: 'swap',
    });

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="en" className={`${playfairDisplayBlack.variable} ${inter.variable}`}>
          <body>{children}</body>
        </html>
      );
    }
    ```

2.  **Configure Tailwind CSS:**
    In `tailwind.config.ts`, extend the `theme.fontFamily` object to map semantic names to the CSS variables defined in step 1. Provide generic fallback fonts.
    ```typescript
    // tailwind.config.ts
    import type { Config } from 'tailwindcss';

    const config: Config = {
      // ... other configurations
      theme: {
        extend: {
          fontFamily: {
            display: ['var(--font-display)', 'serif'],
            body: ['var(--font-body)', 'sans-serif'],
          },
        },
      },
      // ...
    };
    export default config;
    ```

3.  **Apply Global Base Styles & Hierarchy:**
    In `app/globals.css`, use Tailwind's `@layer base` directive to apply the `font-body` to the `body` element and `font-display` to heading elements (`h1`-`h6`). Define a responsive typographic scale (font sizes, weights, line heights) for these elements to ensure consistent hierarchy and retro Americana aesthetic.
    ```css
    /* app/globals.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer base {
      body {
        @apply font-body text-base /* ...other base styles */;
      }
      h1, h2, h3, h4, h5, h6 {
        @apply font-display font-bold /* ...other heading base styles */;
      }
      h1 { @apply text-4xl md:text-5xl lg:text-6xl; }
      h2 { @apply text-3xl md:text-4xl lg:text-5xl; }
      /* Define for h3-h6 and other elements like p, a, etc. */
    }
    ```

4.  **(Recommended) Create Atomic Typography Components:**
    For enhanced modularity and adherence to atomic design, create reusable React components (e.g., `<Heading level={1}>`, `<Text>`) in `components/atoms/typography/`. These components should encapsulate the Tailwind utility classes for specific typographic styles.

5.  **Ensure Responsiveness & No Layout Shifts:**
    Thoroughly test font rendering across all specified breakpoints using browser developer tools. Verify that fonts are applied correctly and that there are no layout shifts (CLS) during page load or font swapping.

6.  **Validate Accessibility:**
    Check that font sizes, weights, and color contrasts meet WCAG 2.1 AA accessibility guidelines. Use browser extensions or tools like Lighthouse or axe DevTools for auditing.

7.  **Refactor and Test:**
    Update existing UI elements to use the new typography system (either through global styles or by integrating the new atomic components). Conduct thorough visual regression testing and functional testing to ensure correctness.
```