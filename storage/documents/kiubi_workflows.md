# Kiubi CMS : Workflows d'intégration

> Ce document décrit les workflows à suivre selon le type de tâche d'intégration. Consulter le workflow applicable à chaque tâche.

---

## Workflow A : Modification d'un template Kiubi existant

**Action préalable :** Annoncer `Workflow A : Modification d'un template Kiubi existant`

**Étapes à suivre dans l'ordre :**

1. **Analyse :** Lire le `index.html` et le `config.xml` existants pour comprendre la structure. Pour un widget, lister et lire **tous** les fichiers `.html` du répertoire, pas uniquement `index.html`.
2. **Inspection :** Inspecter les templates existants du même type pour évaluer la cohérence CSS et HTML du projet.
3. **Plan d'action :** Exposer les modifications envisagées. **→ Attendre une validation explicite avant de continuer.**
4. **Modification :** Ajouter ou modifier des éléments en respectant les blocs et la logique en place.

---

## Workflow B : Création ou conversion d'un template Kiubi

**Action préalable :** Annoncer `Workflow B : Création ou conversion d'un template Kiubi`

**Étapes à suivre dans l'ordre :**

1. **Identification du mode :** Demander obligatoirement à l'utilisateur lequel des trois modes s'applique, quelle que soit l'instruction reçue :

    | Mode | Instruction typique | HTML fourni | Approche |
    | :--- | :--- | :--- | :--- |
    | **Préservation** | "convertis ce HTML", "intègre ce HTML tel quel", "garde la mise en page" | Oui | Conserver au maximum la structure, le balisage et les classes CSS d'origine. Les modifications se limitent à ce qu'imposent les règles des sections Règles structurelles, Champs personnalisés, Filtres et Livrables. |
    | **Adaptation** | "inspire-toi de ce HTML", "adapte au thème", "reprends la structure mais adapte le style" | Oui | S'inspirer du HTML fourni pour produire un template cohérent avec le thème existant (classes, wrappers, conventions CSS du projet). |
    | **Création autonome** | "crée un composant", "fais-moi un template", "nouveau billet" | Non | Construire le template de toutes pièces en s'appuyant uniquement sur les templates existants du projet comme référence visuelle et structurelle. |

    **Cette question est obligatoire à chaque déclenchement du Workflow B**, même si une réponse a déjà été donnée en début de session. Le mode peut changer d'un template à l'autre. Ne jamais supposer que le mode de la conversion précédente s'applique à la suivante.

    > Formulation suggérée : "Dois-je préserver ce HTML tel quel, m'en inspirer pour l'adapter au thème, ou créer le template de toutes pièces à partir des patterns du projet ?"

    **→ Attendre une validation explicite avant de passer à l'étape suivante.**

2. **Qualification :** Définir la nature exacte du livrable : billet, composant, widget, symbole, template principal ? Cette décision conditionne toutes les étapes suivantes. En cas de doute, l'exposer dans le plan d'action (étape 4) et attendre confirmation.

3. **Inspection :** Inspecter les templates existants du même type pour la cohérence CSS et HTML.
   - En mode **Création autonome**, cette étape est la source principale. Lire attentivement plusieurs templates existants du même type pour identifier les patterns visuels (classes, wrappers, structure HTML), les champs utilisés et les conventions de nommage. C'est à partir de cette lecture que le nouveau template est construit.

4. **Plan d'action :** Avant de produire quoi que ce soit, exposer un plan détaillé contenant :
    - Nature exacte du livrable et fichiers à créer
    - Blocs Kiubi envisagés et leur hiérarchie
    - Champs personnalisés prévus (noms, types, rôles)
    - Zones si applicable
    - Points ambigus ou choix structurels nécessitant une décision

    **→ Attendre une validation explicite avant de passer à l'étape suivante.**

5. **Structure :** Compléter les blocs `<!-- BEGIN:XXX -->` et `<!-- END:XXX -->` en respectant la hiérarchie Kiubi.

6. **Dynamisation :** Remplacer les contenus statiques par les balises Kiubi appropriées (`{title}`, `{content}`, etc.).

---

## Workflow C : Intégration d'un HTML brut avec dépendances en template principal

**Action préalable :** Annoncer `Workflow C : Intégration d'un HTML brut avec dépendances en template principal`

**Contexte d'application :** Un fichier HTML statique accompagné de ses fichiers de dépendances (CSS, JS, images, fonts, etc.) est à intégrer comme template principal dans `theme/[lg]/templates/`. Le fichier HTML est fourni directement dans la conversation. Les fichiers de dépendances sont déposés au préalable dans `temp/`.

**Étapes à suivre dans l'ordre :**

1. **Inventaire :** À partir du HTML fourni, identifier toutes les dépendances en suivant l'arbre complet : CSS, JS, images, fonts, et toute autre ressource externe référencée directement dans le HTML, mais aussi les dépendances de ces fichiers (ex : un CSS qui importe une font, un JS qui charge un autre JS), récursivement. Tout fichier présent dans `temp/` mais non atteignable depuis ce HTML est ignoré et ne doit pas être déplacé ni déclaré.

2. **Doublons :** Avant de déplacer, comparer chaque fichier avec ceux déjà présents dans `theme/assets/`. Si un fichier du même nom existe déjà, identifier les différences et soumettre le cas à l'utilisateur avec les trois options suivantes :

    | Option | Action |
    | :--- | :--- |
    | **Écraser** | Remplacer le fichier existant par le nouveau |
    | **Conserver les deux** | Renommer l'existant en ajoutant le suffixe `.backup` avant l'extension (ex : `bootstrap.min.css` → `bootstrap.min.backup.css`), puis déplacer le nouveau avec son nom d'origine |
    | **Garder l'existant** | Ignorer le nouveau fichier, ne rien déplacer |

    **→ Attendre une décision explicite pour chaque doublon avant de continuer.** Si aucun doublon : déplacer directement.

3. **Déplacement :** Placer chaque fichier dans le sous-répertoire adapté de `theme/assets/` :

    | Type   | Destination                       |
    |:-------|:----------------------------------|
    | CSS    | `theme/assets/css/`               |
    | JS     | `theme/assets/js/`                |
    | Images | `theme/assets/img/`               |
    | Fonts  | `theme/assets/fonts/`             |
    | Autres | Sous-répertoire le plus approprié |

4. **Liens internes :** Dans chaque fichier déplacé, recalculer les chemins vers ses propres dépendances (ex : un CSS qui référence des fonts ou des images) en fonction de son nouvel emplacement.

5. **Injection dans les includes :** Ajouter les liens dans les fichiers d'includes, après les liens existants et avant les fichiers de surcouche :

    | Fichier                            | Position d'insertion            |
    |:-----------------------------------|:--------------------------------|
    | `theme/[lg]/includes/css.html`     | Avant `{Stylesheet}`            |
    | `theme/[lg]/includes/js-head.html` | Avant le script `kiubi.api.pfo` |
    | `theme/[lg]/includes/js-body.html` | Avant `js.js`                   |

    Encadrer les ajouts d'un commentaire d'identification :
    ```html
    <!-- Dependances : nom-du-template -->
    <link rel="stylesheet" href="{theme}/{lg}/assets/css/ma-dependance.css">
    <!-- / Dependances : nom-du-template -->
    ```

6. **Rapport :** Produire un rapport listant :
    - Les fichiers ajoutés et leur répertoire de destination
    - Les liens ajoutés dans chaque fichier d'includes
    - Les fichiers en doublon et leur renommage (ancien nom → nouveau nom)

7. **Stratégie des zones :** Utiliser le tool disponible pour inspecter les templates principaux existants et proposer une stratégie. Deux modes sont possibles :

    | Mode | Description |
    | :--- | :--- |
    | **Zones utiles uniquement** | Conserver le code d'origine et placer uniquement les zones nécessaires pour dynamiser le template (contenu éditorial, navigation, etc.) |
    | **Zones utiles + zones utilitaires** | Conserver le code d'origine, placer les zones utiles, et ajouter les zones utilitaires déjà présentes dans les autres templates du projet (ex : bannières, annonces, en-tête, etc.) |

    Exposer les deux options avec les zones identifiées dans chaque cas. **→ Attendre une décision explicite avant de créer quoi que ce soit.**

8. **Zones et structure générale :** Créer les fichiers `index.html`, `desc.xml` et `structure.xhtml` avec les zones validées à l'étape précédente. Cette étape se concentre exclusivement sur les zones et la structure générale du template. Ne pas intégrer le contenu (billets, widgets, composants, etc.) : cela se fait séparément via le Workflow B, dans une autre demande.
