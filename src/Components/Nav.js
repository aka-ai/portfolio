import React from "react";
import { Link } from "react-router-dom";
function Nav() {

    return (
      <div className="nav-bar">
        <div className="nav-section">
          <Link className="inhouse-link" to="/">HOME</Link>
          <Link className="inhouse-link" to="/about">ABOUT</Link>
          <Link className="inhouse-link" to="/projects">PROJECTS</Link>
        </div>
        <div className="nav-name">
          <p>AI</p>
          <p>AKARACH</p>
        </div>
        <div className="nav-section">
          <a href="https://github.com/aka-ai" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a href="https://www.linkedin.com/in/akarach/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="https://twitter.com/aicooks" target="_blank" rel="noopener noreferrer">TWITTER</a>
        </div>
      </div>
    )

}

export default Nav