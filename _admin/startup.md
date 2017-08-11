---
layout: page
title: Configurer un nouvel environnement
---

Pour plus d'information cf. [Onboard Your Organization on Microsoft Dynamics CRM Online](https://mbs.microsoft.com/customersource/northamerica/CRM/learning/documentation/MovingForwardCRMOnline)

## Créer un ou des rôles de sécurité
Créer un rôle de sécurité en copiant un rôle existant.

## Ajouter des utilisateurs et leur assigner un rôle de sécurité
Chaque utilisateur doit avoir un rôle de sécurité pour accéder au CRM online.

1. Cliquer sur **Paramètres > Sécurité > Utilsateurs**.
2. Dans la liste, sélectionner l'utilisateur ou les utilisateurs à qui vous voulez
assigner un role.
3. Cliquer sur **Gérer les rôles**.
Seuls les roles de sécurité disponibles pour les utilisateurs de cette business
unit sont affichés.
4. Dans la boite de dialogue, sélectionner le role de securité les roles et cliquer
sur OK.

## Configurer le domaine de l'organisation
A la création d'une instance CRM, les usernames et adresses email contiennent
l'extension .onmicrosoft.com (Ex.user@contoso.onmicrosoft.com ou user@contoso.crm.dynamics.com)
par défaut. Vous pouvez utiliser votre propre nom de domaine. Pour cela, il faut
faire les modifications dans Office 365:

1. Se logguer au **Portail office** avec son compte admin (<https://portal.office.com>).
2. Cliquer sur **Paramètres > Domaines** dans le menu gauche.
3. Cliquer sur **Ajouter un domaine**.
4. Entrer le nom de domaine.
5. Pour vérifier la propriété dun nom de domaine, vous devez ajouter un enregistrement
DNS à votre serveur DNS.
6. Cliquer sur Vérifier.
7. Maintenant vous verrez ce domaine qd vous configurerez des comptes utilisateurs.

## Configurer l'organisation
* Ajouter des divisions (**Paramètres > Sécurité > Divisions**),
* Créer des sites (**Paramètres > Gestion d'entreprise > Sites**),
* Ajouter des ressources si nécessaire (**Paramètres > Gestion d'entreprise > Groupes de ressources**),
* Créer des équipes (**Paramètres > Sécurité > Equipes**).

## Configurer votre application mobile


## Configurer votre messagerie
[Utiliser outlook comme messagerie]({{ site.baseurl }}{% link _admin/outlook.md %})

## Confugurer la gestion de documents avec Sharepoint
[Utiliser sharepoint]({{ site.baseurl }}{% link _admin/sharepoint.md %})

## Configurer Skype (optionnel)

Dans **Paramètres > Administration > Paramètres système**, dans l'onglet Général sélectionner Skype entreprise comme fournisseur de téléphonie, définir l'option de présence de messagerie instantanée sur Oui ou Non.

Pour l'option de Présence de Skype, les utilisateurs de Microsoft doivent avoir ajouté <http://\*.dynamics.com> à la liste des sites approuvés de leur navigateur Web dans les options Internet Explorer (pas pris en charge par Google Chrome, Firefox, Safari).

Voix sur IP avec le plan Office Entreprise E5 (installation d'un équipement d'interconnection positionné dans votre entreprise en complément ou remplacement de votre pabx) + fonction de sms (gestion et envoie de sms sur canal sms).

## Configurer Yammer (optionnel)

Yammer doit être activer dans Office 365

Dans l'admin de Office 365, aller dans Tableau de bord, sélectionner services inclus, cliquer sur oui activer Yammer pour mon réseau. Vérifier votre domanine et cliquer sur Activer Yammer Entreprise.

Pour remplacer l'onglet publications par les publications Yammer

Dans Paramètres > Administration > Configuration de Yammer, autoriser Microsoft Dynamics CRM à se connecter à yammer

Dans Paramètres > Configuration des flux, spécifier les entité CRM qui sont activées pour une utilisation avec Yammer.

Dans Paramètres > Administration > Règles des flux d'activités, spécifier les éléments qui déclenchent des publications automatiques dans le fil d'actualités de Yammer.

## Importer vos données

## Personnaliser votre système
