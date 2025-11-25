import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";

function Hero() {
  const infoRef = useRef(null);
  const imgRef = useRef(null);

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

    if (infoRef.current) observer.observe(infoRef.current);
    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home-info" ref={infoRef}>
          <h1 className="intro">Hi, I'm Jeremiah Obembe</h1>
          <h2>Fullstack Web Developer & Graphic Designer</h2>
          <p>
            I'm a passionate professional with 5+ years of experience crafting
            user-friendly digital experiences. I specialize in full-stack web
            development using HTML5, CSS3, JavaScript, React, Next.js, Node.js,
            Express, MongoDB, and Firebase, while also bringing creativity to
            life through graphic design.
          </p>
          <div className="btn-sci">
            <a
              href="/docs/JeremiahObembeCV.pdf"
              className="btn"
              download="JeremiahObembeCV.pdf"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </a>
            <div className="sci">
              <a
                href="https://github.com/jerr001"
                aria-label="GitHub Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jeremiah-obembe-a25381314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                aria-label="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://x.com/jeremiah_obembe?t=gu748_QUUcZ4-4g8Aj9XpQ&s=09"
                aria-label="X Profile"
                target="_blank"
                rel="noopener noreferrer"
                className="x-icon-link"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="x-icon">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="home-img" ref={imgRef}>
          <div className="img-box">
            <img src="/images/jeremiah.png" alt="Jeremiah Obembe" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
