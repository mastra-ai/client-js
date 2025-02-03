import { MastraClient } from '../client';

export class AgentTool {
    constructor(
        private client: MastraClient,
        private agentId: string,
        private toolId: string
    ) { }

    execute(params: any) {
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

    retrieve() {
        return this.client.request(`/api/agents/${this.agentId}`);
    }

    generate(params: any) {
        return this.client.request(`/api/agents/${this.agentId}/generate`, {
            method: 'POST',
            body: params,
        });
    }

    stream(params: any) {
        return this.client.request(`/api/agents/${this.agentId}/generate`, {
            method: 'POST',
            body: { ...params, stream: true },
        });
    }

    getTool(toolId: string) {
        return new AgentTool(this.client, this.agentId, toolId);
    }
} 