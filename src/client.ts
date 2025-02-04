import type { ClientOptions, CreateMemoryThreadParams, CreateMemoryThreadResponse, GetAgentResponse, GetLogParams, GetLogsParams, GetLogsResponse, GetMemoryThreadParams, GetMemoryThreadResponse, GetToolResponse, GetWorkflowResponse, RequestOptions, SaveMessageToMemoryParams, SaveMessageToMemoryResponse } from './types';
import { Agent, MemoryThread, Tool, Workflow, Vector } from './resources';

export class MastraClient {
    readonly baseUrl: string;
    private readonly retries: number;
    private readonly backoffMs: number;
    private readonly maxBackoffMs: number;
    private readonly headers: Record<string, string>;

    constructor(options: ClientOptions) {
        this.baseUrl = options.baseUrl.replace(/\/$/, '');
        this.retries = options.retries ?? 3;
        this.backoffMs = options.backoffMs ?? 300;
        this.maxBackoffMs = options.maxBackoffMs ?? 5000;
        this.headers = {
            'Content-Type': 'application/json',
            ...options.headers,
        };
    }

    /**
     * Makes an HTTP request to the Mastra API
     * @param path - API endpoint path
     * @param options - Request options including method, headers, and body
     * @returns Promise containing the API response
     * @throws Error if the request fails after all retries
     */
    async request(path: string, options: RequestOptions = {}): Promise<any> {
        const url = `${this.baseUrl}${path}`;
        let lastError: Error | null = null;
        let currentBackoff = this.backoffMs;

        for (let attempt = 0; attempt <= this.retries; attempt++) {
            try {
                const response = await fetch(url, {
                    method: options.method ?? 'GET',
                    headers: {
                        ...this.headers,
                        ...options.headers,
                    },
                    body: options.body ? JSON.stringify(options.body) : undefined,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                return await response.json();
            } catch (error) {
                lastError = error as Error;
                if (attempt === this.retries) break;

                await new Promise(resolve => setTimeout(resolve, currentBackoff));
                currentBackoff = Math.min(currentBackoff * 2, this.maxBackoffMs);
            }
        }

        throw lastError;
    }

    /**
     * Retrieves all available agents
     * @returns Promise containing map of agent IDs to agent details
     */
    public getAgents(): Promise<Record<string, GetAgentResponse>> {
        return this.request('/api/agents');
    }

    /**
     * Gets an agent instance by ID
     * @param agentId - ID of the agent to retrieve
     * @returns Agent instance
     */
    public getAgent(agentId: string) {
        return new Agent(this, agentId);
    }

    /**
     * Retrieves memory threads for a resource
     * @param params - Parameters containing the resource ID
     * @returns Promise containing array of memory threads
     */
    public getMemoryThreads(params: GetMemoryThreadParams): Promise<GetMemoryThreadResponse> {
        return this.request(`/api/memory/threads?resourceid=${params.resourceId}`);
    }

    /**
     * Creates a new memory thread
     * @param params - Parameters for creating the memory thread
     * @returns Promise containing the created memory thread
     */
    public createMemoryThread(params: CreateMemoryThreadParams): Promise<CreateMemoryThreadResponse> {
        return this.request('/api/memory/threads', { method: 'POST', body: params });
    }

    /**
     * Gets a memory thread instance by ID
     * @param threadId - ID of the memory thread to retrieve
     * @returns MemoryThread instance
     */
    public getMemoryThread(threadId: string) {
        return new MemoryThread(this, threadId);
    }

    /**
     * Saves messages to memory
     * @param params - Parameters containing messages to save
     * @returns Promise containing the saved messages
     */
    public saveMessageToMemory(params: SaveMessageToMemoryParams): Promise<SaveMessageToMemoryResponse> {
        return this.request('/api/memory/save-messages', {
            method: 'POST',
            body: params,
        });
    }

    /**
     * Gets the status of the memory system
     * @returns Promise containing memory system status
     */
    public getMemoryStatus(): Promise<{ result: boolean }> {
        return this.request('/api/memory/status');
    }

    /**
     * Retrieves all available tools
     * @returns Promise containing map of tool IDs to tool details
     */
    public getTools(): Promise<Record<string, GetToolResponse>> {
        return this.request('/api/tools');
    }

    /**
     * Gets a tool instance by ID
     * @param toolId - ID of the tool to retrieve
     * @returns Tool instance
     */
    public getTool(toolId: string) {
        return new Tool(this, toolId);
    }

    /**
     * Retrieves all available workflows
     * @returns Promise containing map of workflow IDs to workflow details
     */
    public getWorkflows(): Promise<Record<string, GetWorkflowResponse>> {
        return this.request('/api/workflows');
    }

    /**
     * Gets a workflow instance by ID
     * @param workflowId - ID of the workflow to retrieve
     * @returns Workflow instance
     */
    public getWorkflow(workflowId: string) {
        return new Workflow(this, workflowId);
    }

    /**
     * Gets a vector instance by name
     * @param vectorName - Name of the vector to retrieve
     * @returns Vector instance
     */
    public getVector(vectorName: string) {
        return new Vector(this, vectorName);
    }

    /**
     * Retrieves logs
     * @param params - Parameters for filtering logs
     * @returns Promise containing array of log messages
     */
    public getLogs(params: GetLogsParams): Promise<GetLogsResponse> {
        return this.request(`/api/logs?transportId=${params.transportId}`);
    }

    /**
     * Gets logs for a specific run
     * @param params - Parameters containing run ID to retrieve
     * @returns Promise containing array of log messages
     */
    public getLogForRun(params: GetLogParams): Promise<GetLogsResponse> {
        return this.request(`/api/logs/${params.runId}?transportId=${params.transportId}`);
    }
} 