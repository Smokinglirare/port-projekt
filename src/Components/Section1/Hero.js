import React from 'react';
import "./Hero.css"
//import underline from "../../images/Vector.svg"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="hero-container">

            




           <div className="hero-content">
                <div className="hero-heading-container">
                  <motion.h1 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4}}
                  
                  className="hero-heading">
                    Ready for your<span>next project?</span>   
                
                    </motion.h1>   
                  
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
                        <h5>whatever</h5>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Hero;