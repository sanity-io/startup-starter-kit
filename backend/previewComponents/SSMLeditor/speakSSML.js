import blockToHTML, { h } from "@sanity/block-content-to-html"
import axios from "axios"
import client from 'part:@sanity/base/client'


export async function speakSSML({value, config, serializers, key}) {

  const ssml = blockToHTML({ blocks: value, serializers })
  const request = {
    input: { ssml },
    // Select the language and SSML Voice Gender (optional)
    voice: { languageCode: "en-UK", ssmlGender: config.ssmlGender },
    // Select the type of audio encoding
    audioConfig: { audioEncoding: "MP3" }
  }



  // Performs the Text-to-Speech request
  const url =
    "https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=" + apiKey
  const res = await axios(url, { method: "POST", data: request })
  const audio = new Audio("data:audio/wav;base64," + res.data.audioContent)
  audio.play()
}
