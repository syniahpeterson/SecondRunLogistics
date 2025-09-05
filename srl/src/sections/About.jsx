// About section with company info and images
import React from "react";
import "../styles/About.css";
import aboutImg1 from "../assets/about1.jpg";
import aboutImg2 from "../assets/about2.png";

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Company description and call-to-action */}
      <div className="about-text">
        <h2>About Second Run Logistics</h2>
        <p>
          Second Run Logistics LLC began with a man and a dream. Since then, we
          have grown into a fast-growing trucking company dedicated to providing
          high-quality service to a wide range of customers across various
          industries. At our core, we are a team of passionate individuals
          committed to delivering exceptional service and ensuring that every
          customer is happy with their decision to choose us.
        </p>
        <p>
          Our company slogan,{" "}
          <em>"The first didn't work out, let us be your second run!"</em>,
          reflects our dedication to offering a fresh start and dependable
          service. We pride ourselves on our respect, integrity, and commitment
          to customer satisfaction.
        </p>
        <a href="#contact" className="about-cta">
          Get in Touch
        </a>
      </div>

      {/* Company images */}
      <div className="about-images">
        <div className="about-image-wrapper">
          <img src={aboutImg1} alt="Our team on the road" />
        </div>
        <div className="about-image-wrapper">
          <img src={aboutImg2} alt="Second Run Logistics truck" />
        </div>
      </div>
    </section>
  );
};

export default About;
