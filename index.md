---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Démarrer
---

Vous avez acheté un abonnement à Microsoft Dynamics 365 Online. Voici les étapes
à suivre pour configurer votre nouvel environnement.

> **Conseil:** 🤔 Vous pouvez utiliser n'importe quel navigateur mais Internet
explorer reste le navigateur recommandé.

> **Conseil:** 🤔 Pour vous connecter, allez sur <https://portal.office.com> ou
accédez directement à votre crm https://\<organization\>.crm4.dynamics.com

## Comment configurer un nouvel environnement?

Réf: [Onboard Your Organization on Microsoft Dynamics CRM Online](https://mbs.microsoft.com/customersource/northamerica/CRM/learning/documentation/MovingForwardCRMOnline)

### Créer un ou des rôles de sécurité
Créer un rôle de sécurité en copiant un rôle existant.

### Ajouter des utilisateurs et leur assigner un rôle de sécurité
Chaque utilisateur doit avoir un rôle de sécurité pour accéder au CRM online.

1. Cliquer sur **Paramètres > Sécurité > Utilsateurs**.
2. Dans la liste, sélectionner l'utilisateur ou les utilisateurs à qui vous voulez
assigner un role.
3. Cliquer sur **Gérer les rôles**.
Seuls les roles de sécurité disponibles pour les utilisateurs de cette business
unit sont affichés.
4. Dans la boite de dialogue, sélectionner le role de securité les roles et cliquer
sur OK.

### Configurer le domaine de l'organisation
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

### Configurer l'organisation
* Ajouter des divisions (**Paramètres > Sécurité > Divisions**),
* Créer des sites (**Paramètres > Gestion d'entreprise > Sites**),
* Ajouter des ressources si nécessaire (**Paramètres > Gestion d'entreprise > Groupes de ressources**),
* Créer des équipes (**Paramètres > Sécurité > Equipes**).

### Eviter les boites de dialogue d'erreur
Dans le CRM, dans **Paramètres > Administration > Préférences** pour la confidentialité,
vous pouvez spécifier les préférences de notification d’erreur de l’application Web
à la place des utilisateurs.
