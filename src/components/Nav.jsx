import React from "react"
import { Link } from "gatsby"

import styles from "../styles/Nav.module.scss"

const Nav = () => (
  <div className={styles.root}>
    <li className={styles.navList}>
      <ul>
        <Link
          to="/#bio"
          className={styles.navItem}
        >
          Bio
        </Link>
      </ul>
      <ul>
        <Link
          to="/#portfolio"
          className={styles.navItem}
        >
          Work
        </Link>
      </ul>
      <ul>
        <Link
          to="/#contact"
          className={styles.navItem}
        >
          Contact
        </Link>
      </ul>
    </li>
  </div>
)

export default Nav
