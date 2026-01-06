import React from "react";
import "../Home.css";
import Navbar from "../components/Navbar.jsx";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="home">
        {/* Navbar */}
        <Navbar/>

        {/* Hero Section */}
        <div className="hero">
          <div className="hero-left">
            <p className="role">Occupation</p>
            <h1>
              Hello I’m <br />
              <span>First and Last Name</span>
            </h1>
            <p className="desc">
              I excel at crafting elegant digital experiences and
              I am proficient in various programming languages
              and technologies.
            </p>

            <div className="actions">
              <button className="cv-btn">Download CV</button>
              <div className="socials">
                <span><a href="https://www.youtube.com/watch?v=dImgZ_AH7uA"><FaLinkedin/></a></span>
                <span><a href="https://www.youtube.com/watch?v=dImgZ_AH7uA"><IoMdMail/></a></span>
                <span><a href="https://www.youtube.com/watch?v=dImgZ_AH7uA"><FaGithub/></a></span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="circle">
              <img
                src="https://i.imgur.com/8Km9tLL.jpg"
                alt="profile"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats">
          <div><h2>12</h2><p>Years Experience</p></div>
          <div><h2>26</h2><p>Projects</p></div>
          <div><h2>8</h2><p>Technologies</p></div>
          <div><h2>500</h2><p>Commits</p></div>
        </div>
      </div>

      {/* Experience Section */}
      <section className="experience">
        <h2 className="section-title">Experience</h2>

        <div className="experience-list">
          <div className="experience-card">
            <span className="duration">2024 – Present</span>
            <h3>Frontend Developer</h3>
            <h4>Freelance / Personal Projects</h4>
            <p>
              Designing and developing responsive web applications using
              React, HTML, CSS, and JavaScript. Focused on clean UI,
              reusable components, and performance optimization.
            </p>
          </div>

          <div className="experience-card">
            <span className="duration">2023 – 2024</span>
            <h3>Web Development Student</h3>
            <h4>Academic & Self-Learning</h4>
            <p>
              Built multiple projects including portfolio websites and
              management systems. Gained hands-on experience with
              Git, GitHub, and modern frontend workflows.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
