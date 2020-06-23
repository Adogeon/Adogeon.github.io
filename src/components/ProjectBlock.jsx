import React from "react"

import JigLink from "./JigLink"
import OutlineLink from "./OutlineLink"

import styles from "../styles/ProjectBlock.module.scss"
import FadeInDiv from "./FadeInDiv"

const ProjectBlock = ({ content }) => {
  console.log(content)
  return (
    <div className={styles.root}>
      <div className={styles.textBlock}>
        <FadeInDiv delayNumber={350} fromDir={"up"}>
          <h2 className={styles.title}>{content.title}</h2>
        </FadeInDiv>
        <FadeInDiv>
          <p className={styles.paragraph}>{content.summary}</p>
        </FadeInDiv>
        <FadeInDiv delayNumber={750} fromDir={"down"}>
          <div className={styles.actionBlock}>
            <OutlineLink to={content.demo} label="Live Demo" />
            <JigLink to={content.source} label="Source Code" />
          </div>
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
