---
layout: page
title: Développeur
---

## Meilleures pratiques

> **NB:** ⚠️ Pas de personnalisation de la solution par défaut!
Créer une nouvelle solution, puis ajouter un éditeur avec un nom et un préfixe
personnalisé. Ça facilite l’identification des personnalisations et on peut les
déplacer entre les CRM.

### Pas de développement dans l’environnement de production
Au minimum, on doit avoir 2 environnements différents: Développement et Production.

Toutes les modifications doivent être réalisées dans l’environnement de Développement.
Ca permet de tester le code, les personnalisations, les rapports et les processus
avant de les déployer.

Une meilleure pratique est d’avoir 1 environnement supplémentaire: l’environnement
de pré-production.

### Toujours garder l’historique du code et des solutions
Utiliser un outil de contrôle de versions. Le code et les
solutions gérées et non gérées doivent être mise sous contrôle de version.

### Création des rôles de sécurité
Créer les rôles de sécurité à partir de rôles de sécurité existants.

## Les solutions
### La solution système
Elle représente les composants définis par Microsoft Dynamics 365 Online, sans
personnalisation, càd l’application par défaut.

### Les solutions gérées
Elles sont installées au dessus de la solution système et sont destinées aux
revendeurs pour délivrer leur contenu sans écraser les autres solutions. Elle
peuvent être également au dessus des autres solutions gérées et peuvent interagir
entre elles si elles sont proprement configurées.

### Les solutions non gérées
Les solutions non gérées peuvent être vues comme le code source des personnalisations
de votre Dynamics 365 Online. On crée les solutions gérées en créant et exportant
des solutions non gérées.
