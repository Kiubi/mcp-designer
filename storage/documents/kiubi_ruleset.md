# Kiubi CMS : Règles d'intégration

> Ce document est la référence des contraintes structurelles, des conventions de code et des règles métier à respecter
> dans toute intégration Kiubi. Il est lu une fois avant toute tâche.

## RÈGLES STRUCTURELLES

### Hiérarchie des blocs du moteur de template html

| Règles absolues | Contrainte                                                                                                                                                                                                      |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Appariement     | Chaque `<!-- BEGIN:XXX -->` doit avoir son `<!-- END:XXX -->` correspondant                                                                                                                                     |
| Hiérarchie      | Un bloc ne peut exister que s'il est imbriqué dans son parent direct tel que défini par la documentation technique. Ne jamais placer un bloc à un niveau non documenté.                                         |
| Unicité         | Un même bloc ne doit apparaître qu'une seule fois par fichier, sauf indication contraire explicite dans la documentation                                                                                        |
| Nommage         | Les noms de blocs doivent correspondre exactement à ceux de la documentation. Une personnalisation n'est autorisée que si la documentation le spécifie explicitement (ex : champs de billets, composants, etc.) |
| Casse           | Les noms de blocs s'écrivent en minuscules : `<!-- BEGIN: main -->` est correct, `<!-- BEGIN: MAIN -->` est interdit                                                                                            |

Exemple de hiérarchie valide : `main.collection.item.title`

```html
<!-- BEGIN: main -->
<!-- BEGIN: collection -->
<!-- BEGIN: item -->
<!-- BEGIN: title --><!-- END: title -->
<!-- END: item -->
<!-- END: collection -->
<!-- END: main -->
```

### Commentaires HTML

**Caractères autorisés dans les commentaires :** lettres `a-z` / `A-Z`, chiffres `0-9`, tiret simple `-`, underscore
simple `_`, espace.

**Tout le reste est interdit**, sans exception :

- Caractères accentués (`é`, `è`, `à`, `ç`…). Si un nom contient un accent, le translittérer. Ex : `Témoignages` → `Temoignages`.
- Entités HTML (`&eacute;`, `&agrave;`…), même pour écrire un mot accentué
- Tirets doubles `--` ou underscores doubles `__`, tiret long (`—`)
- Tout autre caractère spécial
 
Exemples : 

```html
<!-- Correct -->
<!-- Template du Widget Temoignages -->

<!-- INTERDIT -->
<!-- Template du Widget Témoignages -->
<!-- Template du Widget T&eacute;moignages -->
```

---

## CHAMPS PERSONNALISÉS

### Règles de nommage universelles

S'appliquent à **tous** les champs personnalisés (billets, produits, composants, symboles).

| Règle                | Contrainte                                                                                                                          |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------|
| Caractères autorisés | Lettres minuscules `a-z` et chiffres `0-9` uniquement                                                                               |
| Caractères interdits | Espaces, tirets `-`, underscores `_`, tout caractère spécial                                                                        |
| Langue               | Anglais recommandé pour les composants et symboles (`content`, `subtitle`, `bgcolor`, `image`, `button`, `link`)                    |
| Attribut `aide`      | Obligatoire dans `config.xml` pour expliquer l'utilité du champ, sauf si le nom est universellement compréhensible (ex : `Contenu`) |

### Champs par type de template

| Champ                 | Billet          | Billet du blog / Produit | Composant / Symbole | Remarque                                                                                                                                                                                                |
|:----------------------|:----------------|:-------------------------|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `titre`               | **Obligatoire** | **Interdit**             | **Interdit**        | Titre natif du billet                                                                                                                                                                                   |
| `sstitre`             | Facultatif      | **Interdit**             | **Interdit**        | Utiliser de préférence plutôt qu'un champ `text` dédié                                                                                                                                                  |
| `texte1`              | **Obligatoire** | Facultatif               | **Interdit**        | Contenu rédactionnel principal. Privilégier `wysiwyg`                                                                                                                                                   |
| `texte2` à `texte5`   | Facultatif      | Facultatif               | **Interdit**        | Contenus rédactionnels alternatifs                                                                                                                                                                      |
| `texte6` à `texte9`   | Facultatif      | Facultatif               | **Interdit**        | Données diverses (méta, infos complémentaires, paramètres)                                                                                                                                              |
| `texte10` à `texte15` | Facultatif      | Facultatif               | **Interdit**        | Fichiers et images                                                                                                                                                                                      |
| `title`               | **Interdit**    | **Interdit**             | **Obligatoire**     | Obligatoire au niveau composant ET dans chaque item de collection, qu'il soit affiché en front-office ou non. Sa présence dans `config.xml` est non négociable. Facultatif dans `desc.xml` d'un symbole |
| `subtitle`            | **Interdit**    | **Interdit**             | Facultatif          | Sous-titre du composant ou de l'item                                                                                                                                                                    |
| `content`             | **Interdit**    | **Interdit**             | Facultatif          | Nom imposé pour le contenu principal du composant. Privilégier `wysiwyg`                                                                                                                                |
| `img`                 | **Interdit**    | **Interdit**             | Facultatif          | Nom imposé pour le champ image du composant                                                                                                                                                             |
| Autres champs libres  | Facultatif      | Facultatif               | Facultatif          | Nommage selon les règles de la section précédente                                                                                                                                                       |

### Uniformisation des noms de champs

Avant de nommer un nouveau champ, inspecter les templates existants du même type pour identifier les noms déjà en usage
dans le projet. Si un champ remplit la même fonction, réutiliser le même nom, y compris pour les champs de la plage
`texteN`.

Exemples :

- Si `texte9` contrôle l'alignement partout dans le projet → utiliser `texte9` pour cette fonction dans le nouveau
  template.
- Si `bgcolor` contrôle la couleur de fond dans les composants existants → utiliser `bgcolor` et non `backgroundcolor`
  ou `bg`.

L'homogénéité des noms à travers le projet est préférable.

### Règles spécifiques au champ `title`

Le champ `title` d'un composant peut apparaître simultanément hors item et dans un item : c'est une exception autorisée
à la règle d'unicité. Sa présence dans `config.xml` est obligatoire indépendamment de son affichage en front-office : ne
jamais le supprimer au motif qu'il ne s'affiche pas. Si le champ n'est pas affiché en front-office, préciser dans
l'attribut `aide` (ex : `aide="Le titre n'est pas affiché dans le site web mais permet d'identifier le composant dans 
la console d'administration"`).

### Types de champs disponibles

| Type       | Description                                   |
|:-----------|:----------------------------------------------|
| `text`     | Champ de saisie simple (une ligne)            |
| `textarea` | Champ de saisie multiligne                    |
| `wysiwyg`  | Éditeur de texte visuel                       |
| `image`    | Fichier image de la médiathèque               |
| `fichier`  | Fichier quelconque de la médiathèque          |
| `select`   | Champ de liste déroulante                     |
| `color`    | Couleur hexadécimale                          |
| `date`     | Date au format `dd/mm/YYYY`                   |
| `datetime` | Date et heure au format `dd/mm/YYYY hh:mm:ss` |
| `checkbox` | Case à cocher                                 |

#### Champ de type `select`

Un champ `select` permet à l'éditeur de choisir parmi une liste de valeurs prédéfinies. Le comportement dépend de
l'attribut `value` de chaque `<option>` :

```xml

<champ champ="monchamp" type="select" intitule="Mon champ">
    <option value=""></option>
    <option value="">Vide</option>
    <option value=" ">Espace</option>
    <option value="default">Par défaut</option>
</champ>
```

| Déclaration                                   | Valeur enregistrée                 | Valeur non vide | Usage recommandé                                                                                 |
|:----------------------------------------------|:-----------------------------------|:---------------:|:-------------------------------------------------------------------------------------------------|
| `<option value=""></option>`                  | Aucune, le champ reste sans valeur |       Non       | Permis pour de l'affichage conditionnel via BEGIN/END, mais non recommandé                       |
| `<option value="">Vide</option>`              | Le libellé de l'option, ici `Vide` |       Oui       | À éviter : `value=""` est trompeur. Toujours préférer une valeur explicite (ex : `value="vide"`) |
| `<option value=" ">Espace</option>`           | Un espace `" "`                    |       Oui       | Utilisable, mais peu lisible. Préférer une valeur explicite                                      |
| `<option value="default">Par défaut</option>` | `default`                          |       Oui       | Forme recommandée : la valeur enregistrée est explicite et prévisible                            |

**Règle :** Ne jamais laisser `value=""` sur une option qui porte un libellé. La valeur enregistrée serait le libellé
lui-même, ce qui crée une ambiguïté entre la valeur affichée et la valeur stockée.

#### Autres règles spécifiques aux champs

- **Saturation d'une plage :** Si une plage `texte` est saturée, il est permis d'utiliser des champs de la plage
  précédente, mais la cohérence doit être maintenue et `texte1` reste non négociable.
- **Imbrication interdite :** Les champs `texte1` à `texte15` ne s'imbriquent jamais entre eux. Ils sont toujours au
  même niveau dans le bloc parent. Tout pattern `texteX.texteY` trouvé dans le projet est non conforme et ne doit pas
  être reproduit.
- **Un champ personnalisé ne peut jamais être le bloc parent d'un autre champ personnalisé**, quel que soit son nom. Le
  pattern `<!-- BEGIN:img --><!-- BEGIN:imgwidth -->` est **interdit** si `img` et `imgwidth` sont tous deux des champs
  personnalisés.

---

## FILTRES

### Règles absolues

| Règle                       | Contrainte                                                                                             |
|:----------------------------|:-------------------------------------------------------------------------------------------------------|
| Pas d'espace dans le filtre | La syntaxe `{balise\|filtre\|arg1\|arg2}` doit être compacte. `{balise\|mapValue\| arg1}` est invalide |
| Un seul filtre par balise   | `{balise\|filtre1\|filtre2}` est **interdit**                                                          |

### Filtre `mapValue` (affichage conditionnel)

Teste si une balise renvoie une valeur interprétée comme "vraie".

- **Valeurs "vraies" :** `1`, `actif`, `checked`, `selected`, `erreur`
- **Syntaxe :** `{balise|mapValue|valeur_si_vrai|valeur_si_faux}`, 2 arguments maximum
- **Usages courants :** classe CSS, attribut HTML, toute valeur textuelle conditionnelle
- **Valeur par défaut :** `valeur_si_faux` s'applique quand la balise ne renvoie pas une valeur vraie
- **Champs personnalisés avec `mapValue` :** le champ doit toujours avoir une valeur définie pour les deux états (ex :
  `0` et `1`). Un champ vide ou absent est interprété comme faux.

| Cas d'usage            | Syntaxe                                                    | Résultat                                                |
|:-----------------------|:-----------------------------------------------------------|:--------------------------------------------------------|
| Valeur si VRAI         | `{erreur\|mapValue\|is-invalid}`                           | Applique `is-invalid` si `erreur` renvoie `erreur`      |
| Valeur si FAUX         | `{is_active\|mapValue\|\|text-muted}`                      | Applique `text-muted` si `is_active` ne renvoie pas `1` |
| Alternative de valeurs | `{actif\|mapValue\|active\|inactive}`                      | `active` si vrai, `inactive` si faux                    |
| Multi-valeurs          | `{my_tag\|mapValue\|class1} {my_tag\|mapValue\|class2}`    | Répéter la balise pour chaque valeur à appliquer        |
| Première position      | `{position\|mapValue\|first-position\|not-first-position}` | Aussi possible avec `compteur`                          |
| Niveau d'une page      | `{niveau\|mapValue\|first-level\|not-first-level}`         | `first-level` si page de niveau 1                       |
| Page fille             | `{page_fille\|mapValue\|has-child\|no-child}`              | `has-child` si la page a une page fille                 |

### Filtre `htmlentities`

Convertit les caractères spéciaux d'une valeur en entités HTML (`<` devient `&lt;`, `&` devient `&amp;`, etc.) pour
éviter qu'ils soient interprétés par le navigateur.

**Cas d'usage principal :** toujours utiliser `htmlentities` quand une balise Kiubi est placée dans un attribut HTML qui
affiche du contenu éditorial libre :

```html
<img src="..." alt="{alt|htmlentities}" title="{title|htmlentities}">
<div data-label="{label|htmlentities}">
```

**Inutile dans les cas suivants :**

- Champ de type `wysiwyg` (le CMS gère déjà l'échappement)
- Balises Kiubi nativement conçues pour être dans un attribut (métadonnées, `{url}`, `{slug}`, etc.) dont les valeurs
  sont propres par nature
- Partout ailleurs hors attribut HTML

### Filtre `alternate` (séquence numérique modulo)

Génère une séquence numérique cyclique. **Ce n'est pas un filtre conditionnel.**

- **Syntaxe :** `{position|alternate|3}` → produit `1`, `2`, `3`, `1`, `2`, `3`, …
- **Argument unique :** ne peut pas prendre d'argument supplémentaire après le chiffre (`{position|alternate|3|XXX}` est
  invalide)
- **Balise recommandée :** `position` dans les collections de composants (`compteur` n'est pas disponible dans ce
  contexte)

---

## LIVRABLES ET COHÉRENCE DES FICHIERS

### Fichiers obligatoires par contexte

| Contexte           | Fichiers obligatoires                                                   |
|:-------------------|:------------------------------------------------------------------------|
| Billet site web    | `index.html` + `config.xml`                                             |
| Billet blog        | `config.xml`                                                            |
| Produit            | `index.html` + `config.xml`                                             |
| Composant          | `index.html` + `config.xml`                                             |
| Symbole            | `index.html` + `desc.xml` + `structure.xhtml`                           |
| Template principal | `index.html` + `desc.xml` + `structure.xhtml`                           |
| Widget             | `index.html` + éventuellement d'autres fichiers `.html` selon le widget |

Tous les fichiers obligatoires d'un contexte doivent être produits ensemble, sauf instruction explicite de ne livrer que
l'un d'eux.

Pour les widgets, consulter la documentation technique pour connaître la liste exacte des fichiers attendus.

### Emplacement des répertoires

Chaque template est créé dans un sous-répertoire **direct** du répertoire correspondant à son type ; jamais imbriqué
dans un sous-répertoire existant.

| Type                         | Répertoire parent                        |
|:-----------------------------|:-----------------------------------------|
| Billet site web              | `theme/[lg]/billets/`                    |
| Billet blog (`config.xml`)   | `theme/[lg]/billets_blog/`               |
| Billet blog (`index.html`)   | `theme/[lg]/widgets/blog/detail_billet/` |
| Composant                    | `theme/[lg]/composants/`                 |
| Produit                      | `theme/[lg]/produits/`                   |
| Symbole                      | `theme/[lg]/symboles/`                   |
| Template principal           | `theme/[lg]/templates/`                  |
| Widget (template alternatif) | `theme/[lg]/widgets/[service]/[widget]/` |

### Spécificités des widgets

Un répertoire de widget a la structure suivante :

```
theme/[lg]/widgets/[service]/[widget]/
├── index.html         ← template principal du widget (rendu par défaut)
├── liste.html         ← autres fichiers .html du widget (selon le widget)
├── vignette.html
└── mon_template/      ← template alternatif (sous-répertoire direct)
    ├── index.html
    └── ...
```

Règles d'exploration :

- Le `index.html` à la racine du widget est le template principal → il doit être lu au même titre que les autres
  fichiers.
- Les autres fichiers `.html` à la racine (`liste.html`, `vignette.html`, etc.) sont des templates secondaires du même
  widget → les lire aussi.
- Les sous-répertoires directs sont des templates alternatifs, chacun peut contenir ses propres fichiers `.html`.
- Tous ces fichiers doivent être pris en compte quand on travaille sur un widget.

Le template alternatif est un sous-répertoire **direct** du répertoire du widget, jamais imbriqué dans un template
alternatif existant.

Exemple valide : `theme/fr/widgets/site_web/bloc_extrait/mon_template/`
Exemple interdit : `theme/fr/widgets/site_web/bloc_extrait/template_existant/mon_template/`

### Répertoires `/includes/`

| Emplacement          | Chemin                 | Quand l'utiliser                              |
|:---------------------|:-----------------------|:----------------------------------------------|
| Racine du thème      | `theme/includes/`      | Include sans texte spécifique à une langue    |
| Répertoire de langue | `theme/[lg]/includes/` | Include contenant du texte propre à la langue |

### Répertoire `/modules/`

`theme/[lg]/modules/[nom-du-module]/`

| Module             | Répertoire                      |
|:-------------------|:--------------------------------|
| Page d'erreur 404  | `theme/[lg]/modules/404/`       |
| Fil d'Ariane       | `theme/[lg]/modules/chemin/`    |
| Page de fermeture  | `theme/[lg]/modules/fermeture/` |
| Sélecteur de sites | `theme/[lg]/modules/selecteur/` |

### Cohérence `index.html` / `config.xml` (et `desc.xml` pour les symboles)

| Règle                      | Contrainte                                                                                                                                                  |
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Inséparabilité             | Si un template utilise des champs personnalisés, le `config.xml` (ou `desc.xml`) doit être produit en même temps                                            |
| Pas de déclaration inutile | Tout champ déclaré dans `config.xml` (ou `desc.xml`) doit être utilisé dans `index.html`. Exception : champ utilisé exclusivement par un bloc d'extrait lié |

#### Cas particulier : billet du blog

Le `config.xml` et le `index.html` du billet blog sont **complètement indépendants** l'un de l'autre :

- `config.xml` → définit un **type de contenu** (champs éditoriaux disponibles dans le back-office)
- `index.html` → définit une **mise en page** (rendu visuel en front-office)

La relation est **n:m** : plusieurs types de contenu peuvent utiliser la même mise en page, et une même mise en page
peut afficher plusieurs types de contenu. Il n'y a aucun lien structurel entre un `config.xml` dans `billets_blog/` et
un `index.html` dans `widgets/blog/detail_billet/`.

**Conséquences opérationnelles :**

- Ne jamais créer automatiquement un `index.html` lors de la création d'un `config.xml`, ni l'inverse, sauf instruction
  explicite.
- Si la demande est ambiguë (type de contenu, mise en page, ou les deux), demander avant de continuer.

#### Cas particulier : bloc d'extrait

Un bloc d'extrait est toujours dépendant d'un billet. Avant toute action, il est **obligatoire** de poser cette question
à l'utilisateur :

> **Le `config.xml` du billet associé existe-t-il déjà ?**

Ne jamais commencer la création du bloc d'extrait sans avoir reçu une réponse explicite à cette question.

- **Oui** → demander quel billet. Ne pas créer de `config.xml`, le billet utilisant ce `config.xml` sera le support
  éditorial du bloc d'extrait.
- **Non** → créer le `config.xml` du billet en même temps que le bloc d'extrait.

Si la demande ne précise rien, poser la question avant de continuer.

### Zonage des templates principaux et symboles

Tout template principal et tout symbole doit obligatoirement avoir une zone `id="contenu"` de `type="contenu"` :

```xml

<zone id="contenu" colmax="3" intitule="Contenu" defaut="1" type="contenu"/>
```

**Règle de construction :** partir toujours de la zone `id="contenu"`, puis ajouter les zones supplémentaires si
nécessaire. Ne jamais partir des zones additionnelles sans avoir défini la zone `id="contenu"` d'abord.

**Attribut `type="contenu"` :** seules les zones déclarées avec `type="contenu"` acceptent des billets, composants et
symboles dans la console d'administration. Une zone sans cet attribut ne peut recevoir que des widgets. La zone
`id="contenu"` doit toujours avoir `type="contenu"`.

**Ordre des zones :** suivre un ordre logique en fonction de la structure visuelle attendue du template, de haut en bas
et de gauche à droite. Par exemple, pour un template classique :

```xml

<zones defaut="contenu">
    <zone id="entete" colmax="1" intitule="Entete" defaut="1"/>
    <zone id="menu" colmax="1" intitule="Menu" defaut="1"/>
    <zone id="contenu" colmax="3" intitule="Contenu" defaut="1" type="contenu"/>
    <zone id="sidebar" colmax="1" intitule="Sidebar" defaut="1" type="contenu"/>
    <zone id="piedepage" colmax="3" intitule="Pied de page" defaut="1"/>
</zones>
```

**`<zones defaut="...">` :** toujours pointer sur `contenu` sauf raison explicite contraire.

### Uniformité des noms de zones entre templates principaux

**Règle absolue :** les noms de zones (`id`) doivent être identiques d'un template principal à l'autre pour toute zone
qui remplit le même rôle fonctionnel, indépendamment des variations visuelles ou structurelles du template.

**En pratique :** avant de nommer une zone, inspecter les templates principaux existants du projet et réutiliser les
`id` déjà en place pour les zones de même rôle. Ne jamais inventer un nouveau nom si un nom équivalent existe déjà.

**Exemple :** une sidebar reste `sidebar` qu'elle soit positionnée à gauche ou à droite, large ou étroite. Ce qui
change, c'est sa position dans `structure.xhtml`, pas son `id`.

| Situation                            | Correct          | Incorrect                                    |
|:-------------------------------------|:-----------------|:---------------------------------------------|
| Sidebar, quelle que soit sa position | `id="sidebar"`   | `id="sidebar_droite"`, `id="sidebar_gauche"` |
| En-tête, même si réduit              | `id="entete"`    | `id="entete_compact"`                        |
| Pied de page                         | `id="piedepage"` | `id="footer"`                                |

**Cas d'un rôle vraiment nouveau** (zone sans équivalent dans les templates existants) : choisir un nom court, en
minuscules, sans tirets ni underscores, qui décrit le rôle fonctionnel, pas la position visuelle.

### Rédaction de `structure.xhtml`

Le fichier `structure.xhtml` définit la grille de mise en page via un tableau HTML.

- **Zones pleine largeur :** occupent toute la largeur, utilisent `colspan="N"` (N = nombre total de colonnes).
- **Zones en colonne :** dès qu'un `<tr>` contient plusieurs `<td>`, chaque `<td>` doit porter un attribut `width="%"`.
  L'ensemble des largeurs doit totaliser 100 %.

Exemple avec sidebar à droite :

```xml

<table>
    <tr>
        <td colspan="2">{annonce}</td>
    </tr>
    <tr>
        <td width="65%">{contenu}</td>
        <td width="35%">{sidebar}</td>
    </tr>
    <tr>
        <td colspan="2">{piedepage}</td>
    </tr>
</table>
```
