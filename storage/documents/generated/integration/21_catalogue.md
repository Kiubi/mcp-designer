# Catalogue

## Widget Catalogue / Catégories

**Affiche la liste des catégories du Catalogue.**

Chaque catégorie permet d'accéder à la page de détail de la catégorie et de restreindre l'affichage des produits à ceux qui ont été publiés dans cette catégorie.

### Template

Le template du widget : `theme/fr/widgets/catalogue/categories/index.html`. Exemple :

```html
<!-- BEGIN:main -->


  <!-- BEGIN: intitule -->
  <h1>{intitule}</h1>
  <!-- END: intitule -->
  
    <ul>
      <!-- BEGIN:accueil -->
      <li><a href="{baseLangue}/catalogue/" title="{intitule_accueil|htmlentities}">{intitule_accueil}</a></li>
      <!-- END:accueil -->
      <!-- BEGIN:categorie -->
      <li><a href="{baseLangue}/catalogue/{nom_optim}/" title="{intitule_categorie|htmlentities}">{intitule_categorie}</a></li>
      <!-- END:categorie -->
    </ul>
    <!-- BEGIN:nocategorie -->
    <p>Pas de catégorie disponible</p>
    <!-- END:nocategorie -->
  

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── accueil     // Ne s'affiche que si la page d'accueil du catalogue est activée.
    ├── categorie     // Le contenu du bloc s'affiche pour chaque catégorie.
    └── nocategorie     // Le contenu du bloc s'affiche s'il n'y a pas de catégorie.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| accueil | intitule_accueil | Intitulé de la page d'accueil du Catalogue. |
| accueil | actif | Affiche actif si la page d'accueil est active. Sinon n'affiche rien. |
| accueil | lien_accueil | Lien vers la page d'accueil du Catalogue. |
| categorie | categorie_id | Id de la catégorie. |
| categorie | intitule_categorie | Intitulé de la catégorie. |
| categorie | actif | Affiche actif si la page est active. Sinon n'affiche rien. |
| categorie | nom_optim | Nom optimisé de la catégorie tel qu'il est défini dans la console d'administration dans la page d'édition d'une catégorie du "Catalogue" dans le champ "Nom de la page". |
| categorie | lien_categorie | Lien vers la catégorie |
| categorie | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| categorie | alterne | La balise affichera alternativement 1 ou 2. |
| categorie | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| categorie | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| categorie | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |


## Widget Catalogue / Contenus d'une catégorie

**Ce widget affiche l'ensemble des billets, composants et symboles d'une zone de contenus qui peut être issue d'une catégorie ou de la page d'accueil du Catalogue. Ce widget n'a pas de template en lieu même, il utilise les templates propres des contenus (type de billets, type de composans et modèle de symbole).**

Lorsque ce widget est placé dans une mise en page, il est paramétré automatiquement pour afficher les contenus de la zone où il est placé, si cette zone fait partie de la liste des zones éligibles du thème graphique (tous modèles compris).
## Widget Catalogue / Contenus d'une catégorie : Billet

**Les billets sont affichés avec leur template de type de billet.**


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
| main | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. Il est possible d'utilise le filtre modulo `{compteur|alternate|X}` pour boucler tous les `X` éléments. |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |


## Widget Catalogue / Contenus d'une catégorie : Composant

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


## Widget Catalogue / Tags

**Affiche la liste des tags du Catalogue.**

Chaque tag permet de restreindre l'affichage des produits à ceux qui ont été associés à ce tag.

### Template

Le template du widget : `theme/fr/widgets/catalogue/tags/index.html`. Exemple :

```html
<!-- BEGIN:main -->


  <!-- BEGIN: intitule -->
  <h1>{intitule}</h1>
  <!-- END: intitule -->
  
    <ul>
      <!-- BEGIN:tag -->
      <li><a href="{lien_tag}" title="{tag|htmlentities}">{tag} ({qt})</a></li>
      <!-- END:tag -->
    </ul>
    <!-- BEGIN:notag -->
    <p>Pas de mots cl&eacute;s </p>
    <!-- END:notag -->
  

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── tag     // Le contenu du bloc s'affiche pour chaque tag.
    └── notag     // Le contenu du bloc s'affiche s'il n'y a pas de tags de disponibles.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_categorie_id | Choix de la catégorie dont les tags doivent être affichés. |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| tag | tag | Intitulé du tag. |
| tag | lien_tag | Lien vers la catégorie en cours ou le moteur de recherche restreint au tag cliqué. |
| tag | lien_recherche | Lien vers le moteur de recherche restreint au tag cliqué. |
| tag | qt | Nombre de produit ayant ce tag. |
| tag | poids | Indique le « poids » d'un tag par rapport aux autres. Nécessaire pour le nuage de tags. Affiche 1, 2, 3, 4 en fonction du « poids », plus le « poids » est élevé plus le chiffre est important. |
| tag | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| tag | alterne | La balise affichera alternativement 1 ou 2. |
| tag | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| tag | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| tag | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |


## Widget Catalogue / Liste des catégories

**Affiche la liste détaillée des catégories du Catalogue.**

Une catégorie du Catalogue peut en plus de son intitulé avoir une illustration et une description. 
Chaque catégorie permet d'accéder à la page de détail de la catégorie et de restreindre l'affichage des produits à ceux qui ont été publiés dans cette catégorie.

### Template

Le template du widget : `theme/fr/widgets/catalogue/liste_categories/index.html`. Exemple :

```html
<!-- BEGIN:main -->
<!-- BEGIN:categorie -->



  <h1><a href="{lien_categorie}" title="Plus de détail">{intitule_categorie}</a></h1>
  
  <!-- BEGIN:illustration -->
  <a href="{lien_categorie}" title="{intitule_categorie|htmlentities} - Cliquez pour acc&eacute;der"><img src="{url_illustration_g_miniature}" alt="{intitule_categorie|htmlentities}" /></a>
  <!-- END:illustration -->
  <div style="margin-left: {g_miniature_l}px;">
    <!-- BEGIN:accroche -->
    <p>{accroche}</p>
    <!-- END:accroche -->
  </div>

<!-- END:categorie -->
<!-- BEGIN:nocategorie -->
<p>Pas de catégorie disponible</p>
<!-- END:nocategorie -->
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
</div>
<!-- END: nav2 -->
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── categorie     // Le contenu du bloc s'affiche pour chaque catégorie.
    │   ├── illustration     // Le contenu du bloc s'affiche si la catégorie a une illustration.
    │   └── accroche     // Le contenu du bloc s'affiche si la catégorie a une description.
    └── nocategorie     // Le contenu du bloc s'affiche s'il n'y a pas de catégories de disponibles.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_categorie_id | Choix de la page dont le contenu doit être affiché. |
| main | widget_order_api | Critère de tri appliqués à l'API Front-office |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_afficher_navigation | Affiche 1 si la navigation est affichée, 0 si elle est masquée |
| categorie | categorie_id | Id de la catégorie. |
| categorie | intitule_categorie | Intitulé de la catégorie. |
| categorie | lien_categorie | Lien vers la page de détail de la catégorie. |
| categorie | nom_optim | Nom optimisé de la catégorie. |
| categorie | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| categorie | alterne | La balise affichera alternativement 1 ou 2. |
| categorie | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| categorie | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| categorie | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| illustration | illustration | Numéro de fichier dans la médiathèque de l'illustration de la catégorie. |
| illustration | url_illustration | Url complète de l'illustration |
| illustration | url_illustration_miniature | Url complète de la miniature de l'illustration |
| illustration | url_illustration_vignette | Url complète de la vignette de l'illustration |
| illustration | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration |
| illustration | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration |
| illustration | ext_illustration | Extension de fichier de l'illustration |
| accroche | accroche | Description de la catégorie. |


## Widget Catalogue / Liste des produits

**Ce widget très important affiche une liste de produits.**

Ce widget est très polyvalent et permet de générer des listings de produit très variés en fonction des paramètres, de la configuration et du modèle graphique choisi.

Contrairement aux autres widgets, la Liste des produits est composé de 3 fichiers :

 - index.html : correspond aux éléments communs au listing de produit.
 - liste.html : correspond à une présentation du listing sous la forme d'une liste.
 - vignettes.html : correspond à une présentation du listing sous la forme de vignettes.

### Template

Le template du widget : `theme/fr/widgets/catalogue/liste_produits/index.html`. Exemple :

```html
<!-- BEGIN: main -->


  <!-- BEGIN:intitule -->
  
  <h1>{intitule}</h1>
  
  <!-- END:intitule -->
  <p><a href="{lien_affichage}=l">Affichage en liste</a> | <a href="{lien_affichage}=v">Affichage en vignette</a></p>
  <div>
  
  
<select name="select" id="select" onchange="window.location.href=this.options[this.selectedIndex].value">
<option value="" >Trier par...</option>

<option value="{lien_tri}=po">Produit</option>
<option value="{lien_tri}=pi">Prix</option>
<option value="{lien_tri}=n">Note</option>
<option value="{lien_tri}=d">Date de disponibilit&eacute;</option>
</select>
  
  </div>
  {liste_produits}

<!-- BEGIN: nav2 -->
<div>
  <!-- BEGIN: premier -->
  <a href="{lien_premier}" title="premi&egrave;re page">premi&egrave;re page</a> 
  <!-- END: premier -->
  <!-- BEGIN: precedent -->
  <a href="{lien_precedent}" title="page pr&eacute;c&eacute;dente">page pr&eacute;c&eacute;dente</a> 
  <!-- END: precedent -->
  <!-- BEGIN: pages -->
  <a href="{lien_page}">{page}</a>
  <!-- END: pages -->
  <!-- BEGIN: suivant -->
  <a href="{lien_suivant}" title="page suivante">page suivante</a>
  <!-- END: suivant -->
  <!-- BEGIN: dernier -->
   <a href="{lien_dernier}" title="derni&egrave;re page">derni&egrave;re page</a>
  <!-- END: dernier -->
</div>
<!-- END: nav2 -->
<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    └── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | identifiant du widget dans la page. Sert surtout pour du DHTML afin d"identifier de manière unique des éléments HTML dans la page. Exemple : <br /><pre><br />&lt;div id="element{serial}"&gt;<br /></pre> |
| main | lien_affichage | Lien qui permet de basculer entre l'affichage en mode Vignettes ou en mode Liste. |
| main | affichage_liste | Affiche "actif" en mode Liste. |
| main | affichage_vignettes | Affiche "actif" en mode Vignettes. |
| main | liste_produits | Inclusion du modèle de mise en page liste.html ou vignettes.html |
| main | type_prix | "HT" ou "TTC" |
| main | lien_tri | Affiche un lien pour changer l'ordre de tri des produits |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_affichage | Affiche "l" pour les listing en list et "v" pour les listings en vignette. |
| main | widget_tags | Liste des tags |
| main | widget_tags_logique | Opérateur logique entre les tags |
| main | widget_order_api | Critère de tri appliqués à l'API Front-office |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_resume | Longueur maximale des accroches |
| main | widget_afficher_navigation | Affiche 1 si la navigation est affichée, 0 si elle est masquée |
| main | widget_categorie_id | Choix de la catégorie dont le contenu doit être affiché. |
| main | widget_stock | Affiche les valeurs suivantes : <br /><br /> - "rupture" : le widget n'affiche que les produits en rupture<br /> - "stock" : le widget n'affiche que les produits en stock<br /> - vide : le stock n'est pas pris en compte |
| main | widget_dispo | Affiche les valeurs suivantes : <br /><br /> - "dispo" : le widget n'affiche que les produits disponibles<br /> - "nondispo" : le widget n'affiche que les produits qui ne sont pas encore disponibles<br /> - vide : la date de disponibilité n'est pas pris en compte |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |


## Widget Catalogue / Liste des produits : 
Liste simple et vignettes

**Cette partie est celle qui contient les boucles sur les produits. Les blocs et les balises sont les mêmes pour les deux modes d'affichages supportés, à savoir :**

 - Affichage par liste simple (cf. template simple.html)
 - Afichage par vignettes (cf. template vignette.thml)

### Template

Le template du widget : `theme/fr/widgets/catalogue/liste_produits/liste.html
widgets/catalogue/liste_produits/vignettes.html `. Exemple :

```html
<!-- BEGIN: main -->
<!-- BEGIN:produits -->

<ul>
  <!-- BEGIN:produit -->
  <li>
	<form id="fp{serial}_{produit_id}" method="post" action="{baseLangue}/ecommerce/panier.html">
    <div>
      <!-- BEGIN: illustration -->
      <a href="{lien_produit}" title="{intitule_produit|htmlentities} - Cliquez pour acc&eacute;der"><img src="{url_illustration_miniature}" alt="{intitule_produit|htmlentities}" /></a>
      <!-- END: illustration -->
      <!-- BEGIN: noillustration -->
      <a href="{lien_produit}" title="{intitule_produit|htmlentities} - Cliquez pour acc&eacute;der"><img src="{racine}/{theme}/fr/images/produit_mini.gif" alt="{intitule_produit|htmlentities}" /></a>
      <!-- END: noillustration -->
      <div style="margin-left: {miniature_h}px;">
        <h2><a href="{lien_produit}">{intitule_produit}</a></h2>
        
        <!-- BEGIN:tags -->
        <p>{tags}</p>
        <!-- END:tags -->
        <!-- BEGIN:non_disponible -->
        <p>Disponible à partir du {num_jour_disponibilite}/{num_mois_disponibilite}/{annee_disponibilite}</p>
        <!-- END:non_disponible -->
        <!-- BEGIN:rupture_partielle -->
        <p>Certaines variantes sont indisponibles</p>
        <!-- END:rupture_partielle -->
        <!-- BEGIN:rupture -->
        <p>Produit en rupture de stock</p>
        <!-- END:rupture -->
         <!-- BEGIN:accroche -->
        <p>{accroche}</p>
        <!-- END:accroche -->
       <div>
          <!-- BEGIN:variantes -->
          <select name="vid">
            <!-- BEGIN:variante -->
            <!-- BEGIN:en_stock -->
            <option value="{variante_id}">{intitule_variante} - {prix_variante}</option>
            <!-- END:en_stock -->
            <!-- BEGIN:rupture -->
            <!--<optgroup label="{intitule_variante} - {prix_variante}" disabled="disabled"></optgroup>-->
            <!-- END:rupture -->
            <!-- END:variante -->
          </select>
          <!-- END:variantes -->
          <!-- BEGIN: panier -->
          <!-- <a href="javascript:void(0);" onclick="Ssubmit('fp{serial}_{produit_id}')" title="Ajouter au panier">Ajouter au panier</a> -->
		  <input type="submit" value="Ajouter au panier" title="Ajouter au panier" />
          <!-- END: panier -->
        </div>
        <p>{prix}
          <!-- BEGIN:prix_barre -->
          <del>{prix_barre}</del>
          <!-- END:prix_barre -->
        </p>
      </div>
    </div>
		<input type="hidden" name="pid" value="{produit_id}" />
		<input type="hidden" name="act" value="addP" />
		<input type="hidden" name="ctl" value="{ctl}" />
	</form>
  </li>
  <!-- END:produit -->
</ul>
<!-- END:produits -->
<!-- BEGIN:noproduit -->
Pas de produit disponible
<!-- END:noproduit -->
<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── produits     // Le contenu du bloc s'affiche s'il y a des produits.
    │   └── produit     // Le contenu du bloc s'affiche pour chaque produit.
    │       ├── illustration     // Le contenu du bloc s'affiche si le produit a au moins une illustration
    │       ├── noillustration     // Le contenu du bloc s'affiche si le produit n'a pas d'illustration.
    │       ├── en_avant     // Le contenu du bloc s'affiche si le produit est un produit vedette.
    │       ├── accroche     // Le contenu du bloc s'affiche si l'accroche du produit a une valeur.
    │       ├── chapo     // Le contenu du bloc s'affiche si le chapô du produit a une valeur.
    │       ├── description     // Le contenu du bloc s'affiche si la description du produit a une valeur.
    │       ├── tags     // Le contenu du bloc s'affiche si le produit a un ou plusieurs tags.
    │       ├── prix_promo     // Le contenu du bloc s'affiche si le produit a au moins une variante en promo.
    │       ├── prix_barre     // Le contenu du bloc s'affiche si le produit a toutes ces variantes avec le même prix et le même prix promo.
    │       ├── texte1     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte2     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte3     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte4     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte5     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte6     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte7     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte8     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte9     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte10     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte11     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte12     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte13     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte14     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte15     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── marque     // Le contenu du bloc s'affiche si le produit est assigné à une marque.
    │       ├── non_disponible     // Le contenu du bloc s'affiche si le produit n'est pas encore disponible (date de disponibilité suppérieure à la date courante).
    │       ├── rupture     // Le contenu du bloc s'affiche si toutes les variantes du produit sont en rupture de stock.
    │       ├── rupture_partielle     // Le contenu du bloc s'affiche si une variante du produit est en rupture de stock.
    │       ├── en_stock     // Le contenu du bloc s'affiche si toutes les variantes du produit sont en stock.
    │       ├── variantes     // Le contenu du bloc s'affiche si le produit a au moins une variante.
    │       │   └── variante     // Le contenu du bloc s'affiche pour chaque variante mais seulement si le produit est achetable
    │       │       ├── etat     // Le contenu du bloc s'affiche si une variante a un état défini.
    │       │       ├── illustration     // Le contenu du bloc s'affiche si une variante a une illustration
    │       │       ├── noillustration     // Le contenu du bloc s'affiche si une variante n'a pas d'illustration
    │       │       ├── rupture     // Le contenu du bloc s'affiche si une variante est en rupture de stock.
    │       │       │   ├── prix_barre     // Le contenu du bloc s'affiche si une variante est en rupture de stock et si la variante a un prix promo renseigné.
    │       │       │   └── etat     // Le contenu du bloc s'affiche si une variante en rupture de stock a un état défini.
    │       │       ├── en_stock     // Le contenu du bloc s'affiche si une variante est en stock.
    │       │       │   ├── etat     // Le contenu du bloc s'affiche si une variante en stock a un état défini.
    │       │       │   └── prix_barre     // Le contenu du bloc s'affiche si une variante est en stock et si la variante a un prix promo renseigné.
    │       │       └── eco_taxe     // Le contenu du bloc s'affiche si une variante à une éco-participation de définie.
    │       ├── variantes_optim     // Le contenu du bloc s'affiche si le produit a plus d'une variante.
    │       │   └── variante     // Le contenu du bloc ne s'affiche que si le produit est achetable et s'il y a plus d'une variante
    │       │       ├── rupture     // Le contenu du bloc s'affiche si une variante est en rupture de stock.
    │       │       │   ├── prix_barre     // Le contenu du bloc s'affiche si une variante est en rupture de stock et si la variante a un prix promo renseigné.
    │       │       │   └── etat     // Le contenu du bloc s'affiche si une variante en rupture de stock a un état défini.
    │       │       ├── en_stock     // Le contenu du bloc s'affiche si une variante est en stock.
    │       │       │   ├── etat     // Le contenu du bloc s'affiche si une variante en stock a un état défini.
    │       │       │   └── prix_barre     // Le contenu du bloc s'affiche si une variante est en stock et si la variante a un prix promo renseigné.
    │       │       └── eco_taxe      // Le contenu du bloc s'affiche si une variante à une éco-participation de définie.
    │       ├── novariantes     // Le contenu du bloc s'affiche si le produit n'est PAS achetable
    │       ├── novariantes_optim     // Le contenu du bloc s'affiche si le produit n'est PAS achetable
    │       ├── panier     // Le contenu du bloc s'affiche si le produit peut être ajouté au panier (en raison du stock, de la date de disponibilité, de la présence des fonctionnalités e-commerce).
    │       ├── achetable     // Le contenu du bloc s'affiche si le produit peut être ajouté au panier (en raison du stock, de la date de disponibilité, de la présence des fonctionnalités e-commerce).
    │       ├── noachetable     // Le contenu du bloc s'affiche si le produit ne peut pas être ajouté au panier (en raison du stock, de la date de disponibilité, de l'absence des fonctionnalités e-commerce).
    │       └── nopanier     // Le contenu du bloc s'affiche si le produit ne peut pas être ajouté au panier (en raison du stock, de la date de disponibilité, de l'absence des fonctionnalités e-commerce).
    └── noproduit     // Le contenu du bloc s'affiche s'il n'y a pas de produit.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | type_prix | "HT" ou "TTC" |
| main | lien_tri | Affiche un lien pour changer l'ordre de tri des produits |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_affichage | Affiche "l" pour les listing en list et "v" pour les listings en vignette. |
| main | widget_tags | Liste des tags |
| main | widget_tags_logique | Opérateur logique entre les tags |
| main | widget_order_api | Critère de tri appliqués à l'API Front-office |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_resume | Longueur maximale des accroches |
| main | widget_afficher_navigation | Affiche 1 si la navigation est affichée, 0 si elle est masquée |
| main | widget_categorie_id | Choix de la catégorie dont le contenu doit être affiché. |
| main | widget_stock | Affiche les valeurs suivantes : <br /><br /> - "rupture" : le widget n'affiche que les produits en rupture<br /> - "stock" : le widget n'affiche que les produits en stock<br /> - vide : le stock n'est pas pris en compte |
| main | widget_dispo | Affiche les valeurs suivantes : <br /><br /> - "dispo" : le widget n'affiche que les produits disponibles<br /> - "nondispo" : le widget n'affiche que les produits qui ne sont pas encore disponibles<br /> - vide : la date de disponibilité n'est pas pris en compte |
| produit | produit_id | Id du produit. |
| produit | type_produit | Type du produit càd le nom du répertoire du produit dans l'espace FTP. |
| produit | en_avant | Affiche 1 si le produit est un produit vedette, sinon affiche 0. |
| produit | nb_commentaires | Nombre de commentaires. |
| produit | note_moyenne | Note moyenne ; 0 à 10. |
| produit | note_moyenne_5 | Note moyenne ; 0 à 5. |
| produit | nb_vus | nombre de consultation de la page de détail du produit |
| produit | nb_achats | quantité de produit vendus (toutes variantes confondues !) |
| produit | num_jour_disponibilite | Affiche le numéro du jour de la date de disponibilité (01 - 31). |
| produit | jour_semaine_disponibilite | Affiche le jour de la semaine de la date de disponibilité (lundi - dimanche). |
| produit | num_mois_disponibilite | Affiche le numéro du mois de la date de disponibilité (01 - 12). |
| produit | mois_disponibilite | Affiche le mois de la date de disponibilité (janvier - décembre). |
| produit | mois_abrev_disponibilite | Affiche le mois de la date de disponibilité abrégé (jan - déc) |
| produit | annee_disponibilite | Affiche l'année de la date de disponibilité (2010). |
| produit | minute_disponibilite | Affiche les minutes de la date de disponibilité (00-59). |
| produit | heure_disponibilite | Affiche l'heure de la date de disponibilité (00-23). |
| produit | seconde_disponibilite | Affiche les secondes de la date de disponibilité (00-59). |
| produit | timestamp_disponibilite | Affiche le timestamp de la date de disponibilité. |
| produit | intitule_produit | Intitulé du produit. |
| produit | nom_optim | Nom optimisé du produit |
| produit | categorie_id | Id de la catégorie en cours du produit. |
| produit | intitule_categorie | Intitulé de la catégorie en cours du produit. |
| produit | categorie_optim | Nom optimisé de la catégorie en cours du produit. |
| produit | lien_produit | Lien vers la page de détail du produit. |
| produit | lien_categorie | Lien vers la catégorie en cours du produit. |
| produit | accroche | Accroche du produit. Affiche le chapô du produit ou son contenu si son chapô est vide. |
| produit | chapo | Chapô du produit. |
| produit | description | Description du produit. |
| produit | tags | Affiche la liste des tags du produit. Le lien renvoi vers la catégorie en cours du produit restreint au tag cliqué. |
| produit | tags_recherche | Affiche la liste des tags du produit. Le lien renvoi vers le moteur de recherche restreint au tag cliqué. |
| produit | prix_min | Affiche le prix minimum toutes variantes confondues. |
| produit | prix_max | Affiche le prix maximum toutes variantes confondues. |
| produit | prix_barre | Affiche le prix normal si toutes les variantes ont un prix promo renseigné identique, sinon n'affiche rien. |
| produit | prix | Comportement standard du prix.<br />Si une variante à un prix : affiche le prix <br />Si une variante à un prix promo : affiche le prix promo <br />Si plusieurs variantes ont un prix identique : affiche le prix <br />Si plusieurs variantes ont un prix promo identique : affiche le prix promo<br />Si plusieurs variantes ont un prix (promo) différent : affiche « prix minium (promo comprise) - prix maximum (promo comprise) » |
| produit | prix_HT_min | Affiche le prix minimum (promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_min | Affiche le prix minimum (promo comprise) TTC toutes variantes confondues. |
| produit | prix_HT_max | Affiche le prix maximum (promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_max | Affiche le prix maximum (promo comprise) TTC toutes variantes confondues. |
| produit | prix_min_valeur | Affiche le prix minimum toutes variantes confondues sans formattage. |
| produit | prix_max_valeur | Affiche le prix maximum toutes variantes confondues sans formattage. |
| produit | prix_barre_valeur | Affiche le prix normal sans formattage si toutes les variantes ont un prix promo renseigné identique, sinon n'affiche rien. |
| produit | prix_HT_min_valeur | Affiche le prix minimum sans formattage (promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_min_valeur | Affiche le prix minimum sans formattage (promo comprise) TTC toutes variantes confondues. |
| produit | prix_HT_max_valeur | Affiche le prix maximum sans formattage (promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_max_valeur | Affiche le prix maximum sans formattage (promo comprise) TTC toutes variantes confondues. |
| produit | texte1 à texte15 | Affiche les champs texte1 à texte15. |
| produit | marque | Affiche la marque du produit |
| produit | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| produit | alterne | La balise affichera alternativement 1 ou 2. |
| produit | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| produit | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| produit | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| illustration | illustration | Numéro de fichier dans la médiathèque de l'illustration principale du produit. |
| illustration | url_illustration | Url complète de l'illustration principale du produit |
| illustration | url_illustration_miniature | Url complète de la miniature de l'illustration principale |
| illustration | url_illustration_vignette | Url complète de la vignette de l'illustration principale |
| illustration | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration principale |
| illustration | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration principale |
| illustration | ext_illustration | Extension de fichier de l'illustration principale du produit |
| variante | variante_id | Id de la variante. |
| variante | reference | Référence de la variante. |
| variante | intitule_variante | Intitulé de la variante. |
| variante | prix_variante | Comportement standard du prix de la variante. Affiche le prix normal si le prix n'a pas de promo. Affiche le prix promo si le prix a une promo renseignée. |
| variante | prix_variante_HT | Comportement standard du prix de la variante, mais toujours en HT. |
| variante | prix_variante_TTC | Comportement standard du prix de la variante, mais toujours en TTC. |
| variante | prix_variante_barre | Affiche le prix normal si le prix promo est renseigné, sinon n'affiche rien. |
| variante | prix_variante_barre_HT | Affiche le prix normal HT si le prix promo est renseigné, sinon n'affiche rien. |
| variante | prix_variante_barre_TTC | Affiche le prix normal TTC si le prix promo est renseigné, sinon n'affiche rien. |
| variante | prix_variante_valeur | Comportement standard du prix de la variante sans formattage. <br />Affiche le prix normal si le prix n'a pas de promo. <br />Affiche le prix promo si le prix a une promo renseignée. |
| variante | prix_variante_HT_valeur | Comportement standard du prix de la variante, mais toujours en HT sans formattage. |
| variante | prix_variante_TTC_valeur | Comportement standard du prix de la variante, mais toujours en TTC sans formattage. |
| variante | prix_variante_barre_valeur | Affiche le prix normal sans formattage si le prix promo est renseigné, sinon n'affiche rien. |
| variante | prix_variante_barre_HT_valeur | Affiche le prix normal sans formattage HT si le prix promo est renseigné, sinon n'affiche rien. |
| variante | prix_variante_barre_TTC_valeur | Affiche le prix normal sans formattage TTC si le prix promo est renseigné, sinon n'affiche rien. |
| variante | eco_taxe_valeur | Montant de l'éco-participation sans formattage. |
| variante | poids | Poids de la variante. |
| variante | stock_illimite | Affiche 1 si le stock est illimité, sinon affiche 0. |
| variante | stock | Stock de la variante. |
| variante | eco_taxe | Montant de l'éco-participation. |
| variante | etat | Etat de la variante  : "neuf", "occasion" ou "reconditionné" |
| variante | code_barre | Code barre de la variante |
| variante | mêmes balises que bloc ci dessus | memes balises que bloc main.produits.produit.variantes.variante |
| illustration | illustration | Numéro de fichier dans la médiathèque de l'illustration de la variante. |
| illustration | illustration_intitule | Intitulé de l'illustration |
| illustration | url_illustration | Url complète de l'illustration de la variante. |
| illustration | url_illustration_miniature | Url complète de la miniature de l'illustration de la variante. |
| illustration | url_illustration_vignette | Url complète de la vignette de l'illustration de la variante. |
| illustration | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration de la variante. |
| illustration | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration de la variante. |
| illustration | ext_illustration | Extension de fichier de l'illustration de la variante. |


## Widget Catalogue / Détail d'un produit

**Ce widget très important affiche le détail d'un produit. Voir la section [les types de produits](generalites.html#bloc3).**

**ce widget ne peut être utilisé que sur la page type "Détail du produit" du service "Catalogue".** 

### Template

Le template du widget : `theme/fr/produits/simple/index.html`. Exemple :

```html
<!-- BEGIN: main -->
<h1>{intitule_produit}</h1>

  <!-- BEGIN: illustrations --> 
  <a href="{url_illustration_principale}" title="{intitule_produit|htmlentities} - Cliquez pour agrandir"><img src="{url_illustration_principale_g_vignette}" alt="{intitule_produit|htmlentities}"/></a>
      <!-- BEGIN: illustration -->
      <a href="{url_illustration}" title="{intitule_produit|htmlentities} - Cliquez pour agrandir"><img src="{url_illustration_miniature}" alt="{intitule_produit|htmlentities}" /></a>
      <!-- END: illustration -->
  <!-- END: illustrations -->
  
  <!-- BEGIN: noillustrations -->
      <img src="{racine}/{theme}/fr/images/produit.gif" alt="{intitule_produit|htmlentities}" />
  <!-- END: noillustrations -->
  
  <!-- BEGIN:tags --><p>{tags}</p><!-- END:tags -->
  <!-- BEGIN:reference --><p>{reference}</p><!-- END:reference -->
  <!-- BEGIN: marque --><p>Marque : {marque}</p><!-- END: marque -->
  
  <!-- BEGIN:non_disponible --><p>Disponible à partir du {num_jour_disponibilite}/{num_mois_disponibilite}/{annee_disponibilite}</p><!-- END:non_disponible -->
  <!-- BEGIN:en_stock --><p>En stock</p><!-- END:en_stock -->
  <!-- BEGIN:rupture_partielle --><p>Certaines variantes sont indisponibles</p><!-- END:rupture_partielle -->
  <!-- BEGIN:rupture --><p>Produit en rupture de stock</p><!-- END:rupture -->

    <!-- BEGIN:tarif_degressif -->
    <p>Profiter d'un tarif dégressif :</p>
    <ul>
        <!-- BEGIN:tranche -->
        <li>A partir de {qt} : {remise|formatFloat|2}% de réduction</li>
        <!-- END:tranche -->
    </ul>
    <!-- END:tarif_degressif -->

  <p><!-- BEGIN:prix_promo -->En promo !<!-- END:prix_promo -->{prix}
    <!-- BEGIN:prix_barre --><del>{prix_barre}</del><!-- END:prix_barre -->
  </p>

  <!-- BEGIN:accroche --><p>{accroche}</p><!-- END:accroche -->
	  
  <form id="fp{serial}_{produit_id}" method="post" action="{baseLangue}/ecommerce/panier.html">
	  
      <!-- BEGIN:variantes -->
      <ul>
         <!-- BEGIN:variante -->
         <li>
          	<!-- BEGIN:illustration -->
   			   <img src="{url_illustration_miniature}" alt="{intitule_variante|htmlentities}"/>
			<!-- END:illustration -->
			
            <!-- BEGIN:en_stock -->
            <input name="vid" type="radio" value="{variante_id}" id="variante{produit_id}_{variante_id}" {checked}/>
            <label for="variante{produit_id}_{variante_id}">{intitule_variante} - {prix_variante_valeur} {devise_iso}
            <!-- BEGIN:prix_barre -->&nbsp;<del>{prix_variante_barre}</del><!-- END:prix_barre -->
            <!-- END:en_stock -->
			
            <!-- BEGIN:rupture -->
            <input name="vid" type="radio" value="{variante_id}" id="variante{produit_id}_{variante_id}" disabled="disabled"/>
            <label for="variante{produit_id}_{variante_id}">{intitule_variante} - {prix_variante_valeur} {devise_iso}
            <!-- BEGIN:prix_barre -->&nbsp;<del>{prix_variante_barre}</del><!-- END:prix_barre -->
            <!-- END:rupture -->
			
            <!-- BEGIN: eco_taxe -->
               dont {eco_taxe} d'&eacute;co-part
            <!-- END: eco_taxe -->
            <!-- BEGIN: etat -->
              | Etat : <strong>{etat}</strong>
              <!-- END: etat -->
            <!-- BEGIN: code_barre -->
              | Code barre : <strong>{code_barre}</strong>
            <!-- END: code_barre -->
            </label>
         </li>
         <!-- END:variante -->
      </ul>
      <!-- END:variantes -->
		
       <!-- BEGIN:panier-->
       <div>Quantit&eacute; : 
          <select name="qt">
		  <option value="1">1</option><option value="2">2</option>
          <option value="3">3</option><option value="4">4</option>
          <option value="5">5</option><option value="6">6</option>
		  <option value="7">7</option><option value="8">8</option>
          <option value="9">9</option><option value="10">10</option>
        </select>
        <input type="submit" value="Ajouter au panier" /></div>
        <!-- END:panier-->
        <input type="hidden" name="pid" value="{produit_id}" />
        <input type="hidden" name="act" value="addP" />
        <input type="hidden" name="ctl" value="{ctl}" />
      </form>
    
	<!-- BEGIN: description --><p>{description}</p><!-- END: description -->

<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── illustrations     // Le bloc ne s'affiche que si le produit à au moins une illustration
    │   └── illustration     // Le contenu du bloc s'affiche pour chaque illustration secondaires du produits
    ├── noillustrations     // Le bloc s'affiche si le produit n'a pas d'illustration
    ├── commentaires     // Le contenu de cette balise s'affiche si le produit a au moins un commentaire.
    ├── vedette     // Le contenu du bloc s'affiche si le produit est un produit vedette.
    ├── accroche     // Le contenu du bloc s'affiche si l'accroche du produit a une valeur.
    ├── chapo     // Le contenu du bloc s'affiche si le chapô du produit a une valeur.
    ├── description     // Le contenu du bloc s'affiche si la description du produit a une valeur.
    ├── tags     // Le contenu du bloc s'affiche si le produit a un ou plusieurs tags.
    ├── prix_promo     // Le contenu du bloc s'affiche si le produit a au moins une variante en promo.
    ├── prix_barre     // Le contenu du bloc s'affiche si le produit a toutes ces variantes avec le même prix et le même prix promo.
    ├── tarif_degressif     // Le bloc s'affiche si une grille de tarifs dégressifs est appliquée au produit
    │   └── tranche     // Le contenu du bloc s'affiche pour chaque tranche de la grille de tarifs
    ├── marque     // Le contenu du bloc s'affiche si le produit est assigné à une marque.
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
    ├── texte15     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    ├── non_disponible     // Le contenu du bloc s'affiche si le produit n'est pas encore disponible (date de disponibilité suppérieure à la date courante) .
    ├── rupture     // Le contenu du bloc s'affiche si toutes les variantes du produit sont en rupture de stock.
    ├── rupture_partielle     // Le contenu du bloc s'affiche si une variante du produit est en rupture de stock.
    ├── en_stock     // Le contenu du bloc s'affiche si toutes les variantes du produit sont en stock.
    ├── achetable     // Le contenu du bloc s'affiche si le produit peut être ajouté au panier (en raison du stock, de la date de disponibilité, de la présence des fonctionnalités e-commerce).
    ├── panier     // Le contenu du bloc s'affiche si le produit peut être ajouté au panier (en raison du stock, de la date de disponibilité, de la présence des fonctionnalités e-commerce).
    ├── noachetable     // Le contenu du bloc s'affiche si le produit ne peut pas être ajouté au panier (en raison du stock, de la date de disponibilité, de l'absence des fonctionnalités e-commerce).
    ├── nopanier     // Le contenu du bloc s'affiche si le produit ne peut pas être ajouté au panier (en raison du stock, de la date de disponibilité, de l'absence des fonctionnalités e-commerce).
    ├── variantes     // Le contenu du bloc s'affiche si le produit a au moins une variante.
    │   └── variante     // Le contenu du bloc s'affiche pour chaque variante
    │       ├── etat     // Le contenu du bloc s'affiche si une variante a un état défini.
    │       ├── reference     // Le contenu du bloc s'affiche si une variante a une référence.
    │       ├── code_barre     // Le contenu du bloc s'affiche si une variante a un code barre.
    │       ├── illustration     // Le contenu du bloc s'affiche si une variante a une illustration
    │       ├── noillustration     // Le contenu du bloc s'affiche si une variante n'a pas d'illustration
    │       ├── rupture     // Le contenu du bloc s'affiche si une variante est en rupture de stock.
    │       │   ├── prix_barre     // Le contenu du bloc s'affiche si une variante est en rupture de stock et si la variante a un prix promo renseigné.
    │       │   └── etat     // Le contenu du bloc s'affiche si une varitante est en rupture et que son état est renseigné.
    │       ├── en_stock     // Le contenu du bloc s'affiche si une variante est en stock
    │       │   ├── prix_barre     // Le contenu du bloc s'affiche si une variante est en stock et si la variante a un prix promo renseigné.
    │       │   └── etat     // Le contenu du bloc s'affiche si une varitante est en stock et que son état est renseigné.
    │       └── eco_taxe     // Le contenu du bloc s'affiche si une variante à une éco-participation de définie.
    └── variantes_optim     // Le contenu du bloc s'affiche si le produit a plus d'une variante.
        └── variante     // Le contenu du bloc s'affiche pour chaque variante
            ├── etat     // Le contenu du bloc s'affiche si une variante a un état défini.
            ├── reference     // Le contenu du bloc s'affiche si une variante a une référence.
            ├── code_barre     // Le contenu du bloc s'affiche si une variante a un code barre.
            ├── rupture     // Le contenu du bloc s'affiche si une variante est en rupture de stock.
            │   ├── prix_barre     // Le contenu du bloc s'affiche si une variante est en rupture de stock et si la variante a un prix promo renseigné.
            │   └── etat     // Le contenu du bloc s'affiche si une varitante est en rupture et que son état est renseigné.
            ├── en_stock     // Le contenu du bloc s'affiche si une variante est en stock
            │   ├── prix_barre     // Le contenu du bloc s'affiche si une variante est en stock et si la variante a un prix promo renseigné.
            │   └── etat     // Le contenu du bloc s'affiche si une varitante est en stock et que son état est renseigné.
            └── eco_taxe     // Le contenu du bloc s'affiche si une variante à une éco-participation de définie.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | type_prix | "HT" ou "TTC" |
| main | produit_id | Id du produit. |
| main | type_produit | Type du produit. Affiche le nom du répertoire du produit dans l'espace FTP. |
| main | en_avant | Affiche 1 si le produit est un produit vedette, sinon affiche 0. |
| main | nb_commentaires | Nombre de commentaires. |
| main | note_moyenne | Note moyenne ; 0 à 10. |
| main | note_moyenne_5 | Note moyenne ; 0 à 5. |
| main | nb_vus | nombre de consultation de la page de détail du produit |
| main | nb_achats | Quantité de produits vendus, toutes variantes confondues. |
| main | num_jour_disponibilite | Affiche le numéro du jour de la date de disponibilité (01 - 31). |
| main | jour_semaine_disponibilite | Affiche le jour de la semaine de la date de disponibilité (lundi - dimanche). |
| main | num_mois_disponibilite | Affiche le numéro du mois de la date de disponibilité (01 - 12). |
| main | mois_disponibilite | Affiche le mois de la date de disponibilité (janvier - décembre). |
| main | mois_abrev_disponibilite | Affiche le mois de la date de disponibilité abrégé (jan - déc) |
| main | annee_disponibilite | Affiche l'année de la date de disponibilité (2010). |
| main | minute_disponibilite | Affiche les minutes de la date de disponibilité (00-59). |
| main | heure_disponibilite | Affiche l'heure de la date de disponibilité (00-23). |
| main | seconde_disponibilite | Affiche les secondes de la date de disponibilité (00-59). |
| main | timestamp_disponibilite | Affiche le timestamp de la date de disponibilité. |
| main | intitule_produit | Intitulé du produit. |
| main | nom_optim | Nom optimisé du produit |
| main | categorie_id | Id de la catégorie en cours du produit. |
| main | intitule_categorie | Intitulé de la catégorie en cours du produit. |
| main | categorie_optim | Nom optimisé de la catégorie en cours du produit, tel qu'il est défini dans les options avancées de la page d'édition de la catégorie. Représente le « dossier virtuel » utilisé dans la réécriture d'URL pour arriver sur la page de la catégorie. |
| main | lien_categorie | Lien vers la catégorie en cours du produit. |
| main | accroche | Accroche du produit. Affiche le chapô du produit ou son contenu si son chapô est vide. |
| main | chapo | Chapô du produit. |
| main | description | Description du produit. |
| main | tags | Affiche la liste des tags du produit. Le lien renvoi vers la catégorie en cours du produit restreint au tag cliqué. |
| main | tags_recherche | Affiche la liste des tags du produit. Le lien renvoi vers le moteur de recherche restreint au tag cliqué. |
| main | prix_min | Affiche le prix minimum toutes variantes confondues. |
| main | prix_max | Affiche le prix maximum toutes variantes confondues. |
| main | prix_barre | Affiche le prix normal si toutes les variantes ont un prix promo renseigné identique, sinon n'affiche rien. |
| main | prix | Comportement standard du prix.<br />Si une variante à un prix : affiche le prix <br />Si une variante à un prix promo : affiche le prix promo <br />Si plusieurs variantes ont un prix identique : affiche le prix <br />Si plusieurs variantes ont un prix promo identique : affiche le prix promo<br />Si plusieurs variantes ont un prix (promo) différent : affiche « prix minium (promo comprise) - prix maximum (promo comprise) » |
| main | prix_HT_min | Affiche le prix minimum (promotion comprise) HT toutes variantes confondues. |
| main | prix_TTC_min | Affiche le prix minimum (promotion comprise) TTC toutes variantes confondues. |
| main | prix_HT_max | Affiche le prix maximum (promotion comprise) HT toutes variantes confondues. |
| main | prix_TTC_max | Affiche le prix maximum (promotion comprise) TTC toutes variantes confondues. |
| main | prix_min_valeur | Affiche le prix minimum, sans formattage, toutes variantes confondues. |
| main | prix_max_valeur | Affiche le prix maximum, sans formattage, toutes variantes confondues. |
| main | prix_barre_valeur | Affiche le prix normal, sans formattage, si toutes les variantes ont un prix promo renseigné identique, sinon n'affiche rien. |
| main | prix_HT_min_valeur | Affiche le prix minimum (sans formattage, promotion comprise) HT toutes variantes confondues. |
| main | prix_TTC_min_valeur | Affiche le prix minimum (sans formattage, promotion comprise) TTC toutes variantes confondues. |
| main | prix_HT_max_valeur | Affiche le prix maximum (sans formattage, promotion comprise) HT toutes variantes confondues. |
| main | prix_TTC_max_valeur | Affiche le prix maximum (sans formattage, promotion comprise) TTC toutes variantes confondues. |
| main | tarif_degressif | Affiche 1 si le produit possède une grille de tarifs dégressifs. Sinon affiche 0. |
| main | marque | Affiche la marque du produit |
| main | texte1 à texte15 | Affiche les champs texte1 à texte15. |
| main | schema_json | Données structurées du produit au format json-ld. |
| illustrations | illustration_principale | Numéro de fichier dans la médiathèque de l'illustration principale du produit |
| illustrations | intitule_fichier | Intitulé du fichier dans la médiathèque. |
| illustrations | ext_principale | Extension de fichier de l'illustration principale du produit (déprécié : utiliser ext_illustration_principale) |
| illustrations | url_illustration_principale | Url complète de l'illustration principale du produit |
| illustrations | url_illustration_principale_miniature | Url complète de la miniature de l'illustration principale |
| illustrations | url_illustration_principale_vignette | Url complète de la vignette de l'illustration principale |
| illustrations | url_illustration_principale_g_miniature | Url complète de la grande miniature de l'illustration principale |
| illustrations | url_illustration_principale_g_vignette | Url complète de la grande vignette de l'illustration principale |
| illustrations | ext_illustration_principale | Extension de fichier de l'illustration principale du produit |
| illustrations | nom_origine | Nom d'origine de l'illustration principale |
| illustration | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| illustration | illustration | Numéro de fichier dans la médiathèque. |
| illustration | intitule_fichier | Intitulé du fichier dans la médiathèque. |
| illustration | ext | Extension de fichier d'une illustration secondaire du produit (déprécié : utiliser ext_illustration) |
| illustration | url_illustration | url complète d'une illustration secondaire du produit |
| illustration | url_illustration_miniature | Url complète de la miniature d'une illustration secondaire |
| illustration | url_illustration_vignette | Url complète de la vignette d'une illustration secondaire |
| illustration | url_illustration_g_miniature | Url complète de la grande miniature d'une illustration secondaire |
| illustration | url_illustration_g_vignette | Url complète de la grande vignette d'une illustration secondaire |
| illustration | ext_illustration | Extension de fichier d'une illustration secondaire du produit |
| illustration | nom_origine | Nom d'origine du fichier à l'upload dans la médiathèque. |
| tranche | qt | Quantité minimale de produits |
| tranche | remise | Remise accordée en pourcentage |
| variante | variante_id | Id de la variante. |
| variante | reference | Référence de la variante. |
| variante | intitule_variante | Intitulé de la variante. |
| variante | prix_variante | Comportement standard du prix de la variante. Affiche le prix normal si le prix n'a pas de promo. Affiche le prix promo si le prix a une promo renseignée. |
| variante | prix_variante_HT | Comportement standard du prix de la variante, mais toujours en HT. |
| variante | prix_variante_TTC | Comportement standard du prix de la variante, mais toujours en TTC. |
| variante | prix_variante_barre | Affiche le prix normal si le prix promo est renseigné, sinon n'affiche rien. |
| variante | prix_variante_barre_HT | Affiche le prix normal HT si le prix promo est renseigné, sinon n'affiche rien. |
| variante | prix_variante_barre_TTC | Affiche le prix normal TTC si le prix promo est renseigné, sinon n'affiche rien. |
| variante | prix_variante_valeur | Comportement standard du prix de la variante, sans formatage.<br />Affiche le prix normal si le prix n'a pas de promo.<br />Affiche le prix promo si le prix a une promo renseignée. |
| variante | prix_variante_HT_valeur | Comportement standard du prix de la variante, mais toujours en HT sans formatage. |
| variante | prix_variante_TTC_valeur | Comportement standard du prix de la variante, mais toujours en TTC sans formatage. |
| variante | prix_variante_barre_valeur | Affiche le prix normal sans formatage si le prix promo est renseigné, sinon n'affiche rien. |
| variante | prix_variante_barre_HT_valeur | Affiche le prix normal sans formatage HT si le prix promo est renseigné, sinon n'affiche rien. |
| variante | prix_variante_barre_TTC_valeur | Affiche le prix normal sans formatage TTC si le prix promo est renseigné, sinon n'affiche rien. |
| variante | poids | Poids de la variante. |
| variante | stock_illimite | Affiche 1 si le stock est illimité, sinon affiche 0. |
| variante | stock | Stock de la variante. |
| variante | eco_taxe | Montant de l'éco-participation. |
| variante | eco_taxe_valeur | Montant de l'éco-participation. |
| variante | checked | Affiche checked="checked” pour la première variante achetable, sinon n'affiche rien. Utilisé pour les boutons radios. |
| variante | is_checked | Affiche "1" pour la première variante achetable, sinon affiche "0". À utiliser avec le filtre mapValue. |
| variante | selected | Affiche selected="selected" pour la première variante achetable, sinon n'affiche rien. Utilisé pour les listes déroulantes. |
| variante | etat | Affiche l'état de la variante : "neuf", "occasion", "reconditionné" |
| variante | code_barre | Affiche le code barre de la variante |
| variante | mêmes balises que bloc ci dessus | memes balises que bloc ci dessus |
| illustration | illustration | Numéro de fichier dans la médiathèque de l'illustration de la variante. |
| illustration | illustration_intitule | Intitulé du fichier dans la médiathèque. |
| illustration | intitule_fichier | Intitulé du fichier dans la médiathèque. |
| illustration | url_illustration | Url complète de l'illustration de la variante. |
| illustration | url_illustration_miniature | Url complète de la miniature de l'illustration de la variante. |
| illustration | url_illustration_vignette | Url complète de la vignette de l'illustration de la variante. |
| illustration | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration de la variante. |
| illustration | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration de la variante. |
| illustration | ext_illustration | Extension de fichier de l'illustration de la variante. |


## Widget Catalogue / Poster un commentaire

**Affiche le formulaire d'ajout de commentaires à un produit du Catalogue.**

**ce widget ne peut être utilisé que sur la page type "Détail du produit" du service "Catalogue".** 

### Template

Le template du widget : `theme/fr/widgets/catalogue/poster_commentaire/index.html`. Exemple :

```html
<!-- BEGIN:main -->

  <h2>{intitule} </h2>
  
  <!-- BEGIN:commentaires_ouverts -->
  <!-- BEGIN:erreurs -->
  <div>Veuillez compl&eacute;ter les champs :
    <ul>
      <!-- BEGIN:erreur -->
      <li>{erreur}</li>
      <!-- END:erreur -->
    </ul>
  </div>
  <!-- END:erreurs -->
  <form method="post" action="#comment">
		<!-- BEGIN:identifie -->
		<!-- END:identifie -->
		<!-- BEGIN:nonidentifie -->
      <p><label for="auteur">Pseudo :</label> <input name="auteur" id="auteur" type="text" value="{auteur}" />
        </p>
      <p><label for="email">E-mail  :</label> <input name="email" id="email" type="text"  value="{email}" />
          facultatif
      </p>
	  <!-- END:nonidentifie -->
      <p><label for="note">Votre note sur 5 :</label> <select name="note" id="note">
          <option value="5" {selected_note5}>5 (Tr&egrave;s bon)</option>
          <option value="4" {selected_note4}>4</option>
          <option value="3" {selected_note3}>3</option>
          <option value="2" {selected_note2}>2</option>
          <option value="1" {selected_note1}>1</option>
          <option value="0" {selected_note0}>0 (Mauvais)</option>
        </select>
	  </p>

	  <p>
		  <label for="commentaire">Votre commentaire :</label>
		  <textarea name="commentaire" id="commentaire" rows="10" >{commentaire}</textarea>
	  </p>

	  <!-- BEGIN:consentement -->
	  <p>
		  <label for="consentement_ok">
			  <input name="consentement_ok" id="consentement_ok" type="checkbox" value="1" {check_consentement}/>J'accepte la publication du commentaire
		  </label>
	  </p>
	  <!-- END:consentement -->

      <!-- BEGIN:captcha -->
      <h2>Anti-spam : </h2>
      <p><label for="captcha">{captcha_question}</label>
          <input id="captcha" name="captcha[{captcha_id}]" type="text" style="width: 100px" /></p>
      <!-- END: captcha -->
     <p><input type="submit" name="Submit" value="Poster" title="Poster le commentaire" /></p>
    <div>
      <input type="hidden" name="act" value="post" />
      <input type="hidden" name="ctl" value="{ctl}" />
    </div>
  </form>
  <!-- END:commentaires_ouverts -->

  <!-- BEGIN:commentaires_identification -->
	<a href="{baseLangue}/compte/login.html?o=o">Identifiez vous</a> pour poster un commentaire.
  <!-- END:commentaires_identification -->

  <!-- BEGIN:commentaires_fermes -->
	Les commentaires de ce produit sont ferm&eacute;s
  <!-- END:commentaires_fermes -->

  <!-- BEGIN:commentaires_moderes -->
	Votre commentaire a bien été enregistr&eacute;, il doit d'abord &ecirc;tre valid&eacute; par l'&eacute;diteur du site avant d'appara&icirc;tre dans la liste des commentaires.
  <!-- END:commentaires_moderes -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── commentaires_ouverts     // Le contenu du bloc s'affiche quand les commentaires sont ouverts.
    │   ├── consentement     // Ce bloc s'affiche si le recueilement du consentement est activé
    │   ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    │   ├── identifie     // Le contenu du bloc s'affiche si l'internaute est identifié sur le site.
    │   ├── nonidentifie     // Le contenu du bloc s'affiche si l'internaute n'est pas identifié sur le site.
    │   ├── captcha     // Le contenu du bloc s'affiche si le captcha (dispositif anti-spam) est activé. Cette option est configurable "Mon site / Catalogue / Paramètres".
    │   └── erreurs     // Le contenu du bloc s'affiche s'il y a des erreurs à la soumission du commentaire.
    │       └── erreur     // Le contenu du bloc s'affiche pour chaque erreur.
    ├── commentaires_fermes     // Le contenu du bloc s'affiche quand les commentaires sont fermés.
    ├── commentaires_identification     // Le contenu du bloc s'affiche s'il est nécessaire de s'identifier pour poster des commentaires.
    └── commentaires_moderes     // Le contenu du bloc s'affiche une fois un commentaire publié si les commentaires sont modérés.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| commentaires_ouverts | auteur | Cette balise sert à réafficher le nom de l'auteur saisi dans le formulaire en cas d'erreur. |
| commentaires_ouverts | email | Cette balise sert à réafficher l'email de l'auteur saisi dans le formulaire en cas d'erreur. |
| commentaires_ouverts | commentaire | Cette balise sert à réafficher le commentaire de l'auteur saisi dans le formulaire en cas d'erreur. |
| commentaires_ouverts | note | Affiche la note saisie par l'auteur. S'il n'a pas saisi de note, affiche 0. |
| commentaires_ouverts | selected_note0 à selected_note10 | Cette balise sert à réafficher la note de l'auteur saisi dans le formulaire en cas d'erreur. Renvoi selected="selected". |
| consentement | check_consentement | Renvoi checked="checked" pour accepter le recueil des données. |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| captcha | captcha_question | Question du captcha. |
| captcha | captcha_id | Id du captcha. |
| erreur | erreur | Erreur indiquant qu'un champ est manquant ou mal rempli. |


## Widget Catalogue / Liste des commentaires

**Affiche les commentaires d'un produit du Catalogue.**

**ce widget ne peut être utilisé que sur la page type "Détail du produit" du service "Catalogue".** 

### Template

Le template du widget : `theme/fr/widgets/catalogue/liste_commentaires/index.html`. Exemple :

```html
<!-- BEGIN:main -->

 <a name="commentaires"></a>
  <!-- BEGIN:intitule -->
  <h2>{intitule}</h2>
  <!-- END:intitule -->
  <div><p>Note moyenne des internautes ({nb_commentaires} commentaire{pluriel_commentaire}) : <strong>{note_moyenne_5}/5</strong></p><br/></div>
  <!-- BEGIN:commentaires -->
  <!-- BEGIN:commentaire -->
    <div >
      <div><strong>Note : {note_5}/5</strong></div>
      <a href="#commentaire_{compteur}" title="Aller au commentaire" id="commentaire_{compteur}">{compteur}.</a> Par {auteur},
      le <time  datetime="{annee_publication}-{num_mois_publication}-{num_jour_publication}">{num_jour_publication} {mois_abrev_publication}
      {annee_publication} &agrave; {heure_publication}h{minute_publication} </time></div>
    <div> <img src="{avatar_miniature}" alt="{auteur|htmlentities}" />
      <p>{commentaire}</p>
    </div>
  <!-- END:commentaire -->
  <!-- END:commentaires -->
  <!-- BEGIN:nocommentaire -->
 <p>Soyez le premier &agrave; <a href="#new_commentaire">poster un commentaire</a> ! </p>
  <!-- END:nocommentaire -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── commentaire     // Le contenu du bloc s'affiche pour chaque commentaire.
    │   ├── cache     // Le contenu du bloc s'affiche si le nombre de commentaire dépasse la limite d'affichage de commentaire de la configuration.
    │   └── admin     // Le contenu du bloc s'affiche si le commentaire a été écrit dans la console d'administration du site par un utilisateur ayant accès au Catalogue.
    ├── commentaires     // Le contenu du bloc s'il y a au moins un commentaire.
    │   └── commentaire     // Le contenu du bloc s'affiche pour chaque commentaire.
    │       └── admin     // Le contenu du bloc s'affiche si le commentaire a été écrit dans la console d'administration du site par un utilisateur ayant accès au Catalogue.
    └── nocommentaire     // Le contenu du bloc s'affiche s'il n'y a aucun commentaire.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | produit_id | Id du produit. |
| main | intitule_produit | Intitulé du produit auquel le commentaire est rattaché. |
| main | note_moyenne | Note moyenne du produit. Affiche une valeur entre 0 et 10. |
| main | note_moyenne_5 | Note moyenne du produit. Affiche une valeur entre 0 et 5. |
| main | nb_commentaires | Nombre de commentaire. |
| main | pluriel_commentaire | Affiche s s'il y a plusieurs commentaires, sinon n'affiche rien. |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_order_api | Critère de tri appliqués à l'API Front-office |
| main | widget_limit | Nombre maximum d'éléments affichés |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| commentaire | commentaire_id | Id du commentaire. |
| commentaire | produit_id | Id du produit auquel le commentaire est rattaché. |
| commentaire | intitule_produit | Intitulé du produit auquel le commentaire est rattaché. |
| commentaire | num_jour_publication | Affiche le numéro du jour de la date de publication (01 - 31). |
| commentaire | jour_semaine_publication | Affiche le jour de la semaine de la date de publication (lundi - dimanche). |
| commentaire | num_mois_publication | Affiche le numéro du mois de la date de publication (01 - 12). |
| commentaire | mois_publication | Affiche le mois de la date de publication (janvier - décembre). |
| commentaire | mois_abrev_publication | Affiche le mois de la date de publication abrégé (jan - déc) |
| commentaire | annee_publication | Affiche l'année de la date de publication (2010). |
| commentaire | minute_publication | Affiche les minutes de la date de publication (00-59). |
| commentaire | heure_publication | Affiche l'heure de la date de publication (00-23). |
| commentaire | seconde_publication | Affiche les secondes de la date de publication (00-59). |
| commentaire | timestamp_publication | Affiche le timestamp de la date de publication. |
| commentaire | avatar | URL complète de l'avatar du membre, taille réelle 120px par 120px. |
| commentaire | avatar_miniature | URL complète de l'avatar du membre, taille miniature 40px par 40px. |
| commentaire | gravatar | Gravatar du membre, taille réelle 120px par 120px. |
| commentaire | gravatar_miniature | Gravatar du membre, taille miniature 40px par 40px. |
| commentaire | note | Note de l'auteur du commentaire. Affiche une valeur entre 0 et 10. |
| commentaire | note_5 | Note de l'auteur du commentaire. Affiche une valeur entre 0 et 5. |
| commentaire | commentaire | Affiche le commentaire. |
| commentaire | auteur | Auteur du commentaire. Affiche le pseudo de l'auteur, si l'auteur est anonyme. Affiche le pseudo du membre s'il était identifié quand le commentaire a été posté. |
| commentaire | nom_client | Auteur du commentaire. Affiche le pseudo de l'auteur, si l'auteur est anonyme. Affiche le nom et prénom du membre s'il était identifié quand le commentaire a été posté. |
| commentaire | email | E-mail de l'auteur du commentaire s'il a été posté par un membre. Ne renvoie rien pour les commentaires annonymes. |
| commentaire | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| commentaire | alterne | La balise affichera alternativement 1 ou 2. |
| commentaire | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| commentaire | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| commentaire | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |


## Widget Catalogue / Produits vedettes

**Affiche les produits vedettes du Catalogue.**
Un produit peut être défini comme étant un produit vedette dans la page d'édition d'un produit de la console d'administration.

### Template

Le template du widget : `theme/fr/widgets/catalogue/produits_vedettes/index.html`. Exemple :

```html
<!-- BEGIN: main -->


  <!-- BEGIN:intitule -->
  
  <h1>{intitule}</h1>
  
  <!-- END:intitule -->
  <div>
    <!-- BEGIN:produits -->
<ul>
      <!-- BEGIN:produit -->
      <li style="min-width: {g_miniature_l}px;">
        <div style="min-width: {g_miniature_l}px;">
          <!-- BEGIN: illustrations -->
          <a href="{lien_produit}" title="{intitule_produit|htmlentities} - Cliquez pour acc&eacute;der"><img src="{url_illustration_g_miniature}" alt="{intitule_produit|htmlentities}" /></a>
          <!-- END: illustrations -->
          <!-- BEGIN: noillustrations -->
          <a href="{lien_produit}" title="{intitule_produit|htmlentities} - Cliquez pour acc&eacute;der"><img src="{racine}/{theme}/fr/images/produit_mini.gif" alt="{intitule_produit|htmlentities}" /></a>
          <!-- END: noillustrations -->
          <h2><a href="{lien_produit}" >{intitule_produit}</a></h2>
          <p>{prix}
            <!-- BEGIN:prix_barre -->
            <del>{prix_barre}</del>
            <!-- END:prix_barre -->
          </p>
          <!-- BEGIN:accroche -->
          <p>{accroche}</p>
          <!-- END:accroche -->
        </div>
      </li>
      <!-- END:produit -->
    </ul>
    <!-- END:produits -->
    <!-- BEGIN:noproduits -->
    <div><p>Pas de produit disponible</p></div>
    <!-- END:noproduits -->
  </div>

<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── produits     // Le contenu du bloc s'affiche s'il y a des produits.
    │   └── produit     // Le contenu du bloc s'affiche pour chaque produit.
    │       ├── illustrations     // Le contenu du bloc s'affiche si le produit a au moins une illustration
    │       ├── noillustrations     // Le contenu du bloc s'affiche si le produit n'a pas d'illustration.
    │       ├── accroche     // Le contenu du bloc s'affiche si l'accroche du produit a une valeur.
    │       ├── chapo     // Le contenu du bloc s'affiche si le chapô du produit a une valeur.
    │       ├── description     // Le contenu du bloc s'affiche si la description du produit a une valeur.
    │       ├── tags     // Le contenu du bloc s'affiche si le produit a un ou plusieurs tags.
    │       ├── marque     // Le contenu du bloc s'affiche si le produit possède une marque.
    │       ├── prix_promo     // Le contenu du bloc s'affiche si le produit a au moins une variante en promo.
    │       ├── prix_barre     // Le contenu du bloc s'affiche si le produit a toutes ces variantes avec le même prix et le même prix promo.
    │       ├── texte1     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte2     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte3     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte4     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte5     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte6     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte7     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte8     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte9     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte10     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte11     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte12     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte13     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte14     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte15     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── non_disponible     // Le contenu du bloc s'affiche si le produit n'est pas encore disponible (date de disponibilité supérieure à la date courante).
    │       ├── rupture     // Le contenu du bloc s'affiche si toutes les variantes du produit sont en rupture de stock.
    │       ├── rupture_partielle     // Le contenu du bloc s'affiche si une variante du produit est en rupture de stock.
    │       └── en_stock     // Le contenu du bloc s'affiche si toutes les variantes du produit sont en stock.
    └── noproduits     // Le contenu du bloc s'affiche s'il n'y a pas de produit.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | type_prix | "HT" ou "TTC" |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_categorie_id | Choix de la catégorie dont le contenu doit être affiché. |
| main | widget_order_api | Critère de tri appliqués à l'API Front-office |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_resume | Longueur maximale des accroches |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| produit | num_jour_disponibilite | Affiche le numéro du jour de la date de disponibilité (01 - 31). |
| produit | jour_semaine_disponibilite | Affiche le jour de la semaine de la date de disponibilité (lundi - dimanche). |
| produit | num_mois_disponibilite | Affiche le numéro du mois de la date de disponibilité (01 - 12). |
| produit | mois_disponibilite | Affiche le mois de la date de disponibilité (janvier - décembre). |
| produit | mois_abrev_disponibilite | Affiche le mois de la date de disponibilité abrégé (jan - déc) |
| produit | annee_disponibilite | Affiche l'année de la date de disponibilité (2010). |
| produit | minute_disponibilite | Affiche les minutes de la date de disponibilité (00-59). |
| produit | heure_disponibilite | Affiche l'heure de la date de disponibilité (00-23). |
| produit | seconde_disponibilite | Affiche les secondes de la date de disponibilité (00-59). |
| produit | timestamp_disponibilite | Affiche le timestamp de la date de disponibilité. |
| produit | produit_id | Id du produit. |
| produit | type_produit | Type du produit Affiche le nom du répertoire du produit dans l'espace FTP. |
| produit | nb_vus | nombre de consultation de la page de détail du produit |
| produit | nb_achats | quantité de produit vendus (toutes variantes confondues !) |
| produit | en_avant | Affiche 1 si le produit est un produit vedette, sinon affiche 0. |
| produit | nb_commentaires | Nombre de commentaires. |
| produit | note_moyenne | Note moyenne ; 0 à 10. |
| produit | note_moyenne_5 | Note moyenne ; 0 à 5. |
| produit | intitule_produit | Intitulé du produit. |
| produit | categorie_id | Id de la catégorie en cours du produit. |
| produit | intitule_categorie | Intitulé de la catégorie en cours du produit. |
| produit | categorie_optim | Nom optimisé de la catégorie en cours du produit. |
| produit | lien_produit | Lien vers la page de détail du produit. |
| produit | lien_categorie | Lien vers la catégorie en cours du produit. |
| produit | accroche | Accroche du produit. Affiche le chapô du produit ou son contenu si son chapô est vide. |
| produit | chapo | Chapô du produit. |
| produit | description | Description du produit. |
| produit | tags | Affiche la liste des tags du produit. Le lien renvoi vers la catégorie en cours du produit restreint au tag cliqué. |
| produit | tags_recherche | Affiche la liste des tags du produit. Le lien renvoi vers le moteur de recherche restreint au tag cliqué. |
| produit | prix_min | Affiche le prix minimum toutes variantes confondues. |
| produit | prix_max | Affiche le prix maximum toutes variantes confondues. |
| produit | prix_barre | Affiche le prix normal si toutes les variantes ont un prix promo renseigné identique, sinon n'affiche rien. |
| produit | prix | Comportement standard du prix.<br />Si une variante à un prix : affiche le prix <br />Si une variante à un prix promo : affiche le prix promo <br />Si plusieurs variantes ont un prix identique : affiche le prix <br />Si plusieurs variantes ont un prix promo identique : affiche le prix promo<br />Si plusieurs variantes ont un prix (promo) différent : affiche « prix minium (promo comprise) - prix maximum (promo comprise) » |
| produit | prix_HT_min | Affiche le prix minimum (promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_min | Affiche le prix minimum (promo comprise) TTC toutes variantes confondues. |
| produit | prix_HT_max | Affiche le prix maximum (promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_max | Affiche le prix maximum (promo comprise) TTC toutes variantes confondues. |
| produit | prix_min_valeur | Affiche le prix minimum toutes variantes confondues, sans formatage. |
| produit | prix_max_valeur | Affiche le prix maximum toutes variantes confondues, sans formatage. |
| produit | prix_barre_valeur | Affiche le prix normal sans formatage si toutes les variantes ont un prix promo renseigné identique, sinon n'affiche rien. |
| produit | prix_HT_min_valeur | Affiche le prix minimum (sans formatage, promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_min_valeur | Affiche le prix minimum (sans formatage, promo comprise) TTC toutes variantes confondues. |
| produit | prix_HT_max_valeur | Affiche le prix maximum (sans formatage, promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_max_valeur | Affiche le prix maximum (sans formatage, promo comprise) TTC toutes variantes confondues. |
| produit | texte1 à texte 15 | Affiche les champs texte1 à texte15. |
| produit | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| produit | alterne | La balise affichera alternativement 1 ou 2. |
| produit | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| produit | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| produit | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| illustrations | illustration | Numéro de fichier dans la médiathèque de l'illustration principale du produit. |
| illustrations | url_illustration | Url complète de l'illustration principale du produit |
| illustrations | url_illustration_miniature | Url complète de la miniature de l'illustration principale |
| illustrations | url_illustration_vignette | Url complète de la vignette de l'illustration principale |
| illustrations | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration principale |
| illustrations | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration principale |
| illustrations | ext_illustration | Extension de fichier de l'illustration principale du produit |


## Widget Catalogue / Produits les plus

**Affiche, au choix, les produits les plus achetés, les plus consultés ou les mieux notés du Catalogue.**


### Template

Le template du widget : `theme/fr/widgets/catalogue/produits_plus/index.html`. Exemple :

```html
<!-- BEGIN: main -->


  <!-- BEGIN:intitule -->
  
  <h1>{intitule}</h1>
  
  <!-- END:intitule -->
  <div>
    <!-- BEGIN:produits -->
<ul>
      <!-- BEGIN:produit -->
      <li>
        <div>
          <!-- BEGIN: illustrations -->
          {compteur}<a href="{lien_produit}" title="{intitule_produit|htmlentities} - Cliquez pour acc&eacute;der"><img src="{url_illustration_g_miniature}" alt="{intitule_produit|htmlentities}" /></a>
          <!-- END: illustrations -->
          <!-- BEGIN: noillustrations -->
          {compteur}<a href="{lien_produit}" title="{intitule_produit|htmlentities} - Cliquez pour acc&eacute;der"><img src="{racine}/{theme}/fr/images/produit_mini.gif" alt="{intitule_produit|htmlentities}" /></a>
          <!-- END: noillustrations -->
          <h2><a href="{lien_produit}" >{intitule_produit}</a></h2>
          <p>{prix}
            <!-- BEGIN:prix_barre -->
            <del>{prix_barre}</del>
            <!-- END:prix_barre -->
          </p>
          <!-- BEGIN:accroche -->
          <p>{accroche}</p>
          <!-- END:accroche -->
        </div>
      </li>
      <!-- END:produit -->
    </ul>
    <!-- END:produits -->
    <!-- BEGIN:noproduits -->
    <div><p>Pas de produit disponible</p></div>
    <!-- END:noproduits -->
  </div>

<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── produits     // Le contenu du bloc s'affiche s'il y a des produits.
    │   └── produit     // Le contenu du bloc s'affiche pour chaque produit.
    │       ├── illustrations     // Le contenu du bloc s'affiche si le produit a au moins une illustration
    │       ├── noillustrations     // Le contenu du bloc s'affiche si le produit n'a pas d'illustration.
    │       ├── en_avant     // Le contenu du bloc s'affiche si le produit est un produit vedette.
    │       ├── accroche     // Le contenu du bloc s'affiche si l'accroche du produit a une valeur.
    │       ├── chapo     // Le contenu du bloc s'affiche si le chapô du produit a une valeur.
    │       ├── description     // Le contenu du bloc s'affiche si la description du produit a une valeur.
    │       ├── tags     // Le contenu du bloc s'affiche si le produit a un ou plusieurs tags.
    │       ├── marque     // Le contenu du bloc s'affiche si le produit possède une marque.
    │       ├── prix_promo     // Le contenu du bloc s'affiche si le produit a au moins une variante en promo.
    │       ├── prix_barre     // Le contenu du bloc s'affiche si le produit a toutes ces variantes avec le même prix et le même prix promo.
    │       ├── texte1     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte2     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte3     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte4     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte5     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte6     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte7     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte8     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte9     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte10     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte11     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte12     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte13     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte14     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte15     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── non_disponible     // Le contenu du bloc s'affiche si le produit n'est pas encore disponible (date de disponibilité supérieure à la date courante).
    │       ├── rupture     // Le contenu du bloc s'affiche si toutes les variantes du produit sont en rupture de stock.
    │       ├── rupture_partielle     // Le contenu du bloc s'affiche si une variante du produit est en rupture de stock.
    │       └── en_stock     // Le contenu du bloc s'affiche si toutes les variantes du produit sont en stock.
    └── noproduits     // Le contenu du bloc s'affiche s'il n'y a pas de produit.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | type_prix | "HT" ou "TTC" |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_categorie_id | Choix de la catégorie dont le contenu doit être affiché. |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_resume | Longueur maximale des accroches |
| main | widget_type | Choix du type de "plus" : "achetes", "notes" ou "consultes" |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| produit | num_jour_disponibilite | Affiche le numéro du jour de la date de disponibilité (01 - 31). |
| produit | jour_semaine_disponibilite | Affiche le jour de la semaine de la date de disponibilité (lundi - dimanche). |
| produit | num_mois_disponibilite | Affiche le numéro du mois de la date de disponibilité (01 - 12). |
| produit | mois_disponibilite | Affiche le mois de la date de disponibilité (janvier - décembre). |
| produit | mois_abrev_disponibilite | Affiche le mois de la date de disponibilité abrégé (jan - déc) |
| produit | annee_disponibilite | Affiche l'année de la date de disponibilité (2010). |
| produit | minute_disponibilite | Affiche les minutes de la date de disponibilité (00-59). |
| produit | heure_disponibilite | Affiche l'heure de la date de disponibilité (00-23). |
| produit | seconde_disponibilite | Affiche les secondes de la date de disponibilité (00-59). |
| produit | timestamp_disponibilite | Affiche le timestamp de la date de disponibilité. |
| produit | produit_id | Id du produit. |
| produit | type_produit | Type du produit Affiche le nom du répertoire du produit dans l'espace FTP. |
| produit | nb_vus | nombre de consultation de la page de détail du produit |
| produit | nb_achats | quantité de produit vendus (toutes variantes confondues !) |
| produit | en_avant | Affiche 1 si le produit est un produit vedette, sinon affiche 0. |
| produit | nb_commentaires | Nombre de commentaires. |
| produit | note_moyenne | Note moyenne ; 0 à 10. |
| produit | note_moyenne_5 | Note moyenne ; 0 à 5. |
| produit | intitule_produit | Intitulé du produit. |
| produit | categorie_id | Id de la catégorie en cours du produit. |
| produit | intitule_categorie | Intitulé de la catégorie en cours du produit. |
| produit | categorie_optim | Nom optimisé de la catégorie en cours du produit. |
| produit | lien_produit | Lien vers la page de détail du produit. |
| produit | lien_categorie | Lien vers la catégorie en cours du produit. |
| produit | accroche | Accroche du produit. Affiche le chapô du produit ou son contenu si son chapô est vide. |
| produit | chapo | Chapô du produit. |
| produit | description | Description du produit. |
| produit | tags | Affiche la liste des tags du produit. Le lien renvoi vers la catégorie en cours du produit restreint au tag cliqué. |
| produit | tags_recherche | Affiche la liste des tags du produit. Le lien renvoi vers le moteur de recherche restreint au tag cliqué. |
| produit | prix_min | Affiche le prix minimum toutes variantes confondues. |
| produit | prix_max | Affiche le prix maximum toutes variantes confondues. |
| produit | prix_barre | Affiche le prix normal si toutes les variantes ont un prix promo renseigné identique, sinon n'affiche rien. |
| produit | prix | Comportement standard du prix.<br />Si une variante à un prix : affiche le prix <br />Si une variante à un prix promo : affiche le prix promo <br />Si plusieurs variantes ont un prix identique : affiche le prix <br />Si plusieurs variantes ont un prix promo identique : affiche le prix promo<br />Si plusieurs variantes ont un prix (promo) différent : affiche « prix minium (promo comprise) - prix maximum (promo comprise) » |
| produit | prix_HT_min | Affiche le prix minimum (promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_min | Affiche le prix minimum (promo comprise) TTC toutes variantes confondues. |
| produit | prix_HT_max | Affiche le prix maximum (promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_max | Affiche le prix maximum (promo comprise) TTC toutes variantes confondues. |
| produit | prix_min_valeur | Affiche le prix minimum toutes variantes confondues, sans formatage. |
| produit | prix_max_valeur | Affiche le prix maximum toutes variantes confondues, sans formatage. |
| produit | prix_barre_valeur | Affiche le prix normal, sans formatage, si toutes les variantes ont un prix promo renseigné identique, sinon n'affiche rien. |
| produit | prix_HT_min_valeur | Affiche le prix minimum (sans formatage, promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_min_valeur | Affiche le prix minimum (sans formatage, promo comprise) TTC toutes variantes confondues. |
| produit | prix_HT_max_valeur | Affiche le prix maximum (sans formatage, promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_max_valeur | Affiche le prix maximum (sans formatage, promo comprise) TTC toutes variantes confondues. |
| produit | texte1 à texte 15 | Affiche les champs texte1 à texte15. |
| produit | marque | Affiche la marque du produit |
| produit | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| produit | alterne | La balise affichera alternativement 1 ou 2. |
| produit | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| produit | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| produit | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| illustrations | illustration | Numéro de fichier dans la médiathèque de l'illustration principale du produit. |
| illustrations | url_illustration | Url complète de l'illustration principale du produit |
| illustrations | url_illustration_miniature | Url complète de la miniature de l'illustration principale |
| illustrations | url_illustration_vignette | Url complète de la vignette de l'illustration principale |
| illustrations | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration principale |
| illustrations | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration principale |
| illustrations | ext_illustration | Extension de fichier de l'illustration principale du produit |


## Widget Catalogue / Produits également achetés

**Affiche les produits égalements achetés par les internautes ayant acheté le produit en cours.**

**ce widget ne peut être utilisé que sur la page type "Détail du produit" du service "Catalogue".** 

### Template

Le template du widget : `theme/fr/widgets/catalogue/produits_egalement_achetes/index.html`. Exemple :

```html
<!-- BEGIN: main -->


  <!-- BEGIN:intitule -->
  
  <h1>{intitule}</h1>
  
  <!-- END:intitule -->
  <div>
    <!-- BEGIN:produits -->
<ul>
      <!-- BEGIN:produit -->
      <li style="min-width: {g_miniature_l}px;">
        <div style="min-width: {g_miniature_l}px;">
          <!-- BEGIN: illustrations -->
          <a href="{lien_produit}" title="Plus de détail" style="height: {g_miniature_h}px"><img src="{url_illustration_g_miniature}" alt="{intitule_produit|htmlentities}" /></a>
          <!-- END: illustrations -->
          <!-- BEGIN: noillustrations -->
          <a href="{lien_produit}" title="Plus de détail" style="height: {g_miniature_h}px"><img src="{racine}/{theme}/fr/images/produit_mini.gif" alt="{intitule_produit|htmlentities}" style="width: {g_miniature_l}px; height: {g_miniature_h}px;" /></a>
          <!-- END: noillustrations -->
          <h2><a href="{lien_produit}" title="Plus de détail">{intitule_produit}</a></h2>
          <p>{prix}
            <!-- BEGIN:prix_barre -->
            <del>{prix_barre}</del>
            <!-- END:prix_barre -->
          </p>
          <!-- BEGIN:accroche -->
          <p>{accroche}</p>
          <!-- END:accroche -->
        </div>
      </li>
      <!-- END:produit -->
    </ul>
    <!-- END:produits -->
    <!-- BEGIN:noproduits -->
    <div><p>Pas de produit disponible</p></div>
    <!-- END:noproduits -->
  </div>

<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── produits     // Le contenu du bloc s'affiche s'il y a des produits.
    │   └── produit     // Le contenu du bloc s'affiche pour chaque produit.
    │       ├── illustrations     // Le contenu du bloc s'affiche si le produit a au moins une illustration
    │       ├── noillustrations     // Le contenu du bloc s'affiche si le produit n'a pas d'illustration.
    │       ├── en_avant     // Le contenu du bloc s'affiche si le produit est un produit vedette.
    │       ├── accroche     // Le contenu du bloc s'affiche si l'accroche du produit a une valeur.
    │       ├── chapo     // Le contenu du bloc s'affiche si le chapô du produit a une valeur.
    │       ├── description     // Le contenu du bloc s'affiche si la description du produit a une valeur.
    │       ├── tags     // Le contenu du bloc s'affiche si le produit a un ou plusieurs tags.
    │       ├── marque     // Le contenu du bloc s'affiche si le produit possède une marque.
    │       ├── prix_promo     // Le contenu du bloc s'affiche si le produit a au moins une variante en promo.
    │       ├── prix_barre     // Le contenu du bloc s'affiche si le produit a toutes ces variantes avec le même prix et le même prix promo.
    │       ├── texte1     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte2     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte3     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte4     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte5     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte6     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte7     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte8     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte9     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte10     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte11     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte12     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte13     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte14     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte15     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── non_disponible     // Le contenu du bloc s'affiche si le produit n'est pas encore disponible (date de disponibilité supérieure à la date courante).
    │       ├── rupture     // Le contenu du bloc s'affiche si toutes les variantes du produit sont en rupture de stock.
    │       ├── rupture_partielle     // Le contenu du bloc s'affiche si une variante du produit est en rupture de stock.
    │       └── en_stock     // Le contenu du bloc s'affiche si toutes les variantes du produit sont en stock.
    └── noproduits     // Le contenu du bloc s'affiche s'il n'y a pas de produit.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | type_prix | "HT" ou "TTC" |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_categorie_id | Choix de la catégorie dont le contenu doit être affiché. |
| main | widget_order_api | Critère de tri appliqués à l'API Front-office |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_resume | Longueur maximale des accroches |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| produit | num_jour_disponibilite | Affiche le numéro du jour de la date de disponibilité (01 - 31). |
| produit | jour_semaine_disponibilite | Affiche le jour de la semaine de la date de disponibilité (lundi - dimanche). |
| produit | num_mois_disponibilite | Affiche le numéro du mois de la date de disponibilité (01 - 12). |
| produit | mois_disponibilite | Affiche le mois de la date de disponibilité (janvier - décembre). |
| produit | mois_abrev_disponibilite | Affiche le mois de la date de disponibilité abrégé (jan - déc) |
| produit | annee_disponibilite | Affiche l'année de la date de disponibilité (2010). |
| produit | minute_disponibilite | Affiche les minutes de la date de disponibilité (00-59). |
| produit | heure_disponibilite | Affiche l'heure de la date de disponibilité (00-23). |
| produit | seconde_disponibilite | Affiche les secondes de la date de disponibilité (00-59). |
| produit | timestamp_disponibilite | Affiche le timestamp de la date de disponibilité. |
| produit | produit_id | Id du produit. |
| produit | type_produit | Type du produit Affiche le nom du répertoire du produit dans l'espace FTP. |
| produit | nb_vus | nombre de consultation de la page de détail du produit |
| produit | nb_achats | quantité de produit vendus (toutes variantes confondues !) |
| produit | en_avant | Affiche 1 si le produit est un produit vedette, sinon affiche 0. |
| produit | nb_commentaires | Nombre de commentaires. |
| produit | note_moyenne | Note moyenne ; 0 à 10. |
| produit | note_moyenne_5 | Note moyenne ; 0 à 5. |
| produit | intitule_produit | Intitulé du produit. |
| produit | categorie_id | Id de la catégorie en cours du produit. |
| produit | intitule_categorie | Intitulé de la catégorie en cours du produit. |
| produit | categorie_optim | Nom optimisé de la catégorie en cours du produit. |
| produit | lien_produit | Lien vers la page de détail du produit. |
| produit | lien_categorie | Lien vers la catégorie en cours du produit. |
| produit | accroche | Accroche du produit. Affiche le chapô du produit ou son contenu si son chapô est vide. |
| produit | chapo | Chapô du produit. |
| produit | description | Description du produit. |
| produit | tags | Affiche la liste des tags du produit. Le lien renvoi vers la catégorie en cours du produit restreint au tag cliqué. |
| produit | tags_recherche | Affiche la liste des tags du produit. Le lien renvoi vers le moteur de recherche restreint au tag cliqué. |
| produit | prix_min | Affiche le prix minimum toutes variantes confondues. |
| produit | prix_max | Affiche le prix maximum toutes variantes confondues. |
| produit | prix_barre | Affiche le prix normal si toutes les variantes ont un prix promo renseigné identique, sinon n'affiche rien. |
| produit | prix | Comportement standard du prix.<br />Si une variante à un prix : affiche le prix <br />Si une variante à un prix promo : affiche le prix promo <br />Si plusieurs variantes ont un prix identique : affiche le prix <br />Si plusieurs variantes ont un prix promo identique : affiche le prix promo<br />Si plusieurs variantes ont un prix (promo) différent : affiche « prix minium (promo comprise) - prix maximum (promo comprise) » |
| produit | prix_HT_min | Affiche le prix minimum (promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_min | Affiche le prix minimum (promo comprise) TTC toutes variantes confondues. |
| produit | prix_HT_max | Affiche le prix maximum (promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_max | Affiche le prix maximum (promo comprise) TTC toutes variantes confondues. |
| produit | prix_min_valeur | Affiche le prix minimum toutes variantes confondues, sans formatage. |
| produit | prix_max_valeur | Affiche le prix maximum toutes variantes confondues, sans formatage. |
| produit | prix_barre_valeur | Affiche le prix normal, sans formatage, si toutes les variantes ont un prix promo renseigné identique, sinon n'affiche rien. |
| produit | prix_HT_min_valeur | Affiche le prix minimum (sans formatage, promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_min_valeur | Affiche le prix minimum (sans formatage, promo comprise) TTC toutes variantes confondues. |
| produit | prix_HT_max_valeur | Affiche le prix maximum (sans formatage, promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_max_valeur | Affiche le prix maximum (sans formatage, promo comprise) TTC toutes variantes confondues. |
| produit | texte1 à texte 15 | Affiche les champs texte1 à texte15. |
| produit | marque | Affiche la marque du produit |
| produit | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| produit | alterne | La balise affichera alternativement 1 ou 2. |
| produit | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| produit | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| produit | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| illustrations | illustration | Numéro de fichier dans la médiathèque de l'illustration principale du produit. |
| illustrations | url_illustration | Url complète de l'illustration principale du produit |
| illustrations | url_illustration_miniature | Url complète de la miniature de l'illustration principale |
| illustrations | url_illustration_vignette | Url complète de la vignette de l'illustration principale |
| illustrations | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration principale |
| illustrations | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration principale |
| illustrations | ext_illustration | Extension de fichier de l'illustration principale du produit |


## Widget Catalogue / Produits associés

**Affiche les produits associés au produit en cours.**

**ce widget ne peut être utilisé que sur la page type "Détail du produit" du service "Catalogue".** 

### Template

Le template du widget : `theme/fr/widgets/catalogue/produits_associes/index.html`. Exemple :

```html
<!-- BEGIN: main -->


  <!-- BEGIN:intitule -->
  <h2>{intitule}</h2>
  <!-- END:intitule -->
  <div>
    <!-- BEGIN:produits -->
<ul>
      <!-- BEGIN:produit -->
      <li>
        <div>
          <!-- BEGIN: illustrations -->
          <a href="{lien_produit}" title="{intitule_produit|htmlentities} - Cliquez pour acc&eacute;der"><img src="{url_illustration_g_miniature}" alt="{intitule_produit|htmlentities}" /></a>
          <!-- END: illustrations -->
          <!-- BEGIN: noillustrations -->
          <a href="{lien_produit}" title="{intitule_produit|htmlentities} - Cliquez pour acc&eacute;der"><img src="{racine}/{theme}/fr/images/produit_mini.gif" alt="{intitule_produit|htmlentities}" style="width: {g_miniature_l}px; height: {g_miniature_h}px;" /></a>
          <!-- END: noillustrations -->
          <h2><a href="{lien_produit}">{intitule_produit}</a></h2>
          <p>{prix}
            <!-- BEGIN:prix_barre -->
            <del>{prix_barre}</del>
            <!-- END:prix_barre -->
          </p>
          <!-- BEGIN:accroche -->
          <p>{accroche}</p>
          <!-- END:accroche -->
        </div>
      </li>
      <!-- END:produit -->
    </ul>
    <!-- END:produits -->
    <!-- BEGIN:noproduits -->
    <div><p>Pas de produit disponible</p></div>
    <!-- END:noproduits -->
  </div>

<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── produits     // Le contenu du bloc s'affiche s'il y a des produits.
    │   └── produit     // Le contenu du bloc s'affiche pour chaque produit.
    │       ├── illustrations     // Le contenu du bloc s'affiche si le produit a au moins une illustration
    │       ├── noillustrations     // Le contenu du bloc s'affiche si le produit n'a pas d'illustration.
    │       ├── en_avant     // Le contenu du bloc s'affiche si le produit est un produit vedette.
    │       ├── accroche     // Le contenu du bloc s'affiche si l'accroche du produit a une valeur.
    │       ├── chapo     // Le contenu du bloc s'affiche si le chapô du produit a une valeur.
    │       ├── description     // Le contenu du bloc s'affiche si la description du produit a une valeur.
    │       ├── tags     // Le contenu du bloc s'affiche si le produit a un ou plusieurs tags.
    │       ├── marque     // Le contenu du bloc s'affiche si le produit possède une marque.
    │       ├── prix_promo     // Le contenu du bloc s'affiche si le produit a au moins une variante en promo.
    │       ├── prix_barre     // Le contenu du bloc s'affiche si le produit a toutes ces variantes avec le même prix et le même prix promo.
    │       ├── texte1     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte2     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte3     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte4     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte5     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte6     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte7     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte8     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte9     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte10     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte11     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte12     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte13     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte14     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── texte15     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │       ├── non_disponible     // Le contenu du bloc s'affiche si le produit n'est pas encore disponible (date de disponibilité supérieure à la date courante).
    │       ├── rupture     // Le contenu du bloc s'affiche si toutes les variantes du produit sont en rupture de stock.
    │       ├── rupture_partielle     // Le contenu du bloc s'affiche si une variante du produit est en rupture de stock.
    │       └── en_stock     // Le contenu du bloc s'affiche si toutes les variantes du produit sont en stock.
    └── noproduits     // Le contenu du bloc s'affiche s'il n'y a pas de produit.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | type_prix | "HT" ou "TTC" |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_categorie_id | Choix de la catégorie dont le contenu doit être affiché. |
| main | widget_aleatoire | Affiche 1 si le widget est complété avec des produits choisit aléatoirement, 0 dans le cas contraire. |
| main | widget_resume | Longueur maximale des accroches |
| main | widget_limit | Nombre maximum d'éléments affichés |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| produit | num_jour_disponibilite | Affiche le numéro du jour de la date de disponibilité (01 - 31). |
| produit | jour_semaine_disponibilite | Affiche le jour de la semaine de la date de disponibilité (lundi - dimanche). |
| produit | num_mois_disponibilite | Affiche le numéro du mois de la date de disponibilité (01 - 12). |
| produit | mois_disponibilite | Affiche le mois de la date de disponibilité (janvier - décembre). |
| produit | mois_abrev_disponibilite | Affiche le mois de la date de disponibilité abrégé (jan - déc) |
| produit | annee_disponibilite | Affiche l'année de la date de disponibilité (2010). |
| produit | minute_disponibilite | Affiche les minutes de la date de disponibilité (00-59). |
| produit | heure_disponibilite | Affiche l'heure de la date de disponibilité (00-23). |
| produit | seconde_disponibilite | Affiche les secondes de la date de disponibilité (00-59). |
| produit | timestamp_disponibilite | Affiche le timestamp de la date de disponibilité. |
| produit | produit_id | Id du produit. |
| produit | type_produit | Type du produit Affiche le nom du répertoire du produit dans l'espace FTP. |
| produit | nb_vus | nombre de consultation de la page de détail du produit |
| produit | nb_achats | quantité de produit vendus (toutes variantes confondues !) |
| produit | en_avant | Affiche 1 si le produit est un produit vedette, sinon affiche 0. |
| produit | nb_commentaires | Nombre de commentaires. |
| produit | note_moyenne | Note moyenne ; 0 à 10. |
| produit | note_moyenne_5 | Note moyenne ; 0 à 5. |
| produit | intitule_produit | Intitulé du produit. |
| produit | categorie_id | Id de la catégorie en cours du produit. |
| produit | intitule_categorie | Intitulé de la catégorie en cours du produit. |
| produit | categorie_optim | Nom optimisé de la catégorie en cours du produit. |
| produit | lien_produit | Lien vers la page de détail du produit. |
| produit | lien_categorie | Lien vers la catégorie en cours du produit. |
| produit | accroche | Accroche du produit. Affiche le chapô du produit ou son contenu si son chapô est vide. |
| produit | chapo | Chapô du produit. |
| produit | description | Description du produit. |
| produit | tags | Affiche la liste des tags du produit. Le lien renvoi vers la catégorie en cours du produit restreint au tag cliqué. |
| produit | tags_recherche | Affiche la liste des tags du produit. Le lien renvoi vers le moteur de recherche restreint au tag cliqué. |
| produit | prix_min | Affiche le prix minimum toutes variantes confondues. |
| produit | prix_max | Affiche le prix maximum toutes variantes confondues. |
| produit | prix_barre | Affiche le prix normal si toutes les variantes ont un prix promo renseigné identique, sinon n'affiche rien. |
| produit | prix | Comportement standard du prix.<br />Si une variante à un prix : affiche le prix <br />Si une variante à un prix promo : affiche le prix promo <br />Si plusieurs variantes ont un prix identique : affiche le prix <br />Si plusieurs variantes ont un prix promo identique : affiche le prix promo<br />Si plusieurs variantes ont un prix (promo) différent : affiche « prix minium (promo comprise) - prix maximum (promo comprise) » |
| produit | prix_HT_min | Affiche le prix minimum (promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_min | Affiche le prix minimum (promo comprise) TTC toutes variantes confondues. |
| produit | prix_HT_max | Affiche le prix maximum (promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_max | Affiche le prix maximum (promo comprise) TTC toutes variantes confondues. |
| produit | prix_min_valeur | Affiche le prix minimum toutes variantes confondues, sans formatage. |
| produit | prix_max_valeur | Affiche le prix maximum toutes variantes confondues, sans formatage. |
| produit | prix_barre_valeur | Affiche le prix normal, sans formatage, si toutes les variantes ont un prix promo renseigné identique, sinon n'affiche rien. |
| produit | prix_HT_min_valeur | Affiche le prix minimum (sans formatage, promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_min_valeur | Affiche le prix minimum (sans formatage, promo comprise) TTC toutes variantes confondues. |
| produit | prix_HT_max_valeur | Affiche le prix maximum (sans formatage, promo comprise) HT toutes variantes confondues. |
| produit | prix_TTC_max_valeur | Affiche le prix maximum (sans formatage, promo comprise) TTC toutes variantes confondues. |
| produit | texte1 à texte 15 | Affiche les champs texte1 à texte15. |
| produit | marque | Affiche la marque du produit |
| produit | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| produit | alterne | La balise affichera alternativement 1 ou 2. |
| produit | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| produit | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| produit | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| illustrations | illustration | Numéro de fichier dans la médiathèque de l'illustration principale du produit. |
| illustrations | url_illustration | Url complète de l'illustration principale du produit |
| illustrations | url_illustration_miniature | Url complète de la miniature de l'illustration principale |
| illustrations | url_illustration_vignette | Url complète de la vignette de l'illustration principale |
| illustrations | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration principale |
| illustrations | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration principale |
| illustrations | ext_illustration | Extension de fichier de l'illustration principale du produit |

