## Balises globales

Les balises globales sont disponibles et utilisables partout dans Kiubi (modèles
graphiques, éditeurs de texte visuels, champs d'information, ...).

#### Balises de base



|Balise|Description|
|---|---|
| `{racine}` | Indique le chemin relatif vers la racine du site où que l'on soit situé dans l'arborescence. |
| `{lg}` | Indique le code langue courant (toujours fr pour l'instant). Cette balise est également disponible dans les templates d'email |
| `{baseLangue}` | Indique le chemin relatif vers la racine du site dans la langue courante. |
| `{lien_pagecourante}` | URL de la page courante. |
| `{intitule_pagecourante}` | Intitulé de la page courante. |
| `{optim_pagecourante}` | Affiche le nom optimisé de la page courante. Affiche par exmple le nom optimisé du billet dans la page de détail de billet du blog, ou le nom optimisé de la catégorie dans la page de détail d'une catégorie du catalogue.<br /> |
| `{contexte_pagecourante}` | Affiche le contexte de la page courante sous forme d'une liste qui reprends le service, le type et les informations permettant d'identifer l'objet principal de la page. Plus de détails dans la section "Contexte" ci-dessous. |
| `{lien_pageparente}` | URL de la page parente (niveau hiérarchique supérieur dans l'arborescence). |
| `{intitule_pageparente}` | Indique l'intitulé de la page parente. |
| `{accroche_site}` | Affiche l'accroche du site figurant dans "Mon site / Apparence / Bloc-marque". Cette balise est également disponible dans les templates d'email |
| `{desc_site}` | Affiche la description du site figurant dans "Mon site / Apparence / Bloc-marque". Cette balise est également disponible dans les templates d'email |
| `{logo_site}` | Affiche l'identifiant du logo du site figurant dans "Mon site / Apparence / Bloc-marque". Cette balise est également disponible dans les templates d'email |
| `{url_logo_site}` | Affiche l'url du logo du site figurant dans "Mon site / Apparence / Bloc-marque". Cette balise est également disponible dans les templates d'email |
| `{domaine}` | Affiche le nom du domaine courant du site. |
| `{schema}` | Affiche le schéma du site (http ou https). |
| `{site_nom}` | Affiche le nom du site figurant dans "Mon compte / Préférences". Cette balise est également disponible dans les templates d'email |
| `{g_vignette_l}` | Largeur en pixels des grandes vignettes de la médiathèque. |
| `{vignette_l}` | Largeur en pixels des vignettes de la médiathèque. |
| `{g_vignette_h}` | Hauteur en pixels des grandes vignettes de la médiathèque. |
| `{vignette_h}` | Hauteur en pixels des vignettes de la médiathèque. |
| `{g_miniature_l}` | Largeur en pixels des grandes miniatures de la médiathèque. |
| `{miniature_l}` | Largeur en pixels des miniatures de la médiathèque. |
| `{g_miniature_h}` | Hauteur en pixels des grandes miniatures de la médiathèque. |
| `{miniature_h}` | Hauteur en pixels des miniatures de la médiathèque. |
| `{balise}` | Affiche le code d'un balise sans qu'elle ne soit interpretée. Exemple : `{balise|site_nom}` affiche "{site_nom}". |
| `{cdn}` | URL du CDN des ressources statiques de la Plateforme.<br /> |
| `{referer}` | Affiche le referer du navigateur, remplacée par REQUEST.referer |
| `{devise}` | Affiche le devise du site. Cette balise est également disponible dans les templates d'email |
| `{devise_iso}` | Affiche le code iso (3 lettres) de la devise du site. Cette balise est également disponible dans les templates d'email |
| `{theme}` | Affiche le code du thème graphique du site. Le code pour les thèmes graphiques personnalisés est "theme". Cette balise est également disponible dans les templates d'email |
| `{canonical}` | Affiche le chemin canonique de la page en cours |
| `{liste_domaines}` | Liste de tout les noms de domaines du site. |
| `{FILE "fichier.html"}` | Cette balise est très spéciale car elle permet d'inclure un modèle graphique dans le modèle graphique courant. Il suffit pour cela d'indiquer le chemin du modèle graphique que vous voulez inclure. Ce fichier doit se trouver dans le thème courant. <br /><br />Cette balise est souvent utilisée pour inclure à différents endroits des bouts de page qui reviennent de manière récurrente. Par exemple, dans les thèmes Kiubi, le copyright en bas de page est inclus dans toutes les pages grâce à la balise : `{FILE "/fr/includes/copyright.html"}`<br /><br />Cette balise est également disponible dans les templates d'email<br />Attention : cette balise *n'est pas disponible* dans les contenus WYSIWYG.  |
| `{illustration_pagecourante}` | Affiche le chemin vers l'illustration de le page courante. N'affiche rien si aucune illustration n'est disponible. |
| `{illustration_pagecourante_miniature}` | Affiche le chemin vers la miniature de l'illustration de le page courante. N'affiche rien si aucune illustration n'est disponible. |
| `{illustration_pagecourante_vignette}` | Affiche le chemin vers la vignette de l'illustration de le page courante. N'affiche rien si aucune illustration n'est disponible. |
| `{illustration_pagecourante_g_vignette}` | Affiche le chemin vers la grande vignette de l'illustration de le page courante. N'affiche rien si aucune illustration n'est disponible. |
| `{illustration_pagecourante_g_miniature}` | Affiche le chemin vers la grande miniature de l'illustration de le page courante. N'affiche rien si aucune illustration n'est disponible. |


#### Détail de la balise contexte_pagecourante

La balise contexte_pagecourante affiche des valeurs spécifique à la page dans laquelle est utlisée. Son utlisation est particulièrement appréciable avec certains frameworks CSS et Javascript.



|Balise|Description|
|---|---|
| `{/}` | cms cms-accueil |
| `{/[page].html}` | cms cms-page cms-page-[page] |
| `{/blog/}` | blog blog-accueil |
| `{/blog/[categorie]/}` | blog blog-categorie blog-categorie-[categorie] |
| `{/blog/[categorie]/[yyyy]/[mm]/[dd]/}` | blog blog-categorie blog-categorie-[categorie] blog-y-[yyyy] blog-m-[mm] blog-d-[dd] |
| `{/blog/[categorie]/[yyyy]/[mm]/[dd]/[billet].html}` | blog blog-billet blog-billet-[billet] blog-categorie-[categorie] blog-a-[yyyy] blog-m-[mm] blog-j-[dd] |
| `{/catalogue/}` | catalogue catalogue-accueil |
| `{/catalogue/[categorie]/}` | catalogue catalogue-categorie catalogue-categorie-[categorie] |
| `{/catalogue/[categorie]/[tags:]/}` | catalogue catalogue-categorie catalogue-categorie-[categorie] catalogue-tag catalogue-tag-[tag1] catalogue-tag-[tag-2].... |
| `{/catalogue/[categorie]/[produit].html}` | catalogue catalogue-produit catalogue-produit-[produit] catalogue-categorie-[categorie]  |
| `{/compte/[page].html}` | compte compte-[page] |
| `{/contact/}` | contact |
| `{/ecommerce/[page].html}` | ecommerce ecommerce-[page] |
| `{/recherche/[service]/}` | recherche recherche-[service] |


#### Informations société

Les balises ci-dessous sont utilisables dans tous les templates, widgets, contenu wysiwyg et templates d'email.

|Balise|Description|
|---|---|
| `{SOCIETE.contact_nom}` | Affiche le nom du contact principal du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.contact_prenom}` | Affiche le prénom du contact principal du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.contact_email}` | Affiche l'e-mail du contact principal du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.societe_nom}` | Affiche le nom de la société responsable du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.societe_adresse}` | Affiche l'adresse de la société responsable du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.societe_cp}` | Affiche le code postal de la société responsable du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.societe_ville}` | Affiche la ville de la société responsable du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.societe_pays}` | Affiche le pays de la société responsable du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.societe_tel}` | Affiche le numéro de téléphone de la société responsable du site internet figurant dans "Mon compte /Préférences". |
| `{SOCIETE.societe_mobile}` | Affiche le numéro de mobile de la société responsable du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.societe_fax}` | Affiche le numéro de fax de la société responsable du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.societe_cnil}` | Affiche le numéro de déclaration CNIL du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.societe_capital}` | Affiche le capital de la société responsable du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.societe_siret}` | Affiche le numéro siret de la société responsable du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.societe_rcs}` | Affiche le RCS de la société responsable du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.societe_ape}` | Affiche le code APE (ou NAF) de la société responsable du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.societe_tva}` | Affiche le numéro de TVA intracommunautaire de la société responsable du site internet figurant dans "Mon compte / Préférences". |
| `{SOCIETE.societe_forme}` | Affiche la forme juridique de la société responsable du site internet figurant dans "Mon compte / Préférences". |


#### Horodatage

Les balises ci-dessous sont utilisables dans tous les templates, widgets, contenu wysiwyg et templates d'email.

|Balise|Description|
|---|---|
| `{num_jour_maintenant}` | Affiche le numéro du jour courant (01 - 31). |
| `{jour_semaine_maintenant}` | Affiche le jour de la semaine courant (lundi - dimanche). |
| `{num_mois_maintenant}` | Affiche le numéro du mois courant (01 - 12). |
| `{mois_maintenant}` | Affiche le mois courant (janvier - décembre). |
| `{mois_abrev_maintenant}` | Affiche le mois courant abrégé (jan - déc). Il vaut mieux utiliser `{mois_abrev_maintenant}` que<br />`{mois_maintenant|left|3}` car la découpe se fait plus intelligemment pour les mois en quatre lettres. |
| `{annee_maintenant}` | Affiche l'année courante (2007). |
| `{heure_maintenant}` | Affiche l'heure courante (00-23). |
| `{minute_maintenant}` | Affiche les minutes courantes (00-59). |
| `{seconde_maintenant}` | Affiche les secondes courantes (00-59). |
| `{timestamp_maintenant}` | Affiche le timestamp courant |


#### Informations client

Les balises ci-dessous sont utilisables dans tous les templates / widgets et contenu wysiwyg

|Balise|Description|
|---|---|
| `{CLIENT.client_id}` | Affiche l'identifiant interne du client. Requiert que le client soit connecté |
| `{CLIENT.num}` | Affiche le numéro du client. Requiert que le client soit connecté |
| `{CLIENT.nom}` | Affiche le nom du client. Requiert que le client soit connecté |
| `{CLIENT.prenom}` | Affiche le prénom du client. Requiert que le client soit connecté |
| `{CLIENT.genre}` | Affiche le genre ("H" ou "F") du client. Requiert que le client soit connecté |
| `{CLIENT.email}` | Affiche l'email du client. Requiert que le client soit connecté |
| `{CLIENT.pseudo}` | Affiche le pseudo du client. Requiert que le client soit connecté |
| `{CLIENT.web}` | Affiche le site web du client. Requiert que le client soit connecté |
| `{CLIENT.avatar}` | Affiche l'URL de l'avatar du client |
| `{CLIENT.groupe_extranet}` | Affiche le groupe extranet du client |
| `{CLIENT.groupe_extranet_id}` | Affiche l'identifiant numérique du groupe extranet du client |
| `{CLIENT.page_extranet}` | Affiche la page du groupe extranet du client |


#### Balises POST/GET

Les balises ci-dessous sont utilisables dans tous les templates / widgets et contenu wysiwyg

|Balise|Description|
|---|---|
| `{GET.*}` | Affiche la valeur d'un paramètre GET de la page. Exemple : `{GET.id}` affiche la valeur du paramètre GET "id". |
| `{POST.*}` | Affiche la valeur d'un paramètre POST de la page. Exemple : `{POST.id}` affiche la valeur du paramètre POST "id". |
| `{REQUEST.page}` | Affiche le nom de page de l'url courante |
| `{REQUEST.repertoire}` | Affiche le chemin de l'url courante |
| `{REQUEST.url}` | Affiche l'url courante |
| `{REQUEST.domaine}` | Affiche le domaine courant |
| `{REQUEST.referer}` | Affiche le referer du navigateur |


#### API

Les balises ci-dessous fournissent des informations sur l'API Front-office

|Balise|Description|
|---|---|
| `{API.actif}` | Renvoie la chaine "true" si l'api du site est active. "false" dans le cas contraire. |




### Filtres de balises

Kiubi supporte un ensemble de filtres qui peuvent être appliqués aux balises.
Ces filtres ont pour but de changer la valeur de la balise pour mieux répondre à
un besoin précis.

On utilise ces filtres en ajoutant une barre verticale | dans la balise. Exemple : `{balise|filtre}`.

Certains filtres peuvent prendre des arguments, ils seront alors séparés par une
autre barre. Exemple : `{balise|filtre|argument}`.

|Filtre|Description|
|---|---|
| ucfirst | Met en majuscule la première lettre du texte |
| strtoupper | Met en majuscule tout le texte |
| strtolower | Met en minuscule tout le texte |
| rawurlencode | Encode une chaîne en URL selon la [RFC 3986](http://www.ietf.org/rfc/rfc3986.txt). Supporte un argument "utf8" pour encode le résultat en UTF-8. |
| htmlentities | Convertit tous les caractères éligibles en entités HTML. Supporte un argument "utf8" pour encode le résultat en UTF-8 |
| left|x | Tronque le texte à gauche à strictement X caractères. |
| stripText|x | Supprime les balises HTML puis tronque le texte à gauche sur X caractères au plus en conservant les mots entiers |
| mot|x | Affiche le Xème mot du texte |
| mapValue|x|y | Compare la valeur de la balise avec valeurs de références. Affiche X si la valeur est "1", "actif", "checked", "selected" ou "erreur". Affiche Y dans le cas contraire. Exemple si le contenu de la balise `{texte10}` est "actif", `{texte10|mapValue|active}` affiche "active". |
| sanitize | Passe en minuscule,enlève tous les accents d'une chaine de caractères et convertis les espaces en tirets. Les tirets consécutifs sont fusionnés et les tirets finaux sont supprimés. Seuls les lettres, les chiffres et le tiret sont préservés. Exemple si le contenu de la balise `{titre}` est "C'est fin, c'est très fin, ça se mange sans faim !", alors `{titre|sanitize}` affichera "c-est-fin-c-est-tres-fin-ca-se-mange-sans-faim". Ce filtre fonctionne sur des chaines de texte jusqu'à 120 caractères. |
| alternate|x | Associé par exemple à la balise `{compteur}`, affiche de façon cyclique des nombre de 1 à `x`. |
| formatFloat|nb | Formate une valeur décimale brute à `nb` chiffres après la virgule pour la rendre plus lisible en ajoutant un séparateur de milliers et en utilisant la virgule comme séparateur décimal. Un balise qui aurait la valeur "1520.25" sera affichée "1 520,25". |
| empty|x|y | Affiche X si la valeur est vide. Affiche Y dans le cas contraire. Exemple si le contenu de la balise `{texte10}` est vide, `{texte10|empty|vide}` affiche "vide". |
| slice|separator|start|length | Affiche une portion d'un texte qui est segmenté par `separator` (au choix `-` ou `_`). La portion commence à la partie `{start}` du texte, pour une longueur de `{length}` parties. Exemple si le contenu de la balise `{titre}` est "a-b-c-d" : <br/><br />`{titre|slice|-|1}` affiche "b-c-d"<br /><br />`{titre|slice|-|1|2}` affiche "b-c"<br /><br />`{titre|slice|-|-2}` affiche "c-d"<br /><br />Il est également possible de séparer le texte avec des espaces en indiquant `space` comme séparateur. Par exemple : `{titre|slice|space|1|2}` |
| escapejson | Echappe le texte qui peux être utilisé dans une chaine json. |
| date | Extrait des informations d'un champ `date` ou `datetime`. Ce filtre prend un argument obligatoire parmis les suivants :  <br /><br />`{texte10|date|annee}` Affiche l'année courante (2022).<br /><br />`{texte10|date|num_mois}` Affiche le numéro du mois courant (01 - 12).<br /><br />`{texte10|date|num_jour}` Affiche le numéro du jour courant (01 - 31).<br /><br />`{texte10|date|mois}` Affiche le mois courant (janvier - décembre).<br /><br />`{texte10|date|mois_abrev}` Affiche le mois courant abrégé (jan - déc). Il vaut mieux utiliser nov que nov car la découpe se fait plus intelligemment pour les mois en quatre lettres.<br /><br />`{texte10|date|jour_semaine}` Affiche le jour de la semaine courant (lundi - dimanche).<br /><br />`{texte10|date|heure}` Affiche l'heure courante (00-23).<br /><br />`{texte10|date|minute}` Affiche les minutes courantes (00-59).<br /><br />`{texte10|date|seconde}` Affiche les secondes courantes (00-59).<br /><br /><br /><br />Le champ doit contenir une date valide au bon format. Dans le cas contraire le filtre retourne une chaine vide. |


Ainsi `{intitule_pagecourante|strtoupper}` affichera le nom de la page courante en
majuscule. Tandis que `{SOCIETE.societe_cp|left|2}` affichera le numéro de
département extrait du code postal du contact principal du site.


