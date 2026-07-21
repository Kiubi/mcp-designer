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
const MAX_FIELDS = 20;
const VALID_FIELD_NAME = /^([a-zA-Z0-9_]{1,40})$/;
const ALLOWED_TYPES = new Set([
    'text', 'textarea', 'image', 'wysiwyg', 'select', 'checkbox', 'color', 'date', 'datetime', 'file',
]);
function parseFieldType(raw) {
    if (raw === 'fichier')
        return 'file';
    return ALLOWED_TYPES.has(raw) ? raw : 'text';
}
function parseFields(rawChamps) {
    const fields = [];
    const seenNames = new Set();
    for (const c of rawChamps) {
        const name = s(c.CHAMP);
        if (!VALID_FIELD_NAME.test(name))
            continue;
        if (seenNames.has(name))
            continue;
        if (fields.length >= MAX_FIELDS)
            break;
        const type = parseFieldType(s(c.TYPE));
        seenNames.add(name);
        const rawOptions = Array.isArray(c.option)
            ? c.option
            : (c.option ? [c.option] : []);
        const options = [];
        for (const o of rawOptions.slice(0, 100)) {
            const isObj = o !== null && typeof o === 'object';
            const label = isObj ? s(o['#text']) : s(o);
            const value = isObj ? (s(o.VALUE) || label) : label;
            if (!options.some(existing => existing.value === value)) {
                options.push({ value, label: label || value });
            }
        }
        let defaultVal = s(c.DEFAUT) || null;
        if (type === 'image' || type === 'file')
            defaultVal = null;
        if (type === 'select' && defaultVal !== null && !options.some(o => o.value === defaultVal))
            defaultVal = null;
        const field = {
            field: name,
            name: s(c.INTITULE).slice(0, 80) || name,
            type,
            default: defaultVal,
            help: s(c.AIDE).slice(0, 255),
        };
        if (type === 'select' || type === 'checkbox')
            field.options = options;
        fields.push(field);
    }
    return fields;
}
function toArray(v) {
    if (Array.isArray(v))
        return v;
    if (v)
        return [v];
    return [];
}
function ensureTitleField(fields) {
    if (!fields.some(f => f.field === 'title')) {
        fields.push({ field: 'title', name: 'Titre', type: 'text', default: null, help: '' });
    }
}
export function parseComponentXml(dir, id) {
    try {
        const filePath = nodePath.join(dir, 'config.xml');
        const stat = statSync(filePath);
        if (stat.size > 10 * 1024)
            return { definition: null, error: 'Fichier trop volumineux (> 10 Ko)' };
        const content = readFileSync(filePath, 'latin1');
        const doc = parser.parse(content);
        const composant = doc?.composant;
        if (!composant)
            return { definition: null, error: 'Balise <composant> manquante' };
        const listechampsEl = composant.listechamps;
        const fields = listechampsEl ? parseFields(toArray(listechampsEl.champ)) : [];
        const collectionEl = composant.collection;
        const hasCollection = !!collectionEl;
        const collection = hasCollection ? parseFields(toArray(collectionEl.champ)) : [];
        ensureTitleField(fields);
        if (hasCollection)
            ensureTitleField(collection);
        return {
            definition: {
                id,
                tpl: nodePath.join(dir, 'index.html'),
                name: s(composant.INTITULE),
                position: parseInt(s(composant.TRI), 10) || 0,
                fields,
                collection,
                hasCollection,
            },
            error: null,
        };
    }
    catch {
        return { definition: null, error: 'Impossible de lire ou parser le fichier' };
    }
}
