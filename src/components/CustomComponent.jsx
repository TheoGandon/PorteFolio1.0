import React, { useState } from 'react';
import '../css/CustomComponent.css';
import { motion } from 'framer-motion';

const ModalComponent = ({ showModal, closeModal, selectedProjects }) => {
  return (
    <div style={{ display: showModal ? 'block' : 'none' }}>
      <div>
      <span onClick={closeModal} style={{ fontSize: '60px', cursor: 'pointer' }}>
          &times;
        </span>
        {selectedProjects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.technologies}</p>
          </div>
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
        whileHover={{ scale: 1.03, originX: 0, originY: 0}}
        transition={{ type: 'spring', stiffness: 300 }}
      >
    <div className='modal-competences'>
      <h2>{competences}</h2>
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
