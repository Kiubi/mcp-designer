#!/usr/bin/env -S node --experimental-strip-types
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./app.ts";
import { logger } from "./logger.ts";

async function main(): Promise<void> {
    const server = createServer();
    const transport = new StdioServerTransport();

    await server.connect(transport);

    logger.info("Serveur MCP démarré");
    console.error("MCP server démarré sur stdio");
}

main().catch((error) => {
    logger.error("Erreur fatale au démarrage du serveur MCP", error instanceof Error ? error.message : error);
    console.error("Erreur fatale au démarrage du serveur MCP");
    console.error(error);
    process.exit(1);
});