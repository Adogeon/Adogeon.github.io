import React from "react"

import styles from "../styles/splash.module.scss"

const Splash = () => (
  <div className={styles.root}>
    <div className={styles.block}>
      <div className={styles.text}>
        <p>Hello, my name is Anh Dao
          I am an React Developer</p>
      </div>
      <button>Learn More</button>
    </div>
  </div>
)

export default Splash
