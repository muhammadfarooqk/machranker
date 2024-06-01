import React, { useState } from "react";
import { Nav, Navbar, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Header = () => {
    const [activeLink, setActiveLink] = useState('')
    return (
        <header className="header position-absolute">
            <Navbar expand="lg" className="p-0">
                <div className="container-width container-fluid">
                    <Link className="navbar-brand" to="/">
                        <div className="logo">
                            <Image src={logo} fluid/>
                        </div>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="header-list my-2 my-lg-0 d-flex align-items-center justify-content-end">
                            <Link className={`nav-link ${activeLink ===  'terms'  ? 'active' : ''}`} onClick={() => setActiveLink('terms')} to="/terms">Terms & Conditions</Link>
                            <Link className={`nav-link ${activeLink ===  'privacy'  ? 'active' : ''}`} onClick={() => setActiveLink('privacy')} to="/privacy">Privacy Policy</Link>
                            <Link className={`nav-link ${activeLink ===  'faqs'  ? 'active' : ''}`} onClick={() => setActiveLink('faqs')} to="/faqs">FAQ's</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="header-button">
                        <Button className="btn-orange">Download App</Button>
                    </div>
                </div>
            </Navbar>
        </header>
    )
}
export default Header;