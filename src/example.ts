import { MastraClient } from "./client";


(async () => {
    const client = new MastraClient({
        baseUrl: 'http://localhost:4111',
    });

    try {
        const agent = client.getAgent('weatherAgent');
        const response = await agent.stream({
            messages: [{
                role: 'user',
                content: 'Hello, world!',
                id: '1',
                createdAt: new Date(),
                threadId: '1',
                type: 'text',
            }],
        })


        const reader = response?.getReader()
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const text = new TextDecoder().decode(value);
            console.log(text);
        }
    } catch (error) {
        console.error(error);
    }
})()