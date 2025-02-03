import { MastraClient } from "./client";



const client = new MastraClient({
    baseUrl: 'https://api.mastra.com',
    headers: {
        'Authorization': `Bearer ${process.env.MASTRA_API_KEY}`
    }
});
