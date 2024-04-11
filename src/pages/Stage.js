import React from 'react';
import '../css/Stage.css';
import { FaCss3, FaHtml5, FaReact, FaJs} from 'react-icons/fa';
import { BiLogoFirebase } from "react-icons/bi";
import Shakti from '../asset/ProjetVideo/Shakti/shakti.mp4';
import Industrie from '../asset/ProjetVideo/Industrie/industrie.mp4';

const Stage = () => {
    const stages = [
        {
            id: 1,
            entreprise: 'Réstaurant Industie',
            poste: 'Stage développeur web',
            duree: '2 mois',
            description: 'Durant‎ la‎ période‎ du‎ 22‎ juin‎ 2023‎ au‎ 26‎ juillet‎ 2023,‎ j’ai‎ eu‎ l’opportunité‎ d’effectuer‎ un‎ stage‎ dans‎ le‎ restaurant‎ « L’industrie » en‎ tant‎ qu’étudiant‎ en‎ première‎ année‎ à‎ l’EPSI.‎ Pour‎ ce‎ stage‎ ma‎ mission‎ principale‎ a‎ constitué‎ à‎ effectuer‎ une‎ refonte‎ complète‎ de‎ A‎ à‎ Z‎ du‎ site‎ web‎ du‎ restaurant.‎ Ma‎ mission‎ était‎ aussi‎ de‎ refondre‎ mais‎ dans‎ une‎ nouvelle‎ version‎ plus‎ moderne,‎ attrayante‎ et‎ pratique‎ pour‎ les‎ utilisateurs.‎ Pour‎ effectuer‎ cette‎ mission‎ j’ai‎ utilisé‎ React‎ JS‎ sur‎ Visual‎ Studio‎ Code,‎ et‎ j’ai‎ également‎ hébergé‎ le‎ site‎ web‎ sur‎ Firebase‎ de‎ Google.',
            comp1: <FaCss3/>,
            comp2: <FaHtml5/>,
            comp3: <FaReact/>,
            comp4: <BiLogoFirebase />,
            video: Industrie,
        },
        {
            id: 2,
            entreprise: 'Shakti Népal',
            poste: 'Stage développeur Web',
            duree: '2 mois',
            description: 'Dans le cadre de mon stage au sein de l\'association Shakti Népal, axée sur l\'aide humanitaire avec un focus particulier sur l\'insertion des Népalais dans les domaines de l\'éducation, de l\'environnement et de la santé, ma mission principale était de concevoir et mettre en place un site vitrine. L\'objectif était de présenter l\'association, faciliter les contacts, recueillir des dons, promouvoir le parrainage d\'enfants, et encourager le bénévolat. Mon interlocuteur principal, le responsable de l\'association et mon maître de stage, avait exprimé le besoin d\'un site web dynamique et facilement modifiable. Pour répondre à cette exigence, la décision a été prise d\'utiliser la plateforme Wix, en exploitant les possibilités offertes par JavaScript, HTML, et CSS pour personnaliser le site selon les besoins spécifiques de l\'association.',
            comp1: <FaCss3/>,
            comp2: <FaHtml5/>,
            comp3: <FaJs/>,
            video: Shakti,
        },
    ];

    return (
        <div>
            <h1 className='stage-title'>Mes stages</h1>
            {stages.map((stage) => (
                <div className='stage-content' key={stage.id}>
                    <h2 className='stage-title2'>{stage.entreprise}</h2>
                    <div className='content-stage'>
                    <p className='text-stage'>Poste: {stage.poste}</p>
                    <p className='text-stage'>Durée: {stage.duree}</p>
                    <p className='text-stage'>Description: {stage.description}</p>
                    <h2 className='stage-title2'>Compétences acquises</h2>
                    <p className='icon-stage'>{stage.comp1}</p>
                    <p className='icon-stage'>{stage.comp2}</p>
                    <p className='icon-stage'>{stage.comp3}</p>
                    { stage.comp4 && (
                        <p className='icon-stage'><BiLogoFirebase />
                        </p>
                    )}
                    </div>
                    {stage.video && (<video autoPlay muted loop>
                        <source src={stage.video} type="video/mp4" />
                    </video>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Stage;