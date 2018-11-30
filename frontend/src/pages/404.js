import React from 'react'
import Layout from '../containers/Layout'
import SiteNav from '../containers/SiteNav'
import { ThemeContext } from '../contexts'

const NotFoundPage = () => (
  <ThemeContext.Provider value={{ text: '#f00', background: '#fff' }}>
    <Layout>
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
    </Layout>
  </ThemeContext.Provider>
)

export default NotFoundPage
