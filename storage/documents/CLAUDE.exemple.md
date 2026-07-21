# Kiubi CMS — Agent d'intégration de thème

## Démarrage de session

Une fois par session, obligatoire **avant toute réponse ou modification** :

- `ruleset()`
- `get_doc_section(category: "integration")`
- `validate_theme`

Corriger toutes les erreurs de validation avant d'intervenir.

---

## Périmètre

- `theme/` : dossier racine du theme graphique
- Fichiers en dehors du répertoire `theme/` : lecture seule stricte
- `theme/[lg]/` dans la documentation : toujours lire `theme/fr/`

### Fichiers non modifiables

- `*.min.css` et `*.min.js` : ne jamais modifier (écrasés à la prochaine compilation)
- `CLAUDE.md` : ne jamais modifier

### Assets principaux

- `theme/assets/` : point d'entrée principal
- `theme/assets/js/js.js` : point d'entrée JS
- `theme/assets/js/kiubi.js` : fonctionnalités API Front-Office
- `theme/assets/css/custom.css` : styles par défaut
- `theme/assets/css/theme.css` : feuille de style principale

### API Front-Office

`get_doc_section(category: "api")` : utiliser uniquement si les templates standards ne suffisent pas, expliquer pourquoi, attendre une confirmation.

---

## Workflows

**Pour toute intervention :** 
1. Créer la branche git
2. Lire et appliquer le workflow adapté
3. Committer et merger

En cas de workflow incertain, application contraire à la documentation ou impliquant une régression fonctionnelle : 
1. Stopper
2. Exposer les options
3. Attendre une décision

---

## Git

Les commandes git s'**exécutent réellement** via bash, jamais seulement affichées.

### Début de tâche

```bash
git checkout -b feat/nom-court-kebab-case main
```

Préfixes autorisés : `feat/`, `fix/`, `refactor/`. Une seule branche par demande.

### Commits

Un commit par livrable distinct (composant, modification CSS, include, module JS, etc.). Committer dès que les validations passent.

```bash
git add theme/
git commit -m "type(theme): description courte"
```

- `feat(theme):` : nouveau template, composant, bloc
- `fix(theme):` : correction d'un bug ou non-conformité
- `refactor(theme):` : restructuration sans changement fonctionnel

### Fin de tâche

Le merge dans `main` requiert une **validation explicite** :

> **Est-ce que je merge en main ?**
> - Oui → merge
> - Non → laisser la branche ouverte
> - Supprimer → ne pas merge, supprimer la branche

```bash
# Vérifier qu'on n'est pas sur main avant de merger
git branch --show-current

git checkout main
git merge --no-ff feat/nom-de-la-branche -m "merge: feat/nom-de-la-branche"
git branch -d feat/nom-de-la-branche
```

**Si une validation échoue : ne jamais committer ni merger.** Stopper, signaler, proposer les corrections, attendre une décision.

---

## Champs de contenu

### Billets, blogs, produits

- `titre` : titre natif du billet
- `sstitre` : sous-titre (préférer à un champ `texteN` dédié)
- `texte1` : contenu principal, privilégier `wysiwyg`
- `texte2`–`texte5` : contenus rédactionnels secondaires
- `texte6`–`texte9` : infos complémentaires, paramètres
- `texte10`–`texte15` : fichiers et images

### Composants

- `title` : titre natif
- `subtitle` : sous-titre
- `content` : contenu principal, privilégier `wysiwyg`
- `img` : champ image

### Règles générales

- Plage `texteN` saturée (billets, produits) : utiliser la plage précédente ; ne jamais réaffecter `texte1`
- `aide` obligatoire, sauf si le nom du champ est universellement compréhensible
- Titre principal affiché en front-office d'un composant : toujours `title`, jamais un autre champ
- Ordre des champs : `titre` / `title` en premier, champs `wysiwyg` en dernier
- Composants et symboles : noms des champs en anglais

---

## Templates principaux et symboles

### Zones

`<zone id="contenu" type="contenu">` est obligatoire dans tout template principal et tout symbole. `<zones defaut="...">` pointe toujours sur `contenu`.

---

## Wrappers

### Règles fondamentales

Définir le wrapper d'un élément dans son propre template (billets, produits, composants, widgets), jamais dans le template principal.

- Wrapper par défaut : `<section>`. Déroger uniquement si sémantiquement incorrect : `<aside>` pour contenu secondaire, `<div>` en fallback
- Billet : `<section>` doit contenir un `<article>`
- Tout wrapper doit posséder un attribut `id` normalisé

### Attribut `id` normalisé

- Billet / composant : `id="kiubi-section-{serial}"`
- Widget : `id="kiubi-widget-{serial}"`

---

## CSS

### Priorité d'utilisation

1. **Classes existantes du thème** : analyser et réutiliser si sémantiquement identiques
2. **Classes du framework CSS** : utilitaires, grille, composants
3. **CSS personnalisé** : n'y recourir que si les deux précédents ne couvrent pas le besoin. Demander la stratégie avant de créer. Choix stylistiques mineurs sur une classe existante : agir sans demander

Stratégies possibles : **transverse** (réutilisable partout), **contextuelle** (périmètre limité), **spécifique** (cas ponctuel).

### Règles fondamentales

- Toute nouvelle classe CSS va dans `custom.css`
- Un même élément sémantique = une seule classe dans tout le thème
- Pas de `style="..."` inline, sauf si le fichier en contient déjà ou si la nature technique l'impose
- `_` et `__` sont interdits dans les noms de classes ; séparateur : tiret simple `-`

### Nommage

| Type | Syntaxe | Exemple |
|---|---|---|
| Composant racine | `.block` | `.blog` |
| Enfant | `.block-element` | `.blog-titre` |
| Variation | `.block-modifier` | `.blog-featured` |
| Transverse | `.ma-classe` | `.post-content` |
| Surcharge même nœud | `.block.block-element {}` | `.blog.blog-titre {}` |
| Surcharge enfant | `.block .block-element {}` | `.blog .blog-titre {}` |
| Variation locale | `.section-parente .ma-classe {}` | `.blog-detail .blog-titre {}` |
