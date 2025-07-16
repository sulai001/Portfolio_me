import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "../../SnapFolio/assets/css/main.css";

// Import PureCounter for animated numbers (matching the template's purecounter)
import PureCounter from "@srexi/purecounterjs";

export default function Stats() {
  useEffect(() => {
    // Initialize PureCounter for animated stats
    new PureCounter();
  }, []);

  return (
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="stats-wrapper">
              <div className="stats-item" data-aos="zoom-in" data-aos-delay="150">
                <div className="icon-wrapper">
                  <i className="bi bi-filetype-js"></i>
                </div>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="6"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>JavaScript Projects</p>
              </div>
              <div className="stats-item" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-wrapper">
                  <i className="bi bi-filetype-jsx"></i>
                </div>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="6"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>React Projects</p>
              </div>
              <div className="stats-item" data-aos="zoom-in" data-aos-delay="250">
                <div className="icon-wrapper">
                  <i className="bi bi-stack"></i>
                </div>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="3"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>MERN Projects</p>
              </div>
              <div className="stats-item" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-wrapper">
                  <i className="bi bi-filetype-php"></i>
                </div>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="3"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>PHP Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}