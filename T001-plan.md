# T001 - Typography Overhaul Implementation Plan

## Overview
Implement bold, attention-grabbing typography for the Trump Goggles splash page using Playfair Display Black for headings and Inter for body text, leveraging next/font for optimal performance.

## Architecture Decisions

### Font Selection
- **Display Font**: Playfair Display (weight: 900) - Bold serif for maximum impact
- **Body Font**: Inter - Clean, readable sans-serif
- **Loading Strategy**: next/font with display: 'swap' to prevent layout shifts

### Implementation Structure
1. Font loading in `app/layout.tsx` via next/font
2. Tailwind configuration in `tailwind.config.ts` for semantic naming
3. Global base styles in `app/globals.css` for consistent hierarchy
4. Optional atomic typography components for enhanced modularity

## Detailed Implementation Steps

### Step 1: Implement Fonts with next/font
```typescript
// app/layout.tsx
import { Playfair_Display, Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: '900',  // Black weight for bold impact
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Trump Goggles',
  description: 'See the web through a different lens',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### Step 2: Configure Tailwind CSS
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  // ... existing config
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        // Keep existing font configurations for compatibility
        'playfair-display': ['var(--font-playfair)'],
        'inter': ['var(--font-inter)'],
        'courier-prime': ['var(--font-courier)'],
        'playfair': ['var(--font-playfair-display)'],
        'courier': ['var(--font-courier-prime)'],
      },
      // ... rest of existing theme
    },
  },
} satisfies Config;
```

### Step 3: Apply Global Typography Styles
```css
/* app/globals.css - Update existing file */
@import "tailwindcss";

@theme {
  /* Existing colors and shadows... */
}

@layer base {
  body {
    @apply font-body text-base leading-relaxed text-gray-900;
  }
  
  /* Heading hierarchy for retro Americana impact */
  h1, h2, h3, h4, h5, h6 {
    @apply font-display font-black tracking-tight leading-tight;
  }
  
  h1 {
    @apply text-6xl md:text-7xl lg:text-8xl xl:text-9xl;
  }
  
  h2 {
    @apply text-4xl md:text-5xl lg:text-6xl;
  }
  
  h3 {
    @apply text-3xl md:text-4xl lg:text-5xl;
  }
  
  h4 {
    @apply text-2xl md:text-3xl lg:text-4xl;
  }
  
  h5 {
    @apply text-xl md:text-2xl lg:text-3xl;
  }
  
  h6 {
    @apply text-lg md:text-xl lg:text-2xl;
  }
  
  /* Body text hierarchy */
  p {
    @apply font-body text-base md:text-lg leading-relaxed;
  }
  
  .lead {
    @apply text-lg md:text-xl lg:text-2xl;
  }
  
  /* Button and UI text */
  .text-ui {
    @apply font-body font-medium;
  }
  
  /* Accent text using display font */
  .text-accent {
    @apply font-display;
  }
}

/* Existing utilities... */
```

### Step 4: Update Hero Component
Apply the new typography system to the Hero component:

```tsx
// app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ...existing decorations... */}
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Use h1 for main headline - will inherit from base styles */}
        <h1 className="text-retro-blue mb-10 text-shadow-hero">
          Trump Goggles
        </h1>
        
        {/* Lead paragraph style */}
        <p className="lead text-gray-800 mb-16 max-w-3xl mx-auto">
          See every Trump-related headline, story, and mention on any webpage
        </p>
        
        {/* Button retains custom styling but uses text-ui class */}
        <div className="transform hover:scale-105 transition-transform duration-200">
          <RetroButton variant="primary" size="lg" className="text-ui text-xl md:text-2xl px-10 py-5">
            Install Trump Goggles
          </RetroButton>
        </div>
      </div>
    </section>
  );
}
```

### Step 5: Validate and Test

1. **Test Responsiveness**: Check all breakpoints (sm, md, lg, xl, 2xl)
2. **CLS Testing**: Verify no layout shifts during font loading
3. **Accessibility**: 
   - Color contrast meets WCAG 2.1 AA
   - Font sizes are readable
   - Text hierarchy is logical
4. **Browser Testing**: Test in Chrome, Firefox, Safari, Edge
5. **Performance**: Run Lighthouse to ensure no performance regressions

### Step 6: Update Existing Components
Update any other components that need the new typography:
- `RetroButton`: Ensure consistent font usage
- `SectionHeading`: Will leverage base heading styles
- Any future components should use the semantic classes

## Testing Checklist

- [ ] Fonts load without FOUT/FOUC
- [ ] No Cumulative Layout Shift (CLS)
- [ ] Typography is responsive across all breakpoints
- [ ] Headings have correct hierarchy (h1 > h2 > h3...)
- [ ] Body text is readable at all sizes
- [ ] Retro Americana aesthetic is achieved
- [ ] Accessibility standards are met
- [ ] Existing components still render correctly

## Rollback Plan
If issues arise:
1. Revert changes in `app/layout.tsx`
2. Remove new fontFamily entries from `tailwind.config.ts`
3. Remove @layer base typography from `app/globals.css`
4. Components will fall back to previous styling

## Future Considerations
- Consider creating atomic typography components (`<Heading>`, `<Text>`) for stricter type safety
- Add more font weights if needed for different UI states
- Consider variable fonts for performance if more weights are needed