# T009 Implementation Plan: Unit Tests for Config Integration

## Objective
Create comprehensive unit tests for components updated in T004, T005, and T006 to verify proper integration with externalized configuration.

## Affected Components
1. **TrumpismExamples** (T004) - Externalized UI strings 
2. **InstallationGuide** (T005) - Externalized browser messages and UI text
3. **Hero** (T006) - Externalized CTA text and other UI strings

## Test Strategy

### Core Testing Principles
- Follow existing test patterns (vitest + React Testing Library)
- No mocking of internal modules (test real config integration)
- Focus on behavior verification through public APIs
- Ensure type safety is enforced
- Write tests first (TDD approach)

### Test Coverage Goals
- Verify all config values are used correctly
- Ensure no hardcoded strings remain
- Test that config changes reflect in component output
- Maintain existing coverage standards (90%+)

## Implementation Steps

### Step 1: Create TrumpismExamples Tests
**File**: `app/components/sections/TrumpismExamples.test.tsx`

**Test Cases**:
1. **Section Title & Subtitle**
   - Renders title from config: `APP_CONFIG.uiText.trumpismExamplesSection.title`
   - Renders subtitle from config: `APP_CONFIG.uiText.trumpismExamplesSection.subtitle`

2. **Example Cards**
   - Renders all examples from `APP_CONFIG.trumpismExamples`
   - Each card shows original text
   - Each card shows trumpified text
   - Labels come from config (originalLabel, trumpifiedLabel)

3. **Bottom Message**
   - Renders bottom message from config

4. **Accessibility**
   - Section has proper heading with id="trumpism-examples-heading"
   - aria-labelledby is correctly set

5. **Type Safety**
   - Config structure is enforced by TypeScript

### Step 2: Create InstallationGuide Tests
**File**: `app/components/sections/InstallationGuide.test.tsx`

**Test Cases**:
1. **Section Title & Subtitle**
   - Renders title from config
   - Renders subtitle from config

2. **Installation Steps**
   - Renders all 4 hardcoded installation steps (these are NOT in config)
   - Each step shows number, title, and description

3. **CTA Button**
   - Button text from `APP_CONFIG.uiText.installationGuide.ctaButtonText`
   - Links to `APP_CONFIG.urls.chromeStore`

4. **GitHub Section**
   - Section text from config
   - Link text from config
   - Links to `APP_CONFIG.urls.githubRepo`

5. **Browser Compatibility**
   - Note text from config

6. **Accessibility**
   - Proper heading structure
   - ExternalLink components have aria-labels

### Step 3: Create Hero Tests
**File**: `app/components/Hero.test.tsx`

**Test Cases**:
1. **Title & Description**
   - Renders title from `APP_CONFIG.uiText.hero.title`
   - Renders description from config

2. **CTA Buttons**
   - Install button text from `APP_CONFIG.uiText.hero.installButton`
   - Links to Chrome store URL
   - Learn More button text from config

3. **Separator Text**
   - "or" separator from config

4. **Accessibility**
   - Section has aria-labelledby="hero-heading"
   - Heading has id="hero-heading"
   - External links have proper aria-labels

5. **Reduced Motion**
   - Component respects prefers-reduced-motion

### Step 4: Verify No Hardcoded Strings
For each component test file, include a test that:
- Searches component source for hardcoded UI strings
- Verifies all user-facing text comes from config
- Exception: Installation steps in InstallationGuide (by design)

## Risk Mitigation
1. **Test Isolation**: Each test file focuses on one component
2. **Real Config**: Import actual APP_CONFIG, no mocking
3. **Coverage**: Run coverage after each file to ensure standards met
4. **Type Safety**: Let TypeScript catch config structure issues

## Validation Steps
1. Run tests for each component: `pnpm vitest run <file>`
2. Check coverage: `pnpm test:cov`
3. Verify TypeScript: `pnpm tsc --noEmit`
4. Run linter: `pnpm lint`
5. Full test suite: `pnpm test:all`

## Expected File Changes
- Create: `app/components/sections/TrumpismExamples.test.tsx`
- Create: `app/components/sections/InstallationGuide.test.tsx`  
- Create: `app/components/Hero.test.tsx`
- Update: Coverage reports

## Success Criteria
- All new tests pass
- Coverage remains above 90%
- No TypeScript errors
- Config changes in app-config.ts immediately reflect in tests
- Tests document expected behavior clearly