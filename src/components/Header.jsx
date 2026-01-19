import React, { useState } from 'react';
import './Header.css';
import logoImg from '../assets/images/logo.png';

const Header = ({ currentPage, onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = ['about', 'talents', 'cases'];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigate = (item) => {
        onNavigate(item);
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="logo-container">
                <img src={logoImg} alt="House of Engagement" className="logo" />
            </div>

            <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`nav ${isMenuOpen ? 'mobile-visible' : ''}`}>
                {navItems.map((item) => (
                    <a
                        key={item}
                        href={`#${item}`}
                        className={`nav-link ${currentPage === item ? 'active' : ''}`}
                        onClick={() => handleNavigate(item)}
                    >
                        {item}
                    </a>
                ))}
            </nav>

            <a href="#lets-engage" className="cta-button" onClick={() => setIsMenuOpen(false)}>
                Let's engage
                <span className="arrow">→</span>
            </a>
        </header>
    );
};

export default Header;
