import React from 'react'
import styled from 'styled-components'
import Layout from '../containers/Layout'
import SiteNav from '../containers/SiteNav'
import SiteFooter from '../containers/SiteFooter'
import { ThemeContext } from '../contexts'
import ModalStackProvider from '../providers/ModalStack'

const Content = styled.div`
  max-width: 48rem;
  padding: 1rem;
  margin: 0 auto;
`

const Headline = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin: 0 0 2em;
`

const PricingPage = ({ data }) => (
  <ModalStackProvider>
    {modalStackDepth => (
      <ThemeContext.Provider value={data.site.siteMetadata.theme}>
        <Layout overlay={modalStackDepth > 0}>
          <SiteNav />
          <Content>
            <Headline>Pricing</Headline>
          </Content>
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
          accent
        }
      }
    }
  }
`
