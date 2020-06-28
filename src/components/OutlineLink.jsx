import React from "react"
import { Link } from "react-scroll"
import styles from "../styles/outlineButton.module.scss"

const OutlineLink = ({ to, label, styleNames }) =>
  typeof styleNames !== "undefined" ? (
    <a className={[...styleNames, styles.root].join(" ")} href={to}>
      {label}
    </a>
  ) : (
    <a className={styles.root} href={to}>
      {label}
    </a>
  )

export default OutlineLink

export const OutlineLinkScroll = ({ to, label }) => (
  <Link
    to={to}
    spy={true}
    className={styles.root}
    smooth={true}
    offset={-70}
    duration={1000}
  >
    {label}
  </Link>
)
