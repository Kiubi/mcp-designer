# Kiubi CMS : Règles d'intégration

---

## Principes

- Privilégier les tools du MCP kiubi pour les actions d'introspection du theme : `list_types`, `list_widgets`, `detail_type`
- Privilégier le tool `create_type` du MCP kiubi pour la création de types

### Conformité

Tout pattern trouvé dans le projet qui contredit les règles de ce document est non conforme ; ne pas le reproduire.

### Homogénéité

L'homogénéité prime sur la logique locale. Un même besoin = un seul pattern à travers tout le projet.

```
# Correct
Réutiliser les patterns existants (champs personnalisés, zones, classes, id)

# Incorrect
Créer un pattern conforme mais en doublon avec un pattern existant
```

---

## Points d'entrée

- `theme/[lg]/templates/` : templates principaux
- `theme/[lg]/modules/404/` : page 404
- `theme/[lg]/modules/fermeture/` : page de fermeture

---

## Moteur de template

### Blocs

- Unicité : un même bloc `<!-- BEGIN: xxx -->...<!-- END: xxx -->` n'apparaît qu'une fois par fichier, sauf exception documentée
- Hiérarchie : un bloc n'existe que dans son parent direct tel que documenté ; jamais à un niveau non documenté
- Nommage : noms exacts selon la documentation ; personnalisation autorisée uniquement si la documentation le précise
- Casse : minuscules obligatoires

### Format des balises

Balise avec filtre : `{balise|filtre|arg}`. Pas d'espace, un seul filtre par balise.

```
# Correct
{balise|mapValue|arg1|arg2}

# Incorrect - espace après le pipe
{balise|mapValue| arg1}

# Incorrect - deux filtres
{balise|filtre1|filtre2}
```

---

## Types

### Arborescence

```
theme/[lg]/
├── billets/[type]/                        # Billet (site web ou page)
│   ├── index.html
│   └── config.xml
├── billets_blog/[type]/                   # Billet blog (configuration du type)
│   └── config.xml
├── composants/[type]/                     # Composant
│   ├── index.html
│   └── config.xml
├── produits/[type]/                       # Produit
│   ├── index.html
│   └── config.xml
├── symboles/[type]/                       # Symbole
│   ├── index.html
│   ├── desc.xml
│   └── structure.xhtml
├── templates/[type]/                      # Template principal
│   ├── index.html
│   ├── desc.xml
│   └── structure.xhtml
└── widgets/blog/detail_billet/            # Billet blog (template du type)
    └── index.html
```

Chaque type : sous-répertoire direct uniquement ; jamais imbriqué dans un sous-répertoire existant.

```
# Correct
theme/fr/billets/simple/

# Incorrect - sous-répertoire imbriqué
theme/fr/billets/simple/image/
```

### Formalisme

#### Cohérence `index.html` / `config.xml` (`desc.xml`)

Tout champ déclaré dans `config.xml` (ou `desc.xml`) est utilisé dans `index.html`. Exception : champ d'un billet réservé à un bloc d'extrait.

#### Types de champs disponibles

- `text` : saisie simple (une ligne)
- `textarea` : saisie multiligne
- `wysiwyg` : éditeur visuel
- `image` : image de la médiathèque
- `fichier` : fichier de la médiathèque
- `select` : liste déroulante
- `color` : couleur hexadécimale
- `date` : date au format `dd/mm/YYYY`
- `datetime` : date et heure au format `dd/mm/YYYY hh:mm:ss`
- `checkbox` : case à cocher

#### Champs par type de template

| Champ | Billet | Blog / Produit | Composant | Symbole | 
|:---|:---|:---|:---|:---|
| `titre` | **Obligatoire** | **Interdit** | **Interdit** | **Interdit** | 
| `sstitre` | Facultatif | **Interdit** | **Interdit** | **Interdit** | 
| `texte1`–`texte15` | Facultatif | Facultatif | **Interdit** | **Interdit** | 
| `title` | **Interdit** | **Interdit** | **Obligatoire** | Facultatif |
| Autres | **Interdit** | **Interdit** | Facultatif | Facultatif |

#### Nommage des champs

Un même rôle fonctionnel = un seul nom à travers tout le projet, y compris pour `texteN`. Réutiliser le nom existant :

```
# Correct
texte9 contrôle l'alignement partout    → utiliser texte9 dans le nouveau template
bgcolor = couleur de fond               → utiliser bgcolor

# Incorrect - noms non conformes à l'existant
backgroundcolor, bg
```

`a-z` et `0-9` uniquement, pas d'espace ni `-` ni `_`.

#### Imbrication des champs

Un champ personnalisé ne peut pas être le parent d'un autre :

```
# Incorrect - billet, blog, produit
<!-- BEGIN:texte1 --><!-- BEGIN:texte2 -->

# Incorrect - composant, symbole
<!-- BEGIN:img --><!-- BEGIN:imgwidth -->
```

---

## Widgets

### Arborescence

```
theme/[lg]/widgets/[service]/[widget]/
├── index.html       # Template principal
├── liste.html       # Template secondaire (selon le widget)
├── vignette.html    # Template secondaire (selon le widget)
└── mon_template/    # Template alternatif (sous-répertoire direct)
    └── index.html
```

Chaque template alternatif est créé dans un sous-répertoire direct du répertoire correspondant au widget ; jamais imbriqué dans un sous-répertoire existant :

```
# Correct
theme/fr/widgets/site_web/bloc_extrait/mon_template/

# Incorrect - imbriqué dans un sous-répertoire existant
theme/fr/widgets/site_web/bloc_extrait/template_existant/mon_template/
```

---

## Templates principaux et symboles

#### `structure.xhtml`

`structure.xhtml` contient uniquement un tableau HTML. Zones pleine largeur : `colspan="N"`. Zones en colonnes : `width="%"` sur chaque `td`, total 100%.

```html
<table>
  <tr><td colspan="2">{annonce}</td></tr>
  <tr>
    <td width="65%">{contenu}</td>
    <td width="35%">{sidebar}</td>
  </tr>
  <tr><td colspan="2">{piedepage}</td></tr>
</table>
```

#### `desc.xml`

L'`id` d'une zone décrit son rôle fonctionnel, pas sa position visuelle :

| Situation | Correct | Incorrect |
|:---|:---|:---|
| Sidebar, quelle que soit sa position | `id="sidebar"` | `id="sidebar_droite"`, `id="sidebar_gauche"` |
| En-tête, même si réduit | `id="entete"` | `id="entete_compact"` |
| Pied de page | `id="piedepage"` | `id="footer"` |

Ordre des zones : logique visuelle, haut → bas, gauche → droite.

### Includes

- `theme/includes/` : sans texte spécifique à une langue
- `theme/[lg]/includes/` : avec texte spécifique à une langue

### Modules

- `theme/[lg]/modules/chemin/` : fil d'Ariane
- `theme/[lg]/modules/selecteur/` : sélecteur de sites

---

## Pièges à éviter

### Filtre `mapValue`

Affiche une valeur selon une condition.

- Valeurs vraies : `1`, `actif`, `checked`, `selected`, `erreur`
- Valeurs fausses : vide ou absente

Pour un champ `select` utilisé avec `mapValue`, déclarer explicitement une valeur vraie et une valeur fausse dans les `<option>`.

| Cas d'usage | Syntaxe | Résultat |
|:---|:---|:---|
| Valeur si VRAI | `{erreur\|mapValue\|is-invalid}` | `is-invalid` si `{erreur}` renvoie `erreur` |
| Valeur si FAUX | `{is_active\|mapValue\|\|text-muted}` | `text-muted` si `{is_active}` ≠ `1` |
| Alternative | `{actif\|mapValue\|active\|inactive}` | `active` si vrai, `inactive` si faux |
| Multi-valeurs | `{tag\|mapValue\|c1} {tag\|mapValue\|c2}` | Répéter la balise pour chaque valeur |
| Première position | `{position\|mapValue\|first-position\|not-first-position}` | |
| Niveau de page | `{niveau\|mapValue\|first-level\|not-first-level}` | |
| Page fille | `{page_fille\|mapValue\|has-child\|no-child}` | |

2 arguments maximum :

```
# Correct
{balise|mapValue|arg1|arg2}

# Incorrect - 3 arguments
{balise|mapValue|arg1|arg2|arg3}
```

### Filtre `htmlentities`

Balise dans un attribut affichant du contenu éditorial libre : `htmlentities` obligatoire. Exceptions : `wysiwyg` (échappement géré par Kiubi), `{url}`, `{slug}` et métadonnées (valeurs propres par nature).

```html
# Correct
<img alt="{alt|htmlentities}">
<div data-label="{label|htmlentities}">

# Incorrect
<title>{title|htmlentities}</title>
<meta name="description" content="{metaDescription|htmlentities}" />
```

### Filtre `alternate`

Séquence cyclique, pas conditionnelle. Pas d'argument supplémentaire. Dans les collections de composants, utiliser `{compteur}` plutôt que `{position}`.

```
# Correct
{position|alternate|3}
{compteur|alternate|3}

# Incorrect - argument supplémentaire
{position|alternate|3|XXX}
```

### Champ `title` dans les composants

Peut être présent simultanément hors du bloc `item` et dans le bloc `item`. Affiché ou non en front-office, il est obligatoire dans `config.xml`. S'il n'est pas affiché en front-office, le préciser dans `aide`.

```xml
<champ champ="title" type="text" intitule="Titre"
  aide="Non affiché dans le site, sert à identifier le composant dans la console d'administration"/>
```

### Comportement des `value` dans les champs `select`

La valeur enregistrée dépend de l'attribut `value` de chaque `<option>` :

| Déclaration | Valeur enregistrée | Valeur non vide |
|:---|:---|:---:|
| `<option value=""></option>` | Aucune | Non |
| `<option value="">Libellé</option>` | Le libellé | Oui |
| `<option value=" ">Libellé</option>` | Un espace `" "` | Oui |
| `<option value="default">Libellé</option>` | `default` | Oui |

`value=""` sur une option avec libellé est interdit ; toujours utiliser une valeur explicite :

```xml
# Correct
<option value="default">Par défaut</option>

# Incorrect
<option value="">Par défaut</option>
```

### Particularité du billet du blog

`billets_blog/[type]/config.xml` et `widgets/blog/detail_billet/index.html` sont indépendants : relation n:m, aucun lien structurel implicite entre les deux. Une demande peut porter sur l'un, l'autre, ou les deux.

### Particularité du catalogue

Les widgets `widgets/catalogue/` traitant des produits peuvent utiliser les champs personnalisés d'un type de produit. Ces champs doivent être préalablement déclarés dans le `config.xml` du type de produit concerné.

### Caractères accentués et encodage

Tous les fichiers `.html` du thème sont en ISO-8859-1. Les caractères accentués des fichiers `.html` s'écrivent en entités HTML nomméee.
Les fichiers `.xml` sont en ISO-8859-1 mais ne doivent pas être modifiés directement, utiliser le tool idempotent `create_type`.

### Commentaires HTML

Caractères autorisés : `a-z`, `A-Z`, `0-9`, `-`, `_`, espace. Translittérer les accents.

---

## Glossaire

### Billet (du site web ou de page)

Bloc de contenu rédactionnel structuré ajouté à une page libre ou à un symbole. Le terme "billet" fait par défaut référence au billet du site web ou de page, pas au billet du blog.

### Billet du blog

Contenu d'actualité destiné à alimenter le flux chronologique du blog. Entité distincte du billet de page : arborescence, fichiers et règles différents.

### Composant

Élément de contenu structuré adapté à des intégrations techniques élaborées (carrousels, galeries, accordéons) pouvant contenir sa propre liste d'éléments appelée "collection".

### Symbole

Bloc de contenu centralisé et indépendant, possédant sa propre mise en page et ses propres zones, pouvant être insérée et réutilisé dans plusieurs pages. Différent d'un include : il a une structure complète.

### Type (de contenu ou de template)

Sous-répertoire + ses fichiers de configuration définissant les champs personnalisables et le rendu front-office d'un élément.

### Template principal

Squelette structurel global du site définissant les zones et la disposition générale des éléments pour une page type donnée.

### Dismoi

Module de gestion de formulaires personnalisables (contacts, devis, sondages, etc.) permettant de collecter des données structurées et de déclencher des notifications par email.

### Bloc d'extrait

Widget récupérant automatiquement des contenus de billets depuis différentes pages. Pas de `config.xml` propre : utilise celui d'un billet existant associé.

---

## Workflows

- **Modification/Création d'un template principal (layout global du site)** → `get_doc_section(category: "workflows", section: "Workflow — Template principal")`
- **Modification/Création d'un template d'email** → `get_doc_section(category: "workflows", section: "Workflow — Email")`
- **Création ou conversion d'un nouveau template ; billet de page, billet du blog, composant, produit, widget** → `get_doc_section(category: "workflows", section: "Workflow — Création")`
- **Création d'un nouveau symbole** → `get_doc_section(category: "workflows", section: "Workflow — Symbole")`
- **Modification d'un template existant, sans création de nouveau fichier.** → `get_doc_section(category: "workflows", section: "Workflow — Modification")`
- **Modification sans impact structurel : classe CSS existante, attribut HTML, texte, correction syntaxique...** → `get_doc_section(category: "workflows", section: "Workflow — Micro-correction")`
