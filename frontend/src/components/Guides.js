import React from "react"
import styled from "styled-components"
import { padding, width } from "./vars"

/* Design utility component */

const Root = styled.div`
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
`

const Width = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  transform: translate3d(-50%, 0, 0);
  max-width: ${({ value }) => value};
  width: 100%;
  outline: 1px solid #09f;
`

const Padding = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  transform: translate3d(-50%, 0, 0);
  width: 100%;
  min-width: ${({ opts }) => opts.width};
  border-left: ${({ opts }) =>
    `${opts.padding} solid rgba(0, 127, 255, 0.125)`};
  border-right: ${({ opts }) =>
    `${opts.padding} solid rgba(0, 127, 255, 0.125)`};
`

const Guides = () => (
  <Root>
    <Width value={0} />
    <Width value={width.s} />
    <Width value={width.m} />
    <Width value={width.l} />

    <Padding opts={{ width: 0, padding: padding.m }} />
    <Padding opts={{ width: width.s, padding: padding.l }} />
    <Padding opts={{ width: width.m, padding: padding.xl }} />
  </Root>
)

export default Guides
