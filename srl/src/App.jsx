// Main application layout with all sections and navigation
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      {/* Navigation bar */}
      <Navbar />
      {/* Hero/landing section */}
      <Hero />
      {/* About section */}
      <About />
      <div className="section-divider"></div>
      {/* Services section */}
      <Services />
      <div className="section-divider"></div>
      {/* Contact section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
