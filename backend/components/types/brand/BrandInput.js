import * as React from 'react'
import Button from 'part:@sanity/components/buttons/default'
import {PatchEvent, set, setIfMissing, unset} from 'part:@sanity/form-builder/patch-event'
import {FormBuilderInput} from 'part:@sanity/form-builder'
import Fieldset from 'part:@sanity/components/fieldsets/default'
import uploadImage from '@sanity/form-builder/lib/sanity/uploads/uploadImage'
import {tap} from 'rxjs/operators'

export class BrandInput extends React.Component {
  firstFieldRef = React.createRef()

  state = {
    enterManually: false
  }

  handleFieldChange = (fieldName, patchEvent) => {
    this.props.onChange(
      patchEvent
        .prefixAll(fieldName)
        .prepend(setIfMissing({_type: this.props.type.name}))
    )
  }

  handleStartOver = () => {
    if (
      confirm('This will replace your brand with something else. Are you sure?')
    )
      this.props.onChange(PatchEvent.from(unset()))
  }

  handleExtractPalette = () => {
    this.setState({isGenerating: true})
    fetch('https://startup-name.now.sh/api/v1/names/random')
      .then(res => res.json())
      .then(result =>
        this.handleFieldChange('name', PatchEvent.from(set(result.name)))
      )
      .finally(() => {
        this.setState({isGenerating: false})
      })
  }

  focus() {
    this.firstFieldRef.current.focus()
  }

  handleSetColorScheme(colors) {
    console.log(colors)
  }

  handleUploadLogo = file => {
    const {onChange} = this.props
    uploadImage(file)
      .pipe(
        tap(console.log),
        tap(uploadEvent =>
          onChange(
            PatchEvent.from(uploadEvent.patches)
              .prepend(setIfMissing({_type: 'image'}))
              .prefixAll('logo')
          )
        )
      )
      .subscribe()
  }

  render() {
    const {value, type, level, onFocus, focusPath} = this.props

    return (
      <React.Fragment>
        {value && (
          <React.Fragment>
            Didn't get funding? Remember you can always{' '}
            <Button inverted onClick={this.handleStartOver}>
              Pivot
            </Button> and start over!
          </React.Fragment>
        )}

        <Fieldset
          level={level}
          legend={type.title}
          description={type.description}
        >
          {type.fields.map((field, i) => {
            return (
              <div style={{paddingTop: '1em'}}>
              <FormBuilderInput
                key={field.name}
                ref={i === 0 ? this.firstFieldRef : null}
                type={field.type}
                value={value && value[field.name]}
                level={level + 1}
                onFocus={onFocus}
                focusPath={focusPath}
                onSetColorScheme={this.handleSetColorScheme}
                onUploadLogo={this.handleUploadLogo}
                onChange={patchEvent => this.handleFieldChange(field.name, patchEvent)}
              />
              </div>
            )
          })}
        </Fieldset>
      </React.Fragment>
    )
  }
}
