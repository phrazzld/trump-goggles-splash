# BACKLOG.md

Last groomed: 2025-12-01
Analyzed by: 15 specialized perspectives (8 domain specialists + 7 master personas)

---

## Now (Sprint-Ready, <2 weeks)

### [Simplification] Delete validateConfig Pseudo-Abstraction
**File**: `app/config/validate-config.ts`
**Perspectives**: complexity-archaeologist, grug, carmack, torvalds, ousterhout (5 agents)
**Problem**: Function does nothing - just `return config as AppConfig` with TODO comment
**Impact**: Creates false sense of safety, 40 lines of dead code, tests test nothing
**Fix**: Delete `validate-config.ts` and `validate-config.test.ts`, use `APP_CONFIG` directly
**Effort**: 15m | **Value**: Eliminates deceptive abstraction
**Acceptance**: No `validateConfig` imports remain, tests pass

### [Simplification] Delete Development Logger
**File**: `lib/dev-logger.ts`
**Perspectives**: grug, carmack, jobs, torvalds, beck, maintainability-maven (6 agents)
**Problem**: 132 lines wrapping console.debug; Hero.tsx has 100+ lines of logging calls
**Impact**: Reduces Hero.tsx from 290→150 lines, removes noise obscuring logic
**Fix**: Delete `lib/dev-logger.ts`, remove all `animationLogger` and `createAnimationTimer` calls
**Effort**: 1h | **Value**: 150+ lines deleted, clearer components
**Acceptance**: No dev-logger imports remain, components readable

### [Security] Add HTTP Security Headers
**File**: `next.config.ts`
**Perspectives**: security-sentinel, architecture-guardian
**Severity**: MEDIUM - Missing defense-in-depth protections
**Problem**: No CSP, X-Frame-Options, HSTS, X-Content-Type-Options headers
**Fix**: Add `headers()` function with security headers in next.config.ts
```typescript
async headers() {
  return [{
    source: '/:path*',
    headers: [
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
    ],
  }];
}
```
**Effort**: 30m | **Risk**: MEDIUM (missing basic protections)
**Acceptance**: Security headers present in response, passes security scan

### [Consistency] Move FeatureShowcase Translations to Config
**File**: `app/components/sections/FeatureShowcase.tsx:9-22`
**Perspectives**: complexity-archaeologist, maintainability-maven, fowler
**Problem**: Hardcoded 3 examples duplicate `APP_CONFIG.trumpismExamples` with different property names
**Fix**: Replace local `translations` array with `APP_CONFIG.trumpismExamples.slice(0, 3)`
**Effort**: 20m | **Value**: Single source of truth, consistent with config pattern
**Acceptance**: FeatureShowcase imports APP_CONFIG, no local translations array

### [Consistency] Move InstallationGuide Steps to Config
**File**: `app/components/sections/InstallationGuide.tsx:17-38`
**Perspectives**: complexity-archaeologist, maintainability-maven
**Problem**: Hardcoded 4-step installation guide - inconsistent with config externalization pattern
**Fix**: Add `installationGuide.steps` to `APP_CONFIG.uiText`, import in component
**Effort**: 30m | **Value**: Configuration consistency, all UI text in one place
**Acceptance**: Steps in APP_CONFIG, component uses config import

### [Performance] Remove Duplicate Font Loading
**File**: `app/layout.tsx:7-39`
**Perspectives**: jobs, performance-pathfinder
**Problem**: Loading 5 fonts when only 2 needed (playfairDisplayBlack, inter)
**Impact**: 150KB→80KB font payload, eliminates FOUT and CLS
**Fix**: Delete playfairDisplay, interCompat, courierPrime font definitions
**Effort**: 15m | **Speedup**: 2x faster font loading
**Acceptance**: Only 2 font imports in layout.tsx, Lighthouse font metric improves

### [Performance] Fix Hero Stripe Gradient Hardcoded Colors
**File**: `app/components/Hero.tsx:104-114`
**Perspectives**: design-systems-architect
**Problem**: Only hardcoded hex colors in codebase (#B91C1C, #1E3A8A in gradient)
**Fix**: Replace with `var(--color-retro-red)` and `var(--color-retro-blue)`
**Effort**: 5m | **Value**: 100% token coverage, fully themeable
**Acceptance**: No hex colors in Hero.tsx gradient

### [DX] Add Lefthook Git Hooks
**File**: `lefthook.yml` (new)
**Perspectives**: architecture-guardian
**Priority**: HIGH - Deployment confidence blocker
**Problem**: No automated quality gates before commits; CI catches issues too late
**Fix**: Install Lefthook, configure pre-commit (lint, typecheck) and pre-push (test, build)
**Effort**: 2h | **Value**: Prevents 80% of CI failures, blocks broken commits
**Acceptance**: Lefthook installed, hooks run on commit/push

---

## Next (This Quarter, <3 months)

### [Architecture] Extract Animation Variant System
**Files**: TrumpismExamples.tsx:10-19, InstallationGuide.tsx:52-61, FeatureShowcase.tsx:24-33
**Perspectives**: complexity-archaeologist, fowler, ousterhout, grug
**Problem**: containerVariants copy-pasted 3x with minor timing differences
**Approach**: Create `lib/animation-variants.ts` with `createStaggerContainer()` factory
**Effort**: 2h | **Impact**: DRY, centralized animation vocabulary
**Acceptance**: No duplicate variant definitions, components use shared variants

### [Architecture] Create Animation Timing Constants
**Files**: Hero.tsx, TrumpismExamples.tsx, InstallationGuide.tsx, AnimatedStar.tsx
**Perspectives**: complexity-archaeologist, fowler
**Problem**: 17+ magic numbers for animation delays (0.1, 0.2, 0.3, etc.)
**Approach**: Create `lib/animation-config.ts` with named timing constants
**Effort**: 2h | **Impact**: Centralized timing, enable global animation speed adjustment

### [Simplification] Reduce Hero Component Size
**File**: `app/components/Hero.tsx` (290 lines)
**Perspectives**: carmack, jobs, ousterhout, fowler
**Problem**: 290 lines for title + 2 buttons; after logger removal still ~150 lines
**Approach**: Extract `<HeroBackground />` (stars, patterns), simplify inline animations
**Effort**: 2h | **Target**: <100 lines

### [Observability] Add Structured Logging with Pino
**Perspectives**: architecture-guardian
**Problem**: Production has no logging - dev-logger stripped, production errors vanish
**Approach**: Add Pino for structured JSON logging in production
**Effort**: 4h | **Impact**: Production debugging capability, error tracking foundation

### [Observability] Add Sentry Error Tracking
**Perspectives**: architecture-guardian, security-sentinel
**Problem**: No error monitoring in production - blind to runtime failures
**Approach**: Install @sentry/nextjs, configure for client/server errors
**Effort**: 3h | **Impact**: Real-time alerts, stack traces, deployment rollback triggers

### [Product] Add Social Sharing Buttons
**Perspectives**: product-visionary
**Problem**: Zero viral mechanics - satisfied users can't easily share
**Approach**: Add Twitter/Reddit share buttons with pre-filled templates
**Effort**: 2d | **Impact**: Primary growth driver, viral loop enablement
**Business Case**: Each satisfied user becomes distribution channel

### [Product] Add Analytics (Plausible/Vercel)
**Perspectives**: product-visionary, architecture-guardian
**Problem**: Blind to user behavior, can't measure conversion or A/B test
**Approach**: Add Plausible or Vercel Analytics (privacy-friendly, GDPR compliant)
**Effort**: 1h | **Impact**: Data-driven optimization, 20-50% conversion improvement potential

### [Product] Add Chrome Store Rating Integration
**Perspectives**: product-visionary
**Problem**: No social proof on landing page - missing trust signal
**Approach**: Display rating + user count: "★★★★★ 4.8 • 10,000+ users"
**Effort**: 1d | **Conversion Impact**: +20-40% (proven)

### [Product] Add Video/GIF Demo
**Perspectives**: product-visionary, jobs
**Problem**: Static text examples - "show don't tell" violated
**Approach**: 15-30s screen recording showing extension in action
**Effort**: 2-3d | **Impact**: 3x more social shares, instant understanding

### [UX] Add Error Boundary
**File**: `app/error.tsx` (new)
**Perspectives**: user-experience-advocate
**Problem**: If animation fails, entire page breaks with no recovery
**Approach**: Create error.tsx with retry button and direct Chrome Store link
**Effort**: 30m | **Impact**: Maintains conversion path on failures

### [UX] Add Loading State
**File**: `app/loading.tsx` (new)
**Perspectives**: user-experience-advocate
**Problem**: Blank white screen during initial load (2-3s on slow connections)
**Approach**: Create loading.tsx with branded spinner
**Effort**: 15m | **Impact**: Reduces bounce rate, professional appearance

### [Test] Remove Coverage Exclusions
**File**: `vitest.config.ts:31-33`
**Perspectives**: beck
**Problem**: AnimatedSection, AnimatedStar, VisuallyHidden excluded from coverage
**Approach**: Write tests for excluded components, remove exclusions
**Effort**: 2h | **Acceptance**: 0 coverage exclusions, all components tested

---

## Soon (Exploring, 3-6 months)

- **[Product] Product Hunt Launch** - Major traffic spike opportunity (2d prep)
- **[Product] Email Waitlist for Firefox** - Capture interested non-Chrome users
- **[Product] Screenshot Generator** - User-generated viral content tool
- **[Refactor] Simplify ExternalLink** - Split into TextLink and ButtonLink (120→40 lines each)
- **[Refactor] Eliminate Shallow Wrappers** - StarDecoration, SectionHeading, TexturedCard → utility functions
- **[Performance] Code-Split Framer Motion** - Dynamic import for below-fold sections (172KB→100KB)
- **[Performance] Replace Some Animations with CSS** - Reduce Framer Motion dependency for static sequences
- **[Design] Dark Mode Foundation** - Semantic color tokens, CSS variable switching
- **[Test] Refactor Tests to Test Behavior** - Remove CSS class assertions, use visual regression

---

## Later (Someday/Maybe, 6+ months)

- **[Platform] Firefox Extension Support** - Different manifest format, testing infrastructure
- **[Platform] Mobile App** - React Native or PWA for mobile showcase
- **[Product] Premium Custom Trumpisms** - Monetization via user-defined replacements
- **[Product] Browser Extension Stats Widget** - Live "Trumpisms deployed today" counter
- **[Community] User-Submitted Trumpism Suggestions** - Crowdsource new examples

---

## Learnings

**From this grooming session:**
- **Configuration externalization was excellent** - APP_CONFIG is a deep module, well-implemented
- **Over-engineering symptom**: 6000 lines for 5-section splash page signals complexity debt
- **Tactical shortcuts compounding**: validateConfig, dev-logger, duplicate animations all "ship it" decisions that need cleanup
- **Missing growth infrastructure more critical than code quality**: Analytics, social sharing, conversion tracking should precede refactoring

**Persona Consensus Signals:**
- Grug + Carmack + Jobs + Torvalds all said "delete dev-logger" → Very strong simplification signal
- 5+ agents flagged validateConfig → Highest priority cleanup
- Ousterhout + Fowler agreed on animation variant duplication → Solid architectural guidance

**Keep 2-3 recent learnings, delete old ones on next groom**
