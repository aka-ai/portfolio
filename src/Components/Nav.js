import React from "react";
import { Link } from "react-router-dom";
import Image from 'react-image'
import { pinkMail, pinkMenu, pinkLinkedIn } from "./Constants/iconsForNavBar"
class Nav extends React.Component {
  render() {
    return (
        <div className="nav-bar">
        <Link to="/">
          <Image className="nav-image" src={pinkMenu} />
        </Link>
        <Link to="/contact" className="contact-buttons">
          <Image className="nav-image" src={pinkMail} />
          <Image className="nav-image" src={pinkLinkedIn} />
        </Link>
        </div>
    )
  }
}

export default Nav