import React from "react"
import TestimonialCarousel from "../components/TestimonialCarousel"
import { ThemeContext } from "../contexts"

const data = {
  headline: "What our users say",
  testimonials: [
    {
      key: "foo",
      text: "foo"
    },
    {
      key: "bar",
      text: "bar"
    },
    {
      key: "baz",
      text: "bar"
    },
    {
      key: "quz",
      text: "bar"
    },
    {
      key: "qur",
      text: "bar"
    }
  ]
}

class TestimonialCollection extends React.Component {
  static contextType = ThemeContext

  render() {
    return (
      <TestimonialCarousel {...data} {...this.props} theme={this.context} />
    )
  }
}

export default TestimonialCollection
