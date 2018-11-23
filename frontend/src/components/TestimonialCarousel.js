import React from "react"
import styled from "styled-components"
import { TwitterTweetEmbed } from "react-twitter-embed"
import { borderRadius, fontScale, media, padding, width } from "./vars"

const Root = styled.div`
  overflow: hidden;
  width: 100%;
`

const Headline = styled.h2`
  box-sizing: border-box;
  font-size: ${fontScale.title3.size};
  line-height: ${fontScale.title3.lineHeight};
  margin: 0 auto;
  padding: ${padding.l} ${padding.m};
  max-width: ${width.m};

  @media (min-width: ${media.s.min}) {
    padding: ${padding.l} ${padding.l} ${padding.m};
  }

  @media (min-width: ${media.m.min}) {
    padding: ${padding.xl} ${padding.xl} ${padding.m};
  }
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
  max-width: ${width.s};
  vertical-align: top;

  @media (min-width: ${media.m.min}) {
    &:first-child {
      padding-left: calc((100% - ${width.m}) / 2);
    }

    &:last-child {
      padding-right: calc((100% - ${width.m}) / 2);
    }
  }
`

const Card = styled.div`
  background: #eee;
  margin: ${padding.l} ${padding.m} ${padding.xl};
  border-radius: ${borderRadius.l};
`

const extractID = (url = "") =>
  url.match(
    /(^|[^'"])(https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+))/
  )

const Testimonial = ({ name, url }) => (
  <ItemWrapper>
    <Card>
      <TwitterTweetEmbed tweetId={extractID(url)[4]} />
    </Card>
  </ItemWrapper>
)

const TestimonialCarousel = ({ headline = "", testimonials = [] }) => (
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
