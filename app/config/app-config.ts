/**
 * Central configuration file for the Trump Goggles Splash website
 * 
 * This file exports a strongly-typed, immutable APP_CONFIG object
 * that serves as the single source of truth for all static configuration
 * values used throughout the application.
 */

import type { IconName } from '@/app/components/Features';
import { validateConfig } from './validate-config';

/**
 * Interface for URL configurations
 */
export interface UrlConfig {
  readonly chromeStore: string;
  readonly githubRepo: string;
}

/**
 * Interface for a single Trumpism example
 */
export interface TrumpismExample {
  readonly original: string;
  readonly trumpified: string;
}

/**
 * Interface for app metadata
 */
export interface AppMetadata {
  readonly title: string;
  readonly description: string;
}

/**
 * Interface for footer text content
 */
export interface FooterText {
  readonly disclaimer: string;
  readonly madeWithLove: string;
  readonly viewOnGithub: string;
}

/**
 * Interface for a feature item with icon information
 */
export interface AppFeatureItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly iconName: IconName;
  readonly iconLabel: string;
}

/**
 * Interface for UI components text content
 */
export interface UITextContent {
  readonly hero: {
    readonly title: string;
    readonly description: string;
    readonly installButton: string;
    readonly ctaText: string;
    readonly learnMoreButton: string;
    readonly orSeparator: string;
  };
  readonly features: {
    readonly sectionTitle: string;
    readonly featureItems: readonly AppFeatureItem[];
  };
  readonly trumpismExamplesSection: {
    readonly title: string;
    readonly subtitle: string;
    readonly originalLabel: string;
    readonly trumpifiedLabel: string;
    readonly bottomMessage: string;
  };
  readonly installationGuide: {
    readonly title: string;
    readonly subtitle: string;
    readonly ctaButtonText: string;
    readonly githubSectionText: string;
    readonly githubLinkText: string;
    readonly browserCompatibilityNote: string;
    readonly browsers: {
      readonly chrome: {
        readonly available: boolean;
        readonly message: string | null;
      };
      readonly firefox: {
        readonly available: boolean;
        readonly message: string | null;
      };
      readonly edge: {
        readonly available: boolean;
        readonly message: string | null;
      };
    };
  };
}

/**
 * Main application configuration interface
 */
export interface AppConfig {
  readonly urls: UrlConfig;
  readonly trumpismExamples: readonly TrumpismExample[];
  readonly metadata: AppMetadata;
  readonly footerText: FooterText;
  readonly uiText: UITextContent;
}

/**
 * Application configuration object - single source of truth for all static configuration
 */
export const APP_CONFIG = {
  urls: {
    chromeStore: "https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd",
    githubRepo: "https://github.com/phrazzld/trump-goggles"
  },
  trumpismExamples: [
    { original: "ISIS", trumpified: "Evil Losers" },
    { original: "Hillary Clinton", trumpified: "Crooked Hillary" },
    { original: "Climate Change", trumpified: "The Chinese Hoax" },
    { original: "The Media", trumpified: "Fake News" },
    { original: "North Korea", trumpified: "Rocket Man" },
    { original: "Trade Deficit", trumpified: "Terrible Trade Deals" },
  ],
  metadata: {
    title: "Trump Goggles",
    description: "Translates text to Trumpisms - See the web through a different lens"
  },
  footerText: {
    disclaimer: "Trump Goggles is a browser extension created for entertainment purposes only. This extension and its creators are not affiliated with, endorsed by, or connected to Donald Trump or any of his associated entities. All trademarks are property of their respective owners.",
    madeWithLove: "Made with ♥",
    viewOnGithub: "View on GitHub →"
  },
  uiText: {
    hero: {
      title: "Trump Goggles",
      description: "Translates text to Trumpisms (e.g., 'ISIS' → 'Evil Losers', 'Hillary Clinton' → 'Crooked Hillary')",
      installButton: "Install Trump Goggles",
      ctaText: "Install on Chrome",
      learnMoreButton: "Learn More",
      orSeparator: "or"
    },
    features: {
      sectionTitle: "Features",
      featureItems: [
        {
          id: 'instant-processing',
          title: "Instant Processing",
          description: "Transform the web as you browse with lightning-fast text replacement.",
          iconName: 'zap',
          iconLabel: "Lightning bolt icon representing instant processing"
        },
        {
          id: 'customizable-filters',
          title: "Customizable Filters",
          description: "Choose your preferred language style and customize replacement patterns.",
          iconName: 'sliders',
          iconLabel: "Sliders icon representing customizable filters"
        },
        {
          id: 'privacy-focused',
          title: "Privacy Focused",
          description: "No data collection - everything runs locally in your browser.",
          iconName: 'shield',
          iconLabel: "Shield icon representing privacy protection"
        },
        {
          id: 'easy-toggle',
          title: "Easy Toggle",
          description: "Enable or disable with one click from your browser toolbar.",
          iconName: 'toggleRight',
          iconLabel: "Toggle switch icon representing easy on/off control"
        }
      ]
    },
    trumpismExamplesSection: {
      title: "Iconic Trumpisms",
      subtitle: "See the most memorable translations that give the internet a whole new personality!",
      originalLabel: "Original",
      trumpifiedLabel: "Trumpified",
      bottomMessage: "And many more entertaining translations that make browsing the web an unforgettable experience!"
    },
    installationGuide: {
      title: "How to Install Trump Goggles",
      subtitle: "Get Trump Goggles up and running in just a few clicks!",
      ctaButtonText: "Get Trump Goggles",
      githubSectionText: "Want to see the code?",
      githubLinkText: "View on GitHub →",
      browserCompatibilityNote: "Trump Goggles is compatible with Chrome, Edge, and other Chromium-based browsers",
      browsers: {
        chrome: {
          available: true,
          message: null
        },
        firefox: {
          available: false,
          message: "Coming Soon!"
        },
        edge: {
          available: false,
          message: "Coming Soon!"
        }
      }
    }
  }
} satisfies AppConfig;

/**
 * Derived types from the actual configuration object
 * These provide exact literal types from the configuration
 * 
 * Note: AppConfigType fulfills the TODO requirement for "export type AppConfig = typeof APP_CONFIG"
 * but uses a different name to avoid conflict with the existing AppConfig interface
 */
export type AppConfigType = typeof APP_CONFIG;

/**
 * Validated application configuration
 * This ensures the configuration passes validation and provides a single export point
 */
export const VALIDATED_APP_CONFIG = validateConfig(APP_CONFIG);

// Re-export as the main config for backward compatibility  
export { VALIDATED_APP_CONFIG as APP_CONFIG_VALIDATED };

/**
 * Derived types for specific configuration sections
 */
export type AppFeature = AppConfigType['uiText']['features']['featureItems'][number];
export type TrumpismExampleLiteral = AppConfigType['trumpismExamples'][number];