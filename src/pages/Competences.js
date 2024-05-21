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
      technologies: ['Linux, ', ' Apache,', ' FTP,', ' DNS'],
      link: 'site-web'
    },
    {
      title: 'Projet Php Commande, authentification',
      description: 'Développement d\'un projet PHP incluant des fonctionnalités de gestion des commandes et d\'authentification des utilisateurs.',
      technologies: ['PHP', 'MySQL', 'Authentification'],
      link: 'php'
    },
    {
      title: 'MA-TMA Projet Site uplaod fichier React Js / Node JS',
      description: 'Développement d\'un site web permettant le téléchargement de fichiers, en utilisant React JS pour le frontend et Node JS pour le backend.',
      technologies: ['React JS', 'Node JS'],
      link: 'ma-tma'
    },
    {
      title: 'Application Stock de chaussures en React Native',
      description: 'Développement d\'une application mobile de gestion de stock de chaussures en utilisant React Native.',
      technologies: ['React Native'],
      link: 'stock'
    },
    {
      title: 'BDD Projet Gestion Tour de France',
      description: 'Mise en place d\'une base de données pour la gestion des données relatives au Tour de France.',
      technologies: ['Base de données, ', 'Gestion de données, ', 'Symfony, ', 'React JS'],
      link: 'bdd'
    },
    {
      title: 'Projet Symfony Site E-commerce',
      description: 'Création d\'un site e-commerce en utilisant le framework Symfony.',
      technologies: ['Symfony', 'PHP', 'MySQL'],
      link: 'symfony'
    },
  ];

  const Competences2 = [
    {
      title: 'Projet Server Web, FTP, DNS sous Linux',
      description: 'Mise en place et configuration d\'un serveur web, d\'un serveur FTP et de services DNS sous Linux.',
      technologies: ['Linux, ', ' Apache,', ' FTP,', ' DNS'],
      link: 'infra'
    },
    {
      title: 'Projet Symfony Site E-commerce',
      description: 'Création d\'un site e-commerce en utilisant le framework Symfony.',
      technologies: ['Symfony', 'PHP', 'MySQL'],
      link: 'symfony'
    },
    {
      title: 'MA-TMA Projet Site uplaod fichier React Js / Node JS',
      description: 'Développement d\'un site web permettant le téléchargement de fichiers, en utilisant React JS pour le frontend et Node JS pour le backend.',
      technologies: ['React JS', 'Node JS'],
      link: 'ma-tma'
    },
    
  ];

  const Competences3 = [
    {
      title: 'Projet Php Commande',
      description: 'Développement d\'un projet PHP incluant des fonctionnalités de gestion des commandes et d\'authentification des utilisateurs.',
      technologies: ['PHP', 'MySQL'],
      link: 'php'
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
      title: 'Réalisation Portfolio',
      description: 'Développement d\'un portfolio en ligne pour présenter ses réalisations et compétences.',
      technologies: ['React JS, ', 'HTML, ', 'CSS, ', 'Three JS'],
      link: 'portfolio',
    },
    {
      title: 'MA-TMA Projet Site uplaod fichier React Js / Node JS',
      description: 'Développement d\'un site web permettant le téléchargement de fichiers, en utilisant React JS pour le frontend et Node JS pour le backend.',
      technologies: ['React JS', 'Node JS'],
      link: 'ma-tma'
    },
  ];

  const Competences4 = [
    {
      title: 'Responsive page web d\'un média',
      description: 'Conception d\'une page web pour un média avec une mise en page réactive pour différents appareils.',
      technologies: ['HTML', 'CSS', 'Responsive Design'],
      link: 'responsive'
    },
    {
      title: 'Création Memory Game en React JS',
      description: 'Développement d\'un jeu de Memory en utilisant React JS.',
      technologies: ['React JS'],
      link: 'memory-game'
    },
    {
      title: 'Projet Python Sandwich',
      description: 'Développement d\'une application Python pour la gestion de sandwichs.',
      technologies: ['Python'],
      link: 'kebab'
    },
    {
      title: 'Application Stock de chaussures en React Native',
      description: 'Développement d\'une application mobile de gestion de stock de chaussures en utilisant React Native.',
      technologies: ['React Native'],
      link: 'stock'
    },
    {
      title: 'MA-TMA Projet Site uplaod fichier React Js / Node JS',
      description: 'Développement d\'un site web permettant le téléchargement de fichiers, en utilisant React JS pour le frontend et Node JS pour le backend.',
      technologies: ['React JS', 'Node JS'],
      link: 'ma-tma'
    },
    {
      title: 'Realisation Porte Folio',
      description: 'Développement d\'un portfolio en ligne pour présenter ses réalisations et compétences.',
      technologies: ['Technologies à définir'],
      link: '11'
    },
    {
      title: 'Projet Symfony Site E-commerce',
      description: 'Création d\'un site e-commerce en utilisant le framework Symfony.',
      technologies: ['Symfony', 'PHP', 'MySQL'],
      link: 'symfony'
    },
    {
      title: 'Site Web HTML CSS',
      description: 'Création d\'un site web statique en utilisant HTML et CSS pour la structure et la mise en page.',
      technologies: ['HTML', 'CSS'],
      link: 'site-web' 
    },
    {
      title: 'Projet Server Web, FTP, DNS sous Linux',
      description: 'Mise en place et configuration d\'un serveur web, d\'un serveur FTP et de services DNS sous Linux.',
      technologies: ['Linux, ', ' Apache,', ' FTP,', ' DNS'],
      link: 'site-web'
    },
    {
      title: 'BDD Projet Gestion Tour de France',
      description: 'Mise en place d\'une base de données pour la gestion des données relatives au Tour de France.',
      technologies: ['Base de données, ', 'Gestion de données, ', 'Symfony, ', 'React JS'],
      link: 'bdd'
    },
  ];

  const Competences5 = [
    {
      title: 'Projet Server Web, FTP, DNS sous Linux',
      description: 'Mise en place et configuration d\'un serveur web, d\'un serveur FTP et de services DNS sous Linux.',
      technologies: ['Linux', 'Apache/Nginx', 'FTP', 'DNS'],
      link: 'infra'
    },
    {
      title: 'Projet Symfony Site E-commerce',
      description: 'Création d\'un site e-commerce en utilisant le framework Symfony.',
      technologies: ['Symfony', 'PHP', 'MySQL'],
      link: 'synfony'
    },
    {
      title: 'MA-TMA Projet Site uplaod fichier React Js / Node JS',
      description: 'Développement d\'un site web permettant le téléchargement de fichiers, en utilisant React JS pour le frontend et Node JS pour le backend.',
      technologies: ['React JS', 'Node JS'],
      link: 'ma-tma'
    },
    {
      title: 'Application Stock de chaussures en React Native',
      description: 'Développement d\'une application mobile de gestion de stock de chaussures en utilisant React Native.',
      technologies: ['React Native'],
      link: 'stock'
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
      link: 'echec'
    },
    {
      title: 'Projet Python Sandwich',
      description: 'Développement d\'une application Python pour la gestion de sandwichs.',
      technologies: ['Python'],
      link: 'kebab'
    },
    {
      title: 'Création Memory Game en React JS',
      description: 'Développement d\'un jeu de Memory en utilisant React JS.',
      technologies: ['React JS'],
      link: 'memory-game'
    },
    {
      title: 'MA-TMA Projet Site uplaod fichier React Js / Node JS',
      description: 'Développement d\'un site web permettant le téléchargement de fichiers, en utilisant React JS pour le frontend et Node JS pour le backend.',
      technologies: ['React JS', 'Node JS'],
      link: 'ma-tma'
    },
    {
      title: 'React Native Application Météo',
      description: 'Développement d\'une application météo utilisant React Native pour les plateformes mobiles.',
      technologies: ['React Native'],
      link: 'react-native'
    },
    {
      title: 'Responsive page web d\'un média',
      description: 'Conception d\'une page web pour un média avec une mise en page réactive pour différents appareils.',
      technologies: ['HTML', 'CSS', 'Responsive Design'],
      link: 'responsive'
    },
    {
      title: 'Projet Symfony Site E-commerce',
      description: 'Création d\'un site e-commerce en utilisant le framework Symfony.',
      technologies: ['Symfony', 'PHP', 'MySQL'],
      link: 'symfony'
    },
    {
      title: 'Emailing',
      description: 'Création d\'une newsletter en HTML CSS.',
      technologies: ['Emailing'],
      link: 'emailing'
    },
    {
      title: 'Projet Server Web, FTP, DNS sous Linux',
      description: 'Mise en place et configuration d\'un serveur web, d\'un serveur FTP et de services DNS sous Linux.',
      technologies: ['Linux', 'Apache/Nginx', 'FTP', 'DNS'],
      link: 'infra'
    },
    {
      title: 'Projet Php Commande, authentification',
      description: 'Développement d\'un projet PHP incluant des fonctionnalités de gestion des commandes et d\'authentification des utilisateurs.',
      technologies: ['PHP', 'MySQL', 'Authentification'],
      link: 'php'
    },
    {
      title: 'BDD Projet Gestion Tour de France',
      description: 'Mise en place d\'une base de données pour la gestion des données relatives au Tour de France.',
      technologies: ['Base de données, ', 'Gestion de données, ', 'Symfony, ', 'React JS'],
      link: 'bdd'
    },
    {
      title: 'Site Web HTML CSS',
      description: 'Création d\'un site web statique en utilisant HTML et CSS pour la structure et la mise en page.',
      technologies: ['HTML', 'CSS'],
      link: 'site-web' 
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
