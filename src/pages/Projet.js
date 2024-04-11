import React from 'react';
import ProjetComp from '../components/ProjetComp';
import test from '../asset/test.mp4';

//Videos Projet
import SiteWeb from '../asset/ProjetVideo/Projet Studio/Studio.mp4'
import Emailing from '../asset/ProjetVideo/Emailing/emailing.mp4'
import Kebab from '../asset/ProjetVideo/Kebab/kebab.mp4'
import Kebabtk from '../asset/ProjetVideo/Kebab/kebabtk.mp4'
import MemoryGame from '../asset/ProjetVideo/Memory Game/memoryGame.mp4'
import Poulailler from '../asset/ProjetVideo/Poulailler/poulailler.mp4'
import Responsive from '../asset/ProjetVideo/Responsive/responsive.mp4'
import Responsive2 from '../asset/ProjetVideo/Responsive/responsive2.mp4'
import SneakHub from '../asset/ProjetVideo/SneakHub/sneakhub.mp4'

//Photos Projet
import Infra1 from '../asset/ProjetVideo/Infra/apash.png'
import Infra2 from '../asset/ProjetVideo/Infra/ftp.png'
import Infra3 from '../asset/ProjetVideo/Infra/infra.PNG'
import MeteoApp from '../asset/ProjetVideo/Meteo App/Meteo1.PNG'
import MeteoApp2 from '../asset/ProjetVideo/Meteo App/CodeMeteo.PNG'
import PhpCommande from '../asset/ProjetVideo/Phpcommande/Commande.PNG'
import PhpCommande2 from '../asset/ProjetVideo/Phpcommande/php.PNG'
import ProjetBdd from '../asset/ProjetVideo/ProjetBdd/Back.PNG'
import ProjetBdd2 from '../asset/ProjetVideo/ProjetBdd/Front.PNG'
import ProjetBdd3 from '../asset/ProjetVideo/ProjetBdd/MCD.PNG'
import Echec from '../asset/ProjetVideo/python/echec.PNG'
import Symfony from '../asset/ProjetVideo/Symfony/MCD.png'

//PDF Projet
import PoulaillerPdf from '../asset/ProjetVideo/Poulailler/TP_alog_poo.pdf'
import Responsive3 from '../asset/ProjetVideo/Responsive/responsive3.pdf'
import Symfony2 from '../asset/ProjetVideo/Symfony/Documentation.pdf'


const projects = [
  {
    title: 'Site Web HTML CSS',
    description: 'Création d\'un site web statique en utilisant HTML et CSS pour la structure et la mise en page.',
    technologies: ['HTML', 'CSS'],
    video: SiteWeb,
    link: 'site-web'
  },
  {
    title: 'Infrastructure Web',
    description: 'Conception et mise en place d\'une infrastructure web, incluant les serveurs web, FTP et DNS, sous Linux.',
    technologies: ['Linux', 'Apache/Nginx', 'FTP', 'DNS'],
    image: Infra1,
    image2: Infra2,
    image3: Infra3,
    link: 'infra'
  },
  {
    title: 'Emailing',
    description: 'Mise en place d\'un système d\'envoi d\'emails en masse à des destinataires spécifiques.',
    technologies: ['Emailing'],
    video: Emailing,
    link: 'emailing'
  },
  {
    title: 'Algorithme Poulailler',
    description: 'Développement d\'algorithmes spécifiques pour la simulation et la gestion d\'un poulailler.',
    technologies: ['Algorithmes'],
    video: Poulailler,
    pdf: PoulaillerPdf,
    link: 'poulailler'
  },
  {
    title: 'Projet PHP Commande',
    description: 'Développement d\'un projet PHP incluant des fonctionnalités de gestion des commandes et d\'authentification des utilisateurs.',
    technologies: ['PHP', 'MySQL'],
    image: PhpCommande,
    image2: PhpCommande2,
    link: 'php'
  },
  {
    title: 'Projet Symfony Site E-commerce',
    description: 'Création d\'un site e-commerce en utilisant le framework Symfony.',
    technologies: ['Symfony', 'PHP', 'MySQL'],
    image: Symfony,
    pdf: Symfony2,
    link: 'symfony'
    
  },
  {
    title: 'Responsive Page Web d\'un Média',
    description: 'Conception d\'une page web pour un média avec une mise en page réactive pour différents appareils.',
    technologies: ['HTML', 'CSS', 'Responsive Design'],
    video: Responsive,
    video2: Responsive2,
    pdf: Responsive3,
    link: 'responsive'
  },
  {
    title: 'BDD Projet Gestion Tour de France',
    description: 'Mise en place d\'une base de données pour la gestion des données relatives au Tour de France.',
    technologies: ['Base de données', 'Gestion de données'],
    image: ProjetBdd,
    image2: ProjetBdd2,
    image3: ProjetBdd3,
    link: 'bdd'
  },
  {
    title: 'React Native Application Météo',
    description: 'Développement d\'une application météo utilisant React Native pour les plateformes mobiles.',
    technologies: ['React Native'],
    image: MeteoApp,
    image2: MeteoApp2,
    link: 'react-native'
  },
  {
    title: 'Réalisation Portfolio',
    description: 'Développement d\'un portfolio en ligne pour présenter ses réalisations et compétences.',
    technologies: ['Technologies à définir'],
    video: test,
    link: 'portfolio'
  },
  {
    title: 'Échéquier Python',
    description: 'Implémentation d\'un jeu d\'échecs en utilisant Python.',
    technologies: ['Python'],
    image: Echec,
    link: 'python'
  },
  {
    title: 'MA-TMA Projet Site Upload Fichier React Js / Node JS',
    description: 'Développement d\'un site web permettant le téléchargement de fichiers, en utilisant React JS pour le frontend et Node JS pour le backend.',
    technologies: ['React JS', 'Node JS'],
    video: test,
    link: 'ma-tma'
  },
  {
    title: 'Application Stock de Chaussures en React Native',
    description: 'Création d\'une application mobile pour la gestion de stock de chaussures, en utilisant React Native.',
    technologies: ['React Native'],
    video: SneakHub,
    link: 'react-native'
  },
  {
    title: 'Création Memory Game en React JS',
    description: 'Développement d\'un jeu de Memory en utilisant React JS.',
    technologies: ['React JS'],
    video: MemoryGame,
    link: 'memory-game'
  },
  {
    title: 'Projet Python Sandwich',
    description: 'Développement d\'une application de gestion de commandes de sandwichs en utilisant Python.',
    technologies: ['Python'],
    video: Kebab,
    video2: Kebabtk,
    link: 'kebab'
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
