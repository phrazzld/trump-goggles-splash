/**
 * Development-only logging utility for animation debugging.
 * 
 * This utility provides conditional logging that only appears in development builds.
 * All logging calls are completely stripped from production builds through dead code elimination.
 */

/**
 * Type definitions for animation logging
 */
type LogData = Record<string, string | number | boolean | string[] | number[] | null | object>;

/**
 * Checks if we're in development environment
 */
const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * Animation performance logger for development debugging.
 * 
 * Provides structured logging for animation events, timing, and performance metrics.
 * All methods are no-ops in production builds and will be eliminated by bundlers.
 */
export const animationLogger = {
  /**
   * Log animation start event
   */
  start: (component: string, details?: LogData) => {
    if (isDevelopment) {
      console.debug(`🎬 [Animation] ${component} started`, {
        timestamp: performance.now(),
        component,
        ...details,
      });
    }
  },

  /**
   * Log animation completion event
   */
  complete: (component: string, details?: LogData) => {
    if (isDevelopment) {
      console.debug(`✅ [Animation] ${component} completed`, {
        timestamp: performance.now(),
        component,
        ...details,
      });
    }
  },

  /**
   * Log animation timing and delay information
   */
  timing: (component: string, timing: Record<string, number>) => {
    if (isDevelopment) {
      console.debug(`⏱️ [Animation] ${component} timing`, {
        timestamp: performance.now(),
        component,
        timing,
      });
    }
  },

  /**
   * Log accessibility-related animation behavior
   */
  accessibility: (component: string, state: LogData) => {
    if (isDevelopment) {
      console.debug(`♿ [Animation] ${component} accessibility`, {
        timestamp: performance.now(),
        component,
        accessibility: state,
      });
    }
  },

  /**
   * Log performance metrics
   */
  performance: (component: string, metrics: Record<string, number>) => {
    if (isDevelopment) {
      console.debug(`📊 [Animation] ${component} performance`, {
        timestamp: performance.now(),
        component,
        metrics,
      });
    }
  },

  /**
   * Log general animation info
   */
  info: (component: string, message: string, data?: LogData) => {
    if (isDevelopment) {
      console.debug(`ℹ️ [Animation] ${component}: ${message}`, {
        timestamp: performance.now(),
        component,
        message,
        ...data,
      });
    }
  },
};

/**
 * Performance timing helper for measuring animation durations
 */
export const createAnimationTimer = (component: string) => {
  if (!isDevelopment) {
    return {
      mark: () => {},
      measure: (): number => 0,
    };
  }

  const startTime = performance.now();
  
  return {
    mark: (label: string) => {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      animationLogger.timing(component, { [label]: elapsed });
    },
    
    measure: (label: string): number => {
      const currentTime = performance.now();
      const duration = currentTime - startTime;
      animationLogger.performance(component, { [label]: duration });
      return duration;
    },
  };
};