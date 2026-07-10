# Commandes

## Widget Commandes / Panier

**Affiche un résumé du panier d'achat.**

**ce widget ne peut être utilisé que sur la page type "Panier" du service "E-commerce".** 


### Template

Le template du widget : `theme/fr/widgets/commandes/panier/index.html`. Exemple :

```html
<!-- BEGIN:main -->

<div> 
<p><a href="{baseLangue}/ecommerce/panier.html"><strong>{nb_produits} article{pluriel_produits} {total}</strong></a></p> |
	<p><!-- BEGIN:nonidentifie -->
	<a href="{baseLangue}/compte/">Votre compte</a>
	<!-- END:nonidentifie -->
	<!-- BEGIN:identifie -->
	<a href="{baseLangue}/compte/">Votre compte</a> - <a href="{baseLangue}/compte/logout.html">D&eacute;connexion</a>
	<!-- END:identifie -->
    </p>
</div>
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── identifie     // Ne s'affiche que quand l'internaute s'est identifié
    └── nonidentifie     // Affiché quand l'internaute n'est pas identifié
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | type_prix | "HT" ou "TTC" |
| main | nb_produits | Nombre de produits dans la commande (somme des quantités) |
| main | pluriel_produits | Affiche "s" ou "" suivant que le nombre de produit est supérieur à 1 |
| main | total | Total TTC ou HT selon la configuration du catalogue |
| main | total_valeur | Total TTC ou HT selon la configuration du catalogue au format JS-friendly |
| main | total_TTC | Total TTC de la commande |
| main | total_TTC_valeur | Total TTC de la commande, sans formatage |
| main | total_HT | Total HT de la commande |
| main | total_HT_valeur | Total HT de la commande, sans formatage |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| identifie | client_id | Identifiant du client |
| identifie | nom | Nom du client |
| identifie | prenom | Prénom du client |
| identifie | genre | Genre du client "H" ou "F" |
| identifie | email | Email du client |
| identifie | avatar | Avatar du membre en 120x120 pixels |
| identifie | avatar_miniature | Avatar du membre en 40x40 pixels |
| identifie | gravatar | Gravatar du membre en 120x120 pixels |
| identifie | gravatar_miniature | Gravatar du membre en 40x40 pixels |


## Widget Commandes / Détail du panier

**Affiche le détail du panier d'achat.**

**ce widget ne peut être utilisé que sur la page type "Panier" du service "E-commerce".** 

### Template

Le template du widget : `theme/fr/widgets/commandes/panier_detail/index.html`. Exemple :

```html
<!-- BEGIN:main -->

<ul>
  <li><a href="{baseLangue}/ecommerce/panier.html" title="Panier">1. Panier</a></li>
  <li>2. Authentification</li>
  <li>3. Livraison</li>
  <li>4. Mode de paiement</li>
  <li>5. Validation</li>
</ul>

  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->
  <form method="post" action="">
    <!-- BEGIN:produits -->
    <table>
      <tr>
        <th colspan="2" align="left" scope="col">{nb_produits} Produit{pluriel_produits}</th>
        <th align="right" nowrap="nowrap" scope="col">Prix</th>
        <th scope="col">Qte</th>
        <th align="right" nowrap="nowrap" scope="col">Total</th>
        <th scope="col">&nbsp;</th>
      </tr>
      <!-- BEGIN:produit -->
      <tr>
        <td><!-- BEGIN:illustration -->
          <a href="{lien_produit}" title="{intitule_produit|htmlentities} - Cliquez pour acc&eacute;der"><img src="{url_illustration_miniature}" alt="{intitule_produit|htmlentities}" /></a>
          <!-- END:illustration -->
          <!-- BEGIN: noillustration -->
          <a href="{lien_produit}" title="{intitule_produit|htmlentities} - Cliquez pour acc&eacute;der"><img src="{racine}/{theme}/fr/images/produit_mini.gif" alt="{intitule_produit|htmlentities}" /></a>
          <!-- END: noillustration -->
        </td>
        <td><strong><a href="{lien_produit}">{intitule_produit}</a></strong><br />
          <!-- BEGIN:reference -->
          <p>Ref. : {reference}</p>
          <!-- END:reference -->
          <p>{intitule_variante}</p>
          <!-- BEGIN:accroche -->
          <p>{accroche}</p>
          <!-- END:accroche --></td>
        <td align="right">{prix_unitaire}</td>
        <td nowrap="nowrap"><input name="qt[{ref}]" type="text" value="{qt}" />
          <!-- BEGIN:erreur_qt -->
          <div>max. : {max}</div>
          <!-- END:erreur_qt --></td>
        <td align="right">{prix_total}</td>
        <td><a href="{lien_supprimer}" title="Supprimer du panier">Supprimer</a></td>
      </tr>
      <!-- END:produit -->
      <!-- BEGIN:option -->
      <tr>
        <!-- BEGIN:simple -->
        <td colspan="2">{intitule_option} <a href="{lien_supprimer}" title="Supprimer du panier">Supprimer</a></td>
        <!-- BEGIN:offerte -->
        <td>&nbsp;</td>
        <td>{qt}</td>
        <td>Offert</td>
        <!-- END:offerte -->
        <!-- BEGIN:payante -->
        <td>{prix_unitaire}</td>
        <td>{qt}</td>
        <td>{prix_total}</td>
        <!-- END:payante -->
        <!-- END:simple -->
        <!-- BEGIN:textarea -->
        <td colspan="2">{intitule_option} : {valeur_option} <a href="{lien_supprimer}" title="Supprimer du panier">Supprimer</a></td>
        <!-- BEGIN:offerte -->
        <td>&nbsp;</td>
        <td>{qt}</td>
        <td>Offert</td>
        <!-- END:offerte -->
        <!-- BEGIN:payante -->
        <td>{prix_unitaire}</td>
        <td>{qt}</td>
        <td>{prix_total}</td>
        <!-- END:payante -->
        <!-- END:textarea -->
        <!-- BEGIN:select -->
        <td colspan="2">{intitule_option} : {valeur_option} <a href="{lien_supprimer}" title="Supprimer du panier">Supprimer</a></td>
        <!-- BEGIN:offerte -->
        <td>&nbsp;</td>
        <td>{qt}</td>
        <td>Offert</td>
        <!-- END:offerte -->
        <!-- BEGIN:payante -->
        <td>{prix_unitaire}</td>
        <td>{qt}</td>
        <td>{prix_total}</td>
        <!-- END:payante -->
        <!-- END:select -->
        <td><a href="{lien_supprimer}" title="Supprimer du panier">Supprimer</a></td>
      </tr>
      <!-- END:option -->
      <!-- BEGIN:bon -->
      <tr>
        <td>&nbsp;</td>
        <td colspan="3"><strong>{intitule_produit}</strong></td>
        <td align="right">{prix_total}</td>
        <td><a href="{lien_supprimer}" title="Supprimer du panier">Supprimer</a></td>
      </tr>
      <!-- END:bon -->
      <!-- BEGIN:remise -->
      <tr>
        <td>&nbsp;</td>
        <td colspan="3"><strong>{intitule_remise}</strong></td>
        <td align="right"></td>
        <td><a href="{lien_supprimer}" title="Supprimer du panier">Supprimer</a></td>
      </tr>
      <!-- END:remise -->
      <tr>
        <td colspan="4"><strong>Total hors frais de livraison</strong></td>
        <td align="right"><strong>{total_articles}</strong></td>
        <td>&nbsp;</td>
      </tr>
      <!-- BEGIN:livrable -->
      <tr>
        <td colspan="4">Frais de port applicables pour les livraisons vers : {zone_livraison}</td>
        <td align="right">{frais_port}</td>
        <td>&nbsp;</td>
      </tr>
      <!-- END:livrable -->
      <!-- BEGIN:nonlivrable -->
      <tr>
        <td colspan="4">La commande d&eacute;passe le poids autoris&eacute; pour une livraison vers : {zone_livraison}</td>
        <td align="right">Non livrable</td>
        <td>&nbsp;</td>
      </tr>
      <!-- END:nonlivrable -->
      <!-- BEGIN:date_livraison -->
      <tr>
        <td colspan="4">
          Date de livraison : {date_livraison}
          <!-- BEGIN:heure_livraison -->à {heure_livraison}<!-- END:heure_livraison -->
        </td>
        <td align="right"></td>
        <td>&nbsp;</td>
      </tr>
      <!-- END:date_livraison -->
      <!-- BEGIN:commande_HT -->
      <tr>
        <td colspan="4"><strong>Total HT</strong></td>
        <td align="right"><strong>{total_HT}</strong></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td colspan="4" >TVA</td>
        <td align="right">{total_TVA}</td>
        <td>&nbsp;</td>
      </tr>
      <!-- END:commande_HT -->
      <tr>
        <td colspan="5">{total_TTC} Total TTC</td>
        <td>&nbsp;</td>
      </tr>
    </table>
    <!-- BEGIN:options_disponibles -->
    <div>
      <h2>Envie d'une petite option ?</h2>
      <table>
        <!-- BEGIN:option -->
        <tr class="{type_option}">
          <!-- BEGIN:simple -->
          <td>
            <label><input name="options[]" value="{ref_option}" type="checkbox"/>{intitule_option}</label>
            <div>{description_option}</div>
          </td>
          <!-- BEGIN:offerte -->
          <td>Offert</td>
          <!-- END:offerte -->
          <!-- BEGIN:payante -->
          <td>{prix_option}</td>
          <!-- END:payante -->
          <!-- END:simple -->
          <!-- BEGIN:textarea -->
          <td>
            <label><input name="options[]" value="{ref_option}" type="checkbox"/>{intitule_option}</label>
            <div>{description_option}</div>
            <textarea name="options_valeurs[{ref_option}]" rows="5">{valeur_option}</textarea>
          </td>
          <!-- BEGIN:offerte -->
          <td>Offert</td>
          <!-- END:offerte -->
          <!-- BEGIN:payante -->
          <td>{prix_option}</td>
          <!-- END:payante -->
          <!-- END:textarea -->
          <!-- BEGIN:select -->
          <td>
            <label><input name="options[]" value="{ref_option}" type="checkbox"/>{intitule_option}</label>
            <div>{description_option}</div>
            <select name="options_valeurs[{ref_option}]">
              <!-- BEGIN:choix -->
              <option value="{valeur}" {selected}>{valeur}</option>
              <!-- END:choix -->
            </select>
          </td>
          <!-- BEGIN:offerte -->
          <td>Offert</td>
          <!-- END:offerte -->
          <!-- BEGIN:payante -->
          <td>{prix_option}</td>
          <!-- END:payante -->
          <!-- END:select -->
          <td>&nbsp;</td>
        </tr>
        <!-- END:option -->
      </table>
    </div>
    <!-- END:options_disponibles -->
    <div>
      <h2> Vous b&eacute;n&eacute;ficiez d'un bon de r&eacute;duction ? </h2>
      <!-- BEGIN:erreur_bon -->
      <div>{erreur}</div>
      <!-- END:erreur_bon -->
      <label for="reduction">Renseignez le code de votre bon de r&eacute;duction :</label>
      <input type="text" name="bon" value="{bon}" id="reduction" />
    </div>
    <p><input type="submit" name="bt_commande" value="Commander" title="Commander"/>
    <input type="submit" name="bt_recalcul" value="Recalculer" title="Recalculer"/></p>
    <input type="hidden" name="act" value="refresh" />
    <input type="hidden" name="ctl" value="{ctl}" />
    <p><a href="{lien_continuer}" title="Continuez vos achats">Continuez vos achats</a></p>
  </form>
  <!-- END:produits -->
  <!-- BEGIN:noproduits -->
  <p>Votre panier est vide. <a href="/" title="Continuez vos achats">Retourner a l'accueil</a></p>
  <!-- END:noproduits -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── produits     // Bloc affiché si le panier contient au moins 1 produit
    │   ├── produit     // Bloc affiché pour chaque produit du panier
    │   │   ├── illustration     // Bloc affiché si le produit a une illustration.
    │   │   ├── noillustration     // Bloc affiché si le produit n'a pas d'illustration.
    │   │   ├── reference     // Bloc affiché si le produit a une référence.
    │   │   ├── accroche     // Bloc affiché si le produit a une accroche.
    │   │   └── erreur_qt     // Bloc affiché en cas d'erreur sur la quantité de produit disponible, c'est à dire si l'internaute a essayé de mettre dans son panier une quantité de produit supérieur au stock disponible.
    │   ├── erreur_bon     // Bloc affiché en cas d'erreur sur le bon de réduction.
    │   ├── livrable     // Bloc affiché si la commande est livrable par un des transporteurs du site.
    │   ├── nonlivrable     // Bloc affiché si la commande n'est livrable par aucun transporteur (pays non déservi, poids trop important...)
    │   ├── eco_taxe     // Bloc affiché si l'éco taxe est supérieure à 0
    │   ├── option     // Bloc affiché si le panier contient au moins une option à la commande 
    │   │   ├── offerte     // Bloc affiché si l'option a un prix = 0
    │   │   ├── payante     // Bloc affiché si l'option a un prix > 0
    │   │   ├── simple     // Bloc affiché si l'option à la commande est de type simple
    │   │   │   ├── payante     // Bloc affiché si l'option a un prix > 0
    │   │   │   └── offerte     // Bloc affiché si l'option a un prix = 0
    │   │   ├── textarea     // Bloc affiché si l'option à la commande est de type textarea
    │   │   │   ├── payante     // Bloc affiché si l'option a un prix > 0
    │   │   │   └── offerte     // Bloc affiché si l'option a un prix = 0
    │   │   └── select     // Bloc affiché si l'option à la commande est de type liste déroulante 
    │   │       ├── payante     // Bloc affiché si l'option a un prix > 0
    │   │       └── offerte     // Bloc affiché si l'option a un prix = 0
    │   ├── options_disponibles     // Bloc affiché si au moins une option à la commande est disponible
    │   │   └── option     // Bloc affiché pour chaque option à la commande
    │   │       ├── offerte     // Bloc affiché si l'option a un prix = 0
    │   │       ├── payante     // Bloc affiché si l'option a un prix > 0
    │   │       ├── simple     // Bloc affiché si l'option est de type simple
    │   │       │   ├── offerte     // Bloc affiché si l'option a un prix = 0
    │   │       │   └── payante     // Bloc affiché si l'option a un prix > 0
    │   │       ├── textarea     // Bloc affiché si l'option est de type zone de texte
    │   │       │   ├── offerte     // Bloc affiché si l'option a un prix = 0
    │   │       │   └── payante     // Bloc affiché si l'option a un prix > 0
    │   │       └── select     // Bloc affiché si l'option est de type liste déroulante
    │   │           ├── choix     // Affiche un choix possible de l'option
    │   │           ├── offerte     // Bloc affiché si l'option a un prix = 0
    │   │           └── payante     // Bloc affiché si l'option a un prix > 0
    │   ├── bon     // Bloc affiché uniquement pour les bons de type remise fixe ou frais de port fixes
    │   │   └── noillustration     // Bloc parsé systématiquement si le panier possède un bon de type remise fixe ou frais de port fixes
    │   ├── remise     // Bloc affiché uniquement pour les remises en pourcentage
    │   └── date_livraison     // Le bloc s'affiche si le transporteur exige une date de livraison
    │       └── heure_livraison     // Le bloc s'affiche si le transporteur exige une heure de livraison
    ├── noproduits     // Bloc affiché en l'absence de produits dans le panier.
    └── commande_HT     // Bloc affiché pour les catalogues en prix HT.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | lien_continuer | Affiche un lien vers la dernière page ou le dernier produit consulté. |
| main | type_prix | "HT" ou "TTC" |
| main | nb_produits | Nombre de produits dans la commande (somme des quantités) |
| main | pluriel_produits | Affiche "s" ou "" suivant que le nombre de produit est supérieur à 1 |
| main | min_commande | Affiche le montant de commande minimal formaté avec la devise du site<br /> |
| main | min_commande_valeur | Affiche la valeur numérique brute du montant de commande minimal |
| main | total_articles_valeur | Total des prix, sans formatage, des articles HT ou TTC en fonction de la configuration du catalogue |
| main | total_articles_HT_valeur | Total HT des prix des articles (hors frais de port, sans formatage) |
| main | total_articles_TTC_valeur | Total TTC des prix des articles (hors frais de port, sans formatage) |
| main | total_HT_valeur | Total HT de la commande, sans formatage |
| main | total_TTC_valeur | Total TTC de la commande, sans formatage |
| main | frais_port_valeur | Montant des frais de port, sans formatage |
| main | total_TVA_valeur | Total TVA de la commande, sans formatage |
| main | total_eco_taxe_valeur | Total de l'ecotaxe de la commande, sans formatage |
| main | total_articles | Total des prix des articles HT ou TTC en fonction de la configuration du catalogue |
| main | total_articles_HT | Total HT des prix des articles (hors frais de port) |
| main | total_articles_TTC | Total TTC des prix des articles (hors frais de port) |
| main | total_HT | Total HT de la commande |
| main | total_TTC | Total TTC de la commande |
| main | frais_port | Montant des frais de port |
| main | zone_livraison | Zone de livraison |
| main | total_TVA | Total TVA de la commande |
| main | total_eco_taxe | Total de l'eco-participation de la commande |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| produit | lien_produit | Lien vers la fiche produit |
| produit | intitule_produit | Intitulé du produit. |
| produit | accroche | Accroche du produit. Affiche le chapô du produit ou son contenu si son chapô est vide. |
| produit | reference | référence de la variante |
| produit | ref |  identifiant interne au panier qui permet d'identifier un produit. Utilisé pour ajouter / supprmier des produits au panier |
| produit | intitule_variante | Intitulé de la variante. |
| produit | lien_supprimer | Lien pour supprimer le produit du panier |
| produit | prix_unitaire | Prix unitaire du produit |
| produit | qt | Quantité du produit dans le panier |
| produit | prix_total | Prix total des produits de la référence |
| produit | eco_taxe | Montant de l'éco-participation. |
| produit | prix_unitaire_valeur | Prix unitaire du produit, sans formatage |
| produit | eco_taxe_valeur | Montant de l'éco-participation, sans formatage |
| produit | prix_total_valeur | Prix total des produits de la référence, sans formatage |
| produit | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| produit | alterne | La balise affichera alternativement 1 ou 2. |
| produit | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| produit | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| produit | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| illustration | illustration | Identifiant unique de l'illustration de la référence. L'url est à construire de la façon suivante : /media/{illustration} |
| illustration | url_illustration | Url complète de l'illustration principale |
| illustration | url_illustration_miniature | Url complète de la miniature de l'illustration principale |
| illustration | url_illustration_vignette | Url complète de la vignette de l'illustration principale |
| illustration | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration principale |
| illustration | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration principale |
| illustration | ext_illustration | Extension de fichier de l'illustration principale du produit |
| erreur_qt | max | Affiche le stock disponible. |
| erreur_bon | erreur | Message d'erreur sur le bon de réduction. |
| option | intitule_option | Libellé de l'option à la commande |
| option | qt | Quantité de l'option à la commande |
| option | prix_unitaire | Prix unitaire de l'option à la commande |
| option | prix_total | Prix total de l'option à la commande |
| option | prix_unitaire_valeur | Prix unitaire de l'option, sans formatage |
| option | prix_total_valeur | Prix total de l'option, sans formatage |
| option | type_option | Type de l'option "simple", "textarea" ou "select" |
| option | lien_supprimer | Lien pour supprimer le l'option du panier |
| textarea | valeur_option | Valeur de l'option saisi par le visiteur |
| select | valeur_option | Valeur de l'option saisi par le visiteur |
| option | type_option | Type de l'option "simple", "textarea" ou "select" |
| option | ref_option | Identifiant interne de l'option à la commande |
| option | intitule_option | Libellé de l'option à la commande |
| option | description_option | Description de l'option à la commande |
| option | valeur_option | Valeur de l'option saisi par le visiteur |
| option | prix_option | Prix de l'option HT ou TTC en fonction de la configuration du catalogue |
| option | prix_option_HT | Prix de l'option HT |
| option | prix_option_TTC | Prix de l'option TTC |
| option | prix_option_valeur | Prix de l'option HT ou TTC en fonction de la configuration du catalogue, sans formatage |
| option | prix_option_HT_valeur | Prix de l'option HT, sans formatage |
| option | prix_option_TTC_valeur | Prix de l'option TTC, sans formatage |
| choix | valeur | Valeur du choix |
| choix | selected | Indique si le choix est sélectionné. Renvoit selected="selected" |
| bon | intitule_produit | Inititulé du bon de réduction de type remise fixe ou frais de port fixes |
| bon | prix_total_valeur | Montant total de la remise accordée (montant négatif, sans formatage) |
| bon | prix_total | Montant total de la remise accordée (montant négatif) |
| bon | qt | Quantité (toujours 1) |
| bon | prix_unitaire_valeur | Montant total de la remise accordée (montant négatif, sans formatage) |
| bon | prix_unitaire | Montant total de la remise accordée (montant négatif) |
| bon | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| bon | lien_supprimer | Lien pour supprimer la remise |
| bon | alterne | La balise affichera alternativement 1 ou 2. |
| bon | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| bon | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| bon | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| remise | intitule_remise | Bloc affiché uniquement pour les bons de type remise en pourcentage |
| remise | lien_supprimer | Lien pour supprimer la remise |
| date_livraison | date_livraison | Affiche la date actuellement choisie au format dd/mm/YY |
| heure_livraison | heure_livraison | Affiche l'heure de livraison |


## Widget Commandes / Livraison

**Ce widget permet à l'internaute de choisir ses adresses de livraisons et de facturations ainsi que le transporteur assigné à la livraison de la commande.**

La totalité des informations des deux adresses, sauf la « Société », sont obligatoires et ne peuvent pas être modifiées.

Ce widget utilise deux autres templates :

- transporteur.html : correspond au choix du transporteur
- socolissimo.html : correspond à l'intégration de la solution SoColissimo

**ce widget ne peut être utilisé que sur la page type "Livraison" du service "E-commerce".** 



### Template

Le template du widget : `theme/fr/widgets/commandes/livraison/index.html`. Exemple :

```html
<!-- BEGIN:main -->

<ul>
  <li><a href="{baseLangue}/ecommerce/panier.html" title="Panier">1. Panier</a></li>
  <li><a href="#" title="Authentification">2. Authentification</a></li>
  <li><a href="{baseLangue}/ecommerce/livraison.html" title="Livraison">3. Livraison</a></li>
  <li>4. Mode de paiement</li>
  <li>5. Validation</li>
</ul>

  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->
  <form method="post" action="">
    <p style="margin: 0 0 20px 0;">Veuillez indiquer une adresse de facturation et de livraison  (celles-ci peuvent &ecirc;tre diff&eacute;rentes). Les adresses indiqu&eacute;es pour des  commandes ult&eacute;rieures sont conserv&eacute;es et peuvent &ecirc;tre r&eacute;utilis&eacute;es.</p>
    <!-- BEGIN:erreurs -->
    <div>
      <!-- BEGIN:erreur -->
      {erreur}<br />
      <!-- END:erreur -->
    </div>
    <!-- END:erreurs -->

<!-- BEGIN:erreur_livraison-->
    <div>
		{erreur}
	</div>
<!-- END:erreur_livraison -->

    <fieldset>
    <legend>Votre adresse de facturation</legend>
    <div>
      <p>
        <label for="civilite_f">Civilit&eacute; :</label>
        <select name="civilite_f" id="civilite_f">
          <option value="M" {selected_M_f}>Monsieur</option>
          <option value="Mme" {selected_Mme_f}>Madame</option>
          <option value="Mlle" {selected_Mlle_f}>Mademoiselle</option>
        </select>
      </p>
      <p>
        <label for="nom_f">Nom :</label>
        <input type="text" name="nom_f" id="nom_f" value="{nom_f}"/>
      </p>
      <p>
        <label for="prenom_f">Pr&eacute;nom :</label>
        <input type="text" name="prenom_f" id="prenom_f" value="{prenom_f}"/>
      </p>
      <p>
        <label for="societe_f">Soci&eacute;t&eacute; : </label>
        <input type="text" name="societe_f" id="societe_f" value="{societe_f}" style="width: 70%;"/>facultatif 
      </p>
      <p>
        <label for="adresse_f">Adresse :</label>
        <input type="text" name="adresse_f" id="adresse_f" value="{adresse_f}"/>
      </p>
      <p>
        <label for="cp_f">Code postal / Ville :</label>
        <input type="text" name="cp_f" id="cp_f" value="{cp_f}" style="width: 20%;"/>
        <input type="text" name="ville_f" id="ville_f" value="{ville_f}" style="width: 60%;"/>
      </p>
      <p>
        <label for="pays_f">Pays :</label>
        <select name="pays_f" id="pays_f">
			<!-- BEGIN:pays_facturation -->
				<!-- BEGIN:groupe-->
					<optgroup label="{label}"></optgroup>
				<!-- END:groupe-->
			<option value="{value}" {selected}>{label}</option>
			<!-- END:pays_facturation -->
        </select>
      </p>
      <p>
        <label for="tel_f">T&eacute;l&eacute;phone :</label>
        <input type="text" name="tel_f" id="tel_f" value="{tel_f}"/>
      </p>
    </div>
    </fieldset>
    <div>
    <h2>Vous souha&icirc;tez <strong>&ecirc;tre livr&eacute; &agrave; une autre adresse</strong> :</h2>
    <p>
      <input name="livraison_diff" type="radio" id="livraison_diff1" value="1" {checked_livraison_diff1} onclick="$('#adresse_livraison').show()"/>
      <label for="livraison_diff1" style="display: inline;">Oui</label>
      <input name="livraison_diff" type="radio" id="livraison_diff0" value="0" {checked_livraison_diff0} onclick="$('#adresse_livraison').hide()"/>
      <label for="livraison_diff0" style="display: inline;">Non</label>
    </p>
    </div>
    <fieldset id="adresse_livraison">
    <legend>Votre adresse de livraison (si diff&eacute;rente) </legend>
    <div>
      <p>
        <label for="civilite_l">Civilit&eacute; :</label>
        <select name="civilite_l" id="civilite_l">
          <option value="M" {selected_M_l}>Monsieur</option>
          <option value="Mme" {selected_Mme_l}>Madame</option>
          <option value="Mlle" {selected_Mlle_l}>Mademoiselle</option>
        </select>
      </p>
      <p>
        <label for="nom_l">Nom :</label>
        <input type="text" name="nom_l" id="nom_l" value="{nom_l}"/>
      </p>
      <p>
        <label for="prenom_l">Pr&eacute;nom :</label>
        <input type="text" name="prenom_l" id="prenom_l" value="{prenom_l}"/>
      </p>
      <p>
        <label for="societe_l">Soci&eacute;t&eacute; :</label>
        <input type="text" name="societe_l" id="societe_l" value="{societe_l}" style="width: 70%;"/>facultatif 
      </p>
      <p>
        <label for="adresse_l">Adresse :</label>
        <input type="text" name="adresse_l" id="adresse_l" value="{adresse_l}"/>
      </p>
      <p>
        <label for="cp_l">Code postal / Ville :</label>
        <input type="text" name="cp_l" id="cp_l" value="{cp_l}" style="width: 20%;"/>
        <input type="text" name="ville_l" id="ville_l" value="{ville_l}" style="width: 60%;"/>
      </p>
      <p>
        <label for="pays_l">Pays :</label>
        <select name="pays_l" id="pays_l">
			<!-- BEGIN:pays_livraison -->
				<!-- BEGIN:groupe-->
					<optgroup label="{label}"></optgroup>
				<!-- END:groupe-->
			<option value="{value}" {selected}>{label}</option>
			<!-- END:pays_livraison -->
        </select>
      </p>
      <p>
        <label for="tel_l">T&eacute;l&eacute;phone :</label>
        <input type="text" name="tel_l" id="tel_l" value="{tel_l}"/>
      </p>
    </div>
    </fieldset>

	<!-- BEGIN:consentement -->
	<p>
	  <label for="consentement_ok">
		<input name="consentement_ok" id="consentement_ok" type="checkbox" value="1" {check_consentement}/>
		<strong>J'accepte de fournir mes coordonn&eacute;es de facturation et de livraison</strong>
	  </label>
	</p>
	<!-- END:consentement -->

    <input type="hidden" name="act" value="adresses"/>
    <input type="hidden" name="ctl" value="{ctl}" />

   <p> <input type="submit" value="Continuer" title="Continuer"/></p>
   <p><a href="{baseLangue}/ecommerce/panier.html" title="Retour au panier">Retour au panier</a></p>
  
  </form>

<script type="text/javascript">
if("{cache_livraison}" == "1") {
	$('#adresse_livraison').hide()
} else {
	$('#adresse_livraison').show()
}
</script>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── consentement     // Ce bloc s'affiche si le recueilement du consentement est activé.
    ├── erreurs     // Bloc affiché en cas d'erreurs sur les adresses de livraison ou de facturation.
    │   └── erreur     // Bloc affiché pour chaque erreur.
    └── erreur_livraison     // Bloc affiché en cas d'incompatibilité entre le transporteur et l'adresse de livraison.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | civilite_M_f | Renvoi 1 pour la civilité "Monsieur" de l'adresse de facturation. Renvoi 0 dans le cas contraire. À utiliser avec le filtre mapValue. |
| main | civlite_Mme_f | Renvoi 1 pour la civilité "Madame" de l'adresse de facturation. Renvoi 0 dans le cas contraire. À utiliser avec le filtre mapValue. |
| main | civilite_Mlle_f | Renvoi 1 pour la civilité "Mademoiselle" de l'adresse de facturation. Renvoi 0 dans le cas contraire. À utiliser avec le filtre mapValue. |
| main | checked_M_f | Renvoi checked="checked" pour la civilité "Monsieur" de l'adresse de facturation. Préférer l'utilisation de {civilite_M_f|mapValue|checked} |
| main | checked_Mme_f | Renvoi checked="checked" pour la civilité "Madame" de l'adresse de facturation.. Préférer l'utilisation de {civilite_Mme_f|mapValue|checked} |
| main | checked_Mlle_f | Renvoi checked="checked" pour la civilité "Mademoiselle" de l'adresse de facturation.. Préférer l'utilisation de {civilite_Mlle_f|mapValue|checked} |
| main | selected_M_f | Renvoi selected="selected" pour la civilité "Monsieur" de l'adresse de facturation.. Préférer l'utilisation de {civilite_M_f|mapValue|selected} |
| main | selected_Mme_f | Renvoi selected="selected" pour la civilité "Madame" de l'adresse de facturation.. Préférer l'utilisation de {civilite_Mme_f|mapValue|selected} |
| main | selected_Mlle_f | Renvoi selected="selected" pour la civilité "Mademoiselle" de l'adresse de facturation. Préférer l'utilisation de {civilite_Mlle_f|mapValue|selected} |
| main | nom_f | Nom de l'adresse de facturation |
| main | prenom_f | Prénom de l'adresse de facturation |
| main | societe_f | Société de l'adresse de facturation |
| main | adresse_f | Adresse de facturation |
| main | cp_f | Code postal de l'adresse de facturation |
| main | ville_f | Ville de l'adresse de facturation |
| main | tel_f | Téléphone de l'adresse de facturation |
| main | civilite_M_l | Renvoi 1 pour la civilité "Monsieur" de l'adresse de livraison. Renvoi 0 dans le cas contraire. À utiliser avec le filtre mapValue. |
| main | civlite_Mme_l | Renvoi 1 pour la civilité "Madame" de l'adresse de livraison. Renvoi 0 dans le cas contraire. À utiliser avec le filtre mapValue. |
| main | civilite_Mlle_l | Renvoi 1 pour la civilité "Mademoiselle" de l'adresse de livraison. Renvoi 0 dans le cas contraire. À utiliser avec le filtre mapValue. |
| main | checked_M_l | Renvoi checked="checked" pour la civilité "Monsieur" de l'adresse de livraison. Préférer l'utilisation de {civilite_M_l|mapValue|checked} |
| main | checked_Mme_l | Renvoi checked="checked" pour la civilité "Madame" de l'adresse de livraison. Préférer l'utilisation de {civilite_Mme_l|mapValue|checked} |
| main | checked_Mlle_l | Renvoi checked="checked" pour la civilité "Mademoiselle" de l'adresse de livraison. Préférer l'utilisation de {civilite_Mlle_l|mapValue|checked} |
| main | selected_M_l | Renvoi selected="selected" pour la civilité "Monsieur" de l'adresse de livraison. Préférer l'utilisation de {civilite_M_l|mapValue|selected} |
| main | selected_Mme_l | Renvoi selected="selected" pour la civilité "Madame" de l'adresse de livraison. Préférer l'utilisation de {civilite_Mme_l|mapValue|selected} |
| main | selected_Mlle_l | Renvoi selected="selected" pour la civilité "Mademoiselle" de l'adresse de livraison. Préférer l'utilisation de {civilite_Mlle_l|mapValue|selected} |
| main | nom_l | Nom de l'adresse de livraison |
| main | prenom_l | Prénom de l'adresse de livraison |
| main | societe_l | Société de l'adresse de livraison |
| main | adresse_l | Adresse de livraison |
| main | cp_l | Code postal de l'adresse de livraison |
| main | ville_l | Ville de l'adresse de livraison |
| main | tel_l | Téléphone de l'adresse de livraison |
| main | checked_livraison_diff1 |  Affiche checked="checked" si pour l'adresse de livraison est différente de l'adresse de facturation |
| main | checked_livraison_diff0 | Affiche checked="checked" si pour l'adresse de livraison n'est pas différente de l'adresse de facturation |
| main | cache_livraison | Affiche 1 si l'adresse de livraison est identique à l'adresse de facturation |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| consentement | check_consentement | Renvoi checked="checked" pour accepter le recueil des données. |
| erreur | erreur | Affiche un message d'errreur |
| erreur_livraison | erreur | Affiche le message d'erreur détaillé. |
| pays_livraison | label | nom du pays |
| pays_livraison | value | identifiant du pays |
| pays_livraison | selected |  Affiche selected="selected" pour le pays choisit |
| groupe | label | Nom du groupe de pays |


## Widget Commandes / Livraison : Choix du transporteur

**Correspond au choix du transporteur pour la livraison de la commande.**


### Template

Le template du widget : `theme/fr/widgets/commandes/livraison/transporteurs.html`. Exemple :

```html
<!-- BEGIN:main -->
<ul>
  <li><a href="{baseLangue}/ecommerce/panier.html" title="Panier">1. Panier</a></li>
  <li><a href="#" title="Authentification">2. Authentification</a></li>
  <li><a href="{baseLangue}/ecommerce/livraison.html" title="Livraison">3. Livraison</a></li>
  <li>4. Mode de paiement</li>
  <li>5. Validation</li>
</ul>

  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->

  <!-- BEGIN:erreurs -->
    Veuillez compl&eacute;ter les champs :
    <ul>
        <!-- BEGIN:erreur -->
        <li>{erreur}</li>
        <!-- END:erreur -->
    </ul>
  <!-- END:erreurs -->

  <form method="post" action="">
  <!-- BEGIN:livraison -->
    <!-- BEGIN:transporteur -->
    <div>
	  <div>{fraisport}
	  <!-- BEGIN:delai_livraison -->
	  <br /><em>{delai_livraison}</em>
	  <!-- END:delai_livraison -->
	  </div>
	   <input id="transporteur_{transporteur_id}" type="radio" name="transporteur_id" value="{transporteur_id}" {selected} /> <label for="transporteur_{transporteur_id}"><strong>{intitule_transporteur}</strong></label> 
	    
	  <!-- BEGIN:description -->
	  <div>{desc_transporteur}</div>
	  <!-- END:description -->

      <!-- BEGIN:date_livraison -->
	  <div>
        Le <input name="transporteur_date[{transporteur_id}]" type="text" value="{date_livraison}">
        <!-- BEGIN:heure_livraison -->
        à <input name="transporteur_heure[{transporteur_id}]" type="text" value="{heure_livraison}"> h
        <!-- END:heure_livraison -->
	  </div>
	  <!-- END:date_livraison -->

      </div>
	<!-- END:transporteur -->
    <!-- BEGIN:retrait_magasin -->
     <div>
     <div>Offert</div>
        <input id="transporteur_{transporteur_id}" type="radio" name="transporteur_id" value="{transporteur_id}" {selected} />   <label for="transporteur_{transporteur_id}"><strong>{intitule_transporteur}</strong></label> 
      <!-- BEGIN:description -->
      <div>{desc_transporteur}</div>
      <!-- END:description -->
      <p>
      {societe}<br />
      {adresse}<br />
      {cp} {ville}<br />
      {pays}<br />
      </p>

 	  <!-- BEGIN:date_livraison -->
 	  <div>
        Le <input name="transporteur_date[{transporteur_id}]" type="text" value="{date_livraison}">
	    <!-- BEGIN:heure_livraison -->
	    à <input name="transporteur_heure[{transporteur_id}]" type="text" value="{heure_livraison}"> h
	    <!-- END:heure_livraison -->
 	  </div>
      <!-- END:date_livraison -->

     </div>
    <!-- END:retrait_magasin -->
  <!-- END:livraison -->
    <input type="hidden" name="act" value="choix"/>
    <input type="hidden" name="ctl" value="{ctl}" />
    <p><input type="submit" value="Continuer" title="Continuer"/></p>
    <p>
    <a href="{baseLangue}/ecommerce/panier.html" title="Retour au panier">Retour au panier</a></p>
  </form>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── livraison     // Bloc affiché pour chaque mode de livraison
    │   ├── transporteur     // Bloc affiché pour chaque mode de livraison par transporteur
    │   │   ├── description     // Bloc affiché si la description du transporteur est renseignée.
    │   │   ├── delai_livraison     // Bloc affiché si le délai de livraison du transporteur est renseigné.
    │   │   └── date_livraison     // Le bloc s'affiche si la gestion de la date de retrait est activée
    │   │       └── heure_livraison     // Le bloc s'affiche si la gestion de l'heure de retrait est activée
    │   └── retrait_magasin     // Bloc affiché pour chaque mode de livraison en retrait magasin.
    │       └── date_livraison     // Le bloc s'affiche si la gestion de la date de retrait est activée
    │           └── heure_livraison     // Le bloc s'affiche si la gestion de l'heure de retrait est activée
    ├── transporteurs_tranchespoids     // Bloc affiché pour le transporteur par tranches de poids
    │   └── transporteur     // Bloc affiché pour chaque mode de livraison par transporteur par tranches de poids.
    │       ├── delai_livraison     // Bloc affiché si le délai de livraison du transporteur est renseigné.
    │       └── description     // Bloc affiché si la description du transporteur est renseignée.
    └── transporteur_magasin     // Bloc affiché pour le retrait en magasin.
        └── description     // Bloc affiché si la description du retrait en magasin est renseignée.
```
### Balises 

Bloc|Balise|Description
---|---|---
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| erreur | erreur | Affiche un message d'errreur |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| transporteur | transporteur_id | Identifiant du transporteur |
| transporteur | intitule_transporteur | Intitulé du transporteur |
| transporteur | fraisport_HT | Frais de port HT |
| transporteur | fraisport_TTC | Frais de port TTC |
| transporteur | fraisport | Frais de port HT ou TTC en fonction de la configuration du catalogue |
| transporteur | fraisport_HT_valeur | Frais de port HT (sans formattage ni devise) |
| transporteur | fraisport_TTC_valeur | Frais de port TTC (sans formattage ni devise) |
| transporteur | fraisport_valeur | Frais de port HT ou TTC en fonction de la configuration du catalogue  (sans formattage ni devise) |
| transporteur | selected | Renvoi selected="selected" pour le transporteur selectionné. |
| description | desc_transporteur | Description du transporteur |
| delai_livraison | delai_livraison | Délai de livraison |
| date_livraison | date_livraison | Affiche la date actuellement choisie au format dd/mm/YY |
| heure_livraison | heure_livraison | Affiche l'heure de livraison choisie |
| retrait_magasin | transporteur_id | Identifiant du transporteur |
| retrait_magasin | intitule_transporteur | Intitulé du transporteur |
| retrait_magasin | delai_livraison | Délai de livraison |
| retrait_magasin | fraisport_HT | Frais de port HT |
| retrait_magasin | fraisport_TTC | Frais de port TTC |
| retrait_magasin | fraisport | Frais de port HT ou TTC en fonction de la configuration du catalogue |
| retrait_magasin | fraisport_HT_valeur | Frais de port HT (sans formattage ni devise) |
| retrait_magasin | fraisport_TTC_valeur | Frais de port TTC (sans formattage ni devise) |
| retrait_magasin | fraisport_valeur | Frais de port HT ou TTC en fonction de la configuration du catalogue  (sans formattage ni devise) |
| retrait_magasin | desc_transporteur | Description du transporteur |
| retrait_magasin | selected | Renvoi selected="selected" pour le transporteur selectionné. |
| retrait_magasin | societe | Raison sociale de l'adresse du retrait en magasin |
| retrait_magasin | adresse | Adresse du retrait en magasin |
| retrait_magasin | cp | Code postal du retrait en magasin |
| retrait_magasin | ville | Ville du retrait en magasin |
| retrait_magasin | pays | Pays du retrait en magasin |
| date_livraison | date_livraison | Affiche la date actuellement choisie au format dd/mm/YY |
| heure_livraison | heure_livraison | Affiche l'heure de livraison choisie |


## Widget Commandes / Livraison : Portail SoColissimo

**Correspond à l'intégration de la solution SoColissimo.**


### Template

Le template du widget : `theme/fr/widgets/commandes/livraison/socolissimo.html`. Exemple :

```html
<!-- BEGIN:main -->

<ul>
  <li><a href="{baseLangue}/ecommerce/panier.html" title="Panier">1. Panier</a></li>
  <li><a href="#" title="Authentification">2. Authentification</a></li>
  <li><a href="{baseLangue}/ecommerce/livraison.html" title="Livraison">3. Livraison</a></li>
  <li>4. Mode de paiement</li>
  <li>5. Validation</li>
</ul>

  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->

	<!-- BEGIN:erreurs -->
  <div>
    <!-- BEGIN:erreur -->
    {erreur}<br />
    <!-- END:erreur -->
  </div>
  <!-- END:erreurs -->

  <!-- BEGIN:formulaire -->
	<div>
	<form method="post" id="formulaire_socolissimo" action="{formulaire_action}" target="socolissimo-iframe">
	{formulaire}
	</form>

	<iframe name="socolissimo-iframe" src="#" style="border:0px solid #000000"
		 		marginwidth="0" marginheight="0" frameborder="0"  
				width="572" height="1050"></iframe>

	<script type="text/javascript">
	document.getElementById("formulaire_socolissimo").submit();
	</script>
	</div>
	 
  <!-- END:formulaire -->
  <p><a href="{baseLangue}/ecommerce/transporteurs.html" title="Retour au panier">Choisir un autre mode de Livraison</a></p>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── formulaire     // Bloc affiché si le service SoColissimo est disponible et que l'internaute accède au site avec un appareil non mobile.
    └── formulaire_mobile     // Bloc affiché si le service SoColissimo est disponible et que l'internaute accède au site avec un appareil mobile.
```
### Balises 

Bloc|Balise|Description
---|---|---
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| erreur | erreur | Affiche un message d'errreur |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| formulaire | formulaire | Affiche le formualire d'accès vers le service SoColissimo. |
| formulaire | formulaire_action | Affiche l'url d'accès au service SoColissimo. |
| formulaire_mobile | formulaire | Affiche le formualire d'accès vers le service SoColissimo Mobile. |
| formulaire_mobile | formulaire_action | Affiche l'url d'accès au service SoColissimo Mobile. |


## Widget Commandes / Livraison : Colissimo Points relais

**Correspond à l'intégration de la solution Colissimo Points relais.**


### Template

Le template du widget : `theme/fr/widgets/commandes/livraison/colissimo_pickup.html`. Exemple :

```html
<!-- BEGIN:main -->

<ul>
  <li><a href="{baseLangue}/ecommerce/panier.html" title="Panier">1. Panier</a></li>
  <li><a href="#" title="Authentification">2. Authentification</a></li>
  <li><a href="{baseLangue}/ecommerce/livraison.html" title="Livraison">3. Livraison</a></li>
  <li>4. Mode de paiement</li>
  <li>5. Validation</li>
</ul>

  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->

	<!-- BEGIN:erreurs -->
  <div>
    <!-- BEGIN:erreur -->
    {erreur}<br />
    <!-- END:erreur -->
  </div>
  <!-- END:erreurs -->

  <!-- BEGIN:formulaire -->
    <iframe src="{iframe}"></iframe>
  <!-- END:formulaire -->

  <p><a href="{baseLangue}/ecommerce/transporteurs.html" title="Retour au panier">Choisir un autre mode de Livraison</a></p>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    └── formulaire     // Bloc affiché si le service Colissimo est disponible et que l'internaute accède au site avec un appareil non mobile.
```
### Balises 

Bloc|Balise|Description
---|---|---
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| erreur | erreur | Affiche un message d'errreur |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| formulaire | iframe | Adresse de l'iframe pour l'intégration générique de la recherche de points relais |
| formulaire | gmaps_key | Affiche la clé API GoogleMaps |
| formulaire | transporteur_id | Identifiant du transporteur Colissimo Points relais |
| formulaire | adresse | Affiche l'adresse de livraison courante |
| formulaire | ville | Affiche la ville de livraison courante |
| formulaire | cp | Affiche le code postal de livraison courant |
| formulaire | pays_id | Affiche l'identifiant du pays de livraison courant |


## Widget Commandes / Livraison : DPD Relais Pickup

**Correspond à l'intégration de la solution DPD Relais Pickup.**


### Template

Le template du widget : `theme/fr/widgets/commandes/livraison/dpd.html`. Exemple :

```html
<!-- BEGIN:main -->

<ul>
  <li><a href="{baseLangue}/ecommerce/panier.html" title="Panier">1. Panier</a></li>
  <li><a href="#" title="Authentification">2. Authentification</a></li>
  <li><a href="{baseLangue}/ecommerce/livraison.html" title="Livraison">3. Livraison</a></li>
  <li>4. Mode de paiement</li>
  <li>5. Validation</li>
</ul>

  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->

	<!-- BEGIN:erreurs -->
  <div>
    <!-- BEGIN:erreur -->
    {erreur}<br />
    <!-- END:erreur -->
  </div>
  <!-- END:erreurs -->

  <!-- BEGIN:formulaire -->
    <iframe src="{iframe}"></iframe>
  <!-- END:formulaire -->

  <p><a href="{baseLangue}/ecommerce/transporteurs.html" title="Retour au panier">Choisir un autre mode de Livraison</a></p>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    └── formulaire     // Bloc affiché si le service DPD est disponible et que l'internaute accède au site avec un appareil non mobile.
```
### Balises 

Bloc|Balise|Description
---|---|---
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| erreur | erreur | Affiche un message d'errreur |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| formulaire | iframe | Adresse de l'iframe pour l'intégration générique de la recherche de points relais |
| formulaire | gmaps_key | Affiche la clé API GoogleMaps |
| formulaire | transporteur_id | Identifiant du transporteur DPD Relais Pickup |
| formulaire | adresse | Affiche l'adresse de livraison courante |
| formulaire | ville | Affiche la ville de livraison courante |
| formulaire | cp | Affiche le code postal de livraison courant |


## Widget Commandes / Livraison : Mondial Relay

**Correspond à l'intégration de la solution Mondial Relay.**


### Template

Le template du widget : `theme/fr/widgets/commandes/livraison/mondialrelay.html`. Exemple :

```html
<!-- BEGIN:main -->

<ul>
  <li><a href="{baseLangue}/ecommerce/panier.html" title="Panier">1. Panier</a></li>
  <li><a href="#" title="Authentification">2. Authentification</a></li>
  <li><a href="{baseLangue}/ecommerce/livraison.html" title="Livraison">3. Livraison</a></li>
  <li>4. Mode de paiement</li>
  <li>5. Validation</li>
</ul>

  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->

	<!-- BEGIN:erreurs -->
  <div>
    <!-- BEGIN:erreur -->
    {erreur}<br />
    <!-- END:erreur -->
  </div>
  <!-- END:erreurs -->

  <!-- BEGIN:formulaire -->
    <iframe src="{iframe}"></iframe>
  <!-- END:formulaire -->

  <p><a href="{baseLangue}/ecommerce/transporteurs.html" title="Retour au panier">Choisir un autre mode de Livraison</a></p>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    └── formulaire     // Bloc affiché si le service Mondial Relay est disponible et que l'internaute accède au site avec un appareil non mobile.
```
### Balises 

Bloc|Balise|Description
---|---|---
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| erreur | erreur | Affiche un message d'errreur |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| formulaire | iframe | Adresse de l'iframe pour l'intégration générique de la recherche de points relais |
| formulaire | gmaps_key | Affiche la clé API GoogleMaps |
| formulaire | transporteur_id | Identifiant du transporteur Mondial Relay |
| formulaire | ville | Affiche la ville de livraison courante |
| formulaire | cp | Affiche le code postal de livraison courant |
| formulaire | pays_id | Identifiant de pays de livraison courant |


## Widget Commandes / Paiement

**Ce widget permet à l'internaute de finaliser sa commande.**

L'internaute pourra ainsi :

- Consulter un récapitulatif de sa commande.
- Choisir son mode de paiement.

Une fois le mode de paiement choisi, l'internaute accédera à des informations spécifiques au mode de paiement choisi.

Les informations spécifiques aux modes de paiement se configurent dans la rubrique « Mon site / Commandes / Modes de paiement ».

**ce widget ne peut être utilisé que sur la page type "Mode paiement" du service "E-commerce".** 

Ce widget est composé de 8 fichiers :

- index.html : correspond à la page de récapitulation de la commande.
- cheque.html : correspond à la page spécifique au mode de paiement par chèque.
- paybox.html : correspond à la page spécifique au mode de paiement par carte bleue via PayBox.
- paypal.html : correspond à la page spécifique au mode de paiement via PayPal.
- virement.html : correspond à la page spécifique au mode de paiement par virement bancaire.
- atos.html : correspond à la page spécifique au mode de paiement via Atos SIPS.
- cm_cic.html : correspond à la page spécifique au mode de paiement via CM/CIC.
- systempay.html : correspond à la page spécifique au mode de paiement via SystemPay.

### Template

Le template du widget : `theme/fr/widgets/commandes/paiement/index.html`. Exemple :

```html
<!-- BEGIN:main -->

<ul>
  <li><a href="{baseLangue}/ecommerce/panier.html" title="Panier">1. Panier</a></li>
  <li><a href="#" title="Authentification">2. Authentification</a></li>
  <li><a href="{baseLangue}/ecommerce/livraison.html" title="Livraison">3. Livraison</a></li>
  <li><a href="{baseLangue}/ecommerce/paiement.html" title="Mode de paiement">4. Mode de paiement</a></li>
  <li>5. Validation</li>
</ul>
<!-- BEGIN:choix -->

  <h1>R&eacute;capitulatif de vos achats</h1>

  <!-- BEGIN:erreurs -->
  <ul>
    <!-- BEGIN:erreur --><li>{erreur}</li><!-- END:erreur -->
  </ul>
  <!-- END:erreurs -->

  <!-- BEGIN:alerte_montant -->
    <p>Attention, la commande doit &ecirc;tre d'un montant minimum de {min_commande}.</p>
  <!-- END:alerte_montant -->

  <table>
    <tr>
      <th align="left" scope="col" style="width:70%;">{nb_produits} article{pluriel_produits}</th>
      <th align="right" nowrap="nowrap" scope="col">Prix</th>
      <th scope="col" style="width:30%;">Qte</th>
      <th align="right" nowrap="nowrap" scope="col">Total</th>
    </tr>
    <!-- BEGIN:produit -->
    <tr>
      <td><strong>{intitule_produit}</strong><br />
        <!-- BEGIN:reference -->
        <p>Ref. : {reference}</p>
        <!-- END:reference -->
        <p>{intitule_variante}</p></td>
      <td align="right">{prix_unitaire}</td>
      <td align="center">{qt}</td>
      <td align="right"><strong>{prix_total}</strong></td>
    </tr>
    <!-- END:produit -->
    <!-- BEGIN:option -->
    <tr>
        <!-- BEGIN:simple -->
        <td>{intitule_option}</td>
        <!-- BEGIN:offerte -->
        <td></td>
        <td>{qt}</td>
        <td>Offert</td>
        <!-- END:offerte -->
        <!-- BEGIN:payante -->
        <td>{prix_unitaire}</td>
        <td>{qt}</td>
        <td>{prix_total}</td>
        <!-- END:payante -->
        <!-- END:simple -->
        <!-- BEGIN:textarea -->
        <td>{intitule_option} : {valeur_option}</td>
        <!-- BEGIN:offerte -->
        <td></td>
        <td>{qt}</td>
        <td>Offert</td>
        <!-- END:offerte -->
        <!-- BEGIN:payante -->
        <td>{prix_unitaire}</td>
        <td>{qt}</td>
        <td>{prix_total}</td>
        <!-- END:payante -->
        <!-- END:textarea -->
        <!-- BEGIN:select -->
        <td>{intitule_option} : {valeur_option}</td>
        <!-- BEGIN:offerte -->
        <td></td>
        <td>{qt}</td>
        <td>Offert</td>
        <!-- END:offerte -->
        <!-- BEGIN:payante -->
        <td>{prix_unitaire}</td>
        <td>{qt}</td>
        <td>{prix_total}</td>
        <!-- END:payante -->
        <!-- END:select -->
    </tr>
    <!-- END:option -->
    <!-- BEGIN:bon -->
    <tr>
      <td colspan="3"><strong>{intitule_produit}</strong></td>
      <td align="right"><strong>{prix_total}</strong></td>
    </tr>
    <!-- END:bon -->
    <!-- BEGIN:remise -->
    <tr>
      <td  colspan="3"><strong>{intitule_remise}</strong></td>
      <td align="right"></td>
    </tr>
    <!-- END:remise -->
    <tr>
      <td colspan="3"><strong>Total hors frais de livraison</strong></td>
      <td align="right"><strong>{total_articles}</strong></td>
    </tr>
    <tr>
      <td colspan="3">Frais de port</td>
      <td align="right">{frais_port}</td>
    </tr>
    <!-- BEGIN:commande_HT -->
    <tr>
      <td colspan="3"><strong>Total HT</strong></td>
      <td align="right"><strong>{total_HT}</strong></td>
    </tr>
    <tr>
      <td colspan="3" >TVA</td>
      <td align="right">{total_TVA}</td>
    </tr>
    <!-- END:commande_HT -->
    <tr>
      <td colspan="3">Total TTC </td>
      <td align="right">{total_TTC}</td>
    </tr>
  </table>


  <div>
    <h1>Adresse de facturation</h1>
    <p><strong>{civilite_f} {prenom_f} {nom_f}</strong> <br />
    <!-- BEGIN:societe_f -->
    {societe_f}<br />
    <!-- END:societe_f -->
    {adresse_f}<br />
    {cp_f} {ville_f}<br />
    {pays_f}</p>
    <p>
    <a href="{baseLangue}/ecommerce/livraison.html" title="Modifier l'adresse">Modifier l'adresse</a></p> </div>
  <!-- BEGIN:transporteur_tranchespoids -->
  <div>
    <h1>Adresse de livraison</h1>
    <p><strong>{civilite_l} {prenom_l} {nom_l}</strong> <br />
    <!-- BEGIN:societe_l -->
    {societe_l}<br />
    <!-- END:societe_l -->
    {adresse_l}<br />
    {cp_l} {ville_l} <br />
    {pays_l}</p><p>
    <a href="{baseLangue}/ecommerce/livraison.html" title="Modifier l'adresse">Modifier l'adresse</a></p> </div>


  <h1>Mode de livraison</h1>
  <p>Vous serez livr&eacute;s par <strong>{intitule_transporteur}</strong>
  <!-- BEGIN:delai_livraison -->
  dans un délai de {delai_livraison}
  <!-- END:delai_livraison -->
      <!-- BEGIN:date_livraison -->
      Votre commande sera à retirer à partir du <strong>{date_livraison}</strong>
      <!-- BEGIN:heure_livraison -->à <strong>{heure_livraison}</strong><!-- END:heure_livraison -->
      .<br />
      <br />
      <!-- END:date_livraison -->
  </p>
  <p><a href="{baseLangue}/ecommerce/transporteurs.html" title="Changer de transporteur">Changer de mode de livraison</a></p>

<!-- END:transporteur_tranchespoids -->
<!-- BEGIN:transporteur_socolissimo -->
<!-- BEGIN:domicile -->
<div>
  <h1>Adresse de livraison</h1>
  <p>{intitule_transporteur}, "{intitule_mode}", à l'adresse suivante&nbsp;:<br />
  <br />
  <strong>{civilite_l} {prenom_l} {nom_l}</strong> <br />
  <!-- BEGIN:societe_l -->
  {societe_l}<br />
  <!-- END:societe_l -->
  {adresse_l}<br />
  {cp_l} {ville_l} <br />
  {pays_l}</p><p>
  <a href="{baseLangue}/ecommerce/livraison.html" title="Modifier l'adresse">Modifier l'adresse</a></p> 
</div>
<!-- END:domicile -->
<!-- BEGIN:hors_domicile -->
<div>
  <h1>Point de retrait</h1>
  <p>{intitule_transporteur}, "{intitule_mode}", à l'adresse suivante&nbsp;:<br />
  <br />
  {societe_l}<br />
  {adresse_l}<br />
  {cp_l} {ville_l} <br />
  {pays_l}<p>
  La commande doit &ecirc;tre retir&eacute;e par <strong>{civilite_l} {prenom_l} {nom_l}</strong> ou par une personne mandatée</p><p>
  <a href="{baseLangue}/ecommerce/livraison.html" title="Modifier l'adresse">Modifier l'adresse</a> </p> 
</div>
<!-- END:hors_domicile -->

  <h1>Mode de livraison</h1>
  <p>La commande sera prise en charge par <strong>{intitule_transporteur}</strong>
  <!-- BEGIN:delai_livraison -->
  dans un délai de {delai_livraison}
  <!-- END:delai_livraison -->
  </p>
  <p><a href="{baseLangue}/ecommerce/transporteurs.html" title="Changer de transporteur">Changer de mode de livraison</a></p>

<!-- END:transporteur_socolissimo -->
<!-- BEGIN:transporteur_magasin -->
<div>
  <h1>Point de retrait</h1>
 <p> <!-- BEGIN:description -->
  {desc_transporteur}<br />
  <br />
  <!-- END:description -->
  <!-- BEGIN:date_livraison -->
  Votre commande sera à retirer à partir du <strong>{date_livraison}</strong>
  <!-- BEGIN:heure_livraison -->à <strong>{heure_livraison}</strong><!-- END:heure_livraison -->
  .<br />
  <br />
  <!-- END:date_livraison -->
  <strong>{societe_l}</strong><br />
  {adresse_l}<br />
  {cp_l} {ville_l}<br />
  {pays_l}</p><p>
  <a href="{baseLangue}/ecommerce/transporteurs.html" title="Changer de transporteur">Changer de mode de livraison</a></p>  
</div>

<!-- END:transporteur_magasin -->

<!-- BEGIN:fidelite -->
  <h1>Points de fidélité</h1>
  <p>
	Vous gagnez <strong>{gain_fidelite}</strong> points de fidélité. Votre nouveau 
	solde sera <strong>{solde_fidelite}</strong> apr&egrave;s validation du paiement.
  </p>
<!-- END:fidelite -->

  <h1>Choisissez votre mode de paiement</h1>
  <!-- BEGIN:paiements -->
  <form method="post" action="">
    <p>Vous souha&icirc;tez payer par : </p>
    <!-- BEGIN:paiement -->
    <p>
      <input type="radio" name="paiement" value="{mode_id}" id="paiement{mode_id}" {checked}/>
      <label for="paiement{mode_id}">{intitule_mode}</label>
    </p>
    <!-- END:paiement -->

	<!-- BEGIN:gratuit -->
	  <p>La commande est gratuite, vous devez uniquement la valider pour confirmer votre achat.</p>
	<!-- END:gratuit -->

    <p>
	  Il ne vous reste plus qu'&agrave; enregistrer votre commande. Cela va entrainer la validation de votre
	  commande que vous proc&eacute;diez ou non au paiement par la suite.
	</p>
    <p><input type="submit" value="Enregistrer la commande" title="Enregistrer la commande"/></p>
    <input type="hidden" name="act" value="paiement" />
    <input type="hidden" name="ctl" value="{ctl}" />
  </form>
  <!-- END:paiements -->
  <!-- BEGIN:nopaiement -->
  <p><strong>Tous les modes de paiement sont momentan&eacute;ment suspendus, vous ne pouvez pas finaliser votre commande. Nous faisons notre possible pour revenir &agrave; un fonctionnement normal. <br />
  <br />
  Merci de votre compréhension.</strong></p>
  <!-- END:nopaiement -->

<!-- END:choix -->
<!-- BEGIN:paiement -->
{paiement}
<!-- END:paiement -->
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── choix     // Le contenu du bloc s'affiche avant d'avoir validé le mode de paiement.
    │   ├── erreurs     // Bloc affiché en cas d'erreur à l'enregistrement de la commande
    │   │   └── erreur     // Bloc affiché pour chaque erreur
    │   ├── alerte_montant     // Le bloc s'affiche si le montant total actuel de la commande est insuffisant
    │   ├── transporteur_tranchespoids     // Ce bloc s'affiche uniquement si l'acheteur a selectionné un mode de livraison de type "tranches de poids"
    │   │   ├── description     // Ce bloc s'affiche si le mode de livraison selectionné contient une description
    │   │   ├── delai_livraison     // Ce bloc s'affiche si le mode de livraison selectionné rensigne un delai livraison
    │   │   ├── societe_l     // Ce bloc s'affiche si une société est renseignée dans l'adresse de livraison
    │   │   └── date_livraison     // Le bloc s'affiche si le transporteur exige une date de livraison
    │   │       └── heure_livraison     // Le bloc s'affiche si la gestion de l'heure de retrait est activée
    │   ├── transporteur_magasin     // Ce bloc s'affiche uniquement si l'acheteur a selectionné le mode de livraison "Retrait en magasin"
    │   │   ├── description     // Ce bloc s'affiche si le mode de livraison selectionné contient une description
    │   │   └── date_livraison     // Le bloc s'affiche si le transporteur exige une date de livraison
    │   │       └── heure_livraison     // Le bloc s'affiche si la gestion de l'heure de retrait est activée
    │   ├── transporteur_socolissimo     // Ce bloc s'affiche uniquement si l'acheteur a selectionné le mode de livraison "So Colissimo"
    │   │   ├── description     // Ce bloc s'affiche si le mode de livraison selectionné contient une description
    │   │   ├── delai_livraison     // Ce bloc s'affiche si le mode de livraison selectionné rensigne un delai livraison
    │   │   ├── domicile     // Ce bloc s'affiche si l'acheteur choisi l'un des modes suivants : DOM, DOS, RDV
    │   │   │   └── societe_l     // Ce bloc s'affiche si une société est renseignée dans l'adresse de livraison
    │   │   └── hors_domicile     // Ce bloc s'affiche si l'acheteur choisi l'un des modes suivants : BPR, A2P, MRL, CIT, ACP, CDI
    │   ├── societe_f     // Le contenu du bloc s'affiche s'il y a une société définir dans l'adresse de facturation. 
    │   ├── societe_l     // Le contenu du bloc s'affiche s'il y a une société définir dans l'adresse de livraison.
    │   ├── produit     // Le contenu du bloc s'affiche pour chaque produit de la commande.
    │   │   ├── illustration     // Le contenu du bloc s'affiche si le produit a une illustration.
    │   │   ├── noillustration     // Le contenu du bloc s'affiche si le produit n'a pas d'illustration.
    │   │   ├── reference     // Le contenu du bloc s'affiche si le produit a une référence.
    │   │   └── eco_taxe     // Le contenu du bloc s'affiche si une variante à une éco-participation de définie.
    │   ├── option     // Bloc affiché pour chaque option prise à la commande
    │   │   ├── offerte     // Bloc affiché si l'option a un prix = 0
    │   │   ├── payante     // Bloc affiché si l'option a un prix > 0
    │   │   ├── simple     // Bloc affiché si l'option est de type simple
    │   │   │   ├── offerte     // Bloc affiché si l'option a un prix = 0
    │   │   │   └── payante     // Bloc affiché si l'option a un prix > 0
    │   │   ├── textarea     // Bloc affiché si l'option est de type zone de texte
    │   │   │   ├── offerte     // Bloc affiché si l'option a un prix = 0
    │   │   │   └── payante     // Bloc affiché si l'option a un prix > 0
    │   │   └── select     // Bloc affiché si l'option est de type liste déroulante
    │   │       ├── offerte     // Bloc affiché si l'option a un prix = 0
    │   │       └── payante     // Bloc affiché si l'option a un prix > 0
    │   ├── bon     // Le contenu du bloc s'affiche si un bon est utilisé.
    │   ├── commande_HT     // Le contenu du bloc s'affiche si les prix du catalogue sont configurés pour être affichés en HT. 
    │   ├── remise     // Le contenu du bloc s'affiche si un bon de réduction valide en % est utilisé.
    │   ├── eco_taxe     // Le contenu du bloc s'affiche si le montant de l'éco-participation est supérieure à zéro
    │   ├── fidelite     // Le contenu du bloc est affiché si la commande permet au client de gagner des points de fidélité
    │   ├── paiements     // Le contenu du bloc s'affiche si au moins un mode de paiement est activé.
    │   │   ├── paiement     // Le contenu du bloc s'affiche pour chaque mode de paiement activé.
    │   │   └── gratuit     // Le bloc s'affiche si le montant total de la commande est à zéro ET que le montant minimal de commande autorise les commandes à zéro.
    │   └── nopaiements     // Le contenu du bloc s'affiche si aucun mode de paiement n'est activé. 
    └── paiement     // Ce bloc s'affiche après avoir validé un mode de paiement en ligne
        ├── produit     // Le contenu du bloc s'affiche pour chaque produit de la commande.
        ├── option     // Le contenu du bloc s'affiche pour chaque option de la commande.
        └── bon     // Le contenu du bloc s'affiche si un bon de remise fixe ou de frais de port est utilisé.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | type_prix | "HT" ou "TTC" |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| choix | civilite_f | Civilité de l'adresse de facturation. Affiche M, Mme ou Mlle.  |
| choix | nom_f | Nom de l'adresse de facturation |
| choix | prenom_f | Prénom de l'adresse de facturation |
| choix | societe_f | Société de l'adresse de facturation |
| choix | adresse_f | Adresse de facturation |
| choix | cp_f | Code postal de l'adresse de facturation |
| choix | ville_f | Ville de l'adresse de facturation |
| choix | tel_f | Téléphone de l'adresse de facturation |
| choix | pays_f | Pays de l'adresse de facturation |
| choix | civilite_l | Civilité de l'adresse de livraison. Affiche M, Mme ou Mlle.  |
| choix | nom_l | Nom de l'adresse de livraison |
| choix | prenom_l | Prénom de l'adresse de livraison |
| choix | societe_l | Société de l'adresse de livraison |
| choix | adresse_l | Adresse de livraison |
| choix | cp_l | Code postal de l'adresse de livraison |
| choix | ville_l | Ville de l'adresse de livraison |
| choix | tel_l | Téléphone de l'adresse de livraison |
| choix | pays_l | Pays de l'adresse de livraison |
| choix | nb_produits | Nombre de produits dans la commande (somme des quantités) |
| choix | pluriel_produits | Affiche "s" ou "" suivant que le nombre de produit est supérieur à 1 |
| choix | total_articles_valeur | Total des prix des articles HT ou TTC en fonction de la configuration du catalogue |
| choix | total_articles_HT_valeur | Total HT des prix des articles (hors frais de port) |
| choix | total_articles_TTC_valeur | Total TTC des prix des articles (hors frais de port) |
| choix | total_HT_valeur | Total HT de la commande |
| choix | total_TTC_valeur | Total TTC de la commande |
| choix | frais_port_valeur | Montant des frais de ports |
| choix | total_articles | Total des prix des articles HT ou TTC en fonction de la configuration du catalogue |
| choix | total_articles_HT | Total HT des prix des articles (hors frais de port) |
| choix | total_articles_TTC | Total TTC des prix des articles (hors frais de port) |
| choix | total_HT | Total HT de la commande |
| choix | total_TTC | Total TTC de la commande |
| choix | frais_port | Montant des frais de ports |
| choix | zone_livraison | Zone de livraison. |
| choix | total_TVA_valeur | Total TVA de la commande |
| choix | total_TVA | Total TVA de la commande |
| choix | intitule_transporteur | Initulé du mode de livraison selectionné |
| erreur | erreur | Affiche un message d'errreur |
| alerte_montant | min_commande | Affiche le montant de commande minimal formaté avec la devise du site<br /> |
| alerte_montant | min_commande_valeur | Affiche la valeur numérique brute du montant de commande minimal |
| description | desc_transporteur | Description du mode de livraison de type "tranches de poids" selectionné |
| delai_livraison | delai_livraison | Delai de livraison du mode de livraison de type "tranches de poids" selectionné |
| date_livraison | date_livraison | Affiche la date actuellement choisie au format dd/mm/YY |
| heure_livraison | heure_livraison | Affiche l'heure de livraison choisie |
| transporteur_magasin | civilite | Civilité de l'adresse de livraison. Affiche M, Mme ou Mlle.  |
| transporteur_magasin | nom | Nom de l'adresse de livraison |
| transporteur_magasin | prenom | Prénom de l'adresse de livraison |
| transporteur_magasin | societe | Société de l'adresse de livraison |
| transporteur_magasin | adresse | Adresse de livraison |
| transporteur_magasin | cp | Code postal de l'adresse de livraison |
| transporteur_magasin | ville | Ville de l'adresse de livraison |
| transporteur_magasin | pays | Pays de l'adresse de livraison |
| description | desc_transporteur | Description du mode de livraison "Retrait en magasin" |
| date_livraison | date_livraison | Affiche la date actuellement choisie au format dd/mm/YY |
| heure_livraison | heure_livraison | Affiche l'heure de livraison choisie |
| transporteur_socolissimo | intitule_mode | Affiche le mode de livraison choisi : Mon domicile, Mon rendez-vous, Mon bureau de poste, Mon commerçant, Mon Cityssimo |
| transporteur_socolissimo | code_mode | Affiche le code correspondant au mode de livraison choisi : DOM, DOS, RDV, BPR, A2P, MRL, CIT, ACP, CDI |
| description | desc_transporteur | Description du mode de livraison so colissimo rensignée dans le back-office |
| delai_livraison | delai_livraison | Delai de livraison du mode de livraison de type "tranches de poids" selectionné |
| societe_l | societe | Société de l'adresse de livraison |
| produit | lien_produit | Lien vers le détail du produit.  |
| produit | intitule_produit | Intitulé du produit. |
| produit | reference | référence de la variante |
| produit | ref |  Identifiant interne au panier qui permet d'identifier un produit. Utilisé pour ajouter / supprimer des produits au panier |
| produit | prix_unitaire | Prix unitaire du produit  |
| produit | prix_unitaire_valeur | Idem prix_unitaire sans formatage |
| produit | qt | Quantité de produit commandé.  |
| produit | prix_total | Prix total d'un même produit acheté (prix unitaire multiplié par la quantité).  |
| produit | prix_total_valeur | Idem prix_total sans formatage |
| produit | intitule_variante | Intitulé de la variante. |
| produit | eco_taxe | Montant de l'éco-participation. |
| produit | eco_taxe_valeur | Idem eco_taxe sans formatage |
| produit | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| produit | alterne | La balise affichera alternativement 1 ou 2. |
| produit | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| produit | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| produit | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| illustration | illustration | Numéro de fichier de l'illustration principale |
| illustration | url_illustration | Url complète de l'illustration principale |
| illustration | url_illustration_miniature | Url complète de la miniature de l'illustration principale |
| illustration | url_illustration_vignette | Url complète de la vignette de l'illustration principale |
| illustration | url_illustration_g_miniature | Url complète de la grande miniature de l'illustration principale |
| illustration | url_illustration_g_vignette | Url complète de la grande vignette de l'illustration principale |
| illustration | ext_illustration | Extension de fichier de l'illustration principale du produit |
| option | intitule_option | Libellé de l'option à la commande |
| option | type_option | Type de l'option, "simple", "textarea" ou "select" |
| option | valeur_option | Valeur saisi par l'utilisateur pour les options de type zone de texte ou liste déroulante |
| option | prix_unitaire | Prix unitaire de l'option |
| option | prix_unitaire_valeur | Prix unitaire de l'option sans formatage |
| option | qt | Quantité de l'option commandé.  |
| option | prix_total | Prix total de l'option |
| option | prix_total_valeur | Prix total de l'option sans formatage |
| bon | intitule_produit | Intitulé du bon. |
| bon | reference | Référence du bon |
| bon | ref | Identifiant interne au panier qui permet d'identifier un produit. Utilisé pour ajouter / supprimer des produits au panier |
| bon | prix_unitaire | Prix unitaire du produit |
| bon | prix_unitaire_valeur | Prix unitaire du produit sans le devise |
| bon | qt | Quantité du produit dans le panier |
| bon | prix_total | Prix total des produits de la référence |
| bon | prix_total_valeur | Prix total des produits de la référence |
| remise | intitule_remise | Intitulé de la remise |
| eco_taxe | total_eco_taxe | Montant de l'éco-participation. |
| eco_taxe | total_eco_taxe_valeur | Montant de l'éco-participation sans la devise. |
| fidelite | gain_fidelite | Affiche le gain de points de fidélité de la commande |
| fidelite | solde_fidelite | Affiche le solde de points de fidélité en comptant le gain de la commande |
| paiement | mode_id | Identifiant du mode de paiement. Affiche 1 pour le paiement par chèque, 2 pour le paiement par virement, 3 pour le paiement via PayPal et 4 pour le paiement via PayBox.  |
| paiement | mode_code | Code du mode de paiement. Affiche "cheque" pour le paiement par chèque, "virement" pour le paiement par virement, "paypal" pour le paiement via PayPal, "atos" pour le paiement par Atos SIPS, "cm_cic" pour le Crédit Mutuel, "systempay" pour SystemPay et "paybox" pour le paiement via PayBox. |
| paiement | intitule_mode | Intitulé du mode de paiement.  |
| paiement | checked |  Affiche checked="checked" si pour le paiement par défaut |
| paiement | reference | Numéro de la commande |
| paiement | total_TTC | Montant total TTC de la commande |
| paiement | total_HT | Montant total HT de la commande |
| paiement | total_TVA | Montant total TVA de la commande |
| paiement | num_client | Numéro de client |
| paiement | client_id | Client id |
| paiement | frais_port | Montant TTC des frais de port |
| paiement | ville_f | Ville de facturation |
| paiement | pays_f | Pays de facturation |
| paiement | ville_l | Ville de livraison |
| paiement | pays_l | Pays de livraison |
| paiement | paiement | inclusion du template spécifique au mode de paiement |
| produit | intitule_produit | Intitulé du produit. |
| produit | intitule_variante | Intitulé de la variante du produit. |
| produit | reference  | Réference du produit. |
| produit | prix_unitaire_HT | Prix unitaire HT du produit sans formatage |
| produit | prix_unitaire_TTC | Prix unitaire TTC du produit sans formatage |
| produit | qt | Quantité |
| option | intitule_produit | Intitulé de l'option. |
| option | prix_unitaire_HT | Prix unitaire HT du produit sans formatage |
| option | prix_unitaire_TTC | Prix unitaire TTC du produit sans formatage |
| option | qt | Quantité |
| bon | intitule_produit | Intitulé du bon. |
| bon | prix_unitaire_HT | Prix unitaire HT du produit sans formatage |
| bon | prix_unitaire_TTC | Prix unitaire TTC du produit sans formatage |
| bon | qt | Quantité |


## Widget Commandes / Paiement : Chèque

**Correspond à la page spécifique au mode de paiement par chèque.**


### Template

Le template du widget : `theme/fr/widgets/commandes/paiement/cheque.html`. Exemple :

```html
<!-- BEGIN:main -->

  <h1>Paiement par ch&egrave;que</h1>
  <p><strong>Votre commande a été enregistrée sous le n&deg; {reference},</strong> veuillez nous faire parvenir : <br /><br /></p>
  <p><a href="{lien_commande}">Une copie imprim&eacute;e de votre commande</a> ainsi qu'un chèque à l'ordre de "<strong>{ordre}</strong>" à l'adresse suivante :<br /><br />
  </p>
      <p>
      {SOCIETE.societe_nom}<br />
      {SOCIETE.societe_adresse}<br />
      {SOCIETE.societe_cp} {SOCIETE.societe_ville}<br />
      {SOCIETE.societe_pays}<br /><br /><br />
    </p>
        <p>
      Votre commande sera traitée dès réception du paiement.</p>

  <form method="post" action="{lien_terminer}">
    <p><input type="submit" value="Terminer" /></p>
  </form>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | lien_commande | URL vers la commande au format PDF. |
| main | reference | Numéro de la commande |
| main | ordre | Ordre auquel le chèque doit être fait. |
| main | lien_terminer | Valeur de l'attribut action du formulaire. |
| main | total_HT | Montant total HT de la commande |
| main | total_TTC | Montant total TTC de la commande |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |


## Widget Commandes / Paiement : Paybox

**Correspond à la page spécifique au mode de paiement par Paybox.**


### Template

Le template du widget : `theme/fr/widgets/commandes/paiement/paybox.html`. Exemple :

```html
<!-- BEGIN:main -->

  <h1>Paiement en ligne par carte bancaire </h1>
  <strong>Votre commande sera enregistrée sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
  <br />
  <br />
  <br />
  {formulaire}
  <p style="text-align: center;"><img src="{racine}/{theme}/fr/images/logo_paiement/logo_paybox.gif" alt="Paiement en ligne s&eacute;curis&eacute; par PayBox" /><br />
    <input type="submit" value="Effectuer le paiement en ligne">
  </p>
  </form>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | formulaire | Formulaire HTML permettant l'appel au systeme de paiement. Le formulaire ne contient pas le bouton de soumission `<input type="submit" />` ni la fermeture de balise `</form>` |
| main | reference | Numéro de la commande |
| main | total_HT | Montant total HT de la commande |
| main | total_TTC | Montant total TTC de la commande |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |


## Widget Commandes / Paiement : Payline

**Correspond à la page spécifique au mode de paiement par Payline.**


### Template

Le template du widget : `theme/fr/widgets/commandes/paiement/payline.html`. Exemple :

```html
<!-- BEGIN:main -->

  <h1>Paiement en ligne par carte bancaire </h1>
  <strong>Votre commande sera enregistrée sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
  <br />
  <br />
  <br />

  <!-- BEGIN:erreurs -->
    <!-- BEGIN:erreur -->{erreur}<!-- END:erreur -->
  <!-- END:erreurs -->

  <!-- BEGIN:formulaire -->
  {formulaire}
  <p style="text-align: center;">
    <input type="submit" value="Effectuer le paiement en ligne">
  </p>
  </form>
  <!-- END:formulaire -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── formulaire     // Le contenu du bloc s'affiche si le moyen de paiement est disponible
    └── erreurs     // Le bloc s'affiche en cas d'erreur avec le mode de paiement
        └── erreur     // Le bloc s'affiche pour chaque erreur
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | reference | Numéro de la commande |
| main | total_HT | Montant total HT de la commande |
| main | total_TTC | Montant total TTC de la commande |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| formulaire | formulaire | Formulaire HTML permettant l'appel au systeme de paiement. Le formulaire ne contient pas le bouton de soumission `<input type="submit" />` ni la fermeture de balise `</form>` |
| erreur | erreur | Affiche l'erreur |


## Widget Commandes / Paiement : Paypal

**Correspond à la page spécifique au mode de paiement par Paypal.**


### Template

Le template du widget : `theme/fr/widgets/commandes/paiement/paypal.html`. Exemple :

```html
<!-- BEGIN:main -->

  <h1>Paiement en ligne par Paypal </h1>
  <strong>Votre commande sera enregistrée sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
  <br />
  <br />
  <br />
  {formulaire}
  <p style="text-align: center;"><img src="{racine}/{theme}/fr/images/logo_paiement/logo_paypal.gif" alt="Paiement en ligne s&eacute;curis&eacute; par PayPal" /><br />
    <input type="submit" value="Effectuer le paiement en ligne">
  </p>
  </form>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | formulaire | Formulaire HTML permettant l'appel au systeme de paiement. Le formulaire ne contient pas le bouton de soumission `<input type="submit" />` ni la fermeture de balise `</form>` |
| main | reference | Numéro de la commande |
| main | total_HT | Montant total HT de la commande |
| main | total_TTC | Montant total TTC de la commande |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |


## Widget Commandes / Paiement : Payplug

**Correspond à la page spécifique au mode de paiement par Payplug.**


### Template

Le template du widget : `theme/fr/widgets/commandes/paiement/payplug.html`. Exemple :

```html
<!-- BEGIN:main -->

  <h1>Paiement en ligne par carte bancaire </h1>
  <strong>Votre commande sera enregistrée sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
  <br />
  <br />
  <br />

  <!-- BEGIN:erreurs -->
    <!-- BEGIN:erreur -->{erreur}<!-- END:erreur -->
  <!-- END:erreurs -->

  <!-- BEGIN:formulaire -->
  {formulaire}
  <p style="text-align: center;">
    <input type="submit" value="Effectuer le paiement en ligne">
  </p>
  </form>
  <!-- END:formulaire -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── formulaire     // Le contenu du bloc s'affiche si le moyen de paiement est disponible
    └── erreurs     // Le bloc s'affiche en cas d'erreur avec le mode de paiement
        └── erreur     // Le bloc s'affiche pour chaque erreur
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | reference | Numéro de la commande |
| main | total_HT | Montant total HT de la commande |
| main | total_TTC | Montant total TTC de la commande |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| formulaire | formulaire | Formulaire HTML permettant l'appel au systeme de paiement. Le formulaire ne contient pas le bouton de soumission `<input type="submit" />` ni la fermeture de balise `</form>` |
| erreur | erreur | Affiche l'erreur |


## Widget Commandes / Paiement : Virement

**Correspond à la page spécifique au mode de paiement par virement bancaire.**


### Template

Le template du widget : `theme/fr/widgets/commandes/paiement/virement.html`. Exemple :

```html
<!-- BEGIN:main -->

  <h1>Paiement par virement bancaire</h1>
  <p><strong>Votre commande a été enregistrée sous le n&deg; {reference},</strong> veuillez faire un virement sur le compte suivant : <br />
  <br />
  BAN : {IBAN}<br />
  BIC : {BIC}<br />
  <br />
  Banque : {rib_banque}<br />
  Guichet : {rib_guichet}<br />
  N&deg; de compte : {rib_compte}<br />
  Clé RIB : {rib_cle}<br />
  Domiciliation : {domicile}<br />
  Objet : commande {reference}<br />
  <br />
  <strong>Il est IMPERATIF de mentionner le numéro de commande {reference} comme libellé de virement.</strong><br />
  <br />
  Votre commande sera traitée dès réception du paiement.<br /><br /><br />
  </p>
  <form method="post" action="{lien_terminer}">
    <p><input type="submit" value="Terminer" /></p>
  </form>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | IBAN | Affiche la valeur du champ IBAN telle qu'elle est configurée dans le mode de paiement |
| main | BIC | Affiche la valeur du champ BIC telle qu'elle est configurée dans le mode de paiement |
| main | rib_banque | Affiche la valeur du champ banque telle qu'elle est configurée dans le mode de paiement |
| main | rib_guichet | Affiche la valeur du champ guichet telle qu'elle est configurée dans le mode de paiement |
| main | rib_compte | Affiche la valeur du champ compte telle qu'elle est configurée dans le mode de paiement |
| main | rib_cle | Affiche la valeur du champ cle telle qu'elle est configurée dans le mode de paiement |
| main | domicile | Affiche la valeur du champ domicile telle qu'elle est configurée dans le mode de paiement |
| main | reference | Numéro de la commande |
| main | lien_terminer | Valeur de l'attribut action du formulaire. |
| main | total_HT | Montant total HT de la commande |
| main | total_TTC | Montant total TTC de la commande |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |


## Widget Commandes / Paiement : ATOS

**Correspond à la page spécifique au mode de paiement par ATOS.**


### Template

Le template du widget : `theme/fr/widgets/commandes/paiement/atos.html`. Exemple :

```html
<!-- BEGIN:main -->

  <h1>Paiement en ligne par carte bancaire </h1>
  <p><strong>Votre commande sera enregistrée sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
  <br />
  <br />
  <br />
  </p>
  <div align="center">Choisissez un moyen de paiement ci-dessous :</div>
  {formulaire}

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | formulaire | Formulaire HTML permettant l'appel au systeme de paiement. Le formulaire ne contient pas le bouton de soumission `<input type="submit" />` ni la fermeture de balise `</form>` |
| main | reference | Numéro de la commande |
| main | total_HT | Montant total HT de la commande |
| main | total_TTC | Montant total TTC de la commande |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |


## Widget Commandes / Paiement : CM-CIC

**Correspond à la page spécifique au mode de paiement par CM-CIC**


### Template

Le template du widget : `theme/fr/widgets/commandes/paiement/cm_cic.html`. Exemple :

```html
<!-- BEGIN:main -->

  <h1>Paiement en ligne par carte bancaire </h1>
  <p><strong>Votre commande sera enregistrée sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
  <br />
  <br />
  </p>
  <div style="text-align: center;"><img src="{racine}/{theme}/fr/images/logo_paiement/logo_{banque}.jpg" alt="Paiement en ligne s&eacute;curis&eacute; par CM-CIC P@iement" /><br /><br />
	  {formulaire}  
     <input type="submit" value="Effectuer le paiement en ligne"> 
      </form>
 </div>
  

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | formulaire | Formulaire HTML permettant l'appel au systeme de paiement. Le formulaire ne contient pas le bouton de soumission `<input type="submit" />` ni la fermeture de balise `</form>` |
| main | reference | Numéro de la commande |
| main | total_HT | Montant total HT de la commande |
| main | total_TTC | Montant total TTC de la commande |
| main | banque | Code de la banque configurée dans la console d'administration (« cm » pour Crédit Mutuel, « cic » pour le groupe CIC ou « obc » pour OBC). |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |


## Widget Commandes / Paiement : SystemPay

**Correspond à la page spécifique au mode de paiement par SystemPay**


### Template

Le template du widget : `theme/fr/widgets/commandes/paiement/systempay.html`. Exemple :

```html
<!-- BEGIN:main -->

  <h1>Paiement en ligne par carte bancaire </h1>
  <p><strong>Votre commande sera enregistrée sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
  <br />
  <br />
  </p>
  <div style="text-align: center;"><img src="{racine}/{theme}/fr/images/logo_paiement/logo_cyberplus.jpg" alt="Paiement en ligne s&eacute;curis&eacute; par Systempay" /><br /><br />
	  {formulaire}  
      <p><input type="submit" value="Effectuer le paiement en ligne"></p>
      </form>
  </div>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | formulaire | Formulaire HTML permettant l'appel au systeme de paiement. Le formulaire ne contient pas le bouton de soumission `<input type="submit" />` ni la fermeture de balise `</form>` |
| main | reference | Numéro de la commande |
| main | total_HT | Montant total HT de la commande |
| main | total_TTC | Montant total TTC de la commande |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |


## Widget Commandes / Paiement : Stripe

**Correspond à la page spécifique au mode de paiement par SystemPay**


### Template

Le template du widget : `theme/fr/widgets/commandes/paiement/stripe.html`. Exemple :

```html
<!-- BEGIN:main -->

  <h1>Paiement en ligne par carte bancaire </h1>
  <strong>Votre commande sera enregistrée sous le n&deg; {reference},</strong> il ne vous reste plus qu'&agrave; payer en ligne. <br />
  <br />
  <br />
  <br />

  <!-- BEGIN:erreurs -->
    <!-- BEGIN:erreur -->{erreur}<!-- END:erreur -->
  <!-- END:erreurs -->

  <!-- BEGIN:formulaire -->
  {formulaire}
  <p style="text-align: center;">
    <input type="submit" value="Effectuer le paiement en ligne">
  </p>
  </form>
  <!-- END:formulaire -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── formulaire     // Le contenu du bloc s'affiche si le moyen de paiement est disponible
    └── erreurs     // Le bloc s'affiche en cas d'erreur avec le mode de paiement
        └── erreur     // Le bloc s'affiche pour chaque erreur
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | formulaire | Formulaire HTML permettant l'appel au systeme de paiement. Le formulaire ne contient pas le bouton de soumission `<input type="submit" />` ni la fermeture de balise `</form>` |
| main | reference | Numéro de la commande |
| main | total_HT | Montant total HT de la commande |
| main | total_TTC | Montant total TTC de la commande |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| formulaire | formulaire | Formulaire HTML permettant l'appel au systeme de paiement. Le formulaire ne contient pas le bouton de soumission `<input type="submit" />` ni la fermeture de balise `</form>` |
| erreur | erreur | Affiche l'erreur |


## Widget Commandes / Validation

**Ce widget permet à l'internaute d'avoir confirmation de l'enregistrement et de la validation du paiement (dans le cas d'un paiement en ligne) de sa commande.**
Un email de confirmation lui sera de plus envoyé, à lui et au commerçant. D'autres emails pourront lui être envoyés à chaque changement d'état de sa commande pendant le processus de traitement de sa commande.

Les différents messages de confirmation se configurent par mode de paiement dans la rubrique « Mon site / Commandes / Modes de paiement ».

Les différents messages des emails de confirmation se configurent dans la rubrique « Mon site / Commandes / Emails de confirmation ».

**ce widget ne peut être utilisé que sur la page type "Validation" du service "E-commerce".**  

Contrairement aux autres widgets, la Validation est composé de 3 fichiers :

- index.html : correspond à la page de validation de la commande.
- mail.html : correspond à l'email de confirmation de commande envoyé.
- mail_etat.html : correspond aux emails de changement d'état envoyés.
- commande.html : correspond au bon de commande

### Template

Le template du widget : `theme/fr/widgets/commandes/validation/index.html`. Exemple :

```html
<!-- BEGIN:main -->

<ul>
  <li><a href="{baseLangue}/ecommerce/panier.html" title="Panier">1. Panier</a></li>
  <li><a href="#" title="Authentification">2. Authentification</a></li>
  <li><a href="{baseLangue}/ecommerce/livraison.html" title="Livraison">3. Livraison</a></li>
  <li><a href="{baseLangue}/ecommerce/paiement.html" title="Mode de paiement">4. Mode de paiement</a></li>
  <li><a href="{baseLangue}/ecommerce/validation.html">5. Validation</a></li>
</ul>
<div>
  <h2>Validation de votre commande</h2>
  {message}
  <br />
  <br />
  <br />
  <br />
  <a href="{lien_retour}" title="Retour au site">Retour au site</a>
  <div> </div>
</div>
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    └── tracking     // Le contenu du bloc s'affiche uniquement pour traquer les commandes à traiter.
        ├── produit     // Le contenu du bloc s'affiche pour chaque produit de la commande.
        ├── option     // Le contenu du bloc s'affiche pour chaque option de la commande.
        └── bon     // Le contenu du bloc s'affiche si un bon de remise fixe ou de frais de port est utilisé.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | message | Affiche la valeur du champ message telle qu'elle est configurée dans le mode de paiement. Ce message peut contenir les balises suivantes :<br /><br />| Balise | Description |<br />| --------- | ---------------- |<br />| `{commande_id}` | Identifiant numérique unique de la commande  |<br />| `{reference}`   | Référence de la commande                     |<br />| `{num_client}`  | Numéro de client                             |<br />| `{client_id}`   | Identifiant numérique unique du client       |<br />| `{total_TTC}`   | Montant total TTC de la commande             |<br />| `{total_HT}`    | Montant total HT de la commande              |<br />| `{total_TVA}`   | Montant total de la TVA de la commande       |<br />| `{frais_port}`  | Montant TTC des frais de port                |<br />| `{ville_f}`     | Ville de l'adresse de facturation            |<br />| `{pays_f}`      | Pays de l'adresse de facturation             |<br />| `{code_pays_f}` | Code du pays de l'adresse de facturation     |<br />| `{ville_l}`     | Ville de l'adresse de livraison              |<br />| `{pays_l}`      | Pays de l'adresse de livraison               |<br />| `{code_pays_l}` | Code du pays de l'adresse de livraison       | |
| main | lien_retour | Lien de retour |
| main | reference | Référence de la commande |
| main | num_client | Numéro de client  |
| main | client_id | Identifiant numérique unique du client  |
| main | total_TTC | Total TTC de la commande |
| main | total_HT | Total HT de la commande |
| main | total_TVA | Total TVA de la commande |
| main | frais_port | Montant des frais de ports |
| main | ville_f | Ville de l'adresse de facturation |
| main | pays_f | Pays de l'adresse de facturation |
| main | code_pays_f | Code iso du pays de l'adresse de facturation |
| main | ville_l | Ville de l'adresse de livraison |
| main | pays_l | Pays de l'adresse de livraison |
| main | code_pays_l | Code iso du pays de l'adresse de livraison |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| produit | intitule_produit | Intitulé du produit. |
| produit | intitule_variante | Intitulé de la variante du produit. |
| produit | intitule_categorie | Intitulé de la catégorie du produit. |
| produit | reference  | Réference du produit. |
| produit | prix_unitaire_HT | Prix unitaire HT du produit sans formatage |
| produit | prix_unitaire_TTC | Prix unitaire TTC du produit sans formatage |
| produit | qt | Quantité |
| option | intitule_produit | Intitulé de l'option. |
| option | prix_unitaire_HT | Prix unitaire HT du produit sans formatage |
| option | prix_unitaire_TTC | Prix unitaire TTC du produit sans formatage |
| option | qt | Quantité |
| bon | intitule_produit | Intitulé du bon. |
| bon | prix_unitaire_HT | Prix unitaire HT du produit sans formatage |
| bon | prix_unitaire_TTC | Prix unitaire TTC du produit sans formatage |
| bon | qt | Quantité |


## Widget Commandes / Validation : E-mail de confirmation

**Correspond à l'email de confirmation de commande envoyé.**


### Template

Le template du widget : `theme/fr/widgets/commandes/validation/mail.html`. Exemple :

```html
<!-- BEGIN:main -->

Bonjour,<br />
<br />
{civilite_f} {prenom_f} {nom_f}, nous accusons réception de votre commande 
n°{reference_commande} du {num_jour_commande}/{num_mois_commande}/{annee_commande}.<br />
Celle-ci ne sera trait&eacute;e  qu'à réception et validation de votre règlement 
par nos services.<br />
<br />
<!-- BEGIN:message-->
{message}<br />
<br />
<!-- END:message-->
------------------------------------------------<br />
Récapitulatif de votre commande<br />
------------------------------------------------<br />
<br />
---- Adresse de facturation ---- <br />
{civilite_f} {prenom_f} {nom_f} <br />
<!-- BEGIN:societe_f -->
{societe_f}<br />
<!-- END:societe_f -->
{adresse_f}<br />
{cp_f} {ville_f}<br />
{pays_f} <br />
<br />
---- Adresse de livraison ---- <br />
{civilite_l} {prenom_l} {nom_l}<br />
<!-- BEGIN:societe_l -->
{societe_l}<br />
<!-- END:societe_l -->
{adresse_l}<br />
{cp_l} {ville_l} <br />
{pays_l}<br />
<br />
<!-- BEGIN:transporteur -->
Mode de livraison : {transporteur}<br />
<br />
<!-- END:transporteur -->
<table border="0" cellpadding="5" cellspacing="0">
  <tr>
    <td>Produit</td>
    <td>Qte</td>
    <td>Prix Unitaire</td>
    <td>Total</td>
  </tr>
  <!-- BEGIN:produit -->
  <tr>
    <td nowrap="nowrap">{intitule_produit} - {intitule_variante}
      <!-- BEGIN:reference -->
      <br />
      (Ref. : {reference})
      <!-- END:reference -->
      <!-- BEGIN:eco_taxe -->
      <br />
      dont eco participation de {eco_taxe}
      <!-- END:eco_taxe --></td>
    <td valign="top" nowrap="nowrap">{qt}</td>
    <td valign="top" nowrap="nowrap">{prix_unitaire}</td>
    <td valign="top" nowrap="nowrap">{prix_total}</td>
  </tr>
  <!-- END:produit -->
  <!-- BEGIN:option -->
  <tr>
    <td>{intitule_option}<br/><em>{valeur_option}</em></td>
    <td valign="top" nowrap="nowrap">{qt}</td>
    <!-- BEGIN:offerte -->
    <td valign="top" nowrap="nowrap"></td>
    <td valign="top" nowrap="nowrap">Offert</td>
    <!-- END:offerte -->
    <!-- BEGIN:payante -->
    <td valign="top" nowrap="nowrap">{prix_unitaire}</td>
    <td valign="top" nowrap="nowrap">{prix_total}</td>
    <!-- END:payante -->
  </tr>
  <!-- END:option -->
  <!-- BEGIN:bon -->
  <tr>
    <td nowrap="nowrap" colspan="3">{intitule_produit}</td>
    <td nowrap="nowrap">{prix_total}</td>
  </tr>
  <!-- END:bon -->
</table>
<!-- BEGIN:remise -->
{intitule_remise}
<!-- END:remise -->
<br />
-----------------------------------------------------------------------------------------------<br />
Total hors frais de livraison : {total_articles}<br />
Frais de port : {frais_port}<br />
<!-- BEGIN:commande_HT -->
Total HT : {total_HT}<br />
TVA : {total_TVA}<br />
<!-- END:commande_HT -->
<!-- BEGIN:eco_taxe -->
dont eco participation : {total_eco_taxe} <br />
<!-- END:eco_taxe -->
Total TTC à r&eacute;gler par {mode_paiement} : {total_TTC} <br />
<br />
<!-- BEGIN:produitstelecha -->
<br />
------------------------------------------------------------------<br />
Récapitulatif de vos produits téléchargeables<br />
------------------------------------------------------------------<br />
<br />
<table border="0" cellpadding="5" cellspacing="0">
  <tr>
    <td>Produit</td>
    <td>Prix</td>
    <td>Téléchargement</td>
  </tr>
  <!-- BEGIN:produit -->
  <tr>
    <td nowrap="nowrap">{intitule_produit} - {intitule_variante}
      <!-- BEGIN:reference -->
      <br />
      (Ref. : {reference})
      <!-- END:reference --></td>
    <td valign="top" nowrap="nowrap">{prix_unitaire}</td>
    <td valign="top" nowrap="nowrap"><a href="{lien_produit}" target="_blank">{lien_produit}</a></td>
  </tr>
  <!-- END:produit -->
</table>
<br />
Le t&eacute;l&eacute;chargement des produits sera disponible d&egrave;s 
r&eacute;ception et validation de votre r&egrave;glement par nos services. <br />
<br />
----------------------------------------------------------------------------------------------- <br />
<br />
<!-- END:produitstelecha -->

<!-- BEGIN:fidelite -->
<br />
Vous gagnez <strong>{gain_fidelite}</strong> points de fidélité. Votre nouveau 
solde sera <strong>{solde_fidelite}</strong> apr&egrave;s validation du paiement.<br />
<!-- END:fidelite -->

<br />
Pour suivre en temps r&eacute;el l'&eacute;tat  de 
votre commande ou pour t&eacute;l&eacute;charger votre commande au format PDF, nous vous invitons &agrave; vous rendre 
sur votre compte client, muni de votre identifiant 
et de votre mot de passe  : <a href="{lien_commande}" target="_blank">{lien_commande}</a><br />
<br />
Cordialement,<br />
L'équipe du site &quot;{site_nom}&quot;
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── message     // Le contenu du bloc s'affiche si un message de confirmation de commande est renseigné en back-office
    ├── societe_f     // Le contenu du bloc s'affiche si une société est renseignée dans l'adresse de facturation
    ├── societe_l     // Le contenu du bloc s'affiche si une société est renseignée dans l'adresse de livraison
    ├── transporteur     // Le contenu du bloc est affiché en cas de livraison par transporteur (ce qui n'est pas le cas pour une commande ne contenant que des produits virtuels par exemple).
    ├── produit     // Le contenu du bloc s'affiche pour chaque produit de la commande.
    │   ├── reference     // Le contenu du bloc s'affiche si le produit a une référence.
    │   └── eco_taxe     // Le contenu du bloc s'affiche si le produit est soumis à une éco-participation
    ├── commande_HT     // Le contenu du bloc s'affiche si la commande ne contient pas de TVA
    ├── eco_taxe     // Le contenu du bloc s'affiche si la commande est soumise à une éco-participation
    ├── option     // Bloc affiché pour chaque option à la commande
    │   ├── offerte     // Bloc affiché si l'option a un prix = 0
    │   └── payante     // Bloc affiché si l'option a un prix > 0
    ├── bon     // Bloc parsé pour les bon de type remise en euro ou fdp
    ├── produitstelecha     // Le contenu du bloc s'affiche lorsque la commande contient au moins un produit téléchargeable
    │   └── produit     // Le contenu du bloc s'affiche pour chaque produits téléchargeables de la commande.
    ├── remise     // Ce bloc est affiché si la commande bénéficie d'une remise de type frais de port fixe ou pourcentage
    └── fidelite     // Le contenu du bloc est affiché si la commande permet au client de gagner des points de fidélité
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | type_prix | "HT" ou "TTC" |
| main | devise | devise au format XXX |
| main | mode_paiement | Intitulé du mode de paiement |
| main | email_client | Email du client |
| main | reference_commande | Référence de la commande |
| main | nb_produits | Nombre de produits dans la commande (somme des quantités) |
| main | pluriel_produits | Affiche "s" ou "" suivant que le nombre de produit est supérieur à 1 |
| main | lien_commande | Lien vers le détail de la commande |
| main | message | message de confirmation de commande (cf configuration des email de validation) |
| main | num_jour_commande | Affiche le numéro du jour de la date de commande (01 - 31). |
| main | jour_semaine_commande | Affiche le jour de la semaine de la date de commande (lundi - dimanche). |
| main | num_mois_commande | Affiche le numéro du mois de la date de commande (01 - 12). |
| main | mois_commande | Affiche le mois de la date de commande (janvier - décembre). |
| main | mois_abrev_commande | Affiche le mois de la date de commande abrégé (jan - déc) |
| main | annee_commande | Affiche l'année de la date de commande (2010). |
| main | minute_commande | Affiche les minutes de la date de commande (00-59). |
| main | heure_commande | Affiche l'heure de la date de commande (00-23). |
| main | seconde_commande | Affiche les secondes de la date de commande (00-59). |
| main | timestamp_commande | Affiche le timestamp de la date de commande. |
| main | civilite_f | Civilité de l'adresse de facturation |
| main | nom_f | Nom de l'adresse de facturation |
| main | prenom_f | Prénom de l'adresse de facturation |
| main | societe_f | Société de l'adresse de facturation |
| main | adresse_f | Adresse de facturation |
| main | cp_f | Code postal de l'adresse de facturation |
| main | ville_f | Ville de l'adresse de facturation |
| main | tel_f | Téléphone de l'adresse de facturation |
| main | pays_f | Pays de l'adresse de facturation |
| main | civilite_l | Civilité de l'adresse de livraison |
| main | nom_l | Nom de l'adresse de livraison |
| main | prenom_l | Prénom de l'adresse de livraison |
| main | societe_l | Société de l'adresse de livraison |
| main | adresse_l | Adresse de livraison |
| main | cp_l | Code postal de l'adresse de livraison |
| main | ville_l | Ville de l'adresse de livraison |
| main | tel_l | Téléphone de l'adresse de livraison |
| main | pays_l | Pays de l'adresse de livraison |
| main | total_articles | Total des prix des articles HT ou TTC en fonction de la configuration du catalogue |
| main | total_articles_HT | Total HT des prix des articles (hors frais de port) |
| main | total_articles_TTC | Total TTC des prix des articles (hors frais de port) |
| main | total_articles_valeur | Total des prix sans formatage des articles HT ou TTC en fonction de la configuration du catalogue |
| main | total_articles_HT_valeur | Total HT des prix des articles (hors frais de port, sans formatage) |
| main | total_articles_TTC_valeur | Total TTC des prix des articles (hors frais de port, sans formatage) |
| main | frais_port | Montant des frais de port |
| main | zone_livraison | Zone de livraison |
| main | total_HT | Total HT de la commande |
| main | total_TTC | Total TTC de la commande |
| main | total_TVA | Total TVA de la commande |
| main | total_eco_taxe | Montant total de l'éco-pariticipation |
| main | frais_port_valeur | Montant des frais de port sans formatage |
| main | total_HT_valeur | Total HT de la commande sans formatage |
| main | total_TTC_valeur | Total TTC de la commande sans formatage |
| main | total_TVA_valeur | Total TVA de la commande sans formatage |
| main | total_eco_taxe_valeur | Montant total de l'éco-pariticipation sans formatage |
| transporteur | transporteur | Affiche le nom du transporteur |
| produit | intitule_produit | Intitulé du produit. |
| produit | reference  | Réference du produit. |
| produit | prix_unitaire | Prix unitaire du produit  |
| produit | prix_unitaire_valeur | Prix unitaire du produit sans formatage |
| produit | remise | Montant de la remise accordée |
| produit | remise_valeur | Montant de la remise accordée sans formatage |
| produit | qt | Quantité de produit commandé.  |
| produit | prix_total | Prix total d'un même produit acheté (prix unitaire multiplié par la quantité).  |
| produit | prix_total_valeur | Prix total d'un même produit acheté sans formatage.  |
| produit | intitule_variante | Intitulé de la variante |
| produit | eco_taxe | Montant de l'éco-participation |
| produit | eco_taxe_valeur | Montant de l'éco-participation sans formatage |
| option | intitule_option | Libellé de l'option à la commande |
| option | valeur_option | Valeur saisi par l'utilisateur pour les options de type zone de texte ou liste déroulante |
| option | prix_unitaire | Prix unitaire de l'option |
| option | prix_unitaire_valeur | Prix unitaire de l'option sans formatage |
| option | qt | Quantité de l'option commandé.  |
| option | prix_total | Prix total de l'option |
| option | prix_total_valeur | Prix total de l'option sans formatage |
| bon | intitule_produit | Description de la remise sous la forme "Remise de xx € (bon de réduction : XXX)" |
| bon | prix_unitaire | Montant de la remise |
| bon | prix_unitaire_valeur | Montant de la remise sans formatage |
| bon | prix_total | Montant de la remise |
| bon | prix_total_valeur | Montant de la remise sans formatage |
| produit | lien_produit | Lien de téléachargement du produit |
| produit | intitule_produit | Intitulé du produit. |
| produit | reference  | Réference du produit. |
| produit | prix_unitaire | Prix unitaire du produit  |
| produit | prix_unitaire_valeur | Prix unitaire du produit sans formatage |
| produit | remise | Montant de la remise accordée |
| produit | remise_valeur | Montant de la remise accordée sans formatage |
| produit | qt | Quantité de produit commandé.  |
| produit | prix_total | Prix total d'un même produit acheté (prix unitaire multiplié par la quantité).  |
| produit | prix_total_valeur | Prix total d'un même produit acheté sans formatage.  |
| produit | intitule_variante | Intitulé de la variante |
| produit | eco_taxe | Montant de l'éco-participation |
| produit | eco_taxe_valeur | Montant de l'éco-participation sans formatage |
| remise | intitule_remise | Intitulé de la remise |
| fidelite | gain_fidelite | Affiche le gain de points de fidélité de la commande |
| fidelite | solde_fidelite | Affiche le solde de points de fidélité en comptant le gain de la commande |


## Widget Commandes / Validation : Bon de commande

**Correspond à la version HTML du bon de commande.**
Pour activer le bon de commande HTML, il suffit de place le fichier du template dans le thème graphique. Si le fichier n'est pas présent dans le thème graphique, c'est la version PDF générée automatiquement par la plateforme qui est utilisée.

### Template

Le template du widget : `theme/fr/widgets/commandes/validation/commande.html`. Exemple :

```html
<!-- BEGIN:main -->
<html>
<head>
  <meta charset="ISO-8859-15">
</head>
<body>
<!-- BEGIN:logo_site -->
<img src="{site_web}/media/{logo_site}"/>
<!-- END:logo_site -->
<div style="margin: 20px auto 0 auto; max-width: 1000px;">
  <table>
    <thead>
    <tr>
      <th style="text-align: left; font-size: 24px; width: 50%;">{SOCIETE.societe_nom}<br/>
        {site_nom}
      </th>
      <th style="text-align: right; font-size: 24px; width: 50%;">Bon de commande {reference}</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td colspan="2">
        <table>
          <tr>
            <th>Adresse de facturation</th>
            <th>
              <!-- BEGIN:livraison -->Adresse de livraison<!-- END:livraison -->
              <!-- BEGIN:retrait -->Retrait en magasin<!-- END:retrait -->
            </th>
          </tr>
          <tr>
            <td>{civilite_f} {prenom_f} {nom_f} <br/>
              <!-- BEGIN:societe_f -->{societe_f}<br/><!-- END:societe_f -->
              {adresse_f}<br/>
              {cp_f} {ville_f}<br/>
              {pays_f} <br/>
              Tél: {tel_f}
            </td>
            <td> {civilite_l} {prenom_l} {nom_l}<br/>
              <!-- BEGIN:societe_l -->{societe_l}<br/><!-- END:societe_l -->
              {adresse_l}<br/>
              {cp_l} {ville_l} <br/>
              {pays_l}<br/>
              Tél: {tel_l}
            </td>
          </tr>
        </table>
        <strong><br/>
          Commande : {reference}<br/>
          N&deg; Client : {num_client}<br/>
          Date : {num_jour_commande}/{num_mois_commande}/{annee_commande}<br/>
          <br/>
        </strong>
        <table>
          <tr>
            <th>Description</th>
            <th>Quantité</th>
            <th>Prix Unitaire {base_prix}</th>
            <th>Montant {base_prix}</th>
          </tr>
          <!-- BEGIN:ligne -->
          <tr>
            <td>{intitule}</td>
            <td>{qt}</td>
            <td>{pu}</td>
            <td>{montant}</td>
          </tr>
          <!-- END:ligne -->
          <tr>
            <td colspan="2" rowspan="5">
              <table>
                <tr>
                  <th>Taux</th>
                  <th>Base</th>
                  <th>Montant</th>
                </tr>
                <!-- BEGIN:taux -->
                <tr>
                  <td>{taux}</td>
                  <td>{base}</td>
                  <td>{montant}</td>
                </tr>
                <!-- END:taux -->
                <!-- BEGIN:exoneration -->
                <tr>
                  <td>Exon&eacute;r&eacute;</td>
                  <td>{base}</td>
                  <td>{montant}</td>
                </tr>
                <!-- END:exoneration -->
				<!-- BEGIN:mention -->
				<tr>
				  <td colspan="3">{mention}</td>
				</tr>
				<!-- END:mention -->  
              </table>
            </td>
            <td><strong>Sous total {base_prix}</strong></td>
            <td><strong>{sous_total}</strong></td>
          </tr>
          <!-- BEGIN:eco_taxe -->
          <tr>
            <td>dont eco-taxe</td>
            <td>{total_eco_taxe}</td>
          </tr>
          <!-- END:eco_taxe -->
          <tr>
            <td>Frais de port {base_prix}</td>
            <td>{frais_port}</td>
          </tr>
          <tr>
            <td>TVA</td>
            <td>{total_TVA}</td>
          </tr>
          <tr>
            <td><strong>Net &agrave; payer</strong></td>
            <td><strong>{total_TTC} {devise}</strong></td>
          </tr>
        </table>
        <br/>
        <strong>Mode de règlement :</strong> {mode_paiement}<br/>
        <!-- BEGIN:fidelite -->
        <strong>Points de fidelité gagnés :</strong> {gain_fidelite}<br/>
        <!-- END:fidelite -->
        <!-- BEGIN:transporteur -->
        <strong>Mode de livraison :</strong> {transporteur}<br/>
        <!-- END:transporteur --></td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
      <td> {info_legales}</td>
      <td>{site_web}</td>
    </tr>
    </tfoot>
  </table>
</div>
</body>
</html>
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── logo_site     // Ce bloc est affiché si le logo du site est configuré
    ├── societe_f     // Le contenu du bloc s'affiche si une société est renseignée dans l'adresse de facturation
    ├── societe_l     // Le contenu du bloc s'affiche si une société est renseignée dans l'adresse de livraison
    ├── retrait     // Ce bloc est affiché si la commande est à retirer en magasin
    ├── livraison     // Ce bloc est affiché si la commande est livrée
    ├── transporteur     // Ce bloc est affiché si la commande est liée à un transporteur (toujours le cas sauf pour les commandes de produits téléchargeables)
    ├── ligne     // Le contenu du bloc s'affiche pour chaque ligne de la commande.
    ├── eco_taxe     // Le contenu du bloc s'affiche si la commande est soumise à une éco-participation
    ├── fidelite     // Le contenu du bloc est affiché si la commande permet au client de gagner des points de fidélité
    ├── taux     // Ce bloc est affiché pour chaque taux de tva appliqué à la commande
    └── exoneration     // Ce bloc est affiché dans le cas où la commande est exonérée de TVA
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | reference | Référence de la commande |
| main | info_legales | Informations légales de la société, composé du nom, de l'adresse postale, de l'email, du capital, de la forme juridique, du RCS, de l'APE, du numéro de TVA |
| main | site_web | Nom de domaine principale du site |
| main | num_client | Numéro du client |
| main | email_client | Email du client |
| main | site_nom | Nom du site |
| main | base_prix | TTC ou HT |
| main | devise | Symbole monétaire de la devise |
| main | mode_paiement | Intitulé du mode de paiement |
| main | paye | Affiche "1" si la commande est payée, "0" dans le cas contraire |
| main | num_jour_commande | Affiche le numéro du jour de la date de commande (01 - 31). |
| main | jour_semaine_commande | Affiche le jour de la semaine de la date de commande (lundi - dimanche). |
| main | num_mois_commande | Affiche le numéro du mois de la date de commande (01 - 12). |
| main | mois_commande | Affiche le mois de la date de commande (janvier - décembre). |
| main | mois_abrev_commande | Affiche le mois de la date de commande abrégé (jan - déc) |
| main | annee_commande | Affiche l'année de la date de commande (2010). |
| main | minute_commande | Affiche les minutes de la date de commande (00-59). |
| main | heure_commande | Affiche l'heure de la date de commande (00-23). |
| main | seconde_commande | Affiche les secondes de la date de commande (00-59). |
| main | timestamp_commande | Affiche le timestamp de la date de commande. |
| main | civilite_f | Civilité de l'adresse de facturation |
| main | nom_f | Nom de l'adresse de facturation |
| main | prenom_f | Prénom de l'adresse de facturation |
| main | societe_f | Société de l'adresse de facturation |
| main | adresse_f | Adresse de facturation |
| main | cp_f | Code postal de l'adresse de facturation |
| main | ville_f | Ville de l'adresse de facturation |
| main | tel_f | Téléphone de l'adresse de facturation |
| main | pays_f | Pays de l'adresse de facturation |
| main | civilite_l | Civilité de l'adresse de livraison |
| main | nom_l | Nom de l'adresse de livraison |
| main | prenom_l | Prénom de l'adresse de livraison |
| main | societe_l | Société de l'adresse de livraison |
| main | adresse_l | Adresse de livraison |
| main | cp_l | Code postal de l'adresse de livraison |
| main | ville_l | Ville de l'adresse de livraison |
| main | tel_l | Téléphone de l'adresse de livraison |
| main | pays_l | Pays de l'adresse de livraison |
| main | sous_total | Total des prix des articles HT ou TTC en fonction de la configuration du catalogue |
| main | frais_port | Montant des frais de port HT ou TTC en fonction de la configuration du catalogue |
| main | total_TTC | Total TTC de la commande |
| main | total_TVA | Total TVA de la commande |
| logo_site | logo_site | Affiche l'identifiant du fichier de la médiathèque correspondant au logo |
| transporteur | transporteur | Initulé du mode de transport |
| ligne | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| ligne | intitule | Intitulé de la ligne  (produit, option, bon de réduction, ...) |
| ligne | pu | Prix unitaire |
| ligne | qt | Quantitié |
| ligne | montant | Prix total (prix unitaire multiplié par la quantité) |
| eco_taxe | total_eco_taxe | Montant total de l'éco-pariticipation |
| fidelite | gain_fidelite | Affiche le gain de points de fidélité de la commande |
| taux | taux | Affiche le taux de tva |
| taux | base | Affiche la base HT utilisé pour calculer la TVA |
| taux | montant | Affiche la montant de la TVA pour ce taux |
| exoneration | taux | Affiche le taux de tva (ici zéro) |
| exoneration | base | Affiche la base HT utilisé pour calculer la TVA |
| exoneration | montant | Affiche la montant de la TVA pour ce taux (ici zéro) |


## Widget Commandes / Validation : E-mail de changement d'état

**Correspond aux emails de changement d'état envoyés.**


### Template

Le template du widget : `theme/fr/widgets/commandes/validation/mail_etat.html`. Exemple :

```html
<!-- BEGIN:main -->

Bonjour,<br />
<br />
{civilite_f} {prenom_f} {nom_f}, nous  vous informons de l'&eacute;tat actuel de votre commande n°{reference_commande} du {num_jour_commande}/{num_mois_commande}/{annee_commande}.<br />
<br />
{etat}<br />
<br />
<br />
Pour suivre en temps r&eacute;el l'&eacute;tat  de votre commande ou pour t&eacute;l&eacute;charger votre commande au format PDF, nous vous invitons &agrave; vous rendre 
sur votre compte client, muni de votre identifiant et de votre mot de passe  : <a href="{lien_commande}" target="_blank">{lien_commande}</a> <br />
<br />
<br />
<!-- BEGIN:suivi_colis -->
Pour suivre l'avancement de l'expédition de votre colis, nous vous invitons &agrave; vous rendre à l'adresse suivante  : <a href="{suivi_colis}" >{suivi_colis}</a><br />
<br />
<br />
<!-- END:suivi_colis -->
Cordialement,<br />
L'équipe du site {site_nom}
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    └── suivi_colis     // Ce bloc est affiché si une adresse de suivi est disponible pour cette commande
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | reference_commande | Numéro de référence de la commande |
| main | etat | Affiche le message correspondant à l'état de la commande, tel qu'il est configuré dans le back-office. Ces messages peuvent contenir les balises suivantes :<br /><br />| Balise | Description |<br />| --------- | ---------------- |<br />| `{reference_commande}` | Référence de la commande  | |
| main | lien_commande | Lien vers le détail de la commande |
| main | num_jour_commande | Affiche le numéro du jour de la date de commande (01 - 31). |
| main | jour_semaine_commande | Affiche le jour de la semaine de la date de commande (lundi - dimanche). |
| main | num_mois_commande | Affiche le numéro du mois de la date de commande (01 - 12). |
| main | mois_commande | Affiche le mois de la date de commande (janvier - décembre). |
| main | mois_abrev_commande | Affiche le mois de la date de commande abrégé (jan - déc) |
| main | annee_commande | Affiche l'année de la date de commande (2010). |
| main | minute_commande | Affiche les minutes de la date de commande (00-59). |
| main | heure_commande | Affiche l'heure de la date de commande (00-23). |
| main | seconde_commande | Affiche les secondes de la date de commande (00-59). |
| main | timestamp_commande | Affiche le timestamp de la date de commande. |
| main | civilite_f | Civilité de l'adresse de facturation |
| main | nom_f | Nom de l'adresse de facturation |
| main | prenom_f | Prénom de l'adresse de facturation |
| main | societe_f | Société de l'adresse de facturation |
| main | adresse_f | Adresse de facturation |
| main | cp_f | Code postal de l'adresse de facturation |
| main | ville_f | Ville de l'adresse de facturation |
| main | tel_f | Téléphone de l'adresse de facturation |
| main | pays_f | Pays de l'adresse de facturation |
| main | civilite_l | Civilité de l'adresse de livraison |
| main | nom_l | Nom de l'adresse de livraison |
| main | prenom_l | Prénom de l'adresse de livraison |
| main | societe_l | Société de l'adresse de livraison |
| main | adresse_l | Adresse de livraison |
| main | cp_l | Code postal de l'adresse de livraison |
| main | ville_l | Ville de l'adresse de livraison |
| main | tel_l | Téléphone de l'adresse de livraison |
| main | pays_l | Pays de l'adresse de livraison |
| main | total_TTC | Total TTC de la commande |
| main | total_HT | Total HT de la commande |
| main | devise | Code de la devise de la commande  |
| suivi_colis | suivi_colis | URL de suivi de commande |

