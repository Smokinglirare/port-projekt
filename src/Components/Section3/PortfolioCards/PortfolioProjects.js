import React from 'react';
import { PortfolioList } from '../PortfolioList';
import "./PortfolioProjects.css"

const PortfolioProjects = ({items}) => {
    const limit = items ? items : PortfolioList.length;
    return (
        <div>
            <div className="projects-container">
                {PortfolioList.slice(0, limit).map(({name, img, link}) => 
                    <a className="project-card" 
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener">
                    <div className="project-img-container">
                        <img className="project-img" src={img} alt="" />
                    </div>
                    <div className="product-card-title">
                        <h2>{name}</h2>
                    </div>
                </a>)}
            </div>
        </div>
    );
};

export default PortfolioProjects;