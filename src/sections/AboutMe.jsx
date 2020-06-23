import React from "react"

import Section from "../components/Section"
import Layout from "../components/Layout"
import FadeInDiv from "../components/FadeInDiv"

import styles from "../styles/AboutMe.module.scss"

const AboutMe = () => {
  return (
    <div className={styles.root} id="start">
      <div className={styles.dividerBottom}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
      <Layout>
        <Section name={"About Me"} animateFrom={"up"}>
          <div className={styles.contentWrapper}>
            <div className={styles.imgWrapper}>
              <FadeInDiv fromDir={"left"}>
                <img src="https://picsum.photos/300/200/" />
              </FadeInDiv>
            </div>

            <div className={styles.textBlock}>
              <FadeInDiv fromDir={"right"}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec sapien ullamcorper, dictum urna a, interdum tellus. Morbi
                  neque mauris, ultrices et interdum ut, rhoncus nec neque.
                  Maecenas at maximus ante. Aliquam commodo ac nisi aliquet
                  laoreet. Maecenas nec diam sit amet arcu fringilla lobortis at
                  nec arcu. Curabitur eu volutpat sem.
                </p>
              </FadeInDiv>
            </div>
          </div>
        </Section>
      </Layout>
    </div>
  )
}

export default AboutMe