import React from "react";
import Constants from "./Constants";
import { useHistory } from "react-router";
function About() {
  const { push } = useHistory()
  return (
    <div className="about">
      <div className="about-background"></div>
      <div className="about-content">
        <img className="profile-pic" src={Constants.profilePic} />
        <h2>Hello, I'm Ai</h2>
        <p>{Constants.aboutMe}</p>
        <a className="about-button" href={About} onClick={() => push("/projects")}>View my work</a>
      </div>
    </div>
  )
};

export default About;