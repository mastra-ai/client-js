// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Workflows extends APIResource {
  /**
   * Get workflow by ID
   */
  retrieve(workflowId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/api/workflows/${workflowId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get all workflows
   */
  list(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/api/workflows', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Execute a workflow
   */
  execute(
    workflowId: string,
    body: WorkflowExecuteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/api/workflows/${workflowId}/execute`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface WorkflowExecuteParams {
  input?: unknown;
}

export declare namespace Workflows {
  export { type WorkflowExecuteParams as WorkflowExecuteParams };
}
