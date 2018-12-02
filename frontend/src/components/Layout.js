import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { zIndex } from './vars'

const Container = styled.div`
  -webkit-font-smoothing: antialiased;
  ${props => `
    background: ${props.theme.background};
    color: ${props.theme.color};
    ${
      props.overlay
        ? `
      height: 100vh;
      overflow: hidden;
    `
        : ''
    }
  `};
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: ${zIndex.overlay};
`

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
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
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Container theme={theme} overlay={overlay}>
              {children}
            </Container>
            {overlay && <Overlay />}
          </>
        )}
      />
    )
  }
}

export default Layout
