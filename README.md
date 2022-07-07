# mongodb + nodejs


Mettre en place un projet node avec : npm init -y
Utilisation de Http
Utilisation du module express : infrastructure d'applications Web permettant création d'une API.
Mise en place de nodemon permettant d'éviter le restart à chaque modification.
Test d'utilisation de swagger pour mettre en place une documentation de l'API.

Cours 3 :

Module dotenv permet de gérer les variables d'environnement.
Structurer le code avec : Controller, models, routes, services
Avantage structurer le code : Facilite pour travailler en équipe.
Services : relation avec la bdd.

Cours 4 :

Protéger ses routes avec JWT :
Login request -> renvoi un token qui permet de s'authentifier
Structure d'un JWT : header -> contient des données telles que le type de TOKEN, body -> contient la propriété "sub" représentant un ID, partie final -> contient la signature du token qui est un hash des données.
Le JWT TOken est envoyé par requête HTTP dans un header Authorization -> Bearer