import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const StyledLinkButton = styled(Link)`
  ${({ invert, theme }) => `
    background: ${invert ? theme.color : theme.background};
    color: ${invert ? theme.background : theme.color};
  `};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  /*  */
  display: inline-block;
  text-decoration: none;
  transition: box-shadow 200ms, transform 200ms;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    transform: translate3d(0, -1px, 0);
  }
`

const StyledButton = styled.button`
  ${({ invert, theme }) => `
    background: ${theme.background};
    color: ${theme.color};
  `};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  /*  */
  -webkit-appearance: none;
  font: inherit;
  border: 0;
  margin: 0;
  transition: box-shadow 200ms, transform 200ms;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    transform: translate3d(0, -1px, 0);
  }
`

const Button = props => {
  const commonProps = {
    invert: props.invert,
    theme: props.theme,
  }

  if (props.type === 'link') {
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
