import React from "react"

export const ThemeContext = React.createContext({
  color: "#000",
  background: "#fff"
})

export const ModalStackContext = React.createContext({
  depth: 0
})
