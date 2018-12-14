import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import { ThemeContext } from '../contexts'

const query = graphql`
  {
    sanity {
      company: CompanyInfo(id: "company-info") {
        brand {
          colorScheme {
            background {
              hex
            }
            color {
              hex
            }
            accent {
              hex
            }
          }
        }
      }
    }
  }
`

function transformColorSchemeToTheme ({
  color = {},
  accent = {},
  background = {}
}) {
  return {
    color: color.hex || '#000',
    accent: accent.hex || '#ff0000',
    background: background.hex || '#FFF'
  }
}

const ThemeProvider = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => {
      const { brand: { colorScheme = {} } = {} } = data.sanity.company || {}
      const theme = transformColorSchemeToTheme(colorScheme)

      return (
        <ThemeContext.Provider value={theme}>
          {typeof children === 'function' ? children(theme) : children}
        </ThemeContext.Provider>
      )
    }}
  />
)

export default ThemeProvider
