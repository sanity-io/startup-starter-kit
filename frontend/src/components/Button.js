import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const StyledLinkButton = styled(Link)`
  background: #fff;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  /*  */
  display: inline-block;
  text-decoration: none;
`

const StyledButton = styled.button`
  background: #fff;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  /*  */
  -webkit-appearance: none;
  font: inherit;
  border: 0;
  margin: 0;
`

const Button = props => {
  if (props.type === 'link') {
    return <StyledLinkButton to={props.to}>{props.children}</StyledLinkButton>
  }

  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
