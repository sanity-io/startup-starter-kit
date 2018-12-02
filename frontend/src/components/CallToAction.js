import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { shade1 } from './colors'
import { padding, width } from './vars'

const Root = styled.div`
  ${({ theme }) => `
    background: ${theme.accent};
    color: ${theme.background};
  `};
  ${({ theme }) => `
    border-top: 1px solid ${shade1(theme)};
  `};
`

const Container = styled.div`
  box-sizing: border-box;
  max-width: ${width.m};
  margin: 0 auto;
  padding: ${padding.xl} ${padding.m};
  text-align: center;
`

const Headline = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`

const Intro = styled.div`
  margin: ${padding.m} 0;
`

const CallToAction = ({ headline, callToActions, intro, theme }) => (
  <Root theme={theme}>
    <Container>
      <Headline>{headline}</Headline>
      <Intro>{intro}</Intro>
      <div>
        {callToActions.map((callToAction, idx) => (
          <Button
            key={callToAction.key}
            type="link"
            to={callToAction.to}
            invert={idx === 0}
            theme={theme}
          >
            {callToAction.title}
          </Button>
        ))}
      </div>
    </Container>
  </Root>
)

export default CallToAction
