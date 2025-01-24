# Agents

Methods:

- <code title="get /api/agents/{agentId}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(agentId) -> void</code>
- <code title="get /api/agents">client.agents.<a href="./src/resources/agents/agents.ts">list</a>() -> void</code>
- <code title="post /api/agents/{agentId}/generate">client.agents.<a href="./src/resources/agents/agents.ts">generate</a>(agentId, { ...params }) -> void</code>
- <code title="post /api/agents/{agentId}/stream">client.agents.<a href="./src/resources/agents/agents.ts">stream</a>(agentId, { ...params }) -> void</code>

## Tools

Methods:

- <code title="post /api/agents/{agentId}/tools/{toolId}/execute">client.agents.tools.<a href="./src/resources/agents/tools.ts">execute</a>(agentId, toolId, { ...params }) -> void</code>

# Memory

Methods:

- <code title="post /api/memory/save-messages">client.memory.<a href="./src/resources/memory/memory.ts">saveMessages</a>({ ...params }) -> void</code>

## Status

Methods:

- <code title="get /api/memory/status">client.memory.status.<a href="./src/resources/memory/status.ts">retrieve</a>() -> void</code>

## Threads

Methods:

- <code title="post /api/memory/threads">client.memory.threads.<a href="./src/resources/memory/threads.ts">create</a>() -> void</code>
- <code title="get /api/memory/threads/{threadId}">client.memory.threads.<a href="./src/resources/memory/threads.ts">retrieve</a>(threadId) -> void</code>
- <code title="get /api/memory/threads">client.memory.threads.<a href="./src/resources/memory/threads.ts">list</a>() -> void</code>

# MemoryThreads

Methods:

- <code title="patch /api/memory/threads/{threadId}">client.memoryThreads.<a href="./src/resources/memory-threads/memory-threads.ts">update</a>(threadId, { ...params }) -> void</code>
- <code title="delete /api/memory/threads/{threadId}">client.memoryThreads.<a href="./src/resources/memory-threads/memory-threads.ts">delete</a>(threadId) -> void</code>
- <code title="post /api/memory/threads/{threadId}/tool-result">client.memoryThreads.<a href="./src/resources/memory-threads/memory-threads.ts">toolResult</a>(threadId, { ...params }) -> void</code>

## Messages

Methods:

- <code title="get /api/memory/threads/{threadId}/messages">client.memoryThreads.messages.<a href="./src/resources/memory-threads/messages.ts">list</a>(threadId) -> void</code>

## ContextWindow

Methods:

- <code title="get /api/memory/threads/{threadId}/context-window">client.memoryThreads.contextWindow.<a href="./src/resources/memory-threads/context-window.ts">retrieve</a>(threadId) -> void</code>

# Workflows

Methods:

- <code title="get /api/workflows/{workflowId}">client.workflows.<a href="./src/resources/workflows.ts">retrieve</a>(workflowId) -> void</code>
- <code title="get /api/workflows">client.workflows.<a href="./src/resources/workflows.ts">list</a>() -> void</code>
- <code title="post /api/workflows/{workflowId}/execute">client.workflows.<a href="./src/resources/workflows.ts">execute</a>(workflowId, { ...params }) -> void</code>

# Syncs

Methods:

- <code title="post /api/syncs/{syncId}/execute">client.syncs.<a href="./src/resources/syncs.ts">execute</a>(syncId, { ...params }) -> void</code>

# Logs

Methods:

- <code title="get /api/logs/{runId}">client.logs.<a href="./src/resources/logs.ts">retrieve</a>(runId) -> void</code>
- <code title="get /api/logs">client.logs.<a href="./src/resources/logs.ts">list</a>() -> void</code>

# Tools

Methods:

- <code title="get /api/tools/{toolId}">client.tools.<a href="./src/resources/tools/tools.ts">retrieve</a>(toolId) -> void</code>
- <code title="get /api/tools">client.tools.<a href="./src/resources/tools/tools.ts">list</a>() -> void</code>
- <code title="post /api/tools/{toolId}/execute">client.tools.<a href="./src/resources/tools/tools.ts">execute</a>(toolId, { ...params }) -> void</code>

## Result

Methods:

- <code title="get /api/tools/{toolId}/result/{resultId}">client.tools.result.<a href="./src/resources/tools/result.ts">retrieve</a>(toolId, resultId) -> void</code>

# System

Methods:

- <code title="get /api">client.system.<a href="./src/resources/system.ts">retrieveStatus</a>() -> void</code>
