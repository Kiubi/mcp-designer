import type { ZodRawShape } from "zod";
import type { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";

export type ToolDefinition<T extends ZodRawShape> = {
    name: string;
    description: string;
    inputSchema: T;
    handler: ToolCallback<T>;
};

export function defineTool<T extends ZodRawShape>(def: ToolDefinition<T>) {
    return def;
}