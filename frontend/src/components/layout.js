import { StaticQuery, graphql } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "styled-components"
// import Guides from './Guides'
import { shade1 } from "./colors"
import { fontScale, zIndex } from "./vars"

import "./base.css"

const Container = styled.div`
  -webkit-font-smoothing: antialiased;
  font-size: ${fontScale.regular.size};
  line-height: ${fontScale.regular.lineHeight};
  ${({ overlay, theme }) => `
    background: ${theme.background};
    color: ${theme.color};
    ${
      overlay
        ? `
      height: 100vh;
      overflow: hidden;
    `
        : ""
    }
  `};
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => shade1(theme)};
  z-index: ${zIndex.overlay};
`

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children, overlay, theme } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: "description", content: "Sample" },
                { name: "keywords", content: "sample, something" }
              ]}
              bodyAttributes={{
                style: { background: theme.background, color: theme.color }
              }}
            >
              <html lang="en" />
            </Helmet>
            {/* <Guides /> */}
            <Container theme={theme} overlay={overlay}>
              {children}
            </Container>
            {overlay && <Overlay theme={theme} />}
          </>
        )}
      />
    )
  }
}

export default Layout
