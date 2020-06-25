import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const renderImage = edge => {
  console.log(edge)
  return <Img fluid={edge.node.childImageSharp.fluid} />
}

const ImageQuery = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "image" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const ImageFluidForPath = ({ path }) => (
  <StaticQuery
    query={ImageQuery}
    render={data => {
      const correctEdge = data.allFile.edges.find(
        edge => edge.node.relativePath === path
      )
      return renderImage(correctEdge)
    }}
  />
)

ImageFluidForPath.propTypes = {
  path: PropTypes.string,
}

ImageFluidForPath.defaultProps = {
  path: "placeholder.png",
}

export default ImageFluidForPath
