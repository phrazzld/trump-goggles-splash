# T015-plan.md
## Task T015: Eliminate suppression directives in remaining codebase

### Analysis
Based on a thorough review of the codebase, I've performed the following checks:

1. Reviewed the audit report from task T011, which identified only one ESLint disable directive in the `app/components/shared/` directory (in TexturedCard.test.tsx), which was resolved in task T014.

2. Conducted comprehensive searches for:
   - ESLint disable comments (`eslint-disable`) in all TypeScript and JavaScript files
   - TypeScript suppression directives (`@ts-ignore`, `@ts-expect-error`, `@ts-nocheck`) in all TypeScript files
   - Both types of suppression directives in the e2e test directory specifically

3. Verified that the ESLint configuration is correctly enforcing the no-suppression policy by running `pnpm lint` on the entire codebase.

4. Confirmed TypeScript compiler is running without errors by executing `pnpm tsc --noEmit`.

### Findings
- No suppression directives found outside of `app/components/shared/`.
- The suppression directives inside `app/components/shared/` have already been addressed:
  - TexturedCard.test.tsx: Added proper description to the ESLint disable comment (T014)
  - ExternalLink.tsx: Added proper description to the ESLint disable comment (T012/T014)

### Implementation
Since there are no suppression directives outside of `app/components/shared/` that need to be addressed, this task is essentially complete before any implementation work is needed.

### Verification
1. `pnpm lint` completes successfully with no warnings or errors
2. `pnpm tsc --noEmit` completes successfully with no errors

The codebase is now free of unexplained or unjustified suppression directives.