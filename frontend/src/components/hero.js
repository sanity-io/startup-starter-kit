import { lighten } from 'polished'
import { compose } from 'ramda'
import React from 'react'
import Button from './button'
import styled from 'styled-components'

const tone = compose(lighten(0.1))

const Root = styled.div`
  ${props => `
    background: ${tone(props.theme.color)};
    color: ${props.theme.background};
  `};
`

const Container = styled.div`
  max-width: 48em;
  margin: 0 auto;
  padding: 1rem;
`

const Headline = styled.h1`
  font-size: 27px;
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
