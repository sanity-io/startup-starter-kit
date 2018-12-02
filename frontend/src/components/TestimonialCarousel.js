import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  overflow: hidden;
  width: 100%;
`

const Headline = styled.h2`
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem 1rem 0;
`

const ScrollContainer = styled.div`
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
  scroll-snap-type: x mandatory;
  scroll-snap-destination: 0% 100%;
  min-height: 100%;
  white-space: nowrap;
`

const ItemWrapper = styled.div`
  display: inline-block;
  scroll-snap-align: center;
  width: 100%;
  max-width: 30rem;

  @media (min-width: 62rem) {
    &:first-child {
      padding-left: calc((100% - 60rem) / 2);
      max-width: calc(((100% - 60rem) / 2) + 30rem);
    }

    &:last-child {
      padding-right: calc((100% - 60rem) / 2);
      max-width: calc(((100% - 60rem) / 2) + 30rem);
    }
  }
`

const Card = styled.div`
  background: #eee;
  margin: 2rem 1rem;
  border-radius: 12px;
  text-align: center;
  padding: 1rem;
`

const Testimonial = props => (
  <ItemWrapper>
    <Card>{props.text}</Card>
  </ItemWrapper>
)

const TestimonialCarousel = ({ headline, testimonials }) => (
  <Root>
    <Headline>{headline}</Headline>
    <ScrollContainer>
      {testimonials.map(testimonial => (
        <Testimonial key={testimonial.key} {...testimonial} />
      ))}
    </ScrollContainer>
  </Root>
)

export default TestimonialCarousel
