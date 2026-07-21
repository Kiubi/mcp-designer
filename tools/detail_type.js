import { z } from "zod";
import { defineTool } from "../tool.js";
import { ThemeInspector, resolveLangs } from "#lib/theme-checker/index";
import { join } from "node:path";
const TYPE_MAP = {
    billet_page: (i) => i.listCms(),
    symbole: (i) => i.listSymbols(),
    composant: (i) => i.listComponents(),
    produit: (i) => i.listProducts(),
    billet_blog: (i) => i.listBlogs(),
    template: (i) => i.listModels(),
};
const PATH_MAP = {
    billet_page: 'billets',
    symbole: 'symboles',
    composant: 'composants',
    produit: 'produits',
    billet_blog: 'billets_blog',
    template: 'templates',
};
function isModelDef(d) {
    return 'zones' in d && 'structure' in d && !('fields' in d);
}
function isSymbolDef(d) {
    return 'zones' in d && 'fields' in d && 'structure' in d;
}
function isComponentDef(d) {
    return 'hasCollection' in d;
}
function formatDetail(variant) {
    const lines = [
        '',
        `Version [${variant.lang}]`
    ];
    if (variant.title) {
        lines.push(`Intitulé : ${variant.title}`);
    }
    if (variant.position) {
        lines.push(`Position : ${variant.position}`);
    }
    lines.push(`Dossier : ${variant.path}`);
    if (variant.files.length > 0) {
        lines.push('Fichiers :');
        lines.push(...variant.files);
    }
    if (variant.fields.length > 0) {
        lines.push('Champs :');
        lines.push(...variant.fields);
    }
    if (variant.collection.length > 0) {
        lines.push('Collection :');
        lines.push(...variant.collection);
    }
    if (variant.zones.length > 0) {
        lines.push('Zones :');
        lines.push(...variant.zones);
    }
    return lines.join('\n');
}
function detailTypeForLang(themePath, lang, type, name) {
    const inspector = new ThemeInspector(themePath, lang);
    const items = TYPE_MAP[type](inspector);
    const item = items.find(i => i.id === name);
    if (!item) {
        return null;
    }
    const label = 'name' in item && item.name ? item.name
        : 'desc' in item && item.name ? item.name
            : undefined;
    const basePath = join(inspector.getRelLgPath(PATH_MAP[type]), name);
    const files = [];
    switch (type) {
        case "composant":
        case "produit":
        case "billet_page":
            files.push(basePath + '/index.html // template');
            files.push(basePath + '/config.xml // définition');
            break;
        case "billet_blog":
            files.push(basePath + '/config.xml // définition');
            files.push('Attention : le template est commun à tous les billets du blog dans ' + join(inspector.getRelLgPath('widgets/blog/detail_billet/index.html')));
            break;
        case "symbole":
        case "template":
            files.push(basePath + '/index.html // template');
            files.push(basePath + '/desc.xml // définition');
            files.push(basePath + '/structure.xhml // structure des zones');
            break;
    }
    const fields = [];
    const collection = [];
    const zones = [];
    if ("fields" in item && item.fields && item.fields.length > 0) {
        for (const field of item.fields) {
            const def = field.default ? ` (défaut: ${field.default})` : '';
            fields.push(`${field.field} : ${field.name} [${field.type}]${def}`);
        }
    }
    if (isComponentDef(item) && item.hasCollection && item.collection.length > 0) {
        for (const field of item.collection) {
            const def = field.default ? ` (défaut: ${field.default})` : '';
            collection.push(`${field.field} : ${field.name} [${field.type}]${def}`);
        }
    }
    if ((isModelDef(item) || isSymbolDef(item)) && item.zones.length > 0) {
        for (const zone of item.zones) {
            const content = zone.isContent ? ' [contenu]' : '';
            zones.push(`${zone.id} : ${zone.name}${content} (colmax: ${zone.colmax})`);
        }
    }
    return {
        lang: lang,
        title: label,
        position: ('position' in item) ? item.position : null,
        path: basePath,
        files: files,
        fields: fields,
        collection: collection,
        zones: zones,
    };
}
export function detailType({ themePath, type, name, lang }) {
    const resolved = resolveLangs(themePath, lang);
    if ('error' in resolved)
        return `Erreur : ${resolved.error}`;
    const variants = resolved.map((l) => {
        return { lang: l, detail: detailTypeForLang(themePath, l, type, name) };
    });
    if (variants.filter(x => x.detail !== null).length === 0) {
        return `Aucun élément "${name}" de type "${type}" trouvé dans le thème "${themePath}"`; // TODO add fuzzy search accross all lang
    }
    const blocks = [
        `Type : ${type}`,
        `Identifiant : ${name}`
    ];
    blocks.push(...variants.map((variant) => {
        if (variant.detail === null) {
            if (lang === null || lang === undefined)
                return null;
            return `\nVersion [${variant.lang}]\nType non défini`;
        }
        return formatDetail(variant.detail);
    }).filter(x => x !== null));
    return blocks.join('\n');
}
export const detailTypeTool = defineTool({
    name: "detail_type",
    description: "Retourne le détail d'un élément du thème graphique (champs, zones, collection) à partir de son type et de son identifiant. " +
        "lang : si omis (ou vide), inspecte tous les dossiers de langue (2 lettres) trouvés à la racine du thème ; si " +
        "précisé, uniquement les langues listées (erreur si un dossier de langue demandé n'existe pas). " +
        "Le résultat liste le détail (ou l'absence) de l'élément par langue.",
    inputSchema: {
        themePath: z.string().min(1).describe("Chemin absolu vers le dossier racine du thème graphique"),
        type: z.enum(["billet_page", "symbole", "composant", "produit", "billet_blog", "template"]).describe("Type d'élément"),
        name: z.string().min(1).describe("Identifiant de l'élément (son nom de répertoire)"),
        lang: z.array(z.string().regex(/^[a-z]{2}$/, "code langue sur 2 lettres minuscules attendu (ex. \"fr\")"))
            .optional()
            .describe("Codes langue (2 lettres minuscules, ex. [\"fr\",\"de\"]) à inspecter. Omis ou vide : tous les dossiers de langue du thème."),
    },
    handler: async ({ themePath, type, name, lang }) => {
        return {
            content: [{ type: "text", text: detailType({ themePath, type, name, lang }) }],
        };
    }
});
