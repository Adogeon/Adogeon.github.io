import React from "react"

import styles from "../styles/outlineButton.module.scss"

const OutlineLink = ({ to, label, styleNames }) =>
  typeof styleNames !== "undefined" ? (
    <a className={[...styleNames, styles.root].join(" ")} href={to}>
      {label}
    </a>
  ) : (
    <a className={styles.root} href={to}>
      {label}
    </a>
  )

export default OutlineLink
