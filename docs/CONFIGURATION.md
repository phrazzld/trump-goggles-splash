# Configuration System Documentation

This document provides a comprehensive guide to the Trump Goggles splash page configuration system - a centralized, type-safe approach to managing all static configuration values.

## Table of Contents

1. [Configuration Structure Overview](#configuration-structure-overview)
2. [Adding New Features](#adding-new-features)
3. [Icon System Deep Dive](#icon-system-deep-dive)
4. [String Externalization Patterns](#string-externalization-patterns)
5. [Type Safety Approach](#type-safety-approach)
6. [Best Practices & Common Patterns](#best-practices--common-patterns)

---

## Configuration Structure Overview

### Architecture Philosophy

The configuration system follows these core principles:

- **Single Source of Truth**: All static configuration lives in `app/config/app-config.ts`
- **Type Safety First**: Strong TypeScript interfaces prevent runtime errors
- **Hierarchical Organization**: Logical grouping mirrors component structure
- **Immutability**: Read-only interfaces prevent accidental modifications
- **Extensibility**: Clear patterns for adding new configuration

### Core Structure

```typescript
// app/config/app-config.ts
export const APP_CONFIG = {
  urls: {
    chromeStore: "https://chromewebstore.google.com/...",
    githubRepo: "https://github.com/phrazzld/trump-goggles"
  },
  trumpismExamples: [
    { original: "ISIS", trumpified: "Evil Losers" },
    // ... more examples
  ],
  metadata: {
    title: "Trump Goggles",
    description: "Translates text to Trumpisms - See the web through a different lens"
  },
  footerText: {
    disclaimer: "Trump Goggles is a browser extension...",
    madeWithLove: "Made with ♥",
    viewOnGithub: "View on GitHub →"
  },
  uiText: {
    hero: { /* hero section strings */ },
    features: { /* features section strings */ },
    trumpismExamplesSection: { /* examples section strings */ },
    installationGuide: { /* installation section strings */ }
  }
} satisfies AppConfig;
```

### Interface Hierarchy

The system uses a layered interface structure:

```typescript
interface AppConfig {
  readonly urls: UrlConfig;
  readonly trumpismExamples: readonly TrumpismExample[];
  readonly metadata: AppMetadata;
  readonly footerText: FooterText;
  readonly uiText: UITextContent;
}
```

Each interface enforces immutability with `readonly` modifiers, preventing accidental configuration changes at runtime.

### Import Patterns

Always import the main configuration object:

```typescript
import { APP_CONFIG } from '@/app/config/app-config';

// Usage in components
const title = APP_CONFIG.uiText.hero.title;
const chromeStoreUrl = APP_CONFIG.urls.chromeStore;
```

---

## Adding New Features

### Step-by-Step Guide

Adding a new feature requires updating both the configuration and the icon registry. Here's the complete process:

#### 1. Add Icon to Registry

First, register your icon in `app/components/Features.tsx`:

```typescript
// app/components/Features.tsx
import { Zap, Sliders, Shield, ToggleRight, Settings, LucideIcon } from 'lucide-react';

export const ICON_REGISTRY = {
  zap: Zap,
  sliders: Sliders,
  shield: Shield,
  toggleRight: ToggleRight,
  settings: Settings, // <- Add your new icon here
} satisfies Record<string, LucideIcon>;
```

#### 2. Update Configuration

Add your feature to the `featureItems` array in `app/config/app-config.ts`:

```typescript
features: {
  sectionTitle: 'Features',
  featureItems: [
    // ... existing features
    {
      id: 'advanced-settings',
      title: 'Advanced Settings',
      description: 'Customize replacement patterns and behavior to match your preferences.',
      iconName: 'settings', // <- Must match ICON_REGISTRY key
      iconLabel: 'Settings gear icon representing advanced customization options'
    }
  ]
}
```

#### 3. Verify Type Safety

TypeScript will automatically:
- Validate that `iconName` matches a key in `ICON_REGISTRY`
- Ensure all required properties are present
- Provide autocomplete for available icon names

#### 4. Test Your Feature

```bash
pnpm dev
# Navigate to the features section and verify your new feature appears
```

### Common Gotchas

- **Icon Name Mismatch**: Ensure `iconName` exactly matches an `ICON_REGISTRY` key
- **Missing Icon Import**: Remember to import the new icon from `lucide-react`
- **Accessibility**: Always provide a descriptive `iconLabel` for screen readers

---

## Icon System Deep Dive

### Why the Icon Factory Pattern?

The icon factory pattern was chosen over direct icon imports for several reasons:

1. **Type Safety**: Compile-time validation of icon names
2. **Centralized Management**: All icons in one registry
3. **Configuration Driven**: Icons selected through configuration, not code
4. **Runtime Resolution**: Flexible icon selection based on data
5. **Performance**: Only imports icons that are actually used

### Technical Implementation

```typescript
// Type-safe icon registry
export const ICON_REGISTRY = {
  zap: Zap,
  sliders: Sliders,
  shield: Shield,
  toggleRight: ToggleRight
} satisfies Record<string, LucideIcon>;

// Derive type from registry keys
export type IconName = keyof typeof ICON_REGISTRY;

// Runtime usage
const Icon = ICON_REGISTRY[feature.iconName]; // Type-safe lookup
```

### Type Derivation Magic

The `IconName` type is automatically derived from the registry:

```typescript
type IconName = "zap" | "sliders" | "shield" | "toggleRight"
```

This means:
- Adding icons to the registry automatically updates the type
- Configuration validates against actual available icons
- No manual type maintenance required

### Adding New Icons

1. **Choose Icon**: Browse [Lucide React icons](https://lucide.dev/icons/)
2. **Import**: Add to import statement in `Features.tsx`
3. **Register**: Add to `ICON_REGISTRY` object
4. **Use**: Reference by key in configuration

```typescript
// 1. Import
import { Zap, Sliders, Shield, ToggleRight, Star } from 'lucide-react';

// 2. Register
export const ICON_REGISTRY = {
  zap: Zap,
  sliders: Sliders,
  shield: Shield,
  toggleRight: ToggleRight,
  star: Star, // <- New icon
} satisfies Record<string, LucideIcon>;

// 3. Use in config
{
  iconName: 'star', // <- TypeScript validates this
  iconLabel: 'Star icon representing premium features'
}
```

### Accessibility Considerations

Every icon requires an `iconLabel` for screen readers:

```typescript
{
  iconName: 'shield',
  iconLabel: 'Shield icon representing privacy protection' // Descriptive, not just "shield"
}
```

The label should describe what the icon represents in context, not just its visual appearance.

---

## String Externalization Patterns

### Organization Principles

UI text is organized hierarchically to mirror the application structure:

```typescript
uiText: {
  hero: {
    title: "Trump Goggles",
    description: "Translates text to Trumpisms...",
    installButton: "Install Trump Goggles",
    learnMoreButton: "Learn More",
    orSeparator: "or"
  },
  features: {
    sectionTitle: "Features",
    featureItems: [/* feature objects */]
  },
  trumpismExamplesSection: {
    title: "Iconic Trumpisms",
    subtitle: "See the most memorable translations...",
    originalLabel: "Original",
    trumpifiedLabel: "Trumpified",
    bottomMessage: "And many more entertaining translations..."
  }
}
```

### Naming Conventions

- **Sections**: Match component names (e.g., `hero`, `features`, `trumpismExamplesSection`)
- **Properties**: Descriptive and specific (e.g., `installButton`, not `button1`)
- **Labels**: Use `Label` suffix for UI labels (e.g., `originalLabel`, `trumpifiedLabel`)
- **Messages**: Use `Message` suffix for longer text blocks

### Externalizing Hardcoded Strings

When moving hardcoded strings to configuration:

#### 1. Identify the String

```typescript
// Before: Hardcoded in component
<h2>How Trump Goggles Works</h2>
```

#### 2. Choose Location in Config

Determine the appropriate section based on component structure:

```typescript
// Add to app/config/app-config.ts
uiText: {
  featureShowcase: { // New section for FeatureShowcase component
    title: "How Trump Goggles Works"
  }
}
```

#### 3. Update Interface

Add the new section to the `UITextContent` interface:

```typescript
interface UITextContent {
  readonly hero: HeroText;
  readonly features: FeaturesText;
  readonly featureShowcase: FeatureShowcaseText; // <- New
  // ... other sections
}

interface FeatureShowcaseText {
  readonly title: string;
}
```

#### 4. Update Component

Replace hardcoded string with configuration reference:

```typescript
// After: Configuration driven
import { APP_CONFIG } from '@/app/config/app-config';

<h2>{APP_CONFIG.uiText.featureShowcase.title}</h2>
```

### Consistency Guidelines

- **Always use configuration**: No hardcoded user-facing strings in components
- **Batch related strings**: Group strings used together in the same section
- **Maintain hierarchy**: Reflect component structure in configuration organization
- **Use descriptive names**: Make the purpose clear from the property name

---

## Type Safety Approach

### Interface Design Principles

The configuration system uses interfaces to enforce structure:

```typescript
interface AppConfig {
  readonly urls: UrlConfig;        // External URLs
  readonly trumpismExamples: readonly TrumpismExample[]; // Content arrays
  readonly metadata: AppMetadata;  // SEO/meta information
  readonly footerText: FooterText; // Footer content
  readonly uiText: UITextContent;  // All UI strings
}
```

Key principles:
- **Immutability**: All properties are `readonly`
- **Specificity**: Dedicated interfaces for different concerns
- **Composition**: Build complex types from simple ones
- **Clarity**: Names reflect purpose and content

### `satisfies` vs `as const`

The system uses `satisfies` for type validation:

```typescript
export const APP_CONFIG = {
  // ... configuration object
} satisfies AppConfig;
```

**Why `satisfies` over `as const`?**
- **Type Checking**: Validates structure against interface
- **Inference**: Preserves literal types for better IntelliSense
- **Safety**: Catches mismatches between config and interface
- **Flexibility**: Allows interface evolution without breaking config

### Derived Types

The system provides derived types for specific use cases:

```typescript
// Exact type of the configuration object
export type AppConfigType = typeof APP_CONFIG;

// Type for individual feature items
export type AppFeature = AppConfigType['uiText']['features']['featureItems'][number];

// Type for trumpism examples
export type TrumpismExampleLiteral = AppConfigType['trumpismExamples'][number];
```

These types:
- Stay in sync with actual configuration automatically
- Provide precise typing for specific sections
- Enable type-safe operations on configuration data

### Validation Infrastructure

The system includes validation helpers for future enhancement:

```typescript
// app/config/validate-config.ts
export function validateConfig(config: unknown): AppConfig {
  // Currently: Type assertion
  // Future: Zod schema validation
  return config as AppConfig;
}

export function isAppConfigLike(value: unknown): value is AppConfig {
  // Runtime type guard for configuration structure
  // Useful for validating external configuration sources
}
```

**Current State**: Type assertion with TypeScript compile-time safety
**Future Enhancement**: Runtime validation with Zod schemas

### Type Safety Best Practices

1. **Always use interfaces**: Define structure before implementation
2. **Prefer `satisfies`**: Get both validation and inference
3. **Use derived types**: Keep specialized types in sync automatically
4. **Validate at boundaries**: Use type guards for external data
5. **Leverage literal types**: Get precise autocomplete and checking

---

## Best Practices & Common Patterns

### Import Patterns

**Recommended**: Import the main config object

```typescript
import { APP_CONFIG } from '@/app/config/app-config';

const title = APP_CONFIG.uiText.hero.title;
```

**Avoid**: Destructuring imports (harder to track usage)

```typescript
// Don't do this
import { uiText } from '@/app/config/app-config';
const title = uiText.hero.title;
```

### Testing Configurations

When writing tests, import real configuration:

```typescript
import { APP_CONFIG } from '@/app/config/app-config';

it('displays correct title', () => {
  render(<Hero />);
  expect(screen.getByText(APP_CONFIG.uiText.hero.title)).toBeInTheDocument();
});
```

This ensures tests validate actual configuration values, not mocked data.

### Error Handling

TypeScript catches most configuration errors at compile time, but for runtime safety:

```typescript
// For dynamic icon access
const Icon = ICON_REGISTRY[iconName];
if (!Icon) {
  console.error(`Unknown icon: ${iconName}`);
  return <div>Icon not found</div>;
}
```

### Performance Considerations

- **No overhead**: Configuration is statically imported
- **Tree shaking**: Unused configuration sections are eliminated in production builds
- **Icon optimization**: Only imported icons are bundled

### Common Development Tasks

#### Adding a URL

```typescript
// 1. Add to UrlConfig interface
interface UrlConfig {
  readonly chromeStore: string;
  readonly githubRepo: string;
  readonly supportEmail: string; // <- New
}

// 2. Add to configuration
urls: {
  chromeStore: "https://...",
  githubRepo: "https://...",
  supportEmail: "mailto:support@example.com" // <- New
}
```

#### Adding UI Text Section

```typescript
// 1. Create interface
interface ContactText {
  readonly title: string;
  readonly subtitle: string;
  readonly submitButton: string;
}

// 2. Add to UITextContent
interface UITextContent {
  readonly hero: HeroText;
  // ... existing sections
  readonly contact: ContactText; // <- New
}

// 3. Add to configuration
uiText: {
  // ... existing sections
  contact: {
    title: "Get In Touch",
    subtitle: "We'd love to hear from you",
    submitButton: "Send Message"
  }
}
```

### Troubleshooting

**Problem**: TypeScript error "Property doesn't exist"
**Solution**: Check interface definition matches configuration structure

**Problem**: Icon not rendering
**Solution**: Verify icon name matches ICON_REGISTRY key exactly

**Problem**: Text not updating
**Solution**: Ensure import is from correct configuration path

**Problem**: Type errors after configuration changes
**Solution**: Restart TypeScript server and check interface alignment

---

## Conclusion

The Trump Goggles configuration system provides a robust, type-safe foundation for managing all static configuration. By following these patterns and principles, you can:

- Add new features safely with compile-time validation
- Maintain consistent string externalization
- Leverage TypeScript's full power for configuration management
- Extend the system while preserving type safety

For questions or improvements to this documentation, please refer to the codebase or submit issues through the project's GitHub repository.