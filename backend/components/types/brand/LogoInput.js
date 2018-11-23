import * as React from "react"
import { get, range } from "lodash"
import Fieldset from "part:@sanity/components/fieldsets/default"
import { generateLogo } from "@sanity/logo-generator"
import Button from "part:@sanity/components/buttons/default"
import AnchorButton from "part:@sanity/components/buttons/anchor"
import { FormBuilderInput, withDocument } from "part:@sanity/form-builder"
import UploadIcon from "react-icons/lib/md/cloud-upload"
import RenewIcon from "react-icons/lib/md/autorenew"

const toPointAttr = points => points.map(point => point.join(", ")).join(" ")
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min
const randomColor = () => randomNumber(0, 255)

const randomRgba = () => ({
  r: randomColor(),
  g: randomColor(),
  b: randomColor(),
  a: 1
})

const formatRgba = rgba => `rgba(${[rgba.r, rgba.g, rgba.b, rgba.a].join(",")})`

const isEmpty = value => {
  if (typeof value === "undefined" || value === null) {
    return true
  }
  for (const key in value) {
    if (key !== "_type") {
      return false
    }
  }
  return true
}

const randomPalette = () => range(4).map(randomRgba)

const DEFAULT_COLORS = randomPalette()

export const LogoInput = withDocument(
  class LogoInput extends React.Component {
    svgElementRef = React.createRef()
    fieldsetRef = React.createRef()

    state = {
      mode: null,
      palette: DEFAULT_COLORS,
      shape: generateLogo()
    }

    handleGenerateNewShape = () => {
      this.setState({ shape: generateLogo() })
    }

    handleGenerateNewPalette = () => {
      this.setState({ palette: randomPalette() })
    }

    handleCancel = () => {
      this.setState({ mode: null })
    }

    handleUploadLogo = () => {
      const serializer = new XMLSerializer()
      const svgString = serializer.serializeToString(this.svgElementRef.current)
      const file = new File([svgString], "logo.svg", {
        type: "image/svg+xml;utf8"
      })
      this.setState({ mode: "upload" })
      this.props.onUploadLogo(file)
    }

    focus() {
      this.fieldsetRef.current.focus()
    }

    renderLogoSvg() {
      const { shape, palette } = this.state

      const { document } = this.props
      const companyName = get(document, "brand.name")

      const textWidth = Math.max(100, companyName ? companyName.length * 20 : 0)
      return (
        <React.Fragment>
          <div style={{ padding: "1em 0" }}>
            <svg
              ref={this.svgElementRef}
              style={{ height: "10em" }}
              viewBox={`0 0 ${shape.width + 40 + textWidth} ${shape.height}`}
            >
              {shape.triangles.map((triangle, i) => (
                <polygon
                  key={i}
                  points={toPointAttr(triangle)}
                  fill={formatRgba(palette[i % palette.length])}
                />
              ))}
              )
              <text
                x={shape.width + 20}
                y={shape.height / 2}
                style={{ font: "bold 30px sans-serif" }}
              >
                {companyName}
              </text>
            </svg>
          </div>
          <Button color="primary" inverted onClick={this.handleUploadLogo}>
            Use this as logo
          </Button>
          <Button
            icon={RenewIcon}
            inverted
            onClick={this.handleGenerateNewShape}
          >
            New shape
          </Button>
          <Button
            icon={RenewIcon}
            inverted
            onClick={this.handleGenerateNewPalette}
          >
            New palette
          </Button>
          <Button kind="simple" onClick={this.handleCancel}>
            Cancel
          </Button>
        </React.Fragment>
      )
    }

    renderImageInput() {
      return (
        <FormBuilderInput
          {...this.props}
          type={{ ...this.props.type, title: null, inputComponent: null }}
        />
      )
    }

    render() {
      const { value, type, level, onFocus } = this.props
      const { mode } = this.state

      const overrideMode = mode === null && !isEmpty(value) ? "upload" : mode

      return (
        <Fieldset
          level={level}
          legend={type.title}
          description={type.description}
          tabIndex={0}
          onFocus={onFocus}
          ref={this.fieldsetRef}
        >
          <Button
            inverted={overrideMode !== "generate"}
            onClick={() => this.setState({ mode: "generate" })}
          >
            Generate logo
          </Button>
          <Button
            inverted={overrideMode !== "upload"}
            onClick={() => this.setState({ mode: "upload" })}
          >
            Manual upload
          </Button>

          {overrideMode === "generate" && this.renderLogoSvg()}
          {overrideMode === "upload" && this.renderImageInput()}
        </Fieldset>
      )
    }
  }
)
