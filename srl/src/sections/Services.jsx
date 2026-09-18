import React, { useEffect, useRef } from "react";
import "../styles/Services.css";
import servicesData from "../data/services";

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Reveal each card once when it enters the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <p className="services-subtitle">
        Reliable Transportation. Built Around Your Needs.
      </p>
      <p className="services-intro">
        From local and regional delivery to last-mile and expedited
        transportation, Second Run Logistics provides dependable solutions to
        keep your freight moving. We focus on reliable service, clear
        communication, and getting every shipment where it needs to go.
      </p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="service-card"
          >
            <img
              src={service.img}
              alt={service.alt}
              width={service.width}
              height={service.height}
              loading="lazy"
              decoding="async"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <a href="#contact" className="services-cta">
        Request a Quote
      </a>
    </section>
  );
};

export default Services;
