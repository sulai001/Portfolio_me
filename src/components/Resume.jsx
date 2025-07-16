import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "../../SnapFolio/assets/css/main.css";
import avathor from "../components/mypic.jpg";

export default function Resume() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Driven web developer and UI/UX specialist with a passion for building modern, scalable, and user-friendly digital solutions.
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Left column */}
          <div className="col-lg-4">
            <div className="resume-side" data-aos="fade-right" data-aos-delay="100">
              <div className="profile-img mb-4">
                <img
                  src={avathor}
                  alt="Profile"
                  className="img-fluid rounded"
                />
              </div>
              <h3>Professional Summary</h3>
              <p>
                Mohamed Sulaiman – Web Developer, React Developer, and UI/UX Developer. Experienced in building robust web applications and delivering seamless user experiences.
              </p>
              <h3 className="mt-4">Contact Information</h3>
              <ul className="contact-info list-unstyled">
                <li>
                  <i className="bi bi-geo-alt"></i> Trichy , India
                </li>
                <li>
                  <i className="bi bi-envelope"></i> sulaiirf2930@gmail.com
                </li>
                <li>
                  <i className="bi bi-phone"></i> +91 8807215523
                </li>
                <li>
                  <i className="bi bi-linkedin"></i> <a className="text-dec text-white" href="https://www.linkedin.com/in/mohamed-sulaiman-938921283/" style={{textDecoration: 'none'}}>linkedin.com/in/mohamedsulaiman</a>
                </li>
              </ul>
              <div className="skills-animation mt-4">
                <h3>Technical Skills</h3>
                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <span>React.js</span>
                    <span>95%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <span>JavaScript (ES6+)</span>
                    <span>90%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <span>Node.js & Express.js</span>
                    <span>85%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <span>MongoDB</span>
                    <span>80%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <span>UI/UX Design</span>
                    <span>85%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right column */}
          <div className="col-lg-8 ps-4 ps-lg-5">
            {/* Experience */}
            <div className="resume-section" data-aos="fade-up">
              <h3>
                <i className="bi bi-briefcase me-2"></i>Professional Experience
              </h3>
              <div className="resume-item">
                <h4>React Developer</h4>
                <h5>2022 - Present</h5>
                <p className="company">
                  <i className="bi bi-building"></i> Modern Web Solutions
                </p>
                <ul>
                  <li>
                    Developed and maintained scalable React.js applications for diverse clients.
                  </li>
                  <li>
                    Integrated REST APIs and optimized front-end performance.
                  </li>
                  <li>
                    Collaborated with UI/UX teams to deliver seamless user experiences.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Full Stack Developer</h4>
                <h5>2020 - 2022</h5>
                <p className="company">
                  <i className="bi bi-building"></i> Creative Dev Agency
                </p>
                <ul>
                  <li>
                    Built MERN stack applications with Node.js, Express.js, MongoDB, and React.
                  </li>
                  <li>
                    Implemented authentication, authorization, and data visualization features.
                  </li>
                  <li>
                    Worked with Git & GitHub for version control and team collaboration.
                  </li>
                </ul>
              </div>
            </div>
            {/* Education */}
            <div className="resume-section" data-aos="fade-up" data-aos-delay="100">
              <h3>
                <i className="bi bi-mortarboard me-2"></i>Education
              </h3>
              <div className="resume-item">
                <h4>B.Sc. Information Technology</h4>
                <h5>2022 - 2025</h5>
                <p className="company">
                  <i className="bi bi-building"></i> bharathidasan university
                </p>
                <p>
                  Graduated with distinction. Specialized in web development and user experience design.
                </p>
              </div>
            </div>
            {/* Certifications */}
            <div className="resume-section" data-aos="fade-up" data-aos-delay="200">
              <h3>
                <i className="bi bi-award me-2"></i>Certifications
              </h3>
              <div className="resume-item">
                <h4>Certified React Developer</h4>
                <h5>2024-25</h5>
              </div>
              <div className="resume-item">
                <h4>MongoDB for Developers</h4>
                <h5>2025</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}