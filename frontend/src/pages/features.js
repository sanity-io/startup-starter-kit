import React from 'react'
import styled from 'styled-components'
import GetStarted from '../containers/GetStarted'
import Layout from '../containers/Layout'
import SiteNav from '../containers/SiteNav'
import SiteFooter from '../containers/SiteFooter'
import { ThemeContext } from '../contexts'

const Content = styled.div`
  max-width: 48rem;
  padding: 1rem;
  margin: 0 auto;
`

const FeaturesPage = ({ data }) => (
  <ThemeContext.Provider value={data.site.siteMetadata.theme}>
    <Layout>
      <SiteNav />
      <Content>
        <h1>Features</h1>

        <div>
          <h2>Foo</h2>
        </div>

        <div>
          <h2>Bar</h2>
        </div>

        <div>
          <h2>Baz</h2>
        </div>
      </Content>
      <GetStarted />
      <SiteFooter />
    </Layout>
  </ThemeContext.Provider>
)

export default FeaturesPage

export const query = graphql`
  {
    site {
      siteMetadata {
        theme {
          background
          color
        }
      }
    }
  }
`
