// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MessagesAPI from './messages';
import { Messages } from './messages';

export class Threads extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

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
   * Update a thread
   */
  update(threadId: string, body: ThreadUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.patch(`/api/memory/threads/${threadId}`, {
      body,
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

  /**
   * Delete a thread
   */
  delete(threadId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/memory/threads/${threadId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get tool execution result for a thread
   */
  toolResult(
    threadId: string,
    body: ThreadToolResultParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/api/memory/threads/${threadId}/tool-result`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type ThreadUpdateParams = unknown;

export interface ThreadToolResultParams {
  resultId: string;

  toolId: string;
}

Threads.Messages = Messages;

export declare namespace Threads {
  export {
    type ThreadUpdateParams as ThreadUpdateParams,
    type ThreadToolResultParams as ThreadToolResultParams,
  };

  export { Messages as Messages };
}
