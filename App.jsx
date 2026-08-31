import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  // =========================
  // SCROLL REVEAL ANIMATION
  // =========================

  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".section, .contact-section, .skill-card, .project-card, .experience-item, .certification-item"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    animatedElements.forEach((element) => {
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // =========================
  // CUBE MOUSE MOVEMENT
  // =========================

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePosition({
      x: x * 20,
      y: y * -20,
    });
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          DJ<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        {/* DOWNLOAD RESUME */}

        <a
        href={`${import.meta.env.BASE_URL}DIvya_J_Resume_.pdf`}
          download="DIvya_J_Resume_.pdf"
            className="nav-button"
>
            Download Resume ↗
</a>

      </nav>

      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hero-small">
            HELLO, I'M DIVYA
          </p>

          <h1>
            Building Digital
            <br />
            <span>Experiences.</span>
          </h1>

          <p className="hero-role">
            Full Stack Developer
          </p>

          <p className="hero-description">
            I create modern, responsive and interactive web applications
            using React, Python, Flask and modern web technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              Explore My Work
              <span>↗</span>
            </a>

            <a href="#about" className="outline-button">
              More About Me
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/divyajaybhaye1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/divya-jaybhaye-98672b342"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

        {/* ================= 3D HERO OBJECT ================= */}

        <div
          className="hero-visual"
          onMouseMove={handleMouseMove}
          onMouseLeave={() =>
            setMousePosition({
              x: 0,
              y: 0,
            })
          }
        >

          <div className="glow"></div>

          <div className="floating-ring ring-one"></div>
          <div className="floating-ring ring-two"></div>

          {/* CUBE */}

          <div
            className="cube-wrapper"
            style={{
              transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            }}
          >

            <div className="cube">

              <div className="cube-face cube-front">
                <span>DJ</span>
              </div>

              <div className="cube-face cube-back">
                <span>DEV</span>
              </div>

              <div className="cube-face cube-right">
                <span>JS</span>
              </div>

              <div className="cube-face cube-left">
                <span>PY</span>
              </div>

              <div className="cube-face cube-top">
                <span>WEB</span>
              </div>

              <div className="cube-face cube-bottom">
                <span>AI</span>
              </div>

            </div>

          </div>

          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">

        <div className="section-heading">

          <p>01 — ABOUT</p>

          <h2>
            Turning ideas into
            <span> digital reality.</span>
          </h2>

        </div>

        <div className="about-content">

          <p className="large-text">
            I'm a BCA student and Full Stack Developer with a strong
            foundation in Python, Flask, React.js, JavaScript, SQL and
            REST APIs.
          </p>

          <p>
            I enjoy building responsive web applications, developing
            backend APIs, working with databases and solving real-world
            software problems. I am continuously expanding my technical
            skills through practical projects and hands-on learning.
          </p>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section skills-section">

        <div className="section-heading">

          <p>02 — EXPERTISE</p>

          <h2>
            Technologies I
            <span> work with.</span>
          </h2>

        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-number">01</div>
            <h3>Languages</h3>
            <p>
              JavaScript (ES6+), Python, HTML5, CSS3
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-number">02</div>
            <h3>Frontend</h3>
            <p>
              React.js, Redux (Basic), Tailwind CSS, Bootstrap
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-number">03</div>
            <h3>Backend</h3>
            <p>
              Flask, REST APIs
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-number">04</div>
            <h3>Database</h3>
            <p>
              MySQL, PostgreSQL, SQLite, MongoDB
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-number">05</div>
            <h3>Cybersecurity</h3>
            <p>
              Cybersecurity Fundamentals, Web Application Security,
              Authentication & Authorization
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-number">06</div>
            <h3>Networking & Tools</h3>
            <p>
              TCP/IP, DNS, HTTP/HTTPS, VPN Fundamentals,
              Git, GitHub, VS Code, Postman
            </p>
          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section projects-section">

        <div className="section-heading project-heading">

          <div>

            <p>03 — SELECTED WORK</p>

            <h2>
              Things I've
              <span> built.</span>
            </h2>

          </div>

          <p className="project-intro">
            A selection of projects focused on full-stack development,
            cybersecurity, backend APIs and practical problem solving.
          </p>

        </div>

        <div className="projects-grid">

          <article className="project-card">

            <div className="project-top">
              <span>01</span>
              <span>FULL STACK</span>
            </div>

            <div className="project-icon">
              🛒
            </div>

            <h3>
              E-Commerce Web Application
            </h3>

            <p>
              A full-stack e-commerce platform built using Flask,
              React and MySQL with JWT authentication, product
              listing, search, filtering, shopping cart, order
              management and RESTful APIs.
            </p>

            <a href="#contact">
              View Project <span>↗</span>
            </a>

          </article>

          <article className="project-card">

            <div className="project-top">
              <span>02</span>
              <span>FULL STACK</span>
            </div>

            <div className="project-icon">
              💬
            </div>

            <h3>
              Social Media Application
            </h3>

            <p>
              A social media platform featuring user profiles,
              posts, likes, comments, JWT authentication,
              protected routes and MongoDB-based data storage.
            </p>

            <a href="#contact">
              View Project <span>↗</span>
            </a>

          </article>

          <article className="project-card">

            <div className="project-top">
              <span>03</span>
              <span>CYBERSECURITY</span>
            </div>

            <div className="project-icon">
              🔐
            </div>

            <h3>
              Password Strength Analyzer
            </h3>

            <p>
              A Python-based security tool that analyzes password
              strength using length, character diversity and common
              password patterns to provide security recommendations.
            </p>

            <a href="#contact">
              View Project <span>↗</span>
            </a>

          </article>

          <article className="project-card">

            <div className="project-top">
              <span>04</span>
              <span>WEB SECURITY</span>
            </div>

            <div className="project-icon">
              🛡️
            </div>

            <h3>
              Vulnerability Scanner
            </h3>

            <p>
              A Python-based web security project designed to identify
              common web application vulnerabilities and generate useful
              security findings for analysis.
            </p>

            <a href="#contact">
              View Project <span>↗</span>
            </a>

          </article>

          <article className="project-card">

            <div className="project-top">
              <span>05</span>
              <span>AI + SECURITY</span>
            </div>

            <div className="project-icon">
              🎣
            </div>

            <h3>
              Phishing Email Detection
            </h3>

            <p>
              A machine-learning based project that analyzes email
              content and identifies suspicious patterns to help
              detect potential phishing messages.
            </p>

            <a href="#contact">
              View Project <span>↗</span>
            </a>

          </article>

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="section experience-section"
      >

        <div className="section-heading">

          <p>04 — EXPERIENCE</p>

          <h2>
            My professional
            <span> journey.</span>
          </h2>

        </div>

        <div className="experience-item">

          <div className="experience-year">
            2026 — PRESENT
          </div>

          <div className="experience-details">

            <h3>
              Cybersecurity Intern
            </h3>

            <h4>
              Thiranex
            </h4>

            <p>
              Working on cybersecurity-related tasks while developing
              practical knowledge of security concepts, web application
              security and vulnerability assessment.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CERTIFICATIONS ================= */}

      <section className="section certifications-section">

        <div className="section-heading">

          <p>05 — CERTIFICATIONS</p>

          <h2>
            Always
            <span> learning.</span>
          </h2>

        </div>

        <div className="certification-list">

          <div className="certification-item">

            <span>01</span>

            <div>

              <h3>
                Cybersecurity Internship Certificate
              </h3>

              <p>
                Thiranex • 2026
              </p>

            </div>

            <span>↗</span>

          </div>

          <div className="certification-item">

            <span>02</span>

            <div>

              <h3>
                Mastercard Cybersecurity Job Simulation
              </h3>

              <p>
                Forage • 2026
              </p>

            </div>

            <span>↗</span>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">

        <div className="contact-content">

          <p className="contact-label">
            06 — GET IN TOUCH
          </p>

          <h2>
            Let’s build something
            <br />
            <span>great together.</span>
          </h2>

          <p className="contact-text">
            Have an idea, opportunity, or project in mind?
            I’m always open to discussing new opportunities
            and interesting ideas.
          </p>

          <div className="contact-details">

            <a
              href="mailto:contact.divyajaybhaye@gmail.com"
              className="email-link"
            >
              contact.divyajaybhaye@gmail.com
              <span>↗</span>
            </a>

            <p className="location">
              Pune, Maharashtra, India
            </p>

          </div>

          <div className="contact-socials">

            <a
              href="https://github.com/divyajaybhaye1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/divya-jaybhaye-98672b342"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <div>

          <strong>
            DJ<span>.</span>
          </strong>

        </div>

        <p>
          Designed & built by Divya Jaybhaye © 2026
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;
