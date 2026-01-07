import Navbar from "../components/Navbar.jsx";
import "../App.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Navbar />

      <section className="contact-hero">
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out for collaborations, projects,
          or just to say hello 👋
        </p>
      </section>

      <section className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope />
            <span>your@email.com</span>
          </div>

          <div className="info-item">
            <FaPhoneAlt />
            <span>+977-XXXXXXXXX</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Nepal</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}
