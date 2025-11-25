import React, { useEffect, useRef } from "react";
import "../styles/Services.css";

function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      icon: "fas fa-code",
      title: "Digital Solutions",
      description:
        "Custom website development, responsive design, and web applications using modern technologies.",
    },
    {
      icon: "fas fa-palette",
      title: "Visual Identity",
      description:
        "Logo design, branding, print design, and digital design services with tools like Canva and Photoshop.",
    },
    {
      icon: "fas fa-users-cog",
      title: "User Experience (UX) Design",
      description:
        "User-centered design, wireframing, prototyping, and usability testing for intuitive interfaces.",
    },
    {
      icon: "fas fa-laptop-code",
      title: "Fullstack Development",
      description:
        "End-to-end web development with HTML5, CSS3, JavaScript, React, Next.js, Node.js, Express, MongoDB, and Firebase.",
    },
    {
      icon: "fas fa-paint-brush",
      title: "Web Design and Redesign",
      description:
        "Website design, revamp, and optimization for mobile and desktop devices with a focus on aesthetics.",
    },
    {
      icon: "fas fa-box-open",
      title: "Design and Development Packages",
      description:
        "Customized solutions for businesses, including website design, development, and branding.",
    },
  ];

  const handleCardClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="section-heading">My Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="column" key={index}>
              <div
                className="card"
                ref={(el) => (cardsRef.current[index] = el)}
                onClick={handleCardClick}
                style={{ cursor: "pointer" }}
              >
                <div className="icon-wrapper">
                  <i
                    className={service.icon}
                    aria-label={`${service.title} Icon`}
                  ></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h3>Ready to Start Your Project?</h3>
          <p>
            Let's create something amazing together! Contact me to discuss your
            needs.
          </p>
          <a
            href="#contact"
            className="cta-button"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
