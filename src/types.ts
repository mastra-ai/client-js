import type { StepAction, StepGraph } from "@mastra/core/workflows";


export interface ClientOptions {
    baseUrl: string;
    retries?: number;
    backoffMs?: number;
    maxBackoffMs?: number;
    headers?: Record<string, string>;
}

export interface RequestOptions {
    method?: string;
    headers?: Record<string, string>;
    body?: any;
}

export interface GetAgentResponse {
    name: string;
    model: string;
    instructions: string;
    tools: Record<string, GetToolResponse>;
}

export interface GetEvalsByAgentIdResponse extends GetAgentResponse {
    evals: string[];
}

export interface GetToolResponse {
    id: string;
    description: string;
    inputSchema: string;
    outputSchema: string;
}

export interface GetWorkflowResponse {
    name: string;
    triggerSchema: string;
    steps: Record<string, StepAction<any, any, any, any>>;
    stepGraph: StepGraph
    stepSubscriberGraph: Record<string, StepGraph>
}