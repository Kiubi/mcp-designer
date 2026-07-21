import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { validateThemeTool } from "#tools/validate_theme";
import { listTypesTool } from "#tools/list_types";
import { detailTypeTool } from "#tools/detail_type";
import { listWidgetsTool } from "#tools/list_widgets";
import { integrationRulesTool } from "#tools/ruleset";
import { getDocSectionTool } from "#tools/get_doc_section";
import { searchDocTool } from "#tools/search_doc";
import { createTypeTool } from "#tools/create_type";
import { logger } from "./logger.js";
const tools = [validateThemeTool, listTypesTool, detailTypeTool, listWidgetsTool, integrationRulesTool, getDocSectionTool, searchDocTool, createTypeTool];
export function createServer() {
    const server = new McpServer({
        name: "local-stdio-ts-server",
        version: "1.0.3",
    });
    for (const tool of tools) {
        // L'union des types empêche l'inférence générique ; le cast est sûr car chaque tool
        // est enregistré avec son propre inputSchema et handler cohérents.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const t = tool;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        server.registerTool(t.name, t, async (args, extra) => {
            logger.tool(t.name, args);
            try {
                return await t.handler(args, extra);
            }
            catch (err) {
                logger.error(`tool:${t.name}`, err instanceof Error ? err.message : err);
                throw err;
            }
        });
    }
    return server;
}
