# Comptes

## Widget Comptes / Identification rapide

**Affiche le formulaire d'identification rapide.**

Ce formulaire permet à un internaute de s'identifier sur le site, s'il est membre du site. L'identification se fait par son email et un mot de passe. Après s'être identifié, il sera redirigé vers une page du site en fonction de la configuration du widget.

Par défaut Kiubi propose deux modèles graphiques différents pour ce widget :

- Le modèle par défaut, qui intègre le formulaire d'identification ainsi qu'un lien vers la page d'inscription.
- Un modèle secondaire, identification_rapide_simple, qui intègre un lien vers la page d'inscription ainsi
qu'un lien vers la page d'accueil de l'espace Membre.

Dans les deux cas, une fois le membre identifié, seul son nom/prénom, un lien vers la page d'accueil de l'espace Membre, ainsi qu'un lien pour se déconnecter sont affichés.

**Il est donc possible avec ce widget d'afficher des informations si le membre est identifié et d'autres informations s'il ne l'est pas.**

### Template

Le template du widget : `theme/fr/widgets/compte/identification_rapide/index.html`. Exemple :

```html
<!-- BEGIN:main -->

<!-- BEGIN:nonidentifie -->
  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->
  <div>
    <h2>Vous avez déjà un compte ?</h2>
    <form action="{form_action}" method="post">

      <label for="email_ident_rapide">Adresse email :</label>
      <input type="text" name="email" id="email_ident_rapide" value="{email}" />
      
      <label for="mdp_ident_rapide">Mot de passe :</label>
      <input type="password" name="mdp" id="mdp_ident_rapide" value="" />
      
      <input type="submit" value="S'identifier"/>
      
      <a href="{baseLangue}/compte/motdepasse_perdu.html" title="Retrouvez votre mot de passe">Mot de passe perdu ?</a>
      
      <input type="hidden" name="act" value="send" />
      <input type="hidden" name="ctl" value="{ctl}"/>
    </form>
  </div>
  <div>
    <h2>Vous êtes nouveau sur le site ?</h2>
    <a href="{baseLangue}/compte/ouverture.html" title="Créez un nouveau compte">Cliquez ici pour vous créez un compte et accéder à nos services.</a>
  </div>
<!-- END:nonidentifie -->
<!-- BEGIN:identifie -->
  <p>Bonjour, <strong>{prenom} {nom}</strong><br />
  <a href="{baseLangue}/compte/" title="Votre compte">Votre compte</a> | 
  <a href="{baseLangue}/compte/logout.html" title="D&eacute;connexion">Déconnexion</a>
<!-- END:identifie -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── identifie     // Le contenu du bloc s'affiche si le membre est identifié.
    │   └── intitule     // Ne s'affiche que si l'intitulé du widget est rempli et si le membre est identifié
    └── nonidentifie     // Le contenu du bloc s'affiche si le membre n'est pas identifié.
        └── intitule     // Avertissement : la balise globale {intitule} n'est active que dans le bloc `<!-- BEGIN: identifie -->
<!-- END: identifie -->` et pas dans le bloc `<!-- BEGIN: nonidentifie --> <!-- END: nonidentifie -->`.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | form_action | Valeur de l'attribut action du formulaire. |
| main | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_redirection | Affiche le type de redirection après l'identification : <br /><br />- "g" : redirection vers la page du groupe extranet<br />- "c" : redirection vers l'espace client <br />- "o" : redirection vers la page d'origine |
| identifie | client_id | Identifiant du membre. |
| identifie | nom | Nom du membre |
| identifie | prenom | Prénom du membre. |
| identifie | genre | Genre du membre. Affiche H si c'est un homme, F si c'est une femme. |
| identifie | email | Email du membre. |
| identifie | avatar | Avatar du membre en 120x120 pixels |
| identifie | avatar_miniature | Avatar du membre en 40x40 pixels |
| identifie | gravatar | Gravatar du membre en 120x120 pixels |
| identifie | gravatar_miniature | Gravatar du membre en 40x40 pixels |


## Widget Comptes / Identification

**Affiche le formulaire d'identification.**

Ce formulaire permet à un internaute de s'identifier sur le site, s'il est membre du site. L'identification se fait par son email et un mot de passe. Un lien pour retrouver un mot de passe perdu est disponible par défaut (voir le widget « Tableau de bord » pour plus d'information sur le mot de passe perdu). Après s'être identifié, il sera automatiquement redirigé vers une page du site en fonction de sa page de provenance/destination, afin de garantir une navigation fluide :

- Par défaut, le membre est redirigé vers la page d'accueil du groupe Extranet dont il fait parti.
- Si le membre veut accéder à une page protégée de l'Extranet, il sera redirigé vers cette page après
identification.
- Si le membre est dans le processus de commande, il sera redirigé vers l'étape suivante du processus.
- Si le membre doit s'identifier pour poster un commentaire (dans le blog ou le catalogue), il sera redirigé
vers la page d'ajout d'un commentaire

Le comportement de ce widget ne peut pas être modifié.

**ce widget ne peut être utilisé que sur la page type "Identification" du service "Gestion de comptes".** 

### Template

Le template du widget : `theme/fr/widgets/compte/identification/index.html`. Exemple :

```html
<!-- BEGIN:main -->


  <div>
    <h1>Vous &ecirc;tes nouveau  ? </h1>
    <p>En cr&eacute;ant un compte sur <strong>{site_nom}</strong> vous pourrez acc&eacute;der &agrave; l'ensemble de nos services.</p><br />
    <form action="{lien_inscription}" method="post">
      <p><input type="submit" value="Créez votre compte" title="Créez votre compte"/></p>
    </form>
  </div>
  <div id="content_right">
    <h1>Vous avez d&eacute;j&agrave; un compte ? </h1>
    <form action="#content_right" method="post">
      <!-- BEGIN:erreur -->
      <div><strong>L'adresse email ou votre mot de passe  que vous avez saisis sont erron&eacute;s.</strong><br />
        Vous &ecirc;tes  nouveau sur le site ? <a href="{lien_inscription}" title="Cr&eacute;ez votre compte !"><strong>Cr&eacute;ez votre compte !</strong></a> </div>
      <!-- END:erreur -->
      <!-- BEGIN:erreur_fermeture -->
      <div><strong>L'identification est momentanément interrompue.</strong></div>
      <!-- END:erreur_fermeture -->
      <p>
        <label for="email_ident">Adresse email :</label>
        <input type="text" name="email" id="email_ident" value="{email}"/>
      </p>
      <p>
        <label for="mdp_ident">Mot de passe :</label>
        <input type="password" name="mdp" id="mdp_ident" value=""/>
      </p>
     <p> <input type="submit" value="S'identifier" title="S'identifier"/></p>
      <input type="hidden" name="act" value="send" />
      <input type="hidden" name="ctl" value="{ctl}"/>
      <p><a href="{baseLangue}/compte/motdepasse_perdu.html" title="Retrouvez votre mot de passe">Mot de passe perdu ?</a></p>
    </form>
  </div>
  <br/>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── erreur     // Le contenu du bloc s'affiche s'il y a une erreur lors de l'identification (email ou mot de passe invalide).
    └── erreur_fermeture     // Le contenu du bloc s'affiche si l'identification est fermée.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | email | Valeur de l'attribut value du champ input du formulaire correspondant à l'email. |
| main | lien_inscription | URL du formulaire d'inscription. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |


## Widget Comptes / Formulaire d'inscription

**Affiche un formulaire d'inscription au site.**

Ce widget permet à un internaute de devenir membre du site pour passer une commande, poster un commentaire, accéder à une page protégée, ... 
Une confirmation d'inscription est obligatoire soit via un email de demande de confirmation soit via un captcha (anti-spam) directement à l'inscription, l'email étant plus sûr que le captcha mais plus intrusif. Ce choix ne se fait pas au niveau du widget mais dans la rubrique « Membres / Configuration et préférences » de la console d'administration.

La totalité des informations nécessaires à l'inscription sont obligatoires et ne peuvent pas être modifiées. La personnalisation de ce widget est donc limitée.

Contrairement aux autres widgets, le Formulaire d'inscription est composé de 2 fichiers :

- index.html : correspond au formulaire d'inscription à proprement dit.
- mail.html: correspond à l'email (au format texte) de demande de confirmation d'inscription.

**ce widget ne peut être utilisé que sur la page type "Inscription" du service "Gestion de comptes".** 

### Template

Le template du widget : `theme/fr/widgets/compte/inscription/index.html`. Exemple :

```html
<!-- BEGIN:main -->

  <!-- BEGIN:intitule -->  
  <h1>{intitule}</h1>
  <!-- END:intitule -->
  
  <!-- BEGIN:form -->
  <form method="post" action="#inscription">
    <p>En cr&eacute;ant un compte sur <strong>"{site_nom}"</strong> vous pourrez acc&eacute;der &agrave; l'ensemble de nos services.</p>
    <p>Si vous avez d&eacute;j&agrave; un compte, veuillez vous connecter &agrave; <a href="{baseLangue}/compte/login.html">la page de connexion</a>.</p>
    <!-- BEGIN:erreurs -->
    <div>
      <!-- BEGIN:erreur -->
      {erreur}<br />
      <!-- END:erreur -->
    </div>
    <!-- END:erreurs -->
    <fieldset>
    <legend>Vos informations personnelles</legend>
    <div>
      <p>
        <input type="radio" name="genre" id="insc_genreH" value="H" {checked_H}/>
        Monsieur
        <input type="radio" name="genre" id="insc_genreF" value="F" {checked_F}/>
        Madame 
	  </p>
      <p>
        <label for="insc_nom">Votre nom :</label>
        <input type="text" name="nom" id="insc_nom" value="{nom}"/>
      </p>
      <p>
        <label for="insc_prenom">Votre pr&eacute;nom :</label>
        <input type="text" name="prenom" id="insc_prenom" value="{prenom}"/>
      </p>
      <p>
        <label for="insc_email">Votre adresse email :</label>
        <input type="text" name="email" id="insc_email" value="{email}"/>
    </p>
    </div>
    </fieldset>
    <fieldset>
    <legend>Votre mot de passe</legend>
    <div>
      <p>
        <label for="insc_mdp">Mot de passe <em>(6 &agrave; 32 caract&egrave;res)</em> :</label>
        <input type="password" name="mdp" id="insc_mdp" value="{mdp}"/>
        </p>
      <p>
        <label for="insc_mdp_confirm">Confirmation :</label>
        <input type="password" name="mdp_confirm" id="insc_mdp_confirm" value="{mdp_confirm}"/>
      </p>
    </div>
    </fieldset>
    <fieldset>
    <legend>Abonnement</legend>
    <div>
      <p>
        <input name="newsletter" id="insc_newsletter" type="checkbox" value="1" {check_newsletter}/>
        <label for="insc_newsletter">S'abonner &agrave; la newsletter. 
          <!-- BEGIN:fidelite -->
          <strong>B&eacute;n&eacute;ficiez d'un bonus de {bonus_fidelite} points de fidélité !</strong>
          <!-- END:fidelite -->
		</label>
      </p>
    </div>
    </fieldset>
    <fieldset>
    <legend>Conditions d'utilisation</legend>
    <div>
    <p>
      <textarea name="insc_legal"  rows="" id="insc_legal">{CGU}</textarea></p>
      <p>
        <input name="legal_ok" id="insc_legal_ok" type="checkbox" value="1" {check_legal} />
        <label for="insc_legal_ok">J'accepte les conditions d'utilisation</label>
      </p>
    </div>
    </fieldset>

    <!-- BEGIN:consentement -->
    <fieldset>
      <legend>Donn&eacute;es personnelles collect&eacute;es et finalit&eacute;s des traitements</legend>
        <textarea rows="8" readonly>{finalites}</textarea>
        <label for="consentement_ok">
		  <input name="consentement_ok" id="consentement_ok" type="checkbox" value="1" {check_consentement}/>
		  <strong>J'accepte l'utilisation de mes donn&eacute;es personnelles.</strong>
        </label>
    </fieldset>
	<!-- END:consentement -->

    <!-- BEGIN:captcha -->
    <fieldset>
    <legend>Anti-spam</legend>
    <div>
      <p>
        <label for="captcha{captcha_id}">{captcha_question}</label>
        <input type="text" name="captcha[{captcha_id}]" id="captcha{captcha_id}" value="" />
      </p>
    </div>
    </fieldset>
    <!-- END:captcha -->
    <p><input type="submit" value="Continuer" title="Continuer"/>
    <input type="button" value="Annuler" title="Annuler" onclick="document.location.href='{baseLangue}/compte/'"/>
    <input type="hidden" name="act" value="inscription" />
    <input type="hidden" name="ctl" value="{ctl}"/>
    </p>
  </form>
  <!-- END:form -->
  <!-- BEGIN:message -->
  <p>Bonjour <strong>{prenom} {nom}</strong>,<br />
    <br />
    Vous allez recevoir d'ici quelques instants un email à l'adresse {email}. Si vous utilisez un filtre anti-spam pour votre messagerie, merci de v&eacute;rifier la configuration du filtre.<br />
    <br />
    Ouvrez cet email et cliquez sur le lien qui vous permettra de continuer et de valider votre inscription.<br />
    A tout de suite ! </p>
  <!-- END:message -->
  <!-- BEGIN:fermeture -->
  <p>L'inscription au site {site_nom} est momentanément fermé.</p>
  <!-- END:fermeture -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── form     // Le contenu du bloc s'affiche avant la validation du formulaire d'inscription.
    │   ├── captcha     // Le contenu du bloc s'affiche si le captcha (dispositif anti-spam) est activé. Cette option est configurable "Membres / Paramètres".
    │   ├── consentement     // Ce bloc s'affiche si le recueilement du consentement à l'inscription est activé.
    │   ├── erreurs     // Le contenu du bloc s'affiche s'il y a des erreurs à l'inscription.
    │   │   └── erreur     // Le contenu du bloc s'affiche pour chaque erreur.
    │   └── fidelite     // Le contenu du bloc s'affiche si le bonus de points de fidélité à l'inscription à la newsletter est activé.
    ├── message     // Le contenu du bloc s'affiche après la validation du formulaire d'inscription.
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli et si l'inscription est ouverte
    └── fermeture     // Le contenu du bloc s'affiche si l'inscription au site est fermée.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| form | nom | Valeur du champ Nom. |
| form | prenom | Valeur du champ Prénom. |
| form | mdp | Valeur du champ Mot de passe. |
| form | mdp_confirm | Valeur du champ Confirmation du mot de passe. |
| form | checked_F | Renvoi checked="checked" si c'est une femme. |
| form | checked_H | Renvoi checked="checked" si c'est un homme. |
| form | email | Valeur du champ Email. |
| form | check_legal | Renvoi checked="checked" pour accepter les conditions d'utilisation. |
| form | check_newsletter | Renvoi checked="checked" pour s'abonner à la newsletter. |
| form | CGU | Texte des conditions d'utilisation. |
| captcha | captcha_question | Question du captcha. |
| captcha | captcha_id | Id du captcha. |
| consentement | finalites | Affiche les traitements et finalité de la collecte des données personnelles. |
| consentement | check_consentement | Renvoi checked="checked" pour accepter le recueil des données. |
| erreur | erreur | Affiche le message d'erreur correspond à l'erreur. |
| fidelite | bonus_fidelite | Nombre de points bonus à l'inscription à la newsletter. |
| message | nom | Valeur du champ Nom. |
| message | prenom | Valeur du champ Prénom. |
| message | email | Valeur du champ Email. |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |


## Widget Comptes / Formulaire d'inscription : E-mail de confirmation

**Contenu de l'email (au format texte) de demande de confirmation d'inscription.**


### Template

Le template du widget : `theme/fr/widgets/compte/inscription/mail.html`. Exemple :

```html
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
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | urlInscription | URL de confirmation d'inscription. |


## Widget Comptes / Tableau de bord

**Affiche le tableau de bord de la gestion de compte des membres.**

Ce widget correspond à l'accueil de l'espace Membre et permet aux membres du site de :

- modifier leurs informations personnelles,
- modifier leur mot de passe,
- modifier leur identité web,
- modifier leur avatar,
- modifier leur abonnement (seulement à la Newsletter pour l'instant),
- consulter leur(s) commande(s).

Pour accéder à son tableau de bord, il est obligatoire qu'un membre soit identifié sur le site (sauf pour accéder à la page « Mot de passe perdu ») !

**ce widget ne peut être utilisé que sur la page type "Compte" du service "Gestion de comptes".** 

Contrairement aux autres widgets, le Tableau de bord est composé de 8 fichiers : 

- index.html : correspond au tableau de bord à proprement dit.
- abonnements.html : correspond à l'[édition des abonnements](#abonnement-a-la-newsletter) du membre.
- avatar.html : correspond à l'[édition de l'avatar](#avatar) du membre.
- id_web.html : correspond à l'[édition de l'identité web](#identite-web) du membre.
- infos_perso.html : correspond à l'[édition des informations personnelles](#informations-personnelles) du membre.
- motdepasse.html : correspond à l'[édition du mot de passe](#mot-de-passe) du membre.
- motdepasse_perdu.html : correspond à la page pour retrouver le [mot de passe perdu](#mot-de-passe-perdu) du membre.
- mail_motdepasse_perdu.html : correspond à l'[email contenant le mot de passe perdu](#e-mail--de-rappel-de-mot-de-passe-perdu) envoyé au membre.

### Template

Le template du widget : `theme/fr/widgets/compte/tableau_bord/index.html`. Exemple :

```html
<!-- BEGIN:main -->


  <!-- BEGIN:intitule -->
  
  <h1>{intitule}</h1>
  
  <!-- END:intitule -->
  <div>
    <h2>Informations personnelles</h2>
    <div>
      <ul>
        <li><a href="infos_perso.html" title="Mes informations personnelles">Mes informations personnelles</a></li>
        <li><a href="motdepasse.html" title="Modifier mon mot de passe">Modifier mon mot de passe</a></li>
      </ul>
    </div>
  </div>
  <div>
    <h2>Identit&eacute; web</h2>
    <div>
      <ul>
        <li><a href="id_web.html" title="Mon identit&eacute; web">Mon identit&eacute; web</a></li>
        <li><a href="avatar.html" title="Mon avatar">Mon avatar</a></li>
      </ul>
    </div>
  </div>
  <div>
    <h2>Param&egrave;tres</h2>
    <div>
      <ul>
        <li><a href="abonnements.html" title="Abonnements">Abonnements</a></li>
      </ul>
    </div>
  </div> 
  
  <!-- BEGIN:ecommerce -->
  
  <div>
    <h2>Produits t&eacute;l&eacute;chargeables</h2>
    <div>
      <!-- BEGIN:produitstelecha -->
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <th scope="col" style="width: 60%">Intitul&eacute;</th>
          <th scope="col" style="width: 15%">Commande</th>
          <th scope="col" style="text-align: right; width: 25%">Statut</th>
        </tr>
        <!-- BEGIN:produit -->
        <tr>
          <td>{intitule_produit} - {intitule_variante} 
			<!-- BEGIN:reference -->
			<br /><em>Ref: {reference}</em>
            <!-- END:reference --></td>
          <td><a href="{lien_commande}" target="_blank" title="T&eacute;l&eacute;charger la commande">{numero_facture}</a></td>
          <td style="text-align: right;">
            <!-- BEGIN:attente -->
            En attente de paiement
            <!-- END:attente -->
            <!-- BEGIN:telecharge -->
            <a href="{lien_fichier}" target="_blank" title="T&eacute;l&eacute;charger le fichier">Télécharger</a>
            <!-- END:telecharge -->
            <!-- BEGIN:indisponible -->
            Indisponible
            <!-- END:indisponible -->
            
          </td>
        </tr>
        <!-- END:produit -->
      </table>
      <!-- END:produitstelecha -->
      <!-- BEGIN:noproduitstelecha -->
      Aucune produit virtuel acheté
      <!-- END:noproduitstelecha -->
    </div>
  </div> 
  
  <div>
    <h2>Commandes effectu&eacute;es </h2>
    <div>
      <!-- BEGIN:commandes -->
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <th scope="col" style="width: 19%">Num&eacute;ro</th>
          <th scope="col" style="width: 19%">Date</th>
          <th scope="col" style="width: 19%">&Eacute;tat</th>
          <th scope="col" style="width: 19%">Statut</th>
          <th scope="col" style="text-align: right; width: 9%">Total</th>
          <th scope="col" style="width: 15%">&nbsp;</th>
        </tr>
        <!-- BEGIN:commande -->
        <tr>
          <td>{numero_facture}</td>
          <td>{num_jour_creation}/{num_mois_creation}/{annee_creation}</td>
          <td>{etat}</td>
          <td>{paiement}</td>
          <td style="text-align: right;">{total_TTC}</td>
          <td style="text-align: right;"><a href="{lien_commande}" title="T&eacute;l&eacute;charger la commande">D&eacute;tail</a></td>
        </tr>
        <!-- END:commande -->
      </table>
      <!-- END:commandes -->
      <!-- BEGIN:nocommandes -->
      Aucune commande
      <!-- END:nocommandes -->
    </div>
  </div>
  
  <div>
    <h2>Points de fid&eacute;lit&eacute; : {solde_fidelite} points</h2>
    
      <!-- BEGIN:fidelite -->
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <th scope="col" style="width: 40%;text-align:left">Op&eacute;ration</th>
          <th scope="col" style="width: 20%">Date </th>
          <th scope="col" style="width: 20%">Quantit&eacute;</th>
          <th scope="col" style="width: 20%">Fin de validit&eacute;</th>
        </tr>
		
        <!-- BEGIN:operations -->
        <tr>
          <td>{commentaire|htmlentities}</td>
          <td>{num_jour_valeur}/{num_mois_valeur}/{annee_valeur}</td>
          <td>{qt}</td>
          <td>
          <!-- BEGIN:date_fin -->{num_jour_fin}/{num_mois_fin}/{annee_fin}<!-- END:date_fin -->
          <!-- BEGIN:nodate_fin -->-<!-- END:nodate_fin -->
          </td>
        </tr>
        <!-- END:operations -->
	
      </table>
      <!-- END:fidelite -->
	  
      <!-- BEGIN:nofidelite -->
      Aucun point de fid&eacute;lit&eacute;
      <!-- END:nofidelite -->
  </div>
  
  <!-- END:ecommerce -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    └── ecommerce     // Le contenu du bloc s'affiche si les fonctionnalités e-commerce sont activées.
        ├── commandes     // Le contenu du bloc s'affiche si le membre a déjà passé des commandes.
        │   └── commande     // Le contenu du bloc pour chaque commande passée par le membre.
        ├── nocommandes     // Le contenu du bloc s'affiche si le membre n'a jamais passé de commandes.
        ├── produitstelecha     // Le contenu du bloc s'affiche si le membre a passé au moins une commande de produit virtuel
        │   └── produit     // Le contenu du bloc s'affiche pour chaque produit virtuel à télécharger
        │       ├── attente     // Le contenu du bloc s'affiche si la commande est en attente de paiement
        │       ├── indisponible     // Le contenu du bloc s'affiche si la commande a été payée mais que le produit n'est plus disponible au téléchargement
        │       ├── telecharge     // Le contenu du bloc s'affiche si la commande a été payée et que le produit est disponible au téléchargement
        │       └── reference     // Le contenu du bloc s'affiche si la référence du produit virtuel à été renseignée
        ├── noproduitstelecha     // Le contenu du bloc s'affiche si le membre n'a passé aucune commande de produit virtuel
        ├── fidelite     // Le contenu du bloc s'affiche si le membre a déjà reçu de points de fidelité
        │   └── operations     // Le contenu du bloc s'affiche si le membre a déjà passé des commandes.
        │       ├── debit     // Le contenu du bloc s'affiche si l'operation est un débit.
        │       ├── credit     // Le contenu du bloc s'affiche si l'operation est un crédit.
        │       ├── date_fin     // Le contenu du bloc s'affiche si l'operation a une date de fin de validitié (ex : date de péremption des points ou date de fin de validité d'un bon de réduction).
        │       └── nodate_fin     // Le contenu du bloc s'affiche si l'operation n'a pas de date de fin de validitié
        └── nofidelite     // Le contenu du bloc s'affiche si le membre n'a jamais reçu de points de fidelité.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | client_id | Identifiant du membre. |
| main | num_client | Numéro de client du membre |
| main | nom_client | Nom du membre |
| main | prenom_client | Prénom du membre |
| main | genre_client | Civilité du membre |
| main | email_client | Adresse email du membre |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| commande | etat | Etat de la commande. |
| commande | numero_facture | Numéro de la commande |
| commande | paiement | Statut de la commande. Affiche en fonction de l'état : Payée ou A payer. |
| commande | total_TTC | Total TTC de la commande |
| commande | total_HT | Total HT de la commande |
| commande | lien_commande | Lien vers le fichier PDF du détail de la commande |
| commande | num_jour_creation | Affiche le numéro du jour de la date de la commande (01 - 31). |
| commande | jour_semaine_creation | Affiche le jour de la semaine de la date de la commande (lundi - dimanche). |
| commande | num_mois_creation | Affiche le numéro du mois de la date de la commande (01 - 12). |
| commande | mois_creation | Affiche le mois de la date de la commande (janvier - décembre). |
| commande | mois_abrev_creation | Affiche le mois de la date de la commande abrégé (jan - déc) |
| commande | annee_creation | Affiche l'année de la date de la commande (2010). |
| commande | minute_creation | Affiche les minutes de la date de la commande (00-59). |
| commande | heure_creation | Affiche l'heure de la date de la commande (00-23). |
| commande | seconde_creation | Affiche les secondes de la date de la commande (00-59). |
| commande | timestamp_creation | Affiche le timestamp de la date de la commande. |
| commande | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque fois. |
| commande | alterne | La balise affichera alternativement 1 ou 2. |
| commande | alterne_3 | La balise affichera alternativement 1,2 ou 3. |
| commande | alterne_4 | La balise affichera alternativement 1,2,3 ou 4. |
| commande | alterne_5 | La balise affichera alternativement 1,2,3,4 ou 5. |
| produit | commande_id | Numéro de commande concerné par le produit virtuel |
| produit | numero_facture | Numéro de facture concerné par le produit virtuel |
| produit | intitule_variante | Intitulé de la variante de produit virtuel |
| produit | intitule_produit | Intitulé du produit virtuel |
| produit | lien_commande | Lien vers le PDF de la commande |
| produit | fichier_id | Identifiant du fichier. |
| telecharge | lien_fichier | Lien vers le fichier à télécharger |
| reference | reference | Référence du produit virtuel |
| fidelite | solde_fidelite | Solde des points de fidélité. |
| operations | qt | Quantité de points crédités ou débités. La quantité est négative pour les débits. |
| operations | type | Affiche "credit" ou "debit". |
| operations | commentaire | Affiche le commentaire lié à l'opération. |
| operations | num_jour_valeur | Affiche le numéro du jour de la date de valeur de l'opération (01 - 31). |
| operations | jour_semaine_valeur | Affiche le jour de la semaine de la date de valeur de l'opération (lundi - dimanche). |
| operations | num_mois_valeur | Affiche le numéro du mois de la date de valeur de l'opération (01 - 12). |
| operations | mois_valeur | Affiche le mois de la date de valeur de l'opération (janvier - décembre). |
| operations | mois_abrev_valeur | Affiche le mois de la date de valeur de l'opération abrégé (jan - déc) |
| operations | annee_valeur | Affiche l'année de la date de valeur de l'opération (2010). |
| operations | minute_valeur | Affiche les minutes de la date de valeur de l'opération (00-59). |
| operations | heure_valeur | Affiche l'heure de la date de valeur de l'opération (00-23). |
| operations | seconde_valeur | Affiche les secondes de la date de valeur de l'opération (00-59). |
| operations | timestamp_valeur | Affiche le timestamp de la date de valeur de l'opération. |
| date_fin | num_jour_fin | Affiche le numéro du jour de la date de péremption des points (01 - 31). |
| date_fin | jour_semaine_fin | Affiche le jour de la semaine de la date de péremption des points (lundi - dimanche). |
| date_fin | num_mois_fin | Affiche le numéro du mois de la date de péremption des points (01 - 12). |
| date_fin | mois_fin | Affiche le mois de la date de péremption des points (janvier - décembre). |
| date_fin | mois_abrev_fin | Affiche le mois de la date de péremption des points abrégé (jan - déc) |
| date_fin | annee_fin | Affiche l'année de la date de péremption des points (2010). |
| date_fin | minute_fin | Affiche les minutes de la date de péremption des points (00-59). |
| date_fin | heure_fin | Affiche l'heure de la date de péremption des points (00-23). |
| date_fin | seconde_fin | Affiche les secondes de la date de péremption des points (00-59). |
| date_fin | timestamp_fin | Affiche le timestamp de la date de péremption des points. |


## Widget Comptes / Tableau de bord : Abonnement à la newsletter

**Ce template est utilisé pour afficher les préférences d'abonnement à la newsletter du site.**


### Template

Le template du widget : `theme/fr/widgets/compte/tableau_bord/abonnements.html`. Exemple :

```html
<!-- BEGIN:main -->


  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->
  <form method="post" action="">
    <fieldset>
    <legend>Mes abonnements</legend>
    <div>
      Inscrit à la Newsletter :
        <p><input type="radio" name="newsletter" id="newsletter_oui" value="1" {check_newsletter_oui} />
        <label for="newsletter_oui" style="display:inline;">Oui</label></p><p>
        <input type="radio" name="newsletter" id="newsletter_non" value="0" {check_newsletter_non} />
        <label for="newsletter_non" style="display:inline;">Non</label>
        </p>
      
    </div>
    </fieldset>
    <p><input type="submit" value="Valider" title="Valider"/>
    <input type="button" value="Annuler" title="Annuler" onclick="document.location.href='{baseLangue}/compte/'"/></p>
    <input type="hidden" name="act" value="update" />
    <input type="hidden" name="ctl" value="{ctl}"/>
  </form>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    └── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | check_newsletter_oui | Affiche la chaine `checked="checked"` si le membre est abonné à la newsletter |
| main | check_newsletter_non | Affiche la chaine `checked="checked"` si le membre n'est pas abonné à la newsletter |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |


## Widget Comptes / Tableau de bord : Avatar

**Ce template est utilisé pour afficher le paramétrage de l'avatar de l'internaute.**


### Template

Le template du widget : `theme/fr/widgets/compte/tableau_bord/avatar.html`. Exemple :

```html
<!-- BEGIN:main -->


  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->
  <!-- BEGIN:erreurs -->
  <div>
    <!-- BEGIN:erreur -->
    {erreur} <br />
    <!-- END:erreur -->
  </div>
  <!-- END:erreurs -->
  <form method="post" action="" enctype="multipart/form-data">
    <fieldset>
    <legend>Mon avatar</legend><img src="{avatar}" alt="Avatar" />
    <div> 
      <p>Nous vous conseillons une image (gif, jpeg, png) <strong> d'au moins </strong> 120 pixels de large et 120 pixels de hauteur. Elle sera redimensionn&eacute;e au besoin.</p>
      <p><label for="file_avatar">Votre avatar&nbsp;:</label>
        <input type="file" name="file_avatar" id="file_avatar" title="Uploader une image de votre ordinateur" />
      </p>
      <p>Vous pouvez aussi choisir d'utiliser une image d&eacute;j&agrave; en ligne &agrave; l'adresse web ci-dessous :</p>
      <p><label for="url_avatar">Votre avatar&nbsp;:</label>
        <input type="text" name="url_avatar" id="url_avatar" value="" title="Copier une image sur Internet" placeholder="http://www.monsiteweb.com/avatar.gif"/>
    </div>
    </fieldset>
    <p><input type="submit" value="Valider" title="Valider"/>
    <input type="button" value="Annuler" title="Annuler" onclick="document.location.href='{baseLangue}/compte/'"/>
    <input type="hidden" name="act" value="update" />
    <input type="hidden" name="ctl" value="{ctl}"/></p>
  </form>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    └── erreurs     // Ce bloc s'affiche si le formulaire contient des erreurs
        └── erreur     // Ce bloc s'affiche pour chaque erreur du formulaire
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | avatar | Affiche l'URL de l'avatar. |
| main | avatar_miniature | Affiche l'URL de la version miniature de l'avatar. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| erreur | erreur | Erreur du formulaire |


## Widget Comptes / Tableau de bord : Identité web

**Ce template est utilisé pour afficher le paramétrage du pseudo et du iste web de l'internaute.**


### Template

Le template du widget : `theme/fr/widgets/compte/tableau_bord/id_web.html`. Exemple :

```html
<!-- BEGIN:main -->


  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->
  <form method="post" action="">
    <fieldset>
    <legend>Mon identit&eacute; web</legend>
    <div>
      <p>
        <label for="pseudo">Mon pseudo :</label>
        <input type="text" name="pseudo" id="pseudo" value="{pseudo}"/>
      </p>
      <p>
        <label for="web">Mon site web :</label>
        <input type="text" name="web" id="web" value="{web}" placeholder="http://"/>
       </p> 
    </div>
    </fieldset>
    <p><input type="submit" value="Valider" title="Valider"/>
    <input type="button" value="Annuler" title="Annuler" onclick="document.location.href='{baseLangue}/compte/'"/></p>
    <input type="hidden" name="act" value="update" />
    <input type="hidden" name="ctl" value="{ctl}"/>
  </form>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    └── erreurs     // Ce bloc s'affiche si le formulaire contient des erreurs
        └── erreur     // Ce bloc s'affiche pour chaque erreur du formulaire
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | pseudo | Affiche le pseudo. |
| main | web | Affiche l'url du site internet. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| erreur | erreur | Erreur du formulaire |


## Widget Comptes / Tableau de bord : Informations personnelles

**Ce template est utilisé pour afficher le paramétrage informations personnelles de l'internaute.**


### Template

Le template du widget : `theme/fr/widgets/compte/tableau_bord/infos_perso.html`. Exemple :

```html
<!-- BEGIN:main -->


  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->
  <!-- BEGIN:erreurs -->
  <div>
    <!-- BEGIN:erreur -->
    {erreur} <br />
    <!-- END:erreur -->
  </div>
  <!-- END:erreurs -->
  <form method="post" action="">
    <fieldset>
    <legend>Mes informations personnelles</legend>
    <div>
        <div><p><label>Votre &ecirc;tes :</label> 
        <input type="radio" name="genre" id="insc_genreH" value="H" {checked_H}/>
        <label for="insc_genreH">un homme</label> 
        <input type="radio" name="genre" id="insc_genreF" value="F" {checked_F}/>
        <label for="insc_genreF">une femme</label></p>
        </div>
      <p>
        <label for="insc_nom">Votre nom :</label>
        <input type="text" name="nom" id="insc_nom" value="{nom}"/>
      </p>
      <p>
        <label for="insc_prenom">Votre pr&eacute;nom :</label>
        <input type="text" name="prenom" id="insc_prenom" value="{prenom}"/>
      </p>
      <p>
        <label for="insc_email">Votre adresse email :</label>
        <input type="text" name="email" id="insc_email" value="{email}"/>
      </p>
    </div>
    </fieldset><p>
    <input type="submit" value="Valider" title="Valider"/>
    <input type="button" value="Annuler" title="Annuler" onclick="document.location.href='{baseLangue}/compte/'"/></p>
    <input type="hidden" name="act" value="update" />
    <input type="hidden" name="ctl" value="{ctl}"/>
  </form>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    └── erreurs     // Ce bloc s'affiche si le formulaire contient des erreurs
        └── erreur     // Ce bloc s'affiche pour chaque erreur du formulaire
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | nom | Affiche le nom du membre. |
| main | prenom | Affiche le prénom du membre. |
| main | genre | Affiche "H" pour un homme et "F" pour une femme. |
| main | email | Affiche l'adresse mail du membre. |
| main | checked_F | Affiche checked="checked" si c'est une femme |
| main | checked_H | Affiche checked="checked" si c'est un homme |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| erreur | erreur | Erreur du formulaire |


## Widget Comptes / Tableau de bord : Mot de passe

**Ce template est utilisé pour afficher le paramétrage du mote de passe de l'internaute.**


### Template

Le template du widget : `theme/fr/widgets/compte/tableau_bord/motdepasse.html`. Exemple :

```html
<!-- BEGIN:main -->


  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->
  <!-- BEGIN:erreurs -->
  <div>
    <!-- BEGIN:erreur -->
    {erreur} <br />
    <!-- END:erreur -->
  </div>
  <!-- END:erreurs -->
  <form method="post" action="">
    <fieldset>
    <legend>Modifier mon  mot de passe</legend>
    <div>
      <p>
        <label for="insc_mdp">Mot de passe actuel :</label>
        <input type="password" name="actu" id="insc_mdp" value=""/>
      </p>
      <p>
        <label for="insc_mdp2">Nouveau mot de passe (6 à 32 caractères) :</label>
        <input type="password" name="mdp" id="insc_mdp2" value=""/>
      <p>
        <label for="insc_mdp_confirm">Confirmation :</label>
        <input type="password" name="mdp_confirm" id="insc_mdp_confirm" value=""/>
      </p>
    </div>
    </fieldset>
   <p> <input type="submit" value="Valider" title="Valider"/>
    <input type="button" value="Annuler" title="Annuler" onclick="document.location.href='{baseLangue}/compte/'"/></p>
    <input type="hidden" name="act" value="update" />
    <input type="hidden" name="ctl" value="{ctl}"/>
  </form>

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    └── erreurs     // Ce bloc s'affiche si le formulaire contient des erreurs
        └── erreur     // Ce bloc s'affiche pour chaque erreur du formulaire
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| erreur | erreur | Erreur du formulaire |


## Widget Comptes / Tableau de bord : Mot de passe perdu

**Ce template est utilisé pour afficher le formulaire de récupération de mot de passe perdu.**


### Template

Le template du widget : `theme/fr/widgets/compte/tableau_bord/motdepasse_perdu.html`. Exemple :

```html
<!-- BEGIN:main -->


  <!-- BEGIN:form -->
  <!-- BEGIN:erreurs -->
  <div>
    <!-- BEGIN:erreur -->
    {erreur} <br />
    <!-- END:erreur -->
  </div>
  <!-- END:erreurs -->
  <form method="post" action="">
    <fieldset>
    <legend>Mot de passe perdu ?</legend>
    <div>
      <p>
        <label for="email">Votre e-mail :</label>
        <input type="text" name="email" id="email" value="{email}"/>
      </p>
    </div>
    </fieldset>
    <p><input type="submit" value="Valider" title="Valider"/>
    <input type="button" value="Annuler" title="Annuler" onclick="document.location.href='{baseLangue}/'"/></p>
    <input type="hidden" name="act" value="send" />
    <input type="hidden" name="ctl" value="{ctl}"/>
  </form>
  <!-- END:form -->
  <!-- BEGIN:message -->
  <p>Vous allez recevoir dans quelques instants un email contenant vos identifiants de connection à l'adresse indiquée.</p>
  <!-- END:message -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── form     // Le contenu du bloc s'affiche avant la validation du formulaire.
    │   └── erreurs     // Ce bloc s'affiche si le formulaire contient des erreurs
    │       └── erreur     // Ce bloc s'affiche pour chaque erreur du formulaire
    └── message     // Ce bloc s'affiche après une validation sans erreurs du formulaire.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| form | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| form | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| form | email | Affiche l'email précédemment saisi. |
| erreur | erreur | Erreur du formulaire |


## Widget Comptes / Tableau de bord : E-mail de rappel de mot de passe perdu

**Ce template est utilisé par le mail de rappel de mot de passe perdu.**


### Template

Le template du widget : `theme/fr/widgets/compte/tableau_bord/mail_motdepasse_perdu.html`. Exemple :

```html
<!-- BEGIN:main -->
Les informations nécessaires pour vous identifier sur le site de {site_nom} :
 - email : {email}
 - mot de passe : {motdepasse}
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | email | Affiche l'email du membre |
| main | motdepasse | Affiche le mot de passe du membre |


## Widget Comptes / Tableau de bord : E-mail récompense bon de fidélité

**Ce template est utilisé par le mail informant les clients de l'obtention d'un bon de réduction grâce à leurs points de fidélité.**


### Template

Le template du widget : `theme/fr/widgets/compte/tableau_bord/mail_bon_reduction.html`. Exemple :

```html
<!-- BEGIN:main -->
Bonjour {prenom} {nom},<br />
<br />
Grâce à vos points de fidélité, vous avez obtenu un bon de réduction d'une valeur
de {remise} {devise} pour tout achat d'au moins {seuil} {devise}. Ce bon est
valable jusqu'au {num_jour_fin}/{num_mois_fin}/{annee_fin}.<br />
<br />
Pour cela, utilisez le code : <br /><p style=" font-size: 1.5em;"><a href="http://{domaine}/">{code_bon}</a></p>
<br />
Cordialement,<br />
L'équipe du site &quot;{site_nom}&quot;
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | nom | Affiche le nom du membre. |
| main | prenom | Affiche le prénom du membre. |
| main | remise | Affiche la remise du bon de réduction. |
| main | devise | Code de la devise (ex : "EUR" pour euro) |
| main | seuil | Affiche le seuil d'utilisation du bon de réduction. |
| main | code_bon | Affiche le code du bon de réduction. |
| main | num_jour_fin | Affiche le numéro du jour de fin de validité du bon. |
| main | num_mois_fin | Affiche le numéro du mois de fin de validité du bon. |
| main | annee_fin | Affiche l'année de fin de validité du bon. |


## Widget Comptes / Tableau de bord : Clôture de compte

**Ce template est utilisé pour afficher le formulaire de clôture de compte.**


### Template

Le template du widget : `theme/fr/widgets/compte/tableau_bord/cloture.html`. Exemple :

```html
<!-- BEGIN:main -->

<!-- BEGIN:intitule -->
<h1>{intitule}</h1>
<!-- END:intitule -->

<!-- BEGIN:form -->
<!-- BEGIN:erreurs -->
<div>
	<!-- BEGIN:erreur -->
	{erreur} <br />
	<!-- END:erreur -->
</div>
<!-- END:erreurs -->
<form method="post" action="">
	<fieldset>
		<legend>Cl&ocirc;ture de compte</legend>
		<div>
			<p>
				<label for="email">Votre e-mail :</label>
				<input type="text" name="email" id="email" value="{email}"/>
			</p>
		</div>
		<div>
			<p>
				<label for="mdp">Votre mot de passe :</label>
				<input type="text" name="mdp" id="mdp" value=""/>
			</p>
		</div>
	</fieldset>
	<p><input type="submit" value="Supprimer mon compte" title="Supprimer mon compte"/></p>
	<input type="hidden" name="act" value="delete" />
	<input type="hidden" name="ctl" value="{ctl}"/>
</form>
<!-- END:form -->
<!-- BEGIN:message -->
<p>Votre demande de suppression de site a bien &eacute;t&eacute; reçue</p>
<!-- END:message -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── form     // Le contenu du bloc s'affiche avant la validation du formulaire.
    │   └── erreurs     // Ce bloc s'affiche si le formulaire contient des erreurs
    │       └── erreur     // Ce bloc s'affiche pour chaque erreur du formulaire
    └── message     // Ce bloc s'affiche après une validation sans erreurs du formulaire.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| form | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| form | email | Affiche l'email précédemment saisi. |
| erreur | erreur | Erreur du formulaire |

