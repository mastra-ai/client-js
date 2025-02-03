import { MastraClient } from "../client";




export class Logs {
    constructor(private client: MastraClient) { }

    retrieve(runId: string) {
        return this.client.request(`/api/logs/${runId}`);
    }

}