import { z } from "zod";
import { defineTool } from "../tool.js";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { normalize, stem } from "#lib/stemmer";
const DOCS_BASE = new URL("../../storage/documents", import.meta.url).pathname;
const INTEGRATION_DIR = join(DOCS_BASE, "generated/integration");
const REGLES_PATH = join(DOCS_BASE, "kiubi_ruleset.md");
const EXEMPLES_PATH = join(DOCS_BASE, "generated/exemples.md");
const API_PATH = join(DOCS_BASE, "kiubi_api.md");
const TITLE_WEIGHT = 5;
const MIN_TOKEN_LENGTH = 3;
function tokenize(text) {
    return normalize(text)
        .split(/[^a-z0-9]+/)
        .filter((w) => w.length >= MIN_TOKEN_LENGTH)
        .map(stem);
}
function parseSections(content, category) {
    return content
        .split(/(?=^## )/m)
        .filter((s) => s.trim().length > 0)
        .map((s) => {
        const title = s.split("\n")[0].replace(/^## /, "").trim();
        return { category, title, content: s.trimEnd() };
    })
        .filter((s) => s.title.length > 0);
}
function buildIndex() {
    const entries = [];
    if (existsSync(INTEGRATION_DIR)) {
        for (const file of readdirSync(INTEGRATION_DIR).filter((f) => f.endsWith(".md")).sort()) {
            const content = readFileSync(join(INTEGRATION_DIR, file), "utf-8");
            entries.push(...parseSections(content, "integration"));
        }
    }
    if (existsSync(REGLES_PATH)) {
        entries.push(...parseSections(readFileSync(REGLES_PATH, "utf-8"), "regles"));
    }
    if (existsSync(EXEMPLES_PATH)) {
        entries.push(...parseSections(readFileSync(EXEMPLES_PATH, "utf-8"), "exemples"));
    }
    if (existsSync(API_PATH)) {
        entries.push(...parseSections(readFileSync(API_PATH, "utf-8"), "api"));
    }
    return entries;
}
function scoreSection(entry, queryTokens) {
    const titleTokens = new Set(tokenize(entry.title));
    const bodyTokens = tokenize(entry.content);
    let score = 0;
    for (const qt of queryTokens) {
        if (titleTokens.has(qt))
            score += TITLE_WEIGHT;
        score += bodyTokens.filter((t) => t === qt).length;
    }
    return score;
}
function truncateAtLine(content, limit) {
    if (content.length <= limit)
        return { text: content, truncated: false };
    const cut = content.lastIndexOf("\n", limit);
    const pos = cut > 0 ? cut : limit;
    return { text: content.slice(0, pos), truncated: true };
}
export function searchDoc({ query, max_results = 5, char_limit = 3000 }) {
    const clampedMax = Math.min(Math.max(1, max_results), 10);
    const clampedLimit = Math.max(100, char_limit);
    const queryTokens = tokenize(query);
    if (queryTokens.length === 0) {
        return "Aucun mot-clé valide dans la requête.";
    }
    const scored = buildIndex()
        .map((entry) => ({ entry, score: scoreSection(entry, queryTokens) }))
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, clampedMax);
    if (scored.length === 0) {
        return `Aucune section trouvée pour : « ${query} »`;
    }
    return scored
        .map(({ entry }) => {
        const header = `### [${entry.category}] ${entry.title}`;
        const { text, truncated } = truncateAtLine(entry.content, clampedLimit);
        const suffix = truncated
            ? "\n[...contenu tronqué — utiliser get_doc_section pour le contenu complet]"
            : "";
        return `${header}\n${text}${suffix}`;
    })
        .join("\n\n---\n\n");
}
export const searchDocTool = defineTool({
    name: "search_doc",
    description: "Recherche plein texte dans toute la documentation Kiubi (guide integration, exemples de templates, api front-office). " +
        "À utiliser en fallback quand le titre exact de la section n'est pas connu, " +
        "ou pour une recherche transversale dans toute la documentation. " +
        "Retourne les sections les plus pertinentes (contenu potentiellement tronqué : " +
        "utiliser get_doc_section pour le contenu complet). " +
        "Exemples : 'type billet site web index.html', 'fiche produit detail balises', " +
        "'balises widget blog liste_billets', 'blocs composant collection item', " +
        "'filtre mapValue', 'config.xml produit', 'symbole desc.xml structure'",
    inputSchema: {
        query: z.string().min(1).describe("Mots-clés de recherche"),
        max_results: z
            .number()
            .int()
            .min(1)
            .max(10)
            .optional()
            .describe("Nombre maximum de sections à retourner (défaut: 5, max: 10)"),
        char_limit: z
            .number()
            .int()
            .min(100)
            .optional()
            .describe("Limite de caractères par section retournée. Augmenter (ex: 8000) pour des sections longues comme les widgets. Défaut: 3000."),
    },
    handler: async ({ query, max_results, char_limit }) => {
        return {
            content: [
                {
                    type: "text",
                    text: searchDoc({ query, max_results: max_results ?? 5, char_limit: char_limit ?? 3000 }),
                },
            ],
        };
    },
});
