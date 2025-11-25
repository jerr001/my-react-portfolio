import React, { useEffect, useRef } from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const containerRef = useRef(null);

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

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image:
        "https://ui-avatars.com/api/?name=Sarah+Johnson&background=3a8dd9&color=fff&size=100",
      text: "Jeremiah delivered an exceptional full-stack solution for our e-commerce platform. His expertise in React and Node.js helped us launch 2 weeks ahead of schedule. The codebase is clean, well-documented, and scalable.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO at StartupHub",
      image:
        "https://ui-avatars.com/api/?name=Michael+Chen&background=3a8dd9&color=fff&size=100",
      text: "Working with Jeremiah was a game-changer for our project. He built a robust API with Express and MongoDB that handles 10,000+ daily users. Professional, responsive, and delivers quality work.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image:
        "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=3a8dd9&color=fff&size=100",
      text: "Not only is Jeremiah a skilled developer, but his graphic design work elevated our brand identity. He created our website and all marketing materials with incredible attention to detail.",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container" ref={containerRef}>
        <h2 className="testimonials-title">
          Client <span>Testimonials</span>
        </h2>
        <p className="testimonials-subtitle">
          What people say about working with me
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-icon">
                <i className="bx bxs-quote-alt-left"></i>
              </div>
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i className="bx bxs-star" key={i}></i>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
