import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./assets/css/main.css";

// Optional: You may want to move these to a config or props
const socialLinks = [
  // { href: "#", icon: "bi-twitter-x", label: "Twitter" },
  { href: "https://github.com/sulai001", icon: "bi-github", label: "GitHub" },
  { href: "https://www.instagram.com/sulai__001/", icon: "bi-instagram", label: "Instagram" },
  // { href: "#", icon: "bi-skype", label: "Skype" },
  { href: "https://www.linkedin.com/in/mohamed-sulaiman-938921283/", icon: "bi-linkedin", label: "LinkedIn" },
];

export default function Header() {
  useEffect(() => {
    // Mobile nav toggle logic
    const header = document.getElementById("header");
    const headerToggleBtn = document.querySelector(".header-toggle");
    const navLinks = document.querySelectorAll("#navmenu a");

    function headerToggle() {
      header.classList.toggle("header-show");
      headerToggleBtn.classList.toggle("bi-list");
      headerToggleBtn.classList.toggle("bi-x");
    }

    if (headerToggleBtn) {
      headerToggleBtn.addEventListener("click", headerToggle);
    }

    navLinks.forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (header.classList.contains("header-show")) {
          headerToggle();
        }
      });
    });

    // Dropdown toggle logic
    const dropdownToggles = document.querySelectorAll(".navmenu .toggle-dropdown");
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle("active");
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      if (headerToggleBtn) {
        headerToggleBtn.removeEventListener("click", headerToggle);
      }
      navLinks.forEach((navmenu) => {
        navmenu.removeEventListener("click", headerToggle);
      });
      dropdownToggles.forEach((toggle) => {
        toggle.removeEventListener("click", function (e) {
          e.preventDefault();
          this.parentNode.classList.toggle("active");
        });
      });
    };
  }, []);

  return (
    <header id="header" className="header dark-background d-flex flex-column justify-content-center">
      <i className="header-toggle d-xl-none bi bi-list"></i>
      <div className="header-container d-flex flex-column align-items-start">
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                <i className="bi bi-house navicon"></i>Home
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="bi bi-person navicon"></i> About
              </a>
            </li>
            <li>
              <a href="#resume">
                <i className="bi bi-file-earmark-text navicon"></i> Resume
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <i className="bi bi-images navicon"></i> Portfolio
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="bi bi-hdd-stack navicon"></i> Services
              </a>
            </li>
            {/* <li className="dropdown">
              <a href="#">
                <i className="bi bi-menu-button navicon"></i> <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Dropdown 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Dropdown 4</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href="#contact">
                <i className="bi bi-envelope navicon"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="social-links text-center">
          {socialLinks.map((link) => (
            <a href={link.href} key={link.icon} className={link.label.toLowerCase()}>
              <i className={`bi ${link.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}