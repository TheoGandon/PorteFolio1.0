import React from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { useState } from 'react';

const ModalPdf = ({ PDF }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <div className="buttons-container">
        <a href={PDF} target="_blank" rel="noopener noreferrer" download>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Télécharger
          </motion.button>
        </a>

        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={openModal}>
          Visualiser
        </motion.button>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="CV Modal"
          className="modal"
        >
          <button className="close-cv" onClick={closeModal}>
            Fermer
          </button>
          <iframe title="PDF" src={PDF} style={{ width: '100%', height: '700px' }} />
        </Modal>
      </div>
    </div>
  );
};

export default ModalPdf;
