import React from "react"

import JigLink from "./JigLink"
import OutlineLink from "./OutlineLink"

import styles from "../styles/ProjectBlock.module.scss"
import FadeInDiv from "./FadeInDiv"

const ProjectBlock = () => {
  return (
    <div className={styles.root}>
      <div className={styles.textBlock}>
        <FadeInDiv delayNumber={350} fromDir={"up"}>
          <h2 className={styles.title}>Title</h2>
        </FadeInDiv>
        <FadeInDiv>
          <p className={styles.paragraph}>
            Description/summary Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec eu justo leo. Donec porta nisi posuere ex
            rutrum semper. Suspendisse dictum rhoncus enim, sit amet
            pellentesque est cursus eu. Ut.
          </p>
        </FadeInDiv>
        <FadeInDiv delayNumber={750} fromDir={"down"}>
          <div className={styles.actionBlock}>
            <OutlineLink to="#" label="Live Demo" />
            <JigLink to="#" label="Source Code" />
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
