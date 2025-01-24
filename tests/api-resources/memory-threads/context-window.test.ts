// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MastraClient from '@mastra/client-js';
import { Response } from 'node-fetch';

const client = new MastraClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource contextWindow', () => {
  test('retrieve', async () => {
    const responsePromise = client.memoryThreads.contextWindow.retrieve('threadId');
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
    await expect(
      client.memoryThreads.contextWindow.retrieve('threadId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MastraClient.NotFoundError);
  });
});
