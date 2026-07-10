# Documentation complète des endpoints : API Front-Office (PFO) Kiubi

## Site web

### Arborescence

Article de référence : [https://aide.kiubi.com/api-front-cms.html#arborescence](https://aide.kiubi.com/api-front-cms.html#arborescence)

**Liste l'arborescence d'un menu GET**

**/api/v1/cms/menus/{key}/pages.json**

Liste l'arborescence d'un menu avec la profondeur choisie. L'identifiant api du menu est à récupérer dans la console d'administration ou l'API Developers

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| key | Obligatoire | string | Identifiant api du menu |
| depth | | integer | Profondeur de recherche Les valeurs attendues sont : 1, 2, 3, 4 |


```
data:[
 {
 "is_home": "boolean",
 "type": "string",
 "title": "string",
 "slug": "string",
 "url": "string",
 "depth": "integer",
 "link": {
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "description": "string",
 "xtra": "string",
 "attributes": "string"
 }
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| is_home | boolean | Identifie la page d'acceuil |
| type | string | Type de la page |
| title | string | Intitulé de la page |
| slug | string | Nom optimisé de la page |
| url | string | URL de la page |
| depth | integer | Profondeur de la page dans l'arborescence du menu |
| linkFacultatif | object | Informations complémentaires du lien interne |
| thumbFacultatif | object | Image du lien |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| descriptionFacultatif | string | Description du lien |
| xtraFacultatif | string | Champ xtra du lien |
| attributesFacultatif | string | Attributs du lien |

**Liste les sous pages GET**

**/api/v1/cms/pages/{slug}/children.json**

Liste les pages enfants d'une page. Le paramètre depth permet de choisir la profondeur de l'arborescence qui serra retournée.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| slug | Obligatoire | string | Nom optimisé de la page |
| depth | | integer | Profondeur de recherche Les valeurs attendues sont : 1, 2, 3, 4 |


```
data:[
 {
 "is_home": "boolean",
 "type": "string",
 "title": "string",
 "slug": "string",
 "url": "string",
 "depth": "integer",
 "link": {
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "description": "string",
 "xtra": "string",
 "attributes": "string"
 }
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| is_home | boolean | Identifie la page d'acceuil |
| type | string | Type de la page |
| title | string | Intitulé de la page |
| slug | string | Nom optimisé de la page |
| url | string | URL de la page |
| depth | integer | Profondeur de la page dans l'arborescence du menu |
| linkFacultatif | object | Informations complémentaires du lien interne |
| thumbFacultatif | object | Image du lien |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| descriptionFacultatif | string | Description du lien |
| xtraFacultatif | string | Champ xtra du lien |
| attributesFacultatif | string | Attributs du lien |

**Récupére la page parente d'une page GET**

**/api/v1/cms/pages/{slug}/parent.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| slug | Obligatoire | string | Nom optimisé de la page |


```
data:{
 "is_home": "boolean",
 "type": "string",
 "title": "string",
 "slug": "string",
 "url": "string",
 "depth": "integer",
 "link": {
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "description": "string",
 "xtra": "string",
 "attributes": "string"
 }
}
```

| Nom | Type | Description |
| --- | --- | --- |
| is_home | boolean | Identifie la page d'acceuil |
| type | string | Type de la page |
| title | string | Intitulé de la page |
| slug | string | Nom optimisé de la page |
| url | string | URL de la page |
| depth | integer | Profondeur de la page dans l'arborescence du menu |
| linkFacultatif | object | Informations complémentaires du lien interne |
| thumbFacultatif | object | Image du lien |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| descriptionFacultatif | string | Description du lien |
| xtraFacultatif | string | Champ xtra du lien |
| attributesFacultatif | string | Attributs du lien |

### Contenus

Article de référence : [https://aide.kiubi.com/api-front-cms.html#contenus](https://aide.kiubi.com/api-front-cms.html#contenus)

**Liste les billets d'une page GET**

**/api/v1/cms/pages/{slug}/posts.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| slug | Obligatoire | string | Nom optimisé de la page |
| children | | flag | Inclus les billets des pages enfants Les valeurs attendues sont : 1 |
| group_name | | string | Restreins à un groupe de billet |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : title / -titleTri selon le titre du billetposition / -positionTri selon l'ordre des billetsrandTri aléatoire. Cet ordre de tri n'est pas compatible avec la paginationcrea / -creaDate de création du billet | title / -title | Tri selon le titre du billet | position / -position | Tri selon l'ordre des billets | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | crea / -crea | Date de création du billet |
| title / -title | Tri selon le titre du billet |
| position / -position | Tri selon l'ordre des billets |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| crea / -crea | Date de création du billet |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : textsInclut les champs text1 à text15 de chaque billet | texts | Inclut les champs text1 à text15 de chaque billet |
| texts | Inclut les champs text1 à text15 de chaque billet |


```
data:[
 {
 "type": "string",
 "title": "string",
 "subtitle": "string",
 "group": "string",
 "page_title": "string",
 "page_slug": "string",
 "url": "string",
 "post_url": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| type | string | Type du billet |
| title | string | Titre du billet |
| subtitle | string | Soustitre du billet |
| group | string | Groupe du billet |
| page_title | string | Titre de la page |
| page_slug | string | Nom optimisé de la page |
| url | string | URL de la page |
| post_url | string | URL du billet |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |

**Liste les billets d'un groupe GET**

**/api/v1/cms/posts.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| group_name | Obligatoire | string | Nom du groupe |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : title / -titleTri selon le titre du billetposition / -positionTri selon l'ordre des billetsrandTri aléatoire. Cet ordre de tri n'est pas compatible avec la paginationcrea / -creaDate de création du billet | title / -title | Tri selon le titre du billet | position / -position | Tri selon l'ordre des billets | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | crea / -crea | Date de création du billet |
| title / -title | Tri selon le titre du billet |
| position / -position | Tri selon l'ordre des billets |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| crea / -crea | Date de création du billet |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : textsInclut les champs text1 à text15 de chaque billet | texts | Inclut les champs text1 à text15 de chaque billet |
| texts | Inclut les champs text1 à text15 de chaque billet |


```
data:[
 {
 "type": "string",
 "title": "string",
 "subtitle": "string",
 "group": "string",
 "page_title": "string",
 "page_slug": "string",
 "url": "string",
 "post_url": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| type | string | Type du billet |
| title | string | Titre du billet |
| subtitle | string | Soustitre du billet |
| group | string | Groupe du billet |
| page_title | string | Titre de la page |
| page_slug | string | Nom optimisé de la page |
| url | string | URL de la page |
| post_url | string | URL du billet |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |

### Médiathèque

Article de référence : [https://aide.kiubi.com/api-front-cms.html#mediatheque](https://aide.kiubi.com/api-front-cms.html#mediatheque)

**Retourne les informations d'un média GET**

**/api/v1/media/files/{media_id}.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| media_id | Obligatoire | integer | Identifiant numérique du média |


```
data:{
 "id": "integer",
 "type": "string",
 "name": "string",
 "description": "string",
 "original_name": "string",
 "modification_date": "string",
 "modification_date_f": "string",
 "modification_date_timestamp": "integer",
 "mime": "string",
 "weight": "integer",
 "width": "integer",
 "height": "integer",
 "url": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
}
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du media |
| type | string | Type de fichier |
| name | string | Nom |
| description | string | Description |
| original_name | string | Nom original du fichier au chargement du fichier |
| modification_date | string | Date de modification |
| modification_date_f | string | Date de modification formatée |
| modification_date_timestamp | integer | Timestamp de la date de modification |
| mime | string | Type mime |
| weight | integer | Poids du fichier en octets |
| widthFacultatif | integer | Largeur en pixel pour les images |
| heightFacultatif | integer | Hauteur en pixel pour les images |
| url | string | URL du média |
| thumbFacultatif | object | Miniatures |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |

**Retourne les médias d'un dossier GET**

**/api/v1/media/folders/{key}.json**

Retourne les médias contenus dans un dossier. L'identifiant unique du dossier est disponible dans le backoffice.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| key | Obligatoire | string | Identifiant dossier |
| sort | | array | Détermine l'ordre de tri parmis les critères suivants : alphaNom du fichier (ordre par défaut)-dateDate de modification | alpha | Nom du fichier (ordre par défaut) | -date | Date de modification |
| alpha | Nom du fichier (ordre par défaut) |
| -date | Date de modification |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : thumbInclut les liens des miniatures pour chaque image | thumb | Inclut les liens des miniatures pour chaque image |
| thumb | Inclut les liens des miniatures pour chaque image |


```
data:[
 {
 "id": "integer",
 "type": "string",
 "name": "string",
 "description": "string",
 "original_name": "string",
 "modification_date": "string",
 "modification_date_f": "string",
 "modification_date_timestamp": "integer",
 "mime": "string",
 "weight": "integer",
 "width": "integer",
 "height": "integer",
 "url": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du media |
| type | string | Type de fichier |
| name | string | Nom |
| description | string | Description |
| original_name | string | Nom original du fichier au chargement du fichier |
| modification_date | string | Date de modification |
| modification_date_f | string | Date de modification formatée |
| modification_date_timestamp | integer | Timestamp de la date de modification |
| mime | string | Type mime |
| weight | integer | Poids du fichier en octets |
| widthFacultatif | integer | Largeur en pixel pour les images |
| heightFacultatif | integer | Hauteur en pixel pour les images |
| url | string | URL du média |
| thumbFacultatif | object | Miniatures |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |

## Blog

### Billets du blog

Article de référence : [https://aide.kiubi.com/api-front-blog.html#billets-du-blog](https://aide.kiubi.com/api-front-blog.html#billets-du-blog)

**Liste les billets d'une catégorie GET**

**/api/v1/blog/categories/{category_id}/posts.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| category_id | Obligatoire | integer | Identifiant de la catégorie |
| pinned | | string | Comportement des billets épinglés Les valeurs attendues sont : top, exclude, only |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : date / -dateTri selon la date de publication du billettitle / -titleTri selon le titre du billetcomments_count / -comments_countTri selon le nombre de commentairerandTri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | date / -date | Tri selon la date de publication du billet | title / -title | Tri selon le titre du billet | comments_count / -comments_count | Tri selon le nombre de commentaire | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| date / -date | Tri selon la date de publication du billet |
| title / -title | Tri selon le titre du billet |
| comments_count / -comments_count | Tri selon le nombre de commentaire |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |


```
data:[
 {
 "id": "integer",
 "title": "string",
 "is_pinned": "boolean",
 "type": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "header": "string",
 "slug": "string",
 "content": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string",
 "author": "string",
 "url": "string",
 "permalink": "string",
 "publication_date": "string",
 "publication_date_f": "string",
 "publication_date_timestamp": "integer",
 "category_id": "integer",
 "category_slug": "string",
 "category_name": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du billet |
| title | string | Titre |
| is_pinned | boolean | Billet épinglé |
| type | string | Type du billet |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| header | string | Chapô |
| slug | string | Nom optimisé |
| content | string | Contenu |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |
| author | string | Auteur |
| url | string | Chemin du billet |
| permalink | string | URL canonique du billet |
| publication_date | string | Date de publication |
| publication_date_f | string | Date de publication formatée |
| publication_date_timestamp | integer | Timestamp de la date de publication |
| category_id | integer | Identifiant de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| category_name | string | Nom de la catégorie |
| has_comments_open | boolean | Commentaires ouverts |
| comments_count | integer | Nombre de commentaires |

**Liste les billets d'une catégorie de l'année GET**

**/api/v1/blog/categories/{category_id}/{year}/posts.json**

Liste les billets d'une catégorie publiés pendant l'année indiquée.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| category_id | Obligatoire | integer | Identifiant de la catégorie |
| year | Obligatoire | integer | Année sur 4 chiffres |
| pinned | | string | Comportement des billets épinglés Les valeurs attendues sont : top, exclude, only |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : date / -dateTri selon la date de publication du billettitle / -titleTri selon le titre du billetcomments_count / -comments_countTri selon le nombre de commentairerandTri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | date / -date | Tri selon la date de publication du billet | title / -title | Tri selon le titre du billet | comments_count / -comments_count | Tri selon le nombre de commentaire | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| date / -date | Tri selon la date de publication du billet |
| title / -title | Tri selon le titre du billet |
| comments_count / -comments_count | Tri selon le nombre de commentaire |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |


```
data:[
 {
 "id": "integer",
 "title": "string",
 "is_pinned": "boolean",
 "type": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "header": "string",
 "slug": "string",
 "content": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string",
 "author": "string",
 "url": "string",
 "permalink": "string",
 "publication_date": "string",
 "publication_date_f": "string",
 "publication_date_timestamp": "integer",
 "category_id": "integer",
 "category_slug": "string",
 "category_name": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du billet |
| title | string | Titre |
| is_pinned | boolean | Billet épinglé |
| type | string | Type du billet |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| header | string | Chapô |
| slug | string | Nom optimisé |
| content | string | Contenu |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |
| author | string | Auteur |
| url | string | Chemin du billet |
| permalink | string | URL canonique du billet |
| publication_date | string | Date de publication |
| publication_date_f | string | Date de publication formatée |
| publication_date_timestamp | integer | Timestamp de la date de publication |
| category_id | integer | Identifiant de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| category_name | string | Nom de la catégorie |
| has_comments_open | boolean | Commentaires ouverts |
| comments_count | integer | Nombre de commentaires |

**Liste les billets d'une catégorie du mois GET**

**/api/v1/blog/categories/{category_id}/{year}/{month}/posts.json**

Liste les billets d'une catégorie publiés pendant le mois indiqué.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| category_id | Obligatoire | integer | Identifiant de la catégorie |
| year | Obligatoire | integer | Année sur 4 chiffres |
| month | Obligatoire | integer | Numéro du mois |
| pinned | | string | Comportement des billets épinglés Les valeurs attendues sont : top, exclude, only |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : date / -dateTri selon la date de publication du billettitle / -titleTri selon le titre du billetcomments_count / -comments_countTri selon le nombre de commentairerandTri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | date / -date | Tri selon la date de publication du billet | title / -title | Tri selon le titre du billet | comments_count / -comments_count | Tri selon le nombre de commentaire | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| date / -date | Tri selon la date de publication du billet |
| title / -title | Tri selon le titre du billet |
| comments_count / -comments_count | Tri selon le nombre de commentaire |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |


```
data:[
 {
 "id": "integer",
 "title": "string",
 "is_pinned": "boolean",
 "type": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "header": "string",
 "slug": "string",
 "content": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string",
 "author": "string",
 "url": "string",
 "permalink": "string",
 "publication_date": "string",
 "publication_date_f": "string",
 "publication_date_timestamp": "integer",
 "category_id": "integer",
 "category_slug": "string",
 "category_name": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du billet |
| title | string | Titre |
| is_pinned | boolean | Billet épinglé |
| type | string | Type du billet |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| header | string | Chapô |
| slug | string | Nom optimisé |
| content | string | Contenu |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |
| author | string | Auteur |
| url | string | Chemin du billet |
| permalink | string | URL canonique du billet |
| publication_date | string | Date de publication |
| publication_date_f | string | Date de publication formatée |
| publication_date_timestamp | integer | Timestamp de la date de publication |
| category_id | integer | Identifiant de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| category_name | string | Nom de la catégorie |
| has_comments_open | boolean | Commentaires ouverts |
| comments_count | integer | Nombre de commentaires |

**Liste les billets d'une catégorie de la date GET**

**/api/v1/blog/categories/{category_id}/{year}/{month}/{day}/posts.json**

Liste les billets d'une catégorie publiés le jour indiqué.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| category_id | Obligatoire | integer | Identifiant de la catégorie |
| year | Obligatoire | integer | Année sur 4 chiffres |
| month | Obligatoire | integer | Numéro du mois |
| day | Obligatoire | integer | Numéro du jour |
| pinned | | string | Comportement des billets épinglés Les valeurs attendues sont : top, exclude, only |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : date / -dateTri selon la date de publication du billettitle / -titleTri selon le titre du billetcomments_count / -comments_countTri selon le nombre de commentairerandTri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | date / -date | Tri selon la date de publication du billet | title / -title | Tri selon le titre du billet | comments_count / -comments_count | Tri selon le nombre de commentaire | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| date / -date | Tri selon la date de publication du billet |
| title / -title | Tri selon le titre du billet |
| comments_count / -comments_count | Tri selon le nombre de commentaire |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |


```
data:[
 {
 "id": "integer",
 "title": "string",
 "is_pinned": "boolean",
 "type": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "header": "string",
 "slug": "string",
 "content": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string",
 "author": "string",
 "url": "string",
 "permalink": "string",
 "publication_date": "string",
 "publication_date_f": "string",
 "publication_date_timestamp": "integer",
 "category_id": "integer",
 "category_slug": "string",
 "category_name": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du billet |
| title | string | Titre |
| is_pinned | boolean | Billet épinglé |
| type | string | Type du billet |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| header | string | Chapô |
| slug | string | Nom optimisé |
| content | string | Contenu |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |
| author | string | Auteur |
| url | string | Chemin du billet |
| permalink | string | URL canonique du billet |
| publication_date | string | Date de publication |
| publication_date_f | string | Date de publication formatée |
| publication_date_timestamp | integer | Timestamp de la date de publication |
| category_id | integer | Identifiant de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| category_name | string | Nom de la catégorie |
| has_comments_open | boolean | Commentaires ouverts |
| comments_count | integer | Nombre de commentaires |

**Liste tous les billets GET**

**/api/v1/blog/posts.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| pinned | | string | Comportement des billets épinglés Les valeurs attendues sont : top, exclude, only |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : date / -dateTri selon la date de publication du billettitle / -titleTri selon le titre du billetcomments_count / -comments_countTri selon le nombre de commentairerandTri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | date / -date | Tri selon la date de publication du billet | title / -title | Tri selon le titre du billet | comments_count / -comments_count | Tri selon le nombre de commentaire | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| date / -date | Tri selon la date de publication du billet |
| title / -title | Tri selon le titre du billet |
| comments_count / -comments_count | Tri selon le nombre de commentaire |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |


```
data:[
 {
 "id": "integer",
 "title": "string",
 "is_pinned": "boolean",
 "type": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "header": "string",
 "slug": "string",
 "content": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string",
 "author": "string",
 "url": "string",
 "permalink": "string",
 "publication_date": "string",
 "publication_date_f": "string",
 "publication_date_timestamp": "integer",
 "category_id": "integer",
 "category_slug": "string",
 "category_name": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du billet |
| title | string | Titre |
| is_pinned | boolean | Billet épinglé |
| type | string | Type du billet |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| header | string | Chapô |
| slug | string | Nom optimisé |
| content | string | Contenu |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |
| author | string | Auteur |
| url | string | Chemin du billet |
| permalink | string | URL canonique du billet |
| publication_date | string | Date de publication |
| publication_date_f | string | Date de publication formatée |
| publication_date_timestamp | integer | Timestamp de la date de publication |
| category_id | integer | Identifiant de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| category_name | string | Nom de la catégorie |
| has_comments_open | boolean | Commentaires ouverts |
| comments_count | integer | Nombre de commentaires |

**Détail d'un billet GET**

**/api/v1/blog/posts/{post_id}.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| post_id | Obligatoire | integer | Identifiant du billet |


```
data:{
 "id": "integer",
 "title": "string",
 "is_pinned": "boolean",
 "type": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "header": "string",
 "slug": "string",
 "content": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string",
 "author": "string",
 "url": "string",
 "permalink": "string",
 "publication_date": "string",
 "publication_date_f": "string",
 "publication_date_timestamp": "integer",
 "category_id": "integer",
 "category_slug": "string",
 "category_name": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du billet |
| title | string | Titre |
| is_pinned | boolean | Billet épinglé |
| type | string | Type du billet |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| header | string | Chapô |
| slug | string | Nom optimisé |
| content | string | Contenu |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |
| author | string | Auteur |
| url | string | Chemin du billet |
| permalink | string | URL canonique du billet |
| publication_date | string | Date de publication |
| publication_date_f | string | Date de publication formatée |
| publication_date_timestamp | integer | Timestamp de la date de publication |
| category_id | integer | Identifiant de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| category_name | string | Nom de la catégorie |
| has_comments_open | boolean | Commentaires ouverts |
| comments_count | integer | Nombre de commentaires |

**Liste les billets de l'année GET**

**/api/v1/blog/{year}/posts.json**

Liste les billets publiés dans l'année indiquée.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| year | Obligatoire | integer | Année sur 4 chiffres |
| pinned | | string | Comportement des billets épinglés Les valeurs attendues sont : top, exclude, only |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : date / -dateTri selon la date de publication du billettitle / -titleTri selon le titre du billetcomments_count / -comments_countTri selon le nombre de commentairerandTri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | date / -date | Tri selon la date de publication du billet | title / -title | Tri selon le titre du billet | comments_count / -comments_count | Tri selon le nombre de commentaire | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| date / -date | Tri selon la date de publication du billet |
| title / -title | Tri selon le titre du billet |
| comments_count / -comments_count | Tri selon le nombre de commentaire |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |


```
data:[
 {
 "id": "integer",
 "title": "string",
 "is_pinned": "boolean",
 "type": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "header": "string",
 "slug": "string",
 "content": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string",
 "author": "string",
 "url": "string",
 "permalink": "string",
 "publication_date": "string",
 "publication_date_f": "string",
 "publication_date_timestamp": "integer",
 "category_id": "integer",
 "category_slug": "string",
 "category_name": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du billet |
| title | string | Titre |
| is_pinned | boolean | Billet épinglé |
| type | string | Type du billet |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| header | string | Chapô |
| slug | string | Nom optimisé |
| content | string | Contenu |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |
| author | string | Auteur |
| url | string | Chemin du billet |
| permalink | string | URL canonique du billet |
| publication_date | string | Date de publication |
| publication_date_f | string | Date de publication formatée |
| publication_date_timestamp | integer | Timestamp de la date de publication |
| category_id | integer | Identifiant de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| category_name | string | Nom de la catégorie |
| has_comments_open | boolean | Commentaires ouverts |
| comments_count | integer | Nombre de commentaires |

**Liste les billets du mois GET**

**/api/v1/blog/{year}/{month}/posts.json**

Liste des billets publiés dans le mois indiqué.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| year | Obligatoire | integer | Année sur 4 chiffres |
| month | Obligatoire | integer | Numéro du mois |
| pinned | | string | Comportement des billets épinglés Les valeurs attendues sont : top, exclude, only |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : date / -dateTri selon la date de publication du billettitle / -titleTri selon le titre du billetcomments_count / -comments_countTri selon le nombre de commentairerandTri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | date / -date | Tri selon la date de publication du billet | title / -title | Tri selon le titre du billet | comments_count / -comments_count | Tri selon le nombre de commentaire | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| date / -date | Tri selon la date de publication du billet |
| title / -title | Tri selon le titre du billet |
| comments_count / -comments_count | Tri selon le nombre de commentaire |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |


```
data:[
 {
 "id": "integer",
 "title": "string",
 "is_pinned": "boolean",
 "type": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "header": "string",
 "slug": "string",
 "content": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string",
 "author": "string",
 "url": "string",
 "permalink": "string",
 "publication_date": "string",
 "publication_date_f": "string",
 "publication_date_timestamp": "integer",
 "category_id": "integer",
 "category_slug": "string",
 "category_name": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du billet |
| title | string | Titre |
| is_pinned | boolean | Billet épinglé |
| type | string | Type du billet |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| header | string | Chapô |
| slug | string | Nom optimisé |
| content | string | Contenu |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |
| author | string | Auteur |
| url | string | Chemin du billet |
| permalink | string | URL canonique du billet |
| publication_date | string | Date de publication |
| publication_date_f | string | Date de publication formatée |
| publication_date_timestamp | integer | Timestamp de la date de publication |
| category_id | integer | Identifiant de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| category_name | string | Nom de la catégorie |
| has_comments_open | boolean | Commentaires ouverts |
| comments_count | integer | Nombre de commentaires |

**Liste les billets d'une date GET**

**/api/v1/blog/{year}/{month}/{day}/posts.json**

Liste les billets publiés à la date indiquée.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| year | Obligatoire | integer | Année sur 4 chiffres |
| month | Obligatoire | integer | Numéro du mois |
| day | Obligatoire | integer | Numéro du jour |
| pinned | | string | Comportement des billets épinglés Les valeurs attendues sont : top, exclude, only |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : date / -dateTri selon la date de publication du billettitle / -titleTri selon le titre du billetcomments_count / -comments_countTri selon le nombre de commentairerandTri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | date / -date | Tri selon la date de publication du billet | title / -title | Tri selon le titre du billet | comments_count / -comments_count | Tri selon le nombre de commentaire | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| date / -date | Tri selon la date de publication du billet |
| title / -title | Tri selon le titre du billet |
| comments_count / -comments_count | Tri selon le nombre de commentaire |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |


```
data:[
 {
 "id": "integer",
 "title": "string",
 "is_pinned": "boolean",
 "type": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "header": "string",
 "slug": "string",
 "content": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string",
 "author": "string",
 "url": "string",
 "permalink": "string",
 "publication_date": "string",
 "publication_date_f": "string",
 "publication_date_timestamp": "integer",
 "category_id": "integer",
 "category_slug": "string",
 "category_name": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du billet |
| title | string | Titre |
| is_pinned | boolean | Billet épinglé |
| type | string | Type du billet |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| header | string | Chapô |
| slug | string | Nom optimisé |
| content | string | Contenu |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |
| author | string | Auteur |
| url | string | Chemin du billet |
| permalink | string | URL canonique du billet |
| publication_date | string | Date de publication |
| publication_date_f | string | Date de publication formatée |
| publication_date_timestamp | integer | Timestamp de la date de publication |
| category_id | integer | Identifiant de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| category_name | string | Nom de la catégorie |
| has_comments_open | boolean | Commentaires ouverts |
| comments_count | integer | Nombre de commentaires |

### Commentaires

Article de référence : [https://aide.kiubi.com/api-front-blog.html#commentaires](https://aide.kiubi.com/api-front-blog.html#commentaires)

**Liste les commentaires GET**

**/api/v1/blog/comments.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : date / -dateTri selon la date de publication du commentaire | date / -date | Tri selon la date de publication du commentaire |
| date / -date | Tri selon la date de publication du commentaire |


```
data:{
 "comments": [
 {
 "id": "integer",
 "post_id": "integer",
 "post_title": "string",
 "post_url": "string",
 "comment": "string",
 "author": "string",
 "author_url": "string",
 "date": "string",
 "date_f": "string",
 "date_timestamp": "integer",
 "avatar": "string",
 "avatar_mini": "string",
 "origin": "string",
 "new_captcha": "string"
 }
 ]
}
```

| Nom | Type | Description |
| --- | --- | --- |
| comments | object | Liste des commentaires |
| id | integer | Identifiant du commentaire |
| post_id | integer | Identifiant du billet |
| post_title | string | Titre du billet |
| post_url | string | URL du billet |
| comment | string | Commentaire |
| author | string | Auteur du commentaire |
| author_url | string | Site web de l'auteur |
| date | string | Date de publication du commentaire |
| date_f | string | Date de publication formatée du commentaire |
| date_timestamp | integer | Timestamp de la date de publication du commenaire |
| avatar | string | URL de l'avatar |
| avatar_mini | string | URL de la miniature de l'avatar |
| origin | string | Oginie du commentaire |
| new_captchaFacultatif | string | Information sur le captcha |

**Génère un captcha GET**

**/api/v1/blog/posts/{post_id}/captcha.json**

Génère un nouveau captcha pour le prochain commentaire posté par l'utilisateur courant. Ce endpoint est inutile si reCaptha est utilisé.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| post_id | Obligatoire | integer | Identifiant du billet |


```
data:{
 "captcha": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| captcha | string | Question du captcha |

**Liste les commentaires d'un billet GET**

**/api/v1/blog/posts/{post_id}/comments.json**

En plus de la liste les commentaires, ce endpoint renvoie également des informations sur la protection par captcha de la publication de commentaires.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| post_id | Obligatoire | integer | Identifiant du billet |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : date / -dateTri selon la date de publication du commentaire | date / -date | Tri selon la date de publication du commentaire |
| date / -date | Tri selon la date de publication du commentaire |


```
data:{
 "comments": [
 {
 "id": "integer",
 "post_id": "integer",
 "post_title": "string",
 "post_url": "string",
 "comment": "string",
 "author": "string",
 "author_url": "string",
 "date": "string",
 "date_f": "string",
 "date_timestamp": "integer",
 "avatar": "string",
 "avatar_mini": "string",
 "origin": "string",
 "new_captcha": "string"
 }
 ],
 "has_comments_open": "boolean",
 "has_captcha": "boolean",
 "captcha": "string",
 "is_consent_required": "boolean"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| comments | object | Liste des commentaires publiés du billet |
| id | integer | Identifiant du commentaire |
| post_id | integer | Identifiant du billet |
| post_title | string | Titre du billet |
| post_url | string | URL du billet |
| comment | string | Commentaire |
| author | string | Auteur du commentaire |
| author_url | string | Site web de l'auteur |
| date | string | Date de publication du commentaire |
| date_f | string | Date de publication formatée du commentaire |
| date_timestamp | integer | Timestamp de la date de publication du commenaire |
| avatar | string | URL de l'avatar |
| avatar_mini | string | URL de la miniature de l'avatar |
| origin | string | Oginie du commentaire |
| new_captchaFacultatif | string | Information sur le captcha |
| has_comments_open | boolean | Détermine si les commentaires sont ouverts pour le billet |
| has_captcha | boolean | Détermine si le billet est protégé par catpcha |
| captchaFacultatif | string | Question de captcha pour la construction d'un formulaire de commentaire (vide si reCaptcha est activé) |
| is_consent_required | boolean | Recueil du consentement requis |

**Poste un commentaire POST**

**/api/v1/blog/posts/{post_id}/comments.json**

Si la protection par captcha est activée, il est obligatoire de remplir le champ captcha avec la réponse à la question du captcha de la plateforme ou le token reCaptcha.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| post_id | Obligatoire | integer | Identifiant du billet |
| captcha | | string | Réponse au dernier captcha généré pour ce billet |
| author | Obligatoire | string | Auteur du commentaire |
| email | | string | Adresse email de l'auteur |
| website | | string | Site Internet de l'auteur |
| comment | Obligatoire | string | Commentaire |
| consent | | boolean | Donne le consentement au traitement des données |


```
data:{
 "id": "integer",
 "is_published": "boolean",
 "new_captcha": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| idFacultatif | integer | Identifiant du commentaire |
| is_publishedFacultatif | boolean | Determine si le commentaire est publié immédiatement |
| new_captchaFacultatif | string | Nouveau captcha en cas d'échec de soumission du commentaire (vide si reCaptcha est activé) |

### Navigation

Article de référence : [https://aide.kiubi.com/api-front-blog.html#navigation](https://aide.kiubi.com/api-front-blog.html#navigation)

**Liste les archives GET**

**/api/v1/blog/archives.json**

Liste des mois et années où des billets ont été publiés.


```
data:[
 {
 "year": "integer",
 "month": "integer",
 "url": "string"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| year | integer | Année |
| month | integer | Mois |
| url | string | URL |

**Liste les catégories GET**

**/api/v1/blog/categories.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| sort | | array | Ordres de tri parmis les critères suivants : id / -idTri selon l'identifiant de la catégorietitle / -titleTri selon l'intitulé de la catégorieslug / -slugTri selon le nom optimisé de la catégorieposts_count / -posts_countTri selon le nombre de billet | id / -id | Tri selon l'identifiant de la catégorie | title / -title | Tri selon l'intitulé de la catégorie | slug / -slug | Tri selon le nom optimisé de la catégorie | posts_count / -posts_count | Tri selon le nombre de billet |
| id / -id | Tri selon l'identifiant de la catégorie |
| title / -title | Tri selon l'intitulé de la catégorie |
| slug / -slug | Tri selon le nom optimisé de la catégorie |
| posts_count / -posts_count | Tri selon le nombre de billet |


```
data:[
 {
 "id": "integer",
 "name": "string",
 "posts_count": "integer",
 "slug": "string",
 "url": "string"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant de la catégorie |
| name | string | Intitulé de la catégorie |
| posts_count | integer | Nombre de billets |
| slug | string | Nom optimisé de la catégorie |
| url | string | URL de la catégorie |

## Catalogue

### Produits

Article de référence : [https://aide.kiubi.com/api-front-catalog.html#produits](https://aide.kiubi.com/api-front-catalog.html#produits)

**Liste les produits d'une catégorie GET**

**/api/v1/catalog/categories/{category_id}/products.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| category_id | Obligatoire | integer | Identifiant de la catégorie |
| spotlights | | flag | Limite la la liste des produits aux produits vedettes Les valeurs attendues sont : 1 |
| tags | | array | Liste des tags auxquels restreindre les produits |
| tags_rule | | string | Determine la règle en cas de recherche mulit-tags. orLes produits doivent appartenir à au moins 1 tag de la liste donnée andLes produits doivent appartenir à tous les tags de la liste donnée Les valeurs attendues sont : or, and | or | Les produits doivent appartenir à au moins 1 tag de la liste donnée | and | Les produits doivent appartenir à tous les tags de la liste donnée |
| or | Les produits doivent appartenir à au moins 1 tag de la liste donnée |
| and | Les produits doivent appartenir à tous les tags de la liste donnée |
| in_stock | | string | Restreint la liste des produits en fonction de l'état de leur stock. yesAu moins une des variantes doit être en stocknoToutes les variantes du produit sont en rupture Les valeurs attendues sont : yes, no | yes | Au moins une des variantes doit être en stock | no | Toutes les variantes du produit sont en rupture |
| yes | Au moins une des variantes doit être en stock |
| no | Toutes les variantes du produit sont en rupture |
| available | | string | Restreint la liste des produits en fonction de leur date de disponibilité. yesRestreint les resultats aux produits disponiblesnoRestreint les resultats aux produits indisponibles Les valeurs attendues sont : yes, no | yes | Restreint les resultats aux produits disponibles | no | Restreint les resultats aux produits indisponibles |
| yes | Restreint les resultats aux produits disponibles |
| no | Restreint les resultats aux produits indisponibles |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : name / -nameTri selon l'intitulé du produitid / -idTri selon l'identifiant unique du produitrate / -rateTri selon la note moyenne des produitsprice / -priceTri selon le prix minimal du produitdate / -dateTri selon la date de disponibilitéspotlight / -spotlightTri les produits vedetterandTri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | name / -name | Tri selon l'intitulé du produit | id / -id | Tri selon l'identifiant unique du produit | rate / -rate | Tri selon la note moyenne des produits | price / -price | Tri selon le prix minimal du produit | date / -date | Tri selon la date de disponibilité | spotlight / -spotlight | Tri les produits vedette | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| name / -name | Tri selon l'intitulé du produit |
| id / -id | Tri selon l'identifiant unique du produit |
| rate / -rate | Tri selon la note moyenne des produits |
| price / -price | Tri selon le prix minimal du produit |
| date / -date | Tri selon la date de disponibilité |
| spotlight / -spotlight | Tri les produits vedette |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : categoriesListe les catégories de chaque produitprice_labelLabel des prix dans la devise du sitevariantsInclut les variantes de chaque produitdescriptionInclut le champ description de chaque produittextsInclut les champs texte1 à texte15 de chaque produit | categories | Liste les catégories de chaque produit | price_label | Label des prix dans la devise du site | variants | Inclut les variantes de chaque produit | description | Inclut le champ description de chaque produit | texts | Inclut les champs texte1 à texte15 de chaque produit |
| categories | Liste les catégories de chaque produit |
| price_label | Label des prix dans la devise du site |
| variants | Inclut les variantes de chaque produit |
| description | Inclut le champ description de chaque produit |
| texts | Inclut les champs texte1 à texte15 de chaque produit |


```
data:[
 {
 "id": "integer",
 "type": "string",
 "name": "string",
 "slug": "string",
 "category_id": "integer",
 "category_name": "string",
 "category_slug": "string",
 "brand_id": "integer",
 "brand_name": "string",
 "header": "string",
 "description": "string",
 "release_date": "string",
 "release_date_f": "string",
 "release_date_timestamp": "integer",
 "is_virtual": "boolean",
 "is_spotlight": "boolean",
 "is_discounted": "boolean",
 "rate": "float",
 "currency": "string",
 "price_min_ex_vat": "float",
 "price_min_inc_vat": "float",
 "price_max_ex_vat": "float",
 "price_max_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_min_ex_vat_label": "string",
 "price_min_inc_vat_label": "string",
 "price_max_ex_vat_label": "string",
 "price_max_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer",
 "tags": "string",
 "url": "string",
 "main_thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "thumbs": [
 {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 ],
 "available": "string",
 "in_stock": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string",
 "variants": [
 {
 "id": "integer",
 "name": "string",
 "reference": "string",
 "gtin": "string",
 "condition": "string",
 "currency": "string",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "is_discounted": "boolean",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "is_available": "boolean",
 "in_stock": "boolean"
 }
 ],
 "categories": [
 {
 "id": "integer",
 "name": "string",
 "slug": "string",
 "description": "string",
 "is_main": "boolean",
 "products_count": "integer",
 "url": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 }
 ],
 "has_tier_prices": "boolean"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du produit |
| type | string | Type de produit |
| name | string | Intitulé du produit |
| slug | string | Nom optimisé du produit |
| category_id | integer | Identifiant de la catégorie |
| category_name | string | Nom de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| brand_idFacultatif | integer | Identifiant de la marque |
| brand_nameFacultatif | string | Nom de la marque |
| headerFacultatif | string | Chapô du produit |
| descriptionFacultatif | string | Description du produit |
| release_date | string | Date de disponibilité |
| release_date_f | string | Date de disponibilité formatée |
| release_date_timestamp | integer | Timestamp de la date de disponibilité |
| is_virtual | boolean | Produit virtuel |
| is_spotlight | boolean | Produit vedette |
| is_discounted | boolean | Produit en promotion |
| rate | float | Note du produit |
| currency | string | Devise |
| price_min_ex_vat | float | Prix minimal HT |
| price_min_inc_vat | float | Prix minimal TTC |
| price_max_ex_vat | float | Prix maximal HT |
| price_max_inc_vat | float | Prix maximal TTC |
| price_base_ex_vatFacultatif | float | Prix non remisé HT |
| price_base_inc_vatFacultatif | float | Prix non remisé TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté, affiche le prix sous forme d'interval de la variante la moins cher à la plus cher |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté, affiche le prix sous forme d'interval de la variante la moins cher à la plus cher |
| price_min_ex_vat_labelFacultatif | string | Prix minimal HT formaté |
| price_min_inc_vat_labelFacultatif | string | Prix minimal TTC formaté |
| price_max_ex_vat_labelFacultatif | string | Prix maximal HT formaté |
| price_max_inc_vat_labelFacultatif | string | Prix maximal TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix non remisé TTC formaté |
| has_comments_open | boolean | Les commentaires sont autorisés |
| comments_count | integer | Nombre de commentaires |
| tags | string | Tags |
| url | string | URL canonique du produit |
| main_thumbFacultatif | object | Illustration principale |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| thumbsFacultatif | object | Illustrations du produit |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| available | string | Disponibilité du produit |
| in_stock | string | Etat du stock global toutes variantes confondues. Les valeurs possibles sont : yes, no, partial |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |
| variantsFacultatif | object | Variantes du produit |
| id | integer | Identifiant de la variante |
| name | string | Intitulé de la variante |
| reference | string | Référence |
| gtin | string | Code EAN |
| condition | string | Etat de conditionnement. Les valeurs possibles sont : new, used, refurbished |
| currency | string | Devise |
| price_ex_vat | float | Prix HT |
| price_inc_vat | float | Prix TTC |
| price_base_ex_vat | float | Prix non remisé HT |
| price_base_inc_vat | float | Prix non remisé TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix non remisé TTC formaté |
| is_discounted | boolean | En promo |
| thumbFacultatif | object | Illustration de la variante |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| is_available | boolean | Disponible et en stock |
| in_stock | boolean | Variante en stock |
| categoriesFacultatif | object | Catégories du produit |
| id | integer | Identifiant de la catégorie |
| name | string | Intitulé |
| slug | string | Nom optimisé |
| descriptionFacultatif | string | Description |
| is_mainFacultatif | boolean | Catégorie principale du produit |
| products_countFacultatif | integer | Nombre de produits |
| urlFacultatif | string | URL de la catégorie |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| has_tier_pricesFacultatif | boolean | Possède des tarifs dégressifs |

**Liste les produits GET**

**/api/v1/catalog/products.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| spotlights | | flag | Limite la la liste des produits aux produits vedettes Les valeurs attendues sont : 1 |
| tags | | array | Liste des tags auxquels restreindre les produits |
| tags_rule | | string | Determine la règle en cas de recherche mulit-tags. orLes produits doivent appartenir à au moins 1 tag de la liste donnée andLes produits doivent appartenir à tous les tags de la liste donnée Les valeurs attendues sont : or, and | or | Les produits doivent appartenir à au moins 1 tag de la liste donnée | and | Les produits doivent appartenir à tous les tags de la liste donnée |
| or | Les produits doivent appartenir à au moins 1 tag de la liste donnée |
| and | Les produits doivent appartenir à tous les tags de la liste donnée |
| in_stock | | string | Restreint la liste des produits en fonction de l'état de leur stock. yesAu moins une des variantes doit être en stocknoToutes les variantes du produit sont en rupture Les valeurs attendues sont : yes, no | yes | Au moins une des variantes doit être en stock | no | Toutes les variantes du produit sont en rupture |
| yes | Au moins une des variantes doit être en stock |
| no | Toutes les variantes du produit sont en rupture |
| available | | string | Restreint la liste des produits en fonction de leur date de disponibilité. yesRestreint les resultats aux produits disponiblesnoRestreint les resultats aux produits indisponibles Les valeurs attendues sont : yes, no | yes | Restreint les resultats aux produits disponibles | no | Restreint les resultats aux produits indisponibles |
| yes | Restreint les resultats aux produits disponibles |
| no | Restreint les resultats aux produits indisponibles |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : name / -nameTri selon l'intitulé du produitid / -idTri selon l'identifiant unique du produitrate / -rateTri selon la note moyenne des produitsprice / -priceTri selon le prix minimal du produitdate / -dateTri selon la date de disponibilitéspotlight / -spotlightTri les produits vedetterandTri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | name / -name | Tri selon l'intitulé du produit | id / -id | Tri selon l'identifiant unique du produit | rate / -rate | Tri selon la note moyenne des produits | price / -price | Tri selon le prix minimal du produit | date / -date | Tri selon la date de disponibilité | spotlight / -spotlight | Tri les produits vedette | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| name / -name | Tri selon l'intitulé du produit |
| id / -id | Tri selon l'identifiant unique du produit |
| rate / -rate | Tri selon la note moyenne des produits |
| price / -price | Tri selon le prix minimal du produit |
| date / -date | Tri selon la date de disponibilité |
| spotlight / -spotlight | Tri les produits vedette |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : variantsInclut les variantes de chaque produitdescriptionInclut le champ description de chaque produittextsInclut les champs texte1 à texte15 de chaque produitprice_labelLabel des prix dans la devise du site | variants | Inclut les variantes de chaque produit | description | Inclut le champ description de chaque produit | texts | Inclut les champs texte1 à texte15 de chaque produit | price_label | Label des prix dans la devise du site |
| variants | Inclut les variantes de chaque produit |
| description | Inclut le champ description de chaque produit |
| texts | Inclut les champs texte1 à texte15 de chaque produit |
| price_label | Label des prix dans la devise du site |


```
data:[
 {
 "id": "integer",
 "type": "string",
 "name": "string",
 "slug": "string",
 "category_id": "integer",
 "category_name": "string",
 "category_slug": "string",
 "brand_id": "integer",
 "brand_name": "string",
 "header": "string",
 "description": "string",
 "release_date": "string",
 "release_date_f": "string",
 "release_date_timestamp": "integer",
 "is_virtual": "boolean",
 "is_spotlight": "boolean",
 "is_discounted": "boolean",
 "rate": "float",
 "currency": "string",
 "price_min_ex_vat": "float",
 "price_min_inc_vat": "float",
 "price_max_ex_vat": "float",
 "price_max_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_min_ex_vat_label": "string",
 "price_min_inc_vat_label": "string",
 "price_max_ex_vat_label": "string",
 "price_max_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer",
 "tags": "string",
 "url": "string",
 "main_thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "thumbs": [
 {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 ],
 "available": "string",
 "in_stock": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string",
 "variants": [
 {
 "id": "integer",
 "name": "string",
 "reference": "string",
 "gtin": "string",
 "condition": "string",
 "currency": "string",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "is_discounted": "boolean",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "is_available": "boolean",
 "in_stock": "boolean"
 }
 ],
 "categories": [
 {
 "id": "integer",
 "name": "string",
 "slug": "string",
 "description": "string",
 "is_main": "boolean",
 "products_count": "integer",
 "url": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 }
 ],
 "has_tier_prices": "boolean"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du produit |
| type | string | Type de produit |
| name | string | Intitulé du produit |
| slug | string | Nom optimisé du produit |
| category_id | integer | Identifiant de la catégorie |
| category_name | string | Nom de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| brand_idFacultatif | integer | Identifiant de la marque |
| brand_nameFacultatif | string | Nom de la marque |
| headerFacultatif | string | Chapô du produit |
| descriptionFacultatif | string | Description du produit |
| release_date | string | Date de disponibilité |
| release_date_f | string | Date de disponibilité formatée |
| release_date_timestamp | integer | Timestamp de la date de disponibilité |
| is_virtual | boolean | Produit virtuel |
| is_spotlight | boolean | Produit vedette |
| is_discounted | boolean | Produit en promotion |
| rate | float | Note du produit |
| currency | string | Devise |
| price_min_ex_vat | float | Prix minimal HT |
| price_min_inc_vat | float | Prix minimal TTC |
| price_max_ex_vat | float | Prix maximal HT |
| price_max_inc_vat | float | Prix maximal TTC |
| price_base_ex_vatFacultatif | float | Prix non remisé HT |
| price_base_inc_vatFacultatif | float | Prix non remisé TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté, affiche le prix sous forme d'interval de la variante la moins cher à la plus cher |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté, affiche le prix sous forme d'interval de la variante la moins cher à la plus cher |
| price_min_ex_vat_labelFacultatif | string | Prix minimal HT formaté |
| price_min_inc_vat_labelFacultatif | string | Prix minimal TTC formaté |
| price_max_ex_vat_labelFacultatif | string | Prix maximal HT formaté |
| price_max_inc_vat_labelFacultatif | string | Prix maximal TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix non remisé TTC formaté |
| has_comments_open | boolean | Les commentaires sont autorisés |
| comments_count | integer | Nombre de commentaires |
| tags | string | Tags |
| url | string | URL canonique du produit |
| main_thumbFacultatif | object | Illustration principale |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| thumbsFacultatif | object | Illustrations du produit |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| available | string | Disponibilité du produit |
| in_stock | string | Etat du stock global toutes variantes confondues. Les valeurs possibles sont : yes, no, partial |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |
| variantsFacultatif | object | Variantes du produit |
| id | integer | Identifiant de la variante |
| name | string | Intitulé de la variante |
| reference | string | Référence |
| gtin | string | Code EAN |
| condition | string | Etat de conditionnement. Les valeurs possibles sont : new, used, refurbished |
| currency | string | Devise |
| price_ex_vat | float | Prix HT |
| price_inc_vat | float | Prix TTC |
| price_base_ex_vat | float | Prix non remisé HT |
| price_base_inc_vat | float | Prix non remisé TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix non remisé TTC formaté |
| is_discounted | boolean | En promo |
| thumbFacultatif | object | Illustration de la variante |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| is_available | boolean | Disponible et en stock |
| in_stock | boolean | Variante en stock |
| categoriesFacultatif | object | Catégories du produit |
| id | integer | Identifiant de la catégorie |
| name | string | Intitulé |
| slug | string | Nom optimisé |
| descriptionFacultatif | string | Description |
| is_mainFacultatif | boolean | Catégorie principale du produit |
| products_countFacultatif | integer | Nombre de produits |
| urlFacultatif | string | URL de la catégorie |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| has_tier_pricesFacultatif | boolean | Possède des tarifs dégressifs |

**Retourne le détail d'un produit GET**

**/api/v1/catalog/products/{product_id}.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| product_id | Obligatoire | integer | Identifiant du produit |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : categoriesInclut la liste des catégories du produitprice_labelLabel des prix dans la devise du site | categories | Inclut la liste des catégories du produit | price_label | Label des prix dans la devise du site |
| categories | Inclut la liste des catégories du produit |
| price_label | Label des prix dans la devise du site |


```
data:{
 "id": "integer",
 "type": "string",
 "name": "string",
 "slug": "string",
 "category_id": "integer",
 "category_name": "string",
 "category_slug": "string",
 "brand_id": "integer",
 "brand_name": "string",
 "header": "string",
 "description": "string",
 "release_date": "string",
 "release_date_f": "string",
 "release_date_timestamp": "integer",
 "is_virtual": "boolean",
 "is_spotlight": "boolean",
 "is_discounted": "boolean",
 "rate": "float",
 "currency": "string",
 "price_min_ex_vat": "float",
 "price_min_inc_vat": "float",
 "price_max_ex_vat": "float",
 "price_max_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_min_ex_vat_label": "string",
 "price_min_inc_vat_label": "string",
 "price_max_ex_vat_label": "string",
 "price_max_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer",
 "tags": "string",
 "url": "string",
 "main_thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "thumbs": [
 {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 ],
 "available": "string",
 "in_stock": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string",
 "variants": [
 {
 "id": "integer",
 "name": "string",
 "reference": "string",
 "gtin": "string",
 "condition": "string",
 "currency": "string",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "is_discounted": "boolean",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "is_available": "boolean",
 "in_stock": "boolean"
 }
 ],
 "categories": [
 {
 "id": "integer",
 "name": "string",
 "slug": "string",
 "description": "string",
 "is_main": "boolean",
 "products_count": "integer",
 "url": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 }
 ],
 "has_tier_prices": "boolean"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du produit |
| type | string | Type de produit |
| name | string | Intitulé du produit |
| slug | string | Nom optimisé du produit |
| category_id | integer | Identifiant de la catégorie |
| category_name | string | Nom de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| brand_idFacultatif | integer | Identifiant de la marque |
| brand_nameFacultatif | string | Nom de la marque |
| headerFacultatif | string | Chapô du produit |
| descriptionFacultatif | string | Description du produit |
| release_date | string | Date de disponibilité |
| release_date_f | string | Date de disponibilité formatée |
| release_date_timestamp | integer | Timestamp de la date de disponibilité |
| is_virtual | boolean | Produit virtuel |
| is_spotlight | boolean | Produit vedette |
| is_discounted | boolean | Produit en promotion |
| rate | float | Note du produit |
| currency | string | Devise |
| price_min_ex_vat | float | Prix minimal HT |
| price_min_inc_vat | float | Prix minimal TTC |
| price_max_ex_vat | float | Prix maximal HT |
| price_max_inc_vat | float | Prix maximal TTC |
| price_base_ex_vatFacultatif | float | Prix non remisé HT |
| price_base_inc_vatFacultatif | float | Prix non remisé TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté, affiche le prix sous forme d'interval de la variante la moins cher à la plus cher |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté, affiche le prix sous forme d'interval de la variante la moins cher à la plus cher |
| price_min_ex_vat_labelFacultatif | string | Prix minimal HT formaté |
| price_min_inc_vat_labelFacultatif | string | Prix minimal TTC formaté |
| price_max_ex_vat_labelFacultatif | string | Prix maximal HT formaté |
| price_max_inc_vat_labelFacultatif | string | Prix maximal TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix non remisé TTC formaté |
| has_comments_open | boolean | Les commentaires sont autorisés |
| comments_count | integer | Nombre de commentaires |
| tags | string | Tags |
| url | string | URL canonique du produit |
| main_thumbFacultatif | object | Illustration principale |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| thumbsFacultatif | object | Illustrations du produit |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| available | string | Disponibilité du produit |
| in_stock | string | Etat du stock global toutes variantes confondues. Les valeurs possibles sont : yes, no, partial |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |
| variantsFacultatif | object | Variantes du produit |
| id | integer | Identifiant de la variante |
| name | string | Intitulé de la variante |
| reference | string | Référence |
| gtin | string | Code EAN |
| condition | string | Etat de conditionnement. Les valeurs possibles sont : new, used, refurbished |
| currency | string | Devise |
| price_ex_vat | float | Prix HT |
| price_inc_vat | float | Prix TTC |
| price_base_ex_vat | float | Prix non remisé HT |
| price_base_inc_vat | float | Prix non remisé TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix non remisé TTC formaté |
| is_discounted | boolean | En promo |
| thumbFacultatif | object | Illustration de la variante |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| is_available | boolean | Disponible et en stock |
| in_stock | boolean | Variante en stock |
| categoriesFacultatif | object | Catégories du produit |
| id | integer | Identifiant de la catégorie |
| name | string | Intitulé |
| slug | string | Nom optimisé |
| descriptionFacultatif | string | Description |
| is_mainFacultatif | boolean | Catégorie principale du produit |
| products_countFacultatif | integer | Nombre de produits |
| urlFacultatif | string | URL de la catégorie |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| has_tier_pricesFacultatif | boolean | Possède des tarifs dégressifs |

**Vérifie la disponibilité d'un produit GET**

**/api/v1/catalog/products/{product_id}/availability.json**

Vérifie la disponibilité d'un produit.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| product_id | Obligatoire | integer | Identifiant du produit |


```
data:{
 "available": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| available | string | Disponibilité. Les valeurs possibles sont : yes, no, partial |

**Liste les illustrations d'un produit GET**

**/api/v1/catalog/products/{product_id}/images.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| product_id | Obligatoire | integer | Identifiant de produit |
| limit | | integer | Limite le nombre d'images (défaut : 40, maximum : 40) |


```
data:[
 {
 "name": "string",
 "description": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| name | string | Nom du fichier |
| description | string | Description du fichier |
| thumb | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |

**Tarifs dégressifs GET**

**/api/v1/catalog/products/{product_id}/tier_prices.json**

Retourne la grille de tarifs dégressifs associée au produit.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| product_id | Obligatoire | integer | Identifiant du produit |


```
data:[
 {
 "qt": "int",
 "discount": "float"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| qt | int | Quantité |
| discount | float | Pourcentage de remise |

**Vérifie la disponibilité d'une variante GET**

**/api/v1/catalog/variants/{variant_id}/availability.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| variant_id | Obligatoire | integer | Identifiant de la variante |


```
data:{
 "is_available": "boolean"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| is_available | boolean | Disponibilité de la variante |

### Commentaires

Article de référence : [https://aide.kiubi.com/api-front-catalog.html#commentaires](https://aide.kiubi.com/api-front-catalog.html#commentaires)

**Liste les dernières évaluations GET**

**/api/v1/catalog/comments.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : date / -dateTri selon la date de publication de l'évaluationrate / -rateTri selon la note moyenne des produits | date / -date | Tri selon la date de publication de l'évaluation | rate / -rate | Tri selon la note moyenne des produits |
| date / -date | Tri selon la date de publication de l'évaluation |
| rate / -rate | Tri selon la note moyenne des produits |


```
data:{
 "comments": [
 {
 "id": "integer",
 "product_id": "integer",
 "comment": "string",
 "rate": "float",
 "author": "string",
 "date": "string",
 "date_f": "string",
 "date_timestamp": "integer"
 }
 ]
}
```

| Nom | Type | Description |
| --- | --- | --- |
| comments | object | Commentaires |
| id | integer | Identifiant du commentaire |
| product_id | integer | Identifiant du produit |
| comment | string | Commentaire |
| rate | float | Note |
| author | string | Auteur |
| date | string | Date de publication |
| date_f | string | Date de publication formatée |
| date_timestamp | integer | Timestamp de la date de publication |

**Génère un captcha GET**

**/api/v1/catalog/products/{product_id}/captcha.json**

Génère un nouveau captcha pour la prochaine évaluation postée par l'utilisateur courant. Ce endpoint est inutile si reCaptha est utilisé.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| product_id | Obligatoire | integer | Identifiant du produit |


```
data:{
 "captcha": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| captcha | string | Question du captcha |

**Liste les évaluations d'un produit GET**

**/api/v1/catalog/products/{product_id}/comments.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| product_id | Obligatoire | integer | Identifiant du produit |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : date / -dateTri selon la date de publication de l'évaluationrate / -rateTri selon la note moyenne des produits | date / -date | Tri selon la date de publication de l'évaluation | rate / -rate | Tri selon la note moyenne des produits |
| date / -date | Tri selon la date de publication de l'évaluation |
| rate / -rate | Tri selon la note moyenne des produits |


```
data:{
 "comments": [
 {
 "id": "integer",
 "product_id": "integer",
 "comment": "string",
 "rate": "float",
 "author": "string",
 "date": "string",
 "date_f": "string",
 "date_timestamp": "integer"
 }
 ],
 "has_comments_open": "boolean",
 "has_captcha": "boolean",
 "captcha": "string",
 "is_consent_required": "boolean"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| comments | object | Commentaires |
| id | integer | Identifiant du commentaire |
| product_id | integer | Identifiant du produit |
| comment | string | Commentaire |
| rate | float | Note |
| author | string | Auteur |
| date | string | Date de publication |
| date_f | string | Date de publication formatée |
| date_timestamp | integer | Timestamp de la date de publication |
| has_comments_open | boolean | Détermine si les évaluations sont ouverts pour le produit |
| has_captcha | boolean | Détermine si le produit est protégé par catpcha |
| captchaFacultatif | string | Question de captcha pour la construction d'un formulaire d'évaluation (vide si reCaptcha est activé) |
| is_consent_required | boolean | Recueil du consentement requis |

**Publie une évaluation POST**

**/api/v1/catalog/products/{product_id}/comments.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| product_id | Obligatoire | integer | Identifiant du produit |
| comment | | string | Commentaire produit |
| rate | | integer | Note donnée par l'utilisateur entre 0 et 10 |
| author | | string | Auteur |
| captcha | | string | Réponse au dernier captcha généré pour ce produit |
| consent | | boolean | Donne le consentement au traitement des données |


```
data:{
 "id": "integer",
 "is_published": "boolean",
 "new_captcha": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| idFacultatif | integer | Identifiant de l'évaluation |
| is_publishedFacultatif | boolean | Determine si l'évaluation est publiée immédiatement |
| new_captchaFacultatif | string | Nouveau captcha en cas d'échec de soumission de l'évaluation (vide si reCaptcha est activé) |

### Navigation

Article de référence : [https://aide.kiubi.com/api-front-catalog.html#navigation](https://aide.kiubi.com/api-front-catalog.html#navigation)

**Liste les catégories GET**

**/api/v1/catalog/categories.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| sort | | array | Ordres de tri parmis les critères suivants : position / -positionTri selon le classement de la catégorietitle / -titleTri selon l'intitulé de la catégorierandTri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | position / -position | Tri selon le classement de la catégorie | title / -title | Tri selon l'intitulé de la catégorie | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| position / -position | Tri selon le classement de la catégorie |
| title / -title | Tri selon l'intitulé de la catégorie |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : products_countNombre de produits des catégories | products_count | Nombre de produits des catégories |
| products_count | Nombre de produits des catégories |


```
data:[
 {
 "id": "integer",
 "name": "string",
 "slug": "string",
 "description": "string",
 "is_main": "boolean",
 "products_count": "integer",
 "url": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant de la catégorie |
| name | string | Intitulé |
| slug | string | Nom optimisé |
| descriptionFacultatif | string | Description |
| is_mainFacultatif | boolean | Catégorie principale du produit |
| products_countFacultatif | integer | Nombre de produits |
| urlFacultatif | string | URL de la catégorie |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |

**Liste les tags d'une catégorie GET**

**/api/v1/catalog/categories/{category_id}/tags.json**

Liste les tags d'une catégorie (limité à 500 tags)

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| category_id | Obligatoire | integer | Identifiant de la catégorie |
| sort | | array | Ordres de tri parmis les critères suivants : name / -nameTri alphabétiqueweight / -weightTri par poids | name / -name | Tri alphabétique | weight / -weight | Tri par poids |
| name / -name | Tri alphabétique |
| weight / -weight | Tri par poids |


```
data:[
 {
 "name": "string",
 "count": "integer",
 "weight": "integer"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| name | string | Intitulé du tag |
| count | integer | Nombre d'utilisation |
| weight | integer | Poids du tag dans la nuage |

**Liste les tags GET**

**/api/v1/catalog/tags.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| sort | | array | Ordres de tri parmis les critères suivants : name / -nameTri alphabétiqueweight / -weightTri par poids | name / -name | Tri alphabétique | weight / -weight | Tri par poids |
| name / -name | Tri alphabétique |
| weight / -weight | Tri par poids |


```
data:[
 {
 "name": "string",
 "count": "integer",
 "weight": "integer"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| name | string | Intitulé du tag |
| count | integer | Nombre d'utilisation |
| weight | integer | Poids du tag dans la nuage |

### Ventes croisées

Article de référence : [https://aide.kiubi.com/api-front-catalog.html#ventes-croisees](https://aide.kiubi.com/api-front-catalog.html#ventes-croisees)

**Liste les produits egalement achetés GET**

**/api/v1/catalog/products/{product_id}/alsobought.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| product_id | Obligatoire | integer | Identifiant de produit |
| category_id | | integer | Identifiant de catégorie |
| limit | | integer | Limite le nombre de produits associés (defaut : 20, maximum : 20) |
| sort | | array | Ordres de tri parmis les critères suivants : name / -nameTri selon l'intitulé du produitrate / -rateTri selon la note moyenne des produitsprice / -priceTri selon le prix minimal du produitdate / -dateTri selon la date de disponibilitéspotlight / -spotlightTri les produits vedetterandTri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | name / -name | Tri selon l'intitulé du produit | rate / -rate | Tri selon la note moyenne des produits | price / -price | Tri selon le prix minimal du produit | date / -date | Tri selon la date de disponibilité | spotlight / -spotlight | Tri les produits vedette | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| name / -name | Tri selon l'intitulé du produit |
| rate / -rate | Tri selon la note moyenne des produits |
| price / -price | Tri selon le prix minimal du produit |
| date / -date | Tri selon la date de disponibilité |
| spotlight / -spotlight | Tri les produits vedette |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : variantsInclut les variantes de chaque produitdescriptionInclut le champ description de chaque produittextsInclut les champs texte1 à texte15 de chaque produitprice_labelLabel des prix dans la devise du site | variants | Inclut les variantes de chaque produit | description | Inclut le champ description de chaque produit | texts | Inclut les champs texte1 à texte15 de chaque produit | price_label | Label des prix dans la devise du site |
| variants | Inclut les variantes de chaque produit |
| description | Inclut le champ description de chaque produit |
| texts | Inclut les champs texte1 à texte15 de chaque produit |
| price_label | Label des prix dans la devise du site |


```
data:[
 {
 "id": "integer",
 "type": "string",
 "name": "string",
 "slug": "string",
 "category_id": "integer",
 "category_name": "string",
 "category_slug": "string",
 "brand_id": "integer",
 "brand_name": "string",
 "header": "string",
 "description": "string",
 "release_date": "string",
 "release_date_f": "string",
 "release_date_timestamp": "integer",
 "is_virtual": "boolean",
 "is_spotlight": "boolean",
 "is_discounted": "boolean",
 "rate": "float",
 "currency": "string",
 "price_min_ex_vat": "float",
 "price_min_inc_vat": "float",
 "price_max_ex_vat": "float",
 "price_max_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_min_ex_vat_label": "string",
 "price_min_inc_vat_label": "string",
 "price_max_ex_vat_label": "string",
 "price_max_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer",
 "tags": "string",
 "url": "string",
 "main_thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "thumbs": [
 {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 ],
 "available": "string",
 "in_stock": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string",
 "variants": [
 {
 "id": "integer",
 "name": "string",
 "reference": "string",
 "gtin": "string",
 "condition": "string",
 "currency": "string",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "is_discounted": "boolean",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "is_available": "boolean",
 "in_stock": "boolean"
 }
 ],
 "categories": [
 {
 "id": "integer",
 "name": "string",
 "slug": "string",
 "description": "string",
 "is_main": "boolean",
 "products_count": "integer",
 "url": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 }
 ],
 "has_tier_prices": "boolean"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du produit |
| type | string | Type de produit |
| name | string | Intitulé du produit |
| slug | string | Nom optimisé du produit |
| category_id | integer | Identifiant de la catégorie |
| category_name | string | Nom de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| brand_idFacultatif | integer | Identifiant de la marque |
| brand_nameFacultatif | string | Nom de la marque |
| headerFacultatif | string | Chapô du produit |
| descriptionFacultatif | string | Description du produit |
| release_date | string | Date de disponibilité |
| release_date_f | string | Date de disponibilité formatée |
| release_date_timestamp | integer | Timestamp de la date de disponibilité |
| is_virtual | boolean | Produit virtuel |
| is_spotlight | boolean | Produit vedette |
| is_discounted | boolean | Produit en promotion |
| rate | float | Note du produit |
| currency | string | Devise |
| price_min_ex_vat | float | Prix minimal HT |
| price_min_inc_vat | float | Prix minimal TTC |
| price_max_ex_vat | float | Prix maximal HT |
| price_max_inc_vat | float | Prix maximal TTC |
| price_base_ex_vatFacultatif | float | Prix non remisé HT |
| price_base_inc_vatFacultatif | float | Prix non remisé TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté, affiche le prix sous forme d'interval de la variante la moins cher à la plus cher |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté, affiche le prix sous forme d'interval de la variante la moins cher à la plus cher |
| price_min_ex_vat_labelFacultatif | string | Prix minimal HT formaté |
| price_min_inc_vat_labelFacultatif | string | Prix minimal TTC formaté |
| price_max_ex_vat_labelFacultatif | string | Prix maximal HT formaté |
| price_max_inc_vat_labelFacultatif | string | Prix maximal TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix non remisé TTC formaté |
| has_comments_open | boolean | Les commentaires sont autorisés |
| comments_count | integer | Nombre de commentaires |
| tags | string | Tags |
| url | string | URL canonique du produit |
| main_thumbFacultatif | object | Illustration principale |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| thumbsFacultatif | object | Illustrations du produit |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| available | string | Disponibilité du produit |
| in_stock | string | Etat du stock global toutes variantes confondues. Les valeurs possibles sont : yes, no, partial |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |
| variantsFacultatif | object | Variantes du produit |
| id | integer | Identifiant de la variante |
| name | string | Intitulé de la variante |
| reference | string | Référence |
| gtin | string | Code EAN |
| condition | string | Etat de conditionnement. Les valeurs possibles sont : new, used, refurbished |
| currency | string | Devise |
| price_ex_vat | float | Prix HT |
| price_inc_vat | float | Prix TTC |
| price_base_ex_vat | float | Prix non remisé HT |
| price_base_inc_vat | float | Prix non remisé TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix non remisé TTC formaté |
| is_discounted | boolean | En promo |
| thumbFacultatif | object | Illustration de la variante |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| is_available | boolean | Disponible et en stock |
| in_stock | boolean | Variante en stock |
| categoriesFacultatif | object | Catégories du produit |
| id | integer | Identifiant de la catégorie |
| name | string | Intitulé |
| slug | string | Nom optimisé |
| descriptionFacultatif | string | Description |
| is_mainFacultatif | boolean | Catégorie principale du produit |
| products_countFacultatif | integer | Nombre de produits |
| urlFacultatif | string | URL de la catégorie |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| has_tier_pricesFacultatif | boolean | Possède des tarifs dégressifs |

**Liste les produits associés GET**

**/api/v1/catalog/products/{product_id}/linked.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| product_id | Obligatoire | integer | Identifiant du produit |
| category_id | | integer | Identifiant de catégorie |
| random_fill | | boolean | Remplit aléatoirement la liste des produits avec des produits au hasard jusqu'à la valeur du paramètre limit |
| limit | | integer | Limit le nombre de produits associés (defaut : 20, maximum : 20) |
| sort | | array | Ordres de tri parmis les critères suivants : name / -nameTri selon l'intitulé du produitrate / -rateTri selon la note moyenne des produitsprice / -priceTri selon le prix minimal du produitdate / -dateTri selon la date de disponibilitéspotlight / -spotlightTri les produits vedetterandTri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination | name / -name | Tri selon l'intitulé du produit | rate / -rate | Tri selon la note moyenne des produits | price / -price | Tri selon le prix minimal du produit | date / -date | Tri selon la date de disponibilité | spotlight / -spotlight | Tri les produits vedette | rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| name / -name | Tri selon l'intitulé du produit |
| rate / -rate | Tri selon la note moyenne des produits |
| price / -price | Tri selon le prix minimal du produit |
| date / -date | Tri selon la date de disponibilité |
| spotlight / -spotlight | Tri les produits vedette |
| rand | Tri aléatoire. Cet ordre de tri n'est pas compatible avec la pagination |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : variantsInclut les variantes de chaque produitdescriptionInclut le champ description de chaque produittextsInclut les champs texte1 à texte15 de chaque produitprice_labelLabel des prix dans la devise du site | variants | Inclut les variantes de chaque produit | description | Inclut le champ description de chaque produit | texts | Inclut les champs texte1 à texte15 de chaque produit | price_label | Label des prix dans la devise du site |
| variants | Inclut les variantes de chaque produit |
| description | Inclut le champ description de chaque produit |
| texts | Inclut les champs texte1 à texte15 de chaque produit |
| price_label | Label des prix dans la devise du site |


```
data:[
 {
 "id": "integer",
 "type": "string",
 "name": "string",
 "slug": "string",
 "category_id": "integer",
 "category_name": "string",
 "category_slug": "string",
 "brand_id": "integer",
 "brand_name": "string",
 "header": "string",
 "description": "string",
 "release_date": "string",
 "release_date_f": "string",
 "release_date_timestamp": "integer",
 "is_virtual": "boolean",
 "is_spotlight": "boolean",
 "is_discounted": "boolean",
 "rate": "float",
 "currency": "string",
 "price_min_ex_vat": "float",
 "price_min_inc_vat": "float",
 "price_max_ex_vat": "float",
 "price_max_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_min_ex_vat_label": "string",
 "price_min_inc_vat_label": "string",
 "price_max_ex_vat_label": "string",
 "price_max_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer",
 "tags": "string",
 "url": "string",
 "main_thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "thumbs": [
 {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 ],
 "available": "string",
 "in_stock": "string",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string",
 "variants": [
 {
 "id": "integer",
 "name": "string",
 "reference": "string",
 "gtin": "string",
 "condition": "string",
 "currency": "string",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "is_discounted": "boolean",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "is_available": "boolean",
 "in_stock": "boolean"
 }
 ],
 "categories": [
 {
 "id": "integer",
 "name": "string",
 "slug": "string",
 "description": "string",
 "is_main": "boolean",
 "products_count": "integer",
 "url": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 }
 ],
 "has_tier_prices": "boolean"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du produit |
| type | string | Type de produit |
| name | string | Intitulé du produit |
| slug | string | Nom optimisé du produit |
| category_id | integer | Identifiant de la catégorie |
| category_name | string | Nom de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| brand_idFacultatif | integer | Identifiant de la marque |
| brand_nameFacultatif | string | Nom de la marque |
| headerFacultatif | string | Chapô du produit |
| descriptionFacultatif | string | Description du produit |
| release_date | string | Date de disponibilité |
| release_date_f | string | Date de disponibilité formatée |
| release_date_timestamp | integer | Timestamp de la date de disponibilité |
| is_virtual | boolean | Produit virtuel |
| is_spotlight | boolean | Produit vedette |
| is_discounted | boolean | Produit en promotion |
| rate | float | Note du produit |
| currency | string | Devise |
| price_min_ex_vat | float | Prix minimal HT |
| price_min_inc_vat | float | Prix minimal TTC |
| price_max_ex_vat | float | Prix maximal HT |
| price_max_inc_vat | float | Prix maximal TTC |
| price_base_ex_vatFacultatif | float | Prix non remisé HT |
| price_base_inc_vatFacultatif | float | Prix non remisé TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté, affiche le prix sous forme d'interval de la variante la moins cher à la plus cher |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté, affiche le prix sous forme d'interval de la variante la moins cher à la plus cher |
| price_min_ex_vat_labelFacultatif | string | Prix minimal HT formaté |
| price_min_inc_vat_labelFacultatif | string | Prix minimal TTC formaté |
| price_max_ex_vat_labelFacultatif | string | Prix maximal HT formaté |
| price_max_inc_vat_labelFacultatif | string | Prix maximal TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix non remisé TTC formaté |
| has_comments_open | boolean | Les commentaires sont autorisés |
| comments_count | integer | Nombre de commentaires |
| tags | string | Tags |
| url | string | URL canonique du produit |
| main_thumbFacultatif | object | Illustration principale |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| thumbsFacultatif | object | Illustrations du produit |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| available | string | Disponibilité du produit |
| in_stock | string | Etat du stock global toutes variantes confondues. Les valeurs possibles sont : yes, no, partial |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |
| variantsFacultatif | object | Variantes du produit |
| id | integer | Identifiant de la variante |
| name | string | Intitulé de la variante |
| reference | string | Référence |
| gtin | string | Code EAN |
| condition | string | Etat de conditionnement. Les valeurs possibles sont : new, used, refurbished |
| currency | string | Devise |
| price_ex_vat | float | Prix HT |
| price_inc_vat | float | Prix TTC |
| price_base_ex_vat | float | Prix non remisé HT |
| price_base_inc_vat | float | Prix non remisé TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix non remisé TTC formaté |
| is_discounted | boolean | En promo |
| thumbFacultatif | object | Illustration de la variante |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| is_available | boolean | Disponible et en stock |
| in_stock | boolean | Variante en stock |
| categoriesFacultatif | object | Catégories du produit |
| id | integer | Identifiant de la catégorie |
| name | string | Intitulé |
| slug | string | Nom optimisé |
| descriptionFacultatif | string | Description |
| is_mainFacultatif | boolean | Catégorie principale du produit |
| products_countFacultatif | integer | Nombre de produits |
| urlFacultatif | string | URL de la catégorie |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| has_tier_pricesFacultatif | boolean | Possède des tarifs dégressifs |

## Panier

### Contenu du panier

Article de référence : [https://aide.kiubi.com/api-front-cart.html#contenu-du-panier](https://aide.kiubi.com/api-front-cart.html#contenu-du-panier)

**Résumé du panier GET**

**/api/v1/cart.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : price_labelLabel des prix dans la devise du site | price_label | Label des prix dans la devise du site |
| price_label | Label des prix dans la devise du site |


```
data:{
 "currency": "string",
 "min_order_amount": "float",
 "items_count": "integer",
 "items": [
 {
 "variant_id": "integer",
 "type": "string",
 "name": "string",
 "sku": "string",
 "product_id": "integer",
 "product_name": "string",
 "product_description": "string",
 "product_header": "string",
 "product_excerpt": "string",
 "product_url": "string",
 "is_discounted": "boolean",
 "discount_rate": "float",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ecotax": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "price_ecotax_label": "string",
 "quantity": "integer",
 "quantity_max": "integer",
 "quantity_max_warn": "boolean",
 "price_total_ex_vat": "float",
 "price_total_inc_vat": "float",
 "price_total_ex_vat_label": "string",
 "price_total_inc_vat_label": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 }
 ],
 "options": [
 {
 "option_id": "integer",
 "type": "string",
 "name": "string",
 "description": "string",
 "quantity": "integer",
 "value": "string",
 "options": [
 []
 ],
 "price_inc_vat": "float",
 "price_ex_vat": "float",
 "price_inc_vat_label": "string",
 "price_ex_vat_label": "string"
 }
 ],
 "voucher": {
 "code": "string",
 "value": "float",
 "type": "string",
 "label": "string"
 },
 "is_duty_free": "boolean",
 "price_subtotal_ex_vat": "float",
 "price_subtotal_inc_vat": "float",
 "price_total_ecotax": "float",
 "price_total_ex_vat": "float",
 "price_total_vat": "float",
 "price_total_inc_vat": "float",
 "price_subtotal_ex_vat_label": "string",
 "price_subtotal_inc_vat_label": "string",
 "price_total_ecotax_label": "string",
 "price_total_ex_vat_label": "string",
 "price_total_vat_label": "string",
 "price_total_inc_vat_label": "string",
 "shipping": {
 "carrier_id": "integer",
 "name": "string",
 "description": "string",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "vat_rate": "float",
 "weight": "integer",
 "is_free": "boolean",
 "destination": "string",
 "picking_number": "string",
 "require_scheduling": "string",
 "scheduled_date": "string",
 "scheduled_hour": "string"
 }
}
```

| Nom | Type | Description |
| --- | --- | --- |
| currency | string | Devise |
| min_order_amount | float | Montant minimal de commande sur le site |
| items_count | integer | Nombre d'articles dans le panier |
| itemsFacultatif | object | Articles du panier |
| variant_id | integer | Identifiant de la variante |
| type | string | Type d'article. Les valeurs possibles sont : product, voucher |
| name | string | Intitulé de la variante |
| sku | string | Référence de la variante |
| product_id | integer | Identifiant du produit |
| product_name | string | Nom du produit |
| product_description | string | Description du produit |
| product_header | string | Chapô du produit |
| product_excerpt | string | Accroche du produit |
| product_url | string | URL du produit |
| is_discounted | boolean | Produit remisé |
| discount_rate | float | Remise sous forme d'un multiplicateur (ex = 0.9 signifie 10% de remise) |
| price_ex_vat | float | Prix unitaire HT |
| price_inc_vat | float | Prix unitaire TTC |
| price_base_ex_vat | float | Prix unitaire de base non remisé HT |
| price_base_inc_vat | float | Prix unitaire de base non remisé TTC |
| price_ecotax | float | Montant de l'eco taxe |
| price_ex_vat_labelFacultatif | string | Prix unitaire HT formaté |
| price_inc_vat_labelFacultatif | string | Prix unitaire TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix unitaire de base non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix unitaire de base non remisé TTC formaté |
| price_ecotax_labelFacultatif | string | Montant de l'eco taxe formaté |
| quantity | integer | Quantité |
| quantity_maxFacultatif | integer | Quantité maximale autorisée dans le panier |
| quantity_max_warn | boolean | Erreur de dépassement de quantité maximale |
| price_total_ex_vat | float | Prix total HT |
| price_total_inc_vat | float | Prix total TTC |
| price_total_ex_vat_labelFacultatif | string | Prix total HT formaté |
| price_total_inc_vat_labelFacultatif | string | Prix total TTC formaté |
| thumbFacultatif | object | Illustration de l'article |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| optionsFacultatif | object | Options du panier |
| option_id | integer | Identifiant de l'option |
| type | string | Type d'option. Les valeurs possibles sont : simple, textarea, select |
| name | string | Nom de l'option |
| description | string | Description de l'option |
| quantityFacultatif | integer | Quantité, toujours égal à 1 |
| valueFacultatif | string | Valeur choisie (pour les options de type Liste de valeurs) |
| optionsFacultatif | object | Valeurs possibles (pour les options de type Liste de valeurs) |
| price_inc_vat | float | Prix TTC |
| price_ex_vat | float | Prix HT |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| voucherFacultatif | object | Bon de réduction |
| code | string | Code du bon |
| value | float | Valeur du bon |
| type | string | Type de bon. Les valeurs possibles sont : percent, amount, shipping |
| label | string | Intitulé récapitulatif du bon de réduction |
| is_duty_free | boolean | Exonération de la TVA |
| price_subtotal_ex_vat | float | Sous total HT des produits du panier |
| price_subtotal_inc_vat | float | Sous total TTC des produits du panier |
| price_total_ecotax | float | Total de l'éco taxe |
| price_total_ex_vat | float | Total du panier HT |
| price_total_vat | float | Total de la TVA |
| price_total_inc_vat | float | Total du panier TTC |
| price_subtotal_ex_vat_labelFacultatif | string | Sous total HT des produits du panier formaté |
| price_subtotal_inc_vat_labelFacultatif | string | Sous total TTC des produits du panier formaté |
| price_total_ecotax_labelFacultatif | string | Total de l'éco taxe formaté |
| price_total_ex_vat_labelFacultatif | string | Total du panier HT formaté |
| price_total_vat_labelFacultatif | string | Total de la TVA formaté |
| price_total_inc_vat_labelFacultatif | string | Total du panier TTC formaté |
| shippingFacultatif | object | Livraison |
| carrier_id | integer | Identifiant du transporteur |
| name | string | Nom du transporteur |
| descriptionFacultatif | string | Description |
| price_ex_vat | float | Prix HT |
| price_inc_vat | float | Prix TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| vat_rate | float | Taux de tva |
| weight | integer | Poids total en grammes |
| is_free | boolean | Gratuité de la livraison |
| destination | string | Destination |
| picking_numberFacultatif | string | URL de suivi du colis |
| require_schedulingFacultatif | string | Plannification recquise. Les valeurs possibles sont : no, date, datetime |
| scheduled_dateFacultatif | string | Date de livraison |
| scheduled_hourFacultatif | string | Heure de livraison |

**Vide le panier DELETE**

**/api/v1/cart.json**

**Ajout multiple de variantes au panier PUT**

**/api/v1/cart/items.json**

Modifie en une fois le contenu du panier. Il est possible de modifier les quantitiés en valeur absolue ou relative. Les variantes avec une quantité nulle sont retirés du panier. Pour ajouter une variante au panier, il suffit d'indiquer une quantité non nulle.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| mode | | string | Mode d'ajout. besteffort (mode par défaut) : le système tente d'ajouter le maximum de produits disponibles. strict : si la quantité souhaité n'est pas disponible, aucun produit n'est ajouté Les valeurs attendues sont : besteffort, strict |
| items | | array | tableau associatif, variante => quantité souhaitée. La quantité peut être éxprimée de façon absolue ou relative au format X, +X ou -X |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : price_labelLabel des prix dans la devise du site | price_label | Label des prix dans la devise du site |
| price_label | Label des prix dans la devise du site |


```
data:{
 "summary": [
 {
 "status": "string",
 "message": "string",
 "id": "integer",
 "max": "integer"
 }
 ],
 "cart": {
 "currency": "string",
 "min_order_amount": "float",
 "items_count": "integer",
 "items": [
 {
 "variant_id": "integer",
 "type": "string",
 "name": "string",
 "sku": "string",
 "product_id": "integer",
 "product_name": "string",
 "product_description": "string",
 "product_header": "string",
 "product_excerpt": "string",
 "product_url": "string",
 "is_discounted": "boolean",
 "discount_rate": "float",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ecotax": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "price_ecotax_label": "string",
 "quantity": "integer",
 "quantity_max": "integer",
 "quantity_max_warn": "boolean",
 "price_total_ex_vat": "float",
 "price_total_inc_vat": "float",
 "price_total_ex_vat_label": "string",
 "price_total_inc_vat_label": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 }
 ],
 "options": [
 {
 "option_id": "integer",
 "type": "string",
 "name": "string",
 "description": "string",
 "quantity": "integer",
 "value": "string",
 "options": [
 []
 ],
 "price_inc_vat": "float",
 "price_ex_vat": "float",
 "price_inc_vat_label": "string",
 "price_ex_vat_label": "string"
 }
 ],
 "voucher": {
 "code": "string",
 "value": "float",
 "type": "string",
 "label": "string"
 },
 "is_duty_free": "boolean",
 "price_subtotal_ex_vat": "float",
 "price_subtotal_inc_vat": "float",
 "price_total_ecotax": "float",
 "price_total_ex_vat": "float",
 "price_total_vat": "float",
 "price_total_inc_vat": "float",
 "price_subtotal_ex_vat_label": "string",
 "price_subtotal_inc_vat_label": "string",
 "price_total_ecotax_label": "string",
 "price_total_ex_vat_label": "string",
 "price_total_vat_label": "string",
 "price_total_inc_vat_label": "string",
 "shipping": {
 "carrier_id": "integer",
 "name": "string",
 "description": "string",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "vat_rate": "float",
 "weight": "integer",
 "is_free": "boolean",
 "destination": "string",
 "picking_number": "string",
 "require_scheduling": "string",
 "scheduled_date": "string",
 "scheduled_hour": "string"
 }
 }
}
```

| Nom | Type | Description |
| --- | --- | --- |
| summary | object | Rapport de l'action effectuée |
| status | string | Status. Les valeurs possibles sont : ok, warn, error |
| messageFacultatif | string | Message d'erreur |
| id | integer | Identifiant de la variante |
| maxFacultatif | integer | Quantité maximale autorisée |
| cart | object | Panier mis à jour |
| currency | string | Devise |
| min_order_amount | float | Montant minimal de commande sur le site |
| items_count | integer | Nombre d'articles dans le panier |
| itemsFacultatif | object | Articles du panier |
| variant_id | integer | Identifiant de la variante |
| type | string | Type d'article. Les valeurs possibles sont : product, voucher |
| name | string | Intitulé de la variante |
| sku | string | Référence de la variante |
| product_id | integer | Identifiant du produit |
| product_name | string | Nom du produit |
| product_description | string | Description du produit |
| product_header | string | Chapô du produit |
| product_excerpt | string | Accroche du produit |
| product_url | string | URL du produit |
| is_discounted | boolean | Produit remisé |
| discount_rate | float | Remise sous forme d'un multiplicateur (ex = 0.9 signifie 10% de remise) |
| price_ex_vat | float | Prix unitaire HT |
| price_inc_vat | float | Prix unitaire TTC |
| price_base_ex_vat | float | Prix unitaire de base non remisé HT |
| price_base_inc_vat | float | Prix unitaire de base non remisé TTC |
| price_ecotax | float | Montant de l'eco taxe |
| price_ex_vat_labelFacultatif | string | Prix unitaire HT formaté |
| price_inc_vat_labelFacultatif | string | Prix unitaire TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix unitaire de base non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix unitaire de base non remisé TTC formaté |
| price_ecotax_labelFacultatif | string | Montant de l'eco taxe formaté |
| quantity | integer | Quantité |
| quantity_maxFacultatif | integer | Quantité maximale autorisée dans le panier |
| quantity_max_warn | boolean | Erreur de dépassement de quantité maximale |
| price_total_ex_vat | float | Prix total HT |
| price_total_inc_vat | float | Prix total TTC |
| price_total_ex_vat_labelFacultatif | string | Prix total HT formaté |
| price_total_inc_vat_labelFacultatif | string | Prix total TTC formaté |
| thumbFacultatif | object | Illustration de l'article |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| optionsFacultatif | object | Options du panier |
| option_id | integer | Identifiant de l'option |
| type | string | Type d'option. Les valeurs possibles sont : simple, textarea, select |
| name | string | Nom de l'option |
| description | string | Description de l'option |
| quantityFacultatif | integer | Quantité, toujours égal à 1 |
| valueFacultatif | string | Valeur choisie (pour les options de type Liste de valeurs) |
| optionsFacultatif | object | Valeurs possibles (pour les options de type Liste de valeurs) |
| price_inc_vat | float | Prix TTC |
| price_ex_vat | float | Prix HT |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| voucherFacultatif | object | Bon de réduction |
| code | string | Code du bon |
| value | float | Valeur du bon |
| type | string | Type de bon. Les valeurs possibles sont : percent, amount, shipping |
| label | string | Intitulé récapitulatif du bon de réduction |
| is_duty_free | boolean | Exonération de la TVA |
| price_subtotal_ex_vat | float | Sous total HT des produits du panier |
| price_subtotal_inc_vat | float | Sous total TTC des produits du panier |
| price_total_ecotax | float | Total de l'éco taxe |
| price_total_ex_vat | float | Total du panier HT |
| price_total_vat | float | Total de la TVA |
| price_total_inc_vat | float | Total du panier TTC |
| price_subtotal_ex_vat_labelFacultatif | string | Sous total HT des produits du panier formaté |
| price_subtotal_inc_vat_labelFacultatif | string | Sous total TTC des produits du panier formaté |
| price_total_ecotax_labelFacultatif | string | Total de l'éco taxe formaté |
| price_total_ex_vat_labelFacultatif | string | Total du panier HT formaté |
| price_total_vat_labelFacultatif | string | Total de la TVA formaté |
| price_total_inc_vat_labelFacultatif | string | Total du panier TTC formaté |
| shippingFacultatif | object | Livraison |
| carrier_id | integer | Identifiant du transporteur |
| name | string | Nom du transporteur |
| descriptionFacultatif | string | Description |
| price_ex_vat | float | Prix HT |
| price_inc_vat | float | Prix TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| vat_rate | float | Taux de tva |
| weight | integer | Poids total en grammes |
| is_free | boolean | Gratuité de la livraison |
| destination | string | Destination |
| picking_numberFacultatif | string | URL de suivi du colis |
| require_schedulingFacultatif | string | Plannification recquise. Les valeurs possibles sont : no, date, datetime |
| scheduled_dateFacultatif | string | Date de livraison |
| scheduled_hourFacultatif | string | Heure de livraison |

**Ajout ou retrait de variante au panier PUT**

**/api/v1/cart/items/{variant_id}.json**

Ajoute ou retire une quantité de variante au panier. Il est possbile de le faire en valeur absolue ou relative.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| variant_id | Obligatoire | integer | Identifiant numérique de la variante |
| quantity | | string | Quantité absolue ou relative au format X, +X ou -X (+1 par défaut) |
| mode | | string | Mode d'ajout. En mode besteffort (mode par défaut) le système tente d'ajouter le maximum de produits disponibles. En mode strict, si la quantité souhaitée n'est pas disponible, aucun produit n'est ajouté Les valeurs attendues sont : besteffort, strict |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : price_labelLabel des prix dans la devise du site | price_label | Label des prix dans la devise du site |
| price_label | Label des prix dans la devise du site |


```
data:{
 "summary": [
 {
 "status": "string",
 "message": "string",
 "id": "integer",
 "max": "integer"
 }
 ],
 "cart": {
 "currency": "string",
 "min_order_amount": "float",
 "items_count": "integer",
 "items": [
 {
 "variant_id": "integer",
 "type": "string",
 "name": "string",
 "sku": "string",
 "product_id": "integer",
 "product_name": "string",
 "product_description": "string",
 "product_header": "string",
 "product_excerpt": "string",
 "product_url": "string",
 "is_discounted": "boolean",
 "discount_rate": "float",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ecotax": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "price_ecotax_label": "string",
 "quantity": "integer",
 "quantity_max": "integer",
 "quantity_max_warn": "boolean",
 "price_total_ex_vat": "float",
 "price_total_inc_vat": "float",
 "price_total_ex_vat_label": "string",
 "price_total_inc_vat_label": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 }
 ],
 "options": [
 {
 "option_id": "integer",
 "type": "string",
 "name": "string",
 "description": "string",
 "quantity": "integer",
 "value": "string",
 "options": [
 []
 ],
 "price_inc_vat": "float",
 "price_ex_vat": "float",
 "price_inc_vat_label": "string",
 "price_ex_vat_label": "string"
 }
 ],
 "voucher": {
 "code": "string",
 "value": "float",
 "type": "string",
 "label": "string"
 },
 "is_duty_free": "boolean",
 "price_subtotal_ex_vat": "float",
 "price_subtotal_inc_vat": "float",
 "price_total_ecotax": "float",
 "price_total_ex_vat": "float",
 "price_total_vat": "float",
 "price_total_inc_vat": "float",
 "price_subtotal_ex_vat_label": "string",
 "price_subtotal_inc_vat_label": "string",
 "price_total_ecotax_label": "string",
 "price_total_ex_vat_label": "string",
 "price_total_vat_label": "string",
 "price_total_inc_vat_label": "string",
 "shipping": {
 "carrier_id": "integer",
 "name": "string",
 "description": "string",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "vat_rate": "float",
 "weight": "integer",
 "is_free": "boolean",
 "destination": "string",
 "picking_number": "string",
 "require_scheduling": "string",
 "scheduled_date": "string",
 "scheduled_hour": "string"
 }
 }
}
```

| Nom | Type | Description |
| --- | --- | --- |
| summary | object | Rapport de l'action effectuée |
| status | string | Status. Les valeurs possibles sont : ok, warn, error |
| messageFacultatif | string | Message d'erreur |
| id | integer | Identifiant de la variante |
| maxFacultatif | integer | Quantité maximale autorisée |
| cart | object | Panier mis à jour |
| currency | string | Devise |
| min_order_amount | float | Montant minimal de commande sur le site |
| items_count | integer | Nombre d'articles dans le panier |
| itemsFacultatif | object | Articles du panier |
| variant_id | integer | Identifiant de la variante |
| type | string | Type d'article. Les valeurs possibles sont : product, voucher |
| name | string | Intitulé de la variante |
| sku | string | Référence de la variante |
| product_id | integer | Identifiant du produit |
| product_name | string | Nom du produit |
| product_description | string | Description du produit |
| product_header | string | Chapô du produit |
| product_excerpt | string | Accroche du produit |
| product_url | string | URL du produit |
| is_discounted | boolean | Produit remisé |
| discount_rate | float | Remise sous forme d'un multiplicateur (ex = 0.9 signifie 10% de remise) |
| price_ex_vat | float | Prix unitaire HT |
| price_inc_vat | float | Prix unitaire TTC |
| price_base_ex_vat | float | Prix unitaire de base non remisé HT |
| price_base_inc_vat | float | Prix unitaire de base non remisé TTC |
| price_ecotax | float | Montant de l'eco taxe |
| price_ex_vat_labelFacultatif | string | Prix unitaire HT formaté |
| price_inc_vat_labelFacultatif | string | Prix unitaire TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix unitaire de base non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix unitaire de base non remisé TTC formaté |
| price_ecotax_labelFacultatif | string | Montant de l'eco taxe formaté |
| quantity | integer | Quantité |
| quantity_maxFacultatif | integer | Quantité maximale autorisée dans le panier |
| quantity_max_warn | boolean | Erreur de dépassement de quantité maximale |
| price_total_ex_vat | float | Prix total HT |
| price_total_inc_vat | float | Prix total TTC |
| price_total_ex_vat_labelFacultatif | string | Prix total HT formaté |
| price_total_inc_vat_labelFacultatif | string | Prix total TTC formaté |
| thumbFacultatif | object | Illustration de l'article |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| optionsFacultatif | object | Options du panier |
| option_id | integer | Identifiant de l'option |
| type | string | Type d'option. Les valeurs possibles sont : simple, textarea, select |
| name | string | Nom de l'option |
| description | string | Description de l'option |
| quantityFacultatif | integer | Quantité, toujours égal à 1 |
| valueFacultatif | string | Valeur choisie (pour les options de type Liste de valeurs) |
| optionsFacultatif | object | Valeurs possibles (pour les options de type Liste de valeurs) |
| price_inc_vat | float | Prix TTC |
| price_ex_vat | float | Prix HT |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| voucherFacultatif | object | Bon de réduction |
| code | string | Code du bon |
| value | float | Valeur du bon |
| type | string | Type de bon. Les valeurs possibles sont : percent, amount, shipping |
| label | string | Intitulé récapitulatif du bon de réduction |
| is_duty_free | boolean | Exonération de la TVA |
| price_subtotal_ex_vat | float | Sous total HT des produits du panier |
| price_subtotal_inc_vat | float | Sous total TTC des produits du panier |
| price_total_ecotax | float | Total de l'éco taxe |
| price_total_ex_vat | float | Total du panier HT |
| price_total_vat | float | Total de la TVA |
| price_total_inc_vat | float | Total du panier TTC |
| price_subtotal_ex_vat_labelFacultatif | string | Sous total HT des produits du panier formaté |
| price_subtotal_inc_vat_labelFacultatif | string | Sous total TTC des produits du panier formaté |
| price_total_ecotax_labelFacultatif | string | Total de l'éco taxe formaté |
| price_total_ex_vat_labelFacultatif | string | Total du panier HT formaté |
| price_total_vat_labelFacultatif | string | Total de la TVA formaté |
| price_total_inc_vat_labelFacultatif | string | Total du panier TTC formaté |
| shippingFacultatif | object | Livraison |
| carrier_id | integer | Identifiant du transporteur |
| name | string | Nom du transporteur |
| descriptionFacultatif | string | Description |
| price_ex_vat | float | Prix HT |
| price_inc_vat | float | Prix TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| vat_rate | float | Taux de tva |
| weight | integer | Poids total en grammes |
| is_free | boolean | Gratuité de la livraison |
| destination | string | Destination |
| picking_numberFacultatif | string | URL de suivi du colis |
| require_schedulingFacultatif | string | Plannification recquise. Les valeurs possibles sont : no, date, datetime |
| scheduled_dateFacultatif | string | Date de livraison |
| scheduled_hourFacultatif | string | Heure de livraison |

**Supprime un produit du panier DELETE**

**/api/v1/cart/items/{variant_id}.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| variant_id | Obligatoire | integer | Identifiant unique de la variante |

### Options à la commande

Article de référence : [https://aide.kiubi.com/api-front-cart.html#options-a-la-commande](https://aide.kiubi.com/api-front-cart.html#options-a-la-commande)

**Liste les options à la commande GET**

**/api/v1/cart/options.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : price_labelLabel des prix dans la devise du site | price_label | Label des prix dans la devise du site |
| price_label | Label des prix dans la devise du site |


```
data:{
 "available": [
 {
 "option_id": "integer",
 "type": "string",
 "name": "string",
 "description": "string",
 "quantity": "integer",
 "value": "string",
 "options": [
 []
 ],
 "price_inc_vat": "float",
 "price_ex_vat": "float",
 "price_inc_vat_label": "string",
 "price_ex_vat_label": "string"
 }
 ],
 "in_cart": [
 {
 "option_id": "integer",
 "type": "string",
 "name": "string",
 "description": "string",
 "quantity": "integer",
 "value": "string",
 "options": [
 []
 ],
 "price_inc_vat": "float",
 "price_ex_vat": "float",
 "price_inc_vat_label": "string",
 "price_ex_vat_label": "string"
 }
 ]
}
```

| Nom | Type | Description |
| --- | --- | --- |
| available | object | Options disponibles |
| option_id | integer | Identifiant de l'option |
| type | string | Type d'option. Les valeurs possibles sont : simple, textarea, select |
| name | string | Nom de l'option |
| description | string | Description de l'option |
| quantityFacultatif | integer | Quantité, toujours égal à 1 |
| valueFacultatif | string | Valeur choisie (pour les options de type Liste de valeurs) |
| optionsFacultatif | object | Valeurs possibles (pour les options de type Liste de valeurs) |
| price_inc_vat | float | Prix TTC |
| price_ex_vat | float | Prix HT |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| in_cart | object | Options souscrites |
| option_id | integer | Identifiant de l'option |
| type | string | Type d'option. Les valeurs possibles sont : simple, textarea, select |
| name | string | Nom de l'option |
| description | string | Description de l'option |
| quantityFacultatif | integer | Quantité, toujours égal à 1 |
| valueFacultatif | string | Valeur choisie (pour les options de type Liste de valeurs) |
| optionsFacultatif | object | Valeurs possibles (pour les options de type Liste de valeurs) |
| price_inc_vat | float | Prix TTC |
| price_ex_vat | float | Prix HT |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |

**Ajoute une option PUT**

**/api/v1/cart/options/{option_id}.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| option_id | Obligatoire | integer | Identifiant de l'option à la commande |
| value | | string | Valeur de l'option à la commande pour les options de type zone de texte ou liste déroulante |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : price_labelLabel des prix dans la devise du site | price_label | Label des prix dans la devise du site |
| price_label | Label des prix dans la devise du site |


```
data:{
 "summary": [
 {
 "status": "string",
 "message": "string",
 "id": "integer",
 "max": "integer"
 }
 ],
 "options": {
 "available": [
 {
 "option_id": "integer",
 "type": "string",
 "name": "string",
 "description": "string",
 "quantity": "integer",
 "value": "string",
 "options": [
 []
 ],
 "price_inc_vat": "float",
 "price_ex_vat": "float",
 "price_inc_vat_label": "string",
 "price_ex_vat_label": "string"
 }
 ],
 "in_cart": [
 {
 "option_id": "integer",
 "type": "string",
 "name": "string",
 "description": "string",
 "quantity": "integer",
 "value": "string",
 "options": [
 []
 ],
 "price_inc_vat": "float",
 "price_ex_vat": "float",
 "price_inc_vat_label": "string",
 "price_ex_vat_label": "string"
 }
 ]
 },
 "cart": {
 "currency": "string",
 "min_order_amount": "float",
 "items_count": "integer",
 "items": [
 {
 "variant_id": "integer",
 "type": "string",
 "name": "string",
 "sku": "string",
 "product_id": "integer",
 "product_name": "string",
 "product_description": "string",
 "product_header": "string",
 "product_excerpt": "string",
 "product_url": "string",
 "is_discounted": "boolean",
 "discount_rate": "float",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ecotax": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "price_ecotax_label": "string",
 "quantity": "integer",
 "quantity_max": "integer",
 "quantity_max_warn": "boolean",
 "price_total_ex_vat": "float",
 "price_total_inc_vat": "float",
 "price_total_ex_vat_label": "string",
 "price_total_inc_vat_label": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 }
 ],
 "options": [
 {
 "option_id": "integer",
 "type": "string",
 "name": "string",
 "description": "string",
 "quantity": "integer",
 "value": "string",
 "options": [
 []
 ],
 "price_inc_vat": "float",
 "price_ex_vat": "float",
 "price_inc_vat_label": "string",
 "price_ex_vat_label": "string"
 }
 ],
 "voucher": {
 "code": "string",
 "value": "float",
 "type": "string",
 "label": "string"
 },
 "is_duty_free": "boolean",
 "price_subtotal_ex_vat": "float",
 "price_subtotal_inc_vat": "float",
 "price_total_ecotax": "float",
 "price_total_ex_vat": "float",
 "price_total_vat": "float",
 "price_total_inc_vat": "float",
 "price_subtotal_ex_vat_label": "string",
 "price_subtotal_inc_vat_label": "string",
 "price_total_ecotax_label": "string",
 "price_total_ex_vat_label": "string",
 "price_total_vat_label": "string",
 "price_total_inc_vat_label": "string",
 "shipping": {
 "carrier_id": "integer",
 "name": "string",
 "description": "string",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "vat_rate": "float",
 "weight": "integer",
 "is_free": "boolean",
 "destination": "string",
 "picking_number": "string",
 "require_scheduling": "string",
 "scheduled_date": "string",
 "scheduled_hour": "string"
 }
 }
}
```

| Nom | Type | Description |
| --- | --- | --- |
| summary | object | Rapport de l'action effectuée |
| status | string | Status. Les valeurs possibles sont : ok, warn, error |
| messageFacultatif | string | Message d'erreur |
| id | integer | Identifiant de la variante |
| maxFacultatif | integer | Quantité maximale autorisée |
| options | object | Options à la commande |
| available | object | Options disponibles |
| option_id | integer | Identifiant de l'option |
| type | string | Type d'option. Les valeurs possibles sont : simple, textarea, select |
| name | string | Nom de l'option |
| description | string | Description de l'option |
| quantityFacultatif | integer | Quantité, toujours égal à 1 |
| valueFacultatif | string | Valeur choisie (pour les options de type Liste de valeurs) |
| optionsFacultatif | object | Valeurs possibles (pour les options de type Liste de valeurs) |
| price_inc_vat | float | Prix TTC |
| price_ex_vat | float | Prix HT |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| in_cart | object | Options souscrites |
| option_id | integer | Identifiant de l'option |
| type | string | Type d'option. Les valeurs possibles sont : simple, textarea, select |
| name | string | Nom de l'option |
| description | string | Description de l'option |
| quantityFacultatif | integer | Quantité, toujours égal à 1 |
| valueFacultatif | string | Valeur choisie (pour les options de type Liste de valeurs) |
| optionsFacultatif | object | Valeurs possibles (pour les options de type Liste de valeurs) |
| price_inc_vat | float | Prix TTC |
| price_ex_vat | float | Prix HT |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| cart | object | Panier |
| currency | string | Devise |
| min_order_amount | float | Montant minimal de commande sur le site |
| items_count | integer | Nombre d'articles dans le panier |
| itemsFacultatif | object | Articles du panier |
| variant_id | integer | Identifiant de la variante |
| type | string | Type d'article. Les valeurs possibles sont : product, voucher |
| name | string | Intitulé de la variante |
| sku | string | Référence de la variante |
| product_id | integer | Identifiant du produit |
| product_name | string | Nom du produit |
| product_description | string | Description du produit |
| product_header | string | Chapô du produit |
| product_excerpt | string | Accroche du produit |
| product_url | string | URL du produit |
| is_discounted | boolean | Produit remisé |
| discount_rate | float | Remise sous forme d'un multiplicateur (ex = 0.9 signifie 10% de remise) |
| price_ex_vat | float | Prix unitaire HT |
| price_inc_vat | float | Prix unitaire TTC |
| price_base_ex_vat | float | Prix unitaire de base non remisé HT |
| price_base_inc_vat | float | Prix unitaire de base non remisé TTC |
| price_ecotax | float | Montant de l'eco taxe |
| price_ex_vat_labelFacultatif | string | Prix unitaire HT formaté |
| price_inc_vat_labelFacultatif | string | Prix unitaire TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix unitaire de base non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix unitaire de base non remisé TTC formaté |
| price_ecotax_labelFacultatif | string | Montant de l'eco taxe formaté |
| quantity | integer | Quantité |
| quantity_maxFacultatif | integer | Quantité maximale autorisée dans le panier |
| quantity_max_warn | boolean | Erreur de dépassement de quantité maximale |
| price_total_ex_vat | float | Prix total HT |
| price_total_inc_vat | float | Prix total TTC |
| price_total_ex_vat_labelFacultatif | string | Prix total HT formaté |
| price_total_inc_vat_labelFacultatif | string | Prix total TTC formaté |
| thumbFacultatif | object | Illustration de l'article |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| optionsFacultatif | object | Options du panier |
| option_id | integer | Identifiant de l'option |
| type | string | Type d'option. Les valeurs possibles sont : simple, textarea, select |
| name | string | Nom de l'option |
| description | string | Description de l'option |
| quantityFacultatif | integer | Quantité, toujours égal à 1 |
| valueFacultatif | string | Valeur choisie (pour les options de type Liste de valeurs) |
| optionsFacultatif | object | Valeurs possibles (pour les options de type Liste de valeurs) |
| price_inc_vat | float | Prix TTC |
| price_ex_vat | float | Prix HT |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| voucherFacultatif | object | Bon de réduction |
| code | string | Code du bon |
| value | float | Valeur du bon |
| type | string | Type de bon. Les valeurs possibles sont : percent, amount, shipping |
| label | string | Intitulé récapitulatif du bon de réduction |
| is_duty_free | boolean | Exonération de la TVA |
| price_subtotal_ex_vat | float | Sous total HT des produits du panier |
| price_subtotal_inc_vat | float | Sous total TTC des produits du panier |
| price_total_ecotax | float | Total de l'éco taxe |
| price_total_ex_vat | float | Total du panier HT |
| price_total_vat | float | Total de la TVA |
| price_total_inc_vat | float | Total du panier TTC |
| price_subtotal_ex_vat_labelFacultatif | string | Sous total HT des produits du panier formaté |
| price_subtotal_inc_vat_labelFacultatif | string | Sous total TTC des produits du panier formaté |
| price_total_ecotax_labelFacultatif | string | Total de l'éco taxe formaté |
| price_total_ex_vat_labelFacultatif | string | Total du panier HT formaté |
| price_total_vat_labelFacultatif | string | Total de la TVA formaté |
| price_total_inc_vat_labelFacultatif | string | Total du panier TTC formaté |
| shippingFacultatif | object | Livraison |
| carrier_id | integer | Identifiant du transporteur |
| name | string | Nom du transporteur |
| descriptionFacultatif | string | Description |
| price_ex_vat | float | Prix HT |
| price_inc_vat | float | Prix TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| vat_rate | float | Taux de tva |
| weight | integer | Poids total en grammes |
| is_free | boolean | Gratuité de la livraison |
| destination | string | Destination |
| picking_numberFacultatif | string | URL de suivi du colis |
| require_schedulingFacultatif | string | Plannification recquise. Les valeurs possibles sont : no, date, datetime |
| scheduled_dateFacultatif | string | Date de livraison |
| scheduled_hourFacultatif | string | Heure de livraison |

**Supprime une option DELETE**

**/api/v1/cart/options/{option_id}.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| option_id | Obligatoire | integer | Identifiant de l'option à la commande |


```
data:{
 "currency": "string",
 "min_order_amount": "float",
 "items_count": "integer",
 "items": [
 {
 "variant_id": "integer",
 "type": "string",
 "name": "string",
 "sku": "string",
 "product_id": "integer",
 "product_name": "string",
 "product_description": "string",
 "product_header": "string",
 "product_excerpt": "string",
 "product_url": "string",
 "is_discounted": "boolean",
 "discount_rate": "float",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ecotax": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "price_ecotax_label": "string",
 "quantity": "integer",
 "quantity_max": "integer",
 "quantity_max_warn": "boolean",
 "price_total_ex_vat": "float",
 "price_total_inc_vat": "float",
 "price_total_ex_vat_label": "string",
 "price_total_inc_vat_label": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 }
 ],
 "options": [
 {
 "option_id": "integer",
 "type": "string",
 "name": "string",
 "description": "string",
 "quantity": "integer",
 "value": "string",
 "options": [
 []
 ],
 "price_inc_vat": "float",
 "price_ex_vat": "float",
 "price_inc_vat_label": "string",
 "price_ex_vat_label": "string"
 }
 ],
 "voucher": {
 "code": "string",
 "value": "float",
 "type": "string",
 "label": "string"
 },
 "is_duty_free": "boolean",
 "price_subtotal_ex_vat": "float",
 "price_subtotal_inc_vat": "float",
 "price_total_ecotax": "float",
 "price_total_ex_vat": "float",
 "price_total_vat": "float",
 "price_total_inc_vat": "float",
 "price_subtotal_ex_vat_label": "string",
 "price_subtotal_inc_vat_label": "string",
 "price_total_ecotax_label": "string",
 "price_total_ex_vat_label": "string",
 "price_total_vat_label": "string",
 "price_total_inc_vat_label": "string",
 "shipping": {
 "carrier_id": "integer",
 "name": "string",
 "description": "string",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "vat_rate": "float",
 "weight": "integer",
 "is_free": "boolean",
 "destination": "string",
 "picking_number": "string",
 "require_scheduling": "string",
 "scheduled_date": "string",
 "scheduled_hour": "string"
 }
}
```

| Nom | Type | Description |
| --- | --- | --- |
| currency | string | Devise |
| min_order_amount | float | Montant minimal de commande sur le site |
| items_count | integer | Nombre d'articles dans le panier |
| itemsFacultatif | object | Articles du panier |
| variant_id | integer | Identifiant de la variante |
| type | string | Type d'article. Les valeurs possibles sont : product, voucher |
| name | string | Intitulé de la variante |
| sku | string | Référence de la variante |
| product_id | integer | Identifiant du produit |
| product_name | string | Nom du produit |
| product_description | string | Description du produit |
| product_header | string | Chapô du produit |
| product_excerpt | string | Accroche du produit |
| product_url | string | URL du produit |
| is_discounted | boolean | Produit remisé |
| discount_rate | float | Remise sous forme d'un multiplicateur (ex = 0.9 signifie 10% de remise) |
| price_ex_vat | float | Prix unitaire HT |
| price_inc_vat | float | Prix unitaire TTC |
| price_base_ex_vat | float | Prix unitaire de base non remisé HT |
| price_base_inc_vat | float | Prix unitaire de base non remisé TTC |
| price_ecotax | float | Montant de l'eco taxe |
| price_ex_vat_labelFacultatif | string | Prix unitaire HT formaté |
| price_inc_vat_labelFacultatif | string | Prix unitaire TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix unitaire de base non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix unitaire de base non remisé TTC formaté |
| price_ecotax_labelFacultatif | string | Montant de l'eco taxe formaté |
| quantity | integer | Quantité |
| quantity_maxFacultatif | integer | Quantité maximale autorisée dans le panier |
| quantity_max_warn | boolean | Erreur de dépassement de quantité maximale |
| price_total_ex_vat | float | Prix total HT |
| price_total_inc_vat | float | Prix total TTC |
| price_total_ex_vat_labelFacultatif | string | Prix total HT formaté |
| price_total_inc_vat_labelFacultatif | string | Prix total TTC formaté |
| thumbFacultatif | object | Illustration de l'article |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| optionsFacultatif | object | Options du panier |
| option_id | integer | Identifiant de l'option |
| type | string | Type d'option. Les valeurs possibles sont : simple, textarea, select |
| name | string | Nom de l'option |
| description | string | Description de l'option |
| quantityFacultatif | integer | Quantité, toujours égal à 1 |
| valueFacultatif | string | Valeur choisie (pour les options de type Liste de valeurs) |
| optionsFacultatif | object | Valeurs possibles (pour les options de type Liste de valeurs) |
| price_inc_vat | float | Prix TTC |
| price_ex_vat | float | Prix HT |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| voucherFacultatif | object | Bon de réduction |
| code | string | Code du bon |
| value | float | Valeur du bon |
| type | string | Type de bon. Les valeurs possibles sont : percent, amount, shipping |
| label | string | Intitulé récapitulatif du bon de réduction |
| is_duty_free | boolean | Exonération de la TVA |
| price_subtotal_ex_vat | float | Sous total HT des produits du panier |
| price_subtotal_inc_vat | float | Sous total TTC des produits du panier |
| price_total_ecotax | float | Total de l'éco taxe |
| price_total_ex_vat | float | Total du panier HT |
| price_total_vat | float | Total de la TVA |
| price_total_inc_vat | float | Total du panier TTC |
| price_subtotal_ex_vat_labelFacultatif | string | Sous total HT des produits du panier formaté |
| price_subtotal_inc_vat_labelFacultatif | string | Sous total TTC des produits du panier formaté |
| price_total_ecotax_labelFacultatif | string | Total de l'éco taxe formaté |
| price_total_ex_vat_labelFacultatif | string | Total du panier HT formaté |
| price_total_vat_labelFacultatif | string | Total de la TVA formaté |
| price_total_inc_vat_labelFacultatif | string | Total du panier TTC formaté |
| shippingFacultatif | object | Livraison |
| carrier_id | integer | Identifiant du transporteur |
| name | string | Nom du transporteur |
| descriptionFacultatif | string | Description |
| price_ex_vat | float | Prix HT |
| price_inc_vat | float | Prix TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| vat_rate | float | Taux de tva |
| weight | integer | Poids total en grammes |
| is_free | boolean | Gratuité de la livraison |
| destination | string | Destination |
| picking_numberFacultatif | string | URL de suivi du colis |
| require_schedulingFacultatif | string | Plannification recquise. Les valeurs possibles sont : no, date, datetime |
| scheduled_dateFacultatif | string | Date de livraison |
| scheduled_hourFacultatif | string | Heure de livraison |

### Bon de réduction

Article de référence : [https://aide.kiubi.com/api-front-cart.html#bon-de-reduction](https://aide.kiubi.com/api-front-cart.html#bon-de-reduction)

**Retourne le bon du panier GET**

**/api/v1/cart/voucher.json**


```
data:{
 "code": "string",
 "value": "float",
 "type": "string",
 "label": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| code | string | Code du bon |
| value | float | Valeur du bon |
| type | string | Type de bon. Les valeurs possibles sont : percent, amount, shipping |
| label | string | Intitulé récapitulatif du bon de réduction |

**Supprime le bon du panier DELETE**

**/api/v1/cart/voucher.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : price_labelLabel des prix dans la devise du site | price_label | Label des prix dans la devise du site |
| price_label | Label des prix dans la devise du site |

**Ajoute un bon au panier PUT**

**/api/v1/cart/voucher.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| code | | string | Code du bon de réduction |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : price_labelLabel des prix dans la devise du site | price_label | Label des prix dans la devise du site |
| price_label | Label des prix dans la devise du site |


```
data:{
 "currency": "string",
 "min_order_amount": "float",
 "items_count": "integer",
 "items": [
 {
 "variant_id": "integer",
 "type": "string",
 "name": "string",
 "sku": "string",
 "product_id": "integer",
 "product_name": "string",
 "product_description": "string",
 "product_header": "string",
 "product_excerpt": "string",
 "product_url": "string",
 "is_discounted": "boolean",
 "discount_rate": "float",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_ecotax": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "price_ecotax_label": "string",
 "quantity": "integer",
 "quantity_max": "integer",
 "quantity_max_warn": "boolean",
 "price_total_ex_vat": "float",
 "price_total_inc_vat": "float",
 "price_total_ex_vat_label": "string",
 "price_total_inc_vat_label": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 }
 }
 ],
 "options": [
 {
 "option_id": "integer",
 "type": "string",
 "name": "string",
 "description": "string",
 "quantity": "integer",
 "value": "string",
 "options": [
 []
 ],
 "price_inc_vat": "float",
 "price_ex_vat": "float",
 "price_inc_vat_label": "string",
 "price_ex_vat_label": "string"
 }
 ],
 "voucher": {
 "code": "string",
 "value": "float",
 "type": "string",
 "label": "string"
 },
 "is_duty_free": "boolean",
 "price_subtotal_ex_vat": "float",
 "price_subtotal_inc_vat": "float",
 "price_total_ecotax": "float",
 "price_total_ex_vat": "float",
 "price_total_vat": "float",
 "price_total_inc_vat": "float",
 "price_subtotal_ex_vat_label": "string",
 "price_subtotal_inc_vat_label": "string",
 "price_total_ecotax_label": "string",
 "price_total_ex_vat_label": "string",
 "price_total_vat_label": "string",
 "price_total_inc_vat_label": "string",
 "shipping": {
 "carrier_id": "integer",
 "name": "string",
 "description": "string",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "vat_rate": "float",
 "weight": "integer",
 "is_free": "boolean",
 "destination": "string",
 "picking_number": "string",
 "require_scheduling": "string",
 "scheduled_date": "string",
 "scheduled_hour": "string"
 }
}
```

| Nom | Type | Description |
| --- | --- | --- |
| currency | string | Devise |
| min_order_amount | float | Montant minimal de commande sur le site |
| items_count | integer | Nombre d'articles dans le panier |
| itemsFacultatif | object | Articles du panier |
| variant_id | integer | Identifiant de la variante |
| type | string | Type d'article. Les valeurs possibles sont : product, voucher |
| name | string | Intitulé de la variante |
| sku | string | Référence de la variante |
| product_id | integer | Identifiant du produit |
| product_name | string | Nom du produit |
| product_description | string | Description du produit |
| product_header | string | Chapô du produit |
| product_excerpt | string | Accroche du produit |
| product_url | string | URL du produit |
| is_discounted | boolean | Produit remisé |
| discount_rate | float | Remise sous forme d'un multiplicateur (ex = 0.9 signifie 10% de remise) |
| price_ex_vat | float | Prix unitaire HT |
| price_inc_vat | float | Prix unitaire TTC |
| price_base_ex_vat | float | Prix unitaire de base non remisé HT |
| price_base_inc_vat | float | Prix unitaire de base non remisé TTC |
| price_ecotax | float | Montant de l'eco taxe |
| price_ex_vat_labelFacultatif | string | Prix unitaire HT formaté |
| price_inc_vat_labelFacultatif | string | Prix unitaire TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix unitaire de base non remisé HT formaté |
| price_base_inc_vat_labelFacultatif | string | Prix unitaire de base non remisé TTC formaté |
| price_ecotax_labelFacultatif | string | Montant de l'eco taxe formaté |
| quantity | integer | Quantité |
| quantity_maxFacultatif | integer | Quantité maximale autorisée dans le panier |
| quantity_max_warn | boolean | Erreur de dépassement de quantité maximale |
| price_total_ex_vat | float | Prix total HT |
| price_total_inc_vat | float | Prix total TTC |
| price_total_ex_vat_labelFacultatif | string | Prix total HT formaté |
| price_total_inc_vat_labelFacultatif | string | Prix total TTC formaté |
| thumbFacultatif | object | Illustration de l'article |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| optionsFacultatif | object | Options du panier |
| option_id | integer | Identifiant de l'option |
| type | string | Type d'option. Les valeurs possibles sont : simple, textarea, select |
| name | string | Nom de l'option |
| description | string | Description de l'option |
| quantityFacultatif | integer | Quantité, toujours égal à 1 |
| valueFacultatif | string | Valeur choisie (pour les options de type Liste de valeurs) |
| optionsFacultatif | object | Valeurs possibles (pour les options de type Liste de valeurs) |
| price_inc_vat | float | Prix TTC |
| price_ex_vat | float | Prix HT |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| voucherFacultatif | object | Bon de réduction |
| code | string | Code du bon |
| value | float | Valeur du bon |
| type | string | Type de bon. Les valeurs possibles sont : percent, amount, shipping |
| label | string | Intitulé récapitulatif du bon de réduction |
| is_duty_free | boolean | Exonération de la TVA |
| price_subtotal_ex_vat | float | Sous total HT des produits du panier |
| price_subtotal_inc_vat | float | Sous total TTC des produits du panier |
| price_total_ecotax | float | Total de l'éco taxe |
| price_total_ex_vat | float | Total du panier HT |
| price_total_vat | float | Total de la TVA |
| price_total_inc_vat | float | Total du panier TTC |
| price_subtotal_ex_vat_labelFacultatif | string | Sous total HT des produits du panier formaté |
| price_subtotal_inc_vat_labelFacultatif | string | Sous total TTC des produits du panier formaté |
| price_total_ecotax_labelFacultatif | string | Total de l'éco taxe formaté |
| price_total_ex_vat_labelFacultatif | string | Total du panier HT formaté |
| price_total_vat_labelFacultatif | string | Total de la TVA formaté |
| price_total_inc_vat_labelFacultatif | string | Total du panier TTC formaté |
| shippingFacultatif | object | Livraison |
| carrier_id | integer | Identifiant du transporteur |
| name | string | Nom du transporteur |
| descriptionFacultatif | string | Description |
| price_ex_vat | float | Prix HT |
| price_inc_vat | float | Prix TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| vat_rate | float | Taux de tva |
| weight | integer | Poids total en grammes |
| is_free | boolean | Gratuité de la livraison |
| destination | string | Destination |
| picking_numberFacultatif | string | URL de suivi du colis |
| require_schedulingFacultatif | string | Plannification recquise. Les valeurs possibles sont : no, date, datetime |
| scheduled_dateFacultatif | string | Date de livraison |
| scheduled_hourFacultatif | string | Heure de livraison |

### Transporteurs

Article de référence : [https://aide.kiubi.com/api-front-cart.html#transporteurs](https://aide.kiubi.com/api-front-cart.html#transporteurs)

**Modifie les adresses de la commande PUT**

**/api/v1/cart/addresses.json**

Modifie à la fois les adresses de livraison et facturation.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| billing[firstname] | Obligatoire | string | Prénom de l'adresse de facturation |
| billing[lastname] | Obligatoire | string | Nom de l'adresse de facturation |
| billing[civility] | Obligatoire | string | Civilité de l'adresse de facturation Les valeurs attendues sont : m, mme, mlle |
| billing[address] | Obligatoire | string | Adresse de facturation |
| billing[zipcode] | Obligatoire | string | Code postale de l'adresse de facturation |
| billing[city] | Obligatoire | string | Ville de l'adresse de facturation |
| billing[country_id] | Obligatoire | string | Pays de l'adresse de facturation |
| billing[phone] | Obligatoire | string | Téléphone de l'adresse de facturation |
| use_billing_as_shipping | | boolean | Flag permettant d'indiquer que les données envoyée pour l'adresse de facturation, renseignent également l'adresse de livraion |
| shipping[firstname] | | string | Prénom de l'adresse de livraison |
| shipping[lastname] | | string | Nom de l'adresse de livraison |
| shipping[civility] | | string | Civilité de l'adresse de livraison Les valeurs attendues sont : m, mme, mlle |
| shipping[address] | | string | Adresse de livraison |
| shipping[zipcode] | | string | Code postale de l'adresse de livraison |
| shipping[city] | | string | Ville de l'adresse de livraison |
| shipping[country_id] | | string | Pays de l'adresse de livraison |
| shipping[phone] | | string | Téléphone de l'adresse de livraison |
| consent | | boolean | Donne le consentement au traitement des données |

**Retourne les adresse de la commande GET**

**/api/v1/cart/addresses.json**


```
data:{
 "billing": {
 "civility": "string",
 "lastname": "string",
 "firstname": "string",
 "company": "string",
 "address": "string",
 "zipcode": "string",
 "city": "string",
 "country_id": "integer",
 "country": "string",
 "country_code": "string",
 "phone": "string"
 },
 "use_billing_as_shipping": "boolean",
 "shipping": {
 "civility": "string",
 "lastname": "string",
 "firstname": "string",
 "company": "string",
 "address": "string",
 "zipcode": "string",
 "city": "string",
 "country_id": "integer",
 "country": "string",
 "country_code": "string",
 "phone": "string"
 },
 "is_consent_required": "boolean"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| billing | object | Adresse de facturation |
| civility | string | Civilité. Les valeurs possibles sont : m, mme, mlle |
| lastname | string | Nom |
| firstname | string | Prénom |
| company | string | Raison sociale |
| address | string | Adresse |
| zipcode | string | Code postal |
| city | string | Ville |
| country_id | integer | Identifiant du pays |
| country | string | Nom du pays |
| country_code | string | Code ISO du pays |
| phone | string | Numéro de téléphone |
| use_billing_as_shipping | boolean | Utilisation de l'adresse de facturation pour la livraison |
| shipping | object | Adresse de livraison |
| civility | string | Civilité. Les valeurs possibles sont : m, mme, mlle |
| lastname | string | Nom |
| firstname | string | Prénom |
| company | string | Raison sociale |
| address | string | Adresse |
| zipcode | string | Code postal |
| city | string | Ville |
| country_id | integer | Identifiant du pays |
| country | string | Nom du pays |
| country_code | string | Code ISO du pays |
| phone | string | Numéro de téléphone |
| is_consent_required | boolean | Consentement requis |

**Liste les transporteurs GET**

**/api/v1/cart/carriers.json**

Retourne la liste des transporteurs possibles pour le panier actuel, suivant les produits et l'adresse de destination. Il est également possible de forcer arbitrairement un pays.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| country_id | | integer | Pays |
| zipcode | | string | Code postal (pour la france) |


```
data:[
 {
 "id": "integer",
 "name": "string",
 "shipping_delay": "string",
 "is_free": "boolean",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "description": "string",
 "is_current": "boolean",
 "type": "string",
 "company": "string",
 "address": "string",
 "zipcode": "string",
 "city": "string",
 "country": "string",
 "country_id": "integer",
 "country_code": "string",
 "require_scheduling": "string",
 "scheduling_rules": "List"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du transporteur |
| name | string | Intitulé du transporteur |
| shipping_delayFacultatif | string | Délai de livraison |
| is_free | boolean | Transporteur gratuit |
| price_ex_vat | float | Prix hors TVA |
| price_inc_vat | float | Prix avec TVA |
| price_ex_vat_labelFacultatif | string | Prix hors TVA avec devise |
| price_inc_vat_labelFacultatif | string | Prix avec TVA avec devise |
| description | string | Description du transporteur |
| is_current | boolean | Ce transporteur est celui utilisé dans le panier |
| type | string | Type de transporteur |
| companyFacultatif | string | Nom de la société (en cas de livraison en magasin) |
| addressFacultatif | string | Adresse (en cas de livraison en magasin) |
| zipcodeFacultatif | string | Code postal (en cas de livraison en magasin) |
| cityFacultatif | string | Ville (en cas de livraison en magasin) |
| countryFacultatif | string | Nom du pays (en cas de livraison en magasin) |
| country_idFacultatif | integer | Identifiant du pays (en cas de livraison en magasin) |
| country_codeFacultatif | string | Code ISO du pays (en cas de livraison en magasin) |
| require_scheduling | string | Plannification de la date de livraison. Les valeurs possibles sont : no, date, datetime |
| scheduling_rulesFacultatif | List | Règles de plannification de la date de livraison |

**Estimation des frais de port GET**

**/api/v1/cart/carriers/{carrier_id}/estimation.json**

Retourne une estimation des frais de port par le transporteur désigné. Si le pays n'est pas indiqué, c'est celui de l'adresse de livraison qui est utilisé.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| carrier_id | Obligatoire | integer | Identifiant unique du transporteur |
| country_id | | integer | Pays |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : price_labelLabel des prix dans la devise du site | price_label | Label des prix dans la devise du site |
| price_label | Label des prix dans la devise du site |


```
data:[
 {
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| price_ex_vat | float | Prix HT |
| price_inc_vat | float | Prix TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |

**Cherche des points relais GET**

**/api/v1/cart/carriers/{carrier_id}/pickup.json**

Recherche les points relais les plus proches de l'adresse indiquée.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| carrier_id | Obligatoire | integer | Identifiant unique du transporteur |
| address | | string | Adresse |
| city | | string | Ville |
| zipcode | | string | Code postal |
| country_id | | integer | Identifiant du pays |


```
data:[
 {
 "relay_id": "string",
 "name": "string",
 "address": "string",
 "address2": "string",
 "address3": "string",
 "zipcode": "string",
 "city": "string",
 "country": "string",
 "hint": "string",
 "distance": "float",
 "coord": {
 "lat": "float",
 "lon": "float"
 },
 "opening_hours": "List",
 "closing_period": "List"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| relay_id | string | Identifiant du relais |
| name | string | Nom du relais |
| address | string | Adresse |
| address2Facultatif | string | Complément d'adresse |
| address3Facultatif | string | Complément d'adresse |
| zipcode | string | Code postal |
| city | string | Ville |
| country | string | Code du pays |
| hintFacultatif | string | Aide |
| distance | float | Distance en km |
| coord | object | Géolocalisation |
| lat | float | Latitude |
| lon | float | Longitude |
| opening_hours | List | Horaires d'ouverture |
| closing_periodFacultatif | List | Périodes de fermeture |

**Disponibilité d'un date de livraison GET**

**/api/v1/cart/carriers/{carrier_id}/schedule.json**

Teste la disponibilité d'un date de livraison pour le transporteur indiqué.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| carrier_id | Obligatoire | integer | Identifiant unique du transporteur |
| scheduled_date | Obligatoire | string | Date de livraison souhaitée |
| scheduled_hour | | string | Heure de livraison souhaitée |

**Change de transporteur PUT**

**/api/v1/cart/shipping.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| carrier_id | Obligatoire | integer | Identifiant unique du transporteur |
| scheduled_date | | string | Date de livraison souhaitée |
| scheduled_hour | | string | Heure de livraison souhaitée |

### Sauvegarde

Article de référence : [https://aide.kiubi.com/api-front-cart.html#sauvegarde](https://aide.kiubi.com/api-front-cart.html#sauvegarde)

**Sauvegarde le panier GET**

**/api/v1/cart/backup.json**

Retourne un jeton qui identifie le contenu du panier.


```
data:{
 "backup": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| backup | string | Jeton |

**Restaure le panier PUT**

**/api/v1/cart/backup.json**

La restauration du panier utilise un jeton obtenu précédement par la sauvegarde du panier.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| backup | Obligatoire | string | Jeton |

### Commentaire

Article de référence : [https://aide.kiubi.com/api-front-cart.html#commentaire](https://aide.kiubi.com/api-front-cart.html#commentaire)

**Retourne le commentaire GET**

**/api/v1/cart/comment.json**


```
data:{
 "comment": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| comment | string | Commentaire |

**Ajoute un commentaire PUT**

**/api/v1/cart/comment.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| comment | | string | Commentaire |

## Membres

### Session

Article de référence : [https://aide.kiubi.com/api-front-users.html#session](https://aide.kiubi.com/api-front-users.html#session)

**Session courante GET**

**/api/v1/session.json**

Vérifie la validité de la session et retourne les informations de l'utilisateur connecté.


```
data:{
 "is_logged": "boolean",
 "user_id": "integer",
 "firstname": "string",
 "lastname": "string",
 "email": "string",
 "gender": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| is_logged | boolean | Connexion de l'utilisateur |
| user_idFacultatif | integer | Identifiant de l'utilisateur |
| firstnameFacultatif | string | Prénom |
| lastnameFacultatif | string | Nom |
| emailFacultatif | string | Email |
| genderFacultatif | string | Genre. Les valeurs possibles sont : H, F |

**Déconnexion DELETE**

**/api/v1/session.json**

Déconnecte l'utilisateur courant et vide son panier.

**Identification PUT**

**/api/v1/session.json**

Identifie un membre par identifiant et mot de passe.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| login | | string | Identifiant de connexion de l'utilisateur |
| password | | string | Mot de passe de l'utilisateur |


```
data:{
 "is_logged": "boolean",
 "user_id": "integer",
 "firstname": "string",
 "lastname": "string",
 "email": "string",
 "gender": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| is_logged | boolean | Connexion de l'utilisateur |
| user_idFacultatif | integer | Identifiant de l'utilisateur |
| firstnameFacultatif | string | Prénom |
| lastnameFacultatif | string | Nom |
| emailFacultatif | string | Email |
| genderFacultatif | string | Genre. Les valeurs possibles sont : H, F |

### Newsletter

Article de référence : [https://aide.kiubi.com/api-front-users.html#newsletter](https://aide.kiubi.com/api-front-users.html#newsletter)

**Inscrition à la newsletter POST**

**/api/v1/newsletter.json**

Inscrit un email à la newsletter

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| email | Obligatoire | email | Adresse email à inscrire à la newsletter du site |
| consent | | boolean | Donne le consentement au traitement des données |

**Désinscrition à la newsletter DELETE**

**/api/v1/newsletter.json**

Désinscrit un email à la newsletter

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| email | Obligatoire | email | Adresse email à désinscrire de la newsletter du site |

### Membres

Article de référence : [https://aide.kiubi.com/api-front-users.html#membres](https://aide.kiubi.com/api-front-users.html#membres)

**Retourne l'identité du membre GET**

**/api/v1/users/{user_id}.json**

Retourne l'identité du membre indiqué. L'identifiant du membre est récupérable grâce aux endpoints dédiés aux sessions.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| user_id | Obligatoire | integer | Identifiant numérique du membre |


```
data:{
 "id": "integer",
 "number": "string",
 "firstname": "string",
 "lastname": "string",
 "gender": "string",
 "email": "string",
 "group_id": "integer",
 "website": "string",
 "nickname": "string",
 "avatar_url": "string",
 "avatar_thumb_url": "string",
 "is_in_mailinglist": "boolean"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du membre |
| number | string | Numéro du membre |
| firstname | string | Prénom |
| lastname | string | Nom |
| gender | string | Genre. Les valeurs possibles sont : H, F |
| email | string | Email |
| group_idFacultatif | integer | Identifiant du groupe extranet |
| website | string | Site web |
| nickname | string | Pseudo |
| avatar_url | string | URL de l'avatar |
| avatar_thumb_url | string | URL de la miniature de l'avatar |
| is_in_mailinglist | boolean | Inscrit à la newsletter |

**Retourne les adresses d'un membre GET**

**/api/v1/users/{user_id}/addresses.json**

Retourne les dernières adresses de livraison et de facturation connues. Le membre doit avoir passé au moins une commande.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| user_id | Obligatoire | integer | Identifiant numérique du membre |


```
data:{
 "billing": {
 "civility": "string",
 "lastname": "string",
 "firstname": "string",
 "company": "string",
 "address": "string",
 "zipcode": "string",
 "city": "string",
 "country_id": "integer",
 "country": "string",
 "country_code": "string",
 "phone": "string"
 },
 "shipping": {
 "civility": "string",
 "lastname": "string",
 "firstname": "string",
 "company": "string",
 "address": "string",
 "zipcode": "string",
 "city": "string",
 "country_id": "integer",
 "country": "string",
 "country_code": "string",
 "phone": "string"
 }
}
```

| Nom | Type | Description |
| --- | --- | --- |
| billingFacultatif | object | Adresse de facturation |
| civility | string | Civilité. Les valeurs possibles sont : m, mme, mlle |
| lastname | string | Nom |
| firstname | string | Prénom |
| company | string | Raison sociale |
| address | string | Adresse |
| zipcode | string | Code postal |
| city | string | Ville |
| country_id | integer | Identifiant du pays |
| country | string | Nom du pays |
| country_code | string | Code ISO du pays |
| phone | string | Numéro de téléphone |
| shippingFacultatif | object | Adresse de livraison |
| civility | string | Civilité. Les valeurs possibles sont : m, mme, mlle |
| lastname | string | Nom |
| firstname | string | Prénom |
| company | string | Raison sociale |
| address | string | Adresse |
| zipcode | string | Code postal |
| city | string | Ville |
| country_id | integer | Identifiant du pays |
| country | string | Nom du pays |
| country_code | string | Code ISO du pays |
| phone | string | Numéro de téléphone |

### Commandes

Article de référence : [https://aide.kiubi.com/api-front-users.html#commandes](https://aide.kiubi.com/api-front-users.html#commandes)

**Détail d'une commande GET**

**/api/v1/orders/{order_id}.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| order_id | Obligatoire | integer | Identifiant numérique de la commande |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : price_labelLabel des prix dans la devise du site | price_label | Label des prix dans la devise du site |
| price_label | Label des prix dans la devise du site |


```
data:{
 "id": "integer",
 "reference": "string",
 "client_id": "integer",
 "date": "string",
 "date_f": "string",
 "date_timestamp": "integer",
 "status": "string",
 "is_paid": "boolean",
 "price_total_inc_vat": "float",
 "price_total_ex_vat": "float",
 "price_total_inc_vat_label": "string",
 "price_total_ex_vat_label": "string",
 "base_price": "string",
 "currency": "string",
 "payment_mode": "string",
 "payment_date": "string",
 "payment_date_f": "string",
 "payment_date_timestamp": "integer",
 "has_voucher": "boolean",
 "voucher_code": "string",
 "voucher_amount": "float",
 "shipping": {
 "carrier_id": "integer",
 "name": "string",
 "description": "string",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "vat_rate": "float",
 "weight": "integer",
 "is_free": "boolean",
 "destination": "string",
 "picking_number": "string",
 "require_scheduling": "string",
 "scheduled_date": "string",
 "scheduled_hour": "string"
 },
 "use_billing_as_shipping": "boolean",
 "shipping_address": {
 "civility": "string",
 "lastname": "string",
 "firstname": "string",
 "company": "string",
 "address": "string",
 "zipcode": "string",
 "city": "string",
 "country": "string",
 "phone": "string"
 },
 "billing_address": {
 "civility": "string",
 "lastname": "string",
 "firstname": "string",
 "company": "string",
 "address": "string",
 "zipcode": "string",
 "city": "string",
 "country": "string",
 "phone": "string"
 },
 "items": [
 {
 "type": "string",
 "product_id": "integer",
 "variant_id": "integer",
 "reference": "string",
 "product_name": "string",
 "variant_name": "string",
 "quantity": "integer",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "is_discounted": "boolean",
 "discount": "float",
 "vat_rate": "float",
 "price_ecotax": "float",
 "is_virtual": "boolean",
 "file_url": "string"
 }
 ],
 "options": [
 {
 "option_id": "integer",
 "name": "string",
 "quantity": "integer",
 "value": "string",
 "price_ex_vat": "float",
 "price_inc_vat": "float",
 "price_ex_vat_label": "string",
 "price_inc_vat_label": "string",
 "vat_rate": "float"
 }
 ],
 "pdf_url": "string",
 "fidelity_reward": "integer"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant de la commande |
| reference | string | Référence de la commande |
| client_id | integer | Identiifant du client |
| date | string | Date de création |
| date_f | string | Date de création formatée |
| date_timestamp | integer | Timestamp de la date de création |
| status | string | État de la commande |
| is_paid | boolean | Paiement de la commande |
| price_total_inc_vat | float | Montant total de la commande TTC |
| price_total_ex_vat | float | Montant total de la commande HT |
| price_total_inc_vat_labelFacultatif | string | Montant total de la commande TTC formaté |
| price_total_ex_vat_labelFacultatif | string | Montant total de la commande HT formaté |
| base_price | string | Base d'affichage des prix. Les valeurs possibles sont : HT, TTC |
| currency | string | Code ISO de la devise |
| payment_mode | string | Nom du moyen de paiement |
| payment_dateFacultatif | string | Date de paiement |
| payment_date_fFacultatif | string | Date de paiement formatée |
| payment_date_timestampFacultatif | integer | Timestamp de la date de paiement |
| has_voucher | boolean | Présence d'un bon de réduction |
| voucher_code | string | Code du bon de réduction |
| voucher_amount | float | Valeur du bon de réduction |
| shipping | object | Transporteur |
| carrier_id | integer | Identifiant du transporteur |
| name | string | Nom du transporteur |
| descriptionFacultatif | string | Description |
| price_ex_vat | float | Prix HT |
| price_inc_vat | float | Prix TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| vat_rate | float | Taux de tva |
| weight | integer | Poids total en grammes |
| is_free | boolean | Gratuité de la livraison |
| destination | string | Destination |
| picking_numberFacultatif | string | URL de suivi du colis |
| require_schedulingFacultatif | string | Plannification recquise. Les valeurs possibles sont : no, date, datetime |
| scheduled_dateFacultatif | string | Date de livraison |
| scheduled_hourFacultatif | string | Heure de livraison |
| use_billing_as_shipping | boolean | Adresse de livraison et de facturation identique |
| shipping_address | object | Adresse de livraison |
| civility | string | Civilité. Les valeurs possibles sont : m, mme, mlle |
| lastname | string | Nom |
| firstname | string | Prénom |
| company | string | Raison sociale |
| address | string | Adresse |
| zipcode | string | Code postal |
| city | string | Ville |
| country | string | Nom du pays |
| phoneFacultatif | string | Numéro de téléphone |
| billing_address | object | Adresse de facturation |
| civility | string | Civilité. Les valeurs possibles sont : m, mme, mlle |
| lastname | string | Nom |
| firstname | string | Prénom |
| company | string | Raison sociale |
| address | string | Adresse |
| zipcode | string | Code postal |
| city | string | Ville |
| country | string | Nom du pays |
| phoneFacultatif | string | Numéro de téléphone |
| items | object | Contenu de la commande |
| type | string | Indique un produit ou un bon de réduction. Les valeurs possibles sont : product, voucher |
| product_idFacultatif | integer | Identifiant du produit (pour les produits) |
| variant_idFacultatif | integer | Identifiant de la variante (pour les produits) |
| referenceFacultatif | string | Référence de la variante (pour les produits) |
| product_name | string | Intitulé du produit ou un bon de réduction |
| variant_nameFacultatif | string | Intitulé de la variante (pour les produits) |
| quantity | integer | Quantité |
| price_ex_vat | float | Prix unitaire HT |
| price_inc_vat | float | Prix unitaire TTC |
| price_ex_vat_labelFacultatif | string | Prix unitaire HT formaté |
| price_inc_vat_labelFacultatif | string | Prix unitaire TTC formaté |
| is_discounted | boolean | En promo |
| discount | float | Pourcentage de remise |
| vat_rate | float | Taux de tva |
| price_ecotax | float | Montant de l'eco taxe |
| is_virtual | boolean | Produit virtuel |
| file_urlFacultatif | string | URL du produit virtuel |
| options | object | Options |
| option_id | integer | Identifiant de l'option |
| name | string | Nom de l'option |
| quantity | integer | Quantitié |
| value | string | Valeur |
| price_ex_vat | float | Prix HT |
| price_inc_vat | float | Prix TTC |
| price_ex_vat_labelFacultatif | string | Prix HT formaté |
| price_inc_vat_labelFacultatif | string | Prix TTC formaté |
| vat_rate | float | Taux de tva |
| pdf_url | string | URL de téléchargement de la commande |
| fidelity_reward | integer | Gain en points de fidélité |

**Liste les commandes d'un membre GET**

**/api/v1/users/{user_id}/orders.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| user_id | Obligatoire | integer | Identifiant numérique du membre |


```
data:[
 {
 "id": "integer",
 "reference": "string",
 "date": "string",
 "date_f": "string",
 "date_timestamp": "integer",
 "status": "string",
 "is_paid": "boolean",
 "price_total_inc_vat": "float",
 "price_total_ex_vat": "float",
 "price_total_inc_vat_label": "string",
 "price_total_ex_vat_label": "string",
 "base_price": "string",
 "currency": "string",
 "pdf_url": "string"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant de la commande |
| reference | string | Référence de la commande |
| date | string | Date de création |
| date_f | string | Date de création formatée |
| date_timestamp | integer | Timestamp de la date de création |
| status | string | État de la commande |
| is_paid | boolean | Paiement de la commande |
| price_total_inc_vat | float | Montant total de la commande TTC |
| price_total_ex_vat | float | Montant total de la commande HT |
| price_total_inc_vat_labelFacultatif | string | Montant total de la commande TTC formaté |
| price_total_ex_vat_labelFacultatif | string | Montant total de la commande HT formaté |
| base_price | string | Base d'affichage des prix. Les valeurs possibles sont : HT, TTC |
| currency | string | Code ISO de la devise |
| pdf_url | string | URL de téléchargement de la commande |

## Dismoi?

### Formulaire

Article de référence : [https://aide.kiubi.com/api-front-forms.html#formulaire](https://aide.kiubi.com/api-front-forms.html#formulaire)

**Retourne la structure d'un formulaire GET**

**/api/v1/forms/{key}.json**

Liste les champs et la confifuration d'un formulaire Dismoi?. L'identifiant api est à récupérer dans la console d'administration ou l'API Developers.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| key | Obligatoire | string | Identifiant api du formulaire |


```
data:{
 "name": "string",
 "has_captcha": "boolean",
 "fields": [
 {
 "label": "string",
 "type": "string",
 "required": "boolean",
 "help": "string",
 "name": "string",
 "alias": "string",
 "options": [
 {
 "value": "string",
 "label": "string"
 }
 ],
 "value": "string"
 }
 ],
 "is_consent_required": "boolean",
 "processing_purposes": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| name | string | Nom du formulaire |
| has_captcha | boolean | Activation du captcha |
| fields | object | Champs du formulaire |
| label | string | Initutlé du champ |
| type | string | Type du champ. Les valeurs possibles sont : text, textarea, chiffres, lettres, email, civilite, fieldset, select, checkbox, upload, radio, date, datetime, regions, departements, pays, hidden |
| required | boolean | Champ obligatoire |
| help | string | Aide à la saisie |
| name | string | Valeur de l'attribut name attendu dans le formulaire |
| aliasFacultatif | string | Alias |
| optionsFacultatif | object | Valeurs possible du champ |
| value | string | Valeur |
| label | string | Intitulé |
| valueFacultatif | string | Valeur saise |
| is_consent_required | boolean | Recueil du consentement requis |
| processing_purposes | string | Finalités de traitement des données du formulaire |

**Envoie une réponse au formulaire POST**

**/api/v1/forms/{key}.json**

Envoie une réponse au formulaire Dismoi?. L'identifiant api est à récupérer dans la console d'administration ou l'API Developers.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| key | Obligatoire | string | Identifiant api du formulaire |
| fields | Obligatoire | array | Réponses du formulaire Dismoi? |
| captcha | | string | Réponse au dernier captcha généré. Ce champ est requis selon la configuration du site |
| token | Obligatoire | string | Jeton unique du formulaire |
| model | | string | Modele utilisé pour le formulaire, determine quel template d'email sera utilisé pour l'email de notification |
| consent | | boolean | Donne le consentement au traitement des données |


```
data:{
 "new_captcha": "string",
 "message": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| new_captchaFacultatif | string | Nouveau captcha en cas d'échec de soumission du commentaire (vide si reCaptcha est activé) |
| messageFacultatif | string | Message de confirmation du formulaire |

### Captcha

Article de référence : [https://aide.kiubi.com/api-front-forms.html#captcha](https://aide.kiubi.com/api-front-forms.html#captcha)

**Génère un captcha GET**

**/api/v1/forms/{key}/captcha.json**

Génère un nouveau captcha pour un formulaire Dismoi?. L'identifiant api est à récupérer dans la console d'administration ou l'API Developers.

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| key | Obligatoire | string | Identifiant api du formulaire |


```
data:{
 "captcha": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| captcha | string | Question du captcha (vide si reCaptcha est activé) |

## Recherche

### Pages du site web

Article de référence : [https://aide.kiubi.com/api-front-search.html#pages-du-site-web](https://aide.kiubi.com/api-front-search.html#pages-du-site-web)

**Recherche site web GET**

**/api/v1/search/cms/pages.json**

Effectue une recherche dans les pages du site web

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| term | Obligatoire | string | Terme de recherche |
| fields | | array | Liste de champs dans lesquels restreindre la recherche du terme. Parmis les valeurs suivantes : title, subtitle, text1 à text15 |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : page / -pageTri par pagedate / -dateTri selon la date de dernière mise à jour du billet | page / -page | Tri par page | date / -date | Tri selon la date de dernière mise à jour du billet |
| page / -page | Tri par page |
| date / -date | Tri selon la date de dernière mise à jour du billet |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : textsInclut les champs text1 à text15 de chaque billet de page | texts | Inclut les champs text1 à text15 de chaque billet de page |
| texts | Inclut les champs text1 à text15 de chaque billet de page |


```
data:[
 {
 "id": "integer",
 "title": "string",
 "subtitle": "string",
 "group": "string",
 "type": "string",
 "page_title": "string",
 "page_slug": "string",
 "url": "string",
 "is_home": "boolean",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant de la page |
| title | string | Titre du billet |
| subtitle | string | Sous titre du billet |
| group | string | Groupe du billet |
| type | string | Type du billet |
| page_title | string | Titre de la page |
| page_slug | string | Nom optimisé de la page |
| url | string | URL de la page |
| is_home | boolean | Page d'accueil |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |

### Billets du blog

Article de référence : [https://aide.kiubi.com/api-front-search.html#billets-du-blog](https://aide.kiubi.com/api-front-search.html#billets-du-blog)

**Recherche blog GET**

**/api/v1/search/blog/posts.json**

Effectue une recherche dans les billets du blog

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| term | Obligatoire | string | Terme de recherche |
| fields | | array | Liste de champs dans lesquels restreindre la recherche du terme. Parmis les valeurs suivantes : title, header, content |
| is_pinned | | boolean | Billets épinglés |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : date / -dateTri selon la date de création du billettitle / -titleTri par titre de billetcategory / -categoryTri selon l'intitulé de la categorieauthor / -authorTri selon l'auteur du billet | date / -date | Tri selon la date de création du billet | title / -title | Tri par titre de billet | category / -category | Tri selon l'intitulé de la categorie | author / -author | Tri selon l'auteur du billet |
| date / -date | Tri selon la date de création du billet |
| title / -title | Tri par titre de billet |
| category / -category | Tri selon l'intitulé de la categorie |
| author / -author | Tri selon l'auteur du billet |


```
data:[
 {
 "id": "integer",
 "title": "string",
 "type": "string",
 "is_pinned": "boolean",
 "header": "string",
 "has_comments_open": "boolean",
 "comments_count": "integer",
 "content": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "excerpt": "string",
 "author": "string",
 "slug": "string",
 "url": "string",
 "permalink": "string",
 "category_id": "integer",
 "category_slug": "string",
 "category_name": "string",
 "category_url": "string",
 "publication_date": "string",
 "publication_date_f": "string",
 "publication_date_timestamp": "integer"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du billet |
| title | string | Titre du billet |
| type | string | Type du billet |
| is_pinned | boolean | Billet épinglé |
| header | string | Chapô |
| has_comments_open | boolean | Commentaires ouverts |
| comments_count | integer | Nombre de commentaires |
| content | string | Contenu du billet |
| thumbFacultatif | object | Illustration |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| excerpt | string | Accroche |
| author | string | Auteur |
| slug | string | Nom optimisé |
| url | string | Chemin du billet |
| permalink | string | URL canonique du billet |
| category_id | integer | Identifiant de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| category_name | string | Nom de la catégorie |
| category_url | string | URL de la catégorie |
| publication_date | string | Date de publication |
| publication_date_f | string | Date de publication formatée |
| publication_date_timestamp | integer | Timestamp de la date de publication |

### Produits du catalogue

Article de référence : [https://aide.kiubi.com/api-front-search.html#produits-du-catalogue](https://aide.kiubi.com/api-front-search.html#produits-du-catalogue)

**Recherche catalogue GET**

**/api/v1/search/catalog/products.json**

Effectue une recherche dans les produits du catalogue

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| term | | string | Terme de recherche |
| price_min | | float | Prix minimum des produits |
| price_max | | float | Prix maximum des produits |
| category_id | | array | Identifiants de catégories |
| tags | | array | Liste de tags |
| types | | array | Types de produits |
| fields | | array | Liste de champs dans lesquels restreindre la recherche du terme. Parmis les valeurs suivantes : name, header, description, brand_name, text1 à text15 |
| availability_start_month | | integer | Date de début de disponibilité |
| availability_end_month | | integer | Date de fin de disponibilité |
| limit | | integer | Nombre d'éléments par page (valeur par défaut : 20, maximum : 20) |
| page | | integer | Numéro de la page à récupérer. La numérotation démarre à 0 (valeur par défaut) |
| sort | | array | Ordres de tri parmis les critères suivants : price / -priceTri selon le prix du produitname / -nameTri selon l'intitulé du produitrate / -rateTri selon la note moyenne du produitdate / -dateTri selon la date de disponibilité du produitspotlight / -spotlightTri les produits vedette | price / -price | Tri selon le prix du produit | name / -name | Tri selon l'intitulé du produit | rate / -rate | Tri selon la note moyenne du produit | date / -date | Tri selon la date de disponibilité du produit | spotlight / -spotlight | Tri les produits vedette |
| price / -price | Tri selon le prix du produit |
| name / -name | Tri selon l'intitulé du produit |
| rate / -rate | Tri selon la note moyenne du produit |
| date / -date | Tri selon la date de disponibilité du produit |
| spotlight / -spotlight | Tri les produits vedette |
| extra_fields | | array | Inclut des données supplémentaires à la réponse, parmis les suivantes : textsInclut les champs text1 à text15 de chaque produitprice_labelLabel des prix dans la devise du site | texts | Inclut les champs text1 à text15 de chaque produit | price_label | Label des prix dans la devise du site |
| texts | Inclut les champs text1 à text15 de chaque produit |
| price_label | Label des prix dans la devise du site |


```
data:[
 {
 "id": "integer",
 "type": "string",
 "name": "string",
 "slug": "string",
 "excerpt": "string",
 "header": "string",
 "description": "string",
 "is_virtual": "boolean",
 "is_spotlight": "boolean",
 "is_discounted": "boolean",
 "rate": "float",
 "price_min_ex_vat": "float",
 "price_min_inc_vat": "float",
 "price_max_ex_vat": "float",
 "price_max_inc_vat": "float",
 "price_base_ex_vat": "float",
 "price_base_inc_vat": "float",
 "price_min_ex_vat_label": "string",
 "price_min_inc_vat_label": "string",
 "price_max_ex_vat_label": "string",
 "price_max_inc_vat_label": "string",
 "price_base_ex_vat_label": "string",
 "price_base_inc_vat_label": "string",
 "variants_count": "integer",
 "comments_count": "integer",
 "bought_count": "integer",
 "views_count": "integer",
 "soldout_count": "integer",
 "tags": "string",
 "url": "string",
 "category_id": "integer",
 "category_name": "string",
 "category_slug": "string",
 "category_url": "string",
 "brand_id": "integer",
 "brand_name": "string",
 "media_id": "integer",
 "media_extension": "string",
 "thumb": {
 "id": "integer",
 "title": "string",
 "description": "string",
 "url": "string",
 "url_miniature": "string",
 "url_vignette": "string",
 "url_g_miniature": "string",
 "url_g_vignette": "string"
 },
 "availability_date": "string",
 "availability_date_f": "string",
 "availability_date_timestamp": "integer",
 "text1": "string",
 "text2": "string",
 "text3": "string",
 "text4": "string",
 "text5": "string",
 "text6": "string",
 "text7": "string",
 "text8": "string",
 "text9": "string",
 "text10": "string",
 "text11": "string",
 "text12": "string",
 "text13": "string",
 "text14": "string",
 "text15": "string"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du produit |
| type | string | Type du produit |
| name | string | Intitulé du produit |
| slug | string | Nom optimisé du produit |
| excerpt | string | Accroche du produit |
| header | string | Chapô du produit |
| description | string | Description du produit |
| is_virtual | boolean | Produit virtuel |
| is_spotlight | boolean | Produit vedette |
| is_discounted | boolean | Produit en promotion |
| rate | float | Note moyenne |
| price_min_ex_vat | float | Prix minimal HT |
| price_min_inc_vat | float | Prix minimal TTC |
| price_max_ex_vat | float | Prix maximal HT |
| price_max_inc_vat | float | Prix maximal TTC |
| price_base_ex_vatFacultatif | float | Prix non remisé HT pour les produits en promotion |
| price_base_inc_vatFacultatif | float | Prix non remisé TTC pour les produits en promotion |
| price_min_ex_vat_labelFacultatif | string | Prix minimal HT formaté |
| price_min_inc_vat_labelFacultatif | string | Prix minimal TTC formaté |
| price_max_ex_vat_labelFacultatif | string | Prix maximal HT formaté |
| price_max_inc_vat_labelFacultatif | string | Prix maximal TTC formaté |
| price_base_ex_vat_labelFacultatif | string | Prix non remisé HT formaté pour les produits en promotion |
| price_base_inc_vat_labelFacultatif | string | Prix non remisé TTC formaté pour les produits en promotion |
| variants_count | integer | Nombre de variantes |
| comments_count | integer | Nombre d'évaluations |
| bought_count | integer | |
| views_count | integer | |
| soldout_count | integer | |
| tags | string | Tags |
| url | string | URL du produit |
| category_id | integer | Identifiant de la catégorie |
| category_name | string | Nom de la catégorie |
| category_slug | string | Nom optimisé de la catégorie |
| category_url | string | URL de la catégorie |
| brand_idFacultatif | integer | Identifiant de la marque |
| brand_nameFacultatif | string | Nom de la marque |
| media_idFacultatif | integer | Identifiant de l'illustration principale du produit |
| media_extensionFacultatif | string | Extension de l'illustration principale |
| thumbFacultatif | object | Illustration principale |
| id | integer | Identifiant du media |
| titleFacultatif | string | Nom |
| descriptionFacultatif | string | Description |
| url | string | URL du média |
| url_miniature | string | URL de la miniature |
| url_vignette | string | URL de la vignette |
| url_g_miniature | string | URL de la grande miniature |
| url_g_vignette | string | URL de la grande vignette |
| availability_date | string | Date de disponibilité |
| availability_date_f | string | Date de disponibilité formatée |
| availability_date_timestamp | integer | Timestamp de la date de disponibilité |
| text1Facultatif | string | Champ texte1 |
| text2Facultatif | string | Champ texte2 |
| text3Facultatif | string | Champ texte3 |
| text4Facultatif | string | Champ texte4 |
| text5Facultatif | string | Champ texte5 |
| text6Facultatif | string | Champ texte6 |
| text7Facultatif | string | Champ texte7 |
| text8Facultatif | string | Champ texte8 |
| text9Facultatif | string | Champ texte9 |
| text10Facultatif | string | Champ texte10 |
| text11Facultatif | string | Champ texte11 |
| text12Facultatif | string | Champ texte12 |
| text13Facultatif | string | Champ texte13 |
| text14Facultatif | string | Champ texte14 |
| text15Facultatif | string | Champ texte15 |

## Préférences

### Configurations des services

Article de référence : [https://aide.kiubi.com/api-front-prefs.html#configurations-des-services](https://aide.kiubi.com/api-front-prefs.html#configurations-des-services)

**Préferences du blog GET**

**/api/v1/prefs/blog.json**

Retourne les préferences du blog : commentaires blog ouverts, commentaires blog anonymes, captcha commentaire blog


```
data:{
 "has_comments_open": "boolean",
 "has_comments_anonymous": "boolean",
 "has_captcha": "boolean",
 "is_active": "boolean"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| has_comments_open | boolean | Autorisation des nouveaux commentaires |
| has_comments_anonymous | boolean | Autorisation des commentaires anonymes |
| has_captcha | boolean | Protection des commentaires par captcha |
| is_active | boolean | Activation du blog |

**Préferences du catalogue GET**

**/api/v1/prefs/catalog.json**

Retourne les préferences du catalogue : devise, la configuration du prix (HT ou TTC), exoneration TVA, commentaires catalogue ouverts, commentaires catalogue anonymes, captcha commentaire catalogue, vente en ligne activée


```
data:{
 "currency": "string",
 "base_price": "string",
 "default_vat_rate": "float",
 "has_duty_free": "boolean",
 "has_comments_open": "boolean",
 "has_comments_anonymous": "boolean",
 "has_captcha": "boolean",
 "has_ecommerce": "boolean",
 "is_active": "boolean"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| currency | string | devise du catalogue |
| base_price | string | Base d'affichage des prix. Les valeurs possibles sont : HT, TTC |
| default_vat_rate | float | Taux de tva par défaut |
| has_duty_free | boolean | Exoneration de TVA |
| has_comments_open | boolean | Autorisation des nouveaux commentaires |
| has_comments_anonymous | boolean | Autorisation des commentaires anonymes |
| has_captcha | boolean | Protection des commentaires par captcha |
| has_ecommerce | boolean | Activation de la vente en ligne |
| is_active | boolean | Activation du catalogue |

**Préferences de la médiatheque GET**

**/api/v1/prefs/medias.json**

Retourne les tailles d'image de la médiatheque


```
data:{
 "g_vignette_width": "integer",
 "g_vignette_height": "integer",
 "vignette_width": "integer",
 "vignette_height": "integer",
 "g_miniature_width": "integer",
 "g_miniature_height": "integer",
 "miniature_width": "integer",
 "miniature_height": "integer"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| g_vignette_width | integer | Largeur des grandes vignettes en pixel |
| g_vignette_height | integer | Hauteur des grandes vignettes en pixel |
| vignette_width | integer | Largeur des vignettes en pixel |
| vignette_height | integer | Hauteur des vignettes en pixel |
| g_miniature_width | integer | Largeur des grandes miniatures en pixel |
| g_miniature_height | integer | Hauteur des grandes miniatures en pixel |
| miniature_width | integer | Largeur des miniatures en pixel |
| miniature_height | integer | Hauteur des miniatures en pixel |

**Préferences du site GET**

**/api/v1/prefs/site.json**

Retourne les préferences du site


```
data:{
 "site_name": "string",
 "site_excerpt": "string",
 "site_description": "string",
 "site_logo_url": "string",
 "is_contact_page_active": "boolean",
 "company_name": "string",
 "company_address": "string",
 "company_zipcode": "string",
 "company_city": "string",
 "company_country": "string",
 "company_phone": "string",
 "company_mobile": "string",
 "company_fax": "string",
 "theme": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| site_name | string | Nom du site |
| site_excerpt | string | Accroche |
| site_description | string | Description |
| site_logo_urlFacultatif | string | Logo |
| is_contact_page_active | boolean | Activation de la page de contact |
| company_name | string | Nom de la société du propriétaire du site |
| company_address | string | Adresse du propriétaire du site |
| company_zipcode | string | Code postal du propriétaire du site |
| company_city | string | Ville du propriétaire du site |
| company_country | string | Pays du propriétaire du site |
| company_phone | string | Téléphone du propriétaire du site |
| company_mobile | string | Téléphone mobile du propriétaire du site |
| company_fax | string | Numéro de fax du propriétaire du site |
| theme | string | Code du theme utilisé par le site |

### Géographie

Article de référence : [https://aide.kiubi.com/api-front-prefs.html#geographie](https://aide.kiubi.com/api-front-prefs.html#geographie)

**Liste les pays GET**

**/api/v1/geo/countries.json**


```
data:[
 {
 "id": "integer",
 "name": "string",
 "code": "string",
 "group_id": "integer",
 "group_name": "string"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du pays |
| name | string | Nom du pays |
| code | string | Code ISO du pays |
| group_id | integer | Identifiant du groupe |
| group_name | string | Nom du groupe |

**Détail d'un pays (code iso) GET**

**/api/v1/geo/countries/{code}.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| code | Obligatoire | string | Code du pays sur 2 caractères |


```
data:{
 "id": "integer",
 "name": "string",
 "code": "string",
 "group_id": "integer",
 "group_name": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du pays |
| name | string | Nom du pays |
| code | string | Code ISO du pays |
| group_id | integer | Identifiant du groupe |
| group_name | string | Nom du groupe |

**Détail d'un pays GET**

**/api/v1/geo/countries/{country_id}.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| country_id | Obligatoire | integer | Identifiant numérique du pays |


```
data:{
 "id": "integer",
 "name": "string",
 "code": "string",
 "group_id": "integer",
 "group_name": "string"
}
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du pays |
| name | string | Nom du pays |
| code | string | Code ISO du pays |
| group_id | integer | Identifiant du groupe |
| group_name | string | Nom du groupe |

**Liste les départements d'un pays GET**

**/api/v1/geo/countries/{country_id}/departements.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| country_id | Obligatoire | integer | Identifiant numérique du pays |


```
data:[
 {
 "id": "integer",
 "name": "string",
 "code": "string",
 "region_id": "integer"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant du département |
| name | string | Nom du département |
| code | string | Code du département |
| region_id | integer | Identifiant de la région |

**Liste les régions d'un pays GET**

**/api/v1/geo/countries/{country_id}/regions.json**

Paramètres supportés par ce endpoint :

| Nom | Type | Description |
| --- | --- | --- |
| country_id | Obligatoire | integer | Identifiant numérique du pays |


```
data:[
 {
 "id": "integer",
 "name": "string"
 }
]
```

| Nom | Type | Description |
| --- | --- | --- |
| id | integer | Identifiant de la région |
| name | string | Nom de la région |

### Quota

Article de référence : [https://aide.kiubi.com/api-front-prefs.html#quota](https://aide.kiubi.com/api-front-prefs.html#quota)

**Quota de requêtes disponibles GET**

**/api/v1/rate.json**

Retourne le quota de requêtes disponibles pour l'IP du client. Ne consomme pas le quota.
