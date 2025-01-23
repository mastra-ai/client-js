// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Logs extends APIResource {
  /**
   * Get logs by run ID
   */
  retrieve(runId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/api/logs/${runId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get all logs
   */
  list(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/api/logs', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}
