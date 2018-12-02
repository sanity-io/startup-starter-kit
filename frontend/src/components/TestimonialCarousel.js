import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  overflow: hidden;
  width: 100%;
`

const ScrollContainer = styled.div`
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
  scroll-snap-type: x mandatory;
  scroll-snap-destination: 0% 100%;
  min-height: 100%;
  padding-bottom: 100px;
  white-space: nowrap;
`

const ItemWrapper = styled.div`
  display: inline-block;
  scroll-snap-align: center;
  width: 100%;
`

const Card = styled.div`
  background: #eee;
  margin: 1rem;
  height: 50vh;
  border-radius: 12px;
  text-align: center;
`

const Testimonial = props => (
  <ItemWrapper>
    <Card>{props.text}</Card>
  </ItemWrapper>
)

const TestimonialCarousel = ({ testimonials }) => (
  <Root>
    <ScrollContainer>
      {testimonials.map(testimonial => (
        <Testimonial key={testimonial.key} {...testimonial} />
      ))}
    </ScrollContainer>
  </Root>
)

export default TestimonialCarousel
