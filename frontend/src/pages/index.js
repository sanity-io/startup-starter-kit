import { graphql } from 'gatsby'
import React from 'react'
import LatestUpdates from '../containers/LatestUpdates'
import GetStarted from '../containers/GetStarted'
import Hero from '../containers/Hero'
import ImageBackground from '../components/ImageBackground'
import Layout from '../containers/Layout'
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
          <ImageBackground>
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
          <h2
            style={{
              maxWidth: 864,
              margin: '0 auto',
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            Testimonials
          </h2>
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
