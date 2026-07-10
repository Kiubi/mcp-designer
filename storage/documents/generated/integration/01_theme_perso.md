# Généralités

## Personnaliser un thème

Kiubi permet de personnaliser à 100% un site, grâce à son accès aux templates 
de mise en page. Vous pourrez donc personnaliser le design d'un site.
Aucune limitation graphique particulière n'est imposée !

Kiubi vous permettent d'intégrer une ligne graphique réalisée sur mesure pour 
un site Internet. Cependant, comme tout système destiné à créer des sites 
professionnels et respectueux des standards du Web, concevoir un thème graphique 
sur mesure requiert la maîtrise du HTM, des CSS et du Javascript, **un thème graphique 
personnalisé est donc réservé aux utilisateurs expérimentés !**

### Activer le thème graphique personnalisé

Pour créer un thème graphique personnalisé, rendez-vous dans la rubrique Thèmes graphiques de la Console
d'administration. Par défaut, un des thèmes graphiques 
fournis en standard par Kiubi (appelé thème graphique par défaut) est utilisé. 
Il suffit de cliquer sur le bouton <kbd class="kbd kbd-btn">Passer en thème personnalisé</kbd> et 
de compléter et valider le formulaire. Dès cet instant, le thème graphique 
personnalisé a été créé et initialisé à partir du thème par défaut choisi.

Vous pouvez vous connecter à votre espace FTP avec les informations fournis dans
la rubrique Thèmes graphiques pour accéder à l'intégralité des fichiers du thème graphique. 
Une fois connecté à votre espace FTP, deux répertoires sont disponibles :

- le répertoire `mediatheque` : nécessaire à la Médiathèque pour y publier
des fichiers de plus de 7Mo.
- le répertoire `theme` : **contenant les fichiers de votre thème graphique
personnalisé**

### Déclarer un thème graphique

Afin de déclarer un thème graphique personnalisé, il est indispensable de bien
configurer les fichiers suivants :

- `illustration.jpg` : Image d'illustration du thème graphique personnalisé
destinée à être affichée dans la gestion des thèmes afin d'identifier plus
facilement le thème en question. Il est recommandé d'utiliser une image de 300px
par 225px.
- `theme.xml` : Ce fichier contient des informations descriptives du thème
graphique. **Il est indispensable pour déclarer le thème graphique personnalisé.**

### Le fichier `theme.xml`

	<?xml version="1.0" encoding="iso-8859-1"?>
	<theme img="illustration.jpg" intitule="Thème d'exemple" javascripts="none">
		<auteur nom="Exemple" contact="contact@example.org" site="www.example.org" />
	</theme>

Ce fichier contient une seule balise principale `<theme>` qui possède 5 attributs :

 - `img` : nom du fichier image qui est utilisé dans la console d'administration
pour représenter ce modèle (correspond au fichier image nommé ci-dessus),
 - `intitule` : intitule du thème qui est affiché dans la console
d'administration,
 - `style` : le style du thème (moderne, classique, etc...),
 - `version` : la version du thème qui est affiché dans la console
d'administration,
 - `date` : la date de la dernière mise à jour du thème.
 - `javascripts` : contrôle l'inclusion par défaut de bibliothèques
javascript dans les templates. Indiquer `kiubi` pour inclure les scripts utilisés par
les thèmes par défaut ou `none` pour désactiver cette fonctionnalité.

A l'intérieur, nous avons une seule balise `<auteur>` qui permet d'ajouter des
informations sur l'auteur du thème. Cette balise contient les attributs suivants :

 - `nom` : le nom de l'auteur qui est affiché dans la console d'administration,
 - `contact` : l'email de l'auteur,
 - `site` : l'adresse du site internet de l'auteur.

### L'arborescence des fichiers

L'arborescence d'un thème graphique personnalisé contenu dans le répertoire 
`theme` de votre espace FTP est organisée de la sorte :

<pre class="arbo" style="overflow-x:auto;">
fr/                                       <b>Répertoire de langue</b>
&#x251C;&#x2500;&#x2500; assets/                               <b>Répertoire des ressources</b>
&#x2502;   &#x251C;&#x2500;&#x2500; css/                              Chaque répertoire correspond à un type, de ressources 
&#x2502;   &#x251C;&#x2500;&#x2500; fonts/                            hors contenu de la médiathèque
&#x2502;   &#x251C;&#x2500;&#x2500; img/
&#x2502;   &#x2514;&#x2500;&#x2500; js/
&#x251C;&#x2500;&#x2500; billets/                              <b>Répertoire des types de billets</b>
&#x2502;   &#x251C;&#x2500;&#x2500; image/                            Chaque répertoire correspond à un type de billet et
&#x2502;   &#x251C;&#x2500;&#x2500; jumbotron/                        contient ses propres fichiers                   
&#x2502;   &#x2514;&#x2500;&#x2500; simple/
&#x2502;       &#x251C;&#x2500;&#x2500; config.xml 
&#x2502;       &#x251C;&#x2500;&#x2500; index.html 
&#x2502;       &#x2514;&#x2500;&#x2500; styles.css
&#x251C;&#x2500;&#x2500; billets_blog/                         <b>Répertoire des types de billets du blog</b>
&#x2502;   &#x2514;&#x2500;&#x2500; simple/
&#x2502;       &#x2514;&#x2500;&#x2500; config.xml
&#x251C;&#x2500;&#x2500; compostants/                          <b>Répertoire des types de composants</b>
&#x2502;       &#x2514;&#x2500;&#x2500; galerie/                      Chaque répertoire correspond à un type de
&#x2502;           &#x251C;&#x2500;&#x2500; config.xml                composant
&#x2502;           &#x2514;&#x2500;&#x2500; index.html
&#x251C;&#x2500;&#x2500; includes/                             <b>Répertoire des fichiers includes</b>
&#x251C;&#x2500;&#x2500; layouts/                              <b>Répertoire des layouts</b>
&#x2502;       &#x251C;&#x2500;&#x2500; 4_4_4.html
&#x2502;       &#x251C;&#x2500;&#x2500; 4_8.html
&#x2502;       &#x251C;&#x2500;&#x2500; 6_6.html
&#x2502;       &#x2514;&#x2500;&#x2500; 8_4.html
&#x251C;&#x2500;&#x2500; modules/                              <b>Répertoire des modules</b>
&#x2502;   &#x251C;&#x2500;&#x2500; 404/                              Chaque répertoire correspond à un module et contient 
&#x2502;   &#x251C;&#x2500;&#x2500; chemin/                           ses propres fichiers
&#x2502;   &#x2514;&#x2500;&#x2500; fermeture/              
&#x251C;&#x2500;&#x2500; produits/                             <b>Répertoire des types de produits</b>
&#x2502;   &#x2514;&#x2500;&#x2500; simple/                           Chaque répertoire (ici <em>simple</em>) correspond à un
&#x2502;       &#x251C;&#x2500;&#x2500; config.xml                    type de produit et contient ses propres fichiers
&#x2502;       &#x2514;&#x2500;&#x2500; index.html
&#x251C;&#x2500;&#x2500; symboles/                             <b>Répertoire des modèles de symboles</b>
&#x2502;       &#x2514;&#x2500;&#x2500; defaut/                       Chaque répertoire correspondant à un template
&#x2502;           &#x251C;&#x2500;&#x2500; desc.xml                  de symbole.
&#x2502;           &#x251C;&#x2500;&#x2500; index.html
&#x2502;           &#x2514;&#x2500;&#x2500; structure.xhtml
&#x251C;&#x2500;&#x2500; templates/                            <b>Répertoire des templates principaux</b>
&#x2502;   &#x251C;&#x2500;&#x2500; barre_laterale/                   Chaque répertoire correspondant à un template principal  
&#x2502;   &#x251C;&#x2500;&#x2500; sans_barre_lateral/               du thème et contient ses propres fichiers           
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; desc.xml                      
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; index.html
&#x2502;   &#x2502;   &#x251C;&#x2500;&#x2500; structure.xhtml
&#x2502;   &#x2502;   &#x2514;&#x2500;&#x2500; styles.css
&#x2502;   &#x251C;&#x2500;&#x2500; print.css
&#x2502;   &#x2514;&#x2500;&#x2500; styles.css
&#x2514;&#x2500;&#x2500; widgets/                              <b>Répertoire de tous les widgets</b>
    &#x251C;&#x2500;&#x2500; blog/                             <b>Répertoire des widgets du service Blog</b>
    &#x2502;   &#x251C;&#x2500;&#x2500; archives/                     Chaque widget à son propre répertoire principal et 
    &#x2502;   &#x251C;&#x2500;&#x2500; categories                    contient ses propres fichiers.
    &#x2502;   &#x251C;&#x2500;&#x2500; derniers_billets_postes/
    &#x2502;   &#x251C;&#x2500;&#x2500; detail_billet/
    &#x2502;   &#x251C;&#x2500;&#x2500; les_plus_commentes/
    &#x2502;   &#x251C;&#x2500;&#x2500; liens/
    &#x2502;   &#x251C;&#x2500;&#x2500; liste_billets/
    &#x2502;   &#x251C;&#x2500;&#x2500; listes_commentaires/
    &#x2502;   &#x2514;&#x2500;&#x2500; poster_commentaires/
    &#x251C;&#x2500;&#x2500; catalogue/                        <b>Répertoire des widgets du service Catalogue</b>
    &#x2502;   &#x251C;&#x2500;&#x2500; categories/                   Chaque widget à son propre répertoire principal et 
    &#x2502;   &#x251C;&#x2500;&#x2500; liste_categories/             contient ses propres fichiers.
    &#x2502;   &#x251C;&#x2500;&#x2500; listes_commentaires/
    &#x2502;   &#x251C;&#x2500;&#x2500; listes_produits/
    &#x2502;   &#x251C;&#x2500;&#x2500; poster_commentaire/
    &#x2502;   &#x251C;&#x2500;&#x2500; produits_associes/
    &#x2502;   &#x251C;&#x2500;&#x2500; produits_egalement_achetes/
    &#x2502;   &#x251C;&#x2500;&#x2500; produits_plus/
    &#x2502;   &#x251C;&#x2500;&#x2500; produits_vedettes/
    &#x2502;   &#x2514;&#x2500;&#x2500; tags/
    &#x251C;&#x2500;&#x2500; commandes/                        <b>Répertoire des widgets du service Commandes</b>
    &#x2502;   &#x251C;&#x2500;&#x2500; livraison/                    Chaque widget à son propre répertoire principal et 
    &#x2502;   &#x251C;&#x2500;&#x2500; paiement/                     contient ses propres fichiers.
    &#x2502;   &#x251C;&#x2500;&#x2500; panier/
    &#x2502;   &#x2514;&#x2500;&#x2500; panier_detail/
    &#x251C;&#x2500;&#x2500; communication/                    <b>Répertoire des widgets du service Communication</b>
    &#x2502;   &#x251C;&#x2500;&#x2500; contact/                      Chaque widget à son propre répertoire principal et 
    &#x2502;   &#x251C;&#x2500;&#x2500; formulaires/                  contient ses propres fichiers.
    &#x2502;   &#x251C;&#x2500;&#x2500; newsletter/
    &#x2502;   &#x2514;&#x2500;&#x2500; syndication_blog/
    &#x251C;&#x2500;&#x2500; compte/                           <b>Répertoire des widgets du service Compte</b>
    &#x2502;   &#x251C;&#x2500;&#x2500; identification/               Chaque widget à son propre répertoire principal et 
    &#x2502;   &#x251C;&#x2500;&#x2500; identification_rapide/        contient ses propres fichiers.
    &#x2502;   &#x251C;&#x2500;&#x2500; inscription/
    &#x2502;   &#x2514;&#x2500;&#x2500; tableau_bord/
    &#x251C;&#x2500;&#x2500; recherche/                        <b>Répertoire des widgets du service Recherche</b>
    &#x2502;   &#x2514;&#x2500;&#x2500; simple/                       Chaque widget à son propre répertoire principal et 
    &#x2502;                                     contient ses propres fichiers.
    &#x2514;&#x2500;&#x2500; site_web/                         <b>Répertoire des widgets du service Site Web</b>
        &#x251C;&#x2500;&#x2500; bloc_extrait/                 Chaque widget à son propre répertoire principal et  
        &#x2502;   &#x251C;&#x2500;&#x2500; avec_lien_vers_page/      contient ses propres fichiers.
        &#x2502;   &#x251C;&#x2500;&#x2500; sans_image/
        &#x2502;   &#x251C;&#x2500;&#x2500; slideshow/                Chaque widget peut avoir plusieurs templates secondaires
        &#x2502;   &#x251C;&#x2500;&#x2500; index.html                différents (ici : avec_lien_vers_page, sans_image et
        &#x2502;   &#x2514;&#x2500;&#x2500; styles.css                slideshow) contenant leurs propres fichiers correspondant 
        &#x251C;&#x2500;&#x2500; contenu_page_libre/           chacun à un sous-répertoire du répertoire principal 
        &#x251C;&#x2500;&#x2500; menu_h/                       du widget
        &#x2514;&#x2500;&#x2500; menu_v/
illustration.jpg                          <b>Fichier de description et de déclaration du thème</b>
theme.xml                                 Ces fichiers définissent les informations affichées dans la 
                                          gestion des thèmes de la console d'administration.
</pre>


