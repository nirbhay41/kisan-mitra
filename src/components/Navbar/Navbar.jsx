import Button from "../Button/Button";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import firebase from 'firebase';
import logo from '../../resources/logo_transp.webp';

function Navbar({backgroundStyle}) {
  const checkStyle = backgroundStyle === 'bg-grey' ? 'bg-grey' : 'bg-black';

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else setButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className={`navbar ${checkStyle}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img id="logo" src={logo} alt='kishan-mittre logo'/>
              <p>Kishan-Mittre</p>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? `nav-menu active ${checkStyle}` : `nav-menu ${checkStyle}`}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/info" className="nav-links" onClick={closeMobileMenu}>
                Information
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/schemes" className="nav-links" onClick={closeMobileMenu}>
                Govt Schemes
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/forum" className="nav-links" onClick={closeMobileMenu}>
                Discussion Forum
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Button buttonStyle="btn--outline" onClick={()=> firebase.auth().signOut()}>Logout</Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
