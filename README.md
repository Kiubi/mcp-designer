# MCP Designer

[![npm version](https://img.shields.io/npm/v/%40kiubi%2Fmcp-designer.svg)](https://www.npmjs.com/package/@kiubi/mcp-designer)
[![license](https://img.shields.io/npm/l/%40kiubi%2Fmcp-designer.svg)](https://github.com/Kiubi/mcp-designer/blob/main/LICENSE)
[![node](https://img.shields.io/node/v/%40kiubi%2Fmcp-designer.svg)](https://github.com/Kiubi/mcp-designer/blob/main/package.json)

MCP Designer est un serveur MCP local dédié à l'intégration de thèmes graphiques **[Kiubi](https://www.kiubi.com)**. Il 
expose aux agents IA (Claude, Codex, Gemini…) un ensemble d'outils dédiés : documentation opérationnelle, introspection 
du thème courant, création de fichiers de configurations et validation statique des fichiers.

Intégrer un thème Kiubi, c'est jongler avec une syntaxe de templating maison (balises, filtres, blocs), une doc 
technique qu'on rouvre dans un onglet à chaque doute, et un thème existant dont il faut respecter les conventions sans 
les avoir toutes en tête. Le serveur MCP met ce contexte directement à disposition de l'agent IA pendant que vous codez,
au lieu de vous laisser chercher, deviner, ou tester en prod pour voir.

Concrètement :

- **Plus besoin de se souvenir de la syntaxe exacte d'une balise ou d'un filtre** — les règles du moteur de
  template et la documentation d'intégration sont consultées à la demande par l'agent, pas retrouvées trois
  onglets plus loin sur un site d'aide.
- **Modifier un template existant sans casser la cohérence du projet** — avant de toucher un fichier, l'agent peut
  lister les types, widgets et champs déjà en place et s'aligner dessus, plutôt que de réinventer une convention
  de nommage ou dupliquer un champ qui existe déjà sous un autre nom.
- **Créer un type de contenu sans réécrire le XML à la main** — champs, zones, collection : la structure de
  fichiers correcte est générée directement, au lieu de copier un type existant en espérant ne rien avoir oublié.
- **Repérer les erreurs avant le déploiement, pas après** — un `theme.xml` mal formé ou une incohérence entre
  fichiers, ça se découvre d'habitude en preview, ou pire une fois en ligne. La validation tourne en local, avant
  le `npm run deploy`.

L'agent applique des procédures optimisées pour Kiubi mais reste piloté par vous : sur les tâches de création ou de 
conversion de template, il expose son plan d'action (mode de conversion, champs prévus, zones envisagées) et attend une 
validation explicite avant de produire quoi que ce soit.

---

## Table des matières

- [Prérequis](#prérequis)
- [Installation](#installation)
  - [Configuration pour Claude Code](#configuration-pour-claude-code)
  - [Configuration pour Codex](#configuration-pour-codex)
  - [Configuration pour Gemini](#configuration-pour-gemini)
  - [Mise à jour](#mise-à-jour)
- [Usage](#usage)
- [Intégration dans un projet Kiubi](#intégration-dans-un-projet-kiubi)
  - [Structure du projet](#structure-du-projet)
  - [Déploiement de thème avec kiubi-sync](#déploiement-de-thème-avec-kiubi-sync)
  - [Déploiement du CLAUDE.md](#déploiement-du-claudemd)
- [Tools disponibles](#tools-disponibles)

---

## Prérequis

| Outil    | Version minimale | Notes                                     |
|:---------|:-----------------|:------------------------------------------|
| Node.js  | 22.18            | Requis pour l'exécution native TypeScript |
| npm      | 10+              | Inclus avec Node.js                       |

---

## Installation

Le serveur est distribué via le paquet npm  **`@kiubi/mcp-designer`**. Aucune installation manuelle n'est nécessaire, la 
commande : `npx -y @kiubi/mcp-designer@latest` suffit à télécharger et exécuter automatiquement la dernière version du 
serveur MCP. Il ne reste plus qu'à ajouter ce MCP à votre agent IA.


### Configuration pour Claude Code

Pour ajouter le serveur MCP, ouvrir un terminal, **se rendre dans le dossier du projet**, puis :  

```bash
claude mcp add kiubi-mcp --scope project -- npx -y @kiubi/mcp-designer@latest
```

Télécharger le fichier https://github.com/Kiubi/mcp-designer/blob/main/storage/documents/CLAUDE.exemple.md et 
l'enregister à la racine de votre projet sous le nom `CLAUDE.md`.


### Configuration pour Codex

Pour ajouter le serveur MCP, ouvrir un terminal, **se rendre dans le dossier du projet**, puis :

```bash
mkdir .codex

cat >> .codex/config.toml <<'EOF'
[mcp_servers.kiubi-mcp-designer]
command = "npx"
args = ["-y", "@kiubi/mcp-designer@latest"]
enabled = true
required = true
default_tools_approval_mode = "auto"
EOF
```

Télécharger le fichier https://github.com/Kiubi/mcp-designer/blob/main/storage/documents/CLAUDE.exemple.md et
l'enregister à la racine de votre projet sous le nom `AGENTS.md`.


### Configuration pour Gemini

Pour ajouter le serveur MCP, ouvrir un terminal, **se rendre dans le dossier du projet**, puis :

```bash
gemini mcp add --scope project kiubi-mcp-designer npx -y @kiubi/mcp-designer@latest
```

Télécharger le fichier https://github.com/Kiubi/mcp-designer/blob/main/storage/documents/CLAUDE.exemple.md et
l'enregister à la racine de votre projet sous le nom `GEMINI.md`.


### Mise à jour

La commande `npx -y @kiubi/mcp-designer@latest` résout le tag `latest` à chaque lancement du serveur : il n'y a donc rien à
mettre à jour manuellement. En pratique, cette résolution n'a lieu qu'au **démarrage** du serveur MCP, c'est-à-dire à
l'ouverture d'une session ou au redémarrage de votre agent — une session déjà en cours continue de tourner avec la
version chargée au lancement. Pour forcer la prise en compte d'une nouvelle version, redémarrer l'agent (ou la
connexion MCP) suffit.

Si `npx` sert malgré tout une version obsolète (paquet mis en cache localement, environnement hors ligne au moment de
la résolution), vider le cache npm force un nouveau téléchargement :

```bash
npm cache clean --force
```

> **Important** — le fichier `CLAUDE.exemple.md` (ou `AGENTS.md`/`GEMINI.md`) téléchargé lors de l'installation n'est
> pas mis à jour automatiquement : c'est une copie locale. Si son contenu évolue entre deux versions du serveur,
> le retélécharger et le comparer à votre version versionnée du projet.

---

## Usage

Une fois le serveur MCP connecté, l'agent décide seul quand invoquer les tools en fonction de votre demande — il n'y
a pas de commande spécifique à taper. Il suffit de discuter normalement avec l'agent en ayant ouvert votre éditeur à
la racine du projet intégrateur (celle qui contient le dossier `theme/`). Quelques exemples de demandes :

- *« Valide le thème avant que je déploie »* → l'agent appelle `validate_theme` et rapporte les erreurs trouvées.
- *« Quels champs a le type `produit` ? »* → l'agent appelle `detail_type` et répond à partir du résultat.
- *« Crée un type `temoignage` avec les champs titre, texte et note »* → l'agent expose son plan (champs, zones
  prévues) et attend votre validation avant d'appeler `create_type`.
- *« Comment fonctionne le filtre `date` du moteur de template ? »* → l'agent consulte `ruleset` et/ou `search_doc`
  plutôt que de deviner la syntaxe.

---

## Intégration dans un projet Kiubi

### Structure du projet

Un projet d'intégration de thème Kiubi se structure ainsi :

```
mon-projet-kiubi/
├── theme/               ← thème graphique Kiubi (synchronisé avec kiubi-sync)
│   ├── theme.xml
│   └── fr/
│       ├── templates/
│       ├── widgets/
│       ├── billets/
│       └── ...
├── gulpfile.js
├── config.json          ← credentials FTP (à exclure du dépôt git)
├── package.json
└── CLAUDE.md            ← voir ci-dessous
```

### Déploiement de thème avec kiubi-sync

[kiubi-sync](https://aide.kiubi.com/environnement-de-travail.html) est le module npm officiel Kiubi pour synchroniser 
les fichiers du thème entre l'environnement local et le serveur. Il remplace le client FTP et s'intègre via Gulp.

Il expose trois commandes principales :

| Commande          | Rôle                                                      |
|:------------------|:----------------------------------------------------------|
| `npm run pull`    | Télécharge tous les fichiers du thème depuis le serveur   |
| `npm run deploy`  | Envoie les fichiers locaux vers le serveur                |
| `npm run watch`   | Surveille les modifications et synchronise en temps réel  |

**Procédure recommandée** : exécuter d'abord un `pull` pour récupérer le thème existant, puis démarrer `watch` pendant 
le développement. Le serveur MCP travaillera sur ces fichiers locaux.

Consulter la [documentation kiubi-sync](https://aide.kiubi.com/environnement-de-travail.html) pour l'installation 
complète et la configuration du `gulpfile.js`.

### Déploiement du CLAUDE.md

Le fichier [CLAUDE.exemple.md](https://github.com/Kiubi/mcp-designer/blob/main/storage/documents/CLAUDE.exemple.md) 
contient les instructions nécessaires pour que l'agent IA comprenne le contexte Kiubi et utilise correctement les tools 
du serveur MCP. Il doit être copié à la racine du projet intégrateur sous un nom propre à chaque agent (`CLAUDE.md`, 
`AGENTS.md`, `GEMINI.md`, ...).

Ce fichier est lu automatiquement par Claude à chaque session. Il définit notamment :

- Le comportement de l'agent face au thème (validation obligatoire avant toute modification)
- Les workflows d'intégration (micro-correction, intervention standard)
- Les règles CSS et les conventions git à respecter
- Le pipeline complet d'une tâche d'intégration

> **Important** — `CLAUDE.md` est spécifique à chaque projet. Il peut être versionné dans le dépôt git du projet intégrateur.

---

## Tools disponibles

| Tool              | Description                                                                 |
|:------------------|:----------------------------------------------------------------------------|
| `validate_theme`  | Valide la syntaxe et la cohérence de tous les fichiers du thème             |
| `ruleset`         | Retourne les règles du moteur de template Kiubi (balises, filtres, syntaxe) |
| `get_doc_section` | Accède à la documentation : guide d'intégration, exemples, API front-office |
| `list_types`      | Liste les éléments du thème par type (billets, composants, produits…)       |
| `detail_type`     | Retourne le détail d'un élément (champs, zones, collection)                 |
| `list_widgets`    | Liste tous les widgets et leurs templates alternatifs                       |
| `create_type`     | Crée ou met à jour un type d'élément (génère les fichiers XML et HTML)      |
| `search_doc`      | Recherche transversale dans la documentation                                |