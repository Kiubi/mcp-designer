import { readFileSync, statSync } from 'node:fs';
import * as nodePath from 'node:path';
import { XMLParser } from 'fast-xml-parser';
import type { ComponentDef, FieldDef, OptionDef, ParseResult } from '../types.ts';

const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    textNodeName: '#text',
    isArray: (name: string) => ['champ', 'option'].includes(name),
    transformTagName: (name: string) => name.toLowerCase(),
    transformAttributeName: (name: string) => name.toUpperCase(),
});

const s = (v: unknown): string => v != null ? String(v) : '';

const MAX_FIELDS = 20;
const VALID_FIELD_NAME = /^([a-zA-Z0-9_]{1,40})$/;
const ALLOWED_TYPES = new Set([
    'text', 'textarea', 'image', 'wysiwyg', 'select', 'checkbox', 'color', 'date', 'datetime', 'file',
]);

function parseFieldType(raw: string): string {
    if (raw === 'fichier') return 'file';
    return ALLOWED_TYPES.has(raw) ? raw : 'text';
}

function parseFields(rawChamps: Record<string, unknown>[]): FieldDef[] {
    const fields: FieldDef[] = [];
    const seenNames = new Set<string>();

    for (const c of rawChamps) {
        const name = s(c.CHAMP);
        if (!VALID_FIELD_NAME.test(name)) continue;
        if (seenNames.has(name)) continue;
        if (fields.length >= MAX_FIELDS) break;

        const type = parseFieldType(s(c.TYPE));
        seenNames.add(name);

        const rawOptions: Record<string, unknown>[] = Array.isArray(c.option)
            ? c.option as Record<string, unknown>[]
            : (c.option ? [c.option as Record<string, unknown>] : []);

        const options: OptionDef[] = [];
        for (const o of (rawOptions as unknown[]).slice(0, 100)) {
            const isObj = o !== null && typeof o === 'object';
            const label = isObj ? s((o as Record<string, unknown>)['#text']) : s(o);
            const value = isObj ? (s((o as Record<string, unknown>).VALUE) || label) : label;
            if (!options.some(existing => existing.value === value)) {
                options.push({ value, label: label || value });
            }
        }

        let defaultVal: string | null = s(c.DEFAUT) || null;
        if (type === 'image' || type === 'file') defaultVal = null;
        if (type === 'select' && defaultVal !== null && !options.some(o => o.value === defaultVal)) defaultVal = null;

        const field: FieldDef = {
            field: name,
            name: s(c.INTITULE).slice(0, 80) || name,
            type,
            default: defaultVal,
            help: s(c.AIDE).slice(0, 255),
        };
        if (type === 'select' || type === 'checkbox') field.options = options;
        fields.push(field);
    }

    return fields;
}

function toArray(v: unknown): Record<string, unknown>[] {
    if (Array.isArray(v)) return v as Record<string, unknown>[];
    if (v) return [v as Record<string, unknown>];
    return [];
}

function ensureTitleField(fields: FieldDef[]): void {
    if (!fields.some(f => f.field === 'title')) {
        fields.push({ field: 'title', name: 'Titre', type: 'text', default: null, help: '' });
    }
}

export function parseComponentXml(dir: string, id: string): ParseResult<ComponentDef> {
    try {
        const filePath = nodePath.join(dir, 'config.xml');
        const stat = statSync(filePath);
        if (stat.size > 10 * 1024) return { definition: null, error: 'Fichier trop volumineux (> 10 Ko)' };
        const content = readFileSync(filePath, 'latin1');
        const doc = parser.parse(content);
        const composant = doc?.composant;
        if (!composant) return { definition: null, error: 'Balise <composant> manquante' };

        const listechampsEl = composant.listechamps as Record<string, unknown> | undefined;
        const fields = listechampsEl ? parseFields(toArray(listechampsEl.champ)) : [];

        const collectionEl = composant.collection as Record<string, unknown> | undefined;
        const hasCollection = !!collectionEl;
        const collection = hasCollection ? parseFields(toArray(collectionEl!.champ)) : [];

        ensureTitleField(fields);
        if (hasCollection) ensureTitleField(collection);

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
    } catch {
        return { definition: null, error: 'Impossible de lire ou parser le fichier' };
    }
}
