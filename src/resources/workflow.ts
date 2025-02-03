import type { MastraClient } from '../client';
import type { GetWorkflowResponse } from '../types';

export class Workflow {
    constructor(
        private client: MastraClient,
        private workflowId: string
    ) { }

    /**
     * Retrieves details about the workflow
     * @returns Promise containing workflow details
     */
    details(): Promise<GetWorkflowResponse> {
        return this.client.request(`/api/workflows/${this.workflowId}`);
    }

    /**
     * Executes the workflow with given parameters
     * @param params - Parameters required for workflow execution
     * @returns Promise containing execution results
     */
    execute(params: Record<string, any>): Promise<Record<string, any>> {
        return this.client.request(`/api/workflows/${this.workflowId}/execute`, {
            method: 'POST',
            body: params,
        });
    }
}