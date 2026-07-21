import { readFileSync, statSync, existsSync, readdirSync } from 'node:fs';
import * as nodePath from 'node:path';
import { ThemeInspector } from "./inspector.js";
import { validateFilters } from "./filter-validator.js";
import { validateBlocks, loadBlockDef, applyCustomFieldsDefinition, applyCollectionDefinition } from "./block-validator.js";
// ─── Block definition mapping per type ───────────────────────────────────────
const TYPE_BLOCK_DEF = {
    cms: { jsonFile: 'cms.json', basePath: 'billets' },
    blog: { jsonFile: 'blog.json', basePath: 'billets_blog' },
    product: { jsonFile: 'catalogue.json', basePath: 'produits' },
    component: { jsonFile: 'cms.json', basePath: 'composants' },
    symbol: { jsonFile: 'cms.json', basePath: 'symboles' },
    model: { jsonFile: 'cms.json', basePath: 'templates' } // FIXME basePath
};
// ─── Mandatory widget files (relative to fr/widgets/) ───────────────────────
const WIDGETS = {
    'blog': {
        'archives': {
            templates: [{ name: 'index.html', required: true }]
        },
        'categories': {
            templates: [{ name: 'index.html', required: true }]
        },
        'derniers_billets_postes': {
            templates: [{ name: 'index.html', required: true }]
        },
        'derniers_commentaires_postes': {
            templates: [{ name: 'index.html', required: true }]
        },
        'detail_billet': {
            templates: [{ name: 'index.html', required: true }]
        },
        'les_plus_commentes': {
            templates: [{ name: 'index.html', required: true }]
        },
        'liens': {
            templates: [{ name: 'index.html', required: true }]
        },
        'liste_billets': {
            templates: [{ name: 'index.html', required: true }]
        },
        'liste_commentaires': {
            templates: [{ name: 'index.html', required: true }]
        },
        'poster_commentaire': {
            templates: [{ name: 'index.html', required: true }]
        },
    },
    'catalogue': {
        'categories': {
            templates: [{ name: 'index.html', required: true }]
        },
        'liste_categories': {
            templates: [{ name: 'index.html', required: true }]
        },
        'liste_commentaires': {
            templates: [{ name: 'index.html', required: true }]
        },
        'liste_produits': {
            templates: [
                { name: 'index.html', required: true },
                { name: 'liste.html', required: true },
                { name: 'vignettes.html', required: true },
            ]
        },
        'poster_commentaire': {
            templates: [{ name: 'index.html', required: true }]
        },
        'produits_associes': {
            templates: [{ name: 'index.html', required: true }]
        },
        'produits_egalement_achetes': {
            templates: [{ name: 'index.html', required: true }]
        },
        'produits_plus': {
            templates: [{ name: 'index.html', required: true }]
        },
        'produits_vedettes': {
            templates: [{ name: 'index.html', required: true }]
        },
        'tags': {
            templates: [{ name: 'index.html', required: true }]
        },
    },
    'commandes': {
        'livraison': {
            templates: [
                { name: 'index.html', required: true },
                { name: 'transporteurs.html', required: true },
                { name: 'dpd.html', required: true },
                { name: 'mondialrelay.html', required: true },
                { name: 'colissimo_pickup.html', required: true },
            ]
        },
        'paiement': {
            templates: [
                { name: 'atos.html', required: true },
                { name: 'cheque.html', required: true },
                { name: 'cm_cic.html', required: true },
                { name: 'index.html', required: true },
                { name: 'paybox.html', required: true },
                { name: 'payline.html', required: true },
                { name: 'payplug.html', required: true },
                { name: 'paypal.html', required: true },
                { name: 'stripe.html', required: true },
                { name: 'systempay.html', required: true },
                { name: 'virement.html', required: true },
            ]
        },
        'panier': {
            templates: [{ name: 'index.html', required: true }]
        },
        'panier_detail': {
            templates: [{ name: 'index.html', required: true }]
        },
        'validation': {
            templates: [{ name: 'index.html', required: true }]
        },
    },
    'communication': {
        'contact': {
            templates: [{ name: 'index.html', required: true }]
        },
        'formulaires': {
            templates: [{ name: 'index.html', required: true }]
        },
        'newsletter': {
            templates: [{ name: 'index.html', required: true }]
        },
        'syndication_blog': {
            templates: [{ name: 'index.html', required: true }]
        },
    },
    'compte': {
        'identification': {
            templates: [{ name: 'index.html', required: true }]
        },
        'identification_rapide': {
            templates: [{ name: 'index.html', required: true }]
        },
        'inscription': {
            templates: [{ name: 'index.html', required: true }]
        },
        'tableau_bord': {
            templates: [
                { name: 'index.html', required: true },
                { name: 'mail_bon_reduction.html', required: true },
                { name: 'mail_motdepasse_perdu.html', required: true },
                { name: 'cloture.html', required: true },
                { name: 'abonnements.html', required: true },
                { name: 'avatar.html', required: true },
                { name: 'id_web.html', required: true },
                { name: 'infos_perso.html', required: true },
                { name: 'motdepasse.html', required: true },
                { name: 'motdepasse_perdu.html', required: true },
            ]
        },
    },
    'recherche': {
        'simple': {
            templates: [
                { name: 'index.html', required: true },
                { name: 'blog.html', required: true },
                { name: 'catalogue.html', required: true },
                { name: 'cms.html', required: true },
            ]
        },
    },
    'site_web': {
        'bloc_extrait': {
            templates: [{ name: 'index.html', required: true }]
        },
        'contenu_page_libre': {
            templates: [{ name: 'index.html', required: true }]
        },
        'menu_h': {
            templates: [{ name: 'index.html', required: true }]
        },
        'menu_v': {
            templates: [{ name: 'index.html', required: true }]
        },
    },
};
const MANDATORY_MODULES = [
    '/404/404.html',
    '/chemin/index.html',
    '/fermeture/fermeture.html',
];
// ─── Helpers ─────────────────────────────────────────────────────────────────
function walkFiles(dir, extensions) {
    const results = [];
    try {
        for (const name of readdirSync(dir)) {
            const full = nodePath.join(dir, name);
            try {
                if (statSync(full).isDirectory()) {
                    results.push(...walkFiles(full, extensions));
                }
                else if (!extensions.length || extensions.some(ext => name.endsWith(ext))) {
                    results.push(full);
                }
            }
            catch { /* skip inaccessible entries */ }
        }
    }
    catch { /* dir not accessible */ }
    return results;
}
function readLatin1(filePath) {
    return readFileSync(filePath, 'latin1');
}
const ENCODING_SAMPLE_SIZE = 4096;
function isUtf8Encoded(filePath) {
    let buf;
    try {
        buf = readFileSync(filePath);
    }
    catch {
        return false;
    }
    const sample = buf.length > ENCODING_SAMPLE_SIZE ? buf.subarray(0, ENCODING_SAMPLE_SIZE) : buf;
    // BOM UTF-8 (EF BB BF)
    if (sample.length >= 3 && sample[0] === 0xEF && sample[1] === 0xBB && sample[2] === 0xBF) {
        return true;
    }
    // Fichier purement ASCII → valide dans les deux encodages
    if (!sample.some(b => b > 0x7F))
        return false;
    // Décodage UTF-8 strict : succès = fichier UTF-8
    try {
        new TextDecoder('utf-8', { fatal: true }).decode(sample);
        return true;
    }
    catch {
        return false;
    }
}
/** Returns field names declared in a type definition. */
function getFieldNames(def) {
    if ("fields" in def && def.fields) {
        return def.fields.map(c => c.field);
    }
    return [];
}
/**
 * Returns field names that are declared in `fieldNames` but NOT found in the template content.
 * Template variables look like {varname} or {varname|filter}.
 */
function findUnusedFields(fieldNames, content) {
    if (fieldNames.length === 0)
        return [];
    const remaining = new Set(fieldNames);
    const regex = /\{([^|\s}]+)(?:\|[^}]+)?\}/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
        remaining.delete(m[1]);
    }
    return Array.from(remaining);
}
function listSubdirs(dir) {
    try {
        return readdirSync(dir).filter(name => {
            try {
                return statSync(nodePath.join(dir, name)).isDirectory();
            }
            catch {
                return false;
            }
        });
    }
    catch {
        return [];
    }
}
// ─── ThemeChecker ─────────────────────────────────────────────────────────────
export class ThemeChecker {
    issues = [];
    themePath = '';
    rel(file) {
        if (!this.themePath)
            return file;
        const rel = file.startsWith(this.themePath) ? file.slice(this.themePath.length) : file;
        return rel || file;
    }
    error(category, msg, file, line) {
        this.issues.push({ level: 'error', category, msg, file: file ? this.rel(file) : undefined, line });
    }
    warning(category, msg, file, line) {
        this.issues.push({ level: 'warning', category, msg, file: file ? this.rel(file) : undefined, line });
    }
    reportFilterIssues(content, category, filePath) {
        for (const issue of validateFilters(content)) {
            if (issue.level === 'error') {
                this.error(category, issue.msg, filePath, issue.line);
            }
            else {
                this.warning(category, issue.msg, filePath, issue.line);
            }
        }
    }
    reportBlockIssues(content, category, filePath, jsonFile, basePath, typeDef) {
        let def = (jsonFile && basePath) ? loadBlockDef(jsonFile, basePath) : null;
        if (def !== null && typeDef !== null) {
            if ('fields' in typeDef && typeDef.fields.length > 0) {
                def = applyCustomFieldsDefinition(def, typeDef.fields);
            }
            if ('collection' in typeDef && typeDef.collection.length > 0) {
                def = applyCollectionDefinition(def, typeDef.collection);
            }
        }
        for (const issue of validateBlocks(content, def)) {
            if (issue.level === 'error') {
                this.error(category, issue.msg, filePath, issue.line);
            }
            else {
                this.warning(category, issue.msg, filePath, issue.line);
            }
        }
    }
    checkEncoding(filePath) {
        if (isUtf8Encoded(filePath)) {
            this.error('encodage', 'Le fichier doit être encodé en ISO-8859-1, pas en UTF-8', filePath);
        }
    }
    // ── Config checks ──────────────────────────────────────────────────────────
    themeDescription(inspector) {
        const path = inspector.getPath();
        const desc = inspector.getDescription();
        if (desc === null) {
            const parseError = inspector.getDescriptionError();
            this.error('config', parseError ?? 'Fichier xml mal formé', nodePath.join(path, 'theme.xml'));
            return;
        }
        if (!existsSync(nodePath.join(path, 'illustration.jpg'))) {
            this.error('config', "Illustration du thème introuvable", nodePath.join(path, 'illustration.jpg'));
        }
        if (!existsSync(nodePath.join(path, 'fr'))) {
            this.error('config', "Dossier manquant", nodePath.join(path, 'fr'));
        }
    }
    // ── Type declarations checks ────────────────────────────────────────────────
    checkTypeDeclarations(inspector, type, declared) {
        const subdirWithSlash = inspector.getTypeSubdir(type);
        const subdir = subdirWithSlash.replace(/\/$/, '');
        const basePath = inspector.getLgPath(subdir);
        const requiredFiles = inspector.getRequiredFilesForType(type);
        const rawDirs = listSubdirs(basePath);
        if (rawDirs.length === 0) {
            return; // Should not happen
        }
        // Track dirs found on disk; remove those that have a valid type declaration
        // const foundDirs = new Set(rawDirs);
        for (const dir of rawDirs) {
            const fullDir = nodePath.join(basePath, dir);
            // Check each disk dir has required files    
            let hasError = false;
            for (const file of requiredFiles) {
                const fullFile = nodePath.join(fullDir, file);
                if (!existsSync(fullFile)) {
                    this.error(type, 'Fichier introuvable', fullFile);
                    hasError = true;
                }
                else {
                    this.checkEncoding(fullFile);
                }
            }
            if (hasError)
                continue;
            // Report parse errors from malformed descriptors
            hasError = false;
            for (const { id, error } of inspector.getTypeErrors(type)) {
                this.error(type, error, nodePath.join(basePath, id));
                hasError = true;
            }
            if (hasError)
                continue;
            const typeDef = declared.find((type) => (type.id === dir));
            // Warn about dirs without a valid type declaration
            if (typeof typeDef == undefined) {
                this.warning(type, 'Type incomplet', nodePath.join(basePath, dir));
                continue;
            }
            if (typeDef?.tpl) {
                const resolvedContent = this.resolveIncludes(typeDef.tpl, 0);
                // Compare balise declaration against template
                // Ex : texte2 in .xml is used as {texte2} index.html
                const fieldNames = getFieldNames(typeDef);
                for (const unused of findUnusedFields(fieldNames, resolvedContent)) {
                    if (unused === 'title' && (type === 'component' || type === 'symbol')) {
                        // title is forced into fieldNames so, not mandatory
                        continue;
                    }
                    this.warning(type, `Balise déclarée '${unused}' mais inutilisée`, typeDef.tpl);
                }
                // Resolve invert : Balise utilisée mais non déclarée
                this.reportFilterIssues(resolvedContent, type, typeDef.tpl);
                // Compare block and expected tags against tempalte
                const blockDef = TYPE_BLOCK_DEF[type];
                this.reportBlockIssues(resolvedContent, type, typeDef.tpl, blockDef.jsonFile, blockDef.basePath, typeDef);
            }
        }
    }
    // ── Template (model) zone checks ──────────────────────────────────────────
    checkModel(def, composantEnabled) {
        // if (!isModelDef(def) && !isSymbolDef(def)) return;
        const tplPath = def.tpl;
        const strPath = def.structure;
        if (!existsSync(tplPath)) {
            this.error('model', 'Template introuvable', tplPath);
            return;
        }
        if (!existsSync(strPath)) {
            this.error('model', 'Fichier structure introuvable', strPath);
            return;
        }
        const expectedZoneIds = new Set(def.zones.map(z => z.id));
        // Check template: {ZONE.xxx} patterns
        const tplContent = this.resolveIncludes(tplPath, 0);
        const tplZoneRegex = /\{ZONE\.([^}]+)\}/g;
        let m;
        while ((m = tplZoneRegex.exec(tplContent)) !== null) {
            if (!expectedZoneIds.has(m[1])) {
                this.warning('model', `Utilisation d'une zone '${m[1]}' non déclarée`, tplPath);
            }
        }
        // Check structure: {xxx} patterns
        const strContent = readLatin1(strPath);
        const remainingZones = new Set(def.zones.map(z => z.id));
        const strZoneRegex = /\{([^}]+)\}/g;
        while ((m = strZoneRegex.exec(strContent)) !== null) {
            if (!expectedZoneIds.has(m[1])) {
                this.warning('model', `Utilisation d'une zone '${m[1]}' non déclarée`, strPath);
            }
            else {
                remainingZones.delete(m[1]);
            }
        }
        if (remainingZones.size > 0) {
            this.warning('model', `Zone(s) '${Array.from(remainingZones).join(',')}' non utilisée(s) dans la structure`, strPath);
        }
        if (composantEnabled) {
            const hasContent = def.zones.some(z => z.isContent);
            if (!hasContent) {
                this.warning('model', "Le template ne comporte pas de zone de contenu", strPath);
            }
        }
    }
    // ── Symbol zone checks ────────────────────────────────────────────────────
    checkSymbole(def) {
        // if (!isSymbolDef(def)) return;
        const tplPath = def.tpl;
        const strPath = def.structure;
        if (!existsSync(tplPath)) {
            this.error('symbol', 'Template de symbole introuvable', tplPath);
            return;
        }
        if (!existsSync(strPath)) {
            this.error('symbol', 'Structure de symbole introuvable', strPath);
            return;
        }
        const zoneIds = new Set(def.zones.map(z => z.id));
        // Check template: {ZONE.xxx} patterns
        const tplContent = this.resolveIncludes(tplPath, 0);
        const remainingFromTpl = new Set(def.zones.map(z => z.id));
        const tplZoneRegex = /\{ZONE\.([^}]+)\}/g;
        let m;
        while ((m = tplZoneRegex.exec(tplContent)) !== null) {
            if (!zoneIds.has(m[1])) {
                this.warning('symbol', `Utilisation d'une zone '${m[1]}' non déclarée`, tplPath);
            }
            else {
                remainingFromTpl.delete(m[1]);
            }
        }
        if (remainingFromTpl.size > 0) {
            this.warning('symbol', `Zone(s) '${Array.from(remainingFromTpl).join(',')}' non utilisée(s) dans la structure`, tplPath);
        }
        // Check structure: {xxx} patterns
        const strContent = readLatin1(strPath);
        const remainingFromStr = new Set(def.zones.map(z => z.id));
        const strZoneRegex = /\{([^}]+)\}/g;
        while ((m = strZoneRegex.exec(strContent)) !== null) {
            if (!zoneIds.has(m[1])) {
                this.warning('symbol', `Utilisation d'une zone '${m[1]}' non déclarée`, strPath);
            }
            else {
                remainingFromStr.delete(m[1]);
            }
        }
        if (remainingFromStr.size > 0) {
            this.warning('symbol', `Zone(s) '${Array.from(remainingFromStr).join(',')}' non utilisée(s) dans la structure`, strPath);
        }
        const hasContent = def.zones.some(z => z.isContent);
        if (!hasContent) {
            this.warning('symbol', "Le symbole ne comporte pas de zone de contenu", strPath);
        }
    }
    // ── Components ─────────────────────────────────────────────────────────────
    composants(inspector) {
        const components = inspector.listComponents();
        this.checkTypeDeclarations(inspector, 'component', components);
    }
    // ── Templates (models) ────────────────────────────────────────────────────
    templates(inspector, composantEnabled) {
        const models = inspector.listModels();
        this.checkTypeDeclarations(inspector, 'model', models);
        for (const def of models) {
            this.checkModel(def, composantEnabled);
        }
    }
    // ── Symbols ───────────────────────────────────────────────────────────────
    symboles(inspector) {
        const symbols = inspector.listSymbols();
        this.checkTypeDeclarations(inspector, 'symbol', symbols);
        for (const def of symbols) {
            this.checkSymbole(def);
        }
    }
    // ── Widgets ───────────────────────────────────────────────────────────────
    widgets(inspector) {
        const widgetsPath = inspector.getLgPath('widgets');
        const categoryJsonMap = {
            'blog': 'blog.json',
            'catalogue': 'catalogue.json',
            'site_web': 'cms.json',
            'compte': 'comptes.json',
            'commandes': 'commandes.json',
            'recherche': 'recherche.json',
            'communication': 'modules.json',
        };
        for (const [category, widgetList] of Object.entries(WIDGETS)) {
            const jsonFile = categoryJsonMap[category] ?? null;
            for (const [widgetName, widgetDef] of Object.entries(widgetList)) {
                // Alternates
                const aternateDirs = listSubdirs(nodePath.join(widgetsPath, category, widgetName)).map((dir) => (nodePath.join(widgetsPath, category, widgetName, dir)));
                const checkDirs = [nodePath.join(widgetsPath, category, widgetName), ...aternateDirs];
                for (const template of widgetDef.templates) {
                    const basePath = `widgets/${category}/${widgetName}/${template.name}`;
                    let isMasterTpl = true;
                    for (const dir of checkDirs) {
                        const fullPath = nodePath.join(dir, template.name);
                        if (isMasterTpl && !existsSync(fullPath)) { // not for alternates
                            if (template.required) {
                                this.error('widgets', 'Fichier introuvable', fullPath);
                            }
                            isMasterTpl = false;
                            continue;
                        }
                        isMasterTpl = false;
                        this.checkEncoding(fullPath);
                        const resolvedContent = this.resolveIncludes(fullPath, 0);
                        this.reportFilterIssues(resolvedContent, 'widgets', fullPath);
                        this.reportBlockIssues(resolvedContent, 'widgets', fullPath, jsonFile, basePath, null);
                    }
                }
            }
        }
    }
    modules(inspector) {
        const modulesPath = inspector.getLgPath('modules');
        for (const file of MANDATORY_MODULES) {
            const fullPath = nodePath.join(modulesPath, file);
            if (!existsSync(fullPath)) {
                this.error('widgets', 'Fichier introuvable', fullPath);
            }
            // TODO reportBlockIssues for modules
        }
    }
    socolCompatible(inspector) {
        const widgetsPath = inspector.getLgPath('widgets');
        const transporteursPath = nodePath.join(widgetsPath, 'commandes', 'livraison', 'transporteurs.html');
        if (existsSync(transporteursPath)) {
            const content = readLatin1(transporteursPath);
            if (!content.includes('retrait_magasin')) {
                this.warning('widgets', 'Liste des transporteurs incompatible avec socolissimo', transporteursPath);
            }
        }
        const paiementPath = nodePath.join(widgetsPath, 'commandes', 'paiement', 'index.html');
        if (existsSync(paiementPath)) {
            const content = readLatin1(paiementPath);
            if (!content.includes('transporteur_socolissimo')) {
                this.warning('widgets', 'Récapitulatif de paiement incompatible avec socolissimo', paiementPath);
            }
        }
    }
    // ── Optimization checks ───────────────────────────────────────────────────
    smallFiles(themePath) {
        const cssAndJs = walkFiles(themePath, ['.css', '.js']);
        for (const file of cssAndJs) {
            try {
                if (statSync(file).size <= 8) {
                    this.warning('optimization', 'Fichier vide', file);
                }
            }
            catch { /* skip */ }
        }
    }
    checkEscape(themePath) {
        const htmlFiles = walkFiles(themePath, ['.html']);
        const attrRegex = /(alt|title)="\{[^|]+\}"/;
        for (const file of htmlFiles) {
            try {
                const content = readLatin1(file);
                const lines = content.split('\n');
                lines.forEach((line, i) => {
                    if (attrRegex.test(line)) {
                        this.warning('optimization', "Une balise utilisée dans un attribut HTML devrait être filtrée avec \"|htmlentities\"", file, i + 1);
                    }
                });
            }
            catch { /* skip */ }
        }
        // Check templates and includes for variables that should NOT use htmlentities
        const templatesDir = nodePath.join(themePath, 'fr', 'templates');
        const includesDir = nodePath.join(themePath, 'fr', 'includes');
        const tplFiles = [
            ...(existsSync(templatesDir) ? walkFiles(templatesDir, ['.html']) : []),
            ...(existsSync(includesDir) ? walkFiles(includesDir, ['.html']) : []),
        ];
        const htmlentitiesRegex = /\{(title|metaDescription|metaKeywords)\|htmlentities\}/;
        for (const file of tplFiles) {
            try {
                const content = readLatin1(file);
                const lines = content.split('\n');
                lines.forEach((line, i) => {
                    if (htmlentitiesRegex.test(line)) {
                        this.warning('optimization', "La balise ne devrait pas être filtrée avec \"|htmlentities\"", file, i + 1);
                    }
                });
            }
            catch { /* skip */ }
        }
    }
    checkSourceMapping(frDir) {
        const allFiles = walkFiles(frDir, ['.css', '.js']);
        const sourceMapRegex = /\/\*+#\s*sourceMappingURL=/;
        for (const file of allFiles) {
            try {
                const content = readLatin1(file);
                const lines = content.split('\n');
                lines.forEach((line, i) => {
                    if (sourceMapRegex.test(line)) {
                        this.warning('optimization', "Détection d'une référence à un source map", file, i + 1);
                    }
                });
            }
            catch { /* skip */ }
        }
    }
    // ── Includes resolution ───────────────────────────────────────────────────
    /**
     * Reads `filePath`, replaces every {FILE "..."} tag with the content of the
     * referenced file (recursively), and reports errors for invalid/missing/cyclic
     * or too-deep includes. Returns the fully resolved content.
     */
    resolveIncludes(filePath, depth, ancestors = new Set()) {
        let content;
        try {
            content = readLatin1(filePath);
        }
        catch {
            return '';
        }
        const currentAncestors = new Set(ancestors);
        currentAncestors.add(filePath);
        const resolvedTheme = nodePath.resolve(this.themePath);
        const lines = content.split('\n');
        const resultLines = [];
        for (let i = 0; i < lines.length; i++) {
            const lineNo = i + 1;
            const line = lines[i];
            const re = /\{FILE\s+"([^"]+)"\}/g;
            let lastIndex = 0;
            let resultLine = '';
            let m;
            while ((m = re.exec(line)) !== null) {
                resultLine += line.slice(lastIndex, m.index);
                lastIndex = m.index + m[0].length;
                const rawPath = m[1];
                if (!rawPath.startsWith('/')) {
                    this.error('includes', `Chemin d'inclusion invalide (doit commencer par "/") : "${rawPath}"`, filePath, lineNo);
                    continue;
                }
                const resolved = nodePath.resolve(nodePath.join(resolvedTheme, rawPath));
                if (!resolved.startsWith(resolvedTheme + nodePath.sep)) {
                    this.error('includes', `Inclusion hors du thème interdite : "${rawPath}"`, filePath, lineNo);
                    continue;
                }
                if (!existsSync(resolved)) {
                    this.error('includes', `Fichier inclus introuvable : "${rawPath}"`, filePath, lineNo);
                    continue;
                }
                if (currentAncestors.has(resolved)) {
                    this.error('includes', `Inclusion cyclique détectée : "${rawPath}"`, filePath, lineNo);
                    continue;
                }
                if (depth >= 2) {
                    this.error('includes', `Profondeur d'inclusion dépassée (maximum 2 niveaux)`, filePath, lineNo);
                    continue;
                }
                resultLine += this.resolveIncludes(resolved, depth + 1, currentAncestors);
            }
            resultLine += line.slice(lastIndex);
            resultLines.push(resultLine);
        }
        return resultLines.join('\n');
    }
    // ── Main entry point ──────────────────────────────────────────────────────
    run(inspector) {
        const path = inspector.getPath();
        this.themePath = path;
        this.issues = [];
        if (!existsSync(path) || !statSync(path).isDirectory()) {
            this.error('config', 'Thème introuvable');
            return { issues: this.issues, hasErrors: true };
        }
        // Config
        this.smallFiles(path);
        this.themeDescription(inspector);
        // Composants
        let composantEnabled = false;
        const composantsDir = nodePath.join(path, 'fr', 'composants');
        if (existsSync(composantsDir)) {
            composantEnabled = true;
            this.composants(inspector);
        }
        else {
            this.warning('component', "Aucun type de composant", nodePath.join(path, 'composants'));
        }
        // Symboles
        const symbolesDir = nodePath.join(path, 'fr', 'symboles');
        if (existsSync(symbolesDir)) {
            composantEnabled = true;
            this.symboles(inspector);
        }
        else {
            this.warning('symbol', "Aucun modèle de symboles", nodePath.join(path, 'symboles'));
        }
        // Templates
        const templatesDir = nodePath.join(path, 'fr', 'templates');
        if (existsSync(templatesDir)) {
            this.templates(inspector, composantEnabled);
        }
        else {
            this.error('model', "Dossier manquant", nodePath.join(path, 'templates'));
        }
        // Types de billets CMS
        const billetsDir = nodePath.join(path, 'fr', 'billets');
        if (existsSync(billetsDir)) {
            this.checkTypeDeclarations(inspector, 'cms', inspector.listCms());
        }
        else {
            this.error('cms', "Dossier manquant", nodePath.join(path, 'billets'));
        }
        // Types de produits
        const produitsDir = nodePath.join(path, 'fr', 'produits');
        if (existsSync(produitsDir)) {
            this.checkTypeDeclarations(inspector, 'product', inspector.listProducts());
        }
        else {
            this.error('product', "Dossier manquant", nodePath.join(path, 'produits'));
        }
        // Types de billets blog (optional)
        const billetsBlogDir = nodePath.join(path, 'fr', 'billets_blog');
        if (existsSync(billetsBlogDir)) {
            this.checkTypeDeclarations(inspector, 'blog', inspector.listBlogs());
        }
        else {
            this.warning('blog', "Dossier manquant", nodePath.join(path, 'fr', 'billets_blog'));
        }
        // Widgets
        const widgetsDir = nodePath.join(path, 'fr', 'widgets');
        if (existsSync(widgetsDir)) {
            this.widgets(inspector);
            this.modules(inspector);
            this.socolCompatible(inspector);
        }
        else {
            this.error('widgets', "Dossier manquant", widgetsDir);
        }
        // Optimisation
        this.checkEscape(path);
        this.checkSourceMapping(nodePath.join(path, 'fr'));
        return {
            issues: this.issues,
            hasErrors: this.issues.some(i => i.level === 'error'),
        };
    }
}
