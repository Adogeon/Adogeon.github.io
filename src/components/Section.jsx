import React from "react"

import styles from "../styles/Section.module.scss"

const Section = ({ name, children }) => (
  <section className={styles.root}>
    <h1 className={styles.title}>{name}</h1>
    {children}
  </section>
)

export default Section
