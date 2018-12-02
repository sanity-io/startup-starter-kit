import React from 'react'
import styled from 'styled-components'
import FeatureDetailList from '../containers/FeatureDetailList'
import GetStarted from '../containers/GetStarted'
import Layout from '../containers/Layout'
import SiteNav from '../containers/SiteNav'
import SiteFooter from '../containers/SiteFooter'
import { ThemeContext } from '../contexts'
import ModalStackProvider from '../providers/ModalStack'

const Headline = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin: 0 0 2em;
`

const FeaturesPage = ({ data }) => (
  <ModalStackProvider>
    {modalStackDepth => (
      <ThemeContext.Provider value={data.site.siteMetadata.theme}>
        <Layout overlay={modalStackDepth > 0}>
          <SiteNav />
          <Headline>Features</Headline>
          <FeatureDetailList />
          <GetStarted />
          <SiteFooter />
        </Layout>
      </ThemeContext.Provider>
    )}
  </ModalStackProvider>
)

export default FeaturesPage

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
