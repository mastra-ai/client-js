// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mastra from 'mastra';
import { Response } from 'node-fetch';

const client = new Mastra({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource agents', () => {
  test('retrieve', async () => {
    const responsePromise = client.agents.retrieve('agentId');
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
    await expect(client.agents.retrieve('agentId', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mastra.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = client.agents.list();
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
    await expect(client.agents.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Mastra.NotFoundError,
    );
  });

  test('generate: only required params', async () => {
    const responsePromise = client.agents.generate('agentId', { messages: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generate: required and optional params', async () => {
    const response = await client.agents.generate('agentId', {
      messages: [{}],
      output: {},
      resourceid: 'resourceid',
      threadId: 'threadId',
    });
  });

  test('stream: only required params', async () => {
    const responsePromise = client.agents.stream('agentId', { messages: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('stream: required and optional params', async () => {
    const response = await client.agents.stream('agentId', {
      messages: [{}],
      output: {},
      resourceid: 'resourceid',
      threadId: 'threadId',
    });
  });
});
