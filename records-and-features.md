---
layout: faq
title: Enregistrements et fonctionnalités
page-title: Dynamics 365 Online Enregistrements et fonctionnalités
---

## Qu’est-ce qu’un enregistrement?
Un enregistrement est une unité complète d’information. Voyez ça comme une
rangée dans une table, avec plusieurs colonnes (ou champs) pour renseigner toutes
les informations qui composent la ligne.

## Qu’est-ce qu’un type d’enregistrement?
Chaque enregistrement appartient à un certain type: un contact, une entreprise, etc.
Le type d’enregistrement vous donne un moyen de regrouper et d’organiser les
données similaires.

## Je ne peux pas créer, modifier ou supprimer un enregistrement. Pourquoi?
Dans Dynamics 365 Online, il existe des paramètres de sécurité qui contrôlent l’accès à certaines
fonctionnalités, données ou champs selon le rôle que vous avez.
Si vous ne pouvez pas réaliser une action ou si certaines données sont en lecture
seule, vérifier avec votre administrateur que vous avez les autorisations nécessaires.

## Je ne peux pas modifier un champ. Pourquoi?
Si il y a une clef à côté du champ, c'est que la sécurité au niveau de ce champ a
été activée.  
Si il y a un cadenas à côté du champ, 2 cas possibles:
* Le champ est en lecture seule dans le formulaire.
* Le champ appartient à une entité que vous ne pouvez pas lire ou modifier ou fait référence
à une entité que vous ne pouvez pas lire ou modifier (champ recherche).
Vérifier avec votre administrateur que vous avez les autorisations nécessaires au
niveau de votre rôle de sécurité.

## Est-ce que je peux accéder à Dynamics 365 Online en mode Offline?
Vous pouvez utiliser l'application mobile Dynamics 365 pour accéder à vos données
sans être connecté à internet.

## Comment réaliser une requête sur mes données?
Pour afficher une sélection de données, créer une vue personnelle.

## Est-ce qu'il y a un correcteur orthographique dans Dynamics 365 Online?
Non, cette fonctionnalité n'existe pas encore.

## Où se trouve le bouton sauvegarder?
Si votre système utilise la sauvegarde automatique, vous remarquerez que quand
vous modifiez les données dans les champs, vous n’avez pas besoin de cliquer sur
Sauvegarder. Le système sauvegarde automatiquement tous les enregistrements
modifiés toutes les 30 secondes, ou quand vous changez d’écran.
Si vous souhaitez sauvegarder quelque chose avant les 30 secondes, cliquez sur
Sauvegarder en bas à droite de l’écran.

## Comment utiliser Office 365 avec Dynamics 365?
Office 365 est le service cloud de Microsoft. Il inclut les applications
Office que vous utilisez déjà comme Word, Excel, etc. En achetant des abonnements
supplémentaires, vous pouvez avoir d'autres applications telles que Dynamics 365,
PowerBI (outil de data visualisation de Microsoft), etc.  
Vous pourrez alors utiliser les applications Office 365 dans Dynamics 365 Online.  
Cf. [Comment Office 365 et Dynamics 365 fonctionne ensemble]({{ site.baseurl }}{% link _admin/office365-integrations.md %}).
