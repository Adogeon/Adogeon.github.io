import React from "react"

import Nav from "./Nav"
import "../styles/index.scss"
import styles from "../styles/Layout.module.scss"

const Layout = ({ children }) => (
  <div className={styles.root}>
    <Nav />
    <div className={styles.container}>{children}</div>
  </div>
)

export default Layout
