import { ClientOptions, RequestOptions } from './types';
import { Agent, MemoryThread, Tool } from './resources';
import { Workflow } from './resources/workflow';
import { Vector } from './resources/vector';

export class MastraClient {
    private readonly baseUrl: string;
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

    // System endpoints
    public readonly system = {
        retrieveStatus: () => this.request('/api'),
    };

    // Agents endpoints
    public getAgents() {
        return this.request('/api/agents');
    }

    public getAgent(agentId: string) {
        return new Agent(this, agentId);
    }

    // Memory endpoints
    public getMemoryThreads() {
        return this.request('/api/memory/threads');
    }

    public createMemoryThread() {
        return this.request('/api/memory/threads', { method: 'POST' });
    }

    public getMemoryThread(threadId: string) {
        return new MemoryThread(this, threadId);
    }

    public saveMessageToMemory(params: any) {
        return this.request('/api/memory/save-messages', {
            method: 'POST',
            body: params,
        });
    }

    public getMemoryStatus() {
        return this.request('/api/memory/status');
    }

    // Tools endpoints
    public getTools() {
        return this.request('/api/tools');
    }

    public getTool(toolId: string) {
        return new Tool(this, toolId);
    }

    // Workflows endpoints
    public getWorkflows() {
        return this.request('/api/workflows');
    }

    public getWorkflow(workflowId: string) {
        return new Workflow(this, workflowId);
    }

    // Logs endpoints
    public getLogs() {
        return this.request('/api/logs');
    }

    public getLog(runId: string) {
        return this.request(`/api/logs/${runId}`);
    }

    // Vector endpoints
    public getVector(vectorName: string) {
        return new Vector(this, vectorName);
    }
} 