import React from 'react';
import './About.css';
import womanNewspaperImg from '../assets/images/woman-newspaper.jpg';
import houseSignImg from '../assets/images/house-sign.png';
import nypLogo from '../assets/images/logo-nyp.png';
import mercedesLogo from '../assets/images/logo-mercedes.png';
import redbullLogo from '../assets/images/logo-redbull.png';
import uaLogo from '../assets/images/logo-underarmour.png';
import pumaLogo from '../assets/images/logo-puma.png';
import creativeLogo from '../assets/images/logo-creative.png';

const About = () => {
    const logos = [
        { src: nypLogo, alt: "New York Pizza", className: "nyp" },
        { src: redbullLogo, alt: "Red Bull", className: "redbull" },
        { src: mercedesLogo, alt: "Mercedes", className: "mercedes" },
        { src: uaLogo, alt: "Under Armour", className: "ua" },
        { src: pumaLogo, alt: "Puma", className: "puma" },
        { src: creativeLogo, alt: "Creative", className: "creative" }
    ];

    return (
        <div className="about-container">
            <div className="hero-text-section">
                <h1 className="hero-title">
                    FROM TALENT<br />
                    TO IMPACT
                </h1>

                <div className="hero-description">
                    <p>
                        House of Engagement is een management agency die zich focust op creators en
                        artiesten die cultureel relevant zijn en bouwen aan carrières via content, muziek
                        en community. Met kennis van social media en de muziekindustrie slaan wij de
                        brug tussen creators, artiesten en merken.
                    </p>
                </div>

                <button className="hero-cta-button">
                    GET IN TOUCH
                    <span className="arrow">→</span>
                </button>

                <div className="hero-social-proof">
                    <span className="social-label">TRUSTED BY</span>
                    <div className="social-logos-container">
                        <div className="social-logos-track">
                            {/* First set of logos */}
                            {logos.map((logo, index) => (
                                <img key={`logo-${index}`} src={logo.src} alt={logo.alt} className={`social-logo ${logo.className}`} />
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {logos.map((logo, index) => (
                                <img key={`logo-dup-${index}`} src={logo.src} alt={logo.alt} className={`social-logo ${logo.className}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-visual-section">
                <div className="image-card vertical-card">
                    <img src={womanNewspaperImg} alt="Woman reading newspaper" className="card-image" />
                </div>
                <div className="image-card horizontal-card">
                    <img src={houseSignImg} alt="House of Engagement sign" className="card-image" />
                </div>
            </div>
        </div>
    );
};

export default About;
