import { z } from "zod";
import { defineTool } from "../tool.ts";
import { ThemeInspector, ThemeChecker } from "#lib/theme-checker/index";
import type { ThemeReport, Issue } from "#lib/theme-checker/index";

export function validateTheme({ themePath }: { themePath: string }): string {
    const inspector = new ThemeInspector(themePath);
    const report = new ThemeChecker().run(inspector);
    return formatReport(report, themePath);
}

function formatReport(report: ThemeReport, themePath: string): string {
    if (report.issues.length === 0) {
        return `OK — aucun problème détecté dans le thème "${themePath}"`;
    }

    const byCategory = new Map<string, { errors: Issue[]; warnings: Issue[] }>();
    for (const issue of report.issues) {
        if (!byCategory.has(issue.category)) {
            byCategory.set(issue.category, { errors: [], warnings: [] });
        }
        const cat = byCategory.get(issue.category)!;
        if (issue.level === 'error') cat.errors.push(issue);
        else cat.warnings.push(issue);
    }

    const lines: string[] = [`Rapport de validation — ${themePath}`, ''];
    const totalErrors = report.issues.filter(i => i.level === 'error').length;
    const totalWarnings = report.issues.filter(i => i.level === 'warning').length;

    for (const [category, { errors, warnings }] of byCategory) {
        const parts: string[] = [];
        if (errors.length > 0) parts.push(`${errors.length} erreur${errors.length > 1 ? 's' : ''}`);
        if (warnings.length > 0) parts.push(`${warnings.length} avertissement${warnings.length > 1 ? 's' : ''}`);
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
            content: [{ type: "text" as const, text: validateTheme({ themePath }) }],
        };
    }
});
