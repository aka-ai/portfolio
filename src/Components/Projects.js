import React from "react";
import constants from "./Constants"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import cottonCandy from './Constants/cottonCandy.png'
import { wizardsOfCode } from "./Constants/projects";
const projects = constants.projects
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const projectImageStyle = { width: '40%', borderRadius: '5px' }
const projectStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center' }

class Projects extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={4}>
        {cottonCandyBackground.map((el, idx) => (
          <ParallaxLayer key={idx} offset={el.offset} speed={el.speed} style={el.style}>
            <img src={cottonCandy} style={el.imgStyle} />
          </ParallaxLayer>
        ))}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={projectStyle}>
          <img src={projects.coronavirus.img} style={projectImageStyle} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={projectStyle}>
          <img src={projects.wizardsOfCode.img} style={projectImageStyle} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(3)}
          style={projectStyle}>
          <img src={projects.bumbleBee.img} style={projectImageStyle} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(0)}
          style={projectStyle}>
          <img src={projects.aicooks.img} style={projectImageStyle} />
        </ParallaxLayer>
      </Parallax>
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