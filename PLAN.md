# Trump Goggles Splash Page - Retro Americana Technical Plan

## Overview
This document outlines the technical implementation plan for rapidly prototyping a Retro Americana-styled splash page for the Trump Goggles browser extension.

## Design System

### Color Palette
```css
--color-primary-red: #B91C1C;      /* Deep American red */
--color-primary-blue: #1E3A8A;     /* Navy blue */
--color-cream: #FEFBF3;            /* Vintage paper cream */
--color-white: #FFFFFF;            
--color-black: #18181B;            /* Soft black for text */
--color-gold: #D97706;             /* Accent gold for stars/badges */
--color-shadow: rgba(0, 0, 0, 0.1);
```

### Typography
```css
/* Headings - Vintage Serif */
--font-display: 'Playfair Display', serif;

/* Body - Clean Sans-serif */  
--font-body: 'Inter', system-ui, sans-serif;

/* Accent - American Typewriter style */
--font-accent: 'Courier Prime', monospace;
```

### Spacing System
```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
```

## Technical Stack

### Core Technologies
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + CSS Modules for complex components
- **Components**: shadcn/ui for rapid development
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React + custom SVG stars/stripes
- **Fonts**: Next Font for optimized loading

### Package Dependencies
```json
{
  "dependencies": {
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.263.1",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

## Component Architecture

### 1. Layout Structure
```
app/
├── layout.tsx          # Root layout with font loading
├── page.tsx           # Main splash page
├── globals.css        # Global styles + Tailwind
└── components/
    ├── ui/            # shadcn/ui components
    ├── Hero.tsx       # Hero section
    ├── Features.tsx   # Features showcase
    ├── Installation.tsx # Download/install section
    ├── Footer.tsx     # Footer with links
    └── shared/
        ├── RetroButton.tsx
        ├── StarDecoration.tsx
        └── TexturedCard.tsx
```

### 2. Hero Section Components
```typescript
// Hero.tsx structure
- Textured background with subtle paper grain
- Large serif headline with vintage shadow
- Animated star decorations
- Primary CTA button with hover effects
- Subtle stripe pattern as accent
```

### 3. Custom Retro Components
```typescript
// RetroButton.tsx
interface RetroButtonProps {
  variant: 'primary' | 'secondary'
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

// Features:
- Rounded corners with double border
- Vintage shadow effect
- Hover state with slight rotation
- Star accent on primary variant
```

## Implementation Phases

### Phase 1: Foundation (2 hours)
1. Set up color palette in Tailwind config
2. Configure fonts with next/font
3. Create base layout with responsive container
4. Implement basic CSS reset and global styles
5. Set up component structure

### Phase 2: Core Components (3 hours)
1. Build Hero section with:
   - Vintage texture overlay
   - Typography hierarchy
   - Star decorations (CSS-only)
   - Primary CTA button
2. Create Features section:
   - Card-based layout
   - Icon integration
   - Retro borders and shadows
3. Implement Installation section:
   - Browser detection
   - Download buttons
   - Compatibility badges

### Phase 3: Polish & Animation (2 hours)
1. Add Framer Motion animations:
   - Subtle fade-ins on scroll
   - Star twinkle effects
   - Button hover states
2. Implement texture overlays:
   - Paper grain CSS pattern
   - Subtle vignette effect
3. Add responsive breakpoints
4. Optimize performance

### Phase 4: Final Touches (1 hour)
1. SEO meta tags
2. Open Graph images
3. Favicon and app icons
4. Analytics setup (if needed)
5. Accessibility audit

## Rapid Development Strategies

### 1. CSS Utilities First
```css
/* Extend Tailwind with custom utilities */
@layer utilities {
  .text-shadow-vintage {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .border-double-retro {
    border: 3px double currentColor;
  }
  
  .texture-paper {
    background-image: 
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 2px,
        rgba(255, 255, 255, 0.03) 2px,
        rgba(255, 255, 255, 0.03) 4px
      );
  }
}
```

### 2. Component Composition
```typescript
// Compose complex components from simple ones
<RetroCard>
  <StarDecoration position="top-right" />
  <CardContent>
    <h3 className="font-display">Feature Title</h3>
    <p className="font-body">Description</p>
  </CardContent>
</RetroCard>
```

### 3. Performance Optimizations
- Use CSS transforms for animations (GPU accelerated)
- Lazy load below-the-fold content
- Optimize images with next/image
- Inline critical CSS
- Use static generation for the page

## File Structure Implementation

### 1. Tailwind Configuration
```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'display': ['var(--font-playfair)'],
        'body': ['var(--font-inter)'],
        'accent': ['var(--font-courier)'],
      },
      colors: {
        'retro': {
          'red': '#B91C1C',
          'blue': '#1E3A8A',
          'cream': '#FEFBF3',
          'gold': '#D97706',
        }
      },
      boxShadow: {
        'vintage': '4px 4px 0px 0px rgba(0,0,0,0.1)',
      }
    }
  }
}
```

### 2. Global Styles
```css
/* globals.css additions */
:root {
  --texture-paper: url('/textures/paper-subtle.png');
}

body {
  background-color: var(--color-cream);
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: var(--texture-paper);
  opacity: 0.03;
  pointer-events: none;
  z-index: 1;
}
```

### 3. Component Templates
```tsx
// Hero.tsx template
export function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <StarDecoration className="absolute top-10 left-10" />
        <StarDecoration className="absolute bottom-10 right-10" />
        
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl text-retro-blue mb-6 text-shadow-vintage">
            Trump Goggles
          </h1>
          <p className="font-body text-xl md:text-2xl text-retro-black mb-8">
            See the web through a different lens
          </p>
          <RetroButton variant="primary" size="lg">
            Add to Chrome
          </RetroButton>
        </div>
      </div>
    </section>
  )
}
```

## Development Timeline

**Total Estimated Time: 8 hours**

1. **Hour 1-2**: Foundation setup
2. **Hour 3-5**: Core component development
3. **Hour 6-7**: Animations and polish
4. **Hour 8**: Testing and deployment prep

## Key Success Metrics

1. **Performance**
   - Lighthouse score > 95
   - First Contentful Paint < 1s
   - Time to Interactive < 2s

2. **Design Fidelity**
   - Consistent Retro Americana aesthetic
   - Smooth animations
   - Responsive across devices

3. **Development Speed**
   - MVP complete in 8 hours
   - Reusable component library
   - Easy to iterate and update

## Next Steps

1. Initialize project dependencies
2. Set up color and typography systems
3. Create base components
4. Build page sections iteratively
5. Add progressive enhancements
6. Deploy to Vercel

This plan prioritizes rapid development while maintaining high quality and the desired Retro Americana aesthetic.