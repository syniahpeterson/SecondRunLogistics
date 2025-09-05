// Services section with animated cards and CTA
import React, { useEffect, useRef } from "react";
import "../styles/Services.css";

// List of services to display
const servicesData = [
  {
    title: "Less Than Truckload (LTL)",
    description:
      "Affordable and flexible shipping for smaller loads. Whether it’s one pallet or several, our LTL service offers fast transit times, real-time tracking, and reliable door-to-door delivery.",
    img: "/src/assets/LTL.png",
  },
  {
    title: "Full Truckload (FTL)",
    description:
      "Perfect for large shipments, our FTL service gives you the entire truck for direct, nonstop transportation. Enjoy faster transit, dedicated capacity, and full control over your delivery.",
    img: "/src/assets/FTL.png",
  },
  {
    title: "Expedited Truckload (ETL)",
    description:
      "When time is critical, our expedited service ensures fast, reliable delivery with dedicated trucks and prioritized routes. Get your freight where it needs to be — on time, every time.",
    img: "/src/assets/expedited.jpg",
  },
  {
    title: "Intermodal Shipping",
    description:
      "A cost-effective, eco-friendly solution that combines rail and truck transport. Intermodal shipping reduces costs, increases reliability, and streamlines long-distance freight movement.",
    img: "/src/assets/intermodal.png",
  },
  {
    title: "White-Glove Service",
    description:
      "Premium shipping for fragile, high-value, or specialized items. Our trained professionals provide careful handling, inside delivery, and setup for a worry-free experience.",
    img: "/src/assets/white-glove.jpg",
  },
];

const Services = () => {
  const cardsRef = useRef([]);

  // Animate service cards on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <p className="services-intro">
        From regional hauls to last-mile delivery, Second Run Logistics is here
        to handle all your transportation needs.
      </p>
      {/* Animated service cards */}
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="service-card hidden"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      {/* Call-to-action button */}
      <a href="#contact" className="services-cta">
        Request a Quote
      </a>
    </section>
  );
};

export default Services;
