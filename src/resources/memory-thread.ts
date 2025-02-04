import { MastraClient } from '../client';
import type { StorageThreadType } from '@mastra/core/memory';
import type { GetMemoryThreadMessagesResponse, UpdateMemoryThreadParams } from '../types';

export class MemoryThread {
    constructor(
        private client: MastraClient,
        private threadId: string
    ) { }

    /**
     * Retrieves the memory thread details
     * @returns Promise containing thread details including title and metadata
     */
    get(): Promise<StorageThreadType> {
        return this.client.request(`/api/memory/threads/${this.threadId}`);
    }

    /**
     * Updates the memory thread properties
     * @param params - Update parameters including title and metadata
     * @returns Promise containing updated thread details
     */
    update(params: UpdateMemoryThreadParams): Promise<StorageThreadType> {
        return this.client.request(`/api/memory/threads/${this.threadId}`, {
            method: 'PATCH',
            body: params,
        });
    }

    /**
     * Deletes the memory thread
     * @returns Promise containing deletion result
     */
    delete(): Promise<{ result: string }> {
        return this.client.request(`/api/memory/threads/${this.threadId}`, {
            method: 'DELETE',
        });
    }

    /**
     * Retrieves messages associated with the thread
     * @returns Promise containing thread messages and UI messages
     */
    getMessages(): Promise<GetMemoryThreadMessagesResponse> {
        return this.client.request(`/api/memory/threads/${this.threadId}/messages`);
    }
} 