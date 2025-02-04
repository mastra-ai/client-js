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

    /**
     * Executes a specific tool for an agent
     * @param params - Parameters required for tool execution
     * @returns Promise containing tool execution results
     */
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

    /**
     * Retrieves details about the agent
     * @returns Promise containing agent details including model and instructions
     */
    details(): Promise<GetAgentResponse> {
        return this.client.request(`/api/agents/${this.agentId}`);
    }

    /**
     * Generates a response from the agent
     * @param params - Generation parameters including prompt
     * @returns Promise containing the generated response
     */
    generate<T>(params: any): Promise<GenerateReturn<T>> {
        return this.client.request(`/api/agents/${this.agentId}/generate`, {
            method: 'POST',
            body: params,
        });
    }

    /**
     * Streams a response from the agent
     * @param params - Stream parameters including prompt
     * @returns Promise containing the streamed response
     */
    stream<T>(params: any): Promise<StreamReturn<T>> {
        return this.client.request(`/api/agents/${this.agentId}/generate`, {
            method: 'POST',
            body: { ...params, stream: true },
        });
    }

    /**
     * Gets details about a specific tool available to the agent
     * @param toolId - ID of the tool to retrieve
     * @returns Promise containing tool details
     */
    getTool(toolId: string): Promise<GetToolResponse> {
        return this.client.request(`/api/agents/${this.agentId}/tools/${toolId}`);
    }

    /**
     * Retrieves evaluation results for the agent
     * @returns Promise containing agent evaluations
     */
    evals(): Promise<GetEvalsByAgentIdResponse> {
        return this.client.request(`/api/agents/${this.agentId}/evals`);
    }

    /**
     * Retrieves live evaluation results for the agent
     * @returns Promise containing live agent evaluations
     */
    liveEvals(): Promise<GetEvalsByAgentIdResponse> {
        return this.client.request(`/api/agents/${this.agentId}/evals/live`);
    }
} 