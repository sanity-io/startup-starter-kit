import React from 'react'
import { Link } from 'gatsby'

import Hero from '../components/hero'
import Layout from '../components/layout'
// import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Hero
      headline="My awesome headline that explains the whole shebang"
      intro={
        <>
          <p>My awesome intro that explains the whole shebang.</p>
        </>
      }
    />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
