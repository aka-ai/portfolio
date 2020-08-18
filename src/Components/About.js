import React, { Component } from "react";
import Constants from "./Constants";
class About extends Component {
  constructor() {
    super()
    this.state = { hover: false }
    this.toggleHover = this.toggleHover.bind(this)
  }
  toggleHover() {
    this.setState({ hover: !this.state.hover })
  }
  render() {

    return (
      <div className="about">
        <div className="profile-pic-container">
          <img className="profile-pic" src={Constants.profilePic} alt="profile-pic" />
        </div>
        <div className="about-content">
          <p>
            <span>A little bit about </span >
            <span className="who-i-am">who I am.</span>
          </p>
          <br></br>
          <p>{Constants.aboutMe}</p>
          <br></br>
          <p className="about-last">
            Feel free to reach out about anything - I'm open to design feedback and I enjoy meeting new people
            </p>
        </div>
      </div>
    )
  }
};

export default About;