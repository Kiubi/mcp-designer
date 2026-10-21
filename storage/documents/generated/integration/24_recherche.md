# Recherche

## Widget Recherche / Recherche Simple

**Affiche la liste des résultats du moteur de recherche (et non le moteur de recherche qui est généralement intégré à un template principal).**
Le widget repose sur un fichier général qui est complété par un fichier spécifique par service. On présentera ainsi à l'aide de modèle graphiques différents les résultats d'une recherche dans les services "Site Web", "Blog" et "Catalogue".

**ce widget ne peut être utilisé que sur la page type "Recherche" de n'importe quel service.** 

Contrairement aux autres widgets, la Recherche simple est composée de 4 fichiers :

- index.html : correspond aux éléments communs du moteur de recherche.
- cms.html : correspond aux résultats d'une recherche sur le Site web.
- blog.html : correspond aux résultats d'une recherche sur le Blog.
- catalogue.html : correspond aux résultats d'une recherche sur le Catalogue. Ce fichier inclut un moteur de recherche avancé pour le catalogue.

### Template

Le template du widget : `theme/fr/widgets/recherche/simple/index.html`. Exemple :

```html
<!-- BEGIN:main -->

  <h1>R&eacute;sultat(s) pour &quot;{recherche}&quot; </h1>
  
  <p>{resultats}</p>
  <div>
    <!-- BEGIN:nav1 -->
    <!-- BEGIN:precedent -->
    <a href="{lien_precedent}" title="page pr&eacute;cedente">page pr&eacute;cedente</a>
    <!-- END:precedent -->
    <!-- BEGIN: pages -->
    <a href="{lien_page}">{page}</a>
    <!-- END: pages -->
    <!-- BEGIN:suivant -->
    <a href="{lien_suivant}" title="page suivante">page suivante</a>
    <!-- END:suivant -->
    <!-- END:nav1 -->
  </div>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | resultats | Affiche les résultats de la recherche dans le service concerné. |
| main | recherche | Expression recherchée. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | lien_tri | Cf valeur de la balise dans le template dédié ci dessous |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_resume | Longueur maximale des accroches |
| main | widget_afficher_navigation | Affiche 1 si la navigation est affichée, 0 si elle est masquée |


## Widget Recherche / Recherche Simple : Site web

**Ce template correspond aux résultats d'une recherche sur le Site web.**

Le formulaire de recherche supporte les paramètres suivants : 

- `r` : termes de la recherche comparés aux contenus des champs titre, sous titre, texte 1 à texte 15 des billets des pages du cms
- `fields` : restreint la porté du paramètre `r` à une liste de champs
- `titre` : terme de recherche additionnel  pour le titre des billets
- `sstitre` : terme de recherche additionnel pour le sous titre des billets
- `texte1` à `texte15` : termes de recherches additionnels pour chacun des champs textes des billets

Par exemple la recherche basée sur les paramètres `r=test&fields=titre,texte2,texte5&texte6=truc&texte10=chose` affichera les billets dont : 

- les champs titre, sous titre, texte5 ou texte 10 contiennent la chaîne "test"
- ET le champ texte 6 contient le texte "truc"
- ET le champ texte 10 contient le texte "chose"

### Template

Le template du widget : `theme/fr/widgets/recherche/simple/cms.html`. Exemple :

```html
<!-- BEGIN:main -->

<div>
  <h2>{nb_resultats} r&eacute;sultat(s) dans le Site web </h2>
  <div>Trier par : <a href="{lien_tri}=d" title="Trier par Date">Date</a> | <a href="{lien_tri}=p" title="Trier par Page">Page</a></div>
</div>
<!-- BEGIN:resultat -->

  <h3><a href="{lien}" title="Aller &agrave; la page">{intitule_page}</a></h3>
  <div> {titre_billet}</div>
  <p>{resume}</p>

<!-- END:resultat -->
<!-- BEGIN:noresultat -->

  <h3>Aucun r&eacute;sultat n'a &eacute;t&eacute; trouv&eacute; dans le Site web.</h3> <p>Rechercher <a href="/recherche/blog/?r={recherche}" title="Rechercher dans le Blog">dans le Blog</a> ou <a href="/recherche/catalogue/?r={recherche}" title="Rechercher dans le Catalogue">dans le Catalogue</a>.
  </p> 

<!-- END:noresultat -->
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── resultat     // Le contenu du bloc s'affiche pour chaque résultat.
    │   ├── titre_billet     // Le contenu du bloc ne s'affiche que si le titre ou le sous-tutre du billet n'est pas vide.
    │   ├── resume     // Le contenu du bloc ne s'affiche que si le resume_texte1 ou resume_texte2 du billet n'est pas vide.
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
    └── noresultat     // Le bloc s'affiche si aucun résultat n'est trouvé
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | nb_resultats | Affiche le nombre de résultats trouvés |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | recherche | Expression recherchée. |
| main | lien_tri | URL permettant de classer les résultats selon un critère passé en paramètre. `{lien_tri}=d` pour trier par Date,  `{lien_tri}=p` pour trier par Page |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_resume | Longueur maximale des accroches |
| main | widget_afficher_navigation | Affiche 1 si la navigation est affichée, 0 si elle est masquée |
| resultat | accueil | Affiche 1 si la page libre du billet est la page d'accueil, sinon affiche 0. |
| resultat | type_billet | Type du billet. Affiche le nom du répertoire du billet dans l'espace FTP. |
| resultat | titre | Titre du billet. |
| resultat | sstitre | Sous-titre du billet. |
| resultat | texte1 à texte 15 | Affiche le contenu des champs texte1 à texte15. |
| resultat | groupe_billet | Groupe du billet. |
| resultat | intitule_page | Intitulé de la page libre du billet. |
| resultat | nom_optim | Nom optimisé de la page libre du billet (c'est à dire la dernière partie de l'URL de la page), tel qu'il est défini dans les options avancées de la page d'édition de la page libre. |
| resultat | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| resultat | alterne | La balise affichera alternativement 1 ou 2. |
| resultat | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| resultat | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| resultat | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| resultat | lien | URL vers la page libre du billet. |
| resultat | titre_billet | Affiche le titre du billet ou le sous-titre si le titre est vide. |
| resultat | resume | Version coupée du champ texte1 ou texte2 si le texte1 est vide. La longueur est configurable dans le widget. |
| resultat | resume_texte1 | Version coupée du champ texte1. La longueur est configurable dans le widget. |
| resultat | resume_texte2 | Version coupée du champ texte2. La longueur est configurable dans le widget. |


## Widget Recherche / Recherche Simple : Blog

**Ce template correspond aux résultats d'une recherche sur le Blog.**

Le formulaire de recherche supporte les paramètres suivants : 

- `r` : termes de la recherche comparés aux contenus des champs titre, chapô, texte des billets du blog
- `fields` : restreint la porté du paramètre `r` à une liste de champs
- `titre` : terme de recherche additionnel  pour le titre des billets
- `chapo` : terme de recherche additionnel pour le chapô des billets
- `texte` : terme de recherche additionnel pour le textes des billets

Par exemple la recherche basée sur les paramètres `r=test&fields=titre,texte&titre=truc` affichera les billets dont : 

- les champs titre ou texte contiennent la chaîne "test"
- ET le champ titre contient le texte "truc"

### Template

Le template du widget : `theme/fr/widgets/recherche/simple/blog.html`. Exemple :

```html
<!-- BEGIN:main -->

<div>
  <h2>{nb_resultats} r&eacute;sultat(s) dans le Blog </h2>
  <div>Trier par : <a href="{lien_tri}=d" title="Trier par Date">Date</a> | <a href="{lien_tri}=t" title="Trier par Titre">Titre</a> | <a href="{lien_tri}=c" title="Trier par Cat&eacute;gorie">Cat&eacute;gorie</a> | <a href="{lien_tri}=a" title="Trier par Auteur">Auteur</a></div>
</div>
<!-- BEGIN:resultat -->

  <h3><a href="{lien_billet}"> {titre} </a></h3>
  <div>Par {auteur}, le {num_jour_publication} {mois_publication} {annee_publication} dans <a href="{lien_categorie}">{intitule_categorie}</a> | <a href="{lien_billet}#commentaires">{nb_commentaires} commentaire{pluriel_commentaire}</a> </div>
  <p>{accroche}</p>

<!-- END:resultat -->
<!-- BEGIN:noresultat -->

  <h3>Aucun r&eacute;sultat n'a &eacute;t&eacute; trouv&eacute; dans le Blog.</h3><p> Rechercher <a href="/recherche/cms/?r={recherche}" title="Rechercher dans le Site web">dans le Site web</a> ou <a href="/recherche/catalogue/?r={recherche}" title="Rechercher dans le Catalogue">dans le Catalogue</a>.</p> 
  
<!-- END:noresultat -->
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── resultat     // Le contenu du bloc s'affiche pour chaque résultat.
    │   ├── accroche     // Le contenu du bloc s'affiche si l'accroche du billet n'est pas vide.
    │   ├── contenu     // Le contenu du bloc s'affiche si le contenu du billet n'est pas vide.
    │   ├── chapo     // Le contenu du bloc s'affiche si le chapô du billet n'est pas vide.
    │   ├── en_avant     // Le contenu du bloc s'affiche si le billet est épinglé.
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
    │   ├── texte15     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   └── illustration     // Le contenu du bloc s'affiche si le billet a une illustration
    └── noresultat     // Le contenu du bloc s'affiche s'il n'y a aucun résultat.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | nb_resultats | Affiche le nombre de résultats trouvés |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | recherche | Expression recherchée. |
| main | lien_tri | URL permettant de classer les résultats selon un critère passé en paramètre. <br /><br />- `{lien_tri}=d` pour trier par Date,<br />- `{lien_tri}=t` pour trier par Titre,<br />- `{lien_tri}=c` pour trier par Catégorie, <br />- `{lien_tri}=a` pour trier par Auteur |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_resume | Longueur maximale des accroches |
| main | widget_afficher_navigation | Affiche 1 si la navigation est affichée, 0 si elle est masquée |
| resultat | billet_id | Id du billet. |
| resultat | titre | Titre du billet |
| resultat | en_avant | Affiche 1 si le billet est épinglé, sinon affiche 0. |
| resultat | chapo | Chapô du billet |
| resultat | contenu | Contenu du billet |
| resultat | accroche | Accroche du billet. Affiche le chapô du billet ou son contenu si son chapô est vide. |
| resultat | type_billet | Type du billet. |
| resultat | texte1 à texte15 | Affiche les champs texte1 à texte15. |
| resultat | categorie_id | Identifiant unique de la catégorie du billet. |
| resultat | commentaires_ouverts | Affiche 1 quand les commentaires du billet sont ouverts, sinon 0. |
| resultat | nom_optim | Nom optimisé du billet (c'est à dire la dernière partie de l'URL de la page), tel qu'il est défini dans les options avancées de la page d'édition du billet. |
| resultat | intitule_categorie | Intitulé de la catégorie du billet. |
| resultat | nb_commentaires | Nombre de commentaires |
| resultat | categorie_optim | Nom optimisé de la catégorie tel qu'il est dans la page d'édition d'une catégorie du Blog dans le champ "Nom de <br />la page" |
| resultat | lien_billet | URL vers le billet |
| resultat | lienperma_billet | URL complète (avec le nom de domaine) vers le billet |
| resultat | lien_categorie | URL vers la catégorie du billet |
| resultat | auteur | Auteur du billet |
| resultat | pluriel_commentaire | Affiche "s" si le billet contient plus d'un commentaire |
| resultat | num_jour_publication | Affiche le numéro du jour de la date de publication (01 - 31). |
| resultat | jour_semaine_publication | Affiche le jour de la semaine de la date de publication (lundi - dimanche). |
| resultat | num_mois_publication | Affiche le numéro du mois de la date de publication (01 - 12). |
| resultat | mois_publication | Affiche le mois de la date de publication (janvier - décembre). |
| resultat | mois_abrev_publication | Affiche le mois de la date de publication abrégé (jan - déc) |
| resultat | annee_publication | Affiche l'année de la date de publication (2010). |
| resultat | heure_publication | Affiche l'heure de la date de publication (00-23). |
| resultat | minute_publication | Affiche les minutes de la date de publication (00-59). |
| resultat | seconde_publication | Affiche les secondes de la date de publication (00-59). |
| resultat | timestamp_publication | Affiche le timestamp de la date de publication. |
| resultat | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| resultat | alterne | La balise affichera alternativement 1 ou 2. |
| resultat | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| resultat | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| resultat | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| illustration | url_illustration | Url complète de l'illustration principale du billet |
| illustration | url_illustration_miniature | Url complète de la miniature de l'illustration principale |
| illustration | url_illustration_vignette | Url complète de la vignette de l'illustration principale |
| illustration | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration principale |
| illustration | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration principale |
| illustration | ext_illustration | Extension de fichier de l'illustration principale du billet |


## Widget Recherche / Recherche Simple : Catalogue

**Ce template correspond aux résultats d'une recherche sur le Catalogue.**

Le formulaire de recherche supporte les paramètres suivants : 

- `c` : identifiant d'une catégorie
- `pmin` : prix minimum
- `pmax` : prix maximum
- `md` : mois de début de date de disponibilité des produits
- `ma` : mois de fin de date de disponibilité des produits
- `rtags` : liste de tags séparés par des virgules
- `r` : termes de la recherche comparés aux contenus des champs intitulé, chapô, description, marque, texte 1 à texte 15 des produits du catalogue
- `fields` : restreint la porté du paramètre `r` à une liste de champs
- `intitule_produit` : terme de recherche additionnel  pour l'intitulé des produits
- `desc_produit` : terme de recherche additionnel pour la description des produits
- `chapo_produit` : terme de recherche additionnel pour le chapô des produits
- `intitule_marque` : terme de recherche additionnel pour l'intitulé de la marque des produits
- `texte1` à `texte15` : termes de recherches additionnels pour chacun des champs textes des produits
- `types` : restreint la recherche aux produits de ces types uniquement

Par exemple la recherche basée sur les paramètres `r=test&fields=intitule_produit,intitule_marque,texte5&pmin=12.5&texte6=truc&rtags=truc&types=type1,type2` affichera les produits dont : 

- les intitulé, marque, ou texte 5 contiennent la chaîne "test"
- ET au moins une variante à un prix d'au moins 12,50 €
- ET le champ texte 6 contient le texte "truc"
- ET possède un tag contenant "truc"
- ET de type "type1" ou "type2"

### Template

Le template du widget : `theme/fr/widgets/recherche/simple/catalogue.html`. Exemple :

```html
<!-- BEGIN:main -->
  <form method="get">
    <h2>{nb_resultats} r&eacute;sultat(s) dans le Catalogue </h2>
  <div>
      <input type="text" name="r" value="{rtexte}" placeholder="Produit" />
      <p>
        <select name="c">
          <option value="">Toutes les cat&eacute;gories</option>
          <!-- BEGIN:categorie-->
          <option value="{categorie_id}" {selected}>{intitule_categorie}</option>
          <!-- END:categorie-->
        </select>
        <select name="t">
          <option value="">Tous les tags</option>
          <!-- BEGIN:tag -->
          <option value="{tag}" {selected}>{tag}</option>
          <!-- END:tag -->
          <!-- BEGIN:notag -->
          <option value="">Pas de tag disponible</option>
          <!-- END:notag -->
        </select>
      </p>
      <p>
        <select name="md">
          <option value="">Date de disponibilité</option>
          <!-- BEGIN:mois_debut-->
          <option value="{num_mois}" {selected}>{mois}</option>
          <!-- END:mois_debut-->
        </select>
        <select name="ma">
          <option value="">Fin de disponibilité</option>
          <!-- BEGIN:mois_fin-->
          <option value="{num_mois}" {selected}>{mois}</option>
          <!-- END:mois_fin-->
        </select>
      </p>
	  <p>
      <input type="text" name="pmin" value="{pmin}" placeholder="Prix minimum" />
      <input type="text" name="pmax" value="{pmax}" placeholder="Prix maximum"/>
      </p>
      <input type="submit" name="Submit" value="Rechercher"/>
      <input type="hidden" name="ra" value="av" />
    </div>
    <div>
      <p>Trier par :
		  <a href="{lien_tri}=po" title="Trier par Produit">Produit</a> |
		  <a href="{lien_tri}=pi" title="Trier par Prix">Prix</a> |
		  <a href="{lien_tri}=n" title="Trier par Note">Note</a> |
		  <a href="{lien_tri}=d" title="Trier par Date de disponibilit&eacute;">Date de disponibilit&eacute;</a>
	  </p>
    </div>
  </form>


<!-- BEGIN:resultat -->

  <!-- BEGIN:illustrations -->
  <a href="{lien_produit}" ><img src="{url_illustration_miniature}" alt="{intitule_produit|htmlentities}" /></a>
  <!-- END:illustrations -->
  <!-- BEGIN: noillustrations -->
  <a href="{lien_produit}" ><img src="{racine}/{theme}/fr/images/produit_mini.gif" alt="{intitule_produit|htmlentities}" /></a>
  <!-- END: noillustrations -->
    <h3><a href="{lien_produit}">{intitule_produit}</a></h3>
    <!-- BEGIN:tags -->
    <p>{tags}</p>
    <!-- END:tags -->
    <!-- BEGIN:non_disponible -->
    <p>Disponible à partir du {num_jour_disponibilite}/{num_mois_disponibilite}/{annee_disponibilite}</p>
    <!-- END:non_disponible -->
    <!-- BEGIN:rupture_partielle -->
    <p>Toutes les variantes ne sont plus disponibles</p>
    <!-- END:rupture_partielle -->
    <!-- BEGIN:rupture -->
    <p>Produit en rupture de stock</p>
    <!-- END:rupture -->
    <!-- BEGIN:accroche -->
    <p>{accroche}</p>
    <!-- END:accroche -->
    <p>{prix}
      <!-- BEGIN:prix_barre -->
      <del>{prix_barre}</del>
      <!-- END:prix_barre -->
    </p>

<!-- END:resultat -->
<!-- BEGIN:noresultat -->

  <h3>Aucun r&eacute;sultat n'a &eacute;t&eacute; trouv&eacute; dans le Catalogue.</h3>
  <p> Rechercher <a href="/recherche/cms/?r={rtexte}" title="Rechercher dans le Site web">dans le Site web</a> ou <a href="/recherche/blog/?r={rtexte}" title="Rechercher dans le Blog">dans le Blog</a>.
  </p>

<!-- END:noresultat -->
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── resultat     // 
    │   ├── illustrations     // Le contenu du bloc s'affiche si le produit a au moins une illustration
    │   ├── noillustrations     // Le contenu du bloc s'affiche si le produit n'a pas d'illustration.
    │   ├── en_avant     // Le contenu du bloc s'affiche si le produit est un produit vedette.
    │   ├── accroche     // Le contenu du bloc s'affiche si l'accroche du produit a une valeur.
    │   ├── chapo     // Le contenu du bloc s'affiche si le chapô du produit a une valeur.
    │   ├── description     // Le contenu du bloc s'affiche si la description du produit a une valeur.
    │   ├── tags     // Le contenu du bloc s'affiche si le produit a un ou plusieurs tags.
    │   ├── prix_promo     // Le contenu du bloc s'affiche si le produit a au moins une variante en promo.
    │   ├── prix_barre     // Le contenu du bloc s'affiche si le produit a toutes ces variantes avec le même prix et le même prix promo.
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
    │   ├── texte15     // Les contenus des blocs ne s'affichent que si les contenus des champs textes correspondants ne sont pas vides.
    │   ├── non_disponible     // Le contenu du bloc s'affiche si le produit n'est pas encore disponible (date de disponibilité suppérieure à la date courante).
    │   ├── rupture     // Le contenu du bloc s'affiche si toutes les variantes du produit sont en rupture de stock.
    │   ├── rupture_partielle     // Le contenu du bloc s'affiche si une variante du produit est en rupture de stock.
    │   └── marque     // Le contenu du bloc s'affiche si la marque du produit est renseignée
    ├── categorie     // Le contenu du bloc s'affiche pour chaque catégorie du catalogue. Utilisé pour définir une recherche sur les catégories des produits.
    ├── mois_debut     // Le contenu du bloc s'affiche pour chaque mois de l'année. Utilisé pour définir une recherche sur les dates de disponibilité des produits.
    ├── mois_fin     // Le contenu du bloc s'affiche pour chaque mois de l'année. Utilisé pour définir une recherche sur les dates de disponibilité des produits.
    ├── tag     // Le contenu du bloc s'affiche s'il y a des tags de produit disponibles. Utilisé pour définir une recherche sur les tags des produits.
    ├── notag     // Le contenu du bloc s'affiche s'il n'y a pas de tag de produit disponible.
    └── noresultat     // Le contenu du bloc s'affiche s'il n'y a aucun résultat.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | nb_resultats | Affiche le nombre de résultats trouvés |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | lien_tri | URL permettant de classer les résultats différemment. Par exemple, le code `{lien_tri}=alphaDESC` retournera l'URL de tri par ordre alphabétique inversé des produits.<br /><br />Fonction de tri et paramètres associables à la balise `{lien_tri}` : <br /><br /> - Par ordre alphabétique : `alpha`<br /> - Par ordre alphabétique inverse : `alphaDESC`<br /> - Par prix : `prix`<br /> - Par prix décroissant : `prixDESC`<br /> - Par date de disponibilité : `date`<br /> - Par date de disponibilité décroissante : `dateDESC`<br /> - Par note moyenne : `note`<br /> - Par note moyenne décroissante : `noteDESC`<br /><br />Il est à noter que les produits vedettes affichés le seront toujours en premier, tout en respectant entre eux le paramètre de tri choisi. |
| main | type_prix | "HT" ou "TTC" |
| main | pmin | critère de recherche, prix minimal |
| main | pmax | critère de recherche, prix maximal |
| main | rtags | critère de recherche, tags |
| main | rtexte | critère de recherche, texte |
| main | recherche | récapitulatif de la recherche (texte + tags) |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_resume | Longueur maximale des accroches |
| main | widget_afficher_navigation | Affiche 1 si la navigation est affichée, 0 si elle est masquée |
| resultat | num_jour_disponibilite | Affiche le numéro du jour de la date de disponibilité (01 - 31). |
| resultat | jour_semaine_disponibilite | Affiche le jour de la semaine de la date de disponibilité (lundi - dimanche). |
| resultat | num_mois_disponibilite | Affiche le numéro du mois de la date de disponibilité (01 - 12). |
| resultat | mois_disponibilite | Affiche le mois de la date de disponibilité (janvier - décembre). |
| resultat | mois_abrev_disponibilite | Affiche le mois de la date de disponibilité abrégé (jan - déc) |
| resultat | annee_disponibilite | Affiche l'année de la date de disponibilité (2010). |
| resultat | minute_disponibilite | Affiche les minutes de la date de disponibilité (00-59). |
| resultat | heure_disponibilite | Affiche l'heure de la date de disponibilité (00-23). |
| resultat | seconde_disponibilite | Affiche les secondes de la date de disponibilité (00-59). |
| resultat | timestamp_disponibilite | Affiche le timestamp de la date de disponibilité. |
| resultat | produit_id | Id du produit. |
| resultat | type_produit | Type du produit c'est à dire le nom du répertoire du produit dans l'espace FTP. |
| resultat | en_avant | Affiche 1 si le produit est un produit vedette, sinon affiche 0. |
| resultat | nb_commentaires | Nombre de commentaires. |
| resultat | note_moyenne | Note moyenne ; 0 à 10. |
| resultat | note_moyenne_5 | Note moyenne ; 0 à 5. |
| resultat | intitule_produit | Intitulé du produit. |
| resultat | nom_optim | Nom optimisé du produit |
| resultat | categorie_id | Id de la catégorie en cours du produit. |
| resultat | intitule_categorie | Intitulé de la catégorie en cours du produit. |
| resultat | categorie_optim | Nom optimisé de la catégorie en cours du produit. |
| resultat | lien_produit | Lien vers la page de détail du produit. |
| resultat | lien_categorie | Lien vers la catégorie en cours du produit. |
| resultat | accroche | Accroche du produit. Affiche le chapô du produit ou son contenu si son chapô est vide. |
| resultat | chapo | Chapô du produit. |
| resultat | description | Description du produit. |
| resultat | tags | Affiche la liste des tags du produit. Le lien renvoi vers le moteur de recherche restreint au tag cliqué. |
| resultat | prix_min | Affiche le prix minimum toutes variantes confondues. |
| resultat | prix_max | Affiche le prix maximum toutes variantes confondues. |
| resultat | prix_barre | Affiche le prix normal si toutes les variantes ont un prix promo renseigné identique, sinon n'affiche rien. |
| resultat | prix | Comportement standard du prix.<br /><br />- Si une variante à un prix : affiche le prix <br />- Si une variante à un prix promo : affiche le prix promo <br />- Si plusieurs variantes ont un prix identique : affiche le prix <br />- Si plusieurs variantes ont un prix promo identique : affiche le prix promo<br />- Si plusieurs variantes ont un prix (promo) différent : affiche « prix minium (promo comprise) - prix maximum (promo comprise) » |
| resultat | prix_HT_min | Affiche le prix minimum (promo comprise) HT toutes variantes confondues. |
| resultat | prix_TTC_min | Affiche le prix minimum (promo comprise) TTC toutes variantes confondues. |
| resultat | prix_HT_max | Affiche le prix maximum (promo comprise) HT toutes variantes confondues. |
| resultat | prix_TTC_max | Affiche le prix maximum (promo comprise) TTC toutes variantes confondues. |
| resultat | prix_min_valeur | Affiche le prix minimum toutes variantes confondues. |
| resultat | prix_max_valeur | Affiche le prix maximum toutes variantes confondues. |
| resultat | prix_barre_valeur | Affiche le prix normal si toutes les variantes ont un prix promo renseigné identique, sinon n'affiche rien. |
| resultat | prix_HT_min_valeur | Affiche le prix minimum (promo comprise) HT toutes variantes confondues. |
| resultat | prix_TTC_min_valeur | Affiche le prix minimum (promo comprise) TTC toutes variantes confondues. |
| resultat | prix_HT_max_valeur | Affiche le prix maximum (promo comprise) HT toutes variantes confondues. |
| resultat | prix_TTC_max_valeur | Affiche le prix maximum (promo comprise) TTC toutes variantes confondues. |
| resultat | texte1 à texte15 | Affiche les champs texte1 à texte15. |
| resultat | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| resultat | alterne | La balise affichera alternativement 1 ou 2. |
| resultat | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| resultat | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| resultat | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| resultat | marque | Affiche la marque du produit |
| illustrations | illustration | Numéro de fichier dans la médiathèque de l'illustration principale du produit. |
| illustrations | url_illustration | Url complète de l'illustration principale |
| illustrations | url_illustration_miniature | Url complète de la miniature de l'illustration principale |
| illustrations | url_illustration_vignette | Url complète de la vignette de l'illustration principale |
| illustrations | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration principale |
| illustrations | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration principale |
| illustrations | ext_illustration | Extension de fichier de l'illustration principale du produit |
| categorie | categorie_id | Id de la catégorie. |
| categorie | intitule_categorie | Intitulé de la catégorie. |
| categorie | selected | Affiche "selected" pour la catégorie recherchée en cours dans le moteur de recherche avancée. Utilisé pour les listes déroulantes. |
| mois_debut | num_mois | Affiche le numéro du mois (01 - 12). |
| mois_debut | mois | Affiche le mois (janvier - décembre). |
| mois_debut | selected | Affiche selected="selected" pour le mois recherché en cours dans le moteur de recherche avancée. Utilisé pour les listes déroulantes. |
| mois_fin | num_mois | Affiche le numéro du mois (01 - 12). |
| mois_fin | mois | Affiche le mois (janvier - décembre). |
| mois_fin | selected | Affiche "selected" pour le mois recherché en cours dans le moteur de recherche avancée. Utilisé pour les listes déroulantes. |
| tag | tag | Liste de tous les tags du catalogue |
| tag | selected | Affiche "selected" pour le ou les tags recherchés en cours dans le moteur de recherche avancée. Utilisé pour les listes déroulantes. |

