import React from "react"
import { graphql } from "gatsby"

import Nav from "./Nav"
import "../styles/global.scss"
import styles from "../styles/Layout.module.scss"
import { useStaticQuery } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <div className={styles.root}>{children}</div>
}

export default Layout
