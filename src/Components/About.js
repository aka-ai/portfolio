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
        <img className="profile-pic" src={Constants.profilePic} alt="profile-pic" />
        <div className="about-content">
          <p style={{ marginTop: "20px" }}>
            <span>A little bit about </span >
            <span style={{ fontFamily: "Open Sans Condensed, sans- serif", fontSize: "20px", color: "deeppink" }}>who I am.</span></p>
          <p style={{ marginTop: "10px"}}>{Constants.aboutMe}</p>
          <br></br>
          <p className="about-last">Feel free to reach out wheather it be about some typos, color and font decision or just want to learn more about me 🕊</p>
        </div>
      </div>
    )
  }
};

export default About;