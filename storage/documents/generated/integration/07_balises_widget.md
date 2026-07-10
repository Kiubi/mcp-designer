##  Balises des Widgets

Un certain nombre de widgets possèdent des fonctionnalités et des balises
communes.

###  `{alterne}`

La balise `{alterne}` est utilisée dans les widgets qui génèrent des listings
comme par exemple le widget du `Blog / Liste des Billets`. La balise affichera
alternativement 1 ou 2 si on la place dans le bloc qui est répété dans le
widget.

Exemple : le widget `Blog / Liste des Billets` :

	<!--BEGIN:main -->
	<ul>
	<!--BEGIN:billet -->
	<li class="color_{alterne}">{alterne}, {titre}</li>
	<!-- END:billet -->
	</ul>
	<!-- END:main -->

Si on a 5 billets dans son blog, le résultat sera :

<pre markdown="0">
1, Titre du premier billet
2, Titre du deuxième billet
1, Titre du troisième billet
2, Titre du quatrième billet
1, Titre du cinquième billet
</pre>

Cela vous permet, par exemple, d'appeler alternativement l'un ou l'autre style
pour changer la couleur de fond et rendre ainsi vos listings plus lisibles.

Les balises `{alterne_3}`, `{alterne_4}` et `{alterne_5}` sont également disponibles
et renvoient respectivement les valeurs :

<pre markdown="0">
1, 2, 3
1, 2, 3, 4
1, 2, 3, 4, 5
</pre>

###  `{compteur}`

La balise `{compteur}` est utilisée dans les widgets qui génèrent des listings
comme par exemple le widget du `Blog / Liste des commentaires`. La balise
affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois.

Exemple : le widget `Blog / Liste des Billets` :

	<!-- BEGIN:main -->
	<ul>
	<!-- BEGIN:commentaire-->
	  <li>{compteur}. {commentaire}</li>
	<!-- END:commentaire-->
	</ul>
	<!-- END:main -->

Si on a 3 commentaires pour un billet de son blog, le résultat sera :

<pre class="prettyprint">
1. Premier commentaire
2. Deuxième commentaire
3. Troisième commentaire
</pre>

Chaque ligne est numérotée automatiquement.

###  `{intitule}`

Cette fonctionnalité est une association entre un bloc et une balise. Les
widgets pouvant utiliser la fonctionnalité "Intitulé" ont un bloc
supplémentaire à placer dans le bloc `main` :

	<!-- BEGIN:main -->
	  <!-- BEGIN:intitule -->{intitule}<!-- END:intitule -->
	<!-- END:main -->

Le bloc `<!-- BEGIN:intitule -->` `<!-- END:intitule -->` ne s'affiche que si
l'intitulé du widget est rempli. Cet intitulé est paramétrable lors de l'édition
d'un widget dans la gestion de l'Apparence de la Console d'administration de
Kiubi.

###  `{ctl}`

La balise `{ctl}` est présente dans certain widgets qui utilisent un formulaire. Elle
n'a qu'une utilité technique et est présente sous la forme :

	<input type="hidden" name="ctl" value="{ctl}">

**Il ne faut pas la supprimer, sinon le formulaire ne fonctionnera plus !**

###  La navigation

La navigation est une fonctionnalité que l'on retrouve dans les widgets qui
génèrent des listings et dont la configuration permet l'affichage. C'est un
ensemble de blocs qui permet d'afficher des barres de navigations complètes. Les
résultats sont affichés sur plusieurs pages et la navigation permet de passer
d'une page à l'autre.

Les options de navigation (nombre d'élément par page, afficher ou cacher la
navigation) sont toujours configurables dans le widget correspondant.

La barre de navigation comprend :

- des liens vers les pages suivantes et précédentes,
- des liens vers la première et dernière page,
- une liste de numéro de page comprenant un lien pour arriver directement sur la
page en question.

Pour plus de souplesse, il est possible de mettre deux barres de navigation dans
un même widget (une barre en haut et une en bas du listing, par exemple). Les
balises et blocs ci-dessous fonctionnent dans les blocs `<!-- BEGIN: nav1 -->
<!-- END: nav1 -->` et `<!-- BEGIN: nav2 --> <!-- END: nav2 -->`.

Voici un exemple de ce que cela peux donner en HTML :

	<!-- BEGIN: nav1 -->

	<!-- BEGIN: premier -->

	<a href="{lien_premier}">premiere page</a> |

	<!-- END: premier -->

	<!-- BEGIN: precedent -->

	<a href="{lien_precedent}">page precedente</a> |

	<!-- END: precedent -->

	<!-- BEGIN: pages -->

	<a href="{lien_page}" class="{selected}">{page}</a>

	<!-- END: pages -->

	<!-- BEGIN: suivant -->

	| <a href="{lien_suivant}">page suivante</a>

	<!-- END: suivant -->

	<!-- BEGIN: dernier -->

	| <a href="{lien_dernier}">derniere page</a>

	<!-- END: dernier -->

	<!-- END: nav1 -->

	<br />

	<br />

	page {num_page} sur {nb_pages} ({nb_resultats} billets trouvés)<br />

	<br />

	[listing ....]<br />

	<br />

	<!-- BEGIN: nav2 -->

	<!-- BEGIN: premier -->

	<a href="{lien_premier}">premiere page</a> |

	<!-- END: premier -->

	<!-- BEGIN: precedent -->

	<a href="{lien_precedent}">page precedente</a> |

	<!-- END: precedent -->

	<!-- BEGIN: pages -->

	<a href="{lien_page}" class="{selected}">{page}</a>

	<!-- END: pages -->

	<!-- BEGIN: suivant -->

	| <a href="{lien_suivant}">page suivante</a>

	<!-- END: suivant -->

	<!-- BEGIN: dernier -->

	| <a href="{lien_dernier}">derniere page</a>

	<!-- END: dernier -->

	<!-- END: nav2 -->

Ce qui donnera cela :

<pre class="prettyprint">
premiere page | page precedente | 1 2 3 4 5 | page suivante | derniere page

page 2 sur 5 (53 billets trouvés)

[listing ...]

premiere page | page precedente | 1 2 3 4 5 | page suivante | derniere page
</pre>

#### Balises disponibles

#### Arborescence des blocs

```
├── nav1     // Le bloc est affiché si la navigation est active et comporte plusieurs pages.
│   ├── pages     // Le contenu du bloc s'affiche pour chaque page.
│   ├── premier     // Le contenu du bloc s'affiche si on n'est pas sur la première page du listing.
│   ├── dernier     // Le contenu du bloc s'affiche si on n'est pas sur la dernière page du listing.
│   ├── precedent     // Le contenu du bloc s'affiche si on n'est pas sur la première page du listing.
│   └── suivant     // Le contenu du bloc s'affiche si on n'est pas sur la dernière page du listing.
└── nav2     // Le bloc est affiché si la navigation est active et comporte plusieurs pages.
    ├── pages     // Le contenu du bloc s'affiche pour chaque page.
    ├── premier     // Le contenu du bloc s'affiche si on n'est pas sur la première page du listing.
    ├── dernier     // Le contenu du bloc s'affiche si on n'est pas sur la dernière page du listing.
    ├── precedent     // Le contenu du bloc s'affiche si on n'est pas sur la première page du listing.
    └── suivant     // Le contenu du bloc s'affiche si on n'est pas sur la dernière page du listing.
```
#### Balises 

Bloc|Balise|Description
---|---|---
| nav1 | lien_premier | URL vers la première page. |
| nav1 | lien_dernier | URL vers la dernière page. |
| nav1 | nb_pages | Nombre de page du listing. |
| nav1 | nb_resultats | Nombre d'élément dans le listing. |
| nav1 | num_page | Numéro de la page courante. |
| nav2 | lien_premier | URL vers la première page. |
| nav2 | lien_dernier | URL vers la dernière page. |
| nav2 | nb_pages | Nombre de page du listing. |
| nav2 | nb_resultats | Nombre d'élément dans le listing. |
| nav2 | num_page | Numéro de la page courante. |
| pages | lien_page | URL vers la page |
| pages | page | Numéro de la page. |
| pages | selected | Affiche "selected" si la page est la page courante. Sinon n'affiche rien. |
| pages | lien_page | URL vers la page |
| pages | page | Numéro de la page. |
| pages | selected | Affiche "selected" si la page est la page courante. Sinon n'affiche rien. |
| precedent | lien_precedent | URL vers la page précédente. |
| precedent | lien_precedent | URL vers la page précédente. |
| suivant | lien_suivant | URL vers la page suivante. |
| suivant | lien_suivant | URL vers la page suivante. |




