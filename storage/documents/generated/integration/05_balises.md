## Balises

Les balises de Kiubi sont de petits codes que vous pouvez inclure un peu partout
et qui servent à afficher toutes les informations que vous avez saisies à l'aide
de votre console d'administration dans les pages de votre site. On reconnaît
facilement ces balises car elles sont composées d'un mot entouré d'accolades : `{titre}`.

Kiubi utilise des ensembles de fichiers HTML (des templates) pour
mettre en forme votre site. Ils composent le squelette du site. Les balises
servent à donner vie au squelette en indiquant à Kiubi où injecter exactement le
titre de la page, le contenu des billets, la date de création du dernier billet
de votre blog, etc. Elles sont pour ainsi dire omniprésentes. Tous les templates ont besoin
 de balises pour fonctionner et vous pouvez également saisir certaines balises 
 dans les éditeurs de texte visuels (éditeurs "Wysiwyg").

Il existe trois grandes familles de balises :

- les balises globales sont utilisables partout (modèles graphiques, éditeurs de
texte visuels, champs d'information, etc.)
- les balises des modèles de mise en pages qui ne fonctionnent que dans les
templates principaux
- les balises des widgets qui ne fonctionnent que dans leur widget

### Exemple d'utilisation d'une balise

Prenons un exemple d'un template tel qu'on pourrait en trouver dans
les sous-répertoires de `/fr/template/`.

	<head>
		<meta name="keywords" content="{metaKeywords}" />
		<meta name="description" content="{metaDescription}" />
		<title>{title}</title>
	</head>

On voit ici que le titre de la page, la description et les mots clés de l'entête
du fichier HTML sont définis à l'aide de balises et seront remplis
automatiquement avec les valeurs configurées dans la console d'administration.

**Une balise utilisée dans un widget, n'est pas forcément utilisable dans un autre ou dans tous les widgets. A chaque widget ses balises !** 




