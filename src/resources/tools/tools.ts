// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ResultAPI from './result';
import { Result } from './result';

export class Tools extends APIResource {
  result: ResultAPI.Result = new ResultAPI.Result(this._client);

  /**
   * Get tool by ID
   */
  retrieve(toolId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/api/tools/${toolId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get all tools
   */
  list(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/api/tools', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  /**
   * Execute a tool
   */
  execute(toolId: string, body: ToolExecuteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/api/tools/${toolId}/execute`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ToolExecuteParams {
  args: unknown;

  resourceid?: string;

  threadId?: string;
}

Tools.Result = Result;

export declare namespace Tools {
  export { type ToolExecuteParams as ToolExecuteParams };

  export { Result as Result };
}
