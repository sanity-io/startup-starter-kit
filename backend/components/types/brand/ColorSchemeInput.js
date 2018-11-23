import * as React from "react"
import Button from "part:@sanity/components/buttons/default"
import {
  PatchEvent,
  set,
  setIfMissing,
  unset
} from "part:@sanity/form-builder/patch-event"
import { FormBuilderInput, withDocument } from "part:@sanity/form-builder"
import Fieldset from "part:@sanity/components/fieldsets/default"
import { get, uniq, compact } from "lodash"
import client from "part:@sanity/base/client"
import UUID from "@sanity/uuid"

const createColor = hex => ({
  _type: "color",
  _key: UUID(),
  alpha: 1,
  hex: hex
})

export const ColorSchemeInput = withDocument(
  class ColorSchemeInput extends React.Component {
    state = {
      enterManually: false
    }

    handleFieldChange = (fieldName, patchEvent) => {
      this.props.onChange(
        patchEvent
          .prefixAll(fieldName)
          .prepend(setIfMissing({ _type: this.props.type.name }))
      )
    }

    handleStartOver = () => {
      this.props.onChange(PatchEvent.from(unset()))
    }

    handleExtractPalette = asset => {
      const { onChange, type } = this.props

      this.setState({ isExtracting: true })

      client
        .getDocument(asset._ref)
        .then(assetDoc => assetDoc.metadata.palette)
        .then(palette =>
          Object.keys(palette).map(name => palette[name].background)
        )
        .then(colors => uniq(compact(colors)))
        .then(colors => set(colors.map(createColor), ["colors"]))
        .then(setPatch =>
          PatchEvent.from([setIfMissing({ _type: type.name }), setPatch])
        )
        .then(onChange)
        .finally(() => {
          this.setState({ isExtracting: false })
        })
    }

    focus() {}

    renderField = field => {
      const { value, type, level, onFocus, focusPath } = this.props
      const input = (
        <FormBuilderInput
          key={field.name}
          type={field.type}
          value={value && value[field.name]}
          level={level + 1}
          onFocus={onFocus}
          focusPath={focusPath}
          onChange={patchEvent =>
            this.handleFieldChange(field.name, patchEvent)
          }
        />
      )
      return input
    }

    render() {
      const { enterManually, isExtracting } = this.state
      const { value, type, level, document, focusPath } = this.props

      const brandAsset = get(document, "brand.logo.asset")
      return (
        <Fieldset
          level={level}
          legend={type.title}
          description={type.description}
        >
          {brandAsset && (
            <Button
              inverted
              loading={isExtracting}
              onClick={() => this.handleExtractPalette(brandAsset)}
            >
              Extract color scheme from logo
            </Button>
          )}
          {type.fields.map(this.renderField)}
        </Fieldset>
      )
    }
  }
)
