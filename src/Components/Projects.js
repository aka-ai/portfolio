import React from "react";
import constants from "./Constants"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
const projects = constants.projects
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
// const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
// const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
// const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
// const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
// const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
// const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

class Projects extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={4}>
        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#d2b48c' }} />
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#bdb76b' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#b8860b' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#5f9ea0' }} />

        {/* <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} /> */}

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
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