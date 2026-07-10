##  Médiathèque

La Médiathèque de Kiubi permet de gérer les fichiers (images, documents textes,
pdf, sons, vidéos...) que vous allez utiliser pour enrichir le contenu d'un
site. Vous pouvez publier des fichiers **de moins de 7Mo** directement
dans la Médiathèque en passant par la console d'administration. Pour des fichiers **de plus de 7Mo**,
vous devez les publier dans votre espace FTP, dans le répertoire `mediatheque`.

### Accéder à un fichier de la Médiathèque

Tous les fichiers publiés dans la Médiathèque sont stockés dans le répertoire
virtuel `media` et sont identifiés par un numéro identifiant qui leur est
propre. Un fichier de la Médiathèque sera donc accessible à l'adresse :

	http://nom_de_domaine/media/numero_identifiant

Généralement, le numéro identifiant est ajouté automatiquement si le fichier est
inséré directement via la Médiathèque dans une zone de mise en forme de texte ("Wysisyg") ou
dans un champ d'information de type `image` ou `fichier`.

L'adresse d'un fichier est cependant toujours redirigée vers :

	http://nom_de_domaine/media/numero_identifiant/nom_du_fichier.extention_du_fichier
	
Sauf si elle est de la forme :

	http://nom_de_domaine/media/numero_identifiant.extention_du_fichier
	
### Exemple de redirection

L'adresse d'un fichier :

	http://nom_de_domaine/media/402

Sera redirigée vers :

	http://nom_de_domaine/media/402/mon_fichier.pdf
	
Mais il n'y aura pas de redirection si elle est de la forme :

	http://nom_de_domaine/media/402.pdf
	

### Traitement automatique des images

Kiubi permet de générer automatiquement 4 tailles différentes en plus de la
taille d'origine d'une image publiée dans la Médiathèque. Ces tailles sont
configurables dans les Paramètres de la médiathèque des Préférences de la console d'administration :

 - grande vignette, par défaut configurée en 1140px par 1140px
 - vignette, par défaut configurée en 480px par 480px
 - grande miniature, par défaut configurée en 240px par 240px
 - miniature, par défaut configurée en 120px par 120px

Ces différentes tailles d'images sont accessibles aux adresses :

	http://nom_de_domaine/media/g_vignette/numero_identifiant
	http://nom_de_domaine/media/vignette/numero_identifiant
	http://nom_de_domaine/media/g_miniature/numero_identifiant
	http://nom_de_domaine/media/miniature/numero_identifiant

La taille d'origine de l'image restant accessible à l'adresse :

	http://nom_de_domaine/media/numero_identifiant


