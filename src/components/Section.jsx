import React from "react"
import FadeInDiv from "../components/FadeInDiv"
import styles from "../styles/Section.module.scss"
import { VisibilitySensor } from "react-visibility-sensor"

const Section = ({ name, animateFrom, children }) => {
  return (
    <section className={styles.root}>
      <FadeInDiv delayNumber={200} fromDir={animateFrom}>
        <h1 className={styles.title}>{name}</h1>
      </FadeInDiv>
      {children}
    </section>
  )
}

export default Section
