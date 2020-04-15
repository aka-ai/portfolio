import React from "react";
import Constants from "./Constants";
import { useHistory } from 'react-router'
function About() {
  const { push } = useHistory()
  return (
    <div className="About">
      <img src={Constants.appLogo} className="App-logo" alt="logo" />
      <h2>Hello, I'm Ai</h2>
      <p>{Constants.aboutMe}</p>
      <a className="button" href={About} onClick={()=> push("/projects")}>View my work</a>
    </div>
  )
};

export default About;