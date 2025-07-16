import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-brand">
              <h3 className="mb-3">
                Snap<span className="accent-text">Folio</span>
              </h3>
              <p className="text-muted">
                Passionate about building beautiful, user-friendly web experiences. 
                Blending creativity and code to deliver impactful digital solutions.
              </p>
              <div className="social-links mt-3">
                <a href="https://github.com/sulai001" target="_blank" rel="noopener noreferrer" className="text-light me-3" aria-label="GitHub">
                  <i className="bi bi-github fs-5"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-light me-3" aria-label="LinkedIn">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-light me-3" aria-label="Twitter">
                  <i className="bi bi-twitter-x fs-5"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-light me-3" aria-label="Instagram">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#hero" className="text-muted text-decoration-none hover-accent">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-muted text-decoration-none hover-accent">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#portfolio" className="text-muted text-decoration-none hover-accent">
                  Portfolio
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-muted text-decoration-none hover-accent">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-muted text-decoration-none hover-accent">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-muted">
                  <i className="bi bi-code-slash me-2 accent-text"></i>
                  Web Development
                </span>
              </li>
              <li className="mb-2">
                <span className="text-muted">
                  <i className="bi bi-react me-2 accent-text"></i>
                  React Development
                </span>
              </li>
              <li className="mb-2">
                <span className="text-muted">
                  <i className="bi bi-palette me-2 accent-text"></i>
                  UI/UX Design
                </span>
              </li>
              <li className="mb-2">
                <span className="text-muted">
                  <i className="bi bi-phone me-2 accent-text"></i>
                  Responsive Design
                </span>
              </li>
              <li className="mb-2">
                <span className="text-muted">
                  <i className="bi bi-chat-dots me-2 accent-text"></i>
                  Consulting
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">Get In Touch</h5>
            <div className="contact-info">
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-envelope me-2 accent-text"></i>
                <a href="mailto:contact@snapfolio.com" className="text-muted text-decoration-none hover-accent">contact@snapfolio.com</a>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-telephone me-2 accent-text"></i>
                <a href="tel:+1234567890" className="text-muted text-decoration-none hover-accent">+1 (234) 567-890</a>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-geo-alt me-2 accent-text"></i>
                <span className="text-muted">New York, NY 10012</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col-12">
            <hr className="border-secondary" />
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-muted mb-0">
                © {currentYear} SnapFolio. All rights reserved.
              </p>
              <a href="#" onClick={handleScrollToTop} className="text-muted text-decoration-none hover-accent">
                <i className="bi bi-arrow-up-circle"></i> Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
