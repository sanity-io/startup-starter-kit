import { StaticQuery, graphql } from "gatsby"
import React from "react"
import LinkCardGrid from "../components/LinkCardGrid"
import { ThemeContext } from "../contexts"

const query = graphql`
  {
    sanity {
      posts: allPosts(offset: 0, limit: 3) {
        _id
        title
        publishedAt
        contentRaw
        slug {
          current
        }
        featuredImage {
          alt
          captionRaw
          asset {
            url
          }
        }
      }
    }
  }
`

function mapDataToProps({sanity}) {
  const {title, posts = []} = sanity || {}
  return {
    headline: title,
    items: (posts || []).map(post => ({
      key: post._id,
      title: post.title,
      publishedAt: post.publishedAt,
      to: `/blog/${post.slug.current}/`,
      introBlockContent: null,
      image: post.featuredImage ? { src: post.featuredImage.asset.url } : null
    })),
    moreLink: {
      title: "See more",
      to: "/blog/"
    }
  }
}

class LatestUpdatesContainer extends React.Component {
  static contextType = ThemeContext

  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <LinkCardGrid
            {...mapDataToProps(data)}
            {...this.props}
            theme={this.context}
          />
        )}
      />
    )
  }
}

export default LatestUpdatesContainer
