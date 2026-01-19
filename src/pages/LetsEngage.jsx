import React from 'react';
import './LetsEngage.css';

const LetsEngage = () => {
    return (
        <div className="lets-engage-container">
            <div className="engage-card">
                <div className="engage-left">
                    <h1 className="lets-engage-title">LET'S<br />ENGAGE</h1>
                    <div className="contact-info">
                        <p className="contact-intro">Ready to make an impact?</p>
                        <div className="contact-details">
                            <a href="mailto:hello@houseofengagement.com" className="contact-link">
                                hello@houseofengagement.com
                            </a>
                            <p>+31 (0) 20 123 45 67</p>
                            <p>Amsterdam, The Netherlands</p>
                        </div>
                    </div>
                </div>

                <div className="engage-right">
                    <form className="engage-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" id="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <textarea id="message" rows="4" placeholder="Tell us about your project"></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            SEND MESSAGE <span className="arrow">→</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LetsEngage;
