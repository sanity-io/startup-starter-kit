import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { media, padding, width } from './vars'

const Root = styled.footer`
  ${({ theme }) => `
    background: ${theme.color};
    color: ${theme.background};
  `};
`

const Container = styled.div`
  box-sizing: border-box;
  max-width: ${width.m};
  margin: 0 auto;
  padding: 0 ${padding.m};

  @media (min-width: ${media.s.min}) {
    padding: 0 ${padding.l};
  }

  @media (min-width: ${media.m.min}) {
    display: flex;
    padding: 0 ${padding.xl};
  }
`

const Menu = styled.div`
  text-align: center;

  h2 {
    font-size: inherit;
    padding: ${padding.l} ${padding.m} 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: ${padding.m};
    margin: 0;
  }

  ul li {
    margin: 0 0 ${padding.s};
  }

  ul a {
    opacity: 0.7;
  }

  ul a:hover {
    opacity: 1;
  }

  @media (min-width: 600px) {
    flex: 1;
  }
`

const Footer = styled.div`
  padding: ${padding.m} ${padding.m} ${padding.xl};
  text-align: center;

  svg {
    vertical-align: top;
  }

  a {
    display: inline-block;
    color: inherit;
    font-size: 1.5rem;
    opacity: 0.7;
    padding: ${padding.s};
  }

  a:hover {
    opacity: 1;
  }
`

const SiteFooter = ({ sections, theme }) => (
  <Root theme={theme}>
    <Container>
      {sections.map(section => (
        <Menu key={section.key}>
          <h2>
            <Link to={section.to}>{section.title}</Link>
          </h2>
          <ul>
            {section.links.map(link => (
              <li key={link.key}>
                <Link to={link.to}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </Menu>
      ))}
    </Container>

    <Footer>
      <a href="/" title="GitHub">
        <FaGithub />
      </a>
      <a href="/" title="Twitter">
        <FaTwitter />
      </a>
      <a href="/" title="Instagram">
        <FaInstagram />
      </a>
      <a href="/" title="Facebook">
        <FaFacebook />
      </a>
    </Footer>
  </Root>
)

export default SiteFooter
