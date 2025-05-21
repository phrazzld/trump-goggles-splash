/**
 * Central configuration file for the Trump Goggles Splash website
 * 
 * This file exports a strongly-typed, immutable APP_CONFIG object
 * that serves as the single source of truth for all static configuration
 * values used throughout the application.
 */

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
 * Interface for UI components text content
 */
export interface UITextContent {
  readonly hero: {
    readonly title: string;
    readonly description: string;
    readonly installButton: string;
    readonly learnMoreButton: string;
    readonly orSeparator: string;
  };
  readonly features: {
    readonly sectionTitle: string;
    readonly featureItems: readonly {
      readonly title: string;
      readonly description: string;
    }[];
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
export const APP_CONFIG: AppConfig = {
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
  ] as const,
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
      learnMoreButton: "Learn More",
      orSeparator: "or"
    },
    features: {
      sectionTitle: "Features",
      featureItems: [
        {
          title: "Instant Processing",
          description: "Transform the web as you browse with lightning-fast text replacement."
        },
        {
          title: "Customizable Filters",
          description: "Choose your preferred language style and customize replacement patterns."
        },
        {
          title: "Privacy Focused",
          description: "No data collection - everything runs locally in your browser."
        },
        {
          title: "Easy Toggle",
          description: "Enable or disable with one click from your browser toolbar."
        }
      ] as const
    }
  }
} as const;