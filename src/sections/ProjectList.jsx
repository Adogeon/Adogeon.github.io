import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import ProjectBlock from "../components/ProjectBlock"
import Section from "../components/Section"

import styles from "../styles/ProjectList.module.scss"

const ProjectList = () => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      allProjectJson {
        edges {
          node {
            title
            summary
            demo
            source
            imagePath
          }
        }
      }
    }
  `)

  return (
    <div className={styles.root}>
      <Layout>
        <Section name={"projects"} animateFrom={"up"}>
          {data ? (
            data.allProjectJson.edges.map(edge => (
              <ProjectBlock content={edge.node} />
            ))
          ) : (
            <div>Loading ...</div>
          )}
        </Section>
      </Layout>
    </div>
  )
}

export default ProjectList
