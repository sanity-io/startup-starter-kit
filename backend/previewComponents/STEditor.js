import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { BlockEditor } from 'part:@sanity/form-builder'
import blockToHTML, { h } from '@sanity/block-content-to-html'
import Button from 'part:@sanity/components/buttons/default'
import Select from 'part:@sanity/components/selects/default'
import {apiKey} from 'config:@sanity/google-api'
const _extends =
Object.assign ||
function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
const serializers = {
  marks: {
    prosody: ({ children, mark: { rate, pitch, volume } }) =>
      h(
        'prosody',
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
      h('sub', { attrs: _extends({}, alias && { alias }) }, children),
    sayAs: ({ children, mark: {interpretAs}}) =>
      h('say-as', { attrs: _extends({}, interpretAs && {'interpret-as': interpretAs})}, children),
    break: ({ children, mark: { time, strength } }) => [
      h(
        'break',
        {
          attrs: _extends({},
            time && { time: `${time}ms` },
            strength && { strength })
        },
        []
      ),
      children
    ],
    emphasis: ({ children, mark: {level} }) =>
      h('emphasis', { attrs: _extends({}, level && {level}) }, children)
  }
}

export default class SSMLBlockEditor extends Component {
  constructor() {
    super()
    this.state = {
      playing: false,
      loading: 0,
      ssmlGender: 'MALE'
    }
  }
  play = async ({ value }) => {
    const ssml = blockToHTML({ blocks: value, serializers })
    const request = {
      input: { ssml },
      // Select the language and SSML Voice Gender (optional)
      voice: { languageCode: 'en-UK', ssmlGender: this.state.ssmlGender },
      // Select the type of audio encoding
      audioConfig: { audioEncoding: 'MP3' }
    }

    // Performs the Text-to-Speech request
    const url =
      'https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=' + apiKey
    const res = await axios(url, { method: 'POST', data: request })
    const audio = new Audio("data:audio/wav;base64," + res.data.audioContent);
    audio.play()
  }
  render() {
    const { loading, playing } = this.state
    return (
      <Fragment>
        <BlockEditor
          {...this.props}
        />
        <div>
          <Button onClick={() => this.play(this.props)}>Speak text</Button>
        </div>
      </Fragment>
    )
  }
}
