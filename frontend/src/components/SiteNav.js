import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { fontScale, media, padding, width, zIndex } from "./vars"

const Root = styled.nav`
  ${({ invert, theme }) => `
    color: ${invert ? theme.background : theme.color};
  `};

  a {
    color: inherit;
    text-decoration: none;
  }
`

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  max-width: ${width.m};
  margin: 0 auto;
  padding: ${padding.m};
  position: relative;

  @media (min-width: ${media.s.min}) {
    padding: ${padding.l};
  }

  @media (min-width: ${media.m.min}) {
    padding: ${padding.xl};
  }
`

const SiteTitle = styled.div`
  font-weight: 900;
  font-size: ${fontScale.large.size};
  line-height: ${fontScale.large.lineHeight};
  flex: 1;
  z-index: ${zIndex.siteNav.isOpen};
  position: relative;
  margin-top: -${padding.s};
  margin-left: -${padding.s};

  a {
    display: inline-block;
    padding: ${padding.s};
  }

  @media (min-width: ${media.s.min}) {
    margin-top: -${padding.m};
    margin-left: -${padding.m};

    a {
      padding: ${padding.m};
    }
  }
`

const Menu = styled.div`
  margin-top: -${padding.s};
  margin-right: -${padding.s};
  font-size: ${fontScale.large.size};
  line-height: ${fontScale.large.lineHeight};

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
    padding: ${padding.s};
  }

  @media (max-width: ${media.s.max}) {
    ol {
      display: none;
      position: absolute;
      top: 100%;
      background: ${({ theme }) => `${theme.background}`};
      color: ${({ theme }) => `${theme.color}`};
      box-shadow: 0 0 ${padding.m} rgba(0, 0, 0, 0.1);
      right: 0;
      left: 0;
      z-index: ${zIndex.siteNav.isOpen};
      padding: ${padding.m} 0;
    }

    ol a {
      padding: ${padding.s} ${padding.l};
    }

    ol a:hover {
      background: ${({ theme }) => `${theme.accent}`};
      color: ${({ theme }) => `${theme.background}`};
    }

    &[data-is-open="true"] ol {
      display: block;
    }
  }

  @media (min-width: ${media.s.min}) {
    ol {
      display: flex;
    }
  }

  @media (min-width: ${media.s.min}) {
    margin-top: -${padding.m};
    margin-right: -${padding.s};

    ol a {
      padding: ${padding.m} ${padding.s};
    }
  }

  @media (min-width: ${media.m.min}) {
    margin-top: -${padding.m};
    margin-right: -${padding.s};

    ol a {
      padding: ${padding.m} ${padding.s};
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
  padding: ${padding.s};
  margin: 0;
  outline: none;
  z-index: ${zIndex.siteNav.isOpen};
  position: relative;

  svg {
    vertical-align: top;
  }

  @media (min-width: ${media.s.min}) {
    display: none;
  }
`
const prop = (getter, callback) => {
  let val
  try {
    val = getter()
  } catch (e) {}
  return callback(val)
}
const SiteNav = ({
  brand = {},
  menu,
  isMenuOpen,
  onOpenMenu,
  onCloseMenu,
  invert,
  theme
}) => (
  <Root theme={theme} invert={invert}>
    <Container>
      <SiteTitle>
        <Link to="/" onClick={onCloseMenu}>
          {prop(
            () => brand.logo.asset.url,
            url =>
              url ? (
                <img style={{ width: "14em" }} alt={brand.name || 'No name'} src={brand.logo.asset.url} />
              ) : (
                brand.name || 'No name'
              )
          )}
        </Link>
      </SiteTitle>
      <Menu data-is-open={isMenuOpen} theme={theme}>
        <ol>
          {(menu.items || []).map(item => (
            <li key={item.key}>
              <Link to={item.to} onClick={onCloseMenu}>
                {item.title}
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
