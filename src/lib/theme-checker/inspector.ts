import { readdirSync, statSync, existsSync } from 'node:fs';
import * as nodePath from 'node:path';
import { parseThemeXml } from './parsers/theme-xml.ts';
import { parseSymbolXml } from './parsers/symbol-xml.ts';
import { parseModelXml } from './parsers/model-xml.ts';
import { parseComponentXml } from './parsers/component-xml.ts';
import { parsePostTypeXml } from './parsers/post-type-xml.ts';
import type {
    ThemeType,
    ThemeDesc,
    TypeDefinition,
    ModelDef,
    SymbolDef,
    ComponentDef,
    PostTypeDef,
    ParseResult,
} from './types.ts';

const VALID_NAME = /^[a-zA-Z0-9_-]{1,40}$/;
const VALID_LANG = /^[a-z]{2}$/;

type TypeConfig = {
    subdir: string;
    descriptor: string;
    parse: (dir: string, id: string) => ParseResult<TypeDefinition>;
};

const TYPE_CONFIGS: Record<ThemeType, TypeConfig> = {
    model: {
        subdir: '/templates/',
        descriptor: 'desc.xml',
        parse: (dir, id) => parseModelXml(dir, id),
    },
    symbol: {
        subdir: '/symboles/',
        descriptor: 'desc.xml',
        parse: (dir, id) => parseSymbolXml(dir, id),
    },
    component: {
        subdir: '/composants/',
        descriptor: 'config.xml',
        parse: (dir, id) => parseComponentXml(dir, id),
    },
    cms: {
        subdir: '/billets/',
        descriptor: 'config.xml',
        parse: (dir, id) => parsePostTypeXml(dir, id, 'cms'),
    },
    blog: {
        subdir: '/billets_blog/',
        descriptor: 'config.xml',
        parse: (dir, id) => parsePostTypeXml(dir, id, 'blog'),
    },
    product: {
        subdir: '/produits/',
        descriptor: 'config.xml',
        parse: (dir, id) => parsePostTypeXml(dir, id, 'product'),
    },
};

function listSubdirs(dir: string): string[] {
    try {
        return readdirSync(dir).filter(name => {
            try {
                return statSync(nodePath.join(dir, name)).isDirectory();
            } catch {
                return false;
            }
        });
    } catch {
        return [];
    }
}

export class ThemeInspector {
    private readonly themePath: string;
    private readonly lg: string;
    private cacheTypes = new Map<ThemeType, TypeDefinition[]>();
    private cacheTypeErrors = new Map<ThemeType, { id: string; error: string }[]>();
    private cacheDesc: ThemeDesc | null | undefined = undefined;
    private cacheDescError: string | null = null;

    constructor(themePath: string, lang: string = 'fr') {
        this.themePath = themePath;
        this.lg = lang;
    }

    // Liste les dossiers de langue (2 lettres minuscules) à la racine du thème
    static listThemeLangs(themePath: string): string[] {
        return listSubdirs(themePath).filter(name => VALID_LANG.test(name)).sort();
    }

    getPath(): string {
        return this.themePath;
    }

    getLgPath(subdir: string = ''): string {
        return nodePath.join(this.themePath, this.lg, subdir);
    }
    
    getRelLgPath(subdir: string = ''): string {
        return nodePath.join(this.lg, subdir);
    }

    getDescription(): ThemeDesc | null {
        if (this.cacheDesc !== undefined) return this.cacheDesc;
        const xmlPath = nodePath.join(this.themePath, 'theme.xml');
        if (!existsSync(xmlPath)) {
            this.cacheDesc = null;
        } else {
            const result = parseThemeXml(xmlPath);
            this.cacheDesc = result.definition;
            this.cacheDescError = result.error;
        }
        return this.cacheDesc;
    }

    getDescriptionError(): string | null {
        return this.cacheDescError;
    }

    private listTypes(type: ThemeType): TypeDefinition[] {
        const cached = this.cacheTypes.get(type);
        if (cached !== undefined) return cached;

        const config = TYPE_CONFIGS[type];
        const basePath = nodePath.join(this.themePath, this.lg, config.subdir);
        const dirs = listSubdirs(basePath);

        const items: TypeDefinition[] = [];
        const errors: { id: string; error: string }[] = [];
        for (const dir of dirs) {
            if (!VALID_NAME.test(dir)) continue;
            const fullDir = nodePath.join(basePath, dir);
            if (!existsSync(nodePath.join(fullDir, config.descriptor))) continue;
            const result = config.parse(fullDir, dir);
            if (result.definition !== null) {
                items.push(result.definition);
            } else {
                errors.push({ id: dir, error: result.error });
            }
        }

        this.cacheTypes.set(type, items);
        this.cacheTypeErrors.set(type, errors);
        return items;
    }

    getTypeErrors(type: ThemeType): { id: string; error: string }[] {
        if (!this.cacheTypeErrors.has(type)) this.listTypes(type);
        return this.cacheTypeErrors.get(type) ?? [];
    }

    listModels(): ModelDef[] {
        return this.listTypes('model') as ModelDef[];
    }

    listSymbols(): SymbolDef[] {
        return this.listTypes('symbol') as SymbolDef[];
    }

    listComponents(): ComponentDef[] {
        return this.listTypes('component') as ComponentDef[];
    }

    listCms(): PostTypeDef[] {
        return this.listTypes('cms') as PostTypeDef[];
    }

    listBlogs(): PostTypeDef[] {
        return this.listTypes('blog') as PostTypeDef[];
    }

    listProducts(): PostTypeDef[] {
        return this.listTypes('product') as PostTypeDef[];
    }

    getRequiredFilesForType(type: ThemeType): string[] {
        switch (type) {
            case 'component': return ['index.html', 'config.xml'];
            case 'blog': return ['config.xml'];
            case 'cms': return ['index.html', 'config.xml'];
            case 'symbol': return ['index.html', 'desc.xml', 'structure.xhtml'];
            case 'product': return ['index.html', 'config.xml'];
            case 'model': return ['index.html', 'desc.xml', 'structure.xhtml'];
        }
    }

    getTypeSubdir(type: ThemeType): string {
        return TYPE_CONFIGS[type].subdir;
    }
}

