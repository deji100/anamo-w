"use client"

import { Link } from "react-scroll";

const Links = () => {
    return (
        <div className="scroll-link">
            <Link to="about" spy={true} smooth={true} duration={500} className="link">About</Link>
            <Link to="cdm" spy={true} smooth={true} duration={500} className="link">CDM</Link>
            <Link to="solution" spy={true} smooth={true} duration={500} className="link">Solution Suite</Link>
            <Link to="partner" spy={true} smooth={true} duration={500} className="link">Partners</Link>
            <Link to="faq" spy={true} smooth={true} duration={500} className="link">FAQ</Link>
        </div>
    )
}

export default Links