# T013-plan.md
## Task T013: Eliminate `any` types in remaining codebase

### Issues to Address
Based on the audit report and current TypeScript errors:

1. **No explicit `any` usages** found outside of `app/components/shared/` (which was fixed in T012)
2. **TypeScript errors in test files and configuration**:
   - SectionHeading.test.tsx: Testing library type assertions not properly typed
   - e2e/accessibility.e2e.ts: Null checking and parameter type issues
   - playwright.config.ts: Optional properties type issue with `workers`

### Approach

1. **For SectionHeading.test.tsx**:
   - Properly extend the testing library types to include missing matcher properties
   - Update vitest setup to ensure proper type definitions are loaded

2. **For e2e/accessibility.e2e.ts**:
   - Fix the Locator vs Page type mismatch by using the correct API
   - Add proper null checking for elements to fix null safety issues

3. **For playwright.config.ts**:
   - Update the type definitions to properly handle optional properties
   - Ensure `workers` property is never undefined or add proper type union

### Success Criteria
1. No explicit `any` types in the codebase
2. TypeScript compiler passes with no errors project-wide
3. All tests continue to pass
4. Existing functionality remains intact