import React from "react"
import BlogPost from "../containers/BlogPost"
import Layout from "../containers/Layout"
import SiteFooter from "../containers/SiteFooter"
import Navigation from "../containers/Navigation"
import ModalStackProvider from "../providers/ModalStack"
import ThemeProvider from "../providers/Theme"

const BlogPage = ({ data }) => (
  <ThemeProvider>
    <ModalStackProvider>
      {modalStackDepth => (
        <Layout overlay={modalStackDepth > 0}>
          <Navigation />
          <BlogPost />
          <SiteFooter />
        </Layout>
      )}
    </ModalStackProvider>
  </ThemeProvider>
)

export default BlogPage
