# Plan: Test Suite Integrity and Strict Type Enforcement

## Chosen Approach (One‑liner)
Systematically resolve all skipped and failing tests to ensure full test suite reliability, then rigorously eliminate all TypeScript `any` types and suppression directives, enforcing these standards via CI configuration.

## Architecture Blueprint
This plan focuses on improving code quality, test reliability, and development tooling configuration, rather than introducing new application architecture.

-   **Modules / Packages Affected**:
    -   `app/components/shared/`: Primary target for test fixes and type refactoring (e.g., `ExternalLink.test.tsx`, `RetroButton.test.tsx`).
    -   `vitest.config.ts`: Configuration for the test runner, ensuring no skipped tests are permitted in CI and coverage is maintained.
    -   `tsconfig.json`: To be configured for maximum TypeScript strictness, explicitly disallowing `any` where possible.
    -   `eslint.config.mjs` (or equivalent ESLint config): To be configured with rules to prohibit `any` (`@typescript-eslint/no-explicit-any`) and suppression comments (`@typescript-eslint/ban-ts-comment`, `eslint-plugin-eslint-comments`).
    -   CI Pipeline Configuration (e.g., GitHub Actions workflows): To execute strict linting, type-checking, and test commands, failing the build on any violation.
-   **Public Interfaces / Contracts**:
    -   Existing component prop types (e.g., `ExternalLinkProps`, `RetroButtonProps`) will be refined to eliminate `any` and use precise types.
    -   Function signatures within utilities and components will be explicitly typed.
    -   No new major public interfaces are anticipated; existing ones will be hardened.
-   **Data Flow Diagram**: Not applicable for these tasks, as they do not alter the application's runtime data flow.
-   **Error & Edge‑Case Strategy**:
    -   A fully passing test suite will provide higher confidence in existing edge-case handling as defined by those tests.
    -   Enhanced type safety will proactively prevent a class of runtime errors by catching them at compile-time.
    -   Elimination of suppression directives will force the proper handling of previously ignored type errors or lint warnings, potentially uncovering latent bugs or poor error handling.

## Detailed Build Steps

1.  **Initial Setup & Test Suite Audit**:
    1.  Ensure a clean development environment: `pnpm install`.
    2.  Execute the full test suite: `pnpm test`.
    3.  Systematically document all currently failing tests and all skipped tests (e.g., `it.skip`, `describe.skip`, or tests commented out). Specifically target `app/components/shared/ExternalLink.test.tsx`, `app/components/shared/RetroButton.test.tsx`, and any others identified.

2.  **Resolve Failing Tests**:
    1.  For each failing test:
        *   Analyze the failure: Understand the discrepancy between expected and actual behavior.
        *   Debug: Identify the root cause in the component logic or the test itself.
        *   Fix: Correct the underlying issue. This **must** prioritize fixing the component code if it's buggy, or the test if the test is flawed.
        *   Adherence: Ensure fixes align with `DEVELOPMENT_PHILOSOPHY.md`, especially "Testing Strategy - Verify Behavior" and "Mock ONLY True External System Boundaries."
        *   Verify: Run the specific test, then the relevant suite, then `pnpm test` to confirm the fix and check for regressions.
    2.  Commit fixes incrementally with clear, atomic messages (e.g., `fix(ExternalLink): Correct rendering of rel attribute for target="_blank"`).

3.  **Resolve Skipped Tests**:
    1.  For each skipped test:
        *   Unskip: Remove the `.skip` directive or uncomment the test.
        *   Analyze: Determine the original reason for skipping. If unclear, run the test to see its current state (pass/fail).
        *   Refactor/Implement:
            *   If the test is valid but the component functionality is missing/incorrect: Implement or fix the component functionality.
            *   If the test logic is flawed or tests implementation details: Rewrite the test to "Verify Behavior" based on the component's public API.
            *   If the component's design makes it difficult to test: This is a "strong signal to refactor the code under test first" (`DEVELOPMENT_PHILOSOPHY.md`).
            *   **Critical for `RetroButton.test.tsx`**: Evaluate if `href`-related tests are appropriate. If `RetroButton` is not intended to be a navigational element (as `ExternalLink` with `variant="button"` serves this), such tests should be removed or adapted to test actual `RetroButton` responsibilities.
            *   **Critical for `ExternalLink.test.tsx`**: Investigate skipped tests (e.g., for `target`, `rel`). If these props should be supported and configurable, ensure the component implements this, and tests verify it. If not, tests should reflect the actual supported API.
        *   Verify: Ensure the test passes reliably and deterministically. Run `pnpm test`.
    2.  Commit changes incrementally (e.g., `feat(ExternalLink): Implement and test custom 'target' prop`).

4.  **Full Test Suite Health Verification**:
    1.  Run `pnpm test` and `pnpm test:cov`.
    2.  Confirm 100% of tests pass.
    3.  Ensure test coverage meets or exceeds thresholds defined in `vitest.config.ts`.
    4.  Ensure tests are deterministic and pass consistently in a clean environment.

5.  **Configure Strict Tooling (Pre-Refactor)**:
    1.  Update `tsconfig.json`:
        *   Ensure `"strict": true` is enabled.
        *   Verify derived strict flags like `"noImplicitAny": true` are active.
        *   Set `"noEmitOnError": true` (or ensure CI build script fails on `tsc --noEmit` errors).
    2.  Update ESLint configuration (`eslint.config.mjs` or equivalent):
        *   Ensure `@typescript-eslint/eslint-plugin` is used effectively.
        *   Set `@typescript-eslint/no-explicit-any` to `error`.
        *   Set `@typescript-eslint/ban-ts-comment` to `error` for `@ts-ignore`, `@ts-expect-error` (allow with descriptive required comment only if *absolutely unavoidable* and peer-reviewed), and `@ts-nocheck`. The default is "Address Violations, Don't Suppress."
        *   Consider `eslint-plugin-eslint-comments` rules like `no-restricted-disable` to manage `eslint-disable` comments, with the goal of eliminating them.

6.  **Audit for `any` and Suppression Directives**:
    1.  Run `pnpm lint` and `pnpm tsc --noEmit`.
    2.  Generate a comprehensive list of all `any` usages and suppression directive violations. Note patterns and high-impact areas.

7.  **Eliminate TypeScript `any`**:
    1.  Iterate through each identified `any` usage.
    2.  For each instance:
        *   Analyze context: Determine the precise expected type (primitive, interface, union, generic, etc.).
        *   Define types: Create new `interface` or `type` aliases if necessary, adhering to "Meaningful Naming" and appropriate colocation.
        *   Replace `any`: Substitute `any` with the specific, correct type. Use `unknown` only as a last resort for truly unknown types, immediately followed by type guards or assertions to narrow it down.
        *   Resolve errors: Fix any new TypeScript errors resulting from stricter typing.
        *   Verify: Run relevant tests and `tsc --noEmit` for the affected module(s).
    3.  Commit changes incrementally (e.g., `refactor(types): Eliminate 'any' from UserProfile component props`).

8.  **Eliminate Suppression Directives**:
    1.  Iterate through each (`@ts-ignore`, `@ts-expect-error`, `eslint-disable`) directive.
    2.  For each directive:
        *   Understand intent: Determine why the suppression was added.
        *   Refactor: Address the underlying TypeScript error or ESLint violation directly in the code. This is non-negotiable as per "Address Violations, Don't Suppress."
        *   Remove directive: Delete the suppression comment.
        *   Verify: Run `pnpm lint` and `pnpm tsc --noEmit` to confirm resolution. Run relevant tests.
    3.  Commit changes incrementally (e.g., `refactor(lint): Resolve ESLint violation and remove disable comment in utils.ts`).

9.  **Final Verification and CI Enforcement**:
    1.  After all refactoring, run `pnpm lint`, `pnpm tsc --noEmit`, and `pnpm test` across the entire project.
    2.  Ensure zero errors or violations.
    3.  Confirm CI pipeline is configured to:
        *   Fail on any ESLint error (including `no-explicit-any` and `ban-ts-comment`).
        *   Fail on any TypeScript compilation error (`tsc --noEmit`).
        *   Fail if any test fails or is skipped (e.g., Vitest's `forbidOnly` option).
        *   Fail if test coverage drops below established thresholds.

## Testing Strategy

-   **Test Layers**: Primarily **Unit/Component Tests** (Vitest + React Testing Library) for `app/components/shared/`. This plan ensures these existing tests are fully active and reliable.
-   **What to Mock**: Strictly adhere to "Mock ONLY True External System Boundaries." No internal components, modules, or logic should be mocked. If test fixing reveals a need to decouple from a true external dependency (e.g., browser API not available in JSDOM, third-party service), that dependency must be abstracted and a test double provided.
-   **Coverage Targets**: Maintain or improve existing coverage targets (e.g., 90% for shared components as per `vitest.config.ts`). The primary goal is test *correctness* and *completeness* for critical paths and behaviors, not just hitting a number.
-   **Edge‑Case Notes**: Fixing skipped/failing tests will inherently improve coverage of previously defined edge cases. When refactoring types, ensure tests still cover scenarios with potentially invalid or unexpected prop types if runtime validation is also in place (though types aim to prevent this).

## Logging & Observability

-   This plan does not introduce new logging features.
-   **CRITICAL**: During refactoring, if `console.log`, `console.warn`, or `console.error` statements are found within component source code (not test files), they **MUST** be removed or replaced with calls to a structured logging mechanism if they represent necessary operational logging. This aligns with "Logging Strategy - Structured Logging is Mandatory."
-   Test output should be clear and actionable. `console.log` in tests is acceptable for temporary debugging but should be removed before committing.

## Security & Config

-   **Input Validation Hotspots**: Eliminating `any` and enforcing strict types for component props and function arguments significantly improves compile-time validation of data shapes, acting as a first line of defense. This is a direct win for "Leverage Types Diligently."
-   **Secrets Handling**: Not directly impacted, but removing `eslint-disable` comments might uncover suppressed lint warnings related to security if such rules are active (e.g., `no-secrets`).
-   **Least‑Privilege Notes**: N/A for these tasks.
-   **Configuration Hardening**:
    -   `tsconfig.json`: Will be hardened for maximum strictness.
    -   `eslint.config.mjs`: Will be configured to enforce type safety and disallow suppressions.
    -   CI Pipeline: Will be the ultimate gatekeeper for these standards.

## Documentation

-   **Code Self-Doc Patterns**: The primary documentation improvement comes from "Leverage Types Diligently." Explicit and accurate types make code significantly more self-documenting. Meaningful naming for types, interfaces, and variables is paramount.
-   **Rationale Comments**: If, in an extremely rare and peer-approved case, a suppression directive like `@ts-expect-error` is deemed absolutely necessary (e.g., for a known TS bug or complex unresolvable third-party type issue), it **MUST** be accompanied by a detailed comment explaining *why* it's necessary, what it's suppressing, and any associated risks or follow-up actions. This aligns with "Document Decisions, Not Mechanics."
-   **README/CONTRIBUTING Updates**: Consider adding a section to `CONTRIBUTING.md` or the project's development guidelines explicitly stating the "no `any`" and "no suppression directives" policy, referencing `DEVELOPMENT_PHILOSOPHY.md`.

## Risk Matrix

| Risk                                                                                                | Severity | Mitigation                                                                                                                                                                                                                                                           |
| :-------------------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Underestimation of effort for test fixes due to deep-seated component issues or flaky tests.          | High     | Prioritize test fixing. If a component requires major refactoring beyond testability tweaks, flag it, document the issue, create a separate task, and apply "Difficulty testing is a strong signal to refactor the code under test first." Isolate flaky tests and stabilize or rewrite. |
| Extensive `any` usage or numerous suppressions lead to significant refactoring scope creep.         | High     | Conduct a thorough audit (Step 6) to quantify. If massive, break down refactoring into multiple, manageable PRs (e.g., per module/component). Prioritize critical/shared code. Communicate scope adjustments if necessary.                                              |
| Difficulty determining correct types for complex logic or poorly typed third-party libraries.       | Medium   | Use `unknown` with type guards as an intermediate step. Consult library documentation, DefinitelyTyped (`@types`). If necessary, create/augment local `.d.ts` files for untyped libraries. Seek peer review for complex typings.                                    |
| Removing suppressions uncovers legitimate, complex bugs requiring out-of-scope fixes.               | Medium   | Document the uncovered bug thoroughly. Create a separate, prioritized task for the bug fix. For this task, ensure the code is type-safe and the suppression is removed, even if it means the bug is now a visible type error or failing test.                          |
| Strict linting/type-checking rules cause friction or block unrelated changes if not managed well.   | Medium   | Implement changes incrementally. Ensure CI provides clear feedback. Provide guidance/training if developers struggle with new strictness. Emphasize the long-term benefits outlined in `DEVELOPMENT_PHILOSOPHY.md`.                                        |
| Introduction of new bugs during refactoring to fix tests or types.                                  | Medium   | Rely on the comprehensive test suite (once fixed) to catch regressions. Conduct thorough code reviews. Refactor in small, verifiable steps.                                                                                                                          |
| Build times increase due to stricter/more comprehensive checks.                                     | Low      | This is an expected trade-off for improved quality. Monitor CI build times. Optimize TypeScript/ESLint configurations or CI caching if times become prohibitive, but do not compromise on strictness.                                                              |

## Open Questions

1.  Are there any known, complex third-party library integrations where type definitions are notoriously poor or missing, which might complicate `any` elimination?
2.  What is the exact current state of the CI configuration regarding `vitest --forbidOnly` (or equivalent to prevent skipped tests from merging)?
3.  Is there a specific order of preference for refactoring files/modules once the initial audit of `any`/suppressions is complete (e.g., shared utilities first, then components)?
4.  Beyond `ExternalLink.test.tsx` and `RetroButton.test.tsx`, are there other specific files known to have a high density of skipped/failing tests or `any` types that require special attention?
