import type { MessageType, AiMessageType, CoreMessage, QueryResult, StepAction, StepGraph, StorageThreadType, BaseLogMessage } from "@mastra/core";


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
    evals: any[];
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

export interface SaveMessageToMemoryParams {
    messages: MessageType[];
}

export type SaveMessageToMemoryResponse = MessageType[]

export interface CreateMemoryThreadParams {
    title: string;
    metadata: Record<string, any>;
    resourceid: string;
    threadId: string;
}

export type CreateMemoryThreadResponse = StorageThreadType

export interface GetMemoryThreadParams {
    resourceId: string;
}

export type GetMemoryThreadResponse = StorageThreadType[]

export interface UpdateMemoryThreadParams {
    title: string;
    metadata: Record<string, any>;
    resourceid: string;
}


export interface GetMemoryThreadMessagesResponse {
    messages: CoreMessage[];
    uiMessages: AiMessageType[];
}

export interface GetLogsParams {
    transportId: string;
}

export interface GetLogParams {
    runId: string;
    transportId: string;
}

export type GetLogsResponse = BaseLogMessage[]