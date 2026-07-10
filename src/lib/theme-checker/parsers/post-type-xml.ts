import { readFileSync, statSync } from 'node:fs';
import * as nodePath from 'node:path';
import { XMLParser } from 'fast-xml-parser';
import type { PostTypeDef, FieldDef, ParseResult } from '../types.ts';

const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    textNodeName: '#text',
    isArray: (name: string) => ['champ', 'option'].includes(name),
    transformTagName: (name: string) => name.toLowerCase(),
    transformAttributeName: (name: string) => name.toUpperCase(),
});

const s = (v: unknown): string => v != null ? String(v) : '';

// Field name validators by post kind
const FIELD_NAME_VALIDATORS: Record<string, RegExp> = {
    cms: /^(titre|sstitre|texte[0-9]+)$/,
    blog: /^(texte[a-z0-9]*)$/,
    product: /^(texte[a-z0-9]*)$/,
};

const ALLOWED_TYPES = new Set([
    'text', 'textarea', 'image', 'fichier', 'wysiwyg', 'select', 'checkbox', 'color', 'date', 'datetime',
]);

export function parsePostTypeXml(
    dir: string,
    id: string,
    kind: 'cms' | 'blog' | 'product',
): ParseResult<PostTypeDef> {
    try {
        const filePath = nodePath.join(dir, 'config.xml');
        const stat = statSync(filePath);
        if (stat.size > 10 * 1024) return { definition: null, error: 'Fichier trop volumineux (> 10 Ko)' };
        const content = readFileSync(filePath, 'latin1');
        const doc = parser.parse(content);
        const type = doc?.type;
        if (!type) return { definition: null, error: 'Balise <type> manquante' };

        const validator = FIELD_NAME_VALIDATORS[kind];
        const fields: FieldDef[] = [];
        const champSource = (type.listechamps as Record<string, unknown> | undefined) ?? type;
        const rawChamps: Record<string, unknown>[] = Array.isArray(champSource.champ)
            ? champSource.champ as Record<string, unknown>[]
            : (champSource.champ ? [champSource.champ as Record<string, unknown>] : []);

        for (const c of rawChamps) {
            const champName = s(c.CHAMP);
            if (!validator.test(champName)) return { definition: null, error: `Nom de champ invalide pour le type ${kind} : '${champName}'` };
            const fieldType = ALLOWED_TYPES.has(s(c.TYPE)) ? s(c.TYPE) : 'text';
            const help = s(c.AIDE).slice(0, 255);
            const name = s(c.INTITULE).slice(0, 255) || champName;

            const rawOptions: unknown[] = Array.isArray(c.option)
                ? c.option as unknown[]
                : (c.option ? [c.option] : []);

            const field: FieldDef = { field: champName, name, type: fieldType, help };
            if ((fieldType === 'select' || fieldType === 'checkbox') && rawOptions.length > 0) {
                const options: Array<{ value: string; label: string }> = [];
                for (const o of rawOptions.slice(0, 100)) {
                    const isObj = o !== null && typeof o === 'object';
                    const label = isObj ? s((o as Record<string, unknown>)['#text']) : s(o);
                    const value = isObj ? (s((o as Record<string, unknown>).VALUE) || label) : label;
                    if (!options.some(existing => existing.value === value)) {
                        options.push({ value, label: label || value });
                    }
                }
                field.options = options;
            }
            fields.push(field);
        }

        const def: PostTypeDef = {
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
    } catch {
        return { definition: null, error: 'Impossible de lire ou parser le fichier' };
    }
}
