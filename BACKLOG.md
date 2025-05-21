# BACKLOG

## High Priority

### Core Product Experience & Content

- **[Enhancement]** Refine website copy and ensure accuracy of Trumpism conversion examples
  - **Complexity**: Medium
  - **Rationale**: To make the website copy more punchy, direct, effective, and humorous, ensuring it accurately reflects the extension's purpose and delights users. Correct examples are crucial for demonstrating value and credibility. (Original Backlog; Business Value)
  - **Expected Outcome**: All website copy is engaging, clear, and on-brand. All conversion examples (isis -> evil losers, hillary clinton -> crooked hillary, coffee -> covfefe, kamala harris -> comrade kamala, joe biden -> sleepy joe, msnbc -> msdnc, covid-19 -> random(china virus, kung flu)) are verified, correct, and effectively showcased.
  - **Dependencies**: None (but "Externalize hardcoded configuration strings..." will make future updates easier)

### Foundational Quality & Development Practices

- **[Fix]** Resolve all skipped tests and fix failing tests
  - **Complexity**: Small
  - **Rationale**: Ensures the test suite provides accurate feedback on code health and component reliability, preventing regressions. (Principle: Testing Strategy - No Skipped Tests in Mainline; Quality Gates)
  - **Expected Outcome**: Full test suite is active and passing, providing accurate feedback on code health and component reliability. All tests in `app/components/shared/ExternalLink.test.tsx`, `app/components/shared/RetroButton.test.tsx`, and any other files with skipped/failing tests pass reliably.
  - **Dependencies**: None

- **[Refactor]** Prohibit and eliminate TypeScript `any` type and suppression directives
  - **Complexity**: Medium
  - **Rationale**: Enhances type safety, improves code correctness, and reduces technical debt from suppressed issues. (Principle: Coding Standards - Leverage Types Diligently; Address Violations, Don't Suppress)
  - **Expected Outcome**: Enhanced type safety, improved code correctness, and reduced technical debt. The entire codebase is audited and refactored to remove `any`, `@ts-ignore`, `@ts-expect-error`, `// eslint-disable`. Strict linting rules enforce this in CI.
  - **Dependencies**: None

- **[Enhancement]** Enforce coding standards (linting, formatting, naming) via pre-commit hooks and CI checks
  - **Complexity**: Medium
  - **Rationale**: Maintains consistent code style, readability, and adherence to naming conventions, enforced automatically, improving developer experience and code quality. (Principle: Coding Standards - Consistent Formatting; Meaningful Naming; Automation)
  - **Expected Outcome**: Codebase maintains consistent style, readability, and adherence to naming conventions. Pre-commit hooks (e.g., Husky, lint-staged) run Prettier, ESLint, and stylelint. CI pipeline also runs these checks and fails the build on violations.
  - **Dependencies**: None

- **[Enhancement]** Enforce comprehensive test coverage thresholds in CI pipeline
  - **Complexity**: Medium
  - **Rationale**: Automates enforcement of high test coverage, preventing regressions and ensuring code quality before merge. (Principle: Testing Strategy - Test Coverage Enforcement; Automation; Quality Gates)
  - **Expected Outcome**: Automated enforcement of high test coverage (e.g., 90% for shared components/atoms/molecules, 85% for sections/organisms, 80% overall). CI (e.g., GitHub Actions) fails builds if minimum test coverage is not met.
  - **Dependencies**: "Resolve all skipped tests and fix failing tests"

- **[Enhancement]** Integrate automated security vulnerability scanning for dependencies in CI
  - **Complexity**: Small
  - **Rationale**: CI pipeline prevents merging code with known critical/high vulnerabilities in dependencies, reducing security risks. (Principle: Security Considerations - Dependency Management Security; Automation)
  - **Expected Outcome**: CI pipeline implements `pnpm audit --audit-level=high` (or equivalent) and fails builds if high or critical severity vulnerabilities are detected.
  - **Dependencies**: None

## Medium Priority

### Component Architecture & Developer Experience

- **[Refactor]** Refactor component structure to align with Atomic Design principles
  - **Complexity**: Medium
  - **Rationale**: Improves component organization, reusability, and maintainability, making the codebase easier to understand and scale. (Principle: Modularity - Atomic Design; Frontend Appendix - Component Granularity)
  - **Expected Outcome**: Improved component organization within `app/components/` into atomic levels (e.g., `atoms/`, `molecules/`, `organisms/`). Imports updated accordingly.
  - **Dependencies**: None

- **[Enhancement]** Create comprehensive Storybook stories for all shared components
  - **Complexity**: Medium
  - **Rationale**: Improves component discoverability, isolated development and testing, and provides better documentation for UI components. (Principle: Storybook-First Development; Documentation Approach; Frontend Appendix)
  - **Expected Outcome**: Each component in `app/components/shared/` has Storybook stories showcasing all props, states, common use cases, accessibility notes, and responsive behavior.
  - **Dependencies**: "Refactor component structure to align with Atomic Design principles" (ideally, but can be concurrent)

- **[Enhancement]** Update TypeScript configuration to modern standards and enable stricter checks
  - **Complexity**: Small
  - **Rationale**: Improves type safety, enables earlier error detection, and allows utilization of modern JavaScript features. (Principle: Coding Standards - Maximize Language Strictness (TypeScript))
  - **Expected Outcome**: `tsconfig.json` updated to target a modern ECMAScript version (e.g., ES2020 or ESNext) and stricter compiler options (`strict: true`, `noImplicitReturns`, `noUnusedLocals`, `noUnusedParameters`, etc.) enabled.
  - **Dependencies**: "Prohibit and eliminate TypeScript `any` type and suppression directives"

### Advanced Testing & Quality

- **[Feature]** Implement comprehensive E2E tests for critical user flows and integrate into CI
  - **Complexity**: Medium
  - **Rationale**: Key user journeys are automatically verified, preventing regressions in critical functionality (e.g., main page load, interaction with conversion examples, navigation to key links like Chrome Store) from reaching production. (Principle: Testing Strategy - End-to-End (E2E) Testing; Automation)
  - **Expected Outcome**: Playwright E2E tests for all critical user flows are developed and run automatically as part of the CI pipeline.
  - **Dependencies**: "Resolve all skipped tests and fix failing tests", Core UI elements for CTAs and examples are stable.

- **[Enhancement]** Add automated accessibility (a11y) checks to component tests and Storybook CI
  - **Complexity**: Medium
  - **Rationale**: Early detection of accessibility issues, ensuring components are usable by a wider audience and reducing the risk of a11y regressions. (Principle: Accessibility - Build Inclusivity From The Start; Automation)
  - **Expected Outcome**: Integration of `jest-axe` or similar into component tests. Storybook configured to run automated accessibility checks in CI.
  - **Dependencies**: "Create comprehensive Storybook stories for all shared components"

### Operational Excellence & Security

- **[Enhancement]** Implement structured JSON logging across the application
  - **Complexity**: Medium
  - **Rationale**: Enhanced observability through machine-parseable logs, facilitating easier debugging, monitoring, and analysis. (Principle: Logging Strategy - Structured Logging; Observability)
  - **Expected Outcome**: A structured logging library (e.g., Pino, Winston) replaces `console.log`. Logs are output in JSON format with consistent fields (timestamp, level, context, etc.).
  - **Dependencies**: None

- **[Enhancement]** Review and enhance security headers configuration
  - **Complexity**: Small
  - **Rationale**: Enhanced application security by defending against common attack vectors like XSS and clickjacking. (Principle: Security Considerations - Secure Defaults; Web Security Best Practices)
  - **Expected Outcome**: Appropriate security headers (e.g., Content Security Policy, X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security) are configured in the Next.js application.
  - **Dependencies**: None

- **[Refactor]** Establish consistent error handling patterns and custom error types
  - **Complexity**: Medium
  - **Rationale**: More robust and maintainable error handling, leading to clearer debugging and better user experience during error states. (Principle: Consistent Error Handling - Predictable Error States)
  - **Expected Outcome**: Consistent error handling mechanisms (e.g., try/catch blocks, error boundaries) and custom error types are defined and implemented.
  - **Dependencies**: None

- **[Refactor]** Externalize all hardcoded configuration strings and example conversions
  - **Complexity**: Small
  - **Rationale**: Configuration and example data are centralized, making them easier to manage, update, and potentially change per environment without code changes. (Principle: Configuration Management - Externalize Configuration)
  - **Expected Outcome**: Configuration values and example text conversions (like those in the original backlog) are moved from components to a dedicated configuration file/module or environment variables.
  - **Dependencies**: None

## Low Priority

### Documentation & Onboarding

- **[Documentation]** Document "why" for non-obvious design decisions and complex components
  - **Complexity**: Medium
  - **Rationale**: Increased maintainability and easier onboarding for developers by providing context for architectural and implementation choices. (Principle: Documentation Approach - Document Decisions, Not Mechanics; Code Comments)
  - **Expected Outcome**: Comments or supporting documentation (e.g., in Storybook MDX, READMEs) explain the rationale, trade-offs, and context behind key design decisions in complex components and configuration.
  - **Dependencies**: Key components are relatively stable.

- **[Documentation]** Update project README with architecture overview and contribution guidelines
  - **Complexity**: Small
  - **Rationale**: Easier onboarding for new developers and clearer expectations for contributions. (Principle: Documentation Approach - Onboarding; Self-Documenting Systems)
  - **Expected Outcome**: Root `README.md` includes a high-level overview of project architecture, setup instructions, and clear guidelines for contributors (coding standards, testing, PR process).
  - **Dependencies**: None

### Optimizations & Maintenance

- **[Refactor]** Audit and minimize transitive dependencies
  - **Complexity**: Medium
  - **Rationale**: Smaller application bundle, faster build times, and a reduced potential security attack surface. (Principle: Disciplined Dependency Management - Minimize Dependencies)
  - **Expected Outcome**: Dependency tree analyzed using tools like `pnpm why` or `depcheck`. Unused, redundant, or unnecessarily large transitive dependencies identified and removed.
  - **Dependencies**: None

- **[Enhancement]** Add basic performance monitoring for Core Web Vitals
  - **Complexity**: Small
  - **Rationale**: Basic visibility into real user performance, enabling identification of pages or components needing optimization. (Principle: Observability - Performance Monitoring; Performance Optimization)
  - **Expected Outcome**: Next.js's built-in `reportWebVitals` function or a lightweight third-party library sends Core Web Vitals (LCP, FID, CLS) to an analytics endpoint or logs them.
  - **Dependencies**: None

## Future Considerations

### Innovation & Exploration

- **[Research]** Explore dynamic updates for Trumpism examples
  - **Complexity**: Medium
  - **Rationale**: To keep content fresh and relevant, potentially sourcing examples from a dynamic feed or a simple CMS, enhancing user engagement.
  - **Expected Outcome**: A feasibility study and/or proof-of-concept for updating conversion examples without requiring a full code deployment.
  - **Dependencies**: "Externalize all hardcoded configuration strings and example conversions"

- **[Research]** Investigate advanced visual themes or micro-interactions
  - **Complexity**: Medium
  - **Rationale**: To further enhance the site's unique branding and user delight through creative visual elements or animations, beyond current capabilities.
  - **Expected Outcome**: A proposal or prototype for new visual treatments or interactive elements that align with the product's tone.

- **[Research]** A/B testing framework for copy and CTAs
  - **Complexity**: Medium
  - **Rationale**: To empirically optimize conversion rates and user engagement by testing variations of key marketing messages and calls to action.
  - **Expected Outcome**: A plan or PoC for implementing A/B tests on critical elements like headlines, descriptions, and CTA buttons.

### Feature Enhancements (for the broader product/ecosystem)

- **[Feature]** User-configurable conversion lists within the extension
  - **Complexity**: Complex
  - **Rationale**: Allow users to personalize their experience by adding their own custom text replacements, increasing engagement and utility.
  - **Expected Outcome**: Design and technical specification for allowing users to manage their own conversion lists within the browser extension.

- **[Feature]** Expansion to other browsers (e.g., Firefox, Edge)
  - **Complexity**: Complex
  - **Rationale**: Increase user reach by making the extension available on more platforms.
  - **Expected Outcome**: Analysis of effort and technical changes required to port the extension to other major browsers, followed by development if deemed viable.
