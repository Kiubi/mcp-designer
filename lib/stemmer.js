const SUFFIX_RULES = [
    ["eaux", "eau", 5], // "beaux" → "beau"
    ["aux", "al", 5], // "locaux" → "local"
    ["issements", "", 11], // "établissements" → "établi"
    ["issement", "", 10], // "établissement" → "établi"
    ["ements", "", 9], // "traitements" → "traite"
    ["ement", "", 8], // "traitement" → "traite"
    ["ations", "", 9], // "configurations" → "configur"
    ["ation", "", 8], // "configuration" → "configur"
    ["ités", "", 7], // "fiabilités" → "fiabl"
    ["ité", "", 6], // "fiabilité" → "fiabl"
    ["eurs", "", 7], // "valeurs" → "val"
    ["eur", "", 6], // "valeur" → "val"
    ["s", "", 4], // "blocs" → "bloc", "templates" → "template"
    ["x", "", 4], // "voix" → "voi"
];
export function normalize(text) {
    return text
        .normalize("NFD")
        .replace(/\p{Mn}/gu, "")
        .toLowerCase();
}
export function stem(word) {
    for (const [suffix, replacement, minLen] of SUFFIX_RULES) {
        if (word.length >= minLen && word.endsWith(suffix)) {
            return word.slice(0, word.length - suffix.length) + replacement;
        }
    }
    return word;
}
