##  Symboles

Un symbole est une fraction de contenu centralisée et indépendante qui possède sa propre
mise en page et qui peux être inséré dans le contenu de plusieurs pages.

Chaque symbole possède un type qui va déterminer ses paramètres, sa mise en page et sa 
structure HTML. Le type de symbole partage beaucoup de caractéristiques communes avec
les templates principaux.  

**Si vous utilisez un thème graphique personnalisé, vous pouvez modifier et créer de types de symboles.**

### Paramètres d'un type de symbole

Une fois connecté à votre espace FTP, tous les types de symboles sont
regroupés dans le répertoire `theme/fr/symboles/`. Chacun de ces sous-
répertoires est un type. Un template contient les fichiers
suivants :

 - `desc.xml` : permet de décrire le type et déclarer les
zones. **Ce fichier est obligatoire**
 - `index.html` : contient le code HTML du type. **Ce fichier
est obligatoire**
 - `structure.xhtml` : permet de définir la structure du type
utilisée dans l'édition d'une page type. Ce fichier n'a aucun lien avec le rendu
du site internet et n'est utilisé que pour la console d'administration. **Ce
fichier est obligatoire**

### Le fichier `desc.xml`

Ce fichier contient des informations descriptives du type. Il
permet principalement de déclarer les zones dans lesquelles pourront
être insérés des Widgets.

#### Exemple de code source

	<?xml version="1.0" encoding="iso-8859-1"?>
	<symbole intitule="3 colonnes" tri="2">
		<listechamps>
			<champ champ="title" type="text" />
			<champ champ="extra_class" type="text" defaut="container-large" aide="Classe supplémentaire" />
		</listechamps>
		<zones defaut="center">
			<zone id="left" colmax="1" intitule="Gauche" defaut="1" type="contenu" />
			<zone id="center" colmax="1" intitule="Centre" defaut="1" type="contenu" />
			<zone id="right" colmax="1" intitule="Droit" defaut="1" type="contenu" />
		</zones>
	</symbole>

#### Description

Ce fichier contient une seule balise principale `<symbole>` qui possède 2 attributs :

 - `tri` : nombre qui sert à définir l'ordre dans le quel vont apparaître les
types de symbole dans les listes déroulantes de la console d'administration.
 - `intitule` : intitule du template qui est utilisé dans la
console d'administration

A l'intérieur, nous avons une seule balise `<zones>` qui contient tout un ensemble
de balises `<zone>`. L'attribut `defaut` permet de désigner la zone dans laquelle
sera placé par défaut tous les contenus ajoutés dans le symbole. La zone désignée est
alors automatiquement considéré comme étant de type "contenu". 

La balise `<zone>` sert à déclarer une zone où vont pouvoir
être inséré les Widgets. **L'id des zones devra être repris dans les fichiers
`structure.xhtml` et `index.html`.**.

Elles contiennent les attributs
suivants :

 - `id` : code alphanumérique qui sera réutilisé pour identifié la zone dans les
fichiers `index.html` et `structure.xhtml`.
 - `colmax` : nombre maximum de colonnes des blocs de présentation qui peuvent
être insérés dans cette zone (de 1 à 3). Les colonnes correspondant sont gérées 
via les fichiers du répertoire `theme/fr/layouts/`
 - `intitule` : intitulé de la zone qui sera repris dans la console
d'administration dans l'édition d'une page type.
 - `defaut` : nombre de colonnes des blocs de présentation insérées par défaut
dans la zone.
 - `type` : si la valeur est "contenu", la zone pourra accepter des billets et
 des composants dans la console d'administration.

La balise `<listechamps>` sert à déclarer tous les champs qui seront utilisés dans
ce symbole. Il est possible de déclarer jusqu'à 20 champs en plus du champ
obligatoire `title`. Le fonctionnement est le même que pour un composant.

### Le fichier `structure.xhml`

Ce fichier est une représentation schématique de la disposition des zones dans
le template (les zones déclarées dans le fichier `desc.xml`).
Il est utilisé pour générer la page d'édition de la mise en page du symbole dans 
la console d'administration. Il n'est en aucun cas utilisé pour effectuer un 
rendu du site Internet.

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


#### Description

Les balises `{ZONE.*}` servent à indiquer où insérer les Widgets. Les noms des
zones sont déclarés dans le fichier `desc.xml`.

### Ajouter un nouveau modèle de symbole

Pour ajouter un nouveau modèle de symbole, il suffit de créer un nouveau
sous-répertoire au répertoire `theme/fr/symboles/` et d'y copier tous les
fichiers correspondant à votre nouveau symbole. Il sera alors automatiquement 
proposé dans l'édition d'un symbole de la console d'administration.


