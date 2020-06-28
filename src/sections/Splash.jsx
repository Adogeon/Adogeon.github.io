import React from "react"

import styles from "../styles/splash.module.scss"
import { OutlineLinkScroll } from "../components/OutlineLink"
import Layout from "../components/Layout"
import FadeInDiv from "../components/FadeInDiv"

const Splash = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.block}>
          <FadeInDiv delayNumber={500}>
            <p className={styles.text}>
              Hello, my name is <em> Anh Dao</em>. I am an React Developer
            </p>
          </FadeInDiv>
          <FadeInDiv>
            <OutlineLinkScroll to="start" label="Learn More" />
          </FadeInDiv>
        </div>
      </div>
    </Layout>
  )
}

export default Splash
