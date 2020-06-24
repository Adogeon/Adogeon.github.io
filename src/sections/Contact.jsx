import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Section from "../components/Section"
import FadeInDiv from "../components/FadeInDiv"
import styles from "../styles/Contact.module.scss"
import JigLink from "../components/JigLink"
import { FaGithubAlt, FaLinkedinIn, FaEnvelope } from "react-icons/fa"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query linkQuery {
      dataJson {
        github
        linkedin
        email
      }
    }
  `)

  return data ? (
    <div className={styles.root}>
      <div className={styles.dividerTop}>
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
      <Section name="Contact Me" animateFrom={"down"}>
        <FadeInDiv delay={500} fromDir={"down"}>
          <div className={styles.actionBar}>
            <JigLink
              to={data.dataJson.linkedin}
              label={<FaLinkedinIn size={"3em"} />}
            />
            <JigLink
              to={data.dataJson.github}
              label={<FaGithubAlt size={"3em"} />}
            />
            <JigLink
              to={`mailto:${data.dataJson.email}`}
              label={<FaEnvelope size={"3em"} />}
            />
          </div>
        </FadeInDiv>
      </Section>
    </div>
  ) : (
    <div>Loading ... </div>
  )
}

export default Contact
