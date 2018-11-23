import React from "react"
import Layout from "../containers/Layout"
import Navigation from "../containers/Navigation"
import SiteFooter from "../containers/SiteFooter"
import ModalStackProvider from "../providers/ModalStack"
import ThemeProvider from "../providers/Theme"

const NotFoundPage = ({ data }) => (
  <ThemeProvider>
    <ModalStackProvider>
      {modalStackDepth => (
        <Layout overlay={modalStackDepth > 0}>
          <Navigation
            siteTitle="StartupGen"
            menu={{
              items: [
                { key: "home", to: "/", label: "Home" },
                { key: "features", to: "/features/", label: "Features" },
                { key: "pricing", to: "/pricing/", label: "Pricing" }
              ]
            }}
          />
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <SiteFooter />
        </Layout>
      )}
    </ModalStackProvider>
  </ThemeProvider>
)

export default NotFoundPage
