# T009 Implementation Plan: Update AnimatedStar Unit Tests

## Overview
Update the existing unit tests for AnimatedStar component to cover the refactored animation logic implemented in T001, specifically testing the transition properties and animation behavior.

## Current State Analysis
The existing AnimatedStar.test.tsx covers:
- Performance optimizations (will-change property)
- Reduced motion support
- Basic animation properties
- className handling

## Missing Test Coverage (from T001 changes)
1. **Transition Properties:** Duration (0.8s), ease ("easeOut"), delay handling
2. **Animation Logic:** Removal of spring physics, consistent timing
3. **Enhanced Reduced Motion:** More comprehensive testing of fallback behavior
4. **New Props:** data-decorative attribute support

## Implementation Approach
Following the Development Philosophy's testing principles:
- Test *what* the component does via its public API, not *how*
- Focus on behavior verification
- Use real implementations, minimal mocking
- Ensure tests are maintainable and clear

## Changes Required

### 1. Enhanced Animation Logic Tests
- Test that transition uses duration: 0.8
- Test that transition uses ease: "easeOut" 
- Test that delay is properly applied
- Test that no spring properties are used

### 2. Improved Reduced Motion Tests
- Test that reduced motion renders StarDecoration directly
- Test that data-decorative attribute is passed through
- Test that no motion wrapper exists in reduced motion mode

### 3. New Attribute Tests
- Test data-decorative attribute handling
- Test conditional rendering with data-decorative

### 4. Animation Properties Validation
- Test initial animation state
- Test viewport-based animation triggers
- Test aria-hidden accessibility

## Success Criteria
- All existing tests continue to pass
- New tests cover T001 refactored animation logic
- Test coverage includes transition props verification
- Reduced motion behavior is thoroughly tested
- All tests follow development philosophy guidelines

## Files Modified
- `app/components/shared/AnimatedStar.test.tsx` (update existing tests)