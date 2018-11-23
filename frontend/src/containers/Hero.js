import React from "react"
import Hero from "../components/Hero"
import { ThemeContext } from "../contexts"

const data = {
  headline: "My awesome headline that explains the whole shebang",
  intro: "My awesome intro that explains the whole shebang."
}

class HeroContainer extends React.Component {
  static contextType = ThemeContext

  render() {
    return <Hero {...data} {...this.props} theme={this.context} />
  }
}

export default HeroContainer
