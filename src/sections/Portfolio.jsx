import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Section from "../components/Section"
import ProjectCard from "../components/ProjectCard"

const PortfolioSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Section name="portfolio" styles={{ padding: "10%" }}>
      {data.allMarkdownRemark.edges.map(edge => {
        const node = edge.node
        return <ProjectCard title={node.frontmatter.title} />
      })}
    </Section>
  )
}

export default PortfolioSection
