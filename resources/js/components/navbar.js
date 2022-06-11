import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Logo from "./logo.png";
import LogoText from "./logo-text.png";

const navbar = () => {
    return(
        <nav className="navbar navbarBg">
            <div>
                <Link className="navbar-brand zero-margin-padding" to="/">
                <img src={Logo} className="d-inline-block align-top logo" alt="KryptoJob Logo" loading="lazy" />
                </Link>
                <img src={LogoText} className="d-inline-block align-top logo-text" alt="KryptoJob Logo Text" loading="lazy" />
            </div>
            <div className="control-btns">
            <Link to="/list"><FontAwesomeIcon icon="desktop" className="icon"/>Dashboard</Link>
            <Link to="/postjob"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Post a Job</Link>
                {/* <button className="unactive"><FontAwesomeIcon icon="home" className="icon"/>Home</button>
                <button className="active"><Link to="/list"><FontAwesomeIcon icon="desktop" className="icon"/>Dashboard</Link></button>
                <button className="active"><Link to="/postjob"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Create Job</Link></button> */}
            </div>
        </nav>
    )
}

export default navbar;
