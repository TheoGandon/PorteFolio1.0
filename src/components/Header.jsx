import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import '../css/Header.css';
import { useNavigate, useLocation } from 'react-router-dom';
import GooeyButton from './GooeyButton';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activePage = location.pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => () => {
    navigate(path);
  };

  return (
    <motion.div className={`nav-main ${isOpen ? 'nav-open' : ''}`} variants={container} initial="hidden" animate="visible">
      <div className='nav-title'>
        <motion.div variants={item}>
          <Typewriter options={{ autoStart: true, loop: true, delay: 50, strings: 'Theo Gandon' }} />
        </motion.div>
      </div>
      <div className='burger-icon' onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
        <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
        <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
      </div>
      <div className='nav-linker'>
        <motion.div className={`nav-link ${activePage === '/' ? '' : 'container'}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <div onClick={handleNavigation('/')}><GooeyButton buttonText={'Accueil'}/></div>
        </motion.div>
        <motion.div className={`nav-link ${activePage === '/presentation' ? '' : 'container'}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <div onClick={handleNavigation('/presentation')}><GooeyButton buttonText={'Présentation'}/></div>
        </motion.div>
        <motion.div className={`nav-link ${activePage === '/competences' ? '' : 'container'}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <div onClick={handleNavigation('/competences')}><GooeyButton buttonText={'Compétences'}/></div>
        </motion.div>
        <motion.div className={`nav-link ${activePage === '/projets' ? '' : 'container'}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <div onClick={handleNavigation('/projets')}><GooeyButton buttonText={'Projets'}/></div>
        </motion.div>
        <motion.div className={`nav-link ${activePage === '/stages' ? '' : 'container'}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <div onClick={handleNavigation('/stages')}><GooeyButton buttonText={'Stages'}/></div>
        </motion.div>
        <motion.div className={`nav-link ${activePage === '/veille' ? '' : 'container'}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <div onClick={handleNavigation('/veille')}><GooeyButton buttonText={'Veilles technologiques'}/></div>
        </motion.div>
        <motion.div className={`nav-link ${activePage === '/contact' ? '' : 'container'}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <div onClick={handleNavigation('/contact')}><GooeyButton buttonText={'Contact'}/></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
