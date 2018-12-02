import React from 'react'
import SiteNav from '../components/SiteNav'
import { ModalStackContext, ThemeContext } from '../contexts'

class SiteNavContainer extends React.Component {
  state = {
    isMenuOpen: false,
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
    const data = {
      siteTitle: 'TechFuge',
      menu: {
        items: [
          { key: 'home', to: '/', label: 'Home' },
          { key: 'features', to: '/features/', label: 'Features' },
          { key: 'pricing', to: '/pricing/', label: 'Pricing' },
          { key: 'start', to: '/start/', label: 'Get started' },
        ],
      },
    }

    return (
      <ModalStackContext.Consumer>
        {({ incr, decr }) => (
          <ThemeContext.Consumer>
            {theme => (
              <SiteNav
                {...data}
                {...this.props}
                {...this.state}
                onOpenMenu={() => this.handleOpenMenu(incr)}
                onCloseMenu={() => this.handleCloseMenu(decr)}
                theme={theme}
              />
            )}
          </ThemeContext.Consumer>
        )}
      </ModalStackContext.Consumer>
    )
  }
}

export default SiteNavContainer
