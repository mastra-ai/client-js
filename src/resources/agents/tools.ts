// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Tools extends APIResource {
  /**
   * Execute a tool through an agent
   */
  execute(
    agentId: string,
    toolId: string,
    body: ToolExecuteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/api/agents/${agentId}/tools/${toolId}/execute`, {
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

export declare namespace Tools {
  export { type ToolExecuteParams as ToolExecuteParams };
}
