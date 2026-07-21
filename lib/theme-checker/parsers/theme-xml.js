import { readFileSync, statSync } from 'node:fs';
import { XMLParser } from 'fast-xml-parser';
const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    textNodeName: '#text',
    isArray: (name) => name === 'variante',
    transformTagName: (name) => name.toLowerCase(),
    transformAttributeName: (name) => name.toUpperCase(),
});
const s = (v) => v != null ? String(v) : '';
const VALID_ETATS = ['production', 'incomplete', 'testing', 'deprecated'];
export function parseThemeXml(filePath) {
    try {
        const stat = statSync(filePath);
        if (stat.size > 5 * 1024)
            return { definition: null, error: 'Fichier trop volumineux (> 5 Ko)' };
        const content = readFileSync(filePath, 'latin1');
        const doc = parser.parse(content);
        const theme = doc?.theme;
        if (!theme)
            return { definition: null, error: 'Balise <theme> manquante' };
        // Validate etat
        const etatRaw = s(theme.ETAT).toLowerCase();
        let etat;
        if (!etatRaw) {
            etat = 'production';
        }
        else if (!VALID_ETATS.includes(etatRaw)) {
            return { definition: null, error: `Valeur ETAT invalide : '${etatRaw}'` };
        }
        else {
            etat = etatRaw;
        }
        // Parse img (reject invalid chars)
        const img = /[\\\/&#%]/.test(s(theme.IMG)) ? '' : s(theme.IMG);
        // Parse auteur
        const auteurRaw = theme.auteur;
        const auteur = auteurRaw ? {
            nom: s(auteurRaw.NOM),
            contact: s(auteurRaw.CONTACT),
            site: s(auteurRaw.SITE),
        } : undefined;
        // Parse apercu
        const apercuRaw = s(theme.apercu ?? theme['#text'] ?? '');
        const apercu = apercuRaw && !/^https?:\/\//.test(apercuRaw)
            ? 'http://' + apercuRaw
            : apercuRaw || undefined;
        // Parse variantes
        const variantes = [];
        const rawVariantes = Array.isArray(theme.variante)
            ? theme.variante
            : (theme.variante ? [theme.variante] : []);
        const seenIds = new Set();
        for (const v of rawVariantes) {
            const css = s(v.CSS).trim();
            const id = s(v.ID).trim();
            if (!css || !id)
                continue;
            if (id.length > 30 || seenIds.has(id))
                continue;
            if (/[\\]/.test(css))
                continue;
            const colorKeys = ['COLOR1', 'COLOR2', 'COLOR3', 'COLOR4'];
            if (!colorKeys.every(c => s(v[c]) && /^#[0-9a-f]+$/i.test(s(v[c]))))
                continue;
            if (variantes.length >= 30)
                break;
            seenIds.add(id);
            variantes.push({
                id,
                css,
                colors: {
                    color1: s(v.COLOR1),
                    color2: s(v.COLOR2),
                    color3: s(v.COLOR3),
                    color4: s(v.COLOR4),
                },
            });
        }
        return {
            definition: {
                name: s(theme.INTITULE),
                version: s(theme.VERSION) || undefined,
                date: s(theme.DATE) || undefined,
                etat,
                javascripts: s(theme.JAVASCRIPTS) === 'none' ? 'none' : 'kiubi',
                style: s(theme.STYLE) || undefined,
                img,
                auteur,
                apercu,
                variantes,
            },
            error: null,
        };
    }
    catch {
        return { definition: null, error: 'Impossible de lire ou parser le fichier' };
    }
}
