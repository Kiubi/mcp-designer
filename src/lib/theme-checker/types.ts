export type IssueLevel = 'error' | 'warning';

export interface Issue {
    level: IssueLevel;
    category: string;
    msg: string;
    file?: string;
    line?: number;
}

export interface ThemeReport {
    issues: Issue[];
    hasErrors: boolean;
}

export interface ZoneDef {
    id: string;
    isContent: boolean;
    colmax: string;
    name: string;
    defaut?: string;
}

export interface OptionDef {
    value: string;
    label: string;
}

export interface FieldDef {
    field: string;
    name: string;
    type: string;
    default?: string | null;
    help?: string;
    options?: OptionDef[];
}

export interface ModelDef {
    id: string;
    tpl: string;
    structure: string;
    zones: ZoneDef[];
    name: string;
}

export interface SymbolDef {
    id: string;
    tpl: string;
    structure: string;
    zones: ZoneDef[];
    fields: FieldDef[];
    name: string;
    position: number;
}

export interface ComponentDef {
    id: string;
    tpl: string;
    name: string;
    position: number;
    fields: FieldDef[];
    collection: FieldDef[];
    hasCollection: boolean;
}

export interface PostTypeDef {
    id: string;
    tpl?: string; // Only cms and product have a template
    fields: FieldDef[];
    name: string;
    position: number;
}

export interface ThemeVariant {
    id: string;
    css: string;
    colors: { color1: string; color2: string; color3: string; color4: string };
}

export interface ThemeDesc {
    name: string;
    version?: string;
    date?: string;
    etat: string;
    javascripts?: string;
    style?: string;
    img?: string;
    auteur?: { nom: string; contact?: string; site?: string };
    apercu?: string;
    variantes: ThemeVariant[];
}

export type ThemeType = 'model' | 'symbol' | 'component' | 'cms' | 'blog' | 'product';

export type TypeDefinition = ModelDef | SymbolDef | ComponentDef | PostTypeDef;

export type ParseResult<T> = { definition: T; error: null } | { definition: null; error: string };
