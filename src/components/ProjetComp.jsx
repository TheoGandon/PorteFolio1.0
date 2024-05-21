import React from 'react';
import '../css/ProjetComp.css';
import ModalPdf from '../components/ModalPdf';

const ProjetComp = ({ projects }) => {
  return (
    <div className="project-box" >
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2 id={project.link}>{project.title}</h2>
          <div className='video-project'>
            <div className='button-techno'>
              <p>{project.description}</p>
              <p className='techno'>{project.technologies}</p>
            </div>
            {project.video && (
              <video autoPlay muted loop>
                <source src={project.video} type="video/mp4" />
              </video>
            )}
            {project.video2 && (
              <video autoPlay muted loop>
                <source src={project.video2} type="video/mp4" />
              </video>
            )}
            {project.image && (<img className='img-projet' src={project.image} alt='' />) }
            {project.image2 && (<img className='img-projet' src={project.image2} alt='' />) }
            {project.image3 && (<img className='img-projet' src={project.image3} alt='' />) }
            {project.pdf && (<ModalPdf PDF={project.pdf} />) }
            {project.linkgit && (<a href={project.linkgit} target='_blank' rel='noreferrer'><button className='button-git'>Voir le code</button></a>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjetComp;