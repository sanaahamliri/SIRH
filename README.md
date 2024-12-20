# 🎬 Cinematy SIRH

Cinematy souhaite moderniser ses processus RH grâce à une application web SIRH, reposant sur une architecture microservices. Ce système facilitera la gestion des employés, des candidatures, des appels d’offres, et inclura des fonctionnalités avancées telles que la détection OCR pour le traitement automatique de documents.


## 🌟 Contexte du Projet

Ce projet a pour but de centraliser la gestion des employés et des candidatures, d'implémenter une détection OCR pour analyser les documents, de sécuriser et gérer les accès, et de mettre en place une architecture modulaire et scalable.

## 🎯 Objectifs du Projet

- **Gestion centralisée des employés et des candidatures :**
  - 📄 Créer des profils d’employés à partir d’un fichier CSV.
  - 📆 Gérer les demandes internes des employés (congés, augmentations, réclamations).
  - 📋 Offrir une interface aux RH pour gérer les offres d’emploi et les candidatures reçues.

- **Détection OCR :**
  - 📝 Analyser les CV et documents soumis pour en extraire automatiquement les informations pertinentes.

- **Sécurisation et gestion des accès :**
  - 🔒 Implémenter une solution d’authentification centralisée avec Keycloak.
  - 🛡️ Gérer les rôles et permissions (Employé, RH, Administrateur).

- **Stockage des documents :**
  - 📂 Utiliser MinIO pour le stockage sécurisé des fichiers (CV, pièces justificatives, etc.).

- **Architecture modulaire et scalable :**
  - 🏗️ Conception basée sur des microservices, avec une API Gateway pour orchestrer les appels entre services.

## 🛠️ Architecture Technique

### Technologies principales

- **Backend :**
  - ⚙️ Framework principal : NestJS ou (NestJS et Express les deux).
  - 🔄 Gestion des microservices : NestJS avec un bus de messages ou en RestAPI.
  - 🔐 Authentification : Keycloak.
  - 🖥️ Détection OCR : Tesseract.js intégré au service OCR.

- **Frontend :**
  - 💻 Next.js pour une interface réactive et optimisée.

- **Base de données :**
  - 🗄️ MySQL ou Postgres pour les données des employés.
  - 🗃️ MongoDB pour les candidatures.

- **Stockage :**
  - 🗂️ MinIO pour le stockage des fichiers (CV, etc.).

- **Infrastructure :**
  - 🌐 API Gateway pour la gestion des points d’accès et la communication entre les services.
  - 🐳 Conteneurisation : Docker pour l’orchestration et l’isolation des services.
  - 🤖 GitHub Actions : CI/CD pour automatiser les déploiements.

## 🚀 Installation

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/sanaahamliri/Cinematy_SIRH.git
   cd Cinematy_SIRH/sirh
