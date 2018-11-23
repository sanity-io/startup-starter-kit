import React from "react"
import styled from "styled-components"
import BlogEntryList from "../containers/BlogEntryList"
import Layout from "../containers/Layout"
import SiteFooter from "../containers/SiteFooter"
import Navigation from "../containers/Navigation"
import ModalStackProvider from "../providers/ModalStack"
import ThemeProvider from "../providers/Theme"
import { fontScale, media, padding, width } from "../components/vars"

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

const BlogPage = () => (
  <ThemeProvider>
    <ModalStackProvider>
      {modalStackDepth => (
        <Layout overlay={modalStackDepth > 0}>
          <Navigation />
          <Content>
            <Headline>Blog</Headline>
          </Content>
          <BlogEntryList />
          <SiteFooter />
        </Layout>
      )}
    </ModalStackProvider>
  </ThemeProvider>
)

export default BlogPage
