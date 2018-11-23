import React from "react"
import styled from "styled-components"

const Root = styled.div`
  background: ${({ theme }) => `${theme.color}`};
  position: relative;

  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
  }

  & > div {
    position: relative;
  }
`

const data = {
  src:
    "https://images.unsplash.com/photo-1477696957384-3b1d731c4cff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=27463acb8518d4e6819d6f4441c8e47f&auto=format&fit=crop&w=2250&q=80"
}

const ImageBackground = props => (
  <Root theme={props.theme}>
    <img src={data.src} alt="" />
    <div>{props.children}</div>
  </Root>
)

export default ImageBackground
