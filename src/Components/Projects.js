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
        {cottonCandyBackground.map(el => el)}
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
  [<ParallaxLayer offset={0.1} speed={0.5} style={{ opacity: 0.5 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '15%', marginLeft: '70%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={0.2} speed={0.2} style={{ opacity: 0.5 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '12%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={0.35} speed={0.2} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '90%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={0.5} speed={0} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '40%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={0.6} speed={0} style={{ opacity: 0.3 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '5%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={0.7} speed={0} style={{ opacity: 0.3 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '80%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={0.7} speed={0.5} style={{ opacity: 0.5 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '15%', marginLeft: '15%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={0.9} speed={0} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '25%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={0.9} speed={0.2} style={{ opacity: 0.6 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '65%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={1} speed={0} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '95%' }} />
  </ParallaxLayer>],

  [<ParallaxLayer offset={1.1} speed={0.5} style={{ opacity: 0.5 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '15%', marginLeft: '70%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={1.2} speed={1} style={{ opacity: 0.7 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={1.2} speed={0.2} style={{ opacity: 0.5 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '12%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={1.5} speed={0} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '40%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={1.35} speed={0.2} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '90%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={1.6} speed={0} style={{ opacity: 0.3 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '5%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={1.7} speed={0} style={{ opacity: 0.3 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '80%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={1.7} speed={0.5} style={{ opacity: 0.5 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '15%', marginLeft: '20%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={2.2} speed={1} style={{ opacity: 0.7 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={1.9} speed={0} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '25%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={1.9} speed={0.2} style={{ opacity: 0.6 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '65%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={2} speed={0} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '95%' }} />
  </ParallaxLayer>],

  [<ParallaxLayer offset={2.1} speed={0.5} style={{ opacity: 0.5 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '15%', marginLeft: '70%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={2.2} speed={0.2} style={{ opacity: 0.5 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '12%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={2.5} speed={0} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '40%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={2.35} speed={0.2} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '90%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={2.6} speed={0} style={{ opacity: 0.3 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '5%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={2.7} speed={0} style={{ opacity: 0.3 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '80%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={2.7} speed={0.5} style={{ opacity: 0.5 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '15%', marginLeft: '20%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={3.2} speed={1} style={{ opacity: 0.7 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={4.2} speed={1} style={{ opacity: 0.7 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '8%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={2.9} speed={0} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '25%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={2.9} speed={0.2} style={{ opacity: 0.6 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '65%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={3} speed={0} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '95%' }} />
  </ParallaxLayer>],

  [<ParallaxLayer offset={3.1} speed={0.5} style={{ opacity: 0.5 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '15%', marginLeft: '70%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={3.2} speed={0.2} style={{ opacity: 0.5 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '12%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={3.5} speed={0} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '40%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={3.35} speed={0.2} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '90%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={3.6} speed={0} style={{ opacity: 0.3 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '5%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={3.7} speed={0} style={{ opacity: 0.3 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '80%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={3.7} speed={0.5} style={{ opacity: 0.5 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '15%', marginLeft: '20%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={4.2} speed={1} style={{ opacity: 0.7 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '17%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={3.9} speed={0} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '25%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={3.9} speed={0.2} style={{ opacity: 0.6 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '65%' }} />
  </ParallaxLayer>],
  [<ParallaxLayer offset={4} speed={0} style={{ opacity: 0.4 }}>
    <img src={cottonCandy} style={{ display: 'block', width: '7%', marginLeft: '95%' }} />
  </ParallaxLayer>]
]