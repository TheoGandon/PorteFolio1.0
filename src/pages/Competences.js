import React from 'react';
import CustomComponent from '../components/CustomComponent';
import AnimationCompetences from '../components/AnimationCompetences';
import ModalPdf from '../components/ModalPdf';
import tableComp from '../asset/tableau_PF.pdf';
import '../css/Competences.css';

const Competences = () => {
  const Competences1 = [
    {
      title: 'Projet Server Web, FTP, DNS sous Linux',
      description: 'Mise en place et configuration d\'un serveur web, d\'un serveur FTP et de services DNS sous Linux.',
      technologies: ['Linux', 'Apache/Nginx', 'FTP', 'DNS'],
      link: '1'
    },
    {
      title: 'Projet Php Commande, authentification',
      description: 'Développement d\'un projet PHP incluant des fonctionnalités de gestion des commandes et d\'authentification des utilisateurs.',
      technologies: ['PHP', 'MySQL', 'Authentification'],
      link: '2'
    },
    {
      title: 'BDD projet géstion tour de France',
      description: 'Mise en place d\'une base de données pour la gestion des données relatives au Tour de France.',
      technologies: ['Base de données', 'Gestion de données'],
      link: '3'
    },
    {
      title: 'MA-TMA Projet Site uplaod fichier React Js / Node JS',
      description: 'Développement d\'un site web permettant le téléchargement de fichiers, en utilisant React JS pour le frontend et Node JS pour le backend.',
      technologies: ['React JS', 'Node JS'],
      link: '4'
    },
    {
      title: 'Application Stock de chaussures en React Native',
      description: 'Développement d\'une application mobile de gestion de stock de chaussures en utilisant React Native.',
      technologies: ['React Native'],
      link: '5'
    },
    {
      title: 'Projet Symfony Site E-commerce',
      description: 'Création d\'un site e-commerce en utilisant le framework Symfony.',
      technologies: ['Symfony', 'PHP', 'MySQL'],
      link: '2'
    },
  ];

  const Competences2 = [
    {
      title: 'Projet Server Web, FTP, DNS sous Linux',
      description: 'Mise en place et configuration d\'un serveur web, d\'un serveur FTP et de services DNS sous Linux.',
      technologies: ['Linux', 'Apache/Nginx', 'FTP', 'DNS'],
      link: '1'
    },
    {
      title: 'Projet Symfony Site E-commerce',
      description: 'Création d\'un site e-commerce en utilisant le framework Symfony.',
      technologies: ['Symfony', 'PHP', 'MySQL'],
      link: '2'
    },
    {
      title: 'MA-TMA Projet Site uplaod fichier React Js / Node JS',
      description: 'Développement d\'un site web permettant le téléchargement de fichiers, en utilisant React JS pour le frontend et Node JS pour le backend.',
      technologies: ['React JS', 'Node JS'],
      link: '4'
    },
    
  ];

  const Competences3 = [
    {
      title: 'Projet Php Commande, authentification',
      description: 'Développement d\'un projet PHP incluant des fonctionnalités de gestion des commandes et d\'authentification des utilisateurs.',
      technologies: ['PHP', 'MySQL', 'Authentification'],
      link: '2'
    },
    {
      title: 'Realisation d\'un site internet pour un restaurant en React JS',
      description: 'Développement d\'un site web pour un restaurant en utilisant React JS.',
      technologies: ['React JS'],
      link: '11'
    },
    {
      title: 'Realisation d\'un site Web Vitrine pour une association en JS HTML CSS',
      description: 'Développement d\'un site web vitrine pour une association en utilisant JavaScript, HTML et CSS.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      link: '12'
    },
    {
      title: 'MA-TMA Projet Site uplaod fichier React Js / Node JS',
      description: 'Développement d\'un site web permettant le téléchargement de fichiers, en utilisant React JS pour le frontend et Node JS pour le backend.',
      technologies: ['React JS', 'Node JS'],
      link: '4'
    },
  ];

  const Competences4 = [
    {
      title: 'Responsive page web d\'un média',
      description: 'Conception d\'une page web pour un média avec une mise en page réactive pour différents appareils.',
      technologies: ['HTML', 'CSS', 'Responsive Design'],
      link: '10'
    },
    {
      title: 'Création Memory Game en React JS',
      description: 'Développement d\'un jeu de Memory en utilisant React JS.',
      technologies: ['React JS'],
      link: '17'
    },
    {
      title: 'Projet Python Sandwich',
      description: 'Développement d\'une application Python pour la gestion de sandwichs.',
      technologies: ['Python'],
      link: '13'
    },
    {
      title: 'Application Stock de chaussures en React Native',
      description: 'Développement d\'une application mobile de gestion de stock de chaussures en utilisant React Native.',
      technologies: ['React Native'],
      link: '5'
    },
    {
      title: 'MA-TMA Projet Site uplaod fichier React Js / Node JS',
      description: 'Développement d\'un site web permettant le téléchargement de fichiers, en utilisant React JS pour le frontend et Node JS pour le backend.',
      technologies: ['React JS', 'Node JS'],
      link: '4'
    },
    {
      title: 'Realisation Porte Folio',
      description: 'Développement d\'un portfolio en ligne pour présenter ses réalisations et compétences.',
      technologies: ['Technologies à définir'],
      link: '15'
    },
    {
      title: 'Projet Agenda',
      description: 'Création d\'une application d\'agenda pour la gestion des rendez-vous et des événements.',
      technologies: ['Technologies à définir'],
      link: '9'
    },
    {
      title: 'BDD projet géstion tour de France',
      description: 'Mise en place d\'une base de données pour la gestion des données relatives au Tour de France.',
      technologies: ['Base de données', 'Gestion de données'],
      link: '3'
    },
    {
      title: 'Projet Symfony Site E-commerce',
      description: 'Création d\'un site e-commerce en utilisant le framework Symfony.',
      technologies: ['Symfony', 'PHP', 'MySQL'],
      link: '2'
    },
    {
      title: 'Algorithme Poulailler',
      description: 'Développement d\'algorithmes spécifiques pour la simulation et la gestion d\'un poulailler.',
      technologies: ['Algorithmes'],
      link: '6'
    },
    {
      title: 'Application Touristique SQL',
      description: 'Développement d\'une application touristique utilisant SQL pour la gestion de la base de données.',
      technologies: ['SQL'],
      link: '7'
    },
    {
      title: 'Site Web HTML CSS',
      description: 'Création d\'un site web statique en utilisant HTML et CSS pour la structure et la mise en page.',
      technologies: ['HTML', 'CSS'],
      link: '8' 
    },
  ];

  const Competences5 = [
    {
      title: 'Realisation Porte Folio',
      description: 'Développement d\'un portfolio en ligne pour présenter ses réalisations et compétences.',
      technologies: ['Technologies à définir'],
      link: '15'
    },
    {
      title: 'Algorithme Poulailler',
      description: 'Développement d\'algorithmes spécifiques pour la simulation et la gestion d\'un poulailler.',
      technologies: ['Algorithmes'],
      link: '6'
    },
    {
      title: 'Projet Server Web, FTP, DNS sous Linux',
      description: 'Mise en place et configuration d\'un serveur web, d\'un serveur FTP et de services DNS sous Linux.',
      technologies: ['Linux', 'Apache/Nginx', 'FTP', 'DNS'],
      link: '1'
    },
    {
      title: 'Projet Symfony Site E-commerce',
      description: 'Création d\'un site e-commerce en utilisant le framework Symfony.',
      technologies: ['Symfony', 'PHP', 'MySQL'],
      link: '2'
    },
    {
      title: 'MA-TMA Projet Site uplaod fichier React Js / Node JS',
      description: 'Développement d\'un site web permettant le téléchargement de fichiers, en utilisant React JS pour le frontend et Node JS pour le backend.',
      technologies: ['React JS', 'Node JS'],
      link: '4'
    },
    {
      title: 'Application Stock de chaussures en React Native',
      description: 'Développement d\'une application mobile de gestion de stock de chaussures en utilisant React Native.',
      technologies: ['React Native'],
      link: '5'
    },
    {
      title: 'Realisation d\'un site internet pour un restaurant en React JS',
      description: 'Développement d\'un site web pour un restaurant en utilisant React JS.',
      technologies: ['React JS'],
      link: '11'
    },
    {
      title: 'Realisation d\'un site Web Vitrine pour une association en JS HTML CSS',
      description: 'Développement d\'un site web vitrine pour une association en utilisant JavaScript, HTML et CSS.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      link: '12'
    },
  ];

  const Competences6 = [
    {
      title: 'Echéquier Python',
      description: 'Implémentation d\'un jeu d\'échecs en utilisant Python.',
      technologies: ['Python'],
      link: '16'
    },
    {
      title: 'Application Touristique SQL',
      description: 'Développement d\'une application touristique utilisant SQL pour la gestion de la base de données.',
      technologies: ['SQL'],
      link: '7'
    },
    {
      title: 'Projet Python Sandwich',
      description: 'Développement d\'une application Python pour la gestion de sandwichs.',
      technologies: ['Python'],
      link: '13'
    },
    {
      title: 'Création Memory Game en React JS',
      description: 'Développement d\'un jeu de Memory en utilisant React JS.',
      technologies: ['React JS'],
      link: '17'
    },
    {
      title: 'MA-TMA Projet Site uplaod fichier React Js / Node JS',
      description: 'Développement d\'un site web permettant le téléchargement de fichiers, en utilisant React JS pour le frontend et Node JS pour le backend.',
      technologies: ['React JS', 'Node JS'],
      link: '4'
    },
    {
      title: 'React Native Application Météo',
      description: 'Développement d\'une application météo utilisant React Native pour les plateformes mobiles.',
      technologies: ['React Native'],
      link: '14'
    },
    {
      title: 'Responsive page web d\'un média',
      description: 'Conception d\'une page web pour un média avec une mise en page réactive pour différents appareils.',
      technologies: ['HTML', 'CSS', 'Responsive Design'],
      link: '10'
    },
    {
      title: 'Projet Symfony Site E-commerce',
      description: 'Création d\'un site e-commerce en utilisant le framework Symfony.',
      technologies: ['Symfony', 'PHP', 'MySQL'],
      link: '2'
    },
    {
      title: 'Emailing',
      description: 'Mise en place d\'un système d\'envoi d\'emails en masse à des destinataires spécifiques.',
      technologies: ['Emailing'],
      link: '18'
    },
    {
      title: 'Projet Server Web, FTP, DNS sous Linux',
      description: 'Mise en place et configuration d\'un serveur web, d\'un serveur FTP et de services DNS sous Linux.',
      technologies: ['Linux', 'Apache/Nginx', 'FTP', 'DNS'],
      link: '1'
    },
    {
      title: 'Projet Php Commande, authentification',
      description: 'Développement d\'un projet PHP incluant des fonctionnalités de gestion des commandes et d\'authentification des utilisateurs.',
      technologies: ['PHP', 'MySQL', 'Authentification'],
      link: '2'
    },
    {
      title: 'Realisation d\'un site internet pour un restaurant en React JS',
      description: 'Développement d\'un site web pour un restaurant en utilisant React JS.',
      technologies: ['React JS'],
      link: '11'
    },
  ];

  return (
    <div>
      <h1 className='title'>Compétences</h1>
      <ModalPdf PDF={tableComp} />
      <AnimationCompetences />
      <CustomComponent projectsToChoose={Competences1} competences={'Gérer le patrimoine informatique'} />
      <CustomComponent projectsToChoose={Competences2} competences={'Répondre aux incidents et aux demandes d’assistance et d’évolution'} />
      <CustomComponent projectsToChoose={Competences3} competences={'Développer la présence en ligne de l’organisation'} />
      <CustomComponent projectsToChoose={Competences4} competences={'Travailler en mode projet'} />
      <CustomComponent projectsToChoose={Competences5} competences={'Mettre à disposition des utilisateurs un service informatique'} />
      <CustomComponent projectsToChoose={Competences6} competences={'Organiser son développement professionnel  '} />
    </div>
  );
};

export default Competences;
