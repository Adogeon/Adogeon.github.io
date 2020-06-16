import React from "react"

import ProjectBlock from "../components/ProjectBlock"
import Section from "../components/Section"

const ProjectList = () => {
  return (
    <Section name={"projects"}>
      <div className>
        <ProjectBlock />
        <ProjectBlock />
        <ProjectBlock />
      </div>
    </Section>
  )
}

export default ProjectList
