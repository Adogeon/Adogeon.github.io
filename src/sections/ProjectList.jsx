import React from "react"

import Layout from "../components/Layout"
import ProjectBlock from "../components/ProjectBlock"
import Section from "../components/Section"

import styles from "../styles/ProjectList.module.scss"

const ProjectList = () => {
  return (
    <div className={styles.root}>
      <Layout>
        <Section name={"projects"} animateFrom={"up"}>
          <ProjectBlock />
          <ProjectBlock />
          <ProjectBlock />
        </Section>
      </Layout>
    </div>
  )
}

export default ProjectList
