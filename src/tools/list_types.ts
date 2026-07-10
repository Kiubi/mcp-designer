import {z} from "zod";
import {defineTool} from "../tool.ts";
import {ThemeInspector, resolveLangs} from "#lib/theme-checker/index";
import type {TypeDefinition} from "#lib/theme-checker/types";
import {join} from "node:path";

export const LIST_TYPES = ["billet_page", "symbole", "composant", "produit", "billet_blog", "template"] as const;
type ListType = typeof LIST_TYPES[number];

const TYPE_MAP: Record<ListType, (inspector: ThemeInspector) => {items: TypeDefinition[], subdir: string}> = {
    billet_page: (i) => {
        return {items : i.listCms(), subdir: 'billets'}
    },
    symbole: (i) => {
        return {items : i.listSymbols(), subdir: 'symboles'}
    },
    composant: (i) => {
        return {items : i.listComponents(), subdir: 'composants'}
    },
    produit: (i) => {
        return {items : i.listProducts(), subdir: 'produits'}
    },
    billet_blog: (i) => {
        return {items : i.listBlogs(), subdir: 'billets_blog'}
    },
    template: (i) => {
        return {items : i.listModels(), subdir: 'templates'}
    },
};

function listTypesForLang(themePath: string, lang: string, type: ListType): string {
    const inspector = new ThemeInspector(themePath, lang);
    const infos = TYPE_MAP[type](inspector);
    const path = join(lang, infos.subdir);

    const lines = [`Éléments de type "${type}" [${lang}] :`, ''];

    if (infos.items.length === 0) {
        lines.push(`Aucun élément de type "${type}" trouvé dans le thème "${themePath}" pour la langue "${lang}".`)
        return lines.join('\n');
    }

    infos.items.forEach(item => {
        lines.push('- ' + join(path, item.id) + (item.name !== '' ? ' : ' + item.name : ''));
    });

    if (type === "billet_blog") {
        const wPath = inspector.getRelLgPath('widgets/blog/detail_billet/index.html');
        lines.push('', `Attention : les config.xml sont dans ${path}/ mais le template est centralisé dans ${wPath}`);
    }

    return lines.join('\n');
}

export function listTypes({themePath, type, lang}: { themePath: string; type: ListType; lang?: string[] | null }): string {
    const resolved = resolveLangs(themePath, lang);
    if ('error' in resolved) return `Erreur : ${resolved.error}`;

    const blocks = resolved.map(l => `${listTypesForLang(themePath, l, type)}`);
    return blocks.join('\n\n');
}

export const listTypesTool = defineTool({
    name: "list_types",
    description: "Liste tous les éléments présent dans le thème graphique d'un type : \n" +
        " - billet_page (billets des pages)\n" +
        " - billet_blog (billets du blog)\n" +
        " - composant\n" +
        " - produit\n" +
        " - symbole\n" +
        " - template (templates principaux)\n" +
        "lang : si omis (ou vide), liste dans tous les dossiers de langue (2 lettres) trouvés à la racine du thème ; " +
        "si précisé, uniquement les langues listées (erreur si un dossier de langue demandé n'existe pas). " +
        "Le résultat liste les éléments par langue.",
    inputSchema: {
        themePath: z.string().min(1).describe("Chemin absolu vers le dossier racine du thème graphique"),
        type: z.enum(["billet_page", "symbole", "composant", "produit", "billet_blog", "template"]).describe("Type d'élément à lister"),
        lang: z.array(z.string().regex(/^[a-z]{2}$/, "code langue sur 2 lettres minuscules attendu (ex. \"fr\")"))
            .optional()
            .describe("Codes langue (2 lettres minuscules, ex. [\"fr\",\"de\"]) à lister. Omis ou vide : tous les dossiers de langue du thème."),
    },
    handler: async ({themePath, type, lang}) => {
        return {
            content: [{type: "text" as const, text: listTypes({themePath, type, lang})}],
        };
    }
});
