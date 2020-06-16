import React from "react";
import Constants from "./Constants";

function Home() {
  return (
    <div>
      <div className="home">
      <h2>Hello, I'm Ai</h2>
      <p>{Constants.brieflyAboutMe}</p>
      </div>
    </div>
  )
}

export default Home;
