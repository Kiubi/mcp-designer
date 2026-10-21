# Exemples de templates Kiubi

## Billet de contenu "Titres et textes"

### Template : `/theme/fr/billets/simple/index.html` 

```html
<!-- 
Template du billet "Titres et texte"

Documentation : https://aide.kiubi.com/design-generalites.html#types-de-billets
-->
<!-- BEGIN: main -->
<section class="section {texte13|mapValue|bg-light|} post-text" id="kiubi-section-{serial}">
  <article class="container bg-transparent {texte9}">
    <div class="row">
      <header class="col-12 post-header"> 
        <!-- BEGIN: sstitre -->
        <h5 class="text-muted text-uppercase mb-1">{sstitre}</h5>
        <!-- END: sstitre --> 
        <!-- BEGIN: titre -->
        <h2 class="m-0">{titre}</h2>
        <!-- END: titre --> 
      </header>
      <!-- BEGIN: texte2 -->
      <div class="col-md post-content lead mt-4">{texte2}</div>
      <!-- END: texte2 --> 
      <!-- BEGIN: texte4 -->
      <div class="col-md post-content lead mt-4">{texte4}</div>
      <!-- END: texte4 -->
      <div class="w-100"></div>
      <!-- BEGIN: texte1 -->
      <div class="col-md post-content mt-4">{texte1}</div>
      <!-- END: texte1 --> 
      <!-- BEGIN: texte3 -->
      <div class="col-md post-content mt-4">{texte3}</div>
      <!-- END: texte3 -->
      <!-- BEGIN: texte5 --> 
      <div class="col-12 mt-4">
        <a href="{texte6}" class="btn btn-primary">{texte5}</a>
      </div>
      <!-- END: texte5 -->
    </div>
  </article>
</section>
<!-- END: main -->
```

### Configuration : `/theme/fr/billets/simple/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du billet "Titres et texte"

Documentation : https://aide.kiubi.com/design-generalites.html#types-de-billets
--> 
<!DOCTYPE type SYSTEM "http://www.kiubi-admin.com/DTD/typesbillets.dtd">
<type tri="1">
  <desc>Titres et textes</desc>
  <listechamps>
    <champ champ="titre" type="text" intitule="Titre" />
    <champ champ="sstitre" type="text" intitule="Sous-titre" />
    <champ champ="texte9" type="select" intitule="Alignement du texte">
      <option value=" ">Par défaut</option>
      <option value="text-center">Au centre</option>
      <option value="text-right">À droite</option>
    </champ>
    <champ champ="texte13" type="select" intitule="Couleur d'arrière-plan">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
    <champ champ="texte5" type="text" intitule="Texte du bouton" />
    <champ champ="texte6" type="text" intitule="Lien du bouton" aide="Indiquer une adresse web vers une page du site ou celle d'un autre site (par exemple https://www.kiubi.com/) :"/>
    <champ champ="texte2" type="wysiwyg" intitule="Chapô principal" />
    <champ champ="texte1" type="wysiwyg" intitule="Contenu principal" />
    <champ champ="texte4" type="wysiwyg" intitule="Chapô secondaire" />
    <champ champ="texte3" type="wysiwyg" intitule="Contenu secondaire" />
  </listechamps>
</type>
```



## Billet de contenu "Titres, texte et image"

### Template : `/theme/fr/billets/image/index.html` 

```html
<!-- 
Template du billet "Titres, texte et image"

Documentation : https://aide.kiubi.com/design-generalites.html#types-de-billets
-->
<!-- BEGIN: main -->
<section class="section {texte13|mapValue|bg-light|} post-text-image" id="kiubi-section-{serial}">
  <article class="container bg-transparent {texte9}">
    <div class="row {texte12|mapValue|align-items-center|}">
      <div class="col-md-8 {texte14|mapValue|col-lg-6|col-lg-7} {texte11|mapValue|ml-md-auto|mr-md-auto} {texte11|mapValue|order-md-2|}">
        <header class="post-header"> 
          <!-- BEGIN: sstitre -->
          <h5 class="text-muted text-uppercase mb-1">{sstitre}</h5>
          <!-- END: sstitre --> 
          <!-- BEGIN: titre -->
          <h2 class="m-0">{titre}</h2>
          <!-- END: titre --> 
        </header>
        <!-- BEGIN: texte2 -->
        <div class="post-content lead mt-4">{texte2}</div>
        <!-- END: texte2 --> 
        <!-- BEGIN: texte1 -->
        <div class="post-content mt-4">{texte1}</div>
        <!-- END: texte1 --> 
        <!-- BEGIN: texte5 --> 
        <a href="{texte6}" class="btn btn-primary mt-4">{texte5}</a> 
        <!-- END: texte5 --> 
      </div>
      <!-- BEGIN: texte10 -->
      <div class="{texte14|mapValue|col-lg-5|col-lg-4} {texte11|mapValue|order-md-1|} col-md-4 mt-4 mt-md-0" data-aos="zoom-in">
        <figure class="figure w-100"><a href="{racine}/media/{texte10}" data-toggle="lightbox" data-title="{titre|htmlentities}" data-footer="{texte4|htmlentities}" data-type="image"><img src="{racine}/media/vignette/{texte10}" alt="{titre|htmlentities}" class="figure-img img-fluid w-100"/></a>
          <figcaption class="figure-caption">{texte4}</figcaption>
        </figure>
      </div>
      <!-- END: texte10 --> 
    </div>
  </article>
</section>
<!-- END: main -->
```

### Configuration : `/theme/fr/billets/image/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du billet "Titres, texte et image"

Documentation : https://aide.kiubi.com/design-generalites.html#types-de-billets
--> 
<!DOCTYPE type SYSTEM "http://www.kiubi-admin.com/DTD/typesbillets.dtd">
<type tri="2">
  <desc>Titres, texte et image</desc>
  <listechamps>
    <champ champ="titre" type="text" intitule="Titre" />
    <champ champ="sstitre" type="text" intitule="Sous-titre" />
    <champ champ="texte9" type="select" intitule="Alignement du texte">
      <option value=" ">Par défaut</option>
      <option value="text-center">Au centre</option>
      <option value="text-right">À droite</option>
    </champ>
    <champ champ="texte13" type="select" intitule="Couleur d'arrière-plan">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
    <champ champ="texte10" type="image" intitule="Image" />
    <champ champ="texte11" type="select" intitule="Position de l'image">
      <option value="1">À gauche</option>
      <option value="0">À droite</option>
    </champ>
    <champ champ="texte12" type="select" intitule="Alignement de l'image">
      <option value="0">En haut</option>
      <option value="1">Au centre</option>
    </champ>
    <champ champ="texte14" type="select" intitule="Taille de l'image">
      <option value="0">Normale</option>
      <option value="1">Grande</option>
    </champ>
    <champ champ="texte4" type="text" intitule="Légende de l'image" />
    <champ champ="texte5" type="text" intitule="Texte du bouton" />
    <champ champ="texte6" type="text" intitule="Lien du bouton" aide="Indiquer une adresse web vers une page du site ou celle d'un autre site (par exemple https://www.kiubi.com/) :"/>
    <champ champ="texte2" type="wysiwyg" intitule="Chapô" />
    <champ champ="texte1" type="wysiwyg" intitule="Contenu" />
  </listechamps>
</type>
```



## Billet de contenu "Jumbotron"

### Template : `/theme/fr/billets/jumbotron/index.html` 

```html
<!-- 
Template du billet "Jumbotron"

Documentation : https://aide.kiubi.com/design-generalites.html#types-de-billets
-->
<!-- BEGIN: main -->
<section class="post-jumbotron" id="kiubi-section-{serial}">
  <div class="{texte14|mapValue||container}">
    <article class="jumbotron {texte13} {texte11|mapValue|jarallax|} py-4 py-md-5" {texte11|mapValue|data-jarallax|} style="<!-- BEGIN: texte10 -->background-image: url({racine}/media/{texte10});<!-- END: texte10 --><!-- BEGIN: texte7 -->height: {texte7};<!-- END: texte7 -->">
      <div class="container {texte9}"> 
        <!-- BEGIN: sstitre -->
        <h2 class="h3 text-uppercase {texte15|mapValue|text-muted|text-light} mb-0">{sstitre}</h2>
        <!-- END: sstitre --> 
        <!-- BEGIN: titre -->
        <h1 class="display-4 {texte8|mapValue|text-serif|} {texte15|mapValue||text-white} mb-0">{titre}</h1>
        <!-- END: titre --> 
        <!-- BEGIN: texte1 -->
        <div class="post-content lead {texte15|mapValue||text-light} my-4">{texte1}</div>
        <!-- END: texte1 --> 
        <!-- BEGIN: texte5 --> 
        <a href="{texte6}" class="btn {texte15|mapValue|btn-primary|btn-light} mt-4">{texte5}</a> 
        <!-- END: texte5 --> 
      </div>
    </article>
  </div>
</section>
<!-- END: main -->
```

### Configuration : `/theme/fr/billets/jumbotron/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du billet "Jumbotron"

Documentation : https://aide.kiubi.com/design-generalites.html#types-de-billets
--> 
<!DOCTYPE type SYSTEM "http://www.kiubi-admin.com/DTD/typesbillets.dtd">
<type tri="3">
  <desc>Jumbotron</desc>
  <listechamps>
    <champ champ="titre" type="text" intitule="Titre" />
    <champ champ="sstitre" type="text" intitule="Sous-titre" />
    <champ champ="texte9" type="select" intitule="Alignement du texte">
      <option value=" ">Par défaut</option>
      <option value="text-center">Au centre</option>
      <option value="text-right">À droite</option>
    </champ>
    <champ champ="texte8" type="select" intitule="Police de caractère du titre">
      <option value="0">Par défaut</option>
      <option value="1">Serif</option>
    </champ>
    <champ champ="texte15" type="select" intitule="Couleur du texte">
      <option value="1">Par défaut</option>
      <option value="0">Claire</option>
    </champ>
    <champ champ="texte13" type="select" intitule="Couleur d'arrière-plan" aide="La couleur par défaut assombrie également l'image d'arrière-plan :">
      <option value="dark-overlay">Par défaut</option>
      <option value="bg-light">Claire</option>
      <option value="bg-dark">Sombre</option>
      <option value="bg-white">Blanche</option>
      <option value="bg-secondary">Secondaire</option>
      <option value="bg-success">Succès</option>
      <option value="bg-info">Information</option>
      <option value="bg-warning">Attention</option>
      <option value="bg-danger">Danger</option>
      <option value="bg-transparent">Transparent</option>
    </champ>
    <champ champ="texte10" type="image" intitule="Image d'arrière-plan"/>
    <champ champ="texte14" type="select" intitule="Occupe toute la largeur">
      <option value="1">Oui</option>
      <option value="0">Non</option>
    </champ>
    <champ champ="texte11" type="select" intitule="Parallaxe sur l'arrière-plan">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
    <champ champ="texte7" type="text" intitule="Fixer la hauteur" aide="Par exemple, pour fixer la hauteur de composant à 450 pixel, indiquez 450px : "/>
    <champ champ="texte5" type="text" intitule="Texte du bouton" />
    <champ champ="texte6" type="text" intitule="Lien du bouton" aide="Indiquer une adresse web vers une page du site ou celle d'un autre site (par exemple https://www.kiubi.com/) :"/>
    <champ champ="texte1" type="wysiwyg" intitule="Contenu" />
  </listechamps>
</type>
```



## Billet de contenu "Jumbotron avec photo"

### Template : `/theme/fr/billets/jumbotron_photo/index.html` 

```html
<!-- 
Template du billet "Jumbotron avec photo"

Documentation : https://aide.kiubi.com/design-generalites.html#types-de-billets
-->
<!-- BEGIN: main -->
<section class="post-jumbotron-photo" id="kiubi-section-{serial}">
  <article class="{texte14|mapValue||container}">
    <div class="row no-gutters">
      <div class="col-lg {texte11|mapValue|order-lg-2|} jumbotron {texte9} {texte13|mapValue||bg-transparent}">
        <div class="{texte14|mapValue|col-xl-7|col-xl-10} mx-auto"> 
          <!-- BEGIN: sstitre -->
          <h5 class="text-muted text-uppercase mb-2">{sstitre}</h5>
          <!-- END: sstitre --> 
          <!-- BEGIN: titre -->
          <h2 class="h1 mb-4 {texte8|mapValue|text-serif|}">{titre}</h2>
          <!-- END: titre --> 
          <!-- BEGIN: texte1 -->
          <div class="post-content lead my-4">{texte1}</div>
          <!-- END: texte1 --> 
          <!-- BEGIN: texte5 --> 
          <a href="{texte6}" class="btn btn-primary">{texte5}</a> 
          <!-- END: texte5 --> 
        </div>
      </div>
      <!-- BEGIN: texte10 -->
      <div class="col-lg photo {texte11|mapValue|order-lg-1|}" style="background-image: url({racine}/media/g_vignette/{texte10});"><img src="{racine}/media/g_vignette/{texte10}" alt="{sstitre|htmlentities}" class="img-fluid img-cover w-100 h-100 {texte12|mapValue|d-lg-none|}"/></div>
      <!-- END: texte10 --> 
    </div>
  </article>
</section>
<!-- END: main -->
```

### Configuration : `/theme/fr/billets/jumbotron_photo/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du billet "Jumbotron photo"

Documentation : https://aide.kiubi.com/design-generalites.html#types-de-billets
--> 
<!DOCTYPE type SYSTEM "http://www.kiubi-admin.com/DTD/typesbillets.dtd">
<type tri="4">
  <desc>Jumbotron avec photo</desc>
  <listechamps>
    <champ champ="titre" type="text" intitule="Titre" />
    <champ champ="sstitre" type="text" intitule="Sous-titre" />
    <champ champ="texte9" type="select" intitule="Alignement du texte">
      <option value=" ">Par défaut</option>
      <option value="text-center">Au centre</option>
      <option value="text-right">À droite</option>
    </champ>
    <champ champ="texte8" type="select" intitule="Police de caractère du titre">
      <option value="0">Par défaut</option>
      <option value="1">Serif</option>
    </champ>
    <champ champ="texte13" type="select" intitule="Couleur d'arrière-plan">
      <option value="1">Oui</option>
      <option value="0">Non</option>
    </champ>
    <champ champ="texte14" type="select" intitule="Occupe toute la largeur">
      <option value="1">Oui</option>
      <option value="0">Non</option>
    </champ>
    <champ champ="texte5" type="text" intitule="Texte du bouton" />
    <champ champ="texte6" type="text" intitule="Lien du bouton" aide="Indiquer une adresse web vers une page du site ou celle d'un autre site (par exemple https://www.kiubi.com/) :" />
    <champ champ="texte10" type="image" intitule="Image" />
    <champ champ="texte11" type="select" intitule="Position de l'image">
      <option value="1">À gauche</option>
      <option value="0">À droite</option>
    </champ>
    <champ champ="texte12" type="select" intitule="Hauteur de l'image identique au texte">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
    <champ champ="texte1" type="wysiwyg" intitule="Contenu" />
  </listechamps>
</type>
```



## Billet du blog "Billet simple"

### Configuration : `/theme/fr/billets_blog/simple/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du billet "Billet simple"

Documentation : https://aide.kiubi.com/design-generalites.html#types-de-billets
-->
<!DOCTYPE type SYSTEM "http://www.kiubi-admin.com/DTD/typesbillets.dtd">
<type tri="1">
  <desc>Billet simple</desc>
  <listechamps>
  </listechamps>
</type>
```



## Billet du blog "Fichier joint"

### Configuration : `/theme/fr/billets_blog/fichier_joint/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du billet "Fichier joint"

Documentation : https://aide.kiubi.com/design-generalites.html#types-de-billets
-->
<!DOCTYPE type SYSTEM "http://www.kiubi-admin.com/DTD/typesbillets.dtd">
<type tri="2">
  <desc>Fichier joint</desc>
  <listechamps>
    <champ champ="texte10" type="fichier" intitule="Fichier joint" />
  </listechamps>
</type>
```



## Composant "Carrousel"

### Template : `/theme/fr/composants/carrousel/index.html` 

```html
<!--
Template du Composant "Carrousel"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!-- BEGIN:main -->
<section class="composant-carrousel" id="kiubi-section-{serial}">
  <div class="{container|mapValue||container}"> 
    <!-- BEGIN:collection -->
    <div class="owl-carousel" data-owl-margin="0" data-owl-animateout="fadeOut" data-owl-responsive="1-1-1"> 
      <!-- BEGIN:item -->
      <div class="jumbotron {bgcolor|mapValue|dark-overlay|bg-transparent} px-lg-5" style="<!-- BEGIN:bgimage -->background-image: url({bgimage});<!-- END:bgimage --> height: {height};">
        <div class="container {textalign}"> 
          <!-- BEGIN:subheading -->
          <h2 class="h3 mb-0 {textcolor|mapValue||text-white}">{subheading}</h2>
          <!-- END:subheading --> 
          <!-- BEGIN:title -->
          <h1 class="display-4 mb-0 {textfont|mapValue|text-serif|} {textcolor|mapValue||text-white}">{title}</h1>
          <!-- END:title --> 
          <!-- BEGIN:content -->
          <div class="post-content lead my-4 {textcolor|mapValue||text-light}">{content}</div>
          <!-- END:content --> 
          <!-- BEGIN:button --><a href="{link}" class="btn {textcolor|mapValue|btn-primary|btn-light}">{button}</a> <!-- END:button --> 
        </div>
      </div>
      <!-- END:item -->
    </div>
    <!-- END:collection --> 
    <!-- BEGIN:empty --> 
    <!-- END: empty --> 
  </div>
</section>
<!-- END:main -->
```

### Configuration : `/theme/fr/composants/carrousel/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du composant "Carrousel"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!DOCTYPE composant SYSTEM "http://www.kiubi-admin.com/DTD/composants.dtd">
<composant intitule="Carrousel" tri="1">
  <listechamps>
    <champ champ="title" intitule="Titre" type="text" aide="Le titre n'est pas affiché dans le site web mais permet d'identifier le composant dans la console d'administration :"/>
    <champ champ="container" type="select" intitule="Occupe toute la largeur">
      <option value="1">Oui</option>
      <option value="0">Non</option>
    </champ>
    <champ champ="height" type="text" intitule="Fixer la hauteur" defaut="450px" aide="Par exemple, pour fixer la hauteur de composant à 450 pixel, indiquez 450px : "/>
  </listechamps>
  <collection>
    <champ champ="title" intitule="Titre" type="text" />
    <champ champ="subheading" intitule="Sous-titre" type="text" />
    <champ champ="textalign" type="select" intitule="Alignement du texte">
      <option value=" ">Par défaut</option>
      <option value="text-center">Au centre</option>
      <option value="text-right">À droite</option>
    </champ>
    <champ champ="textfont" type="select" intitule="Police de caractère du titre">
      <option value="0">Par défaut</option>
      <option value="1">Serif</option>
    </champ>
    <champ champ="textcolor" type="select" intitule="Couleur du texte">
      <option value="1">Par défaut</option>
      <option value="0">Claire</option>
    </champ>
    <champ champ="bgcolor" type="select" intitule="Couleur d'arrière-plan" aide="Ajouter une couleur assombrie également l'image d'arrière-plan :">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
    <champ champ="bgimage" type="image" intitule="Image d'arrière-plan" />
    <champ champ="button" type="text" intitule="Texte du bouton" />
    <champ champ="link" type="text" intitule="Lien du bouton" aide="Indiquer une adresse web vers une page du site ou celle d'un autre site (par exemple https://www.kiubi.com/) :"/>
    <champ champ="content" type="wysiwyg" intitule="Contenu" />
  </collection>
</composant>
```



## Composant "Services"

### Template : `/theme/fr/composants/services/index.html` 

```html
<!--
Template du Composant "Services"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!-- BEGIN:main -->
<section class="section {bgcolor|mapValue|bg-light|} composant-services grille" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:collection -->
    <div class="row bg-transparent"> 
      <!-- BEGIN:item -->
      <div class="col-md-6 col-xl {textalign} mb-4">
        <!-- BEGIN:image -->
        <div class="img-square rounded-circle overflow-hidden mb-4 mx-auto"><img src="{image}" alt="{title|htmlentities}"/></div>
        <!-- END:image --> 
        <!-- BEGIN:icon --><i class="fe fe-{icon} text-primary mb-4"></i><!-- END:icon --> 
        <!-- BEGIN:title -->
        <h5 class="mb-4">{title}</h5>
        <!-- END:title --> 
        <!-- BEGIN:content -->
        <div class="post-content text-muted">{content}</div>
        <!-- END:content --> 
        <!-- BEGIN:button --><a href="{link}" class="btn btn-sm btn-primary mt-4">{button}</a><!-- END:button --> 
      </div>
      <!-- END:item --> 
    </div>
    <!-- END:collection --> 
    <!-- BEGIN:empty --> 
    <!-- END: empty --> 
  </div>
</section>
<!-- END:main -->
```

### Configuration : `/theme/fr/composants/services/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du composant "Services"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!DOCTYPE composant SYSTEM "http://www.kiubi-admin.com/DTD/composants.dtd">
<composant intitule="Services" tri="2">
  <listechamps>
    <champ champ="title" type="text" intitule="Titre" aide="Le titre n'est pas affiché dans le site web mais permet d'identifier le composant dans la console d'administration :"/>
    <champ champ="textalign" type="select" intitule="Alignement du texte">
      <option value=" ">Par défaut</option>
      <option value="text-center">Au centre</option>
      <option value="text-right">À droite</option>
    </champ>
    <champ champ="bgcolor" type="select" intitule="Couleur d'arrière-plan">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
  </listechamps>
  <collection>
    <champ champ="title" type="text" intitule="Titre"/>
    <champ champ="icon" type="text" intitule="Icône" aide="Ajouter une icône de https://feathericons.com/ (exemple : check) :"/>
    <champ champ="image" type="image" intitule="Image"/>
    <champ champ="button" type="text" intitule="Texte du bouton" />
    <champ champ="link" type="text" intitule="Lien du bouton" aide="Indiquer une adresse web vers une page du site ou celle d'un autre site (par exemple https://www.kiubi.com/) :" />
    <champ champ="content" type="wysiwyg" intitule="Texte"/>
  </collection>
</composant>
```



## Composant "Bouton"

### Template : `/theme/fr/composants/bouton/index.html` 

```html
<!-- 
Template du composant "Bouton"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!-- BEGIN: main -->
<div class="section {bgcolor} composant-bouton" id="kiubi-section-{serial}">
  <div class="container d-flex flex-column flex-md-row align-items-center {textalign}"> 
    <!-- BEGIN: legend -->
    <h4 class="mb-0 {legendcolor|mapValue||text-white}">{legend}</h4>
    <span class="mx-3 my-md-0 my-3"></span> 
    <!-- END: legend --> 
    <!-- BEGIN: title --> 
    <a href="{link}" target="{target}" class="btn {btnsize} {btncolor}">{title}</a> 
    <!-- END: title --> 
    <!-- BEGIN:collection --> 
    <!-- BEGIN:item --> 
    <!-- END:item --> 
    <!-- END:collection --> 
    <!-- BEGIN:empty --> 
    <!-- END: empty --> 
  </div>
</div>
<!-- END: main -->
```

### Configuration : `/theme/fr/composants/bouton/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du composant "Bouton"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!DOCTYPE composant SYSTEM "http://www.kiubi-admin.com/DTD/composants.dtd">
<composant intitule="Bouton" tri="3">
  <listechamps>
    <champ champ="title" type="text" intitule="Texte du bouton" defaut="En savoir plus"/>
    <champ champ="link" type="text" intitule="Lien du bouton" defaut="#" aide="Indiquer une adresse web vers une page du site ou celle d'un autre site (par exemple https://www.kiubi.com/) :"/>
    <champ champ="target" type="select" intitule="Cible">
      <option value="_self">Même fenêtre</option>
      <option value="_blank">Nouvelle fenêtre</option>
    </champ>
    <champ champ="textalign" type="select" intitule="Position du bouton">
      <option value="flex-row justify-content-between">Par défaut</option>
      <option value="justify-content-center">Centré</option>
      <option value="flex-row-reverse justify-content-between">Intervertir</option>
    </champ>
    <champ champ="btnsize" type="select" intitule="Taille du bouton">
      <option value=" ">Par défaut</option>
      <option value="btn-lg">Grand</option>
      <option value="btn-sm">Petit</option>
    </champ>
    <champ champ="btncolor" type="select" intitule="Couleur du bouton">
      <option value="btn-primary">Principale</option>
      <option value="btn-secondary">Secondaire</option>
      <option value="btn-success">Succès</option>
      <option value="btn-info">Information</option>
      <option value="btn-warning">Attention</option>
      <option value="btn-danger">Danger</option>
      <option value="btn-link">Sans couleur</option>
    </champ>
    <champ champ="legend" type="text" intitule="Texte de légende" />
    <champ champ="legendcolor" type="select" intitule="Couleur du texte de légende">
      <option value="1">Par défaut</option>
      <option value="0">Claire</option>
    </champ>
    <champ champ="bgcolor" type="select" intitule="Couleur d'arrière-plan">
      <option value=" ">Par défaut</option>
      <option value="bg-light">Claire</option>
      <option value="bg-dark">Sombre</option>
      <option value="bg-white">Blanche</option>
      <option value="bg-secondary">Secondaire</option>
      <option value="bg-success">Succès</option>
      <option value="bg-info">Information</option>
      <option value="bg-warning">Attention</option>
      <option value="bg-danger">Danger</option>
    </champ>
  </listechamps>
</composant>
```



## Composant "Accordeon"

### Template : `/theme/fr/composants/accordeon/index.html` 

```html
<!--
Template du Composant "Accordeon"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!-- BEGIN:main -->
<section class="section panel-group {bgcolor|mapValue|bg-light|} composant-accordeon" id="kiubi-section-{serial}">
  <div class="container bg-transparent"> 
    <!-- BEGIN:title -->
    <h2>{title}</h2>
    <!-- END:title --> 
    <!-- BEGIN:collection --> 
    <!-- BEGIN:item -->
    <div class="card border-top-0 border-right-0 border-left-0 rounded-0 bg-transparent">
      <div class="card-header border-0 bg-transparent pl-0" role="tab" id="heading-{position}-{serial}">
        <h5 class="mb-0">
          <button class="btn btn-link btn-lg text-left w-100 px-0 py-2 collapsed" type="button" data-toggle="collapse" data-parent="#kiubi-section-{serial}" href="#collapse-{position}-{serial}" aria-expanded="false" aria-controls="collapse-{position}-{serial}">{title}<i class="fe text-info float-right"></i></button>
        </h5>
      </div>
      <div id="collapse-{position}-{serial}" class="collapse" aria-labelledby="heading-{position}-{serial}" data-parent="#kiubi-section-{serial}">
        <div class="card-body text-muted bg-transparent pl-0 pt-0"> {content} </div>
      </div>
    </div>
    <!-- END:item --> 
    <!-- END:collection --> 
    <!-- BEGIN:empty --> 
    <!-- END: empty --> 
  </div>
</section>
<!-- END:main -->
```

### Configuration : `/theme/fr/composants/accordeon/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du composant "Accordeon"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!DOCTYPE composant SYSTEM "http://www.kiubi-admin.com/DTD/composants.dtd">
<composant intitule="Accordeon" tri="4">
  <listechamps>
    <champ champ="title" type="text" intitule="Titre"/>
    <champ champ="bgcolor" type="select" intitule="Couleur d'arrière-plan">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
  </listechamps>
  <collection>
    <champ champ="title" type="text" intitule="Titre"/>
    <champ champ="content" type="wysiwyg" intitule="Contenu"/>
  </collection>
</composant>
```



## Composant "F.A.Q."

### Template : `/theme/fr/composants/faq/index.html` 

```html
<!--
Template du Composant "FAQ"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!-- BEGIN:main -->
<section class="section {bgcolor|mapValue|bg-light|} composant-faq grille" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:collection -->
    <div class="row"> 
      <!-- BEGIN:item -->
      <div class="col-md-6 mb-4"> 
        <!-- BEGIN: title -->
        <h5>{title}</h5>
        <!-- END: title --> 
        <!-- BEGIN: content -->
        <div class="post-content">{content}</div>
        <!-- END: content --> 
      </div>
      <!-- END:item --> 
    </div>
    <!-- END:collection --> 
  </div>
  <!-- BEGIN:empty --> 
  <!-- END: empty --> 
</section>
<!-- END:main -->
```

### Configuration : `/theme/fr/composants/faq/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du composant "FAQ"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
--> 
<!DOCTYPE composant SYSTEM "http://www.kiubi-admin.com/DTD/composants.dtd">
<composant intitule="F.A.Q." tri="5">
  <listechamps>
    <champ champ="title" intitule="Titre" type="text" aide="Le titre n'est pas affiché dans le site web mais permet d'identifier le composant dans la console d'administration :"/>
    <champ champ="bgcolor" type="select" intitule="Couleur d'arrière-plan">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
  </listechamps>
  <collection>
    <champ champ="title" type="text" intitule="Question ?"/>
    <champ champ="content" type="wysiwyg" intitule="Réponse !"/>
  </collection>
</composant>
```



## Composant "Galerie photos"

### Template : `/theme/fr/composants/galerie/index.html` 

```html
<!-- 
Template du composant "Galerie photos"

Documentation : https://aide.kiubi.com/design-generalites.html#composants

Ce composant est un exemple d'utilisation de l'API front-office de Kiubi, dont vous pouvez trouver la documentation a cette adresse : https://aide.kiubi.com/api-front-office.html
Le client JS : https://github.com/Trolldidees/kiubi-apiPFO-clientJS

La documentation de l'API back-office est quant a elle disponible a cette adresse : https://aide.kiubi.com/api-developers.html (elle n'est pas utiliee dans cet exemple)
Le client PHP : https://github.com/Trolldidees/kiubi-apiDBO-clientPHP

Limite a 20 images affichees simultanement
-->
<!-- BEGIN: main -->
<div class="section {bgcolor|mapValue|bg-light|} composant-galerie grille" id="kiubi-section-{serial}" data-remote-gallery="{apiid}" data-remote-gallery-enable="{API.actif}">
  <div class="container">
    <div class="row" data-remote-gallery-content="{apiid}">
      <!-- BEGIN:collection --> 
      <!-- BEGIN:item -->
      <div class="col-md-6 col-lg-4">
        <div class="card mb-4 border-0">
          <a href="{photo}" data-toggle="lightbox" data-gallery="kiubi-section-{serial}" data-type="image" data-title="{title|htmlentities}" data-footer="{legend|htmlentities}" title="{title|htmlentities}"><img src="{photo_vignette}" alt="{title|htmlentities}" class="img-fluid img-cover w-100 h-100" /></a>
          <div class="card-body">
            <p class="card-text">{title}</p>
            <p class="card-text"><small class="text-muted">{legend}</small></p>
          </div>
        </div>
      </div>
      <!-- END:item --> 
      <!-- END:collection --> 
      <!-- BEGIN:empty --> 
      <!-- END: empty --> 
    </div>
  </div>

  <!-- BEGIN:apiid -->
  <script type="text/x-template">
    <div class="col-md-6 col-lg-4">
      <div class="card mb-4 border-0">
        <a href="<%- url %>" data-toggle="lightbox" data-gallery="kiubi-section-{serial}" data-type="image" data-title="<%- name %>" data-footer="<%- description %>" title="<%- name %>"><img src="<%- vignette %>" alt="<%- name %>" class="img-fluid img-cover w-100 h-100" /></a>
        <div class="card-body">
          <p class="card-text"><%- name %></p>
          <p class="card-text"><small class="text-muted"><%- description %></small></p>
        </div>
      </div>
    </div>
  </script>
  <!-- END:apiid -->

</div>
<!-- END: main -->
```

### Configuration : `/theme/fr/composants/galerie/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du composant "Galerie photos"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!DOCTYPE composant SYSTEM "http://www.kiubi-admin.com/DTD/composants.dtd">
<composant intitule="Galerie photos" tri="6">
  <listechamps>
    <champ champ="title" intitule="Titre" type="text" aide="Le titre n'est pas affiché dans le site web mais permet d'identifier le composant dans la console d'administration :"/>
    <champ champ="apiid" type="text" intitule="Identifiant pour l'API d'un dossier de la médiathèque" aide="Permet d'ajouter automatiquement à la galerie les photos contenues dans un dossier de la médiathèque :"/>
    <champ champ="bgcolor" type="select" intitule="Couleur d'arrière-plan">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
  </listechamps>
  <collection>
    <champ champ="title" type="text" intitule="Titre"/>
    <champ champ="photo" type="image" intitule="Photo"/>
    <champ champ="legend" type="textarea" intitule="Légende"/>
  </collection>
</composant>
```



## Composant "Diaporama photos"

### Template : `/theme/fr/composants/diaporama/index.html` 

```html
<!-- 
Template du composant "Diaporama photos"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!-- BEGIN: main -->
<section class="section {bgcolor|mapValue|bg-light|} composant-diaporama" id="kiubi-section-{serial}">
  <div class="{container|mapValue||container}">
    <div class="diaporama-container {paused|mapValue|diaporama-paused|} {reverse|mapValue|diaporama-reverse|} {gradient|mapValue|gradient|}" style="--diaporama-duration: {duration}s;">
      <!-- BEGIN:collection --> 
        <div class="diaporama-marquee">
        <!-- BEGIN:item -->
        <div class="diaporama-image {size|mapValue|diaporama-image-thumb|}">
          <img src="{image_vignette}" alt="{title|htmlentities}" class="img-fluid w-100" />
          <!-- BEGIN:button -->
          <div class="diaporama-hover-overlay">
            <a href="{link}" title="{button|htmlentities}"></a>
            <a href="{link}" class="btn {size|mapValue|btn-sm|} btn-primary">{button}</a>
          </div>
          <!-- END:button --> 
        </div>
        <!-- END:item --> 
      </div>
        <!-- END:collection --> 
        <!-- BEGIN:empty --> 
        <!-- END: empty --> 
    </div>
  </div>
  <script>

    $(document).ready(function() {
  
      var clonedCollection = $('#kiubi-section-{serial} .diaporama-marquee').clone();
      clonedCollection.attr('aria-hidden','true');
      $('#kiubi-section-{serial} .diaporama-container').append(clonedCollection);
  
    });
  
  </script>  
</section>
<!-- END: main -->
```

### Configuration : `/theme/fr/composants/diaporama/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du composant "Diaporama photos"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!DOCTYPE composant SYSTEM "http://www.kiubi-admin.com/DTD/composants.dtd">
<composant intitule="Diaporama photos" tri="7">
  <listechamps>
    <champ champ="title" type="text" intitule="Titre" aide="Le titre n'est pas affiché dans le site web mais permet d'identifier le composant dans la console d'administration :"/>
    <champ champ="duration" type="text" intitule="Vitesse de défilement" defaut="30" aide="Durée nécessaire, exprimée en seconde, pour que toutes les images défilent au moins une fois :"/>
    <champ champ="reverse" type="select" intitule="Sens de l'animation">
      <option value="0">De droite à gauche</option>
      <option value="1">De gauche à droite</option>
    </champ>
    <champ champ="paused" type="select" intitule="Mettre en pause au survol">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
    <champ champ="size" type="select" intitule="Taille des images">
      <option value="0">Grandes</option>
      <option value="1">Petites</option>
    </champ>
    <champ champ="gradient" type="select" intitule="Ajouter un dégradé">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
    <champ champ="container" type="select" intitule="Occupe toute la largeur">
      <option value="1">Oui</option>
      <option value="0">Non</option>
    </champ>
    <champ champ="bgcolor" type="select" intitule="Couleur d'arrière-plan">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
  </listechamps>
  <collection>
    <champ champ="title" type="text" intitule="Titre"/>
    <champ champ="image" type="image" intitule="Photo"/>
    <champ champ="button" type="text" intitule="Texte du bouton" />
    <champ champ="link" type="text" intitule="Lien du bouton" aide="Indiquer une adresse web vers une page du site ou celle d'un autre site (par exemple https://www.kiubi.com/) :"/>
  </collection>
</composant>
```



## Composant "Chronologie"

### Template : `/theme/fr/composants/chronologie/index.html` 

```html
<!--
Template du Composant "Chronologie"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!-- BEGIN:main -->
<section class="section {bgcolor|mapValue|bg-light|} composant-chronologie {textalign|mapValue|center|left} grille" id="kiubi-section-{serial}">
  <div class="container position-relative"> 
    <!-- BEGIN:collection --> 
      <div class="row flex-column pt-5">
    <!-- BEGIN:item -->
    <div class="col-md-6 chronologie-item bg-transparent mb-5" data-aos="fade-up" data-aos-delay="{position}00"> 
      <!-- BEGIN:title -->
      <h5>{title}</h5>
      <!-- END:title --> 
      <!-- BEGIN:date --> 
      <span class="badge badge-primary mb-4">{date}</span> 
      <!-- END:date --> 
      <!-- BEGIN:content -->
      <div class="post-content text-muted">{content}</div>
      <!-- END:content --> 
    </div>
    <!-- END:item --> </div>
    <!-- END:collection --> 
    <!-- BEGIN:empty --> 
    <!-- END: empty --> 
  </div>
</section>
<!-- END:main -->
```

### Configuration : `/theme/fr/composants/chronologie/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du composant "Chronologie"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
--> 
<!DOCTYPE composant SYSTEM "http://www.kiubi-admin.com/DTD/composants.dtd">
<composant intitule="Chronologie" tri="8">
  <listechamps>
    <champ champ="title" intitule="Titre" type="text" aide="Le titre n'est pas affiché dans le site web mais permet d'identifier le composant dans la console d'administration :"/>
    <champ champ="textalign" type="select" intitule="Alignement du texte">
      <option value="1">Au centre</option>
      <option value="0">À gauche</option>
    </champ>
    <champ champ="bgcolor" type="select" intitule="Couleur d'arrière-plan">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
  </listechamps>
  <collection>
    <champ champ="title" type="text" intitule="Titre"/>
    <champ champ="date" type="text" intitule="Date"/>
    <champ champ="content" type="wysiwyg" intitule="Texte"/>
  </collection>
</composant>
```



## Composant "Aperçu"

### Template : `/theme/fr/composants/apercu/index.html` 

```html
<!--
Template du Composant "Apercu"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!-- BEGIN:main -->
<section class="section {bgcolor|mapValue|bg-light|} {bgcolor|mapValue|dark-overlay|} composant-apercu" <!-- BEGIN:bgimage -->style="background-image: url({bgimage});"<!-- END:bgimage --> id="kiubi-section-{serial}">
  <div class="container">
    <div class="section {textalign}">
      <div class="bg-transparent"> 
        <!-- BEGIN: title -->
        <h2 class="{textcolor|mapValue||text-white} m-0">{title}</h2>
        <!-- END: title --> 
        <!-- BEGIN: content -->
        <div class="post-content lead {textcolor|mapValue||text-light} mt-4">{content}</div>
        <!-- END: content --> 
      </div>
    </div>
<!-- BEGIN:collection -->
    <div class="row grille"> 
      <!-- BEGIN:item -->
      <div class="col-md-4 col-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="{position|alternate|3}00">
        <div class="card w-100"> 
          <!-- BEGIN:image --><a href="{link}"><img src="{image}" alt="{title|htmlentities}" class="card-img-top"/></a><!-- END:image -->
          <div class="card-body"> 
            <!-- BEGIN:title -->
            <h3 class="card-title mb-2 text-primary">{title}</h3>
            <!-- END:title --> 
            <!-- BEGIN:content -->
            <div class="post-content card-text desc">{content}</div>
            <!-- END:content --> 
            <!-- BEGIN:button --><a href="{link}" class="btn btn-primary btn-sm align-self-start mt-4">{button}</a><!-- END:button --> 
          </div>
        </div>
      </div>
      <!-- END:item --> 
    </div>
    <!-- END:collection --> 
    
    <!-- BEGIN:empty --> 
    <!-- END: empty --> 
  </div>
</section>
<!-- END:main -->
```

### Configuration : `/theme/fr/composants/apercu/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du composant "Aperçu"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!DOCTYPE composant SYSTEM "http://www.kiubi-admin.com/DTD/composants.dtd">
<composant intitule="Aperçu" tri="9">
  <listechamps>
    <champ champ="title" type="text" intitule="Titre"/>
    <champ champ="textalign" type="select" intitule="Alignement du texte">
      <option value=" ">Par défaut</option>
      <option value="text-center">Au centre</option>
      <option value="text-right">À droite</option>
    </champ>
    <champ champ="textcolor" type="select" intitule="Couleur du texte">
      <option value="1">Par défaut</option>
      <option value="0">Claire</option>
    </champ>
    <champ champ="bgcolor" type="select" intitule="Couleur d'arrière-plan" aide="Ajouter une couleur assombrie également l'image d'arrière-plan :">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
    <champ champ="bgimage" type="image" intitule="Image d'arrière-plan"/>
    <champ champ="content" type="wysiwyg" intitule="Contenu"/>
  </listechamps>
  <collection>
    <champ champ="title" type="text" intitule="Titre"/>
    <champ champ="image" type="image" intitule="Image"/>
    <champ champ="button" type="text" intitule="Texte du bouton" />
    <champ champ="link" type="text" intitule="Lien" defaut="#" aide="Indiquer une adresse web vers une page du site ou celle d'un autre site (par exemple https://www.kiubi.com/) :"/>
    <champ champ="content" type="wysiwyg" intitule="Contenu"/>
  </collection>
</composant>
```



## Composant "Compte à rebours"

### Template : `/theme/fr/composants/compte_rebours/index.html` 

```html
<!--
Template du Composant "Compte a rebours"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!-- BEGIN:main -->
<section class="section {bgcolor|mapValue|bg-light|} {bgcolor|mapValue|dark-overlay|} composant-compte-rebours" style="<!-- BEGIN:bgimage -->background-image: url({bgimage});<!-- END:bgimage -->" id="kiubi-section-{serial}">
  <div class="container d-flex {textalign}">
    <div> 
      <!-- BEGIN:title -->
      <h2 class="{textcolor|mapValue||text-white}">{title}</h2>
      <!-- END:title --> 
      <!-- BEGIN:content -->
      <div class="post-content lead {textcolor|mapValue||text-light} mb-4">{content}</div>
      <!-- END:content -->
      <div class="d-flex" data-countdown data-date="{countdown}">
        <div class="text-center">
          <div class="h1 font-weight-bolder {countdowncolor} {countdownsize|mapValue||display-4}" data-days></div>
          <div class="{textcolor|mapValue|text-muted|text-light}">Jours</div>
        </div>
        <div class="px-1 px-md-4">
          <div class="h2 font-weight-bolder {countdowncolor} {countdownsize|mapValue||display-4}">:</div>
        </div>
        <div class="text-center">
          <div class="h1 font-weight-bolder {countdowncolor} {countdownsize|mapValue||display-4}" data-hours></div>
          <div class="{textcolor|mapValue|text-muted|text-light}">Heures</div>
        </div>
        <div class="px-1 px-md-4">
          <div class="h2 font-weight-bolder {countdowncolor} {countdownsize|mapValue||display-4}">:</div>
        </div>
        <div class="text-center">
          <div class="h1 font-weight-bolder {countdowncolor} {countdownsize|mapValue||display-4}" data-minutes></div>
          <div class="{textcolor|mapValue|text-muted|text-light}">Minutes</div>
        </div>
        <div class="px-1 px-md-4">
          <div class="h2 font-weight-bolder {countdowncolor} {countdownsize|mapValue||display-4}">:</div>
        </div>
        <div class="text-center">
          <div class="h1 font-weight-bolder {countdowncolor} {countdownsize|mapValue||display-4}" data-seconds></div>
          <div class="{textcolor|mapValue|text-muted|text-light}">Secondes</div>
        </div>
      </div>
      <!-- BEGIN:button --><a href="{link}" class="btn {textcolor|mapValue|btn-primary|btn-light} mt-5">{button}</a><!-- END:button --> 
      <!-- BEGIN:collection --> 
      <!-- BEGIN:item --> 
      <!-- END:item --> 
      <!-- END:collection --> 
      <!-- BEGIN:empty --> 
      <!-- END: empty --> 
    </div>
  </div>
</section>
<!-- END:main -->
```

### Configuration : `/theme/fr/composants/compte_rebours/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du composant "Compte a rebours"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!DOCTYPE composant SYSTEM "http://www.kiubi-admin.com/DTD/composants.dtd">
<composant intitule="Compte à rebours" tri="10">
  <listechamps>
    <champ champ="title" type="text" intitule="Titre"/>
    <champ champ="countdown" type="datetime" intitule="Date du compte à rebours" aide="La date doit être de la forme jj/mm/aaaa hh:mm:ss (exemple : 31/12/2030 12:30:00) :" defaut="31/12/2030 12:30:00"/>
    <champ champ="textcolor" type="select" intitule="Couleur du texte">
      <option value="1">Par défaut</option>
      <option value="0">Claire</option>
    </champ>
    <champ champ="textalign" type="select" intitule="Aligement du texte">
      <option value=" ">Par défaut</option>
      <option value="justify-content-center">Centré</option>
      <option value="justify-content-end">Droite</option>
    </champ>
    <champ champ="countdownsize" type="select" intitule="Taille du compte à rebours">
      <option value="1">Par défaut</option>
      <option value="0">Grande</option>
    </champ>
    <champ champ="countdowncolor" type="select" intitule="Couleur du compte à rebours">
      <option value=" ">Par défaut</option>
      <option value="text-white">Claire</option>
      <option value="text-dark">Sombre</option>
      <option value="text-primary">Principale</option>
      <option value="text-secondary">Secondaire</option>
      <option value="text-success">Succès</option>
      <option value="text-info">Information</option>
      <option value="text-warning">Attention</option>
      <option value="text-danger">Danger</option>
    </champ>
    <champ champ="bgcolor" type="select" intitule="Couleur d'arrière-plan" aide="Ajouter une couleur assombrie également l'image d'arrière-plan :">
      <option value="1">Oui</option>
      <option value="0">Non</option>
    </champ>
    <champ champ="bgimage" type="image" intitule="Image d'arrière-plan"/>
    <champ champ="button" type="text" intitule="Texte du bouton" />
    <champ champ="link" type="text" intitule="Lien du bouton" aide="Indiquer une adresse web vers une page du site ou celle d'un autre site (par exemple https://www.kiubi.com/) :" />
    <champ champ="content" type="wysiwyg" intitule="Contenu"/>
  </listechamps>
</composant>
```



## Composant "Séparateur"

### Template : `/theme/fr/composants/separateur/index.html` 

```html
<!--
Template du Composant "Separateur"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!-- BEGIN:main -->
<div class="section {bgcolor|mapValue|bg-light|} pt-{mt} pb-{mb} composant-divider" id="kiubi-section-{serial}">
 <div class="container">
    <div class="m-auto {style} {container|mapValue||w-25}"></div>
  </div>

  <!-- BEGIN:collection --> 
  <!-- BEGIN:item --> 
  <!-- END:item --> 
  <!-- END:collection --> 
  <!-- BEGIN:empty --> 
  <!-- END: empty --> 
</div>
<!-- END:main -->
```

### Configuration : `/theme/fr/composants/separateur/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du composant "Separateur"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!DOCTYPE composant SYSTEM "http://www.kiubi-admin.com/DTD/composants.dtd">
<composant intitule="Séparateur" tri="11">
  <listechamps>
    <champ champ="title" type="text" intitule="Titre" aide="Le titre n'est pas affiché dans le site web mais permet d'identifier le composant dans la console d'administration :"/>
    <champ champ="style" type="select" intitule="Style">
      <option value="border-simple">Bordure simple</option>
      <option value="border-double">Bordure double</option>
      <option value="border-simple border-dashed">En pointillés</option>
      <option value="border-double border-dashed">En pointillés doubles</option>
      <option value="border-diagonal">En diagonal</option>
      <option value="border-zigzag">En zigzag</option>
      <option value=" ">Aucun effet</option>
    </champ>
    <champ champ="mt" type="select" intitule="Marge avant le diviseur">
      <option value="3">Faible</option>
      <option value="4">Moyenne</option>
      <option value="5">Importante</option>
      <option value="0">Aucune</option>
    </champ>
    <champ champ="mb" type="select" intitule="Marge après le diviseur">
      <option value="3">Faible</option>
      <option value="4">Moyenne</option>
      <option value="5">Importante</option>
      <option value="0">Aucune</option>
    </champ>
    <champ champ="bgcolor" type="select" intitule="Couleur d'arrière-plan">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
    <champ champ="container" type="select" intitule="Occupe toute la largeur">
      <option value="1">Oui</option>
      <option value="0">Non</option>
    </champ>
  </listechamps>
</composant>
```



## Composant "Contenu externe embarqué (embed)"

### Template : `/theme/fr/composants/embed/index.html` 

```html
<!--
Template du Composant "Contenu externe embarque"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!-- BEGIN:main -->
<div class="composant-embed" id="kiubi-section-{serial}">
  <div class="{container|mapValue||container}">
    <div class="embed-responsive embed-responsive-16by9" style="<!-- BEGIN: height -->height: {height};<!-- END: height -->">{iframe}</div>
    <!-- BEGIN:collection --> 
    <!-- BEGIN:item --> 
    <!-- END:item --> 
    <!-- END:collection --> 
    <!-- BEGIN:empty --> 
    <!-- END: empty --> 
  </div>
</div>
<!-- END:main -->
```

### Configuration : `/theme/fr/composants/embed/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du composant "Contenu externe embarque"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!DOCTYPE composant SYSTEM "http://www.kiubi-admin.com/DTD/composants.dtd">
<composant intitule="Contenu externe embarqué (embed)" tri="12">
  <listechamps>
    <champ champ="title" type="text" intitule="Titre" aide="Le titre n'est pas affiché dans le site web mais permet d'identifier le composant dans la console d'administration :"/>
    <champ champ="iframe" type="text" intitule="Objet iframe" aide="Un objet iframe comme une vidéo Youtube, une carte Google Map ou un plugin Facebook :"/>
    <champ champ="container" type="select" intitule="Occupe toute la largeur">
      <option value="1">Oui</option>
      <option value="0">Non</option>
    </champ>
    <champ champ="height" type="text" intitule="Fixer la hauteur" defaut="auto" aide="Par exemple, pour fixer la hauteur de composant à 700 pixel, indiquez 700px : "/>
  </listechamps>
</composant>
```



## Composant "Barre d'annonce"

### Template : `/theme/fr/composants/annonce/index.html` 

```html
<!-- 
Template du composant "Annonce"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!-- BEGIN: main -->
<div class="alert alert-dismissible alert-{bgcolor} d-none composant-annonce" data-cookie="{title|sanitize}" data-annonce-expires="{close|mapValue|30|0}" data-customer="{CLIENT.client_id}" data-show-for-customers="{show}" role="alert">
  <div class="container d-flex flex-md-row flex-column align-items-center justify-content-center">
    <!-- BEGIN: title -->
    <p class="mb-0"><strong>{title}</strong></p>
    <!-- END: title --> 
    <!-- BEGIN: button --> 
    <a href="{link}" class="btn {btnsize|mapValue||btn-sm} rounded-pill {btncolor} ml-0 ml-md-4 mt-2 mt-md-1 mb-1">{button}</a>
    <!-- END: button --> 
    <!-- BEGIN:collection --> 
    <!-- BEGIN:item --> 
    <!-- END:item --> 
    <!-- END:collection --> 
    <!-- BEGIN:empty --> 
    <!-- END: empty --> 
  </div>
  <button type="button" class="{close|mapValue|close|d-none}" data-dismiss="alert" aria-label="Fermer"><span aria-hidden="true">&times;</span></button>
</div>
<!-- END: main -->
```

### Configuration : `/theme/fr/composants/annonce/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du composant "Annonce"

Documentation : https://aide.kiubi.com/design-generalites.html#composants
-->
<!DOCTYPE composant SYSTEM "http://www.kiubi-admin.com/DTD/composants.dtd">
<composant intitule="Barre d'annonce" tri="13">
<listechamps>
  <champ champ="title" type="text" intitule="Texte de l'annonce" aide="Modifier le texte de l'annonce réaffiche les barres d'annonce déjà fermées :"/>
  <champ champ="close" type="select" intitule="Permettre aux internautes de fermer l'annonce" aide="Modifier l'option n'affecte pas les barres d'annonce déjà fermées :">
    <option value="0">Non</option>
    <option value="1">Oui</option>
  </champ>
  <champ champ="show" type="select" intitule="Afficher l'annonce en fonction de l'internaute" aide="Permet d'afficher ou non la barre d'annonce si l'internaute est connecté au site :">
    <option value="all">Toujour afficher l'annonce</option>
    <option value="loggedout">Uniquement si l'internaute est connecté</option>
    <option value="loggedin">Uniquement si l'internaute est déconnecté</option>
  </champ>
  <champ champ="bgcolor" type="select" intitule="Couleur d'arrière-plan">
    <option value="primary">Principale</option>
    <option value="secondary">Secondaire</option>
    <option value="success">Succès</option>
    <option value="info">Information</option>
    <option value="warning">Attention</option>
    <option value="danger">Danger</option>
    <option value="light">Claire</option>
    <option value="dark">Sombre</option>
  </champ>
  <champ champ="button" type="text" intitule="Texte du bouton"/>
    <champ champ="link" type="text" intitule="Lien du bouton" aide="Indiquer une adresse web vers une page du site ou celle d'un autre site (par exemple https://www.kiubi.com/) :"/>
    <champ champ="btnsize" type="select" intitule="Taille du bouton">
      <option value="0">Petit</option>
      <option value="1">Grand</option>
    </champ>
    <champ champ="btncolor" type="select" intitule="Couleur du bouton">
      <option value="btn-primary">Principale</option>
      <option value="btn-secondary">Secondaire</option>
      <option value="btn-success">Succès</option>
      <option value="btn-info">Information</option>
      <option value="btn-warning">Attention</option>
      <option value="btn-danger">Danger</option>
      <option value="btn-link">Sans couleur</option>
    </champ>
  </listechamps>
</composant>
```



## Détail d'un produit "Produit simple"

### Template : `/theme/fr/produits/simple/index.html` 

```html
<!--
Template du detail d'un produit "Produit simple"

Documentation : https://aide.kiubi.com/design-generalites.html#types-des-produits
-->
<!-- BEGIN: main -->
<section class="section produit produit-detail" id="produit-{produit_id}">
    {MODULE.cms/chemin}
  <article class="container">
    <div class="row">
      <div class="col-lg-6 order-2 order-lg-1">

        <!-- BEGIN: illustrations -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="easyzoom easyzoom-overlay easyzoom-with-thumbnails w-100 mb-4"><a href="{url_illustration_principale}" title="{intitule_produit|htmlentities}"><img src="{url_illustration_principale_g_vignette}" alt="{intitule_produit|htmlentities}" class="img-fluid w-100"/></a></div>
          </div>
          <div class="col-3 listing-images illus_principale"><a href="{url_illustration_principale}" title="{intitule_produit|htmlentities}" data-standard="{url_illustration_principale}"><img src="{url_illustration_principale_miniature}" alt="{intitule_produit|htmlentities}" class="img-fluid"/></a> </div>
          <!-- BEGIN: illustration -->
          <div class="col-3 listing-images illus_secondaires"><a href="{url_illustration}" title="{intitule_produit|htmlentities}" data-standard="{url_illustration}"><img src="{url_illustration_miniature}" alt="{intitule_produit|htmlentities}" class="img-fluid"/></a></div>
          <!-- END: illustration -->
        </div>
        <!-- END: illustrations -->

        <!-- BEGIN: noillustrations -->
        <div class="row mb-4">
          <div class="col-12"><img src="{racine}/{theme}/assets/img/produit.webp" alt="{intitule_produit|htmlentities}" class="img-fluid w-100" /> </div>
        </div>
        <!-- END: noillustrations -->

      </div>
      <div class="col-lg-6 order-1 order-lg-2">
        <header class="post-header mt-3 mt-lg-5">
          <h1 class="h2">{intitule_produit}</h1>
          <!-- BEGIN:tags -->
          <p class="tags">{tags}</p>
          <!-- END:tags -->
        </header>
          <!-- BEGIN:non_disponible -->
          <p class="alerte">Disponible &agrave; partir du
            <time class="post-date" datetime="{annee_disponibilite}-{num_mois_disponibilite}-{num_jour_disponibilite}">{num_jour_disponibilite}/{num_mois_disponibilite}/{annee_disponibilite}</time>
          </p>
          <!-- END:non_disponible -->
          <!-- BEGIN:en_stock -->
          <p class="text-success">En stock</p>
          <!-- END:en_stock -->
          <!-- BEGIN:rupture_partielle -->
          <p class="text-danger">Certaines r&eacute;f&eacute;rences sont indisponibles</p>
          <!-- END:rupture_partielle -->
          <!-- BEGIN:rupture -->
          <p class="text-danger">En rupture de stock</p>
          <!-- END:rupture -->
          <!-- BEGIN: marque -->
          <p>Marque : <strong>{marque}</strong></p>
          <!-- END: marque -->
        <div class="d-sm-flex align-items-center justify-content-between">
          <p class="price <!-- BEGIN:prix_promo -->promo<!-- END:prix_promo -->" id="price-tag">{prix}
            <!-- BEGIN:prix_barre -->
            <del class="text-muted">{prix_barre}</del>
            <!-- END:prix_barre -->
          </p>
          <!-- BEGIN: commentaires -->
          <div class="note-moyenne-{note_moyenne_5} text-warning mb-3" title="&Eacute;valuation : {note_moyenne_5}/5">
            <span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span><a href="#comment" class="text-muted ml-1">({nb_commentaires})</a></div>
          <!-- END: commentaires -->
        </div>
        <!-- BEGIN:accroche -->
        <p class="post-content accroche mb-5">{accroche} <a href="#desc" class="text-muted">Plus d'infos</a></p>
        <!-- END:accroche -->

        <form class="mt-5" id="fp{serial}_{produit_id}" method="post" action="{baseLangue}/ecommerce/panier.html">

          <!-- BEGIN:variantes -->
          <div class="variantes mb-4">
            <div class="form-group">
              <select name="vid" data-price="price-tag" data-variant="{GET.variant|htmlentities}" class="custom-select custom-select-lg w-100 d-block">
                <!-- BEGIN:variante -->
                <!-- BEGIN:en_stock -->
                <option value="{variante_id}" data-price="{prix_variante}|{prix_variante_barre}" data-role="select-image" data-standard="{url_illustration_g_vignette}" data-zoom="{url_illustration}"> {intitule_variante} - {prix_variante}
                <!-- BEGIN:prix_barre -->
                (au lieu de {prix_variante_barre})
                <!-- END:prix_barre -->
                </option>
                <!-- END:en_stock -->

                <!-- BEGIN:rupture -->
                <option disabled="disabled" value="{variante_id}"> {intitule_variante} - {prix_variante}
                <!-- BEGIN:prix_barre -->
                (au lieu de {prix_variante_barre})
                <!-- END:prix_barre -->
                </option>
                <!-- END:rupture -->

                <!-- END:variante -->
              </select>
            </div>
          </div>
          <!-- END:variantes -->

          <!-- BEGIN:panier-->
          <div class="ajout-panier row">
            <div class="form-group col-4 col-md-3">
            <input data-touchspin="vertical-icons" type="text" value="1" name="qt" class="form-control h-100">
            </div>
            <div class="form-group col-8 col-md-9">
              <button type="submit" class="btn btn-lg btn-warning btn-addcart w-100" data-cart-add="true" data-cart-error="cartalert{produit_id}"><span class="cart-success d-none"><i class="fe fe-check mr-2"></i>Ajout&eacute;</span><span>Ajouter au panier</span></button>
            </div>
          </div>
          <p id="cartalert{produit_id}" class="text-danger mb-3" style="height: 30px;"></p>
          <!-- END:panier-->
          <input type="hidden" name="pid" value="{produit_id}" />
          <input type="hidden" name="act" value="addP" />
          <input type="hidden" name="ctl" value="{ctl}" />
        </form>

        <!-- BEGIN:tarif_degressif -->
        <div class="tarif-degressif mt-5">
          <p class="mb-2">Tarif d&eacute;gressif : </p>
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th class="py-2 w-50">&Agrave; partir de</th>
                <th class="py-2 w-50">R&eacute;duction</th>
              </tr>
            </thead>
            <tbody>
              <!-- BEGIN:tranche -->
              <tr>
                <td class="py-2">{qt}</td>
                <td class="py-2">{remise|formatFloat|2}%</td>
              </tr>
              <!-- END:tranche -->
            </tbody>
          </table>
        </div>
        <!-- END:tarif_degressif -->

        <ul class="social-btn list-unstyled list-inline text-right mt-5">
          <li class="list-inline-item"><a href="https://www.facebook.com/sharer.php?u={schema}%3A%2F%2F{domaine|rawurlencode}{canonical|rawurlencode}" class="btn btn-link p-2" onclick="window.open(this.href,'sharefb','left=50,top=50,width=600,height=600,toolbar=0'); return false;" title="Partager sur Facebook" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"><span class="fe fe-facebook" aria-hidden="true"></span><span class="sr-only">Facebook</span></a></li><li class="list-inline-item"><a href="https://twitter.com/intent/tweet?text={intitule_produit|htmlentities|utf8}&amp;url={schema}%3A%2F%2F{domaine|rawurlencode}{canonical|rawurlencode}" class="btn btn-link p-2" onclick="window.open(this.href,'sharet','left=50,top=50,width=600,height=350,toolbar=0'); return false;" title="Partager sur Twitter" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"><span class="fe fe-twitter" aria-hidden="true"></span><span class="sr-only">Twitter</span></a></li>
        </ul>
      </div>
    </div>
    <div class="row" id="desc">
      <div class="col-12 produit-desc">
        <ul class="nav nav-tabs mb-4 mt-5" role="tablist">
          <li class="nav-item"><a href="#description" class="nav-link active" aria-controls="description" role="tab" data-toggle="tab">Description</a></li>
          <li class="nav-item"><a href="#caracteristiques" class="nav-link" aria-controls="caracteristiques" role="tab" data-toggle="tab">Caract&eacute;ristiques</a></li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane fade show post-content active" id="description">
            <!-- BEGIN: description -->{description}<!-- END: description --></div>
          <div role="tabpanel" class="tab-pane fade post-content" id="caracteristiques">
            <!-- BEGIN: texte1 -->{texte1}<!-- END: texte1 --></div>
        </div>
      </div>
    </div>
  </article>
  
  <script type="application/ld+json">
  {schema_json}
  </script>
  
</section>

<!-- END: main -->

<!-- BEGIN: eco_taxe -->
dont {eco_taxe} d'&eacute;co-part
<!-- END: eco_taxe -->

<!-- BEGIN: etat -->
Etat : {etat}
<!-- END: etat -->

<!-- BEGIN:reference -->
R&eacute;f&eacute;rence : {reference}
<!-- END:reference -->

<!-- BEGIN: code_barre -->
Code barre : {code_barre}
<!-- END: code_barre -->
```

### Configuration : `/theme/fr/produits/simple/config.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du produit "Produit simple"

Documentation : https://aide.kiubi.com/design-generalites.html#types-des-produits
--> 
<!DOCTYPE type SYSTEM "http://www.kiubi-admin.com/DTD/typesproduits.dtd">
<type tri="1">
  <desc>Produit simple</desc>
  <listechamps>
    <champ champ="texte1" type="wysiwyg" intitule="Caractéristiques" />
  </listechamps>
</type>
```



## Symbole "Par défaut"

### Structure : `/theme/fr/symboles/defaut/structure.xhtml` 

```
<table>
    <tr>
        <td>{entete}</td>
    </tr>
    <tr>
        <td>{contenu}</td>
    </tr>
    <tr>
        <td>{piedepage}</td>
    </tr>
</table>
```

### Template : `/theme/fr/symboles/defaut/index.html` 

```html
<!--
Template du symbole "Defaut"

Documentation : https://aide.kiubi.com/design-generalites.html#symboles
-->
<!-- BEGIN:main -->{ZONE.entete}{ZONE.contenu}{ZONE.piedepage}<!-- END:main -->
```

### Configuration : `/theme/fr/symboles/defaut/desc.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du symbole "Defaut"

Documentation : https://aide.kiubi.com/design-generalites.html#symboles
-->
<!DOCTYPE symbole SYSTEM "http://www.kiubi-admin.com/DTD/symboles.dtd">
<symbole intitule="Par défaut" tri="1">
  <zones defaut="contenu">
    <zone id="entete" colmax="3" intitule="En-tête" type="contenu" />
    <zone id="contenu" colmax="3" intitule="Contenu" type="contenu" />
    <zone id="piedepage" colmax="3" intitule="Pied-de-page" type="contenu" />
  </zones>
</symbole>
```



## Symbole "Section"

### Structure : `/theme/fr/symboles/section/structure.xhtml` 

```
<table>
    <tr>
        <td>{entete}</td>
    </tr>
    <tr>
        <td>{contenu}</td>
    </tr>
    <tr>
        <td>{piedepage}</td>
    </tr>
</table>
```

### Template : `/theme/fr/symboles/section/index.html` 

```html
<!--
Template du symbole "Section"

Documentation : https://aide.kiubi.com/design-generalites.html#symboles
-->
<!-- BEGIN:main -->
<section class="section {bgcolor|mapValue|bg-light|} {bgcolor|mapValue|dark-overlay|} {extraclass}" style="<!-- BEGIN:bgimage -->background-image: url({bgimage});<!-- END:bgimage --> {extrastyle}" id="kiubi-section-{serial}">
      {ZONE.entete}{ZONE.contenu}{ZONE.piedepage}
</section>
<!-- END:main -->
```

### Configuration : `/theme/fr/symboles/section/desc.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du symbole "Section"

Documentation : https://aide.kiubi.com/design-generalites.html#symboles
-->
<!DOCTYPE symbole SYSTEM "http://www.kiubi-admin.com/DTD/symboles.dtd">
<symbole intitule="Section" tri="2">
  <listechamps>
    <champ champ="bgcolor" type="select" intitule="Couleur d'arrière-plan" aide="La couleur par défaut assombrie également l'image d'arrière-plan :">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
    <champ champ="bgimage" type="image" intitule="Image d'arrière-plan" />
    <champ champ="extraclass" type="text" intitule="Classes CSS" aide="Permet d'ajouter des valeurs supplémentaires à l'attribut class du symbole :" />
    <champ champ="extrastyle" type="text" intitule="Styles CSS" aide="Permet d'ajouter des valeurs supplémentaires à l'attribut style du symbole :" />
  </listechamps>
  <zones defaut="contenu">
    <zone id="entete" colmax="3" intitule="En-tête" type="contenu" />
    <zone id="contenu" colmax="3" intitule="Contenu" type="contenu" />
    <zone id="piedepage" colmax="3" intitule="Pied-de-page" type="contenu" />
  </zones>
</symbole>
```



## Symbole "Modal"

### Structure : `/theme/fr/symboles/modal/structure.xhtml` 

```
<table>
    <tr>
        <td>{entete}</td>
    </tr>
    <tr>
        <td>{contenu}</td>
    </tr>
    <tr>
        <td>{piedepage}</td>
    </tr>
</table>
```

### Template : `/theme/fr/symboles/modal/index.html` 

```html
<!--
Template du symbole "Modal"

Documentation : https://aide.kiubi.com/design-generalites.html#symboles
-->
<!-- BEGIN:main -->
<div class="kiubi-modal modal fade" data-cookie="{title|sanitize}" data-modal-expires="{expires}" data-modal-delay="{delay}" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered {size}" role="document">
    <div class="modal-content {bgcolor|mapValue|bg-danger|} ">
      <div class="modal-header {bgcolor|mapValue|border-bottom-0|}">
        <h5 class="modal-title {bgcolor|mapValue|text-white|}">{title}</h5>
        <button type="button" class="close {bgcolor|mapValue|text-white|}" data-dismiss="modal">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body {bgcolor|mapValue|bg-white|} p-0 {extraclass}">
        {ZONE.entete}{ZONE.contenu}{ZONE.piedepage}
      </div>
    </div>
  </div>
</div>
<!-- END:main -->
```

### Configuration : `/theme/fr/symboles/modal/desc.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 
Configuration du symbole "Modal"

Documentation : https://aide.kiubi.com/design-generalites.html#symboles
-->
<!DOCTYPE symbole SYSTEM "http://www.kiubi-admin.com/DTD/symboles.dtd">
<symbole intitule="Modal" tri="3">
  <listechamps>
    <champ champ="size" type="select" intitule="Taille de la modal">
      <option value=" ">Par défaut</option>
      <option value="modal-lg">Large</option>
      <option value="modal-xl">Extra large</option>
    </champ>
    <champ champ="delay" type="select" intitule="Délai d'affichage">
      <option value="0">Immédiatement</option>
      <option value="1000">1 seconde</option>
      <option value="2000">2 secondes</option>
      <option value="5000">5 secondes</option>
    </champ>
    <champ champ="expires" type="select" intitule="Délai avant réaffichage" aide="Modifier le délai n'affecte pas les modals déjà affichées :">
      <option value="1">1 jour</option>
      <option value="7">1 semaine</option>
      <option value="14">2 semaines</option>
      <option value="30">1 mois</option>
      <option value="365">1 an</option>
      <option value="0">Toujours affichée</option>
    </champ>
    <champ champ="bgcolor" type="select" intitule="Modal d'alerte">
      <option value="0">Non</option>
      <option value="1">Oui</option>
    </champ>
    <champ champ="extraclass" type="text" intitule="Classes CSS" aide="Permet d'ajouter des valeurs supplémentaires à l'attribut class du contenu de la modal :" />
  </listechamps>
  <zones defaut="contenu">
    <zone id="entete" colmax="3" intitule="En-tête" type="contenu" />
    <zone id="contenu" colmax="3" intitule="Contenu" type="contenu" />
    <zone id="piedepage" colmax="3" intitule="Pied-de-page" type="contenu" />
  </zones>
</symbole>
```



## Template principal "Sans barre latérale"

### Structure : `/theme/fr/templates/sans_barre_laterale/structure.xhtml` 

```
<table>
  <tr>
    <td>{annonce}</td>
  </tr>
  <tr>
    <td>{entete}</td>
  </tr>
  <tr>
    <td>{menu}</td>
  </tr>
  <tr>
    <td>{banniere}</td>
  </tr>
  <tr>
    <td>{contenu}</td>
  </tr>
  <tr>
    <td>{piedepage}</td>
  </tr>
</table>
```

### Template : `/theme/fr/templates/sans_barre_laterale/index.html` 

```html
<!--
Template principal "Sans barre laterale"

Documentation : https://aide.kiubi.com/design-generalites.html#templates-principaux
-->
<!-- BEGIN:main --><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>{title}</title>
<meta name="viewport" content="width=device-width, maximum-scale=1.0" />
<meta name="description" content="{metaDescription}" />
<meta name="keywords" content="{metaKeywords}" />
{metaRobots}
{metaCanonical}

{FILE "/includes/open-graph.html"}
{FILE "/includes/twitter-cards.html"}
{FILE "/includes/css.html"}
{FILE "/includes/js-head.html"}
{FILE "/includes/favicon.html"}
{FILE "/includes/schema-json.html"}

<!-- Charges les scripts des Options avancees du Back-office -->
{js_head}
</head>
<body class="sans-barre-laterale {contexte_pagecourante}">
<div class="wrapper mx-auto">{ZONE.annonce}
  <header id="header" class="header">
    <div class="header-top bg-white">
      <div class="container-fluid d-flex">{ZONE.entete}</div>
    </div>
    <nav id="navbar-main" class="navbar navbar-expand-xl navbar-light bg-white">
      <div class="navbar-inner"> 
        <!-- BEGIN:logo_site --> 
        <a href="{racine}/" title="{accroche_site|htmlentities} - Retour &agrave; l'accueil" class="logo-site"><img src="{schema}://{domaine}/media/{logo_site}" alt="{accroche_site|htmlentities}" class="d-inline-block align-top mr-4"/></a> 
        <!-- END:logo_site --> 
        <!-- BEGIN:accroche_site--> 
        <a class="navbar-brand accroche-site" href="{racine}/" title="{accroche_site|htmlentities} - Retour &agrave; l'accueil">{accroche_site}</a> 
        <!-- END:accroche_site--> 
        <!-- BEGIN:desc_site--> 
        <span class="navbar-text desc-site mr-4">{desc_site}</span> 
        <!-- END:desc_site--> 
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-menu" aria-expanded="false"> <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse" id="navbar-menu">{ZONE.menu}</div>
      <div class="collapse navbar-collapse">{FILE "/fr/includes/search.html"}</div>
    </nav>
  </header>
  <div id="banner" class="banner">{ZONE.banniere}</div>
  <div id="main" class="main" role="main">{ZONE.contenu}</div>
  <footer id="footer" class="footer bg-white border-top">
      {ZONE.piedepage}
      {FILE "/fr/includes/copyright.html"}
  </footer>
  {FILE "/fr/includes/returntop.html"} 
</div>
{FILE "/includes/js-body.html"} 
<!-- Charges les scripts des Options avancees du Back-office --> 
{js_body}
</body>
</html>
<!-- END:main -->
```

### Configuration : `/theme/fr/templates/sans_barre_laterale/desc.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!--
Configuration du template principal "Sans barre laterale"

Documentation : https://aide.kiubi.com/design-generalites.html#templates-principaux
-->
<modele intitule="Sans barre latérale">
  <zones defaut="contenu">
    <zone id="annonce" colmax="1" intitule="Barre d'annonce" defaut="1"/>
    <zone id="entete" colmax="1" intitule="En-tête" defaut="1"/>
    <zone id="menu" colmax="1" intitule="Menu" defaut="1"/>
    <zone id="banniere" colmax="1" intitule="Bannière" defaut="1" type="contenu"/>
    <zone id="contenu" colmax="3" intitule="Contenu" defaut="1" type="contenu"/>
    <zone id="piedepage" colmax="3" intitule="Pied-de-page" defaut="1"/>
  </zones>
</modele>
```



## Template principal "Barre latérale à gauche"

### Structure : `/theme/fr/templates/barre_laterale_gauche/structure.xhtml` 

```
<table>
  <tr>
    <td colspan="2">{annonce}</td>
  </tr>
  <tr>
    <td colspan="2">{entete}</td>
  </tr>
  <tr>
    <td colspan="2">{menu}</td>
  </tr>
  <tr>
    <td colspan="2">{banniere}</td>
  </tr>
  <tr>
    <td width="35%">{sidebar}</td>
    <td>{contenu}</td>
  </tr>
  <tr>
    <td colspan="2">{piedepage}</td>
  </tr>
</table>
```

### Template : `/theme/fr/templates/barre_laterale_gauche/index.html` 

```html
<!--
Template principal "Barre laterial a gauche"

Documentation : https://aide.kiubi.com/design-generalites.html#templates-principaux
-->
<!-- BEGIN:main --><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>{title}</title>
<meta name="viewport" content="width=device-width, maximum-scale=1.0" />
<meta name="description" content="{metaDescription}" />
<meta name="keywords" content="{metaKeywords}" />
{metaRobots}
{metaCanonical}

{FILE "/includes/open-graph.html"}
{FILE "/includes/twitter-cards.html"}
{FILE "/includes/css.html"}
{FILE "/includes/js-head.html"}
{FILE "/includes/favicon.html"}
{FILE "/includes/schema-json.html"}

<!-- Charges les scripts des Options avancees du Back-office -->
{js_head}
</head>
<body class="barre-laterale barre-laterale-gauche {contexte_pagecourante}">
<div class="wrapper mx-auto">{ZONE.annonce}
  <header id="header" class="header">
    <div class="header-top bg-white">
      <div class="container-fluid d-flex">{ZONE.entete}</div>
    </div>
    <nav id="navbar-main" class="navbar navbar-expand-xl navbar-light bg-white">
      <div class="navbar-inner"> 
        <!-- BEGIN:logo_site --> 
        <a href="{racine}/" title="{accroche_site|htmlentities} - Retour &agrave; l'accueil" class="logo-site"><img src="{schema}://{domaine}/media/{logo_site}" alt="{accroche_site|htmlentities}" class="d-inline-block align-top mr-4"/></a> 
        <!-- END:logo_site --> 
        <!-- BEGIN:accroche_site--> 
        <a class="navbar-brand accroche-site" href="{racine}/" title="{accroche_site|htmlentities} - Retour &agrave; l'accueil">{accroche_site}</a> 
        <!-- END:accroche_site--> 
        <!-- BEGIN:desc_site--> 
        <span class="navbar-text desc-site mr-4">{desc_site}</span> 
        <!-- END:desc_site--> 
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-menu" aria-expanded="false"> <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse" id="navbar-menu">{ZONE.menu}</div>
      <div class="collapse navbar-collapse">{FILE "/fr/includes/search.html"}</div>
    </nav>
  </header>
  <div id="banner" class="banner">{ZONE.banniere}</div>
  <div class="container">
    <div class="row">
      <div id="main" class="col-lg-9 order-lg-2 pl-lg-5 main" role="main">{ZONE.contenu}</div>
      <div id="sidebar" class="col-lg-3 order-lg-1 sidebar" role="complementary">{ZONE.sidebar}</div>
    </div>
  </div>
  <footer id="footer" class="footer bg-white border-top">
      {ZONE.piedepage}
      {FILE "/fr/includes/copyright.html"}
  </footer>
  {FILE "/fr/includes/returntop.html"}
</div>
{FILE "/includes/js-body.html"} 
<!-- Charges les scripts des Options avancees du Back-office --> 
{js_body}
</body>
</html>
<!-- END:main -->
```

### Configuration : `/theme/fr/templates/barre_laterale_gauche/desc.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!--
Configuration du template principal "Barre laterial a gauche"

Documentation : https://aide.kiubi.com/design-generalites.html#templates-principaux
-->
<modele intitule="Barre latérale à gauche">
  <zones defaut="contenu">
    <zone id="annonce" colmax="1" intitule="Barre d'annonce" defaut="1"/>
    <zone id="entete" colmax="1" intitule="En-tête" defaut="1"/>
    <zone id="menu" colmax="1" intitule="Menu" defaut="1"/>
    <zone id="banniere" colmax="1" intitule="Bannière" defaut="1" type="contenu"/>
    <zone id="sidebar" colmax="1" intitule="Barre latérale" defaut="1"/>
    <zone id="contenu" colmax="3" intitule="Contenu" defaut="1" type="contenu"/>
    <zone id="piedepage" colmax="3" intitule="Pied-de-page" defaut="1"/>
  </zones>
</modele>
```



## Template principal "Barre latérale à droite"

### Structure : `/theme/fr/templates/barre_laterale_droite/structure.xhtml` 

```
<table>
  <tr>
    <td colspan="2">{annonce}</td>
  </tr>
  <tr>
    <td colspan="2">{entete}</td>
  </tr>
  <tr>
    <td colspan="2">{menu}</td>
  </tr>
  <tr>
    <td colspan="2">{banniere}</td>
  </tr>
  <tr>
    <td>{contenu}</td>
    <td width="35%">{sidebar}</td>
  </tr>
  <tr>
    <td colspan="2">{piedepage}</td>
  </tr>
</table>
```

### Template : `/theme/fr/templates/barre_laterale_droite/index.html` 

```html
<!--
Template principal "Barre laterial a droite"

Documentation : https://aide.kiubi.com/design-generalites.html#templates-principaux
-->
<!-- BEGIN:main --><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>{title}</title>
<meta name="viewport" content="width=device-width, maximum-scale=1.0" />
<meta name="description" content="{metaDescription}" />
<meta name="keywords" content="{metaKeywords}" />
{metaRobots}
{metaCanonical}

{FILE "/includes/open-graph.html"}
{FILE "/includes/twitter-cards.html"}
{FILE "/includes/css.html"}
{FILE "/includes/js-head.html"}
{FILE "/includes/favicon.html"}
{FILE "/includes/schema-json.html"}

<!-- Charges les scripts des Options avancees du Back-office -->
{js_head}
</head>
<body class="barre-laterale barre-laterale-droite {contexte_pagecourante}">
<div class="wrapper mx-auto">{ZONE.annonce}
  <header id="header" class="header">
    <div class="header-top bg-white">
      <div class="container-fluid d-flex">{ZONE.entete}</div>
    </div>
    <nav id="navbar-main" class="navbar navbar-expand-xl navbar-light bg-white">
      <div class="navbar-inner"> 
        <!-- BEGIN:logo_site --> 
        <a href="{racine}/" title="{accroche_site|htmlentities} - Retour &agrave; l'accueil" class="logo-site"><img src="{schema}://{domaine}/media/{logo_site}" alt="{accroche_site|htmlentities}" class="d-inline-block align-top mr-4"/></a> 
        <!-- END:logo_site --> 
        <!-- BEGIN:accroche_site--> 
        <a class="navbar-brand accroche-site" href="{racine}/" title="{accroche_site|htmlentities} - Retour &agrave; l'accueil">{accroche_site}</a> 
        <!-- END:accroche_site--> 
        <!-- BEGIN:desc_site--> 
        <span class="navbar-text desc-site mr-4">{desc_site}</span> 
        <!-- END:desc_site--> 
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-menu" aria-expanded="false"> <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse" id="navbar-menu">{ZONE.menu}</div>
      <div class="collapse navbar-collapse">{FILE "/fr/includes/search.html"}</div>
    </nav>
  </header>
  <div id="banner" class="banner">{ZONE.banniere}</div>
  <div class="container">
    <div class="row">
      <div id="main" class="col-lg-9 pr-lg-5 main" role="main">{ZONE.contenu}</div>
      <div id="sidebar" class="col-lg-3 sidebar" role="complementary">{ZONE.sidebar}</div>
    </div>
  </div>
  <footer id="footer" class="footer bg-white border-top">
      {ZONE.piedepage}
      {FILE "/fr/includes/copyright.html"}
  </footer>
  {FILE "/fr/includes/returntop.html"}
</div>
{FILE "/includes/js-body.html"} 
<!-- Charges les scripts des Options avancees du Back-office --> 
{js_body}
</body>
</html>
<!-- END:main -->
```

### Configuration : `/theme/fr/templates/barre_laterale_droite/desc.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!--
Configuration du template principal "Barre laterial a droite"

Documentation : https://aide.kiubi.com/design-generalites.html#templates-principaux
-->
<modele intitule="Barre latérale à droite">
  <zones defaut="contenu">
    <zone id="annonce" colmax="1" intitule="Barre d'annonce" defaut="1"/>
    <zone id="entete" colmax="1" intitule="En-tête" defaut="1"/>
    <zone id="menu" colmax="1" intitule="Menu" defaut="1"/>
    <zone id="banniere" colmax="1" intitule="Bannière" defaut="1" type="contenu"/>
    <zone id="sidebar" colmax="1" intitule="Barre latérale" defaut="1"/>
    <zone id="contenu" colmax="3" intitule="Contenu" defaut="1" type="contenu"/>
    <zone id="piedepage" colmax="3" intitule="Pied-de-page" defaut="1"/>
  </zones>
</modele>
```



## Template principal "Bannière pleine page"

### Structure : `/theme/fr/templates/banniere_pleine_page/structure.xhtml` 

```
<table>
  <tr>
    <td>{annonce}</td>
  </tr>
  <tr>
    <td>{entete}</td>
  </tr>
  <tr>
    <td>{menu}</td>
  </tr>
  <tr>
    <td>{banniere}</td>
  </tr>
  <tr>
    <td>{contenu}</td>
  </tr>
  <tr>
    <td>{piedepage}</td>
  </tr>
</table>
```

### Template : `/theme/fr/templates/banniere_pleine_page/index.html` 

```html
<!--
Template principal "Banniere pleine page"

Documentation : https://aide.kiubi.com/design-generalites.html#templates-principaux
-->
<!-- BEGIN:main --><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>{title}</title>
<meta name="viewport" content="width=device-width, maximum-scale=1.0" />
<meta name="description" content="{metaDescription}" />
<meta name="keywords" content="{metaKeywords}" />
{metaRobots}
{metaCanonical}

{FILE "/includes/open-graph.html"}
{FILE "/includes/twitter-cards.html"}
{FILE "/includes/css.html"}
{FILE "/includes/js-head.html"}
{FILE "/includes/favicon.html"}
{FILE "/includes/schema-json.html"}

<!-- Charges les scripts des Options avancees du Back-office -->
{js_head}
</head>
<body class="banniere-pleine-page {contexte_pagecourante}">
<div class="wrapper mx-auto">{ZONE.annonce}
  <header id="header" class="header">
    <div class="header-top bg-white">
      <div class="container-fluid d-flex">{ZONE.entete}</div>
    </div>
    <nav id="navbar-main" data-navbardark="true" class="navbar navbar-expand-xl navbar-dark">
      <div class="navbar-inner"> 
        <!-- BEGIN:logo_site --> 
        <a href="{racine}/" title="{accroche_site|htmlentities} - Retour &agrave; l'accueil" class="logo-site"><img src="{schema}://{domaine}/media/{logo_site}" alt="{accroche_site|htmlentities}" class="d-inline-block align-top mr-4"/></a> 
        <!-- END:logo_site --> 
        <!-- BEGIN:accroche_site--> 
        <a class="navbar-brand accroche-site" href="{racine}/" title="{accroche_site|htmlentities} - Retour &agrave; l'accueil">{accroche_site}</a> 
        <!-- END:accroche_site--> 
        <!-- BEGIN:desc_site--> 
        <span class="navbar-text desc-site mr-4">{desc_site}</span> 
        <!-- END:desc_site--> 
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-menu" aria-expanded="false"> <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse" id="navbar-menu">{ZONE.menu}</div>
      <div class="collapse navbar-collapse">{FILE "/fr/includes/search.html"}</div>
    </nav>
  </header>
  <div id="banner" class="banner">{ZONE.banniere}
    <div class="move d-none d-lg-block"><i class="fe fe-chevron-down text-white"></i></div>
  </div>
  <div id="main" class="main" role="main">{ZONE.contenu}</div>
  <footer id="footer" class="footer bg-white border-top">
      {ZONE.piedepage}
      {FILE "/fr/includes/copyright.html"}
  </footer>
  {FILE "/fr/includes/returntop.html"} 
</div>
{FILE "/includes/js-body.html"} 
<!-- Charges les scripts des Options avancees du Back-office --> 
{js_body}
</body>
</html>
<!-- END:main -->
```

### Configuration : `/theme/fr/templates/banniere_pleine_page/desc.xml` 

```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<!--
Configuration du template principal "Sans barre laterale"

Documentation : https://aide.kiubi.com/design-generalites.html#templates-principaux
-->
<modele intitule="Bannière pleine page">
  <zones defaut="contenu">
    <zone id="annonce" colmax="1" intitule="Barre d'annonce" defaut="1"/>
    <zone id="entete" colmax="1" intitule="En-tête" defaut="1"/>
    <zone id="menu" colmax="1" intitule="Menu" defaut="1"/>
    <zone id="banniere" colmax="1" intitule="Bannière" defaut="1" type="contenu"/>
    <zone id="contenu" colmax="3" intitule="Contenu" defaut="1" type="contenu"/>
    <zone id="piedepage" colmax="3" intitule="Pied-de-page" defaut="1"/>
  </zones>
</modele>
```



## Module "Page 404"

### Template : `/theme/fr/modules/404/404.html` 

```html
<!--
Template de la page d'erreur 404

Documentation : https://aide.kiubi.com/design-generalites.html#page-d-erreur-404
-->
<!-- BEGIN:main --><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
<title>Erreur 404, cette page n'existe pas</title>
<meta name="viewport" content="width=device-width, maximum-scale=1.0" />
<meta name="keywords" content="{metaKeywords}">
<meta name="description" content="{metaDescription}">
<link href="{racine}/{theme}/assets/css/theme.css" rel="stylesheet" type="text/css" media="screen" />
{FILE "/includes/favicon.html"}
</head>
<body>
<div class="container text-center" style="padding-top: 15%;">
  <h1 class="display-1 mb-4"><a href="/" title="Retour &agrave; l'accueil">404</a></h1>
  <p class="lead mb-5">La page que vous essayez de consulter n'existe plus.</p>
    <a href="/" class="btn btn-info btn-sm">Retour &agrave; la page d'accueil</a>
</div>
</body>
</html><!-- END:main -->
```



## Module "Fil d'Ariane"

### Template : `/theme/fr/modules/chemin/index.html` 

```html
<!-- 
Template du chemin de navigation / fil d'ariane

Documentation : https://aide.kiubi.com/design-generalites.html#fil-d-ariane
-->
<!-- BEGIN:main -->
<div class="container breadcrumb-main d-none d-md-block">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb bg-transparent border-0 p-0 my-3" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li class="breadcrumb-item"><a data-home="true" href="{baseLangue}/">{site_nom}</a></li>
      <!-- BEGIN:page -->
      <li class="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="{lien}" target="{cible}" itemprop="item"><span itemprop="name">{page}</span></a><meta itemprop="position" content="{compteur}" /></li>
      <!-- END:page -->
    </ol>
  </nav>
</div>
<!-- END:main --> 

<!-- BEGIN:separateur --> 
/ 
<!-- END:separateur -->
```



## Module "Page de fermeture"

### Template : `/theme/fr/modules/fermeture/fermeture.html` 

```html
<!--
Template de la page de fermeture du site

Documentation : https://aide.kiubi.com/design-generalites.html#page-de-fermeture
-->
<!-- BEGIN:main --><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
<title>{site_nom} est en maintenance</title>
<meta name="viewport" content="width=device-width, maximum-scale=1.0" />
<meta name="keywords" content="{metaKeywords}">
<meta name="description" content="{metaDescription}">
<link href="{racine}/{theme}/assets/css/theme.css" rel="stylesheet" type="text/css" media="screen" />
{FILE "/includes/favicon.html"}
</head>
<body>
<a href="{acces_front}" class="float-right btn btn-link">Acc&eacute;der au site</a>
<div class="container text-center" style="padding-top: 15%;">
  <h1 class="mb-5"><a href="/" title="Retour &agrave; l'accueil">Site en maintenance</a></h1>
  <p class="lead">{site_nom} est actuellement ferm&eacute; pour maintenance.<br /><br />
  Nous vous invitons &agrave; <a href="mailto:{SOCIETE.contact_email}">nous contacter</a> pour toute demande d'information compl&eacute;mentaire.</p>
</div>
</body>
</html><!-- END:main -->
```



## Module "Sélecteur de langue"

### Template : `/theme/fr/modules/selecteur/index.html` 

```html
<!--
Template du Widget "Selecteur"

Documentation :
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-site-web.html#selecteur
-->

<!-- BEGIN: main -->
<div class="site-web-selecteur ml-3" id="kiubi-widget-{serial}">
    <button class="btn btn-link dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="/{theme}/assets/img/flags/flag_{lg|strtoupper}.svg" class="" alt="{lg|strtoupper}"></button>
    <div class="dropdown-menu dropdown-menu-right">
        <!-- BEGIN:site--><a href="{page_site}" class="dropdown-item"><img src="/{theme}/assets/img/flags/flag_{lg_site|strtoupper}.svg" class="mr-2" alt="{lg_site|strtoupper}"><span class="lg-content lg-{lg_site}"></span></a><!-- END:site-->
    </div>
</div>
<!-- END: main -->
```



## Widget "Blog / Archives"

### Template : `/theme/fr/widgets/blog/archives/index.html` 

```html
<!-- 
Template du Widget "Archives du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#archives
-->

<!-- BEGIN:main -->
<aside class="widget blog-archives" id="kiubi-widget-{serial}">
  <!-- BEGIN: intitule -->
  <h5>{intitule}</h5>
  <!-- END: intitule -->
  <ul class="nav flex-column">
    <!-- BEGIN:archive -->
    <li class="nav-item"><a href="{lien_archive}" class="nav-link {actif|mapValue|active}" title="{mois_archive|ucfirst} {annee_archive}">{mois_archive|ucfirst} {annee_archive}</a></li>
    <!-- END:archive -->
  </ul>
  <!-- BEGIN:noarchive -->
  <p>Pas de billet post&eacute;.</p>
  <!-- END:noarchive --> 
</aside>
<!-- END:main -->
```



## Widget "Blog / Categories"

### Template : `/theme/fr/widgets/blog/categories/index.html` 

```html
<!-- 
Template du Widget "Categories du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#categories
-->

<!-- BEGIN:main -->
<aside class="widget blog-categories" id="kiubi-widget-{serial}">
  <!-- BEGIN: intitule -->
  <h5>{intitule}</h5>
  <!-- END: intitule -->
  <ul class="nav flex-column">
    <!-- BEGIN:accueil -->
    <li class="nav-item"><a href="{lien_accueil}" class="nav-link {actif|mapValue|active}" title="{intitule_accueil|htmlentities}">{intitule_accueil}</a></li>
    <!-- END:accueil --> 
    <!-- BEGIN:categorie -->
    <li><a href="{lien_categorie}" class="nav-link {actif|mapValue|active}" title="{intitule_categorie|htmlentities}">{intitule_categorie}<small class=" float-right">({nb_billets})</small></a></li>
    <!-- END:categorie -->
  </ul>

</aside>
<!-- END:main -->
```



## Widget "Blog / Derniers billets postes"

### Template : `/theme/fr/widgets/blog/derniers_billets_postes/index.html` 

```html
<!-- 
Template du Widget "Derniers billets postes du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#derniers-billets-postes
-->

<!-- BEGIN:main -->
<aside class="widget blog-derniers-billets-postes" id="kiubi-widget-{serial}"> 
  <!-- BEGIN:intitule -->
  <h5 class="mb-3">{intitule}</h5>
  <!-- END:intitule --> 
  <!-- BEGIN:billet -->
  <p><a href="{lien_billet}" title="{titre|htmlentities}">{titre}<br/>
    <span class="text-muted">Le {num_jour_publication} {mois_publication} {annee_publication}</span></a> </p>
  <!-- END:billet --> 
  <!-- BEGIN:nobillet -->
  <p>Pas de billet post&eacute;.</p>
  <!-- END:nobillet --> 
</aside>
<!-- END:main -->
```



## Widget "Blog / Derniers billets postes" - Version alternative : Carrousel

### Template : `/theme/fr/widgets/blog/derniers_billets_postes/carrousel/index.html` 

```html
<!--
Template du Widget "Derniers billets postes du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#derniers-billets-postes
-->

<!-- BEGIN:main -->
<section class="blog-derniers-billets-postes carrousel owl-carousel" data-owl-margin="0" data-owl-responsive="1-2-2-3" id="kiubi-section-{serial}"> 
  <!-- BEGIN:billet --> 
  <a href="{lien_billet}" title="{titre|htmlentities} - Lire la suite">
  <div class="carousel-content dark-overlay" style="<!-- BEGIN:illustration --> background-image: url({url_illustration_g_vignette})<!-- END: illustration -->;">
    <div class="container">
      <div class="carousel-caption">
        <h3 class="text-white">{titre}</h3>
        <p>Le {num_jour_publication} {mois_publication} {annee_publication} dans {intitule_categorie}</p>
      </div>
    </div>
  </div>
  </a> 
  <!-- END:billet --> 
  <!-- BEGIN:nobillet -->
  <p>Pas de billet post&eacute;.</p>
  <!-- END:nobillet --> 
</section>
<!-- END:main -->
```



## Widget "Blog / Derniers billets postes" - Version alternative : Carrousel grille

### Template : `/theme/fr/widgets/blog/derniers_billets_postes/carrousel_grille/index.html` 

```html
<!--
Template du Widget "Derniers billets postes du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#derniers-billets-postes
-->

<!-- BEGIN:main -->
<div class="section blog-derniers-billets-postes carrousel-grille" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h2 class="mb-4">{intitule}</h2>
    <!-- END:intitule -->
    <div class="owl-carousel" data-owl-margin="24" data-owl-dots="true" data-owl-nav="false" data-owl-responsive="1-2-4"> 
      <!-- BEGIN:billet -->
      <div class="card w-100 m-1" id="blog-billet-{billet_id}"> <a href="{lien_billet}" title="{titre|htmlentities} - Lire la suite"><img src="{url_illustration_vignette}" alt="{titre|htmlentities}" class="card-img-top" /></a>
        <div class="card-body d-flex flex-column">
          <h3 class="card-title"><a href="{lien_billet}">{titre}</a></h3>
          <p class="card-text desc">{accroche|stripText|80}</p>
          <a href="{lien_billet}" class="btn btn-link align-self-start mt-auto p-0">Lire la suite<i class="fe fe-arrow-right ml-2"></i></a></div>
        <div class="card-footer"> <small class="text-muted">Le {num_jour_publication} {mois_publication} {annee_publication}</small> </div>
      </div>
      <!-- END:billet --> 
    </div>
    <!-- BEGIN:nobillet -->
    <p>Pas de billet post&eacute;.</p>
    <!-- END:nobillet --> 
  </div>
</div>
<!-- END:main -->
```



## Widget "Blog / Derniers billets postes" - Version alternative : Grille

### Template : `/theme/fr/widgets/blog/derniers_billets_postes/grille/index.html` 

```html
<!--
Template du Widget "Derniers billets postes du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#derniers-billets-postes
-->

<!-- BEGIN:main -->
<div class="section blog-derniers-billets-postes grille" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h2 class="mb-4">{intitule}</h2>
    <!-- END:intitule -->
    <div class="row"> 
      <!-- BEGIN:billet -->
      <div class="col-md-6 col-lg d-flex align-items-stretch">
        <div class="card w-100" id="blog-billet-{billet_id}"> 
          <!-- BEGIN:illustration --><a href="{lien_billet}" title="{titre|htmlentities} - Lire la suite"><img src="{url_illustration_vignette}" alt="{titre|htmlentities}" class="card-img-top" /></a><!-- END:illustration -->
          <div class="card-body d-flex flex-column">
            <h3 class="card-title"><a href="{lien_billet}">{titre}</a></h3>
            <p class="card-text desc">{accroche|stripText|100}</p>
            <a href="{lien_billet}" class="btn btn-link align-self-start mt-auto p-0">Lire la suite<i class="fe fe-arrow-right ml-2"></i></a></div>
          <div class="card-footer"> <small class="text-muted">Le {num_jour_publication} {mois_publication} {annee_publication}</small> </div>
        </div>
      </div>
      <!-- END:billet --> 
    </div>
    <!-- BEGIN:nobillet -->
    <p>Pas de billet post&eacute;.</p>
    <!-- END:nobillet --> 
  </div>
</div>
<!-- END:main -->
```



## Widget "Blog / Derniers billets postes" - Version alternative : Liste sidebar

### Template : `/theme/fr/widgets/blog/derniers_billets_postes/liste.sidebar/index.html` 

```html
<!--
Template du Widget "Derniers billets postes du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#derniers-billets-postes
-->

<!-- BEGIN:main -->
<aside class="widget blog-derniers-billets-postes liste-sidebar" id="kiubi-widget-{serial}">
  <!-- BEGIN:intitule -->
  <h5 class="mb-3">{intitule}</h5>
  <!-- END:intitule --> 
  <!-- BEGIN:billet -->
  <div class="media color-{alterne}" id="blog-billet-{billet_id}">
    <div class="media-body">
      <p class="mb-1"> <a href="{lien_billet}"  title="{titre|htmlentities}"> 
        <!-- BEGIN:illustration --> 
        <img src="{url_illustration_vignette}" alt="{titre|htmlentities}" class="img-fluid mb-1 d-block w-100" /> 
        <!-- END:illustration --> 
        {titre} </a> </p>
      <span class="text-muted">Le {num_jour_publication} {mois_publication} {annee_publication}</span> </div>
  </div>
  <!-- END:billet --> 
  <!-- BEGIN:nobillet -->
  <p>Pas de billet post&eacute;.</p>
  <!-- END:nobillet --> 
</aside>
<!-- END:main -->
```



## Widget "Blog / Derniers commentaires postes"

### Template : `/theme/fr/widgets/blog/derniers_commentaires_postes/index.html` 

```html
<!-- 
Template du Widget "Derniers commentaires postes du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#derniers-commentaires-postes
-->

<!-- BEGIN:main -->
<aside class="widget blog-derniers-commentaires-postes" id="kiubi-widget-{serial}"> 
  <!-- BEGIN: intitule -->
  <h5 class="mb-3">{intitule}</h5>
  <!-- END: intitule --> 
  <!-- BEGIN:commentaire -->
  <p><a href="{lien_billet}#comment" title="Aller au commentaire" id="comment{compteur}"><strong>{auteur} :</strong> {resume_commentaire}</a></p>
  <!-- END:commentaire --> 
  <!-- BEGIN:nocommentaire -->
  <p>Soyez le premier &agrave; poster un commentaire !</p>
  <!-- END:nocommentaire --> 
</aside>
<!-- END:main -->
```



## Widget "Blog / Detail billet"

### Template : `/theme/fr/widgets/blog/detail_billet/index.html` 

```html
<!--
Template du Widget "Detail d'un billet du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#detail-billet
-->

<!-- BEGIN:main -->
<section class="section blog-detail-billet" id="kiubi-section-{serial}">

  <article class="container" id="blog-billet-{billet_id}">
    <header class="post-header mb-5">
      <h1 class="mb-4">{titre}</h1>
      <ul class="post-infos list-unstyled list-inline text-muted">
        <li class="list-inline-item"><i class="fe fe-user mr-2"></i>{auteur}</li>
        <li class="list-inline-item">
          <time class="post-date" datetime="{annee_publication}-{num_mois_publication}-{num_jour_publication} {heure_publication}:{minute_publication}:00"><i class="fe fe-clock mx-2"></i><span class="day">{num_jour_publication}</span> <span class="month">{mois_publication}</span> <span class="year">{annee_publication}</span> &agrave; {heure_publication}h{minute_publication}</time>
          dans <a href="{lien_categorie}">{intitule_categorie}</a></li>
        <li class="list-inline-item"><i class="fe fe-message-square mx-2"></i><a href="{lien_billet}#comment">{nb_commentaires} commentaire{pluriel_commentaire}</a></li>
      </ul>
    </header>
    <!-- BEGIN:illustration -->
    <img src="{url_illustration}" alt="{titre|htmlentities}" class="img-fluid mb-5 w-100" />
    <!-- END:illustration -->
    <!-- BEGIN:chapo -->
    <div class="post-content post-chapo mb-3">{chapo}</div>
    <!-- END:chapo --> 
    <!-- BEGIN:contenu -->
    <div class="post-content mb-5">{contenu}</div>
    <!-- END:contenu --> 
    <!-- BEGIN:texte10 --> 
    <a class="btn btn-primary mb-3" href="/media/{texte10}" target="_blank"><span class="fe fe-download mr-2" aria-hidden="true"></span>T&eacute;l&eacute;charger le fichier joint</a> 
    <!-- END:texte10 --> 
    <footer class="post-footer">
      <ul class="social-btn list-unstyled list-inline text-right">
        <li class="list-inline-item"><a href="https://www.facebook.com/sharer.php?u={lienperma_billet|rawurlencode}" class="btn btn-link p-2" onclick="window.open(this.href,'sharefb','left=50,top=50,width=600,height=600,toolbar=0'); return false;" title="Partager sur Facebook" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"><span class="fe fe-facebook" aria-hidden="true"></span><span class="sr-only">Facebook</span></a></li><li class="list-inline-item"><a href="https://twitter.com/intent/tweet?text={titre|htmlentities|utf8}&amp;url={lienperma_billet|rawurlencode}" class="btn btn-link p-2" onclick="window.open(this.href,'sharet','left=50,top=50,width=600,height=350,toolbar=0'); return false;" title="Partager sur Twitter" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"><span class="fe fe-twitter" aria-hidden="true"></span><span class="sr-only">Twitter</span></a></li>
      </ul>
    </footer>
  </article>

  <script type="application/ld+json">
  {schema_json}
  </script>

</section>
<!-- END:main -->
```



## Widget "Blog / Les plus commentes"

### Template : `/theme/fr/widgets/blog/les_plus_commentes/index.html` 

```html
<!-- 
Template du Widget "Billets les plus commentes du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#billets-les-plus-commentes
-->

<!-- BEGIN:main -->
<aside class="widget blog-les-plus-commentes" id="kiubi-widget-{serial}">
  <!-- BEGIN: intitule -->
  <h5>{intitule}</h5>
  <!-- END:intitule -->
  <ul class="nav flex-column">
    <!-- BEGIN:billet -->
    <li class="nav-item"><a href="{lien_billet}" class="nav-link">{titre}<small class="float-right">({nb_commentaires})</small></a></li>
    <!-- END:billet -->
  </ul>
  <!-- BEGIN:nobillet --> 
  <p>Pas de billet post&eacute;.</p>
  <!-- END:nobillet --> 
</aside>
<!-- END:main -->
```



## Widget "Blog / Liens"

### Template : `/theme/fr/widgets/blog/liens/index.html` 

```html
<!-- 
Template du Widget "Liens (blogroll) du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#liens
-->

<!-- BEGIN:main -->
<aside class="widget blog-liens" id="kiubi-widget-{serial}"> 
  <!-- BEGIN:intitule -->
  <h5>{intitule}</h5>
  <!-- END:intitule -->
  <ul class="nav flex-column">
    <!-- BEGIN:lien -->
    <li class="nav-item"><a href="{adresse_lien}" class="nav-link" target="_blank" title="{desc_lien|htmlentities}">{intitule_lien}</a></li>
    <!-- END:lien -->
  </ul>
  <!-- BEGIN:nolien -->
  <p>Pas de lien disponible.</p>
  <!-- END:nolien --> 
</aside>
<!-- END:main -->
```



## Widget "Blog / Liste billets"

### Template : `/theme/fr/widgets/blog/liste_billets/index.html` 

```html
<!--
Template du Widget "Liste des billets du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#liste-des-billets
-->

<!-- BEGIN:main -->

<div class="section blog-liste-billets" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:billet -->
    <article class="mb-5 post post-blog blog-liste-billets" id="blog-billet-{billet_id}">
      <header class="post-header mb-5">
        <h2 class="mb-4"><a href="{lien_billet}">{titre}</a></h2>
        <ul class="post-infos list-unstyled list-inline text-muted">
          <li class="author list-inline-item"><i class="fe fe-user mr-2"></i>{auteur}</li><li class="list-inline-item">
            <time class="post-date" datetime="{annee_publication}-{num_mois_publication}-{num_jour_publication} {heure_publication}:{minute_publication}:00"><i class="fe fe-clock mx-2"></i><span class="day">{num_jour_publication}</span> <span class="month">{mois_publication}</span> <span class="year">{annee_publication}</span> &agrave; {heure_publication}h{minute_publication}</time>
            dans <a href="{lien_categorie}">{intitule_categorie}</a></li><li class="list-inline-item"><i class="fe fe-message-square mx-2"></i><a href="{lien_billet}#comment">{nb_commentaires} commentaire{pluriel_commentaire}</a></li>
        </ul>
      </header>
      <!-- BEGIN:illustration --> 
      <a href="{lien_billet}"><img src="{url_illustration}" alt="{titre|htmlentities}" class="img-fluid mb-5 w-100"/></a> 
      <!-- END:illustration -->
      <div class="post-content mb-5">{accroche}</div>
      <footer class="post-footer">
        <div class="row">
          <div class="col-6">
            <!-- BEGIN:detail --><a href="{lien_billet}" class="btn btn-warning">Lire la suite</a><!-- END:detail --></div>
          <div class="col-6">
            <ul class="social-btn list-unstyled list-inline text-right">
              <li class="list-inline-item"><a href="https://www.facebook.com/sharer.php?u={lienperma_billet|rawurlencode}" class="btn btn-link p-2" onclick="window.open(this.href,'sharefb','left=50,top=50,width=600,height=600,toolbar=0'); return false;" title="Partager sur Facebook" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"><span class="fe fe-facebook" aria-hidden="true"></span><span class="sr-only">Facebook</span></a></li><li class="list-inline-item"><a href="https://twitter.com/intent/tweet?text={titre|htmlentities|utf8}&amp;url={lienperma_billet|rawurlencode}" class="btn btn-link p-2" onclick="window.open(this.href,'sharet','left=50,top=50,width=600,height=350,toolbar=0'); return false;" title="Partager sur Twitter" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"><span class="fe fe-twitter" aria-hidden="true"></span><span class="sr-only">Twitter</span></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </article>
    <!-- END:billet --> 
    <!-- BEGIN:nobillet -->
    <p>Pas de billet post&eacute;.</p>
    <!-- END:nobillet --> 
    {FILE "/fr/includes/pagination.html"} </div>
</div>
<!-- END:main -->
```



## Widget "Blog / Liste billets" - Version alternative : Grille

### Template : `/theme/fr/widgets/blog/liste_billets/grille/index.html` 

```html
<!--
Template du Widget "Liste des billets du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#liste-des-billets
-->
<!-- BEGIN:main -->
<section class="section blog-liste-billets grille" id="kiubi-section-{serial}">
  <div class="container">
    <div class="row"> 
      <!-- BEGIN:billet -->
      <div class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="{alterne_3}00">
        <article class="card w-100 blog-liste-billets" id="blog-billet-{billet_id}"> 
          <!-- BEGIN:illustration --> 
          <a href="{lien_billet}"><img src="{url_illustration}" alt="{titre|htmlentities}" class="card-img-top"/></a> 
          <!-- END:illustration -->
          <div class="card-body d-flex flex-column"> <small class="text-uppercase text-muted">{intitule_categorie}</small>
            <h3 class="card-title mb-2 mt-1"><a href="{lien_billet}">{titre}</a></h3>
            <p class="text-muted mb-3 mt-2"><i class="fe fe-clock mr-2"></i><time class="post-date" datetime="{annee_publication}-{num_mois_publication}-{num_jour_publication} {heure_publication}:{minute_publication}:00" itemprop="datePublished"><span class="day">{num_jour_publication}</span> <span class="month">{mois_publication}</span> <span class="year">{annee_publication}</span> &agrave; {heure_publication}h{minute_publication} </time>
            </p>
            <div class="post-content card-text mb-4">{accroche}</div>
            <!-- BEGIN:detail --> 
            <a href="{lien_billet}" class="btn btn-link align-self-start mt-auto p-0">Lire la suite <i class="fe fe-arrow-right ml-2"></i></a> 
            <!-- END:detail --> 
          </div>
        </article>
      </div>
      <!-- END:billet --> 
      <!-- BEGIN:nobillet -->
      <p>Pas de billet post&eacute;.</p>
      <!-- END:nobillet --> 
    </div>
    {FILE "/fr/includes/pagination.html"}
  </div>
</section>
<!-- END:main -->
```



## Widget "Blog / Liste commentaires"

### Template : `/theme/fr/widgets/blog/liste_commentaires/index.html` 

```html
<!-- 
Template du Widget "Liste des commentaires d'un billet du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#liste-des-commentaires
-->

<!-- BEGIN:main -->
<section class="section blog-liste-commentaires" id="comment">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h3 class="mb-4">{intitule}</h3>
    <!-- END:intitule --> 
    <!-- BEGIN:commentaires -->
    <!-- BEGIN:commentaire -->
    <article class="post post-comment bg-light mb-4 p-4 color-{alterne}">
      <div class="media"> <img src="{gravatar}" alt="{auteur|htmlentities}" class="avatar rounded-circle mr-3" />
        <div class="media-body">
          <header class="post-header mb-3" id="comment{compteur}">
            <h4 class="author">
              <!-- BEGIN:site_auteur --><a href="{site_auteur}" rel="author" target="_blank">{auteur}</a><!-- END:site_auteur -->
              <!-- BEGIN:nosite_auteur -->{auteur}<!-- END:nosite_auteur -->
              <!-- BEGIN:admin --><span class="badge badge-info">Auteur</span><!-- END:admin --> 
            </h4>
            <time class="post-date text-muted" datetime="{annee_publication}-{num_mois_publication}-{num_jour_publication} {heure_publication}:{minute_publication}:00"> Le {num_jour_publication} {mois_abrev_publication} {annee_publication} &agrave; {heure_publication}h{minute_publication}</time>
          </header>
          <div class="post-content">
            <p>{commentaire}</p>
          </div>
        </div>
      </div>
    </article>
    <!-- END:commentaire --> 
    <!-- END:commentaires --> 
    <!-- BEGIN:nocommentaire -->
    <p> Soyez le premier &agrave; <a href="#new-comment">poster un commentaire</a> !</p>
    <!-- END:nocommentaire --> 
  </div>
</section>
<!-- END:main -->
```



## Widget "Blog / Poster commentaire"

### Template : `/theme/fr/widgets/blog/poster_commentaire/index.html` 

```html
<!-- 
Template du Widget "Ajout de commentaires d'un billet du blog"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-blog.html#poster-un-commentaire
-->

<!-- BEGIN:main -->

<div class="section blog-poster-commentaire" id="new-comment">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h3 class="mb-4">{intitule}</h3>
    <!-- END:intitule --> 
    <!-- BEGIN:commentaires_ouverts --> 
    
    <!-- BEGIN:erreurs -->
    <div class="alert alert-danger" role="alert"> Veuillez compl&eacute;ter les champs :
      <ul>
        <!-- BEGIN:erreur -->
        <li>{erreur}</li>
        <!-- END:erreur -->
      </ul>
    </div>
    <!-- END:erreurs -->
    
    <form method="post" action="#new-comment">
      <!-- BEGIN:identifie --> 
      <!-- END:identifie --> 
      <!-- BEGIN:nonidentifie -->
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label for="auteur">Pseudo</label>
            <input class="form-control" id="auteur" name="auteur" placeholder="Obligatoire" type="text" value="{auteur}">
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="email">Email</label>
            <input class="form-control" id="email" name="email" placeholder="Facultatif" type="email" value="{email}">
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="site_web">Site Web</label>
            <input class="form-control" id="site_web" name="site_web" placeholder="Facultatif" type="text" value="{site_web}">
          </div>
        </div>
      </div>
      <!-- END:nonidentifie -->
      <div class="form-group">
        <label for="commentaire">Votre commentaire</label>
        <textarea class="form-control" rows="10" id="commentaire" name="commentaire">{commentaire}</textarea>
      </div>
      
      <!-- BEGIN:consentement -->
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" name="consentement_ok" id="consentement_ok" type="checkbox" value="1" {check_consentement}/>
          <label for="consentement_ok" class="custom-control-label">J'accepte la publication du commentaire </label>
        </div>
      </div>
      <p class="small text-muted"> Les informations recueillies sont utilis&eacute;es pour publier votre commentaire. Conform&eacute;ment
        au "<a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank">r&egrave;glement
        g&eacute;n&eacute;ral sur la protection des donn&eacute;es personnelles</a>", vous pouvez exercer votre droit
        d'acc&egrave;s aux donn&eacute;es vous concernant et les faire rectifier en contactant {SOCIETE.societe_nom}
        par email (<a href="mailto:{SOCIETE.contact_mail}">{SOCIETE.contact_mail}</a>). <a href="/donnees-personnelles.html" target="_blank">Consulter les d&eacute;tails du consentement.</a> </p>
      <!-- END:consentement --> 
      
      <!-- BEGIN:captcha -->
      <div class="form-group">
        <label for="captcha[{captcha_id}]">Anti-spam</label>
        <p>{captcha_question} :</p>
        <input name="captcha[{captcha_id}]"  id="captcha[{captcha_id}]" type="text" class="form-control" style="width: 100px" />
      </div>
      <!-- END: captcha -->
      
      <input type="submit" name="submit" value="Poster" class="btn btn-primary"/>
      <input type="hidden" name="act" value="post" />
      <input type="hidden" name="ctl" value="{ctl}" />
    </form>
    <!-- END:commentaires_ouverts --> 
    <!-- BEGIN:commentaires_identification -->
    <p><a href="{baseLangue}/compte/login.html?o=o">Identifiez vous</a> pour poster un commentaire. </p>
    <!-- END:commentaires_identification --> 
    <!-- BEGIN:commentaires_fermes -->
    <p>Les commentaires de ce billet sont ferm&eacute;s.</p>
    <!-- END:commentaires_fermes --> 
    <!-- BEGIN:commentaires_moderes -->
    <p>Votre commentaire a bien &eacute;t&eacute; enregistr&eacute;, il doit d'abord &ecirc;tre valid&eacute; par {site_nom} avant d'appara&icirc;tre dans la liste des commentaires.</p>
    <!-- END:commentaires_moderes --> 
  </div>
</div>
<!-- END:main -->
```



## Widget "Catalogue / Categories"

### Template : `/theme/fr/widgets/catalogue/categories/index.html` 

```html
<!-- 
Template du Widget "Categories du catalogue"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#categories
-->

<!-- BEGIN:main -->
<aside class="widget catalogue-categories" data-filter="category" id="kiubi-widget-{serial}"> 
  <!-- BEGIN:intitule -->
  <h5>{intitule}</h5>
  <!-- END: intitule -->
  <ul class="nav flex-column">
    <!-- BEGIN:accueil -->
    <li class="nav-item"><a href="{lien_accueil}" class="nav-link {actif|mapValue|active}" title="{intitule_accueil|htmlentities}">{intitule_accueil}</a></li>
    <!-- END:accueil --> 
    <!-- BEGIN:categorie -->
    <li class="nav-item"><a href="{lien_categorie}" class="nav-link {actif|mapValue|active}" data-categorie="{categorie_id}" title="{intitule_categorie|htmlentities}">{intitule_categorie}</a></li>
    <!-- END:categorie -->
  </ul>
  <!-- BEGIN:nocategorie -->
  <p>Pas de cat&eacute;gorie disponible.</p>
  <!-- END:nocategorie --> 
</aside>
<!-- END:main -->
```



## Widget "Catalogue / Categories" - Version alternative : Filtres

### Template : `/theme/fr/widgets/catalogue/categories/filtres/index.html` 

```html
<!-- 
Template du Widget "Categories du catalogue"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#categories
-->

<!-- BEGIN:main -->
<aside class="widget catalogue-categories filtres" data-filter="category" id="kiubi-widget-{serial}"> 
  <!-- BEGIN: intitule -->
  <h5>{intitule}</h5>
  <!-- END: intitule -->
  <div class="custom-control custom-checkbox mt-3 d-none">
    <input id="category-all-{serial}" type="checkbox" name="categorie" class="custom-control-input" data-categorie="all" checked="checked">
    <label for="category-all-{serial}" class="custom-control-label d-block">{intitule_accueil}</label>
  </div>
  <!-- BEGIN:categorie -->
  <div class="custom-control custom-checkbox mt-3">
    <input id="category-{categorie_id}-{serial}" type="checkbox" name="categorie" class="custom-control-input" data-categorie="{categorie_id}" {actif|mapValue|checked}>
    <label for="category-{categorie_id}-{serial}" class="custom-control-label d-block">{intitule_categorie}</label>
  </div>
  <!-- END:categorie --> 
  <!-- BEGIN:nocategorie -->
  <p>Pas de cat&eacute;gorie disponible.</p>
  <!-- END:nocategorie --> 
</aside>
<!-- END:main -->
```



## Widget "Catalogue / Liste categories"

### Template : `/theme/fr/widgets/catalogue/liste_categories/index.html` 

```html
<!--
Template du Widget "Listes des categories du catalogue"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#liste-des-categories
-->

<!-- BEGIN:main -->
<section class="section catalogue-liste-categories grille" id="kiubi-section-{serial}">
  <div class="container">
    <div class="row"> 
      <!-- BEGIN:categorie -->
      <div class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="{alterne_3}00">
        <div class="card w-100" id="categorie-{categorie_id}"> 
          <!-- BEGIN:illustration --> 
          <a href="{lien_categorie}" title="{intitule_categorie|htmlentities} - D&eacute;tail de la cat&eacute;gorie"><img src="{url_illustration_vignette}" alt="{intitule_categorie|htmlentities}" class="card-img-top" /></a> 
          <!-- END:illustration -->
          <div class="card-body d-flex flex-column">
            <h3 class="card-title"><a href="{lien_categorie}">{intitule_categorie}</a></h3>
            <!-- BEGIN:accroche -->
            <p class="card-text desc">{accroche}</p>
            <!-- END:accroche --> 
            <a href="{lien_categorie}" class="btn btn-primary align-self-start mt-auto">D&eacute;tail</a></div>
        </div>
      </div>
      <!-- END:categorie --> 
    </div>
    <!-- BEGIN:nocategorie -->
    <p>Pas de cat&eacute;gorie disponible.</p>
    <!-- END:nocategorie --> 
    {FILE "/fr/includes/pagination.html"} </div>
</section>
<!-- END:main -->
```



## Widget "Catalogue / Liste categories" - Version alternative : Carrousel

### Template : `/theme/fr/widgets/catalogue/liste_categories/carrousel/index.html` 

```html
<!--
Template du Widget "Listes des categories du catalogue - Carrousel"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#liste-des-categories
-->

<!-- BEGIN:main -->
<section class="catalogue-liste-categories carrousel" id="kiubi-section-{serial}">
    <div class="owl-carousel" data-owl-margin="0" data-owl-animateout="fadeOut" data-owl-responsive="1-1-1"> 
      <!-- BEGIN:categorie -->
      <div class="jumbotron d-flex align-items-center bg-light mb-0" style="<!-- BEGIN: illustration -->background-image: url({racine}/media/{illustration});<!-- END: illustration -->">
        <div class="container">
          <h1 class="display-3 my-4"><a href="{lien_categorie}" class="text-white">{intitule_categorie}</a></h1>
          <!-- BEGIN:accroche -->
          <div class="post-content lead my-4 text-white">{accroche}</div>
          <!-- END:accroche --> 
          <a href="{lien_categorie}" class="btn btn-primary" >D&eacute;tail</a> </div>
      </div>
      <!-- END:categorie --> 
    </div>
</section>
<!-- END:main -->
```



## Widget "Catalogue / Liste categories" - Version alternative : Jumbotron

### Template : `/theme/fr/widgets/catalogue/liste_categories/jumbotron/index.html` 

```html
<!--
Template du Widget "Listes des categories du catalogue" - Jumbotron

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#liste-des-categories
-->

<!-- BEGIN:main -->
<section class="catalogue-liste-categories" id="kiubi-section-{serial}">
      <!-- BEGIN:categorie -->
      <div class="jumbotron d-flex align-items-center bg-light dark-overlay py-5 mb-0" style="<!-- BEGIN: illustration -->background-image: url({racine}/media/{illustration});<!-- END: illustration -->">
        <div class="container text-center">
          <h1 class="display-4 mb-0"><a href="{lien_categorie}" class="text-white">{intitule_categorie}</a></h1>
          <!-- BEGIN:accroche -->
          <div class="post-content lead mt-4 text-light">{accroche}</div>
          <!-- END:accroche --> 
        </div>
      </div>
      <!-- END:categorie --> 
</section>
<!-- END:main -->
```



## Widget "Catalogue / Liste commentaires"

### Template : `/theme/fr/widgets/catalogue/liste_commentaires/index.html` 

```html
<!-- 
Template du Widget "Liste des commentaires d'un produit"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#liste-des-commentaires
-->

<!-- BEGIN:main -->
<section class="section catalogue-liste-commentaires" id="comment">
  <div class="container">
    
    <!-- BEGIN:intitule -->
    <h3 class="mb-4">{intitule}</h3>
    <!-- END:intitule -->
    
    <!-- BEGIN:commentaires -->
    <p class="review">Note moyenne des internautes ({nb_commentaires} &eacute;valuation{pluriel_commentaire}) : <strong>{note_moyenne_5}/5</strong><span class="d-inline-flex text-warning note-moyenne-{note_moyenne_5} ml-2"><span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span>
    </span>
    </p>
  <!-- BEGIN:commentaire -->
  <article class="post post-comment bg-light mb-4 p-4 color-{alterne}">
    <div class="media"> <img src="{gravatar}" alt="{auteur|htmlentities}" class="avatar rounded-circle mr-3" />
      <div class="media-body">
        <header class="post-header mb-3" id="comment-{compteur}">
          <h4 class="author">{auteur} <!-- BEGIN:admin --><span class="badge badge-info">Auteur</span><!-- END:admin --></h4>
          <div class="ratting">
            Note : {note_5}/5<span class="d-inline-flex text-warning note-moyenne-{note_5} ml-2"><span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span>
          </span></div>
          <time class="post-date text-muted" datetime="{annee_publication}-{num_mois_publication}-{num_jour_publication} {heure_publication}:{minute_publication}:00">Le {num_jour_publication} {mois_publication} {annee_publication} &agrave; {heure_publication}h{minute_publication}</time>
        </header>
        <div class="post-content">
          <p>{commentaire}</p>
        </div>
      </div>
    </div>
  </article>
  <!-- END:commentaire -->
  <!-- END:commentaires -->
  <!-- BEGIN:nocommentaire -->
  <p> Soyez le premier &agrave; <a href="#new-comment">poster un commentaire</a> !</p>
  <!-- END:nocommentaire --> 
</div>
</section>
<!-- END:main -->
```



## Widget "Catalogue / Liste produits"

### Template : `/theme/fr/widgets/catalogue/liste_produits/index.html` 

```html
<!-- 
Template du Widget "Liste des produits"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#liste-des-produits
-->

<!-- BEGIN: main -->
<section class="section catalogue-liste-produits">
  <div class="container">
    <header class="post-header mb-3">
      <div class="row">
        <div class="col-md"> 
          <!-- BEGIN:intitule -->
          <h2 class="mb-4">{intitule}</h2>
          <!-- END:intitule --> 
        </div>
        <div class="col-md-auto text-right">
          <div class="btn-group" role="group">
            <div class="btn-group affichage">
              <button class="btn btn-link btn-sm dropdown-toggle" type="button" id="affichage" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Affichage</button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="affichage"> <a href="{lien_affichage}=l" class="dropdown-item">Liste</a> <a href="{lien_affichage}=v" class="dropdown-item">Vignette</a> </div>
            </div>
            <div class="btn-group tri">
              <button class="btn btn-link btn-sm dropdown-toggle" type="button" id="tri" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tri</button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="tri"> <a href="{lien_tri}=alpha" class="dropdown-item">Produit (A-Z)</a> <a href="{lien_tri}=alphaDESC" class="dropdown-item">Produit (Z-A)</a> <a href="{lien_tri}=prix" class="dropdown-item">Prix croissant</a> <a href="{lien_tri}=prixDESC" class="dropdown-item">Prix d&eacute;croissant</a> <a href="{lien_tri}=date" class="dropdown-item">Date de disponibilit&eacute; croissante</a> <a href="{lien_tri}=dateDESC" class="dropdown-item">Date de disponibilit&eacute; d&eacute;croissante</a> <a href="{lien_tri}=note" class="dropdown-item">Note croissante</a> <a href="{lien_tri}=noteDESC" class="dropdown-item">Note d&eacute;croissante</a> </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {liste_produits} 
    {FILE "/fr/includes/pagination.html"} </div>
</section>

<!-- END: main -->
```

### Template : `/theme/fr/widgets/catalogue/liste_produits/liste.html` 

```html
<!--
Template du Widget "Liste des produits" pour l'affichage en mode "Liste"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#liste-des-produits
-->

<!-- BEGIN: main -->
<!-- BEGIN:produits -->
<div class="liste-produits-liste grille">
  <!-- BEGIN:produit -->
  <div class="produit produit-listing card p-4" id="produit-{produit_id}">
    <div class="row">
      <div class="col-md-3 mb-4 mb-md-0"> 
        <!-- BEGIN: illustration --> 
        <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"><img src="{url_illustration_vignette}" alt="{intitule_produit|htmlentities}" class="img-fluid w-100"/></a> 
        <!-- END: illustration --> 
        <!-- BEGIN: noillustration --> 
        <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"><img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" class="img-fluid w-100"/></a> 
        <!-- END: noillustration --> 
      </div>
      <div class="col-md-5">
        <h3 class="card-title mb-2 mt-1"><a href="{lien_produit}">{intitule_produit}</a></h3>
        <div class="note-moyenne-{note_moyenne_5} text-warning mb-2" title="&Eacute;valuation : {note_moyenne_5}/5"> <span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span></div>
        <!-- BEGIN:tags -->
        <p class="tags d-none">{tags}</p>
        <!-- END:tags --> 
        <!-- BEGIN:non_disponible -->
        <p class="text-danger">Disponible &agrave; partir du {num_jour_disponibilite}/{num_mois_disponibilite}/{annee_disponibilite}</p>
        <!-- END:non_disponible --> 
        <!-- BEGIN:en_stock -->
        <p class="text-success">En stock</p>
        <!-- END:en_stock --> 
        <!-- BEGIN:rupture_partielle -->
        <p class="text-success">En stock</p>
        <!-- END:rupture_partielle --> 
        <!-- BEGIN:rupture -->
        <p class="text-danger">En rupture de stock</p>
        <!-- END:rupture --> 
        <!-- BEGIN:accroche -->
        <p class="produit-desc post-content">{accroche}</p>
        <!-- END:accroche --> 
      </div>
      <div class="col-12 col-md-4">
        <form id="fp{serial}_{produit_id}" method="post" action="{baseLangue}/ecommerce/panier.html">
          <p class="price"><span class="<!-- BEGIN:prix_promo -->promo<!-- END:prix_promo -->">{prix}</span> 
            <!-- BEGIN:prix_barre --> 
            <del class="text-muted">{prix_barre}</del> 
            <!-- END:prix_barre --> 
          </p>
          <div class="produit-info"> 
            <!-- BEGIN:variantes_optim -->
            <div class="form-group w-100">
              <select name="vid" class="custom-select variantes">
                <!-- BEGIN:variante --> 
                <!-- BEGIN:en_stock -->
                <option value="{variante_id}">{intitule_variante} - {prix_variante}</option>
                <!-- END:en_stock --> 
                <!-- BEGIN:rupture --> 
                <!--<optgroup label="{intitule_variante} - {prix_variante}" disabled="disabled"></optgroup>--> 
                <!-- END:rupture --> 
                <!-- END:variante -->
              </select>
            </div>
            <!-- END:variantes_optim --> 
            <!-- BEGIN: panier -->
            <div class="form-group">
              <button type="submit" class="btn btn-warning btn-addcart w-100" data-cart-add="true" data-cart-error="cartalert{produit_id}"><span class="cart-success d-none"><i class="fe fe-check mr-2"></i>Ajout&eacute;</span><span>Ajouter au panier</span></button>
            </div>
            <!-- END: panier --> 
          </div>
          <p id="cartalert{produit_id}" class="text-danger" style="height: 30px; margin-bottom: -30px;"></p>
          <input type="hidden" name="pid" value="{produit_id}" />
          <input type="hidden" name="act" value="addP" />
          <input type="hidden" name="ctl" value="{ctl}" />
        </form>
      </div>
    </div>
  </div>
  <!-- END:produit --> 
</div>
<!-- END:produits --> 
<!-- BEGIN:noproduit -->
<p>Pas de produit disponible.</p>
<!-- END:noproduit --> 
<!-- END: main -->
```

### Template : `/theme/fr/widgets/catalogue/liste_produits/vignettes.html` 

```html
<!--
Template du Widget "Liste des produits" pour l'affichage en mode "Vignettes"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#liste-des-produits
-->

<!-- BEGIN: main -->
<!-- BEGIN:produits -->
<div class="liste-produits-vignettes grille">
  <div class="row">
    <!-- BEGIN:produit -->
    <div class="col-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="{alterne_3}00">
      <div class="produit produit-card card w-100" id="produit-{produit_id}">
       <div class="produit-image">
         <!-- BEGIN: illustration -->
         <img src="{url_illustration_vignette}" alt="{intitule_produit|htmlentities}" class="card-img-top"/>
         <!-- END: illustration -->
         <!-- BEGIN: noillustration -->
         <img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" class="card-img-top"/>
         <!-- END: noillustration -->
         <div class="produit-hover-overlay">
          <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"></a>
          <a href="{lien_produit}" class="btn btn-primary"><i class="fe fe-search mr-2"></i>D&eacute;tail</a>
		 </div>
		</div>
        <div class="card-body">
         <small class="text-uppercase text-muted">{intitule_categorie}</small>
          <h3 class="card-title mb-2 mt-1"><a href="{lien_produit}">{intitule_produit}</a></h3>
          <p class="price"><span class="<!-- BEGIN:prix_promo -->promo<!-- END:prix_promo -->">{prix}</span>
            <!-- BEGIN:prix_barre -->
            <del class="text-muted">{prix_barre}</del>
            <!-- END:prix_barre -->
          </p>
          <!-- BEGIN:accroche -->
          <p class="card-text desc">{accroche}</p>
          <!-- END:accroche -->
            <div class="note-moyenne-{note_moyenne_5} text-warning mt-2" title="&Eacute;valuation : {note_moyenne_5}/5">
              <span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span>
            </div> 
        </div>
      </div>
    </div>
    <!-- END:produit -->
  </div>
</div>
<!-- END:produits -->

<!-- BEGIN:noproduit -->
<p>Pas de produit disponible.</p>
<!-- END:noproduit -->

<!-- END: main -->
```



## Widget "Catalogue / Liste produits" - Version alternative : Grille 4 col

### Template : `/theme/fr/widgets/catalogue/liste_produits/grille_4_col/index.html` 

```html
<!-- 
Template du Widget "Liste des produits"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#liste-des-produits
-->

<!-- BEGIN: main -->
<section class="section catalogue-liste-produits grille-4-col">
  <div class="container">
    <header class="post-header mb-3">
      <div class="row">
        <div class="col-md"> 
          <!-- BEGIN:intitule -->
          <h2 class="mb-4">{intitule}</h2>
          <!-- END:intitule --> 
        </div>
        <div class="col-md-auto text-right">
          <div class="btn-group" role="group">
            <div class="btn-group affichage">
              <button class="btn btn-link btn-sm dropdown-toggle" type="button" id="affichage" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Affichage</button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="affichage"> <a href="{lien_affichage}=l" class="dropdown-item">Liste</a> <a href="{lien_affichage}=v" class="dropdown-item">Vignette</a> </div>
            </div>
            <div class="btn-group tri">
              <button class="btn btn-link btn-sm dropdown-toggle" type="button" id="tri" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tri</button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="tri"> <a href="{lien_tri}=alpha" class="dropdown-item">Produit (A-Z)</a> <a href="{lien_tri}=alphaDESC" class="dropdown-item">Produit (Z-A)</a> <a href="{lien_tri}=prix" class="dropdown-item">Prix croissant</a> <a href="{lien_tri}=prixDESC" class="dropdown-item">Prix d&eacute;croissant</a> <a href="{lien_tri}=date" class="dropdown-item">Date de disponibilit&eacute; croissante</a> <a href="{lien_tri}=dateDESC" class="dropdown-item">Date de disponibilit&eacute; d&eacute;croissante</a> <a href="{lien_tri}=note" class="dropdown-item">Note croissante</a> <a href="{lien_tri}=noteDESC" class="dropdown-item">Note d&eacute;croissante</a> </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {liste_produits} 
    {FILE "/fr/includes/pagination.html"} </div>
</section>

<!-- END: main -->
```



## Widget "Catalogue / Liste produits" - Version alternative : Produit detail

### Template : `/theme/fr/widgets/catalogue/liste_produits/produit_detail/index.html` 

```html
<!-- 
Template du Widget "Liste des produits"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#liste-des-produits
-->

<!-- BEGIN: main -->

<section class="section catalogue-liste-produits produit-detail">
  <div class="container">
    {liste_produits}
  </div>
  {FILE "/fr/includes/pagination.html"}
</section>

<!-- END: main -->
```



## Widget "Catalogue / Poster commentaire"

### Template : `/theme/fr/widgets/catalogue/poster_commentaire/index.html` 

```html
<!-- 
Template du Widget "Ajout d'un commentaire d'un produit"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#poster-un-commentaire
-->

<!-- BEGIN:main -->
<div class="section catalogue-poster-commentaire" id="new-comment">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h3 class="mb-4">{intitule}</h3>
    <!-- END:intitule --> 
    <!-- BEGIN:commentaires_ouverts --> 
    
    <!-- BEGIN:erreurs -->
    <div class="alert alert-danger" role="alert"> Veuillez compl&eacute;ter les champs :
      <ul>
        <!-- BEGIN:erreur -->
        <li>{erreur}</li>
        <!-- END:erreur -->
      </ul>
    </div>
    <!-- END:erreurs -->
    
    <form method="post" action="#new-comment">
      <!-- BEGIN:identifie --> 
      <!-- END:identifie -->
      <div class="row"> 
        
        <!-- BEGIN:nonidentifie -->
        <div class="col-md-4">
          <div class="form-group">
            <label for="auteur">Pseudo</label>
            <input class="form-control" id="auteur" name="auteur" placeholder="Obligatoire" type="text" value="{auteur}">
          </div>
        </div>
        
        <!-- END:nonidentifie -->
        <div class="col-md-4">
          <div class="form-group">
            <label for="note">Votre note sur 5</label>
            <select name="note" id="note" class="custom-select w-100 d-block">
              <option value="10" {selected_note10}>5 (Tr&egrave;s bon)</option>
              <option value="8" {selected_note8}>4</option>
              <option value="6" {selected_note6}>3</option>
              <option value="4" {selected_note4}>2</option>
              <option value="2" {selected_note2}>1</option>
              <option value="0" {selected_note0}>0 (Mauvais)</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="commentaire">Votre commentaire</label>
        <textarea class="form-control" rows="10" id="commentaire" name="commentaire">{commentaire}</textarea>
      </div>
      
      <!-- BEGIN:consentement -->
      
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" name="consentement_ok" id="consentement_ok" type="checkbox" value="1" {check_consentement}/>
          <label for="consentement_ok" class="custom-control-label">J'accepte la publication du commentaire </label>
        </div>
      </div>
      <p class="small text-muted"> Les informations recueillies sont utilis&eacute;es pour publier votre commentaire. Conform&eacute;ment au
        "<a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank">r&egrave;glement
        g&eacute;n&eacute;ral sur la protection des donn&eacute;es personnelles</a>", vous pouvez exercer votre droit
        d'acc&egrave;s aux donn&eacute;es vous concernant et les faire rectifier en contactant {SOCIETE.societe_nom}
        par email (<a href="mailto:{SOCIETE.contact_mail}">{SOCIETE.contact_mail}</a>). <a href="/donnees-personnelles.html" target="_blank">Consulter les d&eacute;tails du consentement.</a> </p>
      <!-- END:consentement --> 
      
      <!-- BEGIN:captcha -->
      
      <div class="form-group">
        <label for="captcha[{captcha_id}]">Anti-spam</label>
        <p>{captcha_question} :</p>
        <input name="captcha[{captcha_id}]"  id="captcha[{captcha_id}]" type="text" class="form-control" style="width: 100px" />
      </div>
      
      <!-- END: captcha -->
      
      <input type="submit" name="Submit" value="Poster" class="btn btn-primary" />
      <input type="hidden" name="act" value="post" />
      <input type="hidden" name="ctl" value="{ctl}" />
    </form>
    <!-- END:commentaires_ouverts --> 
    <!-- BEGIN:commentaires_identification -->
    <p><a href="{baseLangue}/compte/login.html?o=o">Identifiez vous</a> pour poster un commentaire.</p>
    <!-- END:commentaires_identification --> 
    <!-- BEGIN:commentaires_fermes -->
    <p>Les commentaires de ce produit sont ferm&eacute;s.</p>
    <!-- END:commentaires_fermes --> 
    <!-- BEGIN:commentaires_moderes -->
    <p>Votre commentaire a bien &eacute;t&eacute; enregistr&eacute;, il doit d'abord &ecirc;tre valid&eacute; par {site_nom} avant d'appara&icirc;tre dans la liste des commentaires.</p>
    <!-- END:commentaires_moderes --> 
  </div>
</div>
<!-- END:main -->
```



## Widget "Catalogue / Produits associes"

### Template : `/theme/fr/widgets/catalogue/produits_associes/index.html` 

```html
<!--
Template du Widget "Produits associes"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#produits-associes
-->

<!-- BEGIN: main -->
<!-- BEGIN:produits -->
<section class="section catalogue-produits-associes grille" id="kiubi-section-{serial}">
  <div class="container">
    <h3 class="mb-4">{intitule}</h3>
    <div class="row"> 
      <!-- BEGIN:produit -->
      <div class="col-6 col-lg-2 d-flex align-items-stretch">
        <div class="produit produit-card card w-100" id="produit-{produit_id}">
          <div class="produit-image"> 
            <!-- BEGIN: illustrations --> 
            <img src="{url_illustration_vignette}" alt="{intitule_produit|htmlentities}" class="card-img-top" /> 
            <!-- END: illustrations --> 
            <!-- BEGIN: noillustrations --> 
            <img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" class="card-img-top"/> 
            <!-- END: noillustrations -->
            <div class="produit-hover-overlay"> <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"></a> <a href="{lien_produit}" class="btn btn-primary"><i class="fe fe-search mr-2"></i>D&eacute;tail</a> </div>
          </div>
          <div class="card-body"> <small class="text-uppercase text-muted">{intitule_categorie}</small>
            <h3 class="card-title mt-2 h5"><a href="{lien_produit}">{intitule_produit}</a></h3>
            <p class="price mb-0"><span class="<!-- BEGIN:prix_promo -->promo<!-- END:prix_promo -->">{prix_min}</span> 
              <!-- BEGIN:prix_barre --> 
              <del class="text-muted">{prix_barre}</del> 
              <!-- END:prix_barre --> 
            </p>
            <!-- BEGIN:accroche -->
            <p class="card-text desc">{accroche}</p>
            <!-- END:accroche --> 
          </div>
        </div>
      </div>
      <!-- END:produit --> 
    </div>
  </div>
</section>
<!-- END:produits --> 

<!-- BEGIN:noproduits --> 
<!-- END:noproduits --> 

<!-- END: main -->
```



## Widget "Catalogue / Produits associes" - Version alternative : Carrousel grille

### Template : `/theme/fr/widgets/catalogue/produits_associes/carrousel_grille/index.html` 

```html
<!--
Template du Widget "Produits associes"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#produits-associes
-->

<!-- BEGIN: main -->
<!-- BEGIN:produits -->
<section class="section catalogue-produits-associes carrousel-grille" id="kiubi-section-{serial}">
  <div class="container">
    <h3 class="mb-4">{intitule}</h3>
    <div class="owl-carousel" data-owl-margin="24" data-owl-dots="true" data-owl-nav="false" data-owl-responsive="1-3-6"> 
      <!-- BEGIN:produit -->
      <div class="produit produit-card card m-1" id="produit-{produit_id}">
        <div class="produit-image"> 
          <!-- BEGIN: illustrations --> 
          <img src="{url_illustration_vignette}" alt="{intitule_produit|htmlentities}" class="card-img-top" /> 
          <!-- END: illustrations --> 
          <!-- BEGIN: noillustrations --> 
          <img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" class="card-img-top"/> 
          <!-- END: noillustrations -->
          <div class="produit-hover-overlay"> <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"></a> <a href="{lien_produit}" class="btn btn-primary"><i class="fe fe-search mr-2"></i>D&eacute;tail</a> </div>
        </div>
        <div class="card-body"> <small class="text-uppercase text-muted">{intitule_categorie}</small>
          <h3 class="card-title mt-2 h5"><a href="{lien_produit}">{intitule_produit}</a></h3>
          <p class="price mb-0"><span class="<!-- BEGIN:prix_promo -->promo<!-- END:prix_promo -->">{prix}</span> 
            <!-- BEGIN:prix_barre --> 
            <del class="text-muted">{prix_barre}</del> 
            <!-- END:prix_barre --> 
          </p>
          <!-- BEGIN:accroche -->
          <p class="card-text desc">{accroche}</p>
          <!-- END:accroche --> 
        </div>
      </div>
      <!-- END:produit --> 
    </div>
  </div>
</section>
<!-- END:produits --> 
<!-- BEGIN:noproduits --> 
<!-- END:noproduits --> 
<!-- END: main -->
```



## Widget "Catalogue / Produits egalement achetes"

### Template : `/theme/fr/widgets/catalogue/produits_egalement_achetes/index.html` 

```html
<!--
Template du Widget "Produits egalement achetes"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#produits-egalement-achetes
-->

<!-- BEGIN: main -->
<!-- BEGIN:produits -->
<section class="section catalogue-produits-egalement-achetes grille" id="kiubi-section-{serial}">
  <div class="container">
    <h3 class="mb-4">{intitule}</h3>
    <div class="row"> 
      <!-- BEGIN:produit -->
      <div class="col-6 col-lg-2 d-flex align-items-stretch">
        <div class="produit produit-card card w-100" id="produit-{produit_id}">
          <div class="produit-image"> 
            <!-- BEGIN: illustrations --> 
            <img src="{url_illustration_vignette}" alt="{intitule_produit|htmlentities}" class="card-img-top" /> 
            <!-- END: illustrations --> 
            <!-- BEGIN: noillustrations --> 
            <img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" class="card-img-top"/> 
            <!-- END: noillustrations -->
            <div class="produit-hover-overlay"> <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"></a> <a href="{lien_produit}" class="btn btn-primary"><i class="fe fe-search mr-2"></i>D&eacute;tail</a> </div>
          </div>
          <div class="card-body"> <small class="text-uppercase text-muted">{intitule_categorie}</small>
            <h3 class="card-title mt-2 h5"><a href="{lien_produit}">{intitule_produit}</a></h3>
            <p class="price mb-0"><span class="<!-- BEGIN:prix_promo -->promo<!-- END:prix_promo -->">{prix}</span> 
              <!-- BEGIN:prix_barre --> 
              <del class="text-muted">{prix_barre}</del> 
              <!-- END:prix_barre --> 
            </p>
            <!-- BEGIN:accroche -->
            <p class="card-text desc">{accroche}</p>
            <!-- END:accroche --> 
          </div>
        </div>
      </div>
      <!-- END:produit --> 
    </div>
  </div>
</section>
<!-- END:produits -->

<!-- BEGIN:noproduits -->
<!-- END:noproduits -->

<!-- END: main -->
```



## Widget "Catalogue / Produits egalement achetes" - Version alternative : Carrousel grille

### Template : `/theme/fr/widgets/catalogue/produits_egalement_achetes/carrousel_grille/index.html` 

```html
<!--
Template du Widget "Produits egalement achetes"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#produits-egalement-achetes
-->

<!-- BEGIN: main -->
<!-- BEGIN:produits -->
<section class="section catalogue-produits-egalement-achetes carrousel-grille" id="kiubi-section-{serial}">
  <div class="container">
    <h3 class="mb-4">{intitule}</h3>
    <div class="owl-carousel" data-owl-margin="24" data-owl-dots="true" data-owl-nav="false" data-owl-responsive="1-3-6"> 
      <!-- BEGIN:produit -->
      <div class="produit produit-card card m-1" id="product-{produit_id}">
        <div class="product-image"> 
          <!-- BEGIN: illustrations --> 
          <img src="{url_illustration_vignette}" alt="{intitule_produit|htmlentities}" class="card-img-top" /> 
          <!-- END: illustrations --> 
          <!-- BEGIN: noillustrations --> 
          <img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" class="card-img-top"/> 
          <!-- END: noillustrations -->
          <div class="produit-hover-overlay"> <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"></a> <a href="{lien_produit}" class="btn btn-primary"><i class="fe fe-search mr-2"></i>D&eacute;tail</a> </div>
        </div>
        <div class="card-body"> <small class="text-uppercase text-muted">{intitule_categorie}</small>
          <h3 class="card-title mt-2 h5"><a href="{lien_produit}">{intitule_produit}</a></h3>
          <p class="price mb-0"><span class="<!-- BEGIN:prix_promo -->promo<!-- END:prix_promo -->">{prix}</span> 
            <!-- BEGIN:prix_barre --> 
            <del class="text-muted">{prix_barre}</del> 
            <!-- END:prix_barre --> 
          </p>
          <!-- BEGIN:accroche -->
          <p class="card-text desc">{accroche}</p>
          <!-- END:accroche --> 
        </div>
      </div>
      <!-- END:produit --> 
    </div>
  </div>
</section>
<!-- END:produits --> 
<!-- BEGIN:noproduits --> 
<!-- END:noproduits --> 
<!-- END: main -->
```



## Widget "Catalogue / Produits plus"

### Template : `/theme/fr/widgets/catalogue/produits_plus/index.html` 

```html
<!--
Template du Widget "Produits les plus..."

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#produits-les-plus
-->

<!-- BEGIN: main -->
<section class="section catalogue-produits-plus grille" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h2 class="mb-4">{intitule}</h2>
    <!-- END:intitule --> 
    <!-- BEGIN:produits -->
    <div class="row"> 
      <!-- BEGIN:produit -->
      <div class="col-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="{alterne_4}00">
        <div class="produit produit-card card w-100" id="produit-{produit_id}">
          <div class="produit-image"> 
            <!-- BEGIN: illustrations --> 
            <img src="{url_illustration_vignette}" alt="{intitule_produit|htmlentities}" class="card-img-top" /> 
            <!-- END: illustrations --> 
            <!-- BEGIN: noillustrations --> 
            <img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" class="card-img-top"/> 
            <!-- END: noillustrations -->
            <div class="produit-hover-overlay"> <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"></a> <a href="{lien_produit}" class="btn btn-primary"><i class="fe fe-search mr-2"></i>D&eacute;tail</a> </div>
          </div>
          <div class="card-body"> <small class="text-uppercase text-muted">{intitule_categorie}</small>
            <h3 class="card-title mb-2 mt-1"><a href="{lien_produit}">{intitule_produit}</a></h3>
            <p class="price"><span class="<!-- BEGIN:prix_promo -->promo<!-- END:prix_promo -->">{prix}</span> 
              <!-- BEGIN:prix_barre --> 
              <del class="text-muted">{prix_barre}</del> 
              <!-- END:prix_barre --> 
            </p>
            <!-- BEGIN:accroche -->
            <p class="card-text desc">{accroche}</p>
            <!-- END:accroche --> 
          </div>
        </div>
      </div>
      <!-- END:produit --> 
    </div>
    <!-- END:produits --> 
    <!-- BEGIN:noproduits -->
    <p>Pas de produit disponible.</p>
    <!-- END:noproduits --> 
  </div>
</section>
<!-- END: main -->
```



## Widget "Catalogue / Produits plus" - Version alternative : Carrousel grille

### Template : `/theme/fr/widgets/catalogue/produits_plus/carrousel_grille/index.html` 

```html
<!--
Template du Widget "Produits les plus..."

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#produits-les-plus
-->

<!-- BEGIN: main -->
<div class="section catalogue-produits-plus carrousel-grille" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h2 class="mb-4">{intitule}</h2>
    <!-- END:intitule --> 
    <!-- BEGIN:produits -->
    <div class="owl-carousel" data-owl-margin="24" data-owl-dots="true" data-owl-nav="false" data-owl-responsive="1-2-4"> 
      <!-- BEGIN:produit -->
      <div class="produit produit-card card m-1" id="produit-{produit_id}">
        <div class="produit-image"> 
          <!-- BEGIN: illustrations --> 
          <img src="{url_illustration_vignette}" alt="{intitule_produit|htmlentities}" class="card-img-top" /> 
          <!-- END: illustrations --> 
          <!-- BEGIN: noillustrations --> 
          <img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" class="card-img-top"/> 
          <!-- END: noillustrations -->
          <div class="produit-hover-overlay"> <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"></a> <a href="{lien_produit}" class="btn btn-primary"><i class="fe fe-search mr-2"></i>D&eacute;tail</a> </div>
        </div>
        <div class="card-body"> <small class="text-uppercase text-muted">{intitule_categorie}</small>
          <h3 class="card-title mb-2 mt-1"><a href="{lien_produit}">{intitule_produit}</a></h3>
          <p class="price"><span class="<!-- BEGIN:prix_promo -->promo<!-- END:prix_promo -->">{prix}</span> 
            <!-- BEGIN:prix_barre --> 
            <del class="text-muted">{prix_barre}</del> 
            <!-- END:prix_barre --> 
          </p>
          <!-- BEGIN:accroche -->
          <p class="card-text desc">{accroche}</p>
          <!-- END:accroche --> 
        </div>
      </div>
      <!-- END:produit --> 
    </div>
    <!-- END:produits --> 
    <!-- BEGIN:noproduits -->
    <p>Pas de produit disponible.</p>
    <!-- END:noproduits --> 
  </div>
</div>
<!-- END: main -->
```



## Widget "Catalogue / Produits plus" - Version alternative : Liste sidebar

### Template : `/theme/fr/widgets/catalogue/produits_plus/liste.sidebar/index.html` 

```html
<!--
Template du Widget "Produits les plus..."

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#produits-les-plus
-->

<!-- BEGIN:main -->
<aside class="widget catalogue-produits-plus liste-sidebar" id="kiubi-widget-{serial}">
  <!-- BEGIN:intitule -->
  <h5 class="mb-3">{intitule}</h5>
  <!-- END:intitule --> 
  <!-- BEGIN:produits --> 
  <!-- BEGIN:produit -->
  <div class="produit media" id="produit-{produit_id}"> 
    <!-- BEGIN: illustrations --> 
    <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"><img src="{url_illustration_miniature}" alt="{intitule_produit|htmlentities}" class="mr-3" /></a> 
    <!-- END: illustrations --> 
    <!-- BEGIN: noillustrations --> 
    <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"><img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" class="mr-3"/></a> 
    <!-- END: noillustrations -->
    <div class="media-body">
      <p class="mb-1"><a href="{lien_produit}" >{intitule_produit}</a></p>
      <p class="price mb-2"><span class="<!-- BEGIN:prix_promo -->promo<!-- END:prix_promo -->">{prix}</span> 
        <!-- BEGIN:prix_barre --> 
        <del class="text-muted">{prix_barre}</del> 
        <!-- END:prix_barre --> 
      </p>
      <!-- BEGIN:accroche --> 
      <span class="desc">{accroche}</span> 
      <!-- END:accroche --> 
    </div>
  </div>
  <!-- END:produit --> 
  <!-- END:produits --> 
  <!-- BEGIN:noproduits -->
  <p>Pas de produit disponible.</p>
  <!-- END:noproduits --> 
</aside>
<!-- END:main -->
```



## Widget "Catalogue / Produits vedettes"

### Template : `/theme/fr/widgets/catalogue/produits_vedettes/index.html` 

```html
<!--
Template du Widget "Produits vedettes"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#produits-vedettes
-->

<!-- BEGIN: main -->
<section class="section catalogue-produits-vedettes grille" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h2 class="mb-4">{intitule}</h2>
    <!-- END:intitule --> 
    <!-- BEGIN:produits -->
    <div class="row"> 
      <!-- BEGIN:produit -->
      <div class="col-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="{alterne_4}00">
        <div class="produit produit-card card w-100" id="produit-{produit_id}">
          <div class="produit-image"> 
            <!-- BEGIN: illustrations --> 
            <img src="{url_illustration_vignette}" alt="{intitule_produit|htmlentities}" class="card-img-top" /> 
            <!-- END: illustrations --> 
            <!-- BEGIN: noillustrations --> 
            <img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" class="card-img-top"/> 
            <!-- END: noillustrations -->
            <div class="produit-hover-overlay"> <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"></a> <a href="{lien_produit}" class="btn btn-primary"><i class="fe fe-search mr-2"></i>D&eacute;tail</a> </div>
          </div>
          <div class="card-body"> <small class="text-uppercase text-muted">{intitule_categorie}</small>
            <h3 class="card-title mb-2 mt-1"><a href="{lien_produit}">{intitule_produit}</a></h3>
            <p class="price"><span class="<!-- BEGIN:prix_promo -->promo<!-- END:prix_promo -->">{prix}</span> 
              <!-- BEGIN:prix_barre --> 
              <del class="text-muted">{prix_barre}</del> 
              <!-- END:prix_barre --> 
            </p>
            <!-- BEGIN:accroche -->
            <p class="card-text desc">{accroche}</p>
            <!-- END:accroche --> 
          </div>
        </div>
      </div>
      <!-- END:produit --> 
    </div>
    <!-- END:produits --> 
    <!-- BEGIN:noproduits -->
    <p>Pas de produit disponible.</p>
    <!-- END:noproduits --> 
  </div>
</section>
<!-- END: main -->
```



## Widget "Catalogue / Produits vedettes" - Version alternative : Carrousel grille

### Template : `/theme/fr/widgets/catalogue/produits_vedettes/carrousel_grille/index.html` 

```html
<!--
Template du Widget "Produits vedettes"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#produits-vedettes
-->

<!-- BEGIN: main -->
<div class="section catalogue-produits-vedettes carrousel-grille" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h2 class="mb-4">{intitule}</h2>
    <!-- END:intitule --> 
    <!-- BEGIN:produits -->
    <div class="owl-carousel" data-owl-margin="24" data-owl-dots="true" data-owl-nav="false" data-owl-responsive="1-2-4"> 
      <!-- BEGIN:produit -->
      <div class="produit produit-card card m-1" id="produit-{produit_id}">
        <div class="produit-image"> 
          <!-- BEGIN: illustrations --> 
          <img src="{url_illustration_vignette}" alt="{intitule_produit|htmlentities}" class="card-img-top" /> 
          <!-- END: illustrations --> 
          <!-- BEGIN: noillustrations --> 
          <img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" class="card-img-top"/> 
          <!-- END: noillustrations -->
          <div class="produit-hover-overlay"> <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"></a> <a href="{lien_produit}" class="btn btn-primary"><i class="fe fe-search mr-2"></i>D&eacute;tail</a> </div>
        </div>
        <div class="card-body"> <small class="text-uppercase text-muted">{intitule_categorie}</small>
          <h3 class="card-title mb-2 mt-1"><a href="{lien_produit}">{intitule_produit}</a></h3>
          <p class="price"><span class="<!-- BEGIN:prix_promo -->promo<!-- END:prix_promo -->">{prix}</span> 
            <!-- BEGIN:prix_barre --> 
            <del class="text-muted">{prix_barre}</del> 
            <!-- END:prix_barre --> 
          </p>
          <!-- BEGIN:accroche -->
          <p class="card-text desc">{accroche}</p>
          <!-- END:accroche --> 
        </div>
      </div>
      <!-- END:produit --> 
    </div>
    <!-- END:produits --> 
    <!-- BEGIN:noproduits -->
    <p>Pas de produit disponible.</p>
    <!-- END:noproduits --> 
  </div>
</div>
<!-- END: main -->
```



## Widget "Catalogue / Produits vedettes" - Version alternative : Liste sidebar

### Template : `/theme/fr/widgets/catalogue/produits_vedettes/liste.sidebar/index.html` 

```html
<!--
Template du Widget "Produits vedettes"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#produits-vedettes
-->

<!-- BEGIN:main -->
<aside class="widget catalogue-produits-vedettes liste-sidebar" id="kiubi-widget-{serial}"> 
  <!-- BEGIN:intitule -->
  <h5 class="mb-3">{intitule}</h5>
  <!-- END:intitule --> 
  <!-- BEGIN:produits --> 
  <!-- BEGIN:produit -->
  <div class="produit media" id="produit-{produit_id}"> 
    <!-- BEGIN: illustrations --> 
    <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"><img src="{url_illustration_miniature}" alt="{intitule_produit|htmlentities}" class="mr-3" /></a> 
    <!-- END: illustrations --> 
    <!-- BEGIN: noillustrations --> 
    <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"><img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" class="mr-3"/></a> 
    <!-- END: noillustrations -->
    <div class="media-body">
      <p class="mb-1"><a href="{lien_produit}" >{intitule_produit}</a></p>
      <p class="price mb-2"><span class="<!-- BEGIN:prix_promo -->promo<!-- END:prix_promo -->">{prix_min}</span> 
        <!-- BEGIN:prix_barre --> 
        <del class="text-muted">{prix_barre}</del> 
        <!-- END:prix_barre --> 
      </p>
      <!-- BEGIN:accroche --> 
      <span class="desc">{accroche}</span> 
      <!-- END:accroche --> 
    </div>
  </div>
  <!-- END:produit --> 
  <!-- END:produits --> 
  <!-- BEGIN:noproduits -->
  <p>Pas de produit disponible.</p>
  <!-- END:noproduits --> 
</aside>
<!-- END:main -->
```



## Widget "Catalogue / Tags"

### Template : `/theme/fr/widgets/catalogue/tags/index.html` 

```html
<!--
Template du Widget "Tags"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#tags
-->

<!-- BEGIN:main -->
<aside class="widget catalogue-tags" id="kiubi-widget-{serial}"> 
  <!-- BEGIN:intitule -->
  <h5>{intitule}</h5>
  <!-- END:intitule -->
  <ul class="nav flex-column">
    <!-- BEGIN:tag --><li class="nav-item"><a href="{lien_tag}" class="nav-link" title="{tag|htmlentities}">{tag}<small class=" float-right">({qt})</small></a></li><!-- END:tag -->
  </ul>
  <!-- BEGIN:notag -->
  <p>Pas de tag.</p>
  <!-- END:notag --> 
</aside>
<!-- END:main -->
```



## Widget "Catalogue / Tags" - Version alternative : Filtres

### Template : `/theme/fr/widgets/catalogue/tags/filtres/index.html` 

```html
<!--
Template du Widget "Tags"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#tags
-->

<!-- BEGIN:main -->
<aside class="widget catalogue-tags filtres" data-filter="tags" id="kiubi-widget-{serial}"> 
  <!-- BEGIN:intitule -->
  <h5>{intitule}</h5>
  <!-- END:intitule --> 
  <!-- BEGIN:tag -->
  <div class="custom-control custom-checkbox mt-3">
    <input id="{tag|sanitize}-{compteur}-{serial}" type="checkbox" name="tag" class="custom-control-input" data-tag="{tag|htmlentities}">
    <label for="{tag|sanitize}-{compteur}-{serial}" class="custom-control-label d-block">{tag}</label>
  </div>
  <!-- END:tag --> 
  <!-- BEGIN:notag -->
  <p>Pas de tag.</p>
  <!-- END:notag --> 
</aside>
<!-- END:main -->
```



## Widget "Catalogue / Tags" - Version alternative : Nuage

### Template : `/theme/fr/widgets/catalogue/tags/nuage/index.html` 

```html
<!--
Template du Widget "Tags" pour un affichage en nuage

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-catalogue.html#tags
-->

<!-- BEGIN:main -->
<aside class="widget catalogue-tags nuage" id="kiubi-widget-{serial}">
  <!-- BEGIN:intitule -->
  <h5 class="mb-3">{intitule}</h5>
  <!-- END:intitule -->
    <!-- BEGIN:tag --><a href="{lien_tag}" title="{tag|htmlentities}" class="tagsize-{poids} badge badge-primary mr-2 mb-2">{tag}</a><!-- END:tag -->
    <!-- BEGIN:notag -->
    <p>Pas de tag.</p>
    <!-- END:notag -->
</aside>
<!-- END:main -->
```



## Widget "Commandes / Livraison"

### Template : `/theme/fr/widgets/commandes/livraison/index.html` 

```html
<!-- 
Template du Widget "Livraison" pour la gestion des adresses de livraison et de facturation

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#livraison
-->

<!-- BEGIN:main -->
<div class="section commandes-livraison" id="kiubi-section-{serial}">
  <div class="container">
        <ol class="breadcrumb breadcrumb-order bg-transparent border-0 p-0 mb-5 d-none d-md-flex">
    	  <li class="breadcrumb-item"><a href="{baseLangue}/ecommerce/panier.html">1. Panier</a></li>
          <li class="breadcrumb-item"><a href="#">2. Authentification</a></li>
          <li class="breadcrumb-item active">3. Livraison</li>
          <li class="breadcrumb-item text-muted">4. Mode de paiement</li>
          <li class="breadcrumb-item text-muted">5. Validation</li>
        </ol>
        <!-- BEGIN:intitule -->
        <h1 class="mb-5">{intitule}</h1>
        <!-- END:intitule -->
        <div class="lead mb-5">Veuillez indiquer une adresse de facturation et de livraison (celles-ci peuvent &ecirc;tre diff&eacute;rentes). Les adresses indiqu&eacute;es pour des  commandes ult&eacute;rieures sont conserv&eacute;es et peuvent &ecirc;tre r&eacute;utilis&eacute;es.</div>
        <form method="post" action="">
          
          <!-- BEGIN:erreurs -->
          <div class="alert alert-danger mb-5" role="alert">
            <ul>
              <!-- BEGIN:erreur -->
              <li>{erreur}</li>
              <!-- END:erreur -->
            </ul>
          </div>
          <!-- END:erreurs --> 
          
          <!-- BEGIN:erreur_livraison-->
          <div class="alert alert-danger mb-5" role="alert">
            <ul>
              <li>{erreur}</li>
            </ul>
          </div>
          <!-- END:erreur_livraison -->
          
          <div class="row">
            <div class="col-lg-12 border p-4 mb-5">
              <div class="billing-adress">
                <h4 class="mb-4">Vos coordonn&eacute;es</h4>
                <div class="row">
                  <div class="col-lg-4">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="civilite_f">Civilit&eacute; :</label>
                      <select name="civilite_f" id="civilite_f" class="custom-select w-100 d-block" autocomplete="honorific-prefix">
                        <option value="M" {selected_M_f}>Monsieur</option>
                        <option value="Mme" {selected_Mme_f}>Madame</option>
                        <option value="Mlle" {selected_Mlle_f}>Mademoiselle</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="nom_f">Nom :</label>
                      <input type="text" name="nom_f" id="nom_f" value="{nom_f}" class="form-control" autocomplete="family-name"/>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="prenom_f">Pr&eacute;nom :</label>
                      <input type="text" name="prenom_f" id="prenom_f" value="{prenom_f}" class="form-control" autocomplete="given-name"/>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="adresse_f">Adresse :</label>
                      <input type="text" name="adresse_f" id="adresse_f" value="{adresse_f}" class="form-control" autocomplete="street-address"/>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="cp_f">Code postal :</label>
                      <input type="text" name="cp_f" id="cp_f" value="{cp_f}" class="form-control" autocomplete="postal-code"/>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="cp_f" class="control-label">Ville :</label>
                      <input type="text" name="ville_f" id="ville_f" value="{ville_f}" class="form-control" autocomplete="address-level2"/>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="pays_f">Pays :</label>
                      <select name="pays_f" id="pays_f" class="custom-select w-100 d-block" autocomplete="country-name">
                        <!-- BEGIN:pays_facturation --> 
                        <!-- BEGIN:groupe-->
                        <optgroup label="{label}"></optgroup>
                        <!-- END:groupe-->
                        <option value="{value}" {selected}>{label}</option>
                        <!-- END:pays_facturation -->
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="societe_f">Soci&eacute;t&eacute; : </label>
                      <input type="text" name="societe_f" id="societe_f" value="{societe_f}" class="form-control"  placeholder="Facultatif"/>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="tel_f">T&eacute;l&eacute;phone :</label>
                      <input type="text" name="tel_f" id="tel_f" value="{tel_f}" class="form-control" autocomplete="tel"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 border p-4 mb-5">
              <div class="shipping-adress">
              <h4 class="mb-4">Votre adresse de livraison</h4>
              <div class="btn-group btn-group-toggle mb-4" data-toggle="buttons">
                <label class="btn btn-success {cache_livraison|mapValue||active}" for="livraison_diff1" id="show-adress-bis">
                  <input name="livraison_diff" type="radio" id="livraison_diff1" value="1" autocomplete="off" {checked_livraison_diff1}>
                  <i class="fe mr-2"></i>Diff&eacute;rente</label>
                <label class="btn btn-success {cache_livraison|mapValue|active}" for="livraison_diff0" id="hide-adress-bis">
                  <input name="livraison_diff" type="radio" id="livraison_diff0" value="0" autocomplete="off" {checked_livraison_diff0}>
                  <i class="fe mr-2"></i>Identique</label>
              </div>
              <div id="adress-bis" class="collapse {cache_livraison|mapValue||show} mt-3">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="civilite_l">Civilit&eacute; :</label>
                      <select name="civilite_l" id="civilite_l" class="custom-select w-100 d-block" autocomplete="honorific-prefix">
                        <option value="M" {selected_M_l}>Monsieur</option>
                        <option value="Mme" {selected_Mme_l}>Madame</option>
                        <option value="Mlle" {selected_Mlle_l}>Mademoiselle</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="nom_l">Nom :</label>
                      <input type="text" name="nom_l" id="nom_l" value="{nom_l}" class="form-control" autocomplete="family-name"/>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="prenom_l">Pr&eacute;nom :</label>
                      <input type="text" name="prenom_l" id="prenom_l" value="{prenom_l}" class="form-control" autocomplete="given-name"/>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="adresse_l">Adresse :</label>
                      <input type="text" name="adresse_l" id="adresse_l" value="{adresse_l}" class="form-control" autocomplete="street-address"/>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="cp_l">Code postal :</label>
                      <input type="text" name="cp_l" id="cp_l" value="{cp_l}" class="form-control" autocomplete="postal-code"/>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="cp_l">Ville :</label>
                      <input type="text" name="ville_l" id="ville_l" value="{ville_l}" class="form-control" autocomplete="address-level2"/>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                      <label for="pays_l">Pays :</label>
                      <select name="pays_l" id="pays_l" class="custom-select w-100 d-block" autocomplete="country-name">
                        <!-- BEGIN:pays_livraison --> 
                        <!-- BEGIN:groupe-->
                        <optgroup label="{label}"></optgroup>
                        <!-- END:groupe-->
                        <option value="{value}" {selected}>{label}</option>
                        <!-- END:pays_livraison -->
                      </select>
                    </div>
                  </div>
                <div class="col-lg-4">
                    <div class="form-group">
                      <label for="societe_l">Soci&eacute;t&eacute; :</label>
                      <input type="text" name="societe_l" id="societe_l" value="{societe_l}" class="form-control" placeholder="Facultatif"/>
                    </div>   
                  </div> 
                <div class="col-lg-4">
                    <div class="form-group">
                      <label for="tel_l">T&eacute;l&eacute;phone :</label>
                      <input type="text" name="tel_l" id="tel_l" value="{tel_l}" class="form-control" placeholder="Facultatif" autocomplete="tel"/>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <input type="hidden" name="act" value="adresses"/>
              <input type="hidden" name="ctl" value="{ctl}" />
            </div>
          </div>
          
          <!-- BEGIN:consentement -->
          <div class="mb-5">
            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input name="consentement_ok" class="custom-control-input" id="consentement_ok" type="checkbox" value="1" {check_consentement}/>
                <label for="consentement_ok" class="custom-control-label"><strong>J'accepte de fournir mes coordonn&eacute;es de facturation et de livraison</strong> </label>
              </div>
            </div>
            <p class="small text-muted"> Les informations recueillies sont utilis&eacute;es pour la gestion et l'exp&eacute;dition des commandes. Conform&eacute;ment
              au "<a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank">r&egrave;glement
              g&eacute;n&eacute;ral sur la protection des donn&eacute;es personnelles</a>", vous pouvez exercer votre droit
              d'acc&egrave;s aux donn&eacute;es en contactant {SOCIETE.societe_nom} par email
              (<a href="mailto:{SOCIETE.contact_mail}">{SOCIETE.contact_mail}</a>). <a href="/donnees-personnelles.html" target="_blank">Consulter les d&eacute;tails du consentement.</a> </p>
          </div>
          <!-- END:consentement -->
          
          <div class="row">
            <div class="col-lg-6">
              <p><a href="{baseLangue}/ecommerce/panier.html" class="btn btn-primary btn-lg">Retour au panier</a></p>
            </div>
            <div class="col-lg-6 text-right">
              <p>
                <input type="submit" value="Continuer" class="btn btn-warning btn-lg"/>
              </p>
            </div>
          </div>
        </form>
        <script type="text/javascript">
      $(document).ready(function(){
        $("#show-adress-bis").click(function(){
            $("#adress-bis").collapse('show');
        });
        $("#hide-adress-bis").click(function(){
            $("#adress-bis").collapse('hide');
        });
    });
    </script> 
  </div>
</div>
<!-- END:main -->
```



## Widget "Commandes / Paiement"

### Template : `/theme/fr/widgets/commandes/paiement/index.html` 

```html
<!--
Template du Widget "Paiement"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#paiement
-->

<!-- BEGIN:main -->
<div class="section commandes-paiement" id="kiubi-section-{serial}">
  <div class="container">
    <ol class="breadcrumb breadcrumb-order bg-transparent border-0 p-0 mb-5 d-none d-md-flex">
      <li class="breadcrumb-item"><a href="{baseLangue}/ecommerce/panier.html">1. Panier</a></li>
      <li class="breadcrumb-item"><a href="#">2. Authentification</a></li>
      <li class="breadcrumb-item"><a href="{baseLangue}/ecommerce/livraison.html">3. Livraison</a></li>
      <li class="breadcrumb-item active">4. Mode de paiement</li>
      <li class="breadcrumb-item text-muted">5. Validation</li>
    </ol>
    
    <!-- BEGIN:choix -->
    <h1 class="mb-5">R&eacute;capitulatif de vos achats</h1>
    <!-- BEGIN:erreurs -->
    <div class="alert alert-danger mb-5" role="alert">
      <ul>
        <!-- BEGIN:erreur -->
        <li>{erreur}</li>
        <!-- END:erreur -->
      </ul>
    </div>
    <!-- END:erreurs --> 
    <!-- BEGIN:alerte_montant -->
    <div class="alert alert-warning mb-5" role="alert"> Attention, la commande doit &ecirc;tre d'un montant minimum de {min_commande}. </div>
    <!-- END:alerte_montant -->
    <div class="mb-5 detail-order">
      <table class="table table-order">
        <thead>
          <tr>
            <th scope="col" class="text-left w-100">{nb_produits} article{pluriel_produits}</th>
            <th nowrap="nowrap" scope="col" class="text-right">Prix</th>
            <th scope="col" class="text-center">Qte</th>
            <th nowrap="nowrap" scope="col" class="text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          <!-- BEGIN:produit -->
          <tr>
            <td class="produit-infos"><div class="media">
                <div class="mr-3"> 
                  <!-- BEGIN:illustration --> 
                  <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"><img src="{url_illustration_miniature}" alt="{intitule_produit|htmlentities}" /></a> 
                  <!-- END:illustration --> 
                  <!-- BEGIN: noillustration --> 
                  <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"><img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" /></a> 
                  <!-- END: noillustration --> 
                </div>
                <div class="media-body"><a href="{lien_produit}">{intitule_produit}</a> 
                  <!-- BEGIN:reference -->
                  <p class="ref">Ref. : {reference}</p>
                  <!-- END:reference -->
                  <p class="variante mb-0">{intitule_variante}</p>
                </div>
              </div></td>
            <td>{prix_unitaire}</td>
            <td class="text-center">{qt}</td>
            <td>{prix_total}</td>
          </tr>
          <!-- END:produit --> 
          <!-- BEGIN:option -->
          <tr> 
            <!-- BEGIN:simple -->
            <td>{intitule_option}</td>
            <!-- BEGIN:offerte -->
            <td></td>
            <td class="text-center">{qt}</td>
            <td>Offert</td>
            <!-- END:offerte --> 
            <!-- BEGIN:payante -->
            <td>{prix_unitaire}</td>
            <td class="text-center">{qt}</td>
            <td>{prix_total}</td>
            <!-- END:payante --> 
            <!-- END:simple --> 
            <!-- BEGIN:textarea -->
            <td>{intitule_option} : {valeur_option}</td>
            <!-- BEGIN:offerte -->
            <td></td>
            <td class="text-center">{qt}</td>
            <td>Offert</td>
            <!-- END:offerte --> 
            <!-- BEGIN:payante -->
            <td>{prix_unitaire}</td>
            <td class="text-center">{qt}</td>
            <td>{prix_total}</td>
            <!-- END:payante --> 
            <!-- END:textarea --> 
            <!-- BEGIN:select -->
            <td>{intitule_option} : {valeur_option}</td>
            <!-- BEGIN:offerte -->
            <td></td>
            <td class="text-center">{qt}</td>
            <td>Offert</td>
            <!-- END:offerte --> 
            <!-- BEGIN:payante -->
            <td>{prix_unitaire}</td>
            <td class="text-center">{qt}</td>
            <td>{prix_total}</td>
            <!-- END:payante --> 
            <!-- END:select --> 
          </tr>
          <!-- END:option -->
        </tbody>
        <tfoot>
          <!-- BEGIN:bon -->
          <tr class="text-success">
            <td colspan="3">{intitule_produit}</td>
            <td>{prix_total}</td>
          </tr>
          <!-- END:bon --> 
          <!-- BEGIN:remise -->
          <tr>
            <td colspan="3">{intitule_remise}</td>
            <td>&nbsp;</td>
          </tr>
          <!-- END:remise -->
          <tr class="hors-port">
            <td colspan="3"><strong>Total hors frais de livraison</strong></td>
            <td><strong>{total_articles}</strong></td>
          </tr>
          <tr class="port">
            <td colspan="3">Frais de port</td>
            <td>{frais_port}</td>
          </tr>
          <!-- BEGIN:commande_HT -->
          <tr class="ht">
            <td colspan="3">Total HT</td>
            <td>{total_HT}</td>
          </tr>
          <tr class="tva">
            <td colspan="3">TVA</td>
            <td>{total_TVA}</td>
          </tr>
          <!-- END:commande_HT -->
          <tr class="ttc table-active">
            <td colspan="4">Total TTC <span class="float-right">{total_TTC}</span></td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="row mb-5 adresses">
      <div class="col-md-6 mb-5">
        <h4 class="mb-4">Adresse de facturation</h4>
        <p> <strong>{civilite_f} {prenom_f} {nom_f}</strong> <br />
          <!-- BEGIN:societe_f --> 
          {societe_f}<br />
          <!-- END:societe_f --> 
          {adresse_f}<br />
          {cp_f} {ville_f}<br />
          {pays_f} </p>
        <a href="{baseLangue}/ecommerce/livraison.html" class="btn btn-sm btn-primary">Modifier l'adresse</a> </div>
      
      <!-- BEGIN:transporteur_tranchespoids -->
      <div class="col-md-6 mb-5">
        <h4 class="mb-4">Adresse de livraison</h4>
        <p> <strong>{civilite_l} {prenom_l} {nom_l}</strong> <br />
          <!-- BEGIN:societe_l --> 
          {societe_l}<br />
          <!-- END:societe_l --> 
          {adresse_l}<br />
          {cp_l} {ville_l} <br />
          {pays_l} </p>
        <a href="{baseLangue}/ecommerce/livraison.html" class="btn btn-sm btn-primary">Modifier l'adresse</a> </div>
      <div class="col-12">
        <h4 class="mb-4">Mode de livraison</h4>
        <p> Vous serez livr&eacute;s par <strong>{intitule_transporteur}</strong> 
          <!-- BEGIN:delai_livraison -->dans un d&eacute;lai de {delai_livraison}<!-- END:delai_livraison --><!-- BEGIN:date_livraison -->&agrave; partir du <strong>{date_livraison}</strong><!-- BEGIN:heure_livraison --> &agrave; <strong>{heure_livraison}</strong><!-- END:heure_livraison --><!-- END:date_livraison -->. </p>
        <a href="{baseLangue}/ecommerce/transporteurs.html" class="btn btn-sm btn-primary">Changer de mode de livraison</a> </div>
      <!-- END:transporteur_tranchespoids --> 
      
      <!-- BEGIN:transporteur_socolissimo --> 
      
      <!-- BEGIN:domicile -->
      <div class="col-md-6">
        <h4 class="mb-4">Adresse de livraison</h4>
        <p> {intitule_transporteur}, "{intitule_mode}", &agrave; l'adresse suivante&nbsp;:<br />
          <br />
          <strong>{civilite_l} {prenom_l} {nom_l}</strong> <br />
          <!-- BEGIN:societe_l --> 
          {societe_l}<br />
          <!-- END:societe_l --> 
          {adresse_l}<br />
          {cp_l} {ville_l} <br />
          {pays_l} </p>
        <a href="{baseLangue}/ecommerce/livraison.html" class="btn btn-sm btn-primary">Modifier l'adresse</a> </div>
      <!-- END:domicile --> 
      
      <!-- BEGIN:hors_domicile -->
      <div class="col-md-6">
        <h4 class="mb-4">Point de retrait</h4>
        <p> {intitule_transporteur}, "{intitule_mode}", &agrave; l'adresse suivante&nbsp;:<br />
          <br />
          {societe_l}<br />
          {adresse_l}<br />
          {cp_l} {ville_l} <br />
          {pays_l} </p>
        <p> La commande doit &ecirc;tre retir&eacute;e par <strong>{civilite_l} {prenom_l} {nom_l}</strong> ou par une personne mandat&eacute;e</p>
        <a href="{baseLangue}/ecommerce/livraison.html" class="btn btn-sm btn-primary">Modifier l'adresse</a> </div>
      <!-- END:hors_domicile -->
      
      <div class="col-12">
        <h4 class="mb-4">Mode de livraison</h4>
        <p> La commande sera prise en charge par <strong>{intitule_transporteur}</strong> 
          <!-- BEGIN:delai_livraison --> 
          dans un d&eacute;lai de {delai_livraison}. 
          <!-- END:delai_livraison --> 
        </p>
        <a href="{baseLangue}/ecommerce/transporteurs.html" class="btn btn-sm btn-primary">Changer de mode de livraison</a> </div>
      <!-- END:transporteur_socolissimo --> 
      
      <!-- BEGIN:transporteur_magasin -->
      <div class="col-md-6">
        <h4 class="mb-4">Point de retrait</h4>
        <!-- BEGIN:description -->
        <p>{desc_transporteur}</p>
        <!-- END:description -->
        <p><strong>{societe_l}</strong><br />
          {adresse_l}<br />
          {cp_l} {ville_l}<br />
          {pays_l} </p>
        <!-- BEGIN:date_livraison -->
        <p>Votre commande sera &agrave; retirer &agrave; partir du <strong>{date_livraison}</strong><!-- BEGIN:heure_livraison --> &agrave; <strong>{heure_livraison}</strong><!-- END:heure_livraison -->. </p>
        <!-- END:date_livraison --> 
        <a href="{baseLangue}/ecommerce/transporteurs.html" class="btn btn-sm btn-primary">Changer de mode de livraison</a> </div>
      <!-- END:transporteur_magasin --> 
    </div>
    
    <!-- BEGIN:fidelite -->
    <div class="mb-5 alert alert-info" role="alert"> <span class="fe fe-gift" aria-hidden="true"></span> Vous gagnez <strong>{gain_fidelite}</strong> points de fid&eacute;lit&eacute;. Votre nouveau solde sera <strong>{solde_fidelite}</strong> apr&egrave;s validation du paiement. </div>
    <!-- END:fidelite --> 
    
    <!-- BEGIN:paiements -->
    <form method="post" action="">
      <div class="mb-5 choix-paiement">
        <h4 class="mb-4">Choisissez votre mode de paiement</h4>
        <p>Vous souha&icirc;tez payer par : </p>
        <!-- BEGIN:paiement -->
        
        <div class="form-group">
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="paiement" value="{mode_id}" id="paiement{mode_id}" {checked}/>
            <label class="custom-control-label" for="paiement{mode_id}"><span class="fe fe-paiement fe-paiement{mode_id} mr-2" aria-hidden="true"></span>{intitule_mode}</label>
          </div>
        </div>
        <!-- END:paiement --> 
        <!-- BEGIN:gratuit -->
        <div class="alert alert-warning" role="alert"> La commande est gratuite, vous devez uniquement la valider pour confirmer votre achat. </div>
        <!-- END:gratuit --> 
      </div>
      <div class="row">
        <div class="col-md-6">
          <p><a href="{baseLangue}" class="btn btn-danger btn-lg">Annuler</a></p>
        </div>
        <div class="col-md-6 text-right">
          <p>
            <input type="submit" value="Valider la commande" class="btn btn-success btn-lg"/>
          </p>
        </div>
      </div>
      <input type="hidden" name="act" value="paiement" />
      <input type="hidden" name="ctl" value="{ctl}" />
    </form>
    <!-- END:paiements --> 
    <!-- BEGIN:nopaiement -->
    
    <div class="alert alert-danger" role="alert"> <strong>Tous les modes de paiement sont momentan&eacute;ment suspendus, vous ne pouvez pas finaliser votre commande.</strong> Nous faisons notre possible pour revenir &agrave; un fonctionnement normal. Merci de votre compr&eacute;hension. </div>
    
    <!-- END:nopaiement --> 
    <!-- END:choix --> 
    <!-- BEGIN:paiement --> 
    {paiement} <br/>
    <!-- END:paiement --> 
  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/commandes/paiement/atos.html` 

```html
<!-- 
Template du Widget "Paiement" pour le paiement par atos sips

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#paiement
-->

<!-- BEGIN:main -->
<div class="section commandes-paiement paiement-atos" id="kiubi-section-{serial}">
  <div class="container">
    <h1 class="mb-5">Paiement en ligne par carte bancaire</h1>
    <p><strong>Votre commande sera enregistr&eacute;e sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
      <br />
      <br />
      <br />
    </p>
    <p>Choisissez un moyen de paiement ci-dessous :</p>
    {formulaire} </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/commandes/paiement/cheque.html` 

```html
<!-- 
Template du Widget "Paiement" pour le paiement par cheque

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#paiement
-->

<!-- BEGIN:main -->
<div class="section commandes-paiement paiement-cheque" id="kiubi-section-{serial}">
  <div class="container">
    <h1 class="mb-5">Paiement par ch&egrave;que</h1>
    <p><strong>Votre commande a &eacute;t&eacute; enregistr&eacute;e sous le n&deg; {reference},</strong> veuillez nous faire parvenir : <br />
      <br />
    </p>
    <p><a href="{lien_commande}" target="_blank">Une copie imprim&eacute;e de votre commande</a> ainsi qu'un ch&egrave;que &agrave; l'ordre de "<strong>{ordre}</strong>" &agrave; l'adresse suivante :<br />
      <br />
    </p>
    <p class="section bg-light p-4"><strong>{SOCIETE.societe_nom}</strong><br />
      {SOCIETE.societe_adresse}<br />
      {SOCIETE.societe_cp} {SOCIETE.societe_ville}<br />
      {SOCIETE.societe_pays} </p>
    <p> Votre commande sera trait&eacute;e d&egrave;s r&eacute;ception du paiement.</p>
    <form method="post" action="{lien_terminer}" class="text-right">
      <input type="submit" value="Terminer" class="btn btn-warning btn-lg">
    </form>
  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/commandes/paiement/cm_cic.html` 

```html
<!--
Template du Widget "Paiement" pour le paiement par cm-cic

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#paiement
-->

<!-- BEGIN:main -->
<div class="section commandes-paiement paiement-cm-cic" id="kiubi-section-{serial}">
  <div class="container">
    <h1 class="mb-5">Paiement en ligne par carte bancaire </h1>
    <p><strong>Votre commande sera enregistr&eacute;e sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
      <br />
      <br />
      <br />
    </p>
    <div class="text-center"><img src="{racine}/{theme}/assets/img/logo_paiement/logo_{banque}.jpg" alt="Paiement en ligne s&eacute;curis&eacute; par CM-CIC P@iement" /> {formulaire}
      <p class="mt-3"><input type="submit" value="Effectuer le paiement en ligne" class="btn btn-warning btn-lg"></p>
    </div>
    </form>
  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/commandes/paiement/paybox.html` 

```html
<!--
Template du Widget "Paiement" pour le paiement par paybox

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#paiement
-->

<!-- BEGIN:main -->
<div class="section commandes-paiement paiement-paybox" id="kiubi-section-{serial}">
  <div class="container">
    <h1 class="mb-5">Paiement en ligne par carte bancaire </h1>
    <p><strong>Votre commande sera enregistr&eacute;e sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
      <br />
      <br />
      <br />
    </p>
    {formulaire}
    <div class="text-center"><img src="{racine}/{theme}/assets/img/logo_paiement/logo_paybox.gif" alt="Paiement en ligne s&eacute;curis&eacute; par PayBox" />
      <p class="mt-3">
        <input type="submit" value="Effectuer le paiement en ligne" class="btn btn-warning btn-lg">
      </p>
    </div>
    </form>
  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/commandes/paiement/payline.html` 

```html
<!--
Template du Widget "Paiement" pour le paiement par payline

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#paiement
-->

<!-- BEGIN:main -->
<div class="section commandes-paiement paiement-paybox" id="kiubi-section-{serial}">
  <div class="container">
    <h1 class="mb-5">Paiement en ligne par carte bancaire </h1>
    <p><strong>Votre commande sera enregistr&eacute;e sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
      <br />
      <br />
      <br />
    </p>

    <!-- BEGIN:erreurs -->
    <div class="alert alert-danger mb-5" role="alert">
      <ul>
        <!-- BEGIN:erreur -->
        <li>{erreur}</li>
        <!-- END:erreur -->
      </ul>
    </div>
    <!-- END:erreurs -->

    <!-- BEGIN:formulaire -->
    {formulaire}
    <div class="text-center">
      <p class="mt-3">
        <input type="submit" value="Effectuer le paiement en ligne" class="btn btn-warning btn-lg">
      </p>
    </div>
    </form>
    <!-- END:formulaire -->

  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/commandes/paiement/paypal.html` 

```html
<!--
Template du Widget "Paiement" pour le paiement par paypal

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#paiement
-->

<!-- BEGIN:main -->
<div class="section commandes-paiement paiement-paypal" id="kiubi-section-{serial}">
  <div class="container">
    <h1 class="mb-5">Paiement en ligne par Paypal </h1>
    <p><strong>Votre commande sera enregistr&eacute;e sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
      <br />
      <br />
      <br />
    </p>
    {formulaire}
    <div class="text-center"><img src="{racine}/{theme}/assets/img/logo_paiement/logo_paypal.gif" alt="Paiement en ligne s&eacute;curis&eacute; par PayPal" />
      <p class="mt-3">
        <input type="submit" value="Effectuer le paiement en ligne" class="btn btn-warning btn-lg">
      </p>
    </div>
    </form>
  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/commandes/paiement/payplug.html` 

```html
<!--
Template du Widget "Paiement" pour le paiement par payplug

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#paiement
-->

<!-- BEGIN:main -->
<div class="section commandes-paiement paiement-paybox" id="kiubi-section-{serial}">
  <div class="container">
    <h1 class="mb-5">Paiement en ligne par carte bancaire </h1>
    <p><strong>Votre commande sera enregistr&eacute;e sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
      <br />
      <br />
      <br />
    </p>

    <!-- BEGIN:erreurs -->
    <div class="alert alert-danger mb-5" role="alert">
      <ul>
        <!-- BEGIN:erreur -->
        <li>{erreur}</li>
        <!-- END:erreur -->
      </ul>
    </div>
    <!-- END:erreurs -->

    <!-- BEGIN:formulaire -->
    {formulaire}
    <div class="text-center">
      <p class="mt-3">
        <input type="submit" value="Effectuer le paiement en ligne" class="btn btn-warning btn-lg">
      </p>
    </div>
    </form>
    <!-- END:formulaire -->

  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/commandes/paiement/stripe.html` 

```html
<!--
Template du Widget "Paiement" pour le paiement par stripe

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#paiement
-->

<!-- BEGIN:main -->
<div class="section commandes-paiement paiement-stripe" id="kiubi-section-{serial}">
  <div class="container">
    <h1 class="mb-5">Paiement en ligne par carte bancaire </h1>
    <p><strong>Votre commande sera enregistr&eacute;e sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
      <br />
      <br />
      <br />
    </p>

    <!-- BEGIN:erreurs -->
    <div class="alert alert-danger mb-5" role="alert">
      <ul>
        <!-- BEGIN:erreur -->
        <li>{erreur}</li>
        <!-- END:erreur -->
      </ul>
    </div>
    <!-- END:erreurs -->

    <!-- BEGIN:formulaire -->
    {formulaire}
    <div class="text-center">
      <p class="mt-3">
        <input type="submit" value="Effectuer le paiement en ligne" class="btn btn-warning btn-lg">
      </p>
    </div>
    </form>
    <!-- END:formulaire -->

  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/commandes/paiement/systempay.html` 

```html
<!--
Template du Widget "Paiement" pour le paiement par systempay

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#paiement
-->

<!-- BEGIN:main -->
<div class="section commandes-paiement paiement-systempay" id="kiubi-section-{serial}">
  <div class="container">
    <h1 class="mb-5">Paiement en ligne par carte bancaire </h1>
    <p><strong>Votre commande sera enregistr&eacute;e sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
      <br />
      <br />
      <br />
    </p>
    <div class="text-center"><img src="{racine}/{theme}/assets/img/logo_paiement/logo_cyberplus.jpg" alt="Paiement en ligne s&eacute;curis&eacute; par Systempay" /> {formulaire}
      <p class="mt-3"><input type="submit" value="Effectuer le paiement en ligne" class="btn btn-warning btn-lg"></p>
    </div>
    </form>
  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/commandes/paiement/virement.html` 

```html
<!-- 
Template du Widget "Paiement" pour le paiement par virement

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#paiement
-->

<!-- BEGIN:main -->
<div class="section commandes-paiement paiement-virement" id="kiubi-section-{serial}">
  <div class="container">
      <h1 class="mb-5">Paiement par virement bancaire</h1>
      <p><strong>Votre commande a &eacute;t&eacute; enregistr&eacute;e sous le n&deg; {reference},</strong> veuillez faire un virement sur le compte suivant : <br />
        <br />
        IBAN : {IBAN}<br />
        BIC : {BIC}<br />
        <br />
        Banque : {rib_banque}<br />
        Guichet : {rib_guichet}<br />
        N&deg; de compte : {rib_compte}<br />
        Cl&eacute; RIB : {rib_cle}<br />
        Domiciliation : {domicile}<br />
        Objet : commande {reference}<br />
        <br />
        <strong class="text-danger">Il est IMPERATIF de mentionner le num&eacute;ro de commande {reference} comme libell&eacute; de virement.</strong><br />
        <br />
        Votre commande sera trait&eacute;e d&eacute;s r&eacute;ception du paiement.<br />
        <br />
        <br />
      </p>
      <form method="post" action="{lien_terminer}">
        <input type="submit" value="Terminer" class="btn btn-warning btn-lg">
      </form>
    </div>
</div>
<!-- END:main -->
```



## Widget "Commandes / Panier"

### Template : `/theme/fr/widgets/commandes/panier/index.html` 

```html
<!-- 
Template du Widget "Panier"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#panier
-->

<!-- BEGIN:main -->
<aside class="widget commandes-panier" id="kiubi-widget-{serial}">
  <!-- BEGIN:intitule -->
  <h5 class="mb-3">{intitule}</h5>
  <!-- END: intitule --> 
  <!-- BEGIN:nonidentifie -->
  <p><a href="{baseLangue}/compte/login.html" class="login">Se connecter</a></p>
  <!-- END:nonidentifie --> 
  <!-- BEGIN:identifie -->
  <p><a href="{baseLangue}/compte/" class="account">{prenom} {nom}</a></p>
  <!-- END:identifie -->
  <p><a href="{baseLangue}/ecommerce/panier.html" class="cart-link"><span class="fe fe-shopping-cart mr-2" aria-hidden="true"></span>{nb_produits} article{pluriel_produits}<hr>{total}</a></p>
</aside>
<!-- END:main -->
```



## Widget "Commandes / Panier" - Version alternative : Panier entete

### Template : `/theme/fr/widgets/commandes/panier/panier.entete/index.html` 

```html
<!-- 
Template du Widget "Panier"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#panier

ATTENTION : 
Il y'a du JS dans /assets/js/js.js pour la mise a jour dynamique de l'affichage du panier. 
Ce JS n'est cependant pas obligatoire pour le bon affichage du panier.

-->

<!-- BEGIN:main -->
<ul class="widget list-unstyled list-inline ml-auto commandes-panier panier-entete" id="kiubi-widget-{serial}">
  <!-- BEGIN:nonidentifie --><li class="list-inline-item"><a href="{baseLangue}/compte/login.html" class="login mr-2" title="Se connecter" data-toggle="tooltip" data-placement="bottom"><i class="fe fe-user"></i><span class="sr-only">Se connecter</span></a></li><!-- END:nonidentifie --><!-- BEGIN:identifie --><li class="list-inline-item mr-3"><a href="{baseLangue}/compte/" class="account text-decoration-none" title="Mon compte" data-toggle="tooltip" data-placement="bottom"><i class="fe fe-user mr-2"></i><span class="d-none d-md-inline">{prenom} {nom}</span></a></li><!-- END:identifie --><li class="list-inline-item"><a href="{baseLangue}/ecommerce/panier.html" title="D&eacute;tail du panier" class="cart-link text-decoration-none" data-cart="true" data-toggle="tooltip" data-placement="bottom"><i class="fe fe-shopping-cart mr-2"></i><span data-cart-count="true">{nb_produits}</span> <span class="sr-only" data-cart-total="true">article{pluriel_produits} / {total}</span></a></li>
</ul>
<div class="alert alert-light alert-cart py-3 fade shadow invisible" data-cart-alert>
  <h6 class="alert-heading">Ajout&eacute; au panier :</h6>
  <p class="text-truncate my-4" data-cart-alert-desc></p>
  <a href="/ecommerce/panier.html" class="btn btn-primary text-decoration-none shadow-none"><i class="fe fe-shopping-cart mr-2"></i>Voir le panier</a></div>
<!-- END:main -->
```



## Widget "Commandes / Panier detail"

### Template : `/theme/fr/widgets/commandes/panier_detail/index.html` 

```html
<!--
Template du Widget "Detail du panier"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#detail-du-panier
-->

<!-- BEGIN:main -->
<div class="section commandes-panier-detail" id="kiubi-section-{serial}">
  <div class="container">
    <ol class="breadcrumb breadcrumb-order bg-transparent border-0 p-0 mb-5 d-none d-md-flex">
      <li class="breadcrumb-item active">1. Panier</li>
      <li class="breadcrumb-item text-muted">2. Authentification</li>
      <li class="breadcrumb-item text-muted">3. Livraison</li>
      <li class="breadcrumb-item text-muted">4. Mode de paiement</li>
      <li class="breadcrumb-item text-muted">5. Validation</li>
    </ol>
    <h1 class="mb-5"><!-- BEGIN:intitule -->{intitule}<!-- END:intitule --> <span class="text-muted font-weight-normal">({nb_produits} produit{pluriel_produits})</span></h1>
    <!-- BEGIN:produits --> 
    <!-- BEGIN:erreur_bon -->
    <div class="alert alert-danger mb-5" role="alert">{erreur}</div>
    <!-- END:erreur_bon -->
    <form method="post" action="">
      <div class="row no-gutters mb-5 row-order">
        <div class="col-lg-8 border"> 
          
          <!-- BEGIN:produit -->
          <div class="p-2 p-md-4 border-bottom">
            <div class="row">
              <div class="col-md-2 col-3"> 
                <!-- BEGIN:illustration --> 
                <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"><img src="{url_illustration_g_miniature}" alt="{intitule_produit|htmlentities}" class="w-100" /></a> 
                <!-- END:illustration --> 
                <!-- BEGIN: noillustration --> 
                <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"><img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" class="w-100" /></a> 
                <!-- END: noillustration --> 
              </div>
              <div class="col">
                <div class="row">
                  <div class="col-md-6 col-12 text-left"> <a href="{lien_produit}">{intitule_produit}</a> 
                    <!-- BEGIN:reference -->
                    <p class="text-muted my-1 ref"><small>Ref. : {reference}</small></p>
                    <!-- END:reference -->
                    <p class="text-muted my-1 ref"><small>{intitule_variante}</small></p>
                  </div>
                  <div class="col-md-3 col-6 product-p">{prix_unitaire}</div>
                  <div class="col-md-3 col-6 product-tt"><strong>{prix_total}</strong></div>
				<div class="col-md-3 offset-md-9 col-6 offset-6 mt-2">
                    <div><input data-touchspin="vertical-icons" name="qt[{ref}]" type="text" class="form-control" value="{qt}"/></div>
                    <!-- BEGIN:erreur_qt -->
                    <div class="text-danger mt-3">max. : {max}</div>
                    <!-- END:erreur_qt -->
				</div>
                  <!-- BEGIN:accroche -->
                  <div class="col-12 pt-3 text-left d-none">
                    <p class="desc">{accroche}</p>
                  </div>
                  <!-- END:accroche --> 
                </div>
              </div>
              <div class="col-auto"> <a href="{lien_supprimer}"><i class="fe fe-trash"></i><span class="sr-only">Supprimer</span></a> </div>
            </div>
          </div>
          <!-- END:produit --> 
          
          <!-- BEGIN:option -->
          <div class="p-2 p-md-4 border-bottom option">
            <div class="row">
              <div class="col">
                <div class="row"> 
                  
                  <!-- BEGIN:simple -->
                  <div class="col-4 text-left">{intitule_option}</div>
                  <!-- BEGIN:offerte -->
                  <div class="col-3"></div>
                  <div class="col-2 text-center">{qt}</div>
                  <div class="col-3">Offert</div>
                  <!-- END:offerte --> 
                  <!-- BEGIN:payante -->
                  <div class="col-3">{prix_unitaire}</div>
                  <div class="col-2 text-center">{qt}</div>
                  <div class="col-3">{prix_total}</div>
                  <!-- END:payante --> 
                  <!-- END:simple --> 
                  
                  <!-- BEGIN:textarea -->
                  <div class="col-4 text-left">{intitule_option} : {valeur_option}</div>
                  <!-- BEGIN:offerte -->
                  <div class="col-3"></div>
                  <div class="col-2 text-center">{qt}</div>
                  <div class="col-3">Offert</div>
                  <!-- END:offerte --> 
                  <!-- BEGIN:payante -->
                  <div class="col-3">{prix_unitaire}</div>
                  <div class="col-2 text-center">{qt}</div>
                  <div class="col-3">{prix_total}</div>
                  <!-- END:payante --> 
                  <!-- END:textarea --> 
                  
                  <!-- BEGIN:select -->
                  <div class="col-4 text-left">{intitule_option} : {valeur_option}</div>
                  <!-- BEGIN:offerte -->
                  <div class="col-3"></div>
                  <div class="col-2 text-center">{qt}</div>
                  <div class="col-3">Offert</div>
                  <!-- END:offerte --> 
                  <!-- BEGIN:payante -->
                  <div class="col-3">{prix_unitaire}</div>
                  <div class="col-2 text-center">{qt}</div>
                  <div class="col-3">{prix_total}</div>
                  <!-- END:payante --> 
                  <!-- END:select --> 
                  
                </div>
              </div>
              <div class="col-auto"> <a href="{lien_supprimer}"><i class="fe fe-trash"></i><span class="sr-only">Supprimer</span></a> </div>
            </div>
          </div>
          <!-- END:option --> 
          
          <!-- BEGIN:bon -->
          <div class="p-2 p-md-4 border-bottom option">
            <div class="row">
              <div class="col">
                <div class="row">
                  <div class="col-9 text-left">{intitule_produit}</div>
                  <div class="col-3">{prix_total}</div>
                </div>
              </div>
              <div class="col-auto"> <a href="{lien_supprimer}"><i class="fe fe-trash"></i><span class="sr-only">Supprimer</span></a> </div>
            </div>
          </div>
          <!-- END:bon --> 
          
          <!-- BEGIN:remise -->
          <div class="p-2 p-md-4 border-bottom option">
            <div class="row">
              <div class="col text-left">{intitule_remise}</div>
              <div class="col-auto"> <a href="{lien_supprimer}"><i class="fe fe-trash"></i><span class="sr-only">Supprimer</span></a> </div>
            </div>
          </div>
          <!-- END:remise -->
          
          <div class="p-2 p-md-4 discount-code">
            <div class="row align-items-center">
              <div class="col-md">
                <p class="form-inline mb-md-0">
                  <label for="reduction" class="mr-2">Bon de r&eacute;duction :</label>
                  <input type="text" name="bon" value="{bon}" class="form-control form-control-sm" id="reduction" />
                </p>
              </div>
              <div class="col-md-auto justify-content-end">
                <input type="submit" name="bt_recalcul" value="Recalculer" class="btn btn-primary w-100"/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 p-2 p-md-4 bg-light">
			<h3 class="text-left pb-2 pb-md-4 m-0 border-bottom">R&eacute;capitulatif</h3>
          <div class="row-order">
            <div class="py-2 py-md-4 border-bottom hors-port">
              <div class="row">
                <div class="col-8 text-left">Total hors frais de livraison</div>
                <div class="col-4">{total_articles}</div>
              </div>
            </div>
            
            <!-- BEGIN:livrable -->
            <div class="py-2 py-md-4 border-bottom port">
              <div class="row">
                <div class="col-8 text-left">Frais de livraison<br>
                  {zone_livraison}</div>
                <div class="col-4">{frais_port}</div>
              </div>
            </div>
            <!-- END:livrable --> 
            
            <!-- BEGIN:nonlivrable -->
            <div class="py-2 py-md-4 border-bottom port text-danger text-left">La commande d&eacute;passe le poids autoris&eacute; et n'est pas livrable<br>
              {zone_livraison}</div>
            <!-- END:nonlivrable --> 
            
            <!-- BEGIN:date_livraison -->
            <div class="py-2 py-md-4 border-bottom"> Date de livraison : {date_livraison} <!-- BEGIN:heure_livraison -->&agrave; {heure_livraison}<!-- END:heure_livraison --> </div>
            <!-- END:date_livraison --> 
            
            <!-- BEGIN:commande_HT -->
            <div class="py-2 py-md-4 border-bottom ht">
              <div class="row">
                <div class="col-8 text-left">Total HT</div>
                <div class="col-4">{total_HT}</div>
              </div>
            </div>
            <div class="py-2 py-md-4 border-bottom tva">
              <div class="row">
                <div class="col-8 text-left">TVA</div>
                <div class="col-4">{total_TVA}</div>
              </div>
            </div>
            <!-- END:commande_HT -->
            
            <div class="py-2 py-md-4 ttc">
              <div class="row">
                <div class="col-8 text-left">Total TTC <!-- (montant minimum : {min_commande}) --></div>
                <div class="col-4">{total_TTC}</div>
              </div>
            </div>
            <input type="submit" name="bt_commande" value="Commander" class="btn btn-warning w-100"/>
			  <p class="text-center text-muted mt-3"><small><i class="fe fe-lock mr-2"></i>Paiement 100% s&eacute;curis&eacute;</small></p>
          </div>
        </div>
      </div>
      
      <!-- BEGIN:options_disponibles -->
      <div class="mb-5 option-order">
        <h4 class="mb-4">Envie d'une petite option ?</h4>
        <div class="row no-gutters mb-5 row-order">
          <div class="col-lg-8 border border-bottom-0"> 
            
            <!-- BEGIN:option -->
            <div class="p-2 p-md-4 border-bottom option-{type_option}">
              <div class="row"> 
                
                <!-- BEGIN:simple -->
                <div class="col-9 text-left">
                  <div class="custom-control custom-checkbox">
                    <input name="options[]" class="custom-control-input" value="{ref_option}" id="option{ref_option}" type="checkbox"/>
                    <label class="custom-control-label" for="option{ref_option}">{intitule_option}</label>
                  </div>
                </div>
                <div class="col-3"> 
                  <!-- BEGIN:offerte --> 
                  Offert 
                  <!-- END:offerte --> 
                  <!-- BEGIN:payante --> 
                  {prix_option} 
                  <!-- END:payante --> 
                </div>
                <div class="col text-left mt-2 option-desc">{description_option}</div>
                <!-- END:simple --> 
                
                <!-- BEGIN:textarea -->
                <div class="col-9 text-left">
                  <div class="custom-control custom-checkbox">
                    <input name="options[]" class="custom-control-input" value="{ref_option}" id="option{ref_option}" type="checkbox"/>
                    <label data-toggle="collapse" data-show="true" aria-controls="collapse{ref_option}" aria-expanded="false" data-target="#collapse{ref_option}" class="custom-control-label" for="option{ref_option}"> {intitule_option}</label>
                  </div>
                </div>
                <div class="col-3"> 
                  <!-- BEGIN:offerte --> 
                  Offert 
                  <!-- END:offerte --> 
                  <!-- BEGIN:payante --> 
                  {prix_option} 
                  <!-- END:payante --> 
                </div>
                <div class="col-12 collapse" id="collapse{ref_option}">
                  <textarea name="options_valeurs[{ref_option}]" rows="5" class="form-control mt-2">{valeur_option}</textarea>
                </div>
                <div class="col-12 text-left mt-2 option-desc">{description_option}</div>
                <!-- END:textarea --> 
                
                <!-- BEGIN:select -->
                <div class="col-9 text-left">
                  <div class="custom-control custom-checkbox">
                    <input name="options[]" class="custom-control-input" value="{ref_option}" id="option{ref_option}" type="checkbox"/>
                    <label data-toggle="collapse" data-show="true" aria-controls="collapse{ref_option}" aria-expanded="false" data-target="#collapse{ref_option}" class="custom-control-label" for="option{ref_option}">{intitule_option}</label>
                  </div>
                  <div class="form-inline collapse" id="collapse{ref_option}">
                    <select name="options_valeurs[{ref_option}]" class="custom-select mw-100 w-auto d-block mt-2">
                      <!-- BEGIN:choix -->
                      <option value="{valeur}" {selected}>{valeur}</option>
                      <!-- END:choix -->
                    </select>
                  </div>
                </div>
                <div class="col-3"> 
                  <!-- BEGIN:offerte --> 
                  Offert 
                  <!-- END:offerte --> 
                  <!-- BEGIN:payante --> 
                  {prix_option} 
                  <!-- END:payante --> 
                </div>
                <div class="col text-left mt-2 option-desc">{description_option}</div>
                <!-- END:select --> 
                
              </div>
            </div>
            <!-- END:option --> 
            
          </div>
        </div>
      </div>
      <!-- END:options_disponibles -->
      
      <div class="row">
        <div class="col-md-6">
          <p><a href="{lien_continuer}" class="btn btn-primary btn-lg">Continuez vos achats</a></p>
        </div>
        <div class="col-md-6 text-right">
          <p>
            <input type="submit" name="bt_commande" value="Commander" class="btn btn-warning btn-lg"/>
          </p>
        </div>
      </div>
      <input type="hidden" name="act" value="refresh" />
      <input type="hidden" name="ctl" value="{ctl}" />
    </form>
    <!-- END:produits --> 
    
    <!-- BEGIN:noproduits -->
    <p class="p-2 p-md-4 border">Votre panier est vide. <a href="/">Retournez &agrave; l'accueil</a>.</p>
    <!-- END:noproduits --> 
    
  </div>
</div>
<!-- END:main -->
```



## Widget "Commandes / Panier detail" - Version alternative : Classique

### Template : `/theme/fr/widgets/commandes/panier_detail/classique/index.html` 

```html
<!--
Template du Widget "Detail du panier classqiue"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#detail-du-panier
-->

<!-- BEGIN:main -->
<div class="section commandes-panier-detail panier-classique"  id="kiubi-section-{serial}">
  <div class="container">
    <ol class="breadcrumb breadcrumb-order bg-transparent border-0 p-0 mb-5 d-none d-md-flex">
      <li class="breadcrumb-item active">1. Panier</li>
      <li class="breadcrumb-item text-muted">2. Authentification</li>
      <li class="breadcrumb-item text-muted">3. Livraison</li>
      <li class="breadcrumb-item text-muted">4. Mode de paiement</li>
      <li class="breadcrumb-item text-muted">5. Validation</li>
    </ol>
    <!-- BEGIN:intitule -->
    <h1 class="mb-5">{intitule}</h1>
    <!-- END:intitule --> 
    <!-- BEGIN:produits --> 
    <!-- BEGIN:erreur_bon -->
    <div class="alert alert-danger mb-5" role="alert">{erreur}</div>
    <!-- END:erreur_bon -->
    <form method="post" action="">
      <div class="mb-5 detail-order">
        <table class="table table-hover table-order">
          <thead>
            <tr>
              <th scope="col" class="text-left w-100">{nb_produits} produit{pluriel_produits}</th>
              <th nowrap="nowrap" scope="col" class="text-right">Prix</th>
              <th scope="col" class="text-center">Qte</th>
              <th nowrap="nowrap" scope="col" class="text-right">Total</th>
              <th scope="col" class="table-spacer d-none d-md-table-cell">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <!-- BEGIN:produit -->
            <tr>
              <td class="product-infos"><div class="media">
                  <div class="d-none d-md-block mr-3"> 
                    <!-- BEGIN:illustration --> 
                    <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"><img src="{url_illustration_g_miniature}" alt="{intitule_produit|htmlentities}" /></a> 
                    <!-- END:illustration --> 
                    <!-- BEGIN: noillustration --> 
                    <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"><img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" /></a> 
                    <!-- END: noillustration --> </div>
                  <div class="media-body"><a href="{lien_produit}">{intitule_produit}</a> 
                    <!-- BEGIN:reference -->
                    <p class="ref">Ref. : {reference}</p>
                    <!-- END:reference -->
                    <p class="variante">{intitule_variante}</p>
                    <!-- BEGIN:accroche -->
                    <p class="desc d-none d-lg-block">{accroche}</p>
                    <!-- END:accroche -->
                    <p class="d-block d-md-none"><a href="{lien_supprimer}">Supprimer</a></p>
                  </div>
                </div></td>
              <td class="product-pu">{prix_unitaire}</td>
              <td nowrap="nowrap" class="product-qte"><input name="qt[{ref}]" type="text" class="form-control form-control-sm text-right" value="{qt}" style="width: 60px;" />
                
                <!-- BEGIN:erreur_qt -->
                
                <div class="text-danger">max. : {max}</div>
                
                <!-- END:erreur_qt --></td>
              <td class="product-tt">{prix_total}</td>
              <td class="d-none d-md-table-cell"><a href="{lien_supprimer}">Supprimer</a></td>
            </tr>
            <!-- END:produit --> 
            <!-- BEGIN:option -->
            <tr class="option"> 
              <!-- BEGIN:simple -->
              <td>{intitule_option}
                <p class="d-inline d-md-none"><a href="{lien_supprimer}">Supprimer</a></p></td>
              <!-- BEGIN:offerte -->
              <td>&nbsp;</td>
              <td class="text-center">{qt}</td>
              <td>Offert</td>
              <!-- END:offerte --> 
              <!-- BEGIN:payante -->
              <td>{prix_unitaire}</td>
              <td class="text-center">{qt}</td>
              <td>{prix_total}</td>
              <!-- END:payante --> 
              <!-- END:simple --> 
              <!-- BEGIN:textarea -->
              <td>{intitule_option} : {valeur_option}
                <p class="d-inline d-md-none"><a href="{lien_supprimer}">Supprimer</a></p></td>
              <!-- BEGIN:offerte -->
              <td>&nbsp;</td>
              <td class="text-center">{qt}</td>
              <td>Offert</td>
              <!-- END:offerte --> 
              <!-- BEGIN:payante -->
              <td>{prix_unitaire}</td>
              <td class="text-center">{qt}</td>
              <td>{prix_total}</td>
              <!-- END:payante --> 
              <!-- END:textarea --> 
              <!-- BEGIN:select -->
              <td>{intitule_option} : {valeur_option}
                <p class="d-inline d-md-none"><a href="{lien_supprimer}">Supprimer</a></p></td>
              <!-- BEGIN:offerte -->
              <td>&nbsp;</td>
              <td class="text-center">{qt}</td>
              <td>Offert</td>
              <!-- END:offerte --> 
              <!-- BEGIN:payante -->
              <td>{prix_unitaire}</td>
              <td class="text-center">{qt}</td>
              <td>{prix_total}</td>
              <!-- END:payante --> 
              <!-- END:select -->
              <td class="d-none d-md-table-cell"><a href="{lien_supprimer}">Supprimer</a></td>
            </tr>
            <!-- END:option -->
          </tbody>
          <tfoot>
            <!-- BEGIN:bon -->
            <tr>
              <td colspan="3" class="text-success">{intitule_produit}
                <p class="d-inline d-md-none"><a href="{lien_supprimer}">Supprimer</a></p></td>
              <td class="product-tt text-success">{prix_total}</td>
              <td class="d-none d-md-table-cell"><a href="{lien_supprimer}">Supprimer</a></td>
            </tr>
            <!-- END:bon --> 
            <!-- BEGIN:remise -->
            <tr>
              <td colspan="3">{intitule_remise}
                <p class="d-inline d-md-none"><a href="{lien_supprimer}">Supprimer</a></p></td>
              <td>&nbsp;</td>
              <td class="d-none d-md-table-cell"><a href="{lien_supprimer}">Supprimer</a></td>
            </tr>
            <!-- END:remise -->
            <tr class="discount-code">
              <td colspan="4"><div class="row align-items-center">
                  <div class="col-md-8">
                    <p class="form-inline mb-md-0">
                      <label for="reduction" class="mr-2">Bon de r&eacute;duction :</label>
                      <input type="text" name="bon" value="{bon}" class="form-control form-control-sm" id="reduction" />
                    </p>
                  </div>
                  <div class="col-md-4 justify-content-end">
                    <input type="submit" name="bt_recalcul" value="Recalculer" class="btn btn-primary"/>
                  </div>
                </div></td>
              <td class="d-none d-md-table-cell">&nbsp;</td>
            </tr>
            <tr class="hors-port">
              <td colspan="3"><strong>Total hors frais de livraison</strong></td>
              <td><strong>{total_articles}</strong></td>
              <td class="d-none d-md-table-cell">&nbsp;</td>
            </tr>
            <!-- BEGIN:livrable -->
            <tr class="port">
              <td colspan="3">Frais de livraison applicables pour : {zone_livraison}</td>
              <td>{frais_port}</td>
              <td class="d-none d-md-table-cell">&nbsp;</td>
            </tr>
            <!-- END:livrable --> 
            <!-- BEGIN:nonlivrable -->
            <tr class="port text-danger">
              <td colspan="3">La commande d&eacute;passe le poids autoris&eacute; pour : {zone_livraison}</td>
              <td>Non livrable</td>
              <td class="d-none d-md-table-cell">&nbsp;</td>
            </tr>
            <!-- END:nonlivrable --> 
            <!-- BEGIN:date_livraison -->
            <tr>
              <td colspan="4">Date de livraison : {date_livraison} <!-- BEGIN:heure_livraison -->&agrave; {heure_livraison}<!-- END:heure_livraison --></td>
              <td class="d-none d-md-table-cell">&nbsp;</td>
            </tr>
            <!-- END:date_livraison --> 
            <!-- BEGIN:commande_HT -->
            <tr  class="ht">
              <td colspan="3">Total HT</td>
              <td>{total_HT}</td>
              <td class="d-none d-md-table-cell">&nbsp;</td>
            </tr>
            <tr class="tva">
              <td colspan="3">TVA</td>
              <td>{total_TVA}</td>
              <td class="d-none d-md-table-cell">&nbsp;</td>
            </tr>
            <!-- END:commande_HT -->
            <tr class="ttc table-active">
              <td colspan="3">Total TTC <!-- (montant minimum : {min_commande}) --></td>
              <td>{total_TTC}</td>
              <td class="d-none d-md-table-cell">&nbsp;</td>
            </tr>
          </tfoot>
        </table>
      </div>
      
      <!-- BEGIN:options_disponibles -->
      <div class="mb-5 option-order">
        <h4 class="mb-4">Envie d'une petite option ?</h4>
        <table class="table table-order">
          <!-- BEGIN:option -->
          <tr class="option-{type_option}"> 
            <!-- BEGIN:simple -->
            <td><div class="custom-control custom-checkbox">
                <input name="options[]" class="custom-control-input" value="{ref_option}" id="option{ref_option}" type="checkbox"/>
                <label class="custom-control-label" for="option{ref_option}">{intitule_option}</label>
              </div>
              <p class="option-desc mb-0">{description_option}</p></td>
            <!-- BEGIN:offerte -->
            <td>Offert</td>
            <!-- END:offerte --> 
            <!-- BEGIN:payante -->
            <td>{prix_option}</td>
            <!-- END:payante --> 
            <!-- END:simple --> 
            <!-- BEGIN:textarea -->
            <td><div class="custom-control custom-checkbox">
                <input name="options[]" class="custom-control-input" value="{ref_option}" id="option{ref_option}" type="checkbox"/>
                <label data-toggle="collapse" data-show="true" aria-controls="collapse{ref_option}" aria-expanded="false" data-target="#collapse{ref_option}" class="custom-control-label" for="option{ref_option}"> {intitule_option}</label>
              </div>
              <p class="option-desc mb-0">{description_option}</p>
              <div class="collapse" id="collapse{ref_option}">
                <textarea name="options_valeurs[{ref_option}]" rows="5" class="form-control">{valeur_option}</textarea>
              </div></td>
            <!-- BEGIN:offerte -->
            <td>Offert</td>
            <!-- END:offerte --> 
            <!-- BEGIN:payante -->
            <td>{prix_option}</td>
            <!-- END:payante --> 
            <!-- END:textarea --> 
            <!-- BEGIN:select -->
            <td><div class="custom-control custom-checkbox">
                <input name="options[]" class="custom-control-input" value="{ref_option}" id="option{ref_option}" type="checkbox"/>
                <label data-toggle="collapse" data-show="true" aria-controls="collapse{ref_option}" aria-expanded="false" data-target="#collapse{ref_option}" class="custom-control-label" for="option{ref_option}">{intitule_option}</label>
              </div>
              <p class="option_desc mb-0">{description_option}</p>
              <div class="form-inline collapse" id="collapse{ref_option}">
                <select name="options_valeurs[{ref_option}]" class="custom-select mw-100 w-auto d-block">
                  <!-- BEGIN:choix -->
                  <option value="{valeur}" {selected}>{valeur}</option>
                  <!-- END:choix -->
                </select>
              </div></td>
            <!-- BEGIN:offerte -->
            <td>Offert</td>
            <!-- END:offerte --> 
            <!-- BEGIN:payante -->
            <td>{prix_option}</td>
            <!-- END:payante --> 
            <!-- END:select -->
            <td class="table-spacer d-none d-md-table-cell">&nbsp;</td>
          </tr>
          <!-- END:option -->
        </table>
      </div>
      <!-- END:options_disponibles -->
      
      <div class="row">
        <div class="col-md-6">
          <p><a href="{lien_continuer}" class="btn btn-primary btn-lg">Continuez vos achats</a></p>
        </div>
        <div class="col-md-6 text-right">
          <p>
            <input type="submit" name="bt_commande" value="Commander" class="btn btn-primary btn-lg"/>
          </p>
        </div>
      </div>
      <input type="hidden" name="act" value="refresh" />
      <input type="hidden" name="ctl" value="{ctl}" />
    </form>
    <!-- END:produits --> 
    
    <!-- BEGIN:noproduits -->
    <p>Votre panier est vide. <a href="/">Retournez &agrave; l'accueil</a>.</p>
    <!-- END:noproduits --> 
    
  </div>
</div>
<!-- END:main -->
```



## Widget "Commandes / Validation"

### Template : `/theme/fr/widgets/commandes/validation/index.html` 

```html
<!-- 
Template du Widget "Validation (de commande)"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-commandes.html#validation
-->

<!-- BEGIN:main -->
<div class="section commandes-validation" id="kiubi-section-{serial}">
  <div class="container">
    <ol class="breadcrumb breadcrumb-order bg-transparent border-0 p-0 mb-5 d-none d-md-flex">
      <li class="breadcrumb-item text-muted"><a href="{baseLangue}/ecommerce/panier.html">1. Panier</a></li>
      <li class="breadcrumb-item text-muted"><a href="#">2. Authentification</a></li>
      <li class="breadcrumb-item text-muted"><a href="{baseLangue}/ecommerce/livraison.html">3. Livraison</a></li>
      <li class="breadcrumb-item text-muted"><a href="{baseLangue}/ecommerce/paiement.html">4. Mode de paiement</a></li>
      <li class="breadcrumb-item active">5. Validation</li>
    </ol>
    <h1 class="mb-5">Validation de votre commande</h1>
    <div class="mb-5 bg-light p-4">{message}</div>
    <a href="{lien_retour}" class="btn btn-primary btn-lg">Retour au site</a> </div>
</div>
<!-- END:main -->
```



## Widget "Communication / Contact"

### Template : `/theme/fr/widgets/communication/contact/index.html` 

```html
<!-- 
Template du Widget "Formulaire de contact"

CE WIDGET EST DEPRECIE. VOUS DEVEZ LE REMPLACER PAR LE WIDGET DISMOI?
-->

<!-- BEGIN: main -->

<div class="alert alert-warning text-uppercase" role="alert">Le formulaire de contact est un widget d&eacute;pr&eacute;ci&eacute;. Merci d'utiliser en remplacement le widget <a href="https://aide.kiubi.com/design-modules.html#dismoi" class="alert-link" target="_blank">"Dismoi (Gestion de formulaires)</a>".</div>
<!-- END: main --> 

<!-- BEGIN: intitule -->
<h1>{intitule_form}</h1>
<!-- END: intitule --> 
<!-- BEGIN:contact -->
<form class="form" method="post" action="#contact_form" >
  <!-- BEGIN:erreurs -->
  <div class="erreurs">{erreurs}</div>
  <!-- END:erreurs --> 
  <!-- BEGIN: champ -->
  <p>
    <label for="form_contact{id}" class="{obligatoire}">{intitule} 
      <!-- BEGIN:obligatoire --> 
      <span class="alerte">*</span> 
      <!-- END:obligatoire --> 
      :</label>
    <!-- BEGIN: text -->
    <input type="text" name="{name}" id="form_contact{id}" class="textfield" value="{valeur}" />
    <!-- END: text --> 
    <!-- BEGIN: textarea -->
    <textarea name="{name}" rows="10" id="form_contact{id}" class="textarea">{valeur}</textarea>
    <!-- END: textarea --> 
    <!-- BEGIN: civilite -->
  <div class="civilite">
    <label for="form_contact_m{id}">
      <input name="{name}" type="radio" id="form_contact_m{id}" value="M" class="radio" {checked_m} />
      M</label>
    <label for="form_contact_mme{id}">
      <input  name="{name}" type="radio" id="form_contact_mme{id}" value="Mme" class="radio" {checked_mme} />
      Mme</label>
    <label for="form_contact_mlle{id}">
      <input name="{name}" type="radio" id="form_contact_mlle{id}" value="Mlle" class="radio" {checked_mlle} />
      Mlle</label>
    <span id="form_contact{id}"></span> </div>
  <!-- END: civilite -->
  </p>
  <!-- END: champ -->
  <p>
    <input type="submit" name="Submit" value="Envoyer" class="bt_envoyer" />
  </p>
  <p class="alerte"> <strong>* champs obligatoires </strong></p>
  <div>
    <input type="hidden" name="act" value="send" />
    <input type="hidden" name="ctl" value="{ctl}" />
  </div>
</form>
<!-- END:contact --> 
<!-- BEGIN:message --> 
{message} 
<!-- END:message -->
```



## Widget "Communication / Formulaires"

### Template : `/theme/fr/widgets/communication/formulaires/index.html` 

```html
<!--
Template du Widget "Formulaire (Dismoi?)"

Documentation :
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-modules.html#dismoi
-->

<!-- BEGIN: main -->
<div class="section communication-formulaires" id="multi_form_{form_id}">
  <div class="container bg-transparent">
    <!-- BEGIN: intitule -->
    <h2 class="mb-4">{intitule_form}</h2>
    <!-- END: intitule -->
    <!-- BEGIN:form -->
    <form class="form" method="post" action="#multi_form_{form_id}" enctype="multipart/form-data">
      <!-- BEGIN:erreurs -->
      <div class="alert alert-danger" role="alert">{erreurs}</div>
      <!-- END:erreurs -->
      <!-- BEGIN:fieldset -->
      <!-- BEGIN:debut_fieldset -->
      <fieldset class="mb-5">
        <legend>{legend}</legend>
        <!-- END:debut_fieldset -->
        <!-- BEGIN: champ -->
        <div class="form-group">
          <!-- BEGIN:obligatoire -->
          <span class="float-right small text-muted">Obligatoire</span>
          <!-- END:obligatoire -->

          <!-- BEGIN: text -->
          <label for="multi_form{id}" class="{obligatoire}">{intitule} :</label>
          <input type="text" name="{name}" id="multi_form{id}" class="form-control {erreur|mapValue|is-invalid}" value="{valeur}" />
          <!-- END: text -->
          <!-- BEGIN: textarea -->
          <label for="multi_form{id}" class="{obligatoire}">{intitule} :</label>
          <textarea name="{name}" rows="10" id="multi_form{id}" class="form-control {erreur|mapValue|is-invalid}">{valeur}</textarea>
          <!-- END: textarea -->
          <!-- BEGIN: date -->
          <label for="multi_form{id}" class="{obligatoire}">{intitule} :</label>
          <div class="input-group" style="max-width: 280px;">
            <input name="{name}" id="multi_form{id}" class="form-control text-center datepicker {erreur|mapValue|is-invalid}" type="text" value="{valeur}" placeholder="jj/mm/aaaa"/>
            <div class="input-group-append"><span class="input-group-text"><span class="fe fe-calendar" aria-hidden="true"></span></span> </div>
          </div>
          <!-- END: date -->
          <!-- BEGIN: datetime -->
          <label for="multi_form{id}" class="{obligatoire}">{intitule} :</label>
          <div class="input-group" style="max-width: 280px;">
            <input name="{name}" type="text" class="form-control text-center datetimepicker {erreur|mapValue|is-invalid}" id="multi_form{id}" value="{valeur}" placeholder="jj/mm/aaaa hh:mm" />
            <div class="input-group-append"><span class="input-group-text"><span class="fe fe-calendar" aria-hidden="true"></span></span> </div>
          </div>
          <!-- END: datetime -->
          <!-- BEGIN: civilite -->
          <label for="multi_form{id}" class="{obligatoire}">{intitule} :</label>
          <div>
            <div class="custom-control custom-radio custom-control-inline civilite">
              <input name="{name}" class="custom-control-input" type="radio" id="multi_form_m{id}" value="M" {checked_m} />
              <label for="multi_form_m{id}" class="custom-control-label">M</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline civilite">
              <input  name="{name}" class="custom-control-input" type="radio" id="multi_form_mme{id}" value="Mme" {checked_mme} />
              <label for="multi_form_mme{id}" class="custom-control-label">Mme</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline civilite">
              <input name="{name}" class="custom-control-input" type="radio" id="multi_form_mlle{id}" value="Mlle" {checked_mlle} />
              <label for="multi_form_mlle{id}" class="custom-control-label">Mlle</label>
            </div>
            <span id="multi_form{id}"></span> </div>
          <!-- END: civilite -->
          <!-- BEGIN: select -->
          <label for="multi_form{id}" class="{obligatoire}">{intitule} :</label>
          <select name="{name}" id="multi_form{id}" class="custom-select mw-100 w-auto d-block">
            <!-- BEGIN:option-->
            <option value="{value}" {selected}>{label}</option>
            <!-- END:option-->
          </select>
          <!-- END: select -->
          <!-- BEGIN: checkbox -->
          <label for="multi_form{id}" class="{obligatoire}">{intitule} :</label>
          <!-- BEGIN:option-->
          <div class="custom-control custom-checkbox">
            <input name="{name}" class="custom-control-input {erreur|mapValue|is-invalid}" id="multi_form{id}_{value}" type="checkbox" value="{value}" {checked} />
            <label for="multi_form{id}_{value}" class="custom-control-label">{label}</label>
          </div>
          <!-- END:option-->
          <!-- END: checkbox -->
          <!-- BEGIN: radio -->
          <label for="multi_form{id}" class="{obligatoire}">{intitule} :</label>
          <!-- BEGIN:option-->
          <div class="custom-control custom-radio">
            <input name="{name}" class="custom-control-input" id="multi_form{id}_{value}" type="radio" value="{value}" {checked} />
            <label for="multi_form{id}_{value}" class="custom-control-label">{label}</label>
          </div>
          <!-- END:option-->
          <!-- END: radio -->
          <!-- BEGIN: upload -->
          <label for="multi_form{id}" class="{obligatoire}">{intitule} :</label>
          <div class="custom-file">
            <input type="file" name="{name}" id="multi_form_file{id}" class="custom-file-input {erreur|mapValue|is-invalid}" aria-describedby="multi_form_file_add{id}">
            <label class="custom-file-label" for="multi_form_file{id}">Rechercher un fichier</label>
          </div>
          <!-- END: upload -->
          <!-- BEGIN: html -->
          <div class="form-text">{html}</div>
          <!-- END: html -->

          <!-- BEGIN: aide -->
          <p class="help-block mt-2">{aide}</p>
          <!-- END: aide -->

        </div>
        <!-- END: champ -->
        <!-- BEGIN:fin_fieldset -->
      </fieldset>
      <!-- END:fin_fieldset -->
      <!-- END:fieldset -->

      <!-- BEGIN:consentement -->
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input name="consentement_ok" class="custom-control-input {erreur|mapValue|is-invalid}" id="consentement_ok" type="checkbox" value="1" {check_consentement}/>
          <label for="consentement_ok" class="custom-control-label">J'accepte l'utilisation de mes donn&eacute;es personnelles</label>
        </div>
      </div>
      <p class="small text-muted">{finalites}</p>
      <!-- END:consentement -->

      <!-- BEGIN:captcha -->
      <div class="form-group {erreur}">
        <label for="captcha[{captcha_id}]">Anti-spam :</label>
        <p>{captcha_question} :</p>
        <input name="captcha[{captcha_id}]"  id="captcha[{captcha_id}]" type="text" class="form-control {erreur|mapValue|is-invalid}" style="width: 100px" />
      </div>
      <!-- END: captcha -->

      <p class="mb-0">
        <input type="submit" name="Submit" value="Envoyer" class="btn btn-primary" />
      </p>
      <div>
        <!-- BEGIN:hidden -->
        <input type="hidden" name="{name}" value="{valeur}" />
        <!-- END:hidden -->
        <input type="hidden" name="j" value="{jeton}" />
        <input type="hidden" name="form_id" value="{form_id}" />
        <input type="hidden" name="act" value="send" />
        <input type="hidden" name="ctl" value="{ctl}" />
      </div>
    </form>
    <!-- END:form -->
    <!-- BEGIN:message -->
    {message}
    <!-- END:message -->
    <div class="post_footer"></div>
  </div>
</div>
<!-- END: main -->
```

### Template : `/theme/fr/widgets/communication/formulaires/mail.html` 

```html
<!-- 
Template de l'email envoye par le Widget "Formulaire (Dismoi?)"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-modules.html#dismoi
-->

<!-- BEGIN: main -->
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta name="x-apple-disable-message-reformatting">
<meta name="apple-mobile-web-app-capable" content="yes">
<title>{site_nom}</title>
<style>
@media only screen and (max-width: 480px) {
    h1 {
        font-size: 18px;
        margin-bottom: 10px;
    }
    .container {
        display: block;
        width: 320px;
        padding: 5px;
    }
    .main {
        width: 300px;
        padding: 10px;
    }
    .content th {
        display: block;
        width: 100% !important;
        padding: 0 0 10px 0;
    }
}
</style>
</head>
<body>
<table border="0" cellpadding="0" cellspacing="0" style="margin-top: 30px; width: 100%; border-spacing: 0;">
  <tbody>
    <tr>
      <td class="container" style=" display: block; margin: 0 auto !important; padding: 10px; width: 680px;">
          <div style="padding: 20px; background: #f6f6f6;" class="main">
          <h1 style="margin: 0 0 30px 0; font-size: 20px; font-weight: bold; line-height: 1.4;">{site_nom}</h1>
          <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-spacing: 0;" class="content">
            <tbody>
              <!-- BEGIN: champ -->
              <tr>
                <th width="200" style="padding: 0 20px 20px 0; text-align: left; font-weight: normal; vertical-align: top; border-collapse: collapse;"><strong>{intitule} :</strong></th>
                <th style="padding: 0 20px 20px 0; text-align: left; font-weight: normal; vertical-align: top; border-collapse: collapse;">{valeur}</th>
              </tr>
              <!-- END: champ --> 
              <!-- BEGIN: infos_sup -->
              <tr>
                <th style="padding: 0 20px 20px 0; border-collapse: collapse;">&nbsp;</th>
                <th style="padding: 0 20px 20px 0; text-align: left; font-weight: normal; vertical-align: top; border-collapse: collapse;">{infos_connection}</th>
              </tr>
              <!-- END: infos_sup -->
            </tbody>
          </table>
        </div>
        <div style="clear: both; margin-top: 10px; text-align: center; color: #999;" class="footer">
          <p>Copyright &copy; {annee_maintenant} {SOCIETE.societe_nom}<br>
            Tous droits r&eacute;serv&eacute;s</p>
        </div></td>
    </tr>
  </tbody>
</table>
</body>
</html>
<!-- END: main -->
```



## Widget "Communication / Newsletter"

### Template : `/theme/fr/widgets/communication/newsletter/index.html` 

```html
<!-- 
Template du Widget "Inscription a la newsletter"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-modules.html#newsletter
-->

<!-- BEGIN:main -->
<aside class="widget communication-newsletter" id="inscription-newsletter"> 
  <!-- BEGIN:intitule -->
  <h5 class="mb-3">{intitule}</h5>
  <!-- END:intitule --> 
  <!-- BEGIN:form --> 
  <!-- BEGIN:erreur -->
  <div class="alert alert-danger" role="alert">{erreur}</div>
  <!-- END:erreur -->
  <form action="#inscription-newsletter" method="post">
    <div class="input-group mb-3">
    <label for="emailnewsletter" class="sr-only">Adresse email</label>
    <input type="email" class="form-control" name="email" value="{email}" id="emailnewsletter" placeholder="Votre email">
    <div class="input-group-append">
      <button class="btn btn-primary" type="submit"><span class="fe fe-send" aria-hidden="true"></span><span class="sr-only">Ok</span></button>
    </div>
  </div>

    <div class="form-group">
      <div class="custom-control custom-radio mb-1">
        <input class="custom-control-input" type="radio" name="opt" value="in" id="opt_in" {checked_in}>
        <label class="custom-control-label text-muted" for="opt_in">J'accepte de recevoir la newsletter</label>
      </div>
      <div class="custom-control custom-radio">
        <input class="custom-control-input" type="radio" name="opt" value="out" id="opt_out" {checked_out}>
        <label class="custom-control-label text-muted" for="opt_out">Je ne souhaite pas recevoir la newsletter</label>
      </div>
    </div>
    <p class="small text-muted"> L'email recueilli est utilis&eacute; pour l'envoi de lettres d'informations et d'offres promotionnelles. Vous pouvez vous d&eacute;sabonner dans ce m&ecirc;me formulaire ou en contactant {SOCIETE.societe_nom} par <a href="mailto:{SOCIETE.contact_mail}">email</a>. <a href="/donnees-personnelles.html" target="_blank">Consulter les d&eacute;tails du consentement.</a> </p>
    <input type="hidden" name="act" value="send" />
    <input type="hidden" name="ctl" value="{ctl}"/>
  </form>
  <!-- END:form --> 
  <!-- BEGIN:validation -->
  <p>{message}</p>
  <!-- END:validation --> 
</aside>
<!-- END:main -->
```



## Widget "Communication / Syndication blog"

### Template : `/theme/fr/widgets/communication/syndication_blog/index.html` 

```html
<!-- 
Template du Widget "Syndication"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-modules.html#syndication
-->

<!-- BEGIN:main -->
<aside class="widget communication-syndication-blog" id="kiubi-widget-{serial}">
  <!-- BEGIN: intitule -->
  <h5>{intitule}</h5>
  <!-- END: intitule -->
  <ul class="nav flex-column">
    <!-- BEGIN:flux -->
    <li class="nav-item"><a href="{lien_flux}" class="nav-link" title="{intitule_flux|htmlentities}">{intitule_flux}</a></li>
    <!-- END:flux -->
  </ul>
  <!-- BEGIN:noflux --> 
  <p>Pas de flux disponible.</p>
  <!-- END:noflux --> 
</aside>
<!-- END:main -->
```



## Widget "Compte / Identification"

### Template : `/theme/fr/widgets/compte/identification/index.html` 

```html
<!-- 
Template du Widget "Identification"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#identification
-->

<!-- BEGIN:main -->
<div class="iubi-section section compte-identification" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:erreur -->
    <div class="alert alert-danger" role="alert">L'adresse email ou le mot de passe que vous avez saisis sont erron&eacute;s. Vous &ecirc;tes  nouveau sur le site ? <a href="{lien_inscription}" class="alert-link"><strong>Cr&eacute;ez votre compte !</strong></a> </div>
    <!-- END:erreur --> 
    <!-- BEGIN:erreur_fermeture -->
    <div class="alert alert-danger" role="alert">L'identification est momentan&eacute;ment interrompue.</div>
    <!-- END:erreur_fermeture -->
    <div class="row justify-content-between">
      <div class="col-md-6 col-lg-5 mb-5">
        <h4 class="mb-4">Vous avez un compte ?</h4>
        <form action="#content_right" method="post">
          <div class="form-group">
            <label for="email_ident">Adresse email :</label>
            <input type="text" name="email" id="email_ident" value="{email}" class="form-control"/>
          </div>
          <div class="form-group">
            <label for="mdp_ident">Mot de passe :</label>
            <input type="password" name="mdp" id="mdp_ident" value="" class="form-control"/>
          </div>
          <input type="submit" value="S'identifier" class="btn btn-primary"/>
          <a href="{baseLangue}/compte/motdepasse_perdu.html" class="float-right">Mot de passe perdu ?</a>
          <input type="hidden" name="act" value="send" />
          <input type="hidden" name="ctl" value="{ctl}"/>
        </form>
      </div>
      <div class="col-md-6 col-lg-5 ">
        <h4 class="mb-4">Vous &ecirc;tes nouveau ?</h4>
        <p>En cr&eacute;ant un compte sur <strong>{site_nom}</strong> vous pourrez acc&eacute;der &agrave; l'ensemble de nos services.</p>
        <form action="{lien_inscription}" method="post">
          <input type="submit" value="Cr&eacute;ez votre compte" class="btn btn-primary"/>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- END:main -->
```



## Widget "Compte / Identification rapide"

### Template : `/theme/fr/widgets/compte/identification_rapide/index.html` 

```html
<!-- 
Template du Widget "Identification rapide"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#identification-rapide
-->

<!-- BEGIN:main -->
<aside class="widget compte-identification-rapide" id="kiubi-widget-{serial}"> 
  <!-- BEGIN:nonidentifie --> 
  <!-- BEGIN:intitule -->
  <h5 class="mb-3">{intitule}</h5>
  <!-- END: intitule -->
  <form action="{form_action}" method="post">
    <div class="form-group">
      <input type="text" name="email" id="email_ident_rapide" value="" placeholder="Adresse email" class="form-control"/>
    </div>
    <div class="form-group">
      <input type="password" name="mdp" id="mdp_ident_rapide" value="" placeholder="Mot de passe" class="form-control"/>
    </div>
    <p>
      <input type="submit" value="S'identifier" class="btn btn-primary"/>
    </p>
    <a href="{baseLangue}/compte/motdepasse_perdu.html">Mot de passe perdu ?</a>
    <input type="hidden" name="act" value="send" />
    <input type="hidden" name="ctl" value="{ctl}"/>
  </form>
  <hr/>
  <p>Vous &ecirc;tes nouveau sur le site ? <a href="{baseLangue}/compte/ouverture.html">Cr&eacute;ez un compte pour acc&eacute;der &agrave; nos services.</a></p>
  <!-- END:nonidentifie --> 
  <!-- BEGIN:identifie -->
  <p class="loged">Bonjour, <strong>{prenom} {nom}</strong><br />
    <a href="{baseLangue}/compte/">Votre compte</a></p>
  <!-- END:identifie --> 
</aside>
<!-- END:main -->
```



## Widget "Compte / Identification rapide" - Version alternative : Identification rapide entete

### Template : `/theme/fr/widgets/compte/identification_rapide/identification_rapide.entete/index.html` 

```html
<!-- 
Template du Widget "Identification rapide" pour un affichage sans formulaire d'identification

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#identification-rapide
-->

<!-- BEGIN:main -->
<ul class="widget list-unstyled list-inline ml-auto compte-identification-rapide identification-rapide-entete" id="kiubi-widget-{serial}">
  <!-- BEGIN:nonidentifie --><li class="list-inline-item"><a href="{baseLangue}/compte/" class="login mr-2"><i class="fe fe-user" title="Se connecter" data-toggle="tooltip" data-placement="bottom"></i><span class="sr-only">Se connecter</span></a></li><!-- END:nonidentifie --><!-- BEGIN:identifie --><li class="list-inline-item"><a href="{baseLangue}/compte/" class="account"><i class="fe fe-user mr-2" title="Mon commpte" data-toggle="tooltip" data-placement="bottom"></i><span class="d-none d-md-inline">{prenom} {nom}</span></a></li><!-- END:identifie -->
</ul>
<!-- END:main -->
```



## Widget "Compte / Inscription"

### Template : `/theme/fr/widgets/compte/inscription/index.html` 

```html
<!-- 
Template du Widget "Inscription"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#formulaire-d-inscription
-->

<!-- BEGIN:main -->
<div class="section compte-inscription" id="inscription">
  <div class="container"> 
      
      <div class="row">
    <div class="col-lg-10 mx-auto">
    <!-- BEGIN:intitule -->
    <h2 class="mb-4">{intitule}</h2>
    <!-- END:intitule --> 
    <!-- BEGIN:form -->
    <form method="post" action="#inscription">
         <div class="lead mb-5">En cr&eacute;ant un compte sur <strong>"{site_nom}"</strong> vous pourrez acc&eacute;der &agrave; l'ensemble de nos services.
            Si vous avez d&eacute;j&agrave; un compte, veuillez vous connecter &agrave; <a href="{baseLangue}/compte/login.html">la page de connexion</a>.</div>
        
          
          <!-- BEGIN:erreurs -->
          <div class="alert alert-danger" role="alert">
            <ul>
              <!-- BEGIN:erreur -->
              <li>{erreur}</li>
              <!-- END:erreur -->
            </ul>
          </div>
          <!-- END:erreurs -->
          
          <fieldset class="mb-5">
            <legend>Vos informations personnelles</legend>
            <div class="form-group">
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" name="genre" id="insc_genreF" value="F" {checked_F}/>
                <label class="custom-control-label" for="insc_genreF">Madame</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" name="genre" id="insc_genreH" value="H" {checked_H}/>
                <label class="custom-control-label" for="insc_genreH">Monsieur</label>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                  <label for="insc_nom">Votre nom :</label>
                  <input type="text" name="nom" id="insc_nom" value="{nom}" class="form-control" autocomplete="family-name"/>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                  <label for="insc_prenom">Votre pr&eacute;nom :</label>
                  <input type="text" name="prenom" id="insc_prenom" value="{prenom}" class="form-control" autocomplete="given-name"/>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                  <label for="insc_email">Votre adresse email :</label>
                  <input type="text" name="email" id="insc_email" value="{email}" class="form-control" autocomplete="email"/>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="mb-5">
            <legend>Votre mot de passe</legend>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                  <label for="insc_mdp">Mot de passe <em>(6 &agrave; 32 caract&egrave;res)</em> : </label>
                  <input type="password" name="mdp" id="insc_mdp" value="{mdp}" class="form-control" autocomplete="new-password"/>
                </div>
                <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
                  <label for="insc_mdp_confirm">Confirmation :</label>
                  <input type="password" name="mdp_confirm" id="insc_mdp_confirm" value="{mdp_confirm}" class="form-control" autocomplete="new-password"/>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="mb-5">
            <legend>Abonnement &agrave; la newsletter</legend>
            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input name="newsletter" class="custom-control-input" id="insc_newsletter" type="checkbox" value="1" {check_newsletter}/>
                <label for="insc_newsletter" class="custom-control-label">J'accepte de recevoir la newsletter par email. 
                  <!-- BEGIN:fidelite --><span class="text-warning">B&eacute;n&eacute;ficiez d'un bonus de {bonus_fidelite} points de fid&eacute;lit&eacute; !</span><!-- END:fidelite --> 
                </label>
              </div>
            </div>
            <p class="small text-muted">L'email recueilli est utilis&eacute; pour l'envoi de lettres d'informations et d'offres promotionnelles. <a href="/donnees-personnelles.html" target="_blank">Consulter les d&eacute;tails du consentement.</a></p>
          </fieldset>
          <fieldset class="mb-5">
            <legend>Conditions d'utilisation</legend>
            <div class="form-group">
              <textarea name="insc_legal" rows="8" class="form-control" id="insc_legal" readonly>{CGU}</textarea>
            </div>
            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input name="legal_ok" class="custom-control-input" id="insc_legal_ok" type="checkbox" value="1" {check_legal} />
                <label for="insc_legal_ok" class="custom-control-label"><strong>J'accepte les conditions d'utilisation du service</strong></label>
              </div>
            </div>
          </fieldset>
          
          <!-- BEGIN:consentement -->
          <fieldset class="mb-5">
            <legend>Donn&eacute;es personnelles collect&eacute;es et finalit&eacute;s des traitements</legend>
            <div class="form-group">
              <textarea rows="8" class="form-control" readonly>{finalites}</textarea>
            </div>
            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input name="consentement_ok" class="custom-control-input" id="consentement_ok" type="checkbox" value="1" {check_consentement}/>
                <label for="consentement_ok" class="custom-control-label"><strong>J'accepte l'utilisation de mes donn&eacute;es personnelles.</strong> <a href="/donnees-personnelles.html" target="_blank">Consulter les d&eacute;tails du consentement.</a> </label>
              </div>
            </div>
          </fieldset>
          <!-- END:consentement --> 
          
          <!-- BEGIN:captcha -->
          <fieldset class="mb-5">
            <legend>Anti-spam</legend>
            <div class="form-group">
              <label for="captcha{captcha_id}">{captcha_question} :</label>
              <input type="text" name="captcha[{captcha_id}]" id="captcha{captcha_id}" class="form-control" value="" style="width: 100px" />
            </div>
          </fieldset>
          <!-- END:captcha -->
          
          <div class="row">
            <div class="col-sm-6">
              <p><a class="btn btn-lg btn-warning" href="{baseLangue}/compte/">Annuler</a></p>
            </div>
            <div class="col-sm-6 text-right">
              <p>
                <input type="submit" value="S'inscrire" class="btn btn-lg btn-primary"/>
              </p>
            </div>
          </div>
          <input type="hidden" name="act" value="inscription" />
          <input type="hidden" name="ctl" value="{ctl}"/>
    </form>
    <!-- END:form --> 
    <!-- BEGIN:message -->
    <p>Bonjour <strong>{prenom} {nom}</strong>,<br />
      <br />
      Vous allez recevoir d'ici quelques instants un email &agrave; l'adresse <strong>{email}</strong>. Si vous utilisez un filtre anti-spam pour votre messagerie, merci de v&eacute;rifier la configuration du filtre.<br />
      <br />
      Ouvrez cet email et cliquez sur le lien qui vous permettra de continuer et de valider votre inscription.<br />
      <br />
      A tout de suite ! </p>
    <!-- END:message --> 
    <!-- BEGIN:fermeture -->
    <div class="alert alert-danger" role="alert">L'inscription au site <strong>{site_nom}</strong> est momentan&eacute;ment ferm&eacute;.</div>
    <!-- END:fermeture --> 
  </div>
      </div>
      </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/compte/inscription/mail.html` 

```html
<!-- 
Template de l'email de confirmation d'inscription du Widget "Inscription"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#formulaire-d-inscription
-->

<!-- BEGIN:main -->
Félicitations,

Vous êtes inscrit sur {site_nom} !

Veuillez copier et coller l'adresse suivante dans votre navigateur :
{urlInscription}

Nous vous remercions d'utiliser {site_nom}.

Cordialement, 

L'équipe de {site_nom}
<!-- END:main -->
```



## Widget "Compte / Tableau bord"

### Template : `/theme/fr/widgets/compte/tableau_bord/index.html` 

```html
<!-- 
Template du Widget "Tableau de bord (Gestion de compte)"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#tableau-de-bord
-->

<!-- BEGIN:main -->
<div class="kiubi-compte section compte-tableau-bord" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h1 class="mb-5">{intitule}</h1>
    <!-- END:intitule -->
    <div class="bg-light p-4 mb-5">Bienvenue dans la gestion de votre compte client, <strong>{prenom_client} {nom_client}</strong>. <a href="{baseLangue}/compte/logout.html" class="float-right"><i class="fe fe-log-out mr-2"></i>Se d&eacute;connecter</a></div>
    <div class="row">
      <div class="col-lg-3 order-lg-2">
        <div class="list-group mb-4">
          <a href="/compte/" class="list-group-item list-group-item-action active">Mes commandes</a>
          <a href="infos_perso.html" class="list-group-item list-group-item-action">Mes infos personnelles</a>
          <a href="motdepasse.html" class="list-group-item list-group-item-action">Modifier mon mot de passe</a>
          <a href="id_web.html" class="list-group-item list-group-item-action">Mon identit&eacute; web</a>
          <a href="avatar.html" class="list-group-item list-group-item-action">Mon avatar</a>
          <a href="abonnements.html" class="list-group-item list-group-item-action">Abonnements</a>
          <a href="cloture.html" class="list-group-item list-group-item-action">Cl&ocirc;ture de compte</a>
        </div>
        
        <div class="list-group mb-4"><span class="list-group-item">Points de fid&eacute;lit&eacute; : <span class="float-right">{solde_fidelite}</span></span></div>
        
      </div>
      <div class="col-lg-9 order-lg-1"> 
        <!-- BEGIN:ecommerce -->
        <div class="mb-5">
          <h4 class="mb-4">Commandes effectu&eacute;es</h4>
          <!-- BEGIN:commandes -->
          <table class="table table-orders table-hover">
            <thead>
              <tr>
                <th scope="col" style="width: 20%;">Num&eacute;ro</th>
                <th scope="col" style="width: 20%;">Date</th>
                <th scope="col" style="width: 20%;">&Eacute;tat</th>
                <th scope="col" style="width: 20%;">Statut</th>
                <th scope="col" style="width: 20%;">Total</th>
              </tr>
            </thead>
            <tbody>
              <!-- BEGIN:commande -->
              <tr>
                <td><a href="{lien_commande}" title="T&eacute;l&eacute;charger la commande" target="_blank">{numero_facture}</a></td>
                <td>{num_jour_creation}/{num_mois_creation}/{annee_creation}</td>
                <td>{etat}</td>
                <td>{paiement}</td>
                <td>{total_TTC}</td>
              </tr>
              <!-- END:commande -->
            </tbody>
          </table>
          <!-- END:commandes --> 
          <!-- BEGIN:nocommandes -->
          <p>Aucune commande effectu&eacute;e.</p>
          <!-- END:nocommandes --> 
        </div>
        <div class="mb-5">
          <h4 class="mb-4">Produits t&eacute;l&eacute;chargeables</h4>
          <!-- BEGIN:produitstelecha -->
          <table class="table table-orders table-hover">
            <thead>
              <tr>
                <th scope="col" style="width: 60%;">Intitul&eacute;</th>
                <th scope="col" style="width: 20%;">Commande</th>
                <th scope="col" style="width: 20%;">Statut</th>
              </tr>
            </thead>
            <tbody>
              <!-- BEGIN:produit -->
              <tr>
                <td>{intitule_produit} - {intitule_variante} 
                  <!-- BEGIN:reference --> 
                  <br />
                  <em>Ref: {reference}</em> 
                  <!-- END:reference --></td>
                <td><a href="{lien_commande}" target="_blank" title="T&eacute;l&eacute;charger la commande">{numero_facture}</a></td>
                <td><!-- BEGIN:attente --> 
                  En attente de paiement 
                  <!-- END:attente --> 
                  <!-- BEGIN:telecharge --> 
                  <a href="{lien_fichier}" target="_blank">T&eacute;l&eacute;charger</a> 
                  <!-- END:telecharge --> 
                  <!-- BEGIN:indisponible --> 
                  Indisponible 
                  <!-- END:indisponible --></td>
              </tr>
              <!-- END:produit -->
            </tbody>
          </table>
          <!-- END:produitstelecha --> 
          <!-- BEGIN:noproduitstelecha -->
          <p>Aucun produit t&eacute;l&eacute;chargeable achet&eacute;.</p>
          <!-- END:noproduitstelecha --> 
        </div>
        <div class="mb-5">
          <h4 class="mb-4">Points de fid&eacute;lit&eacute;</h4>
          <!-- BEGIN:fidelite -->
          <table class="table table-orders">
            <thead>
              <tr>
                <th scope="col">Op&eacute;ration</th>
                <th scope="col">Date </th>
                <th scope="col">Quantit&eacute;</th>
                <th scope="col">Fin de validit&eacute;</th>
              </tr>
            </thead>
            <tbody>
              <!-- BEGIN:operations -->
              <tr>
                <td>{commentaire|htmlentities}</td>
                <td>{num_jour_valeur}/{num_mois_valeur}/{annee_valeur}</td>
                <td>{qt}</td>
                <td><!-- BEGIN:date_fin -->{num_jour_fin}/{num_mois_fin}/{annee_fin}<!-- END:date_fin --> 
                  <!-- BEGIN:nodate_fin -->-<!-- END:nodate_fin --></td>
              </tr>
              <!-- END:operations -->
            </tbody>
          </table>
          <!-- END:fidelite --> 
          <!-- BEGIN:nofidelite -->
          <p>Aucun point de fid&eacute;lit&eacute;.</p>
          <!-- END:nofidelite --> 
        </div>
        <!-- END:ecommerce --> 
        
      </div>
    </div>
  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/compte/tableau_bord/abonnements.html` 

```html
<!-- 
Template du Widget "Tableau de bord" pour la gestion des abonnements (newsletter)

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#tableau-de-bord
-->

<!-- BEGIN:main -->
<div class="section compte-tableau-bord tableau-bord-abonnements" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h1 class="mb-5">{intitule}</h1>
    <!-- END:intitule -->
    <div class="bg-light p-4 mb-5">Bienvenue dans la gestion de votre compte client. <a href="{baseLangue}/compte/logout.html" class="float-right"><i class="fe fe-log-out mr-2"></i>Se d&eacute;connecter</a></div>
    <div class="row">
      <div class="col-lg-3 order-lg-2">
        <div class="list-group section">
          <a href="/compte/" class="list-group-item list-group-item-action">Mes commandes</a>
          <a href="infos_perso.html" class="list-group-item list-group-item-action">Mes infos personnelles</a>
          <a href="motdepasse.html" class="list-group-item list-group-item-action">Modifier mon mot de passe</a>
          <a href="id_web.html" class="list-group-item list-group-item-action">Mon identit&eacute; web</a>
          <a href="avatar.html" class="list-group-item list-group-item-action">Mon avatar</a>
          <a href="abonnements.html" class="list-group-item list-group-item-action active">Abonnements</a>
          <a href="cloture.html" class="list-group-item list-group-item-action">Cl&ocirc;ture de compte</a>
        </div>
      </div>
      <div class="col-lg-9 order-lg-1">
        <form method="post" action="">
          <div class="form-group">
            <h4 class="mb-4">Inscription &agrave; la Newsletter</h4>
            <div class="custom-control custom-radio mb-1">
              <input type="radio" class="custom-control-input" name="newsletter" id="newsletter_oui" value="1" {check_newsletter_oui} />
              <label for="newsletter_oui" class="custom-control-label">J'accepte de recevoir la newsletter</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio" class="custom-control-input" name="newsletter" id="newsletter_non" value="0" {check_newsletter_non} />
              <label for="newsletter_non" class="custom-control-label">Je ne souhaite pas recevoir la newsletter</label>
            </div>
          </div>
          <p class="small text-muted"> L'email recueilli est utilis&eacute; pour l'envoi de lettres d'informations et d'offres promotionnelles. Conform&eacute;ment au "<a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank">r&egrave;glement g&eacute;n&eacute;ral sur la protection des donn&eacute;es personnelles</a>", vous pouvez exercer votre droit d'acc&egrave;s aux donn&eacute;es en contactant {SOCIETE.societe_nom} par email (<a href="mailto:{SOCIETE.contact_mail}">{SOCIETE.contact_mail}</a>). <a href="/donnees-personnelles.html" target="_blank">Consulter les d&eacute;tails du consentement.</a> </p>
          <input type="submit" value="Valider" class="btn btn-primary"/>
          <input type="hidden" name="act" value="update" />
          <input type="hidden" name="ctl" value="{ctl}"/>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/compte/tableau_bord/avatar.html` 

```html
<!-- 
Template du Widget "Tableau de bord" pour la gestion de l'avatar

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#tableau-de-bord
-->

<!-- BEGIN:main -->
<div class="section compte-tableau-bord tableau-bord-infos-perso" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h1 class="mb-5">{intitule}</h1>
    <!-- END:intitule -->
    <div class="bg-light p-4 mb-5">Bienvenue dans la gestion de votre compte client. <a href="{baseLangue}/compte/logout.html" class="float-right"><i class="fe fe-log-out mr-2"></i>Se d&eacute;connecter</a></div>
    <div class="row">
      <div class="col-lg-3 order-lg-2">
        <div class="list-group section">
          <a href="/compte/" class="list-group-item list-group-item-action">Mes commandes</a>
          <a href="infos_perso.html" class="list-group-item list-group-item-action">Mes infos personnelles</a>
          <a href="motdepasse.html" class="list-group-item list-group-item-action">Modifier mon mot de passe</a>
          <a href="id_web.html" class="list-group-item list-group-item-action">Mon identit&eacute; web</a>
          <a href="avatar.html" class="list-group-item list-group-item-action active">Mon avatar</a>
          <a href="abonnements.html" class="list-group-item list-group-item-action">Abonnements</a>
          <a href="cloture.html" class="list-group-item list-group-item-action">Cl&ocirc;ture de compte</a>
        </div>
      </div>
      <div class="col-lg-9 order-lg-1"> 
        <!-- BEGIN:erreurs -->
        <div class="alert alert-danger" role="alert">
          <ul>
            <!-- BEGIN:erreur -->
            <li>{erreur}</li>
            <!-- END:erreur -->
          </ul>
        </div>
        <!-- END:erreurs -->
        <form method="post" action="" enctype="multipart/form-data">
          <div class="media mb-5"> <img src="{avatar}" alt="Mon avatar" class="avatar mr-3" />
            <div class="media-body">
              <p>Nous vous conseillons une image (gif, jpeg, png) <strong> d'au moins </strong> 120 pixels de large et 120 pixels de hauteur. Elle sera redimensionn&eacute;e au besoin.</p>
            </div>
          </div>
          <div class="form-group row no-gutters">
            <label for="file_avatar" class="control-label col-12">Changer d'avatar :</label>
            <div class="custom-file col-lg-5">
              <input type="file" name="file_avatar" class="custom-file-input" id="file_avatar">
              <label class="custom-file-label" for="file_avatar">Choisir un fichier</label>
            </div>
          </div>
          <div class="form-group">
            <label for="url_avatar">Vous pouvez aussi choisir d'utiliser une image d&eacute;j&agrave; en ligne &agrave; l'adresse web ci-dessous :</label>
            <input type="text" name="url_avatar" id="url_avatar" value="" title="Copier une image sur Internet" class="form-control" placeholder="http://www.monsiteweb.com/avatar.png"/>
          </div>
          <p class="small text-muted"> Les informations recueillies sont utilis&eacute;es pour la gestion des commentaires du blog et des &eacute;valuations de produits. Conform&eacute;ment au "<a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank">r&egrave;glement g&eacute;n&eacute;ral sur la protection des donn&eacute;es personnelles</a>", vous pouvez exercer votre droit d'acc&egrave;s aux donn&eacute;es en contactant {SOCIETE.societe_nom} par email (<a href="mailto:{SOCIETE.contact_mail}">{SOCIETE.contact_mail}</a>). <a href="/donnees-personnelles.html" target="_blank">Consulter les d&eacute;tails du consentement.</a> </p>
          <input type="submit" value="Valider" class="btn btn-primary"/>
          <input type="hidden" name="act" value="update" />
          <input type="hidden" name="ctl" value="{ctl}"/>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/compte/tableau_bord/cloture.html` 

```html
<!-- 
Template du Widget "Tableau de bord" pour la suppression du compte

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#tableau-de-bord
-->

<!-- BEGIN:main -->
<div class="section compte-tableau-bord tableau-bord-cloture" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h1 class="mb-5">{intitule}</h1>
    <!-- END:intitule -->
    <div class="bg-light p-4 mb-5">Bienvenue dans la gestion de votre compte client.<a href="{baseLangue}/compte/logout.html" class="float-right"><i class="fe fe-log-out mr-2"></i>Se d&eacute;connecter</a></div>
    <div class="row">
        <div class="col-lg-3 order-lg-2">
          <div class="list-group section">
            <a href="/compte/" class="list-group-item list-group-item-action">Mes commandes</a>
            <a href="infos_perso.html" class="list-group-item list-group-item-action">Mes infos personnelles</a>
            <a href="motdepasse.html" class="list-group-item list-group-item-action">Modifier mon mot de passe</a>
            <a href="id_web.html" class="list-group-item list-group-item-action">Mon identit&eacute; web</a>
            <a href="avatar.html" class="list-group-item list-group-item-action">Mon avatar</a>
            <a href="abonnements.html" class="list-group-item list-group-item-action">Abonnements</a>
            <a href="cloture.html" class="list-group-item list-group-item-action active">Cl&ocirc;ture de compte</a>
          </div>
      </div>
      <div class="col-lg-9 order-lg-1"> 
        <!-- BEGIN:form -->
        <div class="alert alert-warning mb-5" role="alert">La cl&ocirc;ture de votre compte entrainera la suppression
          imm&eacute;diate de toutes informations vous concernant. Vous ne pourrez plus vous connecter au site et
          acc&eacute;der &agrave; la gestion de votre compte client.</div>
        <!-- BEGIN:erreurs -->
        <div class="alert alert-danger" role="alert">
          <ul>
            <!-- BEGIN:erreur -->
            <li>{erreur}</li>
            <!-- END:erreur -->
          </ul>
        </div>
        <!-- END:erreurs -->
        <form method="post" action="">
          <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
            <label for="email_ident" class="control-label">Adresse email :</label>
            <input type="text" name="email" id="email_ident" value="{email}" class="form-control"/>
          </div>
          <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
            <label for="insc_mdp" class="control-label">Mot de passe :</label>
            <input type="password" name="mdp" id="insc_mdp" value="" class="form-control"/>
          </div>
          <input type="submit" value="Supprimer mon compte" class="btn btn-danger"/>
          <input type="hidden" name="act" value="delete" />
          <input type="hidden" name="ctl" value="{ctl}"/>
        </form>
        <!-- END:form --> 
        <!-- BEGIN:message -->
        <div class="alert alert-success" role="alert"> Votre demande de suppression de compte a bien &eacute;t&eacute; re&ccedil;ue, elle sera trait&eacute;e dans les plus
          brefs d&eacute;lais. </div>
        <!-- END:message --> 
      </div>
    </div>
  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/compte/tableau_bord/id_web.html` 

```html
<!-- 
Template du Widget "Tableau de bord" pour la gestion de l'identite web

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#tableau-de-bord
-->

<!-- BEGIN:main -->
<div class="section compte-tableau-bord tableau-bord-id-web" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h1 class="mb-5">{intitule}</h1>
    <!-- END:intitule -->
    <div class="bg-light p-4 mb-5">Bienvenue dans la gestion de votre compte client.<a href="{baseLangue}/compte/logout.html" class="float-right"><i class="fe fe-log-out mr-2"></i>Se d&eacute;connecter</a></div>
    <div class="row">
      <div class="col-lg-3 order-lg-2">
        <div class="list-group section">
          <a href="/compte/" class="list-group-item list-group-item-action">Mes commandes</a>
          <a href="infos_perso.html" class="list-group-item list-group-item-action">Mes infos personnelles</a>
          <a href="motdepasse.html" class="list-group-item list-group-item-action">Modifier mon mot de passe</a>
          <a href="id_web.html" class="list-group-item list-group-item-action active">Mon identit&eacute; web</a>
          <a href="avatar.html" class="list-group-item list-group-item-action">Mon avatar</a>
          <a href="abonnements.html" class="list-group-item list-group-item-action">Abonnements</a>
          <a href="cloture.html" class="list-group-item list-group-item-action">Cl&ocirc;ture de compte</a>
        </div>
      </div>
      <div class="col-lg-9 order-lg-1">
        <form method="post" action="">
          <div class="form-group">
            <label for="pseudo">Mon pseudo :</label>
            <input type="text" name="pseudo" id="pseudo" value="{pseudo}" class="form-control"/>
          </div>
          <div class="form-group">
            <label for="web">Mon site web :</label>
            <input type="text" name="web" id="web" value="{web}" class="form-control" placeholder="https://"/>
          </div>
          <p class="small text-muted"> Les informations recueillies sont utilis&eacute;es pour la gestion des commentaires du blog et des &eacute;valuations de produits. Conform&eacute;ment au "<a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank">r&egrave;glement g&eacute;n&eacute;ral sur la protection des donn&eacute;es personnelles</a>", vous pouvez exercer votre droit d'acc&egrave;s aux donn&eacute;es en contactant {SOCIETE.societe_nom} par email (<a href="mailto:{SOCIETE.contact_mail}">{SOCIETE.contact_mail}</a>). <a href="/donnees-personnelles.html" target="_blank">Consulter les d&eacute;tails du consentement.</a> </p>
          <div class="form-group">
            <input type="submit" value="Valider" class="btn btn-primary"/>
            <input type="hidden" name="act" value="update" />
            <input type="hidden" name="ctl" value="{ctl}"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/compte/tableau_bord/infos_perso.html` 

```html
<!-- 
Template du Widget "Tableau de bord" pour la gestion des informations personnelles

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#tableau-de-bord
-->

<!-- BEGIN:main -->
<div class="section compte-tableau-bord tableau-bord-infos-perso" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h1 class="mb-5">{intitule}</h1>
    <!-- END:intitule -->
    <div class="bg-light p-4 mb-5">Bienvenue dans la gestion de votre compte client.<a href="{baseLangue}/compte/logout.html" class="float-right"><i class="fe fe-log-out mr-2"></i>Se d&eacute;connecter</a></div>
    <div class="row">
      <div class="col-lg-3 order-lg-2">
        <div class="list-group section">
          <a href="/compte/" class="list-group-item list-group-item-action">Mes commandes</a>
          <a href="infos_perso.html" class="list-group-item list-group-item-action active">Mes infos personnelles</a>
          <a href="motdepasse.html" class="list-group-item list-group-item-action">Modifier mon mot de passe</a>
          <a href="id_web.html" class="list-group-item list-group-item-action">Mon identit&eacute; web</a>
          <a href="avatar.html" class="list-group-item list-group-item-action">Mon avatar</a>
          <a href="abonnements.html" class="list-group-item list-group-item-action">Abonnements</a>
          <a href="cloture.html" class="list-group-item list-group-item-action">Cl&ocirc;ture de compte</a>
        </div>
      </div>
      <div class="col-lg-9 order-lg-1"> 
        <!-- BEGIN:erreurs -->
        <div class="alert alert-danger" role="alert">
          <ul>
            <!-- BEGIN:erreur -->
            <li>{erreur}</li>
            <!-- END:erreur -->
          </ul>
        </div>
        <!-- END:erreurs -->
        <form method="post" action="">
          <div class="form-group">
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" class="custom-control-input" name="genre" id="insc_genreF" value="F" {checked_F}/>
              <label for="insc_genreF" class="custom-control-label">Madame</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" class="custom-control-input" name="genre" id="insc_genreH" value="H" {checked_H}/>
              <label for="insc_genreH" class="custom-control-label">Monsieur</label>
            </div>
          </div>
          <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
            <label for="insc_nom">Votre nom :</label>
            <input type="text" name="nom" id="insc_nom" value="{nom}" class="form-control" autocomplete="family-name"/>
          </div>
          <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
            <label for="insc_prenom">Votre pr&eacute;nom :</label>
            <input type="text" name="prenom" id="insc_prenom" value="{prenom}" class="form-control" autocomplete="given-name"/>
          </div>
          <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
            <label for="insc_email">Votre adresse email :</label>
            <input type="text" name="email" id="insc_email" value="{email}" class="form-control" autocomplete="email"/>
          </div>
          <p class="small text-muted"> Les informations recueillies sont utilis&eacute;es pour la connexion aux espaces priv&eacute;s, la gestion des commandes, la gestion des commentaires du blog et des &eacute;volutions de produits. Conform&eacute;ment au "<a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank">r&egrave;glement g&eacute;n&eacute;ral sur la protection des donn&eacute;es personnelles</a>", vous pouvez exercer votre droit d'acc&egrave;s aux donn&eacute;es en contactant {SOCIETE.societe_nom} par email (<a href="mailto:{SOCIETE.contact_mail}">{SOCIETE.contact_mail}</a>). <a href="/donnees-personnelles.html" target="_blank">Consulter les d&eacute;tails du consentement.</a> </p>
          <input type="submit" value="Valider" class="btn btn-primary"/>
          <input type="hidden" name="act" value="update" />
          <input type="hidden" name="ctl" value="{ctl}"/>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/compte/tableau_bord/mail_bon_reduction.html` 

```html
<!-- 
Template de l'email du Widget "Tableau de bord" pour les bons de reduction obtenus grace aux points de fidelite.

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#tableau-de-bord
-->

<!-- BEGIN:main -->
Bonjour {prenom} {nom},<br />
<br />
Gr&acirc;ce &agrave; vos points de fid&eacute;lit&eacute;, vous avez obtenu un bon de r&eacute;duction d'une valeur
de {remise} {devise} pour tout achat d'au moins {seuil} {devise}. Ce bon est
valable jusqu'au {num_jour_fin}/{num_mois_fin}/{annee_fin}.<br />
<br />
Pour cela, utilisez le code : <br /><p style=" font-size: 1.5em;"><a href="http://{domaine}/">{code_bon}</a></p>
<br />
Cordialement,<br />
L'&eacute;quipe du site &quot;{site_nom}&quot;
<!-- END:main -->
```

### Template : `/theme/fr/widgets/compte/tableau_bord/mail_motdepasse_perdu.html` 

```html
<!--
Template de l'email du Widget "Tableau de bord" pour la gestion des mots de passe perdus

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#tableau-de-bord
-->

<!-- BEGIN:main -->
Bonjour,

Vous avez oublié votre mot de passe ? Pas d'inquiétude, voici les informations qui vous permettront d'accéder de nouveau à votre compte sur le site "{site_nom}" :

 - votre email : {email}
 - votre mot de passe (valable 15 minutes) : {motdepasse}

Une fois connecté au site, vous serez invité.e à choisir un nouveau mot de passe.

Si vous n'avez pas fait de demande pour retrouver votre mot de passe oublié, merci de ne pas tenir compte de cet email.

Cordialement,
L'équipe du site "{site_nom}"
<!-- END:main -->
```

### Template : `/theme/fr/widgets/compte/tableau_bord/motdepasse.html` 

```html
<!-- 
Template du Widget "Tableau de bord" pour la gestion du changement de mot de passe

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#tableau-de-bord
-->

<!-- BEGIN:main -->
<div class="section compte-tableau-bord tableau-bord-motdepasse" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h1 class="mb-5">{intitule}</h1>
    <!-- END:intitule -->
    <div class="bg-light p-4 mb-5">Bienvenue dans la gestion de votre compte client.<a href="{baseLangue}/compte/logout.html" class="float-right"><i class="fe fe-log-out mr-2"></i>Se d&eacute;connecter</a></div>
    <div class="row">
      <div class="col-lg-3 order-lg-2">
        <div class="list-group section">
          <a href="/compte/" class="list-group-item list-group-item-action">Mes commandes</a>
          <a href="infos_perso.html" class="list-group-item list-group-item-action">Mes infos personnelles</a>
          <a href="motdepasse.html" class="list-group-item list-group-item-action active">Modifier mon mot de passe</a>
          <a href="id_web.html" class="list-group-item list-group-item-action">Mon identit&eacute; web</a>
          <a href="avatar.html" class="list-group-item list-group-item-action">Mon avatar</a>
          <a href="abonnements.html" class="list-group-item list-group-item-action">Abonnements</a>
          <a href="cloture.html" class="list-group-item list-group-item-action">Cl&ocirc;ture de compte</a>
        </div>
      </div>
      <div class="col-lg-9 order-lg-1"> 
        <!-- BEGIN:erreurs -->
        <div class="alert alert-danger" role="alert">
          <ul>
            <!-- BEGIN:erreur -->
            <li>{erreur}</li>
            <!-- END:erreur -->
          </ul>
        </div>
        <!-- END:erreurs -->
        <form method="post" action="">
          <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
            <label for="insc_mdp">Mot de passe actuel :</label>
            <input type="password" name="actu" id="insc_mdp" value="" class="form-control" autocomplete="current-password"/>
          </div>
          <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
            <label for="insc_mdp2">Nouveau mot de passe (6 &agrave; 32 caract&eacute;res) :</label>
            <input type="password" name="mdp" id="insc_mdp2" value="" class="form-control" autocomplete="new-password"/>
          </div>
          <div class="form-group"> <span class="float-right small text-muted">Obligatoire</span>
            <label for="insc_mdp_confirm">Confirmation :</label>
            <input type="password" name="mdp_confirm" id="insc_mdp_confirm" value="" class="form-control" autocomplete="new-password"/>
          </div>
          <p class="small text-muted"> Les informations recueillies sont utilis&eacute;es pour la connexion aux espaces priv&eacute;s. Conform&eacute;ment au "<a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank">r&egrave;glement g&eacute;n&eacute;ral sur la protection des donn&eacute;es personnelles</a>", vous pouvez exercer votre droit d'acc&egrave;s aux donn&eacute;es en contactant {SOCIETE.societe_nom} par email (<a href="mailto:{SOCIETE.contact_mail}">{SOCIETE.contact_mail}</a>). <a href="/donnees-personnelles.html" target="_blank">Consulter les d&eacute;tails du consentement.</a> </p>
          <input type="submit" value="Valider" class="btn btn-primary"/>
          <input type="hidden" name="act" value="update" />
          <input type="hidden" name="ctl" value="{ctl}"/>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/compte/tableau_bord/motdepasse_perdu.html` 

```html
<!-- 
Template du Widget "Tableau de bord" pour la gestion des mots de passe perdus

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-comptes.html#tableau-de-bord
-->

<!-- BEGIN:main -->
<div class="section compte-tableau-bord tableau-bord-motdepasse_perdu" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:form -->
    <h1 class="mb-5">Mot de passe perdu ?</h1>
    <div class="bg-light p-4 mb-4">Indiquez votre adresse email pour retrouver vos identifiants de connection.</div>
    
    <!-- BEGIN:erreurs -->
    <div class="alert alert-danger" role="alert">
      <ul>
        <!-- BEGIN:erreur -->
        <li>{erreur}</li>
        <!-- END:erreur -->
      </ul>
    </div>
    <!-- END:erreurs -->
    <div class="row">
      <div class="col-lg-4">
        <form method="post" action="">
          <div class="form-group">
            <label for="email">Votre adresse email :</label>
            <input type="text" name="email" id="email" value="{email}" class="form-control"/>
          </div>
          <input type="submit" value="Valider" class="btn btn-primary" title="Valider"/>
          <input type="hidden" name="act" value="send" />
          <input type="hidden" name="ctl" value="{ctl}"/>
        </form>
      </div>
    </div>
    <!-- END:form --> 
    <!-- BEGIN:message -->
    <div class="alert alert-success" role="alert">Vous allez recevoir dans quelques instants un email contenant vos identifiants de connection &agrave; l'adresse indiqu&eacute;e.</div>
    <!-- END:message --> 
  </div>
</div>
<!-- END:main -->
```



## Widget "Recherche / Simple"

### Template : `/theme/fr/widgets/recherche/simple/index.html` 

```html
<!--
Template du Widget "Recherche simple"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-recherche.html
-->

<!-- BEGIN:main -->
<div class="section recherche-simple grille" id="kiubi-section-{serial}">
<div class="container">
<header class="section-header mb-4">
<div class="row">
  <div class="col">
      R&eacute;sultat(s) pour &quot;<strong>{recherche}</strong>&quot;<br>
      {resultats}
      {FILE "/fr/includes/pagination.html"} 
  </div>
</div>
<!-- END:main -->
```

### Template : `/theme/fr/widgets/recherche/simple/blog.html` 

```html
<!-- 
Template du Widget "Recherche simple" pour l'affichage des resultats du blog

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-recherche.html
-->

<!-- BEGIN:main -->
{nb_resultats} r&eacute;sultat(s) dans le <a href="#" class="text-decoration-none dropdown-toggle d-inline-flex align-items-center" id="filtre" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="border-bottom border-dark">blog</span></a><div class="dropdown-menu" aria-labelledby="filtre"> <a href="/recherche/cms/?r={recherche}" class="dropdown-item">Site web</a> <a href="/recherche/catalogue/?r={recherche}" class="dropdown-item">Catalogue</a></div>
</div>
<div class="col-3 text-right">
    <div class="btn-group tri">
      <button class="btn btn-link btn-sm dropdown-toggle" type="button" id="tri" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Trier</button>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="tri"> <a href="{lien_tri}=d" class="dropdown-item">Date</a> <a href="{lien_tri}=t" class="dropdown-item">Titre</a> <a href="{lien_tri}=c" class="dropdown-item">Cat&eacute;gorie</a> <a href="{lien_tri}=a" class="dropdown-item">Auteur</a> </div>
    </div>
</div>
</div>
</header>
<!-- BEGIN:resultat -->
<article class="card p-4">
<div class="row">
    <!-- BEGIN:illustration --> 
    <div class="col-md-3 mb-4 mb-md-0"><a href="{lien_billet}"><img src="{url_illustration_vignette}" alt="{titre|htmlentities}" class="img-fluid w-100" /></a></div>
    <!-- END:illustration -->
    <div class="col">
      <h3 class="card-title mb-3"><a href="{lien_billet}">{titre}</a></h3>
      <ul class="post-infos list-unstyled list-inline text-muted mb-3">
        <li class="list-inline-item">
          <time class="post-date" datetime="{annee_publication}-{num_mois_publication}-{num_jour_publication} {heure_publication}:{minute_publication}:00"><i class="fe fe-clock mr-2"></i><span class="day">{num_jour_publication}</span> <span class="month">{mois_publication}</span> <span class="year">{annee_publication}</span></time>
          dans <a href="{lien_categorie}">{intitule_categorie}</a></li><li class="list-inline-item"><i class="fe fe-message-square mx-2"></i><a href="{lien_billet}#comment">{nb_commentaires}</a></li>
      </ul>
      <p class="card-text">{accroche}</p>
     <a href="{lien_billet}" class="btn btn-link p-0">Lire la suite <i class="fe fe-arrow-right ml-2"></i></a> 
    </div>
  </div>
</article>
<!-- END:resultat --> 
<!-- BEGIN:noresultat -->
<h3>Aucun r&eacute;sultat n'a &eacute;t&eacute; trouv&eacute; dans le blog</h3>
Rechercher <a href="/recherche/cms/?r={recherche}">dans le Site web</a> ou <a href="/recherche/catalogue/?r={recherche}">dans le Catalogue</a>. 
<!-- END:noresultat --> 
<!-- END:main -->
```

### Template : `/theme/fr/widgets/recherche/simple/catalogue.html` 

```html
<!--
Template du Widget "Recherche simple" pour l'affichage des resultats du catalogue

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-recherche.html
-->

<!-- BEGIN:main -->
{nb_resultats} r&eacute;sultat(s) dans le <a href="#" class="text-decoration-none dropdown-toggle d-inline-flex align-items-center" id="filtre" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="border-bottom border-dark">catalogue</span></a><div class="dropdown-menu" aria-labelledby="filtre"> <a href="/recherche/cms/?r={recherche}" class="dropdown-item">Site web</a> <a href="/recherche/blog/?r={recherche}" class="dropdown-item">Blog</a></div>
</div>
<div class="col-3 text-right">
    <div class="btn-group tri">
      <button class="btn btn-link btn-sm dropdown-toggle" type="button" id="tri" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Trier</button>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="tri"> <a href="{lien_tri}=alpha" class="dropdown-item">Produit (A-Z)</a> <a href="{lien_tri}=alphaDESC" class="dropdown-item">Produit (Z-A)</a> <a href="{lien_tri}=prix" class="dropdown-item">Prix croissant</a> <a href="{lien_tri}=prixDESC" class="dropdown-item">Prix d&eacute;croissant</a> <a href="{lien_tri}=date" class="dropdown-item">Disponibilit&eacute; croissante</a> <a href="{lien_tri}=dateDESC" class="dropdown-item">Disponibilit&eacute; d&eacute;croissante</a> <a href="{lien_tri}=note" class="dropdown-item">Note croissante</a> <a href="{lien_tri}=noteDESC" class="dropdown-item">Note d&eacute;croissante</a> </div>
  </div>
</div>
<div class="col-md-12">
  <form method="get" id="form_{serial}">
    <div class="bg-white border px-4 pt-4 pb-2 mt-3">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <input type="text" name="r" id="r{serial}" class="form-control" value="{rtexte}" placeholder="Rechercher..." />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <select name="c" id="categ" class="custom-select m-100 d-block">
              <option value="">Toutes les cat&eacute;gories</option>
              <!-- BEGIN:categorie-->
              <option value="{categorie_id}" {selected}>{intitule_categorie}</option>
              <!-- END:categorie-->
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <select name="t" id="t{serial}" class="custom-select m-100 d-block">
              <option value="">Tous les tags</option>
              <!-- BEGIN:tag -->
              <option value="{tag}" {selected}>{tag}</option>
              <!-- END:tag --> 
              <!-- BEGIN:notag -->
              <option value="">Pas de tag disponible</option>
              <!-- END:notag -->
            </select>
          </div>
        </div>
        <div class="col-md-6 d-none">
          <div class="form-group">
            <select name="md" id="md" class="custom-select m-100 d-block">
              <option value="">Date de disponibilit&eacute;</option>
              <!-- BEGIN:mois_debut-->
              <option value="{num_mois}" {selected}>{mois}</option>
              <!-- END:mois_debut-->
            </select>
          </div>
        </div>
        <div class="col-md-6 d-none">
          <div class="form-group">
            <select name="ma" id="ma" class="custom-select m-100 d-block">
              <option value="">Fin de disponibilit&eacute;</option>
              <!-- BEGIN:mois_fin-->
              <option value="{num_mois}" {selected}>{mois}</option>
              <!-- END:mois_fin-->
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <input type="text" name="pmin" id="pmin" class="form-control" value="{pmin}" placeholder="Prix minimum" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <input type="text" name="pmax"  id="pmax" class="form-control" value="{pmax}" placeholder="Prix maximum"/>
          </div>
        </div>
        <div class="col-md-2 text-right">
          <input type="submit" class="btn btn-primary w-100" name="Submit" value="Ok"/>
        </div>
        <input type="hidden" id="ra_{serial}" name="ra" value="av" />
      </div>
    </div>
  </form>
</div>
</div>
</header>
<div class="catalogue-liste-produits liste-produits-vignettes">
  <div class="row"> 
    <!-- BEGIN:resultat -->
    <div class="col-6 col-lg-3 d-flex align-items-stretch">
      <div class="produit produit-card card w-100" id="produit-{produit_id}">
       <div class="produit-image">
         <!-- BEGIN: illustrations -->
         <img src="{url_illustration_vignette}" alt="{intitule_produit|htmlentities}" class="card-img-top"/>
         <!-- END: illustrations -->
         <!-- BEGIN: noillustrations -->
         <img src="{racine}/{theme}/assets/img/produit_mini.webp" alt="{intitule_produit|htmlentities}" class="card-img-top"/>
         <!-- END: noillustrations -->
         <div class="produit-hover-overlay">
          <a href="{lien_produit}" title="{intitule_produit|htmlentities} - D&eacute;tail du produit"></a>
          <a href="{lien_produit}" class="btn btn-primary"><i class="fe fe-search mr-2"></i>D&eacute;tail</a>
		 </div>
		</div>
        <div class="card-body">
         <small class="text-uppercase text-muted">{intitule_categorie}</small>
          <h3 class="card-title mb-2 mt-1"><a href="{lien_produit}">{intitule_produit}</a></h3>
          <p class="price"><span class="<!-- BEGIN:prix_promo -->promo<!-- END:prix_promo -->">{prix}</span>
            <!-- BEGIN:prix_barre -->
            <del class="text-muted">{prix_barre}</del>
            <!-- END:prix_barre -->
          </p>
          <!-- BEGIN:accroche -->
          <p class="card-text desc">{accroche}</p>
          <!-- END:accroche -->
            <div class="note-moyenne-{note_moyenne_5} text-warning mt-2" title="&Eacute;valuation : {note_moyenne_5}/5">
              <span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span><span class="note">&#9733;</span>
            </div> 
        </div>
      </div>
    </div>
    <!-- END:resultat --> 
  </div>
</div>
<!-- BEGIN:noresultat -->
<h3>Aucun r&eacute;sultat n'a &eacute;t&eacute; trouv&eacute; dans le catalogue</h3>
Rechercher <a href="/recherche/cms/?r={rtexte}">dans le Site web</a> ou <a href="/recherche/blog/?r={rtexte}">dans le Blog</a>. 
<!-- END:noresultat --> 
<!-- END:main -->
```

### Template : `/theme/fr/widgets/recherche/simple/cms.html` 

```html
<!-- 
Template du Widget "Recherche simple" pour l'affichage des resultats du site web (hors blog et catalogue)

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-recherche.html
-->

<!-- BEGIN:main -->
{nb_resultats} r&eacute;sultat(s) dans le <a href="#" class="text-decoration-none dropdown-toggle d-inline-flex align-items-center" id="filtre" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="border-bottom border-dark">site web</span></a><div class="dropdown-menu" aria-labelledby="filtre"> <a href="/recherche/blog/?r={recherche}" class="dropdown-item">Blog</a> <a href="/recherche/catalogue/?r={recherche}" class="dropdown-item">Catalogue</a></div>
</div>
<div class="col-3 text-right">
    <div class="btn-group tri">
      <button class="btn btn-link btn-sm dropdown-toggle" type="button" id="tri" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Trier</button>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="tri"> <a href="{lien_tri}=d" class="dropdown-item">Date</a> <a href="{lien_tri}=p" class="dropdown-item">Page</a> </div>
  </div>
</div>
</div>
</header>
<!-- BEGIN:resultat -->
<article class="card">
  <div class="card-body p-4">
    <h3 class="card-title mb-2"><a href="{lien}">{titre_billet}</a></h3>
    <a href="{lien}" class="text-muted"><i class="fe fe-link mr-2"></i>{schema}://{domaine}/{nom_optim}.html</a>
    <p class="card-text mt-3">{resume}</p>
  </div>
</article>
<!-- END:resultat --> 
<!-- BEGIN:noresultat -->
<h3>Aucun r&eacute;sultat n'a &eacute;t&eacute; trouv&eacute; dans le site web</h3>
Rechercher <a href="/recherche/blog/?r={recherche}">dans le Blog</a> ou <a href="/recherche/catalogue/?r={recherche}">dans le Catalogue</a>. 
<!-- END:noresultat --> 
<!-- END:main -->
```



## Widget "Site web / Bloc extrait"

### Template : `/theme/fr/widgets/site_web/bloc_extrait/index.html` 

```html
<!--
Template du Widget "Bloc d'extrait"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-site-web.html#bloc-d-extrait
-->

<!-- BEGIN:main -->
<div class="section site-web-bloc-extrait grille" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h2 class="mb-4">{intitule}</h2>
    <!-- END:intitule -->
    <div class="row"> 
      <!-- BEGIN:billet -->
      <div class="col-md-6 col-lg d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="{alterne_3}00">
        <div class="card w-100" id="billet-{billet_id}"> 
          <!-- BEGIN:texte10 --><a href="{lien_page}"><img src="{racine}/media/vignette/{texte10}" alt="{titre|htmlentities}" class="card-img-top"/></a><!-- END:texte10 -->
          <div class="card-body d-flex flex-column"> 
            <!-- BEGIN:titre -->
            <h3 class="card-title">{titre}</h3>
            <!-- END:titre --> 
            <!-- BEGIN:sstitre -->
            <h4>{sstitre}</h4>
            <!-- END:sstitre --> 
            <!-- BEGIN:texte1 -->
            <p class="card-text desc">{resume_texte1}</p>
            <!-- END:texte1 --> 
            <a href="{lien_page}" class="btn btn-primary btn-sm align-self-start mt-auto">En savoir plus</a> 
          </div>
        </div>
      </div>
      <!-- END:billet --> 
    </div>
    {FILE "/fr/includes/pagination.html"} </div>
</div>
<!-- END:main -->
```



## Widget "Site web / Bloc extrait" - Version alternative : Temoignages

### Template : `/theme/fr/widgets/site_web/bloc_extrait/temoignages/index.html` 

```html
<!--
Template du Widget "Temoignages"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-site-web.html#bloc-d-extrait
-->

<!-- BEGIN:main -->
<div class="site-web-bloc-extrait bloc-extrait-temoignages carrousel-grille" id="kiubi-section-{serial}">
  <div class="container"> 
    <!-- BEGIN:intitule -->
    <h2 class="mb-4">{intitule}</h2>
    <!-- END:intitule -->
    <div class="owl-carousel" data-owl-margin="24" data-owl-dots="true" data-owl-nav="false" data-owl-responsive="1-2-3"> 
      <!-- BEGIN:billet -->
      <div class="card w-100 mt-5 mr-1 mb-1 ml-1"> 
        <!-- BEGIN:texte10 -->
        <div class="img-square rounded-circle overflow-hidden mb-3 mx-auto w-25"><img src="{racine}/media/vignette/{texte10}" alt="{titre|htmlentities}" /></div>
        <!-- END:texte10 -->
        <div class="card-body d-flex flex-column">
          <blockquote class="blockquote {texte9}"> 
            <!-- BEGIN: texte1 -->
            <p class="">{texte1}</p>
            <!-- END: texte1 --> 
            <!-- BEGIN: titre -->
            <footer class="blockquote-footer">{titre}</footer>
            <!-- END: titre --> 
          </blockquote>
        </div>
      </div>
      <!-- END:billet --> 
    </div>
  </div>
  {FILE "/fr/includes/pagination.html"} </div>

<!-- END:main -->
```



## Widget "Site web / Contenu page libre"

### Template : `/theme/fr/widgets/site_web/contenu_page_libre/index.html` 

```html
<!-- 
Template du Widget "Contenu d'une page libre"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-site-web.html#contenu-page-libre
-->

<!-- BEGIN: main -->
<!-- BEGIN: nav1 -->
<!-- END: nav1 -->
{liste_billets}
{FILE "/fr/includes/pagination.html"}
<!-- END: main -->
```



## Widget "Site web / Menu h"

### Template : `/theme/fr/widgets/site_web/menu_h/index.html` 

```html
<!-- 
Template du Widget "Menu horizontal"

Documentation : 
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-site-web.html#menu-horizontal
-->

<!-- BEGIN: main -->
<!-- BEGIN: menu -->
<ul class="widget site-web-menu-h list-unstyled list-inline" id="kiubi-widget-{serial}">
  <!-- BEGIN: pagetype --><!-- BEGIN: page --><li class="list-inline-item {actif|mapValue|active}"><a href="{lien}" class="px-2 {type} {lien_type} {lien_extra|sanitize}" title="{page|htmlentities}" target="{cible}">{page}</a></li><!-- END: page --><!-- BEGIN: spacer --><li class="list-inline-item"><span class="{type}">{page}</span></li><!-- END: spacer --><!-- END: pagetype -->
</ul>
<!-- END: menu -->
<!-- BEGIN: nomenu -->
<!-- END: nomenu -->
<!-- END: main -->
```



## Widget "Site web / Menu h" - Version alternative : Navigation menu

### Template : `/theme/fr/widgets/site_web/menu_h/navigation.menu/index.html` 

```html
<!--
Template du Widget "Menu horizontal"

Documentation :
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-site-web.html#menu-horizontal
-->

<!-- BEGIN: main -->
<!-- BEGIN: menu -->
<ul class="navbar-nav navigation-menu mx-auto site-web-menu-h"> 
  <!-- BEGIN: pagetype -->
  <!-- BEGIN: page --><li class="nav-item {actif|mapValue|active}"><a href="{lien}" class="nav-link {type} {lien_type} {lien_extra|sanitize}" title="{page|htmlentities}" target="{cible}">{page}</a></li><!-- END: page -->
  <!-- BEGIN: spacer --><li class="nav-item"><span class="nav-link {type}">{page}</span></li><!-- END: spacer -->
  <!-- END: pagetype -->
</ul>
<!-- END: menu -->
<!-- BEGIN: nomenu -->
<!-- END: nomenu -->
<!-- END: main -->
```



## Widget "Site web / Menu h" - Version alternative : Reseaux sociaux

### Template : `/theme/fr/widgets/site_web/menu_h/reseaux_sociaux/index.html` 

```html
<!--
Template du Widget "Menu horizontal"

Documentation :
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-site-web.html#menu-horizontal
-->

<!-- BEGIN: main -->
<!-- BEGIN: menu -->
<ul class="widget list-unstyled list-inline m-0 site-web-menu-h reseaux-sociaux" id="kiubi-widget-{serial}"> 
  <!-- BEGIN: pagetype --><!-- BEGIN: page --><li class="list-inline-item"><a href="{lien}" title="{page|htmlentities}" target="{cible}" class="btn btn-link p-0 mr-2" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"><i class="fe fe-{page|strtolower}"></i><span class="sr-only">{page}</span></a></li><!-- END: page --><!-- END: pagetype -->
</ul>
<!-- END: menu -->
<!-- BEGIN: nomenu -->
<!-- END: nomenu -->
<!-- END: main -->
```



## Widget "Site web / Menu v"

### Template : `/theme/fr/widgets/site_web/menu_v/index.html` 

```html
<!--
Template du Widget "Menu vertical"

Documentation :
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-site-web.html#menu-vertical
-->

<!-- BEGIN: main -->
<!-- BEGIN: menu -->
<aside class="widget site-web-menu-v" id="kiubi-widget-{serial}">
  <!-- BEGIN:intitule -->
  <h5>{intitule}</h5>
  <!-- END:intitule -->
  <!-- BEGIN: niveau -->
  <ul class="nav flex-column">
    <!-- BEGIN: pagetype -->
    <!-- BEGIN: page -->
    <li class="nav-item"><a href="{lien}" class="nav-link {actif|mapValue|active}" title="{page|htmlentities}" target="{cible}">{page}</a>
      <!-- END: page -->
      <!-- BEGIN:sspage -->
      {sspage}
      <!-- END:sspage -->
      <!-- END: pagetype -->
    </li>
  </ul>
  <!-- END: niveau -->
</aside>
<!-- END: menu -->
<!-- BEGIN: nomenu -->
<!-- END: nomenu -->
<!-- END: main -->
```



## Widget "Site web / Menu v" - Version alternative : Liste

### Template : `/theme/fr/widgets/site_web/menu_v/liste/index.html` 

```html
<!--
Template du Widget "Menu vertical"

Documentation :
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-site-web.html#menu-vertical
-->

<!-- BEGIN: main -->
<!-- BEGIN: menu -->
<aside class="widget site-web-menu-v liste" id="kiubi-widget-{serial}">
  <!-- BEGIN:intitule -->
  <h5>{intitule}</h5>
  <!-- END:intitule -->
  <!-- BEGIN: niveau -->
  <ul class="nav flex-column">
    <!-- BEGIN: pagetype -->
    <!-- BEGIN: page -->
    <li class="nav-item"><a href="{lien}" class="nav-link py-1" title="{page|htmlentities}" target="{cible}">{page}</a>
      <!-- END: page -->
      <!-- BEGIN:sspage -->
      {sspage}
      <!-- END:sspage -->
      <!-- END: pagetype -->
    </li>
  </ul>
  <!-- END: niveau -->
</aside>
<!-- END: menu -->
<!-- BEGIN: nomenu -->
<!-- END: nomenu -->
<!-- END: main -->
```



## Widget "Site web / Menu v" - Version alternative : Mega menu

### Template : `/theme/fr/widgets/site_web/menu_v/mega_menu/index.html` 

```html
<!--
Template du Widget "Menu vertical"

Documentation :
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-site-web.html#menu-vertical
-->

<!-- BEGIN: main -->
<!-- BEGIN: menu -->
<ul class="navbar-nav mx-auto site-web-menu-v mega-menu">
  <!-- BEGIN: niveau -->
  <!-- BEGIN: pagetype -->
  <!-- BEGIN: page -->
  <li class="{niveau|mapValue|nav-item} page-{niveau} {page_fille|mapValue|has-child}">
    <a href="{lien}" class="{niveau|mapValue|nav-link|dropdown-item} {page_fille|mapValue|dropdown-toggle} {lien_type} {lien_extra|sanitize} {actif|mapValue|active}" title="{page|htmlentities}" target="{cible}"><!-- BEGIN:lien_image --><img src="{url_lien_image}" class="menu-image mw-100 mb-2" alt="{page|htmlentities}"/><!-- END: lien_image --><span class="menu-title">{page}</span><!-- BEGIN:lien_description --><span class="menu-description">{lien_description}</span><!-- END: lien_description --><!-- BEGIN:lien_attributs --><span class="menu-attribute">{lien_attributs}</span><!-- END: lien_attributs --></a>
    <!-- END: page -->
    <!-- BEGIN: spacer -->
  <li class="{niveau|mapValue|nav-item} page-{niveau} page-spacer">
    <span class="{niveau|mapValue|nav-link|dropdown-item} {page_fille|mapValue|dropdown-toggle} {actif|mapValue|active}" title="{page|htmlentities}" data-toggle="{page_fille|mapValue|dropdown}"><span class="menu-title">{page}</span></span>
  <!-- END: spacer -->
  <!-- BEGIN:sspage -->
  <div class="dropdown">
    <ul class="dropdown-menu rounded-0 shadow">
      {sspage}
    </ul>
  </div>
  <!-- END:sspage -->
    </li>
  <!-- END: pagetype -->

  <!-- END: niveau -->
</ul>
<!-- END: menu -->
<!-- BEGIN: nomenu -->
<!-- END: nomenu -->
<!-- END: main -->
```



## Widget "Site web / Menu v" - Version alternative : Menu deroulant

### Template : `/theme/fr/widgets/site_web/menu_v/menu_deroulant/index.html` 

```html
<!--
Template du Widget "Menu vertical"

Documentation :
https://aide.kiubi.com/design-generalites.html
https://aide.kiubi.com/design-generalites.html#widgets
https://aide.kiubi.com/design-site-web.html#menu-vertical
-->

<!-- BEGIN: main -->
<!-- BEGIN: menu -->
<ul class="navbar-nav mx-auto site-web-menu-v menu-deroulant">
  <!-- BEGIN: niveau -->
  <!-- BEGIN: pagetype --> 
  <!-- BEGIN: page -->
  <li class="{niveau|mapValue|nav-item}"><a href="{lien}" class="{niveau|mapValue|nav-link|dropdown-item} {actif|mapValue|active}" title="{page|htmlentities}" target="{cible}">{page}</a>
	<!-- END: page -->
	<!-- BEGIN: spacer -->
  <li class="dropdown-divider m-0" role="separator"><span class="sr-only">{page}</span>
  <!-- END: spacer -->
  <!-- BEGIN:sspage -->
  <div class="dropdown">
	<ul class="dropdown-menu rounded-0 shadow">
	  {sspage}
	</ul>
  </div>
  <!-- END:sspage -->
  </li>
  <!-- END: pagetype -->
  <!-- END: niveau -->
</ul>
<!-- END: menu -->
<!-- BEGIN: nomenu -->
<!-- END: nomenu -->
<!-- END: main -->
```



