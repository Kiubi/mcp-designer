import { z } from "zod";
import { defineTool } from "../tool.ts";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { normalize } from "#lib/stemmer";

const DOCS_BASE = new URL("../../storage/documents", import.meta.url).pathname;
const INTEGRATION_DIR = join(DOCS_BASE, "generated/integration");
const EXEMPLES_PATH = join(DOCS_BASE, "generated/exemples.md");
const API_PATH = join(DOCS_BASE, "kiubi_api.md");
const WORKFLOWS_PATH = join(DOCS_BASE, "kiubi_workflows.md");

type Category = "integration" | "exemples" | "api" | "workflows";

const singleDocument = {
    "exemples" :  EXEMPLES_PATH,
    "api" :  API_PATH,
    "workflows" :  WORKFLOWS_PATH,
};

function listH2Titles(content: string): Array<{section: string}> {
    return content
        .split("\n")
        .filter((line) => /^## /.test(line))
        .map((line) => {
            return {section: line.replace(/^## /, "").trim()}
        });
}

function getIntegrationSections(): Array<{ section: string; file: string }> {
    if (!existsSync(INTEGRATION_DIR)) return [];

    return readdirSync(INTEGRATION_DIR)
        .filter((f) => f.endsWith(".md"))
        .sort()
        .flatMap((file) => {
            const content = readFileSync(join(INTEGRATION_DIR, file), "utf-8");
            const titles = listH2Titles(content);
            return titles.length > 0 ? titles.map((title) => ({ section: title.section, file: file })) : [{ section: file, file: file }];
        });
}

function listSections(category: "all" | Category): string {
    const parts: string[] = [];

    if (category === "all" || category === "integration") {
        const sections = getIntegrationSections();
        const lines = sections.map((s) => ` - ${s.section}`).join("\n");
        parts.push(`La catégorie "integration" contient les chapitres suivants :\n${lines}`);
    }

    if (category === "all" || category === "exemples") {
        if (existsSync(EXEMPLES_PATH)) {
            const content = readFileSync(EXEMPLES_PATH, "utf-8");
            const lines = listH2Titles(content)
                .map((t) => ` - ${t.section}`)
                .join("\n");
            parts.push(`La catégorie "exemples" contient les chapitres suivants :\n${lines}`);
        }
    }

    if (category === "all" || category === "api") {
        if (existsSync(API_PATH)) {
            const content = readFileSync(API_PATH, "utf-8");
            const lines = listH2Titles(content)
                .map((t) => ` - ${t.section}`)
                .join("\n");
            parts.push(`La catégorie "api" contient les chapitres suivants :\n${lines}`);
        }
    }

    if (category === "all" || category === "workflows") {
        if (existsSync(WORKFLOWS_PATH)) {
            const content = readFileSync(WORKFLOWS_PATH, "utf-8");
            const lines = listH2Titles(content)
                .map((t) => ` - ${t.section}`)
                .join("\n");
            parts.push(`La catégorie "workflows" contient les workflows suivants :\n${lines}`);
        }
    }

    return parts.join("\n\n");
}

function matchSection<T extends {section: string}>(list: T[], matchingWords: string[]): T | null {
    
    if (matchingWords.length === 0 || list.length === 0) return null;

    const scored = list.map((item) => {
        const normSection = normalize(item.section);
        const score = matchingWords.reduce(
            (acc, word) => acc + (normSection.includes(word) ? 1 : 0),
            0
        );
        return { item, score };
    });

    const max = scored.reduce((best, current) => {
        return current.score > best.score ? current : best;
    });

    if (max.score === 0) return null;

    return max.item;
}

function extractSectionFromFile(content: string, section: string) : string | null {

    const rawSections = content.split(/(?=^## )/m).filter((s) => s.trim().length > 0);
    const match = rawSections.find((s) => s.split("\n")[0].replace(/^## /, "").trim() === section) ?? '';
    if (match) {
        return match.trimEnd();
    }
    
    return null;
}

function fetchSection(category: Category, section: string): string {
    
    let matchingWords = normalize(section)
        .split(/[^a-z0-9]+/)
        .filter((w) => w.length >= 3);
    
    if (category === "integration") {
        const sectionList = getIntegrationSections();
        const matchingSection = matchSection(sectionList, matchingWords);
        
        if (matchingSection) {
            const content = readFileSync(join(INTEGRATION_DIR, matchingSection.file), "utf-8");
            return extractSectionFromFile(content, matchingSection.section) ?? 'Erreur innatendue';
        }

        const titles = sectionList.map((s) => ` - ${s.section}`).join("\n");
        return `Aucune section ne correspond à « ${section} » dans la catégorie "integration".\n\nSections disponibles :\n${titles}`;
    }

    const filePath = singleDocument[category];
    if (!existsSync(filePath)) {
        return `Fichier de documentation introuvable pour la catégorie "${category}".`;
    }
    
    const content = readFileSync(filePath, "utf-8");
    const sectionList = listH2Titles(content);
    
    if (category === 'workflows') {
        matchingWords = normalize(section)
            .split(/[^a-z0-9]+/)
            .map((s) => (s.length === 1 ? `workflow ${s}` : s));
    }
    const matchingSection = matchSection(sectionList, matchingWords);
    
    if (matchingSection) {
        return extractSectionFromFile(content, matchingSection.section) ?? 'Erreur innatendue';    
    }

    const titles = sectionList
        .filter((t) => t.section.length > 0)
        .map((t) => ` - ${t.section}`)
        .join("\n");
    return `Aucune section ne correspond à « ${section} » dans la catégorie "${category}".\n\nSections disponibles :\n${titles}`;
}

export function getDocSection(category: string, section?: string): string {
    if (category === "all" || !section) {
        return listSections(category as "all" | Category);
    }
    return fetchSection(category as Category, section);
}

export const getDocSectionTool = defineTool({
    name: "get_doc_section",
    description:
        "Accès à la documentation Kiubi : guide d'intégration, catalogue d'exemples, API front-office et workflows. L'outil fonctionne selon 2 modes : \n" +
        " - Sans le paramètre facultatif 'section' : liste les titres de chapitres disponibles pour la catégorie (ou pour toutes les catégories avec category='all'). \n" +
        " - Avec le paramètre facultatif 'section' : retourne le contenu complet du chapitre demandé (recherche insensible à la casse, partielle). \n" +
        "Si le chapitre n'est pas trouvé, retourne la liste des chapitres disponibles dans la catégorie.",
    inputSchema: {
        category: z
            .enum(["all", "integration", "exemples", "api", "workflows"])
            .describe(
                "Catégorie de documentation : 'all' pour lister toute la documentation, " +
                    "'integration' pour le guide d'intégration des thèmes graphiques, " +
                    "'exemples' pour le catalogue d'exemples de templates et widgets, " +
                    "'api' pour les endpoints de l'API front-office Kiubi, " +
                    "'workflows' pour les workflows d'intégration étape par étape."
            ),
        section: z
            .string()
            .optional()
            .describe(
                "Titre (ou fragment) du chapitre à récupérer. " +
                    "Si omis, retourne la liste des chapitres de la catégorie. " +
                    "Exemples : 'Blocs', 'Widgets', 'Site web'."
            ),
    },
    handler: async ({ category, section }) => {
        return {
            content: [{ type: "text" as const, text: getDocSection(category, section) }],
        };
    },
});
