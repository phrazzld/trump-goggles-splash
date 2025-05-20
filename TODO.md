# Todo

## Test Suite Audit & Remediation
- [x] **T001 · Chore · P0: audit and document all failing and skipped tests**
    - **Context:** Detailed Build Steps - 1.3
    - **Action:**
        1. Execute `pnpm test` after `pnpm install`.
        2. Systematically document all failing tests (name, file, error) and all skipped tests (name, file, e.g., `it.skip`, commented out), focusing on `app/components/shared/ExternalLink.test.tsx` and `app/components/shared/RetroButton.test.tsx`.
    - **Done‑when:**
        1. A comprehensive list of all failing and skipped tests is created and accessible.
    - **Verification:**
        1. Review the generated list against the test runner output for completeness.
    - **Depends‑on:** none

- [x] **T002 · Bugfix · P1: resolve failing tests in `app/components/shared/ExternalLink.test.tsx`**
    - **Context:** Detailed Build Steps - 2.1
    - **Action:**
        1. For each failing test in `ExternalLink.test.tsx` (from T001), analyze, debug, and fix the component logic or test itself.
        2. Ensure fixes align with `DEVELOPMENT_PHILOSOPHY.md` (e.g., "Testing Strategy - Verify Behavior", "Mock ONLY True External System Boundaries").
    - **Done‑when:**
        1. All previously failing tests in `app/components/shared/ExternalLink.test.tsx` pass reliably.
    - **Verification:**
        1. Run `pnpm test app/components/shared/ExternalLink.test.tsx` and confirm all tests pass.
        2. Run `pnpm test` to check for regressions.
    - **Depends‑on:** [T001]

- [x] **T003 · Bugfix · P1: resolve failing tests in `app/components/shared/RetroButton.test.tsx`**
    - **Context:** Detailed Build Steps - 2.1
    - **Action:**
        1. For each failing test in `RetroButton.test.tsx` (from T001), analyze, debug, and fix the component logic or test itself.
        2. Ensure fixes align with `DEVELOPMENT_PHILOSOPHY.md`.
    - **Done‑when:**
        1. All previously failing tests in `app/components/shared/RetroButton.test.tsx` pass reliably.
    - **Verification:**
        1. Run `pnpm test app/components/shared/RetroButton.test.tsx` and confirm all tests pass.
        2. Run `pnpm test` to check for regressions.
    - **Depends‑on:** [T001]

- [x] **T004 · Bugfix · P2: resolve other identified failing tests project-wide**
    - **Context:** Detailed Build Steps - 2.1
    - **Action:**
        1. For any other failing tests identified in T001 (outside T002, T003 scopes), analyze, debug, and fix.
    - **Done‑when:**
        1. All failing tests identified in T001 now pass reliably.
    - **Verification:**
        1. Run `pnpm test` and confirm zero failing tests.
    - **Depends‑on:** [T001]

- [x] **T005 · Test · P1: resolve skipped tests in `app/components/shared/ExternalLink.test.tsx`**
    - **Context:** Detailed Build Steps - 3.1 (Critical for `ExternalLink.test.tsx`)
    - **Action:**
        1. For each skipped test in `ExternalLink.test.tsx` (from T001): unskip, analyze, and refactor/implement.
        2. Investigate skipped tests for `target`, `rel` props: if these props should be supported, ensure component implements this and tests verify; if not, tests should reflect actual supported API.
    - **Done‑when:**
        1. All previously skipped tests in `app/components/shared/ExternalLink.test.tsx` are active and pass reliably, or are appropriately removed/adapted with justification.
    - **Verification:**
        1. Run `pnpm test app/components/shared/ExternalLink.test.tsx` and confirm no skipped tests and all active tests pass.
    - **Depends‑on:** [T001]

- [x] **T006 · Test · P1: resolve skipped tests in `app/components/shared/RetroButton.test.tsx`**
    - **Context:** Detailed Build Steps - 3.1 (Critical for `RetroButton.test.tsx`)
    - **Action:**
        1. For each skipped test in `RetroButton.test.tsx` (from T001): unskip, analyze, and refactor/implement.
        2. Evaluate if `href`-related tests are appropriate; if `RetroButton` is not navigational, remove/adapt tests to actual `RetroButton` responsibilities.
    - **Done‑when:**
        1. All previously skipped tests in `app/components/shared/RetroButton.test.tsx` are active and pass reliably, or are appropriately removed/adapted with justification.
    - **Verification:**
        1. Run `pnpm test app/components/shared/RetroButton.test.tsx` and confirm no skipped tests and all active tests pass.
    - **Depends‑on:** [T001]

- [x] **T007 · Test · P2: resolve other identified skipped tests project-wide**
    - **Context:** Detailed Build Steps - 3.1
    - **Action:**
        1. For any other skipped tests identified in T001 (outside T005, T006 scopes), unskip, analyze, and refactor/implement.
    - **Done‑when:**
        1. All skipped tests identified in T001 are active and pass reliably, or are appropriately removed/adapted.
    - **Verification:**
        1. Run `pnpm test` and confirm zero skipped tests.
    - **Depends‑on:** [T001]

- [x] **T008 · Test · P1: verify full test suite health (100% pass, coverage, determinism)**
    - **Context:** Detailed Build Steps - 4
    - **Action:**
        1. Run `pnpm test` and `pnpm test:cov`.
        2. Confirm 100% of tests pass and tests are deterministic (pass consistently in a clean environment).
        3. Ensure test coverage meets or exceeds thresholds defined in `vitest.config.ts`.
    - **Done‑when:**
        1. `pnpm test` reports 100% pass rate with no skipped tests.
        2. Test coverage meets or exceeds defined thresholds.
        3. Tests pass consistently.
    - **Depends‑on:** [T002, T003, T004, T005, T006, T007]

## Tooling Configuration
- [x] **T009 · Chore · P1: configure `tsconfig.json` for maximum strictness**
    - **Context:** Detailed Build Steps - 5.1
    - **Action:**
        1. In `tsconfig.json`, ensure `"strict": true` is enabled.
        2. Verify derived strict flags like `"noImplicitAny": true` are active.
        3. Set `"noEmitOnError": true` (or ensure CI build script fails on `tsc --noEmit` errors).
    - **Done‑when:**
        1. `tsconfig.json` is updated with specified strict settings.
        2. `pnpm tsc --noEmit` (or equivalent type-checking script) reflects these settings.
    - **Verification:**
        1. Introduce a deliberate type error (e.g. `const x: string = 123;`) and confirm `tsc --noEmit` fails.
    - **Depends‑on:** none

- [x] **T010 · Chore · P1: configure ESLint to forbid `any` and suppression directives**
    - **Context:** Detailed Build Steps - 5.2
    - **Action:**
        1. In ESLint config (`eslint.config.mjs` or equivalent), set `@typescript-eslint/no-explicit-any` to `error`.
        2. Set `@typescript-eslint/ban-ts-comment` to `error` for `@ts-ignore`, `@ts-expect-error` (allowing with descriptive required comment only if unavoidable and peer-reviewed), and `@ts-nocheck`.
        3. Consider `eslint-plugin-eslint-comments` rules like `no-restricted-disable` to manage `eslint-disable` comments.
    - **Done‑when:**
        1. ESLint configuration is updated to enforce these rules at error level.
        2. `pnpm lint` reflects these settings.
    - **Verification:**
        1. Introduce a deliberate `any` usage (e.g. `let foo: any;`) and confirm `pnpm lint` reports an error.
        2. Introduce a `@ts-ignore` comment and confirm `pnpm lint` reports an error.
    - **Depends‑on:** none

## Code Quality Audit & Refactoring
- [x] **T011 · Chore · P1: audit codebase for `any` usages and suppression directives**
    - **Context:** Detailed Build Steps - 6
    - **Action:**
        1. Run `pnpm lint` and `pnpm tsc --noEmit` after T009 & T010 are configured.
        2. Generate a comprehensive list of all `any` usages and suppression directive violations (`@ts-ignore`, `@ts-expect-error`, `eslint-disable`), noting patterns and high-impact areas.
    - **Done‑when:**
        1. A comprehensive list of all `any` usages and suppression directive violations is created and accessible.
    - **Depends‑on:** [T009, T010]

- [x] **T012 · Refactor · P1: eliminate `any` types in `app/components/shared/`**
    - **Context:** Detailed Build Steps - 7; Modules Affected
    - **Action:**
        1. For each `any` usage in `app/components/shared/` (identified in T011): analyze context, define precise types (interfaces, prop types like `ExternalLinkProps`, `RetroButtonProps`), and replace `any`.
        2. Resolve any new TypeScript errors and verify with `tsc --noEmit` and relevant tests.
    - **Done‑when:**
        1. No `any` types remain in `app/components/shared/` (props, function signatures, variables).
        2. `pnpm tsc --noEmit` passes for this module.
    - **Verification:**
        1. Run `pnpm tsc --noEmit` and `pnpm test` focusing on `app/components/shared/`.
    - **Depends‑on:** [T011]

- [x] **T013 · Refactor · P2: eliminate `any` types in remaining codebase**
    - **Context:** Detailed Build Steps - 7
    - **Action:**
        1. For each `any` usage outside `app/components/shared/` (identified in T011), repeat the process from T012.
    - **Done‑when:**
        1. No `any` types remain in the entire codebase.
        2. `pnpm tsc --noEmit` passes project-wide.
    - **Verification:**
        1. Run `pnpm tsc --noEmit` project-wide.
    - **Depends‑on:** [T011]

- [ ] **T014 · Refactor · P1: eliminate suppression directives in `app/components/shared/`**
    - **Context:** Detailed Build Steps - 8; Modules Affected
    - **Action:**
        1. For each suppression directive in `app/components/shared/` (identified in T011): understand intent, refactor code to address the underlying TypeScript error or ESLint violation, and remove the directive.
    - **Done‑when:**
        1. No suppression directives remain in `app/components/shared/`.
        2. `pnpm lint` and `pnpm tsc --noEmit` pass for this module.
    - **Verification:**
        1. Run `pnpm lint` and `pnpm tsc --noEmit` focusing on `app/components/shared/`.
    - **Depends‑on:** [T011]

- [ ] **T015 · Refactor · P2: eliminate suppression directives in remaining codebase**
    - **Context:** Detailed Build Steps - 8
    - **Action:**
        1. For each suppression directive outside `app/components/shared/` (identified in T011), repeat the process from T014.
    - **Done‑when:**
        1. No suppression directives remain in the entire codebase (unless exceptionally justified per plan).
        2. `pnpm lint` and `pnpm tsc --noEmit` pass project-wide.
    - **Verification:**
        1. Run `pnpm lint` and `pnpm tsc --noEmit` project-wide.
    - **Depends‑on:** [T011]

- [ ] **T016 · Refactor · P2: remove/replace disallowed `console.log/warn/error` from component source code**
    - **Context:** Logging & Observability - CRITICAL
    - **Action:**
        1. Scan all component source code (not test files) for `console.log`, `console.warn`, or `console.error`.
        2. Remove these statements or replace them with calls to a structured logging mechanism if they represent necessary operational logging.
    - **Done‑when:**
        1. No disallowed `console.*` statements remain in component source code.
    - **Verification:**
        1. Perform a codebase search for `console.log`, `console.warn`, `console.error` in component files.
    - **Depends‑on:** none

## CI Enforcement & Documentation
- [ ] **T017 · Chore · P1: configure CI pipeline for strict enforcement of all standards**
    - **Context:** Detailed Build Steps - 9.3; `vitest.config.ts`
    - **Action:**
        1. Configure CI pipeline to fail on any ESLint error (including `no-explicit-any`, `ban-ts-comment`).
        2. Configure CI to fail on any TypeScript compilation error (`tsc --noEmit`).
        3. Configure CI to fail if any test fails or is skipped (e.g., Vitest's `forbidOnly` or equivalent).
        4. Configure CI to fail if test coverage drops below established thresholds (from `vitest.config.ts`).
    - **Done‑when:**
        1. CI pipeline configuration is updated to enforce all specified checks.
        2. A test PR with a deliberate violation (e.g., an `any` type) fails the CI build at the appropriate step.
    - **Depends‑on:** [T008, T009, T010, T012, T013, T014, T015, T016]

- [ ] **T018 · Chore · P3: update `CONTRIBUTING.md` with "no `any`" and "no suppression" policies**
    - **Context:** Documentation - README/CONTRIBUTING Updates
    - **Action:**
        1. Add a section to `CONTRIBUTING.md` or project development guidelines stating the "no `any`" and "no suppression directives" policy.
        2. Reference `DEVELOPMENT_PHILOSOPHY.md` as appropriate.
    - **Done‑when:**
        1. `CONTRIBUTING.md` (or equivalent) is updated with the new policies.
    - **Depends‑on:** none

---

## Clarifications & Assumptions
- [ ] **Issue:** Are there any known, complex third-party library integrations where type definitions are notoriously poor or missing, which might complicate `any` elimination?
    - **Context:** Open Questions - 1
    - **Blocking?:** no (but information would be helpful for T012, T013)

- [ ] **Issue:** What is the exact current state of the CI configuration regarding `vitest --forbidOnly` (or equivalent to prevent skipped tests from merging)?
    - **Context:** Open Questions - 2
    - **Blocking?:** no (but information needed for T017)

- [ ] **Issue:** Is there a specific order of preference for refactoring files/modules for `any`/suppressions (beyond `app/components/shared/` first) once the initial audit (T011) is complete?
    - **Context:** Open Questions - 3
    - **Blocking?:** no (can proceed with `app/components/shared/` then other areas as identified)

- [ ] **Issue:** Beyond `ExternalLink.test.tsx` and `RetroButton.test.tsx`, are there other specific files known to have a high density of skipped/failing tests or `any` types that require special attention from T001 or T011?
    - **Context:** Open Questions - 4
    - **Blocking?:** no (T001 and T011 will identify them; this is for pre-emptive highlighting)