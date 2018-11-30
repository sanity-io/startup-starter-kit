import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SiteNavContainer from '../containers/site-nav'

const SecondPage = () => (
  <Layout>
    <SiteNavContainer
      siteTitle="TechFuge"
      menu={{
        items: [
          { key: 'home', to: '/', label: 'Home' },
          { key: 'features', to: '/features/', label: 'Features' },
          { key: 'pricing', to: '/pricing/', label: 'Pricing' },
        ],
      }}
    />

    <h1>Features</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
