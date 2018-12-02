import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Icon from './icon'
import { zIndex } from './vars'

const Root = styled.nav`
  ${({ invert, theme }) => `
    /* background: ${invert ? theme.color : theme.background}; */
    color: ${invert ? theme.background : theme.color};
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
  position: relative;

  @media (min-width: 960px) {
    padding: 3.5rem 0;
  }
`

const SiteTitle = styled.div`
  font-weight: 900;
  font-size: 24px;
  flex: 1;
  z-index: ${zIndex.siteNav.isOpen};
  position: relative;

  a {
    display: inline-block;
    padding: 0.5rem;
  }

  @media (min-width: 960px) {
    a {
      padding: 1rem;
    }
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
    ol {
      display: none;
      position: absolute;
      top: 100%;
      background: #fff;
      color: #000;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      right: 0;
      left: 0;
      z-index: ${zIndex.siteNav.isOpen};
      padding: 1rem 0;
    }

    ol a {
      padding: 0.5rem 2rem;
    }

    ol a:hover {
      background: rgba(0, 127, 255, 0.05);
    }

    &[data-is-open='true'] ol {
      display: block;
    }
  }

  @media (min-width: 600px) {
    ol {
      display: flex;
    }
  }

  @media (min-width: 960px) {
    ol a {
      padding: 1rem;
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
  outline: none;
  z-index: ${zIndex.siteNav.isOpen};
  position: relative;

  svg {
    vertical-align: top;
  }

  @media (min-width: 600px) {
    display: none;
  }
`

const SiteNav = ({
  siteTitle,
  menu,
  isMenuOpen,
  onOpenMenu,
  onCloseMenu,
  invert,
  theme,
}) => (
  <Root theme={theme} invert={invert}>
    <Container>
      <SiteTitle>
        <Link to="/" onClick={onCloseMenu}>
          {siteTitle}
        </Link>
      </SiteTitle>
      <Menu data-is-open={isMenuOpen}>
        <ol>
          {menu.items.map(item => (
            <li key={item.key}>
              <Link to={item.to} onClick={onCloseMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
        <MenuOverflowButton
          type="button"
          onClick={isMenuOpen ? onCloseMenu : onOpenMenu}
        >
          <Icon symbol="hamburger" />
        </MenuOverflowButton>
      </Menu>
    </Container>
  </Root>
)

export default SiteNav
