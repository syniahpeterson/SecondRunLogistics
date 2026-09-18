import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    // Use a narrow viewport band so the section being read becomes active.
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (activeEntry) setActiveSection(activeEntry.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar-left">
        <a href="#hero">
          <img
            src={logo}
            alt="Second Run Logistics Logo"
            className="navbar-logo"
            width="512"
            height="512"
          />
        </a>
        <a className="navbar-title" href="#hero">
          <span className="navbar-title-text">Second Run Logistics</span>
        </a>
      </div>

      <div
        id="primary-navigation"
        className={`nav-links ${menuOpen ? "open" : ""}`}
      >
        <a
          href="#hero"
          className={activeSection === "hero" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#services"
          className={activeSection === "services" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Services
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>

      <div className="nav-actions">
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className="menu-toggle-icon">{menuOpen ? "–" : "+"}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
