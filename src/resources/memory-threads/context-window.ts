// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class ContextWindow extends APIResource {
  /**
   * Get context window for a thread
   */
  retrieve(threadId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/api/memory/threads/${threadId}/context-window`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
