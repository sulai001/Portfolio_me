import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "../../SnapFolio/assets/css/main.css";

// For progress bar animation on scroll (like Waypoints in the template)
import { Waypoint } from "react-waypoint";

const frontendSkills = [
  {
    name: "React.js",
    percent: 90,
    icon: "bi bi-react",
    tooltip: "Building interactive UIs with React, hooks, and component architecture"
  },
  {
    name: "JavaScript (ES6+)",
    percent: 90,
    icon: "bi bi-filetype-js",
    tooltip: "DOM manipulation, events, API integration, and modern JS features"
  },
  {
    name: "Tailwind CSS & Bootstrap",
    percent: 85,
    icon: "bi bi-bootstrap",
    tooltip: "Responsive design, utility-first CSS, and rapid prototyping"
  }
];

const backendSkills = [
  {
    name: "Node.js",
    percent: 85,
    icon: "bi bi-node-plus",
    tooltip: "Server-side logic, asynchronous programming, REST APIs"
  },
  {
    name: "Express.js",
    percent: 80,
    icon: "bi bi-hdd-stack",
    tooltip: "API creation, middleware, routing, and RESTful services"
  },
  {
    name: "MongoDB",
    percent: 75,
    icon: "bi bi-database",
    tooltip: "NoSQL database design, aggregation, and performance tuning"
  }
];

const otherSkills = [
  {
    name: "Git & GitHub",
    percent: 90,
    icon: "bi bi-git",
    tooltip: "Version control, collaboration, and workflow management"
  },
  {
    name: "JSON",
    percent: 95,
    icon: "bi bi-braces",
    tooltip: "Data exchange format, REST API integration"
  }
];

export default function Skills() {
  // Animate progress bars on scroll
  const handleEnter = () => {
    document.querySelectorAll(".progress-bar").forEach((bar) => {
      const value = bar.getAttribute("aria-valuenow");
      bar.style.width = value + "%";
    });
  };

  useEffect(() => {
    // Reset progress bars on mount (for hot reload)
    document.querySelectorAll(".progress-bar").forEach((bar) => {
      bar.style.width = "0%";
    });
  }, []);

  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          My expertise covers modern web development, from interactive UIs to scalable backend APIs and collaborative workflows.
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-4">
            <div className="skills-category" data-aos="fade-up" data-aos-delay="200">
              <h3>Front-end Development</h3>
              <Waypoint onEnter={handleEnter} bottomOffset="20%" />
              <div className="skills-animation">
                {frontendSkills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>
                        <i className={skill.icon + " me-2"}></i>
                        {skill.name}
                      </h4>
                      <span className="skill-percentage">{skill.percent}%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={skill.percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="skill-tooltip">{skill.tooltip}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="skills-category" data-aos="fade-up" data-aos-delay="300">
              <h3>Back-end Development</h3>
              <Waypoint onEnter={handleEnter} bottomOffset="20%" />
              <div className="skills-animation">
                {backendSkills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>
                        <i className={skill.icon + " me-2"}></i>
                        {skill.name}
                      </h4>
                      <span className="skill-percentage">{skill.percent}%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={skill.percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="skill-tooltip">{skill.tooltip}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="skills-category" data-aos="fade-up" data-aos-delay="400">
              <h3>Other Skills</h3>
              <Waypoint onEnter={handleEnter} bottomOffset="20%" />
              <div className="skills-animation">
                {otherSkills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>
                        <i className={skill.icon + " me-2"}></i>
                        {skill.name}
                      </h4>
                      <span className="skill-percentage">{skill.percent}%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={skill.percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="skill-tooltip">{skill.tooltip}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}