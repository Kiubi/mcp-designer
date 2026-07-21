# Kiubi CMS — Workflows d'intégration

Chaque workflow est autonome. Appliquer celui qui correspond à la tâche.

---

## Workflow — Modification

> Annoncer : `Workflow M : Modification d'un template`

### Périmètre

Modification d'un template existant, sans création de nouveau fichier.

### Procédure

1. Comprendre le contexte :
    - Inspecter les templates du thème → `list_types("...")`, `list_widgets()`
    - Lire le détail des templates pertinents → `detail_type(type: "...", name: "...")`
    - Lire les sections pertinentes du guide d'intégration → `get_doc_section(category: "integration", section: "...")`
    - Templates du thème insuffisants comme référence → `get_doc_section(category: "exemples", section: "...")`
    - Interactions dynamiques → `get_doc_section(category: "api")`
    - Terme ou concept inconnu → `search_doc(query)`
2. Exposer le plan de modification

   **Attendre une validation explicite avant de continuer**

3. Appliquer les modifications en respectant les règles et la logique en place
4. Valider le thème avec `validate_theme` :
   - Erreur → `get_doc_section(category: "...")` sur la catégorie de l'erreur, corriger, revalider
   - Avertissement → soumettre à l'utilisateur

---

## Workflow — Création

> Annoncer : `Workflow C : Création d'un nouveau template`

### Périmètre

Création ou conversion d'un nouveau template ; billet de page, billet du blog, composant, produit, widget.

### Procédure

1. Comprendre le contexte :
    - Inspecter les templates du thème → `list_types("...")`, `list_widgets()`
    - Lire le détail des templates pertinents → `detail_type(type: "...", name: "...")`
    - Lire les sections pertinentes du guide d'intégration → `get_doc_section(category: "integration", section: "...")`
    - Templates du thème insuffisants comme référence → `get_doc_section(category: "exemples", section: "...")`
    - Interactions dynamiques → `get_doc_section(category: "api")`
    - Terme ou concept inconnu → `search_doc(query)`
    - Bloc d'extrait → demander quel billet existant servira de source

2. Demander quel mode s'applique :

   | Situation | Mode | Comportement |
   |:---|:---|:---|
   | Code fourni | **Préservation** | Préserver le code tel quel (structure, balisage, classes CSS) |
   | Code fourni | **Adaptation** | S'inspirer du code et l'adapter au thème (conventions, framework CSS, wrappers) |
   | Pas de code | **Création autonome** | Construire de toutes pièces depuis les templates existants |

   **Attendre une validation explicite avant de continuer**
   
3. Exposer le plan d'action :
   - Nature du livrable et fichiers à créer
   - Champs personnalisés (noms, types, rôles)
   - Logique structurelle (blocs, collections, balises, zones)
   - Choix à arbitrer

   **Attendre une validation explicite avant de continuer**

4. Créer les fichiers avec `create_type`
5. Valider le thème avec `validate_theme` :
   - Erreur → `get_doc_section(category: "...")` sur la catégorie de l'erreur, corriger, revalider
   - Avertissement → soumettre à l'utilisateur
6. Produire un rapport : fichiers ajoutés et destination, choix structurels

---

## Workflow — Template principal

> Annoncer : `Workflow TP : Intégration d'un template principal`

### Périmètre

- Un HTML statique avec ses dépendances (CSS, JS, images, fonts) à intégrer dans `theme/[lg]/templates/`
- Le HTML est fourni dans la conversation
- Les dépendances sont déposées dans `temp/`
- La création des templates de contenu (billets, composants, produits, widgets) se fait séparément dans un autre workflow

### Principe clé

Le template principal doit définir les emplacements dynamiques où seront déposés les widgets et contenus. Question à poser pour chaque bloc HTML :
- Est-ce que ce bloc définit la structure permanente de la page ? → garder dans le template principal
- Est-ce que ce bloc affiche un contenu administrable ou éditorial ? → remplacer par une zone
- Est-ce que ce bloc est un exemple de contenu du template source ? → supprimer du template principal

### Procédure

1. Comprendre le contexte :
    - Inspecter les templates principaux existants → `list_types("template")`, puis `detail_type(type: "template", name: "...")` pour chaque template pertinent
    - Lire le guide d'intégration → `get_doc_section(category: "integration")`
    - Templates du thème insuffisants comme référence → `get_doc_section(category: "exemples", section: "...")`
2. Inventorier les dépendances depuis le HTML fourni. Ignorer tout fichier présent dans `temp/` non atteignable depuis le HTML
3. Vérifier les collisions avec les assets existants avant d’écraser un fichier

   **Attendre une décision explicite avant de continuer**

4. Déplacer chaque fichier vers le sous-répertoire approprié des assets

5. Inclure tous les includes existants dans les templates principaux dans le nouveau template principal

6. Ajouter les liens vers les dépendances dans les includes correspondant, après les liens existants et avant les fichiers de surcouche :

   - avant `{Stylesheet}`
   - avant `kiubi.api.pfo`
   - avant `js.js`

   Template indépendant : créer des includes dédiés (`css-nom-du-template.html`, `js-head-nom-du-template.html`, `js-body-nom-du-template.html`)
   
   **Attendre une décision explicite avant de continuer**

7. Encadrer tous les ajouts d'un commentaire :

   ```html
   <!-- Dependances : nom-du-template -->
   <link rel="stylesheet" href="{theme}/{lg}/assets/css/ma-dependance.css">
   <!-- / Dependances : nom-du-template -->
   ```

8. Proposer une stratégie de zones :
    - Zones utiles uniquement : zones nécessaires à la dynamisation (contenu éditorial, navigation, etc.)
    - Zones utiles + zones utilitaires : zones utiles et zones utilitaires déjà présentes dans les autres templates du projet (bannières, annonces, en-tête, etc.)

   **Attendre une décision explicite avant de continuer**

9. Exposer le plan d'action

   **Attendre une validation explicite avant de continuer**

10. Créer les fichiers avec `create_type`
11. Valider le thème avec `validate_theme` :
    - Erreur → `get_doc_section(category: "...")` sur la catégorie de l'erreur, corriger, revalider
    - Avertissement → soumettre à l'utilisateur
12. Produire un rapport :
    - Fichiers ajoutés et destination
    - Liens ajoutés dans chaque include
    - Zones créées
    - Choix structurels
    - Doublons et renommages (ancien nom → nouveau nom)

---

## Workflow — Micro-correction

> Annoncer : `Workflow MC : Micro-correction`

### Périmètre

Modification sans impact structurel ; classe CSS existante, attribut HTML, texte, syntaxe.

Ne pas utiliser si la modification implique un nouveau template, un nouveau champ, une nouvelle zone ou une nouvelle classe CSS.

### Procédure

1. Lire le fichier concerné et ses fichiers liés
2. Appliquer la modification

---

## Workflow — Email

> Annoncer : `Workflow E : Modification d'un email`

### Périmètre

Modification d'un template d'email.

```
theme/[lg]/widgets/commandes/validation/mail_etat.html              # changement état de commande
theme/[lg]/widgets/commandes/validation/mail.html                   # validation de commande
theme/[lg]/widgets/communication/formulaires/mail.html              # notification Dismoi
theme/[lg]/modules/compte/inscription/mail.html                     # validation d'inscription
theme/[lg]/modules/compte/tableau_bord/mail_bon_reduction.html      # envoi bon de réduction via points de fidélité
theme/[lg]/modules/compte/tableau_bord/mail_motdepasse_perdu.html   # réinitialisation mot de passe
```

### Instructions

- Styles inline uniquement ; tout style CSS doit être porté par l'attribut `style=""` de l'élément concerné, exception faite pour des media query très léger.
- `<body>` présent : aucun attribut `style` ni `class` ne doit lui être appliqué
- Aucune dépendance externe hors images : pas de `<link href="...">`, pas de `@import`, pas de fichier JS, pas de police externe

### Procédure

1. Comprendre le contexte :
    - Lire le fichier email concerné
    - Lire les sections pertinentes du guide d'intégration → `get_doc_section(category: "integration", section: "...")`
    - Templates du thème insuffisants comme référence → `get_doc_section(category: "exemples", section: "...")`
    - Terme ou concept inconnu → `search_doc(query)`
2. Appliquer les modifications en respectant les règles impératives
3. Valider le thème avec `validate_theme` :
   - Erreur → `get_doc_section(category: "...")` sur la catégorie de l'erreur, corriger, revalider
   - Avertissement → soumettre à l'utilisateur

---

## Workflow — Symbole

> Annoncer : `Workflow S : Création d'un nouveau symbole`

### Périmètre

Création d'un nouveau symbole.

###  Principe clé

Un symbole est approprié quand le bloc doit :

- être centralisé
- contenir plusieurs zones
- assembler du contenu (billets, composants, widgets, etc.) :
    - dans une structure commune
    - réutilisable sur plusieurs pages ou mise en page

La création d'un nouveau symbole est justifié uniquement si aucun symbole existant ne répond au besoin.

### Procédure

1. Comprendre le contexte :
    - Inspecter les symboles existants → `list_types("symbole")`, puis `detail_type(type: "symbole", name: "...")` pour chaque symbole
    - Lire le guide d'intégration → `get_doc_section(category: "integration", section: "Symboles")`
    - Templates du thème insuffisants comme référence → `get_doc_section(category: "exemples", section: "...")`

1. Proposer une stratégie de zones :

    ```
    # Correct - 1 point d'injection dans le HTML : 1 zone
    <div>
      {ZONE.contenu}
    </div>
    
    # Correct - 2 point d'injection structurellement distincts dans le HTML : 2 zones
    <div>
      <div>{ZONE.contenu}</div>
      <div>{ZONE.sidebar}</div>
    </div>
    
    # Incorrect - 1 point d'injection dans le HTML : 2 zones inutiles
    <div>
      {ZONE.contenu}
      {ZONE.widgets}
    </div>
    ```
    
   **Attendre une décision explicite avant de continuer**
   
3. Exposer le plan d'action :
   - Champs personnalisés (noms, types, rôles)
   - Zones créées

   **Attendre une validation explicite avant de continuer**

4. Créer les fichiers avec `create_type`
5. Valider le thème avec `validate_theme` :
   - Erreur → `get_doc_section(category: "...")` sur la catégorie de l'erreur, corriger, revalider
   - Avertissement → soumettre à l'utilisateur
6. Produire un rapport : fichiers ajoutés et destination, choix structurels

---
