import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>HOUSE OF<br />ENGAGEMENT</h2>
                    <p>
                        From Talent To Impact.<br />
                        Connecting creators, artists, and brands through culture.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Menu</h3>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#talents">Talents</a></li>
                        <li><a href="#cases">Cases</a></li>
                        <li><a href="#lets-engage">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h3>Socials</h3>
                    <ul>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">TikTok</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    &copy; {new Date().getFullYear()} House of Engagement. All rights reserved.
                </div>
                <div className="credits">
                    Amsterdam, NL
                </div>
            </div>
        </footer>
    );
};

export default Footer;
