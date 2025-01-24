// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MastraClient from '@mastra/client-js';
import { Response } from 'node-fetch';

const client = new MastraClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource memoryThreads', () => {
  test('update: only required params', async () => {
    const responsePromise = client.memoryThreads.update('threadId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.memoryThreads.update('threadId', {});
  });

  test('delete', async () => {
    const responsePromise = client.memoryThreads.delete('threadId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.memoryThreads.delete('threadId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MastraClient.NotFoundError);
  });

  test('toolResult: only required params', async () => {
    const responsePromise = client.memoryThreads.toolResult('threadId', {
      resultId: 'resultId',
      toolId: 'toolId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('toolResult: required and optional params', async () => {
    const response = await client.memoryThreads.toolResult('threadId', {
      resultId: 'resultId',
      toolId: 'toolId',
    });
  });
});
