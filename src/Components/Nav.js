import React from "react";
import { Link } from "react-router-dom";
import Image from 'react-image'
import { Mail, Menu, pinkLinkedIn, aboutMail, aboutMenu, projectsMenu, projectsMail } from "./Constants/iconsForNavBar"
import { withRouter } from "react-router-dom";
class Nav extends React.Component {
  getIcons() {
    const path = this.props.location.pathname.slice(1)
    const icons = { menu: Menu, mail: Mail }
    if (path === "about") {
      icons.menu = aboutMenu
      icons.mail = aboutMail
    } else if (path === "projects") {
      icons.menu = projectsMenu
      icons.mail = projectsMail
    }
    return icons
  }
  render() {
    const { menu, mail } = this.getIcons()
    return (
      <div className="nav-bar">
        <Link to="/">
          <Image className="nav-image" src={menu} />
        </Link>
        <div>
          <Link to="/contact" className="contact-buttons">
            <Image className="nav-image" src={mail} />
          </Link>
          <a href="https://www.linkedin.com/in/akarach/" target="_blank">
            <Image className="nav-image" src={pinkLinkedIn} />
          </a>
        </div>
      </div>
    )
  }
}

export default withRouter(Nav);