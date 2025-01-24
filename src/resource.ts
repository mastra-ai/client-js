// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { MastraClient } from './index';

export class APIResource {
  protected _client: MastraClient;

  constructor(client: MastraClient) {
    this._client = client;
  }
}
