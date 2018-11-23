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

function mapDataToProps({sanity = {}}) {
  return {
    brand: (sanity.company|| {}).brand
  }
}

class SiteNavContainer extends React.Component {
  static contextType = ThemeContext

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
            render={data => (
              <SiteNav
                {...mapDataToProps(data)}
                {...this.props}
                {...this.state}
                theme={this.context}
                onOpenMenu={() => this.handleOpenMenu(incr)}
                onCloseMenu={() => this.handleCloseMenu(decr)}
              />
            )}
          />
        )}
      </ModalStackContext.Consumer>
    )
  }
}

export default SiteNavContainer
