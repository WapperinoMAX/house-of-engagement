import React from 'react';
import './Talents.css';
import talentFraasie from '../assets/images/talent-fraasie-new.png';
import talent2 from '../assets/images/talent-2.jpg';
import talentAshi from '../assets/images/talent-ashi-new.png';
import talent4 from '../assets/images/talent-4.jpg';
import talent5 from '../assets/images/talent-5.jpg';
import talentSigourney from '../assets/images/talent-sigourney-new.png';

const Talents = () => {
    const talents = [
        { id: 1, name: 'FRAASIE', image: talentFraasie },
        { id: 2, name: 'NIMO', image: talent2 },
        { id: 3, name: 'ASHI', image: talentAshi },
        { id: 4, name: 'JORDAN KNOWS', image: talent4 },
        { id: 5, name: 'P.APE', image: talent5 },
        { id: 6, name: 'SIGOURNEY K', image: talentSigourney }
    ];

    return (
        <div className="talents-container">
            <div className="talents-hero">
                <h1 className="talents-title">
                    Meet Our<br />
                    Talents
                </h1>
                <div className="talents-description">
                    <p>
                        Bij House of Engagement staat talent altijd voorop.
                        Wij geloven dat sterke samenwerkingen beginnen bij de juiste match,
                        daarom zetten we identiteit, persoonlijkheid en culturele relevantie
                        van creators en artiesten centraal.
                    </p>
                </div>
            </div>

            <div className="talents-grid">
                {talents.map((talent) => (
                    <div key={talent.id} className="talent-card">
                        <img src={talent.image} alt={talent.name} className="talent-image" />
                        <div className="talent-name">{talent.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Talents;
