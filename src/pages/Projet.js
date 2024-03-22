import React from 'react';
import ProjetComp from '../components/ProjetComp';
import test from '../asset/test.mp4';

const projects = [
  {
    title: 'Projet Poulailler',
    description: '"Gestion de Poulailler" est un jeu de simulation où vous démarrez avec un petit élevage de poules. Avec 50€, votre objectif est de maintenir la santé et le moral de vos poules, gérer l alimentation, la reproduction, et éviter maladies et parasites. Chaque jour est crucial, car les décisions impactent la production d œufs, la croissance des poussins, et la survie de votre élevage. Faites preuve de stratégie pour prospérer et éviter la défaite en maintenant un équilibre entre ressources et bien-être des poules.',
    technologies: ['Python'],
    video: test,
  },
  {
    title: 'Projet Installation d une Infrastructure système & réseau pour un environnement Web',
    description: 'Mise en place d une architecture client-serveur virtuelle sous Linux avec VMware : serveur web (LAMP), contrôleur de domaine (Samba pour Active Directory, BIND pour DNS), serveur FTP. Application de réservation d hôtel déployée sur le serveur web, avec authentification via Active Directory. Configuration réseau interne. Test d authentification et accès au serveur FTP depuis une machine cliente.',
    technologies: ['PHPMyAdmin', 'Wamp', 'MySQL'],
    video: test,
  },
];

const Projet = () => {
  return (
    <div>
        <ProjetComp projects={projects} />
    </div>
  );
};

export default Projet;
