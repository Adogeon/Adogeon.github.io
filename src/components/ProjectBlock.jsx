import React from "react"

import JigLink from "./JigLink"
import OutlineLink from "./OutlineLink"

import styles from "../styles/ProjectBlock.module.scss"
import FadeInDiv from "./FadeInDiv"

const ProjectBlock = ({ content }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <FadeInDiv delayNumber={350} fromDir={"up"}>
          <h2>{content.title}</h2>
        </FadeInDiv>
      </div>
      <div className={styles.textBlock}>
        <FadeInDiv>
          <p className={styles.paragraph}>{content.summary}</p>
        </FadeInDiv>
      </div>
      <div className={styles.actionBlock}>
        <FadeInDiv delayNumber={750} fromDir={"down"}>
          <OutlineLink to={content.demo} label="Live Demo" />
          <JigLink to={content.source} label="Source Code" />
        </FadeInDiv>
      </div>
      <div className={styles.imgWrapper}>
        <FadeInDiv delayNumber={750} fromDir={"right"}>
          <img src="https://picsum.photos/450/300/" />
        </FadeInDiv>
      </div>
    </div>
  )
}

export default ProjectBlock
