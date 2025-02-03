import type { QueryResult } from "@mastra/core";
import type { StepAction, StepGraph } from "@mastra/core/workflows"


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

export interface UpsertVectorParams {
    indexName: string;
    vectors: number[][];
    metadata?: Record<string, any>[];
    ids?: string[];
}
export interface CreateIndexParams {
    indexName: string;
    dimension: number;
    metric?: 'cosine' | 'euclidean' | 'dotproduct';
}

export interface QueryVectorParams {
    indexName: string;
    queryVector: number[];
    topK?: number;
    filter?: Record<string, any>;
    includeVector?: boolean;
}

export interface QueryVectorResponse {
    results: QueryResult[];
}

export interface GetVectorIndexResponse {
    dimension: number;
    metric: 'cosine' | 'euclidean' | 'dotproduct';
    count: number;
}