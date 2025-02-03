import { MastraClient } from '../client';

export class Workflow {
    constructor(
        private client: MastraClient,
        private workflowId: string
    ) { }

    retrieve() {
        return this.client.request(`/api/workflows/${this.workflowId}`);
    }

    execute(params: any) {
        return this.client.request(`/api/workflows/${this.workflowId}/execute`, {
            method: 'POST',
            body: params,
        });
    }
}