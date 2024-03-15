import React from "react";
import "../style/about.css";
import about from '../assets/about.png'

const About = () => {
  return (
    <div className="about">
      <div className="container">
      <div className="about-info">
        <h1>About Us</h1>
        <p>
          We are a leading force in technology promotion. With our roots in
          Saudi Arabia and a new chapter revealing itself in Egypt, we bring a
          wealth of experience and knowledge to empower businesses and
          organizations. Our primary interest is in exploiting the potential of
          modern concepts such as big data analytics, artificial intelligence,
          computer vision, and Internet of Things solutions From streamlining
          financial processes through advanced accounting software and financial
          management systems, to using data effectively with useful data
          analytics tools, we strive to facilitate growth. E-commerce solutions
          provide businesses with a closer experience to customers, while
          e-learning platforms are revolutionizing education in the digital age.
          In the field of ERP, we provide comprehensive software solutions that
          improve operations and facilitate smarter decision-making. With a firm
          commitment to excellence, we collaborate closely with our clients,
          adapting our services to meet their unique goals. Join us on our
          journey of transformation as we use technology to shape a better
          future for business in Saudi Arabia, Egypt, and beyond.
        </p>
      </div>
      <div className="about-img">
      <img src={about} alt='about'/>
      </div>
      </div>
      <div className="analysis">
        <div className="analys">
          <h1>782</h1>
          <p>Clients</p>
        </div>
        <div className="analys">
          <h1>782</h1>
          <p>Completed Projects</p>
        </div>
        <div className="analys">
          <h1>782</h1>
          <p>IT Products</p>
        </div>
        <div className="analys">
          <h1>782</h1>
          <p>Project Spending</p>
        </div>
      </div>
    </div>
  );
};

export default About;
