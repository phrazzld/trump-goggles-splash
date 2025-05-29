# T001 Implementation Plan

## Objective
Fix star animation snapping and make delays predictable by replacing spring animations with smooth easing.

## Current Issue
- `type: "spring"` with `stiffness: 100` causing visual snapping
- `Math.random() * 0.3` in delay calculation creating unpredictable timing
- Inconsistent animation behavior across star instances

## Implementation Approach

### Changes to AnimatedStar.tsx
1. **Replace transition object**:
   ```typescript
   // FROM:
   transition={{ 
     duration: 0.6, 
     delay: delay + Math.random() * 0.3,
     type: "spring",
     stiffness: 100
   }}
   
   // TO:
   transition={{ 
     duration: 0.8,
     delay: delay,
     ease: "easeOut"
   }}
   ```

2. **Preserve reduced motion accessibility** - no changes needed, existing `useReducedMotion()` logic remains intact

## Success Criteria
✅ Stars animate smoothly without snapping  
✅ Animation timing is consistent and predictable  
✅ Reduced motion accessibility preserved

## Files Modified
- `app/components/shared/AnimatedStar.tsx`

## Testing
- Visual inspection in browser
- Verify consistent timing across refreshes
- Test reduced motion preference setting

This follows DEVELOPMENT_PHILOSOPHY.md principles of simplicity and maintainability by removing unnecessary complexity while preserving accessibility.