import React from "react";
import { Link } from "react-router-dom";
import Image from 'react-image'
import { homeTheme, aboutTheme, projectsTheme } from "./Constants/iconsAndBG"
import { withRouter } from "react-router-dom";
class Nav extends React.Component {

  getIcons() {
    const path = this.props.location.pathname.slice(1)
    if (path === "about") {
      return aboutTheme
    } else if (path === "projects") {
      return projectsTheme
    } else {
      return homeTheme
    }
  }
  render() {
    const { logo, twitter, github, linkedIn } = this.getIcons()
    return (
      <div className="nav-bar">
        <Link to="/">
          <Image className="logo" src={logo} />
        </Link>
        <div>
          <a href="https://www.linkedin.com/in/akarach/" target="_blank">
            <Image className="nav-image" src={linkedIn} />
          </a>
          <a href="https://github.com/aka-ai" target="_blank">
            <Image className="nav-image" src={github} />
          </a>
          <a href="https://twitter.com/aicooks" target="_blank">
            <Image className="nav-image" src={twitter} />
          </a>
        </div>
      </div>
    )
  }
}

export default withRouter(Nav);