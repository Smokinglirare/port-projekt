import React from 'react';
import "./Hero.css"
import underline from "../../images/Vector.svg"

const Hero = () => {
    return (
        <div className="hero-container">
           <div className="hero-content">
                <div className="hero-heading-container">
                  <h1 className="hero-heading">
                    Your Next Project <span>Done Right</span>
                    <img src={underline} alt="" />
                    </h1>    
                </div>
                <div className="hero-content-highlights">
                    <div className="hero-cards">
                        <h2>190</h2>
                        <h5>years of experience</h5>
                    </div>
                    <div className="hero-cards">
                        <h2>100+</h2>
                        <h5>projects completed</h5>
                    </div>
                    <div className="hero-cards">
                        <h2>100+</h2>
                        <h5>jobs</h5>
                    </div>
                    <div className="hero-cards">
                        <h2>100+</h2>
                        <h5>coolness</h5>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Hero;