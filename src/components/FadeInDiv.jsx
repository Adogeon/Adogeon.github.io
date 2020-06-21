import React, { useState } from "react"
import PropTypes from "prop-types"
import VisibilitySensor from "react-visibility-sensor"

import { useSpring, animated } from "react-spring"

const parseDir = text => {
  switch (text) {
    case "left":
      return "translate3d(-10px,0,0)"
    case "right":
      return "translate3d(10px,0,0)"
    case "up":
      return "translate3d(0,-10px,0)"
    case "down":
      return "translate3d(0,10px,0)"
    default:
      return
  }
}

const FadeInDiv = ({ delayNumber, fromDir, children }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const onChange = isVisible => !isLoaded && setIsLoaded(isVisible)

  const props = useSpring({
    from: { opacity: 0, transform: parseDir(fromDir) },
    to: {
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? "translate3d(0,0,0)" : parseDir(fromDir),
    },
    delay: delayNumber,
    config: { duration: 1000 },
  })
  return (
    <VisibilitySensor onChange={onChange}>
      <animated.div style={props}>{children}</animated.div>
    </VisibilitySensor>
  )
}

FadeInDiv.propTypes = {
  delayNumber: PropTypes.number,
  children: PropTypes.node,
  fromDir: PropTypes.oneOf(["left", "right", "up", "down"]),
}

FadeInDiv.defaultProps = {
  delayNumber: 1000,
  fromDir: "left",
}

export default FadeInDiv
