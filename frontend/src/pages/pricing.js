import React from 'react'
import Layout from '../containers/Layout'
import SiteNav from '../containers/SiteNav'
import SiteFooter from '../containers/SiteFooter'
import { ThemeContext } from '../contexts'
import ModalStackProvider from '../providers/ModalStack'

const PricingPage = ({ data }) => (
  <ModalStackProvider>
    {modalStackDepth => (
      <ThemeContext.Provider value={data.site.siteMetadata.theme}>
        <Layout overlay={modalStackDepth > 0}>
          <SiteNav />
          <h1>Pricing</h1>
          <SiteFooter />
        </Layout>
      </ThemeContext.Provider>
    )}
  </ModalStackProvider>
)

export default PricingPage

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
