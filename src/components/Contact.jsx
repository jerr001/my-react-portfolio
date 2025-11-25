import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/jeremiahobembe7@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _captcha: "false",
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Error sending message. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <i className="bx bx-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>jeremiahobembe7@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <i className="bx bx-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+234 814 352 9665</p>
              </div>
            </div>

            <div className="info-item">
              <i className="bx bx-map"></i>
              <div>
                <h3>Location</h3>
                <p>Remote / Available Worldwide</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a
                  href="https://github.com/jerr001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jeremiah-obembe-a25381314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  href="https://x.com/jeremiah_obembe?t=gu748_QUUcZ4-4g8Aj9XpQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="x-icon-link"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="x-icon"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitMessage && (
              <p
                className={`submit-message ${
                  submitMessage.includes("successfully") ? "success" : "error"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
