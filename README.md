# ExamDevMobile

I - Workbox
 
 Workbox est une série de modules concus pour simplifier l'utilisation des Service Workers, au niveau du routing et de la mise en cache.

1) liste des fonctionnalités offertes
    Workbox englobe plusieurs modules permettant diverses opérations sur le cache et sur le réseau:
        - Génération de Service Workers
        - Enregistrement de Service Workers
        - Gestion des requètes réseau
        - Mise en cache de diverses manières (voir I-2 plus bas)
        - Synchronisation en arrière plan pour pouvoir relancer ou retarder l'envoi d'une requète
        - Monitoring de cache et notification aux pages web en cas de changement
        - Précharger certaines requètes réseau pour accélérer l'application

2) Méthodes de cache et utilisations possibles
    Workbox fournit plusieurs méthodes de mises en cache, capables de répondre a divers besoins.
        - Un module permet de discriminer quelles données doivent être mises en cache, ce qui permet de prioriser certaines requètes par rapport a d'autres
        - Un module permet de mettre des restrictions en place sur la quantité ou l'age des requètes en cache, permettant par exemple de garantir leur rapidité en évitant de charger trop de ressources 
        - Un module permettant de précacher des données, permettant de charger le contenu prioritaire avant une utilisation potentielle
        - Des modules interceptant les requètes et fournissant du contenu déjà conservé en cache au lieu de le télécharger à nouveau
        - Des modules créant des precache manifest, ces derniers déterminant quelles ressources doivent être précachées

3) uses cases à intégrer dans le projet doctoliberal
    Les méthodes et modules de Workbox fournissent plusieurs choses intéressantes a inclure dans l'application pseudo-doctolib. Cette dernière inclus notamment des deux cotés (client et docteur), des listes de rendez-vous qui pourraient être mises en cache pour plus rapidement être chargées et conservées hors connexion.
    De plus, un précaching permettrait de conserver des ressources statiques comme des stylesheets ou certains assets, évitant de les charger à chaque ouverture et guarantissant comme mentionné précédemment un accès partiel a l'application une fois hors ligne.
    Dans le cas d'un projet doctolibéral en PWA, la gestion et mise en place facilitée de Service Workers simplifierai le développement et la maintenance de l'application.
    Pour finir, les quelques options de support aux requètes web permettraient de fournir une communication entre les deux applications et avec la base de données qui serait plus stable (vérification de l'envoi des données, système de priorités).
 
II - Page d'incitation à l'installation de PWA
 
1 ) Créer un composant (React / Vue / angular / HTML+CSS) pour inciter et surtout guider un utilisateur à installer la PWA
    - navigateur nécessaire
    - compatibilité du device
    - capacités supplémentaires, etc...

    Le composant est: /trypwa/TryPWA.js

2 ) Expliquer en quoi il serait interessant de mettre en place une telle page
    Une page d'incitation et d'explication du PWA et de son installation n'est pas une page nécéssaire à une application web. Elle présente cependant quelques avantages et informations utiles pour l'utilisateur.
    Pour commencer, cette page fournit une information essentielle pour la bonne installation du PWA, l'appareil de l'utilisateur peut-il seulement installer la PWA ou n'est il juste pas compatible. 
    De plus, une page d'explication bien concue fournirait également un bouton d'installation simple, évitant a l'utilisateur de se perdre dans des menus et sous-menus en quête du bon bouton.
    Pour finir, elle présenterai et justifierai l'installation d'une PWA au lieu d'un simple accès navigateur. Grâce à cela, l'utilisateur pourra effectivement faire un choix justifié en connaissance de cause d'installation ou non de la PWA.