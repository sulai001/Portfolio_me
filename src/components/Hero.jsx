import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "../../SnapFolio/assets/css/main.css";
import person from "../assets/img/person/person-f-7.webp"; // Adjust the path as necessary
// Optional: Import Typed.js for typing animation
import Typed from "typed.js";
// import SplashCursor from './SplashCursor';
import ProfileCard from './ProfileCard';
import avathor from '../components/mypic.jpg'; // Adjust the path as necessary
export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Web Developer",
        "React Developer",
        "UI/UX Developer"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="background-elements">
            {/* <SplashCursor /> */}
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
              <div className="hero-text">
                <h1>
                  MOHA<span className="accent-text">MED</span>
                </h1>
                <h2>SULAIMAN Y</h2>
                <p className="lead">
                  I'm a{" "}
                  <span ref={typedRef} className="typed"></span>
                </p>
                <p className="description">
                  I am passionate about building beautiful, user-friendly web experiences. As a Web Developer, React Developer, and UI/UX Developer, I blend creativity and code to deliver impactful digital solutions.
                </p>

                <div className="hero-actions">
                  <a href="#portfolio" className="btn btn-primary">
                    View My Work
                  </a>
                  <a href="#contact" className="btn btn-outline">
                    Get In Touch
                  </a>
                </div>

                <div className="social-links">
                  <a href="https://github.com/sulai001"><i className="bi bi-github"></i></a>
                  <a href="https://www.linkedin.com/in/mohamed-sulaiman-938921283/"><i className="bi bi-linkedin"></i></a>
                  {/* <a href="#"><i className="bi bi-twitter-x"></i></a> */}
                  <a href="https://www.instagram.com/sulai__001/"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="hero-visual z-3 p-1">
              <ProfileCard
                name="SULAI"
                avatarUrl={avathor}
                // showUserInfo={true}
                // enableTilt={true}
                // onContactClick={() => console.log('Contact clicked')}
              />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}