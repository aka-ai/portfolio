import React, { Component } from "react";


class Home extends Component {
  constructor() {
    super()
    this.leisures = ["home cooking", "online shopping", "exploring different cultures", "deep conversation", "wild fermented cider", "baking bread"]
  }
  render() {
    return (
        <div className="home" >
          <div className="home-pitch">
            <p>I'm Ai, a fashion</p>
            <p>designer/chef turned </p>
          </div>
          <div className="home-middle-pitch">
            <div className="home-motto">
              <p>I believe in developing</p>
              <p>a growth mindset</p>
              <p>and always be learning.</p>
            </div>
            <div className="home-pitch">
              <p>software <span style={{ color: "deeppink" }}>developer</span>.</p>
              <p>I have an eye for design,</p>
            </div>
          </div>
          <div className="home-pitch">
            <p>I take pride of my work</p>
            <p>and strive for excellence.</p>
          </div>
          <div className="home-liesure">
            <p>I enjoy <span style={{ color: "deeppink" }}>cooking</span></p>
          </div>
        </div>
    )
  }
}


export default Home;
