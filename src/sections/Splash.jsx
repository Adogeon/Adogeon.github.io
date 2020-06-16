import React from "react"

import styles from "../styles/splash.module.scss"
import animation from "../styles/animation.module.scss"
import OutlineLink from "../components/OutlineLink"
import JigLink from "../components/JigLink"

const Splash = () => {
  console.log(animation)
  console.log([styles.text, animation.fadeIn].join(" "))
  return (
    <div className={styles.root}>
      <div className={styles.block}>
        <div className={[styles.text, animation.fadeIn].join(" ")}>
          <div>
            <p>
              Hello, my name is <u className={styles.nameText}>Anh Dao</u>
            </p>
            <p>I am an React Developer</p>
          </div>
        </div>
        <OutlineLink
          to="/#about"
          label="Learn More"
          styleNames={[animation.fadeIn, animation.late5]}
        />
      </div>
    </div>
  )
}

export default Splash
