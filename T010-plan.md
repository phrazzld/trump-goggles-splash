# T010: Add Entrance Animations - Implementation Plan

## Task Overview
Implement subtle Framer Motion animations across all sections with scroll-triggered entrances, respecting user's motion preferences, and enhance visual appeal with additional StarDecoration elements.

## Requirements
- Implement subtle Framer Motion animations
- Ensure all animations respect `prefers-reduced-motion`
- Add StarDecoration elements throughout sections
- Sections animate smoothly on scroll/load
- Maintain 60fps performance
- No layout shifts or accessibility issues

## Implementation Approach

### 1. Core Animation Infrastructure

#### AnimatedSection Component
Create a reusable wrapper component that handles:
- Scroll-triggered entrance animations
- Motion preference detection
- Consistent animation patterns
- Performance optimization

```typescript
// app/components/shared/AnimatedSection.tsx
import { motion, useReducedMotion, Variants, HTMLMotionProps } from 'framer-motion';

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
  customVariants?: Variants;
  delay?: number;
  amount?: number; // Viewport amount to trigger animation (0 to 1)
}
```

### 2. Animation Patterns

#### Default Section Animation
- Fade in with subtle vertical movement
- Duration: 0.5s with easeOut timing
- Trigger when 20% visible in viewport
- Animations only play once

#### Section-Specific Patterns
1. **Hero**: Immediate animation on page load
   - Scale from 0.95 to 1 with fade
   - Delay: 0.2s for smooth entrance

2. **FeatureShowcase**: Staggered card animations
   - Parent section fades in
   - Cards animate with stagger delay
   - Each card fades and slides up

3. **TrumpismExamples**: Grid stagger
   - Grid container animates first
   - Items stagger with 0.1s delay
   - Subtle scale effect on cards

4. **InstallationGuide**: Sequential steps
   - Section fades in
   - Steps animate in order
   - Progressive delay increase

5. **Footer**: Simple fade
   - Basic fade in from below
   - Longer delay (appears last)

### 3. StarDecoration Enhancement

#### Placement Strategy
- Add 2-3 stars per section
- Position strategically for visual balance
- Avoid content overlap
- Maintain theme consistency

#### Animation Approach
- Subtle rotation and scale
- Random delays for sparkle effect
- Fade in with slight movement
- Respect reduced motion preference

### 4. Performance Considerations

- Use GPU-accelerated properties (opacity, transform)
- Implement `will-change` for complex animations
- Test on low-end devices
- Monitor Core Web Vitals (CLS, FID)
- Debounce scroll events if needed

### 5. Accessibility Implementation

#### Reduced Motion Support
```typescript
const shouldReduceMotion = useReducedMotion();

if (shouldReduceMotion) {
  // Render without animations
  return <section>{children}</section>;
}
```

#### Focus Management
- Ensure animations don't interfere with keyboard navigation
- Maintain proper focus order
- Test with screen readers
- Verify WCAG 2.1 AA compliance

### 6. Testing Strategy

#### Unit Tests
- Test AnimatedSection behavior
- Verify reduced motion handling
- Check scroll trigger logic
- Validate prop passing

#### Visual Testing
- Create Storybook stories for each animation
- Test with motion preferences
- Verify responsive behavior
- Document animation patterns

#### Integration Tests
- Full page animation flow
- Performance testing
- Cross-browser compatibility
- Device testing (mobile/tablet)

### 7. Implementation Steps

1. Install Framer Motion: `pnpm add framer-motion`
2. Create AnimatedSection component
3. Implement section-specific animations
4. Add StarDecoration enhancements
5. Test reduced motion support
6. Performance optimization
7. Write tests and documentation
8. Visual QA across devices

### 8. Risk Mitigation

- Start with Hero section as proof of concept
- Implement progressive enhancement
- Provide fallbacks for unsupported browsers
- Monitor bundle size impact
- Create performance budget

## Success Criteria

- All sections have smooth entrance animations
- Zero accessibility regressions
- Maintains 60fps on average devices
- Respects user motion preferences
- No increase in CLS metric
- Enhances visual appeal without distraction
- All tests pass
- Documented animation system

## Documentation Requirements

- Component API documentation
- Animation pattern guide
- Performance tuning notes
- Accessibility considerations
- Troubleshooting guide
- Storybook examples