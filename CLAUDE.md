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
Currently, no test framework is configured. Tests are included as a TODO item (T012, T013, T014).

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
    sections/      # Page sections (planned)
  page.tsx         # Main page
  layout.tsx       # Root layout with font configuration
  globals.css      # Global styles with Tailwind directives
```

### Key URLs
- Chrome Web Store: `https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd`
- GitHub Repository: `https://github.com/phrazzld/trump-goggles`

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

### Critical Fixes Needed
1. Update Hero description (currently incorrect)
2. Add Chrome Store link (currently missing)
3. Add GitHub repository link (currently missing)
4. Implement bold typography (current fonts are weak)

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