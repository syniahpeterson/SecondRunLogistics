import { lazy, Suspense } from "react";
import { FaTruckMoving } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";

const Services = lazy(() => import("./sections/Services.jsx"));
const About = lazy(() => import("./sections/About.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <div className="section-divider" aria-hidden="true">
        <span>
          <FaTruckMoving />
        </span>
      </div>
      <Suspense fallback={null}>
        <Services />
      </Suspense>
      <div className="section-divider" aria-hidden="true">
        <span>
          <FaTruckMoving />
        </span>
      </div>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
