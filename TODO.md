# Todo

## Configuration Externalization (Issue #16)

- [x] **T001 · Chore · P2: create feature branch for configuration externalization**
    - **Context:** PLAN.md - Implementation Branch
    - **Action:**
        1. Create a new Git branch named `feature/externalize-config` from the main development branch.
    - **Done‑when:**
        1. Branch `feature/externalize-config` exists in the local repository.
        2. Branch `feature/externalize-config` is pushed to the remote repository.
    - **Depends‑on:** none

- [x] **T002 · Feature · P1: create configuration directory and initial file**
    - **Context:** PLAN.md - Implementation Steps (1. Create Configuration Directory and File)
    - **Action:**
        1. Create the `app/config/` directory.
        2. Create the `app/config/app-config.ts` file.
    - **Done‑when:**
        1. Directory `app/config/` exists.
        2. File `app/config/app-config.ts` exists and is ready for content.
    - **Verification:**
        1. Confirm `app/config/app-config.ts` path is present in the project structure.
    - **Depends‑on:** [T001]

- [x] **T003 · Feature · P1: define core configuration types and `APP_CONFIG` constant**
    - **Context:** PLAN.md - Implementation Steps (2. Define Core Types and Constants); Architecture (New module)
    - **Action:**
        1. In `app/config/app-config.ts`, define TypeScript interfaces for URLs, Trumpism examples, app metadata, and footer text.
        2. Create and export the main immutable `APP_CONFIG` object, typed with the defined interfaces, containing initial placeholder values.
    - **Done‑when:**
        1. `app-config.ts` contains strongly-typed interfaces for all configuration categories.
        2. `APP_CONFIG` constant is defined, typed, immutable, and exported.
        3. TypeScript compilation (`tsc --noEmit`) passes for `app-config.ts`.
    - **Depends‑on:** [T002]

- [x] **T004 · Refactor · P2: migrate chrome store url from `Hero.tsx` to config**
    - **Context:** PLAN.md - Implementation Steps (3. Identify and Migrate URLs); Architecture (Modified components: Hero.tsx)
    - **Action:**
        1. Move the Chrome Store URL from `Hero.tsx` into the `APP_CONFIG` object in `app-config.ts`.
        2. Refactor `Hero.tsx` to import and use the Chrome Store URL from `APP_CONFIG`.
    - **Done‑when:**
        1. `Hero.tsx` no longer contains a hardcoded Chrome Store URL.
        2. Chrome Store URL is sourced from `APP_CONFIG` in `Hero.tsx`.
    - **Verification:**
        1. Run the application and visually verify the Chrome Store link in the Hero section renders correctly.
        2. Click the Chrome Store link and confirm it navigates to the correct URL.
    - **Depends‑on:** [T003]

- [x] **T005 · Refactor · P2: migrate github repo url from `Footer.tsx` to config**
    - **Context:** PLAN.md - Implementation Steps (3. Identify and Migrate URLs); Architecture (Modified components: Footer.tsx)
    - **Action:**
        1. Move the GitHub repo URL from `Footer.tsx` into the `APP_CONFIG` object in `app-config.ts`.
        2. Refactor `Footer.tsx` to import and use the GitHub repo URL from `APP_CONFIG`.
    - **Done‑when:**
        1. `Footer.tsx` no longer contains a hardcoded GitHub repo URL.
        2. GitHub repo URL is sourced from `APP_CONFIG` in `Footer.tsx`.
    - **Verification:**
        1. Run the application and visually verify the GitHub link in the Footer section renders correctly.
        2. Click the GitHub link and confirm it navigates to the correct URL.
    - **Depends‑on:** [T003]

- [x] **T006 · Refactor · P2: migrate trumpism examples from `TrumpismExamples.tsx` to config**
    - **Context:** PLAN.md - Implementation Steps (4. Identify and Migrate Trumpism Examples); Architecture (Modified components: TrumpismExamples.tsx)
    - **Action:**
        1. Move the example conversions data from `TrumpismExamples.tsx` into the `APP_CONFIG` object in `app-config.ts`.
        2. Refactor `TrumpismExamples.tsx` to import and use the example conversions from `APP_CONFIG`.
    - **Done‑when:**
        1. `TrumpismExamples.tsx` no longer contains hardcoded example conversions.
        2. Example conversions are sourced from `APP_CONFIG` in `TrumpismExamples.tsx`.
    - **Verification:**
        1. Run the application and visually verify that all Trumpism examples display correctly as before.
    - **Depends‑on:** [T003]

- [x] **T007 · Refactor · P2: migrate app metadata from `layout.tsx` to config**
    - **Context:** PLAN.md - Implementation Steps (5. Identify and Migrate App Metadata); Architecture (Modified components: layout.tsx)
    - **Action:**
        1. Move the app title and description from `layout.tsx` into the `APP_CONFIG` object in `app-config.ts`.
        2. Refactor `layout.tsx` to import and use the app title and description from `APP_CONFIG`.
    - **Done‑when:**
        1. `layout.tsx` no longer contains a hardcoded app title or description.
        2. App title and description are sourced from `APP_CONFIG` in `layout.tsx`.
    - **Verification:**
        1. Run the application and verify the browser tab title and page meta description (via dev tools) reflect the configured values.
    - **Depends‑on:** [T003]

- [x] **T008 · Refactor · P2: migrate footer text from `Footer.tsx` to config**
    - **Context:** PLAN.md - Implementation Steps (6. Identify and Migrate Footer Text); Architecture (Modified components: Footer.tsx)
    - **Action:**
        1. Move the disclaimer and other static text from `Footer.tsx` into the `APP_CONFIG` object in `app-config.ts`.
        2. Refactor `Footer.tsx` to import and use this static text from `APP_CONFIG`.
    - **Done‑when:**
        1. `Footer.tsx` no longer contains hardcoded disclaimer or other static text.
        2. Footer static text is sourced from `APP_CONFIG` in `Footer.tsx`.
    - **Verification:**
        1. Run the application and visually verify the disclaimer and other static text in the Footer display correctly as before.
    - **Depends‑on:** [T003]

- [x] **T009 · Refactor · P2: conduct project-wide review for remaining hardcoded strings and externalize**
    - **Context:** PLAN.md - Implementation Steps (7. Final Project-Wide Review); Risks and Mitigations (Missing hardcoded values)
    - **Action:**
        1. Search the entire project codebase (excluding `app-config.ts`) for any other hardcoded strings that should be externalized to `APP_CONFIG`.
        2. For any identified strings, add them to `APP_CONFIG` with appropriate typing.
        3. Refactor the respective components/files to use these new values from `APP_CONFIG`.
    - **Done‑when:**
        1. A thorough review of the codebase for hardcoded strings is completed.
        2. All identified and appropriate strings are moved to `APP_CONFIG`.
        3. Affected components are refactored.
    - **Depends‑on:** [T004, T005, T006, T007, T008]

- [ ] **T010 · Test · P1: perform full testing and verification of externalized configuration**
    - **Context:** PLAN.md - Implementation Steps (8. Testing and Verification); Testing Strategy; Risks and Mitigations
    - **Action:**
        1. Run TypeScript type checking across the entire project (e.g., `tsc --noEmit`).
        2. Run the application and visually verify all content previously using hardcoded strings (Hero, Footer, TrumpismExamples, Layout, and any identified in T009) displays correctly.
        3. Test all externalized links (Chrome Store, GitHub, etc.) to ensure they function correctly.
    - **Done‑when:**
        1. TypeScript type checking passes with zero errors.
        2. Visual inspection confirms UI appearance matches pre-refactoring state for all affected areas.
        3. All configured links are verified to navigate to their correct destinations.
        4. No regressions in functionality related to the externalized strings are observed.
    - **Depends‑on:** [T009]

- [ ] **T011 · Chore · P1: create pull request for configuration externalization**
    - **Context:** PLAN.md - Implementation Branch
    - **Action:**
        1. Ensure all tasks (T001-T010) are completed and work as expected.
        2. Push the `feature/externalize-config` branch to the remote repository.
        3. Create a pull request that references issue #16.
    - **Done‑when:**
        1. Pull request is created with a descriptive title mentioning "Externalize configuration strings and example conversions".
        2. Pull request description includes "Closes #16" to autolink and auto-close the issue when merged.
        3. Pull request includes a summary of changes made.
    - **Depends‑on:** [T010]

### Clarifications & Assumptions
- [ ] **Issue:** The plan assumes the structure for complex data like `TrumpismExamples` will be defined during task T003 (Define core types and APP_CONFIG constant).
    - **Context:** PLAN.md - Implementation Steps (2. Define Core Types and Constants)
    - **Blocking?:** no (This is a standard part of the development task)