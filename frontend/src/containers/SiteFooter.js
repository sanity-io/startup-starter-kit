import React from 'react'
import SiteFooter from '../components/SiteFooter'
import { ThemeContext } from '../contexts'

const data = {
  sections: [
    {
      key: '1',
      title: 'TechFuge',
      to: '/',
      links: [
        {
          key: '1',
          to: '#',
          title: 'Terms of use',
        },
        {
          key: '2',
          to: '#',
          title: 'Privacy policy',
        },
        {
          key: '3',
          to: '#',
          title: 'Guidelines',
        },
        {
          key: '4',
          to: '/pricing/',
          title: 'Pricing',
        },
      ],
    },
    {
      key: '2',
      title: 'Beginners',
      to: '/',
      links: [
        {
          key: '1',
          to: '#',
          title: 'Learn',
        },
        {
          key: '2',
          to: '#',
          title: 'Get tools',
        },
        {
          key: '3',
          to: '/features/',
          title: 'Feature list',
        },
        {
          key: '4',
          to: '#',
          title: 'Try template',
        },
      ],
    },
    {
      key: '3',
      title: 'Resources',
      to: '/',
      links: [
        {
          key: '1',
          to: '#',
          title: 'Documentation',
        },
        {
          key: '2',
          to: '#',
          title: 'Forums',
        },
        {
          key: '3',
          to: '#',
          title: 'Join Slack',
        },
        {
          key: '4',
          to: '#',
          title: 'Request feature',
        },
      ],
    },
    {
      key: '4',
      title: 'Company',
      to: '/',
      links: [
        {
          key: '1',
          to: '#',
          title: 'About',
        },
        {
          key: '2',
          to: '#',
          title: 'Jobs',
        },
        {
          key: '3',
          to: '#',
          title: 'Blog',
        },
      ],
    },
  ],
}

class SiteFooterContainer extends React.Component {
  static contextType = ThemeContext

  render() {
    return <SiteFooter {...data} {...this.props} theme={this.context} />
  }
}

export default SiteFooterContainer
