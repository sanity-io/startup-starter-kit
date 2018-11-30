import React from 'react'
import Layout from '../containers/Layout'
import SiteNav from '../containers/SiteNav'
import { ThemeContext } from '../contexts'

const FeaturesPage = ({ data }) => (
  <ThemeContext.Provider value={data.site.siteMetadata.theme}>
    <Layout>
      <SiteNav />
      <h1>Features</h1>
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
