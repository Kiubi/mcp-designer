## Fil d'Ariane

Le chemin de navigation, ou fil d'Ariane, est une aide à la navigation sous
forme de signalisation de la localisation de l'internaute dans le site Internet.
Il se présente généralement sous la forme :

Accueil / Catalogue / Nom de la catégorie / Nom du produit

Le chemin de navigation est construit automatiquement par Kiubi, les intitulés
des éléments qu'il affiche ne sont donc pas tous personnalisables. Chaque
service aura son propre intitulé :

 - Site web : Accueil / Nom de la page
 - Blog : Accueil / Blog / Nom de la catégorie
 - Catalogue : Accueil / Catalogue / Nom de la catégorie / Nom du produit
 - E-commerce : Accueil / Etape de la commande
 - Gestion de comptes : Accueil / Gestion de comptes
 - Contact : Accueil / Contact

L'intitulé et l'adresse du Blog et du Catalogue dans le fil d'arianne sont personnalisables dans les Préférences de la console d'administration.

Par défaut, ce module est affiché via l'include `{FILE "/fr/includes/chemin.html"}`
 dans les templates principaux du site. 

**Cet include contient la balise** `{MODULE.cms/chemin}` **utilisée pour appeler le module**.

#### Répertoire

<pre class="path">
<span style="color:#bbb">theme/fr/</span>modules/chemin/index.html
</pre>

#### Exemple du code source

	<a href="{baseLangue}/" title="Accueil">Accueil</a> /
	<!-- BEGIN:page -->
	<a href="{lien}" title="{page}" target="{cible}">{page}</a>
	<!-- BEGIN:separateur --> / <!-- END:separateur -->
	<!-- END:page-->

#### Balises disponibles

#### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché.
    └── page     // Le contenu du bloc s'affiche pour chaque page du chemin.
        └── separateur     // Le contenu du bloc s'affiche tout le temps sauf pour la dernière page du chemin
```
#### Balises 

Bloc|Balise|Description
---|---|---
| page | page | Intitulé de la page. |
| page | cible | Cible du lien (attribut target). |
| page | lien | URL du lien vers la page correspondante. |
| page | type | Type de la page. Affiche page pour une page libre, lien_ext pour un lien externe, lien_int pour un lien interne et ne renvoie aucune valeur pour un séparateur. |
| page | compteur | La balise affiche un compteur commençant à 1 et qui est incrémenté de 1 à chaque page. |




