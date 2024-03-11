import React from 'react';
import { motion } from 'framer-motion';
import '../css/Presentation.css';
import '../App.css';
import PDP from '../asset/profile.png';
import { FaPhp, FaSwift, FaCss3, FaHtml5, FaJs, FaDatabase, FaPython, FaReact, FaMobile, FaJava } from 'react-icons/fa';
import { SiSymfony } from 'react-icons/si';
import Modal from 'react-modal';
import ModalPdf from '../components/ModalPdf';
import CV from '../asset/CV.pdf';


const skillsData = [
  { name: 'PHP', icon: FaPhp, documentationLink: 'https://php.net/docs.php' },
  { name: 'Swift', icon: FaSwift, documentationLink: 'https://developer.apple.com/documentation/swift' },
  { name: 'Symfony', icon: SiSymfony, documentationLink: 'https://symfony.com/doc/current/index.html' },
  { name: 'CSS', icon: FaCss3, documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'HTML', icon: FaHtml5, documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'JavaScript', icon: FaJs, documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'MySQL', icon: FaDatabase, documentationLink: 'https://dev.mysql.com/doc/' },
  { name: 'Python', icon: FaPython, documentationLink: 'https://docs.python.org/3/' },
  { name: 'React.js', icon: FaReact, documentationLink: 'https://reactjs.org/docs/getting-started.html' },
  { name: 'React Native', icon: FaMobile, documentationLink: 'https://reactnative.dev/docs/getting-started' },
  { name: 'Java', icon: FaJava, documentationLink: 'https://docs.oracle.com/en/java/javase/16/' },
];

const Presentation = () => {

  const PDF = CV;
  Modal.setAppElement('#root');
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const iconColors = [ 
  '#777BB4', 
  '#FF6C12',     
  '#000000',  
  '#2965F1', 
  '#E44D26',   
  '#F0DB4F',       
  '#00758F',   
  '#3776AB', 
  '#61DAFB',
  '#61DAFB',     
  '#5382A1',       
  ];

 
  const Card = ({ icon }) => {

    const index = skillsData.findIndex((skill) => skill.icon === icon);
    const iconElement = React.createElement(icon, { size: 100, color: iconColors[index % iconColors.length] });
    

    return (
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}>
        <div className="splash" />
        <motion.div className="card" variants={cardVariants}>
          {iconElement}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="App">
      <div className="portfolio-container">
        <motion.div
          className="portfolio-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Présentation</h1>
          <p className='text-presentation'>
          Je suis Théo Gandon, étudiant en informatique à l'EPSI Lille. Passionné par les technologies émergentes et l'innovation, je m'efforce de développer mes compétences dans le vaste monde de l'informatique. Mon portfolio est le reflet de mon parcours académique et de mes projets personnels, mettant en lumière ma créativité et mon engagement envers l'excellence technique. Explorez mon univers numérique et découvrez les différentes facettes de mon parcours informatique. Bienvenue dans mon monde technologique.
          </p>
          <ModalPdf PDF={PDF} />
        </motion.div>
      <div className="skill-bg">
        <div className="skills-container">
          <h2>Compétences</h2>
          <motion.div
            className="icons-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {skillsData.map((skill, index) => (
              <Card className="icons" key={index} icon={skill.icon} />
            ))}
          </motion.div>
        </div>
      </div>
      </div>
      <div className="test-container">
        <h2>A propos de moi</h2>
        <div class="shape-outer circle">
	        <div class="shape-inner circle"><img src={PDP} alt="profile" />a</div>
        </div>
        <p>
          Je m'appelle Théo GANDON et je suis passionné par le développement web et mobile. Actuellement étudiant à l'EPSI Lille depuis 2022.

Compétences techniques :
Développement Web : Maîtrise des langages PHP, Symfony, et JavaScript (React Native / JS) pour concevoir des applications web interactives et modernes.

Base de données : Expérience approfondie avec MySQL pour assurer la gestion efficace des données et optimiser les performances des applications.

Développement Mobile : Connaissance de Swift pour la création d'applications iOS, ainsi qu'en React Native pour le développement d'applications multiplateformes.

Langage polyvalent : Aptitude à utiliser Python pour automatiser des tâches, créer des scripts et résoudre des problèmes de manière efficace.

Au fil de mon parcours académique et professionnel, j'ai eu l'opportunité de travailler sur divers projets qui ont enrichi mes compétences et ma compréhension du développement logiciel. Mon portfolio est le reflet de cette expérience, mettant en avant mes réalisations et démontrant ma capacité à relever des défis techniques.

N'hésitez pas à explorer mon portfolio pour découvrir mes projets passés, mes compétences techniques. Merci de votre visite, et n'hésitez pas à me contacter pour discuter de projets passionnants ou d'opportunités de collaboration.
          
          </p>        
        </div>
    </div>
  );
};

export default Presentation;
