import React from 'react'
import LinkCardGrid from '../components/LinkCardGrid'
import { ThemeContext } from '../contexts'

const data = {
  headline: 'Updates from TechFuge',
  moreLink: {
    title: 'See more',
    to: '/blog/',
  },
  items: [
    {
      key: '1',
      title: 'SDK 1.0 is now available',
      to: '#',
      text:
        'Expo SDK v31.0.0 is based on the recently released React Native 0.57, it includes an update to Babel 7 and upgraded JSC on Android.',
      image: {
        src: 'https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png',
      },
    },
    {
      key: '2',
      title: 'Docs: Already used React Native?',
      to: '#',
      text:
        'This guide is intended to give developers who have already used React Native a quick outline on some of the key concepts, resources, and differences they will encounter when using Expo.',
      image: {
        src: 'https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png',
      },
    },
    {
      key: '3',
      title: 'Examples and tutorials',
      to: '#',
      text:
        'Thanks to our talented and prolific developer community, we’ve been able to highlight a bunch of great examples and tutorials on our Expo blog. Here’s a running collection, in no particular order.',
      image: {
        src: 'https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png',
      },
    },
  ],
}

class LatestUpdatesContainer extends React.Component {
  static contextType = ThemeContext

  render() {
    return <LinkCardGrid {...data} {...this.props} theme={this.context} />
  }
}

export default LatestUpdatesContainer
