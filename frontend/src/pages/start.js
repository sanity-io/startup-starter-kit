import React from 'react'
import Layout from '../containers/Layout'
import SiteNav from '../containers/SiteNav'
import { ThemeContext } from '../contexts'

const StartPage = ({ data }) => (
  <ThemeContext.Provider value={data.site.siteMetadata.theme}>
    <Layout>
      <SiteNav />
      <h1>Start</h1>
    </Layout>
  </ThemeContext.Provider>
)

export default StartPage

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
