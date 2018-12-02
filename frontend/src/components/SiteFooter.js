import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Root = styled.footer`
  ${({ theme }) => `
    background: ${theme.color};
    color: ${theme.background};
  `};
`

const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;

  @media (min-width: 600px) {
    display: flex;
  }
`

const Menu = styled.div`
  text-align: center;

  h2 {
    font-size: inherit;
    padding: 2rem 1rem 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 1rem;
    margin: 0;
  }

  ul li {
    margin: 0 0 0.5rem;
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
  padding: 1rem 1rem 2rem;
  text-align: center;

  svg {
    vertical-align: top;
  }

  a {
    display: inline-block;
    color: inherit;
    font-size: 1.5rem;
    opacity: 0.7;
  }

  a:hover {
    opacity: 1;
  }

  a + a {
    margin-left: 0.5em;
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
      <a href="#" title="GitHub">
        <FaGithub />
      </a>
      <a href="#" title="Twitter">
        <FaTwitter />
      </a>
      <a href="#" title="Instagram">
        <FaInstagram />
      </a>
      <a href="#" title="Facebook">
        <FaFacebook />
      </a>
    </Footer>
  </Root>
)

export default SiteFooter
