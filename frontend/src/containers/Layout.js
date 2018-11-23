import React from "react"
import Layout from "../components/Layout"
import { ThemeContext } from "../contexts"

class LayoutContainer extends React.Component {
  static contextType = ThemeContext

  render() {
    return <Layout {...this.props} theme={this.context} />
  }
}

export default LayoutContainer
