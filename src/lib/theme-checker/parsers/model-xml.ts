import { readFileSync, statSync } from 'node:fs';
import * as nodePath from 'node:path';
import { XMLParser } from 'fast-xml-parser';
import type { ModelDef, ZoneDef, ParseResult } from '../types.ts';

const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    textNodeName: '#text',
    isArray: (name: string) => name === 'zone',
    transformTagName: (name: string) => name.toLowerCase(),
    transformAttributeName: (name: string) => name.toUpperCase(),
});

const s = (v: unknown): string => v != null ? String(v) : '';

const ALLOWED_COLMAX = ['1', '2', '2d', '2g', '3'];

export function parseModelXml(dir: string, id: string): ParseResult<ModelDef> {
    try {
        const filePath = nodePath.join(dir, 'desc.xml');
        const stat = statSync(filePath);
        if (stat.size > 10 * 1024) return { definition: null, error: 'Fichier trop volumineux (> 10 Ko)' };
        const content = readFileSync(filePath, 'latin1');
        const doc = parser.parse(content);
        const modele = doc?.modele;
        if (!modele) return { definition: null, error: 'Balise <modele> manquante' };

        const zonesEl = modele.zones as Record<string, unknown> | undefined;
        const zones: ZoneDef[] = [];
        let defaultContentZone: string | null = null;

        if (zonesEl) {
            const rawZones: Record<string, unknown>[] = Array.isArray(zonesEl.zone)
                ? zonesEl.zone as Record<string, unknown>[]
                : (zonesEl.zone ? [zonesEl.zone as Record<string, unknown>] : []);

            const defautId = s(zonesEl.DEFAUT);
            const seenIds = new Set<string>();
            let firstContent: string | null = null;

            for (const z of rawZones) {
                const zoneId = s(z.ID).trim();
                if (!zoneId || seenIds.has(zoneId)) continue;
                seenIds.add(zoneId);
                const colmax = ALLOWED_COLMAX.includes(s(z.COLMAX)) ? s(z.COLMAX) : '1';
                const defaut = ALLOWED_COLMAX.includes(s(z.DEFAUT)) ? s(z.DEFAUT) : '1';
                const isContent = s(z.TYPE).toUpperCase() === 'CONTENU';
                zones.push({ id: zoneId, isContent, colmax, name: s(z.INTITULE), defaut });
                if (isContent && firstContent === null) firstContent = zoneId;
            }

            // Resolve default content zone (force is_content on DEFAUT zone)
            if (defautId) {
                const defautZone = zones.find(z => z.id === defautId);
                if (defautZone) {
                    defautZone.isContent = true;
                    defaultContentZone = defautZone.id;
                } else {
                    defaultContentZone = firstContent;
                }
            } else {
                defaultContentZone = firstContent;
            }
        }

        void defaultContentZone; // used for internal logic only

        return {
            definition: {
                id,
                tpl: nodePath.join(dir, 'index.html'),
                structure: nodePath.join(dir, 'structure.xhtml'),
                zones,
                name: s(modele.INTITULE),
            },
            error: null,
        };
    } catch {
        return { definition: null, error: 'Impossible de lire ou parser le fichier' };
    }
}
