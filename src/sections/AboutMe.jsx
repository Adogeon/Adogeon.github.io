import React from "react"

import Section from "../components/Section"

import styles from "../styles/AboutMe.module.scss"

const AboutMe = () => {
  return (
    <Section name={"About Me"}>
      <div className={styles.root}>
        <div className={styles.imgWrapper}>
          <img src="https://picsum.photos/500/400/" />
        </div>
        <div className={styles.textBlock}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            sapien ullamcorper, dictum urna a, interdum tellus. Morbi neque
            mauris, ultrices et interdum ut, rhoncus nec neque. Maecenas at
            maximus ante. Aliquam commodo ac nisi aliquet laoreet. Maecenas nec
            diam sit amet arcu fringilla lobortis at nec arcu. Curabitur eu
            volutpat sem.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default AboutMe
