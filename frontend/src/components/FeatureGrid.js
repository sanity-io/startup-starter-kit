import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  background: #eee;
`

const Headline = styled.h2`
  font-size: 24px;
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem 1rem 1rem;
`

const Container = styled.div`
  background: #eee;
  padding: 1rem 0;
  max-width: 60rem;
  margin: 0 auto;

  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
  }
`

const Item = styled.div`
  display: flex;
  padding: 1rem;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 33.333%;
  }
`

const ItemIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #099;
  font-size: 0;
  border-radius: 50%;
`

const ItemContent = styled.div`
  flex: 1;
  padding-left: 1rem;
  padding-top: 0.75rem;
`

const ItemTitle = styled.h3`
  font-size: inherit;
  margin: 0 0 0.5rem;
`

const FeatureGrid = ({ headline, items }) => (
  <Root>
    <Headline>{headline}</Headline>
    <Container>
      {items.map(item => (
        <Item key={item.key}>
          <ItemIcon>Icon</ItemIcon>
          <ItemContent>
            <ItemTitle>{item.title}</ItemTitle>
            <div>{item.text}</div>
          </ItemContent>
        </Item>
      ))}
    </Container>
  </Root>
)

export default FeatureGrid
