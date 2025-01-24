// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Logs } from './resources/logs';
import { SyncExecuteParams, Syncs } from './resources/syncs';
import { System } from './resources/system';
import { WorkflowExecuteParams, Workflows } from './resources/workflows';
import { AgentGenerateParams, AgentStreamParams, Agents } from './resources/agents/agents';
import { Memory, MemorySaveMessagesParams } from './resources/memory/memory';
import { ToolExecuteParams, Tools } from './resources/tools/tools';

export interface ClientOptions {
  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['MASTRA_CLIENT_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Mastra Client API.
 */
export class MastraClient extends Core.APIClient {
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Mastra Client API.
   *
   * @param {string} [opts.baseURL=process.env['MASTRA_CLIENT_BASE_URL'] ?? http://localhost:4111] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('MASTRA_CLIENT_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
      ...opts,
      baseURL: baseURL || `http://localhost:4111`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
  }

  system: API.System = new API.System(this);
  agents: API.Agents = new API.Agents(this);
  memory: API.Memory = new API.Memory(this);
  workflows: API.Workflows = new API.Workflows(this);
  syncs: API.Syncs = new API.Syncs(this);
  logs: API.Logs = new API.Logs(this);
  tools: API.Tools = new API.Tools(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static MastraClient = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static MastraClientError = Errors.MastraClientError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

MastraClient.System = System;
MastraClient.Agents = Agents;
MastraClient.Memory = Memory;
MastraClient.Workflows = Workflows;
MastraClient.Syncs = Syncs;
MastraClient.Logs = Logs;
MastraClient.Tools = Tools;
export declare namespace MastraClient {
  export type RequestOptions = Core.RequestOptions;

  export { System as System };

  export {
    Agents as Agents,
    type AgentGenerateParams as AgentGenerateParams,
    type AgentStreamParams as AgentStreamParams,
  };

  export { Memory as Memory, type MemorySaveMessagesParams as MemorySaveMessagesParams };

  export { Workflows as Workflows, type WorkflowExecuteParams as WorkflowExecuteParams };

  export { Syncs as Syncs, type SyncExecuteParams as SyncExecuteParams };

  export { Logs as Logs };

  export { Tools as Tools, type ToolExecuteParams as ToolExecuteParams };
}

export { toFile, fileFromPath } from './uploads';
export {
  MastraClientError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default MastraClient;
