import React from "react";
import constants from "./Constants";
import { Spring, animated } from "react-spring/renderprops";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
const projects = constants.projects

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = { coronavirus: false, wizardsOfCode: false, bumbleBee: false, aicooks: false, minesweeper: false, portfolio: false, popupClicked: false }
    this.clickHandle = this.clickHandle.bind(this)
    this.popupClickHandle = this.popupClickHandle.bind(this)
  }
  clickHandle(project) {
    const newstate = this.state
    newstate[project] = !this.state[project]
    this.setState(newstate)
  }
  popupClickHandle() {
    this.setState({ popupClicked: true })
  }
  render() {

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
        <Parallax ref={ref => (this.parallax = ref)} pages={6}>
          {constants.cottonCandyBackground.map((el, idx) => (
            <ParallaxLayer key={idx} offset={el.offset} speed={el.speed} style={el.style}>
              <img src={constants.cottonCandy} alt='cotton-candy' style={el.imgStyle} />
            </ParallaxLayer>
          ))}
          {Object.keys(projects).map((project, idx) => {
            return (
              <React.Fragment key={project}>
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
                            className='project-image-container'
                            style={{
                              opacity: opacity.interpolate(o => 1 - o), transform: transform,
                            }}
                          >
                            <img src={projects[project].img} alt={project} className='project-image' />
                          </animated.div>
                          <animated.div
                            onClick={() => this.clickHandle(project)}
                            className='project-image-container'
                            style={{
                              opacity,
                              transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                            }}
                          >
                            {this.state[project] ?
                            <div className='project-desc'>
                              {
                                !this.state[project] ?
                                  (<h3>
                                    {projects[project].title}
                                  </h3>)
                                  :
                                  (<a
                                    href={projects[project].url}
                                    target={project !== 'portfolio' ? '_blank' : ''} rel="noopener noreferrer" >
                                    <h3>
                                      {projects[project].title}
                                    </h3>
                                  </a>)
                              }
                              <p>{projects[project].desc}</p>
                              <div className="technologies">
                                {idx < 3 ? <p style={{ fontWeight: "bold" }}>Technologies</p> : ''}
                                <p>{projects[project].tech}</p>
                              </div>
                            </div> : <div></div>}
                          </animated.div>
                        </React.Fragment>
                      )
                    }}
                  </Spring>
                  <div className='arrows'>
                    {project === 'coronavirus' || project === 'portfolio' ?
                      <div></div> :
                      <img
                        className='upArrow'
                        src={constants.upArrow}
                        alt='up-arrow'
                        onClick={() => this.parallax.scrollTo(project === 'portfolio' ? 0 : idx - 1)} />}

                    {project === 'portfolio' ?
                      <img
                        className='upArrow'
                        src={constants.upArrow}
                        alt='up-arrow'
                        onClick={() => this.parallax.scrollTo(0)} /> :
                      <img
                        className='downArrow'
                        src={constants.downArrow}
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
//home icon: https://www.flaticon.com/free-icon/home_1946488?term=home&page=1&position=8#
