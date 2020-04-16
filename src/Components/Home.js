import React from "react";
import Constants from "./Constants";
import About from "./About";
import { useHistory } from 'react-router'

function Home(props) {
  const { push } = useHistory()
  return (
    <div className="Home">
      <img src={Constants.appLogo} className="App-logo" alt="logo" />
      <h2>Hello, I'm Ai</h2>
      <p>{Constants.brieflyAboutMe}</p>
      <a className="button" onClick={()=> push("/about")}>A little more about me</a>
    </div>
  )
}

export default Home;
