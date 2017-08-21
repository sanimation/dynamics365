---
layout: page
title: Configurer Outlook
---

## Configurer le traitement par défaut et la synchronisation de messagerie
Définissez la synchronisation côté serveur pour qu'elle soit la méthode de
configuration par défaut.

1. Accédez à **Paramètres > Configuration de la messagerie > Paramètres de
configuration de la messagerie**.
2. Définissez les champs de traitement et de synchronisation comme suit :
  1. **Profil de serveur** : Le profil créé dans la section ci-dessus.
  2. **Courrier électronique entrant** : synchronisation côté serveur ou E-mail Router
  3. **Courrier électronique sortant** : synchronisation côté serveur ou E-mail Router
  4. **Rendez-vous, Contacts et Tâches** : Synchronisation côté serveur ou E-mail Route
3. Cliquer sur Ok

## Corrélation d'email
Accédez à **Paramètres > Configuration de la messagerie > Paramètre de configuration d'email**

Vérifier que **Utiliser un jeton de suivi** est sélectionné.

## Suivi de dossier
Accédez à **Paramètres > Configuration de la messagerie > Paramètre de configuration d'email**

Cocher **Utiliser le suivi par dossier** pour les dossiers Exchange.

Dans **Définir les options personnelles**, cliquer sur **Configurer les regles de suivi des dossiers**.

## Définir le profil par défaut pour les boîtes aux lettres
1. Accédez à **Paramètres > Configuration de la messagerie > Boîtes aux lettres**.
2. Cliquez sur **Boîtes aux lettres actives**
3. Sélectionnez les boîtes aux lettres que vous souhaitez associer au profil
Exchange Server créé, cliquez sur **Appliquer les paramètres de courrier
électronique par défaut**, vérifiez les paramètres, puis cliquez sur OK.

Par défaut, la configuration des boîtes aux lettres est testée et les boîtes aux
lettres sont activées lorsque vous cliquez sur OK.

## Approuver l'adresse de messagerie
Vous devez approuver chaque boîte aux lettres d'utilisateur ou file d'attente
avant que la boîte aux lettres puisse traiter du courrier électronique.

1. Accédez à **Paramètres > Configuration de la messagerie > Boîtes aux lettres**.
2. Cliquez sur **Boîtes aux lettres actives**.
3. Sélectionnez les boîtes aux lettres à approuver, puis cliquez sur **Plus de
commandes (...) > Approuver l’adresse de messagerie**.
4. Cliquez sur OK.

## Test de la configuration de la messagerie pour toutes les boîtes aux lettres associées à un profil de serveur de messagerie
1. Accédez à **Paramètres > Configuration de la messagerie > Profils du serveur de messagerie**.
2. Sélectionnez le profil Microsoft Exchange Online, puis cliquez sur **Tester & activer les boîtes aux lettres**.

Lorsque vous testez la configuration de messagerie, une tâche asynchrone s'exécute
en arrière-plan. La réalisation du test peut prendre quelques minutes. Microsoft
Dynamics CRM teste la configuration de la messagerie de toutes les boîtes aux
lettres associées au profil Microsoft Exchange Online. Pour les boîtes aux lettres
configurées avec la synchronisation côté serveur pour la synchronisation des
rendez-vous, des tâches et des contacts, le programme vérifie également si ces
boîtes aux lettres sont configurées correctement.

## Déployer l'application CRM pour Outlook (version légère)
1. Accédez à **Paramètres > Application CRM pour Outlook**.
2. Dans l'écran **Mise en route de l'application CRM pour Outlook**, sous
**Ajouter pour les utilisateurs éligibles** (vous devez peut-être cliquer sur
  Paramètres si vous ouvrez cet écran pour la deuxième fois ou plus), activez la
  case à cocher **Ajouter automatiquement l'application à Outlook** si vous
  souhaitez que les utilisateurs accèdent automatiquement à l'application. Si un
  utilisateur dispose des privilèges requis et que le courrier électronique est
  synchronisé via la synchronisation côté serveur, aucune action n'est nécessaire
  pour leur activer l'application. Par exemple, si vous ajoutez les privilèges
  requis au rôle Vendeur, puis attribuez ce rôle à un nouvel utilisateur, celui-ci
  accède automatiquement à l'application.
3. Effectuez l’une des opérations suivantes :
  1. Pour activer l'application pour tous les utilisateurs éligibles, cliquez sur
  **Ajouter l'application pour tous les utilisateurs éligibles**.
  2. Pour activer l'application pour certains utilisateurs, sélectionnez les
  utilisateurs dans la liste, puis cliquez sur **Ajouter l'application à Outlook**.
