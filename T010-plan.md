# T010 Implementation Plan: Integration Tests for Full Page

## Objective
Create comprehensive integration tests for the main page (app/page.tsx) to verify full page rendering, config integration, component collaboration, and accessibility.

## Page Structure Analysis
The main page consists of:
1. **Main container** with 4 components:
   - Hero (config: title, description, buttons)
   - FeatureShowcase (hardcoded content)
   - TrumpismExamples (config: examples, UI text)
   - InstallationGuide (config: URLs, UI text)
2. **Footer** (config: footer text, GitHub URL)

## Test Strategy

### Core Testing Principles
- Use real component implementations (no mocking internal components)
- Focus on integration behavior between components
- Test through public APIs (DOM/accessibility)
- Follow FIRST principles (Fast, Independent, Repeatable, Self-Validating, Thorough)
- Verify config values appear in final rendered output

### Test Coverage Goals
- All major sections render without errors
- Config values from APP_CONFIG appear correctly
- Page structure is semantically correct
- Accessibility standards are met
- No JavaScript runtime errors

## Implementation Steps

### Step 1: Create Integration Test File
**File**: `app/page.test.tsx`

### Step 2: Test Full Page Rendering
**Test Cases**:
1. **Page Structure**
   - Renders main container with correct layout classes
   - Renders footer outside main container
   - All 5 major components are present in DOM

2. **Component Integration**
   - Hero component renders within main
   - FeatureShowcase renders within main
   - TrumpismExamples renders within main
   - InstallationGuide renders within main
   - Footer renders outside main

### Step 3: Test Config Integration Across Components
**Test Cases**:
1. **Hero Config Values**
   - Page title from APP_CONFIG.uiText.hero.title
   - Description from APP_CONFIG.uiText.hero.description
   - Install button text from config
   - Chrome Store URL from APP_CONFIG.urls.chromeStore

2. **TrumpismExamples Config Values**
   - Section title from APP_CONFIG.uiText.trumpismExamplesSection.title
   - Examples from APP_CONFIG.trumpismExamples array
   - Label text from config

3. **InstallationGuide Config Values**
   - Section title from config
   - CTA button text from config
   - GitHub link from APP_CONFIG.urls.githubRepo

4. **Footer Config Values**
   - GitHub link text from APP_CONFIG.footerText.viewOnGithub
   - Disclaimer text from APP_CONFIG.footerText.disclaimer
   - GitHub URL from APP_CONFIG.urls.githubRepo

### Step 4: Test Page Accessibility
**Test Cases**:
1. **Full Page Accessibility**
   - Page passes jest-axe checks without violations
   - All sections have proper heading hierarchy
   - All interactive elements have proper labels

2. **Landmark Structure**
   - Main landmark contains primary content
   - Footer landmark is separate

### Step 5: Test Error-Free Rendering
**Test Cases**:
1. **No Runtime Errors**
   - Page renders without throwing JavaScript errors
   - All framer-motion animations work with mocked IntersectionObserver
   - No console errors during render

## Risk Mitigation
1. **Animation Handling**: Use existing IntersectionObserver mock from vitest.setup.ts
2. **Test Isolation**: Each test uses fresh render
3. **Real Config**: Import actual APP_CONFIG, no mocking
4. **Performance**: Focus on essential integration points

## Validation Steps
1. Run integration test: `pnpm vitest run app/page.test.tsx`
2. Check coverage: `pnpm test:cov`
3. Verify TypeScript: `pnpm tsc --noEmit`
4. Run linter: `pnpm lint`
5. Full build: `pnpm build`

## Expected File Changes
- Create: `app/page.test.tsx`
- Update: Coverage reports

## Success Criteria
- All integration tests pass
- Page passes accessibility checks
- Coverage maintained above 90%
- No TypeScript errors
- Config changes in app-config.ts immediately reflect in integration tests
- Tests demonstrate proper component collaboration