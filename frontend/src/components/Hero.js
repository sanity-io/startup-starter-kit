import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { fontScale, media, padding, width } from './vars'

const Root = styled.div`
  ${props => `
    color: ${props.theme.background};
  `};
`

const Container = styled.div`
  box-sizing: border-box;
  max-width: ${width.m};
  margin: 0 auto;
  padding: ${padding.m};

  @media (min-width: ${media.s.min}) {
    padding: ${padding.l};
  }

  @media (min-width: ${media.m.min}) {
    padding: ${padding.xl};
  }
`

const Headline = styled.h1`
  font-size: ${fontScale.title2.size};
  line-height: ${fontScale.title2.lineHeight};
  font-weight: 800;
  line-height: 1.2;

  @media (min-width: 60rem) {
    font-size: ${fontScale.title1.size};
    line-height: ${fontScale.title1.lineHeight};
    line-height: 1.1;
  }
`

const Intro = styled.div`
  font-size: ${fontScale.large.size};
  line-height: ${fontScale.large.lineHeight};
`

const Hero = ({ headline, intro, theme }) => (
  <Root theme={theme}>
    <Container>
      <Headline>{headline}</Headline>
      <Intro>{intro}</Intro>
      <div>
        <Button type="link" to="/start/" theme={theme}>
          Get started
        </Button>
      </div>
    </Container>
  </Root>
)

export default Hero
