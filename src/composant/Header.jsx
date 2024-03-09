import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import '../css/NavBar.css';

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <motion.div className='nav-link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <a href="/">Accueil</a>
        </motion.div>
        <motion.div className='nav-link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <a href="/presentation">Présentation</a>
        </motion.div>
        <motion.div className='nav-link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <a href="/competences">Compétences</a>
        </motion.div>
        <motion.div className='nav-link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <a href="/projet">Projets</a>
        </motion.div>
        <motion.div className='nav-link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <a href="/stage">Stages</a>
        </motion.div>
        <motion.div className='nav-link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variants={item}>
          <a href="/contact">Contact</a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
