import React from 'react';
import './Cases.css';
import case1Img from '../assets/images/cases/case1.png'; // NIMO x MERCEDES GOMES
import case2Img from '../assets/images/cases/case2.png'; // FRAASIE x NEW YORK PIZZA
import case3Img from '../assets/images/cases/case3.png'; // NIMO x FIRST DATES (Vakkenvullers?) - Matching Ref 3

const casesData = [
    {
        id: 1,
        title: "NIMO X MERCEDES GOMES",
        tag: "CAMPAIGNE",
        image: case1Img,
        hasVideo: true
    },
    {
        id: 2,
        title: "FRAASIE X NEW YORK PIZZA", // Based on ref image text "PIZZA AVOND!"
        tag: "MUSIC PRODUCTION", // Based on ref image tag
        image: case2Img, // Use the 2nd image (Neon/Pizza)
        hasVideo: false // Doesn't explicitly show play button in ref? maybe? Assume no for variety or yes. Ref 2 didn't show play button clearly but let's see.
    },
    {
        id: 3,
        title: "VAKKEN VULLERS XL", // Ref 3 text
        tag: "FILM", // Ref 3 tag
        image: case3Img,
        hasVideo: true // Ref shows typical movie poster style
    }
];

const Cases = () => {
    return (
        <div className="cases-container">
            <h1 className="hero-title">CASES</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', marginBottom: 'var(--spacing-lg)' }}>
                Recent projects and strategic collaborations.
            </p>

            <div className="cases-grid">
                {casesData.map((item) => (
                    <div key={item.id} className="case-card">
                        <img src={item.image} alt={item.title} className="case-image" />
                        <div className="case-overlay"></div>

                        {/* Title Overlay - Rendered in HTML for SEO/Access, though images have text baked in? 
                            The reference images seem to have text baked in. 
                            If the uploaded images HAVE text inside them, we should probably hide this text overlay 
                            or make it screen-reader only. 
                            
                            Looking at the prompt "Add Cases section with this references", 
                            and the images provided:
                            User uploaded 3 images. These likely contain the text.
                            So I will NOT render the title on top if it duplicates it, 
                            BUT the design requires consistent typography. 
                            
                            Decision: I will render the TAG and the PLAY BUTTON.
                            I will NOT render the large Title text on top if the image already has it.
                            However, usually for a coded site we want live text.
                            But since the user provided specific "references" which are likely the actual visuals they want,
                            I will assume the images provided are the "posters".
                            
                            I'll leave the title visually hidden or just omitted if the image is the poster.
                            
                            UPDATE: User said "Add Cases section with THIS references".
                            So I will assume the IMAGES ARE THE CARDS. 
                            I'll just add the TAG and PLAY BUTTON if appropriate.
                        */}

                        <div className="case-tag">{item.tag}</div>

                        {item.hasVideo && (
                            <div className="play-button-overlay">
                                <div className="play-icon"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cases;
