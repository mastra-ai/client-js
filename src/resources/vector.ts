import type { MastraClient } from '../client';
import type { CreateIndexParams, GetVectorIndexResponse, QueryVectorParams, QueryVectorResponse, UpsertVectorParams } from '../types';

export class Vector {
    constructor(
        private client: MastraClient,
        private vectorName: string
    ) { }

    details(indexName: string): Promise<GetVectorIndexResponse> {
        return this.client.request(`/api/vector/${this.vectorName}/indexes/${indexName}`);
    }

    delete(indexName: string): Promise<{ success: boolean }> {
        return this.client.request(`/api/vector/${this.vectorName}/indexes/${indexName}`, {
            method: 'DELETE'
        });
    }

    getIndexes(): Promise<{ indexes: string[] }> {
        return this.client.request(`/api/vector/${this.vectorName}/indexes`);
    }

    createIndex(params: CreateIndexParams): Promise<{ success: boolean }> {
        return this.client.request(`/api/vector/${this.vectorName}/create-index`, {
            method: 'POST',
            body: params
        });
    }

    upsert(params: UpsertVectorParams): Promise<string[]> {
        return this.client.request(`/api/vector/${this.vectorName}/upsert`, {
            method: 'POST',
            body: params
        });
    }

    query(params: QueryVectorParams): Promise<QueryVectorResponse> {
        return this.client.request(`/api/vector/${this.vectorName}/query`, {
            method: 'POST',
            body: params
        });
    }
} 