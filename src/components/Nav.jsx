import React from "react"
import { Link } from "gastby"

const Nav = () => (
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
)

export default Nav
