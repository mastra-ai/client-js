import type { GetWorkflowResponse, RequestFunction } from '../types';

export class Workflow {
    constructor(
        private request: RequestFunction,
        private workflowId: string
    ) { }

    /**
     * Retrieves details about the workflow
     * @returns Promise containing workflow details including steps and graphs
     */
    details(): Promise<GetWorkflowResponse> {
        return this.request(`/api/workflows/${this.workflowId}`);
    }

    /**
     * Executes the workflow with the provided parameters
     * @param params - Parameters required for workflow execution
     * @returns Promise containing the workflow execution results
     */
    execute(params: Record<string, any>): Promise<Record<string, any>> {
        return this.request(`/api/workflows/${this.workflowId}/execute`, {
            method: 'POST',
            body: params,
        });
    }
}