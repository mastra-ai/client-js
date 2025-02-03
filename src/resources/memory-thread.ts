import { MastraClient } from '../client';
import type { StorageThreadType, } from '@mastra/core/memory';
import type { GetMemoryThreadMessagesResponse, UpdateMemoryThreadParams } from '../types';

export class MemoryThread {
    constructor(
        private client: MastraClient,
        private threadId: string
    ) { }

    get(): Promise<StorageThreadType> {
        return this.client.request(`/api/memory/threads/${this.threadId}`);
    }

    update(params: UpdateMemoryThreadParams): Promise<StorageThreadType> {
        return this.client.request(`/api/memory/threads/${this.threadId}`, {
            method: 'PATCH',
            body: params,
        });
    }

    delete(): Promise<{ result: string }> {
        return this.client.request(`/api/memory/threads/${this.threadId}`, {
            method: 'DELETE',
        });
    }

    getMessages(): Promise<GetMemoryThreadMessagesResponse> {
        return this.client.request(`/api/memory/threads/${this.threadId}/messages`);
    }
} 