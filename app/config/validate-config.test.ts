import { describe, expect, it } from 'vitest';
import { validateConfig, isAppConfigLike } from './validate-config';
import { APP_CONFIG } from './app-config';

describe('validateConfig', () => {
  describe('Basic Functionality', () => {
    it('returns input when given valid AppConfig object', () => {
      const result = validateConfig(APP_CONFIG);
      expect(result).toBe(APP_CONFIG);
      expect(result).toEqual(APP_CONFIG);
    });

    it('performs type assertion on unknown input', () => {
      const mockConfig = {
        urls: { chromeStore: 'test', githubRepo: 'test' },
        trumpismExamples: [{ original: 'test', trumpified: 'test' }],
        metadata: { title: 'test', description: 'test' },
        footerText: { disclaimer: 'test', madeWithLove: 'test', viewOnGithub: 'test' },
        uiText: { hero: {}, features: {}, trumpismExamplesSection: {}, installationGuide: {} }
      };

      const result = validateConfig(mockConfig);
      expect(result).toBe(mockConfig);
    });

    it('maintains type safety through TypeScript', () => {
      const result = validateConfig(APP_CONFIG);
      
      // TypeScript should enforce these properties exist
      expect(result.urls).toBeDefined();
      expect(result.trumpismExamples).toBeDefined();
      expect(result.metadata).toBeDefined();
      expect(result.footerText).toBeDefined();
      expect(result.uiText).toBeDefined();
    });
  });

  describe('Integration with APP_CONFIG', () => {
    it('works with actual application configuration', () => {
      expect(() => validateConfig(APP_CONFIG)).not.toThrow();
      
      const validated = validateConfig(APP_CONFIG);
      
      // Verify essential configuration properties
      expect(validated.urls.chromeStore).toBeTruthy();
      expect(validated.urls.githubRepo).toBeTruthy();
      expect(validated.trumpismExamples.length).toBeGreaterThan(0);
      expect(validated.metadata.title).toBeTruthy();
    });

    it('preserves all configuration properties', () => {
      const validated = validateConfig(APP_CONFIG);
      
      // Check that all expected top-level properties are preserved
      expect(validated).toHaveProperty('urls');
      expect(validated).toHaveProperty('trumpismExamples');
      expect(validated).toHaveProperty('metadata');
      expect(validated).toHaveProperty('footerText');
      expect(validated).toHaveProperty('uiText');
    });
  });

  describe('Type Assertion Behavior', () => {
    it('returns input unchanged for valid-looking objects', () => {
      const input = { someProperty: 'value' };
      const result = validateConfig(input);
      expect(result).toBe(input);
    });

    it('returns input unchanged for any input type', () => {
      const stringInput = 'not a config';
      const result = validateConfig(stringInput);
      expect(result).toBe(stringInput);
    });
  });
});

describe('isAppConfigLike', () => {
  describe('Valid Config Detection', () => {
    it('returns true for valid AppConfig object', () => {
      expect(isAppConfigLike(APP_CONFIG)).toBe(true);
    });

    it('returns true for object with required structure', () => {
      const validStructure = {
        urls: {},
        trumpismExamples: [],
        metadata: {},
        footerText: {},
        uiText: {}
      };
      
      expect(isAppConfigLike(validStructure)).toBe(true);
    });
  });

  describe('Invalid Config Detection', () => {
    it('returns false for null', () => {
      expect(isAppConfigLike(null)).toBe(false);
    });

    it('returns false for undefined', () => {
      expect(isAppConfigLike(undefined)).toBe(false);
    });

    it('returns false for primitive types', () => {
      expect(isAppConfigLike('string')).toBe(false);
      expect(isAppConfigLike(123)).toBe(false);
      expect(isAppConfigLike(true)).toBe(false);
    });

    it('returns false for empty object', () => {
      expect(isAppConfigLike({})).toBe(false);
    });

    it('returns false for object missing required properties', () => {
      expect(isAppConfigLike({ urls: {} })).toBe(false);
      expect(isAppConfigLike({ trumpismExamples: [] })).toBe(false);
      expect(isAppConfigLike({ 
        urls: {}, 
        trumpismExamples: [] 
      })).toBe(false);
    });

    it('returns false for object with wrong property types', () => {
      expect(isAppConfigLike({
        urls: 'not an object',
        trumpismExamples: [],
        metadata: {},
        footerText: {},
        uiText: {}
      })).toBe(false);

      expect(isAppConfigLike({
        urls: {},
        trumpismExamples: 'not an array',
        metadata: {},
        footerText: {},
        uiText: {}
      })).toBe(false);
    });
  });

  describe('Type Guard Behavior', () => {
    it('narrows type when used in conditional', () => {
      const unknownValue: unknown = APP_CONFIG;
      
      if (isAppConfigLike(unknownValue)) {
        // TypeScript should now know this is AppConfig
        expect(unknownValue.urls).toBeDefined();
        expect(unknownValue.trumpismExamples).toBeDefined();
      }
    });
  });
});