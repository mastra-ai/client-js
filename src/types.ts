export interface ClientOptions {
    baseUrl: string;
    retries?: number;
    backoffMs?: number;
    maxBackoffMs?: number;
    headers?: Record<string, string>;
}

export interface RequestOptions {
    method?: string;
    headers?: Record<string, string>;
    body?: any;
} 