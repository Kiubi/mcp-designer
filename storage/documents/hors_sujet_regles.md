### Wrappers visuels

**RÈGLE :** L'habillage visuel d'un élément est défini dans le template de l'élément lui-même (billet, composant, widget), jamais dans le template principal.

| Règle | Contrainte |
| :--- | :--- |
| Balise par défaut | `<section>`. Déroger uniquement si sémantiquement incorrect : `<aside>` pour contenu secondaire, `<div>` en dernier recours |
| Billet | Le wrapper `<section>` doit contenir un `<article>` à l'intérieur |
| Classes CSS | Analyser les wrappers existants dans le projet pour reproduire les classes habituellement appliquées selon le type de template |
| Nommage des classes CSS | Analyser en priorité les conventions du thème et les reproduire. En l'absence de convention établie, utiliser le tiret `-` comme séparateur (ex : `mon-element`, `bloc-titre`). L'underscore `_` est **interdit** comme séparateur |
| Identification | Le wrapper doit posséder un attribut `id` normalisé (voir ci-dessous) |

**Attribut `id` normalisé :**

| Type d'élément | Attribut `id` |
| :--- | :--- |
| Billet ou composant | `id="kiubi-section-{serial}"` |
| Widget | `id="kiubi-widget-{serial}"` |



### Ordre de déclaration dans `config.xml` (et `desc.xml` pour les symboles)

| Position | Billet | Billet du blog / Produit | Composant / Symbole |
| :--- | :--- | :--- | :--- |
| 1re position | `titre` | — | `title` |
| 2e position | `sstitre` (si présent) | — | `subtitle` (si présent) |
| Suite | Autres champs dans l'ordre logique | Autres champs dans l'ordre logique | Autres champs dans l'ordre logique |
| Dernière position | Champs de type `wysiwyg` | Champs de type `wysiwyg` | Champs de type `wysiwyg` |

Ces règles s'appliquent aussi bien au niveau composant qu'au niveau item.


### Attribut `tri` dans `config.xml`

Le `config.xml` contient un attribut `tri` sur l'élément racine qui détermine la position de l'élément dans le menu de sélection du back-office. Un `tri` de `1` place l'élément en tête de liste.

**Règle :** Le `tri` du nouveau template doit toujours être `max + 1` par rapport aux templates existants du même type. Des outils sont disponibles pour obtenir le prochain `tri` disponible automatiquement.


### Répertoire de travail `temp/`

Le répertoire `temp/`, situé au même niveau que `theme/`, est un dossier de travail dédié à l'intégration. Il est exclu fonctionnellement du thème : il ne fait pas partie du thème livrable, ne doit jamais être pris comme référence ou exemple pour toute autre action, et son contenu est géré manuellement.
