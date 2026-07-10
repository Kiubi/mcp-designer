##  Includes

Un include permet d'inclure le contenu d'un fichier HTML dans n'importe quel
autre tempalte.

### Principe de fonctionnement

Pour utiliser un include, il suffit d'indiquer le chemin du fichier que vous
voulez inclure sous la forme :

	{FILE "/fr/includes/date.html"}

Tous les includes de Kiubi sont regroupés dans le répertoire `/theme/fr/includes/`.
 Un include est généralement utilisé pour inclure à différents endroits des bouts
de code qui reviennent de manière récurrente.

Par exemple, dans les modèles de mise en pages de Kiubi, le copyright en bas de
page est inclus grâce à la balise : 

	{FILE "/fr/includes/copyright.html"}
	
Le widget Fragment de template permet d'ajouter des includes directement via la gestion de la mise en page de la console
d'administration de Kiubi, sans passer par l'édition d'un template principal.
 

