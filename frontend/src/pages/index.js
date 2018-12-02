import { graphql } from 'gatsby'
import React from 'react'
import FeatureGrid from '../containers/FeatureGrid'
import GetStarted from '../containers/GetStarted'
import Hero from '../containers/Hero'
import ImageBackground from '../components/ImageBackground'
import Layout from '../containers/Layout'
import LatestUpdates from '../containers/LatestUpdates'
import SiteFooter from '../containers/SiteFooter'
import SiteNav from '../containers/SiteNav'
import TestimonialCarousel from '../containers/TestimonialCarousel'
import { ThemeContext } from '../contexts'
import ModalStackProvider from '../providers/ModalStack'

const IndexPage = ({ data }) => (
  <ModalStackProvider>
    {modalStackDepth => (
      <ThemeContext.Provider value={data.site.siteMetadata.theme}>
        <Layout overlay={modalStackDepth > 0}>
          <ImageBackground theme={data.site.siteMetadata.theme}>
            <SiteNav invert />
            <Hero
              headline="My awesome headline that explains the whole shebang"
              intro={
                <>
                  <p>My awesome intro that explains the whole shebang.</p>
                </>
              }
              invert
            />
          </ImageBackground>
          <LatestUpdates />
          <FeatureGrid />
          <TestimonialCarousel />
          <GetStarted />
          <SiteFooter />
        </Layout>
      </ThemeContext.Provider>
    )}
  </ModalStackProvider>
)

export default IndexPage

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
