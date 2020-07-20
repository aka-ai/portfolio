import React from "react";
import constants from "./Constants"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

function Projects() {
  const projects = constants.projects
  return (
    <div className="projects-container">
      <p className="projects-header">Some of my work</p>
      <div className="project">
        <p>{projects.coronavirus.desc}</p>
        <img src={projects.coronavirus.img} href={projects.coronavirus.img} alt="coronavirus project image"></img>
      </div>
      <div className="project">
        <img src={projects.wizardsOfCode.img} href={projects.wizardsOfCode.img} alt="wizardsofcode project image"></img>
        <p>{projects.wizardsOfCode.desc}</p>
      </div>
      <div className="project">
        <p>{projects.bumbleBee.desc}</p>
        <img src={projects.bumbleBee.img} href={projects.bumbleBee.img} alt="bumbleBee project image"></img>
      </div>
      <div className="project">
        <img src={projects.aicooks.img} href={projects.aicooks.img} alt="aicooks project image"></img>
        <p>{projects.aicooks.desc}</p>
      </div>
    </div>
  );
};

export default Projects;