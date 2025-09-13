// Responsive navigation bar with theme toggle, logo, and active section highlighting
import React, { useState, useEffect } from "react";
import useTheme from "../hooks/usetheme";
import "../styles/Navbar.css";
import { FaTruckMoving } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Highlight active section in navbar using Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar ${theme}`}>
      {/* Logo and site title */}
      <div className="navbar-left">
        <a href="#hero">
          <img
            src={logo}
            alt="Second Run Logistics Logo"
            className="navbar-logo"
          />
        </a>
        <h1>Second Run Logistics</h1>
      </div>

      {/* Navigation links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
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

      {/* Theme toggle and hamburger menu */}
      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme}>
          <span className="theme-toggle-icon">
            <FaTruckMoving />
          </span>
        </button>
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-toggle-icon">{menuOpen ? "–" : "+"}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
