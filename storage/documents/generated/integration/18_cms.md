# Site web

## Widget Site web / Contenus d'une page

**Ce widget très important affiche les contenus d'une page libre ou d'un symbole du Site web.**
Il affiche l'ensemble des billets, composants et symboles d'une zone de contenus qui peut être issue d'une page libre ou d'un symbole. Ce widget n'a pas de template en lieu même, il utilise les templates propres des contenus (type de billets, type de composans et modèle de symbole).

Lorsque ce widget est placé dans une mise en page, il est paramétré automatiquement pour afficher les contenus de la zone où il est placé, si cette zone fait partie de la liste des zones éligibles du thème graphique (tous modèles compris).
## Widget Site web / Contenus d'une page : Billet

**Les billets sont affichés avec leur template de type de billet. A noter que contrairement au Widget Liste de billets, ce widget peut s'éxécuter dans un contexte de symbole. Les balises se référent à une page libre n'ont alors plus de sens et n'affiche rien.**


### Template

Le template du widget : `theme/fr/billets/post_simple/index.html`. Exemple :

```html
<!-- BEGIN: main -->
    <!-- BEGIN: titre --><h1>{titre}</h1><!-- END: titre -->
    <!-- BEGIN: sstitre --><h2>{sstitre}</h2><!-- END: sstitre -->
    <!-- BEGIN: texte1 -->{texte1}<!-- END: texte1 -->
<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── titre     // Le contenu du bloc ne s'affiche que si le titre du billet n'est pas vide.
    ├── sstitre     // Le contenu du bloc ne s'affiche que si le sous-titre du billet n'est pas vide.
    ├── texte1     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte2     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte3     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte4     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte5     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte6     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte7     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte8     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte9     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte10     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte11     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte12     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte13     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte14     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    └── texte15     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | type_billet | Type du billet : affiche le nom du répertoire du billet dans l'espace FTP. |
| main | titre | Titre du billet. |
| main | sstitre | Sous-titre du billet. |
| main | texte1 à texte15 | Affiche les champs texte1 à texte15. |
| main | groupe_billet | Groupe du billet. |
| main | intitule_page | Intitulé de la page libre dans laquelle se trouve le billet. Vide pour les billets de symboles |
| main | nom_optim | Nom optimisé de la page libre du billet (c'est à dire la dernière partie de l'URL de la page), tel qu'il est défini dans les options avancées de la page d'édition de la page libre. Vide pour les billets de symboles |
| main | lien_page | URL vers la page libre dans laquelle se trouve le billet. Affiche "#" pour les billets de symboles |
| main | lien_billet | URL un peu spéciale vers la page libre du billet. Les widgets "Contenu de la page libre" de la page libre du billet qui peuvent afficher ce billet n'afficheront que ce billet là, et tous les autres widgets fonctionneront normalement. C'est très utile pour faire des pages de listing et de détail. Affiche "#" pour les billets de symboles |
| main | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| main | alterne | La balise affichera alternativement 1 ou 2. Il est préférable d'utiliser le filtre `{compteur|alternate}`. |
| main | alterne_3 | La balise affichera alternativement 1,2 ou 3. Il est préférable d'utiliser le filtre `{compteur|alternate|3}`. |
| main | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. Il est préférable d'utiliser le filtre `{compteur|alternate|4}`. |
| main | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. Il est préférable d'utiliser le filtre `{compteur|alternate|5}`. |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |


## Widget Site web / Contenus d'une page : Composant

**Les composants sont affichés avec le template de leur type.**


### Template

Le template du widget : `theme/fr/composants/galerie/index.html`. Exemple :

```html
<!-- BEGIN:main -->
<div class="container {extra_class}">

    <h3>{title}</h3>

    <!-- BEGIN:collection -->
    <!-- BEGIN:item -->
    <!-- BEGIN: titre --><h4>{titre}</h4><!-- END: titre -->
    <img src="{image}" />
    <!-- END:item -->
    <!-- END:collection -->
    <!-- BEGIN:empty -->
    Vide
    <!-- END: empty -->

</div>
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── xxx     // Le bloc s'affiche si le champ `xxx` n'est pas vide
    ├── collection     // Le bloc s'affiche si le composant possède une collection et qu'elle contient au moins un élément
    │   └── item     // 
    │       └── xxx     // Le bloc s'affiche si le champ `xxx` de la collection n'est pas vide
    └── empty     // Le bloc s'affiche si le composant possède une collection et qu'elle est collection est vide
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Permet d'identifier de manière unique le composant dans la page. |
| main | component_type | Type du composant : affiche le nom du répertoire du billet dans l'espace FTP. |
| main | title | Titre du composant. |
| main | items_count | Nombre d'éléments de la collection affichés par le widget |
| xxx | xxx | Affiche la valeur du champ `xxx` défini dans le modèle |
| xxx | xxx_label | Affiche le label associé à la valeur pour les champs de type `select` |
| xxx | xxx_miniature | Affiche l'url de la miniature pour les champs de type `image` |
| xxx | xxx_vignette | Affiche l'url de la vignette pour les champs de type `image` |
| xxx | xxx_g_miniature | Affiche l'url de la grande miniature pour les champs de type `image` |
| xxx | xxx_g_vignette | Affiche l'url de la grande vignette pour les champs de type `image` |
| item | position | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. Il est possible d'utilise le filtre modulo `{position|alternate|X}` pour boucler tous les `X` éléments. |
| xxx | xxx | Affiche la valeur du champ `xxx` défini dans la collection |
| xxx | xxx_label | Affiche le label associé à la valeur pour les champs de type `select` |
| xxx | xxx_miniature | Affiche l'url de la miniature pour les champs de type `image` |
| xxx | xxx_vignette | Affiche l'url de la vignette pour les champs de type `image` |
| xxx | xxx_g_miniature | Affiche l'url de la grande miniature pour les champs de type `image` |
| xxx | xxx_g_vignette | Affiche l'url de la grande vignette pour les champs de type `image` |


## Widget Site web / Symbole

**Ce widget affiche l'intégralité d'un symbole du Site web.**


### Template

Le template du widget : `theme/fr/symboles/3cols/index.html`. Exemple :

```html
<!-- BEGIN:main -->
<div class="container {extra_class}">

    <h3>{title}</h3>

    <div class="row">
        <span class="col-4">{ZONE.left}</span>
        <span class="col-4">{ZONE.center}</span>
        <span class="col-4">{ZONE.right}</span>
    </div>

</div>
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    └── xxx     // Le bloc s'affiche si le champ `xxx` n'est pas vide
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Permet d'identifier de manière unique l'instance du symbole dans la page. |
| main | title | Titre du symbole |
| main | model | Modèle de template du symbole |
| main | ZONE.xxx | Insère les Widgets de la zone "xxx" telle qu'ils ont été configurés dans la mise en page du symbole. Les noms (identifiants) des zones sont définis dans le fichier "structure.xhtml" propre au modèle de mise en page. |
| xxx | xxx | Affiche la valeur du champ `xxx` défini dans le modèle |
| xxx | xxx_label | Affiche le label associé à la valeur pour les champs de type `select` |
| xxx | xxx_miniature | Affiche l'url de la miniature pour les champs de type `image` |
| xxx | xxx_vignette | Affiche l'url de la vignette pour les champs de type `image` |
| xxx | xxx_g_miniature | Affiche l'url de la grande miniature pour les champs de type `image` |
| xxx | xxx_g_vignette | Affiche l'url de la grande vignette pour les champs de type `image` |


## Widget Site web / Bloc d'extrait

**Ce widget très important affiche un extrait des billets d'une page libre du Site web.**
Il affiche les billets d'une page libre **en ne conservant PAS le modèle de mise en page** propre à chaque billet mais **en appliquant un unique modèle de mise en page** à tous les billets affichés.

**l'apparence des billets affichés par le widget « Bloc d'extrait » sera donc déterminée par le modèle graphique du widget et non pas par les modèles graphiques des différents types de billets affichés.** 

### Template

Le template du widget : `theme/fr/widgets/site_web/bloc_extrait/index.html`. Exemple :

```html
<!-- BEGIN:main -->
<!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
<!-- END:intitule -->
  
<!-- BEGIN:billet -->
  <div>
    <!-- BEGIN:texte10 -->
    <img src="{racine}/media/miniature/{texte10}.jpg" alt="{titre|htmlentities}" />
    <!-- END:texte10 -->
	 
    <!-- BEGIN:titre --><h2>{titre}</h2><!-- END:titre -->
    <!-- BEGIN:sstitre --><h3>{sstitre}</h3><!-- END:sstitre -->
    <!-- BEGIN:texte1 --><p>{resume_texte1}</p><!-- END:texte1 -->
  </div>
<!-- END:billet -->
  
<!-- BEGIN: nav2 -->
<div>
  <!-- BEGIN: premier -->
  <a href="{lien_premier}" title="premi&egrave;re page">premi&egrave;re page</a> |
  <!-- END: premier -->
  <!-- BEGIN: precedent -->
  <a href="{lien_precedent}" title="page pr&eacute;c&eacute;dente">page pr&eacute;c&eacute;dente</a> |
  <!-- END: precedent -->
  <!-- BEGIN: pages -->
  <a href="{lien_page}">{page}</a>
  <!-- END: pages -->
  <!-- BEGIN: suivant -->
  | <a href="{lien_suivant}" title="page suivante">page suivante</a>
  <!-- END: suivant -->
  <!-- BEGIN: dernier -->
  | <a href="{lien_dernier}" title="derni&egrave;re page">derni&egrave;re page</a>
  <!-- END: dernier -->
  <!--	
<br />
page {num_page} sur {nb_pages} <br />
({nb_resultats} billets trouvés)
-->
</div>
<!-- END: nav2 -->
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché.
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── billet     // Le contenu du bloc s'affiche pour chaque billet.
    │   ├── resume_texte1     // Le contenu du bloc ne s'affiche que si le resume_texte1 du billet n'est pas vide.
    │   ├── resume_texte2     // Le contenu du bloc ne s'affiche que si le resume_texte2 du billet n'est pas vide.
    │   ├── titre     // Le contenu du bloc ne s'affiche que si le titre du billet n'est pas vide.
    │   ├── sstitre     // Le contenu du bloc ne s'affiche que si le sous-titre du billet n'est pas vide.
    │   ├── texte1     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   ├── texte2     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   ├── texte3     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   ├── texte4     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   ├── texte5     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   ├── texte6     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   ├── texte7     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   ├── texte8     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   ├── texte9     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   ├── texte10     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   ├── texte11     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   ├── texte12     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   ├── texte13     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   ├── texte14     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   └── texte15     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    └── nobillet     // Le contenu du bloc s'affiche s'il n'y a aucun billet à afficher.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_page_optim | Nom optimisé de la page dont le contenu doit être affiché. Affiche "all" si le widget affiche les billets de toutes les pages. |
| main | widget_inclus | Affiche 1 si le contenu des sous-pages de la page choisie sont inclus. 0 dans le cs contraire |
| main | widget_groupe | Affiche le critère de restriction d'affichage à un groupe |
| main | widget_order_api | Critère de tri appliqués à l'API Front-office |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_resume | Longueur maximale des résumés |
| main | widget_afficher_navigation | Affiche 1 si la navigation est affichée, 0 si elle est masquée |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| billet | accueil | Affiche 1 si la page libre du billet est la page d'accueil, sinon affiche 0. |
| billet | lien_billet | URL spéciale vers la page libre du billet. Les widgets "Contenu de la page libre" de la page libre du billet qui peuvent afficher ce billet n'afficherons que ce billet là, et tous les autres widgets fonctionneront normalement. |
| billet | lien_page | URL vers la page libre du billet. |
| billet | type_billet | Type du billet. Affiche le nom du répertoire du billet dans l'espace FTP. |
| billet | titre | Titre du billet. |
| billet | sstitre | Sous-titre du billet. |
| billet | texte1 à texte15 | Affiche le contenu des champs texte1 à texte15. |
| billet | groupe_billet | Groupe du billet. |
| billet | intitule_page | Intitulé de la page libre du billet. |
| billet | nom_optim | Nom optimisé de la page libre du billet. |
| billet | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| billet | alterne | La balise affichera alternativement 1 ou 2. |
| billet | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| billet | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| billet | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| billet | resume_texte1 | Version tronquée du contenu du champ texte1. Configurable dans le widget. |
| billet | resume_texte2 | Version tronquée du contenu du champ texte2. Configurable dans le widget. |


## Widget Site web / Liste de billets

**Ce widget affiche uniquement les billets d'une page libre tout en conservant le modèle de mise en page propre à chaque billet.**

Pour plus d'informations sur les modèles de mise en page des billets, voir la section [les types de billets](generalites.html#bloc2).

**L'apparence du widget « Liste de billets » sera donc déterminée par les différents modèles de mise en page des différents types de billets affichés.** 

### Template

Le template du widget : `theme/fr/widgets/site_web/contenu_page_libre/index.html`. Exemple :

```html
<!-- BEGIN: main -->

{liste_billets}

<!-- BEGIN: nav2 -->
<div>
 
 	<!-- BEGIN: premier -->
	<a href="{lien_premier}" title="premi&egrave;re page">premi&egrave;re page</a> |
	<!-- END: premier -->
	  
	<!-- BEGIN: precedent -->
	<a href="{lien_precedent}" title="page pr&eacute;c&eacute;dente">page pr&eacute;c&eacute;dente</a> | 
	<!-- END: precedent -->
	 
	<!-- BEGIN: pages -->
	<a href="{lien_page}">{page}</a>
	<!-- END: pages -->	 
	 
	 <!-- BEGIN: suivant -->
	 | <a href="{lien_suivant}" title="page suivante">page suivante</a> 
	<!-- END: suivant -->
	 
	 <!-- BEGIN: dernier -->
	  |  <a href="{lien_dernier}" title="derni&egrave;re page">derni&egrave;re page</a>
	<!-- END: dernier -->
</div>
<!-- END: nav2 -->

<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    └── nobillet     // Le contenu du bloc s'affiche s'il n'y a aucun billet à afficher.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | liste_billets | Affiche la liste des billets, c'est à dire le contenu d'une page libre du Site web. |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_page_optim | Nom optimisé de la page dont le contenu doit être affiché. Affiche "all" si le widget affiche les billets de toutes les pages. |
| main | widget_inclus | Affiche 1 si le contenu des sous-pages de la page choisie sont inclus. 0 dans le cs contraire |
| main | widget_groupe | Affiche le critère de restriction d'affichage aux groupes |
| main | widget_order_api | Critère de tri appliqués à l'API Front-office |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_afficher_navigation | Affiche 1 si la navigation est affichée, 0 si elle est masquée |


## Widget Site web / Liste des billets : Type de billet

**Mise en forme d'un type de billet**


### Template

Le template du widget : `theme/fr/billets/post_simple/index.html`. Exemple :

```html
<!-- BEGIN: main -->
    <!-- BEGIN: titre --><h1>{titre}</h1><!-- END: titre -->
    <!-- BEGIN: sstitre --><h2>{sstitre}</h2><!-- END: sstitre -->
    <!-- BEGIN: texte1 -->{texte1}<!-- END: texte1 -->
<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── titre     // Le contenu du bloc ne s'affiche que si le titre du billet n'est pas vide.
    ├── sstitre     // Le contenu du bloc ne s'affiche que si le sous-titre du billet n'est pas vide.
    ├── texte1     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte2     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte3     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte4     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte5     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte6     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte7     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte8     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte9     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte10     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte11     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte12     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte13     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── texte14     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    └── texte15     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | type_billet | Type du billet : affiche le nom du répertoire du billet dans l'espace FTP. |
| main | titre | Titre du billet. |
| main | sstitre | Sous-titre du billet. |
| main | texte1 à texte15 | Affiche les champs texte1 à texte15. |
| main | groupe_billet | Groupe du billet. |
| main | intitule_page | Intitulé de la page libre dans laquelle se trouve le billet. |
| main | nom_optim | Nom optimisé de la page libre du billet (c'est à dire la dernière partie de l'URL de la page), tel qu'il est défini dans les options avancées de la page d'édition de la page libre. |
| main | lien_page | URL vers la page libre dans laquelle se trouve le billet. |
| main | lien_billet | URL un peu spéciale vers la page libre du billet. Les widgets "Contenu de la page libre" de la page libre du billet qui peuvent afficher ce billet n'afficheront que ce billet là, et tous les autres widgets fonctionneront normalement. C'est très utile pour faire des pages de listing et de détail. |
| main | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| main | alterne | La balise affichera alternativement 1 ou 2. Il est préférable d'utiliser le filtre `{compteur|alternate}`. |
| main | alterne_3 | La balise affichera alternativement 1,2 ou 3. Il est préférable d'utiliser le filtre `{compteur|alternate|3}`. |
| main | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. Il est préférable d'utiliser le filtre `{compteur|alternate|4}`. |
| main | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. Il est préférable d'utiliser le filtre `{compteur|alternate|5}`. |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_page_optim | Nom optimisé de la page dont le contenu doit être affiché. Affiche "all" si le widget affiche les billets de toutes les pages. |
| main | widget_inclus | Affiche 1 si le contenu des sous-pages de la page choisie sont inclus. 0 dans le cs contraire |
| main | widget_groupe | Affiche le critère de restriction d'affichage aux groupes |
| main | widget_order_api | Critère de tri appliqués à l'API Front-office |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_afficher_navigation | Affiche 1 si la navigation est affichée, 0 si elle est masquée |


## Widget Site web / Menu Horizontal

**Affiche un menu de navigation du Site web de manière horizontale.**


### Template

Le template du widget : `theme/fr/widgets/site_web/menu_h/index.html`. Exemple :

```html
<!-- BEGIN: main -->
<!-- BEGIN: menu -->


<ul>
  <!-- BEGIN: pagetype --><li><!-- BEGIN: page --><a href="{lien}" title="{page|htmlentities}" target="{cible}">{page}</a><!-- END: page --><!-- BEGIN: spacer -->{page}<!-- END: spacer --></li><!-- END: pagetype -->
</ul>

<!-- END: menu -->
<!-- BEGIN: nomenu -->
<!-- END: nomenu -->
<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché.
    ├── menu     // Le contenu du bloc s'affiche s'il y a des pages à afficher dans ce menu.
    │   └── pagetype     // Le contenu du bloc s'affiche pour chaque page du menu.
    │       ├── spacer     // Le contenu du bloc s'affiche si l'élément à afficher est un séparateur. C'est dans ce bloc qu'on utilise généralement les balises de ce widget.
    │       └── page     // Le contenu du bloc s'affiche si l'élément à afficher est une page (tout sauf un séparateur). C'est dans ce bloc qu'on utilise généralement les balises de ce widget.
    │           ├── lien_image     // Le contenu du bloc s'affiche si la page est une lien interne et qu'il dispose d'une image
    │           ├── lien_description     // Le contenu du bloc s'affiche si la page est une lien interne et qu'il dispose d'une description
    │           ├── lien_extra     // Le contenu du bloc s'affiche si la page est une lien interne et qu'il dispose d'informations complémentaires
    │           ├── lien_attributs     // Le contenu du bloc s'affiche si la page est une lien interne et qu'il dispose d'attributs
    │           └── illustration     // Le contenu du bloc s'affiche si la page a une illustration (lien interne vers une catégorie du catalogue).
    └── nomenu     // Le contenu du bloc s'affiche s'il n'y a aucune page à afficher dans ce menu.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_menu_id | Identifiant du menu à afficher |
| main | widget_niveau | Affiche le niveau de menu choisit |
| pagetype | page | Intitulé de la page. |
| pagetype | cible | Cible du lien (attribut target). |
| pagetype | actif | Affiche actif si la page est active, c'est-à-dire si l'internaute s'y trouve. Sinon n'affiche rien. |
| pagetype | lien | URL du lien vers la page correspondante. |
| pagetype | type | Type de la page. Affiche page pour une page libre, lien_ext pour un lien externe, lien_int pour un lien interne et ne renvoie aucune valeur pour un séparateur. |
| pagetype | menu_niv | Niveau de profondeur de la page du menu. Affiche 01 pour une page de niveau 1, 02 pour une page de niveau 2, 03 pour une page de niveau 3 et 04 pour une page de niveau 4. |
| page | lien_type | Si la page est un lien interne, affiche le type de cible du lien sous la forme d'un identifiant :<br /> - cms_page<br /> - contact_page<br /> - client_page<br /> - blog_accueil<br /> - blog_categorie<br /> - catalogue_accueil<br /> - catalogue_categorie<br /> - catalogue_produit |
| lien_image | url_lien_image | Affiche l'url de l'image |
| lien_image | url_lien_image_miniature | Affiche l'url de la miniature |
| lien_image | url_lien_image_vignette | Affiche l'url de la vignette  |
| lien_image | url_lien_image_g_miniature | Affiche l'url de la grande miniature  |
| lien_image | url_lien_image_g_vignette | Affiche l'url de la grande vignette |
| lien_description | lien_description | Affiche la description |
| lien_extra | lien_extra | Affiche les informations complémentaires |
| lien_attributs | lien_attributs | Affiche les attributs |
| illustration | illustration | Numéro de fichier dans la médiathèque de l'illustration. |
| illustration | url_illustration | Url complète de l'illustration |
| illustration | url_illustration_miniature | Url complète de la miniature de l'illustration |
| illustration | url_illustration_vignette | Url complète de la vignette de l'illustration |
| illustration | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration |
| illustration | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration |


## Widget Site web / Menu Vertical

**Affiche un menu de navigation du Site web de manière verticale.**


### Template

Le template du widget : `theme/fr/widgets/site_web/menu_v/index.html`. Exemple :

```html
<!-- BEGIN: main -->
<!-- BEGIN: menu -->

  <!-- BEGIN:intitule -->
    <h1>{intitule}</h1>
  <!-- END:intitule -->


  <div> 
     
      <!-- BEGIN: niveau --><ul> 
        <!-- BEGIN: pagetype -->
       
       <!-- BEGIN: page --><li> <a href="{lien}"  target="{cible}">{page}</a> <!-- END: page --> <!-- BEGIN:sspage -->
        {sspage}
        <!-- END:sspage -->      
       

     <!-- END: pagetype -->   </li>
       </ul><!-- END: niveau -->
     
  </div>
  

  <!-- END: menu -->
<!-- BEGIN: nomenu -->
<!-- END: nomenu -->
<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché.
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── menu     // Le contenu du bloc s'affiche s'il y a des pages à afficher dans ce menu.
    │   └── niveau     // Le contenu du bloc est recopié pour chaque niveau d'arborescence
    │       └── pagetype     // Le contenu du bloc s'affiche pour chaque page du menu.
    │           ├── sspage     // Le bloc s'affiche s'il y a des pages d'un niveau inférieur.
    │           ├── spacer     // Le contenu du bloc s'affiche si l'élément à afficher est un séparateur. C'est dans ce bloc qu'on utilise généralement les balises de ce widget.
    │           └── page     // Le contenu du bloc s'affiche si l'élément à afficher est une page (tout sauf un séparateur). C'est dans ce bloc qu'on utilise généralement les balises de ce widget.
    │               ├── lien_image     // Le contenu du bloc s'affiche si la page est une lien interne et qu'il dispose d'une image
    │               ├── lien_description     // Le contenu du bloc s'affiche si la page est une lien interne et qu'il dispose d'une description
    │               ├── lien_extra     // Le contenu du bloc s'affiche si la page est une lien interne et qu'il dispose d'informations complémentaires
    │               ├── lien_attributs     // Le contenu du bloc s'affiche si la page est une lien interne et qu'il dispose d'attributs
    │               └── illustration     // Le contenu du bloc s'affiche si la page a une illustration (lien interne vers une catégorie du catalogue exclusivement).
    └── nomenu     // Le contenu du bloc s'affiche s'il n'y a aucune page à afficher dans ce menu.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_menu_id | Identifiant du menu à afficher |
| main | widget_niveaux | Affiche les niveaux choisit séparés par des virgules (ex : "1,2,3") |
| main | widget_deployer | Affiche 1 si le menu est déployé. 0 dans le cas contraire. |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| pagetype | menu_niv | Niveau de profondeur de la page du menu. Affiche 01 pour une page de niveau 1, 02 pour une page de niveau 2, 03 pour une page de niveau 3 et 04 pour une page de niveau 4. |
| pagetype | page | Intitulé de la page. |
| pagetype | type | Type de la page. Affiche page pour une page libre, lien_ext pour un lien externe, lien_int pour un lien interne et ne renvoie aucune valeur pour un séparateur. |
| pagetype | cible | Cible du lien (attribut target). |
| pagetype | actif | Affiche actif si la page est active. Sinon n'affiche rien. |
| pagetype | lien | URL du lien vers la page correspondante. |
| pagetype | page_niv | Niveau de profondeur de la page du menu en fonction du niveau d'arborescence affiché.Affiche 01 pour le premier niveau d'arborescence affiché, 02 pour le deuxième niveau d'arborescence affiché, 03 pour le troisième niveau d'arborescence affiché et 04 pour le quatrième niveau d'arborescence affiché. |
| pagetype | niveau | Niveau de profondeur de la page du menu en fonction du niveau d'arborescence affiché. Affiche 1 pour le premier niveau d'arborescence affiché, 2 pour le deuxième niveau d'arborescence affiché, 3 pour le troisième niveau d'arborescence affiché et 4 pour le quatrième niveau d'arborescence affiché. |
| pagetype | page_fille | Affiche "1" si la page contient une ou plusieurs pages filles, "0" dans le cas contraire. |
| pagetype | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque page. |
| sspage | sspage | Balise spéciale à mettre impérativement dans le bloc "pagetype" mais après les blocs "spacer" et "page". Elle permet d'afficher les différents niveaux d'arborescence les uns dans les autres. |
| page | lien_type | Si la page est un lien interne, affiche le type de cible du lien sous la forme d'un identifiant :<br /> - cms_page<br /> - contact_page<br /> - client_page<br /> - blog_accueil<br /> - blog_categorie<br /> - catalogue_accueil<br /> - catalogue_categorie<br /> - catalogue_produit |
| lien_image | url_lien_image | Affiche l'url de l'image |
| lien_image | url_lien_image_miniature | Affiche l'url de la miniature |
| lien_image | url_lien_image_vignette | Affiche l'url de la vignette  |
| lien_image | url_lien_image_g_miniature | Affiche l'url de la grande miniature  |
| lien_image | url_lien_image_g_vignette | Affiche l'url de la grande vignette |
| lien_description | lien_description | Affiche la description |
| lien_extra | lien_extra | Affiche les informations complémentaires |
| lien_attributs | lien_attributs | Affiche les attributs |
| illustration | illustration | Numéro de fichier dans la médiathèque de l'illustration. |
| illustration | url_illustration | Url complète de l'illustration |
| illustration | url_illustration_miniature | Url complète de la miniature de l'illustration |
| illustration | url_illustration_vignette | Url complète de la vignette de l'illustration |
| illustration | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration |
| illustration | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration |

