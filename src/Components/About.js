import React, { Component } from "react";
import Constants from "./Constants";
import { render } from "@testing-library/react";
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
    let imgStyle = this.state.hover ? {filter: "contrast(120%)"} : {filter: "grayscale(100%)"}
    
    return (
      <div className="about">
          <img className="profile-pic" src={Constants.profilePic} alt="profile-pic" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={imgStyle} />
        <div className="about-content">
          <p style={{ fontFamily: "Playfair Display, serif", fontSize: "50px" }}>Hello!</p>
          <br></br>
          <p>Thank you for coming by.</p>
          <p>In case you're curious, here's <span style={{ fontFamily: "Playfair Display, serif", fontSize: "30px"}}>a little bit about <span style={{ color: "deeppink" }}>who I am.</span></span></p>
          <br></br>
          <p>{Constants.aboutMe}</p>
          <h2 style={{fontWeight: "200"}}>Feel free to reach out wheather it be about some typos, color and font decision or just want to learn more about me 🕊</h2>
          {/* <img className="peace-sign" src={Constants.peaceSign} alt="peace-sign"/> */}
        </div>
      </div>
    )
  }
};

export default About;