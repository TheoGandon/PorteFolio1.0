import React from 'react';
import '../css/ProjetComp.css';

const ProjetComp = ({ projects }) => {
  return (
    <div className="project-box">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2>{project.title}</h2>
          <div className='video-project'>
          <p>{project.description}</p>
          <video autoPlay muted loop>
          <source src={project.video} type="video/mp4" />
          </video>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjetComp;