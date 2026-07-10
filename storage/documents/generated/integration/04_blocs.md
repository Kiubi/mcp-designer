## Blocs

Les blocs sont des portions de HTML encadrés par des codes spécifiques qui vont
pouvoir être affichés ou masqués selon le besoin, et même dupliqués. Ils se
présentent toujours de cette façon :

	<!-- BEGIN:bloc --> <!-- END:bloc -->

Les blocs sont pour la plupart du temps imbriqués dans d'autres blocs. La
documentation ci-après précise toujours dans quel bloc placer tel autre bloc (ou
telle balise).
Si rien n'est précisé c'est qu'il faut au moins placer le bloc
dans le bloc `<!-- BEGIN:main -->` `<!-- END:main -->`.

Voici un exemple de blocs correctement imbriqués :

	<!-- BEGIN:main -->
		<!-- BEGIN:bloc -->
			<!-- BEGIN:bloc2 -->
			<!-- END:bloc2 -->
			<!-- BEGIN:bloc3 -->
			<!-- END:bloc3 -->
		<!-- END:bloc -->
	<!-- END:main -->
L'exemple suivant est faux et amènera à des comportements imprévisibles. **Les blocs `bloc2` et `bloc3` sont mélangés 
l'un dans l'autre, ce qui est incorrect :**

	<!-- BEGIN:main -->
		<!-- BEGIN:bloc2 -->
			<!-- BEGIN:bloc3 -->
			<!-- END:bloc2 -->
		<!-- END:bloc3 --> // cette fermeture de bloc ne devrait pas se trouver ici !!!
	<!-- END:main -->

Certaines balises ne sont accessibles qu'à l'intérieur de blocs spécifiques. Si
c'est le cas, cette documentation le précisera.

**Avertissements :**

- **un même bloc ne peut pas être répété deux fois dans le même fichier**
- **un bloc qui est utilisé dans un widget, n'est pas forcément utilisable dans un autre ou dans tous les widgets, à chaque widget ses blocs**
- **tous les modèles graphiques doivent commencer par `<!-- BEGIN:main -->` et se terminer par `<!--END:main -->` oublier ce bloc est une erreur très courante, pensez à vérifier ce bloc si rien ne s'affiche dans votre site**
- **tout ce qui est en dehors du bloc `<!-- BEGIN:main -->` `<!-- END:main -->` est ignoré par Kiubi**


