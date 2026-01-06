export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <h2 className="logo">Logo<span>.</span></h2>
            </div>

            <div style={{display:"flex", gap:"50px", alignItems:"center"}}>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Projects</li>
                </ul>
                <button className="contact-btn">Contact me</button>
            </div>
        </nav>
    )
}

import { Link } from "react-router-dom";

<nav>
  <Link to="/">Home</Link>
  <Link to="/services">Services</Link>
</nav>
