import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "Online Book Store",
    category: "PYTHON PROJECT",
    description:
      "A book store project developed using Python, showcasing my programming fundamentals and application development skills.",
    tech: ["Python"],
    icon: "📚",
  },
  {
    number: "02",
    name: "Grievance Redressal System",
    category: "MERN STACK PROJECT",
    description:
      "A grievance management project built with the MERN stack, focused on full-stack web development.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    icon: "⚖️",
  },
  {
    number: "03",
    name: "FarmNest",
    category: "C PROJECT",
    description:
      "A project named FarmNest developed in C, demonstrating my programming knowledge and problem-solving practice.",
    tech: ["C Language"],
    icon: "🌱",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "C",
  "Git & GitHub",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          ST<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          <a className="nav-cta" href="#projects" onClick={closeMenu}>
            View My Work ↗
          </a>
        </div>
      </nav>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              Open to internship opportunities
            </div>

            <p className="eyebrow">HELLO, WORLD! I'M</p>

            <h1>
              Er. Simran
              <br />
              Tiwari<span className="gradient-text">.</span>
              <br />
              <span className="gradient-text">
                Developer in progress.
              </span>
            </h1>

            <p className="hero-description">
              I'm an aspiring developer exploring the world of web
              development, building projects, and turning ideas into
              practical digital experiences. My focus is the MERN Stack,
              with additional experience in Python and C projects.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button primary-button">
                Explore My Projects ↗
              </a>
              <a href="#contact" className="button secondary-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/simran347"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/simran-tiwari-224b09411/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="glow-ball">
              <span>&lt;/&gt;</span>
            </div>

            <div className="floating-card card-top">
              <span className="code-icon">✦</span>
              MERN Stack Developer
            </div>

            <div className="floating-card card-bottom">
              <span className="status-dot" />
              Learn. Build. Improve.
            </div>
          </div>

          <a href="#about" className="scroll-cue">
            SCROLL TO EXPLORE ↓
          </a>
        </section>

        <section className="section about-section" id="about">
          <p className="eyebrow">01 / ABOUT ME</p>

          <h2>
            Curious mind.
            <br />
            <span className="gradient-text">Creative builder.</span>
          </h2>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                Hello! I'm Simran Tiwari, an aspiring software developer
                interested in creating useful applications and growing my
                skills through hands-on projects.
              </p>
              <br />
              <p>
                I work with the MERN Stack and have also built projects
                using Python and C. I'm looking for internship opportunities
                where I can contribute, learn from experienced developers,
                and improve my problem-solving skills.
              </p>
            </div>

            <div className="skills-panel">
              <h3>My Tech Toolkit</h3>

              <div className="skill-list">
                {skills.map((skill) => (
                  <span className="skill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <p className="eyebrow">02 / MY WORK</p>

          <div className="section-heading">
            <h2>
              Projects I've <span className="gradient-text">built.</span>
            </h2>
            <p>
              A selection of my projects across web development and
              programming.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>
                  <span className="project-symbol">↗</span>
                </div>

                <div className="project-art" aria-hidden="true">
                  <span className="project-emoji">{project.icon}</span>
                </div>

                <p className="project-category">{project.category}</p>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/simran347"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Profile ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <p className="eyebrow">03 / LET'S CONNECT</p>

          <h2>
            Ready for the
            <br />
            <span className="gradient-text">next opportunity?</span>
          </h2>

          <p>
            I'm interested in developer internships and opportunities to
            learn, collaborate, and build meaningful projects. Let's connect!
          </p>

          <a
            className="button primary-button"
            href="mailto:whitepython54@gmail.com"
          >
            Email Me ↗
          </a>

          <div className="contact-links">
            <a
              href="https://github.com/simran347"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/simran-tiwari-224b09411/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:whitepython54@gmail.com">
              whitepython54@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          ST<span>.</span>
        </a>

        <p>Designed & built by Er. Simran Tiwari</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;