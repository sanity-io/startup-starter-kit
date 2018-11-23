import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Button from "./Button"
import { fontScale, media, padding, width } from "./vars"

const Root = styled.div``

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

const List = styled.div`
  list-style: none;
`

const Card = styled.div`
  padding: 0 ${padding.m};
  margin: 0 0 ${padding.m};

  h3 {
    font-size: ${fontScale.large.size};
    line-height: ${fontScale.large.lineHeight};
    margin: ${padding.m} 0 ${padding.s};
  }

  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  @media (min-width: ${media.s.min}) {
    flex: 1;
    margin: 0 0 ${padding.l};
  }

  @media (min-width: ${media.m.min}) {
    margin: 0 0 ${padding.xl};

    a {
      display: flex;
    }
  }
`

const CardText = styled.div`
  opacity: 0.7;
`

const CardMedia = styled.div`
  & > div {
    position: relative;
    padding-bottom: calc(2 / 3 * 100%);
  }

  & > div > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${media.m.min}) {
    flex: 1;
    padding-right: ${padding.m};
  }
`

const CardContent = styled.div`
  @media (min-width: ${media.m.min}) {
    flex: 2;
    padding-left: ${padding.m};
  }
`

const Footer = styled.div`
  padding: ${padding.m} ${padding.m} ${padding.xl};
  text-align: center;

  @media (min-width: ${media.s.min}) {
    padding: ${padding.m} ${padding.m} ${padding.xl};
  }
`

const LinkCardList = ({ headline, items, moreLink, theme }) => (
  <Root>
    <Container>
      <List>
        {items.map(item => (
          <Card key={item.key}>
            <Link to={item.to}>
              <CardMedia>
                <div>
                  <img src={item.image.src} alt="" />
                </div>
              </CardMedia>
              <CardContent>
                <h3>{item.title}</h3>
                <CardText>{item.text}</CardText>
              </CardContent>
            </Link>
          </Card>
        ))}
      </List>
      <Footer>
        <Button type="link" to={moreLink.to} invert theme={theme}>
          {moreLink.title}
        </Button>
      </Footer>
    </Container>
  </Root>
)

export default LinkCardList
