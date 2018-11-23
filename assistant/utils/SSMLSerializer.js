const { h } = require('@sanity/block-content-to-html')
const _extends = require('./_extends')

const SSMLSerializer = {
  marks: {
    prosody: ({ children, mark: { rate, pitch, volume } }) =>
      h(
        "prosody",
        {
          attrs: _extends(
            {},
            rate && { rate: rate },
            pitch && { pitch: pitch },
            volume && { volume: volume }
          )
        },
        children
      ),
    sub: ({ children, mark: { alias } }) =>
      h("sub", { attrs: _extends({}, alias && { alias }) }, children),
    sayAs: ({ children, mark: { interpretAs } }) =>
      h(
        "say-as",
        { attrs: _extends({}, interpretAs && { "interpret-as": interpretAs }) },
        children
      ),
    break: ({ children, mark: { time, strength } }) => [
      h(
        "break",
        {
          attrs: _extends(
            {},
            time && { time: `${time}ms` },
            strength && { strength }
          )
        },
        []
      ),
      children
    ],
    emphasis: ({ children, mark: { level } }) =>
      h("emphasis", { attrs: _extends({}, level && { level }) }, children)
  }
}

module.exports = SSMLSerializer
