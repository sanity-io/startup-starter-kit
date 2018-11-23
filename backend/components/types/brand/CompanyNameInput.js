import React from "react"
import TextInput from "part:@sanity/components/textinputs/default"
import FormField from "part:@sanity/components/formfields/default"
import Button from "part:@sanity/components/buttons/default"
import Recycle from "react-icons/lib/md/autorenew"

import {
  PatchEvent,
  set,
  setIfMissing,
  unset
} from "part:@sanity/form-builder/patch-event"

export class CompanyNameInput extends React.Component {
  inputRef = React.createRef()
  state = { isGenerating: false }

  handleChange = event => {
    const value = event.currentTarget.value
    this.props.onChange(PatchEvent.from(value ? set(value) : unset()))
  }

  focus() {
    if (this.inputRef) {
      this.inputRef.current.focus()
    }
  }

  handleGenerateNewName = () => {
    this.setState({ isGenerating: true })
    fetch("https://startup-name.now.sh/api/v1/names/random")
      .then(res => res.json())
      .then(result => this.props.onChange(PatchEvent.from(set(result.name))))
      .finally(() => {
        this.setState({ isGenerating: false })
      })
  }

  render() {
    const { value, readOnly, type, markers, level, onFocus } = this.props
    const validation = markers.filter(marker => marker.type === "validation")
    const errors = validation.filter(marker => marker.level === "error")
    const { isGenerating } = this.state

    return (
      <FormField
        markers={markers}
        level={level}
        label={type.title}
        description={type.description}
      >
        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <TextInput
              customValidity={errors.length > 0 ? errors[0].item.message : ""}
              type="text"
              value={value}
              readOnly={readOnly}
              placeholder={type.placeholder}
              onChange={this.handleChange}
              onFocus={onFocus}
              ref={this.inputRef}
            />
          </div>
          <Button
            loading={isGenerating}
            inverted
            icon={Recycle}
            onClick={this.handleGenerateNewName}
          >
            New name
          </Button>
        </div>
      </FormField>
    )
  }
}
