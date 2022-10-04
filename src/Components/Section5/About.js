import React from 'react';
import "./About.css";
import avatar from "../../images/About/geralt.jpg"
import Calendly from '../Calendly/Calendly';

const About = () => {
    return (
        <div className="about-me-container">
            <h2>
                Contact me,
                <br />
                so that we can have a discussion about your next project!
            </h2>
            <div className="about-me-content">
                <div className="about-me-avatar">
                    <img src={avatar} alt="" />
                    <p>
                     My name is Geralt of Rivia, I slay monsters, help out kingdoms in need and also build web projects.
                </p>
                </div>
                <div className="about-me-calender"> 
            <Calendly />
            </div>
            </div>
            
        </div>
    );
};

export default About;