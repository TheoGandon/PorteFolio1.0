import React from 'react';
import CustomComponent from '../components/CustomComponent';
import AnimationCompetences from '../components/AnimationCompetences';

const projectsToDisplay = [
    {
      title: 'Projet Poulailler',
      description: '"Gestion de Poulailler" est un jeu de simulation où vous démarrez avec un petit élevage de poules. Avec 50€, votre objectif est de maintenir la santé et le moral de vos poules, gérer l alimentation, la reproduction, et éviter maladies et parasites. Chaque jour est crucial, car les décisions impactent la production d œufs, la croissance des poussins, et la survie de votre élevage. Faites preuve de stratégie pour prospérer et éviter la défaite en maintenant un équilibre entre ressources et bien-être des poules.',
      technologies: ['Python'],
      link: '1'
    },
    {
      title: 'Projet Installation d une Infrastructure système & réseau pour un environnement Web',
      description: 'Mise en place d une architecture client-serveur virtuelle sous Linux avec VMware : serveur web (LAMP), contrôleur de domaine (Samba pour Active Directory, BIND pour DNS), serveur FTP. Application de réservation d hôtel déployée sur le serveur web, avec authentification via Active Directory. Configuration réseau interne. Test d authentification et accès au serveur FTP depuis une machine cliente.',
      technologies: ['PHPMyAdmin', 'Wamp', 'MySQL'],
      link: '2'
    },
  ];

const Competences = () => {
  return (
    <div>
       <AnimationCompetences />
       <CustomComponent projectsToChoose={projectsToDisplay} competences={'Gérer le patrimoine informatique'} />
       <CustomComponent projectsToChoose={projectsToDisplay} competences={'Répondre aux incidents et aux demandes d’assistance et d’évolution'} />
       <CustomComponent projectsToChoose={projectsToDisplay} competences={'Développer la présence en ligne de l’organisation'} />
       <CustomComponent projectsToChoose={projectsToDisplay} competences={'Travailler en mode projet'} />
       <CustomComponent projectsToChoose={projectsToDisplay} competences={'Mettre à disposition des utilisateurs un service informatique'} />
       <CustomComponent projectsToChoose={projectsToDisplay} competences={'Organiser son développement professionnel'} />
    </div>
  );
};

export default Competences;
