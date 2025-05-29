# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Trump Goggles Chrome Extension splash page - a Next.js 15 project with a retro Americana theme. The page serves as the landing page for the browser extension that translates text to "Trumpisms" (e.g., 'ISIS' → 'Evil Losers').

## Essential Commands

### Development
```bash
# Start the development server (uses Turbopack)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Type check (TypeScript)
pnpm tsc --noEmit
```

### Testing
```bash
# Run unit tests
pnpm test

# Run all tests (unit + integration)
pnpm test:all

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:cov

# Run E2E tests (Playwright)
pnpm test:e2e
```

The project uses Vitest for unit/integration testing and Playwright for E2E tests. Test files follow the pattern `*.test.ts(x)` and are colocated with components.

## Package Manager: pnpm ONLY

**CRITICAL**: This project strictly enforces pnpm. Never use npm or yarn. The project includes:
- `packageManager` field in package.json
- `.npmrc` configuration
- Pre-install script that blocks non-pnpm installations
- Git hooks to prevent wrong lock files

Commands will fail if you use npm or yarn instead of pnpm.

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with custom retro theme
- **Fonts**: Playfair Display (900) for headings, Inter for body
- **Icons**: Lucide React
- **Animations**: Framer Motion

### Design System
- **Theme**: Retro Americana (red, blue, cream, gold, black)
- **Component Architecture**: Atomic Design principles
- **Typography**: Bold display fonts with vintage aesthetics

### Directory Structure
```
app/
  components/
    shared/        # Reusable components (RetroButton, ExternalLink, etc.)
    sections/      # Page sections (TrumpismExamples, InstallationGuide, etc.)
  config/
    app-config.ts  # Central configuration file
    validate-config.ts  # Configuration validation
  page.tsx         # Main page
  layout.tsx       # Root layout with font configuration
  globals.css      # Global styles with Tailwind directives
docs/
  CONFIGURATION.md # Comprehensive config system documentation
```

### Key URLs
- Chrome Web Store: `https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd`
- GitHub Repository: `https://github.com/phrazzld/trump-goggles`

## Configuration System

### Overview
The project uses a centralized configuration system with strong TypeScript typing. All static configuration lives in `app/config/app-config.ts` as a single source of truth.

### Key Concepts

1. **APP_CONFIG Object**: Central configuration object containing URLs, UI text, features, and examples
2. **Icon Factory Pattern**: Type-safe icon system using `ICON_REGISTRY` in `Features.tsx`
3. **String Externalization**: All user-facing text is in configuration, not hardcoded
4. **Type Safety**: Strong interfaces with `readonly` properties and `satisfies` operator

### Common Configuration Tasks

#### Adding a New Feature
```typescript
// 1. Add icon to ICON_REGISTRY in Features.tsx
export const ICON_REGISTRY = {
  // ... existing icons
  star: Star, // New icon from lucide-react
};

// 2. Add feature to APP_CONFIG
features: {
  featureItems: [
    // ... existing features
    {
      id: 'new-feature',
      title: 'New Feature Title',
      description: 'Feature description',
      iconName: 'star', // Must match ICON_REGISTRY key
      iconLabel: 'Star icon representing new feature'
    }
  ]
}
```

#### Adding UI Text
```typescript
// Add to appropriate section in APP_CONFIG.uiText
uiText: {
  hero: {
    // ... existing text
    newMessage: "Your new message here"
  }
}
```

#### Accessing Configuration
```typescript
import { APP_CONFIG } from '@/app/config/app-config';

// Use in components
const title = APP_CONFIG.uiText.hero.title;
const chromeUrl = APP_CONFIG.urls.chromeStore;
```

For detailed configuration documentation, see `docs/CONFIGURATION.md`.

## Current Work (TODO.md)

The project follows a structured TODO system with task IDs (T001-T014). Tasks have:
- Priority levels (P0-P1)
- Dependencies
- Done-when criteria

Current focus areas:
1. Typography and styling enhancements (Phase 1)
2. Hero section fixes and Chrome Store CTA (Phase 2)
3. Content sections development (Phase 3)
4. Page assembly and polish (Phase 4)
5. Testing and QA (Phase 5)

### Recently Completed Work
1. ✅ Configuration externalization (T001-T007)
2. ✅ Icon factory pattern implementation
3. ✅ Comprehensive test coverage (100%)
4. ✅ Full configuration documentation
5. ✅ Type safety improvements

## Tailwind v4 Considerations

This project uses Tailwind v4 with @layer directives. When applying fonts:
- Use CSS variables directly (e.g., `font-family: var(--font-display)`)
- Don't use utility classes like `font-display` in CSS
- Apply utility classes in component markup

## Commit Guidelines

Follow Conventional Commits format:
```
feat: add new feature
fix: fix bug
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add tests
chore: maintenance tasks
```

## Development Workflow

1. Check TODO.md for next unblocked task
2. Update task status to [~] when starting
3. Create task-specific plan file (T00X-plan.md)
4. Implement following existing patterns
5. Validate with pnpm lint and pnpm build
6. Mark task as [x] and commit
7. Delete plan file after completion

## Related Projects

The splash page is for the Trump Goggles browser extension located at `/Users/phaedrus/Development/trump-goggles`. The extension:
- Modifies web page content by substituting names with Trump nicknames
- Supports Chrome, Firefox, and Edge
- Has comprehensive test suite and documentation