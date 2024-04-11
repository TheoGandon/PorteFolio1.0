import React, { useState } from 'react';
import '../css/CustomComponent.css';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

const ModalComponent = ({ showModal, closeModal, selectedProjects }) => {
  return (
    <div style={{ display: showModal ? 'block' : 'none' }}>
      <div>
        <span onClick={closeModal} style={{ fontSize: '60px', cursor: 'pointer' }}>
          &times;
        </span>
        {selectedProjects.map((project, index) => (
          <li class="item">
            <div class="inner">
              <div key={index} className='competences'>
                <div className='projet'>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className='techno'>{project.technologies}</p>
                  <HashLink to={`/projets#${project.link}`} className='buttonProjet'>
                    Voir le projet
                  </HashLink> 
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

const CustomComponent = ({ projectsToChoose, competences }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleButtonClick = (selectedProjects) => {
    setSelectedProjects(selectedProjects);
    openModal();
  };

  return (
    <motion.div
        className="competence"
        whileHover={{ scale: 1.01, originX: 0, originY: 0}}
        transition={{ type: 'fade', stiffness: 300 }}
      >
    <div className='modal-competences'>
      <h2 >{competences}</h2>
      <button className='button-competences' onClick={() => handleButtonClick(projectsToChoose)}>
        Voir tous les projets
      </button>
      <ModalComponent
        showModal={showModal}
        closeModal={closeModal}
        selectedProjects={selectedProjects}
      />
    </div>
    </motion.div>
  );
};

export default CustomComponent;
