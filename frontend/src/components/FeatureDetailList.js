import React from 'react'
import styled from 'styled-components'
import FeatureDetail from './FeatureDetail'

const Root = styled.div``

const Container = styled.div`
  max-width: 60rem;
  padding: 1rem;
  margin: 0 auto;
`

const FeatureDetailList = ({ features }) => (
  <Container>
    {features.map(feature => (
      <FeatureDetail key={feature.key} {...feature} />
    ))}
  </Container>
)

export default FeatureDetailList
