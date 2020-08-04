import React, { Component } from "react";
import List from './List'
import data from './Data'
import shuffle from 'lodash/shuffle'

class Home extends Component {
  constructor() {
    super()
    this.leisures = ["home cooking", "online shopping", "exploring different cultures", "deep conversation", "wild fermented cider", "baking bread"]
    this.state = { data }
    this.shuffle = this.shuffle.bind(this)
  }
  shuffle = () => this.setState(state => ({ data: shuffle(state.data) }))
  componentDidMount() {
    setInterval(this.shuffle, 3000)
  }
  render() {
    return (
      <div className="home">
        <div className="home-main-text" >
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
        </div>
        <div className="home-liesure">
          <p>Things I enjoy...</p>
        </div>
        <List
          className="list"
          items={this.state.data}
          keys={d => d.name}
          heights={d => d.height}
          config={{ mass: 4, tension: 100, friction: 40 }}>
          {item => (
            <div
              style={{ color: 'deeppink', marginRight: '2vw' }}>
              <p>{item.name}</p>
            </div>
          )}
        </List>
      </div>
    )
  }
}


export default Home;
//source: https://github.com/react-spring/react-spring-examples/tree/renderprops/demos/renderprops/list