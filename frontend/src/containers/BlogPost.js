import React from "react"
import Article from "../components/Article"
import { ThemeContext } from "../contexts"

const data = {
  headline: "My awesome headline that explains the whole shebang",
  intro: "My awesome intro that explains the whole shebang."
}

class BlogPostContainer extends React.Component {
  static contextType = ThemeContext

  render() {
    return <Article {...data} {...this.props} theme={this.context} />
  }
}

export default BlogPostContainer
