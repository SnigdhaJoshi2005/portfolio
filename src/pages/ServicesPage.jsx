import React from "react";
import "../Services.css";
import Navbar from "../components/Navbar.jsx";
import { FaCode, FaPaintBrush, FaMobileAlt, FaServer } from "react-icons/fa";

const Services = () => {
  return (
    <div className="services-page">
      <Navbar />

      <section className="services-hero">
        <h1>My Services</h1>
        <p>
          I provide high-quality digital solutions focused on performance,
          usability, and modern design.
        </p>
      </section>

      <section className="services">
        <div className="service-card">
          <FaCode className="icon" />
          <h3>Web Development</h3>
          <p>
            Building fast, responsive, and scalable websites using
            React, HTML, CSS, and JavaScript.
          </p>
        </div>

        <div className="service-card">
          <FaPaintBrush className="icon" />
          <h3>UI / UX Design</h3>
          <p>
            Designing clean and intuitive user interfaces with
            a strong focus on user experience.
          </p>
        </div>

        <div className="service-card">
          <FaMobileAlt className="icon" />
          <h3>Responsive Design</h3>
          <p>
            Ensuring websites look and perform perfectly on
            desktops, tablets, and mobile devices.
          </p>
        </div>

        <div className="service-card">
          <FaServer className="icon" />
          <h3>Backend Integration</h3>
          <p>
            Connecting frontend applications with APIs and
            backend services for full-stack solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
