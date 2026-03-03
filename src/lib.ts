/**
 * ext-tabs-api - Chrome Extension API Wrapper
 * Provides a simplified interface for Chrome extension tab operations
 * 
 * @packageDocumentation
 * @author theluckystrike
 * @version 1.0.0
 */

/**
 * Configuration options for the API wrapper
 */
export interface Options {
  /** Enable debug logging */
  debug?: boolean;
}

/**
 * APIWrapper - Simplified wrapper for Chrome Extension Tab APIs
 * 
 * @example
 * ```typescript
 * import { createWrapper } from 'ext-tabs-api';
 * 
 * const api = createWrapper({ debug: true });
 * await api.initialize();
 * ```
 */
export class APIWrapper {
  private options: Options;
  
  /**
   * Create a new APIWrapper instance
   * @param options - Configuration options
   */
  constructor(options: Options = {}) {
    this.options = options;
  }
  
  /**
   * Initialize the API wrapper
   * @returns Promise<void>
   */
  async initialize(): Promise<void> {
    if (this.options.debug) {
      console.log('ext-tabs-api initialized');
    }
  }
}

/**
 * Factory function to create a new APIWrapper instance
 * 
 * @param options - Configuration options
 * @returns A new APIWrapper instance
 * @example
 * ```typescript
 * const api = createWrapper({ debug: true });
 * await api.initialize();
 * ```
 */
export function createWrapper(options?: Options): APIWrapper {
  return new APIWrapper(options);
}
