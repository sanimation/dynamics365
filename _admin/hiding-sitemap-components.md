---
layout: page
title: Cacher les zones de travail non utilisées en attachant des privilèges
page-title: Dynamics 365 Cacher les zones de travail
---

Cf. l'article complet [Hiding SiteMap Components based on User Profile](https://dipankarbhattacharya.com/2014/05/06/hiding-sitemap-components-based-on-user-profile/).  
Avant de modifier le sitemap, ajouter le plan de site à une solution.
Dans la solution, sélectionner **Extensions client** dans la liste **Composants**.
Sélectionner **Ajouter > Plan de site**.
Créer 4 entités (sans sélectionner d'options et avec propriété **organisation**):
* SalesSiteMap
* MarketingSiteMap
* ServicesSiteMap
* SettingsSiteMap  

Créer les rôles de sécurité suivants:
* Sales Section Accessor
* Marketing Section Accessor
* Services Section Accessor
* Settings Section Accessor
* Help Section Accessor
Pour chaque rôle de sécurité, configurer seulement les droits d'accès à l'entité
créée précédemment.

Modifier le SiteMap: Modifier le privilège de chaque sous-zone de zone avec
l'entité spécifigue. Par exemple dans les sous-zones de Sales Area (SFA), aller
sur **Propriétés > Avancée > Privilèges** et sélectionner l'entité **new_salessitemap**.
