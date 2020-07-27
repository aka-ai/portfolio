import React from "react";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { click: null }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(path) {
    this.setState({ click: path })
  }

  render() {
    const clickedStyle = {
      color: 'deeppink',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    }
    const clicked = this.state.click
    return (
      <div className="nav-bar">
        <div className="nav-section">
          <Link style={clicked === 'home' ? clickedStyle : {}} onClick={()=>this.handleClick('home')} to="/">HOME</Link>
          <Link style={clicked === 'about' ? clickedStyle : {}} onClick={() => this.handleClick('about')} to="/about">ABOUT</Link>
          <Link onClick={() => this.handleClick('projects')} style={clicked === 'projects' ? clickedStyle : {}} to="/projects">PROJECTS</Link>
        </div>
        <div className="nav-name">
          <p>AI</p>
          <p>AKARACH</p>
        </div>
        <div className="nav-section">
          <a href="https://github.com/aka-ai" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a href="https://www.linkedin.com/in/akarach/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="https://twitter.com/aicooks" target="_blank" rel="noopener noreferrer">TWITTER</a>
        </div>
      </div>
    )
  }

}

export default Nav