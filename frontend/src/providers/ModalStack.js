import React from "react"
import { ModalStackContext } from "../contexts"

class ModalStackProvider extends React.Component {
  state = {
    depth: 0
  }

  handleDecr = () => {
    this.setState(state => ({ depth: state.depth - 1 }))
  }

  handleIncr = () => {
    this.setState(state => ({ depth: state.depth + 1 }))
  }

  render() {
    const { children } = this.props

    return (
      <ModalStackContext.Provider
        value={{
          depth: this.state.depth,
          decr: this.handleDecr,
          incr: this.handleIncr
        }}
      >
        {children(this.state.depth)}
      </ModalStackContext.Provider>
    )
  }
}

export default ModalStackProvider
