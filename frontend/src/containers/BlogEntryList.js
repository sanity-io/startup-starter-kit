import React from "react"
import LinkCardList from "../components/LinkCardList"
import { ThemeContext } from "../contexts"

const data = {
  moreLink: {
    title: "Load more",
    to: "/blog/"
  },
  items: [
    {
      key: "1",
      title: "SDK 1.0 is now available",
      to: "/blog-post/",
      text:
        "Expo SDK v31.0.0 is based on the recently released React Native 0.57, it includes an update to Babel 7 and upgraded JSC on Android.",
      image: {
        src: "https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      }
    },
    {
      key: "2",
      title: "Docs: Already used React Native?",
      to: "/blog-post/",
      text:
        "This guide is intended to give developers who have already used React Native a quick outline on some of the key concepts, resources, and differences they will encounter when using Expo.",
      image: {
        src: "https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      }
    },
    {
      key: "3",
      title: "Examples and tutorials",
      to: "/blog-post/",
      text:
        "Thanks to our talented and prolific developer community, we’ve been able to highlight a bunch of great examples and tutorials on our Expo blog. Here’s a running collection, in no particular order.",
      image: {
        src: "https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      }
    }
  ]
}

class BlogEntryListContainer extends React.Component {
  static contextType = ThemeContext

  render() {
    return <LinkCardList {...data} {...this.props} theme={this.context} />
  }
}

export default BlogEntryListContainer
