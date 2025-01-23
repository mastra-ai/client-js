// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as StatusAPI from './status';
import { Status } from './status';
import * as ThreadsAPI from './threads';
import { Threads } from './threads';

export class Memory extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);

  /**
   * Save messages
   */
  saveMessages(body: MemorySaveMessagesParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/api/memory/save-messages', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface MemorySaveMessagesParams {
  messages: Array<unknown>;
}

Memory.Status = Status;
Memory.Threads = Threads;

export declare namespace Memory {
  export { type MemorySaveMessagesParams as MemorySaveMessagesParams };

  export { Status as Status };

  export { Threads as Threads };
}
