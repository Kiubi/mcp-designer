##  Types de billets

Un billet permet d'ajouter du contenu à une page libre du Site web. Chaque
billet peut être considéré comme un paragraphe, un bloc de contenu, pouvant
contenir du texte, des images, des liens, des vidéos, du code HTML, etc. Lors de
l'ouverture d'un site, Kiubi propose plusieurs types de billets différents en exemple.

Chaque type de billet peut être structuré de manière différente et permet
d'intégrer et de présenter du contenu suivant ses besoins.

**Si vous utilisez un thème graphique personnalisé, vous pouvez modifier les types de billets par défaut et créer autant 
de types de billet que souhaité.**

### Principe de fonctionnement

Le principe de fonctionnement d'un type billet du Site web est très simple. Tous
les types de billets de votre site sont regroupés dans le répertoire `theme/fr/billets/`
 de votre espace FTP. Chaque sous-répertoire correspond à
un type de billet.

Un billet est composé, en plus d'une structure HTML de votre choix, d'un maximum
de 17 champs d'information :

 - `titre`
 - `sstitre`
 - `texte1` à `texte15`

Chaque champ peut contenir n'importe quel type de donnée. Par convention (mais
ce n'est pas obligatoire), les champs `texte10` à `texte15` sont utilisés pour
stocker des éléments de la médiathèque (image, fichier, etc.), plus précisément
l'identifiant faisant référence à l'élément de la médiathèque.

Ces champs sont à définir dans le fichier `config.xml` de chaque type de
billet, ce qui permet de générer automatiquement le formulaire de saisie utilisé
dans la console d'administration. **Ce fichier est obligatoire.**

Chaque champ pourrait être par la suite affiché dans le fichier `index.html`
de chaque type de billet ou dans chaque widget affichant des billets, en
fonction de ses besoins. **Ce fichier est obligatoire.**

**Comme tous les éléments de Kiubi, un billet (ou plutôt une liste de billet) 
est affiché grâce à un widget. C'est principalement les widgets "Contenu de la 
page libre" et "Bloc d'extrait" qui sont utilisés pour afficher les billets dans votre site internet.**

### Le fichier `config.xml`

Ce fichier contient des informations descriptives du type de billet qui seront
utilisée à la fois dans la console d'administration et le site Internet. Il
indique à Kiubi de quels champs est composé le type de billet.

#### Exemple de code source

	<?xml version="1.0" encoding="iso-8859-1"?>
	<type tri="2">
		<desc>Titres, texte et image (à gauche)</desc>
		<listechamps>
			<champ champ="titre" type="text" intitule="Titre"/>
			<champ champ="sstitre" type="text" intitule="Sous-titre" />
			<champ champ="texte10" type="image" intitule="Image" />
			<champ champ="texte1" type="wysiwyg" intitule="Contenu" />
		</listechamps>
	</type>

#### Description

Ce fichier contient une seule balise principale `<type>` qui possède un seul
attribut :

- `tri` : nombre qui sert à définir l'ordre dans le quel vont apparaître les
types de billet dans les listes déroulantes de la console d'administration.

A l'intérieur, une seule balise `<desc>` qui contient la description du type de
billet qui sera repris dans la console d'administration.

La balise `<listechamps>` sert à déclarer tous les champs qui seront utilisés dans
ce type de billet.

Il existe alors une balise `<champ>` par champ qui contient les attributs suivants :

- `champ` : code du champ qui sera aussi utilisé dans les templates : `titre`,
`sstitre`, `texte1` à `texte15`.
- `type` : le type du champ indique quelle sorte d'information est stockée dans
le champ.
- `intitule` : intitulé du champ qui va être repris dans la console
d'administration dans le formulaire de saisie d'un billet.

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
L'attribut `value` doit **obligatoirement avoir une valeur** (un simple espace `value=" "` est possible). Pour
les champs de type `checkbox`, la valeur affichée dans le site est la concanénation de toutes les `value` sélectionnées, 
séparées par le caractère `|` (par exemple `Valeur1|Valeur3`).

Le label n'est affiché que dans le détail du billet dans la console d'administration.

Afin de faciliter l'utilisation des champs de type `date` et `datetime`, il est prévu d'utiliser le filtre `date` suivi
de l'information à extraire, comme par exemple :

    Le {texte5|date|jour_semaine} {texte5|date|num_jour} {texte5|date|mois} à {texte5|date|heure}h{texte5|date|minute}

Si `texte5` contient la valeur `06/12/2022 15:12:35`, le site affichera :

    Le dimanche 06 novembre 2022 à 15h12

Si la date est invalide ou que le valeur du champ est vide, ce filtre affiche toujours une chaine vide.


### Template d'un type de billet

Le fonctionnement détaillé du template d'un type de billet ainsi que la liste 
exhaustives de ses balises sont accessibles dans la [documentation des balises du 
service CMS](/design-site-web.html#type-de-billet).

### Ajouter un nouveau type de billet

Pour ajouter un type de billet, il suffit de créer un nouveau sous-répertoire au
répertoire `theme/fr/billets/` et d'y copier les fichiers `config.xml` et `index.html` 
correspondant à votre nouveau type de billet. Le nouveau type de
billet sera alors automatiquement proposé dans le service Site web de la console
d'administration.

### Types de billets du Blog

Les types de billet du blog fonctionnent selon le même principe que les billets du Site web mais **uniquement pour ajouter des informations complémentaires aux billets du Blog**.

Contrairement aux types de billets du Site web, les types de billets du blog ne déterminent pas le template du billet, mais seulement si des champs `texte1` et `texte15` sont ajoutés au billet.

Le principe de configuration des types de billets du Blog est le même que pour les billets du Site web, mais avec les différences suivantes :

- les types de billets du blog sont regroupés dans le répertoire `theme/fr/billets_blog/`
- il n'y a pas de champs `titre` et `sstitre`, seuls les champs `texte1` et `texte15` sont disponibles
- seul le fichier `config.xml` est disponible, les templates sont dans le répertoire `theme/fr/widgets/blog/`, en fonction des widgets utilisés


