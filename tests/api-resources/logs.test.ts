// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MastraClient from '@mastra/client-js';
import { Response } from 'node-fetch';

const client = new MastraClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource logs', () => {
  test('retrieve', async () => {
    const responsePromise = client.logs.retrieve('runId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.logs.retrieve('runId', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      MastraClient.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = client.logs.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.logs.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      MastraClient.NotFoundError,
    );
  });
});
