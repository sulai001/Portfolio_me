import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "../../SnapFolio/assets/css/main.css";
import person from "../assets/img/person/person-f-7.webp"; // Adjust the path as necessary
import Lanyard from './Lanyard';
// import
export default function About() {
  return (
    <>
    <hr style={{
      // border: "1px solid #fff",
      borderRadius: "50px",
      borderTop: "16px solid #fff",
      boxShadow: "0 -2px 0 0 #fff",
      margin: "0 auto",
    }} />
    <section
      id="about"
      className="about section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Decorative background circle */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "0%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle at 60% 40%, #e0e7ff 80%, transparent 100%)",
          borderRadius: "50%",
          zIndex: 0,
          filter: "blur(2px)",
          opacity: 0.2,
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "90%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle at 60% 40%, #e0e7ff 80%, transparent 100%)",
          borderRadius: "50%",
          zIndex: 0,
          filter: "blur(2px)",
          opacity: 0.2,
          pointerEvents: "none"
        }}
      />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-4 position-relative" style={{ minHeight: 350, height: "100%" }} data-aos="zoom-in" data-aos-delay="200">
            <div style={{
              position: "absolute",
              top: -60,
              left: 0,
              width: "100%",
              height: "800px",
              zIndex: 0, // Adjust as needed
              pointerEvents: "none" // So it doesn't block UI
            }}>
              <Lanyard position={[0, 0, 17]} gravity={[0, -50, 0]} scale={[20, 2, 2]} className="z-2"/>
            </div>
          </div>
          <div className="col-lg-8 z-0" data-aos="fade-left" data-aos-delay="300">
            <div className="about-content">
              <div className="section-header">
                <span className="badge-text">Get to Know Me</span>
                <h2 style={{ width: "600px" }}>Passionate About Creating Digital Experiences</h2>
              </div>
              {/* <div className="description">
                <p>
                  I am Mohamed Sulaiman, a dedicated Web Developer, React Developer, and UI/UX Developer. I love building beautiful, user-friendly web experiences that blend creativity and code to deliver impactful digital solutions.
                </p>
                <p>
                  I specialize in modern web technologies and design systems, always striving to create seamless and engaging user experiences.
                </p>
              </div> */}
              {/* <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div> */}
              <div className="details-grid">
                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">Specialization</span>
                    <span className="detail-value">UI/UX Design &amp; Web Development</span>
                  </div>
                  {/* <div className="detail-item">
                    <span className="detail-label">Experience Level</span>
                    <span className="detail-value">Professional</span>
                  </div> */}
                  {/* <div className="detail-row"> */}
                  <div className="detail-item">
                    <span className="detail-label">Languages</span>
                    <span className="detail-value">English, Tamil</span>
                  </div>
                {/* </div> */}
                </div>
                
              </div>
              {/* Education & Certifications */}
                      <div className="education-section" style={{ marginTop: "2rem", textAlign: "left" }}>
                      <h4 style={{ textAlign: "left", color:"#A1E3F9"}} class="fs-4 my-4 "><strong>Education & Certifications</strong></h4>
                      <ul className="education-list" style={{ paddingLeft: 0, listStyle: "none", textAlign: "left" }}>
                        <li>
                        <strong>Bachelor of Science in Information Technology</strong><br />
                        JAMAL MOHAMED COLLEGE, TRICHY<br />
                        <span>2022 - 2025</span>
                        </li>
                        <li style={{ marginTop: "1rem" }}>
                        <strong>MERN Stack Development</strong><br />
                        Covered full-stack development with MongoDB, Express.js, React.js, and Node.js
                        </li>
                        <li style={{ marginTop: "1rem" }}>
                        <strong>UI UX DESIGNER INTERN</strong><br />
                        Certified by “ILIFE TECHNOLOGIES” for completion course in UI AND UX.
                        </li>
                      </ul>
                      </div>
                      <div className="cta-section" style={{ display: "flex", gap: "1rem", justifyContent: "left", marginTop: "2rem" }}>
                      <a
                        href="my-react-app/public/Black White Modern Simple Tech Resume (1).pdf"
                        className="btn btn-primary"
                        download
                      >
                        <i className="bi bi-download"></i>
                        Download Resume
                      </a>
                      {/* <a href="#contact" className="btn btn-outline">
                        <i className="bi bi-chat-dots"></i>
                        Let's Talk
                      </a> */}
                      </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}