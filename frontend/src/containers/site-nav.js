import React from 'react'
import SiteNav from '../components/site-nav'

class SiteNavContainer extends React.Component {
  state = {
    isMenuExpanded: false,
  }

  handleExpandMenu = () => {
    this.setState(state => ({ isMenuExpanded: !state.isMenuExpanded }))
  }

  render() {
    return (
      <SiteNav
        {...this.props}
        {...this.state}
        onExpandMenu={this.handleExpandMenu}
      />
    )
  }
}

export default SiteNavContainer
