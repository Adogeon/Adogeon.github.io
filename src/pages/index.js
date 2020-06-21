import React from "react"

import Splash from "../sections/Splash"
import AboutMe from "../sections/AboutMe"
import ProjectList from "../sections/ProjectList"
import Contact from "../sections/Contact"

import "../styles/global.scss"

const Index = () => {
  return (
    <>
      <Splash />
      <AboutMe />
      <ProjectList />
      <Contact />
    </>
  )
}

export default Index
