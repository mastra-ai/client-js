// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Result extends APIResource {
  /**
   * Get tool execution result
   */
  retrieve(toolId: string, resultId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/api/tools/${toolId}/result/${resultId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
