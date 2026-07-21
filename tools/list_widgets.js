import { z } from "zod";
import { defineTool } from "../tool.js";
import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { resolveLangs } from "#lib/theme-checker/index";
function scanLangWidgets(themePath, lang) {
    const widgetsDir = join(themePath, lang, "widgets");
    if (!existsSync(widgetsDir)) {
        return null;
    }
    return scanWidgetsDir(widgetsDir);
}
export function listWidgets({ themePath, lang }) {
    const resolved = resolveLangs(themePath, lang);
    if ('error' in resolved)
        return `Erreur : ${resolved.error}`;
    // Regroupe les widgets par langue avant de les fusionner par clé "catégorie/widget",
    // pour pouvoir afficher toutes les versions (ou l'absence) de chaque widget.
    const widgetKeys = new Map();
    const templatesByLang = new Map();
    for (const l of resolved) {
        const categories = scanLangWidgets(themePath, l);
        const templates = new Map();
        for (const category of categories ?? []) {
            for (const widget of category.widgets) {
                const key = `${category.name}/${widget.name}`;
                widgetKeys.set(key, { category: category.name, widget: widget.name });
                templates.set(key, widget.templates);
            }
        }
        templatesByLang.set(l, templates);
    }
    if (widgetKeys.size === 0) {
        return `Aucun widget trouvé dans le thème "${themePath}" pour la/les langue(s) ${resolved.join(', ')}.`;
    }
    const lines = [];
    for (const key of [...widgetKeys.keys()].sort()) {
        const { category, widget } = widgetKeys.get(key);
        lines.push(`Widget ${category} / ${widget} :`);
        for (const l of resolved) {
            lines.push(`    Version [${l}]`);
            const templates = templatesByLang.get(l).get(key);
            if (templates) {
                lines.push(`    Dossier : ${l}/widgets/${category}/${widget}`);
                lines.push(`    Fichiers :`);
                for (const template of templates) {
                    lines.push(`    - ${template}`);
                }
            }
            else {
                lines.push(`    Widget non défini`);
            }
            lines.push("");
        }
    }
    return lines.join("\n").trimEnd();
}
function scanWidgetsDir(widgetsDir) {
    const categories = [];
    let categoryEntries;
    try {
        categoryEntries = readdirSync(widgetsDir);
    }
    catch {
        return categories;
    }
    for (const categoryName of categoryEntries.sort()) {
        const categoryPath = join(widgetsDir, categoryName);
        let widgetEntries;
        try {
            widgetEntries = readdirSync(categoryPath);
        }
        catch {
            continue;
        }
        const widgets = [];
        for (const widgetName of widgetEntries.sort()) {
            const widgetPath = join(categoryPath, widgetName);
            const indexPath = join(widgetPath, "index.html");
            if (!existsSync(indexPath)) {
                continue;
            }
            const templates = ["index.html"];
            let widgetChildren;
            try {
                widgetChildren = readdirSync(widgetPath);
            }
            catch {
                widgetChildren = [];
            }
            // Collect alternative .html files at widget level (excluding index.html)
            const htmlFiles = widgetChildren
                .filter((f) => f.endsWith(".html") && f !== "index.html")
                .sort();
            templates.push(...htmlFiles);
            // Collect alternative templates from subdirectories (level 3)
            const subDirs = widgetChildren
                .filter((f) => !f.endsWith(".html"))
                .sort();
            for (const subDir of subDirs) {
                const subDirPath = join(widgetPath, subDir);
                let subEntries;
                try {
                    subEntries = readdirSync(subDirPath);
                }
                catch {
                    continue;
                }
                const subHtmlFiles = subEntries
                    .filter((f) => f.endsWith(".html"))
                    .sort();
                for (const htmlFile of subHtmlFiles) {
                    templates.push(`${subDir}/${htmlFile}`);
                }
            }
            widgets.push({ name: widgetName, templates });
        }
        if (widgets.length > 0) {
            categories.push({ name: categoryName, widgets });
        }
    }
    return categories;
}
export const listWidgetsTool = defineTool({
    name: "list_widgets",
    description: "Liste tous les widgets présents dans le thème graphique et leurs templates alternatifs. " +
        "À utiliser avant toute création de template secondaire de widget. " +
        "Retourne un bloc par widget (catégorie / nom), avec pour chaque langue : le dossier et la liste des " +
        "templates (index.html + templates alternatifs), ou la mention \"Widget non défini\" si ce widget n'existe " +
        "pas pour cette langue. " +
        "lang : si omis (ou vide), inclut tous les dossiers de langue (2 lettres) trouvés à la racine du thème ; " +
        "si précisé, uniquement les langues listées (erreur si un dossier de langue demandé n'existe pas).",
    inputSchema: {
        themePath: z
            .string()
            .min(1)
            .describe("Chemin absolu vers le dossier racine du thème graphique"),
        lang: z.array(z.string().regex(/^[a-z]{2}$/, "code langue sur 2 lettres minuscules attendu (ex. \"fr\")"))
            .optional()
            .describe("Codes langue (2 lettres minuscules, ex. [\"fr\",\"de\"]) à lister. Omis ou vide : tous les dossiers de langue du thème."),
    },
    handler: async ({ themePath, lang }) => {
        return {
            content: [{ type: "text", text: listWidgets({ themePath, lang }) }],
        };
    },
});
