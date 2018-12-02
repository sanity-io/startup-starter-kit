import React from 'react'
import GetStarted from '../components/GetStarted'
import { ThemeContext } from '../contexts'

const data = {
  headline: 'Get Started with TechFuge',
  intro: 'Dive in and create your first TechFuge project.',
  callToActions: [
    {
      key: '1',
      title: 'Learn how',
      to: '/start/',
    },
  ],
}

class GetStartedContainer extends React.Component {
  static contextType = ThemeContext

  render() {
    return <GetStarted {...data} {...this.props} theme={this.context} />
  }
}

export default GetStartedContainer
