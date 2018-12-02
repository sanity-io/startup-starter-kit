import React from 'react'
import Layout from '../containers/Layout'
import SiteNav from '../containers/SiteNav'
import SiteFooter from '../containers/SiteFooter'
import { ThemeContext } from '../contexts'
import ModalStackProvider from '../providers/ModalStack'

const NotFoundPage = ({ data }) => (
  <ModalStackProvider>
    {modalStackDepth => (
      <ThemeContext.Provider value={data.site.siteMetadata.theme}>
        <Layout overlay={modalStackDepth > 0}>
          <SiteNav
            siteTitle="TechFuge"
            menu={{
              items: [
                { key: 'home', to: '/', label: 'Home' },
                { key: 'features', to: '/features/', label: 'Features' },
                { key: 'pricing', to: '/pricing/', label: 'Pricing' },
              ],
            }}
          />
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <SiteFooter />
        </Layout>
      </ThemeContext.Provider>
    )}
  </ModalStackProvider>
)

export default NotFoundPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        theme {
          background
          color
          accent
        }
      }
    }
  }
`
