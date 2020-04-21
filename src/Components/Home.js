import React from "react";
import Constants from "./Constants";
import About from "./About";
import { useHistory } from 'react-router'

function Home(props) {
  const { push } = useHistory()
  return (
    <div>
      <div className="home-background"></div>
      <div className="home">
      <h2>Hello, I'm Ai</h2>
      <p>{Constants.brieflyAboutMe}</p>
      <a className="home-button" onClick={()=> push("/about")}>A little more about me</a>
      </div>
    </div>
  )
}

export default Home;
