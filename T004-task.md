## Task ID: T004

## Title: Resolve other identified failing tests project-wide

## Original Ticket Text:
**T004 · Bugfix · P2: resolve other identified failing tests project-wide**
- **Context:** Detailed Build Steps - 2.1
- **Action:**
    1. For any other failing tests identified in T001 (outside T002, T003 scopes), analyze, debug, and fix.
- **Done‑when:**
    1. All failing tests identified in T001 now pass reliably.
- **Verification:**
    1. Run `pnpm test` and confirm zero failing tests.
- **Depends‑on:** [T001]

## Implementation Approach Analysis Prompt:

I need to analyze and provide a comprehensive implementation plan for resolving the failing tests identified in T001 that are outside the scope of T002 (ExternalLink.test.tsx) and T003 (RetroButton.test.tsx).

First, I'll need to:
1. Identify all remaining failing tests that need to be addressed
2. Understand the cause of each failing test
3. Propose specific solutions for each failing test
4. Consider design decisions and potential trade-offs
5. Outline a step-by-step implementation plan
6. Define acceptance criteria for verification

Based on the test audit, the primary remaining issues appear to be:
1. E2E tests failing due to configuration issues with Playwright
2. Potential other component test failures

For each issue, I need to provide:
- A deep technical analysis of the root cause
- Implementation options with pros and cons
- Recommended approach that aligns with the project's development philosophy
- Specific code changes needed
- Test approach to validate the changes

Let me analyze these issues and develop a comprehensive plan.