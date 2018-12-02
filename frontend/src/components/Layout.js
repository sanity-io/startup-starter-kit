import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Container = styled.div`
  -webkit-font-smoothing: antialiased;
  ${props => `
    background: ${props.theme.background};
    color: ${props.theme.color};
  `};
`

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children, theme } = this.props

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
            <Container theme={theme}>{children}</Container>
          </>
        )}
      />
    )
  }
}

export default Layout
