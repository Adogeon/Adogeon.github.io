import React from "react"

import styles from "../styles/jigButton.module.scss"

const JigLink = ({ to, label, styleNames }) =>
  typeof styleNames !== "undefined" ? (
    <a className={[...styleNames, styles.root].join(" ")} href={to}>
      {label}
    </a>
  ) : (
    <a className={styles.root} href={to}>
      {label}
    </a>
  )
export default JigLink
