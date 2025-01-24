// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Messages extends APIResource {
  /**
   * Get messages for a thread
   */
  list(threadId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/api/memory/threads/${threadId}/messages`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
