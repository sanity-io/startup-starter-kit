import BlockContent from "@sanity/block-content-to-react"
import React from "react"
import styled from "styled-components"
import { media, padding } from "./vars"

const Root = styled.div`
  padding: 0 ${padding.m};
  margin: 0 0 ${padding.m};

  @media (min-width: ${media.s.min}) {
    padding: 0 ${padding.l};
    margin: 0 0 ${padding.l};
  }

  @media (min-width: ${media.m.min}) {
    display: flex;
    padding: 0 ${padding.xl};
    margin: 0 0 ${padding.xl};
  }
`

const TextContainer = styled.div`
  padding: ${padding.m} 0;

  @media (min-width: ${media.m.min}) {
    flex: 1;
    order: 1;
  }
`

const FigureContainer = styled.div`
  @media (min-width: ${media.m.min}) {
    flex: 1;
    order: 2;
    padding-left: ${padding.l};
  }
`

const Headline = styled.h2`
  font-size: 1.25rem;
  margin: 0 0 ${padding.s};
`

const Text = styled.div`
  opacity: 0.7;
`

const Figure = styled.div`
  position: relative;
  padding-bottom: calc(2 / 3 * 100%);
  overflow: hidden;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const FeatureDetail = ({ title, descriptionBlock, illustration }) => (
  <Root>
    <FigureContainer>
      <Figure>
        <img src={illustration.asset.url} alt="" />
      </Figure>
    </FigureContainer>
    <TextContainer>
      <Headline>{title}</Headline>
      <Text>
        <BlockContent blocks={descriptionBlock} />
      </Text>
      {/* <Text>{text}</Text> */}
    </TextContainer>
  </Root>
)

export default FeatureDetail
