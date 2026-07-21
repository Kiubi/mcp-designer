// Définitions des filtres : min/max arguments acceptés
const FILTER_DEFS = {
    ucfirst: { min: 0, max: 0 },
    strtoupper: { min: 0, max: 0 },
    strtolower: { min: 0, max: 0 },
    sanitize: { min: 0, max: 0 },
    escapejson: { min: 0, max: 0 },
    htmlentities: { min: 0, max: 1 },
    rawurlencode: { min: 0, max: 1 },
    left: { min: 1, max: 1 },
    striptext: { min: 1, max: 1 },
    mot: { min: 1, max: 1 },
    alternate: { min: 1, max: 1 },
    formatfloat: { min: 1, max: 1 },
    date: { min: 1, max: 1 },
    mapvalue: { min: 1, max: 2 },
    empty: { min: 2, max: 2 },
    slice: { min: 3, max: 3 },
};
const DATE_ARGS = new Set([
    'annee', 'num_mois', 'num_jour', 'mois', 'mois_abrev',
    'jour_semaine', 'heure', 'minute', 'seconde',
]);
const NUMERIC_FILTER_ARGS = new Set(['left', 'striptext', 'mot', 'alternate', 'formatfloat']);
/**
 * Valide les filtres de balises Kiubi dans un contenu HTML.
 * Détecte : espaces dans la balise, filtre inconnu, mauvais nombre d'arguments,
 * arguments invalides (non numérique, non-ASCII pour mapValue, etc.).
 */
export function validateFilters(content) {
    const issues = [];
    const lines = content.split('\n');
    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
        const line = lines[lineIdx];
        const lineNo = lineIdx + 1;
        const re = /\{([^}]+)\}/g;
        let m;
        while ((m = re.exec(line)) !== null) {
            const inner = m[1];
            // Ignorer les includes {FILE "..."} et les zones {ZONE.xxx}
            if (inner.startsWith('FILE ') || inner.startsWith('ZONE.'))
                continue;
            // Ignorer les balises sans filtre
            if (!inner.includes('|'))
                continue;
            // 1. Espace interdit dans une balise filtrée
            if (/\s/.test(inner)) {
                issues.push({
                    level: 'error',
                    msg: `Espace interdit dans la balise filtrée : {${inner}}`,
                    line: lineNo,
                });
                continue;
            }
            const parts = inner.split('|');
            // parts[0] = nom de la balise, parts[1] = filtre, parts[2..] = arguments
            if (parts.length < 2)
                continue;
            const filterRaw = parts[1];
            const filterKey = filterRaw.toLowerCase();
            const args = parts.slice(2);
            // 2. Filtre inconnu
            if (!(filterKey in FILTER_DEFS)) {
                issues.push({
                    level: 'error',
                    msg: `Filtre inconnu : '${filterRaw}'`,
                    line: lineNo,
                });
                continue;
            }
            const def = FILTER_DEFS[filterKey];
            // 3. Nombre d'arguments incorrect
            if (args.length < def.min) {
                issues.push({
                    level: 'error',
                    msg: `Le filtre '${filterRaw}' requiert au moins ${def.min} argument(s), ${args.length} fourni(s)`,
                    line: lineNo,
                });
                continue;
            }
            if (args.length > def.max) {
                issues.push({
                    level: 'error',
                    msg: `Le filtre '${filterRaw}' accepte au plus ${def.max} argument(s), ${args.length} fourni(s)`,
                    line: lineNo,
                });
                continue;
            }
            // 4. Validations spécifiques par filtre
            if ((filterKey === 'htmlentities' || filterKey === 'rawurlencode') && args.length === 1 && args[0] !== 'utf8') {
                issues.push({
                    level: 'error',
                    msg: `Argument invalide pour '${filterRaw}' : '${args[0]}' (seul 'utf8' est accepté)`,
                    line: lineNo,
                });
            }
            if (NUMERIC_FILTER_ARGS.has(filterKey) && !/^\d+$/.test(args[0])) {
                issues.push({
                    level: 'error',
                    msg: `Le filtre '${filterRaw}' requiert un argument numérique, '${args[0]}' fourni`,
                    line: lineNo,
                });
            }
            if (filterKey === 'date' && !DATE_ARGS.has(args[0])) {
                issues.push({
                    level: 'error',
                    msg: `Argument invalide pour 'date' : '${args[0]}' (valeurs : annee, num_mois, num_jour, mois, mois_abrev, jour_semaine, heure, minute, seconde)`,
                    line: lineNo,
                });
            }
            if (filterKey === 'mapvalue') {
                for (const arg of args) {
                    if (/[^\x20-\x7E]/.test(arg)) {
                        issues.push({
                            level: 'error',
                            msg: `Caractère non autorisé dans les arguments de 'mapValue' : '${arg}'`,
                            line: lineNo,
                        });
                    }
                }
            }
            if (filterKey === 'slice') {
                if (!['-', '_', 'space'].includes(args[0])) {
                    issues.push({
                        level: 'error',
                        msg: `Séparateur invalide pour 'slice' : '${args[0]}' (attendu : '-', '_' ou 'space')`,
                        line: lineNo,
                    });
                }
                if (!/^\d+$/.test(args[1]) || !/^\d+$/.test(args[2])) {
                    issues.push({
                        level: 'error',
                        msg: `Les positions de 'slice' (start, length) doivent être numériques`,
                        line: lineNo,
                    });
                }
            }
        }
    }
    return issues;
}
