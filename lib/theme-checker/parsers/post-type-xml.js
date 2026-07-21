import { readFileSync, statSync } from 'node:fs';
import * as nodePath from 'node:path';
import { XMLParser } from 'fast-xml-parser';
const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    textNodeName: '#text',
    isArray: (name) => ['champ', 'option'].includes(name),
    transformTagName: (name) => name.toLowerCase(),
    transformAttributeName: (name) => name.toUpperCase(),
});
const s = (v) => v != null ? String(v) : '';
// Field name validators by post kind
const FIELD_NAME_VALIDATORS = {
    cms: /^(titre|sstitre|texte[0-9]+)$/,
    blog: /^(texte[a-z0-9]*)$/,
    product: /^(texte[a-z0-9]*)$/,
};
const ALLOWED_TYPES = new Set([
    'text', 'textarea', 'image', 'fichier', 'wysiwyg', 'select', 'checkbox', 'color', 'date', 'datetime',
]);
export function parsePostTypeXml(dir, id, kind) {
    try {
        const filePath = nodePath.join(dir, 'config.xml');
        const stat = statSync(filePath);
        if (stat.size > 10 * 1024)
            return { definition: null, error: 'Fichier trop volumineux (> 10 Ko)' };
        const content = readFileSync(filePath, 'latin1');
        const doc = parser.parse(content);
        const type = doc?.type;
        if (!type)
            return { definition: null, error: 'Balise <type> manquante' };
        const validator = FIELD_NAME_VALIDATORS[kind];
        const fields = [];
        const champSource = type.listechamps ?? type;
        const rawChamps = Array.isArray(champSource.champ)
            ? champSource.champ
            : (champSource.champ ? [champSource.champ] : []);
        for (const c of rawChamps) {
            const champName = s(c.CHAMP);
            if (!validator.test(champName))
                return { definition: null, error: `Nom de champ invalide pour le type ${kind} : '${champName}'` };
            const fieldType = ALLOWED_TYPES.has(s(c.TYPE)) ? s(c.TYPE) : 'text';
            const help = s(c.AIDE).slice(0, 255);
            const name = s(c.INTITULE).slice(0, 255) || champName;
            const rawOptions = Array.isArray(c.option)
                ? c.option
                : (c.option ? [c.option] : []);
            const field = { field: champName, name, type: fieldType, help };
            if ((fieldType === 'select' || fieldType === 'checkbox') && rawOptions.length > 0) {
                const options = [];
                for (const o of rawOptions.slice(0, 100)) {
                    const isObj = o !== null && typeof o === 'object';
                    const label = isObj ? s(o['#text']) : s(o);
                    const value = isObj ? (s(o.VALUE) || label) : label;
                    if (!options.some(existing => existing.value === value)) {
                        options.push({ value, label: label || value });
                    }
                }
                field.options = options;
            }
            fields.push(field);
        }
        const def = {
            id,
            fields,
            name: s(type.desc),
            position: parseInt(s(type.TRI), 10) || 0,
        };
        // Only cms and product have a template
        if (kind !== 'blog') {
            def.tpl = nodePath.join(dir, 'index.html');
        }
        return { definition: def, error: null };
    }
    catch {
        return { definition: null, error: 'Impossible de lire ou parser le fichier' };
    }
}
