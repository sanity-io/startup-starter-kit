import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  margin: 1rem 0 5rem;
`

const TextContainer = styled.div`
  flex: 1;
  padding-right: 1rem;
  padding-top: 1rem;
`

const FigureContainer = styled.div`
  flex: 1;
  padding-left: 1rem;
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
    <TextContainer>
      <Headline>{title}</Headline>
      <Text>{text}</Text>
    </TextContainer>
    <FigureContainer>
      <Figure>
        <img src={image.src} />
      </Figure>
    </FigureContainer>
  </Root>
)

export default FeatureDetail
