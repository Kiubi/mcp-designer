## Page de fermeture

La page de fermeture est la page qui est affichée si le site est fermé :

- par manque de crédit
- volontairement via les Préférences de la console d'administration
- pendant les périodes de maintenance de la plateforme

#### Répertoire

<pre class="path">
<span style="color:#bbb">theme/fr/</span>modules/fermeture/fermeture.html
</pre>

#### Exemple du code source

	<!DOCTYPE html>
	<html>
	<head>
	  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	  <meta name="keywords" content="{metaKeywords}">
     <title>{site_nom} est actuellement ferm&eacute; !</title>
	</head>
	<body>
	  <h1>{site_nom} est actuellement fermé !</h1>
	  <a href="{acces_front}">Acc&eacute;der au site</a>
	</body>
	</html>

#### Balises disponibles

Toutes les balises globales sont disponibles, en plus de la balise `{acces_front}`
qui affiche le lien vers le formulaire d'identification permettant l'accès aux
sites de démonstrations ou protégés par login/mot de passe.


