import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Icon from './icon'

const Root = styled.nav`
  ${props => `
    color: ${props.theme.background};
    background: ${props.theme.color};
  `};
  line-height: 25px;

  a {
    color: inherit;
    text-decoration: none;
  }
`

const Container = styled.div`
  display: flex;
  max-width: 48rem;
  margin: 0 auto;
  padding: 0.5rem;
`

const SiteTitle = styled.div`
  font-weight: 700;
  flex: 1;

  a {
    display: inline-block;
    padding: 0.5rem;
  }
`

const Menu = styled.div`
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ol li {
    margin: 0;
  }

  ol a {
    display: block;
    padding: 0.5rem;
  }

  @media (max-width: 599px) {
    position: relative;
  }

  @media (max-width: 599px) {
    ol {
      display: none;
      position: absolute;
      top: 100%;
      background: #fff;
      color: #000;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      right: 0;
    }

    &[data-is-expanded='true'] ol {
      display: block;
    }
  }

  @media (min-width: 600px) {
    ol {
      display: flex;
    }
  }
`

const MenuOverflowButton = styled.button`
  -webkit-font-smoothing: inherit;
  -webkit-appearance: none;
  background: none;
  border: 0;
  border-radius: 0;
  font: inherit;
  color: inherit;
  font-size: 25px;
  line-height: 1;
  padding: 0.5rem;
  margin: 0;

  svg {
    vertical-align: top;
  }

  @media (min-width: 600px) {
    display: none;
  }
`

const SiteNav = ({ siteTitle, menu, isMenuExpanded, onExpandMenu, theme }) => (
  <Root theme={theme}>
    <Container>
      <SiteTitle>
        <Link to="/">{siteTitle}</Link>
      </SiteTitle>
      <Menu data-is-expanded={isMenuExpanded}>
        <ol>
          {menu.items.map(item => (
            <li key={item.key}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ol>
        <MenuOverflowButton type="button" onClick={onExpandMenu}>
          <Icon symbol="hamburger" />
        </MenuOverflowButton>
      </Menu>
    </Container>
  </Root>
)

export default SiteNav
