import React, { useEffect } from "react";
import constants from "./Constants"
import locomotiveScroll from "locomotive-scroll"

function Projects() {
  const projects = constants.projects
  const scrollRef = React.createRef()

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    })
  })
  return (
    <div className="scroll" ref={scrollRef}>
      <h2 data-scroll
        data-scroll-speed="2"
        data-scroll-position="top"
        >Some of my work</h2>
      {Object.keys(projects).map(project => {
        return (
          <div className="projects" key={project}>
            <p data-scroll data-scroll-speed="3" data-scroll-position="top" >{projects[project].desc}</p>
            <img src={projects[project].img} href={projects[project].img} alt="projectImage"></img>
          </div>
        )
      })}
    </div>
  );
};

export default Projects;