#!/usr/bin/env node
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./app.js";
import { logger } from "./logger.js";
async function main() {
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
