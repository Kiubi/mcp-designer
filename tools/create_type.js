import { z } from "zod";
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import * as nodePath from 'node:path';
import { XMLParser } from 'fast-xml-parser';
import { defineTool } from "../tool.js";
import { ThemeInspector, resolveLangs } from "#lib/theme-checker/index";
const CHAMP_TYPES = ["text", "textarea", "wysiwyg", "image", "fichier", "select", "color", "date", "datetime", "checkbox"];
const COLMAX_VALUES = ["1", "2", "2d", "2g", "3"];
// ─── Constants ────────────────────────────────────────────────────────────────
const TYPE_SUBDIR = {
    billet_page: "billets",
    billet_blog: "billets_blog",
    produit: "produits",
    composant: "composants",
    symbole: "symboles",
    template: "templates",
};
const FIELD_VALIDATORS = {
    billet_page: /^(titre|sstitre|texte([1-9]|1[0-5]))$/,
    billet_blog: /^texte([1-9]|1[0-5])$/,
    produit: /^texte([1-9]|1[0-5])$/,
    composant: /^[a-zA-Z0-9_]{1,40}$/,
    symbole: /^[a-zA-Z0-9_]{1,40}$/,
    template: null,
};
// ─── Validation ───────────────────────────────────────────────────────────────
const VALID_REPERTOIRE = /^[a-zA-Z0-9_]{1,40}$/;
export function validateRepertoire(name) {
    if (!VALID_REPERTOIRE.test(name)) {
        return `Répertoire invalide "${name}" : seuls les caractères alphanumériques ASCII et _ sont autorisés (1-40 caractères, sans / ni ..).`;
    }
    return null;
}
// ─── XML helpers ──────────────────────────────────────────────────────────────
function escapeAttr(s) {
    return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}
function escapeText(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function buildChampXml(c, indent) {
    let attrs = `champ="${escapeAttr(c.name)}" type="${c.type}" intitule="${escapeAttr(c.label)}"`;
    if (c.default !== undefined && c.default !== '')
        attrs += ` defaut="${escapeAttr(c.default)}"`;
    if (c.hint !== undefined && c.hint !== '')
        attrs += ` aide="${escapeAttr(c.hint)}"`;
    if ((c.type === 'select' || c.type === 'checkbox') && c.options && c.options.length > 0) {
        const lines = [`${indent}<champ ${attrs}>`];
        for (const o of c.options) {
            lines.push(`${indent}    <option value="${escapeAttr(o.value)}">${escapeText(o.label)}</option>`);
        }
        lines.push(`${indent}</champ>`);
        return lines.join('\n');
    }
    return `${indent}<champ ${attrs} />`;
}
function buildListeChamps(fields, indent) {
    const lines = [];
    if (fields.length === 0) {
        lines.push(`${indent}<listechamps />`);
    }
    else {
        lines.push(`${indent}<listechamps>`);
        for (const c of fields) {
            lines.push(buildChampXml(c, indent + '    '));
        }
        lines.push(`${indent}</listechamps>`);
    }
    return lines;
}
export function buildConfigXml(params) {
    const { kind, label, tri, fields, collectionFields } = params;
    const header = '<?xml version="1.0" encoding="iso-8859-1"?>';
    if (kind === 'composant') {
        const dtd = '<!DOCTYPE composant SYSTEM "http://www.kiubi-admin.com/DTD/composants.dtd">';
        const lines = [
            header,
            dtd,
            `<composant intitule="${escapeAttr(label)}" tri="${tri}">`,
            ...buildListeChamps(fields, '    '),
        ];
        if (collectionFields && collectionFields.length > 0) {
            lines.push('    <collection>');
            for (const c of collectionFields) {
                lines.push(buildChampXml(c, '        '));
            }
            lines.push('    </collection>');
        }
        lines.push('</composant>');
        return lines.join('\n') + '\n';
    }
    const dtdMap = {
        billet_page: '<!DOCTYPE type SYSTEM "http://www.kiubi-admin.com/DTD/typesbillets.dtd">',
        billet_blog: '<!DOCTYPE type SYSTEM "http://www.kiubi-admin.com/DTD/typesbillets.dtd">',
        produit: '<!DOCTYPE type SYSTEM "http://www.kiubi-admin.com/DTD/typesproduits.dtd">',
    };
    const lines = [
        header,
        dtdMap[kind],
        `<type tri="${tri}">`,
        `    <desc>${escapeText(label)}</desc>`,
        ...buildListeChamps(fields, '    '),
        '</type>',
    ];
    return lines.join('\n') + '\n';
}
export function buildDescXml(params) {
    const { kind, label, tri, fields = [], zones } = params;
    const header = '<?xml version="1.0" encoding="iso-8859-1"?>';
    const defautZone = zones.find(z => z.allowContent) ?? zones[0];
    const defautId = defautZone?.id ?? '';
    const buildZones = (indent) => {
        const defautAttr = defautId ? ` defaut="${escapeAttr(defautId)}"` : '';
        const lines = [`${indent}<zones${defautAttr}>`];
        for (const z of zones) {
            let attrs = `id="${escapeAttr(z.id)}" colmax="${z.maxColumns}" intitule="${escapeAttr(z.label)}" defaut="${z.defaultColumns}"`;
            if (z.allowContent)
                attrs += ` type="contenu"`;
            lines.push(`${indent}    <zone ${attrs} />`);
        }
        lines.push(`${indent}</zones>`);
        return lines;
    };
    if (kind === 'template') {
        const lines = [
            header,
            `<modele intitule="${escapeAttr(label)}">`,
            ...buildZones('    '),
            '</modele>',
        ];
        return lines.join('\n') + '\n';
    }
    // symbole
    const dtd = '<!DOCTYPE symbole SYSTEM "http://www.kiubi-admin.com/DTD/symboles.dtd">';
    const lines = [
        header,
        dtd,
        `<symbole intitule="${escapeAttr(label)}" tri="${tri ?? 1}">`,
        ...buildListeChamps(fields, '    '),
        ...buildZones('    '),
        '</symbole>',
    ];
    return lines.join('\n') + '\n';
}
function renderChamp(c, indent) {
    if (c.type === 'image' || c.type === 'fichier') {
        return `${indent}<!-- BEGIN:${c.name} --><img src="{${c.name}}" alt="" /><!-- END:${c.name} -->`;
    }
    if (c.type === 'wysiwyg' || c.type === 'textarea') {
        return `${indent}<div>{${c.name}}</div>`;
    }
    return `${indent}<span>{${c.name}}</span>`;
}
export function buildIndexHtml(params) {
    const { kind, label, fields, zones, collectionFields } = params;
    const comment = `<!-- Template généré automatiquement pour "${label}" — à adapter -->`;
    if (kind === 'template') {
        const zoneLines = zones.map(z => `<div>{ZONE.${z.id}}</div>`).join('\n');
        return [
            '<!-- BEGIN:main -->',
            comment,
            '<!DOCTYPE html>',
            '<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">',
            '<head>',
            '    <title>{title}</title>',
            '    <meta name="description" content="{metaDescription}" />',
            '    {metaRobots}',
            '    {metaCanonical}',
            '    {js_head}',
            '</head>',
            '<body>',
            zoneLines || '<!-- zones du template -->',
            '{js_body}',
            '</body>',
            '</html>',
            '<!-- END:main -->',
        ].join('\n') + '\n';
    }
    if (kind === 'symbole') {
        const fieldLines = fields.map(c => renderChamp(c, '')).join('\n');
        const zoneLines = zones.map(z => `<div>{ZONE.${z.id}}</div>`).join('\n');
        return [
            '<!-- BEGIN:main -->',
            comment,
            '<div>',
            fieldLines || '<!-- champs du symbole -->',
            zoneLines || '<!-- zones du symbole -->',
            '</div>',
            '<!-- END:main -->',
        ].join('\n') + '\n';
    }
    if (kind === 'composant') {
        const fieldLines = fields.map(c => renderChamp(c, '    ')).join('\n');
        const lines = [
            '<!-- BEGIN:main -->',
            comment,
            '<div>',
        ];
        lines.push(fieldLines || '    <!-- champs du composant -->');
        if (collectionFields && collectionFields.length > 0) {
            lines.push('    <!-- BEGIN:collection -->');
            lines.push('    <!-- BEGIN:item -->');
            for (const c of collectionFields) {
                lines.push(renderChamp(c, '        '));
            }
            lines.push('    <!-- END:item -->');
            lines.push('    <!-- BEGIN:empty -->');
            lines.push('    <!-- END:empty -->');
            lines.push('    <!-- END:collection -->');
        }
        lines.push('</div>');
        lines.push('<!-- END:main -->');
        return lines.join('\n') + '\n';
    }
    // billet_page, produit
    const fieldLines = fields.map(c => renderChamp(c, '')).join('\n');
    return [
        '<!-- BEGIN:main -->',
        comment,
        fieldLines || '<!-- champs du billet -->',
        '<!-- END:main -->',
    ].join('\n') + '\n';
}
export function buildStructureXhtml(zones) {
    const rows = zones.map(z => `\t<tr>\n\t\t<td>{${z.id}}</td>\n\t</tr>`).join('\n');
    return `<table>\n${rows}\n</table>\n`;
}
// ─── Tri computation ──────────────────────────────────────────────────────────
const triParser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    transformTagName: (n) => n.toLowerCase(),
    transformAttributeName: (n) => n.toUpperCase(),
});
export function readExistingTri(filePath) {
    try {
        const content = readFileSync(filePath, 'latin1');
        const doc = triParser.parse(content);
        const root = doc?.type ?? doc?.composant ?? doc?.symbole;
        if (root && root.TRI !== undefined) {
            const n = parseInt(String(root.TRI), 10);
            return isNaN(n) ? null : n;
        }
        return null;
    }
    catch {
        return null;
    }
}
export function computeTri(themePath, kind, lang = 'fr') {
    if (kind === 'template')
        return 1;
    const inspector = new ThemeInspector(themePath, lang);
    let items;
    switch (kind) {
        case 'billet_page':
            items = inspector.listCms();
            break;
        case 'billet_blog':
            items = inspector.listBlogs();
            break;
        case 'produit':
            items = inspector.listProducts();
            break;
        case 'composant':
            items = inspector.listComponents();
            break;
        case 'symbole':
            items = inspector.listSymbols();
            break;
    }
    const max = items.reduce((acc, i) => Math.max(acc, i.position ?? 0), 0);
    return max + 1;
}
// Crée/met à jour le type dans un seul dossier de langue, retourne les messages associés.
function createTypeForLang(params) {
    const { themePath, lang, type, name, label, fields, collectionFields, zones } = params;
    const subdir = nodePath.join(lang, TYPE_SUBDIR[type]);
    const typeDir = nodePath.join(themePath, subdir, name);
    const xmlFile = (type === 'symbole' || type === 'template') ? 'desc.xml' : 'config.xml';
    const xmlPath = nodePath.join(typeDir, xmlFile);
    const htmlPath = nodePath.join(typeDir, 'index.html');
    const structurePath = nodePath.join(typeDir, 'structure.xhtml');
    // Compute tri (preserve existing if file already exists)
    let tri;
    if (existsSync(xmlPath)) {
        tri = readExistingTri(xmlPath) ?? 1;
    }
    else {
        tri = computeTri(themePath, type, lang);
    }
    // Create directory
    mkdirSync(typeDir, { recursive: true });
    // Write XML
    let xmlContent;
    if (type === 'symbole' || type === 'template') {
        xmlContent = buildDescXml({ kind: type, label, tri, fields, zones });
    }
    else {
        xmlContent = buildConfigXml({ kind: type, label, tri, fields, collectionFields });
    }
    writeFileSync(xmlPath, xmlContent, 'latin1');
    const relPath = `${subdir}/${name}`;
    const messages = [`${xmlFile} créé/mis à jour : ${relPath}/${xmlFile}`];
    // No index.html for billet_blog
    if (type !== 'billet_blog') {
        if (existsSync(htmlPath)) {
            messages.push(`index.html non modifié (fichier existant conservé)`);
        }
        else {
            const html = buildIndexHtml({ kind: type, label, fields, zones, collectionFields });
            writeFileSync(htmlPath, html, 'latin1');
            messages.push(`index.html créé — à adapter : ${relPath}/index.html`);
        }
    }
    // structure.xhtml for templates and symboles
    if (type === 'template' || type === 'symbole') {
        if (existsSync(structurePath)) {
            messages.push(`structure.xhtml non modifié (fichier existant conservé)`);
        }
        else {
            writeFileSync(structurePath, buildStructureXhtml(zones), 'latin1');
            messages.push(`structure.xhtml créé : ${relPath}/structure.xhtml`);
        }
    }
    return messages;
}
export function createType(params) {
    const { themePath, type, name, label, fields, collectionFields, zones, lang } = params;
    // Validate name
    const err = validateRepertoire(name);
    if (err)
        return `Erreur : ${err}`;
    // Validate field names
    const validator = FIELD_VALIDATORS[type];
    if (type === 'template' && fields.length > 0) {
        return `Erreur : les templates ne supportent pas de champs (champs ignorés).`;
    }
    if (validator) {
        const invalid = fields.filter(c => !validator.test(c.name)).map(c => c.name);
        if (invalid.length > 0) {
            return `Erreur : nom(s) de champ invalide(s) pour le type "${type}" : ${invalid.join(', ')}.`;
        }
    }
    if (collectionFields !== undefined) {
        if (type !== 'composant') {
            return `Erreur : la collection n'est disponible que pour les composants.`;
        }
        const compValidator = FIELD_VALIDATORS.composant;
        const invalid = collectionFields.filter(c => !compValidator.test(c.name)).map(c => c.name);
        if (invalid.length > 0) {
            return `Erreur : nom(s) de champ de collection invalide(s) : ${invalid.join(', ')}.`;
        }
    }
    // Resolve target languages
    const resolved = resolveLangs(themePath, lang);
    if ('error' in resolved)
        return `Erreur : ${resolved.error}`;
    const blocks = resolved.map(l => {
        const messages = createTypeForLang({ themePath, lang: l, type, name, label, fields, collectionFields, zones });
        return `[${l}]\n${messages.join('\n')}`;
    });
    return blocks.join('\n\n');
}
// ─── Tool definition ──────────────────────────────────────────────────────────
// Factory : need to create un distinct Zod instance
// Avoid zod-to-json-schema optimization that would create a $ref type
// that som MCP clients would not resolve
function createFieldSchema() {
    return z.object({
        name: z.string().describe("Nom du champ"),
        type: z.enum(CHAMP_TYPES).describe("Type de saisie"),
        label: z.string().describe("Label en français affiché dans le back-office"),
        hint: z.string().optional().describe("Texte d'aide (optionnel)"),
        default: z.string().optional().describe("Valeur par défaut (optionnel)"),
        options: z.array(z.object({
            value: z.string().describe("Valeur de l'option"),
            label: z.string().describe("Label de l'option"),
        })).optional().describe("Options pour les champs select/checkbox"),
    });
}
export const createTypeTool = defineTool({
    name: "create_type",
    description: "Crée ou met à jour un type d'élément dans un thème graphique Kiubi : " +
        "billet de contenu (billet_page), billet de blog (billet_blog), produit, composant, symbole ou template principal. " +
        "Génère les fichiers XML (config.xml ou desc.xml) et, si absent, un template HTML de base à adapter. " +
        "Idempotent : si les fichiers existent déjà, le XML est mis à jour (tri conservé) sans toucher au HTML existant. " +
        "Le tri est calculé automatiquement (max existant + 1). " +
        "Noms de champs : billet_page (titre, sstitre, texte1-15), billet_blog/produit (texte1-15), " +
        "composant/symbole (alphanumérique ASCII + _, max 40 car.). " +
        "billet_blog : pas de index.html (template dans widgets/blog/). " +
        "template/symbole : nécessitent des zones. " +
        "lang : si omis (ou vide), crée l'élément dans tous les dossiers de langue (2 lettres) trouvés à la racine du " +
        "thème ; si précisé, uniquement dans les langues listées (erreur si un dossier de langue demandé n'existe pas). " +
        "Le tri est calculé indépendamment pour chaque langue. Le résultat liste les fichiers créés/mis à jour par langue.",
    inputSchema: {
        themePath: z.string().min(1).describe("Chemin absolu vers le dossier racine du thème graphique"),
        type: z.enum(["billet_page", "billet_blog", "produit", "composant", "symbole", "template"])
            .describe("Type d'élément à créer ou mettre à jour"),
        name: z.string().describe("Nom du dossier (ASCII alphanumérique + _, 1-40 car., sans / ni ..)"),
        label: z.string().describe("Intitulé du type en français affiché dans le back-office"),
        lang: z.array(z.string().regex(/^[a-z]{2}$/, "code langue sur 2 lettres minuscules attendu (ex. \"fr\")"))
            .optional()
            .describe("Codes langue (2 lettres minuscules, ex. [\"fr\",\"de\"]) où créer l'élément. Omis ou vide : tous les dossiers de langue du thème."),
        fields: z.array(createFieldSchema())
            .optional().default([])
            .describe("Champs de saisie. Noms autorisés selon le type (voir description)."),
        collectionFields: z.array(createFieldSchema())
            .optional()
            .describe("Champs des items de collection (composants uniquement)"),
        zones: z.array(z.object({
            id: z.string().describe("Identifiant de la zone (utilisé dans index.html avec {ZONE.id})"),
            label: z.string().describe("Label de la zone dans le back-office"),
            maxColumns: z.enum(COLMAX_VALUES).default("1").describe("Nombre max de colonnes (1, 2, 2d, 2g, 3)"),
            defaultColumns: z.enum(COLMAX_VALUES).default("1").describe("Nombre de colonnes par défaut"),
            allowContent: z.boolean().default(false).describe("Si true, la zone accepte les billets et composants"),
        }))
            .optional().default([])
            .describe("Zones de dépôt de widgets (templates et symboles uniquement)"),
    },
    handler: async ({ themePath, type, name, label, fields, collectionFields, zones, lang }) => {
        const result = createType({
            themePath,
            type,
            name,
            label,
            fields: fields ?? [],
            collectionFields,
            zones: zones ?? [],
            lang,
        });
        return { content: [{ type: "text", text: result }] };
    },
});
