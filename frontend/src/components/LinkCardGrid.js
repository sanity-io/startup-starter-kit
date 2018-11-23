import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Button from "./Button"
import { fontScale, media, padding, width } from "./vars"

const Root = styled.div`
  background: ${({ theme, opts = {} }) =>
    opts.invert ? theme.accent : theme.background};
`

const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${width.m};
  padding: 0 calc(${padding.m} - ${padding.m});

  @media (min-width: ${media.s.min}) {
    padding: 0 calc(${padding.l} - ${padding.m});
  }

  @media (min-width: ${media.m.min}) {
    padding: 0 calc(${padding.xl} - ${padding.m});
  }
`

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

const Grid = styled.div`
  list-style: none;

  @media (min-width: ${media.s.min}) {
  }

  @media (min-width: ${media.m.min}) {
    display: flex;
  }
`

const Card = styled.div`
  padding: ${padding.m};

  h3 {
    font-size: ${fontScale.large.size};
    line-height: ${fontScale.large.lineHeight};
    margin: ${padding.m} 0 ${padding.s};
  }

  & > a {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  @media (min-width: ${media.s.min}) {
    flex: 1;
  }
`

const CardText = styled.div`
  opacity: 0.7;
`

const CardMedia = styled.div`
  background: ${({ theme }) => theme.color};
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
  padding: ${padding.m} ${padding.m} ${padding.xl};
  text-align: right;

  @media (min-width: ${media.s.min}) {
    padding: ${padding.m} ${padding.m} ${padding.xl};
  }
`

const LinkCardGrid = ({ headline, items, moreLink, theme, invert }) => (
  <Root theme={theme} opts={{ invert }}>
    <Headline>{headline}</Headline>
    <Container>
      <Grid>
        {items.map(item => (
          <Card key={item.key}>
            <Link to={item.to}>
              <CardMedia theme={theme}>
                {item.image && <img src={item.image.src} alt="" />}
              </CardMedia>
              <h3>{item.title}</h3>
              <CardText>{item.text}</CardText>
            </Link>
          </Card>
        ))}
      </Grid>
      <Footer>
        <Button type="link" to={moreLink.to} invert={!invert} theme={theme}>
          {moreLink.title}
        </Button>
      </Footer>
    </Container>
  </Root>
)

export default LinkCardGrid
