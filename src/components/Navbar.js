import React from "react";
import Logo from "../Assets/logo.png.png";
import ss1 from "../Assets/ss1.webp";
import ss2 from "../Assets/ss2.png";
import ss3 from "../Assets/ss3.png";
import ss4 from "../Assets/ss4.png";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>


function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo} />

                <Link to="/inspiration">Inspiration</Link>
                <Link to="/work">Find Work</Link>
                <Link to="/design">Learn Design</Link>
                <Link to="/pro">Go Pro</Link>
                <Link to="/files">Design Files</Link>
                <Link to="/designers">Hire Designers</Link>
                <i class="bi-search"></i>
                <button className="button">Share my work</button>
                <button className="button1">Sign in</button>

            </div>
        </div>
    );
}

export default Navbar;
