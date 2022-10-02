import React, { useState} from 'react';
import { navItems, socialIcons, Logo } from '../NavbarComponents';
import "./Navbar.css"
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [navMenu, setNavMenu] = useState(false);

    const closeMenu = () => {
        setNavMenu(false);
    };
    window.addEventListener("scroll", closeMenu);

    const hamburger = (
        <button className="hamburger-container" onClick={() => setNavMenu(!navMenu)}>
            <div className={navMenu ? "close-hamburger" : "hamburger"}>
                <span className="ham-span"></span>
                <span className="ham-span"></span>
                <span className="ham-span"></span>
            </div>
        </button>
    );

    const dropDown = (
        <div className="show-nav-items">
        <div className="dropdown-close hamburger-container">{hamburger}</div>
        {navItems.map(({ name, id }) => (
        <Link to={id} className="nav-item" onClick={() => setNavMenu(false)}>
            {name}
        </Link>
        ))}
    </div>
    )

    return (
        <div className="navbar">
            <div className="nav-icon-container">
                {socialIcons.map((icon) => (
                    <button href="" className="nav-icon" >
                        {icon}
                    </button>
                ))}
            </div>
            <div className="logo-container">{Logo}</div>
            {hamburger}
            {navMenu && dropDown}
          
        </div>
    );
};

export default Navbar;