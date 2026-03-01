/**
 * ext-tabs-api - Chrome Extension API Wrapper
 * Author: theluckystrike
 */

export interface Options {
  debug?: boolean;
}

export class APIWrapper {
  private options: Options;
  
  constructor(options: Options = {}) {
    this.options = options;
  }
  
  async initialize(): Promise<void> {
    if (this.options.debug) {
      console.log('ext-tabs-api initialized');
    }
  }
}

export function createWrapper(options?: Options): APIWrapper {
  return new APIWrapper(options);
}
