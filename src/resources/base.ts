import type { RequestFunction, RequestOptions, ClientOptions } from '../types';

export class BaseResource {
    readonly options: ClientOptions

    constructor(options: ClientOptions) {
        this.options = options;
    }

    /**
     * Makes an HTTP request to the API with retries and exponential backoff
     * @param path - The API endpoint path
     * @param options - Optional request configuration
     * @returns Promise containing the response data
     */
    public async request<T>(path: string, options: RequestOptions = {}): Promise<T> {
        let lastError: Error | null = null;
        const { baseUrl, retries = 3, backoffMs = 100, maxBackoffMs = 1000, headers = {} } = this.options;


        let delay = backoffMs;


        for (let attempt = 0; attempt <= retries; attempt++) {
            try {
                const response = await fetch(`${baseUrl}${path}`, {
                    ...options,
                    headers: {
                        'Content-Type': 'application/json',
                        ...headers,
                        ...options.headers,
                    },
                    body: options.body ? JSON.stringify(options.body) : undefined,
                });

                if (!response.ok) {
                    const errorBody = await response.text();
                    let errorMessage = `HTTP error! status: ${response.status}`;
                    try {
                        // Try to parse as JSON for structured error messages
                        const errorJson = JSON.parse(errorBody);
                        errorMessage += ` - ${JSON.stringify(errorJson)}`;
                    } catch {
                        // If not JSON, include the raw error body if present
                        if (errorBody) {
                            errorMessage += ` - ${errorBody}`;
                        }
                    }
                    throw new Error(errorMessage);
                }

                // For streaming responses, return the stream directly
                if (response.headers.get('Content-Type')?.includes('text/event-stream')) {
                    return response.body as T;
                }

                // For unknown responses, return the response as is
                if (response.headers.get('Content-Type')?.includes('text/x-unknown')) {
                    return response as T;
                }

                const data = await response.json();
                return data as T;
            } catch (error) {
                lastError = error as Error;

                if (attempt === retries) {
                    break;
                }

                // Wait with exponential backoff
                await new Promise(resolve => setTimeout(resolve, delay));
                delay = Math.min(delay * 2, maxBackoffMs);
            }
        }

        throw lastError || new Error('Request failed');
    }
} 