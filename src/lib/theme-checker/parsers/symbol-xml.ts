import { readFileSync, statSync } from 'node:fs';
import * as nodePath from 'node:path';
import { XMLParser } from 'fast-xml-parser';
import type { SymbolDef, ZoneDef, FieldDef, OptionDef, ParseResult } from '../types.ts';

const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    textNodeName: '#text',
    isArray: (name: string) => ['zone', 'champ', 'option'].includes(name),
    transformTagName: (name: string) => name.toLowerCase(),
    transformAttributeName: (name: string) => name.toUpperCase(),
});

const s = (v: unknown): string => v != null ? String(v) : '';

const MAX_FIELDS = 20;
const ALLOWED_COLMAX = ['1', '2', '2d', '2g', '3'];
const VALID_FIELD_NAME = /^([a-zA-Z0-9_]{1,40})$/;
const ALLOWED_TYPES = new Set([
    'text', 'textarea', 'image', 'wysiwyg', 'select', 'checkbox', 'color', 'date', 'datetime', 'file',
]);

function parseFieldType(raw: string): string {
    if (raw === 'fichier') return 'file';
    return ALLOWED_TYPES.has(raw) ? raw : 'text';
}

function toArray(v: unknown): Record<string, unknown>[] {
    if (Array.isArray(v)) return v as Record<string, unknown>[];
    if (v) return [v as Record<string, unknown>];
    return [];
}

function parseZones(zonesEl: Record<string, unknown>): { zones: ZoneDef[]; defaultContentZone: string | null } {
    const rawZones: Record<string, unknown>[] = Array.isArray(zonesEl.zone)
        ? zonesEl.zone as Record<string, unknown>[]
        : (zonesEl.zone ? [zonesEl.zone as Record<string, unknown>] : []);

    const zones: ZoneDef[] = [];
    const seenIds = new Set<string>();

    for (const z of rawZones) {
        const id = s(z.ID).trim();
        if (!id || seenIds.has(id)) continue;
        seenIds.add(id);
        const colmax = ALLOWED_COLMAX.includes(s(z.COLMAX)) ? s(z.COLMAX) : '1';
        const defaut = ALLOWED_COLMAX.includes(s(z.DEFAUT)) ? s(z.DEFAUT) : '1';
        zones.push({
            id,
            isContent: s(z.TYPE).toUpperCase() === 'CONTENU',
            colmax,
            name: s(z.INTITULE),
            defaut,
        });
    }

    // Resolve default content zone
    const defautId = s(zonesEl.DEFAUT);
    let defaultContentZone: string | null = null;
    let firstContent: string | null = null;

    for (const z of zones) {
        if (z.id === defautId) {
            z.isContent = true;
            defaultContentZone = z.id;
            break;
        }
        if (z.isContent && firstContent === null) {
            firstContent = z.id;
        }
    }

    if (defaultContentZone === null && firstContent !== null) {
        defaultContentZone = firstContent;
    }

    return { zones, defaultContentZone };
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

export function parseSymbolXml(dir: string, id: string): ParseResult<SymbolDef> {
    try {
        const filePath = nodePath.join(dir, 'desc.xml');
        const stat = statSync(filePath);
        if (stat.size > 10 * 1024) return { definition: null, error: 'Fichier trop volumineux (> 10 Ko)' };
        const content = readFileSync(filePath, 'latin1');
        const doc = parser.parse(content);
        const symbole = doc?.symbole;
        if (!symbole) return { definition: null, error: 'Balise <symbole> manquante' };

        const zonesEl = symbole.zones as Record<string, unknown> | undefined;
        const { zones } = zonesEl ? parseZones(zonesEl) : { zones: [] };

        const listechampsEl = symbole.listechamps as Record<string, unknown> | undefined;
        const fields = listechampsEl ? parseFields(toArray(listechampsEl.champ)) : [];
        
        // ensure title field
        if (!fields.some(f => f.field === 'title')) {
            fields.push({ field: 'title', name: 'Titre', type: 'text', default: null, help: '' });
        }

        return {
            definition: {
                id,
                tpl: nodePath.join(dir, 'index.html'),
                structure: nodePath.join(dir, 'structure.xhtml'),
                zones,
                fields,
                name: s(symbole.INTITULE),
                position: parseInt(s(symbole.TRI), 10) || 0,
            },
            error: null,
        };
    } catch {
        return { definition: null, error: 'Impossible de lire ou parser le fichier' };
    }
}
