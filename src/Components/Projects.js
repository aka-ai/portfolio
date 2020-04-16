import React from "react";
import constants from "./Constants"

function Projects() {
  const projects = constants.projects
  return (
    <div>
      <h2>Some of my work</h2>
      {Object.keys(projects).map(project => {
        return (
          <div className="projects" key={project}>
            <p>{projects[project].desc}</p>
            <img src={projects[project].img} href={projects[project].img} alt="projectImage"></img>
          </div>
        )
      })}
    </div>
  );
};

export default Projects;