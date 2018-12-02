import React from 'react'
import SiteNav from '../components/SiteNav'
import { ThemeContext } from '../contexts'

class SiteNavContainer extends React.Component {
  static contextType = ThemeContext

  state = {
    isMenuExpanded: false,
  }

  handleExpandMenu = () => {
    this.setState(state => ({ isMenuExpanded: !state.isMenuExpanded }))
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
      <SiteNav
        {...data}
        {...this.props}
        {...this.state}
        onExpandMenu={this.handleExpandMenu}
        theme={this.context}
      />
    )
  }
}

export default SiteNavContainer
