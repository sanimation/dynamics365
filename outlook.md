---
layout: faq
title: Travailler avec Outlook
page-title: Dynamics 365 Online avec Outlook
---

## Comment utiliser Outlook avec Microsoft Dynamics 365?
Il existe trois façons de synchroniser Dynamics 365 et Outlook:
* Application Microsoft Dynamics 365 pour Outlook
* Microsoft Dynamics 365 pour Outlook (application complète)
* Suivi des dossiers Microsoft Exchange

## Quelle est la méthode recommandée pour utiliser Dynamics 365 avec Outlook?
La méthode recommandée est l'Application Dynamics 365 pour Outlook, un complément
Microsoft Office. Cf. [Guide de l'utilisateur de l'application Dynamics 365 pour Outlook](https://www.microsoft.com/fr-FR/dynamics/crm-customer-center/dynamics-365-app-for-outlook-user-s-guide.aspx)

## À quelle fréquence les enregistrements sont-il synchronisés via la synchronisation côté serveur ?
Si vous synchronisez les enregistrements avec la synchronisation côté serveur, le
processus est dynamique et unique pour la boîte aux lettres de chaque utilisateur.
L'algorithme de synchronisation garantit que les boîtes aux lettres soient synchronisées
en fonction des paramètres dynamiques, comme le nombre de messages électroniques
et de l'activité de la boîte aux lettres.   

Généralement, la synchronisation de courrier électronique se produit toutes les
5 minutes. Lorsqu'une boîte aux lettres possède de nombreux courriers électroniques,
l'intervalle peut être réduit dynamiquement à 2 minutes. Si la boîte aux lettres
est moins active, l'intervalle peut atteindre 12 minutes. En général, vous pouvez
considérer qu'une boîte aux lettres sera synchronisée au moins une fois toutes
les 12 minutes.  

Sachez que vous ne pouvez pas synchroniser manuellement les enregistrements mais
lorsque vous effectuez le suivi ou la liaison (définissez l'enregistrement concerné)
pour les messages électroniques, les rendez-vous, ou les tâches, la synchronisation
se produit immédiatement.
