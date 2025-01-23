// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Threads extends APIResource {
  /**
   * Create a new thread
   */
  create(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/api/memory/threads', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get thread by ID
   */
  retrieve(threadId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/api/memory/threads/${threadId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get all threads
   */
  list(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/api/memory/threads', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
