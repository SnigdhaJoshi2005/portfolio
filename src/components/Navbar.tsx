import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <h2 className="logo">Logo<span>.</span></h2>
            </div>

            <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/projects">Projects</Link>
                </ul>
                <Link to="/contact" className="contact-btn">
                    Contact me
                </Link>
            </div>
        </nav>
    )
}

