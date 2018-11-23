const BASE_FONT_SIZE = 16

const config = {
  width: {
    s: 32,
    m: 64,
    l: 96,
    xl: 128
  },
  padding: {
    s: 0.5,
    m: 1,
    l: 2,
    xl: 4
  }
}

const PX = 1 / BASE_FONT_SIZE

export const fontScale = {
  micro: {
    size: `${(8 / BASE_FONT_SIZE).toFixed(5)}rem`,
    lineHeight: `${8 / 8}`
  },
  small: {
    size: `${(14 / BASE_FONT_SIZE).toFixed(5)}rem`,
    lineHeight: `${(18 / 14).toFixed(5)}`
  },
  regular: {
    size: `${17 / BASE_FONT_SIZE}rem`,
    lineHeight: `${(22 / 17).toFixed(5)}`
  },
  large: {
    size: `${(19 / BASE_FONT_SIZE).toFixed(5)}rem`,
    lineHeight: `${(24 / 19).toFixed(5)}`
  },
  title3: {
    size: `${(24 / BASE_FONT_SIZE).toFixed(5)}rem`,
    lineHeight: `${(28 / 24).toFixed(5)}`
  },
  title2: {
    size: `${(32 / BASE_FONT_SIZE).toFixed(5)}rem`,
    lineHeight: `${(36 / 32).toFixed(5)}`
  },
  title1: {
    size: `${(44 / BASE_FONT_SIZE).toFixed(5)}rem`,
    lineHeight: `${(56 / 44).toFixed(5)}`
  }
}

export const zIndex = {
  siteNav: {
    default: "90",
    isOpen: "110"
  },
  overlay: "100",
  modal: "1000"
}

export const padding = {
  s: `${config.padding.s}rem`,
  m: `${config.padding.m}rem`,
  l: `${config.padding.l}rem`,
  xl: `${config.padding.xl}rem`
}

export const media = {
  s: { min: `${config.width.s}rem`, max: `${config.width.s - PX}rem` },
  m: { min: `${config.width.m}rem`, max: `${config.width.m - PX}rem` },
  l: { min: `${config.width.l}rem`, max: `${config.width.l - PX}rem` }
}

export const width = {
  s: `${config.width.s}rem`,
  m: `${config.width.m}rem`,
  l: `${config.width.l}rem`
}

export const borderRadius = {
  s: "0.125rem",
  m: "0.25rem",
  l: "0.5rem",
  xl: "1rem"
}
