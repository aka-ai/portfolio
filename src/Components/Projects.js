import React from "react";
import constants from "./Constants";
import { Spring, animated } from "react-spring/renderprops";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import cottonCandy from './Constants/cottonCandy.png'
const projects = constants.projects
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = { coronavirus: false, wizardsOfCode: false, bumbleBee: false, aicooks: false} 
    this.clickHandle = this.clickHandle.bind(this)
    this.scrollHandle = this.scrollHandle.bind(this)
  }
  clickHandle(project) {
    const newstate = this.state
    newstate[project] = !this.state[project]
    this.setState(newstate)
  }
  onMouseLeaveHandle() {
    console.log('scroll')
    this.setState({ coronavirus: false, wizardsOfCode: false, bumbleBee: false, aicooks: false } )
  }
  render() {
    return (
      <React.Fragment>
        <Parallax ref={ref => (this.parallax = ref)} pages={4}>
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
                              <p>{projects[project].desc}</p>
                            </div>
                          </animated.div>
                        </React.Fragment>
                      )
                    }}
                  </Spring>
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
  { offset: 4.2, speed: 1, style: { opacity: 0.7 }, imgStyle: { width: '20%', marginLeft: '8%' } },
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
  { offset: 4.2, speed: 1, style: { opacity: 0.7 }, imgStyle: { width: '20%', marginLeft: '17%' } },
  { offset: 3.9, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '25%' } },
  { offset: 3.9, speed: 0.2, style: { opacity: 0.6 }, imgStyle: { width: '10%', marginLeft: '65%' } },
  { offset: 4, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '95%' } },
]