// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mastra from '@mastra/client-js';
import { Response } from 'node-fetch';

const client = new Mastra({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource threads', () => {
  test('create', async () => {
    const responsePromise = client.memory.threads.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.memory.threads.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mastra.NotFoundError,
    );
  });

  test('retrieve', async () => {
    const responsePromise = client.memory.threads.retrieve('threadId');
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
      client.memory.threads.retrieve('threadId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Mastra.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.memory.threads.list();
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
    await expect(client.memory.threads.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mastra.NotFoundError,
    );
  });
});
