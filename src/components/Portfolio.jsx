import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import admin from '../assets/img/portfolio/admin.png';
import bird from '../assets/img/portfolio/webbird.png';
import webecom from '../assets/img/portfolio/webecom.png';
import tail from '../assets/img/portfolio/webtail.png';
import mern from '../assets/img/portfolio/mern.png';
import merns from '../assets/img/portfolio/merns.png';

const projects = [
  
  {
    id: 1,
    title: "Tailwind-Ecom",
    category: "Web Design",
    image: tail,
    description: "Web design using Tailwind CSS framework.",
    url: "https://ecom-tailwindcss.netlify.app/",
    details: "#",
  },
  {
    id: 2,
    title: "Ecom",
    category: "Web Design",
    image: webecom,
    description: "Modern e-commerce site built with React and Redux for state management.",
    url: "https://chaise-bootrap.netlify.app/",
    details: "#",
  },
  {
    id: 3,
    title: "Admin dashboard",
    category: "Server",
    image: admin,
    description: "Admin Dashboard for Clg Club Registration Site using Tailwind,PHP,MySQL.",
    url: "https://club-relection.infinityfreeapp.com/admin",
    details: "#",
  },
  {
    id: 4,
    title: "React E-Commerce",
    category: "React",
    image: merns,
    description: "Full-featured React + Redux e-commerce site.",
    url: "https://mern-frontendd-dwpz.onrender.com/",
    details: "#",
  },
  {
    id: 5,
    title: "MERN React App",
    category: "Server",
    image: mern,
    description: "Social media app using MongoDB, Express, React, Node.",
    url: "https://mern-frontendd-dwpz.onrender.com/",
    details: "#",
  },
  
  // {
  //   id: 6,
  //   title: "Bird Site",
  //   category: "Web Design",
  //   image: bird,
  //   description: "Bird watching and tracking web application with interactive maps.",
  //   url:"https://catsho.netlify.app/",
  //   details: "#",
  // },
];

const categories = ["Web Design", "React", "Server"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Selected works in UI/UX, React, and MERN stack development.</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-3 filter-sidebar">
            <div className="filters-wrapper" data-aos="fade-right" data-aos-delay="150">
              <ul className="portfolio-filters">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    className={filter === cat ? "filter-active" : ""}
                    onClick={() => setFilter(cat)}
                    style={{ cursor: "pointer" }}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
              {filteredProjects.map((project) => (
                <div className="col-lg-6 col-md-6 portfolio-item" style={{height:200}} key={project.id}>
                  <div className="portfolio-wrap">
                    <img src={project.image} className="img-fluid" alt={project.title} loading="lazy" />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="categoryy text-black fw-bold">{project.category}</span>
                        {/* <h4>{project.title}</h4> */}
                        <p>{project.description}</p>
                        <div className="portfolio-links">
                          <a href={project.image} className="glightbox" title={project.title}>
                            <i className="bi bi-plus-lg"></i>
                          </a>
                          <a href={project.url} title="More Details" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {filteredProjects.length === 0 && (
                <div className="col-12">
                  <p>No projects found for this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}