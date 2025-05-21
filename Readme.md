# React Event App

[![CI – Tests React](https://github.com/omrmeh/crud_react_date/actions/workflows/ci.yml/badge.svg)](https://github.com/omrmeh/crud_react_date/actions/workflows/ci.yml)

Cette application React permet de gérer facilement des événements horodatés : création, affichage, modification et suppression via une interface web intuitive. Idéale pour organiser des rendez-vous, rappels ou toute autre tâche liée à une date et une heure.

---

## Prérequis

* **Pour le mode développement** : Node.js ≥ 18 & npm installés
* **Pour le mode production par Docker** : Docker installé

---

## Modes de lancement

### 1. Développement (npm start)

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/omrmeh/crud_react_date.git
   cd crud_react_date
   ```
2. Installer les dépendances :

   ```bash
   npm install
   ```
3. Lancer l’application en mode développement :

   ```bash
   npm start
   ```
4. Ouvrir `http://localhost:3000` dans votre navigateur. L’application se recharge automatiquement à chaque modification.

### 2. Production (build Docker)

1. Cloner le dépôt et se positionner dans le répertoire :

   ```bash
   git clone https://github.com/omrmeh/crud_react_date.git
   cd crud_react_date
   ```
2. Construire l’image Docker :

   ```bash
   docker build -t react-event-app .
   ```
3. Lancer le container :

   ```bash
   docker run -d --name react-event-app -p 80:80 react-event-app
   ```
4. Accéder à l’application sur `http://localhost`.

---

*README minimaliste : choisissez le mode adapté à vos besoins.*

