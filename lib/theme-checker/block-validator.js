import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const DEFINITIONS_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'storage', 'definitions');
const GLOBAL_TAGS = [
    'baseLangue',
    'racine',
    'cdn',
    'SOCIETE.societe_nom',
    'SOCIETE.societe_forme',
    'SOCIETE.societe_adresse',
    'SOCIETE.societe_cp',
    'SOCIETE.societe_ville',
    'SOCIETE.societe_tel',
    'SOCIETE.societe_mobile',
    'SOCIETE.societe_fax',
    'SOCIETE.societe_cnil',
    'SOCIETE.societe_capital',
    'SOCIETE.societe_siret',
    'SOCIETE.societe_rcs',
    'SOCIETE.societe_ape',
    'SOCIETE.societe_tva',
    'SOCIETE.societe_pays',
    'SOCIETE.contact_nom',
    'SOCIETE.contact_prenom',
    'SOCIETE.contact_email',
    'SOCIETE.contact_mail',
    'liste_domaines',
    'schema',
    'domaine',
    'num_jour_maintenant',
    'jour_semaine_maintenant',
    'num_mois_maintenant',
    'mois_maintenant',
    'mois_abrev_maintenant',
    'annee_maintenant',
    'heure_maintenant',
    'minute_maintenant',
    'seconde_maintenant',
    'timestamp_maintenant',
    'CLIENT.client_id',
    'CLIENT.num',
    'CLIENT.nom',
    'CLIENT.prenom',
    'CLIENT.genre',
    'CLIENT.email',
    'CLIENT.web',
    'CLIENT.pseudo',
    'CLIENT.avatar',
    'CLIENT.page_extranet',
    'CLIENT.groupe_extranet',
    'CLIENT.groupe_extranet_id',
    'API.actif',
    'illustration_pagecourante_g_miniature',
    'illustration_pagecourante_g_vignette',
    'illustration_pagecourante_vignette',
    'illustration_pagecourante_miniature',
    'illustration_pagecourante',
    'canonical',
    'contexte_pagecourante',
    'optim_pagecourante',
    'intitule_pagecourante',
    'lien_pagecourante',
    'lien_pageparente',
    'intitule_pageparente',
    'miniature_l',
    'miniature_h',
    'g_miniature_h',
    'g_miniature_l',
    'vignette_h',
    'vignette_l',
    'g_vignette_h',
    'g_vignette_l',
    'site_nom',
    'desc_site',
    'accroche_site',
    'devise',
    'devise_iso',
    'theme',
    'logo_site',
    'url_logo_site',
    'lg'
];
// ─── JSON normalisation ───────────────────────────────────────────────────────
function normalizeNode(raw) {
    const tags = Array.isArray(raw.tags) ? new Set() : new Set(Object.keys(raw.tags));
    const children = new Map();
    let hasWildcardChild = false;
    if (!Array.isArray(raw.children)) {
        for (const [k, v] of Object.entries(raw.children)) {
            if (k === 'xxx') {
                hasWildcardChild = true;
                continue;
            }
            children.set(k, normalizeNode(v));
        }
    }
    return { tags, children, hasWildcardChild };
}
// ─── Definition loading ───────────────────────────────────────────────────────
const defCache = new Map();
export function loadBlockDef(jsonFilename, targetBasePath) {
    const cacheKey = `${jsonFilename}::${targetBasePath}`;
    if (defCache.has(cacheKey)) {
        return defCache.get(cacheKey) ?? null;
    }
    const jsonPath = join(DEFINITIONS_DIR, jsonFilename);
    let result = null;
    try {
        if (!existsSync(jsonPath)) {
            defCache.set(cacheKey, null);
            return null;
        }
        const raw = JSON.parse(readFileSync(jsonPath, 'utf-8'));
        const entry = raw.find(e => e.basePath === targetBasePath);
        if (entry && entry.blocks && entry.blocks['main']) {
            const mainNode = normalizeNode(entry.blocks['main']);
            mainNode.tags = new Set([...mainNode.tags, ...GLOBAL_TAGS]); // add al global tags to main
            // Return a virtual root node that allows 'main' as the only top-level block
            result = {
                tags: new Set(),
                children: new Map([['main', mainNode]]),
                hasWildcardChild: false,
            };
        }
    }
    catch {
        result = null;
    }
    defCache.set(cacheKey, result);
    return result;
}
export function applyCustomFieldsDefinition(def, fields) {
    const mainNode = def.children.get('main');
    if (!mainNode)
        return def;
    // technicaly wrong, only valid for component. Should not be added for posts or product 
    const extraTags = [];
    for (const f of fields) {
        if (f.type === 'image') {
            extraTags.push(f.field + '_vignette', f.field + '_g_vignette', f.field + '_miniature', f.field + '_g_miniature');
        }
        else if (f.type === 'select') {
            extraTags.push(f.field + '_label');
        }
    }
    const newTags = new Set([...mainNode.tags, ...fields.map(f => f.field), ...extraTags]);
    const newChildren = new Map(mainNode.children);
    for (const f of fields) {
        if (!newChildren.has(f.field)) {
            newChildren.set(f.field, { tags: new Set(), children: new Map(), hasWildcardChild: false });
        }
    }
    const newMainNode = { tags: newTags, children: newChildren, hasWildcardChild: mainNode.hasWildcardChild };
    const newRoot = new Map(def.children);
    newRoot.set('main', newMainNode);
    return { tags: def.tags, children: newRoot, hasWildcardChild: def.hasWildcardChild };
}
export function applyCollectionDefinition(def, fields) {
    const mainNode = def.children.get('main');
    if (!mainNode)
        return def;
    const collectionNode = mainNode.children.get('collection');
    if (!collectionNode)
        return def;
    const itemNode = collectionNode.children.get('item');
    if (!itemNode)
        return def;
    const extraTags = [];
    for (const f of fields) {
        if (f.type === 'image') {
            extraTags.push(f.field + '_vignette', f.field + '_g_vignette', f.field + '_miniature', f.field + '_g_miniature');
        }
        else if (f.type === 'select') {
            extraTags.push(f.field + '_label');
        }
    }
    const newTags = new Set([...itemNode.tags, ...fields.map(f => f.field), ...extraTags]);
    const newChildren = new Map(itemNode.children);
    for (const f of fields) {
        if (!newChildren.has(f.field)) {
            newChildren.set(f.field, { tags: new Set(), children: new Map(), hasWildcardChild: false });
        }
    }
    const newItemNode = { tags: newTags, children: newChildren, hasWildcardChild: itemNode.hasWildcardChild };
    const newCollectionChildren = new Map(collectionNode.children);
    newCollectionChildren.set('item', newItemNode);
    const newCollectionNode = { tags: collectionNode.tags, children: newCollectionChildren, hasWildcardChild: collectionNode.hasWildcardChild };
    const newMainChildren = new Map(mainNode.children);
    newMainChildren.set('collection', newCollectionNode);
    const newMainNode = { tags: mainNode.tags, children: newMainChildren, hasWildcardChild: mainNode.hasWildcardChild };
    const newRoot = new Map(def.children);
    newRoot.set('main', newMainNode);
    return { tags: def.tags, children: newRoot, hasWildcardChild: def.hasWildcardChild };
}
// ─── Block validation ─────────────────────────────────────────────────────────
const BLOCK_RE = /<!--\s*BEGIN\s*:\s*(\w+)\s*-->|<!--\s*END\s*:\s*(\w+)\s*-->/g;
const TAG_RE = /\{([^|}]+)(?:\|[^}]*)?\}/g;
const IDENTIFIER_RE = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
export function validateBlocks(content, def) {
    const issues = [];
    const stack = [];
    let outsideDepth = 0; // profondeur d'imbrication hors du bloc "main" de premier niveau
    const lines = content.split('\n');
    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
        const line = lines[lineIdx];
        const lineNo = lineIdx + 1;
        const tokens = [];
        BLOCK_RE.lastIndex = 0;
        let m;
        while ((m = BLOCK_RE.exec(line)) !== null) {
            if (m[1])
                tokens.push({ kind: 'begin', name: m[1], index: m.index });
            else if (m[2])
                tokens.push({ kind: 'end', name: m[2], index: m.index });
        }
        TAG_RE.lastIndex = 0;
        while ((m = TAG_RE.exec(line)) !== null) {
            const tagName = m[1];
            if (!tagName.startsWith('ZONE.') && !tagName.startsWith('FILE ') && IDENTIFIER_RE.test(tagName)) {
                tokens.push({ kind: 'tag', name: tagName, index: m.index });
            }
        }
        tokens.sort((a, b) => a.index - b.index);
        for (const token of tokens) {
            if (token.kind === 'begin') {
                // Hors de main : blocs imbriqués dans un bloc non-main → incrémenter la profondeur
                if (outsideDepth > 0) {
                    outsideDepth++;
                    continue;
                }
                // À la racine (hors main) : ignorer tout bloc qui n'est pas "main"
                if (stack.length === 0 && token.name !== 'main') {
                    outsideDepth++;
                    continue;
                }
                const blockName = token.name;
                const parentDefNode = stack.length > 0 ? stack[stack.length - 1].defNode : def;
                const parentInherited = stack.length > 0 ? stack[stack.length - 1].inheritedTags : new Set();
                const parentTags = (stack.length > 0 ? stack[stack.length - 1].defNode?.tags : def?.tags) ?? new Set();
                let childDefNode = null;
                if (def !== null && parentDefNode !== null) {
                    if (!parentDefNode.children.has(blockName) && !parentDefNode.hasWildcardChild) {
                        const parentName = stack.length > 0 ? stack[stack.length - 1].blockName : 'racine';
                        issues.push({ level: 'error', msg: `Bloc "${blockName}" inconnu dans le contexte "${parentName}"`, line: lineNo });
                    }
                    else {
                        childDefNode = parentDefNode.children.get(blockName) ?? null;
                    }
                }
                const inheritedTags = new Set([...parentInherited, ...parentTags]);
                stack.push({ blockName, lineNo, defNode: childDefNode, inheritedTags });
            }
            else if (token.kind === 'end') {
                // Hors de main : décrémenter la profondeur
                if (outsideDepth > 0) {
                    outsideDepth--;
                    continue;
                }
                // END spurieux à la racine (avant ou après main) → ignorer
                if (stack.length === 0) {
                    continue;
                }
                const blockName = token.name;
                const top = stack[stack.length - 1];
                if (top.blockName === blockName) {
                    stack.pop();
                }
                else {
                    issues.push({ level: 'error', msg: `Croisement de blocs : "${blockName}" fermé avant "${top.blockName}" (ouvert ligne ${top.lineNo})`, line: lineNo });
                    stack.pop(); // force-close the wrong block for recovery
                }
            }
            else {
                // tag : ignorer si hors de main
                if (outsideDepth > 0 || stack.length === 0) {
                    continue;
                }
                const tagName = token.name;
                if (def !== null && stack.length > 0) {
                    const top = stack[stack.length - 1];
                    if (top.defNode !== null) {
                        const available = new Set([...top.inheritedTags, ...top.defNode.tags]);
                        if (!available.has(tagName)) {
                            issues.push({ level: 'warning', msg: `Balise "${tagName}" non déclarée dans ce contexte`, line: lineNo });
                        }
                    }
                }
            }
        }
    }
    // Report unclosed blocks
    for (const frame of stack) {
        issues.push({ level: 'error', msg: `Bloc "${frame.blockName}" ouvert ligne ${frame.lineNo} mais jamais fermé`, line: frame.lineNo });
    }
    return issues;
}
