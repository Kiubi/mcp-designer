import { z } from "zod";
import { defineTool } from "../tool.js";
import { ThemeInspector, ThemeChecker } from "#lib/theme-checker/index";
export function validateTheme({ themePath }) {
    const inspector = new ThemeInspector(themePath);
    const report = new ThemeChecker().run(inspector);
    return formatReport(report, themePath);
}
function formatReport(report, themePath) {
    if (report.issues.length === 0) {
        return `OK — aucun problème détecté dans le thème "${themePath}"`;
    }
    const byCategory = new Map();
    for (const issue of report.issues) {
        if (!byCategory.has(issue.category)) {
            byCategory.set(issue.category, { errors: [], warnings: [] });
        }
        const cat = byCategory.get(issue.category);
        if (issue.level === 'error')
            cat.errors.push(issue);
        else
            cat.warnings.push(issue);
    }
    const lines = [`Rapport de validation — ${themePath}`, ''];
    const totalErrors = report.issues.filter(i => i.level === 'error').length;
    const totalWarnings = report.issues.filter(i => i.level === 'warning').length;
    for (const [category, { errors, warnings }] of byCategory) {
        const parts = [];
        if (errors.length > 0)
            parts.push(`${errors.length} erreur${errors.length > 1 ? 's' : ''}`);
        if (warnings.length > 0)
            parts.push(`${warnings.length} avertissement${warnings.length > 1 ? 's' : ''}`);
        lines.push(`[${category.toUpperCase()}] — ${parts.join(', ')}`);
        for (const issue of errors) {
            const loc = issue.file ? `  ${issue.file}${issue.line ? `:${issue.line}` : ''}` : '';
            lines.push(`  ✗ ${issue.msg}${loc}`);
        }
        for (const issue of warnings) {
            const loc = issue.file ? `  ${issue.file}${issue.line ? `:${issue.line}` : ''}` : '';
            lines.push(`  ⚠ ${issue.msg}${loc}`);
        }
        lines.push('');
    }
    lines.push(`Total : ${totalErrors} erreur${totalErrors > 1 ? 's' : ''}, ${totalWarnings} avertissement${totalWarnings > 1 ? 's' : ''}`);
    return lines.join('\n');
}
export const validateThemeTool = defineTool({
    name: "validate_theme",
    description: "Vérifie la syntaxe et la cohérence de tous les fichiers du thème graphique",
    inputSchema: {
        themePath: z.string().min(1).describe("Chemin absolu vers le dossier racine du thème graphique"),
    },
    handler: async ({ themePath }) => {
        return {
            content: [{ type: "text", text: validateTheme({ themePath }) }],
        };
    }
});
