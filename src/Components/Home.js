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
    setInterval(this.shuffle, 2000)
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
              <p>a growth mindset and</p>
              <p>practicing continuous learning.</p>
            </div>
            <div className="home-pitch">
              <p>software <span style={{ color: "deeppink" }}>developer</span>.</p>
            </div>
          </div>
          <div className="home-pitch">
            <p>I take pride in my work</p>
            <p>and strive for excellence.</p>
          </div>
        </div>
        <div className="home-leisure">
        <div className="things-i-enjoy">
          <p>Things I enjoy...</p>
        </div>
        <List
          className="list"
          items={this.state.data}
          keys={d => d.name}
          heights={d => d.height}
          style={{position: 'relative'}}
          config={{ mass: 4, tension: 100, friction: 40 }}>
          {item => {
              if (item.name === this.state.data[0].name) {
                return (<div
                style={{ color: 'deeppink', marginRight: '2vw' }}>
                <p>{item.name}</p>
              </div>
            )
              }

            }} 
        </List>
        </div>
      </div>
    )
  }
}


export default Home;
//source: https://github.com/react-spring/react-spring-examples/tree/renderprops/demos/renderprops/list