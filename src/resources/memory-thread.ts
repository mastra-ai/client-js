import type { StorageThreadType } from '@mastra/core/memory';
import type {
    GetMemoryThreadMessagesResponse,
    UpdateMemoryThreadParams,
    RequestFunction
} from '../types';

export class MemoryThread {
    constructor(
        private request: RequestFunction,
        private threadId: string
    ) { }

    /**
     * Retrieves the memory thread details
     * @returns Promise containing thread details including title and metadata
     */
    get(): Promise<StorageThreadType> {
        return this.request(`/api/memory/threads/${this.threadId}`);
    }

    /**
     * Updates the memory thread properties
     * @param params - Update parameters including title and metadata
     * @returns Promise containing updated thread details
     */
    update(params: UpdateMemoryThreadParams): Promise<StorageThreadType> {
        return this.request(`/api/memory/threads/${this.threadId}`, {
            method: 'PATCH',
            body: params,
        });
    }

    /**
     * Deletes the memory thread
     * @returns Promise containing deletion result
     */
    delete(): Promise<{ result: string }> {
        return this.request(`/api/memory/threads/${this.threadId}`, {
            method: 'DELETE',
        });
    }

    /**
     * Retrieves messages associated with the thread
     * @returns Promise containing thread messages and UI messages
     */
    getMessages(): Promise<GetMemoryThreadMessagesResponse> {
        return this.request(`/api/memory/threads/${this.threadId}/messages`);
    }
} 