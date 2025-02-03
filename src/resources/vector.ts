import type { MastraClient } from '../client';
import type { CreateIndexParams, GetVectorIndexResponse, QueryVectorParams, QueryVectorResponse, UpsertVectorParams } from '../types';

export class Vector {
    constructor(
        private client: MastraClient,
        private vectorName: string
    ) { }

    /**
     * Retrieves details about a specific vector index
     * @param indexName - The name of the index to get details for
     * @returns Promise containing the vector index details including dimension, metric, and count
     */
    details(indexName: string): Promise<GetVectorIndexResponse> {
        return this.client.request(`/api/vector/${this.vectorName}/indexes/${indexName}`);
    }

    /**
     * Deletes a vector index
     * @param indexName - The name of the index to delete
     * @returns Promise indicating success of deletion
     */
    delete(indexName: string): Promise<{ success: boolean }> {
        return this.client.request(`/api/vector/${this.vectorName}/indexes/${indexName}`, {
            method: 'DELETE'
        });
    }

    /**
     * Retrieves a list of all vector indexes
     * @returns Promise containing array of index names
     */
    getIndexes(): Promise<{ indexes: string[] }> {
        return this.client.request(`/api/vector/${this.vectorName}/indexes`);
    }

    /**
     * Creates a new vector index
     * @param params - Parameters for creating the index including name, dimension, and metric
     * @returns Promise indicating success of creation
     */
    createIndex(params: CreateIndexParams): Promise<{ success: boolean }> {
        return this.client.request(`/api/vector/${this.vectorName}/create-index`, {
            method: 'POST',
            body: params
        });
    }

    /**
     * Upserts vectors into an index
     * @param params - Parameters containing vectors, metadata, and optional IDs
     * @returns Promise containing array of vector IDs
     */
    upsert(params: UpsertVectorParams): Promise<string[]> {
        return this.client.request(`/api/vector/${this.vectorName}/upsert`, {
            method: 'POST',
            body: params
        });
    }

    /**
     * Queries vectors in an index
     * @param params - Query parameters including the query vector and search options
     * @returns Promise containing query results
     */
    query(params: QueryVectorParams): Promise<QueryVectorResponse> {
        return this.client.request(`/api/vector/${this.vectorName}/query`, {
            method: 'POST',
            body: params
        });
    }
} 