import React from 'react';

const ProjetComp = ({ projects }) => {
  return (
    <div className="project-box">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img src={project.imageUrl} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
        </div>
      ))}
    </div>
  );
};

export default ProjetComp;