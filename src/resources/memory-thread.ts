import { MastraClient } from '../client';

export class MemoryThread {
    constructor(
        private client: MastraClient,
        private threadId: string
    ) { }

    get() {
        return this.client.request(`/api/memory/threads/${this.threadId}`);
    }

    update(params: any) {
        return this.client.request(`/api/memory/threads/${this.threadId}`, {
            method: 'PATCH',
            body: params,
        });
    }

    delete() {
        return this.client.request(`/api/memory/threads/${this.threadId}`, {
            method: 'DELETE',
        });
    }

    getContextWindow() {
        return this.client.request(`/api/memory/threads/${this.threadId}/context-window`);
    }

    addToolResult(params: any) {
        return this.client.request(`/api/memory/threads/${this.threadId}/tool-result`, {
            method: 'POST',
            body: params,
        });
    }

    getMessages() {
        return this.client.request(`/api/memory/threads/${this.threadId}/messages`);
    }
} 