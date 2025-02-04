import type { GetToolResponse, RequestFunction } from '../types';

export class Tool {
    constructor(
        private request: RequestFunction,
        private toolId: string
    ) { }

    /**
     * Retrieves details about the tool
     * @returns Promise containing tool details including description and schemas
     */
    details(): Promise<GetToolResponse> {
        return this.request(`/api/tools/${this.toolId}`);
    }

    /**
     * Executes the tool with the provided parameters
     * @param params - Parameters required for tool execution
     * @returns Promise containing the tool execution results
     */
    execute(params: Record<string, any>): Promise<Record<string, any>> {
        return this.request(`/api/tools/${this.toolId}/execute`, {
            method: 'POST',
            body: params,
        });
    }
}
