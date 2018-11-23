import React from "react"
import SiteFooter from "../components/SiteFooter"
import { ThemeContext } from "../contexts"

const data = {
  socialLinks: {
    github: "#",
    twitter: "#",
    instagram: "#",
    facebook: "#",
    crunchbase: "#"
  }
}

class SiteFooterContainer extends React.Component {
  static contextType = ThemeContext

  render() {
    return <SiteFooter {...data} {...this.props} theme={this.context} />
  }
}

export default SiteFooterContainer
