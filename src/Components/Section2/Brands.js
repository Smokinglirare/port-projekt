import React from 'react';
import "./Brands.css";
import netflix from "../../images/Brands/Netflix.svg";
import espresso from "../../images/Brands/espressohouse.svg";
import canon from "../../images/Brands/Canon_wordmark.svg";
import figma from "../../images/Brands/Figma-logo.svg";
import starbucks from "../../images/Brands/starbucks.svg";

import dot from "../../images/brands-dot.svg"

const Brands = () => {

    const brandLogoList = [figma, netflix, espresso, canon, starbucks ]

    return (
        <div className="brands-container">
            <div className="brand-heading">
                <h2>I am proud to have these amazing brands as my clients</h2>
                <img src={dot} alt="" />
            </div>
            <div className="brand-logo-list">
               {brandLogoList.map((logo) => (
                <div className="brand-logo-container">
                    <img className="brand-logo" src={logo} alt="" />
                </div>
               ))} 
            </div>
        </div>
    );
};

export default Brands;