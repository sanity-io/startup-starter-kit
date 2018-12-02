import React from 'react'
import styled from 'styled-components'
import FeatureDetail from './FeatureDetail'
import { media, padding, width } from './vars'

const Root = styled.div``

const Container = styled.div`
  box-sizing: border-box;
  max-width: ${width.m};
  margin: 0 auto;
`

const FeatureDetailList = ({ features }) => (
  <Root>
    <Container>
      {features.map(feature => (
        <FeatureDetail key={feature.key} {...feature} />
      ))}
    </Container>
  </Root>
)

export default FeatureDetailList
