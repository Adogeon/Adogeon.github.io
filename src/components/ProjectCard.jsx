import React from "react"
import PropTypes from "prop-types"

import styles from "../styles/ProjectCard.module.scss"

const ProjectCard = ({ title }) => (
  <div className={styles.root}>
    <h4 className={styles.title}>{title}</h4>
    <p>Description</p>
    <div>
      <a>Github</a>
      <a>Website</a>
    </div>
  </div>
)

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  websiteLink: PropTypes.string,
}

ProjectCard.defaultProps = {
  title: "Title",
  description: "Description",
}

export default ProjectCard
