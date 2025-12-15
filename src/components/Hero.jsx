import React from 'react';

const Hero = ({ title, subtitle, image }) => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
