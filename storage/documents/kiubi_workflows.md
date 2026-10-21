# Kiubi CMS — Workflows d'intégration

---

## Workflow — Modification

> Annoncer : `Workflow M : Modification d'un template`

### Périmètre

Modifier un template existant sans créer de fichier.

### Procédure

1. Lire le fichier concerné et ses dépendances.
2. Inspecter le type avec `list_types`, `list_widgets` et `detail_type`. Lire les sections de documentation utiles :
   - guide d'intégration → `get_doc_section(category: "integration", section: "...")` ;
   - templates du thème insuffisants comme référence → `get_doc_section(category: "exemples", section: "...")` ;
   - interactions dynamiques → `get_doc_section(category: "api")` ;
   - terme ou concept inconnu → `search_doc(query)`.
3. Si la demande implique un changement de structure, de champs, de zones ou de comportement qui n'est pas défini, présenter les options et attendre une décision. Sinon, appliquer la modification en respectant la logique en place.
4. Lancer `validate_theme` :
   - erreur → lire `get_doc_section` sur la catégorie de l'erreur, corriger, revalider. Après deux cycles de correction sans succès, arrêter et signaler l'erreur avec le message de validation ;
   - avertissement → le signaler à l'utilisateur sans le corriger d'office.
5. Rendre compte des fichiers modifiés, des validations effectuées, des avertissements et des hypothèses retenues.

---

## Workflow — Création

> Annoncer : `Workflow C : Création d'un nouveau template`

### Périmètre

Créer ou convertir un billet de page, un billet de blog, un composant, un produit ou un widget.

### Procédure

1. Inspecter les types et widgets proches avec `list_types`, `list_widgets` et `detail_type`. Lire les sections de documentation utiles :
   - guide d'intégration → `get_doc_section(category: "integration", section: "...")` ;
   - templates du thème insuffisants comme référence → `get_doc_section(category: "exemples", section: "...")` ;
   - interactions dynamiques → `get_doc_section(category: "api")` ;
   - terme ou concept inconnu → `search_doc(query)`.
2. Bloc d'extrait → demander quel billet existant sert de source.
3. Déterminer le mode :
   - code fourni, intention non claire → demander :
     - **Préservation** : garder la structure, le balisage et les classes ; adapter seulement ce que Kiubi exige ;
     - **Adaptation** : s'inspirer du code et appliquer les conventions du thème (framework CSS, wrappers) ;
   - pas de code → **Création autonome** à partir des templates existants du thème.
4. Si un type correspondant existe, demander : remplacement (même nom) ou nouveau type (nouveau nom). Ne jamais écraser sans accord explicite.
5. Présenter le plan :
   - nature du livrable et fichiers à créer ;
   - champs personnalisés (noms, types, rôles) ;
   - logique structurelle (blocs, collections, balises, zones) ;
   - choix restant ouverts.

   Attendre une décision seulement si un choix ouvert modifie le résultat. Sinon, poursuivre et noter les hypothèses retenues.
6. Créer le type avec `create_type`.
7. Lancer `validate_theme` :
   - erreur → lire `get_doc_section` sur la catégorie de l'erreur, corriger, revalider. Après deux cycles de correction sans succès, arrêter et signaler l'erreur avec le message de validation ;
   - avertissement → le signaler à l'utilisateur sans le corriger d'office.
8. Rendre compte des fichiers créés et de leur destination, des choix structurels, des validations effectuées, des avertissements et des hypothèses retenues.

---

## Workflow — Template principal

> Annoncer : `Workflow TP : Intégration d'un template principal`

### Périmètre

Intégrer dans `theme/[lg]/templates/` un HTML statique fourni dans la conversation, avec ses dépendances (CSS, JS, images, polices) déposées dans `temp/`. La création de billets, composants, produits ou widgets est hors périmètre.

### Procédure

1. Inspecter les templates principaux avec `list_types("template")`, puis `detail_type` pour chaque template pertinent. Lire le guide d'intégration avec `get_doc_section(category: "integration")` ; si les templates du thème ne suffisent pas comme référence, lire `get_doc_section(category: "exemples", section: "...")`.
2. Demander le mode ; ne jamais le déduire seul :

   | Mode | Situation | Destination | Includes |
   |:---|:---|:---|:---|
   | **Ajout d'un nouveau thème** | Nouveau thème, template ajouté aux templates existants | `templates/[nom]/` | Partagés |
   | **Remplacement d'un thème** | Nouveau thème, template à la place d'un template existant | Répertoire du template remplacé | Partagés |
   | **Template indépendant** | Template ajouté au thème en cours sans en modifier l'apparence | `templates/[nom]/` | Dédiés |

   Template indépendant → avertir avant de l'appliquer et attendre une confirmation :

   > Ce mode modifie l'ensemble du thème : les dépendances sont dupliquées et doivent être maintenues en parallèle, et les variantes de `theme.xml` sont supprimées.

   Refus → demander un autre mode.

3. Inventorier les références dans le HTML (`src`, `href`, `srcset`), le CSS (`@import`, `url()`, `@font-face`) et le JavaScript (`import`, `src`). Suivre chaque référence locale et signaler celles qui restent introuvables. Ignorer les fichiers de `temp/` qui ne sont référencés par aucune dépendance.
4. Rechercher les collisions avec les templates principaux et les assets existants. Avant tout écrasement d'un doublon, demander confirmation et proposer un renommage. Avant d'ajouter une dépendance externe, demander confirmation ; une fois acceptée, reprendre son lien tel quel.
5. Déplacer chaque fichier local de `temp/` vers le sous-répertoire approprié des assets. Répercuter les renommages et les changements d'arborescence dans les références internes (HTML, `url()`, `@import`).
6. Définir la stratégie de zones :
   - analyser chaque bloc HTML :
     - structure permanente de la page → garder dans le template principal ;
     - contenu administrable ou éditorial → remplacer par une zone ;
     - contenu de démonstration → supprimer ;
   - choisir le périmètre, à inclure dans le plan :
     - **Zones utiles** : zones nécessaires à la dynamisation (contenu éditorial, navigation, etc.) ;
     - **Zones utiles + utilitaires** : zones utiles et zones utilitaires déjà présentes dans les autres templates du projet (bannières, annonces, en-tête, etc.) ;
   - Remplacement d'un thème : conserver les `id` des zones du template remplacé et n'en ajouter que si nécessaire. Zone existante sans équivalent dans le HTML fourni → proposer les options (supprimer, remapper, conserver à un autre emplacement) et attendre une décision.
7. Présenter le plan : mode, fichiers et destinations, renommages, dépendances, includes, zones et changements à `theme.xml`. Attendre une décision si un choix reste ouvert. Sinon, poursuivre et noter les hypothèses retenues.
8. Préparer les includes :
   - tous les modes → reprendre dans le nouveau template tous les includes existants des templates principaux ;
   - Template indépendant → créer en plus des includes dédiés (`css-[nom].html`, `js-head-[nom].html`, `js-body-[nom].html`), utilisés à la place des includes CSS et JS partagés.

   Ajouter les liens après les liens existants et avant les fichiers de surcouche (`{Stylesheet}`, `kiubi.api.pfo`, `js.js`), pour que ces derniers puissent surcharger les dépendances. Conserver le format de chemin déjà utilisé dans l'include ciblé (`{racine}/{theme}/assets/...` ou `{theme}/{lg}/assets/...` selon le thème). Encadrer chaque ajout :

   ```html
   <!-- Dependances nom-du-template -->
   <link rel="stylesheet" href="[format de chemin de l'include]/css/ma-dependance.css">
   <!-- Fin Dependances nom-du-template -->
   ```

9. Mettre à jour `theme.xml` :
   - Ajout d'un nouveau thème et Remplacement d'un thème → déclarer la feuille de style principale comme variante en première position ;
   - Template indépendant → supprimer les variantes, puis ajouter la feuille de style principale de chaque template principal dans son include CSS.
10. Créer le type avec `create_type`. Remplacement d'un thème → conserver le nom du répertoire du template remplacé ; `create_type` ne réécrit pas un `index.html` existant : le réécrire manuellement.
11. Lancer `validate_theme` :
    - erreur → lire `get_doc_section` sur la catégorie de l'erreur, corriger, revalider. Après deux cycles de correction sans succès, arrêter et signaler l'erreur avec le message de validation ;
    - avertissement → le signaler à l'utilisateur sans le corriger d'office.
12. Rendre compte :
    - mode retenu ;
    - fichiers créés ou modifiés et leur destination ;
    - doublons et renommages (ancien nom → nouveau nom) ;
    - liens ajoutés dans chaque include ;
    - zones créées, conservées ou supprimées ;
    - modifications de `theme.xml` ;
    - choix structurels et hypothèses retenues ;
    - validations effectuées et avertissements.

---

## Workflow — Micro-correction

> Annoncer : `Workflow MC : Micro-correction`

### Périmètre

Corriger du texte, un attribut HTML, la syntaxe ou une classe CSS déjà présente, sans changement structurel.

### Procédure

1. Lire le fichier concerné et ses dépendances directes.
2. Appliquer uniquement la correction demandée. Si elle nécessite un nouveau fichier, champ, zone ou classe CSS, arrêter et signaler que la demande dépasse une micro-correction.
3. Si le fichier est un template, lancer `validate_theme` :
   - erreur → corriger, revalider. Après deux cycles de correction sans succès, arrêter et signaler l'erreur avec le message de validation ;
   - avertissement → le signaler à l'utilisateur sans le corriger d'office.
4. Rendre compte du fichier modifié et des validations effectuées.

---

## Workflow — Email

> Annoncer : `Workflow E : Modification d'un email`

### Périmètre

Modifier un template d'email.

### Procédure

1. Lire le template d'email. Lire les sections de documentation utiles :
   - guide d'intégration → `get_doc_section(category: "integration", section: "...")` ;
   - templates du thème insuffisants comme référence → `get_doc_section(category: "exemples", section: "...")` ;
   - terme ou concept inconnu → `search_doc(query)`.
2. Appliquer la modification demandée.
3. Lancer `validate_theme` :
   - erreur → lire `get_doc_section` sur la catégorie de l'erreur, corriger, revalider. Après deux cycles de correction sans succès, arrêter et signaler l'erreur avec le message de validation ;
   - avertissement → le signaler à l'utilisateur sans le corriger d'office.
4. Rendre compte du fichier modifié, des validations effectuées et des avertissements.

---

## Workflow — Symbole

> Annoncer : `Workflow S : Création d'un nouveau symbole`

### Périmètre

Créer un symbole réutilisable.

### Principe clé

Un symbole est justifié quand le bloc doit être centralisé, contenir plusieurs zones et assembler du contenu (billets, composants, widgets, etc.) dans une structure commune réutilisable sur plusieurs pages ou mises en page. Il n'est créé que si aucun symbole existant ne répond au besoin.

### Procédure

1. Inspecter les symboles existants avec `list_types("symbole")`, puis `detail_type` pour chaque symbole. Lire `get_doc_section(category: "integration", section: "Symboles")` ; si les templates du thème ne suffisent pas comme référence, lire `get_doc_section(category: "exemples", section: "...")`. Si un symbole existant répond au besoin, proposer de le réutiliser.
2. Définir les champs et les zones.
3. Présenter le plan : champs personnalisés (noms, types, rôles) et zones. Si la structure ou les zones ne sont pas claires, présenter les options et attendre une décision. Ne pas supprimer ou remplacer un symbole existant sans accord explicite.
4. Créer le type avec `create_type`.
5. Lancer `validate_theme` :
   - erreur → lire `get_doc_section` sur la catégorie de l'erreur, corriger, revalider. Après deux cycles de correction sans succès, arrêter et signaler l'erreur avec le message de validation ;
   - avertissement → le signaler à l'utilisateur sans le corriger d'office.
6. Rendre compte des fichiers créés et de leur destination, des choix structurels, des validations effectuées et des avertissements.
