import { MastraClient } from '../client';

export class Tool {
    constructor(
        private client: MastraClient,
        private toolId: string
    ) { }

    details() {
        return this.client.request(`/api/tools/${this.toolId}`);
    }

    execute(params: any) {
        return this.client.request(`/api/tools/${this.toolId}/execute`, {
            method: 'POST',
            body: params,
        });
    }

    getResult(resultId: string) {
        return this.client.request(`/api/tools/${this.toolId}/result/${resultId}`);
    }
}
