import "./NavbarComponents.css";
import { Link } from "react-router-dom";
import { FaYoutube, FaDribbble, FaTwitter, FaGithub } from "react-icons/fa" 


export const socialIcons = [
    <FaYoutube />,
    <FaDribbble />,
    <FaTwitter />,
    <FaGithub />
]

export const Logo = <Link to="/" className="logo">Mshowkat</Link>

export const navItems = [
    {
        name: "Home",
        id: "/"
    },
    {
        name: "About",
        id: "about"
    },
    {
        name: "Projects",
        id: "projects"
    },
    {
        name: "Appointment",
        id: "appointment"
    }
]