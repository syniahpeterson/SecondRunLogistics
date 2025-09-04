// Hero section component for landing page
import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/hero-img.png";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Second Run Logistics LLC</h1>
        <p>First didn't work out, Let us be your Second Run!</p>
        <a href="#contact" className="hero-cta">
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;
