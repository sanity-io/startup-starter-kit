import React from "react"
import HamburgerIcon from "./hamburger"

const Icon = props => {
  switch (props.symbol) {
    case "hamburger":
      return <HamburgerIcon {...props} />
    default:
      return <span>Unknown icon symbol: {props.symbol}</span>
  }
}

export default Icon
