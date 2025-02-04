import type {
    GenerateParams,
    GetAgentResponse,
    GetEvalsByAgentIdResponse,
    GetToolResponse,
    RequestFunction,
    StreamParams,
} from '../types';
import type {
    GenerateReturn,
    StreamReturn,
} from '@mastra/core';
import type { JSONSchema7 } from 'json-schema';
import { ZodSchema } from "zod";
import { zodToJsonSchema } from 'zod-to-json-schema';

export class AgentTool {
    constructor(
        private request: RequestFunction,
        private agentId: string,
        private toolId: string
    ) { }

    /**
     * Executes a specific tool for an agent
     * @param params - Parameters required for tool execution
     * @returns Promise containing tool execution results
     */
    execute(params: Record<string, any>): Promise<Record<string, any>> {
        return this.request(`/api/agents/${this.agentId}/tools/${this.toolId}/execute`, {
            method: 'POST',
            body: params,
        });
    }
}

export class Agent {
    constructor(
        private request: RequestFunction,
        private agentId: string
    ) { }

    /**
     * Retrieves details about the agent
     * @returns Promise containing agent details including model and instructions
     */
    details(): Promise<GetAgentResponse> {
        return this.request(`/api/agents/${this.agentId}`);
    }

    /**
     * Generates a response from the agent
     * @param params - Generation parameters including prompt
     * @returns Promise containing the generated response
     */
    generate<T extends JSONSchema7 | ZodSchema | undefined = undefined>(params: GenerateParams<T>): Promise<GenerateReturn<T>> {
        const processedParams = {
            ...params,
            output: params.output instanceof ZodSchema ? zodToJsonSchema(params.output) : params.output
        };

        return this.request(`/api/agents/${this.agentId}/generate`, {
            method: 'POST',
            body: processedParams,
        });
    }

    /**
     * Streams a response from the agent
     * @param params - Stream parameters including prompt
     * @returns Promise containing the streamed response
     */
    stream<T extends JSONSchema7 | ZodSchema | undefined = undefined>(params: StreamParams<T>): Promise<StreamReturn<T>> {
        const processedParams = {
            ...params,
            output: params.output instanceof ZodSchema ? zodToJsonSchema(params.output) : params.output,
            stream: true
        };

        return this.request(`/api/agents/${this.agentId}/generate`, {
            method: 'POST',
            body: processedParams,
        });
    }

    /**
     * Gets details about a specific tool available to the agent
     * @param toolId - ID of the tool to retrieve
     * @returns Promise containing tool details
     */
    getTool(toolId: string): Promise<GetToolResponse> {
        return this.request(`/api/agents/${this.agentId}/tools/${toolId}`);
    }

    /**
     * Retrieves evaluation results for the agent
     * @returns Promise containing agent evaluations
     */
    evals(): Promise<GetEvalsByAgentIdResponse> {
        return this.request(`/api/agents/${this.agentId}/evals`);
    }

    /**
     * Retrieves live evaluation results for the agent
     * @returns Promise containing live agent evaluations
     */
    liveEvals(): Promise<GetEvalsByAgentIdResponse> {
        return this.request(`/api/agents/${this.agentId}/evals/live`);
    }
} 