// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class System extends APIResource {
  /**
   * Get API status
   */
  retrieveStatus(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/api', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}
