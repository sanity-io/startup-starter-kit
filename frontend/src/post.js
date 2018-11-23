import { StaticQuery, graphql } from "gatsby"
import React from "react"
import Article from "./components/Article"
import LatestUpdates from "./containers/LatestUpdates"
import Layout from "./containers/Layout"
import SiteNav from "./containers/SiteNav"
import SiteFooter from "./containers/SiteFooter"
import ModalStackProvider from "./providers/ModalStack"
import ThemeProvider from "./providers/Theme"
import {
  mapSharedNavigationToSiteNavProps,
  mapSharedNavigationToSiteFooterProps
} from "./lib/mapToProps"

const query = graphql`
  {
    sanity {
      allSharedNavigations {
        _id
        _type
        id
        navItems {
          ... on SANITY_NavSection {
            _key
            _type
            title
            navItems {
              ... on SANITY_NavItem {
                _key
                _type
                text
                external
                internal {
                  ... on SANITY_Route {
                    _id
                    slug {
                      current
                    }
                  }
                }
              }
            }
          }
          ... on SANITY_NavItem {
            _key
            _type
            text
            external
            internal {
              ... on SANITY_Route {
                _id
                slug {
                  current
                }
              }
            }
          }
        }
      }
    }
  }
`

function mapPageContextToArticleProps(data) {
  return {
    headline: data.post.title,
    introBlockContent: data.post.introRaw,
    publishedAt: data.post.publishedAt,
    blockContent: data.post.contentRaw,
    media: data.post.featuredImage
      ? {
          type: "image",
          src: data.post.featuredImage.asset.url
        }
      : null
  }
}

function mapAllSharedNavigationsToPropsObject(data) {
  return data.sanity.allSharedNavigations.reduce((obj, d) => {
    if (d.id === "mainNav") {
      obj.mainNav = mapSharedNavigationToSiteNavProps(d)
    }

    if (d.id === "footerNav") {
      obj.footerNav = mapSharedNavigationToSiteFooterProps(d)
    }

    return obj
  }, {})
}

const Page = ({ pageContext = {} }) => (
  <ThemeProvider>
    {theme => (
      <ModalStackProvider>
        {modalStackDepth => (
          <StaticQuery
            query={query}
            render={data => {
              const obj = mapAllSharedNavigationsToPropsObject(data)
              return (
                <Layout overlay={modalStackDepth > 0}>
                  <SiteNav {...obj.mainNav} />
                  <Article {...mapPageContextToArticleProps(pageContext)} />
                  <LatestUpdates headline="Latest blog posts" invert />
                  <SiteFooter {...obj.footerNav} />
                </Layout>
              )
            }}
          />
        )}
      </ModalStackProvider>
    )}
  </ThemeProvider>
)

export default Page
