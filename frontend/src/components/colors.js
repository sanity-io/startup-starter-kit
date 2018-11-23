import { transparentize } from "polished"
// import { compose } from 'ramda'

export const shade1 = theme => transparentize(0.8, theme.color)
export const shade2 = theme => transparentize(0.6, theme.color)
