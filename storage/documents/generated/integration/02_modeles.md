##  Templates principaux

Les templates principaux constituent les squelettes du site
dans lesquels vont s'intégrer les Widgets. Chaque template
contient **une structure HTML complète** qui lui est propre, des feuilles de styles,
des codes javascripts, etc. et également **la position de chaque zone où vont se
placer les Widgets**.

Chaque template peut être utilisé pour configurer une page type dans la rubrique Mises en page de la console d'administration.
Il est donc possible d'utiliser plusieurs templates différents pour personnaliser un site Internet et cela page par page, si nécessaire.

**Si vous utilisez un thème graphique personnalisé, vous pouvez modifier et créer de nouveaux templates.**

### Paramètres d'un template

Une fois connecté à votre espace FTP, tous les templates sont
regroupés dans le répertoire `theme/fr/templates/`. Chacun de ces sous-
répertoires est un template. Un template contient les fichiers
suivants :

 - `desc.xml` : permet de décrire le template et déclarer les
zones. **Ce fichier est obligatoire**
 - `index.html` : contient le code HTML du template. **Ce fichier
est obligatoire**
 - `structure.xhtml` : permet de définir la structure du template
utilisée dans l'édition d'une page type. Ce fichier n'a aucun lien avec le rendu
du site internet et n'est utilisé que pour la console d'administration. **Ce
fichier est obligatoire**

D'autres fichier facultatifs peuvent être présents dans le répertoire `theme/fr/templates/`,
comme par exemples :

- `apple-touch-icon.png`
- `favicon.ico`
- `favicon.png`

### Le fichier `desc.xml`

Ce fichier contient des informations descriptives du template. Il
permet principalement de déclarer les zones du template dans lesquelles pourront
être insérés des Widgets.

#### Exemple de code source

	<?xml version="1.0" encoding="iso-8859-1"?>
	<modele intitule="Modèle par défaut">
	  <zones defaut="contenu">
		<zone id="entete" colmax="1" intitule="Entete" defaut="1"/>
		<zone id="menu" colmax="1" intitule="Menu" defaut="1"/>
		<zone id="sidebar" colmax="1" intitule="Barre latérale" defaut="1" type="contenu"/>
		<zone id="contenu" colmax="3" intitule="Contenu" defaut="1" type="contenu"/>
		<zone id="piedepage" colmax="3" intitule="Pied de page" defaut="1"/>
	  </zones>
	</modele>

#### Description

Ce fichier contient une seule balise principale `<modele>` qui possède 2 attributs :

 - `intitule` : intitule du template qui est utilisé dans la
console d'administration
 - `img` (déprécié) : nom du fichier image qui était utilisé dans la console d'administration
pour représenter ce template.

A l'intérieur, nous avons une seule balise `<zones>` qui contient tout un ensemble
de balises `<zone>`. L'attribut `defaut` permet de désigner la zone dans laquelle
seroont placés par défaut tous les contenus ajoutés dans la page. La zone désignée est
alors automatiquement considérée comme étant de type "contenu". 
                     
La balise `<zone>` sert à déclarer une zone où vont pouvoir
être inséré les Widgets. **L'id des zones devra être repris dans les fichiers
`structure.xhtml` et `index.html`.** 

Elles contiennent les attributs suivants :

 - `id` : code alphanumérique qui sera réutilisé pour identifié la zone dans les
fichiers `index.html` et `structure.xhtml`.
 - `colmax` : nombre maximum de colonnes des blocs de présentation qui peuvent
être insérés dans cette zone (de 1 à 3). Les colonnes correspondant sont gérées 
via les fichiers du répertoire `theme/fr/layouts/`
 - `intitule` : intitulé de la zone qui sera repris dans la console
d'administration dans l'édition d'une page type.
 - `defaut` : nombre de colonnes des blocs de présentation insérées par défaut
dans la zone.
 - `type` : si la valeur est "contenu", la zone pourra accepter des billets, symboles et
 composants dans la console d'administration.

### Le fichier `structure.xhml`

Ce fichier est une représentation schématique de la disposition des zones dans
le template (les zones déclarées dans le fichier `desc.xml`).
Il est utilisé pour générer la page d'édition d'une page type dans la console
d'administration. Il n'est en aucun cas utilisé pour effectuer un rendu du site
Internet.

#### Exemple de code source

	<table>
	  <tr>
		<td colspan="2">{entete}</td>
	  </tr>
	  <tr>
		<td colspan="2">{menu}</td>
	  </tr>
	  <tr>
		<td width="30%">{sidebar}</td>
		<td>{contenu}</td>
	  </tr>
	  <tr>
		<td colspan="2">{piedepage}</td>
	  </tr>
	</table>

#### Description

Les zones sont appelées directement en mettant leurs ID entre accolade.

**Il est obligatoire d'utiliser un code HTML simple, sans script ni style. Seules les balises TABLE, TD et TR sont autorisées.**

### Le fichier `index.html`

Alors que le fichier `structure.xhtml` est une vue abstraite de la page
utilisée seulement dans la console d'administration, le fichier `index.html`
contient le code HTML concret du template qui sera affiché dans le
site Internet.

#### Exemple de code source

```
<!-- BEGIN:main -->
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
  <title>{title}</title>
  <meta name="description" content="{metaDescription}" />
  <meta name="keywords" content="{metaKeywords}" />
  {metaRobots}
  {metaCanonical}
  <!-- Charges les scripts des Options avancées du Back-office -->
  {js_head}
</head>
<body>

<!-- BEGIN:logo_site -->
<h1>
  <a href="{racine}/" title="{accroche_site} - Retour &agrave; l'accueil">
    <img src="{racine}/media/{logo_site}" alt="{accroche_site|htmlentities}" />
  </a>
</h1>
<!-- END:logo_site --> 

<!-- BEGIN:accroche_site-->
<h2><a href="{racine}/" title="{accroche_site|htmlentities}">{accroche_site}</a></h2>
<!-- END:accroche_site--> 

<!-- BEGIN:desc_site-->
<h3>{desc_site}</h3>
<!-- END:desc_site--> 

<div>{ZONE.menu}</div>
<div>{ZONE.contenu}</div>
<div>{ZONE.piedepage}</div>

<!-- Charges les scripts des Options avancées du Back-office --> 
{js_body}
</body>
</html>
<!-- END:main -->
```


#### Description

Les balises `{ZONE.*}` servent à indiquer où insérer les Widgets. Les noms des
zones sont déclarés dans le fichier `desc.xml`.

#### Balises disponibles


|Balise|Description|
|---|---|
| `{metaCanonical}` | Insère la balise `<meta name="canonical">` correspondant à l'url canonique de la page courante |
| `{metaRobots}` | Insère la balise de désindexation automatique des pages sans valeur sémantique comme les résultats de recherche ou les paginations `<meta name="robots" content="noindex, follow">`. |
| `{title}` | Insère le titre de la page `<title>`. A configurer dans "Mon compte / Préférences / Metas par défaut" ou dans les options avancées de la page. |
| `{metaKeywords}` | Insère les mots clés de la page `<meta keywords>`. A configurer dans "Mon compte / Préférences / Metas par défaut" ou dans les options avancées de la page. |
| `{metaDescription}` | Insère la description de la page `<meta description>`. A configurer dans "Mon compte / Préférences / Metas par défaut" ou dans les options avancées de la page. |
| `{modele}` | Affiche le nom du répertoire du modèle de mise en page utilisé. |
| `{service}` | Affiche le code du service en cours. Cette balise sert, par exemple, au moteur de recherche pour qu'il fasse des recherches dans le service en cours.<br />Affiche cms si le service en cours est le Site web, Contact et Gestion de compte.<br />Affiche blog si le service en cours est le Blog.<br />Affiche catalogue si le service en cours est le Catalogue et E-commerce (Commandes). |
| `{js_head}` | Insère du javascript destiné à être exécuté dans la balise `<head>` de la page. A configurer dans "Mon compte / Préférences / Metas par défaut" ou dans les options avancées de la page. |
| `{js_body}` | Insère du javascript destiné à être exécuté juste avant la fermeture de la balise `<body>` de la page. A configurer dans "Mon compte / Préférences / Metas par défaut" ou dans les options avancées de la page. |
| `{Stylesheet}` | Insère les feuilles de styles des Widgets et des modules, si besoin. |
| `{Javascripts}` | Insère les javascripts nécessaires au bon fonctionnement de Kiubi avec d'anciens thèmes par défaut de Kiubi |
| `{ZONE.xxx}` | Insère les Widgets de la zone "xxx" telle qu'ils ont été configurés dans l'édition d'une page type. Les noms (identifiants) des zones sont définis dans le fichier "structure.xhtml" propre au modèle de mise en page. |



	<!-- BEGIN:accroche_site--> <!-- END:accroche_site-->

Le bloc s'affiche si l'option "Afficher le nom" est activée dans
le Bloc-marque des Préférences du site.

	<!-- BEGIN:desc_site--> <!-- END:desc_site-->

Le bloc s'affiche si l'option "Afficher la signature" est activée dans
le Bloc-marque des Préférences du site.

	<!-- BEGIN:logo_site--> <!-- END:logo_site-->

Le bloc s'affiche si l'option "Afficher le logo" est activée dans
le Bloc-marque des Préférences du site.

### Ajouter un nouveau template

Pour ajouter un nouveau template, il suffit de créer un nouveau
sous-répertoire au répertoire `theme/fr/templates/` et d'y copier tous les
fichiers correspondant à votre nouveau template. Le nouveau template sera alors
automatiquement proposé dans l'édition d'une page type de la
console d'administration.


