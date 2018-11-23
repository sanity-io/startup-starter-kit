import { StaticQuery, graphql } from "gatsby"
import React from "react"
import SiteNav from "../components/SiteNav"
import { ModalStackContext, ThemeContext } from "../contexts"

const query = graphql`
  {
    sanity {
      company: CompanyInfo(id: "company-info") {
        brand {
          name,
          logo {
            asset {
              url
            }
          }
        }
      }
    }
  }
`

const hardCodedData = {
  menu: {
    items: [
      { key: "home", to: "/", label: "Home" },
      { key: "blog", to: "/blog/", label: "Blog" },
      { key: "features", to: "/features/", label: "Features" },
      { key: "pricing", to: "/pricing/", label: "Pricing" },
      { key: "start", to: "/start/", label: "Get started" }
    ]
  }
}

class navigationContainer extends React.Component {
  state = {
    isMenuOpen: false
  }

  handleOpenMenu = incr => {
    incr()
    this.setState({ isMenuOpen: true })
  }

  handleCloseMenu = decr => {
    decr()
    this.setState({ isMenuOpen: false })
  }

  render() {
    return (
      <ModalStackContext.Consumer>
        {({ incr, decr }) => (
          <StaticQuery
            query={query}
            render={({sanity = {}}) => (
              <ThemeContext.Consumer>
                {theme => (
                  <SiteNav
                    {...hardCodedData}
                    brand={((sanity || {}).company || {}).brand}
                    {...this.props}
                    {...this.state}
                    onOpenMenu={() => this.handleOpenMenu(incr)}
                    onCloseMenu={() => this.handleCloseMenu(decr)}
                    theme={theme}
                  />
                )}
              </ThemeContext.Consumer>
            )}
          />
        )}
      </ModalStackContext.Consumer>
    )
  }
}

export default navigationContainer
