// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Syncs extends APIResource {
  /**
   * Execute a sync
   */
  execute(syncId: string, body: SyncExecuteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/api/syncs/${syncId}/execute`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface SyncExecuteParams {
  input?: unknown;
}

export declare namespace Syncs {
  export { type SyncExecuteParams as SyncExecuteParams };
}
