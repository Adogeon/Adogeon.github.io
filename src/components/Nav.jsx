import React from "react"
import { Link } from "gatsby"

import styles from "../styles/Nav.module.scss"

const Nav = () => (
  <div className={styles.root}>
    <li>
      <ul>
        <Link to="/#bio">Bio</Link>
      </ul>
      <ul>
        <Link to="/#portfolio">Work</Link>
      </ul>
      <ul>
        <Link to="/#contact">Contact</Link>
      </ul>
    </li>
  </div>
)

export default Nav
