import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      frameId = 0;
      const marker =
        window.scrollY + document.querySelector("nav").offsetHeight + 24;
      const sections = [...document.querySelectorAll("section")];
      const currentSection = sections
        .filter((section) => section.offsetTop <= marker)
        .sort((a, b) => b.offsetTop - a.offsetTop)[0];

      if (currentSection) setActiveSection(currentSection.id);
    };

    const handleScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
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
