import React from "react";
import "../styles/About.css";
import aboutImg1 from "../assets/about-section/about1.webp";
import aboutImg2 from "../assets/about-section/about2.webp";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <h2>About Second Run Logistics</h2>
        <p className="about-subtitle">
          Built on Hard Work. Driven by Reliability.
        </p>
        <p>
          Second Run Logistics LLC started with a man and a dream: to build a
          trucking company that customers could count on.
        </p>
        <p>
          What began as a vision has grown into a dedicated transportation
          company serving customers across a variety of industries. We believe
          great service goes beyond simply moving freight—it means communicating
          clearly, treating every load with care, and following through from
          pickup to delivery.
        </p>
        <p>
          <strong>
            Our commitment is simple: provide dependable transportation,
            professional service, and a customer experience that earns your
            business again and again.
          </strong>
        </p>
        <p>
          Our slogan,{" "}
          <em>“The first didn’t work out, let us be your second run!”</em>,
          represents the mindset behind our company. When you need a
          transportation partner you can trust, we're ready to make your next
          shipment a better experience.
        </p>
        <p className="about-closing">
          Reliable service. Straightforward communication. Every load, every
          time.
        </p>
        <a href="#contact" className="about-cta">
          Get in Touch
        </a>
      </div>

      <div className="about-images">
        <div className="about-image-wrapper">
          <img
            src={aboutImg1}
            alt="Our team on the road"
            width="960"
            height="540"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-image-wrapper">
          <img
            src={aboutImg2}
            alt="Second Run Logistics truck"
            width="960"
            height="540"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
