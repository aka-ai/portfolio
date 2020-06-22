import React from "react";
import Constants from "./Constants";
function About() {
  return (
    <div className="about">
      <div className="about-content">
        <img className="profile-pic" src={Constants.profilePic} alt="profile-pic"/>
        <h2>Hello, I'm Ai</h2>
        <p>{Constants.aboutMe}</p>
      </div>
    </div>
  )
};

export default About;