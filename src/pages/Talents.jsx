import React from 'react';
import './Talents.css';
import { talents } from '../assets/talent_placeholders';

const Talents = () => {
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
