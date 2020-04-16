import React from "react";
import { Link } from "react-router-dom";
import Image from 'react-image'
import { blueMail, pinkMail, greenMail, blueMenu, pinkMenu, greenMenu } from "./Constants/iconsForNavBar"
class Nav extends React.Component {
  render() {
    return (
        <div className="nav-bar">
        <Link to="/">
          <Image className="nav-image" src={pinkMenu} />
        </Link>
        <Link to="/contact">
          <Image className="nav-image" src={pinkMail} />
        </Link>
        </div>
    )
  }
}

export default Nav