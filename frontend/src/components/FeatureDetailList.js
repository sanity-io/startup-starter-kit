import React from "react"
import styled from "styled-components"
import FeatureDetail from "./FeatureDetail"
import { fontScale, media, padding, width } from "./vars"

const Root = styled.div``

const Headline = styled.h2`
  box-sizing: border-box;
  font-size: ${fontScale.title3.size};
  line-height: ${fontScale.title3.lineHeight};
  margin: 0 auto ${padding.m};
  padding: ${padding.l} ${padding.m};
  max-width: ${width.m};

  @media (min-width: ${media.s.min}) {
    margin: 0 auto ${padding.l};
    padding: ${padding.l} ${padding.l} ${padding.m};
  }

  @media (min-width: ${media.m.min}) {
    padding: ${padding.xl} ${padding.xl} ${padding.m};
  }
`

const Container = styled.div`
  box-sizing: border-box;
  max-width: ${width.m};
  margin: 0 auto;
`

const FeatureDetailList = ({ headline, features }) => (
  <Root>
    <Headline>{headline}</Headline>
    <Container>
      {features.map(feature => (
        <FeatureDetail key={feature.key} {...feature} />
      ))}
    </Container>
  </Root>
)

export default FeatureDetailList
