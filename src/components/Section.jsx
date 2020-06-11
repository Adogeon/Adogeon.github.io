import React from "react"

import styles from "../styles/Section.module.scss"

const Section = ({ name, children }) => (
  <section className={styles.root}>
    <h2 className={styles.title}>{name}</h2>
    <div className={styles.content}>{children}</div>
  </section>
)

export default Section
