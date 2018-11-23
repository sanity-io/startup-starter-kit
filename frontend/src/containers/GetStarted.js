import React from "react"
import CallToAction from "../components/CallToAction"
import { ThemeContext } from "../contexts"

const data = {
  headline: "Get Started with StartupGen",
  intro: "Dive in and create your first StartupGen project.",
  callToActions: [
    {
      key: "1",
      title: "Learn how",
      to: "/start/"
    }
  ]
}

class GetStartedContainer extends React.Component {
  static contextType = ThemeContext

  render() {
    return <CallToAction {...data} {...this.props} theme={this.context} />
  }
}

export default GetStartedContainer
