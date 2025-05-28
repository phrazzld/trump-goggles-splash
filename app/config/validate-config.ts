import { AppConfig } from './app-config';

/**
 * Validates application configuration structure.
 * 
 * Currently performs type assertion, but structured to support
 * future runtime validation with Zod or similar schema validation library.
 * 
 * @param config - Unknown configuration object to validate
 * @returns Validated configuration object typed as AppConfig
 * @throws TypeError if config structure is invalid (future enhancement)
 */
export function validateConfig(config: unknown): AppConfig {
  // TODO: Add runtime validation with Zod schema when needed
  // For now, rely on TypeScript static type checking
  return config as AppConfig;
}

/**
 * Type guard to check if value has the basic structure of AppConfig.
 * 
 * @param value - Value to check
 * @returns True if value appears to be an AppConfig object
 */
export function isAppConfigLike(value: unknown): value is AppConfig {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  
  const obj = value as Record<string, unknown>;
  
  // Check for required top-level properties
  return (
    typeof obj.urls === 'object' &&
    Array.isArray(obj.trumpismExamples) &&
    typeof obj.metadata === 'object' &&
    typeof obj.footerText === 'object' &&
    typeof obj.uiText === 'object'
  );
}