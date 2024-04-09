import React from 'react';
import ProjetComp from '../components/ProjetComp';
import test from '../asset/test.mp4';

const projects = [
  {
    title: 'Site Web HTML CSS',
    description: 'Création d\'un site web statique en utilisant HTML et CSS pour la structure et la mise en page.',
    technologies: ['HTML', 'CSS'],
    video: test
  },
  {
    title: 'Infrastructure Web',
    description: 'Conception et mise en place d\'une infrastructure web, incluant les serveurs web, FTP et DNS, sous Linux.',
    technologies: ['Linux', 'Apache/Nginx', 'FTP', 'DNS'],
    video: test
  },
  {
    title: 'Application Touristique SQL',
    description: 'Développement d\'une application touristique utilisant SQL pour la gestion de la base de données.',
    technologies: ['SQL'],
    video: test
  },
  {
    title: 'Emailing',
    description: 'Mise en place d\'un système d\'envoi d\'emails en masse à des destinataires spécifiques.',
    technologies: ['Emailing'],
    video: test
  },
  {
    title: 'Projet Python Poulailler',
    description: '"Gestion de Poulailler" est un jeu de simulation où vous démarrez avec un petit élevage de poules. Avec 50€, votre objectif est de maintenir la santé et le moral de vos poules, gérer l\'alimentation, la reproduction, et éviter maladies et parasites. Chaque jour est crucial, car les décisions impactent la production d\'œufs, la croissance des poussins, et la survie de votre élevage. Faites preuve de stratégie pour prospérer et éviter la défaite en maintenant un équilibre entre ressources et bien-être des poules.',
    technologies: ['Python'],
    video: test
  },
  {
    title: 'Algorithme Poulailler',
    description: 'Développement d\'algorithmes spécifiques pour la simulation et la gestion d\'un poulailler.',
    technologies: ['Algorithmes'],
    video: test
  },
  {
    title: 'Projet PHP Commande, Authentification',
    description: 'Développement d\'un projet PHP incluant des fonctionnalités de gestion des commandes et d\'authentification des utilisateurs.',
    technologies: ['PHP', 'MySQL', 'Authentification'],
    video: test
  },
  {
    title: 'Projet Symfony Site E-commerce',
    description: 'Création d\'un site e-commerce en utilisant le framework Symfony.',
    technologies: ['Symfony', 'PHP', 'MySQL'],
    video: test
  },
  {
    title: 'Responsive Page Web d\'un Média',
    description: 'Conception d\'une page web pour un média avec une mise en page réactive pour différents appareils.',
    technologies: ['HTML', 'CSS', 'Responsive Design'],
    video: test
  },
  {
    title: 'BDD Projet Gestion Tour de France',
    description: 'Mise en place d\'une base de données pour la gestion des données relatives au Tour de France.',
    technologies: ['Base de données', 'Gestion de données'],
    video: test
  },
  {
    title: 'React Native Application Météo',
    description: 'Développement d\'une application météo utilisant React Native pour les plateformes mobiles.',
    technologies: ['React Native'],
    video: test
  },
  {
    title: 'Projet Agenda',
    description: 'Création d\'une application d\'agenda pour la gestion des rendez-vous et des événements.',
    technologies: ['Technologies à définir'],
    video: test
  },
  {
    title: 'Réalisation Portfolio',
    description: 'Développement d\'un portfolio en ligne pour présenter ses réalisations et compétences.',
    technologies: ['Technologies à définir'],
    video: test
  },
  {
    title: 'Échéquier Python',
    description: 'Implémentation d\'un jeu d\'échecs en utilisant Python.',
    technologies: ['Python'],
    video: test
  },
  {
    title: 'MA-TMA Projet Site Upload Fichier React Js / Node JS',
    description: 'Développement d\'un site web permettant le téléchargement de fichiers, en utilisant React JS pour le frontend et Node JS pour le backend.',
    technologies: ['React JS', 'Node JS'],
    video: test
  },
  {
    title: 'Application Stock de Chaussures en React Native',
    description: 'Création d\'une application mobile pour la gestion de stock de chaussures, en utilisant React Native.',
    technologies: ['React Native'],
    video: test
  },
  {
    title: 'Création Memory Game en React JS',
    description: 'Développement d\'un jeu de Memory en utilisant React JS.',
    technologies: ['React JS'],
    video: test
  },
  {
    title: 'Projet Python Sandwich',
    description: 'Développement d\'une application de gestion de commandes de sandwichs en utilisant Python.',
    technologies: ['Python'],
    video: test
  }
]

const Projet = () => {
  return (
    <div>
        <ProjetComp projects={projects} />
    </div>
  );
};

export default Projet;
