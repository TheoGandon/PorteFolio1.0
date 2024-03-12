import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../css/Footer.css';
import '../App.css';

const Footer = () => {
  return (
    <motion.footer
      className='footer'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='link2'>
        <h3>Contactez-moi</h3>
        <p>Email: theo.gandon9@gmail.com</p>
        <p>Téléphone: +33 6 76 63 61 02</p>
      </div>
      <div className='link'>
        <h3>Suivez-moi</h3>
        <a href='https://fr.linkedin.com/in/theo-gandon-4b7b3a269'>
          <FaLinkedin size={30} />
        </a>
        <a href='https://github.com/TheoGandon'>
          <FaGithub size={30} />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
