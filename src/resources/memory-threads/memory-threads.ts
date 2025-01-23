// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ContextWindowAPI from './context-window';
import { ContextWindow } from './context-window';
import * as MessagesAPI from './messages';
import { Messages } from './messages';

export class MemoryThreads extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  contextWindow: ContextWindowAPI.ContextWindow = new ContextWindowAPI.ContextWindow(this._client);

  /**
   * Update a thread
   */
  update(
    threadId: string,
    body: MemoryThreadUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.patch(`/api/memory/threads/${threadId}`, {
      body,
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
    body: MemoryThreadToolResultParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/api/memory/threads/${threadId}/tool-result`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type MemoryThreadUpdateParams = unknown;

export interface MemoryThreadToolResultParams {
  resultId: string;

  toolId: string;
}

MemoryThreads.Messages = Messages;
MemoryThreads.ContextWindow = ContextWindow;

export declare namespace MemoryThreads {
  export {
    type MemoryThreadUpdateParams as MemoryThreadUpdateParams,
    type MemoryThreadToolResultParams as MemoryThreadToolResultParams,
  };

  export { Messages as Messages };

  export { ContextWindow as ContextWindow };
}
