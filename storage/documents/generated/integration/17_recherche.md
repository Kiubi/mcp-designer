## Moteur de recherche

Il est possible d'intégrer un moteur de recherche dans un template principal (ou via un include).

	<div id="search">
	  <form action="{baseLangue}/recherche/{service}/" method="get">
		<table border="0" cellspacing="0" cellpadding="0"><tr>
		  <td><input type="text"></td>
		  <td><input type="submit" value=""></td>
		</tr></table>
	  </form>
	</div>

Le moteur de recherche, à ne pas confondre avec les résultats d'une recherche
(le Widget Recherche simple), permet d'effectuer une recherche dans le
service en cours dans le site Internet. En effet, Kiubi étant multiservices, le
moteur de recherche ne peut pas faire de recherche dans l'intégralité du site
Internet (contenu rédactionnel, blog et catalogue simultanément). La recherche
ne s'effectuera que dans le service actuellement visité par l'internaute.

Exemple : si l'internaute visite le blog et qu'il effectue une recherche, la
recherche ne sera effectuée que dans le contenu du blog. Il en va de même pour
le catalogue de produit et pour le contenu rédactionnel.

La balise `{service}` permet de définir automatiquement le service en cours. Il
est cependant possible de forcer une recherche dans un service particulier en
remplaçant la balise `{service}` par le service concerné :

- `cms` pour le Site web.
- `blog` pour le Blog.
- `catalogue` pour le Catalogue.

Le paramètre `name` du champ de recherche doit impérativement avoir `r` pour
valeur.


