import React, { useEffect, useRef } from "react";
import "../styles/About.css";

function About() {
  const contentRef = useRef(null);

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

    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="content-section" ref={contentRef}>
          <div className="title">
            <h1>About Me</h1>
          </div>
          <div className="content">
            <h3 style={{ color: "#fff", marginBottom: "1rem" }}>
              Hi, I'm Jeremiah.
            </h3>
            <p>
              I'm a passionate Fullstack Developer and Graphic Designer with 5+
              years of experience crafting engaging digital experiences. Based
              in Lagos, Nigeria, I specialize in full-stack web development,
              UI/UX, and branding. My expertise spans both frontend technologies
              (HTML5, CSS3, JavaScript, React, Next.js) and backend development
              (Node.js, Express, MongoDB, Firebase), enabling me to build
              complete, scalable web applications from concept to deployment.
            </p>
            <p>
              I'm proficient in modern development tools including Git, GitHub,
              Vercel, and API integration, with a keen eye for creating
              intuitive, visually stunning solutions that drive results. Beyond
              code, I bring creative flair through graphic design using Canva
              and Adobe Photoshop. Let's collaborate! Contact me at{" "}
              <a href="mailto:jeremiahobembe7@gmail.com" className="mail">
                jeremiahobembe7@gmail.com
              </a>{" "}
              or connect on{" "}
              <a
                href="https://www.linkedin.com/in/jeremiah-obembe-a25381314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="mail"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              .
            </p>
            <div className="cv-download">
              <a
                href="/docs/JeremiahObembeCV.pdf"
                className="cv-button"
                download
              >
                Download My CV
              </a>
            </div>
          </div>
          <div className="skills-section">
            <h3>Skills</h3>
            <ul className="skills-list">
              <li>
                Frontend Development: HTML5, CSS3, JavaScript (ES6+), React,
                Next.js
              </li>
              <li>Backend Development: Node.js, Express.js, RESTful APIs</li>
              <li>Database & Cloud: MongoDB, Firebase, Vercel</li>
              <li>
                Tools & Technologies: Git, GitHub, Chrome DevTools, Postman
              </li>
              <li>
                Core Skills: Responsive Design, API Integration, UI/UX,
                Authentication
              </li>
              <li>Graphic Design: Canva, Adobe Photoshop, Branding</li>
            </ul>
          </div>

          <div className="stats-section">
            <div className="stat-item">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
