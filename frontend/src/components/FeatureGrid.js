import React from "react"
import styled from "styled-components"
import { fontScale, media, padding, width } from "./vars"

const Root = styled.div``

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

const Container = styled.div`
  box-sizing: border-box;
  padding: 0 calc(${padding.m} - ${padding.m});
  max-width: ${width.m};
  margin: 0 auto;

  @media (min-width: ${media.s.min}) {
    padding: 0 calc(${padding.l} - ${padding.m});
  }

  @media (min-width: ${media.m.min}) {
    display: flex;
    flex-wrap: wrap;
    padding: 0 calc(${padding.xl} - ${padding.m});
  }
`

const Item = styled.div`
  display: flex;
  padding: 1rem;
  box-sizing: border-box;

  @media (min-width: 62rem) {
    width: 33.333%;
  }
`

const ItemIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.accent};
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

const ItemText = styled.div`
  opacity: 0.7;
`

const FeatureGrid = ({ headline, items, theme }) => (
  <Root>
    <Headline>{headline}</Headline>
    <Container>
      {items.map(item => (
        <Item key={item.key}>
          <ItemIcon theme={theme}>Icon</ItemIcon>
          <ItemContent>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemText>{item.text}</ItemText>
          </ItemContent>
        </Item>
      ))}
    </Container>
  </Root>
)

export default FeatureGrid
