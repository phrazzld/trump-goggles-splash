# T007 Implementation Plan: Optimize Hero Background Patterns

## Overview
Optimize the hero section's background patterns to improve rendering performance while preserving the retro Americana aesthetic and visual hierarchy.

## Current State Analysis

### Existing Layers (Top to Bottom)
1. **Global body texture** (body::before) - Fixed position, opacity 0.5
2. **Hero texture overlay** (.texture-paper) - Absolute position, opacity 0.1 (redundant)
3. **Diagonal stripes** - Complex repeating-linear-gradient, opacity 0.03
4. **7 Animated stars** - Individual DOM elements with various opacities
5. **Vintage border frame** - Using border property

### Performance Issues
- **Paint Complexity**: 5+ overlapping transparent layers require expensive per-pixel compositing
- **Redundant Patterns**: Same texture pattern applied twice (body and hero)
- **Fixed Position Cost**: Global texture can trigger viewport-wide repaints
- **Complex Gradients**: Diagonal stripes use computationally expensive calculations
- **Excessive Layers**: Each element creates separate composite layer

## Implementation Steps

### Step 1: Consolidate Texture Patterns
1. **Remove redundant hero texture overlay** - The global body texture already provides this effect
2. **Move texture to Hero only** - Apply texture locally to hero section instead of globally
3. **Optimize pattern** - Simplify the repeating gradient for better performance

### Step 2: Optimize Diagonal Stripes
1. **Convert to CSS custom properties** for easier maintenance
2. **Simplify gradient** - Reduce gradient stops if possible
3. **Consider SVG alternative** for complex patterns
4. **Apply contain property** to limit repaint scope

### Step 3: Implement CSS Containment
1. Add `contain: layout style paint` to hero section
2. Use `content-visibility: auto` for sections below fold
3. Apply `isolation: isolate` to create new stacking context

### Step 4: Optimize will-change Usage
1. Add cleanup after animations complete
2. Use `will-change: auto` post-animation
3. Limit will-change to actively animating elements

### Step 5: Mobile Optimization
1. Reduce pattern complexity on mobile
2. Use media queries to conditionally load decorative elements
3. Simplify or remove subtle patterns on low-end devices

## Testing Strategy

### Performance Testing
1. **Before Metrics** (Baseline):
   - Run Lighthouse performance audit
   - Chrome DevTools Performance recording
   - Measure paint/composite times
   - Document FPS during animations

2. **After Each Step**:
   - Re-run performance tests
   - Compare metrics
   - Ensure no visual regression

3. **Device Testing**:
   - Test on low-end Android device
   - Test on older iOS devices
   - Verify smooth scrolling

### Visual Testing
1. Take screenshots before changes
2. Implement changes incrementally
3. Visual comparison after each change
4. Cross-browser testing (Chrome, Firefox, Safari)

## Success Criteria
- ✅ Reduce composite layers from 5+ to 3 or fewer
- ✅ Improve Lighthouse performance score by 5+ points
- ✅ Maintain 60fps during animations
- ✅ No visual regression - aesthetic preserved
- ✅ Faster initial paint times
- ✅ Reduced GPU memory usage

## Risk Mitigation
1. **Visual Regression**: Test incrementally, keep original styles commented
2. **Browser Compatibility**: Test CSS containment support, provide fallbacks
3. **Performance Regression**: Profile after each change, ready to rollback
4. **Aesthetic Compromise**: Ensure design team approval for any visual changes

## Code Structure
```
- app/globals.css - Remove global texture, add performance utilities
- app/components/Hero.tsx - Remove redundant texture div, add containment
- app/components/Hero.module.css (new) - Isolated hero styles with optimizations
- Add CSS custom properties for pattern configuration
```

## Expected Outcome
A hero section that:
- Renders 30-50% faster on initial paint
- Uses fewer GPU resources
- Maintains the rich retro Americana aesthetic
- Provides better mobile performance
- Sets precedent for performance-conscious patterns