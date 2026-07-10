# Blog

## Widget Blog / Derniers billets postés

**Affiche la liste des derniers billets du blog postés.**


### Template

Le template du widget : `theme/fr/widgets/blog/derniers_billets_postes/index.html`. Exemple :

```html
<!-- BEGIN: main -->


  <!-- BEGIN: intitule -->
  <h1>{intitule}</h1>
  <!-- END: intitule -->
  
    <ul>
      <!-- BEGIN:billet -->
      <li><a href="{lien_billet}" title="{titre|htmlentities}">{titre}</a></li>
      <!-- END:billet -->
    </ul>
    <!-- BEGIN:nobillet -->
    Pas de billet posté
    <!-- END:nobillet -->
  

<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché.
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── billet     // Ce bloc s'affiche pour chaque billet.
    │   ├── accroche     // Le contenu du bloc s'affiche si l'accroche du billet n'est pas vide
    │   ├── contenu     // Le contenu du bloc s'affiche si le contenu du billet n'est pas vide
    │   ├── chapo     // Le contenu du bloc s'affiche si le chapô du billet n'est pas vide
    │   ├── detail     // Le contenu du bloc s'affiche si ni le chapô ni le contenu du billet ne sont vide
    │   ├── en_avant     // Le bloc s'affiche si le billet est épinglé.
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
    │   ├── illustration     // Le contenu du bloc s'affiche si le billet a une illustration
    │   └── noillustration     // Le bloc s'affiche si le billet n'a pas d'illustration
    └── nobillet     // Le contenu du bloc s'affiche s'il n'y a aucun billet dans le blog
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_limit | Nombre maximum d'éléments affichés |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| billet | billet_id | Identifiant unique du billet |
| billet | titre | Titre du billet |
| billet | en_avant | Affiche 1 si le billet est épinglé, sinon affiche 0. |
| billet | chapo | Chapô du billet |
| billet | contenu | Contenu du billet |
| billet | accroche | Accroche du billet. Affiche le chapô du billet ou son contenu si son chapô est vide. |
| billet | type_billet | Type du billet. |
| billet | texte1 à texte15 | Affiche les champs texte1 à texte15. |
| billet | categorie_id | Identifiant unique de la catégorie du billet. |
| billet | commentaires_ouverts | Affiche 1 quand les commentaires du billet sont ouverts, sinon 0. |
| billet | nom_optim | Nom optimisé du billet (c'est à dire la dernière partie de l'URL de la page), tel qu'il est défini dans les options avancées de la page d'édition du billet. |
| billet | intitule_categorie | Intitulé de la catégorie du billet. |
| billet | nb_commentaires | Nombre de commentaires |
| billet | categorie_optim | Nom optimisé de la catégorie tel qu'il est dans la page d'édition d'une catégorie du Blog dans le champ "Nom de <br />la page" |
| billet | lien_billet | URL vers le billet |
| billet | lienperma_billet | URL complète (avec le nom de domaine) vers le billet |
| billet | lien_categorie | URL vers la catégorie du billet |
| billet | auteur | Auteur du billet |
| billet | pluriel_commentaire | Affiche "s" si le billet contient plus d'un commentaire |
| billet | num_jour_publication | Affiche le numéro du jour de la date de publication (01 - 31). |
| billet | jour_semaine_publication | Affiche le jour de la semaine de la date de publication (lundi - dimanche). |
| billet | num_mois_publication | Affiche le numéro du mois de la date de publication (01 - 12). |
| billet | mois_publication | Affiche le mois de la date de publication (janvier - décembre). |
| billet | mois_abrev_publication | Affiche le mois de la date de publication abrégé (jan - déc) |
| billet | annee_publication | Affiche l'année de la date de publication (2010). |
| billet | minute_publication | Affiche les minutes de la date de publication (00-59). |
| billet | heure_publication | Affiche l'heure de la date de publication (00-23). |
| billet | seconde_publication | Affiche les secondes de la date de publication (00-59). |
| billet | timestamp_publication | Affiche le timestamp de la date de publication. |
| billet | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| billet | alterne | La balise affichera alternativement 1 ou 2. |
| billet | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| billet | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| billet | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| illustration | url_illustration | Url complète de l'illustration principale du billet |
| illustration | url_illustration_miniature | Url complète de la miniature de l'illustration principale |
| illustration | url_illustration_vignette | Url complète de la vignette de l'illustration principale |
| illustration | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration principale |
| illustration | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration principale |
| illustration | ext_illustration | Extension de fichier de l'illustration principale du billet |


## Widget Blog / Détail billet

**Affiche le détail d'un billet**

**ce widget ne peut être utilisé que sur la page type "Détail du billet" du service "Blog".** 

### Template

Le template du widget : `theme/fr/widgets/blog/detail_billet/index.html`. Exemple :

```html
<!-- BEGIN:main -->

  <h1>{titre}</h1>
  
  <!-- BEGIN:chapo -->
  <div> {chapo} </div>
  <!-- END:chapo -->
  <!-- BEGIN:contenu -->
   {contenu} 
  <!-- END:contenu -->
  <p>Post&eacute; le {num_jour_publication} {mois_abrev_publication} {annee_publication}
    &agrave; {heure_publication}h{minute_publication} par {auteur} <br />
    <a href="{lien_categorie}" >{intitule_categorie}</a> | <a href="#commentaires" >{nb_commentaires} commentaire{pluriel_commentaire}</a></p>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── commentaires     // Le contenu de cette balise s'affiche si le billet a au moins un commentaire.
    ├── bookmarqueurs     // Le contenu du bloc s'affiche quand les bookmarqueurs sont activés dans la liste des billets. Cette option est 
configurable dans "Mon site / Blog / Configuration et Préférences".
    │   ├── bookmarqueur     // Le contenu du bloc s'affiche pour chaque bookmarqueur mis en avant. Ce choix est configurable dans "Mon site / 
Blog / Configuration et Préférences".
    │   └── plus     // Le contenu du bloc s'affiche s'il y a des bookmarqueurs qui ne sont pas mis en avant. Ce choix est configurable 
dans "Mon site / Blog / Configuration et Préférences".
    │       └── bookmarqueur     // Le contenu du bloc s'affiche pour chaque bookmarqueur qui n'est pas mis en avant. Ce choix est configurable 
dans "Mon site / Blog / Configuration et Préférences"
    ├── accroche     // Le contenu du bloc s'affiche si l'accroche du billet n'est pas vide
    ├── contenu     // Le contenu du bloc s'affiche si le contenu du billet n'est pas vide
    ├── chapo     // Le contenu du bloc s'affiche si le chapô du billet n'est pas vide
    ├── en_avant     // Le bloc s'affiche si le billet est épinglé.
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
    ├── illustration     // Le contenu du bloc s'affiche si le billet a une illustration
    └── noillustration     // Le bloc s'affiche si le billet n'a pas d'illustration
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | billet_id | Identifiant unique du billet |
| main | titre | Titre du billet |
| main | en_avant | Affiche 1 si le billet est épinglé, sinon affiche 0. |
| main | chapo | Chapô du billet |
| main | contenu | Contenu du billet |
| main | accroche | Accroche du billet. Affiche le chapô du billet ou son contenu si son chapô est vide. |
| main | type_billet | Type du billet. |
| main | texte1 à texte15 | Affiche les champs texte1 à texte15. |
| main | categorie_id | Identifiant unique de la catégorie du billet. |
| main | commentaires_ouverts | Affiche 1 quand les commentaires du billet sont ouverts, sinon 0. |
| main | nom_optim | Nom optimisé du billet (c'est à dire la dernière partie de l'URL de la page), tel qu'il est défini dans les options avancées de la page d'édition du billet. |
| main | intitule_categorie | Intitulé de la catégorie du billet. |
| main | nb_commentaires | Nombre de commentaires |
| main | categorie_optim | Nom optimisé de la catégorie tel qu'il est dans la page d'édition d'une catégorie du Blog dans le champ "Nom de <br />la page" |
| main | lien_billet | URL vers le billet |
| main | lienperma_billet | URL complète (avec le nom de domaine) vers le billet |
| main | lien_categorie | URL vers la catégorie du billet |
| main | auteur | Auteur du billet |
| main | pluriel_commentaire | Affiche "s" si le billet contient plus d'un commentaire |
| main | num_jour_publication | Affiche le numéro du jour de la date de publication (01 - 31). |
| main | jour_semaine_publication | Affiche le jour de la semaine de la date de publication (lundi - dimanche). |
| main | num_mois_publication | Affiche le numéro du mois de la date de publication (01 - 12). |
| main | mois_publication | Affiche le mois de la date de publication (janvier - décembre). |
| main | mois_abrev_publication | Affiche le mois de la date de publication abrégé (jan - déc) |
| main | annee_publication | Affiche l'année de la date de publication (2010). |
| main | minute_publication | Affiche les minutes de la date de publication (00-59). |
| main | heure_publication | Affiche l'heure de la date de publication (00-23). |
| main | seconde_publication | Affiche les secondes de la date de publication (00-59). |
| main | timestamp_publication | Affiche le timestamp de la date de publication. |
| main | schema_json | Données structurées du billet au format json-ld. |
| main | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| main | alterne | La balise affichera alternativement 1 ou 2. |
| main | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| main | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| main | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| bookmarqueur | bk_img | Icône du bookmarqueur |
| bookmarqueur | bk_code | Nom du bookmarqueur |
| bookmarqueur | bk_url | URL préformatée pour marquer ce billet chez le bookmarqueur |
| bookmarqueur | bk_img | Icône du bookmarqueur |
| bookmarqueur | bk_code | Nom du bookmarqueur |
| bookmarqueur | bk_url | URL préformatée pour marquer ce billet chez le bookmarqueur |
| illustration | url_illustration | Url complète de l'illustration principale du billet |
| illustration | url_illustration_miniature | Url complète de la miniature de l'illustration principale |
| illustration | url_illustration_vignette | Url complète de la vignette de l'illustration principale |
| illustration | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration principale |
| illustration | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration principale |
| illustration | ext_illustration | Extension de fichier de l'illustration principale du billet |


## Widget Blog / Billets les plus commentés

**Affiche la liste des billets les plus commentés**


### Template

Le template du widget : `theme/fr/widgets/blog/les_plus_commentes/index.html`. Exemple :

```html
<!-- BEGIN: main -->


  <!-- BEGIN: intitule -->
  <h1>{intitule}</h1>
  <!-- END: intitule -->
  
    <ul>
      <!-- BEGIN: billet -->
      <li><a href="{lien_billet}" >{titre} ({nb_commentaires})</a></li>
      <!-- END: billet -->
    </ul>
    <!-- BEGIN:nobillet -->
    <p>Pas de billet posté</p>
    <!-- END:nobillet -->
  

<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── billet     // Ce bloc s'affiche pour chaque billet parmis les plus commentés
    │   ├── accroche     // Le contenu du bloc s'affiche si l'accroche du billet n'est pas vide
    │   ├── contenu     // Le contenu du bloc s'affiche si le contenu du billet n'est pas vide
    │   ├── chapo     // Le contenu du bloc s'affiche si le chapô du billet n'est pas vide
    │   ├── detail     // Le contenu du bloc s'affiche si ni le chapô ni le contenu du billet ne sont vide
    │   ├── en_avant     // Le bloc s'affiche si le billet est épinglé.
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
    │   ├── illustration     // Le contenu du bloc s'affiche si le billet a une illustration
    │   └── noillustration     // Le bloc s'affiche si le billet n'as pas d'illustrations
    └── nobillet     // Le contenu du bloc s'affiche s'il n'y a aucun billet dans le blog
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_limit | Nombre maximum d'éléments affichés |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| billet | billet_id | Identifiant unique du billet |
| billet | titre | Titre du billet |
| billet | en_avant | Affiche 1 si le billet est épinglé, sinon affiche 0. |
| billet | chapo | Chapô du billet |
| billet | contenu | Contenu du billet |
| billet | accroche | Accroche du billet. Affiche le chapô du billet ou son contenu si son chapô est vide. |
| billet | type_billet | Type du billet. |
| billet | texte1 à texte15 | Affiche les champs texte1 à texte15. |
| billet | categorie_id | Identifiant unique de la catégorie du billet. |
| billet | commentaires_ouverts | Affiche 1 quand les commentaires du billet sont ouverts, sinon 0. |
| billet | nom_optim | Nom optimisé du billet (c'est à dire la dernière partie de l'URL de la page), tel qu'il est défini dans les options avancées de la page d'édition du billet. |
| billet | intitule_categorie | Intitulé de la catégorie du billet. |
| billet | nb_commentaires | Nombre de commentaires |
| billet | categorie_optim | Nom optimisé de la catégorie tel qu'il est dans la page d'édition d'une catégorie du Blog dans le champ "Nom de <br />la page" |
| billet | lien_billet | URL vers le billet |
| billet | lienperma_billet | URL complète (avec le nom de domaine) vers le billet |
| billet | lien_categorie | URL vers la catégorie du billet |
| billet | auteur | Auteur du billet |
| billet | pluriel_commentaire | Affiche "s" si le billet contient plus d'un commentaire |
| billet | num_jour_publication | Affiche le numéro du jour de la date de publication (01 - 31). |
| billet | jour_semaine_publication | Affiche le jour de la semaine de la date de publication (lundi - dimanche). |
| billet | num_mois_publication | Affiche le numéro du mois de la date de publication (01 - 12). |
| billet | mois_publication | Affiche le mois de la date de publication (janvier - décembre). |
| billet | mois_abrev_publication | Affiche le mois de la date de publication abrégé (jan - déc) |
| billet | annee_publication | Affiche l'année de la date de publication (2010). |
| billet | minute_publication | Affiche les minutes de la date de publication (00-59). |
| billet | heure_publication | Affiche l'heure de la date de publication (00-23). |
| billet | seconde_publication | Affiche les secondes de la date de publication (00-59). |
| billet | timestamp_publication | Affiche le timestamp de la date de publication. |
| billet | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| billet | alterne | La balise affichera alternativement 1 ou 2. |
| billet | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| billet | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| billet | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| illustration | url_illustration | Url complète de l'illustration principale du billet |
| illustration | url_illustration_miniature | Url complète de la miniature de l'illustration principale |
| illustration | url_illustration_vignette | Url complète de la vignette de l'illustration principale |
| illustration | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration principale |
| illustration | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration principale |
| illustration | ext_illustration | Extension de fichier de l'illustration principale du billet |


## Widget Blog / Liens

**Affiche les Liens sympas du Blog (« Blogroll »).**


### Template

Le template du widget : `theme/fr/widgets/blog/liens/index.html`. Exemple :

```html
<!-- BEGIN:main -->

<aside>
  <!-- BEGIN: intitule -->
  <h1>{intitule}</h1>
  <!-- END: intitule -->
  
    <ul>
      <!-- BEGIN:lien -->
      <li><a href="{adresse_lien}" target="_blank" title="{desc_lien|htmlentities}">{intitule_lien}</a></li>
      <!-- END:lien -->
    </ul>
    <!-- BEGIN:nolien -->
    <p>Pas de lien disponible</p>
    <!-- END:nolien -->
  
</aside>
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── lien     // Ce bloc s'affiche pour chaque lien
    └── nolien     // Ce bloc s'affiche su aucun lien n'est disponible
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| lien | lien_id | Identifiant unique du lien |
| lien | intitule_lien | Intitulé du lien |
| lien | adresse_lien | URL complète du lien |
| lien | desc_lien | Description du lien |
| lien | auteur | Nom du créateur du lien |
| lien | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| lien | alterne | La balise affichera alternativement 1 ou 2. |
| lien | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| lien | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| lien | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |


## Widget Blog / Liste des billets

**Ce widget très important affiche les billets du Blog.**
La liste des billets affichés dépend de la configuration du widget

### Template

Le template du widget : `theme/fr/widgets/blog/liste_billets/index.html`. Exemple :

```html
<!-- BEGIN:main -->
<!-- BEGIN:billet -->


  
<h1><a href="{lien_billet}">{titre}</a></h1>
  
<p>{accroche}</p>

  <!-- BEGIN:detail -->
  <div><a href="{lien_billet}">Lire la suite...</a></div>
  <!-- END:detail -->
  <p>Post&eacute; le {num_jour_publication} {mois_publication} {annee_publication} &agrave; {heure_publication}h{minute_publication} par {auteur}
      <br />
<a href="{lien_categorie}" >{intitule_categorie}</a> | <a href="{lien_billet}#commentaires" >{nb_commentaires} commentaire{pluriel_commentaire}</a></p>

<!-- END:billet -->
<!-- BEGIN:nobillet -->
<p>Pas de billet posté</p>
<!-- END:nobillet -->
<!-- BEGIN: nav2 -->
<p>
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
</p>
<!-- END: nav2 -->
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── billet     // Ce bloc s'affiche pour chaque billet
    │   ├── bookmarqueurs     // Le contenu du bloc s'affiche quand les bookmarqueurs sont activés dans la liste des billets. Cette option est 
configurable dans "Mon site / Blog / Configuration et Préférences".
    │   │   ├── bookmarqueur     // Le contenu du bloc s'affiche pour chaque bookmarqueur mis en avant. Ce choix est configurable dans "Mon site / 
Blog / Configuration et Préférences".
    │   │   └── plus     // Le contenu du bloc s'affiche s'il y a des bookmarqueurs qui ne sont pas mis en avant. Ce choix est configurable 
dans "Mon site / Blog / Configuration et Préférences".
    │   │       └── bookmarqueur     // Le contenu du bloc s'affiche pour chaque bookmarqueur qui n'est pas mis en avant. Ce choix est configurable 
dans "Mon site / Blog / Configuration et Préférences"
    │   ├── accroche     // Le contenu du bloc s'affiche si l'accroche du billet n'est pas vide
    │   ├── contenu     // Le contenu du bloc s'affiche si le contenu du billet n'est pas vide
    │   ├── chapo     // Le contenu du bloc s'affiche si le chapô du billet n'est pas vide
    │   ├── detail     // Le contenu du bloc s'affiche si ni le chapô ni le contenu du billet ne sont vide
    │   ├── en_avant     // Le bloc s'affiche si le billet est épinglé.
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
    │   ├── illustration     // Le contenu du bloc s'affiche si le billet a une illustration
    │   └── noillustration     // Le bloc s'affiche si le billet n'a pas d'illustration
    └── nobillet     // Le contenu du bloc s'affiche s'il n'y a aucun billet dans le blog
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_categorie_id | Choix de la catégorie dont le contenu doit être affiché. |
| main | widget_order_api | Critère de tri appliqués à l'API Front-office |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_resume | Longueur maximale des accroches |
| main | widget_afficher_navigation | Affiche 1 si la navigation est affichée, 0 si elle est masquée |
| billet | billet_id | Identifiant unique du billet |
| billet | titre | Titre du billet |
| billet | en_avant | Affiche 1 si le billet est épinglé, sinon affiche 0. |
| billet | chapo | Chapô du billet |
| billet | contenu | Contenu du billet |
| billet | accroche | Accroche du billet. Affiche le chapô du billet ou son contenu si son chapô est vide. |
| billet | type_billet | Type du billet. |
| billet | texte1 à texte15 | Affiche les champs texte1 à texte15. |
| billet | categorie_id | Identifiant unique de la catégorie du billet. |
| billet | commentaires_ouverts | Affiche 1 quand les commentaires du billet sont ouverts, sinon 0. |
| billet | nom_optim | Nom optimisé du billet (c'est à dire la dernière partie de l'URL de la page), tel qu'il est défini dans les options avancées de la page d'édition du billet. |
| billet | intitule_categorie | Intitulé de la catégorie du billet. |
| billet | nb_commentaires | Nombre de commentaires |
| billet | categorie_optim | Nom optimisé de la catégorie tel qu'il est dans la page d'édition d'une catégorie du Blog dans le champ "Nom de <br />la page" |
| billet | lien_billet | URL vers le billet |
| billet | lienperma_billet | URL complète (avec le nom de domaine) vers le billet |
| billet | lien_categorie | URL vers la catégorie du billet |
| billet | auteur | Auteur du billet |
| billet | pluriel_commentaire | Affiche "s" si le billet contient plus d'un commentaire |
| billet | num_jour_publication | Affiche le numéro du jour de la date de publication (01 - 31). |
| billet | jour_semaine_publication | Affiche le jour de la semaine de la date de publication (lundi - dimanche). |
| billet | num_mois_publication | Affiche le numéro du mois de la date de publication (01 - 12). |
| billet | mois_publication | Affiche le mois de la date de publication (janvier - décembre). |
| billet | mois_abrev_publication | Affiche le mois de la date de publication abrégé (jan - déc) |
| billet | annee_publication | Affiche l'année de la date de publication (2010). |
| billet | heure_publication | Affiche l'heure de la date de publication (00-23). |
| billet | minute_publication | Affiche les minutes de la date de publication (00-59). |
| billet | seconde_publication | Affiche les secondes de la date de publication (00-59). |
| billet | timestamp_publication | Affiche le timestamp de la date de publication. |
| billet | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| billet | alterne | La balise affichera alternativement 1 ou 2. |
| billet | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| billet | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| billet | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| bookmarqueur | bk_img | Icône du bookmarqueur |
| bookmarqueur | bk_code | Nom du bookmarqueur |
| bookmarqueur | bk_url | URL préformatée pour marquer ce billet chez le bookmarqueur |
| bookmarqueur | bk_img | Icône du bookmarqueur |
| bookmarqueur | bk_code | Nom du bookmarqueur |
| bookmarqueur | bk_url | URL préformatée pour marquer ce billet chez le bookmarqueur |
| illustration | url_illustration | Url complète de l'illustration principale du billet |
| illustration | url_illustration_miniature | Url complète de la miniature de l'illustration principale |
| illustration | url_illustration_vignette | Url complète de la vignette de l'illustration principale |
| illustration | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration principale |
| illustration | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration principale |
| illustration | ext_illustration | Extension de fichier de l'illustration principale du billet |


## Widget Blog / Liste des commentaires

**Affiche les commentaires d'un billet du Blog.**
**ce widget ne peut être utilisé que sur la page type "Détail du billet" du service "Blog".** 

### Template

Le template du widget : `theme/fr/widgets/blog/liste_commentaires/index.html`. Exemple :

```html
<!-- BEGIN:main -->

 <a name="commentaires"></a>
  <!-- BEGIN:intitule -->
  <h2>{intitule}</h2>
  <!-- END:intitule -->

  <!-- BEGIN:commentaires -->
  <!-- BEGIN:commentaire -->
    <div><a href="#commentaire_{compteur}" title="Aller au commentaire" id="commentaire_{compteur}">{compteur}.</a> Par
      <!-- BEGIN:site_auteur -->
      <a href="{site_auteur}"  rel="author">{auteur}</a>,
      <!-- END:site_auteur -->
      <!-- BEGIN:nosite_auteur -->
      {auteur},
      <!-- END:nosite_auteur -->
      le {num_jour_publication} {mois_abrev_publication}
      {annee_publication} &agrave; {heure_publication}h{minute_publication} </div>
  
      <p><img src="{avatar_miniature}" alt="{auteur|htmlentities}" /> {commentaire}</p>
  <!-- END:commentaire -->
  <!-- END:commentaires -->

  <!-- BEGIN:nocommentaire -->
Soyez le premier &agrave; <a href="#new_commentaire">poster un commentaire</a> ! 

<!-- END:nocommentaire -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── commentaire     // Ce bloc s'affiche pour chaque commentaires du billet en cours d'affichage
    │   ├── site_auteur     // Le contenu du bloc s'affiche si l'auteur du commentaire a renseigné un site internet
    │   ├── nosite_auteur     // Le contenu du bloc s'affiche si l'auteur du commentaire n'a pas renseigné de site internet
    │   └── admin     // Le contenu du bloc s'affiche si l'auteur du commentaire est administrateur du site
    ├── commentaires     // Ce bloc s'affiche s'il y a au moins un commentaire.
    │   └── commentaire     // Ce bloc s'affiche pour chaque commentaires du billet en cours d'affichage.
    │       ├── site_auteur     // 
    │       ├── nosite_auteur     // 
    │       └── admin     // 
    └── nocommentaire     // Le contenu du bloc s'affiche si aucun commentaire n'a été posté pour le billet en cours d'affichage
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | pluriel_commentaire | Affiche "s" si le nombre de commenraire est supérieur à 1 |
| main | nb_commentaires | Affiche le nombre de commentaires |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| commentaire | commentaire_id | Identifiant unique du commentaire |
| commentaire | avatar | URL relative de l'avatar de l'auteur du commentaire |
| commentaire | avatar_miniature | URL relative de l'avatar miniature de l'auteur du commentaire |
| commentaire | gravatar | Gravatar de l'auteur du commentaire en 120x120 pixel |
| commentaire | gravatar_miniature | Gravatar de l'auteur du commentaire en 40x40 pixel |
| commentaire | billet_id | Identifiant unique du billet |
| commentaire | titre | Titre du commentaire |
| commentaire | commentaire | Contenu textuel du commentaire |
| commentaire | auteur | Auteur du commentaire |
| commentaire | email | Adresse email de l'auteur |
| commentaire | site_auteur | Site interne de l'auteur |
| commentaire | categorie_id | Indentifiant numérique de la catégorie du billet |
| commentaire | intitule_categorie | Intitulé de la catégorie du billet |
| commentaire | titre_billet | Titre du billet |
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
| commentaire | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| commentaire | alterne | La balise affichera alternativement 1 ou 2. |
| commentaire | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| commentaire | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| commentaire | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |


## Widget Blog / Poster un commentaire

**Affiche le formulaire d'ajout de commentaires à un billet du Blog.**
**ce widget ne peut être utilisé que sur la page type "Détail du billet" du service "Blog".** 

### Template

Le template du widget : `theme/fr/widgets/blog/poster_commentaire/index.html`. Exemple :

```html
<!-- BEGIN:main -->

  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->
  <!-- BEGIN:commentaires_ouverts -->
  <!-- BEGIN:erreurs -->
  <p>Veuillez compl&eacute;ter les champs :</p>
    <ul>
      <!-- BEGIN:erreur -->
      <li>{erreur}</li>
      <!-- END:erreur -->
    </ul>
  
  <!-- END:erreurs -->
  <form method="post" action="">
      <!-- BEGIN:identifie -->
      <!-- END:identifie -->
      <!-- BEGIN:nonidentifie -->
      <p><label for="auteur">Pseudo :</label> <input name="auteur" id="auteur" type="text" value="{auteur}" /></p>
      <p><label for="email">E-mail  :</label> <input name="email" id="email" type="text"  value="{email}" />
          facultatif</p>
          <p><label for="site_web">Site Web  :</label> <input name="site_web" id="site_web" type="text" value="{site_web}" />
          facultatif </p>
      <!-- END:nonidentifie -->
      <p><label for="commentaire">Votre commentaire :</label> <textarea name="commentaire" id="commentaire" rows="10">{commentaire}</textarea> </p>

	  <!-- BEGIN:consentement -->
	  <p>
		<label for="consentement_ok">
		<input name="consentement_ok" id="consentement_ok" type="checkbox" value="1" {check_consentement}/>J'accepte la publication du commentaire
		</label>
	  </p>
	  <!-- END:consentement -->

      <!-- BEGIN:captcha -->
      <h2>Anti-spam :</h2>
      <p>
      <label for="captcha[{captcha_id}]">{captcha_question}</label>
          <input name="captcha[{captcha_id}]"  id="captcha[{captcha_id}]" type="text"/></p>
      <!-- END: captcha -->
		<p>
		<input type="submit" name="Submit" value="Poster" title="Poster le commentaire" />
		<input type="hidden" name="act" value="post" />
		<input type="hidden" name="ctl" value="{ctl}" />
		</p>

  </form>
  <!-- END:commentaires_ouverts -->
  <!-- BEGIN:commentaires_identification -->
  <a href="{baseLangue}/compte/login.html?o=o">Identifiez vous</a> pour poster un commentaire.
  <!-- END:commentaires_identification -->
  <!-- BEGIN:commentaires_fermes -->
  <p>Les commentaires de ce billet sont fermés</p>
  <!-- END:commentaires_fermes -->
  <!-- BEGIN:commentaires_moderes -->
  <p>Votre commentaire a bien été enregistr&eacute;, il doit d'abord &ecirc;tre valid&eacute; par l'&eacute;diteur de ce blog avant d'appara&icirc;tre dans la liste des commentaires.</p>
  <!-- END:commentaires_moderes -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── commentaires_identification     // Le contenu du bloc s'affiche si les commentaires anonymes sont refusés et que l'internaute n'est pas encore identifié.
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── commentaires_ouverts     // Le contenu du bloc s'affiche si les commentaires sont ouverts pour le billet en cours d'affichage.
    │   ├── consentement     // Ce bloc s'affiche si le recueilement du consentement est activé
    │   ├── identifie     // Le contenu du bloc s'affiche si l'internaute est déjà identifié
    │   ├── nonidentifie     // Le contenu du bloc s'affiche si l'internaute n'est pas identifié
    │   ├── erreurs     // Ce bloc s'affiche si le formulaire contient des erreurs
    │   │   └── erreur     // Ce bloc s'affiche pour chaque erreur du formulaire
    │   ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli. Ce bloc permet en outre de ne pas afficher du tout l'intitulé si les commentaires sont fermés
    │   └── captcha     // Le contenu du bloc s'affiche si le captcha (dispositif anti-spam) est activé. Cette option est configurable "Mon site / Blog / Paramètres"
    ├── commentaires_fermes     // Le contenu du bloc s'affiche si les commentaires sont fermés pour le billet en cours d'affichage
    └── commentaires_moderes     // l'internaute viens de poster un commentaire mais les commentaires ne sont pas publié automatiquement => on affiche un message d'avertissement
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| commentaires_ouverts | commentaire | contenu du champ commentaire précédemment rempli |
| consentement | check_consentement | Renvoi checked="checked" pour accepter le recueil des données. |
| identifie | auteur | Auteur identifié |
| identifie | email | Email du compte identifié |
| identifie | site_web | Site web du compte identifié |
| nonidentifie | auteur | contenu du champ auteur précédemment rempli |
| nonidentifie | email | contenu du champ email précédemment rempli |
| nonidentifie | site_web | contenu du champ site_web précédemment rempli |
| erreur | erreur | Erreur du formulaire |
| captcha | captcha_question | Question du captcha. |
| captcha | captcha_id | Id du captcha. |


## Widget Blog / Archives

**Affiche les archives du Blog sous la forme d'une liste de mois.**
Chaque mois permet de restreindre l'affichage des billets à ceux qui ont été postés ce mois-ci.

### Template

Le template du widget : `theme/fr/widgets/blog/archives/index.html`. Exemple :

```html
<!-- BEGIN:main -->

  <!-- BEGIN: intitule -->
  <h1>{intitule}</h1>
  <!-- END: intitule -->
  
    <ul>
      <!-- BEGIN:archive -->
      <li><a href="{baseLangue}/blog/{annee_archive}/{num_mois_archive}/" title="{mois_archive|ucfirst} {annee_archive}">{mois_archive|ucfirst} {annee_archive}</a></li>
      <!-- END:archive -->
    </ul>
    <!-- BEGIN:noarchive -->
    Pas de billet posté
    <!-- END:noarchive -->
  

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── archive     // Le contenu du blog s'affiche pour chaque mois qui contient au moins un article
    └── noarchive     // Le contenu du blog s'affiche si aucune archive n'est disponible
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| archive | num_mois_archive | Numéro du mois |
| archive | mois_archive | Nom du mois |
| archive | annee_archive | Année |
| archive | lien_archive | Lien vers les archives |
| archive | actif | Affiche actif si la page courante correspond au mois-année du bloc actuellement affiché |
| archive | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| archive | alterne | La balise affichera alternativement 1 ou 2. |
| archive | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| archive | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| archive | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |


## Widget Blog / Catégories

**Affiche la liste des catégories du Blog.**
Chaque catégorie permet de restreindre l'affichage des billets à ceux qui ont été postés dans cette catégorie.

### Template

Le template du widget : `theme/fr/widgets/blog/categories/index.html`. Exemple :

```html
<!-- BEGIN:main -->


  <!-- BEGIN: intitule -->
  <h1>{intitule}</h1>
  <!-- END: intitule -->
  
    <ul>
      <!-- BEGIN:accueil -->
      <li><a href="{baseLangue}/blog/" title="{intitule_accueil|htmlentities}">{intitule_accueil}</a></li>
      <!-- END:accueil -->
      <!-- BEGIN:categorie -->
      <li><a href="{baseLangue}/blog/{nom_optim}/" title="{intitule_categorie|htmlentities}">{intitule_categorie} ({nb_billets})</a></li>
      <!-- END:categorie -->
    </ul>  
    

    <!-- BEGIN:nocategorie -->
    Pas de billet posté
    <!-- END:nocategorie -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── accueil     // Bloc parsé pour la catégorie d'accueil
    └── categorie     // Bloc parsé pour chacune des catégories
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| accueil | intitule_accueil | Intitulé de la catégorie d'accueil |
| accueil | actif | Affiche actif si la catégorie courante est l'accueil |
| accueil | lien_accueil | Lien vers la page d'accueil |
| categorie | actif | Affiche actif si la catégorie courante est la catégorie parsé |
| categorie | categorie_id | Identifiant unique de la catégorie |
| categorie | intitule_categorie | Inititulé de la catégorie |
| categorie | nom_optim | Nom optimisé de la catégorie tel qu'il est défini dans la console d'administration dans la page d'édition d'une catégorie du "Blog" dans le champ "Nom de la page". |
| categorie | lien_categorie | Lien vers la catégorie |
| categorie | nb_billets | Nombre de billets publiés contenu dans la catégorie |
| categorie | auteur | Nom du créateur de la catégorie |
| categorie | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| categorie | alterne | La balise affichera alternativement 1 ou 2. |
| categorie | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| categorie | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| categorie | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |


## Widget Blog / Derniers commentaires postés

**Affiche les derniers commentaires postés dans le Blog**


### Template

Le template du widget : `theme/fr/widgets/blog/derniers_commentaires_postes/index.html`. Exemple :

```html
<!-- BEGIN:main -->


  <!-- BEGIN: intitule -->
  <h1>{intitule}</h1>
  <!-- END: intitule -->
  
    <ul>
      <!-- BEGIN:commentaire -->
      <li><a href="{lien_billet}#commentaires" title="Aller au commentaire" id="commentaire_{compteur}"><strong>{auteur} :</strong> {resume_commentaire}</a></li>
      <!-- END:commentaire -->
    </ul>
    <!-- BEGIN:nocommentaire -->
    <p>Soyez le premier &agrave; poster un commentaire !</p>
    <!-- END:nocommentaire -->
  

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── commentaire     // Le contenu du bloc s'affiche pour chaque commentaire postés
    │   ├── site_auteur     // Le contenu du bloc s'affiche si l'auteur du commentaire a renseigné un site internet
    │   ├── nosite_auteur     // Le contenu du bloc s'affiche si l'auteur du commentaire n'a pas renseigné de site internet
    │   └── admin     // Le contenu du bloc s'affiche si l'auteur du commentaire est administrateur du site
    └── nocommentaire     // Le contenu du bloc s'affiche si aucun commentaire n'a été posté
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_limit | Nombre maximum d'éléments affichés |
| main | widget_resume | Longueur maximale des résumés |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| commentaire | commentaire_id | Identifiant unique du commentaire |
| commentaire | avatar | URL relative de l'avatar de l'auteur du commentaire |
| commentaire | avatar_miniature | URL relative de l'avatar miniature de l'auteur du commentaire |
| commentaire | gravatar | Gravatar de l'auteur du commentaire en 120x120 pixel |
| commentaire | gravatar_miniature | Gravatar de l'auteur du commentaire en 40x40 pixel |
| commentaire | lien_billet | URL relative du billet |
| commentaire | billet_id | Identifiant unique du billet |
| commentaire | titre | Titre du commentaire |
| commentaire | commentaire | Contenu textuel du commentaire |
| commentaire | resume_commentaire | Extrait textuel du commentaire sans balise HTML |
| commentaire | auteur | Auteur du commentaire |
| commentaire | email | Adresse email de l'auteur |
| commentaire | site_auteur | Site interne de l'auteur |
| commentaire | categorie_id | Indentifiant numérique de la catégorie du billet |
| commentaire | intitule_categorie | Intitulé de la catégorie du billet |
| commentaire | titre_billet | Titre du billet |
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
| commentaire | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| commentaire | alterne | La balise affichera alternativement 1 ou 2. |
| commentaire | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| commentaire | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| commentaire | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |

