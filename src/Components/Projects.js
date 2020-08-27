import React from "react";
import constants from "./Constants";
import { Spring, animated } from "react-spring/renderprops";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import { Link } from "react-router-dom";
import cottonCandy from './Constants/cottonCandy.png'
import upArrow from './Constants/up.png'
import downArrow from './Constants/down.png'
import tealLink from './Constants/teal-link.png'
import mustardLink from './Constants/mustard-link.png'
import yellowLink from './Constants/yellow-link.png'
import blueLink from './Constants/blue-link.png'
import homeIcon from './Constants/home-icon.png'
const projects = constants.projects

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = { coronavirus: false, wizardsOfCode: false, bumbleBee: false, aicooks: false, portfolio: false, popupClicked: false}
    this.clickHandle = this.clickHandle.bind(this)
    this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this)
    this.popupClickHandle = this.popupClickHandle.bind(this)
  }
  clickHandle(project) {
    const newstate = this.state
    newstate[project] = !this.state[project]
    this.setState(newstate)
  }
  onMouseLeaveHandle() {
    this.setState({ coronavirus: false, wizardsOfCode: false, bumbleBee: false, aicooks: false, portfolio: false })
  }
  popupClickHandle() {
    this.setState({ popupClicked: true})
  }
  render() {
    const projectDescStyle = ['#008080', '#dfab29', '#e0b421', '#20B2AA', 'deeppink']
    const linkIcons = [tealLink, mustardLink, yellowLink, blueLink, homeIcon]
    return (
      <React.Fragment>
        {this.state.popupClicked ? <div></div> :
          <div className="popup" >
            <p className="close" onClick={this.popupClickHandle}>×</p>
            <div className="content">
              click image for details
            </div>
          </div>
  }
        <Parallax ref={ref => (this.parallax = ref)} pages={5}>
          {cottonCandyBackground.map((el, idx) => (
            <ParallaxLayer key={idx} offset={el.offset} speed={el.speed} style={el.style}>
              <img src={cottonCandy} alt='cotton-candy' style={el.imgStyle} />
            </ParallaxLayer>
          ))}
          {Object.keys(projects).map((project, idx) => {
            return (
              <React.Fragment key={idx}>
                <ParallaxLayer
                  offset={idx}
                  speed={0.4}
                  className='project'
                  style={{ height: '75vh' }}
                >
                  <Spring
                    native
                    from={{ opacity: 1 }}
                    to={{ opacity: this.state[project] ? 1 : 0, transform: `perspective(600px) rotateX(${this.state[project] ? 180 : 0}deg)` }}
                  >
                    {({ opacity, transform }) => {
                      return (
                        <React.Fragment >
                          <animated.div
                            onClick={() => this.clickHandle(project)}
                            onMouseLeave={this.onMouseLeaveHandle}
                            className='project-image-container'
                            style={{
                              opacity: opacity.interpolate(o => 1 - o), transform: transform,
                            }}
                          >
                            <img src={projects[project].img} alt={project} className='project-image' />
                          </animated.div>
                          <animated.div
                            onClick={() => this.clickHandle(project)}
                            onMouseLeave={this.onMouseLeaveHandle}
                            className='project-image-container'
                            style={{
                              opacity,
                              transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                            }}
                          >
                            <div className='project-desc'>
                              <h3 style={{ color: projectDescStyle[idx] }}>{projects[project].title}</h3>
                              <p>{projects[project].desc}</p>
                              <p>{projects[project].tech}</p>
                              {idx < linkIcons.length-1 ?
                                <a className='link-to-project' href='https://isitflatyet.org' target='_blank' >
                                  <img src={linkIcons[idx]} alt='link to isitflatyet.org' />
                                </a>
                                :
                                <Link to='/' className='link-to-project'>
                                  <img src={linkIcons[idx]} alt='go to homepage' />
                                </Link>
                                }
                            </div>
                          </animated.div>
                        </React.Fragment>
                      )
                    }}
                  </Spring>
                  <div className='arrows'>
                    {idx === 0 || idx === 4 ?
                      <div></div> :
                      <img
                        className='upArrow'
                        src={upArrow}
                        alt='up-arrow'
                        onClick={() => this.parallax.scrollTo(idx === 4 ? 0 : idx - 1)} />}

                    {idx === 4 ?
                      <img
                        className='upArrow'
                        src={upArrow}
                        alt='up-arrow'
                        onClick={() => this.parallax.scrollTo(0)} /> :
                      <img
                        className='downArrow'
                        src={downArrow}
                        alt='down-arrow'
                        onClick={() => this.parallax.scrollTo(idx + 1)} />}
                  </div>
                </ParallaxLayer>
              </React.Fragment>
            )
          })}
        </Parallax>
      </React.Fragment>
    )
  }
};

export default Projects;

//react-spring doc: https://www.react-spring.io/docs/props/parallax
//react-spring parellax example: https://codesandbox.io/s/nwq4j1j6lm?from-embed=&file=/src/index.js:843-856
//link icon: https://www.flaticon.com/free-icon/link_115771#
const cottonCandyBackground = [

  { offset: 0.1, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '70%' } },
  { offset: 0.2, speed: 0.2, style: { opacity: 0.5 }, imgStyle: { width: '10%', marginLeft: '12%' } },
  { offset: 0.35, speed: 0.2, style: { opacity: 0.4 }, imgStyle: { width: '10%', marginLeft: '90%' } },
  { offset: 0.5, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '10%', marginLeft: '40%' } },
  { offset: 0.6, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '5%' } },
  { offset: 0.7, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '80%' } },
  { offset: 0.7, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '15%' } },
  { offset: 0.9, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '25%' } },
  { offset: 0.9, speed: 0.2, style: { opacity: 0.6 }, imgStyle: { width: '10%', marginLeft: '65%' } },
  { offset: 1, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '95%' } },

  { offset: 1.1, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '70%' } },
  { offset: 1.2, speed: 1, style: { opacity: 0.7 }, imgStyle: { width: '20%', marginLeft: '5%' } },
  { offset: 1.2, speed: 0.2, style: { opacity: 0.5 }, imgStyle: { width: '10%', marginLeft: '12%' } },
  { offset: 1.5, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '10%', marginLeft: '40%' } },
  { offset: 1.35, speed: 0.2, style: { opacity: 0.4 }, imgStyle: { width: '10%', marginLeft: '90%' } },
  { offset: 1.6, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '5%' } },
  { offset: 1.7, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '80%' } },
  { offset: 1.7, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '20%' } },
  { offset: 2.2, speed: 1, style: { opacity: 0.7 }, imgStyle: { width: '20%', marginLeft: '5%' } },
  { offset: 1.9, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '25%' } },
  { offset: 1.9, speed: 0.2, style: { opacity: 0.6 }, imgStyle: { width: '10%', marginLeft: '65%' } },
  { offset: 2, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '95%' } },

  { offset: 2.1, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '70%' } },
  { offset: 2.2, speed: 0.2, style: { opacity: 0.5 }, imgStyle: { width: '10%', marginLeft: '12%' } },
  { offset: 2.5, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '10%', marginLeft: '40%' } },
  { offset: 2.35, speed: 0.2, style: { opacity: 0.4 }, imgStyle: { width: '10%', marginLeft: '90%' } },
  { offset: 2.6, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '5%' } },
  { offset: 2.7, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '80%' } },
  { offset: 2.7, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '20%' } },
  { offset: 3.2, speed: 1, style: { opacity: 0.7 }, imgStyle: { width: '20%', marginLeft: '5%' } },
  { offset: 2.9, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '25%' } },
  { offset: 2.9, speed: 0.2, style: { opacity: 0.6 }, imgStyle: { width: '10%', marginLeft: '65%' } },
  { offset: 3, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '95%' } },

  { offset: 3.1, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '70%' } },
  { offset: 3.2, speed: 0.2, style: { opacity: 0.5 }, imgStyle: { width: '10%', marginLeft: '12%' } },
  { offset: 3.5, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '10%', marginLeft: '40%' } },
  { offset: 3.35, speed: 0.2, style: { opacity: 0.4 }, imgStyle: { width: '10%', marginLeft: '90%' } },
  { offset: 3.6, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '5%' } },
  { offset: 3.7, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '80%' } },
  { offset: 3.7, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '20%' } },
  { offset: 3.9, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '25%' } },
  { offset: 3.9, speed: 0.2, style: { opacity: 0.6 }, imgStyle: { width: '10%', marginLeft: '65%' } },
  { offset: 4, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '95%' } },

  { offset: 4.1, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '70%' } },
  { offset: 4.2, speed: 0.2, style: { opacity: 0.5 }, imgStyle: { width: '10%', marginLeft: '12%' } },
  { offset: 4.5, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '10%', marginLeft: '40%' } },
  { offset: 4.6, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '5%' } },
  { offset: 4, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '80%' } },
  { offset: 4.4, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '20%' } },
  { offset: 4.9, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '25%' } },
  { offset: 4.7, speed: 0.2, style: { opacity: 0.6 }, imgStyle: { width: '10%', marginLeft: '65%' } },
  { offset: 4.8, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '95%' } },
]