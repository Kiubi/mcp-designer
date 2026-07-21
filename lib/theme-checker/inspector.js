import { readdirSync, statSync, existsSync } from 'node:fs';
import * as nodePath from 'node:path';
import { parseThemeXml } from "./parsers/theme-xml.js";
import { parseSymbolXml } from "./parsers/symbol-xml.js";
import { parseModelXml } from "./parsers/model-xml.js";
import { parseComponentXml } from "./parsers/component-xml.js";
import { parsePostTypeXml } from "./parsers/post-type-xml.js";
const VALID_NAME = /^[a-zA-Z0-9_-]{1,40}$/;
const VALID_LANG = /^[a-z]{2}$/;
const TYPE_CONFIGS = {
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
function listSubdirs(dir) {
    try {
        return readdirSync(dir).filter(name => {
            try {
                return statSync(nodePath.join(dir, name)).isDirectory();
            }
            catch {
                return false;
            }
        });
    }
    catch {
        return [];
    }
}
export class ThemeInspector {
    themePath;
    lg;
    cacheTypes = new Map();
    cacheTypeErrors = new Map();
    cacheDesc = undefined;
    cacheDescError = null;
    constructor(themePath, lang = 'fr') {
        this.themePath = themePath;
        this.lg = lang;
    }
    // Liste les dossiers de langue (2 lettres minuscules) à la racine du thème
    static listThemeLangs(themePath) {
        return listSubdirs(themePath).filter(name => VALID_LANG.test(name)).sort();
    }
    getPath() {
        return this.themePath;
    }
    getLgPath(subdir = '') {
        return nodePath.join(this.themePath, this.lg, subdir);
    }
    getRelLgPath(subdir = '') {
        return nodePath.join(this.lg, subdir);
    }
    getDescription() {
        if (this.cacheDesc !== undefined)
            return this.cacheDesc;
        const xmlPath = nodePath.join(this.themePath, 'theme.xml');
        if (!existsSync(xmlPath)) {
            this.cacheDesc = null;
        }
        else {
            const result = parseThemeXml(xmlPath);
            this.cacheDesc = result.definition;
            this.cacheDescError = result.error;
        }
        return this.cacheDesc;
    }
    getDescriptionError() {
        return this.cacheDescError;
    }
    listTypes(type) {
        const cached = this.cacheTypes.get(type);
        if (cached !== undefined)
            return cached;
        const config = TYPE_CONFIGS[type];
        const basePath = nodePath.join(this.themePath, this.lg, config.subdir);
        const dirs = listSubdirs(basePath);
        const items = [];
        const errors = [];
        for (const dir of dirs) {
            if (!VALID_NAME.test(dir))
                continue;
            const fullDir = nodePath.join(basePath, dir);
            if (!existsSync(nodePath.join(fullDir, config.descriptor)))
                continue;
            const result = config.parse(fullDir, dir);
            if (result.definition !== null) {
                items.push(result.definition);
            }
            else {
                errors.push({ id: dir, error: result.error });
            }
        }
        this.cacheTypes.set(type, items);
        this.cacheTypeErrors.set(type, errors);
        return items;
    }
    getTypeErrors(type) {
        if (!this.cacheTypeErrors.has(type))
            this.listTypes(type);
        return this.cacheTypeErrors.get(type) ?? [];
    }
    listModels() {
        return this.listTypes('model');
    }
    listSymbols() {
        return this.listTypes('symbol');
    }
    listComponents() {
        return this.listTypes('component');
    }
    listCms() {
        return this.listTypes('cms');
    }
    listBlogs() {
        return this.listTypes('blog');
    }
    listProducts() {
        return this.listTypes('product');
    }
    getRequiredFilesForType(type) {
        switch (type) {
            case 'component': return ['index.html', 'config.xml'];
            case 'blog': return ['config.xml'];
            case 'cms': return ['index.html', 'config.xml'];
            case 'symbol': return ['index.html', 'desc.xml', 'structure.xhtml'];
            case 'product': return ['index.html', 'config.xml'];
            case 'model': return ['index.html', 'desc.xml', 'structure.xhtml'];
        }
    }
    getTypeSubdir(type) {
        return TYPE_CONFIGS[type].subdir;
    }
}
