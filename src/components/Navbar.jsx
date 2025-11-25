import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuActive(false);
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "tech-stack",
        "portfolio",
        "services",
        "testimonials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 150;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <a
        href="#home"
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("home");
        }}
      >
        <span id="name">Jere</span>miah.
      </a>
      <div className="toggle-menu">
        <div className="hamburger-icon" onClick={toggleMenu}>
          {isMenuActive ? "✕" : "☰"}
        </div>
        <ul className={`nav-menu ${isMenuActive ? "active" : ""}`}>
          <li className={activeSection === "home" ? "active" : ""}>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("home");
              }}
            >
              Home
            </a>
          </li>
          <li className={activeSection === "about" ? "active" : ""}>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("about");
              }}
            >
              About
            </a>
          </li>
          <li className={activeSection === "portfolio" ? "active" : ""}>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("portfolio");
              }}
            >
              Portfolio
            </a>
          </li>
          <li className={activeSection === "services" ? "active" : ""}>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("services");
              }}
            >
              Services
            </a>
          </li>
          <li className={activeSection === "testimonials" ? "active" : ""}>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("testimonials");
              }}
            >
              Testimonials
            </a>
          </li>
          <li className={activeSection === "contact" ? "active" : ""}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
