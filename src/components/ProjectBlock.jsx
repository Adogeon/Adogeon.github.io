import React from "react"

import JigLink from "./JigLink"
import OutlineLink from "./OutlineLink"

import styles from "../styles/Section.module.scss"

const ProjectBlock = () => {
  return (
    <div className={styles.root}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>Title</h2>
        <p className={styles.paragraph}>
          Description/summary Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec eu justo leo. Donec porta nisi posuere ex rutrum semper.
          Suspendisse dictum rhoncus enim, sit amet pellentesque est cursus eu.
          Ut.
        </p>
        <div className={styles.action - block}>
          <OutlineLink to="#" label="Live Demo" />
          <JigLink to="#" label="Source Code" />
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <img src="https://picsum.photos/450/300/" />
      </div>
    </div>
  )
}

export default ProjectBlock
