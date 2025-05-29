# T004 Implementation Plan

## Objective
Ensure hero background covers full viewport by adding `w-full` class to the main container element.

## Current Issue
Hero section background may not cover 100% of viewport width, creating gaps or inconsistent coverage.

## Implementation Approach

### Changes Required
Add `w-full` to the main Hero section container's className to ensure full width coverage.

### File to Modify
- `app/components/Hero.tsx` - main motion.section element

### Change Details
```typescript
// FROM:
className="relative min-h-screen flex items-center justify-center overflow-hidden"

// TO:
className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
```

## Success Criteria
✅ Hero section background covers 100% of viewport width
✅ No horizontal gaps visible at any viewport size
✅ Responsive behavior maintained

## Verification
1. Visual inspection across different viewport sizes
2. Browser resize testing
3. Device emulator testing

This follows DEVELOPMENT_PHILOSOPHY.md principles of simplicity and explicit styling. The change is minimal, focused, and addresses the specific layout issue identified.