import type { MastraClient } from '../client';
import type { GetWorkflowResponse } from '../types';

export class Workflow {
    constructor(
        private client: MastraClient,
        private workflowId: string
    ) { }

    details(): Promise<GetWorkflowResponse> {
        return this.client.request(`/api/workflows/${this.workflowId}`);
    }

    execute(params: Record<string, any>): Promise<Record<string, any>> {
        return this.client.request(`/api/workflows/${this.workflowId}/execute`, {
            method: 'POST',
            body: params,
        });
    }
}