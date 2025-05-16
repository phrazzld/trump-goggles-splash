```
# Todo

## Foundation Setup
- [ ] **T001 · Feature · P0: Configure Tailwind color palette**
    - **Context:** Color palette in Design System
    - **Action:**
        1. Extend Tailwind theme colors in tailwind.config.ts
        2. Map all PLAN.md color variables to Tailwind syntax
    - **Done‑when:**
        1. All color values accessible via Tailwind classes
        2. Config passes TypeScript validation
    - **Verification:**
        1. Render test divs with bg-retro-red/text-retro-blue
    - **Depends‑on:** none

- [ ] **T002 · Feature · P0: Implement font loading system**
    - **Context:** Typography section
    - **Action:**
        1. Configure next/font for Playfair Display, Inter, Courier Prime
        2. Export font variables to CSS custom properties
    - **Done‑when:**
        1. Fonts load correctly in devtools network tab
        2. Font-family vars available in globals.css
    - **Verification:**
        1. Check computed styles on headings/body text
    - **Depends‑on:** none

## Component Infrastructure
- [ ] **T003 · Feature · P1: Create base responsive layout**
    - **Context:** Layout Structure
    - **Action:**
        1. Implement root layout.tsx with font classes
        2. Create max-width container system
    - **Done‑when:**
        1. Mobile-first breakpoints work at 320/768/1024px
        2. All text shows correct font families
    - **Depends‑on:** T002

- [ ] **T004 · Chore · P1: Establish global CSS reset**
    - **Context:** Basic CSS reset in Foundation
    - **Action:**
        1. Add modern-normalize
        2. Set cream background color
    - **Done‑when:**
        1. No browser default styles visible
        2. Body background matches --color-cream
    - **Depends‑on:** T001

## Shared Components
- [ ] **T005 · Feature · P1: Build RetroButton component**
    - **Context:** RetroButton.tsx spec
    - **Action:**
        1. Implement double border variant system
        2. Add hover rotation transition
    - **Done‑when:**
        1. Primary/secondary variants render correctly
        2. Hover state shows 3deg rotation
    - **Verification:**
        1. Test button states in isolation story
    - **Depends‑on:** T001

- [ ] **T006 · Feature · P1: Create StarDecoration component**
    - **Context:** Star decorations in Hero
    - **Action:**
        1. Build SVG star with gold accent color
        2. Add subtle CSS pulsate animation
    - **Done‑when:**
        1. Stars render without clipping
        2. Animation runs at 2s interval
    - **Depends‑on:** T001

## Hero Section
- [ ] **T007 · Feature · P2: Implement Hero text hierarchy**
    - **Context:** Hero.tsx structure
    - **Action:**
        1. Set up font-display for headline
        2. Configure responsive text sizes
    - **Done‑when:**
        1. Desktop shows 8xl headline
        2. Mobile shows 6xl without overflow
    - **Depends‑on:** T002

- [ ] **T008 · Feature · P2: Add Hero background texture**
    - **Context:** Paper grain texture
    - **Action:**
        1. Implement repeating-linear-gradient
        2. Apply opacity overlay
    - **Done‑when:**
        1. Subtle paper texture visible under text
        2. Passes WCAG contrast ratios
    - **Depends‑on:** T004

## Features Section
- [ ] **T009 · Feature · P2: Build TexturedCard component**
    - **Context:** Features showcase
    - **Action:**
        1. Create border-double-retro utility
        2. Add vintage box-shadow
    - **Done‑when:**
        1. Cards show 3px double border
        2. Shadow matches design spec
    - **Depends‑on:** T001

## Final Touches
- [ ] **T010 · Chore · P3: Add SEO meta tags**
    - **Context:** Final Touches phase
    - **Action:**
        1. Set default meta description
        2. Configure openGraph:images
    - **Done‑when:**
        1. Metadata visible in social card testers
    - **Depends‑on:** all components

## Animation System
- [ ] **T011 · Feature · P2: Implement scroll-triggered fade-ins**
    - **Context:** Framer Motion animations
    - **Action:
        1. Add useScroll hooks to sections
        2. Configure opacity/translateY transitions
    - **Done‑when:
        1. Elements fade in on vertical scroll
        2. No jank in animation timeline
    - **Depends‑on:** T008

## Verification
- [ ] **T012 · Test · P1: Cross-browser visual regression**
    - **Context:** Design fidelity metric
    - **Action:
        1. Test Chrome/Firefox/Safari
        2. Verify mobile viewports
    - **Done‑when:
        1. All components render consistently
    - **Depends‑on:** all components
```