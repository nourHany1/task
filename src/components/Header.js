import React from "react";
import '../style/header.css'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import lang from '../assets/Vector.png'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src={logo} alt="logo"/>
      </div>
      <div className="features">
        <p className="home">Home</p>
        <p>Services</p>
        <p>Solutions</p>
        <p>Projects</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
      <div className="lang">
        <div className="search">
          <img src={search} alt="search"/>
        </div>
        <div className="language">
        <img src={lang} alt="lang"/>
        </div>
        <div className="ar">
          <p>AR</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
