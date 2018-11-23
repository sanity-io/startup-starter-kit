import BlockContent from "@sanity/block-content-to-react"
import React from "react"
import styled from "styled-components"
import Button from "./Button"
import { fontScale, media, padding, width } from "./vars"

const Root = styled.div`
  text-align: center;
  ${props => `
    color: ${props.theme.color};
  `};
`

const Container = styled.div`
  box-sizing: border-box;
  max-width: ${width.m};
  margin: 0 auto;
  padding: ${padding.m} ${padding.m} ${padding.l};

  @media (min-width: ${media.s.min}) {
    padding: ${padding.l} ${padding.l} ${padding.xl};
  }

  @media (min-width: ${media.m.min}) {
    padding: ${padding.xl};
  }
`

const Headline = styled.h1`
  font-weight: 800;
  font-size: ${fontScale.title2.size};
  line-height: ${fontScale.title2.lineHeight};
  margin: 0 ${padding.m} ${padding.l};

  @media (min-width: ${media.m.min}) {
    font-size: ${fontScale.title1.size};
    line-height: ${fontScale.title1.lineHeight};
    margin: 0 ${padding.l} ${padding.xl};
  }
`

const Intro = styled.div`
  font-size: ${fontScale.large.size};
  line-height: ${fontScale.large.lineHeight};

  p {
    margin: 0 0 ${padding.l};
  }
`

const Hero = ({ headline, tagLineBlock, theme }) => (
  <Root theme={theme}>
    <Container>
      <Headline>{headline}</Headline>
      <Intro>
        {tagLineBlock && <BlockContent blocks={tagLineBlock} />}
      </Intro>
      <div>
        <Button type="link" to="/start/" theme={theme} invert>
          Get started
        </Button>
      </div>
    </Container>
  </Root>
)

export default Hero
