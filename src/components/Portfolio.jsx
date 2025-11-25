import React, { useEffect, useRef, useState } from "react";
import "../styles/Portfolio.css";

function Portfolio() {
  const itemsRef = useRef([]);
  const [filter, setFilter] = useState("all");

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

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, [filter]);

  const webProjects = [
    {
      image: `${process.env.PUBLIC_URL}/images/task-manager.png`,
      title: "JavaScript Task Manager",
      description:
        "A feature-rich task management app built with vanilla JavaScript, HTML5, and CSS, allowing users to create tasks with date, time, and priority settings, reorder them via drag-and-drop, and search or clear all tasks.",
      liveDemo: "http://task-manager-rosy-gamma-96.vercel.app",
      github: "https://github.com/jerr001/task-manager",
      category: "frontend",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/weather-dashboard.png`,
      title: "Weather Dashboard",
      description:
        "A dynamic weather dashboard built with JavaScript, HTML5, and CSS, utilizing the OpenWeatherMap API to fetch and display real-time weather data for searched cities with local storage integration.",
      liveDemo: "https://weather-dashboard-henna-one.vercel.app",
      github: "https://github.com/jerr001/weather-dashboard",
      category: "frontend",
    },
    {
      image: `${process.env.PUBLIC_URL}/agency/agency.png`,
      title: "Web Dev Agency",
      description:
        "A simple website for a web development agency built using HTML and CSS, showcasing clean design and basic functionality.",
      liveDemo: `${process.env.PUBLIC_URL}/agency/agency.html`,
      github: null,
      category: "frontend",
    },
  ];

  const fullstackProjects = [
    {
      image:
        "https://via.placeholder.com/600x400/3a8dd9/ffffff?text=E-Commerce+API",
      title: "E-Commerce REST API",
      description:
        "Full-stack e-commerce API built with Node.js, Express, and MongoDB. Features include JWT authentication, product management, shopping cart, order processing, and payment integration with Stripe. Handles 5000+ products efficiently.",
      liveDemo: null,
      github: "https://github.com/jerr001/ecommerce-api",
      category: "fullstack",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
    },
    {
      image:
        "https://via.placeholder.com/600x400/3a8dd9/ffffff?text=Real-Time+Chat",
      title: "Real-Time Chat Application",
      description:
        "Fullstack chat app using React, Node.js, Socket.io, and Firebase. Features real-time messaging, user authentication, online status, typing indicators, and message persistence. Supports 100+ concurrent users.",
      liveDemo: null,
      github: "https://github.com/jerr001/realtime-chat",
      category: "fullstack",
      tech: ["React", "Node.js", "Socket.io", "Firebase"],
    },
    {
      image:
        "https://via.placeholder.com/600x400/3a8dd9/ffffff?text=Blog+Platform",
      title: "Full-Stack Blog Platform",
      description:
        "Complete blogging platform built with Next.js, Node.js, Express, and MongoDB. Features include user authentication, CRUD operations, rich text editor, image uploads, comments system, and SEO optimization.",
      liveDemo: null,
      github: "https://github.com/jerr001/blog-platform",
      category: "fullstack",
      tech: ["Next.js", "Node.js", "Express", "MongoDB"],
    },
  ];

  const graphicProjects = [
    {
      image: `${process.env.PUBLIC_URL}/bizcard-front.jpg`,
      title: "Business Card (Front)",
      description:
        "Designed the front page of a business card for the CEO of Regal Crest, a T-shirt branding and printing company.",
      category: "design",
    },
    {
      image: `${process.env.PUBLIC_URL}/Graphic-01.jpg`,
      title: "Flyer Design (Miracle Service)",
      description:
        "A flyer design for the Living Waters International monthly miracle service, focusing on visual impact.",
      category: "design",
    },
    {
      image: `${process.env.PUBLIC_URL}/Graphic-02.jpg`,
      title: "Flyer Design (Teaching Meeting)",
      description:
        "A flyer design for the Living Waters International weekly teaching meeting, emphasizing clarity and engagement.",
      category: "design",
    },
    {
      image: `${process.env.PUBLIC_URL}/bizcard-back.jpg`,
      title: "Business Card (Back)",
      description:
        "Designed the back page of a business card for the CEO of Regal Crest, a T-shirt branding and printing company.",
      category: "design",
    },
  ];

  const allProjects = [
    ...webProjects,
    ...fullstackProjects,
    ...graphicProjects,
  ];

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

  let itemIndex = 0;

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-wrapper">
        <h1 className="port-title">My Work</h1>
        <p className="portfolio-subtitle">
          A showcase of my development and design projects
        </p>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === "frontend" ? "active" : ""}`}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </button>
          <button
            className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            Full-Stack
          </button>
          <button
            className={`filter-btn ${filter === "design" ? "active" : ""}`}
            onClick={() => setFilter("design")}
          >
            Design
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              className="portfolio-item"
              key={index}
              ref={(el) => (itemsRef.current[itemIndex++] = el)}
            >
              <img src={project.image} alt={`${project.title} Screenshot`} />
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                {project.tech && (
                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <p>{project.description}</p>
                <div className="portfolio-links">
                  {project.liveDemo ? (
                    <a
                      className="link"
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : (
                    project.category !== "design" && (
                      <span className="link disabled">Coming Soon</span>
                    )
                  )}
                  {project.github && (
                    <a
                      className="link"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
