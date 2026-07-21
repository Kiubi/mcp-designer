import { defineTool } from "../tool.js";
import { readFileSync, existsSync } from "node:fs";
const RULES_PATH = new URL("../../storage/documents/kiubi_ruleset.md", import.meta.url).pathname;
export function integrationRules() {
    if (!existsSync(RULES_PATH)) {
        return "Fichier de règles d'intégration introuvable.";
    }
    return readFileSync(RULES_PATH, "utf-8");
}
export const integrationRulesTool = defineTool({
    name: "ruleset",
    description: "Retourne les règles d'intégration du moteur de template Kiubi. " +
        "Contient la syntaxe des balises, les filtres disponibles et leurs contraintes d'utilisation. " +
        "À consulter pour valider ou générer des templates conformes.",
    inputSchema: {},
    handler: async () => {
        return {
            content: [{ type: "text", text: integrationRules() }],
        };
    },
});
