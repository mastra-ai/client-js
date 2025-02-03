import { MastraClient } from '../client';

export class Vector {
    constructor(
        private client: MastraClient,
        private vectorName: string
    ) { }

    retrieve(indexName: string) {
        return this.client.request(`/api/vector/${this.vectorName}/indexes/${indexName}`);
    }

    delete(indexName: string) {
        return this.client.request(`/api/vector/${this.vectorName}/indexes/${indexName}`, {
            method: 'DELETE'
        });
    }

    getIndexes() {
        return this.client.request(`/api/vector/${this.vectorName}/indexes`);
    }

    createIndex(params: {
        indexName: string;
        dimension: number;
        metric?: 'cosine' | 'euclidean' | 'dotproduct';
    }) {
        return this.client.request(`/api/vector/${this.vectorName}/create-index`, {
            method: 'POST',
            body: params
        });
    }

    upsert(params: {
        indexName: string;
        vectors: number[][];
        metadata?: any[];
        ids?: string[];
    }) {
        return this.client.request(`/api/vector/${this.vectorName}/upsert`, {
            method: 'POST',
            body: params
        });
    }

    query(params: {
        indexName: string;
        queryVector: number[];
        topK?: number;
        filter?: any;
        includeVector?: boolean;
    }) {
        return this.client.request(`/api/vector/${this.vectorName}/query`, {
            method: 'POST',
            body: params
        });
    }
} 