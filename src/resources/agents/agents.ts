// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ToolsAPI from './tools';
import { ToolExecuteParams, Tools } from './tools';

export class Agents extends APIResource {
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);

  /**
   * Get agent by ID
   */
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/api/agents/${agentId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get all available agents
   */
  list(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/api/agents', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  /**
   * Generate a response from an agent
   */
  generate(agentId: string, body: AgentGenerateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/api/agents/${agentId}/generate`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Stream a response from an agent
   */
  stream(agentId: string, body: AgentStreamParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post(`/api/agents/${agentId}/stream`, {
      body,
      ...options,
      headers: { Accept: 'text/x-unknown', ...options?.headers },
    });
  }
}

export type AgentStreamResponse = Core.Uploadable;

export interface AgentGenerateParams {
  messages: Array<unknown>;

  output?: unknown;

  resourceid?: string;

  threadId?: string;
}

export interface AgentStreamParams {
  messages: Array<unknown>;

  output?: unknown;

  resourceid?: string;

  threadId?: string;
}

Agents.Tools = Tools;

export declare namespace Agents {
  export {
    type AgentStreamResponse as AgentStreamResponse,
    type AgentGenerateParams as AgentGenerateParams,
    type AgentStreamParams as AgentStreamParams,
  };

  export { Tools as Tools, type ToolExecuteParams as ToolExecuteParams };
}
