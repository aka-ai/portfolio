import React from "react";
import Constants from "./Constants";
import LocomotiveScroll from 'locomotive-scroll';
const scroll = new LocomotiveScroll();
function About() {
  return (
    <div className="about">
      <div className="about-content">
        <img className="profile-pic" src={Constants.profilePic} data-scroll/>
        <h2 data-scroll>Hello, I'm Ai</h2>
        <p data-scroll>{Constants.aboutMe}</p>
      </div>
    </div>
  )
};

export default About;