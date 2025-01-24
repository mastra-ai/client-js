// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MastraClient from '@mastra/client-js';
import { Response } from 'node-fetch';

const client = new MastraClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource memory', () => {
  test('saveMessages: only required params', async () => {
    const responsePromise = client.memory.saveMessages({ messages: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('saveMessages: required and optional params', async () => {
    const response = await client.memory.saveMessages({ messages: [{}] });
  });
});
