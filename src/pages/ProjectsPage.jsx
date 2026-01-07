import React from "react";
import "../App.css";
import Navbar from "../components/Navbar.jsx";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <Navbar />

      <section className="projects-hero">
        <h1>My Projects</h1>
        <p>
          A selection of projects showcasing my skills in web development,
          UI design, and problem-solving.
        </p>
      </section>

      <section className="projects">
        <div className="project-card">
          <video
            src="/videos/project1.mp4"
            controls
            muted
            className="project-video"
          />
          <div className="project-content">
            <h3>Portfolio Website</h3>
            <p>
              A modern personal portfolio built using React with responsive
              design and smooth UI interactions.
            </p>
            <div className="project-links">
              <a href="https://your-site.com" target="_blank" rel="noopener noreferrer">
                Live Site
              </a>
              <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
