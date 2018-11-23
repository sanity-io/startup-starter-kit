import React from "react"
import FeatureGrid from "../containers/FeatureGrid"
import GetStarted from "../containers/GetStarted"
import Hero from "../containers/Hero"
import ImageBackground from "../components/ImageBackground"
import Layout from "../containers/Layout"
import LatestUpdates from "../containers/LatestUpdates"
import SiteFooter from "../containers/SiteFooter"
import Navigation from "../containers/Navigation"
import TestimonialCollection from "../containers/TestimonialCollection"
import ModalStackProvider from "../providers/ModalStack"
import ThemeProvider from "../providers/Theme"

const IndexPage = ({ data }) => (
  <ThemeProvider>
    {theme => (
      <ModalStackProvider>
        {modalStackDepth => (
          <Layout overlay={modalStackDepth > 0}>
            <ImageBackground theme={theme}>
              <Navigation invert />
              <Hero invert />
            </ImageBackground>
            <LatestUpdates />
            <FeatureGrid />
            <TestimonialCollection />
            <GetStarted />
            <SiteFooter />
          </Layout>
        )}
      </ModalStackProvider>
    )}
  </ThemeProvider>
)

export default IndexPage
