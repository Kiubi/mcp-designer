import { statSync } from 'node:fs';
import * as nodePath from 'node:path';
import { ThemeInspector } from './inspector.ts';

const VALID_LANG = /^[a-z]{2}$/;

function isDir(path: string): boolean {
    try {
        return statSync(path).isDirectory();
    } catch {
        return false;
    }
}

export function isLangValid(lang: string): boolean {
    return VALID_LANG.test(lang);
}

// Résout la liste des langues cibles pour un thème : dossiers de 2 lettres à la racine
// (défaut) ou sous-ensemble validé/dédupliqué si `lang` est précisé.
export function resolveLangs(themePath: string, lang: string[] | null | undefined): string[] | { error: string } {
    if (!lang || lang.length === 0) {
        const found = ThemeInspector.listThemeLangs(themePath);
        if (found.length === 0) {
            return { error: `aucun dossier de langue (2 lettres) trouvé à la racine du thème.` };
        }
        return found;
    }

    const deduped = [...new Set(lang)];
    const invalid = deduped.filter(l => !isLangValid(l));
    if (invalid.length > 0) {
        return { error: `code(s) de langue invalide(s) : ${invalid.map(l => `"${l}"`).join(', ')} (2 lettres minuscules attendues, ex. "fr").` };
    }

    const missing = deduped.filter(l => !isDir(nodePath.join(themePath, l)));
    if (missing.length > 0) {
        return { error: `dossier(s) de langue introuvable(s) à la racine du thème : ${missing.join(', ')}.` };
    }

    return deduped;
}
