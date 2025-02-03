import type { MastraClient } from '../client';
import type { GetToolResponse } from '../types';

export class Tool {
    constructor(
        private client: MastraClient,
        private toolId: string
    ) { }

    /**
     * Retrieves details about the tool
     * @returns Promise containing tool details
     */
    details(): Promise<GetToolResponse> {
        return this.client.request(`/api/tools/${this.toolId}`);
    }

    /**
     * Executes the tool with given parameters
     * @param params - Parameters required for tool execution
     * @returns Promise containing execution results
     */
    execute(params: Record<string, any>): Promise<Record<string, any>> {
        return this.client.request(`/api/tools/${this.toolId}/execute`, {
            method: 'POST',
            body: params,
        });
    }
}
