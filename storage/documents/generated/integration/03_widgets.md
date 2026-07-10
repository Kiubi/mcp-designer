##  Widgets

Les Widgets de Kiubi forment la base des différents modules fonctionnels qui
composent le site Internet. Dans la gestion de la Mise en page, chaque Widget peut
être glissé/déposé dans une zone d'une page type et configuré selon un certain
nombre de paramètres qui lui sont propres. **Afficher un menu, une liste de
produits ou même un formulaire de contact, tout ceci est possible grâce aux
Widgets**.

Le guide du Webdesigner décrit et explique en
détail les différents paramètres et configurations possibles pour tous les
Widgets. De plus, vous y trouverez toutes les balises disponibles dans les templates des Widgets 
et dans quelles conditions les utiliser. **La compréhension de ces différentes
informations (template + balise + paramètre + configuration) vous permettra de
personnaliser l'intégralité des Widgets de Kiubi.**

### Listes des Widgets

Les widgets sont classés selon leur service et leur type :

##### Site Web

 - [Contenu d'une page](/design-site-web.html#contenus-d-une-page) <span class="badge badge-primary ml-1">Nouveau</span>
 - [Symbole](/design-site-web.html#symbole) <span class="badge badge-primary ml-1">Nouveau</span>
 - [Bloc d'extraits](/design-site-web.html#bloc-d-extrait) 
 - [Menu horizontal](/design-site-web.html#menu-horizontal)
 - [Menu vertical](/design-site-web.html#menu-vertical)
 - [Liste des billets](/design-site-web.html#liste-de-billets) (Anciennement Contenu d'une page libre) <span class="badge badge-secondary ml-1">Déprécié</span>

##### Blog

 - [Derniers billets postés](/design-blog.html#derniers-billets-postes)
 - [Détail d'un billet](/design-blog.html#detail-billet)
 - [Billets les plus commentés](/design-blog.html#billets-les-plus-commentes)
 - [Liens](/design-blog.html#liens)
 - [Liste des billets](/design-blog.html#liste-des-billets)
 - [Liste des commentaires](/design-blog.html#liste-des-commentaires)
 - [Poster un commentaire](/design-blog.html#poster-un-commentaire)
 - [Archives](/design-blog.html#archives)
 - [Catégories](/design-blog.html#categories)
 - [Derniers commentaires postés](/design-blog.html#derniers-commentaires-postes)
 
##### Catalogue

 - [Catégories](/design-catalogue.html#categories)
 - [Tags](/design-catalogue.html#tags)
 - [Liste des catégories](/design-catalogue.html#liste-des-categories)
 - [Liste des produits](/design-catalogue.html#liste-des-produits)
 - [Détail d'un produit](/design-catalogue.html#detail-d-un-produit)
 - [Poster un commentaire](/design-catalogue.html#poster-un-commentaire)
 - [Liste des commentaires](/design-catalogue.html#liste-des-commentaires)
 - [Produits vedettes](/design-catalogue.html#produits-vedettes)
 - [Produits les plus](/design-catalogue.html#produits-les-plus)
 - [Produits également achetés](/design-catalogue.html#produits-egalement-achetes)
 - [Produits associés](/design-catalogue.html#produits-associes)

##### Commandes

 - [Panier](/design-commandes.html#panier)
 - [Détail du panier](/design-commandes.html#detail-du-panier)
 - [Livraison](/design-commandes.html#livraison)
 - [Paiement](/design-commandes.html#paiement)
 - [Validation](/design-commandes.html#validation)

##### Gestion de compte

 - [Identification rapide](/design-comptes.html#identification-rapide)
 - [Identification](/design-comptes.html#identification)
 - [Formulaire d'inscription](/design-comptes.html#formulaire-d-inscription)
 - [Tableau de bord](/design-comptes.html#tableau-de-bord)

##### Modules (Communication)

 - [Dismoi? (générateur de formulaires)](/design-modules.html#dismoi-)
 - [Inscription à la newsletter](/design-modules.html#newsletter)
 - [Syndication du blog](/design-modules.html#syndication)
 - [Formulaire de contact](/design-modules.html#formulaire-de-contact)

##### Recherche

 - [Recherche simple](/recherche.html#recherche-simple)

##### Boite à outils

Ces Widgets permettent de faire de l'inclusion de code et n'ont donc ni de configuration, ni de modèle graphique qui leurs sont propres. 

 - Fragment de code : le code (HTML, CSS, JS, etc.) est éditable dans les paramètres du widget et directement ajouté dans une mise en page, à la position du widget 
 - Fragment de template : le widget liste les fichiers includes disponibles dans le répertoire `theme/fr/includes/` et sont directement ajoutés dans une mise en page, à la position du widget 

### Personnalisé un Widget

Chaque Widget de Kiubi peut être personnalisé de deux manières différentes :

 - Dans tous les cas, en modifiant ses paramètres et sa configuration,
directement dans la console d'administration lors de l'édition du Widget dans la gestion de la mise en page
 -  Dans le cas de l'utilisation d'un thème graphique personnalisé, en modifiant
le template qui le compose.

Si vous utilisez un thème graphique personnalisé, vous pouvez éditer et modifier
le template, c'est-à-dire les fichiers HTML qui composent et
définissent l'apparence d'un Widget. Le paramétrage et la configuration d'un
Widget seront cependant toujours à faire lors de l'édition du Widget dans la
gestion de la mise en page de la console d'administration de Kiubi.

Dans votre espace FTP, tous les Widgets sont regroupés dans le répertoire 
`theme/fr/widgets/` et classés dans leur propre répertoire, selon leur service
(un répertoire par Widget classé dans un répertoire par service).

Chaque répertoire principal d'un Widget contient :

 - un fichier `index.html` structuré de manière différente en fonction du Widget. **Ce fichier** `index.html` **est obligatoire.**
 - un fichier `styles.css` peut être ajouté au Widget afin de contrôler sa mise en forme. Ce fichier est automatiquement 
 chargé dans la balise `<head>` si le widget est présent dans la page. **Ce fichier** `styles.css` **n'est pas obligatoire.**

### Ajouter des templates supplémentaires à un Widget

Un même Widget peut avoir plusieurs templates, c'est-à-dire qu'il peut
avoir plusieurs apparences différentes.

Pour ajouter un templates à un Widget, il suffit de créer un sous-
répertoire au répertoire principal du Widget et d'y copier/coller le fichier
`index.html` (et `styles.css`) correspondant au Widget.

Si les deux fichiers sont présents, ce nouveau modèle graphique utilisera les
deux fichiers.

Si un seul des deux fichiers est présent, ce nouveau modèle graphique utilisera
le fichier présent et complètera par celui présent à la racine du répertoire
principal du Widget.

Il suffit de choisir ensuite le modèle graphique correspondant lors de l'édition
d'un Widget dans la gestion de la mise en page de la console d'administration de
Kiubi.

Il est donc possible, avec le même Widget, d'avoir non seulement plusieurs paramétrages possibles mais en plus, chaque 
Widget peut avoir une infinité d'apparences différentes. **En fonction de son template et de ses paramètres, un même
Widget peut répondre à des usages complètement différents et donc s'adapter parfaitement à vos besoins.**


