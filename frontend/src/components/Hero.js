import { lighten } from 'polished'
import { compose } from 'ramda'
import React from 'react'
import Button from './button'
import styled from 'styled-components'

const tone = compose(lighten(0.1))

const Root = styled.div`
  ${props => `
    /* background: ${tone(props.theme.color)}; */
    color: ${props.theme.background};
  `};
`

const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 960px) {
    padding: 5rem 1rem;
  }
`

const Headline = styled.h1`
  font-size: 27px;
  font-weight: 800;
  line-height: 1.1;

  @media (min-width: 960px) {
    font-size: 48px;
  }
`

const Hero = ({ headline, intro, theme }) => (
  <Root theme={theme}>
    <Container>
      <Headline>{headline}</Headline>
      <div>{intro}</div>
      <div>
        <Button type="link" to="/start/" theme={theme}>
          Get started
        </Button>
      </div>
    </Container>
  </Root>
)

export default Hero
