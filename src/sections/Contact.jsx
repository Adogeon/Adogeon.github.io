import React from "react"

import Section from "../components/Section"

import styles from "../styles/Contact.module.scss"

const Contact = () => {
  return (
    <Section name="Contact Me">
      <div className={styles.root}>
        <i class="fab fa-linkedin-in"></i>
        <i class="fab fa-github-alt"></i>
        <i class="far fa-envelope"></i>
      </div>
    </Section>
  )
}

export default Contact
