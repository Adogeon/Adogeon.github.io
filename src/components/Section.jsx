import React from "react"

import styles from "../styles/Section.module.scss"

const Section = ({ name, children }) => <section id={name} className={styles.root}>{children}</section>

export default Section
