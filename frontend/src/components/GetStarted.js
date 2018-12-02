import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Root = styled.div`
  ${({ theme }) => `
    background: ${theme.background};
    color: ${theme.color};
  `};
  ${({ theme }) => `
    border-top: 1px solid ${theme.color};
  `};
`

const Container = styled.div`
  max-width: 48em;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
`

const Headline = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`

const Intro = styled.div`
  margin: 1rem 0;
`

const GetStarted = ({ headline, callToActions, intro, theme }) => (
  <Root theme={theme}>
    <Container>
      <Headline>{headline}</Headline>
      <Intro>{intro}</Intro>
      <div>
        {callToActions.map((callToAction, idx) => (
          <Button
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

export default GetStarted
