---
layout: faq
title: Personnalisations
description: Personnalisations
page-title: Dynamics 365 Online Personnalisations
---

## Est-ce que je peux modifier l'apparence de Dynamics 365 Online?
Oui, mais seulement dans une certaine mesure. Vous pouvez modifier les valeurs
suivantes:
* Le logo
* L'info-bulle du logo
* La couleur de la barre de navigation
* La couleur du plateau de la barre de navigation
* La couleur d'en-tête
* Couleur de lien global
* Effet de lien sélectionné
* Effet de lien pointé
* Couleur d'accent pour client mobile
* Couleur d'entité par défaut
* Couleur d'entité personnalisée par défaut
* Ombre de contrôle
* Bordure de contrôle

Le moyen le plus simple et le plus rapide de créer un nouveau thème consiste à
cloner (copier) et modifier un thème existant, puis de l'enregistrer, de le
prévisualiser et de le publier. Accédez à **Paramètres > Personnalisations**,
choisissez **Thèmes**, puis **CRM Default Theme**.
Vous pouvez prévisualiser vos modifications avec l'outil [Dynamics CRM Theme Generator](https://crmthemes.azurewebsites.net/).

## Est-ce que je peux modifier la barre de navigation de Dynamics 365 Online?
Oui. En modifiant le SiteMap (plan de site) de votre CRM Dynamics 365. Avant de modifier le sitemap,
ajouter le plan de site à une solution. Dans la solution, sélectionner **Extensions
client** dans la liste **Composants**. Sélectionner **Ajouter > Plan de site**.

## Comment afficher/masquer les zones de travail?
Vous pouvez cacher les zones de travail en attachant des privilèges à chaque menu.
Cf. [Cacher les zones de travail non utilisées]({{ site.baseurl }}{% link _admin/hiding-sitemap-components.md %}).

## Qu'est ce que je peux faire pour faciliter l'utilisation de Dynamics 365 Online?
Vous pouvez personnaliser votre CRM en suivant ces [bonnes pratiques]({{ site.baseurl }}{% link _admin/customize-best-practices.md %}).
