import Navbar from "../components/Navbar.jsx";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Test from "./test.jsx";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <div className="home">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="hero">
          <div className="hero-left">
            <p className="role">Occupation</p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Hello I’m <br />
              <span>First and Last Name</span>
            </motion.h1>

            <p className="desc">
              I excel at crafting elegant digital experiences and
              I am proficient in various programming languages
              and technologies.
            </p>

            <div className="actions">
              <button className="cv-btn">Download CV</button>
              <div className="socials">
                <span><a href="https://www.youtube.com/watch?v=dImgZ_AH7uA"><FaLinkedin /></a></span>
                <span><a href="https://www.youtube.com/watch?v=dImgZ_AH7uA"><IoMdMail /></a></span>
                <span><a href="https://www.youtube.com/watch?v=dImgZ_AH7uA"><FaGithub /></a></span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="circle">
              <img
                //src=".jpg"
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
        {/* About Me Section */}
        <section className="about">
          <h2 className="section-title">About Me</h2>

          <div className="about-content">

            {/* Image - slide from left */}
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                //src=".jpg"
                alt="About me"
              />
            </motion.div>

            {/* Text - slide from right */}
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                I am a passionate frontend developer with a strong interest in creating
                clean, user-friendly, and responsive web applications. I enjoy turning
                complex problems into simple and elegant solutions.
              </p>

              <p>
                I have hands-on experience working with modern web technologies such as
                React, JavaScript, HTML, and CSS, and I am continuously learning to improve
                my skills and stay updated with industry trends.
              </p>
            </motion.div>

          </div>
        </section>
      </section>



      {/* Experience Section */}
      <section className="experience">
        <h2 className="section-title">Experience</h2>

        <div className="experience-list">
          <motion.div
            className="experience-card"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="duration">2024 – Present</span>
            <h3>Frontend Developer</h3>
            <h4>Freelance / Personal Projects</h4>
            <p>
              Designing and developing responsive web applications using
              React, HTML, CSS, and JavaScript. Focused on clean UI,
              reusable components, and performance optimization.
            </p>
          </motion.div>

          <motion.div
            className="experience-card"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="duration">2023 – 2024</span>
            <h3>Web Development Student</h3>
            <h4>Academic & Self-Learning</h4>
            <p>
              Built multiple projects including portfolio websites and
              management systems. Gained hands-on experience with
              Git, GitHub, and modern frontend workflows.
            </p>
          </motion.div>

        </div>
      </section>
      {/*<Test />*/}
    </>
  );
};