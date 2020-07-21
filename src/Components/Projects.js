import React from "react";
import constants from "./Constants"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import cottonCandy from './Constants/cottonCandy.png'
const projects = constants.projects
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

class Projects extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={4}>
        {/* <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#d2b48c' }} />
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#bdb76b' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#b8860b' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#5f9ea0' }} /> */}

        {/* <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} /> */}

        {/* <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer> */}
        <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.4 }}>
          <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '55%'}} />
          <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.2} style={{ opacity: 0.5 }}>
          <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={-0.1} style={{ opacity: 0.7 }}>
          <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.4 }}>
          <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.2} style={{ opacity: 0.5 }}>
          <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={-0.1} style={{ opacity: 0.7 }}>
          <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.8} style={{ opacity: 0.4 }}>
          <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={0.2} style={{ opacity: 0.5 }}>
          <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.8} speed={-0.1} style={{ opacity: 0.7 }}>
          <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.8} style={{ opacity: 0.4 }}>
          <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={0.2} style={{ opacity: 0.5 }}>
          <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} speed={-0.1} style={{ opacity: 0.7 }}>
          <img src={cottonCandy} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={cottonCandy} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={projects.coronavirus.img} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={projects.wizardsOfCode.img} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(3)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={projects.bumbleBee.img} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(0)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={projects.aicooks.img} style={{ width: '40%' }} />
        </ParallaxLayer>
        {/* <ParallaxLayer
        offset={2}
        speed={-0}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={() => this.parallax.scrollTo(0)}>
        <img src={projects.aicooks.img} style={{ width: '40%' }} />
      </ParallaxLayer> */}
      </Parallax>
    )
  }
  // return (
  //   <div className="projects-container">
  //     <p className="projects-header">Some of my work</p>
  //     <div className="project">
  //       <p>{projects.coronavirus.desc}</p>
  //       <img src={projects.coronavirus.img} href={projects.coronavirus.img} alt="coronavirus project image"></img>
  //     </div>
  //     <div className="project">
  //       <img src={projects.wizardsOfCode.img} href={projects.wizardsOfCode.img} alt="wizardsofcode project image"></img>
  //       <p>{projects.wizardsOfCode.desc}</p>
  //     </div>
  //     <div className="project">
  //       <p>{projects.bumbleBee.desc}</p>
  //       <img src={projects.bumbleBee.img} href={projects.bumbleBee.img} alt="bumbleBee project image"></img>
  //     </div>
  //     <div className="project">
  //       <img src={projects.aicooks.img} href={projects.aicooks.img} alt="aicooks project image"></img>
  //       <p>{projects.aicooks.desc}</p>
  //     </div>
  //   </div>
  // );
};

export default Projects;

//react-spring doc: https://www.react-spring.io/docs/props/parallax
//react-spring parellax example: https://codesandbox.io/s/nwq4j1j6lm?from-embed=&file=/src/index.js:843-856