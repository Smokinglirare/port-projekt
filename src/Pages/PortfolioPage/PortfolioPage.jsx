import React from 'react';
import PortfolioProjects from '../../Components/Section3/PortfolioCards/PortfolioProjects';
import "./PortfolioPage.css";

const PortfolioPage = () => {
    return (
        <div className="pp-container">  
            <h1>
                Take a look at all of our projects <br />
                There is alot to check out!
            </h1>
            <PortfolioProjects />
        </div>
    );
};

export default PortfolioPage;