import React, { Component, Fragment } from 'react'
import { BlockEditor } from 'part:@sanity/form-builder'
import Button from 'part:@sanity/components/buttons/default'
import Select from 'part:@sanity/components/selects/default'
import { serializers } from './serializers'
import { speakSSML } from './speakSSML'
import styles from './STEditor.css'
// Get Secret API Key

export default class SSMLBlockEditor extends Component {
  constructor() {
    super()
    this.state = {
      playing: false,
      loading: 0,
      // @TODO: Make selectable?
      ssmlGender: 'MALE',
      key: ''
    }
  }

  getKey = () =>
    client
      .fetch("*[_id == 'private.secrets'][0].googleApiKey")
      .then(key => this.setState({ key }))
      .catch(err => this.setState({ key: '' }))

  play = ({ value }) =>
    speakSSML({
      value,
      config: { ssmlGender: this.state.ssmlGender },
      serializers,
      key
    })
  componentDidMount() {
    this.getKey()
  }

  render() {
    const { loading, playing } = this.state
    return (
      <Fragment>
        <BlockEditor {...this.props} />
        <div className={styles.buttonContainer}>
          {key ? (
            <Button onClick={() => this.play(this.props)}>Speak text</Button>
          ) : (
            <a href="/desk/secrets">Add Google API key</a>
          )}
        </div>
      </Fragment>
    )
  }
}
