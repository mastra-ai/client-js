import type { MastraClient } from '../client';
import type { GetToolResponse } from '../types';

export class Tool {
    constructor(
        private client: MastraClient,
        private toolId: string
    ) { }

    details(): Promise<GetToolResponse> {
        return this.client.request(`/api/tools/${this.toolId}`);
    }

    execute(params: Record<string, any>): Promise<Record<string, any>> {
        return this.client.request(`/api/tools/${this.toolId}/execute`, {
            method: 'POST',
            body: params,
        });
    }

    getResult(resultId: string): Promise<Record<string, any>> {
        return this.client.request(`/api/tools/${this.toolId}/result/${resultId}`);
    }
}
