import { appendFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const logDir = join(dirname(fileURLToPath(import.meta.url)), "../storage/logs");
const logFile = join(logDir, "server.log");
let dirReady = false;

function isEnabled(): boolean {
    return process.env["KIUBI_MCP_DEBUG"] === "1";
}

function truncate(value: unknown): unknown {
    if (typeof value === "string") return value.length > 50 ? value.slice(0, 50) + "…" : value;
    if (Array.isArray(value)) return value.map(truncate);
    if (value !== null && typeof value === "object") {
        return Object.fromEntries(Object.entries(value as object).map(([k, v]) => [k, truncate(v)]));
    }
    return value;
}

function write(level: "info" | "error", message: string, data?: unknown): void {
    if (!isEnabled()) return;
    if (!dirReady) {
        mkdirSync(logDir, { recursive: true });
        dirReady = true;
    }
    const entry: Record<string, unknown> = { ts: new Date().toISOString(), level, message };
    if (data !== undefined) entry["data"] = data;
    appendFileSync(logFile, JSON.stringify(entry) + "\n");
}

export const logger = {
    info: (message: string, data?: unknown) => write("info", message, data),
    error: (message: string, data?: unknown) => write("error", message, data),
    tool: (name: string, args: unknown) => write("info", `tool:${name}`, truncate(args)),
};
