import React from 'react'
import TestimonialCarousel from '../components/TestimonialCarousel'
import { ThemeContext } from '../contexts'

const data = {
  testimonials: [
    {
      key: 'foo',
      text: 'foo',
    },
    {
      key: 'bar',
      text: 'bar',
    },
    {
      key: 'bar',
      text: 'bar',
    },
    {
      key: 'bar',
      text: 'bar',
    },
    {
      key: 'bar',
      text: 'bar',
    },
  ],
}

class TestimonialCarouselContainer extends React.Component {
  static contextType = ThemeContext

  render() {
    return (
      <TestimonialCarousel {...this.props} {...data} theme={this.context} />
    )
  }
}

export default TestimonialCarouselContainer
