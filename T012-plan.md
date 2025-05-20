# T012-plan.md
## Task T012: Eliminate `any` types in `app/components/shared/`

### Issues to Address
1. **ExternalLink.tsx**: `const { buttonProps: _, ...cleanLinkProps } = linkProps as any;`
   - The issue is in the destructuring of linkProps when variant is 'button'
   - Currently using 'any' to bypass type checking
   - Need to create a proper type for linkProps that includes buttonProps
   
2. **AnimatedStar.tsx**: TypeScript errors with className
   - Component passes potentially undefined className to StarDecoration
   - Need to fix type handling for className props

### Approach for ExternalLink.tsx
1. Create a proper type for linkProps that includes buttonProps
2. Update the destructuring to use this type
3. Ensure type safety when extracting buttonProps
4. Verify tests still pass

### Approach for AnimatedStar.tsx
1. Fix the type issue by handling undefined className properly
2. Make sure StarDecoration can properly handle undefined className
3. Test the component to ensure it still works correctly

### Success Criteria
1. No `any` types remain in `app/components/shared/`
2. TypeScript compiler passes with no errors
3. All tests pass
4. Component functionality remains the same