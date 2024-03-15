import React from "react";
import "../style/hero.css";
import curve from "../assets/Vector 33.png";
import web from "../assets/77.svg";
import logo1 from "../assets/logo1.svg"
import logo2 from "../assets/logo2.svg"
import logo3 from "../assets/logo3.svg"
import logo4 from "../assets/logo4.svg"
import logo5 from "../assets/logo5.svg"

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="info">
          <h1>Turn Your Thoughts To Reality</h1>
          <img src={curve} alt="curve" />
          <p>
            We are driven by the relentless pursuit of technological excellence.
            Our mission is to empower companies with a deep understanding of the
            latest technologies.
          </p>
          <div className="search-bar">
            <input type="text" placeholder="Enter Your Phone" />
            <button>Request Call</button>
          </div>
        </div>
        <div className="image">
          <img src={web} alt="web" />
        </div>
      </div>
      <div className="logos">
        <div className="logo">
        <img src={logo1} alt="logo"/>
        <p>PRISM</p>
        </div>
        <div className="logo">
        <img src={logo2} alt="logo"/>
        <p>GammaLab</p>
        </div>
        <div className="logo">
        <img src={logo3} alt="logo"/>
        <p>O_Chip</p>
        </div>
        <div className="logo">
        <img src={logo4} alt="logo"/>
        <p>Internus</p>
        </div>
        <div className="logo">
        <img src={logo5} alt="logo"/>
        <p>I X O N</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
