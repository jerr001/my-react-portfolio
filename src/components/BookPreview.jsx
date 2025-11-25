import React, { useState } from "react";
import "../styles/BookPreview.css";

function BookPreview() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="book-preview-section" id="book-preview">
      <div className="book-preview-wrapper">
        <header className="hero">
          <h1 className="hero__title">Free Book Preview: Chapter 1</h1>
          <p className="hero__text">
            Explore the first chapter of{" "}
            <em>The Beginner's Guide to HTML and CSS</em> by Jeremiah Obembe
          </p>
          <a
            href="https://selar.com/i4154m"
            className="btn-custom"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the Full Book
          </a>
        </header>

        <div className="book-main">
          <aside className="sidebar">
            <h2 className="sidebar__title">Chapters</h2>
            <ul className="sidebar__nav">
              <li>
                <a
                  href="#chapter-1"
                  className="sidebar__link"
                  onClick={() => setIsExpanded(true)}
                >
                  Chapter 1: Understanding the Basics of the Web
                </a>
              </li>
            </ul>
          </aside>

          <section className="content">
            <div id="chapter-1">
              <h2>Chapter 1: Understanding the Basics of the Web</h2>
              <article>
                <h3>Introduction</h3>
                <p>
                  Welcome to the amazing world of web development! Imagine the
                  web as a giant library where every book is a website you can
                  visit instantly. This chapter is your first step to creating
                  your own webpages using HTML (the structure, like a house's
                  walls) and CSS (the style, like colorful paint). We'll start
                  by setting up your tools, so you're ready to code like a pro!
                </p>
                <p>By the end of this chapter, you'll:</p>
                <ul>
                  <li>
                    Understand how the internet brings websites to your screen.
                  </li>
                  <li>
                    Set up Visual Studio Code (VS Code) and create your first
                    HTML and CSS files.
                  </li>
                  <li>
                    Learn how HTML and CSS work together to build webpages.
                  </li>
                  <li>
                    Create a fun webpage with a heading, text, image, and styled
                    boxes.
                  </li>
                  <li>
                    Discover simple ways to make your webpage easy to use, fast,
                    and safe.
                  </li>
                </ul>
                <p>Let's dive in and have fun!</p>
              </article>

              {isExpanded && (
                <>
                  <article>
                    <h3>1.1 What is the Internet?</h3>
                    <p>
                      The internet is like a huge network of computers around
                      the world, connected like friends passing notes. It lets
                      us chat, watch videos, and visit websites. A website is a
                      collection of webpages, like pages in a book, stored on a
                      special computer called a server.
                    </p>
                    <h4>Key Ideas</h4>
                    <ul>
                      <li>
                        <strong>Servers</strong>: Computers that store website
                        files and send them to you when you visit a site. Think
                        of a librarian delivering books.
                      </li>
                      <li>
                        <strong>Browsers</strong>: Apps like Google Chrome,
                        Firefox, or Safari that show you websites. They're like
                        your library card for the web.
                      </li>
                      <li>
                        <strong>HTTP/HTTPS</strong>: Rules for how browsers and
                        servers talk. HTTP is like sending a regular letter,
                        while HTTPS is a secure letter with a lock to keep it
                        private.
                      </li>
                    </ul>
                  </article>

                  <article>
                    <h3>1.2 Setting Up Your Workspace</h3>
                    <p>
                      Before you write code, you need a development
                      environment—a place to create and test your webpages.
                      We'll use Visual Studio Code (VS Code), a free,
                      beginner-friendly tool that makes coding fun. This section
                      will guide you step-by-step to set up VS Code, create HTML
                      and CSS files, and organize your project folder.
                    </p>
                  </article>

                  <article>
                    <h3>1.3 Introduction to HTML and CSS</h3>
                    <p>
                      Now that your workspace is ready, let's learn about HTML
                      and CSS, the tools for building webpages. HTML creates the
                      structure (like a house's walls), and CSS adds style (like
                      paint and decorations).
                    </p>
                  </article>
                </>
              )}

              {!isExpanded && (
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="btn-custom"
                    style={{ cursor: "pointer", border: "none" }}
                  >
                    Read More
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>

        <div
          style={{ textAlign: "center", marginTop: "3rem", padding: "2rem" }}
        >
          <h2 style={{ color: "#fff", marginBottom: "1rem" }}>
            Want to Learn More?
          </h2>
          <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
            Get the full book to dive deeper into web development!
          </p>
          <a
            href="https://selar.com/i4154m"
            className="btn-custom"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default BookPreview;
