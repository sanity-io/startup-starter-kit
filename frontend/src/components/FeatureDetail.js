import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  margin: 1rem 0 5rem;

  @media (min-width: 60rem) {
    display: flex;
  }
`

const TextContainer = styled.div`
  padding: 1rem 0;

  @media (min-width: 60rem) {
    flex: 1;
    order: 1;
  }
`

const FigureContainer = styled.div`
  @media (min-width: 60rem) {
    flex: 1;
    order: 2;
    padding-left: 1rem;
  }
`

const Headline = styled.h2`
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
`

const Text = styled.div``

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

const FeatureDetail = ({ title, text, image }) => (
  <Root>
    <FigureContainer>
      <Figure>
        <img src={image.src} />
      </Figure>
    </FigureContainer>
    <TextContainer>
      <Headline>{title}</Headline>
      <Text>{text}</Text>
    </TextContainer>
  </Root>
)

export default FeatureDetail
