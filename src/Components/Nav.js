import React from "react";
import { Link } from "react-router-dom";
function Nav() {

    return (
      <div className="nav-bar">
        <div>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/projects">PROJECTS</Link>
        </div>
        <div>
          <a href="https://github.com/aka-ai" target="_blank">GITHUB</a>
          <a href="https://www.linkedin.com/in/akarach/" target="_blank">LINKEDIN</a>
          <a href="https://twitter.com/aicooks" target="_blank">TWITTER</a>
        </div>
      </div>
    )

}

export default Nav