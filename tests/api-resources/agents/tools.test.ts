// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mastra from 'mastra';
import { Response } from 'node-fetch';

const client = new Mastra({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource tools', () => {
  test('execute: only required params', async () => {
    const responsePromise = client.agents.tools.execute('agentId', 'toolId', { args: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('execute: required and optional params', async () => {
    const response = await client.agents.tools.execute('agentId', 'toolId', {
      args: {},
      resourceid: 'resourceid',
      threadId: 'threadId',
    });
  });
});
