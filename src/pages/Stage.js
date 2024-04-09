import React from 'react';
import '../css/Stage.css';

const Stage = () => {
    const stages = [
        {
            id: 1,
            entreprise: 'Réstaurant Industie',
            poste: 'Stage développeur web',
            duree: '2 mois',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nunc nec aliquet ultrices, nisl nunc tincidunt nunc, id aliquam nunc nisl nec nunc.',
        },
        {
            id: 2,
            entreprise: 'Entreprise 2',
            poste: 'Stage développeur Web',
            duree: '2 mois',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nunc nec aliquet ultrices, nisl nunc tincidunt nunc, id aliquam nunc nisl nec nunc.',
        },
    ];

    return (
        <div>
            <h1 className='stage-title'>Mes stages</h1>
            {stages.map((stage) => (
                <div className='stage-content' key={stage.id}>
                    <h2 className='stage-title2'>{stage.entreprise}</h2>
                    <p>Poste: {stage.poste}</p>
                    <p>Durée: {stage.duree}</p>
                    <p>Description: {stage.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Stage;