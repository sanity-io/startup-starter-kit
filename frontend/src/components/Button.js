import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { shade2 } from "./colors"
import { borderRadius, padding } from "./vars"

const StyledLinkButton = styled(Link)`
  ${({ opts, theme }) => `
    background: ${opts.invert ? theme.color : theme.background};
    color: ${opts.invert ? theme.background : theme.color};
  `};
  padding: ${padding.m};
  border-radius: ${borderRadius.m};
  /*  */
  display: inline-block;
  text-decoration: none;
  line-height: 1;
  transition: box-shadow 200ms, transform 200ms;

  &:hover {
    box-shadow: ${({ theme }) =>
      `0 ${padding.s} ${padding.m} ${shade2(theme)}`};
    transform: translate3d(0, -1px, 0);
  }
`

const StyledButton = styled.button`
  ${({ opts, theme }) => `
    background: ${opts.invert ? theme.color : theme.background};
    color: ${opts.invert ? theme.background : theme.color};
  `};
  padding: ${padding.m};
  border-radius: ${borderRadius.m};
  /*  */
  -webkit-appearance: none;
  font: inherit;
  line-height: 1;
  border: 0;
  margin: 0;
  transition: box-shadow 200ms, transform 200ms;

  &:hover {
    box-shadow: ${({ theme }) =>
      `0 ${padding.s} ${padding.m} ${shade2(theme)}`};
    transform: translate3d(0, -1px, 0);
  }
`

const Button = props => {
  const commonProps = {
    opts: {
      invert: props.invert
    },
    theme: props.theme
  }

  if (props.type === "link") {
    return (
      <StyledLinkButton to={props.to} {...commonProps}>
        {props.children}
      </StyledLinkButton>
    )
  }

  return (
    <StyledButton {...props} {...commonProps}>
      {props.children}
    </StyledButton>
  )
}

export default Button
