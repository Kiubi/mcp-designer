##  Types des produits

Un type de produit fonctionne comme un type de billet mais est adapté à votre
catalogue produit. Lors de l'ouverture d'un site, Kiubi vous propose par défaut
un seul type de produit.

Chaque type de produit peut être structuré de manière différente et permet
d'intégrer et de présenter du contenu suivant ses besoins. Contrairement aux
différents types de billet nécessaires au Site Web, il est plus rarement utile
de multiplier les types de produit, un seul type (proposé par défaut) étant bien
souvent suffisant.

**Si vous utilisez un thème graphique personnalisé, vous pouvez modifier le type de produit par défaut et créer des nouveaux types de produit.**

### Principe de fonctionnement

Le principe de fonctionnement d'un type de produit du Catalogue est très simple.
Tous les types de produits de votre site sont regroupés dans le répertoire 
`theme/fr/produits/` de votre espace FTP. Chaque sous-répertoire correspond à
un type de produit.

Un produit peut être composé, en plus d'une structure HTML de votre choix et des
informations spécifiques à un produit (intitulé, chapô, description, variantes,
illustration, ...), d'un maximum de 15 champs d'information supplémentaires (qui
ne sont pas utilisés dans le type de produit par défaut proposé par Kiubi) :

 - `texte1` à `texte15`

Chaque champ peut contenir n'importe quel type de donnée. Par convention (mais
ce n'est pas obligatoire), les champs `texte10` à `texte15` sont utilisés pour
stocker des éléments de la médiathèque (image, fichier, etc.), plus précisément
l'identifiant faisant référence à l'élément de la médiathèque.

Ces champs sont à définir, au besoin, dans le fichier `config.xml` de chaque
type de produit, ce qui permet de générer et d'ajouter automatiquement le
formulaire de saisie correspondant lors de l'édition d'un produit dans la
console d'administration. **Ce fichier est obligatoire.**

Chaque champ pourrait être par la suite affiché dans le fichier `index.html`
de chaque type produit ou dans chaque widget affichant des produits, en fonction
de ses besoins. **Ce fichier est obligatoire.**

Un fichier _styles.css_ peut être ajouté afin de contrôler la mise en forme du
widget `Détail d'un produit`. Ce fichier est automatiquement chargé dans la
balise `<head>` si le widget est présent dans la page. **Ce fichier n'est pas
obligatoire.**

**Comme tous les éléments de Kiubi, un produit (ou une liste de produit) est affiché grâce à un widget. Ce sont 
principalement certains widgets du service** `Catalogue` **qui sont utilisés pour afficher des produits.**

**Le fichier index.html (et styles.css) est exclusivement utilisé par le widget Détail d'un produit.** 

### Le fichier `config.xml`

Ce fichier contient des informations descriptives du type de produit qui seront
utilisée à la fois dans la console d'administration et le site Internet. Il
indique à Kiubi de quels champs d'information supplémentaires est composé le
type de produit. **Ces champs d'information supplémentaires sont facultatifs.**

Le fichier `config.xml` d'un type de produit fonctionne de la même manière que le fichier `config.xml` d'un type de billet.


### Template d'un type de produit

Le fonctionnement détaillé du template d'un type de produit ainsi que la liste 
exhaustives de ses balises sont accessibles dans la [documentation des balises du 
service Catalogue](/design-catalogue.html#detail-d-un-produit).

### Ajouter un nouveau type de produit

Pour ajouter un type de produit, il suffit de créer un nouveau sous-répertoire
au répertoire `theme/fr/produits` et d'y copier les fichiers `config.xml` et 
`index.html` (et `styles.css`) correspondant à votre nouveau type
de produit. Le nouveau type de produit sera alors automatiquement proposé dans
le service Catalogue de la console d'administration.


