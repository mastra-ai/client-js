import type { MastraClient } from '../client';
import type {
    GetAgentResponse,
    GetEvalsByAgentIdResponse,
    GetToolResponse,
} from '../types';
import type {
    GenerateReturn,
    StreamReturn,
} from '@mastra/core';

export class AgentTool {
    constructor(
        private client: MastraClient,
        private agentId: string,
        private toolId: string
    ) { }

    execute(params: Record<string, any>): Promise<Record<string, any>> {
        return this.client.request(`/api/agents/${this.agentId}/tools/${this.toolId}/execute`, {
            method: 'POST',
            body: params,
        });
    }
}

export class Agent {
    constructor(
        private client: MastraClient,
        private agentId: string
    ) { }

    details(): Promise<GetAgentResponse> {
        return this.client.request(`/api/agents/${this.agentId}`);
    }

    generate<T>(params: any): Promise<GenerateReturn<T>> {
        return this.client.request(`/api/agents/${this.agentId}/generate`, {
            method: 'POST',
            body: params,
        });
    }

    stream<T>(params: any): Promise<StreamReturn<T>> {
        return this.client.request(`/api/agents/${this.agentId}/generate`, {
            method: 'POST',
            body: { ...params, stream: true },
        });
    }

    getTool(toolId: string): Promise<GetToolResponse> {
        return this.client.request(`/api/agents/${this.agentId}/tools/${toolId}`);
    }
} 