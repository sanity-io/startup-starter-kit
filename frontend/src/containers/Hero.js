import React from 'react'
import Hero from '../components/Hero'
import { ThemeContext } from '../contexts'

class HeroContainer extends React.Component {
  static contextType = ThemeContext

  render() {
    return <Hero {...this.props} theme={this.context} />
  }
}

export default HeroContainer
