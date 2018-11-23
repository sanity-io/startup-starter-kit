import React from "react"
import styled from "styled-components"
import { fontScale, media, padding, width } from "../components/vars"
import Layout from "../containers/Layout"
import Navigation from "../containers/Navigation"
import SiteFooter from "../containers/SiteFooter"
import ModalStackProvider from "../providers/ModalStack"
import ThemeProvider from "../providers/Theme"

const Content = styled.div`
  max-width: ${width.m};
  margin: 0 auto;
`

const Headline = styled.h1`
  font-weight: 800;
  font-size: ${fontScale.title3.size};
  line-height: ${fontScale.title3.lineHeight};
  text-align: center;
  margin: 0 0 ${padding.m};

  @media (min-width: ${media.s.min}) {
    font-size: ${fontScale.title2.size};
    line-height: ${fontScale.title2.lineHeight};
    margin: 0 0 ${padding.l};
  }

  @media (min-width: ${media.m.min}) {
    font-size: ${fontScale.title1.size};
    line-height: ${fontScale.title1.lineHeight};
    margin: 0 0 ${padding.xl};
  }
`

const StartPage = ({ data }) => (
  <ThemeProvider>
    <ModalStackProvider>
      {modalStackDepth => (
        <Layout overlay={modalStackDepth > 0}>
          <Navigation />
          <Content>
            <Headline>Get started with StartupGen</Headline>
          </Content>
          <SiteFooter />
        </Layout>
      )}
    </ModalStackProvider>
  </ThemeProvider>
)

export default StartPage
