import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Root = styled.div``

const Container = styled.div`
  margin: 0 auto;
  max-width: 60rem;
`

const Headline = styled.h2`
  font-size: 24px;
  padding: 2rem 1rem 0;
  margin: 0 0 1rem;
`

const Grid = styled.div`
  list-style: none;

  @media (min-width: 600px) {
    display: flex;
  }
`

const Card = styled.div`
  padding: 1rem;

  @media (min-width: 600px) {
    flex: 1;
  }

  h3 {
    font-size: inherit;
    margin: 1em 0 0.5em;
  }

  & > a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
`

const CardText = styled.div`
  line-height: 1.5;
  opacity: 0.7;
`

const CardMedia = styled.div`
  position: relative;
  padding-bottom: calc(2 / 3 * 100%);

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Footer = styled.div`
  padding: 1rem 1rem 2rem;
  text-align: right;
`

const LinkCardGrid = ({ headline, items, moreLink, theme }) => (
  <Root>
    <Container>
      <Headline>{headline}</Headline>
      <Grid>
        {items.map(item => (
          <Card key={item.key}>
            <a href={item.to}>
              <CardMedia>
                <img src={item.image.src} />
              </CardMedia>
              <h3>{item.title}</h3>
              <CardText>{item.text}</CardText>
            </a>
          </Card>
        ))}
      </Grid>
      <Footer>
        <Button type="link" to={moreLink.to} invert theme={theme}>
          {moreLink.title}
        </Button>
      </Footer>
    </Container>
  </Root>
)

export default LinkCardGrid
