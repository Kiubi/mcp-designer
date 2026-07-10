# Modules

## Widget Modules / Formulaire de contact

**Afficher le formulaire de contact.**
Si l'utilisateur ne rempli pas correctement tous les champs, le formulaire se réaffichera avec un message d'erreur indiquant quels champs sont manquants ou incorrects. Le formulaire sera pré-rempli avec les informations précédemment saisies.
Si toutes les informations obligatoires ont été saisies, un email sera envoyé au destinataire et la page se rechargera et n'affichera plus le formulaire, mais seulement le message de confirmation.

Contrairement aux autres widgets, le Formulaire de contact est composé de 2 fichiers : 

- index.html : correspond au formulaire de contact à proprement dit.
- mail.html: correspond à l'email (au format texte) envoyé.

### Template

Le template du widget : `theme/fr/widgets/communication/contact/index.html`. Exemple :

```html
<!-- BEGIN: main -->

<article id="contact_form">
  <!-- BEGIN: intitule -->
  
  <h1>{intitule_form}</h1>
  
  <!-- END: intitule -->
  <!-- BEGIN:contact -->
  <form method="post" action="#contact_form" >
    <!-- BEGIN:erreurs -->
    <div>{erreurs}</div>
    <!-- END:erreurs -->
      <!-- BEGIN: champ -->
      <p><label for="form_contact{id}">{intitule} 
	    <!-- BEGIN:obligatoire -->*<!-- END:obligatoire --> :</label>
        <!-- BEGIN: text -->
          <input type="text" name="{name}" id="form_contact{id}" value="{valeur}" />
        <!-- END: text -->
        <!-- BEGIN: textarea -->
          <textarea name="{name}" rows="10" id="form_contact{id}"   >{valeur}</textarea>
        <!-- END: textarea -->
        <!-- BEGIN: civilite -->
        <div>
          <label for="form_contact_m{id}">
          <input name="{name}" type="radio" id="form_contact_m{id}" value="M" {checked_m} />
          M</label>
          <label for="form_contact_mme{id}">
          <input  name="{name}" type="radio" id="form_contact_mme{id}" value="Mme" {checked_mme} />
          Mme</label>
          <label for="form_contact_mlle{id}">
          <input name="{name}" type="radio" id="form_contact_mlle{id}" value="Mlle" {checked_mlle} />
          Mlle</label>
        </div>
        <!-- END: civilite -->
      </p>
      <!-- END: champ -->
    <p><input type="submit" name="Submit" value="Envoyer" /></p>
    <p><strong>* champs obligatoires </strong></p>
    <div>
      <input type="hidden" name="act" value="send" />
      <input type="hidden" name="ctl" value="{ctl}" />
    </div>
  </form>
  <!-- END:contact -->
  <!-- BEGIN:message -->
  {message}
  <!-- END:message -->

<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché.
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── contact     // Le bloc contient le formulaire de contact. Il s'affiche tant que le formulaire n'est pas validé.
    │   └── erreurs     // Le contenu du bloc s'affiche s'il y a des erreurs à la soumission du formulaire.
    ├── champ     // Le contenu du bloc s'affiche pour chaque champ du formulaire de contact.
    │   ├── obligatoire     // Le contenu du bloc s'affiche si le champ est obligatoire.
    │   ├── text     // Le contenu du bloc s'affiche si le champ est de type "texte", "que des chiffres", "que des lettres", "email"
    │   ├── textarea     // Le contenu du bloc s'affiche si le champ est de type "texte multiligne"
    │   └── civilite     // Le contenu du bloc s'affiche si le champ est de type "civilite"
    └── message     // Le contenu du bloc s'affiche à la place du formulaire de contact (bloc "contact") si tous les éléments obligatoires ont bien été fournis et que la demande de contact a été envoyée.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| erreurs | erreurs | Affiche toutes les erreurs en une fois. |
| champ | type | Type du champ. Les valeurs possibles sont : "text", "textarea", "chiffres", "lettres", "email" et "civilite". |
| champ | id | Id du champ. |
| champ | obligatoire | Affiche obligatoire si le champ est désigné comme tel. Sinon n'affiche rien. |
| champ | intitule | Intitulé du champ. |
| champ | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque champ. |
| champ | valeur | Cette balise sert à réafficher la valeur précédemment saisie dans le formulaire en cas d'erreur. |
| champ | name | Nom du champ dans le formulaire (attribut name de la balise input) |
| civilite | checked_m | Affiche checked="checked" si la civilité "M" avait été choisie. Sinon n'affiche rien. |
| civilite | checked_mme | Affiche checked="checked" si la civilité "Mme" avait été choisie. Sinon n'affiche rien. |
| civilite | checked_mlle | Affiche checked="checked" si la civilité "Mlle" avait été choisie. Sinon n'affiche rien. |
| message | message | Message de confirmation d'envoi de la demande de contact. Ce message est personnalisable dans "Mon site / Communication / Formulaire de contact". |


## Widget Modules / Formulaire de contact : E-mail de confirmation

**Template du mail envoyé par le formulaire de contact**


### Template

Le template du widget : `theme/fr/widgets/communication/contact/mail.html`. Exemple :

```html
<!-- BEGIN: main -->
  <!-- BEGIN: champ -->
  {intitule} : {valeur}
  <!-- END: champ -->
  <!-- BEGIN: infos_sup -->
  Informations supplementaires : {infos_connection}
  <!-- END: infos_sup -->
<!-- END: main -->
```
### Arborescence des blocs

```

```
### Balises 

Bloc|Balise|Description
---|---|---
| champ | intitule | Intitulé du champ. |
| champ | valeur | Affiche la valeur du champ saisi dans le formulaire de contact. |
| infos_sup | infos_connection | Affiche l'adresse IP et l'hôte de l'expéditeur de l'email. |


## Widget Modules / Newsletter

**Affiche le formulaire d'inscription/désinscription à la newsletter.**
Seul l'email peut être demandé. Si l'utilisateur ne remplit par correctement ce champ, le formulaire se réaffichera avec un message. Le formulaire sera aussi rempli avec les informations précédemment saisies.
Si toutes les informations obligatoires ont été saisies, la page se rechargera et n'affichera plus le formulaire, mais seulement un message de confirmation.
Note : **Kiubi ne permet pas d'envoyer des newsletters**. Seule l'inscription (ou la désinscription) est possible ainsi que l'export des abonnés au format .xls.

### Template

Le template du widget : `theme/fr/widgets/communication/newsletter/index.html`. Exemple :

```html
<!-- BEGIN:main -->
<div id="post_newsletter">
  <!-- BEGIN:intitule -->
  <h1>{intitule}</h1>
  <!-- END:intitule -->
  <div>
    <!-- BEGIN:form -->
    <!-- BEGIN:erreur -->
    <div>{erreur}</div>
    <!-- END:erreur -->
    <form action="#post_newsletter" method="post">
      <input type="text" name="email" value="{email}" id="emailnewsletter" placeholder="Votre email"/>
      <p>
        <input type="radio" name="opt" value="in" id="opt_in" {checked_in}/> <label for="opt_in">S'inscrire</label>   
        <input type="radio" name="opt" value="out" id="opt_out" {checked_out}/> <label for="opt_out">Se désinscrire</label>
      </p>
      <input type="submit" value="ok" />
      <input type="hidden" name="act" value="send" />
      <input type="hidden" name="ctl" value="{ctl}"/>
    </form>
    <!-- END:form -->
    <!-- BEGIN:validation -->
    {message}
    <!-- END:validation -->
  </div>
</div>
<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché.
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── form     // Le bloc contient le formulaire.
    │   └── erreur     // Le contenu du bloc s'affiche en cas d'erreur dans l'inscription ou la désinscription. L'email de la personne peut être invalide ou bien la personne cherche à s'inscrire alors qu'elle est déjà inscrite.
    └── validation     // Le contenu du bloc s'affiche à la place du formulaire (bloc "form") si le champ email a été rempli et que l'inscription ou la désinscription s'est bien passée.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| form | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| form | email | Cette balise sert à réafficher la valeur précédemment saisie dans le formulaire en cas d'erreur. |
| form | checked_in | Affiche checked="checked" si l'utilisateur voulait s'inscrire. Sinon n'affiche rien. |
| form | checked_out | Affiche checked="checked" si l'utilisateur voulait se désinscrire. Sinon n'affiche rien. |
| erreur | erreur | Message d'erreur. Ce message est personnalisable dans "Mon site / Communication / Abonnés à la Newsletter" (voir champs "Si déjà inscrit", "Si pas encore inscrit"). |
| validation | message | Message de confirmation. Ce message est personnalisable dans "Mon site / Communication / Abonnés à la Newsletter" (voir champs "Si inscription validée", "Si désinscription validée"). |


## Widget Modules / Syndication

**Affiche les liens vers les derniers billets du Blog sous forme de flux (RSS ou ATOM) et les intègre dans la page pour être reconnus automatiquement par les navigateurs.**
Par défaut, seuls les liens du flux de la catégorie courante du Blog sont affichés.

### Template

Le template du widget : `theme/fr/widgets/communication/syndication_blog/index.html`. Exemple :

```html
<!-- BEGIN:main -->

  <!-- BEGIN: intitule -->
  <h1>{intitule}</h1>
  <!-- END: intitule -->
  <ul>
  <!-- BEGIN:flux -->
    <li><a href="{lien_flux}" title="{intitule_flux|htmlentities}">{intitule_flux}</a></li>
  <!-- END:flux -->
  </ul>
  <!-- BEGIN:noflux -->
  Pas de flux disponible
  <!-- END:noflux -->

<!-- END:main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché.
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── flux     // Le contenu du bloc s'affiche pour chaque flux.
    └── noflux     // Le contenu du bloc s'affiche s'il n'y a aucun flux.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_format | Affiche les format de flux séléctionnés séparés par un virgule (rss2.0 ou atom) |
| intitule | intitule | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| flux | lien_flux | URL vers le flux de syndication. |
| flux | intitule_flux | Intitulé du flux qui reprends le format du flux ("ATOM" ou "RSS 2.0"). |


## Widget Modules / Dismoi?

**Afficher un formulaire dismoi. Dismoi? est le module de gestion de formulaires avancés.**


### Template

Le template du widget : `theme/fr/widgets/communication/formulaires/index.html`. Exemple :

```html
<!-- BEGIN: main -->

  <!-- BEGIN: intitule -->  
  <h1>{intitule_form}</h1>
  <!-- END: intitule -->
  
  <!-- BEGIN:form -->
  <form method="post" action="#multi_form" enctype="multipart/form-data">
    <!-- BEGIN:erreurs -->
    <div>{erreurs}</div>
    <!-- END:erreurs -->
    
    <!-- BEGIN:fieldset -->
    <!-- BEGIN:debut_fieldset -->
    <fieldset>
      <legend>{legend}</legend>
      <div>
      <!-- END:debut_fieldset -->
        <!-- BEGIN: champ -->
        <span class="{erreur}">
          <label for="multi_form{id}">{intitule}
          <!-- BEGIN:obligatoire -->*<!-- END:obligatoire --> :</label> 
          <!-- BEGIN: text -->
            <input type="text" name="{name}" id="multi_form{id}" value="{valeur}" />
          <!-- END: text -->
          <!-- BEGIN: textarea -->
            <textarea name="{name}" rows="10" id="multi_form{id}" >{valeur}</textarea>
          <!-- END: textarea -->
          <!-- BEGIN: civilite -->          
            <div>
              <label for="multi_form_m{id}">
                <input name="{name}" type="radio" id="multi_form_m{id}" value="M" {checked_m} />
                M</label>
              <label for="multi_form_mme{id}">
                <input  name="{name}" type="radio" id="multi_form_mme{id}" value="Mme" {checked_mme} />
                Mme</label>
              <label for="multi_form_mlle{id}">
                <input name="{name}" type="radio" id="multi_form_mlle{id}" value="Mlle" {checked_mlle} />
                Mlle</label>
            </div>
          <!-- END: civilite -->
          <!-- BEGIN: select -->
            <select name="{name}" id="multi_form{id}">
            <!-- BEGIN:option-->
              <option value="{value}" {selected}>{label}</option>
            <!-- END:option-->
            </select>
          <!-- END: select -->
          <!-- BEGIN: checkbox -->
            <!-- BEGIN:option-->
              <input name="{name}" id="multi_form{id}_{value}" type="checkbox"  value="{value}" {checked} />
              <label for="multi_form{id}_{value}">{label}</label>
            <!-- END:option-->
          <!-- END: checkbox -->
          <!-- BEGIN: upload -->
            <input type="file" name="{name}" id="multi_form{id}" />
          <!-- END: upload -->
          <!-- BEGIN: aide -->
            <p>{aide}</p>
            <!-- END: aide -->
        </span>
        <!-- END: champ -->
      <!-- BEGIN:fin_fieldset -->
      </div>
    </fieldset>
    <!-- END:fin_fieldset -->
    <!-- END:fieldset -->



    <!-- BEGIN:consentement -->
	  <p class="{erreur}">
		<label for="consentement_ok">
		  <input name="consentement_ok" id="consentement_ok" type="checkbox" value="1" {check_consentement}/>
		  J'accepte l'utilisation de mes donn&eacute;es personnelles
		</label>
	  </p>
	  <p>{finalites}</p>
    <!-- END:consentement -->

    <!-- BEGIN:captcha -->
      <fieldset>
      <legend>Anti-spam :</legend>
      <p class="{erreur}">
		  <label for="captcha[{captcha_id}]">{captcha_question}</label>
          <input name="captcha[{captcha_id}]"  id="captcha[{captcha_id}]" type="text" />
	  </p>
      </fieldset>
    <!-- END: captcha -->
    <p><input type="submit" name="Submit" value="Envoyer" /></p>
    <p><strong>* champs obligatoires</strong></p>
    <div>
      <!-- BEGIN: hidden -->
      <input type="hidden" name="{name}" value="{valeur}" />
      <!-- END: hidden -->
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
  
<!-- END: main -->
```
### Arborescence des blocs

```
└── main     // Bloc racine tout le temps affiché
    ├── intitule     // Ne s'affiche que si l'intitulé du widget est rempli.
    ├── message     // Ce bloc s'affiche après la soumission du formulaire, si un message est renseigné
    └── form     // Ce bloc s'affiche si le formulaire n'a pas été soumis
        ├── fieldset     // Ce bloc s'affiche pour chaque fieldset
        │   ├── debut_fieldset     // Ce bloc s'affiche à chaque début de fieldset.
        │   ├── champ     // Ce bloc s'affiche pour chaque champ du formulaire
        │   │   ├── aide     // Le contenu du bloc s'affiche si une aide textuelle pour le champ existe
        │   │   ├── checkbox     // Le contenu du bloc s'affiche si le champ est de type "checkbox"
        │   │   │   └── option     // Ce bloc s'affiche pour chaque valeur possible
        │   │   ├── radio     // Le contenu du bloc s'affiche si le champ est de type "radio"
        │   │   │   └── option     // Ce bloc s'affiche pour chaque valeur possible
        │   │   ├── civilite     // Le contenu du bloc s'affiche si le champ est de type "civilite"
        │   │   ├── text     // Le contenu du bloc s'affiche si le champ est de type "text", "chiffres", "lettres" ou "email"
        │   │   ├── textarea     // Le contenu du bloc s'affiche si le champ est de type "textarea"
        │   │   ├── date     // Le contenu du bloc s'affiche si le champ est de type "date"
        │   │   ├── datetime     // Le contenu du bloc s'affiche si le champ est de type "date et heure"
        │   │   ├── upload     // Le contenu du bloc s'affiche si le champ est de type "upload"
        │   │   ├── select     // Le contenu du bloc s'affiche si le champ est de type "select"
        │   │   │   └── option     // Ce bloc s'affiche pour chaque valeur possible
        │   │   └── obligatoire     // Ce bloc s'affiche si le champ est obligatoire
        │   └── fin_fieldset     // Ce bloc s'affiche à chaque fin de fieldset.
        ├── hidden     // Le contenu du bloc s'affiche pour chaque de type "caché".
        ├── erreurs     // Ce bloc s'affiche si le formulaire contient des erreurs
        ├── captcha     // Ce bloc s'affiche si le formulaire est protégé par un captcha
        └── consentement     // Ce bloc s'affiche si le recueilement du consentement est activé.
```
### Balises 

Bloc|Balise|Description
---|---|---
| main | form_id | Identifiant unique du formulaire |
| main | serial | Identifiant unique du widget dans la page. Permet d'identifier de manière unique le widget dans la page. |
| main | ctl | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | jeton | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | action | Cette balise est présente dans certains widgets qui utilisent un formulaire. Elle y a alors une utilité technique, sans elle le formulaire ne fonctionnera pas. |
| main | widget_modele | Nom du modèle utilisé par le widget (vide pour le modèle de base). |
| main | widget_form_api | Identifiant API Front-office du formulaire |
| intitule | intitule_form | Cet intitulé est paramétrable lors de l'édition d'un widget dans la gestion de l'Apparence de la Console d'administration de Kiubi. |
| message | message | Message de remerciement |
| message | alias_* | Affiche la valeur d'un champ en fonction de son alias. Le nom de la balise est construit à partir de l'alias qui est tranformé en minuscule et dont tous les caractères spécaux ont été filtrés (cf filtre sanitize) |
| debut_fieldset | legend | Intitulé du fieldset |
| champ | compteur | La balise affichera un compteur commençant à 1 et qui sera incrémenté de 1 à chaque champ. |
| champ | name | Nom du champ dans le formulaire (attribut name de la balise input) |
| champ | id | Id du champ. |
| champ | intitule | Intitulé du champ. |
| champ | type | Type du champ. Les valeurs possibles sont : "text", "textarea", "chiffres", "lettres", "email", "checkbox", "select", "civilite", "date", "datetime", "radio", "departements", "regions", "pays", "hidden". |
| champ | alias | Alias du champ. |
| champ | obligatoire | Affiche obligatoire si le champ est désigné comme tel. Sinon n'affiche rien. |
| champ | erreur | La balise affichera 'erreur' si le champ est en erreur lors de la validation |
| aide | aide | Aide textuelle du champ |
| option | checked | Cette balise sert à reselectionner la valeur précédemment choisie dans le formulaire en cas d'erreur. |
| option | value | Valeur du champ checkbox |
| option | label | Label de la valeur |
| option | checked | Cette balise sert à reselectionner la valeur précédemment choisie dans le formulaire en cas d'erreur. |
| option | value | Valeur du champ radio |
| option | label | Label de la valeur |
| civilite | checked_m | Affiche checked="checked" si la civilité "M" avait été choisie. Sinon n'affiche rien. |
| civilite | checked_mme | Affiche checked="checked" si la civilité "Mme" avait été choisie. Sinon n'affiche rien. |
| civilite | checked_mlle | Affiche checked="checked" si la civilité "Mlle" avait été choisie. Sinon n'affiche rien. |
| text | valeur | Valeur du champ texte |
| textarea | valeur | Valeur du champ textearea |
| date | valeur | Valeur du champ date |
| datetime | valeur | Valeur du champ datetime |
| option | checked | Cette balise sert à reselectionner la valeur précédemment choisie dans le formulaire en cas d'erreur. |
| option | selected | Cette balise sert à reselectionner la valeur précédemment choisie dans le formulaire en cas d'erreur. |
| option | value | Cette balise sert à réafficher la valeur précédemment saisie dans le formulaire en cas d'erreur. |
| option | label | Label de la valeur |
| hidden | name | Nom du champ dans le formulaire (attribut name de la balise input) |
| hidden | valeur | Valeur du champ caché |
| erreurs | erreurs | Erreur(s) rencontrée(s) |
| captcha | captcha_question | Question du captcha |
| captcha | captcha_id | Jeton du captcha |
| captcha | erreur | La balise affichera 'erreur' si le champ est en erreur lors de la validation |
| consentement | finalites | Affiche les traitements et finalité de la collecte des données personnelles. |
| consentement | check_consentement | Renvoi checked="checked" pour accepter le recueil des données. |
| consentement | erreur | La balise affichera 'erreur' si le champ est en erreur lors de la validation |


## Widget Modules / Dismoi? : E-mail de confirmation

**Template du mail envoyé par le formulaire dismoi.**


### Template

Le template du widget : `theme/fr/widgets/communication/formulaires/mail.html`. Exemple :

```html
<!-- BEGIN: main -->
  <!-- BEGIN: champ -->
  {intitule} : {valeur}
  <!-- END: champ -->
  <!-- BEGIN: infos_sup -->
  Informations supplementaires : {infos_connection}
  <!-- END: infos_sup -->
<!-- END: main -->
```
### Arborescence des blocs

```

```
### Balises 

Bloc|Balise|Description
---|---|---
| champ | intitule | Intitulé du champ. |
| champ | valeur | Affiche la valeur du champ saisi dans le formulaire de dismoi. |
| infos_sup | infos_connection | Affiche l'adresse IP et l'hôte de l'expéditeur de l'email. |

