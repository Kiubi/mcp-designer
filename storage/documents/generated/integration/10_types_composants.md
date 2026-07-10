##  Type de composant

Un composant permet d'ajouter du contenu à une page ou un symbole du Site web. A 
la différence du billet, un composant inclu une liste d'un ou plusieurs éléments 
appellée "collection".

Un type de composant fonctionne un peu comme un type de billet : il défini un template
ainsi qu'une liste de champs disponibles. Lors de l'ouverture d'un site, Kiubi vous 
propose par défaut un ensemble de composants.

**Si vous utilisez un thème graphique personnalisé, vous pouvez modifier les types de 
composant par défaut et créer des nouveaux types de composant.**

### Principe de fonctionnement

Tous les types de composants de votre site sont regroupés dans le répertoire 
`theme/fr/composants/` de votre espace FTP. Chaque sous-répertoire correspond à
un type de composant.

Un composant est composé, en plus d'une structure HTML de votre choix et d'un fichier
de configuration indiquant les champs spécifiques du composant et ceux de leur collection.
A la différence des types de billets, les noms des champs sont personnalisables. 

Ces champs sont à définir, au besoin, dans le fichier `config.xml` de chaque
type de composant, ce qui permet de générer et d'ajouter automatiquement le
formulaire de saisie correspondant lors de l'édition d'un composant et des éléments
de sa collection dans la console d'administration. **Ce fichier est obligatoire.**

Chaque champ pourrait être par la suite affiché dans le fichier `index.html`
de chaque type de composant ou dans chaque widget affichant des composants, en fonction
de ses besoins. **Ce fichier est obligatoire.**

**Comme tous les éléments de Kiubi, un composant (ou une liste de composant) est affiché 
grâce au widget "Contenu" du service `Site web`.**

### Le fichier `config.xml`

Ce fichier contient des informations descriptives du type de billet qui seront
utilisée à la fois dans la console d'administration et le site Internet. Il
indique à Kiubi de quels champs est composé le type de billet.

#### Exemple de code source

	<?xml version="1.0" encoding="iso-8859-1"?>
	<composant intitule="Mon composant" tri="3">
		<listechamps>
			<champ champ="title" intitule="Titre" type="text" />
			<champ champ="extra_class" intitule="Xtra" type="text" defaut="container-large" aide="Classe supplémentaire"/>
		</listechamps>
		<collection>
			<champ champ="title" intitule="Titre" type="text" />
			<champ champ="image" intitule="Illustration" type="image" aide="Au format 4/3"/>
			<champ champ="description" intitule="Titre" type="wysiwyg" />
		</collection>
	</composant>

#### Description

Ce fichier contient une seule balise principale `<composant>` qui possède deux
attributs :

- `tri` : nombre qui sert à définir l'ordre dans le quel vont apparaître les
types de composants dans les listes déroulantes de la console d'administration.
- `intitule` : description du type de composant dans les listes déroulantes de
 la console d'administration.

La balise `<listechamps>` sert à déclarer tous les champs qui seront utilisés dans
ce composant. Il est possible de déclarer jusqu'à 20 champs en plus du champ
obligatoire `title`.

Il existe alors une balise `<champ>` par champ qui contient les attributs suivants :

- `champ` : code du champ personnalisable qui sera aussi utilisé dans les templates. Limité 
à 40 caractères alphanumériques non accentués et "_".
- `type` : le type du champ indique quelle sorte d'information est stockée dans
le champ.
- `intitule` : intitulé du champ qui va être repris dans la console
d'administration dans le formulaire de saisie d'un billet.
- `defaut` : valeur par défaut qui sera utilisée dans le site si le champ est vide dans la 
console d'administration.
- `aide` : message d'aide à la saisie qui sera affiché dans la console d'administration.

Il existe dix types de champ :

 - `text` : champ de saisie simple
 - `textarea` : champ de saisie multiligne
 - `wysiwyg` : éditeur de texte visuel
 - `image` : fichier image de la médiathèque
 - `fichier` : fichier quelconque de la médiathèque
 - `select` : champ de liste déroulante
 - `color` : couleur hexadécimale
 - `date` : date au format `dd/mm/YYYY`
 - `datetime` : date au format `dd/mm/YYYY hh:mm:ss`
 - `checkbox` : champ de type case à cocher

Les champs de type `select` ou `checkbox` comportent une liste de valeurs qui est construite
de la manière suivante :

	<champ champ="texte2" type="select" intitule="Liste">
	   <option value="Valeur1">Label1</option>
	   <option value="Valeur2">Label2</option>
	   <option value="Valeur3">Label3</option>
	</champ>

Dans cet exemple, le contenu de l'attribut `value` est stocké dans le champ `texte2`.
L'attribut `value` **est obligatoire** (il peut cependant être vide `value=""`). Le label n'est affiché que 
dans le détail du billet dans la console d'administration. Pour les champs de type `checkbox`, la valeur affichée dans 
le site est la concanénation de toutes les `value` sélectionnées, séparées par le caractère `|` (par exemple 
`Valeur1|Valeur3`).

Afin de faciliter l'utilisation des champs de type `date` et `datetime`, il est prévu d'utiliser le filtre `date` suivi
de l'information à extraire, comme par exemple :

    Le {texte5|date|jour_semaine} {texte5|date|num_jour} {texte5|date|mois} à {texte5|date|heure}h{texte5|date|minute}

Si `texte5` contient la valeur `06/12/2022 15:12:35`, le site affichera :

    Le dimanche 06 novembre 2022 à 15h12

Si la date est invalide ou que le valeur du champ est vide, ce filtre affiche toujours une chaine vide.


La balise facultative `<collection>` sert à déclarer tous les champs qui seront utilisés dans la collection
de ce composant. Son fonctionnement est identique  à la balise `<listechamps>`. Si la balise n'est pas déclarée 
dans le fichier `config.xml`, on considère que ce composant n'a pas de collection.


### Template d'un type de composant

Le fonctionnement détaillé du template d'un type de composant ainsi que la liste 
exhaustives de ses balises sont accessibles dans la [documentation des balises du 
service Site web](/design-site-web.html#composant).

### Ajouter un nouveau type de composant

Pour ajouter un type de composant, il suffit de créer un nouveau sous-répertoire
au répertoire `theme/fr/composants` et d'y copier les fichiers `config.xml` et 
`index.html` correspondant à votre nouveau type de composant. Le nouveau type de 
composant sera alors automatiquement proposé dans le service Site web de la console
 d'administration.


